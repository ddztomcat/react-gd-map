import React from "react"
import s from "./index"
export default class Xmap extends React.Component {
    constructor(props) {
        super(props)
        this.mapContainer = React.createRef();
    }
    componentDidMount() {
        this.map = new window.AMap.Map(this.mapContainer.current, {
            center: [116.397428, 39.90923],
            zoom: 11
        });
        // 构造点标记
        var marker = new AMap.Marker({
            icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: [116.405467, 39.907761]
        });
        // 构造矢量圆形
        var circle = new AMap.Circle({
            center: new AMap.LngLat("116.403322", "39.920255"), // 圆心位置
            radius: 1000,  //半径
            strokeColor: "#F33",  //线颜色
            strokeOpacity: 1,  //线透明度
            strokeWeight: 3,  //线粗细度
            fillColor: "#ee2200",  //填充颜色
            fillOpacity: 0.35 //填充透明度
        });

        // 将以上覆盖物添加到地图上
        // 单独将点标记添加到地图上
        // map.add(marker);
        // add方法可以传入一个覆盖物数组，将点标记和矢量圆同时添加到地图上
        this.map.add([marker, circle]);
        this.map.setFitView();
    }
    render() {
        return (
            <div ref={this.mapContainer} className={s.map_container}>

            </div>
        )
    }
}