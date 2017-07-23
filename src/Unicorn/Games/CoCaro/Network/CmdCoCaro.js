
(function () {
  var root = this;

  var CoCaro = uc.Caro;

  CoCaro.CoCaroCmd = {
    START_GAME: 3100,
    TAKE_TURN: 3101,
    KET_THUC: 3103,
    CHANGE_TURN: 3104,
    TU_DONG_BAT_DAU: 3107,

    THONG_TIN_BAN_CHOI: 3110,
    DANG_KY_THOAT_PHONG: 3111,

    CHEAT_CARDS: 3115,
    DANG_KY_CHOI_TIEP: 3116,

    JOIN_ROOM_SUCCESS: 3118,
    LEAVE_GAME: 3119,
    NOTIFY_KICK_FROM_ROOM: 3120,
    NEW_USER_JOIN: 3121,

    UPDATE_MATCH: 3123
  };
}.call(this));