import mongoose from "mongoose";

const baiVietSchema = mongoose.Schema(
  {
    idNguoiDung: { type: mongoose.Schema.Types.ObjectId, ref: "NguoiDung" },
    noiDung: String,
    linkAnh: String,
    luotThich: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NguoiDung",
      },
    ],
    binhLuan: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BinhLuan",
      },
    ],
  },
  {
    timestamps: {
      createdAt: "thoiGianTao",
      updatedAt: "thoiGianCapNhat",
    },
  }
);

const BaiViet = mongoose.model("BaiViet", baiVietSchema, "baiViet");

export default BaiViet;
