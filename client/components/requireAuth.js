import React, {Component} from 'react';
import CurrentUser from "../queries/CurrentUser";
import {hashHistory} from "react-router";
import {graphql} from 'react-apollo';

export default (WrappedComponent) => {
    class RequireAuth extends Component {
        componentWillUpdate(nextProps) {
            const {user, loading} = nextProps.data;
            console.log(user, loading)
            if (!user && !loading) {
                hashHistory.push('/login');
            }
        }

        render() {
            return <WrappedComponent {...this.props} />
        }

    }
    return graphql(CurrentUser)(RequireAuth);

};

