Ext.define('Sencha.model.Equipment', {
    extend: 'Ext.data.Model',
    idProperty: 'Id',

    schema: {
        namespace: 'Sencha.model'
    },
    fields: [
        { name: 'Id', type: 'int' },
        { name: 'EquipmentName', type: 'string' },
        { name: 'Quantity', type: 'int' },
        { name: 'Price', type: 'int' },
        { name: 'Date', type: 'date' }
        { name: 'Description', type: 'string' }
    ]
});