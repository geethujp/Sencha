Ext.define('C.view.main.ViewModel.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    requires: [
        'C.model.Entry'
    ],

    data: {
        name: 'Manage equipments',
        gridTitle: 'Equipment List',
        formTitle: 'Add Equipment',
        infoTitle: 'Information',
        addBtnText: 'Add new entry',
        delBtnText: 'Delete entry',
        infoText: '<h2>Usage</h2>' +
            'In order to edit a record, click on a grid row. ' +
            'Then edit the record within the form. ' +
            'If you press Cancel your changes will be lost.' +
            'To add new record, click "Add new entry button" and do the same as with records to be updated.',
        currentEntry: null
    },

    stores: {
        entries: {
            model: 'Entry',
            data: [{
                id: 3,
                eqname: 'ECG MACHINES',
                quantity: '2',
                description: 'The Seca range of ECG machines come with a 3 year manufacturers warranty.',
                date: '2015-10-10',
                rate: '50'
            }, {
                id: 2,
                eqname: 'BLOOD PRESSURE MONITORS',
                quantity: '12',
                description: 'Promed now offers a range of BP monitors, both automatic and aneroid.',
                date: '2015-10-10',
                rate: '100'
            }, {
                id: 1,
                eqname: 'SPIROMETRY AND NEBULISERS',
                quantity: '300',
                description: 'Promed has recently expended our range to include the custo spiro mobile spiromter (shown) which is part for the Promed Advance Performance package, and we also recently introduced a range of new nebulisers from Clement Clarke.',
                date: '2012-10-01',
                rate: '150'
            }]
        }
    }

});
