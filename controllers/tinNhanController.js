import TinNhan from '../models/tinNhan.js'

export async function nhanTin(req,res){
    const tinNhan = new TinNhan(req.body)
    try {
        await tinNhan.save()
        res.send(tinNhan);
        console.log('Đã tạo tin nhắn mới')
    } catch (error) {
        res.send(error.message)
        console.log('Lỗi')
    }
    
}
export async function danhSachTinNhan(req,res){
    await TinNhan.find().then((result) => {
      res.send(result)
      console.log('Danh sách tin nhắn')
    }).catch((err) => {
      res.send('Lỗi lấy danh sách tin nhắn')
    });
  }

export async function abc(req,res){
    res.send({noiDung : "Test ok"})
}