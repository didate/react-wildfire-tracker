import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ onClick }) => {
    return (
        <div className="location-marker" >
            <Icon icon={locationIcon} className="location-icon" onClick={onClick}></Icon>
        </div>
    )
}

export default LocationMarker
