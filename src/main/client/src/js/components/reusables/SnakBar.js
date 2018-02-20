import React from 'react';

export const SnackBar = ({message, show}) => <div className={"snack-bar "+(show?"show":"")}>{message}</div>;

