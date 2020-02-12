import React from 'react';
import { Button, Radio, Icon, PageHeader, Row, Layout, Menu, Breadcrumb } from 'antd';
import o from '../o.png';
import re from '../re.png';
import logo from '../logo.svg';
import './Oreo.css';

const users = [
]

var usersElements = []

var textElements = [];

// function changeOreo() {
//     usersElements = [];
//     for (let index = users.length - 1; index >= 0; index--) {
//         usersElements.push( // 循环每个用户，构建 JSX，push 到数组中
//             <div>
//                 <img src={users[index].src === 'o' ? o : re} alt="logo"
//                     style={{ width: 240, height: 160, position: 'absolute', top: 50 + index * 20, left: window.innerWidth / 2 - 120 }}
//                 />
//             </div>
//         )
//         textElements.push(users[index].src === 'o' ? 'O' : 'RE');
//     }
// }


class Oreo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersElements: [],
            textElements: []
        };
    }

    componentDidMount() {
        this.updateOreo();
    }
    componentDidUpdate() {

    }
    updateOreo() {

    }

    addO = (event) => {
        users.push({ src: 'o' });
        this.changeOreo();
    }
    addRE = (event) => {
        users.push({ src: 're' });
        this.changeOreo();
    }

    changeOreo() {
        usersElements = [];
        textElements = [];

        for (let index = 0; index < users.length; index++) {
            usersElements.push( // 循环每个用户，构建 JSX，push 到数组中
                <div>
                    <img src={users[index].src === 'o' ? o : re} alt="logo"
                        style={{ width: 240, height: 160, position: 'absolute', top: 650 - index * 20, left: window.innerWidth / 2 - 120 }}
                    />
                </div>
            )
            textElements.push(users[index].src === 'o' ? 'O' : 'RE');
        }
        // for (let index = users.length - 1; index >= 0; index--) {
        //     usersElements.push( // 循环每个用户，构建 JSX，push 到数组中
        //         <div>
        //             <img src={users[index].src === 'o' ? o : re} alt="logo"
        //                 style={{ width: 240, height: 160, position: 'absolute', top: 300 - index * 20, left: window.innerWidth / 2 - 120 }}
        //             />
        //         </div>
        //     )
        //     textElements.push(users[index].src === 'o' ? 'O' : 'RE');
        // }

        this.setState({
            usersElements: usersElements,
            textElements: textElements.reverse()
        });

        document.getElementById("oreoText").innerHTML = textElements.join('');
    }

    render() {

        const textStyle = {
            fontSize: '40px',
            color: '#000000'
        };

        const { Header, Content, Footer } = Layout;

        return (
            <div className="Oreo">
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    onBack={() => null}
                    title="OREREO"
                    subTitle="build your own orereo here"
                />
                <Layout className="layout">
                    <Header>
                        {/* <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu> */}
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <text id="oreoText" style={textStyle}> =P </text>
                        <div style={{ background: '#33A6B8', padding: 24, minHeight: 650}}> </div>

                        <React.Fragment>

                    <div>{usersElements}</div>
                    {/* <div>{textElements}</div> */}
                    <div>
                        <Button type="primary" onClick={this.addO}>add O</Button>
                        <Button type="primary" onClick={this.addRE}>add RE</Button>
                    </div>

                    
                </React.Fragment>

                    </Content>
                    
                    <Footer style={{ textAlign: 'center' }}> Elonn Software ©2020 Created by Yilun Sun</Footer>
                </Layout>
                

            </div>
        );
    }
}

export default Oreo;