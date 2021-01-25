import mongoose from 'mongoose';

const tinNhanSchema = mongoose.Schema(
  {
    idNguoiGui: { type: mongoose.Schema.Types.ObjectId, ref: 'NguoiDung' },
    idNguoiNhan: { type: mongoose.Schema.Types.ObjectId, ref: 'NguoiDung' },
    noiDung : {type : String}
  },
  {
    timestamps: {
      createdAt: 'thoiGianGui',
      updatedAt: 'thoiGianCapNhat',
    },
  }
);

const TinNhan = mongoose.model('TinNhan', tinNhanSchema, 'tinNhan');

export default TinNhan;
