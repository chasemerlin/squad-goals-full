/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/



import React, { Component } from 'react';
import {
    IonCardContent,
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonSelect,
    IonSelectOption,
    IonIcon,
    IonItem,
    IonLabel,
    IonButton,
    IonText,
    IonInput,
    IonTextarea,
    IonRow,
    IonCol,
    IonGrid,
    IonCard
} from '@ionic/react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../components/Firebase/index';
import './Home.css'
import { create, trash, funnel } from 'ionicons/icons';

const INITIAL_STATE = {
    question: '', answer: '', filter: 'all', tag: '', isUpdatingQuestion: false, loadingData: false
};

const TAGS_OPTIONS = [
    { value: 'security', label: 'Security' },
    { value: 'development', label: 'Development' },
    { value: 'crud', label: 'CRUD' },
    { value: 'storage', label: 'Storage' }
]
function pick(obj: any, keys: any) {
    return keys.map((k: any) => k in obj ? { [k]: obj[k] } : {})
        .reduce((res: any, o: any) => Object.assign(res, o), {});
}
class Home extends Component {
    state: any = {};
    props: any = {}
    constructor(props: any) {
        super(props);
        this.props = props
        this.state = { ...INITIAL_STATE };
    }
    async componentDidMount() {
        const { firebase } = this.props;
        this.toggleLoading();
        const task = await firebase.getData('task')
        this.toggleLoading();
        this.setState({
            task
        })
    }
    onChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    addQuestion = async () => {
        const { firebase } = this.props;
        const wantedKeys = ['question', 'answer', 'tag'];
        let data = pick(this.state, wantedKeys);
        this.toggleLoading();
        await firebase.addData('task', data)
        const newTask = await firebase.getData('task')
        this.toggleLoading();
        this.setState({
            task: newTask
        })
    };
    editQuestion = (index: any) => {
        const { task } = this.state;
        const { doc, ...data } = task[index];
        this.setState({
            ...data,
            editingIndex: index,
            isUpdatingQuestion: true
        })
    }
    deleteQuestion = async (index: any) => {
        const { firebase } = this.props;
        const { task } = this.state;
        this.toggleLoading();
        await firebase.deleteData('task', task[index].key)
        const newTask = await firebase.getData('task')
        this.toggleLoading();
        this.setState({
            task: newTask
        })
    }
    cancelEditingQuestion = () => {
        this.setState({
            ...INITIAL_STATE
        })
    }
    updateQuestion = async () => {
        const { firebase } = this.props;
        const { task, editingIndex } = this.state;
        const wantedKeys = ['question', 'answer', 'tag'];
        let data = pick(this.state, wantedKeys);
        firebase.editData('task', data, task[editingIndex].key)
        const newTask = await firebase.getData('task')
        this.setState({
            ...INITIAL_STATE,
            task: newTask
        })
    }
    filterData = async (event: any) => {
        this.setState({ [event.target.name]: event.target.value }, async () => {
            const { firebase } = this.props;
            let newTask: any = []
            this.setState({
                task: newTask
            })
            this.toggleLoading();
            if (event.target.value === 'all') {
                newTask = await firebase.getData('task')
            } else {
                newTask = await firebase.filterData('task', 'tag', event.target.value)
            }
            this.toggleLoading();
            this.setState({
                task: newTask
            })
        });
    }
    toggleLoading = () => {
        const { loadingData } = this.state;
        this.setState({
            loadingData: !loadingData
        })
    }
    render() {
        const { question, answer, filter, tag, task, isUpdatingQuestion } = this.state;
        const tagsOptions = TAGS_OPTIONS.map((tag, index: any) => (
            <IonSelectOption value={tag.value} key={index}>{tag.label}</IonSelectOption>
        ))
        const taskList = task && task.map((task: { question: '', answer: '' }, index: any) => (
            <IonGrid className="scrollContentHome" key={index}>
                <IonRow>
                    <IonCard className="cardHome ion-no-margin">
                        <IonCardContent className="ion-no-padding ion-padding-vertical">
                            <IonGrid className="ion-no-padding">
                                <IonRow >
                                    <IonCol size="6">
                                        <IonItem lines="none" className="item-2Home">
                                            <div>
                                                <IonLabel className="label-2 label">
                                                    <h3> {task.question} </h3>
                                                </IonLabel>
                                                <IonLabel className="label-2 label">
                                                    <p> {task.answer} </p>
                                                </IonLabel>
                                            </div>
                                        </IonItem>
                                    </IonCol>
                                    <IonCol size="6" className="edit">
                                        <IonButton color="primary" onClick={() => this.editQuestion(index)}><IonIcon className='iconStyle' icon={create}></IonIcon></IonButton>
                                        <IonButton color="danger" onClick={() => this.deleteQuestion(index)}><IonIcon className='iconStyle' icon={trash}></IonIcon></IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCardContent>
                    </IonCard>
                </IonRow>
            </IonGrid>
        ))
        return ([
            // {/* <Menu /> */},
            <IonPage id="main">
                {/* <IonLoading
                    isOpen={loadingData}
                    onDidDismiss={() => this.setState(() => ({ loadingData: false }))}
                    message={'Fetching Data Please Wait'}
                >
                </IonLoading> */}
                <IonHeader>
                    <IonToolbar className='ToolbarHome'>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle slot="start" color='light'>Home</IonTitle>
                        <IonButtons slot="end">
                            <IonSelect interface="alert" value={filter} name="filter" id="filterSelect" onIonChange={this.filterData}>
                                <IonIcon icon={funnel} className="person-icon"></IonIcon>
                                <IonSelectOption value="all">All</IonSelectOption>
                                {tagsOptions}
                            </IonSelect>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader >
                <IonContent className='ion-padding'>
                    <div className="form-container">
                        <IonText color="medium">
                            This page demonstrates CRUD (create, read, update, delete) operations on Firebase Firestore.
                        </IonText>
                        <form>
                            <IonItem className="ion-margin-bottom" >
                                <IonLabel position="stacked" className="label"> <strong className="align">Question : </strong></IonLabel>
                                <IonInput
                                    value={question}
                                    onIonChange={this.onChange}
                                    name="question"
                                    placeholder="Enter your question here?"
                                    clear-input="true"
                                    className="input-css"></IonInput>
                            </IonItem>
                            <IonItem className="ion-margin-bottom">
                                <IonLabel position="stacked" className=" label"><strong className="align">Answer : </strong></IonLabel>
                                <IonTextarea
                                    value={answer}
                                    onIonChange={this.onChange}
                                    className="input-css"
                                    rows={2}
                                    cols={20}
                                    placeholder="Enter your answer here..."
                                    name="answer"
                                    clear-input="true"></IonTextarea>
                            </IonItem>
                            <IonItem className="item-3 ion-margin-bottom" lines="none">
                                <IonLabel className="labelTag label">Choose Tag </IonLabel>
                                <IonSelect okText="Okay" cancelText="Dismiss" name="tag" value={tag} onIonChange={this.onChange}>
                                    {tagsOptions}
                                </IonSelect>
                            </IonItem>
                            {!isUpdatingQuestion ?
                                <IonButton expand="block" className="btn-transition-home ion-margin-vertical" onClick={this.addQuestion} >Add question</IonButton> :
                                <IonRow>
                                    <IonCol>
                                        <IonButton expand="block" className="btn-transition-home" onClick={this.updateQuestion}>Update</IonButton>
                                    </IonCol >
                                    <IonCol>
                                        <IonButton fill="outline" expand="block" className="btn-color" onClick={this.cancelEditingQuestion}>cancel</IonButton>
                                    </IonCol >
                                </IonRow >}
                        </form >
                    </div >
                    <div>
                        {taskList}
                    </div>
                </IonContent >
            </IonPage >]
        );
    }
}


export default compose(
    withRouter,
    withFirebase,
)(Home);