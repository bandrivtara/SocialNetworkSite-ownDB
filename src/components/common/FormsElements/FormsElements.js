import React from 'react';

import classes from './FormsElements.module.css'

export const textareaRForm = ({ meta, input, ...props }) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
            <textarea {...input} {...props} />
            {hasError && <div>{meta.error}</div>}
        </div>
    )
}

export const inputRForm = ({ meta, input, ...props }) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : '')}>
            <input {...input} {...props} />
            {hasError && <div>{meta.error}</div>}
        </div>
    )
}
