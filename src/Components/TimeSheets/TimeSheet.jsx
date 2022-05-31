import React from "react";
import styles from './time-sheets.module.css';
import ModalTimeSheetEdit from "./EditAndModal";
import { useState } from "react";
const TimeSheet=({timeSheet, fetchTimeSheets,handleDelete})=>{
    const [showModalEdit, setShowModalEdit] = useState(false);
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
                                Started date:
                            </h4>
                            <h4>
                                {timeSheet.startDate}
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
                    <button onClick={handleDelete}>X</button>
                    <button onClick={()=>setShowModalEdit(true)}>Edit</button>
                    <ModalTimeSheetEdit showModalEdit={showModalEdit} timeSheet={timeSheet} fetchTimeSheets={fetchTimeSheets} setShowModalEdit={setShowModalEdit}></ModalTimeSheetEdit>
                </div>
);
};
export default TimeSheet;
