import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'

function GitHub(props) {
    const [data, setData] = useState(null)
    const [limit, setLimit] = useState(5)
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        const result = await axios('https://api.github.com/users/nnikolov-dev/events')
        setData(result.data)
        console.log(result.data)
    }

    const incLimit = () => {
        setLimit(limit + 5)
    }

    const getPayload = (type, payload) => {
        switch(type) {
            case 'CreateEvent':
                return `Created a new ${payload.ref_type} ${payload.ref ? ` @ ${payload.ref}` : ''}`
            case 'DeleteEvent':
                return `Deleted a ${payload.ref_type} ${payload.ref ? ` @ ${payload.ref}` : ''}`
            case 'GollumEvent':
                return `Updated the ${payload.pages[0].page_name} wiki page` 
            case 'PushEvent':
                return payload.commits[0].message
            case 'ForkEvent':
                return `Forked ${payload.forkee.name}`
            case 'PullRequestEvent':
                return `${payload.action} a pull request`
            default:
                return null
        }
    }

    const EVENTS_ICONS = []
    EVENTS_ICONS['CreateEvent'] = 'icon fa-plus'
    EVENTS_ICONS['DeleteEvent'] = 'icon fa-times'
    EVENTS_ICONS['GollumEvent'] = 'icon fa-file-text-o'
    EVENTS_ICONS['PushEvent'] = 'icon fa-github'
    EVENTS_ICONS['ForkEvent'] = 'icon fa-code-fork'
    EVENTS_ICONS['PullRequestEvent'] = 'icon fa-question-circle-o'

    return(
        <>
            <table className="table-wrapper">
                <tbody>
                    {data ? data.slice(0, limit).map((activity) => (
                        <tr key={activity.id}>
                            <td>
                                <i className={EVENTS_ICONS[activity.type]}/>
                            </td>
                            <td>
                                <a
                                    href={`http://github.com/${activity.repo.name}`}
                                    target="_blank" alt={`Visit ${activity.repo.name}'s GitHub page`}
                                    rel="noopener noreferrer"
                                >
                                    {activity.repo.name}
                                </a>
                            </td>
                            <td>
                                {getPayload(activity.type, activity.payload)}
                            </td>
                            <td>
                                {moment(activity.created_at).fromNow()}
                            </td>
                        </tr>
                    )) : null}
                </tbody>
            </table>
            {data ? <span id="table-footer" onClick={incLimit}>Load More</span> : null }
        </>
    )
}

export default GitHub