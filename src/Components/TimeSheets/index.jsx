import { useState, useEffect } from "react";
import styles from './time-sheets.module.css';
import TimeSheet from "./TimeSheet";
import ModalTimeSheet from "./AddAndModal";
// import ModalTimeSheetEdit from "./ModalEdit";
const TimeSheets = () => {
    const [list, setList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const fetchTimeSheets = () => {
        fetch(`${process.env.REACT_APP_API_URL}timesheets/`)
            .then(response => response.json())
            .then(response => setList(response.data));
    };

    useEffect(async () => {
        try {
            await fetchTimeSheets();
        } catch (error) {
            console.error(error);
        }
    }, []);
    return (
        <section className={styles.listSection}>
            <h2>Timesheets</h2>
            <button onClick={() => { setShowModal(true); }}>Create Timesheet</button>
            <ModalTimeSheet showModal={showModal} setShowModal={setShowModal} fetchTimeSheets={fetchTimeSheets}></ModalTimeSheet>
            {list &&
                list.map((timeSheet, index) => {
                    const handleDelete = () => {
                        fetch(`${process.env.REACT_APP_API_URL}timesheets/${timeSheet._id}`, { method: 'DELETE' })
                            .then(response => response.json())
                            .then(fetchTimeSheets);
                    };
                    return (
                        <TimeSheet key={index} timeSheet={timeSheet} fetchTimeSheets={fetchTimeSheets} handleDelete={handleDelete}></TimeSheet>
                    );
                })}
        </section >
    );
};

export default TimeSheets;









      //  <div className={styles.timesheetContainer}>
                //     <div>
                //         <h3>{e.description}</h3>
                //     </div>
                //     <div>
                //         <h3>Hours: {e.hours}</h3>
                //     </div>
                //     <div className={styles.times}>
            //         <div className={styles.eachTime}>
                //             <h4>
                //                 Updated at:
                //             </h4>
                //             <h4>
                //                 {e.updatedAt}
                //             </h4>
                //         </div>
                //         <div className={styles.eachTime}>
                //             <h4>
                //                 Finish date:
                //             </h4>
                //             <h4>
                //                 {e.endDate}
                //             </h4>
                //         </div>
                //     </div>
                //     <button>X</button>
                // </div>