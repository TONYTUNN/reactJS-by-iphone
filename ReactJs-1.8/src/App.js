
import './App.css';
import Menu from './menu';
import Home from './home';
import SPXemNhieu from './spxemnhieu';
import ChiTiet from './chitiet';
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import GioiThieu from './gioithieu';
import SPTrongLoai from './sptrongloai';
import TimKiem from './timkiem';
import NotFound from './notfound';
import ShowCart from './showCart';
import ThanhToan from './thanhtoan';
import Admin from './admin';
import SanPhamThem from './spthem';
import SanPhamSua from './spsua';
import SanPhamList from './splist';
import DangNhap from './dangnhap';
import {useSelector } from 'react-redux';
import Download from './download';
import ThemLoaiSP from './themLoaiSP';
import { ProtectedRoute } from './ProtectedRoute';
// var sotin = 10;
function App() {
  const user = useSelector(state => state.auth.user);
  const daDangNhap = useSelector(state => state.auth.daDangNhap);
  return (
    <BrowserRouter basename='/'>
          <div className='container'>
    <header>
      <div id='userinfo'>
        {user === null || user === undefined ? "Chào quý khách":"Chào : " + user.hoten}
      </div>
    </header>
    <nav><Menu/></nav>
    <main className='d-flex'>
    <article className='col-md-9'>
      <Routes>
        <Route path='/' exact element ={<Home/>}/>
        <Route path='/gioithieu' element ={<GioiThieu/>}/>
        <Route path='/sp/:id'  element ={<ChiTiet/>}/>
        <Route path='/loai/:id_loai' element ={<SPTrongLoai/>}/>
        <Route path='/timkiem' element ={<TimKiem/>}/>
        <Route path='/showcart' element ={<ShowCart/>}/>
        <Route path="/thanhtoan/" element={<ThanhToan/>} />
        <Route element = {<ProtectedRoute/>} />
        <Route path='/adminsp' element = {<Admin/>}/>
        <Route path='/admin/sp' element ={<SanPhamList/>} />
        <Route path='/themloaisp' element= {<ThemLoaiSP/>} />
        <Route path='/adminsp/them' element ={<SanPhamThem/>} />
        <Route path='/adminsp/sua' element ={<SanPhamSua/>} />
        <Route path='/dangnhap' element = {<DangNhap/>}/>
       
        <Route path='*' element ={<NotFound/>}/>
        <Route path='/download' element = {daDangNhap === true ? <Download/>:<Navigate to="/dangnhap"/>}/>
      </Routes>
    </article>
    <aside className='col-md-3'>
    <SPXemNhieu />
    </aside>
    </main>
    <footer>
      {/* <p>Nguyễn Văn Tuấn</p> */}
    </footer>
   </div>
    </BrowserRouter>
  );
}

export default App;
