import React, { useState } from "react"
import Search from "../shared/search"
import Icon from "@ant-design/icons"
import filter from "../../assets/icon/filter.svg"
import Filter from "../shared/filter"
import { Modal } from "antd"
import '../../assets/css/manage.css'

const Home = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="content">
            <h1>Danh sách vé</h1>
            <Search />
            <div className="control">
                <div className="filter-btn">
                    <button type="button" className="button" onClick={showModal}>     
                    <Icon style={{ paddingRight: 5 }} component={() => (<img src={filter} alt='' />)} />              
                        Lọc vé
            </button>
                </div>
                <div className="file-btn">
                    <button type="button" className="button">
                        Xuất file (.csv)
                    </button>
                </div>
            
            

            <Modal width={600} visible={isModalVisible} closable={false} footer={null} onCancel={handleCancel} style={{marginTop:-20}}>
                <Filter />
            </Modal>
            </div>
        </div>
    )
}

export default React.memo(Home)