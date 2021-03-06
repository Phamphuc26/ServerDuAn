import mongoose from 'mongoose';

const baiVietSchema = mongoose.Schema(
  {
    idNguoiDung: {type: mongoose.Schema.Types.ObjectId, ref: 'NguoiDung'},
    tieuDe : {type : String},
    noiDung: {type: String, require: true},
    linkAnh: [],
    luotThich: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NguoiDung',
      },
    ],
    trangThai: {type : Boolean, default: true},
    duyetBai: {type : Boolean, default: false}
  },
  {
    timestamps: {
      createdAt: 'thoiGianTao',
      updatedAt: 'thoiGianCapNhat'
    },
  }
);
const BaiViet = mongoose.model('BaiViet', baiVietSchema, 'baiViet');

export default BaiViet;
