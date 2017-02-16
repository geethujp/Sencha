Ext.define('Sencha.view.equipment.equipmentController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.equipment-list',

    onAddClick: function (sender, record) {

        var equipmentStore = this.getViewModel().getStore('equipmentListStore');

        //adding dummy equipment
        var equipmentModel = Ext.create('School.model.equipment');
        equipmentModel.set("Id", 0);
        equipmentModel.set("EquipmentName", "New equipment");
        equipmentModel.set("Quantity", "");
        equipmentModel.set("Price", "");
        equipmentModel.set("Date", "");
        equipmentModel.set("Description", "");

        equipmentStore.insert(0, equipmentModel);

        var equipmentGrid = this.getView();
        equipmentGrid.editingPlugin.startEdit(equipmentModel, 1);

    },

    onLoadClick: function (sender, record) {
        var equipmentStore = this.getView().getStore();
        equipmentStore.load();
    },

    onRemoveClick: function (sender, record) {
        var equipmentGrid = this.getView();
        var equipmentStore = equipmentGrid.getStore();

        //delete selected rows if selModel is checkboxmodel
        var selectedRows = equipmentGrid.getSelectionModel().getSelection();

        equipmentStore.remove(selectedRows);
    },

    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveequipment');
        if(record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    }
});