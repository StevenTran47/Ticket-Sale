import React, { useState } from "react"
import Search from "../shared/search"
import Filter from "../shared/filter"
import { Modal } from "antd"
import '../../assets/css/manage.css'

const Home = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="content">
            <h1>Danh sách vé</h1>
            <Search />
            <div className="control">
            <button type="button" className="button" onClick={showModal}>                   
                Lọc vé
            </button>
                <button type="button" className="button">Xuất file (.csv)</button>

                <Modal width={600} visible={isModalVisible} closable={false} footer={null} onCancel={handleCancel} style={{marginTop:-20}}>
                    <Filter />
                </Modal>
            </div>
        </div>
    )
}

export default React.memo(Home)