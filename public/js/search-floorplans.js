class SBFP {
    constructor(customData) {
        this.data = localforage.getItem("mapInfo");
        this.result = localforage.getItem("result");
        this.customdata = customData;
    }
    whereFp(key, min, max, op = null) {
        if (min > 0 && max != 999999999999999999) {
            var newData = [];
            var result = this.customdata;
            $.each(result, function (index, item) {
                $.each(item.floorplans, function (i, floor) {
                    if (floor['min_' + key] >= min && floor['max_' + key] <= max) {
                        newData.push(item);
                        return false;
                    }
                });
            });
        } else {
            return false;
        }
        return newData;
    }
    whereCFp(key, op = null, day, fee) {
        day == null ? day = op : day = day;
        var newData = [];
        var percents = 0;
        Q = new jsonQ(this.data);
        var result = Q.from('info').fetch();
        $.each(result, function (index, item) {
            $.each(item.floorplans, function (i, floor) {
                $.each(floor[key], function (i, ck) {
                    switch (op) {
                        case '=':
                            if (ck['day'] == day) {
                                percents += parseFloat(ck['percent']);
                                return false;
                            }
                            break;
                        case '<=':
                            if (ck['day'] <= day) {
                                percents += parseFloat(ck['percent']);
                                return false;
                            }
                            break;
                        case '>=':
                            if (ck['day'] >= day) {
                                percents += parseFloat(ck['percent']);
                                return false;
                            }
                            break;
                        case '>':
                            if (ck['day'] > day) {
                                percents += parseFloat(ck['percent']);
                                return false;
                            }
                            break;
                        case '<':
                            if (ck['day'] < day) {
                                percents += parseFloat(ck['percent']);
                                return false;
                            }
                            break;
                        default:
                            if (ck['day'] == day) {
                                percents += parseFloat(ck['percent']);
                                return false;
                            }
                            break;
                    }
                });

                var compare = parseFloat(percents) * parseFloat(floor['price']);
                if (compare <= fee) {
                    newData.push(item);
                }
            });
        });

        return [...new Set(newData)];
    }
    whereContains(key, value) {
        var newData = [];
        Q = new jsonQ(this.result);
        var result = Q.from('info').fetch();
        $.each(result, function (index, item) {
            $.each(item[key], function (i, term) {
                if (term == value) {
                    newData.push(item);
                }
            });
        });
        return newData;
    }
}