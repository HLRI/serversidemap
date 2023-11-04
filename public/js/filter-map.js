class FilterMap {
    constructor() {
        this.queryStrings = new URLSearchParams(location.search);
        this.params = (new URL(document.location)).searchParams;
    }

    // queries is the defined queries than needs to be run
    // key is the single filter name
    // dataset is the min and max value of the single filter
    // querystring off means that there is no change on filters and all queries must be fetched from the url parameters
    // querystring does not have anything to do with the url parameters

    set(queries, salestype, key = '', dataset = [], querystring = 'off') {

        if (querystring == 'on') {
            var queryStrings = this.queryStrings;
            queryStrings.set(`${key}` + '_from', parseFloat(dataset[0]));
            queryStrings.set(`${key}` + '_to', parseFloat(dataset[1]));
            window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
        }

        if (salestype.toLowerCase() == 'assignment') {
            return this.Assignment(key, queries, querystring, dataset);
        } else if (salestype.toLowerCase() == 'preconstruction') {
            return this.Preconstruction(key, queries, querystring, dataset);
        } else if (salestype.toLowerCase() == 'comingsoon') {
            return this.ComingSoon(key, queries, querystring, dataset);
        } else if (salestype.toLowerCase() == 'resale') {
            return this.Resale(key, queries, querystring, dataset);
        } else if (salestype.toLowerCase() == 'soldout') {
            return this.SoldOut(key, queries, querystring, dataset);
        }
    }

    // on each functions these 4 parameters meaning is:
    // key (the filter name)
    // defined queries to run
    // querystring 'on' means that there is an exceptional query that needs to be appended on main url parameters query from the defined filter
    // dataset (exceptional min and max for the single filter to run the query)
    Assignment(key, queries, querystring, dataset) {

        delete queries.max_price;
        delete queries.max_bath;
        delete queries.max_size;
        delete queries.max_bed;

        var data = localforage.getItem("mapInfo");
        var Q = new jsonQ(data);
        result = Q.from('info').where('sales_type', '=', 'Assignment');
        var inputs = [];
        for (let index in queries) {
            if (querystring == 'on') {
                if (index.includes(key)) {
                    inputs.push([index, dataset[0] != null ? parseFloat(dataset[0]) : 0, dataset[1] != null ? parseFloat(dataset[1]) : 999999999999999999]);
                } else {
                    inputs.push([index, this.params.get(`${queries[index]}_from`) != null ? this.params.get(`${queries[index]}_from`) : 0, this.params.get(`${queries[index]}_to`) != null ? this.params.get(`${queries[index]}_to`) : 999999999999999999]);
                }
            } else {
                inputs.push([index, this.params.get(`${queries[index]}_from`) != null ? this.params.get(`${queries[index]}_from`) : 0, this.params.get(`${queries[index]}_to`) != null ? this.params.get(`${queries[index]}_to`) : 999999999999999999]);
            }
        };

        inputs.forEach(function (item, i) {
            result.where(item[0], '>=', parseFloat(item[1])).where(item[0], '<=', parseFloat(item[2]));
        });

        return result.fetch();

    }

    Preconstruction(key, queries, querystring, dataset) {

        delete queries.comission_by_percent;
        delete queries.comission_by_flatfee;
        delete queries.occupancy;

        queries.max_price = "price_to";
        queries.max_bath = "bath_to";
        queries.max_size = "size_to";
        queries.max_bed = "bed_to";


        var data = localforage.getItem("mapInfo");
        var Q = new jsonQ(data);
        result = Q.from('info').where('sales_type', '=', 'Preconstruction');
        var inputs = [];
        for (let index in queries) {
            if (querystring == 'on') {
                if (index.includes(key)) {
                    if (queries[index].includes('from')) {
                        inputs.push([index, dataset[0] != null ? parseFloat(dataset[0]) : 0]);
                    } else if (queries[index].includes('to')) {
                        inputs.push([index, dataset[1] != null ? parseFloat(dataset[1]) : 999999999999999999]);
                    } else {
                        inputs.push([index, dataset[0] != null ? parseFloat(dataset[0]) : 0, dataset[1] != null ? parseFloat(dataset[1]) : 999999999999999999]);
                    }
                } else {
                    if (queries[index].includes('from')) {
                        inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 0]);
                    } else if (queries[index].includes('to')) {
                        inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 999999999999999999]);
                    } else {
                        inputs.push([index, this.params.get(`${queries[index]}_from`) != null ? this.params.get(`${queries[index]}_from`) : 0, this.params.get(`${queries[index]}_to`) != null ? this.params.get(`${queries[index]}_to`) : 999999999999999999]);
                    }
                }
            } else {
                if (queries[index].includes('from')) {
                    inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 0]);
                } else if (queries[index].includes('to')) {
                    inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 999999999999999999]);
                } else {
                    inputs.push([index, this.params.get(`${queries[index]}_from`) != null ? this.params.get(`${queries[index]}_from`) : 0, this.params.get(`${queries[index]}_to`) != null ? this.params.get(`${queries[index]}_to`) : 999999999999999999]);
                }
            }
        };

        // inputs.forEach(function (item, i) {
        //     if (item[0].includes('min')) {
        //         result.where(item[0], '>=', parseFloat(item[1]));
        //     } else if (item[0].includes('max')) {
        //         result.where(item[0], '<=', parseFloat(item[1]));
        //     } else {
        //         result.where(item[0], '>=', parseFloat(item[1])).where(item[0], '<=', parseFloat(item[2]));
        //     }
        // });
        // return result.fetch();


        var mydata = new SBFP(result.fetch());

        var data = [];
        var data2 = [];
        inputs.forEach(function (item, i) {
            if (item[0].includes('price')) {
                data[item[0]] = item[1];
            }
        });
        data2.push({ 'price': data });
        data = [];
        inputs.forEach(function (item, i) {
            if (item[0].includes('bath')) {
                data[item[0]] = item[1];
            }
        });
        data2.push({ 'bath': data });
        data = [];
        inputs.forEach(function (item, i) {
            if (item[0].includes('bed')) {
                data[item[0]] = item[1];
            }
        });
        data2.push({ 'bed': data });
        data = [];
        inputs.forEach(function (item, i) {
            if (item[0].includes('size')) {
                data[item[0]] = item[1];
            }
        });
        data2.push({ 'size': data });

        var dep1 = mydata.whereFp('price', data2[0]['price']['min_price'], data2[0]['price']['max_price']);
        var dep2 = mydata.whereFp('size', data2[3]['size']['min_size'], data2[3]['size']['max_size']);
        var dep3 = mydata.whereFp('bed', data2[2]['bed']['min_bed'], data2[2]['bed']['max_bed']);
        var dep4 = mydata.whereFp('bath', data2[1]['bath']['min_bath'], data2[1]['bath']['max_bath']);
        var dept;

        if (!dep1 && !dep2 && !dep3 && !dep4) {
            return result.fetch();
        } else if (!dep1 && !dep2 && !dep3) {
            if (dep4 != '') {
                dept = dep4;
            } else {
                return [];
            }
        } else if (!dep2 && !dep3 && !dep4) {
            if (dep1 != '') {
                dept = dep1;
            } else {
                return [];
            }
        } else if (!dep3 && !dep4 && !dep1) {
            if (dep2 != '') {
                dept = dep2;
            } else {
                return [];
            }
        } else if (!dep1 && !dep4 && !dep2) {
            if (dep3 != '') {
                dept = dep3;
            } else {
                return [];
            }
        } else if (!dep1 && !dep2) {
            if (dep3 != '' && dep4 != '') {
                dept = dep3.filter(obj1 => dep4.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep3.concat(dep4);
            } else {
                return [];
            }
        } else if (!dep1 && !dep3) {
            if (dep2 != '' && dep4 != '') {
                dept = dep2.filter(obj1 => dep4.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep2.concat(dep4);
            } else {
                return [];
            }
        } else if (!dep1 && !dep4) {
            if (dep2 != '' && dep3 != '') {
                dept = dep2.filter(obj1 => dep3.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep2.concat(dep3);
            } else {
                return [];
            }
        } else if (!dep2 && !dep3) {
            if (dep1 != '' && dep4 != '') {
                dept = dep1.filter(obj1 => dep4.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep1.concat(dep4);
            } else {
                return [];
            }
        } else if (!dep2 && !dep4) {
            if (dep1 != '' && dep3 != '') {
                dept = dep1.filter(obj1 => dep3.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep1.concat(dep3);
            } else {
                return [];
            }
        } else if (!dep3 && !dep4) {
            if (dep1 != '' && dep2 != '') {
                dept = dep1.filter(obj1 => dep2.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep1.concat(dep2);
            } else {
                return [];
            }
        } else if (!dep1) {
            if (dep2 != '' && dep3 != '' && dep4 != '') {
                dept = dep2.filter(obj1 => {
                    return dep3.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep4.some(obj3 => obj3.post_id === obj1.post_id);
                });
                // dept = dep2.concat(dep3).concat(dep4);
            } else {
                return [];
            }
        } else if (!dep2) {
            if (dep3 != '' && dep4 != '' && dep1 != '') {
                dept = dep3.filter(obj1 => {
                    return dep4.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep1.some(obj3 => obj3.post_id === obj1.post_id);
                });
                // dept = dep3.concat(dep4).concat(dep1);
            } else {
                return [];
            }
        } else if (!dep3) {
            if (dep4 != '' && dep2 != '' && dep1 != '') {
                dept = dep4.filter(obj1 => {
                    return dep2.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep1.some(obj3 => obj3.post_id === obj1.post_id);
                });
                // dept = dep4.concat(dep2).concat(dep1);
            } else {
                return [];
            }
        } else if (!dep4) {
            if (dep1 != '' && dep2 != '' && dep3 != '') {
                dept = dep1.filter(obj1 => {
                    return dep2.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep3.some(obj3 => obj3.post_id === obj1.post_id);
                });
                // dept = dep1.concat(dep2).concat(dep3);
            } else {
                return [];
            }
        } else {
            if (dep1 != '' && dep2 != '' && dep3 != '' && dep4 != '') {
                dept = dep1.filter(obj1 => {
                    return dep2.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep3.some(obj3 => obj3.post_id === obj1.post_id) &&
                        dep4.some(obj4 => obj4.post_id === obj1.post_id);
                });
                // dept = dep1.concat(dep2).concat(dep3).concat(dep4);
            } else {
                return [];
            }
        }


        return removeDuplicates(dept);

    }

    ComingSoon(key, queries, querystring, dataset) {

        var data = localforage.getItem("mapInfo");
        var Q = new jsonQ(data);
        result = Q.from('info').where('sales_type', '=', 'coming_soon');

        var inputs = [];
        for (let index in queries) {
            if (querystring == 'on') {
                if (index.includes(key)) {
                    if (queries[index].includes('from')) {
                        inputs.push([index, dataset[0] != null ? parseFloat(dataset[0]) : 0]);
                    } else if (queries[index].includes('to')) {
                        inputs.push([index, dataset[1] != null ? parseFloat(dataset[1]) : 999999999999999999]);
                    } else {
                        inputs.push([index, dataset[0] != null ? parseFloat(dataset[0]) : 0, dataset[1] != null ? parseFloat(dataset[1]) : 999999999999999999]);
                    }
                } else {
                    if (queries[index].includes('from')) {
                        inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 0]);
                    } else if (queries[index].includes('to')) {
                        inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 999999999999999999]);
                    } else {
                        inputs.push([index, this.params.get(`${queries[index]}_from`) != null ? this.params.get(`${queries[index]}_from`) : 0, this.params.get(`${queries[index]}_to`) != null ? this.params.get(`${queries[index]}_to`) : 999999999999999999]);
                    }
                }
            } else {
                if (queries[index].includes('from')) {
                    inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 0]);
                } else if (queries[index].includes('to')) {
                    inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 999999999999999999]);
                } else {
                    inputs.push([index, this.params.get(`${queries[index]}_from`) != null ? this.params.get(`${queries[index]}_from`) : 0, this.params.get(`${queries[index]}_to`) != null ? this.params.get(`${queries[index]}_to`) : 999999999999999999]);
                }
            }
        };

        // inputs.forEach(function (item, i) {
        //     if (item[0].includes('min')) {
        //         result.where(item[0], '>=', parseFloat(item[1]));
        //     } else if (item[0].includes('max')) {
        //         result.where(item[0], '<=', parseFloat(item[1]));
        //     } else {
        //         result.where(item[0], '>=', parseFloat(item[1])).where(item[0], '<=', parseFloat(item[2]));
        //     }
        // });

        // return result.fetch();



        var mydata = new SBFP(result.fetch());

        var data = [];
        var data2 = [];
        inputs.forEach(function (item, i) {
            if (item[0].includes('price')) {
                data[item[0]] = item[1];
            }
        });
        data2.push({ 'price': data });
        data = [];
        inputs.forEach(function (item, i) {
            if (item[0].includes('bath')) {
                data[item[0]] = item[1];
            }
        });
        data2.push({ 'bath': data });
        data = [];
        inputs.forEach(function (item, i) {
            if (item[0].includes('bed')) {
                data[item[0]] = item[1];
            }
        });
        data2.push({ 'bed': data });
        data = [];
        inputs.forEach(function (item, i) {
            if (item[0].includes('size')) {
                data[item[0]] = item[1];
            }
        });
        data2.push({ 'size': data });

        var dep1 = mydata.whereFp('price', data2[0]['price']['min_price'], data2[0]['price']['max_price']);
        var dep2 = mydata.whereFp('size', data2[3]['size']['min_size'], data2[3]['size']['max_size']);
        var dep3 = mydata.whereFp('bed', data2[2]['bed']['min_bed'], data2[2]['bed']['max_bed']);
        var dep4 = mydata.whereFp('bath', data2[1]['bath']['min_bath'], data2[1]['bath']['max_bath']);
        var dept;

        if (!dep1 && !dep2 && !dep3 && !dep4) {
            return result.fetch();
        } else if (!dep1 && !dep2 && !dep3) {
            if (dep4 != '') {
                dept = dep4;
            } else {
                return [];
            }
        } else if (!dep2 && !dep3 && !dep4) {
            if (dep1 != '') {
                dept = dep1;
            } else {
                return [];
            }
        } else if (!dep3 && !dep4 && !dep1) {
            if (dep2 != '') {
                dept = dep2;
            } else {
                return [];
            }
        } else if (!dep1 && !dep4 && !dep2) {
            if (dep3 != '') {
                dept = dep3;
            } else {
                return [];
            }
        } else if (!dep1 && !dep2) {
            if (dep3 != '' && dep4 != '') {
                dept = dep3.filter(obj1 => dep4.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep3.concat(dep4);
            } else {
                return [];
            }
        } else if (!dep1 && !dep3) {
            if (dep2 != '' && dep4 != '') {
                dept = dep2.filter(obj1 => dep4.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep2.concat(dep4);
            } else {
                return [];
            }
        } else if (!dep1 && !dep4) {
            if (dep2 != '' && dep3 != '') {
                dept = dep2.filter(obj1 => dep3.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep2.concat(dep3);
            } else {
                return [];
            }
        } else if (!dep2 && !dep3) {
            if (dep1 != '' && dep4 != '') {
                dept = dep1.filter(obj1 => dep4.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep1.concat(dep4);
            } else {
                return [];
            }
        } else if (!dep2 && !dep4) {
            if (dep1 != '' && dep3 != '') {
                dept = dep1.filter(obj1 => dep3.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep1.concat(dep3);
            } else {
                return [];
            }
        } else if (!dep3 && !dep4) {
            if (dep1 != '' && dep2 != '') {
                dept = dep1.filter(obj1 => dep2.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep1.concat(dep2);
            } else {
                return [];
            }
        } else if (!dep1) {
            if (dep2 != '' && dep3 != '' && dep4 != '') {
                dept = dep2.filter(obj1 => {
                    return dep3.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep4.some(obj3 => obj3.post_id === obj1.post_id);
                });
                // dept = dep2.concat(dep3).concat(dep4);
            } else {
                return [];
            }
        } else if (!dep2) {
            if (dep3 != '' && dep4 != '' && dep1 != '') {
                dept = dep3.filter(obj1 => {
                    return dep4.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep1.some(obj3 => obj3.post_id === obj1.post_id);
                });
                // dept = dep3.concat(dep4).concat(dep1);
            } else {
                return [];
            }
        } else if (!dep3) {
            if (dep4 != '' && dep2 != '' && dep1 != '') {
                dept = dep4.filter(obj1 => {
                    return dep2.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep1.some(obj3 => obj3.post_id === obj1.post_id);
                });
                // dept = dep4.concat(dep2).concat(dep1);
            } else {
                return [];
            }
        } else if (!dep4) {
            if (dep1 != '' && dep2 != '' && dep3 != '') {
                dept = dep1.filter(obj1 => {
                    return dep2.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep3.some(obj3 => obj3.post_id === obj1.post_id);
                });
                // dept = dep1.concat(dep2).concat(dep3);
            } else {
                return [];
            }
        } else {
            if (dep1 != '' && dep2 != '' && dep3 != '' && dep4 != '') {
                dept = dep1.filter(obj1 => {
                    return dep2.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep3.some(obj3 => obj3.post_id === obj1.post_id) &&
                        dep4.some(obj4 => obj4.post_id === obj1.post_id);
                });
                // dept = dep1.concat(dep2).concat(dep3).concat(dep4);
            } else {
                return [];
            }
        }

        return removeDuplicates(dept);

    }

    Resale(key, queries, querystring, dataset) {

        delete queries.max_price;
        delete queries.max_bath;
        delete queries.max_size;
        delete queries.max_bed;
        queries.comission_by_percent = "percent";
        queries.comission_by_flatfee = "flatfee";

        var data = localforage.getItem("mapInfo");
        var Q = new jsonQ(data);
        result = Q.from('info').where('sales_type', '=', 'Resale');

        var inputs = [];
        for (let index in queries) {
            if (querystring == 'on') {
                if (index.includes(key)) {
                    if (queries[index].includes('from')) {
                        inputs.push([index, dataset[0] != null ? parseFloat(dataset[0]) : 0]);
                    } else if (queries[index].includes('to')) {
                        inputs.push([index, dataset[1] != null ? parseFloat(dataset[1]) : 999999999999999999]);
                    } else {
                        inputs.push([index, dataset[0] != null ? parseFloat(dataset[0]) : 0, dataset[1] != null ? parseFloat(dataset[1]) : 999999999999999999]);
                    }
                } else {
                    if (queries[index].includes('from')) {
                        inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 0]);
                    } else if (queries[index].includes('to')) {
                        inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 999999999999999999]);
                    } else {
                        inputs.push([index, this.params.get(`${queries[index]}_from`) != null ? this.params.get(`${queries[index]}_from`) : 0, this.params.get(`${queries[index]}_to`) != null ? this.params.get(`${queries[index]}_to`) : 999999999999999999]);
                    }
                }
            } else {
                if (queries[index].includes('from')) {
                    inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 0]);
                } else if (queries[index].includes('to')) {
                    inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 999999999999999999]);
                } else {
                    inputs.push([index, this.params.get(`${queries[index]}_from`) != null ? this.params.get(`${queries[index]}_from`) : 0, this.params.get(`${queries[index]}_to`) != null ? this.params.get(`${queries[index]}_to`) : 999999999999999999]);
                }
            }
        };

        inputs.forEach(function (item, i) {
            if (item[0].includes('min')) {
                result.where(item[0], '>=', parseFloat(item[1]));
            } else if (item[0].includes('max')) {
                result.where(item[0], '<=', parseFloat(item[1]));
            } else {
                result.where(item[0], '>=', parseFloat(item[1])).where(item[0], '<=', parseFloat(item[2]));
            }
        });

        return result.fetch();
    }

    SoldOut(key, queries, querystring, dataset) {

        delete queries.comission_by_percent;
        delete queries.comission_by_flatfee;

        // queries.occupancy = "occupancy";
        queries.max_price = "price_to";
        queries.max_bath = "bath_to";
        queries.max_size = "size_to";
        queries.max_bed = "bed_to";

        var data = localforage.getItem("mapInfo");
        var Q = new jsonQ(data);
        result = Q.from('info').where('sales_type', '=', 'SoldOut');

        var inputs = [];
        for (let index in queries) {
            if (querystring == 'on') {
                if (index.includes(key)) {
                    if (queries[index].includes('from')) {
                        inputs.push([index, dataset[0] != null ? parseFloat(dataset[0]) : 0]);
                    } else if (queries[index].includes('to')) {
                        inputs.push([index, dataset[1] != null ? parseFloat(dataset[1]) : 999999999999999999]);
                    } else {
                        inputs.push([index, dataset[0] != null ? parseFloat(dataset[0]) : 0, dataset[1] != null ? parseFloat(dataset[1]) : 999999999999999999]);
                    }
                } else {
                    if (queries[index].includes('from')) {
                        inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 0]);
                    } else if (queries[index].includes('to')) {
                        inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 999999999999999999]);
                    } else {
                        inputs.push([index, this.params.get(`${queries[index]}_from`) != null ? this.params.get(`${queries[index]}_from`) : 0, this.params.get(`${queries[index]}_to`) != null ? this.params.get(`${queries[index]}_to`) : 999999999999999999]);
                    }
                }
            } else {
                if (queries[index].includes('from')) {
                    inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 0]);
                } else if (queries[index].includes('to')) {
                    inputs.push([index, this.params.get(`${queries[index]}`) != null ? this.params.get(`${queries[index]}`) : 999999999999999999]);
                } else {
                    inputs.push([index, this.params.get(`${queries[index]}_from`) != null ? this.params.get(`${queries[index]}_from`) : 0, this.params.get(`${queries[index]}_to`) != null ? this.params.get(`${queries[index]}_to`) : 999999999999999999]);
                }
            }
        };

        // inputs.forEach(function (item, i) {
        //     if (item[0].includes('min')) {
        //         result.where(item[0], '>=', parseFloat(item[1]));
        //     } else if (item[0].includes('max')) {
        //         result.where(item[0], '<=', parseFloat(item[1]));
        //     } else {
        //         result.where(item[0], '>=', parseFloat(item[1])).where(item[0], '<=', parseFloat(item[2]));
        //     }
        // });


        var mydata = new SBFP(result.fetch());

        var data = [];
        var data2 = [];
        inputs.forEach(function (item, i) {
            if (item[0].includes('price')) {
                data[item[0]] = item[1];
            }
        });
        data2.push({ 'price': data });
        data = [];
        inputs.forEach(function (item, i) {
            if (item[0].includes('bath')) {
                data[item[0]] = item[1];
            }
        });
        data2.push({ 'bath': data });
        data = [];
        inputs.forEach(function (item, i) {
            if (item[0].includes('bed')) {
                data[item[0]] = item[1];
            }
        });
        data2.push({ 'bed': data });
        data = [];
        inputs.forEach(function (item, i) {
            if (item[0].includes('size')) {
                data[item[0]] = item[1];
            }
        });
        data2.push({ 'size': data });

        var dep1 = mydata.whereFp('price', data2[0]['price']['min_price'], data2[0]['price']['max_price']);
        var dep2 = mydata.whereFp('size', data2[3]['size']['min_size'], data2[3]['size']['max_size']);
        var dep3 = mydata.whereFp('bed', data2[2]['bed']['min_bed'], data2[2]['bed']['max_bed']);
        var dep4 = mydata.whereFp('bath', data2[1]['bath']['min_bath'], data2[1]['bath']['max_bath']);
        var dept;

        if (!dep1 && !dep2 && !dep3 && !dep4) {
            return result.fetch();
        } else if (!dep1 && !dep2 && !dep3) {
            if (dep4 != '') {
                dept = dep4;
            } else {
                return [];
            }
        } else if (!dep2 && !dep3 && !dep4) {
            if (dep1 != '') {
                dept = dep1;
            } else {
                return [];
            }
        } else if (!dep3 && !dep4 && !dep1) {
            if (dep2 != '') {
                dept = dep2;
            } else {
                return [];
            }
        } else if (!dep1 && !dep4 && !dep2) {
            if (dep3 != '') {
                dept = dep3;
            } else {
                return [];
            }
        } else if (!dep1 && !dep2) {
            if (dep3 != '' && dep4 != '') {
                dept = dep3.filter(obj1 => dep4.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep3.concat(dep4);
            } else {
                return [];
            }
        } else if (!dep1 && !dep3) {
            if (dep2 != '' && dep4 != '') {
                dept = dep2.filter(obj1 => dep4.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep2.concat(dep4);
            } else {
                return [];
            }
        } else if (!dep1 && !dep4) {
            if (dep2 != '' && dep3 != '') {
                dept = dep2.filter(obj1 => dep3.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep2.concat(dep3);
            } else {
                return [];
            }
        } else if (!dep2 && !dep3) {
            if (dep1 != '' && dep4 != '') {
                dept = dep1.filter(obj1 => dep4.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep1.concat(dep4);
            } else {
                return [];
            }
        } else if (!dep2 && !dep4) {
            if (dep1 != '' && dep3 != '') {
                dept = dep1.filter(obj1 => dep3.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep1.concat(dep3);
            } else {
                return [];
            }
        } else if (!dep3 && !dep4) {
            if (dep1 != '' && dep2 != '') {
                dept = dep1.filter(obj1 => dep2.some(obj2 => obj2.post_id === obj1.post_id));
                // dept = dep1.concat(dep2);
            } else {
                return [];
            }
        } else if (!dep1) {
            if (dep2 != '' && dep3 != '' && dep4 != '') {
                dept = dep2.filter(obj1 => {
                    return dep3.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep4.some(obj3 => obj3.post_id === obj1.post_id);
                });
                // dept = dep2.concat(dep3).concat(dep4);
            } else {
                return [];
            }
        } else if (!dep2) {
            if (dep3 != '' && dep4 != '' && dep1 != '') {
                dept = dep3.filter(obj1 => {
                    return dep4.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep1.some(obj3 => obj3.post_id === obj1.post_id);
                });
                // dept = dep3.concat(dep4).concat(dep1);
            } else {
                return [];
            }
        } else if (!dep3) {
            if (dep4 != '' && dep2 != '' && dep1 != '') {
                dept = dep4.filter(obj1 => {
                    return dep2.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep1.some(obj3 => obj3.post_id === obj1.post_id);
                });
                // dept = dep4.concat(dep2).concat(dep1);
            } else {
                return [];
            }
        } else if (!dep4) {
            if (dep1 != '' && dep2 != '' && dep3 != '') {
                dept = dep1.filter(obj1 => {
                    return dep2.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep3.some(obj3 => obj3.post_id === obj1.post_id);
                });
                // dept = dep1.concat(dep2).concat(dep3);
            } else {
                return [];
            }
        } else {
            if (dep1 != '' && dep2 != '' && dep3 != '' && dep4 != '') {
                dept = dep1.filter(obj1 => {
                    return dep2.some(obj2 => obj2.post_id === obj1.post_id) &&
                        dep3.some(obj3 => obj3.post_id === obj1.post_id) &&
                        dep4.some(obj4 => obj4.post_id === obj1.post_id);
                });
                // dept = dep1.concat(dep2).concat(dep3).concat(dep4);
            } else {
                return [];
            }
        }

        return removeDuplicates(dept);

    }

}