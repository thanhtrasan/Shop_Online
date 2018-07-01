var db=require("../../models/admin/quanao_model");

module.exports.getdata_control=db.getdata;
module.exports.search_control=db.search;
module.exports.get_add_control=db.get_add_product;
module.exports.add_control=db.add_product;
module.exports.get_update_control=db.get_update;
module.exports.update_control=db.update;

module.exports.delete_control=db.delete;
