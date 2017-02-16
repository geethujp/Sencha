Ext.define('C.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'maingrid',
    publishes: ['currentEntry'],
    bind: {
        store: '{entries}',
        title: '{gridTitle}'
    },
    dockedItems: [{
        xtype: 'toolbar',
        items: ['->', {
            xtype: 'button',
            action: 'add',
            bind: '{addBtnText}',
            iconCls: 'fa-plus-circle',
            handler: 'onGridAddBtnClick'
        }]
    }],
    columns: [{
        xtype: 'actioncolumn',
        width: 40,
        align: 'center',
        items: [{
            action: 'del',
            iconCls: 'fa-minus-circle',
            handler: 'onGridDelBtnClick'
        }]
    }, {
        text: 'Id',
        dataIndex: 'id',
        width: 60
    }, {
        text: 'Equipment Name',
        dataIndex: 'eqname',
        width: 120,
        editor: 'textfield'
    }, {
        text: 'Quantity',
        dataIndex: 'quantity',
        width: 120,
        editor: 'textfield'
    }, {
        text: 'Description',
        dataIndex: 'description',
        flex: 1,
        editor: 'textfield'
    }, {
        text: 'Date',
        dataIndex: 'date',
        width: 100,
        xtype: 'datecolumn',
        format: 'Y-m-d',
        editor: 'datefield'
    }, {
        text: 'Rate',
        dataIndex: 'rate',
        width: 60,
        editor: 'textfield'
    }],

    listeners: {
        select: 'onGridRowSelect'
    }
});
