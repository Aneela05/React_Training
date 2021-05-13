import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import FiltersContainer from "containers/FiltersProvider"
import SelectableListProvider from "containers/SelectableListProvider"

import Filters from "./Filters"
import FilterBar from "./FilterBar"
import SelectionBar from "./SelectionBar"
import List from "./List"

import { filterItems } from "../modules/actions"

const columns = (isCV) => [
    {
        key: "benchmark",
        label: "Benchmark",
    },
    {
        key: "requested_on",
        label: "Requested On",
    },
    {
        key: "resume_score",
        label: isCV ? "CV Score" : "Resume Score",
    },
    {
        key: "action",
        label: "Action",
    },
]

class PendingList extends React.Component {
    static propTypes = {
        filterItems: PropTypes.func,
        isCV: PropTypes.bool,
    }
    fetchItems = (params) => {
        const { filterItems } = this.props
        return filterItems({ ...params, statuses: ["pending"] })
    }
    render() {
        const { isCV } = this.props
        return (
            <FiltersContainer onChange={this.fetchItems}>
                <SelectableListProvider>
                    <div className="resume-requests-pending-view">
                        <div className="card resume-requests-header">
                            <Filters />
                            <SelectionBar
                                canApproveRequests
                                canRejectRequests
                            />
                        </div>
                        <FilterBar />
                        <div className="resume-requests-list-container">
                            <List columns={columns(isCV)} />
                        </div>
                    </div>
                </SelectableListProvider>
            </FiltersContainer>
        )
    }
}

export default connect(
    null,
    { filterItems }
)(PendingList)
