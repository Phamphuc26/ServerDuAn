import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const matHangSchema = mongoose.Schema(
  {
    hangMuc: {
      type: String,
      required: true,
    },
    tieuDe: {
      type: String,
      required: true
    },
    noiDung: {
      type: String,
    },
    linkAnh: {
      type: [],
      required: true,
    },
    giaBan: {
      type: Number,
      required: true,
    },
    diaChi: {
      type: String,
      required: true,
    },
    idNguoiDung: {
      type: Schema.Types.Object,
      ref: 'NguoiDung',
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'thoiGianTao',
      updatedAt: 'thoiGianCapNhat',
    },
  }
);
const MatHang = mongoose.model('MatHang', matHangSchema, 'matHang');
export default MatHang;
