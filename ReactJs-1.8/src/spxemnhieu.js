import { listsp } from "./data";
function SPXemNhieu(){
    return(
        <div id="spxn">
            {listsp.slice(0,6).map((sp,i) =>
            <div className="sp" key={i}>{sp['ten_sp']}</div>
            )}
        </div>
    )
}
export default SPXemNhieu;