import React from 'react';
import RankItem from './components/rankItem';
export default class RankList extends React.Component {
    constructor(props) {
        super(props)
        this.rankData = []
    }
    render() {
        return <div>
            <RankItem />
        </div>
    }
}