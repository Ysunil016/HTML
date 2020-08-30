//ej.base.enableRipple(true);
/**
 * MultiSelect Diacritics functionality Sample
 */

    // initialize MultiSelect component
    var dropdownObj = new ej.dropdowns.MultiSelect({
        //set the local data to dataSource property
        dataSource: ["Sunil","Yadav"],
        // set the placeholder to MultiSelect input element
        placeholder: 'e.g: gul',
        // enabled the ignoreAccent property for ignore the diacritics
        ignoreAccent: true,
        // set true for enable the filtering support.
        allowFiltering: true
    });
    dropdownObj.appendTo('#list');

