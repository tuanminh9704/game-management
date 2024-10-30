import {Express, Request, Response, NextFunction } from "express";

const responseWrapper = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).success = (data: any) => {
        res.json({
            success: true,
            data: data,
            message: null
        });
    };

    res.successWithPagination = (data: any, totalPages: number, totalItems: number, pageIndex: number) => {
        res.status(200).json({
            success: true,
            totalPages: totalPages,
            pageIndex: pageIndex,
            totalItems: totalItems,
            data: data,
            message: null
        });
    };

    res.status(400).error = (message: string) => {
        res.json({
            success: false,
            data: null,
            message: message
        });
    };

    next();
};

export default responseWrapper;
