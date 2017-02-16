Ext.define('C.view.main.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'mainform',
    autoScroll: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bodyPadding: 5,
    config: {
        currentEntry: null
    },
    bind: {
        title: '{formTitle}',
        currentEntry: '{currentEntry}'
    },
    defaults: {
        anchor: '100%',
        allowBlank: true,
        msgTarget: 'under'
    },
    items: [{
        fieldLabel: 'Id',
        name: 'id',
        xtype: 'displayfield',
        bind: {
            value: '{currentEntry.id}'
        }
    }, {
        fieldLabel: 'Equipment Name',
        name: 'name',
        xtype: 'textfield',
        bind: {
            value: '{currentEntry.eqname}'
        }
    }, {
        fieldLabel: 'Quantity',
        name: 'quantity',
        xtype: 'textfield',
        bind: {
            value: '{currentEntry.quantity}'
        }
    }, {
        fieldLabel: 'Description',
        name: 'description',
        xtype: 'textareafield',
        bind: {
            value: '{currentEntry.description}'
        },
        flex: 1
    }, {
        fieldLabel: 'Date',
        name: 'date',
        xtype: 'datefield',
        format: 'Y-m-d',
        bind: {
            value: '{currentEntry.date}'
        }
    }, {
        fieldLabel: 'Rate',
        name: 'id',
        xtype: 'textfield',
        bind: {
            value: '{currentEntry.rate}'
        }
    }],
    buttons: [{
        text: 'Save',
        action: 'save',
        handler: 'onFormBtnClick'
    }, {
        text: 'Cancel',
        action: 'cancel',
        handler: 'onFormBtnClick'
    }]
});
