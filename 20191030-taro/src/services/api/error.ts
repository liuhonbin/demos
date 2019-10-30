export function getErrorMsgByErrorNo(error_no) {
  switch (error_no) {
    // -----------------请求错误--------------------------
    case 1000:
      return '服务器维护中！';
    case 100:
      return '操作失败，请稍后再试！';
    case 101:
      return '网络错误，请稍后再试！';
    case 102:
      return '账号或密码错误！';
    case 110:
      return '请求超时，请稍后再试！';
    // -----------------操作错误--------------------------
    case 1001:
      return '已经绑定了其他微信，请先解绑！';
    case 1002:
      return '数据库出错！';
    case 1003:
      return '不存在该用户！';
    case 1004:
      return '还有参数未输入！';
    case 1005:
      return '微信号已经绑定！';
    case 1006:
      return "参数错误，请稍后再试！";
    case 1007:
      return "行程不存在，请刷新后再试！";
    case 1008:
      return "座位数不够哦！";
    case 1009:
      return "设备不存在！";
    case 1010:
      return "你已经借用了该设备！";
    case 1011:
      return "你没有借用该设备！";
    case 1012:
      return "二维码已经过期！";
    case 1013:
      return "没有登录！";
    case 1014:
      return "登录过期！";
    case 10141:
      return "参数错误，请稍后再试！";
    case 10142:
      return "参数错误，请稍后再试！";
    case 10143:
      return "无效参数！";
    case 10144:
      return "无效Token！";
    case 1015:
      return "参数错误！";
    case 1017:
      return "参数错误！";
    case 1018:
      return "账号或密码错误，请重新输入！";
    case 1019:
      return "你还有行程未结束！";
    case 1020:
      return "行程已满客！";
    case 1021:
      return "你还有行程未结束！";
    case 1022:
      return "操作失败！请稍后再试！";
    case 1023:
      return "操作失败！请稍后再试！";
    case 1024:
      return "操作失败！请稍后再试！";
    case 1025:
      return "操作失败！请稍后再试！";
    case 1040:
      return "没有权限！";
    case 1100:
      return "登录错误，请稍后再试！";
    case 1200:
      return "你不是设备的拥有者！";
    // -------------------家具维修--------------------
    case 1300:
      return "还有参数未输入！";
    case 1301:
      return "参数类型错误！";
    case 1302:
      return "参数类型错误！";
    case 1303:
      return "参数类型错误！";
    case 1304:
      return "图片格式错误！";
    // ------------------访客登记-----------------------
    case 1350:
      return "访客证不存在！";
    case 1351:
      return "访客证已经被借用！";
    case 1352:
      return "访客证ID错误！";
    case 1353:
      return "参数错误，请稍后再试！";
    case 1354:
      return "没有权限，禁止操作！";
    case 1355:
      return "没有权限，禁止操作！";
    // ------------------书籍管理-----------------------
    case 1400:
      return "此书籍编号已经存在！";
    case 1401:
      return "没有权限，禁止操作！";
    case 1402:
      return "书籍类型错误";
    case 1403:
      return "书籍不存在！";
    case 1404:
      return "你已经借用该书籍！";
    case 1405:
      return "你不是借阅者！";
    case 1406:
      return "书籍归还二维码过期！";
    // --------------实验设备--------------------
    case 1554:
      return '你已经借用该设备！';
    case 1556:
      return '设备未被借用！';
    case 1557:
      return '设备已被借用！';
    case 1550:
      return '没有权限操作！';
    // ----------------摄影投稿--------------------
    case 1600:
      return '没有权限操作！';
    case 1601:
      return '投稿日期已截止！';
    case 1602:
      return '投稿作品不存在！';
    case 1603:
      return '作品已参赛完成，无法删除！';
    case 1604:
      return '没有权限操作！';
    case 1605:
      return '已经达到最大作品数！';
    case 1608:
      return '提交失败,该轮比赛已经评审完了！';
    case 1609:
      return '今天已经投过票了！';
    case 1610:
      return '超过最大投票数！';
    case 1613:
      return '投票日期已截止！';
    // -------------------客餐卡-----------------------
    case 1650:
      return '没有权限操作！';
    case 1651:
      return '客餐卡编号错误！'
    case 1652:
      return '记录不存在！';
    case 1653:
      return '没有权限操作！';
    case 1654:
      return '没有权限操作！';
    case 1655:
      return '该客餐卡已被借用！';
    default:
      return '未知错误，请稍后再试！';
  }
}
