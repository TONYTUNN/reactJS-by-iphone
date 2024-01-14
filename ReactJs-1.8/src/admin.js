import { Link } from "react-router-dom";

function Admin() { return (
    <div id="admin">
        <h2>Đây là trang chủ quản trị</h2>
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/#">ADMIN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Quản lý sản phẩm 
          </a>
          <ul class="dropdown-menu">
            {/* <li><a class="dropdown-item" href="#/" to ={"/admin/spthem"}>Thêm sản phẩm </a></li> */}
            {/* <li><a class="dropdown-item" href="/#" to ={'/admin/sp'}>Danh sách sản phẩm </a></li> */}
            <li><Link to={'/adminsp/them'}>Thêm sản phẩm</Link></li>
            <li><Link to={'/themloaisp'}>Thêm loại sản phẩm</Link></li>
            <li><Link to={'/admin/sp'}>Danh sách sản phẩm</Link></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>
        </div>
    </div>
)}
export default Admin;
