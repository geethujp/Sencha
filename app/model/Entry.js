Ext.define('C.model.Entry', {
    extend: 'Ext.data.Model',
    idProperty: "id",
    schema: {
        namespace: "C.model"
    },
    identifier: {
        type: 'sequential',
        seed: 4
    },
    fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'eqname',
            type: 'auto'
        }, {
            name: 'quantity',
            type: 'auto'
        }, {
            name: 'description',
            type: 'auto'
        }, {
            name: 'date',
            type: 'date'
        }, {
            name: 'rate',
            type: 'int'
        }

    ]
});
