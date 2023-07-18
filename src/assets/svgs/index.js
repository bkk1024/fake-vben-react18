/*
 * @Author: 二师弟
 * @Date: 2023-06-29 13:50:52
 * @LastEditors: 二师弟
 * @LastEditTime: 2023-06-29 16:47:59
 * @Description: 引入全局的 svg
 */
const req = require.context("./svg", false, /.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)

requireAll(req)

// export {}
