import { useState, useEffect } from "react";
import styles from './time-sheets.module.css';
import TimeSheet from "./TimeSheet";
const TimeSheets = () => {
    const [list, setList] = useState([]);
    const fetchTimeSheets = () => {
        fetch(`http://localhost:4000/timesheets`)
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
            {list &&
                list.map((timeSheet) => {
                    return <TimeSheet key={timeSheet._id} timeSheet={timeSheet} fetchTimeSheets={fetchTimeSheets}></TimeSheet>;
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