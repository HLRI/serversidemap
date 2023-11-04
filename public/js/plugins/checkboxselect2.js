function AddItemInSelect2MultiCheckBoxObj(id, IsChecked, Select2MultiCheckBoxObj) {
    if (Select2MultiCheckBoxObj.length > 0) {
        let index = Select2MultiCheckBoxObj.findIndex(x => x.id == id);
        if (index > -1) {
            Select2MultiCheckBoxObj[index]["IsChecked"] = IsChecked;
        }
        else {
            Select2MultiCheckBoxObj.push({ "id": id, "IsChecked": IsChecked });
        }
    }
    else {
        Select2MultiCheckBoxObj.push({ "id": id, "IsChecked": IsChecked });
    }
}
function IsCheckedAllOption(trueOrFalse, Select2MultiCheckBoxObj) {
    $.map($('#' + id_selectElement + ' option'), function (option) {
        AddItemInSelect2MultiCheckBoxObj(option.value, trueOrFalse, Select2MultiCheckBoxObj);
    });
    $('#' + id_selectElement + " > option").not(':first').prop("selected", trueOrFalse); //This will select all options and adds in Select2
    $("#" + id_selectElement).trigger("change");//This will effect the changes
    $(".select2-results__option").not(':first').attr("aria-selected", trueOrFalse); //This will make grey color of selected options

    $("input[id^='" + staticWordInID + "']").prop("checked", trueOrFalse);
}
function changeSelect2ToCheckBox(Select2MultiCheckBoxObj, id_selectElement, staticWordInID, cplaceholder) {
    $.map($('#' + id_selectElement + ' option'), function (option) {
        AddItemInSelect2MultiCheckBoxObj(option.value, false, Select2MultiCheckBoxObj);
    });


    // $.map($('#' + id_selectElement +' optgroup'), function (option) {
    //     $.map($(option).find('option'), function (option) {
    //         AddItemInSelect2MultiCheckBoxObj(option.value, false, Select2MultiCheckBoxObj);
    //     });
    // });

    function formatResult(state) {
        if (Select2MultiCheckBoxObj.length > 0) {
            var stateId = staticWordInID + state.id;
            let index = Select2MultiCheckBoxObj.findIndex(x => x.id == state.id);

            if(state.children != null){
                var checkbox = $('<div class="title-select">'+state.text+'</div>');
                return checkbox;
            }

            if (index > -1) {
                var checkbox = $('<div class="checkbox fsl"><input class="select2Checkbox ' + staticWordInID + '" id="' + stateId + '" type="checkbox" ' + (Select2MultiCheckBoxObj[index]["IsChecked"] ? 'checked' : '') +
                    '><label for="checkbox' + stateId + '">' + state.text + '<span class="color-sign-salestype" id="' + 'color_sign' + stateId + '"></span></label></div>', { id: stateId });
                return checkbox;
            }
        }
    }



    let optionSelect2 = {
        templateResult: formatResult,
        closeOnSelect: false,
        width: '100%',
        placeholder: cplaceholder,

    };

    let $select2 = $("#" + id_selectElement).select2(optionSelect2);

    $select2.on("select2:select", function (event) {
        $("#" + staticWordInID + event.params.data.id).prop("checked", true);
        AddItemInSelect2MultiCheckBoxObj(event.params.data.id, true, Select2MultiCheckBoxObj);
        //If all options are slected then selectAll option would be also selected.
        if (Select2MultiCheckBoxObj.filter(x => x.IsChecked === false).length === 1) {
            AddItemInSelect2MultiCheckBoxObj(0, true, Select2MultiCheckBoxObj);
            $("#" + staticWordInID + "0").prop("checked", true);
        }
    });

    $select2.on("select2:unselect", function (event) {
        $("#" + staticWordInID + "0").prop("checked", false);
        AddItemInSelect2MultiCheckBoxObj(0, false, Select2MultiCheckBoxObj);
        $("#" + staticWordInID + event.params.data.id).prop("checked", false);
        AddItemInSelect2MultiCheckBoxObj(event.params.data.id, false, Select2MultiCheckBoxObj);
    });

    $(document).on("click", "#" + staticWordInID + "0", function () {
        var b = $("#" + staticWordInID + "0").is(':checked');

        IsCheckedAllOption(b, Select2MultiCheckBoxObj);
    });

    $(document).on("click", "." + staticWordInID, function (event) {
        let selector = "#" + this.id;
        let isChecked = Select2MultiCheckBoxObj[Select2MultiCheckBoxObj.findIndex(x => x.id == this.id.replaceAll(staticWordInID, ''))]['IsChecked'];
        $(selector).prop("checked", isChecked);
    });

};