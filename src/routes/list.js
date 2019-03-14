import express from "express";
import {getTestData} from "../services/test";

const router = express.Router();

router.get("/", async function (req, res, next) {
    let result = null;

    try {
        const {
            code,
            msg,
            data,
        } = await getTestData(1);

        // 这里根据前端需要的额格式处理
        // 或者直接返回请求到的数据
        if (code === 200) {
            result = {
                status: code,
                success: true,
                message: msg,
                data: data,
            };
        } else {
            result = {
                status: code,
                success: true,
                message: msg,
                data: null,
            };
        }
    } catch (error) {
        const {
            message,
        } = error;

        result = {
            status: 500,
            success: false,
            message: "服务器端发生了错误",
            data: null,
        };
    }
    res.json(result);
});

export default router;
