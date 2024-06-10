import { Component } from "react"
import PageNotFound from "../PageNotFound/PageNotFound"

import * as errorsService from '../../services/errorsService'

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(err) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        const errorObj = { error, errorInfo }
       
        errorsService.log(errorObj)
            .then()
            .catch(err => console
                .error(err)
            )
    }

    render() {
        if (this.state.hasError) {
            return (
                <PageNotFound />
            )
        }

        return this.props.children
    }
}
