import mongoose from "mongoose";

const binhLuanSchema = mongoose.Schema(
  {
    idNguoiDung: { type: mongoose.Schema.Types.ObjectId, ref: "NguoiDung" },
    noiDung: {type :String,require: true},
    idBaiViet : {type: mongoose.Schema.Types.ObjectId}
  },
  {
    timestamps: {
      createdAt: "thoiGianTao",
      updatedAt: "thoiGianCapNhat",
    },
  }
);

const binhLuan = mongoose.model("BinhLuan", binhLuanSchema, "binhLuan");

export default binhLuan;
