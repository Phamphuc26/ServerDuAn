import mongoose from 'mongoose';

const matHangSchema = mongoose.Schema(
  {
    idNguoiDung: { type: mongoose.Schema.Types.ObjectId, ref: 'NguoiDung' },
    noiDung: { type: String },
    linkAnh: { type: String },
    gia: { type: Number },
    hangMuc: { type: String },
    diaChi: { type: String },
  },
  {
    timestamp: {
      createdAt: 'thoiGianTao',
      updatedAt: 'thoiGianCapNhat',
    },
  }
);

const MatHang = mongoose.model('MatHang', matHangSchema, 'matHang');

export default MatHang;
