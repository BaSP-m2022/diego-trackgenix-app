import React from "react";
import styles from './time-sheets.module.css';
const TimeSheet=({timeSheet})=>{

return (
    <div className={styles.timesheetContainer}>
                    <div>
                        <h3>{timeSheet.description}</h3>
                    </div>
                    <div>
                        <h3>Hours: {timeSheet.hours}</h3>
                    </div>
                    <div className={styles.times}>
                        <div className={styles.eachTime}>
                            <h4>
                                Updated at:
                            </h4>
                            <h4>
                                {timeSheet.updatedAt}
                            </h4>
                        </div>
                        <div className={styles.eachTime}>
                            <h4>
                                Finish date:
                            </h4>
                            <h4>
                                {timeSheet.endDate}
                            </h4>
                        </div>
                    </div>
                    <button>X</button>
                </div>
);
};
export default TimeSheet;