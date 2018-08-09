import React from 'react'
import Xmap from '@/components/xmap/map'
import Marker from '@/components/marker/marker'
export default class Demo extends React.Component {
    render() {
        return (<Xmap>
            <Marker></Marker>
        </Xmap>)
    }
}