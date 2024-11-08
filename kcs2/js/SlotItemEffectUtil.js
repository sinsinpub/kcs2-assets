{
    72170: (_1nq, _1nr) => {
        'use strict';
        var _1ns = null;
        defineModule(_1nr);
        Object.defineProperty(_1nr, '__esModule', {
            'value': true
        }), _1nr.SHIP_COUNTRY = void 0, _1nr.SHIP_COUNTRY = {
            1: '日本',
            2: '日本',
            3: '日本',
            4: '日本',
            5: '日本',
            6: '日本',
            7: '日本',
            8: '日本',
            9: '日本',
            10: '日本',
            11: '日本',
            12: '日本',
            13: '日本',
            14: '日本',
            15: '日本',
            16: '日本',
            17: '日本',
            18: '日本',
            19: '日本',
            20: '日本',
            21: '日本',
            22: '日本',
            23: '日本',
            24: '日本',
            25: '日本',
            26: '日本',
            27: '日本',
            28: '日本',
            29: '日本',
            30: '日本',
            31: '日本',
            32: '日本',
            33: '日本',
            34: '日本',
            35: '日本',
            36: '日本',
            37: '日本',
            38: '日本',
            39: '日本',
            40: '日本',
            41: '日本',
            42: '日本',
            43: '日本',
            44: '日本',
            45: '日本',
            46: '日本',
            49: '日本',
            50: '日本',
            51: '日本',
            52: '日本',
            53: '日本',
            54: '日本',
            56: '日本',
            59: '日本',
            60: '日本',
            62: '日本',
            66: '日本',
            71: '日本',
            72: '日本',
            74: '日本',
            75: '日本',
            76: '日本',
            77: '日本',
            85: '日本',
            86: '日本',
            90: '日本',
            94: '日本',
            97: '日本',
            100: '日本',
            101: '日本',
            103: '日本',
            104: '日本',
            109: '日本',
            111: '日本',
            115: '日本',
            117: '日本',
            119: '日本',
            120: '日本',
            123: '日本',
            126: '日本',
            127: '日本',
            65: 'アメリカ',
            69: 'アメリカ',
            83: 'アメリカ',
            84: 'アメリカ',
            87: 'アメリカ',
            91: 'アメリカ',
            93: 'アメリカ',
            95: 'アメリカ',
            99: 'アメリカ',
            102: 'アメリカ',
            105: 'アメリカ',
            106: 'アメリカ',
            107: 'アメリカ',
            110: 'アメリカ',
            114: 'アメリカ',
            116: 'アメリカ',
            118: 'アメリカ',
            121: 'アメリカ',
            122: 'アメリカ',
            125: 'アメリカ',
            67: 'イギリス',
            78: 'イギリス',
            82: 'イギリス',
            88: 'イギリス',
            108: 'イギリス',
            112: 'イギリス',
            58: 'イタリア',
            61: 'イタリア',
            64: 'イタリア',
            68: 'イタリア',
            80: 'イタリア',
            92: 'イタリア',
            113: 'イタリア',
            124: 'イタリア',
            98: 'オランダ',
            96: 'オーストラリア',
            89: 'スウェーデン',
            47: 'ドイツ',
            48: 'ドイツ',
            55: 'ドイツ',
            57: 'ドイツ',
            63: 'ドイツ',
            70: 'フランス',
            79: 'フランス',
            128: 'フランス',
            129: 'フランス',
            73: 'ロシア',
            81: 'ロシア'
        };
    },
    73785: function(_ld7, _ld8, _ld9) {
        'use strict';
        var _lda = null;
        var _ldb = this && this.__importDefault || function(_ldc) {
            var _ldd = null;
            return _ldc && _ldc.__esModule ? _ldc : {
                'default': _ldc
            };
        };
        defineModule(_ld8);
        Object.defineProperty(_ld8, '__esModule', {
            'value': true
        }), _ld8.SlotItemEffectParamModel = void 0;
        var _lde = _ldb(_ld9(18622)),
            _ldf = _ld9(72170),
            _ldg = (function() {
                var _ldh = null;

                function _ldi(_ldj, _ldk) {
                    var _ldl = null;
                    this.SLOT_LEVEL_MAX = 10;
                    for (var _ldm = {}, _ldn = {}, _ldo = {}, _ldp = {}, _ldq = {}, _ldr = 0, _lds = _ldk; _ldr < _lds.length; _ldr++) {
                        var _ldt = _lds[_ldr];
                        if (null != _ldt) {
                            null == _ldm[_ldt.mstID] && (_ldm[_ldt.mstID] = new Array()), _ldm[_ldt.mstID].push(_ldt), null == _ldn[_ldt.mstID] ? _ldn[_ldt.mstID] = 1 : _ldn[_ldt.mstID] += 1, null == _ldo[_ldt.equipType] ? _ldo[_ldt.equipType] = 1 : _ldo[_ldt.equipType] += 1, null == _ldp[_ldt.mstID] && (_ldp[_ldt.mstID] = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                                return 0;
                            })), _ldp[_ldt.mstID][_ldt.level]++, null == _ldq[_ldt.mstID] && (_ldq[_ldt.mstID] = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                                return 0;
                            }));
                            for (var _ldu = 0; _ldu <= this.SLOT_LEVEL_MAX && _ldt.level >= _ldu; _ldu++) _ldq[_ldt.mstID][_ldu]++;
                        }
                    }
                    this._have_slots_dict = _ldm, this._have_slotnums_dict = _ldn, this._have_type3nums_dict = _ldo, this._have_level_num_dict = _ldp, this._have_level_num_over_dict = _ldq, this._ship_id = _ldj.mstID, this._yomi = _ldj.yomi, this._stype = _ldj.shipTypeID, this._ctype = _ldj.getClassType();
                }
                return Object.defineProperty(_ldi.prototype, 'have_slots_dict', {
                    'get': function() {
                        var _ldv = null;
                        return this._have_slots_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_ldi.prototype, 'have_level_num_over_dict', {
                    'get': function() {
                        var _ldw = null;
                        return this._have_level_num_over_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_ldi.prototype, 'ship_id', {
                    'get': function() {
                        var _ldx = null;
                        return this._ship_id;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_ldi.prototype, 'yomi', {
                    'get': function() {
                        var _ldy = null;
                        return this._yomi;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_ldi.prototype, 'stype', {
                    'get': function() {
                        var _ldz = null;
                        return this._stype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_ldi.prototype, 'ctype', {
                    'get': function() {
                        var _le0 = null;
                        return this._ctype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), _ldi.prototype.get_slotnums = function(_le1) {
                    var _le2 = null;
                    return null == this._have_slotnums_dict[_le1] ? 0 : this._have_slotnums_dict[_le1];
                }, _ldi.prototype.get_type3_nums = function(_le3) {
                    var _le4 = null;
                    return null == this._have_type3nums_dict[_le3] ? 0 : this._have_type3nums_dict[_le3];
                }, _ldi.prototype.haveSlotLevelNum = function(_le5) {
                    var _le6 = null;
                    return null == this._have_level_num_dict[_le5] ? [] : this._have_level_num_dict[_le5];
                }, _ldi.prototype.haveSlotLevelNumOver = function(_le7) {
                    var _le8 = null;
                    return null == this._have_level_num_over_dict[_le7] ? [] : this._have_level_num_over_dict[_le7];
                }, _ldi.prototype.have_slot_ids = function() {
                    var _le9 = null;
                    return Object.keys(this._have_slots_dict);
                }, _ldi.prototype.get_each_level_nums = function(_lea) {
                    var _leb = null,
                        _lec = this._have_slots_dict[_lea],
                        _led = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        });
                    if (null != _lec)
                        for (var _lee = 0, _lef = _lec; _lee < _lef.length; _lee++) {
                            _led[_lef[_lee].level]++;
                        }
                    return _led;
                }, _ldi.prototype.get_each_level_over_nums = function(_leg) {
                    var _leh = null;
                    for (var _lei = this, _lej = [], _lek = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _lel = function(_lem) {
                            var _len = null;
                            if (_lej[_lem] = Array.apply(null, new Array(_leo.SLOT_LEVEL_MAX + 1)).map(function() {
                                    return 0;
                                }), null == _leo.have_slots_dict[_lem]) return 'continue';
                            _leo.get_each_level_nums(_lem).forEach(function(_lep, _leq) {
                                var _ler = null;
                                for (var _les = 1; _les <= _lei.SLOT_LEVEL_MAX; _les++) _leq >= _les && (_lej[_lem][_les] += _lep, _lek[_les] += _lep);
                            });
                        }, _leo = this, _let = 0, _leu = _leg; _let < _leu.length; _let++) {
                        _lel(_leu[_let]);
                    }
                    return {
                        'slot': _lej,
                        'total': _lek
                    };
                }, _ldi.prototype.getTotalCountWithOverLeveledItem = function(_lev) {
                    var _lew = null;
                    for (var _lex = this, _ley = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _lez = 0, _lf0 = _lev; _lez < _lf0.length; _lez++) {
                        var _lf1 = _lf0[_lez];
                        if (null != this._have_slots_dict[_lf1]) this._have_level_num_dict[_lf1].forEach(function(_lf2, _lf3) {
                            var _lf4 = null;
                            for (var _lf5 = 0; _lf5 <= _lex.SLOT_LEVEL_MAX; _lf5++) _lf3 >= _lf5 && (_ley[_lf5] += _lf2);
                        });
                    }
                    return _ley;
                }, _ldi.prototype.get_have_rader_nums = function() {
                    var _lf6 = null;
                    for (var _lf7 = 0, _lf8 = 0, _lf9 = 0, _lfa = 0, _lfb = this.have_slot_ids(); _lfa < _lfb.length; _lfa++) {
                        var _lfc = _lfb[_lfa],
                            _lfd = _lde.default.model.slot.getMst(_lfc),
                            _lfe = _lfd.equipType;
                        12 != _lfe && 13 != _lfe || (_lfd.sakuteki >= 5 && (_lf7 += this.get_slotnums(parseInt(_lfc))), _lfd.meichu >= 8 && (_lf8 += this.get_slotnums(parseInt(_lfc))), _lfd.taiku >= 2 && (_lf9 += this.get_slotnums(parseInt(_lfc))));
                    }
                    return {
                        'water_rader': _lf7,
                        'high_water_rader': _lf8,
                        'air_rader': _lf9
                    };
                }, _ldi.prototype.getUSSWaterRaderDict = function() {
                    return {
                        279: 1,
                        307: 1,
                        315: 1,
                        456: 1
                    };
                }, _ldi.prototype.getUSSAirRaderDict = function() {
                    return {
                        278: 1,
                        279: 1
                    };
                }, _ldi.prototype.getCountryName = function() {
                    var _lff = null;
                    return null == _ldf.SHIP_COUNTRY[this._ctype] ? '' : _ldf.SHIP_COUNTRY[this._ctype];
                }, _ldi.prototype.getSpItemDict_FukuhouTaikuHeisou = function() {
                    return {
                        10: 0,
                        130: 0,
                        66: 0,
                        220: 0,
                        71: 0,
                        275: 0,
                        464: 0
                    };
                }, _ldi.prototype.getSpItemDict_Tansou21GouDentan = function() {
                    return {
                        30: 0,
                        410: 0
                    };
                }, _ldi;
            }());
        _ld8.SlotItemEffectParamModel = _ldg;
    },
    16718: (_lqm, _lqn, _lqo) => {
        'use strict';
        var _lqp = null;
        defineModule(_lqn);
        Object.defineProperty(_lqn, '__esModule', {
            'value': true
        }), _lqn.TaskGetSlotItemEffectParams = void 0;
        var _lqq = _lqo(74496),
            _lqr = _lqo(82692),
            _lqs = (function() {
                var _lqt = null;

                function _lqu(_lqv, _lqw, _lqx) {
                    var _lqy = null;
                    this._removeSlots = [], this._toSlots = [], this._ship = _lqv;
                    var _lqz = _lqv.getSlotitems();
                    _lqz.push(_lqv.getSlotitemEx());
                    var _lr0 = _lqz.map(function(_lr1) {
                        var _lr2 = null;
                        return null == _lr1 || null != _lqw && _lr1.memID == _lqw.memID ? null : _lr1;
                    });
                    this._removeSlots = _lr0;
                    var _lr3 = _lr0.map(function(_lr4) {
                        return _lr4;
                    });
                    _lr3.push(_lqx), this._toSlots = _lr3;
                }
                return _lqu.prototype.start = function() {
                    var _lr5 = null,
                        _lr6 = this._ship.getSlotitems();
                    _lr6.push(this._ship.getSlotitemEx());
                    var _lr7 = _lqr.SlotItemEffectUtil.getSlotitemEffect(this._ship, _lr6),
                        _lr8 = _lqr.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._removeSlots),
                        _lr9 = _lqr.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._toSlots);
                    return {
                        'fromSlotItemEffect': this._subEffectModels(_lr7, _lr8),
                        'toSlotItemEffect': this._subEffectModels(_lr9, _lr8)
                    };
                }, _lqu.prototype._subEffectModels = function(_lra, _lrb) {
                    var _lrc = null,
                        _lrd = new _lqq.SlotItemEffectModel();
                    return _lrd.houg = _lra.houg - _lrb.houg, _lrd.raig = _lra.raig - _lrb.raig, _lrd.tyku = _lra.tyku - _lrb.tyku, _lrd.souk = _lra.souk - _lrb.souk, _lrd.kaih = _lra.kaih - _lrb.kaih, _lrd.tais = _lra.tais - _lrb.tais, _lrd.saku = _lra.saku - _lrb.saku, _lrd.baku = _lra.baku - _lrb.baku, _lrd.houm = _lra.houm - _lrb.houm, _lrd.leng = _lra.leng - _lrb.leng, _lrd;
                }, _lqu;
            }());
        _lqn.TaskGetSlotItemEffectParams = _lqs;
    },
    69377: function(_mgv, _mgw, _mgx) {
        'use strict';
        var _mgy = null;
        var _mgz = this && this.__importDefault || function(_mh0) {
            var _mh1 = null;
            return _mh0 && _mh0.__esModule ? _mh0 : {
                'default': _mh0
            };
        };
        defineModule(_mgw);
        Object.defineProperty(_mgw, '__esModule', {
            'value': true
        }), _mgw.get25mmMachinegunEffect = void 0;
        var _mh2 = _mgx(74496),
            _mh3 = _mgz(_mgx(18622));
        _mgw.get25mmMachinegunEffect = function(_mh4) {
            var _mh5 = null,
                _mh6 = new _mh2.SlotItemEffectModel(),
                _mh7 = false,
                _mh8 = new _mh2.SlotItemEffectModel(),
                _mh9 = 0,
                _mha = new _mh2.SlotItemEffectModel(),
                _mhb = {},
                _mhc = 0;
            if (662 == _mh4.ship_id || 663 == _mh4.ship_id ? (_mh8.tyku += 2, _mh8.kaih += 1, _mh7 = true) : 668 == _mh4.ship_id ? (_mh8.tyku += 3, _mh8.kaih += 2, _mh7 = true) : 979 == _mh4.ship_id && (_mh8.tyku += 2, _mh8.kaih += 3, _mh7 = true, _mha.kaih += 2, _mhb[49] = _mha, _mhc = 1), 56 == _mh4.ctype && (_mh8.houg += 1, _mh8.tyku += 2, _mh8.kaih += 2, _mh7 = true, _mh9 = 1), Object.keys(_mhb).forEach(function(_mhd) {
                    var _mhe = null,
                        _mhf = _mhb[parseInt(_mhd)],
                        _mhg = _mh4.get_slotnums(parseInt(_mhd));
                    _mh6.add(_mhf.multiply(_mhg));
                }), _mhc > 0) {
                var _mhh = _mh4.get_each_level_over_nums([49, 39, 40, 131]),
                    _mhi = _mhh.slot[49],
                    _mhj = _mhh.slot[39],
                    _mhk = _mhh.slot[40],
                    _mhl = _mhh.slot[131];
                1 == _mhc && (_mhi[6] >= 1 && (_mh6.houm += 1 * _mhi[6]), _mhi[7] >= 1 && (_mh6.tyku += 1 * _mhi[7]), _mhi[8] >= 1 && (_mh6.kaih += 1 * _mhi[8]), _mhi[9] >= 1 && (_mh6.tyku += 1 * _mhi[9]), _mhi[10] >= 1 && (_mh6.houg += 1 * _mhi[10]), _mhj[8] >= 1 && (_mh6.kaih += 1 * _mhj[8]), _mhj[9] >= 1 && (_mh6.tyku += 2 * _mhj[9]), _mhj[10] >= 1 && (_mh6.houg += 1 * _mhj[10]), _mhk[9] >= 1 && (_mh6.tyku += 2 * _mhk[9]), _mhk[10] >= 1 && (_mh6.houg += 1 * _mhk[10]), _mhl[10] >= 1 && (_mh6.tyku += 2 * _mhl[10]));
            }
            if (0 == _mh7) return _mh6;
            var _mhm = _mh4.get_slotnums(39) + _mh4.get_slotnums(40) + _mh4.get_slotnums(49) + _mh4.get_slotnums(131);
            if (_mh6.add(_mh8.multiply(_mhm)), 0 == _mh9) return _mh6;
            for (var _mhn = 0, _mho = 0, _mhp = _mh4.have_slot_ids(); _mho < _mhp.length; _mho++) {
                var _mhq = _mhp[_mho],
                    _mhr = _mh3.default.model.slot.getMst(_mhq),
                    _mhs = _mhr.equipType;
                12 != _mhs && 13 != _mhs || (_mhr.sakuteki >= 5 && _mh4.get_slotnums(parseInt(_mhq)), _mhr.taiku >= 2 && (_mhn += _mh4.get_slotnums(parseInt(_mhq))));
            }
            return _mhn >= 1 && 1 == _mh9 && (_mh6.tyku += 2, _mh6.kaih += 2), _mh6;
        };
    },
    77670: function(_mht, _mhu, _mhv) {
        'use strict';
        var _mhw = null;
        var _mhx = this && this.__importDefault || function(_mhy) {
            var _mhz = null;
            return _mhy && _mhy.__esModule ? _mhy : {
                'default': _mhy
            };
        };
        defineModule(_mhu);
        Object.defineProperty(_mhu, '__esModule', {
            'value': true
        }), _mhu.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mi0 = _mhv(74496),
            _mi1 = _mhx(_mhv(18622));
        _mhu.get8cmAntiAircraftGunPersonalEffect = function(_mi2) {
            var _mi3 = null,
                _mi4 = new _mi0.SlotItemEffectModel(),
                _mi5 = false,
                _mi6 = new _mi0.SlotItemEffectModel(),
                _mi7 = 0;
            if (501 != _mi2.ship_id && 506 != _mi2.ship_id && 502 != _mi2.ship_id && 507 != _mi2.ship_id || (_mi6.tyku += 2, _mi6.kaih += 1, _mi5 = true, _mi7 = 1), 501 != _mi2.ship_id && 506 != _mi2.ship_id || (_mi6.houg += 1, _mi6.tyku += 2, _mi6.kaih += 2, _mi5 = true, _mi7 = 1), 0 == _mi5) return _mi4;
            var _mi8 = _mi2.get_slotnums(66) + _mi2.get_slotnums(220);
            _mi4.add(_mi6.multiply(_mi8));
            for (var _mi9 = 0, _mia = 0, _mib = _mi2.have_slot_ids(); _mia < _mib.length; _mia++) {
                var _mic = _mib[_mia],
                    _mid = _mi1.default.model.slot.getMst(_mic),
                    _mie = _mid.equipType;
                12 != _mie && 13 != _mie || (_mid.sakuteki >= 5 && _mi2.get_slotnums(parseInt(_mic)), _mid.taiku >= 2 && (_mi9 += _mi2.get_slotnums(parseInt(_mic))));
            }
            return 0 == _mi7 || _mi9 >= 1 && (_mi4.tyku += 1, _mi4.kaih += 2), _mi4;
        };
    },
    34165: (_mif, _mig, _mih) => {
        'use strict';
        var _mii = null;
        defineModule(_mig);
        Object.defineProperty(_mig, '__esModule', {
            'value': true
        }), _mig.getCamouflageSlotPersonalEffect = void 0;
        var _mij = _mih(74496);
        _mig.getCamouflageSlotPersonalEffect = function(_mik) {
            var _mil = null,
                _mim = new _mij.SlotItemEffectModel();
            return 'きそ' != _mik.yomi && 'たま' != _mik.yomi || (_mim.kaih = 7, _mim.souk = 2), _mim;
        };
    },
    31127: (_min, _mio, _mip) => {
        'use strict';
        var _miq = null;
        defineModule(_mio);
        Object.defineProperty(_mio, '__esModule', {
            'value': true
        }), _mio.getHighZuiunSeriesEffect = void 0;
        var _mir = _mip(74496);
        _mio.getHighZuiunSeriesEffect = function(_mis) {
            var _mit = null,
                _miu = new _mir.SlotItemEffectModel(),
                _miv = false,
                _miw = new _mir.SlotItemEffectModel();
            if (662 == _mis.ship_id ? (_miu.houg += 3, _miu.kaih += 1) : 663 == _mis.ship_id || 668 == _mis.ship_id || 501 == _mis.ship_id || 506 == _mis.ship_id || 553 == _mis.ship_id || 554 == _mis.ship_id ? (_miw.houg += 3, _miw.kaih += 2, _miw.tyku += 1, _miv = true) : 502 != _mis.ship_id && 507 != _mis.ship_id || (_miw.houg += 2, _miw.kaih += 2, _miw.tyku += 1, _miv = true), 0 == _miv) return _miu;
            var _mix = 0;
            return [237, 322, 323, 490].forEach(function(_miy) {
                var _miz = null;
                _mix += _mis.get_slotnums(_miy);
            }), _miu.add(_miw.multiply(_mix)), _miu;
        };
    },
    81018: function(_mj0, _mj1, _mj2) {
        'use strict';
        var _mj3 = null;
        var _mj4 = this && this.__importDefault || function(_mj5) {
            var _mj6 = null;
            return _mj5 && _mj5.__esModule ? _mj5 : {
                'default': _mj5
            };
        };
        defineModule(_mj1);
        Object.defineProperty(_mj1, '__esModule', {
            'value': true
        }), _mj1.getRaderPrivateEffect = void 0;
        var _mj7 = _mj2(74496),
            _mj8 = _mj4(_mj2(18622));
        _mj1.getRaderPrivateEffect = function(_mj9) {
            var _mja = null,
                _mjb = new _mj7.SlotItemEffectModel(),
                _mjc = 0,
                _mjd = 0;
            if (569 == _mj9.ship_id || 648 == _mj9.ship_id || 961 == _mj9.ship_id || 951 == _mj9.ship_id) _mjc = 1;
            else {
                if (955 != _mj9.ship_id && 960 != _mj9.ship_id && 956 != _mj9.ship_id) return _mjb;
                _mjc = 2, _mjd = 1;
            }
            for (var _mje = 0, _mjf = 0, _mjg = _mj9.have_slot_ids(); _mjf < _mjg.length; _mjf++) {
                var _mjh = _mjg[_mjf],
                    _mji = _mj8.default.model.slot.getMst(_mjh),
                    _mjj = _mji.equipType;
                12 != _mjj && 13 != _mjj || (_mji.sakuteki >= 5 && _mj9.get_slotnums(parseInt(_mjh)), _mji.taiku >= 2 && (_mje += _mj9.get_slotnums(parseInt(_mjh))));
            }
            if (_mje > 0 && (1 == _mjc ? (_mjb.houg += 1, _mjb.kaih += 3, _mjb.tyku += 2) : 2 == _mjc && (_mjb.tyku += 2, _mjb.kaih += 1)), 0 == _mjd) return _mjb;
            for (var _mjk = [], _mjl = function(_mjm) {
                    var _mjn = null;
                    if (null == _mj9.have_slots_dict[_mjm]) return 'continue';
                    var _mjo = _mj9.get_each_level_nums(_mjm);
                    null == _mjk[_mjm] && (_mjk[_mjm] = []), _mjo.forEach(function(_mjp, _mjq) {
                        var _mjr = null;
                        for (var _mjs = 1; _mjs <= _mj9.SLOT_LEVEL_MAX; _mjs++) null == _mjk[_mjm][_mjs] && (_mjk[_mjm][_mjs] = 0), _mjq >= _mjs && (_mjk[_mjm][_mjs] += _mjp);
                    });
                }, _mjt = 0, _mju = [450]; _mjt < _mju.length; _mjt++) {
                _mjl(_mju[_mjt]);
            }
            var _mjv = null != _mjk[450] ? _mjk[450][4] : 0;
            return 1 == _mjd && _mjv > 0 && (_mjb.houg += 1, _mjb.houm += 1, _mjb.tyku += 1, _mjb.kaih += 2), _mjb;
        };
    },
    56716: (_mjw, _mjx, _mjy) => {
        'use strict';
        var _mjz = null;
        defineModule(_mjx);
        Object.defineProperty(_mjx, '__esModule', {
            'value': true
        }), _mjx.getSearchLightEffect = void 0;
        var _mk0 = _mjy(74496);
        _mjx.getSearchLightEffect = function(_mk1) {
            var _mk2 = null,
                _mk3 = new _mk0.SlotItemEffectModel(),
                _mk4 = _mk1.get_type3_nums(29);
            return 'ひえい' == _mk1.yomi || 'きりしま' == _mk1.yomi || 'ちょうかい' == _mk1.yomi || 'じんつう' == _mk1.yomi || 'あかつき' == _mk1.yomi ? (_mk3.houg += 4, _mk3.kaih -= 1) : 'あきぐも' == _mk1.yomi ? _mk3.houg = _mk3.houg + 2 * _mk4 : 'ゆきかぜ' == _mk1.yomi && (_mk3.houg = _mk3.houg + _mk4, _mk3.tyku = _mk3.tyku + _mk4), 662 != _mk1.ship_id && 663 != _mk1.ship_id && 668 != _mk1.ship_id || (_mk3.raig += 2, _mk3.houg += 4), 'じんつう' == _mk1.yomi && (_mk3.raig += 8, _mk3.houg += 4), _mk3;
        };
    },
    17713: (_mk5, _mk6, _mk7) => {
        'use strict';
        var _mk8 = null;
        defineModule(_mk6);
        Object.defineProperty(_mk6, '__esModule', {
            'value': true
        }), _mk6.getSearchLightLargeEffect = void 0;
        var _mk9 = _mk7(74496);
        _mk6.getSearchLightLargeEffect = function(_mka) {
            var _mkb = null,
                _mkc = new _mk9.SlotItemEffectModel();
            'ひえい' == _mka.yomi || 'きりしま' == _mka.yomi ? (_mkc.houg += 6, _mkc.kaih -= 2) : 'やまと' != _mka.yomi && 'むさし' != _mka.yomi || (_mkc.houg += 4, _mkc.kaih -= 1);
            var _mkd = _mka.get_slotnums(174);
            return 592 == _mka.ship_id ? (_mkc.houg += 3, _mkc.raig += 3, _mkd > 0 && (_mkc.raig += 5)) : 694 == _mka.ship_id && (_mkc.houg += 4, _mkc.raig += 1, _mkd > 0 && (_mkc.raig += 7)), _mkc;
        };
    },
    17213: (_mke, _mkf, _mkg) => {
        'use strict';
        var _mkh = null;
        defineModule(_mkf);
        Object.defineProperty(_mkf, '__esModule', {
            'value': true
        }), _mkf.getSlot100PersonalEffect = void 0;
        var _mki = _mkg(74496);
        _mkf.getSlot100PersonalEffect = function(_mkj) {
            var _mkk = null,
                _mkl = new _mki.SlotItemEffectModel(),
                _mkm = new _mki.SlotItemEffectModel();
            if (553 == _mkj.ship_id) _mkm.houg = 4;
            else {
                if (554 != _mkj.ship_id) return 196 == _mkj.ship_id ? (_mkl.houg = 3, _mkl) : 197 == _mkj.ship_id ? (_mkl.houg = 6, _mkl) : _mkl;
                _mkm.houg = 4;
            }
            var _mkn = _mkj.get_slotnums(100);
            return _mkl = _mkm.multiply(_mkn);
        };
    },
    40176: (_mko, _mkp, _mkq) => {
        'use strict';
        var _mkr = null;
        defineModule(_mkp);
        Object.defineProperty(_mkp, '__esModule', {
            'value': true
        }), _mkp.getSlot104PersonalEffect = void 0;
        var _mks = _mkq(74496);
        _mkp.getSlot104PersonalEffect = function(_mkt) {
            var _mku = null,
                _mkv = new _mks.SlotItemEffectModel(),
                _mkw = new _mks.SlotItemEffectModel();
            if (149 == _mkt.ship_id || 591 == _mkt.ship_id) _mkw.houg = 2;
            else {
                if (150 == _mkt.ship_id || 592 == _mkt.ship_id) _mkw.houg = 1;
                else {
                    if (152 == _mkt.ship_id || 694 == _mkt.ship_id) _mkw.houg = 1;
                    else {
                        if (151 != _mkt.ship_id && 593 != _mkt.ship_id && 954 != _mkt.ship_id) return _mkv;
                        _mkw.houg = 2, _mkw.tyku = 1, _mkw.kaih = 2;
                    }
                }
            }
            var _mkx = _mkt.get_slotnums(104);
            return _mkv = _mkw.multiply(_mkx);
        };
    },
    32889: (_mky, _mkz, _ml0) => {
        'use strict';
        var _ml1 = null;
        defineModule(_mkz);
        Object.defineProperty(_mkz, '__esModule', {
            'value': true
        }), _mkz.getSlot106PersonalEffect = void 0;
        var _ml2 = _ml0(74496);
        _mkz.getSlot106PersonalEffect = function(_ml3) {
            var _ml4 = null,
                _ml5 = new _ml2.SlotItemEffectModel(),
                _ml6 = new _ml2.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_ml3.ship_id) >= 0 ? (_ml6.houg += 1, _ml6.tyku += 2, _ml6.souk += 1, _ml6.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_ml3.yomi) >= 0 ? (_ml6.tyku += 1, _ml6.souk += 1, _ml6.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_ml3.yomi) >= 0 && (_ml6.tyku += 2, _ml6.souk += 1, _ml6.kaih += 2, 663 != _ml3.ship_id && 668 != _ml3.ship_id || (_ml5.houg += 1, _ml5.tyku += 1, _ml5.souk += 1, _ml5.kaih += 1), 668 == _ml3.ship_id && (_ml5.tyku += 1, _ml5.kaih += 1)), !_ml6.exists()) return _ml5;
            var _ml7 = _ml3.get_slotnums(106) + _ml3.get_slotnums(450);
            return _ml5.add(_ml6.multiply(_ml7)), _ml5;
        };
    },
    15133: (_ml8, _ml9, _mla) => {
        'use strict';
        var _mlb = null;
        defineModule(_ml9);
        Object.defineProperty(_ml9, '__esModule', {
            'value': true
        }), _ml9.getSlot115PersonalEffect = void 0;
        var _mlc = _mla(74496);
        _ml9.getSlot115PersonalEffect = function(_mld) {
            var _mle = null,
                _mlf = new _mlc.SlotItemEffectModel(),
                _mlg = false,
                _mlh = new _mlc.SlotItemEffectModel(),
                _mli = 0;
            if (55 != _mld.ctype && 47 != _mld.ctype || (_mlh.houg += 2, _mlh.saku += 2, _mlh.kaih += 1, _mlg = true, _mli = 1), 0 == _mlg) return _mlf;
            var _mlj = _mld.get_slotnums(115);
            if (_mlf.add(_mlh.multiply(_mlj)), 0 == _mli) return _mlf;
            var _mlk = _mld.get_each_level_nums(115)[10];
            return 1 == _mli && (_mlf.houg += 1 * _mlk, _mlf.kaih += 1 * _mlk), _mlf;
        };
    },
    55747: (_mll, _mlm, _mln) => {
        'use strict';
        var _mlo = null;
        defineModule(_mlm);
        Object.defineProperty(_mlm, '__esModule', {
            'value': true
        }), _mlm.getSlot118PersonalEffect = void 0;
        var _mlp = _mln(74496);
        _mlm.getSlot118PersonalEffect = function(_mlq) {
            var _mlr = null,
                _mls = new _mlp.SlotItemEffectModel(),
                _mlt = false,
                _mlu = new _mlp.SlotItemEffectModel(),
                _mlv = 0;
            if (52 == _mlq.ctype && (_mlu.houg += 1, _mlu.saku += 2, _mlu.kaih += 2, _mlv = 1, _mlt = true), 507 == _mlq.ship_id && (_mlu.houg += 3, _mlu.saku += 2, _mlu.kaih += 1, _mlv = 2, _mlt = true), 0 == _mlt) return _mls;
            var _mlw = _mlq.get_slotnums(118) + _mlq.get_slotnums(521);
            if (_mls.add(_mlu.multiply(_mlw)), 0 == _mlq.get_slotnums(118)) return _mls;
            if (0 == _mlv) return _mls;
            var _mlx = _mlq.get_each_level_nums(118),
                _mly = 0,
                _mlz = 0,
                _mm0 = 0,
                _mm1 = _mlx[10];
            return _mlx.forEach(function(_mm2, _mm3) {
                _mm3 >= 2 && (_mly += _mm2), _mm3 >= 5 && (_mlz += _mm2), _mm3 >= 7 && (_mm0 += _mm2);
            }), 1 == _mlv ? (_mls.houg += 2 * _mm1, _mls.saku += 1 * _mm1) : 2 == _mlv && (_mls.houm += 1 * _mly, _mls.kaih += 1 * _mlz, _mls.houg += 1 * _mm0, _mls.houg += 1 * _mm1, _mls.raig += 1 * _mm1, _mls.tyku += 1 * _mm1, _mls.saku += 1 * _mm1, _mls.kaih += 1 * _mm1), _mls;
        };
    },
    11285: (_mm4, _mm5, _mm6) => {
        'use strict';
        var _mm7 = null;
        defineModule(_mm5);
        Object.defineProperty(_mm5, '__esModule', {
            'value': true
        }), _mm5.getSlot119PersonalEffect = void 0;
        var _mm8 = _mm6(74496);
        _mm5.getSlot119PersonalEffect = function(_mm9) {
            var _mma = null,
                _mmb = new _mm8.SlotItemEffectModel(),
                _mmc = new _mm8.SlotItemEffectModel();
            34 == _mm9.ctype || 56 == _mm9.ctype ? _mmc.houg += 1 : 90 == _mm9.ctype && (_mmc.houg += 2, _mmc.raig += 1);
            var _mmd = true;
            if (_mmc.exists() || (_mmd = false), 0 == _mmd) return _mmb;
            var _mme = _mm9.get_slotnums(119);
            return _mmb = _mmc.multiply(_mme);
        };
    },
    96200: (_mmf, _mmg, _mmh) => {
        'use strict';
        var _mmi = null;
        defineModule(_mmg);
        Object.defineProperty(_mmg, '__esModule', {
            'value': true
        }), _mmg.getSlot120mm50GroupPersonalEffect = void 0;
        var _mmj = _mmh(74496);
        _mmg.getSlot120mm50GroupPersonalEffect = function(_mmk) {
            var _mml = null,
                _mmm = new _mmj.SlotItemEffectModel(),
                _mmn = false,
                _mmo = new _mmj.SlotItemEffectModel(),
                _mmp = _mmk.get_slotnums(147),
                _mmq = _mmk.get_slotnums(393),
                _mmr = _mmk.get_slotnums(394),
                _mms = new _mmj.SlotItemEffectModel(),
                _mmt = new _mmj.SlotItemEffectModel();
            if (61 == _mmk.ctype && (_mmo.houg += 1, _mmo.kaih += 1, _mmn = true, _mmq >= 1 && (_mms.houg += 1, _mms.tyku += 1), _mmr >= 1 && (_mmt.houg += 1, _mmt.tyku += 1, _mmt.kaih += 1, 'グレカーレ' == _mmk.yomi && (_mmt.kaih += 1)), 1), 0 == _mmn) return _mmm;
            var _mmu = _mmp + _mmq + _mmr;
            _mmm.add(_mmo.multiply(_mmu)).add(_mms.multiply(_mmq)).add(_mmt.multiply(_mmr));
            var _mmv = _mmk.get_each_level_over_nums([394]).slot[394];
            return _mmv[7] >= 1 && (_mmm.houm += 1 * _mmv[7], 'グレカーレ' == _mmk.yomi && (_mmm.houg += 1 * _mmv[7])), _mmv[8] >= 1 && (_mmm.houg += 1 * _mmv[8]), _mmv[9] >= 1 && (_mmm.houm += 1 * _mmv[9]), _mmv[10] >= 1 && (_mmm.houg += 1 * _mmv[10], 'グレカーレ' == _mmk.yomi && (_mmm.kaih += 1 * _mmv[10])), _mmm;
        };
    },
    33155: function(_mmw, _mmx, _mmy) {
        'use strict';
        var _mmz = null;
        var _mn0 = this && this.__importDefault || function(_mn1) {
            var _mn2 = null;
            return _mn1 && _mn1.__esModule ? _mn1 : {
                'default': _mn1
            };
        };
        defineModule(_mmx);
        Object.defineProperty(_mmx, '__esModule', {
            'value': true
        }), _mmx.getSlot121PersonalEffect = void 0;
        var _mn3 = _mmy(74496),
            _mn4 = _mn0(_mmy(18622));
        _mmx.getSlot121PersonalEffect = function(_mn5) {
            var _mn6 = null,
                _mn7 = new _mn3.SlotItemEffectModel(),
                _mn8 = 0,
                _mn9 = new _mn3.SlotItemEffectModel(),
                _mna = false;
            54 == _mn5.ctype && (_mn7.tyku += 4, _mn7.kaih += 2, _mn8 = 1), 968 == _mn5.ship_id && (_mn9.houg += 1, _mn9.tyku += 1, _mn9.kaih += 1, _mna = true);
            var _mnb = _mn5.get_slotnums(121);
            if (_mna && _mn7.add(_mn9.multiply(_mnb)), 0 == _mn8) return _mn7;
            for (var _mnc = 0, _mnd = 0, _mne = _mn5.have_slot_ids(); _mnd < _mne.length; _mnd++) {
                var _mnf = _mne[_mnd],
                    _mng = _mn4.default.model.slot.getMst(_mnf),
                    _mnh = _mng.equipType;
                12 != _mnh && 13 != _mnh || (_mng.sakuteki >= 5 && _mn5.get_slotnums(parseInt(_mnf)), _mng.taiku >= 2 && (_mnc += _mn5.get_slotnums(parseInt(_mnf))));
            }
            return _mnc >= 1 && (_mn7.tyku += 2, _mn7.kaih += 2, 968 == _mn5.ship_id && (_mn7.houg += 1 * _mnb, _mn7.houm += 1 * _mnb)), _mn7;
        };
    },
    9115: function(_mni, _mnj, _mnk) {
        'use strict';
        var _mnl = null;
        var _mnm = this && this.__importDefault || function(_mnn) {
            var _mno = null;
            return _mnn && _mnn.__esModule ? _mnn : {
                'default': _mnn
            };
        };
        defineModule(_mnj);
        Object.defineProperty(_mnj, '__esModule', {
            'value': true
        }), _mnj.getSlot122PersonalEffect = void 0;
        var _mnp = _mnk(74496),
            _mnq = _mnm(_mnk(18622));
        _mnj.getSlot122PersonalEffect = function(_mnr) {
            var _mns = null,
                _mnt = new _mnp.SlotItemEffectModel(),
                _mnu = 0,
                _mnv = 0,
                _mnw = false;
            656 == _mnr.ship_id && (_mnw = true, _mnu = 1, _mnv = 1);
            var _mnx = 0,
                _mny = 0,
                _mnz = _mnr.get_each_level_nums(122),
                _mo0 = 0;
            if (_mnw) {
                _mnz.forEach(function(_mo1, _mo2) {
                    _mo2 >= 4 && (_mo0 += _mo1);
                });
                for (var _mo3 = 0, _mo4 = _mnr.have_slot_ids(); _mo3 < _mo4.length; _mo3++) {
                    var _mo5 = _mo4[_mo3],
                        _mo6 = _mnq.default.model.slot.getMst(_mo5),
                        _mo7 = _mo6.equipType;
                    12 != _mo7 && 13 != _mo7 || (_mo6.sakuteki >= 5 && (_mnx += _mnr.get_slotnums(parseInt(_mo5))), _mo6.taiku >= 2 && (_mny += _mnr.get_slotnums(parseInt(_mo5))));
                }
            }
            return _mo0 > 0 && (1 == _mnv && (_mnx > 0 && (_mnt.houg += 4, _mnt.kaih += 3), _mny > 0 && (_mnt.tyku += 4, _mnt.kaih += 3)), 1 == _mnu && (_mnt.houg += 5 * _mo0, _mnt.tyku += 3 * _mo0, _mnt.kaih += 2 * _mo0)), _mnt;
        };
    },
    85127: (_mo8, _mo9, _moa) => {
        'use strict';
        var _mob = null;
        defineModule(_mo9);
        Object.defineProperty(_mo9, '__esModule', {
            'value': true
        }), _mo9.getSlot123PersonalEffect = void 0;
        var _moc = _moa(74496);
        _mo9.getSlot123PersonalEffect = function(_mod) {
            var _moe = null,
                _mof = new _moc.SlotItemEffectModel(),
                _mog = (new _moc.SlotItemEffectModel(), 0),
                _moh = (_mod.get_slotnums(123), _mod.get_slotnums(124));
            if ('ドイツ' != _mod.getCountryName()) return _mof;
            _mog = 1, _moh >= 1 && (_mof.kaih += 1 * _moh);
            var _moi = _mod.get_each_level_over_nums([123, 124]),
                _moj = _moi.slot[123],
                _mok = _moi.slot[124];
            return 1 == _mog && (_moj[5] >= 1 && (_mof.houg += 1 * _moj[5]), _moj[7] >= 1 && (_mof.houm += 1 * _moj[7]), _moj[9] >= 1 && (_mof.houg += 1 * _moj[9]), _moj[10] >= 1 && (_mof.houm += 1 * _moj[10]), _mok[8] >= 1 && (_mof.kaih += 1 * _mok[8]), _mok[10] >= 1 && (_mof.houm += 1 * _mok[10])), _mof;
        };
    },
    87204: (_mol, _mom, _mon) => {
        'use strict';
        var _moo = null;
        defineModule(_mom);
        Object.defineProperty(_mom, '__esModule', {
            'value': true
        }), _mom.getSlot124PersonalEffect = void 0;
        var _mop = _mon(74496);
        _mom.getSlot124PersonalEffect = function(_moq) {
            var _mor = null,
                _mos = new _mop.SlotItemEffectModel(),
                _mot = (new _mop.SlotItemEffectModel(), 0),
                _mou = _moq.getCountryName();
            if ('ドイツ' == _mou) _mot = 1;
            else {
                if ('イタリア' != _mou) return _mos;
                _mot = 2;
            }
            var _mov = _moq.get_each_level_over_nums([124]).slot[124];
            return 1 == _mot ? (_mov[7] >= 1 && (_mos.houm += 1 * _mov[7]), _mov[8] >= 1 && (_mos.houg += 1 * _mov[8]), _mov[9] >= 1 && (_mos.tyku += 1 * _mov[9]), _mov[10] >= 1 && (_mos.houm += 1 * _mov[10])) : 2 == _mot && (_mov[8] >= 1 && (_mos.houm += 1 * _mov[8]), _mov[9] >= 1 && (_mos.tyku += 1 * _mov[9]), _mov[10] >= 1 && (_mos.houg += 1 * _mov[10])), _mos;
        };
    },
    37173: (_mow, _mox, _moy) => {
        'use strict';
        var _moz = null;
        defineModule(_mox);
        Object.defineProperty(_mox, '__esModule', {
            'value': true
        }), _mox.getSlot129PersonalEffect = void 0;
        var _mp0 = _moy(74496);
        _mox.getSlot129PersonalEffect = function(_mp1) {
            var _mp2 = null,
                _mp3 = new _mp0.SlotItemEffectModel(),
                _mp4 = false,
                _mp5 = new _mp0.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_mp1.ctype) >= 0 ? (_mp5.houg = 1, _mp5.raig = 2, _mp5.kaih = 2, _mp5.tais = 2, _mp5.saku = 1, _mp4 = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_mp1.ctype) >= 0 ? (_mp5.houg = 1, _mp5.raig = 2, _mp5.kaih = 2, _mp5.saku = 3, _mp4 = true) : [7, 13, 29, 8, 9, 31].indexOf(_mp1.ctype) >= 0 && (_mp5.houg = 1, _mp5.kaih = 2, _mp5.saku = 3, _mp4 = true), 0 == _mp4) return _mp3;
            var _mp6 = _mp1.get_slotnums(129);
            return _mp3 = _mp5.multiply(_mp6);
        };
    },
    73254: (_mp7, _mp8, _mp9) => {
        'use strict';
        var _mpa = null;
        defineModule(_mp8);
        Object.defineProperty(_mp8, '__esModule', {
            'value': true
        }), _mp8.getSlot12PersonalEffect = void 0;
        var _mpb = _mp9(74496);
        _mp8.getSlot12PersonalEffect = function(_mpc) {
            var _mpd = null,
                _mpe = new _mpb.SlotItemEffectModel(),
                _mpf = false,
                _mpg = new _mpb.SlotItemEffectModel(),
                _mph = _mpc.get_slotnums(142) + _mpc.get_slotnums(460);
            if (37 == _mpc.ctype && (_mpg.houg += 1, _mpg.kaih += 1, _mpg.houm += 1, _mph >= 1 && (_mpe.kaih += 1, _mpe.houm += 1), _mpf = true), 0 == _mpf) return _mpe;
            var _mpi = _mpc.get_slotnums(12);
            return _mpe.add(_mpg.multiply(_mpi)), _mpe;
        };
    },
    41410: (_mpj, _mpk, _mpl) => {
        'use strict';
        var _mpm = null;
        defineModule(_mpk);
        Object.defineProperty(_mpk, '__esModule', {
            'value': true
        }), _mpk.getSlot130PersonalEffect = void 0;
        var _mpn = _mpl(74496);
        _mpk.getSlot130PersonalEffect = function(_mpo) {
            var _mpp = null,
                _mpq = new _mpn.SlotItemEffectModel(),
                _mpr = _mpo.have_level_num_over_dict[130];
            return null == _mpr || (428 == _mpo.ship_id ? (_mpr[1] >= 1 && (_mpq.tyku += 1 * _mpr[1]), _mpr[3] >= 1 && (_mpq.kaih += 1 * _mpr[3]), _mpr[5] >= 1 && (_mpq.houm += 1 * _mpr[5]), _mpr[7] >= 1 && (_mpq.tyku += 1 * _mpr[7]), _mpr[8] >= 1 && (_mpq.kaih += 1 * _mpr[8]), _mpr[9] >= 1 && (_mpq.tyku += 1 * _mpr[9]), _mpr[10] >= 1 && (_mpq.houg += 1 * _mpr[10])) : 141 == _mpo.ship_id && (_mpr[2] >= 1 && (_mpq.tyku += 1 * _mpr[2]), _mpr[4] >= 1 && (_mpq.kaih += 1 * _mpr[4]), _mpr[6] >= 1 && (_mpq.houm += 1 * _mpr[6]), _mpr[8] >= 1 && (_mpq.tyku += 1 * _mpr[8]), _mpr[10] >= 1 && (_mpq.kaih += 1 * _mpr[10])), 1 == _mpo.stype && (_mpr[3] >= 1 && (_mpq.tyku += 1 * _mpr[3]), _mpr[6] >= 1 && (_mpq.kaih += 1 * _mpr[6]), _mpr[9] >= 1 && (_mpq.tyku += 1 * _mpr[9]), _mpr[10] >= 1 && (_mpq.kaih += 1 * _mpr[10]))), _mpq;
        };
    },
    93373: (_mps, _mpt, _mpu) => {
        'use strict';
        var _mpv = null;
        defineModule(_mpt);
        Object.defineProperty(_mpt, '__esModule', {
            'value': true
        }), _mpt.getSlot132PersonalEffect = void 0;
        var _mpw = _mpu(74496);
        _mpt.getSlot132PersonalEffect = function(_mpx) {
            var _mpy = null,
                _mpz = new _mpw.SlotItemEffectModel(),
                _mq0 = _mpx.get_each_level_nums(132),
                _mq1 = 0,
                _mq2 = 0,
                _mq3 = 0,
                _mq4 = 0,
                _mq5 = 0;
            return _mq0.forEach(function(_mq6, _mq7) {
                _mq7 >= 3 && (_mq1 += _mq6), _mq7 >= 5 && (_mq2 += _mq6), _mq7 >= 7 && (_mq3 += _mq6), _mq7 >= 8 && (_mq4 += _mq6), _mq7 >= 9 && (_mq5 += _mq6);
            }), _mq1 >= 1 && (_mpz.kaih += 1), _mq2 >= 1 && (_mpz.tais += 1), _mq3 >= 1 && (_mpz.kaih += 1), _mq4 >= 1 && (_mpz.tais += 1), _mq5 >= 1 && (_mpz.houm += 1), _mq0[10] >= 1 && (_mpz.tais += 1), 911 != _mpx.ship_id && 916 != _mpx.ship_id && 546 != _mpx.ship_id || (_mpz.kaih += 1), 461 != _mpx.ship_id && 466 != _mpx.ship_id && 462 != _mpx.ship_id && 467 != _mpx.ship_id && 156 != _mpx.ship_id || (_mpz.kaih += 2), _mpz;
        };
    },
    88838: (_mq8, _mq9, _mqa) => {
        'use strict';
        var _mqb = null;
        defineModule(_mq9);
        Object.defineProperty(_mq9, '__esModule', {
            'value': true
        }), _mq9.getSlot136PersonalEffect = void 0;
        var _mqc = _mqa(74496);
        _mq9.getSlot136PersonalEffect = function(_mqd) {
            var _mqe = null,
                _mqf = new _mqc.SlotItemEffectModel(),
                _mqg = 0;
            if (58 != _mqd.ctype && 61 != _mqd.ctype && 64 != _mqd.ctype && 68 != _mqd.ctype && 80 != _mqd.ctype && 92 != _mqd.ctype && 113 != _mqd.ctype && 124 != _mqd.ctype || (_mqf.souk += 2, _mqf.kaih += 1, _mqg = 1), 879 == _mqd.ship_id && (_mqf.souk += 1, _mqf.kaih += 1), 0 == _mqg) return _mqf;
            var _mqh = _mqd.get_each_level_nums(136),
                _mqi = 0,
                _mqj = 0,
                _mqk = _mqh[10];
            return _mqg > 0 && _mqh.forEach(function(_mql, _mqm) {
                _mqm >= 3 && (_mqi += _mql), _mqm >= 6 && (_mqj += _mql);
            }), 1 == _mqg && (_mqi >= 1 && (_mqf.souk += 1 * _mqi), _mqj >= 1 && (_mqf.souk += 1 * _mqj), _mqk >= 1 && (_mqf.souk += 1 * _mqk)), _mqf;
        };
    },
    17274: (_mqn, _mqo, _mqp) => {
        'use strict';
        var _mqq = null;
        defineModule(_mqo);
        Object.defineProperty(_mqo, '__esModule', {
            'value': true
        }), _mqo.getSlot139PersonalEffect = void 0;
        var _mqr = _mqp(74496);
        _mqo.getSlot139PersonalEffect = function(_mqs) {
            var _mqt = null,
                _mqu = new _mqr.SlotItemEffectModel(),
                _mqv = false,
                _mqw = new _mqr.SlotItemEffectModel();
            if (662 != _mqs.ship_id && 663 != _mqs.ship_id && 668 != _mqs.ship_id || (_mqw.houg += 2, _mqw.tyku += 1, _mqv = true), 0 == _mqv) return _mqu;
            var _mqx = _mqs.get_slotnums(139);
            return _mqu.add(_mqw.multiply(_mqx)), _mqu;
        };
    },
    6482: (_mqy, _mqz, _mr0) => {
        'use strict';
        var _mr1 = null;
        defineModule(_mqz);
        Object.defineProperty(_mqz, '__esModule', {
            'value': true
        }), _mqz.getSlot13_8cmRensouhouPersonalEffect = void 0;
        var _mr2 = _mr0(74496);
        _mqz.getSlot13_8cmRensouhouPersonalEffect = function(_mr3) {
            var _mr4 = null,
                _mr5 = new _mr2.SlotItemEffectModel(),
                _mr6 = false,
                _mr7 = new _mr2.SlotItemEffectModel(),
                _mr8 = 0,
                _mr9 = _mr3.getCountryName(),
                _mra = _mr3.get_slotnums(534),
                _mrb = _mr3.get_slotnums(535);
            if ('フランス' == _mr9 && (_mr7.houg += 2, _mr7.houm += 1, 129 == _mr3.ctype && (_mr7.houm += 1), 967 == _mr3.ship_id && _mrb >= 1 && (_mr7.houg += 1), _mr6 = true, _mr8 = 1), 0 == _mr6) return _mr5;
            var _mrc = _mra + _mrb;
            if (_mr5.add(_mr7.multiply(_mrc)), 0 == _mr8) return _mr5;
            _mr3.haveSlotLevelNumOver(534);
            var _mrd = _mr3.haveSlotLevelNumOver(535),
                _mre = _mr3.getTotalCountWithOverLeveledItem([534, 535]);
            return 1 == _mr8 && (_mre[2] >= 1 && (_mr5.houm += 1 * _mre[2]), _mre[4] >= 1 && (_mr5.houg += 1 * _mre[4]), _mre[6] >= 1 && (_mr5.houm += 1 * _mre[6]), _mrd[7] >= 1 && (_mr5.houg += 1 * _mrd[7]), _mre[8] >= 1 && (_mr5.houg += 1 * _mre[8]), _mrd[9] >= 1 && (_mr5.houm += 1 * _mrd[9]), _mre[10] >= 1 && (_mr5.houg += 1 * _mre[10])), _mr5;
        };
    },
    21713: (_mrf, _mrg, _mrh) => {
        'use strict';
        var _mri = null;
        defineModule(_mrg);
        Object.defineProperty(_mrg, '__esModule', {
            'value': true
        }), _mrg.getSlot143PersonalEffect = void 0;
        var _mrj = _mrh(74496);
        _mrg.getSlot143PersonalEffect = function(_mrk) {
            var _mrl = null,
                _mrm = new _mrj.SlotItemEffectModel();
            return 'あかぎ' == _mrk.yomi ? _mrm.houg = 3 : 'かが' == _mrk.yomi || 'しょうかく' == _mrk.yomi ? _mrm.houg = 2 : ('ずいかく' == _mrk.yomi || 'りゅうじょう' == _mrk.yomi) && (_mrm.houg = 1), _mrm;
        };
    },
    59823: (_mrn, _mro, _mrp) => {
        'use strict';
        var _mrq = null;
        defineModule(_mro);
        Object.defineProperty(_mro, '__esModule', {
            'value': true
        }), _mro.getSlot144PersonalEffect = void 0;
        var _mrr = _mrp(74496);
        _mro.getSlot144PersonalEffect = function(_mrs) {
            var _mrt = null,
                _mru = new _mrr.SlotItemEffectModel();
            return 'あかぎ' == _mrs.yomi ? _mru.houg = 3 : 'かが' == _mrs.yomi ? _mru.houg = 2 : 'しょうかく' == _mrs.yomi ? (_mru.houg = 2, 461 != _mrs.ship_id && 466 != _mrs.ship_id || (_mru.houg += 2)) : 'ずいかく' == _mrs.yomi ? (_mru.houg = 1, 462 != _mrs.ship_id && 467 != _mrs.ship_id || (_mru.houg += 1)) : 'りゅうじょう' == _mrs.yomi && (_mru.houg = 1), _mru;
        };
    },
    57440: (_mrv, _mrw, _mrx) => {
        'use strict';
        var _mry = null;
        defineModule(_mrw);
        Object.defineProperty(_mrw, '__esModule', {
            'value': true
        }), _mrw.getSlot149PersonalEffect = void 0;
        var _mrz = _mrx(74496);
        _mrw.getSlot149PersonalEffect = function(_ms0) {
            var _ms1 = null,
                _ms2 = new _mrz.SlotItemEffectModel(),
                _ms3 = new _mrz.SlotItemEffectModel(),
                _ms4 = false;
            return 488 == _ms0.ship_id || 141 == _ms0.ship_id || 160 == _ms0.ship_id || 622 == _ms0.ship_id || 623 == _ms0.ship_id || 656 == _ms0.ship_id || 961 == _ms0.ship_id ? (_ms3.tais = 1, _ms3.kaih = 3, _ms4 = true) : 624 == _ms0.ship_id ? (_ms3.tais = 3, _ms3.kaih = 5, _ms4 = true) : 662 == _ms0.ship_id && (_ms3.tais = 2, _ms3.kaih = 4, _ms4 = true), 54 == _ms0.ctype && (_ms3.tais = 1, _ms3.kaih = 2, _ms4 = true), 0 == _ms4 ? _ms2 : _ms2 = _ms3.multiply(1);
        };
    },
    29493: (_ms5, _ms6, _ms7) => {
        'use strict';
        var _ms8 = null;
        defineModule(_ms6);
        Object.defineProperty(_ms6, '__esModule', {
            'value': true
        }), _ms6.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _ms9 = _ms7(74496);
        _ms6.getSlot14inch45CaliberGunPersonalEffect = function(_msa) {
            var _msb = null,
                _msc, _msd, _mse, _msf = new _ms9.SlotItemEffectModel(),
                _msg = false,
                _msh = new _ms9.SlotItemEffectModel(),
                _msi = {
                    507: 507,
                    508: 507
                },
                _msj = _msa.get_slotnums(507),
                _msk = _msa.get_slotnums(508),
                _msl = _msj + _msk,
                _msm = _msa.getCountryName(),
                _msn = _msa.getUSSWaterRaderDict();
            if (125 == _msa.ctype && (_msh.houg += 1, _msh.kaih += 1, _msh.houm += 1, _msg = true, _msj >= 1 && _msk >= 1 && (_msf.houg += 1, _msf.houm += 1)), 'アメリカ' == _msm && _msa.stype >= 8 && _msa.stype <= 10) {
                _msh.houg += 2, _msh.kaih += 1, _msh.houm += 1, _msg = true;
                for (var _mso = 0, _msp = 0, _msq = _msa.have_slot_ids(); _msp < _msq.length; _msp++) {
                    var _msr = _msq[_msp];
                    _msn[Number(_msr)] && (_mso += _msa.get_slotnums(parseInt(_msr)));
                }
                _mso >= 1 && (_msf.houg += 1, _msf.kaih += 1, _msf.houm += 2), _msj >= 1 && _msk >= 1 && (_msf.houg += 1, _msf.houm += 1, _msf.kaih += 2);
            }
            else 6 != _msa.ctype && 26 != _msa.ctype && 2 != _msa.ctype && 'イギリス' != _msm || (_msf.kaih += 1, _msf.houm += 1, _msj >= 1 && _msk >= 1 && (_msf.houg += 1, _msf.houm += 1, _msf.kaih += 1));
            _msg && _msf.add(_msh.multiply(_msl));
            for (var _mss = {}, _mst = {}, _msu = {}, _msv = function(_msw) {
                    var _msx = null,
                        _msy = Number(_msw),
                        _msz = _msi[_msy];
                    _mss[_msz] = null !== (_msc = _mss[_msz]) && void 0 !== _msc ? _msc : 0, _mst[_msz] = null !== (_msd = _mst[_msz]) && void 0 !== _msd ? _msd : 0, _msu[_msz] = null !== (_mse = _msu[_msz]) && void 0 !== _mse ? _mse : 0, _msa.get_each_level_nums(_msy).forEach(function(_mt0, _mt1) {
                        _mt1 >= 3 && (_mss[_msz] += _mt0), _mt1 >= 6 && (_mst[_msz] += _mt0), _mt1 >= 9 && (_msu[_msz] += _mt0);
                    });
                }, _mt2 = 0, _mt3 = Object.keys(_msi); _mt2 < _mt3.length; _mt2++) {
                _msv(_mt3[_mt2]);
            }
            return _mss[507] >= 1 && (_msf.houg += 1 * _mss[507]), _mst[507] >= 1 && (_msf.souk += 1 * _mst[507]), _msu[507] >= 1 && (_msf.houm += 1 * _msu[507]), _msf;
        };
    },
    66985: (_mt4, _mt5, _mt6) => {
        'use strict';
        var _mt7 = null;
        defineModule(_mt5);
        Object.defineProperty(_mt5, '__esModule', {
            'value': true
        }), _mt5.getSlot15PersonalEffect = void 0;
        var _mt8 = _mt6(74496);
        _mt5.getSlot15PersonalEffect = function(_mt9) {
            var _mta = null,
                _mtb = new _mt8.SlotItemEffectModel(),
                _mtc = false;
            if ((566 == _mt9.ship_id || 567 == _mt9.ship_id || 568 == _mt9.ship_id || 648 == _mt9.ship_id || 651 == _mt9.ship_id || 656 == _mt9.ship_id || 670 == _mt9.ship_id || 915 == _mt9.ship_id || 951 == _mt9.ship_id || 'たけ' == _mt9.yomi) && (_mtc = true), 0 == _mtc) return _mtb;
            var _mtd = _mt9.get_slotnums(15);
            return 30 == _mt9.ctype && (1 == _mtd ? _mtb.raig = 2 : _mtd >= 2 && (_mtb.raig = 4)), 'たけ' == _mt9.yomi && (_mtb.raig += 5, _mtb.kaih += 1), _mtb;
        };
    },
    70332: (_mte, _mtf, _mtg) => {
        'use strict';
        var _mth = null;
        defineModule(_mtf);
        Object.defineProperty(_mtf, '__esModule', {
            'value': true
        }), _mtf.getSlot15_2cmSanrensouSyuhouPersonalEffect = void 0;
        var _mti = _mtg(74496);
        _mtf.getSlot15_2cmSanrensouSyuhouPersonalEffect = function(_mtj) {
            var _mtk = null,
                _mtl = new _mti.SlotItemEffectModel(),
                _mtm = false,
                _mtn = new _mti.SlotItemEffectModel(),
                _mto = 0,
                _mtp = _mtj.getCountryName(),
                _mtq = _mtj.get_slotnums(536),
                _mtr = _mtj.get_slotnums(537);
            if ('フランス' == _mtp && (_mtn.houg += 2, _mtn.houm += 1, 128 == _mtj.ctype && (_mtn.houm += 1), 970 == _mtj.ship_id && _mtr >= 1 && (_mtn.houg += 1, _mtn.kaih += 2, _mtn.houm += 1), _mtm = true, _mto = 1), 0 == _mtm) return _mtl;
            var _mts = _mtq + _mtr;
            if (_mtl.add(_mtn.multiply(_mts)), 0 == _mto) return _mtl;
            _mtj.haveSlotLevelNumOver(536);
            var _mtt = _mtj.haveSlotLevelNumOver(537),
                _mtu = _mtj.getTotalCountWithOverLeveledItem([536, 537]),
                _mtv = _mtj.get_slotnums(471) + _mtj.get_slotnums(538),
                _mtw = _mtj.haveSlotLevelNumOver(538);
            return 1 == _mto && (_mtu[3] >= 1 && (_mtl.houm += 1 * _mtu[3]), _mtu[4] >= 1 && (_mtl.houg += 1 * _mtu[4]), _mtt[5] >= 1 && (_mtl.kaih += 1 * _mtt[5]), _mtu[6] >= 1 && (_mtl.houm += 1 * _mtu[6]), _mtu[7] >= 1 && (_mtl.houg += 1 * _mtu[7]), _mtt[8] >= 1 && (_mtl.kaih += 1 * _mtt[8]), _mtu[9] >= 1 && (_mtl.houm += 1 * _mtu[9]), _mtu[10] >= 1 && (_mtl.houg += 1 * _mtu[10]), _mtu[1] >= 1 && (_mtv >= 1 && (970 == _mtj.ship_id && (_mtl.kaih += 1 * _mtv), _mtl.houm += 1 * _mtv), _mtw[7] >= 1 && (_mtl.kaih += 1 * _mtw[7]), _mtw[9] >= 1 && (_mtl.houm += 1 * _mtw[9]))), _mtl;
        };
    },
    79086: (_mtx, _mty, _mtz) => {
        'use strict';
        var _mu0 = null;
        defineModule(_mty);
        Object.defineProperty(_mty, '__esModule', {
            'value': true
        }), _mty.getSlot165_216PersonalEffect = void 0;
        var _mu1 = _mtz(74496);
        _mty.getSlot165_216PersonalEffect = function(_mu2) {
            var _mu3 = null,
                _mu4 = new _mu1.SlotItemEffectModel();
            return 501 != _mu2.ship_id && 506 != _mu2.ship_id && 502 != _mu2.ship_id && 507 != _mu2.ship_id || (_mu4.tyku += 2, _mu4.kaih += 2), _mu4;
        };
    },
    88102: (_mu5, _mu6, _mu7) => {
        'use strict';
        var _mu8 = null;
        defineModule(_mu6);
        Object.defineProperty(_mu6, '__esModule', {
            'value': true
        }), _mu6.getSlot16M1PersonalEffect = void 0;
        var _mu9 = _mu7(74496);
        _mu6.getSlot16M1PersonalEffect = function(_mua) {
            var _mub = null,
                _muc = new _mu9.SlotItemEffectModel(),
                _mud = new _mu9.SlotItemEffectModel();
            67 == _mua.ctype || 78 == _mua.ctype || 82 == _mua.ctype || 88 == _mua.ctype || 108 == _mua.ctype || 112 == _mua.ctype ? (_mud.houg += 2, _mud.souk += 1, 67 == _mua.ctype && (_mud.kaih -= 2)) : 149 == _mua.ship_id || 150 == _mua.ship_id || 151 == _mua.ship_id || 152 == _mua.ship_id ? (_mud.houg += 1, _mud.souk += 1, _mud.kaih -= 3) : 591 == _mua.ship_id || 592 == _mua.ship_id || 694 == _mua.ship_id ? (_mud.houg += 2, _mud.souk += 1, _mud.kaih -= 2) : 593 != _mua.ship_id && 954 != _mua.ship_id || (_mud.houg += 1, _mud.souk += 1, _mud.kaih -= 1);
            var _mue = true;
            if (_mud.exists() || (_mue = false), 0 == _mue) return _muc;
            var _muf = _mua.get_slotnums(298) + _mua.get_slotnums(299) + _mua.get_slotnums(300);
            return _muc = _mud.multiply(_muf);
        };
    },
    29240: (_mug, _muh, _mui) => {
        'use strict';
        var _muj = null;
        defineModule(_muh);
        Object.defineProperty(_muh, '__esModule', {
            'value': true
        }), _muh.getSlot171PersonalEffect = void 0;
        var _muk = _mui(74496);
        _muh.getSlot171PersonalEffect = function(_mul) {
            var _mum = null,
                _mun = new _muk.SlotItemEffectModel(),
                _muo = 0;
            'アメリカ' == _mul.getCountryName() && (_muo = 1), 65 != _mul.ctype && 93 != _mul.ctype && 102 != _mul.ctype && 107 != _mul.ctype && 125 != _mul.ctype || (_mun.houg += 1, _mun.saku += 1, _muo = 2);
            var _mup = _mul.get_each_level_nums(171),
                _muq = 0,
                _mur = 0,
                _mus = 0;
            return _muo > 0 && (_mup.map(function(_mut, _muu) {
                _muu >= 5 && (_muq += _mut), _muu >= 3 && (_mur += _mut), _muu >= 8 && (_mus += _mut);
            }), 1 != _muo && 2 != _muo || (_mup[10] > 0 && (_mun.houg += 1), _muq > 0 && (_mun.kaih += 1)), 2 == _muo && (_mur > 0 && (_mun.saku += 1), _mus > 0 && (_mun.saku += 1))), _mun;
        };
    },
    40885: (_muv, _muw, _mux) => {
        'use strict';
        var _muy = null;
        defineModule(_muw);
        Object.defineProperty(_muw, '__esModule', {
            'value': true
        }), _muw.getSlot174PersonalEffect = void 0;
        var _muz = _mux(74496);
        _muw.getSlot174PersonalEffect = function(_mv0) {
            var _mv1 = null,
                _mv2 = new _muz.SlotItemEffectModel(),
                _mv3 = new _muz.SlotItemEffectModel();
            if (66 == _mv0.ctype && (_mv3.raig = 1, _mv3.kaih = 2), 591 == _mv0.ship_id || 592 == _mv0.ship_id || 954 == _mv0.ship_id || 694 == _mv0.ship_id ? (_mv3.raig += 6, _mv3.kaih += 3) : 593 == _mv0.ship_id ? (_mv3.raig += 5, _mv3.kaih += 2) : 488 != _mv0.ship_id && 622 != _mv0.ship_id && 623 != _mv0.ship_id && 624 != _mv0.ship_id || (_mv3.houg += 2, _mv3.raig += 4, _mv3.kaih += 4), !_mv3.exists()) return _mv2;
            var _mv4 = _mv0.get_slotnums(174);
            return _mv2 = _mv3.multiply(_mv4);
        };
    },
    19614: (_mv5, _mv6, _mv7) => {
        'use strict';
        var _mv8 = null;
        defineModule(_mv6);
        Object.defineProperty(_mv6, '__esModule', {
            'value': true
        }), _mv6.getSlot179PersonalEffect = void 0;
        var _mv9 = _mv7(74496);
        _mv6.getSlot179PersonalEffect = function(_mva) {
            var _mvb = null,
                _mvc = new _mv9.SlotItemEffectModel(),
                _mvd = new _mv9.SlotItemEffectModel();
            if (54 == _mva.ctype && (_mvd.raig = 1), !_mvd.exists()) return _mvc;
            var _mve = _mva.get_slotnums(179);
            return _mvc = _mvd.multiply(_mve);
        };
    },
    87220: (_mvf, _mvg, _mvh) => {
        'use strict';
        var _mvi = null;
        defineModule(_mvg);
        Object.defineProperty(_mvg, '__esModule', {
            'value': true
        }), _mvg.getSlot184PersonalEffect = void 0;
        var _mvj = _mvh(74496);
        _mvg.getSlot184PersonalEffect = function(_mvk) {
            var _mvl = null,
                _mvm = new _mvj.SlotItemEffectModel(),
                _mvn = new _mvj.SlotItemEffectModel();
            if (68 == _mvk.ctype && (_mvn.houg += 1, _mvn.tyku += 2, _mvn.kaih += 3), !_mvn.exists()) return _mvm;
            var _mvo = _mvk.get_slotnums(184);
            return _mvm = _mvn.multiply(_mvo);
        };
    },
    81367: (_mvp, _mvq, _mvr) => {
        'use strict';
        var _mvs = null;
        defineModule(_mvq);
        Object.defineProperty(_mvq, '__esModule', {
            'value': true
        }), _mvq.getSlot188PersonalEffect = void 0;
        var _mvt = _mvr(74496);
        _mvq.getSlot188PersonalEffect = function(_mvu) {
            var _mvv = null,
                _mvw = new _mvt.SlotItemEffectModel(),
                _mvx = new _mvt.SlotItemEffectModel();
            if (68 == _mvu.ctype && (_mvx.houg += 3, _mvx.tyku += 1, _mvx.kaih += 1), !_mvx.exists()) return _mvw;
            var _mvy = _mvu.get_slotnums(188);
            return _mvw = _mvx.multiply(_mvy);
        };
    },
    13052: (_mvz, _mw0, _mw1) => {
        'use strict';
        var _mw2 = null;
        defineModule(_mw0);
        Object.defineProperty(_mw0, '__esModule', {
            'value': true
        }), _mw0.getSlot189PersonalEffect = void 0;
        var _mw3 = _mw1(74496);
        _mw0.getSlot189PersonalEffect = function(_mw4) {
            var _mw5 = null,
                _mw6 = new _mw3.SlotItemEffectModel(),
                _mw7 = new _mw3.SlotItemEffectModel();
            if (68 != _mw4.ctype && 63 != _mw4.ctype || (_mw7.tyku += 1, _mw7.kaih += 2), !_mw7.exists()) return _mw6;
            var _mw8 = _mw4.get_slotnums(189);
            return _mw6 = _mw7.multiply(_mw8);
        };
    },
    66904: (_mw9, _mwa, _mwb) => {
        'use strict';
        var _mwc = null;
        defineModule(_mwa);
        Object.defineProperty(_mwa, '__esModule', {
            'value': true
        }), _mwa.getSlot18_52_PersonalEffect = void 0;
        var _mwd = _mwb(74496);
        _mwa.getSlot18_52_PersonalEffect = function(_mwe) {
            var _mwf = null,
                _mwg = new _mwd.SlotItemEffectModel(),
                _mwh = new _mwd.SlotItemEffectModel();
            if (277 == _mwe.ship_id || 278 == _mwe.ship_id || 156 == _mwe.ship_id ? _mwh.houg = 1 : 594 == _mwe.ship_id || 698 == _mwe.ship_id || 646 == _mwe.ship_id ? (_mwh.houg = 1, _mwh.kaih = 1) : 599 != _mwe.ship_id && 610 != _mwe.ship_id || (_mwh.houg = 2, _mwh.kaih = 1), !_mwh.exists()) return _mwg;
            var _mwi = _mwe.get_slotnums(18) + _mwe.get_slotnums(52);
            return _mwg = _mwh.multiply(_mwi);
        };
    },
    94968: (_mwj, _mwk, _mwl) => {
        'use strict';
        var _mwm = null;
        defineModule(_mwk);
        Object.defineProperty(_mwk, '__esModule', {
            'value': true
        }), _mwk.getSlot194PersonalEffect = void 0;
        var _mwn = _mwl(74496);
        _mwk.getSlot194PersonalEffect = function(_mwo) {
            var _mwp = null,
                _mwq = new _mwn.SlotItemEffectModel(),
                _mwr = new _mwn.SlotItemEffectModel();
            if (70 == _mwo.ctype ? (_mwr.houg += 3, _mwr.kaih += 2, _mwr.saku += 2) : 72 != _mwo.ctype && 62 != _mwo.ctype || (_mwr.kaih += 1, _mwr.saku += 2), 392 != _mwo.ship_id && 969 != _mwo.ship_id || (_mwr.houg += 1, _mwr.kaih += 2, _mwr.saku += 2), !_mwr.exists()) return _mwq;
            var _mws = _mwo.get_slotnums(194);
            return _mwq = _mwr.multiply(_mws);
        };
    },
    94781: (_mwt, _mwu, _mwv) => {
        'use strict';
        var _mww = null;
        defineModule(_mwu);
        Object.defineProperty(_mwu, '__esModule', {
            'value': true
        }), _mwu.getSlot195PersonalEffect = void 0;
        var _mwx = _mwv(74496);
        _mwu.getSlot195PersonalEffect = function(_mwy) {
            var _mwz = null,
                _mx0 = new _mwx.SlotItemEffectModel(),
                _mx1 = false,
                _mx2 = new _mwx.SlotItemEffectModel();
            if ('アメリカ' == _mwy.getCountryName() && (_mx2.houg += 1, _mx1 = true), 0 == _mx1) return _mx0;
            var _mx3 = _mwy.get_slotnums(195);
            return _mx0.add(_mx2.multiply(_mx3));
        };
    },
    98137: (_mx4, _mx5, _mx6) => {
        'use strict';
        var _mx7 = null;
        defineModule(_mx5);
        Object.defineProperty(_mx5, '__esModule', {
            'value': true
        }), _mx5.getSlot19PersonalEffect = void 0;
        var _mx8 = _mx6(74496);
        _mx5.getSlot19PersonalEffect = function(_mx9) {
            var _mxa = null,
                _mxb = new _mx8.SlotItemEffectModel(),
                _mxc = new _mx8.SlotItemEffectModel();
            if ('ほうしょう' == _mx9.yomi && (_mxc.houg = 2, _mxc.kaih = 2, _mxc.tais = 2, _mxc.tyku = 2), 75 != _mx9.ctype && 76 != _mx9.ctype || (_mxc.houg = 2, _mxc.tais = 3), 7 == _mx9.stype && (_mxc.tyku += 1, _mxc.kaih += 1), 894 != _mx9.ship_id && 899 != _mx9.ship_id || (_mxc.houg += 1, _mxc.kaih += 1, _mxc.tais += 1, _mxc.tyku += 1), !_mxc.exists()) return _mxb;
            var _mxd = _mx9.get_slotnums(19);
            return _mxb = _mxc.multiply(_mxd);
        };
    },
    48658: (_mxe, _mxf, _mxg) => {
        'use strict';
        var _mxh = null;
        defineModule(_mxf);
        Object.defineProperty(_mxf, '__esModule', {
            'value': true
        }), _mxf.getSlot204PersonalEffect = void 0;
        var _mxi = _mxg(74496);
        _mxf.getSlot204PersonalEffect = function(_mxj) {
            var _mxk = null,
                _mxl = new _mxi.SlotItemEffectModel();
            if (591 != _mxj.ship_id && 592 != _mxj.ship_id && 593 != _mxj.ship_id && 954 != _mxj.ship_id && 694 != _mxj.ship_id) return _mxl;
            _mxl.souk = _mxl.souk + 1, _mxl.raig = _mxl.raig + 1;
            for (var _mxm = _mxj.get_each_level_nums(204), _mxn = 0, _mxo = 0; _mxo <= 10; _mxo++) _mxo >= 7 && (_mxn += _mxm[_mxo]);
            return _mxn > 0 && (_mxl.souk = _mxl.souk + 1, 694 == _mxj.ship_id && (_mxl.souk += 1)), _mxm[10] > 0 && (_mxl.raig = _mxl.raig + 1, 694 == _mxj.ship_id && (_mxl.raig += 1)), _mxl;
        };
    },
    2306: (_mxp, _mxq, _mxr) => {
        'use strict';
        var _mxs = null;
        defineModule(_mxq);
        Object.defineProperty(_mxq, '__esModule', {
            'value': true
        }), _mxq.getSlot217PersonalEffect = void 0;
        var _mxt = _mxr(74496);
        _mxq.getSlot217PersonalEffect = function(_mxu) {
            var _mxv = null,
                _mxw = new _mxt.SlotItemEffectModel(),
                _mxx = false,
                _mxy = new _mxt.SlotItemEffectModel();
            if (501 == _mxu.ship_id || 506 == _mxu.ship_id ? (_mxy.houg += 1, _mxy.kaih += 3, _mxy.tyku += 5, _mxx = true) : 502 != _mxu.ship_id && 507 != _mxu.ship_id || (_mxy.houg += 1, _mxy.kaih += 2, _mxy.tyku += 4, _mxx = true), 0 == _mxx) return _mxw;
            var _mxz = _mxu.get_slotnums(217);
            return _mxw.add(_mxy.multiply(_mxz)), _mxw;
        };
    },
    91302: function(_my0, _my1, _my2) {
        'use strict';
        var _my3 = null;
        var _my4 = this && this.__importDefault || function(_my5) {
            var _my6 = null;
            return _my5 && _my5.__esModule ? _my5 : {
                'default': _my5
            };
        };
        defineModule(_my1);
        Object.defineProperty(_my1, '__esModule', {
            'value': true
        }), _my1.getSlot220PersonalEffect = void 0;
        var _my7 = _my2(74496),
            _my8 = _my4(_my2(18622));
        _my1.getSlot220PersonalEffect = function(_my9) {
            var _mya = null,
                _myb = new _my7.SlotItemEffectModel(),
                _myc = false,
                _myd = new _my7.SlotItemEffectModel(),
                _mye = 0,
                _myf = 0;
            if (662 == _my9.ship_id || 663 == _my9.ship_id || 668 == _my9.ship_id || 501 == _my9.ship_id || 506 == _my9.ship_id || 502 == _my9.ship_id || 507 == _my9.ship_id ? (_myd.houg += 1, _myd.tyku += 3, _myd.kaih += 2, _myc = true, _mye = 1) : 894 != _my9.ship_id && 899 != _my9.ship_id || (_myd.tyku += 2, _myd.kaih += 2, _myc = true, _mye = 1, _myf = 1), 0 == _myc) return _myb;
            var _myg = _my9.get_slotnums(220);
            _myb.add(_myd.multiply(_myg));
            for (var _myh = 0, _myi = 0, _myj = _my9.have_slot_ids(); _myi < _myj.length; _myi++) {
                var _myk = _myj[_myi],
                    _myl = _my8.default.model.slot.getMst(_myk),
                    _mym = _myl.equipType;
                12 != _mym && 13 != _mym || (_myl.sakuteki >= 5 && _my9.get_slotnums(parseInt(_myk)), _myl.taiku >= 2 && (_myh += _my9.get_slotnums(parseInt(_myk))));
            }
            if (_myh >= 1 && 1 == _mye && (_myb.tyku += 3, _myb.kaih += 3), 0 == _myf) return _myb;
            var _myn = _my9.get_each_level_nums(220)[10];
            return 1 == _myf && _myn > 0 && (_myb.houg += 1 * _myn, _myb.tyku += 1 * _myn, _myb.kaih += 1 * _myn), _myb;
        };
    },
    20418: (_myo, _myp, _myq) => {
        'use strict';
        var _myr = null;
        defineModule(_myp);
        Object.defineProperty(_myp, '__esModule', {
            'value': true
        }), _myp.getSlot227PersonalEffect = void 0;
        var _mys = _myq(74496);
        _myp.getSlot227PersonalEffect = function(_myt) {
            var _myu = null,
                _myv = new _mys.SlotItemEffectModel(),
                _myw = _myt.get_each_level_nums(227),
                _myx = 0;
            _myw.forEach(function(_myy, _myz) {
                _myz >= 8 && (_myx += _myy);
            }), _myx >= 1 && (_myv.tais += 1 * _myx);
            var _mz0 = _myw[10];
            return _mz0 >= 1 && (_myv.tais += 1 * _mz0), _myv;
        };
    },
    1906: (_mz1, _mz2, _mz3) => {
        'use strict';
        var _mz4 = null;
        defineModule(_mz2);
        Object.defineProperty(_mz2, '__esModule', {
            'value': true
        }), _mz2.getSlot228PersonalEffect = void 0;
        var _mz5 = _mz3(74496);
        _mz2.getSlot228PersonalEffect = function(_mz6) {
            var _mz7 = null,
                _mz8 = new _mz5.SlotItemEffectModel(),
                _mz9 = new _mz5.SlotItemEffectModel();
            if ('ほうしょう' == _mz6.yomi && (_mz9.houg = 3, _mz9.kaih = 4, _mz9.tais = 4, _mz9.tyku = 3), 75 != _mz6.ctype && 76 != _mz6.ctype || (_mz9.houg = 2, _mz9.tais = 5, _mz9.tyku = 1, _mz9.kaih = 1), 7 == _mz6.stype && (_mz9.tais += 2, _mz9.tyku += 1, _mz9.kaih += 1), 894 != _mz6.ship_id && 899 != _mz6.ship_id || (_mz9.houg += 1, _mz9.kaih += 2, _mz9.tais += 2, _mz9.tyku += 1), !_mz9.exists()) return _mz8;
            var _mza = _mz6.get_slotnums(228);
            return _mz8 = _mz9.multiply(_mza);
        };
    },
    61887: function(_mzb, _mzc, _mzd) {
        'use strict';
        var _mze = null;
        var _mzf = this && this.__importDefault || function(_mzg) {
            var _mzh = null;
            return _mzg && _mzg.__esModule ? _mzg : {
                'default': _mzg
            };
        };
        defineModule(_mzc);
        Object.defineProperty(_mzc, '__esModule', {
            'value': true
        }), _mzc.getSlot229PersonalEffect = void 0;
        var _mzi = _mzd(74496),
            _mzj = _mzf(_mzd(18622));
        _mzc.getSlot229PersonalEffect = function(_mzk) {
            var _mzl = null;
            for (var _mzm = new _mzi.SlotItemEffectModel(), _mzn = 0, _mzo = 0, _mzp = _mzk.have_slots_dict[229]; _mzo < _mzp.length; _mzo++) {
                _mzp[_mzo].level >= 7 && _mzn++;
            }
            var _mzq = _mzn,
                _mzr = 0,
                _mzs = 0,
                _mzt = 0,
                _mzu = _mzk.get_slotnums(229);
            if (622 == _mzk.ship_id || 623 == _mzk.ship_id || 624 == _mzk.ship_id) _mzm.houg += 1 * _mzu, _mzm.tyku += 1 * _mzu, _mzr = 2;
            else {
                if (656 == _mzk.ship_id) _mzm.houg += 2 * _mzu, _mzm.tyku += 3 * _mzu, _mzm.tais += 2 * _mzu, _mzr = 3;
                else {
                    if (0 == _mzn) return _mzm;
                }
            }
            if (488 == _mzk.ship_id ? (_mzm.tyku += 3 * _mzq, _mzr = 1) : 220 == _mzk.ship_id ? _mzm.tyku += 2 * _mzq : 23 == _mzk.ship_id ? _mzm.tyku += 1 * _mzq : 160 == _mzk.ship_id ? (_mzm.tyku += 2 * _mzq, _mzr = 1) : 224 == _mzk.ship_id ? _mzm.tyku += 1 * _mzq : 487 == _mzk.ship_id ? (_mzm.tyku += 2 * _mzq, _mzr = 1) : 289 == _mzk.ship_id && (_mzm.tyku += 1 * _mzq), (66 == _mzk.ctype || 28 == _mzk.ctype) && (_mzm.houg += 1 * _mzq, _mzm.tyku += 1 * _mzq, _mzs = 1), 1 == _mzk.stype && (_mzm.houg += 1 * _mzq, _mzm.tyku += 1 * _mzq, _mzt = 1), ('ゆら' == _mzk.yomi || 'なか' == _mzk.yomi || 'きぬ' == _mzk.yomi) && (_mzm.houg += 2 * _mzq), 0 == _mzr + _mzs + _mzt) return _mzm;
            for (var _mzv = 0, _mzw = 0, _mzx = 0, _mzy = _mzk.have_slot_ids(); _mzx < _mzy.length; _mzx++) {
                var _mzz = _mzy[_mzx],
                    _n00 = _mzj.default.model.slot.getMst(_mzz),
                    _n01 = _n00.equipType;
                12 != _n01 && 13 != _n01 || (_n00.sakuteki >= 5 && (_mzv += _mzk.get_slotnums(parseInt(_mzz))), _n00.taiku >= 2 && (_mzw += _mzk.get_slotnums(parseInt(_mzz))));
            }
            return 1 == _mzr ? _mzv > 0 && (_mzm.houg += 3, _mzm.kaih += 2) : 2 == _mzr ? (_mzv > 0 && (_mzm.houg += 1, _mzm.kaih += 1), _mzw > 0 && (_mzm.tyku += 2, _mzm.kaih += 2)) : 3 == _mzr && (_mzv > 0 && (_mzm.houg += 2, _mzm.kaih += 2), _mzw > 0 && (_mzm.tyku += 3, _mzm.kaih += 2)), 1 == _mzs && _mzv > 0 && (_mzm.houg += 2, _mzm.kaih += 3), 1 == _mzt && _mzv > 0 && (_mzm.houg += 1, _mzm.kaih += 4), _mzm;
        };
    },
    55734: (_n02, _n03, _n04) => {
        'use strict';
        var _n05 = null;
        defineModule(_n03);
        Object.defineProperty(_n03, '__esModule', {
            'value': true
        }), _n03.getSlot234PersonalEffect = void 0;
        var _n06 = _n04(74496);
        _n03.getSlot234PersonalEffect = function(_n07) {
            var _n08 = null,
                _n09 = new _n06.SlotItemEffectModel(),
                _n0a = false,
                _n0b = new _n06.SlotItemEffectModel(),
                _n0c = _n07.get_slotnums(142) + _n07.get_slotnums(460);
            if (37 == _n07.ctype && (_n0b.houg += 1, _n0b.tyku += 1, _n0b.kaih += 1, _n0b.houm += 1, _n0c >= 1 && (_n09.tyku += 1, _n09.kaih += 1, _n09.houm += 1), _n0a = true), 0 == _n0a) return _n09;
            var _n0d = _n07.get_slotnums(234);
            return _n09.add(_n0b.multiply(_n0d)), _n09;
        };
    },
    17562: function(_n0e, _n0f, _n0g) {
        'use strict';
        var _n0h = null;
        var _n0i = this && this.__importDefault || function(_n0j) {
            var _n0k = null;
            return _n0j && _n0j.__esModule ? _n0j : {
                'default': _n0j
            };
        };
        defineModule(_n0f);
        Object.defineProperty(_n0f, '__esModule', {
            'value': true
        }), _n0f.getSlot235PersonalEffect = void 0;
        var _n0l = _n0g(74496),
            _n0m = _n0i(_n0g(18622));
        _n0f.getSlot235PersonalEffect = function(_n0n) {
            var _n0o = null,
                _n0p = new _n0l.SlotItemEffectModel(),
                _n0q = false,
                _n0r = new _n0l.SlotItemEffectModel(),
                _n0s = 0;
            if (52 != _n0n.ctype && 9 != _n0n.ctype || (_n0r.houg += 2, _n0r.tyku += 1, _n0q = true), 321 == _n0n.ship_id && (_n0r.houg += 1, _n0r.kaih += 1, _n0s = 1), 0 == _n0q) return _n0p;
            var _n0t = _n0n.get_slotnums(235);
            if (_n0p.add(_n0r.multiply(_n0t)), 0 == _n0s) return _n0p;
            for (var _n0u = 0, _n0v = 0, _n0w = 0, _n0x = _n0n.have_slot_ids(); _n0w < _n0x.length; _n0w++) {
                var _n0y = _n0x[_n0w],
                    _n0z = _n0m.default.model.slot.getMst(_n0y),
                    _n10 = _n0z.equipType;
                12 != _n10 && 13 != _n10 || (_n0z.sakuteki >= 5 && (_n0u += _n0n.get_slotnums(parseInt(_n0y))), _n0z.taiku >= 2 && (_n0v += _n0n.get_slotnums(parseInt(_n0y))));
            }
            return _n0u >= 1 && 1 == _n0s && (_n0p.houg += 3, _n0p.kaih += 2), _n0v >= 1 && 1 == _n0s && (_n0p.tyku += 3, _n0p.kaih += 3), _n0p;
        };
    },
    47970: (_n11, _n12, _n13) => {
        'use strict';
        var _n14 = null;
        defineModule(_n12);
        Object.defineProperty(_n12, '__esModule', {
            'value': true
        }), _n12.getSlot237PersonalEffect = void 0;
        var _n15 = _n13(74496);
        _n12.getSlot237PersonalEffect = function(_n16) {
            var _n17 = null,
                _n18 = new _n15.SlotItemEffectModel(),
                _n19 = new _n15.SlotItemEffectModel();
            if (553 == _n16.ship_id) _n19.houg = 4, _n19.kaih = 2;
            else {
                if (82 == _n16.ship_id) _n19.houg = 3, _n19.kaih = 1;
                else {
                    if (88 == _n16.ship_id) _n19.houg = 3, _n19.kaih = 1;
                    else {
                        if (554 == _n16.ship_id) _n19.houg = 4, _n19.kaih = 2;
                        else {
                            if (411 == _n16.ship_id) _n19.houg = 2;
                            else {
                                if (412 != _n16.ship_id) return _n18;
                                _n19.houg = 2;
                            }
                        }
                    }
                }
            }
            var _n1a = _n16.get_slotnums(237);
            return _n18 = _n19.multiply(_n1a);
        };
    },
    14386: (_n1b, _n1c, _n1d) => {
        'use strict';
        var _n1e = null;
        defineModule(_n1c);
        Object.defineProperty(_n1c, '__esModule', {
            'value': true
        }), _n1c.getSlot238_239PersonalEffect = void 0;
        var _n1f = _n1d(74496);
        _n1c.getSlot238_239PersonalEffect = function(_n1g) {
            var _n1h = null,
                _n1i = new _n1f.SlotItemEffectModel();
            return 501 != _n1g.ship_id && 506 != _n1g.ship_id && 502 != _n1g.ship_id && 507 != _n1g.ship_id || (_n1i.kaih += 1, _n1i.raig += 1), _n1i;
        };
    },
    82229: (_n1j, _n1k, _n1l) => {
        'use strict';
        var _n1m = null;
        defineModule(_n1k);
        Object.defineProperty(_n1k, '__esModule', {
            'value': true
        }), _n1k.getSlot242PersonalEffect = void 0;
        var _n1n = _n1l(74496);
        _n1k.getSlot242PersonalEffect = function(_n1o) {
            var _n1p = null,
                _n1q = new _n1n.SlotItemEffectModel(),
                _n1r = false,
                _n1s = new _n1n.SlotItemEffectModel();
            if (78 == _n1o.ctype && (_n1s.houg += 2, _n1s.kaih += 1, _n1r = true), 'ほうしょう' == _n1o.yomi && (_n1s.houg += 1, _n1r = true), 0 == _n1r) return _n1q;
            var _n1t = _n1o.get_slotnums(242);
            return _n1q.add(_n1s.multiply(_n1t)), _n1q;
        };
    },
    10325: (_n1u, _n1v, _n1w) => {
        'use strict';
        var _n1x = null;
        defineModule(_n1v);
        Object.defineProperty(_n1v, '__esModule', {
            'value': true
        }), _n1v.getSlot243PersonalEffect = void 0;
        var _n1y = _n1w(74496);
        _n1v.getSlot243PersonalEffect = function(_n1z) {
            var _n20 = null,
                _n21 = new _n1y.SlotItemEffectModel(),
                _n22 = false,
                _n23 = new _n1y.SlotItemEffectModel();
            if (78 == _n1z.ctype && (_n23.houg += 3, _n23.kaih += 1, _n22 = true), 'ほうしょう' == _n1z.yomi && (_n23.houg += 2, _n22 = true), 0 == _n22) return _n21;
            var _n24 = _n1z.get_slotnums(243);
            return _n21.add(_n23.multiply(_n24)), _n21;
        };
    },
    351: (_n25, _n26, _n27) => {
        'use strict';
        var _n28 = null;
        defineModule(_n26);
        Object.defineProperty(_n26, '__esModule', {
            'value': true
        }), _n26.getSlot244PersonalEffect = void 0;
        var _n29 = _n27(74496);
        _n26.getSlot244PersonalEffect = function(_n2a) {
            var _n2b = null,
                _n2c = new _n29.SlotItemEffectModel(),
                _n2d = false,
                _n2e = new _n29.SlotItemEffectModel(),
                _n2f = 0;
            if (78 == _n2a.ctype && (_n2e.houg += 4, _n2e.kaih += 2, _n2d = true, _n2f = 1), 'ほうしょう' == _n2a.yomi && (_n2e.houg += 3, _n2d = true, _n2f = 2), 0 == _n2d) return _n2c;
            var _n2g = _n2a.get_slotnums(244);
            if (_n2c.add(_n2e.multiply(_n2g)), 0 == _n2f) return _n2c;
            var _n2h = _n2a.get_each_level_over_nums([244]).slot[244];
            return 1 == _n2f ? (_n2h[3] >= 1 && (_n2c.houg += 1 * _n2h[3]), _n2h[5] >= 1 && (_n2c.houm += 1 * _n2h[5]), _n2h[7] >= 1 && (_n2c.houg += 1 * _n2h[7]), _n2h[8] >= 1 && (_n2c.kaih += 1 * _n2h[8]), _n2h[9] >= 1 && (_n2c.houm += 1 * _n2h[9]), _n2h[10] >= 1 && (_n2c.houg += 1 * _n2h[10])) : 2 == _n2f && (_n2h[3] >= 1 && (_n2c.kaih += 1 * _n2h[3]), _n2h[7] >= 1 && (_n2c.houg += 1 * _n2h[7]), _n2h[9] >= 1 && (_n2c.houm += 1 * _n2h[9]), _n2h[10] >= 1 && (_n2c.houg += 1 * _n2h[10])), _n2c;
        };
    },
    61977: (_n2i, _n2j, _n2k) => {
        'use strict';
        var _n2l = null;
        defineModule(_n2j);
        Object.defineProperty(_n2j, '__esModule', {
            'value': true
        }), _n2j.getSlot247PersonalEffect = void 0;
        var _n2m = _n2k(74496);
        _n2j.getSlot247PersonalEffect = function(_n2n) {
            var _n2o = null,
                _n2p = new _n2m.SlotItemEffectModel(),
                _n2q = false,
                _n2r = new _n2m.SlotItemEffectModel(),
                _n2s = 0;
            if ('フランス' == _n2n.getCountryName() && (_n2r.houg += 2, _n2r.houm += 2, _n2q = true, _n2s = 1), 0 == _n2q) return _n2p;
            var _n2t = _n2n.get_slotnums(247);
            if (_n2p.add(_n2r.multiply(_n2t)), 0 == _n2s) return _n2p;
            var _n2u = _n2n.get_each_level_nums(247),
                _n2v = 0,
                _n2w = 0;
            _n2s > 0 && _n2u.forEach(function(_n2x, _n2y) {
                _n2y >= 4 && (_n2v += _n2x), _n2y >= 8 && (_n2w += _n2x);
            });
            var _n2z = _n2u[10];
            return 1 == _n2s && (_n2v >= 1 && (_n2p.houg += 1 * _n2v, _n2p.houm += 1 * _n2v), _n2w >= 1 && (_n2p.kaih += 1 * _n2w, _n2p.houg += 1 * _n2w, _n2p.houm += 1 * _n2w), _n2z >= 1 && (_n2p.kaih += 1 * _n2z, _n2p.houm += 1 * _n2z)), _n2p;
        };
    },
    96580: (_n30, _n31, _n32) => {
        'use strict';
        var _n33 = null;
        defineModule(_n31);
        Object.defineProperty(_n31, '__esModule', {
            'value': true
        }), _n31.getSlot252PersonalEffect = void 0;
        var _n34 = _n32(74496);
        _n31.getSlot252PersonalEffect = function(_n35) {
            var _n36 = null,
                _n37 = new _n34.SlotItemEffectModel(),
                _n38 = (new _n34.SlotItemEffectModel(), 0);
            if (78 != _n35.ctype && 112 != _n35.ctype || (_n38 = 1), 0 == _n38) return _n37;
            var _n39 = _n35.get_each_level_over_nums([252]).slot[252];
            return 1 == _n38 && (_n39[4] >= 1 && (_n37.kaih += 1 * _n39[4]), _n39[6] >= 1 && (_n37.houm += 1 * _n39[6]), _n39[7] >= 1 && (_n37.houg += 1 * _n39[7]), _n39[8] >= 1 && (_n37.kaih += 1 * _n39[8]), _n39[9] >= 1 && (_n37.houm += 1 * _n39[9]), _n39[10] >= 1 && (_n37.houg += 1 * _n39[10])), _n37;
        };
    },
    31797: function(_n3a, _n3b, _n3c) {
        'use strict';
        var _n3d = null;
        var _n3e = this && this.__importDefault || function(_n3f) {
            var _n3g = null;
            return _n3f && _n3f.__esModule ? _n3f : {
                'default': _n3f
            };
        };
        defineModule(_n3b);
        Object.defineProperty(_n3b, '__esModule', {
            'value': true
        }), _n3b.getSlot266PersonalEffect2 = _n3b.getSlot266PersonalEffect = void 0;
        var _n3h = _n3c(74496),
            _n3i = _n3e(_n3c(18622));
        _n3b.getSlot266PersonalEffect = function(_n3j) {
            var _n3k = null,
                _n3l = new _n3h.SlotItemEffectModel(),
                _n3m = false;
            if (566 != _n3j.ship_id && 567 != _n3j.ship_id && 568 != _n3j.ship_id && 656 != _n3j.ship_id && 670 != _n3j.ship_id && 915 != _n3j.ship_id && 951 != _n3j.ship_id || (_n3m = true), 0 == _n3m) return _n3l;
            var _n3n = _n3j.get_slotnums(266);
            return 30 == _n3j.ctype && (1 == _n3n ? _n3l.houg = 1 : _n3n >= 2 && (_n3l.houg = 3)), _n3l;
        }, _n3b.getSlot266PersonalEffect2 = function(_n3o) {
            var _n3p = null,
                _n3q = new _n3h.SlotItemEffectModel(),
                _n3r = 0,
                _n3s = new _n3h.SlotItemEffectModel();
            if (23 == _n3o.ctype || 18 == _n3o.ctype ? (_n3s.houg = 1, _n3r = 1) : 30 == _n3o.ctype && (_n3s.houg = 1, _n3r = 2), ('しぐれ' == _n3o.yomi || 'ゆきかぜ' == _n3o.yomi || 'いそかぜ' == _n3o.yomi) && (_n3s.kaih = 1), 961 == _n3o.ship_id && (_n3s.houg += 1, _n3s.houm += 1, _n3s.kaih += 1), !_n3s.exists()) return _n3q;
            var _n3t = _n3o.get_slotnums(266);
            if (_n3q = _n3s.multiply(_n3t), 0 == _n3r) return _n3q;
            for (var _n3u = 0, _n3v = 0, _n3w = _n3o.have_slot_ids(); _n3v < _n3w.length; _n3v++) {
                var _n3x = _n3w[_n3v],
                    _n3y = _n3i.default.model.slot.getMst(_n3x),
                    _n3z = _n3y.equipType;
                (12 == _n3z || 13 == _n3z) && _n3y.sakuteki >= 5 && (_n3u += _n3o.get_slotnums(parseInt(_n3x)));
            }
            return _n3u > 0 && (1 == _n3r ? (_n3q.houg += 1, _n3q.kaih += 1, _n3q.raig += 3) : 2 == _n3r && (_n3q.houg += 2, _n3q.kaih += 1, _n3q.raig += 3)), _n3q;
        };
    },
    45738: function(_n40, _n41, _n42) {
        'use strict';
        var _n43 = null;
        var _n44 = this && this.__importDefault || function(_n45) {
            var _n46 = null;
            return _n45 && _n45.__esModule ? _n45 : {
                'default': _n45
            };
        };
        defineModule(_n41);
        Object.defineProperty(_n41, '__esModule', {
            'value': true
        }), _n41.getSlot267PersonalEffect2 = _n41.getSlot267PersonalEffect = void 0;
        var _n47 = _n42(74496),
            _n48 = _n44(_n42(18622));
        _n41.getSlot267PersonalEffect = function(_n49) {
            var _n4a = null,
                _n4b = new _n47.SlotItemEffectModel(),
                _n4c = 0,
                _n4d = 0;
            if (38 == _n49.ctype || 22 == _n49.ctype) _n4c = 2, _n4d = 1;
            else {
                if (30 != _n49.ctype) return _n4b;
                _n4c = 1, _n4d = 1;
            }
            var _n4e = _n49.get_slotnums(267) + _n49.get_slotnums(366);
            return _n4b.houg = _n4c * _n4e, _n4b.kaih = _n4d * _n4e, _n4b;
        }, _n41.getSlot267PersonalEffect2 = function(_n4f) {
            var _n4g = null,
                _n4h = new _n47.SlotItemEffectModel(),
                _n4i = _n4f.get_slotnums(267),
                _n4j = _n4f.get_slotnums(366),
                _n4k = _n4i + _n4j;
            if (566 != _n4f.ship_id && 567 != _n4f.ship_id && 568 != _n4f.ship_id && 656 != _n4f.ship_id && 670 != _n4f.ship_id && 915 != _n4f.ship_id && 951 != _n4f.ship_id || (_n4i > 0 && (_n4h.houg += 1), 1 == _n4j ? (_n4h.houg += 1, _n4h.tyku += 2) : _n4j >= 2 && (_n4h.houg += 2, _n4h.tyku += 4)), 38 != _n4f.ctype && 229 != _n4f.ship_id && [648, 961].indexOf(_n4f.ship_id) < 0) return _n4h;
            var _n4l = false,
                _n4m = false,
                _n4n = false,
                _n4o = false,
                _n4p = false,
                _n4q = false,
                _n4r = false,
                _n4s = false,
                _n4t = false,
                _n4u = false,
                _n4v = false,
                _n4w = false,
                _n4x = 0,
                _n4y = 0,
                _n4z = 0;
            543 == _n4f.ship_id ? (_n4h.houg = 1 * _n4k, _n4m = true) : 229 == _n4f.ship_id ? _n4n = true : 542 == _n4f.ship_id ? (_n4h.houg = 1 * _n4k, _n4o = true) : 563 == _n4f.ship_id ? (_n4h.houg = 1 * _n4k, _n4p = true) : 564 == _n4f.ship_id ? (_n4h.houg = 1 * _n4k, _n4q = true) : 578 == _n4f.ship_id ? (_n4h.houg = 1 * _n4k, _n4r = true) : 569 == _n4f.ship_id ? (_n4h.houg = 1 * _n4k, _n4s = true) : 649 == _n4f.ship_id ? (_n4h.houg = 2 * _n4k, _n4u = true) : 955 == _n4f.ship_id || 960 == _n4f.ship_id ? (_n4h.houg = 2 * _n4k, _n4v = true) : 956 == _n4f.ship_id ? (_n4h.houg = 2 * _n4k, _n4w = true) : 648 == _n4f.ship_id ? (_n4h.houg = 2 * _n4k, _n4t = true, _n4x = 1, _n4y = 1, _n4z = 1) : 961 == _n4f.ship_id && (_n4h.houg = 2 * _n4k, _n4l = true, _n4x = 1, _n4y = 1, _n4z = 1);
            for (var _n50 = 0, _n51 = 0, _n52 = 0, _n53 = _n4f.have_slot_ids(); _n52 < _n53.length; _n52++) {
                var _n54 = _n53[_n52],
                    _n55 = _n48.default.model.slot.getMst(_n54),
                    _n56 = _n55.equipType;
                12 != _n56 && 13 != _n56 || (_n55.sakuteki >= 5 && (_n50 += _n4f.get_slotnums(parseInt(_n54))), _n55.taiku >= 2 && (_n51 += _n4f.get_slotnums(parseInt(_n54))));
            }
            if (_n50 > 0 && _n4i > 0 && ((38 == _n4f.ctype || _n4t) && (_n4h.houg += 2, _n4h.raig += 3, _n4h.kaih += 1, 955 == _n4f.ship_id || 956 == _n4f.ship_id ? _n4h.raig -= 1 : 960 == _n4f.ship_id && (_n4h.raig -= 2)), (_n4o || _n4m || _n4n || _n4p || _n4q || _n4r || _n4s || _n4t || _n4u || _n4v || _n4w) && (_n4h.houg += 1, _n4h.raig += 3, _n4h.kaih += 2)), _n4j > 0 && (_n4o || _n4m || _n4p || _n4q || _n4r || _n4n || _n4s || _n4t || _n4u || _n4l || _n4v || _n4w)) {
                1 == _n4j ? (_n4h.tyku += 3, _n4h.houg += 1, _n4h.houm += 1) : _n4j >= 2 && (_n4h.tyku += 5, _n4h.houg += 3, _n4h.houm += 1, 955 == _n4f.ship_id && (_n4h.houg += 1)), (_n4s || _n4t) && (_n4h.houg += 1, _n4h.tyku += 2), _n50 > 0 && (_n4h.houg += 2, _n4h.kaih += 2, _n4h.raig += 4, _n4h.houm += 2, 960 == _n4f.ship_id && (_n4h.raig -= 1, _n4h.houg += 1)), _n51 > 0 && (_n4h.houg += 1, _n4h.kaih += 3, _n4h.tyku += 5, _n4h.houm += 1);
                var _n57 = _n4f.get_each_level_nums(366),
                    _n58 = 0,
                    _n59 = 0;
                _n57.forEach(function(_n5a, _n5b) {
                    _n5b >= 5 && (_n58 += _n5a), _n5b >= 8 && (_n59 += _n5a);
                }), _n58 >= 1 && (_n4h.houm += 1 * _n58), _n59 >= 1 && (_n4h.houg += 1 * _n59);
                var _n5c = _n57[10];
                _n5c >= 1 && (_n4h.houm += 1 * _n5c);
            }
            var _n5d = _n4f.get_slotnums(129),
                _n5e = _n4f.get_slotnums(74),
                _n5f = _n4f.get_slotnums(412);
            return _n4x > 0 && _n5d > 0 && 1 == _n4x && (_n4h.houg += 2, _n4h.kaih += 3, _n4h.tyku += 2), _n4z > 0 && _n5f > 0 && 1 == _n4z && (_n4h.houg += 2, _n4h.kaih += 3, _n4h.tyku += 2), _n4y > 0 && _n5e > 0 && 1 == _n4y && (_n4h.houg += 3, _n4h.kaih -= 3), _n4h;
        };
    },
    23934: (_n5g, _n5h, _n5i) => {
        'use strict';
        var _n5j = null;
        defineModule(_n5h);
        Object.defineProperty(_n5h, '__esModule', {
            'value': true
        }), _n5h.getSlot271PersonalEffect = void 0;
        var _n5k = _n5i(74496);
        _n5h.getSlot271PersonalEffect = function(_n5l) {
            var _n5m = null,
                _n5n = new _n5k.SlotItemEffectModel(),
                _n5o = 0;
            if (508 != _n5l.ship_id && 509 != _n5l.ship_id && 888 != _n5l.ship_id && 883 != _n5l.ship_id || (_n5o = 1), 0 == _n5o) return _n5n;
            var _n5p = _n5l.get_each_level_nums(271),
                _n5q = 0,
                _n5r = 0,
                _n5s = 0,
                _n5t = _n5p[10];
            return _n5o > 0 && _n5p.forEach(function(_n5u, _n5v) {
                _n5v >= 4 && (_n5q += _n5u), _n5v >= 6 && (_n5r += _n5u), _n5v >= 8 && (_n5s += _n5u);
            }), 1 == _n5o && (_n5q >= 1 && (_n5n.houg += 1 * _n5q), _n5r >= 1 && (_n5n.tyku += 2 * _n5r), _n5s >= 1 && (_n5n.kaih += 2 * _n5s), _n5t >= 1 && (_n5n.houg += 1 * _n5t)), _n5n;
        };
    },
    17712: function(_n5w, _n5x, _n5y) {
        'use strict';
        var _n5z = null;
        var _n60 = this && this.__importDefault || function(_n61) {
            var _n62 = null;
            return _n61 && _n61.__esModule ? _n61 : {
                'default': _n61
            };
        };
        defineModule(_n5x);
        Object.defineProperty(_n5x, '__esModule', {
            'value': true
        }), _n5x.getSlot275PersonalEffect = void 0;
        var _n63 = _n5y(74496),
            _n64 = _n60(_n5y(18622));
        _n5x.getSlot275PersonalEffect = function(_n65) {
            var _n66 = null,
                _n67 = new _n63.SlotItemEffectModel(),
                _n68 = false,
                _n69 = new _n63.SlotItemEffectModel(),
                _n6a = 0,
                _n6b = 0;
            if (894 != _n65.ship_id && 899 != _n65.ship_id || (_n69.houg += 1, _n69.tyku += 3, _n69.kaih += 2, _n68 = true, _n6b = 1, _n6a = 1), 0 == _n68) return _n67;
            var _n6c = _n65.get_slotnums(275);
            _n67.add(_n69.multiply(_n6c));
            var _n6d = 0;
            if (_n6a > 0)
                for (var _n6e = 0, _n6f = _n65.have_slot_ids(); _n6e < _n6f.length; _n6e++) {
                    var _n6g = _n6f[_n6e],
                        _n6h = _n64.default.model.slot.getMst(_n6g),
                        _n6i = _n6h.equipType;
                    12 != _n6i && 13 != _n6i || (_n6h.sakuteki >= 5 && _n65.get_slotnums(parseInt(_n6g)), _n6h.taiku >= 2 && (_n6d += _n65.get_slotnums(parseInt(_n6g))));
                }
            if (1 == _n6a && _n6d > 0 && (_n67.tyku += 3, _n67.kaih += 3), 0 == _n6b) return _n67;
            var _n6j = _n65.get_each_level_nums(275),
                _n6k = 0,
                _n6l = _n6j[10];
            return _n6b > 0 && _n6j.forEach(function(_n6m, _n6n) {
                _n6n >= 7 && (_n6k += _n6m);
            }), 1 == _n6b && (_n6k > 0 && (_n67.tyku += 1 * _n6k, _n67.kaih += 1 * _n6k), _n6l > 0 && (_n67.houg += 1 * _n6l, _n67.tyku += 1 * _n6l, _n67.houm += 1 * _n6l)), _n67;
        };
    },
    93733: (_n6o, _n6p, _n6q) => {
        'use strict';
        var _n6r = null;
        defineModule(_n6p);
        Object.defineProperty(_n6p, '__esModule', {
            'value': true
        }), _n6p.getSlot277PersonalEffect = void 0;
        var _n6s = _n6q(74496);
        _n6p.getSlot277PersonalEffect = function(_n6t) {
            var _n6u = null,
                _n6v = new _n6s.SlotItemEffectModel(),
                _n6w = false,
                _n6x = new _n6s.SlotItemEffectModel();
            if ('アメリカ' != _n6t.getCountryName() && 67 != _n6t.ctype && 78 != _n6t.ctype && 82 != _n6t.ctype && 88 != _n6t.ctype && 108 != _n6t.ctype && 112 != _n6t.ctype || (_n6x.houg += 1, _n6x.kaih += 1, _n6w = true), 83 == _n6t.ctype && (_n6x.houg += 1, _n6x.kaih += 1, _n6x.tyku += 1, _n6w = true), 0 == _n6w) return _n6v;
            var _n6y = _n6t.get_slotnums(277);
            return _n6v.add(_n6x.multiply(_n6y)), _n6v;
        };
    },
    34718: (_n6z, _n70, _n71) => {
        'use strict';
        var _n72 = null;
        defineModule(_n70);
        Object.defineProperty(_n70, '__esModule', {
            'value': true
        }), _n70.getSlot278PersonalEffect = void 0;
        var _n73 = _n71(74496);
        _n70.getSlot278PersonalEffect = function(_n74) {
            var _n75 = null,
                _n76 = new _n73.SlotItemEffectModel();
            return 'アメリカ' == _n74.getCountryName() ? (_n76.tyku += 1, _n76.kaih += 3, _n76.saku += 1) : 67 == _n74.ctype || 78 == _n74.ctype || 82 == _n74.ctype || 88 == _n74.ctype || 108 == _n74.ctype || 112 == _n74.ctype ? (_n76.tyku += 1, _n76.kaih += 2) : 96 == _n74.ctype && (_n76.tyku += 1, _n76.kaih += 1), _n76;
        };
    },
    69245: (_n77, _n78, _n79) => {
        'use strict';
        var _n7a = null;
        defineModule(_n78);
        Object.defineProperty(_n78, '__esModule', {
            'value': true
        }), _n78.getSlot279PersonalEffect = void 0;
        var _n7b = _n79(74496);
        _n78.getSlot279PersonalEffect = function(_n7c) {
            var _n7d = null,
                _n7e = new _n7b.SlotItemEffectModel();
            return 'アメリカ' == _n7c.getCountryName() ? (_n7e.houg += 2, _n7e.tyku += 2, _n7e.kaih += 3, _n7e.saku += 2) : 67 == _n7c.ctype || 78 == _n7c.ctype || 82 == _n7c.ctype || 88 == _n7c.ctype || 108 == _n7c.ctype || 112 == _n7c.ctype ? (_n7e.houg += 1, _n7e.tyku += 1, _n7e.kaih += 2, _n7e.saku += 1) : 96 == _n7c.ctype && (_n7e.houg += 1, _n7e.tyku += 1, _n7e.kaih += 1), _n7e;
        };
    },
    18478: (_n7f, _n7g, _n7h) => {
        'use strict';
        var _n7i = null;
        defineModule(_n7g);
        Object.defineProperty(_n7g, '__esModule', {
            'value': true
        }), _n7g.getSlot282PersonalEffect = void 0;
        var _n7j = _n7h(74496);
        _n7g.getSlot282PersonalEffect = function(_n7k) {
            var _n7l = null,
                _n7m = new _n7j.SlotItemEffectModel(),
                _n7n = false,
                _n7o = false;
            147 != _n7k.ship_id && 73 != _n7k.ctype && 81 != _n7k.ctype || (_n7n = true), 'ゆうばり' == _n7k.yomi && (_n7o = true);
            var _n7p = new _n7j.SlotItemEffectModel();
            if ((_n7n || _n7o) && (_n7p.houg += 2, _n7p.souk += 1), !_n7p.exists()) return _n7m;
            var _n7q = _n7k.get_slotnums(282);
            return _n7m = _n7p.multiply(_n7q);
        };
    },
    2899: (_n7r, _n7s, _n7t) => {
        'use strict';
        var _n7u = null;
        defineModule(_n7s);
        Object.defineProperty(_n7s, '__esModule', {
            'value': true
        }), _n7s.getSlot283PersonalEffect = void 0;
        var _n7v = _n7t(74496);
        _n7s.getSlot283PersonalEffect = function(_n7w) {
            var _n7x = null,
                _n7y = new _n7v.SlotItemEffectModel(),
                _n7z = false;
            147 != _n7w.ship_id && 73 != _n7w.ctype && 81 != _n7w.ctype || (_n7z = true);
            var _n80 = new _n7v.SlotItemEffectModel();
            if (_n7z && (_n80.raig += 3, _n80.houg += 1, _n80.souk += 1), !_n80.exists()) return _n7y;
            var _n81 = _n7w.get_slotnums(283);
            return _n7y = _n80.multiply(_n81);
        };
    },
    57120: (_n82, _n83, _n84) => {
        'use strict';
        var _n85 = null;
        defineModule(_n83);
        Object.defineProperty(_n83, '__esModule', {
            'value': true
        }), _n83.getSlot285PersonalEffect = void 0;
        var _n86 = _n84(74496);
        _n83.getSlot285PersonalEffect = function(_n87) {
            var _n88 = null,
                _n89 = new _n86.SlotItemEffectModel(),
                _n8a = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_n87.ship_id) >= 0 && (_n8a = true), 0 == _n8a) return _n89;
            var _n8b = _n87.get_each_level_nums(285),
                _n8c = _n87.get_slotnums(285);
            _n8c > 2 && (_n8c = 2), _n89.raig = 2 * _n8c, _n89.kaih = 1 * _n8c;
            var _n8d = _n8b[10];
            1 == _n8d && (_n89.houg += 1, _n89.raig += 1), _n8d >= 2 && (_n89.houg += 2, _n89.raig += 1), _n8d >= 3 && (_n89.raig += 3);
            var _n8e = _n87.get_slotnums(285);
            return 903 == _n87.ship_id ? (_n8e >= 2 && (_n89.raig += 2), _n8e >= 3 && (_n89.raig += 2)) : 908 != _n87.ship_id && 959 != _n87.ship_id || (_n8e >= 2 && (_n89.raig += 1), _n8e >= 3 && (_n89.raig += 1)), _n89;
        };
    },
    74985: function(_n8f, _n8g, _n8h) {
        'use strict';
        var _n8i = null;
        var _n8j = this && this.__importDefault || function(_n8k) {
            var _n8l = null;
            return _n8k && _n8k.__esModule ? _n8k : {
                'default': _n8k
            };
        };
        defineModule(_n8g);
        Object.defineProperty(_n8g, '__esModule', {
            'value': true
        }), _n8g.getSlot286PersonalEffect3 = _n8g.getSlot286PersonalEffect2 = _n8g.getSlot286PersonalEffect = void 0;
        var _n8m = _n8h(74496),
            _n8n = _n8j(_n8h(18622));
        _n8g.getSlot286PersonalEffect = function(_n8o) {
            var _n8p = null,
                _n8q = new _n8m.SlotItemEffectModel(),
                _n8r = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975, 956].indexOf(_n8o.ship_id) >= 0 && (_n8r = true), 0 == _n8r) return _n8q;
            var _n8s = _n8o.get_each_level_nums(286),
                _n8t = _n8o.get_slotnums(286);
            _n8t > 2 && (_n8t = 2), _n8q.raig = 2 * _n8t, _n8q.kaih = 1 * _n8t;
            var _n8u = _n8s[10];
            if (1 == _n8u ? _n8q.houg = _n8q.houg + 1 : _n8u >= 2 && (_n8q.houg = _n8q.houg + 2), 30 == _n8o.ctype || 961 == _n8o.ship_id) {
                var _n8v = _n8s[5] + _n8s[6] + _n8s[7] + _n8s[8] + _n8s[9] + _n8s[10];
                1 == _n8v ? _n8q.raig = _n8q.raig + 1 : _n8v >= 2 && (_n8q.raig = _n8q.raig + 2);
            }
            return _n8q;
        }, _n8g.getSlot286PersonalEffect2 = function(_n8w) {
            var _n8x = null,
                _n8y = new _n8m.SlotItemEffectModel(),
                _n8z = false,
                _n90 = 0;
            if ('たけ' == _n8w.yomi && (_n8z = true, _n90 = 1), 0 == _n8z) return _n8y;
            var _n91 = _n8w.get_each_level_nums(286),
                _n92 = 0;
            return _n90 > 0 && _n91.forEach(function(_n93, _n94) {
                _n94 >= 7 && (_n92 += _n93);
            }), 'たけ' == _n8w.yomi && (_n8y.raig += 7, _n8y.kaih += 2, _n92 >= 1 && (_n8y.raig += 2), _n91[10] >= 1 && (_n8y.raig += 2)), _n8y;
        }, _n8g.getSlot286PersonalEffect3 = function(_n95) {
            var _n96 = null,
                _n97 = new _n8m.SlotItemEffectModel(),
                _n98 = false,
                _n99 = new _n8m.SlotItemEffectModel(),
                _n9a = 0;
            if (662 != _n95.ship_id && 663 != _n95.ship_id && 668 != _n95.ship_id || (_n99.raig += 2, _n98 = true, _n9a = 1), 0 == _n98) return _n97;
            var _n9b = _n95.get_slotnums(286);
            _n97.add(_n99.multiply(_n9b));
            for (var _n9c = 0, _n9d = 0, _n9e = _n95.have_slot_ids(); _n9d < _n9e.length; _n9d++) {
                var _n9f = _n9e[_n9d],
                    _n9g = _n8n.default.model.slot.getMst(_n9f),
                    _n9h = _n9g.equipType;
                12 != _n9h && 13 != _n9h || (_n9g.sakuteki >= 5 && (_n9c += _n95.get_slotnums(parseInt(_n9f))), _n9g.taiku >= 2 && _n95.get_slotnums(parseInt(_n9f)));
            }
            return _n9c >= 1 && 1 == _n9a && (_n97.raig += 3, _n97.kaih += 2), _n97;
        };
    },
    9234: (_n9i, _n9j, _n9k) => {
        'use strict';
        var _n9l = null;
        defineModule(_n9j);
        Object.defineProperty(_n9j, '__esModule', {
            'value': true
        }), _n9j.getSlot287PersonalEffect = void 0;
        var _n9m = _n9k(74496);
        _n9j.getSlot287PersonalEffect = function(_n9n) {
            var _n9o = null,
                _n9p = new _n9m.SlotItemEffectModel(),
                _n9q = new _n9m.SlotItemEffectModel(),
                _n9r = false;
            if (488 == _n9n.ship_id || 141 == _n9n.ship_id || 160 == _n9n.ship_id || 624 == _n9n.ship_id || 656 == _n9n.ship_id ? (_n9q.tais = 1, _n9q.kaih = 1, _n9r = true) : 662 != _n9n.ship_id && 961 != _n9n.ship_id || (_n9q.tais = 3, _n9r = true), 0 == _n9r) return _n9p;
            var _n9s = _n9n.get_slotnums(287);
            return _n9p = _n9q.multiply(_n9s);
        };
    },
    30802: (_n9t, _n9u, _n9v) => {
        'use strict';
        var _n9w = null;
        defineModule(_n9u);
        Object.defineProperty(_n9u, '__esModule', {
            'value': true
        }), _n9u.getSlot288PersonalEffect = void 0;
        var _n9x = _n9v(74496);
        _n9u.getSlot288PersonalEffect = function(_n9y) {
            var _n9z = null,
                _na0 = new _n9x.SlotItemEffectModel(),
                _na1 = new _n9x.SlotItemEffectModel(),
                _na2 = false;
            if (488 == _n9y.ship_id || 141 == _n9y.ship_id || 160 == _n9y.ship_id || 656 == _n9y.ship_id ? (_na1.tais = 2, _na1.kaih = 1, _na2 = true) : 624 == _n9y.ship_id ? (_na1.houg = 1, _na1.tais = 3, _na1.kaih = 2, _na2 = true) : 662 != _n9y.ship_id && 961 != _n9y.ship_id || (_na1.tais = 4, _na1.kaih = 1, _na2 = true), 0 == _na2) return _na0;
            var _na3 = _n9y.get_slotnums(288);
            return _na0 = _na1.multiply(_na3);
        };
    },
    97002: function(_na4, _na5, _na6) {
        'use strict';
        var _na7 = null;
        var _na8 = this && this.__importDefault || function(_na9) {
            var _naa = null;
            return _na9 && _na9.__esModule ? _na9 : {
                'default': _na9
            };
        };
        defineModule(_na5);
        Object.defineProperty(_na5, '__esModule', {
            'value': true
        }), _na5.getSlot289PersonalEffect = void 0;
        var _nab = _na6(74496),
            _nac = _na8(_na6(18622));
        _na5.getSlot289PersonalEffect = function(_nad) {
            var _nae = null,
                _naf = new _nab.SlotItemEffectModel(),
                _nag = {
                    151: 1,
                    593: 1,
                    954: 1,
                    591: 2,
                    149: 3,
                    150: 3,
                    592: 3,
                    152: 3,
                    694: 3
                },
                _nah = 0,
                _nai = new _nab.SlotItemEffectModel();
            if (149 == _nad.ship_id || 591 == _nad.ship_id) _nai.houg = 2, _nai.tyku = 1, _nah = 1;
            else {
                if (150 == _nad.ship_id || 592 == _nad.ship_id) _nai.houg = 1;
                else {
                    if (152 == _nad.ship_id || 694 == _nad.ship_id) _nai.houg = 1;
                    else {
                        if (151 != _nad.ship_id && 593 != _nad.ship_id && 954 != _nad.ship_id) return _naf;
                        _nai.houg = 2, _nai.tyku = 2, _nai.kaih = 2, _nah = 1;
                    }
                }
            }
            var _naj = _nad.get_slotnums(289);
            if (_naf = _nai.multiply(_naj), _nag[_nad.ship_id]) {
                var _nak = _nad.get_each_level_nums(289),
                    _nal = new Array();
                _nak.forEach(function(_nam, _nan) {
                    var _nao = null;
                    for (var _nap = 1; _nap <= _nad.SLOT_LEVEL_MAX; _nap++) _nan >= _nap && (null == _nal[_nap] && (_nal[_nap] = 0), _nal[_nap] += _nam);
                });
                var _naq = _nag[_nad.ship_id];
                1 == _naq ? (_nal[1] >= 1 && (_naf.kaih += 1 * _nal[1]), _nal[3] >= 1 && (_naf.tyku = _naf.tyku + 1 * _nal[3]), _nal[5] >= 1 && (_naf.houg = _naf.houg + 1 * _nal[5]), _nal[7] >= 1 && (_naf.kaih += 1 * _nal[7]), _nal[8] >= 1 && (_naf.tyku += 1 * _nal[8]), _nal[9] >= 1 && (_naf.houg += 1 * _nal[9]), _nal[10] >= 1 && (_naf.kaih += 1 * _nal[10])) : 2 == _naq ? (_nal[4] >= 1 && (_naf.tyku += 1 * _nal[4]), _nal[6] >= 1 && (_naf.kaih += 1 * _nal[6]), _nal[8] >= 1 && (_naf.houg += 1 * _nal[8]), _nal[10] >= 1 && (_naf.kaih += 1 * _nal[10])) : 3 == _naq && (_nal[7] >= 1 && (_naf.tyku += 1 * _nal[7]), _nal[9] >= 1 && (_naf.houg += 1 * _nal[9]), _nal[10] >= 1 && (_naf.kaih += 1 * _nal[10]));
            }
            if (0 == _nah) return _naf;
            for (var _nar = 0, _nas = 0, _nat = _nad.have_slot_ids(); _nas < _nat.length; _nas++) {
                var _nau = _nat[_nas],
                    _nav = _nac.default.model.slot.getMst(_nau),
                    _naw = _nav.equipType;
                (12 == _naw || 13 == _naw) && _nav.sakuteki >= 5 && (_nar += _nad.get_slotnums(parseInt(_nau)));
            }
            return _nar > 0 && (_naf.houg += 2, _naf.kaih += 2), _naf;
        };
    },
    16748: function(_nax, _nay, _naz) {
        'use strict';
        var _nb0 = null;
        var _nb1 = this && this.__importDefault || function(_nb2) {
            var _nb3 = null;
            return _nb2 && _nb2.__esModule ? _nb2 : {
                'default': _nb2
            };
        };
        defineModule(_nay);
        Object.defineProperty(_nay, '__esModule', {
            'value': true
        }), _nay.getSlot290PersonalEffect = void 0;
        var _nb4 = _naz(74496),
            _nb5 = _nb1(_naz(18622));
        _nay.getSlot290PersonalEffect = function(_nb6) {
            var _nb7 = null,
                _nb8 = new _nb4.SlotItemEffectModel(),
                _nb9 = 0,
                _nba = new _nb4.SlotItemEffectModel();
            if (411 == _nb6.ship_id) _nba.houg = 1;
            else {
                if (412 == _nb6.ship_id) _nba.houg = 1;
                else {
                    if (82 == _nb6.ship_id) _nba.houg = 2, _nba.tyku = 2, _nba.kaih = 1, _nb9 = 1;
                    else {
                        if (553 == _nb6.ship_id) _nba.houg = 3, _nba.tyku = 2, _nba.kaih = 1, _nba.houm = 3, _nb9 = 1;
                        else {
                            if (88 == _nb6.ship_id) _nba.houg = 2, _nba.tyku = 2, _nba.kaih = 1, _nb9 = 1;
                            else {
                                if (554 != _nb6.ship_id) return _nb8;
                                _nba.houg = 3, _nba.tyku = 2, _nba.kaih = 2, _nba.houm = 3, _nb9 = 1;
                            }
                        }
                    }
                }
            }
            var _nbb = _nb6.get_slotnums(290);
            if (_nb8 = _nba.multiply(_nbb), 0 == _nb9) return _nb8;
            for (var _nbc = 0, _nbd = 0, _nbe = _nb6.have_slot_ids(); _nbd < _nbe.length; _nbd++) {
                var _nbf = _nbe[_nbd],
                    _nbg = _nb5.default.model.slot.getMst(_nbf),
                    _nbh = _nbg.equipType;
                (12 == _nbh || 13 == _nbh) && _nbg.taiku >= 2 && (_nbc += _nb6.get_slotnums(parseInt(_nbf)));
            }
            return _nbc > 0 && (_nb8.tyku += 2, _nb8.kaih += 3), _nb8;
        };
    },
    53618: (_nbi, _nbj, _nbk) => {
        'use strict';
        var _nbl = null;
        defineModule(_nbj);
        Object.defineProperty(_nbj, '__esModule', {
            'value': true
        }), _nbj.getSlot291PersonalEffect = void 0;
        var _nbm = _nbk(74496);
        _nbj.getSlot291PersonalEffect = function(_nbn) {
            var _nbo = null,
                _nbp = new _nbm.SlotItemEffectModel(),
                _nbq = new _nbm.SlotItemEffectModel();
            if (553 == _nbn.ship_id) _nbq.houg = 6, _nbq.kaih = 1;
            else {
                if (554 != _nbn.ship_id) return _nbp;
                _nbq.houg = 6, _nbq.kaih = 1;
            }
            var _nbr = _nbn.get_slotnums(291);
            return _nbp = _nbq.multiply(_nbr);
        };
    },
    72573: (_nbs, _nbt, _nbu) => {
        'use strict';
        var _nbv = null;
        defineModule(_nbt);
        Object.defineProperty(_nbt, '__esModule', {
            'value': true
        }), _nbt.getSlot292PersonalEffect = void 0;
        var _nbw = _nbu(74496);
        _nbt.getSlot292PersonalEffect = function(_nbx) {
            var _nby = null,
                _nbz = new _nbw.SlotItemEffectModel(),
                _nc0 = new _nbw.SlotItemEffectModel();
            if (553 == _nbx.ship_id) _nc0.houg = 8, _nc0.kaih = 2, _nc0.tyku = 1;
            else {
                if (554 != _nbx.ship_id) return _nbz;
                _nc0.houg = 8, _nc0.kaih = 2, _nc0.tyku = 1;
            }
            var _nc1 = _nbx.get_slotnums(292);
            return _nbz = _nc0.multiply(_nc1);
        };
    },
    8955: function(_nc2, _nc3, _nc4) {
        'use strict';
        var _nc5 = null;
        var _nc6 = this && this.__importDefault || function(_nc7) {
            var _nc8 = null;
            return _nc7 && _nc7.__esModule ? _nc7 : {
                'default': _nc7
            };
        };
        defineModule(_nc3);
        Object.defineProperty(_nc3, '__esModule', {
            'value': true
        }), _nc3.getSlot293PersonalEffect = void 0;
        var _nc9 = _nc4(74496),
            _nca = _nc6(_nc4(18622));
        _nc3.getSlot293PersonalEffect = function(_ncb) {
            var _ncc = null,
                _ncd = new _nc9.SlotItemEffectModel(),
                _nce = new _nc9.SlotItemEffectModel(),
                _ncf = 0;
            if (66 == _ncb.ctype || 28 == _ncb.ctype) _nce.houg = 2, _nce.tyku = 1, _nce.kaih = 3, _ncf = 1;
            else {
                if (74 != _ncb.ctype && 77 != _ncb.ctype) return _ncd;
                _nce.houg = 1, _nce.tyku = 1, _nce.kaih = 2, _ncf = 2;
            }
            var _ncg = _ncb.get_slotnums(293);
            _ncd = _nce.multiply(_ncg);
            for (var _nch = 0, _nci = 0, _ncj = _ncb.have_slot_ids(); _nci < _ncj.length; _nci++) {
                var _nck = _ncj[_nci],
                    _ncl = _nca.default.model.slot.getMst(_nck),
                    _ncm = _ncl.equipType;
                (12 == _ncm || 13 == _ncm) && _ncl.sakuteki >= 5 && (_nch += _ncb.get_slotnums(parseInt(_nck)));
            }
            var _ncn = _ncb.get_slotnums(174);
            return 1 == _ncf ? (_nch > 0 && (_ncd.houg += 2, _ncd.kaih += 3, _ncd.raig += 1), 1 == _ncn ? (_ncd.houg += 2, _ncd.raig += 4) : _ncn >= 2 && (_ncd.houg += 3, _ncd.raig += 7)) : 2 == _ncf && _nch > 0 && (_ncd.houg += 2, _ncd.kaih += 3, _ncd.tais += 1), _ncd;
        };
    },
    98947: function(_nco, _ncp, _ncq) {
        'use strict';
        var _ncr = null;
        var _ncs = this && this.__importDefault || function(_nct) {
            var _ncu = null;
            return _nct && _nct.__esModule ? _nct : {
                'default': _nct
            };
        };
        defineModule(_ncp);
        Object.defineProperty(_ncp, '__esModule', {
            'value': true
        }), _ncp.getSlot294PersonalEffect = void 0;
        var _ncv = _ncq(74496),
            _ncw = _ncs(_ncq(18622));
        _ncp.getSlot294PersonalEffect = function(_ncx) {
            var _ncy = null,
                _ncz = new _ncv.SlotItemEffectModel(),
                _nd0 = new _ncv.SlotItemEffectModel(),
                _nd1 = 0,
                _nd2 = _ncx.get_slotnums(294);
            if (12 != _ncx.ctype && 1 != _ncx.ctype && 5 != _ncx.ctype) return _ncz;
            _nd0.houg = 1, 959 == _ncx.ship_id && (_nd0.houg += 1, _nd2 >= 2 && (_ncz.houg += 2), _nd2 >= 3 && (_ncz.houg += 3), _nd1 = 1), _ncz.add(_nd0.multiply(_nd2));
            for (var _nd3 = 0, _nd4 = 0, _nd5 = _ncx.have_slot_ids(); _nd4 < _nd5.length; _nd4++) {
                var _nd6 = _nd5[_nd4],
                    _nd7 = _ncw.default.model.slot.getMst(_nd6),
                    _nd8 = _nd7.equipType;
                (12 == _nd8 || 13 == _nd8) && _nd7.sakuteki >= 5 && (_nd3 += _ncx.get_slotnums(parseInt(_nd6)));
            }
            var _nd9 = _ncx.get_slotnums(13),
                _nda = _ncx.get_slotnums(125),
                _ndb = _ncx.get_slotnums(285),
                _ndc = _nd9 + _nda + _ndb;
            if (_nd3 > 0 && (_ncz.houg += 3, _ncz.kaih += 2, _ncz.raig += 1), 1 == _ndc ? (_ncz.houg += 1, _ncz.raig += 3) : _ndc >= 2 && (_ncz.houg += 2, _ncz.raig += 5), _ndb >= 1 && (_ncz.raig += 1), 0 == _nd1) return _ncz;
            var _ndd = _ncx.get_each_level_nums(294),
                _nde = [];
            return _nd1 > 0 && _ndd.forEach(function(_ndf, _ndg) {
                var _ndh = null;
                for (var _ndi = 1; _ndi <= _ncx.SLOT_LEVEL_MAX; _ndi++) null == _nde[_ndi] && (_nde[_ndi] = 0), _ndg >= _ndi && (_nde[_ndi] += _ndf);
            }), 1 == _nd1 && (_nde[6] >= 1 && (_ncz.houm += 4 * _nde[6]), _nde[7] >= 1 && (_ncz.houg = _ncz.houg + 6 * _nde[7]), _nde[8] >= 1 && (_ncz.houg = _ncz.houg + 1 * _nde[8]), _nde[9] >= 1 && (_ncz.houg = _ncz.houg + 1 * _nde[9]), _nde[10] >= 1 && (_ncz.houg += 1 * _nde[10])), _ncz;
        };
    },
    44726: function(_ndj, _ndk, _ndl) {
        'use strict';
        var _ndm = null;
        var _ndn = this && this.__importDefault || function(_ndo) {
            var _ndp = null;
            return _ndo && _ndo.__esModule ? _ndo : {
                'default': _ndo
            };
        };
        defineModule(_ndk);
        Object.defineProperty(_ndk, '__esModule', {
            'value': true
        }), _ndk.getSlot295PersonalEffect = void 0;
        var _ndq = _ndl(74496),
            _ndr = _ndn(_ndl(18622));
        _ndk.getSlot295PersonalEffect = function(_nds) {
            var _ndt = null,
                _ndu = new _ndq.SlotItemEffectModel(),
                _ndv = new _ndq.SlotItemEffectModel(),
                _ndw = _nds.get_slotnums(295);
            if (12 != _nds.ctype && 1 != _nds.ctype && 5 != _nds.ctype) return _ndu;
            _ndv.houg = 2, _ndv.tyku = 2, 666 == _nds.ship_id ? (_ndv.houg += 1, _ndv.tyku += 1, _ndv.tais += 1) : 959 == _nds.ship_id && (_ndv.houg += 2, _ndw >= 2 && (_ndu.houg += 2), _ndw >= 3 && (_ndu.houg += 3)), _ndu.add(_ndv.multiply(_ndw));
            for (var _ndx = 0, _ndy = 0, _ndz = 0, _ne0 = _nds.have_slot_ids(); _ndz < _ne0.length; _ndz++) {
                var _ne1 = _ne0[_ndz],
                    _ne2 = _ndr.default.model.slot.getMst(_ne1),
                    _ne3 = _ne2.equipType;
                12 != _ne3 && 13 != _ne3 || (_ne2.sakuteki >= 5 && (_ndx += _nds.get_slotnums(parseInt(_ne1))), _ne2.taiku >= 2 && (_ndy += _nds.get_slotnums(parseInt(_ne1))));
            }
            var _ne4 = _nds.get_slotnums(13),
                _ne5 = _nds.get_slotnums(125),
                _ne6 = _nds.get_slotnums(285),
                _ne7 = _ne4 + _ne5 + _ne6;
            return _ndx > 0 && (_ndu.houg += 3, _ndu.kaih += 2, _ndu.raig += 1), 1 == _ne7 ? (_ndu.houg += 1, _ndu.raig += 3) : _ne7 >= 2 && (_ndu.houg += 2, _ndu.raig += 5), _ne6 >= 1 && (_ndu.raig += 1), _ndy > 0 && (_ndu.tyku += 6), _ndu;
        };
    },
    93065: function(_ne8, _ne9, _nea) {
        'use strict';
        var _neb = null;
        var _nec = this && this.__importDefault || function(_ned) {
            var _nee = null;
            return _ned && _ned.__esModule ? _ned : {
                'default': _ned
            };
        };
        defineModule(_ne9);
        Object.defineProperty(_ne9, '__esModule', {
            'value': true
        }), _ne9.getSlot296PersonalEffect = void 0;
        var _nef = _nea(74496),
            _neg = _nec(_nea(18622));
        _ne9.getSlot296PersonalEffect = function(_neh) {
            var _nei = null,
                _nej = new _nef.SlotItemEffectModel(),
                _nek = new _nef.SlotItemEffectModel();
            1 != _neh.ctype && 5 != _neh.ctype && 10 != _neh.ctype && 23 != _neh.ctype || (_nek.houg += 1), 10 != _neh.ctype && 23 != _neh.ctype || (_nek.kaih += 1), 145 == _neh.ship_id || 961 == _neh.ship_id ? (_nek.houg += 1, _nek.tyku += 1) : 144 == _neh.ship_id ? (_nek.houg += 1, _nek.raig += 1) : 469 == _neh.ship_id || 588 == _neh.ship_id || 667 == _neh.ship_id || 587 == _neh.ship_id || 242 == _neh.ship_id ? _nek.kaih += 1 : 497 == _neh.ship_id ? (_nek.houg += 1, _nek.kaih += 1) : 244 == _neh.ship_id ? _nek.kaih += 1 : 498 == _neh.ship_id || 975 == _neh.ship_id ? (_nek.tyku += 1, _nek.kaih += 1) : 627 == _neh.ship_id ? (_nek.houg += 2, _nek.raig += 1) : 903 != _neh.ship_id && 908 != _neh.ship_id || (_nek.houg += 3);
            var _nel = true;
            if (_nek.exists() || (_nel = false), 0 == _nel) return _nej;
            var _nem = _neh.get_slotnums(296);
            _nej = _nek.multiply(_nem);
            var _nen = 0;
            if (1 != _neh.ctype && 5 != _neh.ctype && 10 != _neh.ctype || (_nen = 1), 23 == _neh.ctype && (_nen = 2), 0 == _nen) return _nej;
            for (var _neo = 0, _nep = 0, _neq = 0, _ner = _neh.have_slot_ids(); _neq < _ner.length; _neq++) {
                var _nes = _ner[_neq],
                    _net = _neg.default.model.slot.getMst(_nes),
                    _neu = _net.equipType;
                12 != _neu && 13 != _neu || (_net.sakuteki >= 5 && (_neo += _neh.get_slotnums(parseInt(_nes))), _net.taiku >= 2 && (_nep += _neh.get_slotnums(parseInt(_nes))));
            }
            return _neo > 0 && (1 == _nen ? (_nej.houg += 1, _nej.kaih += 2, _nej.raig += 2) : 2 == _nen && (_nej.houg += 1, _nej.kaih += 2, _nej.raig += 3)), _neh.get_slotnums(285) + _neh.get_slotnums(125) >= 1 && 1 == _nen && (_nej.houg += 1, _nej.raig += 3), _neh.get_slotnums(15) + _neh.get_slotnums(286) >= 1 && 2 == _nen && (_nej.houg += 1, _nej.raig += 3), _nep > 0 && (1 == _nen ? _nej.tyku += 5 : 2 == _nen && (_nej.tyku += 6)), _nej;
        };
    },
    85767: (_nev, _new, _nex) => {
        'use strict';
        var _ney = null;
        defineModule(_new);
        Object.defineProperty(_new, '__esModule', {
            'value': true
        }), _new.getSlot297PersonalEffect = void 0;
        var _nez = _nex(74496);
        _new.getSlot297PersonalEffect = function(_nf0) {
            var _nf1 = null,
                _nf2 = new _nez.SlotItemEffectModel(),
                _nf3 = new _nez.SlotItemEffectModel();
            if (12 == _nf0.ctype) _nf3.kaih = 2;
            else {
                if (1 != _nf0.ctype && 5 != _nf0.ctype) return _nf2;
                _nf3.kaih = 1;
            }
            var _nf4 = _nf0.get_slotnums(297);
            return _nf2 = _nf3.multiply(_nf4);
        };
    },
    38314: (_nf5, _nf6, _nf7) => {
        'use strict';
        var _nf8 = null;
        defineModule(_nf6);
        Object.defineProperty(_nf6, '__esModule', {
            'value': true
        }), _nf6.getSlot301PersonalEffect = void 0;
        var _nf9 = _nf7(74496);
        _nf6.getSlot301PersonalEffect = function(_nfa) {
            var _nfb = null,
                _nfc = new _nf9.SlotItemEffectModel(),
                _nfd = new _nf9.SlotItemEffectModel();
            67 != _nfa.ctype && 78 != _nfa.ctype && 82 != _nfa.ctype && 88 != _nfa.ctype && 108 != _nfa.ctype && 112 != _nfa.ctype || (_nfd.tyku += 2, _nfd.kaih += 1, _nfd.souk += 1);
            var _nfe = true;
            if (_nfd.exists() || (_nfe = false), 0 == _nfe) return _nfc;
            var _nff = _nfa.get_slotnums(301);
            return _nfc = _nfd.multiply(_nff);
        };
    },
    59747: (_nfg, _nfh, _nfi) => {
        'use strict';
        var _nfj = null;
        defineModule(_nfh);
        Object.defineProperty(_nfh, '__esModule', {
            'value': true
        }), _nfh.getSlot302PersonalEffect = void 0;
        var _nfk = _nfi(74496);
        _nfh.getSlot302PersonalEffect = function(_nfl) {
            var _nfm = null,
                _nfn = new _nfk.SlotItemEffectModel(),
                _nfo = new _nfk.SlotItemEffectModel();
            if (76 == _nfl.ctype && (_nfo.tais = 1, _nfo.kaih = 1), !_nfo.exists()) return _nfn;
            var _nfp = _nfl.get_slotnums(302);
            return _nfn = _nfo.multiply(_nfp);
        };
    },
    40649: (_nfq, _nfr, _nfs) => {
        'use strict';
        var _nft = null;
        defineModule(_nfr);
        Object.defineProperty(_nfr, '__esModule', {
            'value': true
        }), _nfr.getSlot303PersonalEffect = void 0;
        var _nfu = _nfs(74496);
        _nfr.getSlot303PersonalEffect = function(_nfv) {
            var _nfw = null,
                _nfx = new _nfu.SlotItemEffectModel(),
                _nfy = new _nfu.SlotItemEffectModel();
            if (16 == _nfv.ctype || 4 == _nfv.ctype || 20 == _nfv.ctype || 41 == _nfv.ctype ? (_nfy.houg = 1, _nfy.tyku = 1) : 89 == _nfv.ctype && (_nfy.houg = 1, _nfy.tyku = 2, _nfy.kaih = 1), !_nfy.exists()) return _nfx;
            var _nfz = _nfv.get_slotnums(303);
            return _nfx = _nfy.multiply(_nfz);
        };
    },
    13533: (_ng0, _ng1, _ng2) => {
        'use strict';
        var _ng3 = null;
        defineModule(_ng1);
        Object.defineProperty(_ng1, '__esModule', {
            'value': true
        }), _ng1.getSlot304PersonalEffect = void 0;
        var _ng4 = _ng2(74496);
        _ng1.getSlot304PersonalEffect = function(_ng5) {
            var _ng6 = null,
                _ng7 = new _ng4.SlotItemEffectModel(),
                _ng8 = new _ng4.SlotItemEffectModel();
            if (16 == _ng5.ctype || 4 == _ng5.ctype || 20 == _ng5.ctype || 41 == _ng5.ctype ? (_ng8.houg = 1, _ng8.tais = 1, _ng8.kaih = 1) : 89 == _ng5.ctype && (_ng8.houg = 1, _ng8.tais = 2, _ng8.kaih = 2), !_ng8.exists()) return _ng7;
            var _ng9 = _ng5.get_slotnums(304);
            return _ng7 = _ng8.multiply(_ng9);
        };
    },
    99791: (_nga, _ngb, _ngc) => {
        'use strict';
        var _ngd = null;
        defineModule(_ngb);
        Object.defineProperty(_ngb, '__esModule', {
            'value': true
        }), _ngb.getSlot305More320mmGunPersonalEffect = void 0;
        var _nge = _ngc(74496);
        _ngb.getSlot305More320mmGunPersonalEffect = function(_ngf) {
            var _ngg = null,
                _ngh = new _nge.SlotItemEffectModel(),
                _ngi = _ngf.get_slotnums(426),
                _ngj = _ngf.get_slotnums(427),
                _ngk = _ngf.get_slotnums(428),
                _ngl = _ngf.get_slotnums(429),
                _ngm = _ngi + _ngj + _ngk + _ngl;
            return 113 == _ngf.ctype ? (_ngh.houg = _ngh.houg + 2 * _ngm, _ngi >= 1 && (_ngh.houg = _ngh.houg + 1 * _ngi, _ngh.kaih = _ngh.kaih + 1 * _ngi, (_ngi >= 2 || _ngj >= 1) && (_ngh.houg = _ngh.houg + 1, _ngh.kaih = _ngh.kaih + 1)), _ngk >= 1 && (_ngh.houg = _ngh.houg + 1 * _ngk, _ngh.kaih = _ngh.kaih + 1 * _ngk, (_ngk >= 2 || _ngl >= 1) && (_ngh.houg = _ngh.houg + 2, _ngh.kaih = _ngh.kaih + 1))) : 73 == _ngf.ctype ? (_ngh.houg = _ngh.houg + 1 * _ngm, _ngi >= 1 && (_ngh.houg = _ngh.houg + 1 * _ngi, _ngh.kaih = _ngh.kaih + 1 * _ngi, (_ngi >= 2 || _ngj >= 1) && (_ngh.houg = _ngh.houg + 1)), _ngk >= 1 && (_ngh.houg = _ngh.houg + 1 * _ngk, _ngh.kaih = _ngh.kaih + 1 * _ngk, (_ngk >= 2 || _ngl >= 1) && (_ngh.houg = _ngh.houg + 1))) : 58 == _ngf.ctype && _ngk >= 1 && (_ngh.houg = _ngh.houg + 1 * _ngk, _ngh.kaih = _ngh.kaih + 2 * _ngk, (_ngk >= 2 || _ngl >= 1) && (_ngh.houg = _ngh.houg + 2, _ngh.kaih = _ngh.kaih + 1)), _ngh;
        };
    },
    12138: (_ngn, _ngo, _ngp) => {
        'use strict';
        var _ngq = null;
        defineModule(_ngo);
        Object.defineProperty(_ngo, '__esModule', {
            'value': true
        }), _ngo.getSlot305_And_306_PersonalEffect = void 0;
        var _ngr = _ngp(74496);
        _ngo.getSlot305_And_306_PersonalEffect = function(_ngs) {
            var _ngt = null,
                _ngu = new _ngr.SlotItemEffectModel(),
                _ngv = new _ngr.SlotItemEffectModel();
            if (76 == _ngs.ctype && (_ngv.tais = 1, _ngv.kaih = 1), 'しんよう' == _ngs.yomi ? (_ngv.tais += 2, _ngv.kaih += 1) : 'グラーフ・ツェッペリン' != _ngs.yomi && 'アクィラ' != _ngs.yomi || (_ngv.houg = 1, _ngv.kaih = 1), !_ngv.exists()) return _ngu;
            var _ngw = _ngs.get_slotnums(305) + _ngs.get_slotnums(306);
            return _ngu = _ngv.multiply(_ngw);
        };
    },
    30042: (_ngx, _ngy, _ngz) => {
        'use strict';
        var _nh0 = null;
        defineModule(_ngy);
        Object.defineProperty(_ngy, '__esModule', {
            'value': true
        }), _ngy.getSlot307PersonalEffect = void 0;
        var _nh1 = _ngz(74496);
        _ngy.getSlot307PersonalEffect = function(_nh2) {
            var _nh3 = null,
                _nh4 = new _nh1.SlotItemEffectModel(),
                _nh5 = new _nh1.SlotItemEffectModel();
            if ('アメリカ' == _nh2.getCountryName() && (_nh5.houg = 1, _nh5.tyku = 1, _nh5.kaih = 1), !_nh5.exists()) return _nh4;
            var _nh6 = _nh2.get_slotnums(307);
            return _nh4 = _nh5.multiply(_nh6);
        };
    },
    33623: (_nh7, _nh8, _nh9) => {
        'use strict';
        var _nha = null;
        defineModule(_nh8);
        Object.defineProperty(_nh8, '__esModule', {
            'value': true
        }), _nh8.getSlot308PersonalEffect = void 0;
        var _nhb = _nh9(74496);
        _nh8.getSlot308PersonalEffect = function(_nhc) {
            var _nhd = null,
                _nhe = new _nhb.SlotItemEffectModel(),
                _nhf = new _nhb.SlotItemEffectModel();
            if ('アメリカ' == _nhc.getCountryName() && (_nhf.houg = 1, _nhf.tyku = 1, _nhf.kaih = 1), 2 == _nhc.stype ? _nhf.houg += 1 : 1 == _nhc.stype && (_nhf.tyku += 1, _nhf.kaih += 1), 651 != _nhc.ship_id && 656 != _nhc.ship_id || (_nhf.houg += 1, _nhf.tyku += 1, _nhf.kaih += 1), !_nhf.exists()) return _nhe;
            var _nhg = _nhc.get_slotnums(308);
            return _nhe = _nhf.multiply(_nhg);
        };
    },
    17732: (_nhh, _nhi, _nhj) => {
        'use strict';
        var _nhk = null;
        defineModule(_nhi);
        Object.defineProperty(_nhi, '__esModule', {
            'value': true
        }), _nhi.getSlot30_410PersonalEffect = void 0;
        var _nhl = _nhj(74496);
        _nhi.getSlot30_410PersonalEffect = function(_nhm) {
            var _nhn = null,
                _nho = new _nhl.SlotItemEffectModel();
            return 73 != _nhm.ship_id && 501 != _nhm.ship_id && 506 != _nhm.ship_id && 502 != _nhm.ship_id && 507 != _nhm.ship_id || (_nho.tyku += 3, _nho.kaih += 2, _nho.saku += 2, _nhm.get_slotnums(410) >= 1 && (_nho.tyku += 2, _nho.kaih += 2, _nho.houg += 1, _nho.souk += 1)), 54 == _nhm.ctype && (_nho.tyku += 3, _nho.kaih += 2, _nho.saku += 2, _nhm.get_slotnums(410) >= 1 && (_nho.tyku += 2, _nho.kaih += 2, _nho.houg += 1, _nho.souk += 1, 968 == _nhm.ship_id && (_nho.houg += 1, _nho.tyku += 1, _nho.kaih += 1))), _nho;
        };
    },
    85630: function(_nhp, _nhq, _nhr) {
        'use strict';
        var _nhs = null;
        var _nht = this && this.__importDefault || function(_nhu) {
            var _nhv = null;
            return _nhu && _nhu.__esModule ? _nhu : {
                'default': _nhu
            };
        };
        defineModule(_nhq);
        Object.defineProperty(_nhq, '__esModule', {
            'value': true
        }), _nhq.getSlot310PersonalEffect = void 0;
        var _nhw = _nhr(74496),
            _nhx = _nht(_nhr(18622));
        _nhq.getSlot310PersonalEffect = function(_nhy) {
            var _nhz = null,
                _ni0 = new _nhw.SlotItemEffectModel(),
                _ni1 = new _nhw.SlotItemEffectModel(),
                _ni2 = new _nhw.SlotItemEffectModel();
            34 == _nhy.ctype ? (_ni1.houg += 2, _ni1.tyku += 1, _ni1.kaih += 1, _ni2.houg += 2) : 56 == _nhy.ctype ? (_ni1.houg += 2, _ni1.kaih += 1, _ni2.houg += 2, _ni2.kaih += 2) : 90 == _nhy.ctype && (_ni1.houg += 3, _ni1.raig += 2, _ni1.tyku += 1, _ni1.kaih += 1, _ni2.houg += 1, _ni2.raig += 1);
            var _ni3 = new _nhw.SlotItemEffectModel(),
                _ni4 = new _nhw.SlotItemEffectModel();
            622 != _nhy.ship_id && 623 != _nhy.ship_id && 624 != _nhy.ship_id || (_ni1.houg += 2, _ni1.kaih += 1, _ni1.tais += 1, _ni3.houg = 1, _ni3.raig = 1, _ni4.houg = 3, _ni4.kaih = 2, _ni4.raig = 2);
            var _ni5 = true;
            if (_ni1.exists() || (_ni5 = false), 0 == _ni5) return _ni0;
            var _ni6 = _nhy.get_slotnums(310) + _nhy.get_slotnums(518);
            _ni0 = _ni1.multiply(_ni6);
            for (var _ni7 = 0, _ni8 = 0, _ni9 = 0, _nia = [310, 518]; _ni9 < _nia.length; _ni9++) {
                var _nib = _nia[_ni9],
                    _nic = _nhy.have_slots_dict[_nib];
                if (null != _nic)
                    for (var _nid = 0, _nie = _nic; _nid < _nie.length; _nid++) {
                        var _nif = _nie[_nid];
                        null != _nif && (_nif.level >= 7 && _ni7++, _nif.level >= 10 && _ni8++);
                    }
            }
            if (_ni3.exists() && _ni7 > 0 && _ni0.add(_ni3.multiply(_ni7)), _ni2.exists() && _ni8 > 0 && _ni0.add(_ni2.multiply(_ni8)), _ni4.exists()) {
                for (var _nig = 0, _nih = 0, _nii = _nhy.have_slot_ids(); _nih < _nii.length; _nih++) {
                    var _nij = _nii[_nih],
                        _nik = _nhx.default.model.slot.getMst(_nij),
                        _nil = _nik.equipType;
                    (12 == _nil || 13 == _nil) && _nik.sakuteki >= 5 && (_nig += _nhy.get_slotnums(parseInt(_nij)));
                }
                _nig > 0 && _ni0.add(_ni4);
            }
            return _ni0;
        };
    },
    88736: (_nim, _nin, _nio) => {
        'use strict';
        var _nip = null;
        defineModule(_nin);
        Object.defineProperty(_nin, '__esModule', {
            'value': true
        }), _nin.getSlot313PersonalEffect = void 0;
        var _niq = _nio(74496);
        _nin.getSlot313PersonalEffect = function(_nir) {
            var _nis = null,
                _nit = new _niq.SlotItemEffectModel(),
                _niu = new _niq.SlotItemEffectModel();
            87 != _nir.ctype && 91 != _nir.ctype || (_niu.houg += 2, _niu.tyku += 2, _niu.kaih += 1, _niu.souk += 1), 651 != _nir.ship_id && 656 != _nir.ship_id || (_niu.houg += 2, _niu.tyku += 2, _niu.kaih += 1, _niu.souk += 1);
            var _niv = true;
            if (_niu.exists() || (_niv = false), 0 == _niv) return _nit;
            var _niw = _nir.get_slotnums(313);
            return _nit = _niu.multiply(_niw);
        };
    },
    49341: (_nix, _niy, _niz) => {
        'use strict';
        var _nj0 = null;
        defineModule(_niy);
        Object.defineProperty(_niy, '__esModule', {
            'value': true
        }), _niy.getSlot314PersonalEffect = void 0;
        var _nj1 = _niz(74496);
        _niy.getSlot314PersonalEffect = function(_nj2) {
            var _nj3 = null,
                _nj4 = new _nj1.SlotItemEffectModel(),
                _nj5 = new _nj1.SlotItemEffectModel();
            87 != _nj2.ctype && 91 != _nj2.ctype || (_nj5.houg += 1, _nj5.raig += 3);
            var _nj6 = true;
            if (_nj5.exists() || (_nj6 = false), 0 == _nj6) return _nj4;
            var _nj7 = _nj2.get_slotnums(314);
            return _nj4 = _nj5.multiply(_nj7);
        };
    },
    74306: (_nj8, _nj9, _nja) => {
        'use strict';
        var _njb = null;
        defineModule(_nj9);
        Object.defineProperty(_nj9, '__esModule', {
            'value': true
        }), _nj9.getSlot315PersonalEffect = void 0;
        var _njc = _nja(74496);
        _nj9.getSlot315PersonalEffect = function(_njd) {
            var _nje = null,
                _njf = new _njc.SlotItemEffectModel(),
                _njg = new _njc.SlotItemEffectModel();
            'アメリカ' == _njd.getCountryName() && (_njg.houg += 2, _njg.kaih += 3, _njg.saku += 4), 87 != _njd.ctype && 91 != _njd.ctype || (_njg.houg += 1, _njf.leng += 1), 651 != _njd.ship_id && 656 != _njd.ship_id || (_njf.houg += 2, _njf.kaih += 2, _njf.saku += 3, _njf.leng += 1);
            var _njh = true;
            if (_njg.exists() || (_njh = false), 0 == _njh) return _njf;
            var _nji = _njd.get_slotnums(315);
            return _njf.add(_njg.multiply(_nji)), _njf;
        };
    },
    83898: (_njj, _njk, _njl) => {
        'use strict';
        var _njm = null;
        defineModule(_njk);
        Object.defineProperty(_njk, '__esModule', {
            'value': true
        }), _njk.getSlot316PersonalEffect = void 0;
        var _njn = _njl(74496);
        _njk.getSlot316PersonalEffect = function(_njo) {
            var _njp = null,
                _njq = new _njn.SlotItemEffectModel(),
                _njr = new _njn.SlotItemEffectModel();
            if (68 == _njo.ctype) {
                if (_njr.houg += 4, _njr.tyku += 1, _njr.kaih += 1, !_njr.exists()) return _njq;
                var _njs = _njo.get_slotnums(316);
                _njq = _njr.multiply(_njs);
            }
            return _njq;
        };
    },
    71873: (_njt, _nju, _njv) => {
        'use strict';
        var _njw = null;
        defineModule(_nju);
        Object.defineProperty(_nju, '__esModule', {
            'value': true
        }), _nju.getSlot317PersonalEffect = void 0;
        var _njx = _njv(74496);
        _nju.getSlot317PersonalEffect = function(_njy) {
            var _njz = null,
                _nk0 = new _njx.SlotItemEffectModel(),
                _nk1 = new _njx.SlotItemEffectModel(),
                _nk2 = 0,
                _nk3 = false;
            if (6 == _njy.ctype ? (_nk1.houg += 2, _nk1.tyku += 1, _nk2 = 1, _nk3 = true) : 2 == _njy.ctype && (_nk1.houg += 1, _nk1.tyku += 1, _nk1.kaih += 1, _nk2 = 2, _nk3 = true), 149 == _njy.ship_id || 591 == _njy.ship_id || 592 == _njy.ship_id ? (_nk1.houg += 2, _nk1.tyku += 2, _nk3 = true) : 150 == _njy.ship_id ? (_nk1.houg += 1, _nk1.tyku += 1, _nk3 = true) : 151 == _njy.ship_id ? (_nk1.houg += 1, _nk1.tyku += 1, _nk1.kaih += 1, _nk3 = true) : 593 == _njy.ship_id ? (_nk1.houg += 1, _nk1.tyku += 3, _nk1.kaih += 2, _nk3 = true) : 954 == _njy.ship_id ? (_nk1.houg += 2, _nk1.tyku += 2, _nk1.kaih += 1, _nk3 = true) : 152 == _njy.ship_id || 694 == _njy.ship_id ? (_nk1.houg += 2, _nk1.tyku += 1, _nk3 = true) : 541 == _njy.ship_id ? (_nk1.houg += 1, _nk1.tyku += 2, _nk3 = true) : 573 == _njy.ship_id && (_nk1.houg += 2, _nk1.tyku += 2, _nk1.kaih += 1, _nk3 = true), 0 == _nk3) return _nk0;
            if (_nk0.add(_nk1), 0 == _nk2) return _nk0;
            var _nk4 = _njy.get_each_level_nums(317),
                _nk5 = [];
            return _nk2 > 0 && _nk4.forEach(function(_nk6, _nk7) {
                var _nk8 = null;
                for (var _nk9 = 1; _nk9 <= _njy.SLOT_LEVEL_MAX; _nk9++) null == _nk5[_nk9] && (_nk5[_nk9] = 0), _nk7 >= _nk9 && (_nk5[_nk9] += _nk6);
            }), 1 == _nk2 ? _nk5[8] >= 1 && (_nk0.houm += 1) : 2 == _nk2 && _nk4[10] >= 1 && (_nk0.houm += 1), _nk0;
        };
    },
    53122: function(_nka, _nkb, _nkc) {
        'use strict';
        var _nkd = null;
        var _nke = this && this.__importDefault || function(_nkf) {
            var _nkg = null;
            return _nkf && _nkf.__esModule ? _nkf : {
                'default': _nkf
            };
        };
        defineModule(_nkb);
        Object.defineProperty(_nkb, '__esModule', {
            'value': true
        }), _nkb.getSlot318PersonalEffect = void 0;
        var _nkh = _nkc(74496),
            _nki = _nke(_nkc(18622));
        _nkb.getSlot318PersonalEffect = function(_nkj) {
            var _nkk = null,
                _nkl = new _nkh.SlotItemEffectModel(),
                _nkm = new _nkh.SlotItemEffectModel(),
                _nkn = new _nkh.SlotItemEffectModel(),
                _nko = new _nkh.SlotItemEffectModel();
            if (411 == _nkj.ship_id || 412 == _nkj.ship_id ? _nkm.houg += 1 : 82 == _nkj.ship_id ? (_nkm.houg += 2, _nkm.tyku += 2, _nkm.kaih += 2, _nko.tyku = 2, _nko.kaih = 3, _nko.houm = 1) : 553 == _nkj.ship_id ? (_nkm.houg += 2, _nkm.tyku += 2, _nkm.kaih += 2, _nkm.houm += 3, _nko.tyku = 2, _nko.kaih = 3, _nko.houm = 1, _nkn.kaih = 2, _nkn.souk = 1) : 88 == _nkj.ship_id ? (_nkm.houg += 2, _nkm.tyku += 2, _nkm.kaih += 2, _nko.tyku = 2, _nko.kaih = 3, _nko.houm = 1) : 541 == _nkj.ship_id || 573 == _nkj.ship_id ? (_nkm.houg += 3, _nkm.tyku += 2, _nkm.kaih += 1, _nkm.houm += 2, _nkn.houg = 2, _nkn.kaih = 2, _nkn.souk = 1, _nkn.houm = 1) : 554 == _nkj.ship_id && (_nkm.houg += 3, _nkm.tyku += 2, _nkm.kaih += 2, _nkm.houm += 3, _nko.tyku = 2, _nko.kaih = 3, _nko.houm = 1, _nkn.houg = 1, _nkn.kaih = 2, _nkn.souk = 1, _nkn.houm = 1), !_nkm.exists()) return _nkl;
            var _nkp = _nkj.get_slotnums(318);
            if (_nkl = _nkm.multiply(_nkp), !_nkn.exists() && !_nko.exists()) return _nkl;
            for (var _nkq = 0, _nkr = 0, _nks = _nkj.have_slot_ids(); _nkr < _nks.length; _nkr++) {
                var _nkt = _nks[_nkr],
                    _nku = _nki.default.model.slot.getMst(_nkt),
                    _nkv = _nku.equipType;
                (12 == _nkv || 13 == _nkv) && _nku.taiku >= 2 && (_nkq += _nkj.get_slotnums(parseInt(_nkt)));
            }
            var _nkw = _nkj.get_slotnums(290);
            return _nko.exists() && _nkq > 0 && 0 == _nkw && _nkl.add(_nko), _nkn.exists() && _nkw >= 1 && _nkl.add(_nkn), _nkl;
        };
    },
    51063: (_nkx, _nky, _nkz) => {
        'use strict';
        var _nl0 = null;
        defineModule(_nky);
        Object.defineProperty(_nky, '__esModule', {
            'value': true
        }), _nky.getSlot319PersonalEffect = void 0;
        var _nl1 = _nkz(74496);
        _nky.getSlot319PersonalEffect = function(_nl2) {
            var _nl3 = null,
                _nl4 = new _nl1.SlotItemEffectModel(),
                _nl5 = new _nl1.SlotItemEffectModel();
            if (554 != _nl2.ship_id && 553 != _nl2.ship_id || (_nl5.houg = 7, _nl5.tyku = 3, _nl5.kaih = 2), !_nl5.exists()) return _nl4;
            var _nl6 = _nl2.get_slotnums(319);
            return _nl4 = _nl5.multiply(_nl6);
        };
    },
    91491: (_nl7, _nl8, _nl9) => {
        'use strict';
        var _nla = null;
        defineModule(_nl8);
        Object.defineProperty(_nl8, '__esModule', {
            'value': true
        }), _nl8.getSlot320PersonalEffect = void 0;
        var _nlb = _nl9(74496);
        _nl8.getSlot320PersonalEffect = function(_nlc) {
            var _nld = null,
                _nle = new _nlb.SlotItemEffectModel(),
                _nlf = new _nlb.SlotItemEffectModel();
            if (553 == _nlc.ship_id) _nlf.houg = 2;
            else {
                if (554 == _nlc.ship_id) _nlf.houg = 4;
                else {
                    if (196 == _nlc.ship_id) _nlf.houg = 3;
                    else {
                        if (197 == _nlc.ship_id) _nlf.houg = 3;
                        else {
                            if (508 == _nlc.ship_id) _nlf.houg = 4;
                            else {
                                if (509 != _nlc.ship_id) return _nle;
                                _nlf.houg = 4;
                            }
                        }
                    }
                }
            }
            var _nlg = _nlc.get_slotnums(320);
            return _nle = _nlf.multiply(_nlg);
        };
    },
    85495: (_nlh, _nli, _nlj) => {
        'use strict';
        var _nlk = null;
        defineModule(_nli);
        Object.defineProperty(_nli, '__esModule', {
            'value': true
        }), _nli.getSlot322PersonalEffect = void 0;
        var _nll = _nlj(74496);
        _nli.getSlot322PersonalEffect = function(_nlm) {
            var _nln = null,
                _nlo = new _nll.SlotItemEffectModel(),
                _nlp = new _nll.SlotItemEffectModel();
            if (554 != _nlm.ship_id && 553 != _nlm.ship_id || (_nlp.houg = 5, _nlp.tyku = 2, _nlp.kaih = 2, _nlp.tais = 1), !_nlp.exists()) return _nlo;
            var _nlq = _nlm.get_slotnums(322);
            return _nlo = _nlp.multiply(_nlq);
        };
    },
    65365: (_nlr, _nls, _nlt) => {
        'use strict';
        var _nlu = null;
        defineModule(_nls);
        Object.defineProperty(_nls, '__esModule', {
            'value': true
        }), _nls.getSlot323PersonalEffect = void 0;
        var _nlv = _nlt(74496);
        _nls.getSlot323PersonalEffect = function(_nlw) {
            var _nlx = null,
                _nly = new _nlv.SlotItemEffectModel(),
                _nlz = new _nlv.SlotItemEffectModel();
            if (554 != _nlw.ship_id && 553 != _nlw.ship_id || (_nlz.houg = 6, _nlz.tyku = 3, _nlz.kaih = 3, _nlz.tais = 2), !_nlz.exists()) return _nly;
            var _nm0 = _nlw.get_slotnums(323);
            return _nly = _nlz.multiply(_nm0);
        };
    },
    98164: (_nm1, _nm2, _nm3) => {
        'use strict';
        var _nm4 = null;
        defineModule(_nm2);
        Object.defineProperty(_nm2, '__esModule', {
            'value': true
        }), _nm2.getSlot324And325PersonalEffect = void 0;
        var _nm5 = _nm3(74496);
        _nm2.getSlot324And325PersonalEffect = function(_nm6) {
            var _nm7 = null,
                _nm8 = new _nm5.SlotItemEffectModel(),
                _nm9 = new _nm5.SlotItemEffectModel();
            if (554 == _nm6.ship_id || 646 == _nm6.ship_id ? (_nm9.houg = 2, _nm9.tais = 3, _nm9.kaih = 1) : 553 == _nm6.ship_id && (_nm9.houg = 1, _nm9.tais = 2, _nm9.kaih = 1), !_nm9.exists()) return _nm8;
            var _nma = _nm6.get_slotnums(324) + _nm6.get_slotnums(325);
            return _nm8 = _nm9.multiply(_nma);
        };
    },
    38114: (_nmb, _nmc, _nmd) => {
        'use strict';
        var _nme = null;
        defineModule(_nmc);
        Object.defineProperty(_nmc, '__esModule', {
            'value': true
        }), _nmc.getSlot326PersonalEffect = void 0;
        var _nmf = _nmd(74496);
        _nmc.getSlot326PersonalEffect = function(_nmg) {
            var _nmh = null,
                _nmi = new _nmf.SlotItemEffectModel(),
                _nmj = new _nmf.SlotItemEffectModel();
            if (646 == _nmg.ship_id ? (_nmj.houg = 3, _nmj.tais = 5, _nmj.kaih = 3) : 554 == _nmg.ship_id ? (_nmj.houg = 3, _nmj.tais = 4, _nmj.kaih = 2) : 553 == _nmg.ship_id && (_nmj.houg = 1, _nmj.tais = 3, _nmj.kaih = 1), !_nmj.exists()) return _nmi;
            var _nmk = _nmg.get_slotnums(326);
            return _nmi = _nmj.multiply(_nmk);
        };
    },
    21003: (_nml, _nmm, _nmn) => {
        'use strict';
        var _nmo = null;
        defineModule(_nmm);
        Object.defineProperty(_nmm, '__esModule', {
            'value': true
        }), _nmm.getSlot327PersonalEffect = void 0;
        var _nmp = _nmn(74496);
        _nmm.getSlot327PersonalEffect = function(_nmq) {
            var _nmr = null,
                _nms = new _nmp.SlotItemEffectModel(),
                _nmt = new _nmp.SlotItemEffectModel();
            if (646 == _nmq.ship_id ? (_nmt.houg = 5, _nmt.tais = 6, _nmt.kaih = 4) : 554 == _nmq.ship_id ? (_nmt.houg = 4, _nmt.tais = 5, _nmt.kaih = 2) : 553 == _nmq.ship_id && (_nmt.houg = 2, _nmt.tais = 4, _nmt.kaih = 1), !_nmt.exists()) return _nms;
            var _nmu = _nmq.get_slotnums(327);
            return _nms = _nmt.multiply(_nmu);
        };
    },
    77010: (_nmv, _nmw, _nmx) => {
        'use strict';
        var _nmy = null;
        defineModule(_nmw);
        Object.defineProperty(_nmw, '__esModule', {
            'value': true
        }), _nmw.getSlot328PersonalEffect = void 0;
        var _nmz = _nmx(74496);
        _nmw.getSlot328PersonalEffect = function(_nn0) {
            var _nn1 = null,
                _nn2 = new _nmz.SlotItemEffectModel(),
                _nn3 = new _nmz.SlotItemEffectModel();
            if ('こんごう' == _nn0.yomi ? (_nn3.houg = 1, _nn3.kaih = 1, 209 == _nn0.ship_id || 149 == _nn0.ship_id ? _nn3.houg += 1 : 591 == _nn0.ship_id && (_nn3.houg += 2, _nn3.raig += 1)) : 'ひえい' == _nn0.yomi ? (_nn3.houg = 1, _nn3.kaih = 1, 210 == _nn0.ship_id || 150 == _nn0.ship_id ? _nn3.houg += 1 : 592 == _nn0.ship_id && (_nn3.houg += 2, _nn3.tyku += 1)) : 'はるな' == _nn0.yomi ? (_nn3.houg = 1, _nn3.kaih = 1, 211 == _nn0.ship_id || 151 == _nn0.ship_id ? _nn3.houg += 1 : 593 == _nn0.ship_id ? (_nn3.houg += 1, _nn3.tyku += 2) : 954 == _nn0.ship_id && (_nn3.houg += 2, _nn3.tyku += 1)) : 'きりしま' == _nn0.yomi ? (_nn3.houg = 1, _nn3.kaih = 1, 212 == _nn0.ship_id || 152 == _nn0.ship_id ? _nn3.houg += 1 : 694 == _nn0.ship_id && (_nn3.houg += 2, _nn3.tyku += 1)) : ('ふそう' == _nn0.yomi || 'やましろ' == _nn0.yomi || 'いせ' == _nn0.yomi || 'ひゅうが' == _nn0.yomi) && (_nn3.houg = 1), !_nn3.exists()) return _nn2;
            var _nn4 = _nn0.get_slotnums(328);
            return _nn2 = _nn3.multiply(_nn4);
        };
    },
    39126: (_nn5, _nn6, _nn7) => {
        'use strict';
        var _nn8 = null;
        defineModule(_nn6);
        Object.defineProperty(_nn6, '__esModule', {
            'value': true
        }), _nn6.getSlot329PersonalEffect = void 0;
        var _nn9 = _nn7(74496);
        _nn6.getSlot329PersonalEffect = function(_nna) {
            var _nnb = null,
                _nnc = new _nn9.SlotItemEffectModel(),
                _nnd = new _nn9.SlotItemEffectModel();
            if ('こんごう' == _nna.yomi ? (_nnd.houg = 1, _nnd.kaih = 1, 209 == _nna.ship_id ? _nnd.houg += 1 : 149 == _nna.ship_id ? (_nnd.houg += 2, _nnd.tyku += 1) : 591 == _nna.ship_id && (_nnd.houg += 3, _nnd.tyku += 1, _nnd.raig += 2)) : 'ひえい' == _nna.yomi ? (_nnd.houg = 1, _nnd.kaih = 1, 210 == _nna.ship_id ? _nnd.houg += 1 : 150 == _nna.ship_id ? (_nnd.houg += 2, _nnd.tyku += 1) : 592 == _nna.ship_id && (_nnd.houg += 3, _nnd.tyku += 1, _nnd.raig += 2)) : 'はるな' == _nna.yomi ? (_nnd.houg = 1, _nnd.kaih = 1, 211 == _nna.ship_id ? _nnd.houg += 1 : 151 == _nna.ship_id ? (_nnd.houg += 2, _nnd.tyku += 1) : 593 == _nna.ship_id ? (_nnd.houg += 2, _nnd.tyku += 3, _nnd.raig += 1) : 954 == _nna.ship_id && (_nnd.houg += 3, _nnd.tyku += 1, _nnd.raig += 2)) : 'きりしま' == _nna.yomi ? (_nnd.houg = 1, _nnd.kaih = 1, 212 == _nna.ship_id ? _nnd.houg += 1 : 152 == _nna.ship_id ? (_nnd.houg += 2, _nnd.tyku += 1) : 694 == _nna.ship_id && (_nnd.houg += 4, _nnd.tyku += 1, _nnd.raig += 1)) : ('ふそう' == _nna.yomi || 'やましろ' == _nna.yomi || 'いせ' == _nna.yomi || 'ひゅうが' == _nna.yomi) && (_nnd.houg = 1), !_nnd.exists()) return _nnc;
            var _nne = _nna.get_slotnums(329);
            return _nnc = _nnd.multiply(_nne);
        };
    },
    72176: (_nnf, _nng, _nnh) => {
        'use strict';
        var _nni = null;
        defineModule(_nng);
        Object.defineProperty(_nng, '__esModule', {
            'value': true
        }), _nng.getSlot335PersonalEffect = void 0;
        var _nnj = _nnh(74496);
        _nng.getSlot335PersonalEffect = function(_nnk) {
            var _nnl = null,
                _nnm = new _nnj.SlotItemEffectModel(),
                _nnn = new _nnj.SlotItemEffectModel();
            if (277 == _nnk.ship_id || 278 == _nnk.ship_id ? (_nnn.tyku = 1, _nnn.kaih = 1) : 594 != _nnk.ship_id && 599 != _nnk.ship_id && 610 != _nnk.ship_id && 646 != _nnk.ship_id && 698 != _nnk.ship_id || (_nnn.tyku = 2, _nnn.kaih = 1), !_nnn.exists()) return _nnm;
            var _nno = _nnk.get_slotnums(335);
            return _nnm = _nnn.multiply(_nno);
        };
    },
    33846: (_nnp, _nnq, _nnr) => {
        'use strict';
        var _nns = null;
        defineModule(_nnq);
        Object.defineProperty(_nnq, '__esModule', {
            'value': true
        }), _nnq.getSlot336PersonalEffect = void 0;
        var _nnt = _nnr(74496);
        _nnq.getSlot336PersonalEffect = function(_nnu) {
            var _nnv = null,
                _nnw = new _nnt.SlotItemEffectModel(),
                _nnx = new _nnt.SlotItemEffectModel();
            if (277 == _nnu.ship_id || 278 == _nnu.ship_id ? (_nnx.houg = 1, _nnx.tyku = 1, _nnx.kaih = 1) : 594 != _nnu.ship_id && 599 != _nnu.ship_id && 610 != _nnu.ship_id && 646 != _nnu.ship_id && 698 != _nnu.ship_id || (_nnx.houg = 1, _nnx.tyku = 2, _nnx.kaih = 1), !_nnx.exists()) return _nnw;
            var _nny = _nnu.get_slotnums(336);
            return _nnw = _nnx.multiply(_nny);
        };
    },
    97157: (_nnz, _no0, _no1) => {
        'use strict';
        var _no2 = null;
        defineModule(_no0);
        Object.defineProperty(_no0, '__esModule', {
            'value': true
        }), _no0.getSlot337PersonalEffect = void 0;
        var _no3 = _no1(74496);
        _no0.getSlot337PersonalEffect = function(_no4) {
            var _no5 = null,
                _no6 = new _no3.SlotItemEffectModel(),
                _no7 = new _no3.SlotItemEffectModel();
            if (277 == _no4.ship_id || 278 == _no4.ship_id ? (_no7.houg = 1, _no7.tyku = 1, _no7.kaih = 1) : 594 != _no4.ship_id && 599 != _no4.ship_id && 610 != _no4.ship_id && 646 != _no4.ship_id && 698 != _no4.ship_id || (_no7.houg = 2, _no7.tyku = 2, _no7.kaih = 1), !_no7.exists()) return _no6;
            var _no8 = _no4.get_slotnums(337);
            return _no6 = _no7.multiply(_no8);
        };
    },
    63406: (_no9, _noa, _nob) => {
        'use strict';
        var _noc = null;
        defineModule(_noa);
        Object.defineProperty(_noa, '__esModule', {
            'value': true
        }), _noa.getSlot338PersonalEffect = void 0;
        var _nod = _nob(74496);
        _noa.getSlot338PersonalEffect = function(_noe) {
            var _nof = null,
                _nog = new _nod.SlotItemEffectModel(),
                _noh = new _nod.SlotItemEffectModel();
            if (277 == _noe.ship_id || 278 == _noe.ship_id ? (_noh.houg = 1, _noh.tyku = 1, _noh.kaih = 2) : 594 == _noe.ship_id || 646 == _noe.ship_id || 698 == _noe.ship_id ? (_noh.houg = 1, _noh.tyku = 2, _noh.kaih = 3) : 599 != _noe.ship_id && 610 != _noe.ship_id || (_noh.houg = 4, _noh.tyku = 3, _noh.kaih = 4), !_noh.exists()) return _nog;
            var _noi = _noe.get_slotnums(338);
            return _nog = _noh.multiply(_noi);
        };
    },
    66373: (_noj, _nok, _nol) => {
        'use strict';
        var _nom = null;
        defineModule(_nok);
        Object.defineProperty(_nok, '__esModule', {
            'value': true
        }), _nok.getSlot339PersonalEffect = void 0;
        var _non = _nol(74496);
        _nok.getSlot339PersonalEffect = function(_noo) {
            var _nop = null,
                _noq = new _non.SlotItemEffectModel(),
                _nor = new _non.SlotItemEffectModel();
            if (277 == _noo.ship_id || 278 == _noo.ship_id ? (_nor.houg = 1, _nor.tyku = 2, _nor.kaih = 2) : 594 == _noo.ship_id || 646 == _noo.ship_id || 698 == _noo.ship_id ? (_nor.houg = 1, _nor.tyku = 3, _nor.kaih = 4) : 599 != _noo.ship_id && 610 != _noo.ship_id || (_nor.houg = 6, _nor.tyku = 4, _nor.kaih = 5), !_nor.exists()) return _noq;
            var _nos = _noo.get_slotnums(339);
            return _noq = _nor.multiply(_nos);
        };
    },
    19707: (_not, _nou, _nov) => {
        'use strict';
        var _now = null;
        defineModule(_nou);
        Object.defineProperty(_nou, '__esModule', {
            'value': true
        }), _nou.getSlot340PersonalEffect = void 0;
        var _nox = _nov(74496);
        _nou.getSlot340PersonalEffect = function(_noy) {
            var _noz = null,
                _np0 = new _nox.SlotItemEffectModel(),
                _np1 = new _nox.SlotItemEffectModel();
            if ('ガリバルディ' != _noy.yomi && 'アブルッツィ' != _noy.yomi || (_np1.houg = 1, _np1.tyku = 1, _np1.kaih = 1), !_np1.exists()) return _np0;
            var _np2 = _noy.get_slotnums(340);
            return _np0 = _np1.multiply(_np2);
        };
    },
    63978: (_np3, _np4, _np5) => {
        'use strict';
        var _np6 = null;
        defineModule(_np4);
        Object.defineProperty(_np4, '__esModule', {
            'value': true
        }), _np4.getSlot341PersonalEffect = void 0;
        var _np7 = _np5(74496);
        _np4.getSlot341PersonalEffect = function(_np8) {
            var _np9 = null,
                _npa = new _np7.SlotItemEffectModel(),
                _npb = new _np7.SlotItemEffectModel();
            if ('ガリバルディ' == _np8.yomi || 'アブルッツィ' == _np8.yomi ? (_npb.houg = 2, _npb.tyku = 1, _npb.kaih = 1) : 'ゴトランド' == _np8.yomi && (_npb.houg = 1, _npb.tyku = 1, _npb.kaih = 1), !_npb.exists()) return _npa;
            var _npc = _np8.get_slotnums(341);
            return _npa = _npb.multiply(_npc);
        };
    },
    92382: (_npd, _npe, _npf) => {
        'use strict';
        var _npg = null;
        defineModule(_npe);
        Object.defineProperty(_npe, '__esModule', {
            'value': true
        }), _npe.getSlot342PersonalEffect = void 0;
        var _nph = _npf(74496);
        _npe.getSlot342PersonalEffect = function(_npi) {
            var _npj = null,
                _npk = new _nph.SlotItemEffectModel(),
                _npl = new _nph.SlotItemEffectModel();
            if (277 == _npi.ship_id || 278 == _npi.ship_id || 461 == _npi.ship_id || 466 == _npi.ship_id || 462 == _npi.ship_id || 467 == _npi.ship_id ? _npl.houg = 1 : 594 == _npi.ship_id || 646 == _npi.ship_id || 698 == _npi.ship_id ? (_npl.houg = 2, _npl.tyku = 1, _npl.kaih = 1) : 599 != _npi.ship_id && 610 != _npi.ship_id || (_npl.houg = 3, _npl.tyku = 2, _npl.kaih = 2), !_npl.exists()) return _npk;
            var _npm = _npi.get_slotnums(342);
            return _npk = _npl.multiply(_npm);
        };
    },
    78415: (_npn, _npo, _npp) => {
        'use strict';
        var _npq = null;
        defineModule(_npo);
        Object.defineProperty(_npo, '__esModule', {
            'value': true
        }), _npo.getSlot343PersonalEffect = void 0;
        var _npr = _npp(74496);
        _npo.getSlot343PersonalEffect = function(_nps) {
            var _npt = null,
                _npu = new _npr.SlotItemEffectModel(),
                _npv = new _npr.SlotItemEffectModel();
            if (277 == _nps.ship_id || 278 == _nps.ship_id ? _npv.houg = 2 : 461 == _nps.ship_id || 466 == _nps.ship_id || 462 == _nps.ship_id || 467 == _nps.ship_id ? _npv.houg = 1 : 594 == _nps.ship_id || 646 == _nps.ship_id || 698 == _nps.ship_id ? (_npv.houg = 3, _npv.tyku = 2, _npv.kaih = 1) : 599 != _nps.ship_id && 610 != _nps.ship_id || (_npv.houg = 5, _npv.tyku = 3, _npv.kaih = 3), !_npv.exists()) return _npu;
            var _npw = _nps.get_slotnums(343);
            return _npu = _npv.multiply(_npw);
        };
    },
    23090: (_npx, _npy, _npz) => {
        'use strict';
        var _nq0 = null;
        defineModule(_npy);
        Object.defineProperty(_npy, '__esModule', {
            'value': true
        }), _npy.getSlot344PersonalEffect = void 0;
        var _nq1 = _npz(74496);
        _npy.getSlot344PersonalEffect = function(_nq2) {
            var _nq3 = null,
                _nq4 = new _nq1.SlotItemEffectModel(),
                _nq5 = new _nq1.SlotItemEffectModel();
            if (599 == _nq2.ship_id || 610 == _nq2.ship_id ? _nq5.houg = 3 : 555 == _nq2.ship_id || 560 == _nq2.ship_id ? (_nq5.houg = 2, _nq5.tais = 2) : 318 == _nq2.ship_id ? (_nq5.houg = 4, _nq5.tais = 1) : 282 == _nq2.ship_id ? (_nq5.houg = 2, _nq5.tais = 1) : 888 == _nq2.ship_id ? (_nq5.houg = 4, _nq5.tais = 2) : 883 == _nq2.ship_id && (_nq5.houg = 5, _nq5.tais = 2), !_nq5.exists()) return _nq4;
            var _nq6 = _nq2.get_slotnums(344);
            return _nq4 = _nq5.multiply(_nq6);
        };
    },
    18776: (_nq7, _nq8, _nq9) => {
        'use strict';
        var _nqa = null;
        defineModule(_nq8);
        Object.defineProperty(_nq8, '__esModule', {
            'value': true
        }), _nq8.getSlot345PersonalEffect = void 0;
        var _nqb = _nq9(74496);
        _nq8.getSlot345PersonalEffect = function(_nqc) {
            var _nqd = null,
                _nqe = new _nqb.SlotItemEffectModel(),
                _nqf = new _nqb.SlotItemEffectModel();
            if (599 == _nqc.ship_id || 610 == _nqc.ship_id ? (_nqf.houg = 3, _nqf.kaih = 1) : 555 == _nqc.ship_id || 560 == _nqc.ship_id ? (_nqf.houg = 3, _nqf.tais = 2, _nqf.kaih = 2) : 318 == _nqc.ship_id ? (_nqf.houg = 5, _nqf.tais = 1, _nqf.kaih = 2) : 282 == _nqc.ship_id ? (_nqf.houg = 3, _nqf.tais = 1, _nqf.kaih = 1) : 888 == _nqc.ship_id ? (_nqf.houg = 4, _nqf.tais = 2, _nqf.kaih = 2) : 883 == _nqc.ship_id && (_nqf.houg = 5, _nqf.tais = 2, _nqf.kaih = 3), !_nqf.exists()) return _nqe;
            var _nqg = _nqc.get_slotnums(345);
            return _nqe = _nqf.multiply(_nqg);
        };
    },
    89058: (_nqh, _nqi, _nqj) => {
        'use strict';
        var _nqk = null;
        defineModule(_nqi);
        Object.defineProperty(_nqi, '__esModule', {
            'value': true
        }), _nqi.getSlot346PersonalEffect = void 0;
        var _nql = _nqj(74496);
        _nqi.getSlot346PersonalEffect = function(_nqm) {
            var _nqn = null,
                _nqo = new _nql.SlotItemEffectModel();
            return 'やましおまる' == _nqm.yomi && (_nqo.kaih += 1, _nqo.tais += 1), _nqo;
        };
    },
    84372: (_nqp, _nqq, _nqr) => {
        'use strict';
        var _nqs = null;
        defineModule(_nqq);
        Object.defineProperty(_nqq, '__esModule', {
            'value': true
        }), _nqq.getSlot347PersonalEffect = void 0;
        var _nqt = _nqr(74496);
        _nqq.getSlot347PersonalEffect = function(_nqu) {
            var _nqv = null,
                _nqw = new _nqt.SlotItemEffectModel();
            return 'やましおまる' == _nqu.yomi && (_nqw.kaih += 2, _nqw.tais += 2), _nqw;
        };
    },
    39656: (_nqx, _nqy, _nqz) => {
        'use strict';
        var _nr0 = null;
        defineModule(_nqy);
        Object.defineProperty(_nqy, '__esModule', {
            'value': true
        }), _nqy.getSlot356_357PersonalEffect = void 0;
        var _nr1 = _nqz(74496);
        _nqy.getSlot356_357PersonalEffect = function(_nr2) {
            var _nr3 = null,
                _nr4 = new _nr1.SlotItemEffectModel(),
                _nr5 = new _nr1.SlotItemEffectModel();
            if (95 == _nr2.ctype ? _nr5.houg = 2 : 9 == _nr2.ctype && (_nr5.houg = 1), !_nr5.exists()) return _nr4;
            var _nr6 = _nr2.get_slotnums(356) + _nr2.get_slotnums(357);
            return _nr4 = _nr5.multiply(_nr6);
        };
    },
    66039: (_nr7, _nr8, _nr9) => {
        'use strict';
        var _nra = null;
        defineModule(_nr8);
        Object.defineProperty(_nr8, '__esModule', {
            'value': true
        }), _nr8.getSlot358PersonalEffect = void 0;
        var _nrb = _nr9(74496);
        _nr8.getSlot358PersonalEffect = function(_nrc) {
            var _nrd = null,
                _nre = new _nrb.SlotItemEffectModel(),
                _nrf = new _nrb.SlotItemEffectModel();
            if ('アメリカ' != _nrc.getCountryName() && 67 != _nrc.ctype && 78 != _nrc.ctype && 82 != _nrc.ctype && 88 != _nrc.ctype && 108 != _nrc.ctype && 112 != _nrc.ctype) return _nre;
            _nrf.houg += 1, _nrf.kaih += 1, _nrf.tyku += 1, 95 == _nrc.ctype && (_nrf.houg += 1, _nrf.kaih += 2, _nrf.tyku += 2);
            var _nrg = _nrc.get_slotnums(358);
            return _nre = _nrf.multiply(_nrg);
        };
    },
    64679: (_nrh, _nri, _nrj) => {
        'use strict';
        var _nrk = null;
        defineModule(_nri);
        Object.defineProperty(_nri, '__esModule', {
            'value': true
        }), _nri.getSlot359PersonalEffect = void 0;
        var _nrl = _nrj(74496);
        _nri.getSlot359PersonalEffect = function(_nrm) {
            var _nrn = null,
                _nro = new _nrl.SlotItemEffectModel(),
                _nrp = new _nrl.SlotItemEffectModel();
            if ('パース' == _nrm.yomi ? (_nrp.houg = 2, _nrp.tyku = 2, _nrp.kaih = 1) : 'ゆうばり' == _nrm.yomi && (_nrp.houg = 1, _nrp.tyku = 1, _nrp.kaih = 1), 622 != _nrm.ship_id && 623 != _nrm.ship_id && 624 != _nrm.ship_id || (_nrp.houg += 1, _nrp.tyku += 1), !_nrp.exists()) return _nro;
            var _nrq = _nrm.get_slotnums(359);
            return _nro = _nrp.multiply(_nrq);
        };
    },
    69954: (_nrr, _nrs, _nrt) => {
        'use strict';
        var _nru = null;
        defineModule(_nrs);
        Object.defineProperty(_nrs, '__esModule', {
            'value': true
        }), _nrs.getSlot35PersonalEffect = void 0;
        var _nrv = _nrt(74496);
        _nrs.getSlot35PersonalEffect = function(_nrw) {
            var _nrx = null,
                _nry = new _nrv.SlotItemEffectModel(),
                _nrz = new _nrv.SlotItemEffectModel();
            return 149 == _nrw.ship_id || 591 == _nrw.ship_id || 592 == _nrw.ship_id || 694 == _nrw.ship_id ? (_nrz.houg += 1, _nrz.tyku += 1) : 150 == _nrw.ship_id ? _nrz.tyku += 1 : 151 == _nrw.ship_id || 593 == _nrw.ship_id || 954 == _nrw.ship_id ? (_nrz.tyku += 1, _nrz.kaih += 1) : 152 == _nrw.ship_id && (_nrz.houg += 1), _nrz.exists() ? _nry = _nrz.multiply(1) : _nry;
        };
    },
    95953: (_ns0, _ns1, _ns2) => {
        'use strict';
        var _ns3 = null;
        defineModule(_ns1);
        Object.defineProperty(_ns1, '__esModule', {
            'value': true
        }), _ns1.getSlot360_361PersonalEffect = void 0;
        var _ns4 = _ns2(74496);
        _ns1.getSlot360_361PersonalEffect = function(_ns5) {
            var _ns6 = null,
                _ns7 = new _ns4.SlotItemEffectModel(),
                _ns8 = new _ns4.SlotItemEffectModel();
            if ('デ・ロイテル' == _ns5.yomi ? (_ns8.houg = 2, _ns8.tyku = 2, _ns8.kaih = 1) : 'ゴトランド' == _ns5.yomi && (_ns8.houg = 2, _ns8.tyku = 1, _ns8.kaih = 1), 41 == _ns5.ctype && (_ns8.houg = 1, _ns8.tyku = 1), !_ns8.exists()) return _ns7;
            var _ns9 = _ns5.get_slotnums(360) + _ns5.get_slotnums(361);
            return _ns7 = _ns8.multiply(_ns9);
        };
    },
    86384: (_nsa, _nsb, _nsc) => {
        'use strict';
        var _nsd = null;
        defineModule(_nsb);
        Object.defineProperty(_nsb, '__esModule', {
            'value': true
        }), _nsb.getSlot362_363PersonalEffect = void 0;
        var _nse = _nsc(74496);
        _nsb.getSlot362_363PersonalEffect = function(_nsf) {
            var _nsg = null,
                _nsh = new _nse.SlotItemEffectModel(),
                _nsi = new _nse.SlotItemEffectModel(),
                _nsj = false;
            if (99 == _nsf.ctype ? (_nsi.houg = 1, _nsi.tyku = 2, _nsi.kaih = 1, _nsj = true) : 34 == _nsf.ctype || 21 == _nsf.ctype ? (_nsi.houg = -3, _nsi.tyku = -3, _nsi.kaih = -8, _nsj = true) : 4 == _nsf.ctype || 20 == _nsf.ctype || 16 == _nsf.ctype ? (_nsi.houg = -3, _nsi.tyku = -2, _nsi.kaih = -6, _nsj = true) : 89 == _nsf.ctype || 56 == _nsf.ctype ? (_nsi.houg = -2, _nsi.tyku = -1, _nsi.kaih = -4, _nsj = true) : 52 != _nsf.ctype && 41 != _nsf.ctype && 98 != _nsf.ctype || (_nsi.tyku = -1, _nsi.kaih = -2, _nsj = true), 'アメリカ' == _nsf.getCountryName() && (_nsi.tyku += 1, _nsi.kaih += 1, _nsj = true), 0 == _nsj) return _nsh;
            var _nsk = _nsf.get_slotnums(362) + _nsf.get_slotnums(363);
            return _nsh = _nsi.multiply(_nsk);
        };
    },
    65345: (_nsl, _nsm, _nsn) => {
        'use strict';
        var _nso = null;
        defineModule(_nsm);
        Object.defineProperty(_nsm, '__esModule', {
            'value': true
        }), _nsm.getSlot364PersonalEffect = void 0;
        var _nsp = _nsn(74496);
        _nsm.getSlot364PersonalEffect = function(_nsq) {
            var _nsr = null;
            new _nsp.SlotItemEffectModel();
            var _nss = new _nsp.SlotItemEffectModel();
            623 == _nsq.ship_id || 586 == _nsq.ship_id || 119 == _nsq.ship_id || 118 == _nsq.ship_id || 657 == _nsq.ship_id || 506 == _nsq.ship_id || 668 == _nsq.ship_id || 507 == _nsq.ship_id ? (_nss.raig = 1, _nss.kaih = -2, 119 == _nsq.ship_id ? _nss.raig += 1 : 507 == _nsq.ship_id ? _nss.raig += 2 : 623 == _nsq.ship_id && (_nss.houg += 1, _nss.raig += 3)) : (_nss.houg = -1, _nss.kaih = -7);
            var _nst = _nsq.get_slotnums(364);
            return _nss.multiply(_nst);
        };
    },
    46514: (_nsu, _nsv, _nsw) => {
        'use strict';
        var _nsx = null;
        defineModule(_nsv);
        Object.defineProperty(_nsv, '__esModule', {
            'value': true
        }), _nsv.getSlot365PersonalEffect = void 0;
        var _nsy = _nsw(74496);
        _nsv.getSlot365PersonalEffect = function(_nsz) {
            var _nt0 = null,
                _nt1 = new _nsy.SlotItemEffectModel(),
                _nt2 = new _nsy.SlotItemEffectModel(),
                _nt3 = false;
            return 37 != _nsz.ctype && 19 != _nsz.ctype && 2 != _nsz.ctype && 26 != _nsz.ctype && 6 != _nsz.ctype || (_nt2.houg += 1, _nt3 = true), 136 != _nsz.ship_id && 148 != _nsz.ship_id && 546 != _nsz.ship_id && 541 != _nsz.ship_id && 573 != _nsz.ship_id && 911 != _nsz.ship_id && 916 != _nsz.ship_id && 593 != _nsz.ship_id || (_nt2.houg += 1, _nt3 = true), 591 != _nsz.ship_id && 592 != _nsz.ship_id && 954 != _nsz.ship_id && 694 != _nsz.ship_id || (_nt2.houg += 2, _nt3 = true), 0 == _nt3 ? _nt1 : _nt1 = _nt2.multiply(1);
        };
    },
    81976: (_nt4, _nt5, _nt6) => {
        'use strict';
        var _nt7 = null;
        defineModule(_nt5);
        Object.defineProperty(_nt5, '__esModule', {
            'value': true
        }), _nt5.getSlot367PersonalEffect = void 0;
        var _nt8 = _nt6(74496);
        _nt5.getSlot367PersonalEffect = function(_nt9) {
            var _nta = null,
                _ntb = new _nt8.SlotItemEffectModel(),
                _ntc = new _nt8.SlotItemEffectModel(),
                _ntd = false;
            if ('ゴトランド' == _nt9.yomi && (_ntc.houg += 2, _ntc.tais += 1, _ntc.kaih += 1, _ntc.saku += 1, _ntd = true), 70 == _nt9.ctype ? (_ntc.houg += 1, _ntc.tais += 1, _ntc.kaih += 1, _ntc.saku += 1, _ntd = true) : 72 == _nt9.ctype || 62 == _nt9.ctype ? (_ntc.houg += 1, _ntc.kaih += 1, _ntc.saku += 1, _ntd = true) : 67 != _nt9.ctype && 78 != _nt9.ctype && 82 != _nt9.ctype && 88 != _nt9.ctype && 108 != _nt9.ctype && 112 != _nt9.ctype || (_ntc.houg += 2, _ntc.kaih += 2, _ntc.saku += 2, _ntd = true), 0 == _ntd) return _ntb;
            var _nte = _nt9.get_slotnums(367);
            return _ntb = _ntc.multiply(_nte);
        };
    },
    89331: (_ntf, _ntg, _nth) => {
        'use strict';
        var _nti = null;
        defineModule(_ntg);
        Object.defineProperty(_ntg, '__esModule', {
            'value': true
        }), _ntg.getSlot368PersonalEffect = void 0;
        var _ntj = _nth(74496);
        _ntg.getSlot368PersonalEffect = function(_ntk) {
            var _ntl = null,
                _ntm = new _ntj.SlotItemEffectModel(),
                _ntn = new _ntj.SlotItemEffectModel(),
                _nto = false;
            if ('ゴトランド' == _ntk.yomi && (_ntn.houg = 4, _ntn.tais = 3, _ntn.kaih = 2, _ntn.saku = 3, _nto = true, 630 == _ntk.ship_id && (_ntm.houg += 2, _ntm.raig += 2, _ntm.kaih += 1, _ntm.saku += 1)), 70 == _ntk.ctype ? (_ntn.houg = 2, _ntn.tais = 3, _ntn.kaih = 1, _ntn.saku = 2, _nto = true) : 72 == _ntk.ctype || 62 == _ntk.ctype ? (_ntn.houg += 1, _ntn.tais += 2, _ntn.kaih += 1, _ntn.saku += 2, _nto = true) : 67 != _ntk.ctype && 78 != _ntk.ctype && 82 != _ntk.ctype && 88 != _ntk.ctype && 108 != _ntk.ctype && 112 != _ntk.ctype || (_ntn.houg += 2, _ntn.tais += 2, _ntn.kaih += 2, _ntn.saku += 2, _nto = true), 0 == _nto) return _ntm;
            var _ntp = _ntk.get_slotnums(368);
            return _ntm.add(_ntn.multiply(_ntp)), _ntm;
        };
    },
    73973: (_ntq, _ntr, _nts) => {
        'use strict';
        var _ntt = null;
        defineModule(_ntr);
        Object.defineProperty(_ntr, '__esModule', {
            'value': true
        }), _ntr.getSlot369PersonalEffect = void 0;
        var _ntu = _nts(74496);
        _ntr.getSlot369PersonalEffect = function(_ntv) {
            var _ntw = null,
                _ntx = new _ntu.SlotItemEffectModel(),
                _nty = new _ntu.SlotItemEffectModel(),
                _ntz = false;
            if ('ゴトランド' == _ntv.yomi && (_nty.houg = 5, _nty.tais = 4, _nty.kaih = 4, _nty.saku = 3, _ntz = true, 630 == _ntv.ship_id && (_ntx.houg += 3, _ntx.raig += 3, _ntx.kaih += 2, _ntx.saku += 2)), 70 == _ntv.ctype ? (_nty.houg += 3, _nty.tais += 3, _nty.kaih += 2, _nty.saku += 3, _ntz = true) : 72 == _ntv.ctype || 62 == _ntv.ctype ? (_nty.houg += 2, _nty.tais += 2, _nty.kaih += 1, _nty.saku += 2, _ntz = true) : 67 != _ntv.ctype && 78 != _ntv.ctype && 82 != _ntv.ctype && 88 != _ntv.ctype && 108 != _ntv.ctype && 112 != _ntv.ctype || (_nty.houg += 2, _nty.tais += 2, _nty.kaih += 2, _nty.saku += 2, _ntz = true), 0 == _ntz) return _ntx;
            var _nu0 = _ntv.get_slotnums(369);
            return _ntx.add(_nty.multiply(_nu0)), _ntx;
        };
    },
    21178: (_nu1, _nu2, _nu3) => {
        'use strict';
        var _nu4 = null;
        defineModule(_nu2);
        Object.defineProperty(_nu2, '__esModule', {
            'value': true
        }), _nu2.getSlot370PersonalEffect = void 0;
        var _nu5 = _nu3(74496);
        _nu2.getSlot370PersonalEffect = function(_nu6) {
            var _nu7 = null,
                _nu8 = new _nu5.SlotItemEffectModel(),
                _nu9 = new _nu5.SlotItemEffectModel(),
                _nua = false;
            if ('ゴトランド' == _nu6.yomi && (_nu9.houg = 1, _nu9.tais = 3, _nu9.kaih = 1, _nu9.saku = 2, _nua = true), 70 == _nu6.ctype ? (_nu9.houg += 1, _nu9.tais += 3, _nu9.kaih += 1, _nu9.saku += 1, _nua = true) : 72 == _nu6.ctype || 62 == _nu6.ctype ? (_nu9.houg += 1, _nu9.tais += 2, _nu9.kaih += 1, _nu9.saku += 1, _nua = true) : 67 != _nu6.ctype && 78 != _nu6.ctype && 82 != _nu6.ctype && 88 != _nu6.ctype && 108 != _nu6.ctype && 112 != _nu6.ctype || (_nu9.houg += 2, _nu9.tais += 3, _nu9.kaih += 2, _nu9.saku += 2, _nua = true, 'ウォースパイト' == _nu6.yomi ? (_nu8.houg += 4, _nu8.kaih += 1, _nu8.saku += 1) : 'ヴァリアント' == _nu6.yomi && (_nu8.houg += 3, _nu8.kaih += 2, _nu8.saku += 1)), 0 == _nua) return _nu8;
            var _nub = _nu6.get_slotnums(370);
            return _nu8.add(_nu9.multiply(_nub)), _nu8;
        };
    },
    5079: (_nuc, _nud, _nue) => {
        'use strict';
        var _nuf = null;
        defineModule(_nud);
        Object.defineProperty(_nud, '__esModule', {
            'value': true
        }), _nud.getSlot371PersonalEffect = void 0;
        var _nug = _nue(74496);
        _nud.getSlot371PersonalEffect = function(_nuh) {
            var _nui = null,
                _nuj = new _nug.SlotItemEffectModel(),
                _nuk = new _nug.SlotItemEffectModel(),
                _nul = false;
            if ('ゴトランド' == _nuh.yomi && (_nuk.houg = 4, _nuk.tais = 2, _nuk.kaih = 3, _nuk.saku = 6, _nul = true, 630 == _nuh.ship_id && (_nuj.houg += 2, _nuj.kaih += 2, _nuj.saku += 3)), 70 == _nuh.ctype ? (_nuk.houg += 2, _nuk.tais += 1, _nuk.kaih += 2, _nuk.saku += 4, _nul = true) : 79 == _nuh.ctype ? (_nuk.houg += 2, _nuk.kaih += 1, _nuk.saku += 3, _nul = true) : 67 != _nuh.ctype && 78 != _nuh.ctype && 82 != _nuh.ctype && 88 != _nuh.ctype && 108 != _nuh.ctype && 112 != _nuh.ctype || (_nuk.houg += 3, _nuk.tais += 1, _nuk.kaih += 2, _nuk.saku += 3, _nul = true, 88 == _nuh.ctype && (_nuj.houg += 3, _nuj.kaih += 2, _nuj.saku += 2)), 0 == _nul) return _nuj;
            var _num = _nuh.get_slotnums(371);
            return _nuj.add(_nuk.multiply(_num)), _nuj;
        };
    },
    95014: (_nun, _nuo, _nup) => {
        'use strict';
        var _nuq = null;
        defineModule(_nuo);
        Object.defineProperty(_nuo, '__esModule', {
            'value': true
        }), _nuo.getSlot372PersonalEffect = void 0;
        var _nur = _nup(74496);
        _nuo.getSlot372PersonalEffect = function(_nus) {
            var _nut = null,
                _nuu = new _nur.SlotItemEffectModel(),
                _nuv = false,
                _nuw = new _nur.SlotItemEffectModel();
            if ('しょうかく' == _nus.yomi || 'ずいかく' == _nus.yomi || 'たいほう' == _nus.yomi ? (_nuw.houg += 1, _nuv = true, _nuu.raig += 1) : 'じゅんよう' != _nus.yomi && 'ひよう' != _nus.yomi || (_nuw.houg += 1, _nuv = true), 108 == _nus.ship_id || 109 == _nus.ship_id || 291 == _nus.ship_id || 292 == _nus.ship_id || 296 == _nus.ship_id || 297 == _nus.ship_id ? (_nuw.houg += 1, _nuv = true) : 116 == _nus.ship_id || 74 == _nus.ship_id || 117 == _nus.ship_id || 282 == _nus.ship_id || 185 == _nus.ship_id ? (_nuw.tais += 1, _nuv = true) : 560 == _nus.ship_id || 555 == _nus.ship_id || 318 == _nus.ship_id ? (_nuw.tais += 1, _nuv = true, _nuu.raig += 1) : 508 == _nus.ship_id || 509 == _nus.ship_id ? (_nuw.houg += 1, _nuv = true) : 883 != _nus.ship_id && 888 != _nus.ship_id || (_nuw.houg += 2, _nuw.tais += 1, _nuv = true, _nuu.raig += 2), 0 == _nuv) return _nuu;
            var _nux = _nus.get_slotnums(372);
            return _nuu.add(_nuw.multiply(_nux)), _nuu;
        };
    },
    53099: (_nuy, _nuz, _nv0) => {
        'use strict';
        var _nv1 = null;
        defineModule(_nuz);
        Object.defineProperty(_nuz, '__esModule', {
            'value': true
        }), _nuz.getSlot373PersonalEffect = void 0;
        var _nv2 = _nv0(74496);
        _nuz.getSlot373PersonalEffect = function(_nv3) {
            var _nv4 = null,
                _nv5 = new _nv2.SlotItemEffectModel(),
                _nv6 = new _nv2.SlotItemEffectModel(),
                _nv7 = false;
            if ('しょうかく' == _nv3.yomi ? (_nv6.houg += 2, _nv7 = true, _nv5.raig += 2, _nv5.kaih += 2) : 'ずいかく' == _nv3.yomi ? (_nv6.houg += 1, _nv7 = true, _nv5.raig += 2, _nv5.kaih += 3) : 'たいほう' == _nv3.yomi ? (_nv6.houg += 1, _nv7 = true, _nv5.raig += 2, _nv5.kaih += 2) : 'じゅんよう' != _nv3.yomi && 'ひよう' != _nv3.yomi || (_nv6.houg += 1, _nv7 = true, _nv5.raig += 1, _nv5.kaih += 1), 108 == _nv3.ship_id || 109 == _nv3.ship_id ? (_nv6.houg += 1, _nv7 = true) : 291 == _nv3.ship_id || 292 == _nv3.ship_id ? (_nv6.houg += 1, _nv7 = true, _nv5.raig += 1) : 296 == _nv3.ship_id || 297 == _nv3.ship_id ? (_nv6.houg += 1, _nv7 = true, _nv5.raig += 1, _nv5.kaih += 1) : 116 == _nv3.ship_id || 74 == _nv3.ship_id ? (_nv6.tais += 1, _nv7 = true) : 117 == _nv3.ship_id || 282 == _nv3.ship_id || 185 == _nv3.ship_id ? (_nv6.houg += 1, _nv6.tais += 1, _nv7 = true, _nv5.raig += 1) : 560 == _nv3.ship_id || 555 == _nv3.ship_id || 318 == _nv3.ship_id ? (_nv6.houg += 1, _nv6.tais += 2, _nv7 = true, _nv5.raig += 1, _nv5.kaih += 1) : 508 == _nv3.ship_id || 509 == _nv3.ship_id ? (_nv6.houg += 1, _nv7 = true, _nv5.raig += 2, _nv5.kaih += 2) : 888 == _nv3.ship_id ? (_nv6.houg += 2, _nv6.tais += 2, _nv7 = true, _nv5.raig += 2, _nv5.kaih += 2) : 883 == _nv3.ship_id && (_nv6.houg += 1, _nv6.tais += 2, _nv7 = true, _nv5.raig += 3, _nv5.kaih += 4), 0 == _nv7) return _nv5;
            var _nv8 = _nv3.get_slotnums(373);
            return _nv5.add(_nv6.multiply(_nv8)), _nv5;
        };
    },
    76201: (_nv9, _nva, _nvb) => {
        'use strict';
        var _nvc = null;
        defineModule(_nva);
        Object.defineProperty(_nva, '__esModule', {
            'value': true
        }), _nva.getSlot374PersonalEffect = void 0;
        var _nvd = _nvb(74496);
        _nva.getSlot374PersonalEffect = function(_nve) {
            var _nvf = null,
                _nvg = new _nvd.SlotItemEffectModel(),
                _nvh = new _nvd.SlotItemEffectModel(),
                _nvi = false;
            if ('しょうかく' == _nve.yomi ? (_nvh.houg += 3, _nvi = true, _nvg.raig += 3, _nvg.kaih += 3) : 'ずいかく' == _nve.yomi ? (_nvh.houg += 2, _nvi = true, _nvg.raig += 3, _nvg.kaih += 4) : 'たいほう' == _nve.yomi ? (_nvh.houg += 2, _nvi = true, _nvg.raig += 3, _nvg.kaih += 2) : 'じゅんよう' != _nve.yomi && 'ひよう' != _nve.yomi || (_nvh.houg += 1, _nvi = true, _nvg.raig += 2, _nvg.kaih += 2), 108 == _nve.ship_id || 109 == _nve.ship_id ? (_nvh.houg += 1, _nvi = true, _nvg.raig += 1) : 291 == _nve.ship_id || 292 == _nve.ship_id ? (_nvh.houg += 1, _nvh.tais += 1, _nvi = true, _nvg.raig += 1) : 296 == _nve.ship_id || 297 == _nve.ship_id ? (_nvh.houg += 1, _nvh.tais += 1, _nvi = true, _nvg.raig += 1, _nvg.kaih += 1) : 116 == _nve.ship_id || 74 == _nve.ship_id ? (_nvh.houg += 1, _nvh.tais += 1, _nvi = true) : 117 == _nve.ship_id || 282 == _nve.ship_id || 185 == _nve.ship_id ? (_nvh.houg += 1, _nvh.tais += 2, _nvi = true, _nvg.raig += 1, _nvg.kaih += 1) : 560 == _nve.ship_id || 555 == _nve.ship_id || 318 == _nve.ship_id ? (_nvh.houg += 1, _nvh.tais += 3, _nvi = true, _nvg.raig += 1, _nvg.kaih += 2) : 508 == _nve.ship_id || 509 == _nve.ship_id ? (_nvh.houg += 1, _nvh.tais += 2, _nvi = true, _nvg.raig += 2, _nvg.kaih += 3) : 888 == _nve.ship_id ? (_nvh.houg += 3, _nvh.tais += 3, _nvi = true, _nvg.raig += 2, _nvg.kaih += 3) : 883 == _nve.ship_id && (_nvh.houg += 2, _nvh.tais += 3, _nvi = true, _nvg.raig += 3, _nvg.kaih += 5), 0 == _nvi) return _nvg;
            var _nvj = _nve.get_slotnums(374);
            return _nvg.add(_nvh.multiply(_nvj)), _nvg;
        };
    },
    24931: (_nvk, _nvl, _nvm) => {
        'use strict';
        var _nvn = null;
        defineModule(_nvl);
        Object.defineProperty(_nvl, '__esModule', {
            'value': true
        }), _nvl.getSlot375PersonalEffect = void 0;
        var _nvo = _nvm(74496);
        _nvl.getSlot375PersonalEffect = function(_nvp) {
            var _nvq = null,
                _nvr = new _nvo.SlotItemEffectModel(),
                _nvs = new _nvo.SlotItemEffectModel(),
                _nvt = false;
            if (69 != _nvp.ctype && 83 != _nvp.ctype && 84 != _nvp.ctype && 105 != _nvp.ctype && 116 != _nvp.ctype && 118 != _nvp.ctype || (_nvs.tyku += 3, _nvs.houg += 3, _nvs.kaih += 3, _nvs.tais += 3, _nvt = true), 'かが' == _nvp.yomi && (_nvs.tyku += 1, _nvs.houg += 1, _nvs.kaih += 1, _nvs.tais += 1, _nvt = true), 0 == _nvt) return _nvr;
            var _nvu = _nvp.get_slotnums(375);
            return _nvr.add(_nvs.multiply(_nvu)), _nvr;
        };
    },
    60978: (_nvv, _nvw, _nvx) => {
        'use strict';
        var _nvy = null;
        defineModule(_nvw);
        Object.defineProperty(_nvw, '__esModule', {
            'value': true
        }), _nvw.getSlot376PersonalEffect = void 0;
        var _nvz = _nvx(74496);
        _nvw.getSlot376PersonalEffect = function(_nw0) {
            var _nw1 = null,
                _nw2 = new _nvz.SlotItemEffectModel(),
                _nw3 = new _nvz.SlotItemEffectModel(),
                _nw4 = false;
            if ('アメリカ' == _nw0.getCountryName() ? (_nw3.houg += 2, _nw3.raig += 4, _nw4 = true) : 67 == _nw0.ctype || 78 == _nw0.ctype || 82 == _nw0.ctype || 88 == _nw0.ctype || 108 == _nw0.ctype || 112 == _nw0.ctype ? (_nw3.houg += 1, _nw3.raig += 2, _nw4 = true) : 96 == _nw0.ctype && (_nw3.houg += 1, _nw3.raig += 1, _nw4 = true), 0 == _nw4) return _nw2;
            var _nw5 = _nw0.get_slotnums(376);
            return _nw2.add(_nw3.multiply(_nw5)), _nw2;
        };
    },
    74312: (_nw6, _nw7, _nw8) => {
        'use strict';
        var _nw9 = null;
        defineModule(_nw7);
        Object.defineProperty(_nw7, '__esModule', {
            'value': true
        }), _nw7.getSlot377PersonalEffect = void 0;
        var _nwa = _nw8(74496);
        _nw7.getSlot377PersonalEffect = function(_nwb) {
            var _nwc = null,
                _nwd = new _nwa.SlotItemEffectModel();
            return 'アメリカ' == _nwb.getCountryName() ? (_nwd.tais += 2, _nwd.kaih += 1, 629 == _nwb.ship_id && (_nwd.tais += 1, _nwd.kaih += 2)) : 67 != _nwb.ctype && 78 != _nwb.ctype && 82 != _nwb.ctype && 88 != _nwb.ctype && 108 != _nwb.ctype && 112 != _nwb.ctype && 96 != _nwb.ctype || (_nwd.tais += 1, _nwd.kaih += 1), 651 != _nwb.ship_id && 656 != _nwb.ship_id || (_nwd.tais += 1, _nwd.kaih += 2), _nwd;
        };
    },
    54350: (_nwe, _nwf, _nwg) => {
        'use strict';
        var _nwh = null;
        defineModule(_nwf);
        Object.defineProperty(_nwf, '__esModule', {
            'value': true
        }), _nwf.getSlot378PersonalEffect = void 0;
        var _nwi = _nwg(74496);
        _nwf.getSlot378PersonalEffect = function(_nwj) {
            var _nwk = null,
                _nwl = new _nwi.SlotItemEffectModel();
            return 'アメリカ' == _nwj.getCountryName() ? (_nwl.tais += 3, _nwl.kaih += 1, 629 == _nwj.ship_id && (_nwl.tais += 1, _nwl.kaih += 1)) : 67 == _nwj.ctype || 78 == _nwj.ctype || 82 == _nwj.ctype || 88 == _nwj.ctype || 108 == _nwj.ctype || 112 == _nwj.ctype ? (_nwl.tais += 2, _nwl.kaih += 1) : 96 == _nwj.ctype && (_nwl.tais += 1, _nwl.kaih += 1), 651 != _nwj.ship_id && 656 != _nwj.ship_id || (_nwl.tais += 1, _nwl.kaih += 1), _nwl;
        };
    },
    26262: function(_nwm, _nwn, _nwo) {
        'use strict';
        var _nwp = null;
        var _nwq = this && this.__importDefault || function(_nwr) {
            var _nws = null;
            return _nwr && _nwr.__esModule ? _nwr : {
                'default': _nwr
            };
        };
        defineModule(_nwn);
        Object.defineProperty(_nwn, '__esModule', {
            'value': true
        }), _nwn.getSlot379PersonalEffect = void 0;
        var _nwt = _nwo(74496),
            _nwu = _nwq(_nwo(18622));
        _nwn.getSlot379PersonalEffect = function(_nwv) {
            var _nww = null,
                _nwx = new _nwt.SlotItemEffectModel(),
                _nwy = false,
                _nwz = new _nwt.SlotItemEffectModel();
            if (1 == _nwv.stype ? (_nwz.tyku += 2, _nwz.houg += 1, _nwy = true) : 21 != _nwv.stype && 16 != _nwv.stype || (_nwz.tyku += 1, _nwz.houg += 1, _nwy = true), 66 == _nwv.ctype || 28 == _nwv.ctype ? (_nwz.houg += 1, _nwz.tyku += 2, _nwy = true) : 101 == _nwv.ctype && (_nwz.tyku += 2, _nwz.houg += 1, _nwx.tyku += 2, _nwx.houg += 2, _nwy = true), 'ゆら' == _nwv.yomi || 'なか' == _nwv.yomi || 'きぬ' == _nwv.yomi || 'いすず' == _nwv.yomi ? (_nwz.houg += 2, _nwy = true) : 'おおい' != _nwv.yomi && 'きたかみ' != _nwv.yomi || (_nwz.tyku += 2, _nwz.houg += 2, _nwy = true), 'ゆら' != _nwv.yomi && 'なか' != _nwv.yomi && 'きぬ' != _nwv.yomi && 'いすず' != _nwv.yomi && 'ゆうばり' != _nwv.yomi || (_nwz.tais += 1, _nwy = true), 'てんりゅう' != _nwv.yomi && 'たつた' != _nwv.yomi && 'ゆうばり' != _nwv.yomi || (_nwz.houg += 1, _nwy = true), 488 == _nwv.ship_id ? (_nwz.tyku += 4, _nwy = true) : 220 == _nwv.ship_id ? (_nwz.tyku += 3, _nwy = true) : 23 == _nwv.ship_id ? (_nwz.tyku += 2, _nwy = true) : 160 == _nwv.ship_id || 487 == _nwv.ship_id || 141 == _nwv.ship_id ? (_nwz.tyku += 3, _nwy = true) : 224 == _nwv.ship_id || 289 == _nwv.ship_id || 219 == _nwv.ship_id || 56 == _nwv.ship_id || 113 == _nwv.ship_id || 22 == _nwv.ship_id ? (_nwz.tyku += 2, _nwy = true) : 651 != _nwv.ship_id && 656 != _nwv.ship_id || (_nwz.tyku += 3, _nwz.houg += 3, 656 == _nwv.ship_id && (_nwz.kaih += 3, _nwz.tais += 2), _nwy = true), 488 != _nwv.ship_id && 160 != _nwv.ship_id && 487 != _nwv.ship_id && 141 != _nwv.ship_id || (_nwz.tais += 1, _nwy = true), 477 != _nwv.ship_id && 478 != _nwv.ship_id && 624 != _nwv.ship_id || (_nwz.tais += 2, _nwy = true), 477 != _nwv.ship_id && 478 != _nwv.ship_id && 624 != _nwv.ship_id && 622 != _nwv.ship_id || (_nwz.tyku += 2, _nwy = true), 652 != _nwv.ship_id && 657 != _nwv.ship_id && 547 != _nwv.ship_id && 146 != _nwv.ship_id || (_nwx.houg += 2), 652 != _nwv.ship_id && 657 != _nwv.ship_id && 547 != _nwv.ship_id && 146 != _nwv.ship_id || (_nwx.tyku += 2), _nwy) {
                var _nx0 = _nwv.get_slotnums(379);
                _nwx.add(_nwz.multiply(_nx0));
            }
            var _nx1 = new _nwt.SlotItemEffectModel(),
                _nx2 = false;
            16 == _nwv.stype || 3 == _nwv.stype || 4 == _nwv.stype || 21 == _nwv.stype ? (_nx1.houg += 1, _nx1.kaih += 2, _nx2 = true) : 1 == _nwv.stype && (_nx1.houg += 1, _nx1.kaih += 4, _nx2 = true), 66 == _nwv.ctype || 28 == _nwv.ctype || 21 == _nwv.ctype || 34 == _nwv.ctype ? (_nx1.houg += 2, _nx1.kaih += 3, _nx2 = true) : 101 == _nwv.ctype && (_nx1.houg += 4, _nx1.kaih += 3, _nx2 = true), 488 == _nwv.ship_id || 651 == _nwv.ship_id || 656 == _nwv.ship_id ? (_nx1.houg += 2, _nx1.kaih += 2, _nx2 = true) : 487 == _nwv.ship_id || 160 == _nwv.ship_id || 141 == _nwv.ship_id || 118 == _nwv.ship_id || 119 == _nwv.ship_id ? (_nx1.houg += 1, _nx1.kaih += 1, _nx2 = true) : 652 != _nwv.ship_id && 657 != _nwv.ship_id && 547 != _nwv.ship_id && 146 != _nwv.ship_id || (_nx1.houg += 1, _nx1.kaih += 1, _nx2 = true);
            var _nx3 = new _nwt.SlotItemEffectModel(),
                _nx4 = false;
            if (656 == _nwv.ship_id && (_nx3.tyku += 3, _nx3.kaih += 2, _nx4 = true), _nx2 || _nx4) {
                for (var _nx5 = 0, _nx6 = 0, _nx7 = 0, _nx8 = _nwv.have_slot_ids(); _nx7 < _nx8.length; _nx7++) {
                    var _nx9 = _nx8[_nx7],
                        _nxa = _nwu.default.model.slot.getMst(_nx9),
                        _nxb = _nxa.equipType;
                    12 != _nxb && 13 != _nxb || (_nxa.sakuteki >= 5 && (_nx5 += _nwv.get_slotnums(parseInt(_nx9))), _nxa.taiku >= 2 && (_nx6 += _nwv.get_slotnums(parseInt(_nx9))));
                }
                _nx2 && _nx5 > 0 && _nwx.add(_nx1), _nx4 && _nx6 > 0 && _nwx.add(_nx3);
            }
            return _nwx;
        };
    },
    45530: function(_nxc, _nxd, _nxe) {
        'use strict';
        var _nxf = null;
        var _nxg = this && this.__importDefault || function(_nxh) {
            var _nxi = null;
            return _nxh && _nxh.__esModule ? _nxh : {
                'default': _nxh
            };
        };
        defineModule(_nxd);
        Object.defineProperty(_nxd, '__esModule', {
            'value': true
        }), _nxd.getSlot380PersonalEffect = void 0;
        var _nxj = _nxe(74496),
            _nxk = _nxg(_nxe(18622));
        _nxd.getSlot380PersonalEffect = function(_nxl) {
            var _nxm = null,
                _nxn = new _nxj.SlotItemEffectModel(),
                _nxo = false,
                _nxp = new _nxj.SlotItemEffectModel();
            if (21 != _nxl.stype && 16 != _nxl.stype || (_nxp.tyku += 2, _nxp.houg += 1, _nxo = true), 101 == _nxl.ctype && (_nxp.tyku += 2, _nxp.houg += 1, _nxo = true, _nxn.tyku += 2, _nxn.houg += 2), 'ゆら' == _nxl.yomi || 'なか' == _nxl.yomi || 'きぬ' == _nxl.yomi || 'いすず' == _nxl.yomi ? (_nxp.houg += 2, _nxo = true) : 'おおい' != _nxl.yomi && 'きたかみ' != _nxl.yomi || (_nxp.tyku += 2, _nxp.houg += 3, _nxo = true), 'ゆら' != _nxl.yomi && 'なか' != _nxl.yomi && 'きぬ' != _nxl.yomi && 'いすず' != _nxl.yomi && 'ゆうばり' != _nxl.yomi || (_nxp.tais += 1, _nxo = true), 'てんりゅう' != _nxl.yomi && 'たつた' != _nxl.yomi && 'ゆうばり' != _nxl.yomi || (_nxp.houg += 1, _nxo = true), 488 == _nxl.ship_id ? (_nxp.tyku += 4, _nxo = true) : 220 == _nxl.ship_id ? (_nxp.tyku += 3, _nxo = true) : 23 == _nxl.ship_id ? (_nxp.tyku += 2, _nxo = true) : 160 == _nxl.ship_id || 487 == _nxl.ship_id || 141 == _nxl.ship_id ? (_nxp.tyku += 3, _nxo = true) : 224 == _nxl.ship_id || 289 == _nxl.ship_id || 219 == _nxl.ship_id || 56 == _nxl.ship_id || 113 == _nxl.ship_id || 22 == _nxl.ship_id ? (_nxp.tyku += 2, _nxo = true) : 651 == _nxl.ship_id || 656 == _nxl.ship_id ? (_nxp.tyku += 3, _nxp.houg += 3, _nxo = true) : 407 != _nxl.ship_id && 665 != _nxl.ship_id || (_nxp.houg += 2, _nxp.tyku += 2, _nxo = true, _nxn.houg += 1, _nxn.tyku += 1, _nxn.kaih += 2), 488 != _nxl.ship_id && 160 != _nxl.ship_id && 487 != _nxl.ship_id && 141 != _nxl.ship_id || (_nxp.tais += 1, _nxo = true), 477 != _nxl.ship_id && 478 != _nxl.ship_id && 624 != _nxl.ship_id || (_nxp.tais += 2, _nxo = true), 477 != _nxl.ship_id && 478 != _nxl.ship_id && 624 != _nxl.ship_id && 622 != _nxl.ship_id || (_nxp.tyku += 2, _nxo = true), 652 != _nxl.ship_id && 657 != _nxl.ship_id || (_nxp.houg += 3, _nxo = true), 547 != _nxl.ship_id && 146 != _nxl.ship_id || (_nxn.houg += 2), 652 != _nxl.ship_id && 657 != _nxl.ship_id && 547 != _nxl.ship_id && 146 != _nxl.ship_id || (_nxn.tyku += 2), _nxo) {
                var _nxq = _nxl.get_slotnums(380);
                _nxn.add(_nxp.multiply(_nxq));
            }
            var _nxr = new _nxj.SlotItemEffectModel(),
                _nxs = false,
                _nxt = new _nxj.SlotItemEffectModel(),
                _nxu = false,
                _nxv = false;
            if (16 != _nxl.stype && 3 != _nxl.stype && 4 != _nxl.stype && 21 != _nxl.stype || (_nxr.houg += 2, _nxr.kaih += 1, _nxs = true), 101 == _nxl.ctype && (_nxr.houg += 4, _nxr.kaih += 3, _nxs = true), 488 != _nxl.ship_id && 487 != _nxl.ship_id && 160 != _nxl.ship_id && 141 != _nxl.ship_id && 118 != _nxl.ship_id && 119 != _nxl.ship_id && 651 != _nxl.ship_id && 656 != _nxl.ship_id || (_nxr.houg += 1, _nxr.kaih += 2, _nxs = true), 652 == _nxl.ship_id || 657 == _nxl.ship_id || 547 == _nxl.ship_id || 146 == _nxl.ship_id ? (_nxr.houg += 1, _nxr.kaih += 3, _nxs = true) : 407 != _nxl.ship_id && 665 != _nxl.ship_id || (_nxv = true, _nxs = true, _nxr.houg += 2, _nxr.kaih += 1, _nxu = true, _nxt.houg += 1, _nxt.tyku += 2, _nxt.kaih += 1), _nxs || _nxv) {
                for (var _nxw = 0, _nxx = 0, _nxy = 0, _nxz = _nxl.have_slot_ids(); _nxy < _nxz.length; _nxy++) {
                    var _ny0 = _nxz[_nxy],
                        _ny1 = _nxk.default.model.slot.getMst(_ny0),
                        _ny2 = _ny1.equipType;
                    12 == _ny2 || 13 == _ny2 ? _ny1.sakuteki >= 5 && (_nxw += _nxl.get_slotnums(parseInt(_ny0))) : 21 == _ny2 && (_nxx += _nxl.get_slotnums(parseInt(_ny0)));
                }
                _nxs && _nxw > 0 && _nxn.add(_nxr), _nxu && _nxx > 0 && _nxn.add(_nxt);
            }
            return _nxn;
        };
    },
    44053: (_ny3, _ny4, _ny5) => {
        'use strict';
        var _ny6 = null;
        defineModule(_ny4);
        Object.defineProperty(_ny4, '__esModule', {
            'value': true
        }), _ny4.getSlot381PersonalEffect = void 0;
        var _ny7 = _ny5(74496);
        _ny4.getSlot381PersonalEffect = function(_ny8) {
            var _ny9 = null,
                _nya = new _ny7.SlotItemEffectModel(),
                _nyb = false,
                _nyc = new _ny7.SlotItemEffectModel(),
                _nyd = 0;
            if ('アメリカ' == _ny8.getCountryName() && (_nyc.houg += 1, 102 == _ny8.ctype && (_nyc.houg += 1), _nyb = true, _nyd = 1), 0 == _nyb) return _nya;
            var _nye = _ny8.get_slotnums(381);
            if (_nya.add(_nyc.multiply(_nye)), 0 == _nyd) return _nya;
            var _nyf = _ny8.get_each_level_nums(381),
                _nyg = 0;
            return _nyf.map(function(_nyh, _nyi) {
                _nyi >= 6 && (_nyg += _nyh);
            }), 1 == _nyd && (_nya.houg += 1 * _nyg), _nya;
        };
    },
    65441: function(_nyj, _nyk, _nyl) {
        'use strict';
        var _nym = null;
        var _nyn = this && this.__importDefault || function(_nyo) {
            var _nyp = null;
            return _nyo && _nyo.__esModule ? _nyo : {
                'default': _nyo
            };
        };
        defineModule(_nyk);
        Object.defineProperty(_nyk, '__esModule', {
            'value': true
        }), _nyk.getSlot382PersonalEffect = void 0;
        var _nyq = _nyl(74496),
            _nyr = _nyn(_nyl(18622));
        _nyk.getSlot382PersonalEffect = function(_nys) {
            var _nyt = null,
                _nyu = new _nyq.SlotItemEffectModel(),
                _nyv = false,
                _nyw = new _nyq.SlotItemEffectModel(),
                _nyx = false,
                _nyy = new _nyq.SlotItemEffectModel(),
                _nyz = new _nyq.SlotItemEffectModel(),
                _nz0 = {},
                _nz1 = 2,
                _nz2 = [];
            1 == _nys.stype && (_nyw.tyku += 2, _nyw.kaih += 2, _nyw.tais += 1, _nyv = true, _nyy.houg += 2, _nyy.kaih += 3, _nyz.tyku += 2, _nyz.kaih += 3, _nyx = true, _nz1 = 1), 66 != _nys.ctype && 28 != _nys.ctype && 101 != _nys.ctype || (_nyw.tyku += 2, _nyw.kaih += 1, _nyv = true, _nyy.houg += 1, _nyy.kaih += 2, _nyz.tyku += 2, _nyz.kaih += 2, _nyx = true, _nz1 = 1), 'ゆら' != _nys.yomi && 'なか' != _nys.yomi && 'きぬ' != _nys.yomi || (_nyw.tyku += 1, _nyv = true), 488 == _nys.ship_id || 220 == _nys.ship_id ? (_nyw.kaih += 1, _nyv = true, 488 == _nys.ship_id && (_nyy.houg += 1, _nyy.kaih += 1, _nyz.tyku += 2, _nyz.kaih += 2, _nyx = true, _nz1 = 1)) : 160 == _nys.ship_id || 224 == _nys.ship_id ? (_nyw.kaih += 1, _nyv = true, 160 == _nys.ship_id && (_nyy.houg += 1, _nyy.kaih += 1, _nyz.tyku += 2, _nyz.kaih += 2, _nyx = true)) : 487 == _nys.ship_id || 289 == _nys.ship_id ? (_nyw.kaih += 1, _nyv = true, 487 == _nys.ship_id && (_nyy.houg += 1, _nyy.kaih += 1, _nyz.tyku += 2, _nyz.kaih += 2, _nyx = true)) : 656 == _nys.ship_id ? (_nyw.tyku += 3, _nyw.kaih += 2, _nyv = true, _nyy.houg += 2, _nyy.kaih += 2, _nyz.tyku += 3, _nyz.kaih += 2, _nyx = true, _nz1 = 1) : 145 == _nys.ship_id || 961 == _nys.ship_id ? _nz1 = 1 : 979 == _nys.ship_id && (_nyw.houg += 1, _nyw.tyku += 1, _nyw.houm += 1, _nyw.kaih += 1, _nz0[509] = new _nyq.SlotItemEffectModel(), _nz0[509].houm += 1, _nyv = true, _nz2[1] = 1);
            for (var _nz3 = 0, _nz4 = 0, _nz5 = 0, _nz6 = _nys.have_slot_ids(); _nz5 < _nz6.length; _nz5++) {
                var _nz7 = _nz6[_nz5],
                    _nz8 = _nyr.default.model.slot.getMst(_nz7),
                    _nz9 = _nz8.equipType;
                12 != _nz9 && 13 != _nz9 || (_nz8.sakuteki >= 5 && (_nz3 += _nys.get_slotnums(parseInt(_nz7))), _nz8.taiku >= 2 && (_nz4 += _nys.get_slotnums(parseInt(_nz7))));
            }
            for (var _nza = [], _nzb = function(_nzc) {
                    var _nzd = null;
                    if (null == _nys.have_slots_dict[_nzc]) return 'continue';
                    var _nze = _nys.get_each_level_nums(_nzc);
                    null == _nza[_nzc] && (_nza[_nzc] = []), _nze.forEach(function(_nzf, _nzg) {
                        var _nzh = null;
                        for (var _nzi = 1; _nzi <= _nys.SLOT_LEVEL_MAX; _nzi++) null == _nza[_nzc][_nzi] && (_nza[_nzc][_nzi] = 0), _nzg >= _nzi && (_nza[_nzc][_nzi] += _nzf);
                    });
                }, _nzj = 0, _nzk = [509]; _nzj < _nzk.length; _nzj++) {
                _nzb(_nzk[_nzj]);
            }
            var _nzl = 0,
                _nzm = 0,
                _nzn = 0,
                _nzo = 0,
                _nzp = 0,
                _nzq = 0,
                _nzr = 0,
                _nzs = 0,
                _nzt = 0,
                _nzu = 0;
            null != _nza[509] && (_nzl = _nza[509][1], _nzm = _nza[509][2], _nzn = _nza[509][3], _nzo = _nza[509][4], _nzp = _nza[509][5], _nzq = _nza[509][6], _nzr = _nza[509][7], _nzs = _nza[509][8], _nzt = _nza[509][9], _nzu = _nza[509][10], null != _nz2[1] && (_nzn >= 1 && (_nyu.kaih += 1 * _nzn), _nzp >= 1 && (_nyu.houg += 1 * _nzp), _nzr >= 1 && (_nyu.tyku += 2 * _nzr), _nzt >= 1 && (_nyu.houm += 1 * _nzt), _nzu >= 1 && (_nyu.houg += 1 * _nzu)), 1 == _nz1 ? (_nzl >= 1 && (_nyu.tyku += 1 * _nzl), _nzm >= 1 && (_nyu.kaih += 2 * _nzm), _nzo >= 1 && (_nyu.houg += 1 * _nzo), _nzq >= 1 && (_nyu.tyku += 1 * _nzq), _nzs >= 1 && (_nyu.houm += 1 * _nzs), _nzu >= 1 && (_nyu.tyku += 1 * _nzu)) : 2 == _nz1 && (_nzm >= 1 && (_nyu.tyku += 1 * _nzm), _nzo >= 1 && (_nyu.kaih += 2 * _nzo), _nzq >= 1 && (_nyu.houg += 1 * _nzq), _nzs >= 1 && (_nyu.tyku += 1 * _nzs), _nzu >= 1 && (_nyu.houm += 1 * _nzu)));
            var _nzv = _nys.get_slotnums(509),
                _nzw = _nzv + _nys.get_slotnums(382);
            return _nyv && (_nyu.add(_nyw.multiply(_nzw)), Object.keys(_nz0).forEach(function(_nzx) {
                var _nzy = null,
                    _nzz = parseInt(_nzx);
                if (null != _nys.have_slots_dict[_nzz]) {
                    var _o00 = _nys.get_slotnums(_nzz);
                    _nyu.add(_nz0[_nzz].multiply(_o00));
                }
            })), 3 != _nys.stype && 21 != _nys.stype && 4 != _nys.stype || _nzm >= 1 && (_nz3 > 0 && (_nyu.houg += 1, _nyu.kaih += 1), _nz4 > 0 && (_nyu.tyku += 2, _nyu.kaih += 1)), 145 == _nys.ship_id ? _nzm >= 1 && (_nz3 > 0 && (_nyu.houg += 1, _nyu.tyku += 1, _nyu.kaih += 2), _nz4 > 0 && (_nyu.tyku += 4, _nyu.kaih += 2)) : 961 != _nys.ship_id && 979 != _nys.ship_id || _nzv > 0 && (_nz3 > 0 && (_nyu.houg += 2, _nyu.tyku += 2, _nyu.kaih += 3), _nz4 > 0 && (_nyu.houg += 1, _nyu.tyku += 5, _nyu.kaih += 3)), _nyx && _nz3 > 0 && _nyu.add(_nyy), _nyx && _nz4 > 0 && _nyu.add(_nyz), _nyu;
        };
    },
    33258: (_o01, _o02, _o03) => {
        'use strict';
        var _o04 = null;
        defineModule(_o02);
        Object.defineProperty(_o02, '__esModule', {
            'value': true
        }), _o02.getSlot383PersonalEffect = void 0;
        var _o05 = _o03(74496);
        _o02.getSlot383PersonalEffect = function(_o06) {
            var _o07 = null,
                _o08 = new _o05.SlotItemEffectModel(),
                _o09 = false,
                _o0a = new _o05.SlotItemEffectModel(),
                _o0b = _o06.get_each_level_over_nums([383]).slot[383];
            if (44 == _o06.ctype && (_o0a.raig += 2, _o09 = true, _o0b[4] > 0 && (_o08.raig += 1), _o0b[6] > 0 && (_o08.houm += 1)), 'い58' == _o06.yomi && (_o0a.raig += 1, _o09 = true), 636 == _o06.ship_id ? (_o0a.raig += 3, _o09 = true) : 607 == _o06.ship_id && (_o0a.raig += 4, _o09 = true), _o0b[8] > 0 && (_o08.raig += 1), _o0b[10] > 0 && (_o08.houm += 1), 'い58' != _o06.yomi && 'い47' != _o06.yomi || _o0b[5] > 0 && (_o08.houm += 1), 0 == _o09) return _o08;
            var _o0c = _o06.get_slotnums(383);
            return _o08.add(_o0a.multiply(_o0c)), _o08;
        };
    },
    92168: (_o0d, _o0e, _o0f) => {
        'use strict';
        var _o0g = null;
        defineModule(_o0e);
        Object.defineProperty(_o0e, '__esModule', {
            'value': true
        }), _o0e.getSlot384PersonalEffect = void 0;
        var _o0h = _o0f(74496);
        _o0e.getSlot384PersonalEffect = function(_o0i) {
            var _o0j = null,
                _o0k = new _o0h.SlotItemEffectModel(),
                _o0l = false,
                _o0m = new _o0h.SlotItemEffectModel();
            44 == _o0i.ctype && (_o0m.kaih += 3, _o0l = true), 'い58' == _o0i.yomi && (_o0m.kaih += 2, _o0l = true), 636 == _o0i.ship_id ? (_o0m.kaih += 3, _o0l = true) : 607 == _o0i.ship_id && (_o0m.kaih += 4, _o0l = true);
            var _o0n = _o0i.get_slotnums(384);
            _o0l && _o0k.add(_o0m.multiply(_o0n));
            var _o0o = _o0n,
                _o0p = _o0i.get_slotnums(213),
                _o0q = _o0i.get_slotnums(214),
                _o0r = _o0i.get_slotnums(383);
            return _o0o > 0 && _o0p + _o0q + _o0r > 0 && (_o0k.raig += 3, _o0k.kaih += 2), _o0k;
        };
    },
    85975: (_o0s, _o0t, _o0u) => {
        'use strict';
        var _o0v = null;
        defineModule(_o0t);
        Object.defineProperty(_o0t, '__esModule', {
            'value': true
        }), _o0t.getSlot385PersonalEffect = void 0;
        var _o0w = _o0u(74496);
        _o0t.getSlot385PersonalEffect = function(_o0x) {
            var _o0y = null,
                _o0z = new _o0w.SlotItemEffectModel(),
                _o10 = false,
                _o11 = new _o0w.SlotItemEffectModel(),
                _o12 = 0;
            if ('アメリカ' == _o0x.getCountryName() && (_o11.houg += 1, 102 == _o0x.ctype || 107 == _o0x.ctype ? (_o11.houg += 1, _o11.souk += 1) : 93 == _o0x.ctype && (_o11.houg += 1), _o10 = true, _o12 = 1), 8 == _o0x.stype && (_o11.houg += 1, _o10 = true), 0 == _o10) return _o0z;
            var _o13 = _o0x.get_slotnums(385);
            if (_o0z.add(_o11.multiply(_o13)), 0 == _o12) return _o0z;
            var _o14 = _o0x.get_each_level_nums(385),
                _o15 = 0;
            return _o14.forEach(function(_o16, _o17) {
                _o17 >= 6 && (_o15 += _o16);
            }), 1 == _o12 && (_o0z.houg += 1 * _o15, _o0z.souk += 1 * _o14[10]), _o0z;
        };
    },
    98467: (_o18, _o19, _o1a) => {
        'use strict';
        var _o1b = null;
        defineModule(_o19);
        Object.defineProperty(_o19, '__esModule', {
            'value': true
        }), _o19.getSlot386PersonalEffect = void 0;
        var _o1c = _o1a(74496);
        _o19.getSlot386PersonalEffect = function(_o1d) {
            var _o1e = null,
                _o1f = new _o1c.SlotItemEffectModel(),
                _o1g = false,
                _o1h = new _o1c.SlotItemEffectModel(),
                _o1i = 0;
            if ('アメリカ' == _o1d.getCountryName() && (_o1h.houg += 1, _o1g = true, _o1i = 1), 0 == _o1g) return _o1f;
            var _o1j = _o1d.get_slotnums(386);
            if (_o1f.add(_o1h.multiply(_o1j)), 0 == _o1i) return _o1f;
            var _o1k = _o1d.get_each_level_nums(386),
                _o1l = 0,
                _o1m = 0;
            return _o1k.forEach(function(_o1n, _o1o) {
                _o1o >= 2 && (_o1l += _o1n), _o1o >= 7 && (_o1m += _o1n);
            }), 1 == _o1i && (_o1f.houg += 1 * _o1l, _o1f.houg += 1 * _o1m), _o1f;
        };
    },
    88348: (_o1p, _o1q, _o1r) => {
        'use strict';
        var _o1s = null;
        defineModule(_o1q);
        Object.defineProperty(_o1q, '__esModule', {
            'value': true
        }), _o1q.getSlot387PersonalEffect = void 0;
        var _o1t = _o1r(74496);
        _o1q.getSlot387PersonalEffect = function(_o1u) {
            var _o1v = null,
                _o1w = new _o1t.SlotItemEffectModel(),
                _o1x = false,
                _o1y = new _o1t.SlotItemEffectModel(),
                _o1z = 0;
            if ('アメリカ' == _o1u.getCountryName() && (_o1y.houg += 1, _o1x = true, _o1z = 1), 0 == _o1x) return _o1w;
            var _o20 = _o1u.get_slotnums(387);
            if (_o1w.add(_o1y.multiply(_o20)), 0 == _o1z) return _o1w;
            var _o21 = _o1u.get_each_level_nums(387),
                _o22 = 0,
                _o23 = 0;
            return _o21.forEach(function(_o24, _o25) {
                _o25 >= 2 && (_o22 += _o24), _o25 >= 7 && (_o23 += _o24);
            }), 1 == _o1z && (_o1w.houg += 1 * _o22, _o1w.houg += 1 * _o23), _o1w;
        };
    },
    21097: (_o26, _o27, _o28) => {
        'use strict';
        var _o29 = null;
        defineModule(_o27);
        Object.defineProperty(_o27, '__esModule', {
            'value': true
        }), _o27.getSlot389PersonalEffect = void 0;
        var _o2a = _o28(74496);
        _o27.getSlot389PersonalEffect = function(_o2b) {
            var _o2c = null,
                _o2d = new _o2a.SlotItemEffectModel(),
                _o2e = false,
                _o2f = new _o2a.SlotItemEffectModel();
            if (594 == _o2b.ship_id || 599 == _o2b.ship_id) _o2f.houg += 2, _o2f.kaih += 2, _o2e = true;
            else {
                if (698 == _o2b.ship_id || 610 == _o2b.ship_id) _o2f.houg += 3, _o2f.kaih += 2, _o2e = true;
                else 646 == _o2b.ship_id && (_o2f.houg += 4, _o2f.tais += 4, _o2f.kaih += 3, _o2e = true, _o2b.get_type3_nums(25) > 0 && (_o2d.houg += 3, _o2d.tais += 6), _o2b.get_slotnums(326) + _o2b.get_slotnums(327) > 0 && (_o2d.houg += 5, _o2d.tais += 4));
            }
            if ('アメリカ' == _o2b.getCountryName() && (_o2f.houg += 2, _o2f.tais += 3, _o2f.kaih += 1, _o2e = true), 0 == _o2e) return _o2d;
            var _o2g = _o2b.get_slotnums(389);
            return _o2d.add(_o2f.multiply(_o2g)), _o2d;
        };
    },
    43607: (_o2h, _o2i, _o2j) => {
        'use strict';
        var _o2k = null;
        defineModule(_o2i);
        Object.defineProperty(_o2i, '__esModule', {
            'value': true
        }), _o2i.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _o2l = _o2j(74496);
        _o2i.getSlot38cmFourBarrelGunPersonalEffect = function(_o2m) {
            var _o2n = null,
                _o2o = new _o2l.SlotItemEffectModel(),
                _o2p = _o2m.get_slotnums(245),
                _o2q = _o2m.get_slotnums(246),
                _o2r = _o2m.get_slotnums(468),
                _o2s = _o2p + _o2q + _o2r,
                _o2t = 0,
                _o2u = 0;
            if (79 != _o2m.ctype) return _o2o;
            _o2o.houg += 2 * _o2s, _o2o.houm += 1 * _o2s, _o2r >= 1 && (_o2o.houg += 1 * _o2r, _o2u = 1), _o2t = 1;
            var _o2v = _o2m.get_slotnums(247),
                _o2w = _o2m.get_slotnums(471) + _o2m.get_slotnums(538);
            if (1 == _o2t && _o2v >= 1 && (_o2o.kaih += 2 * _o2v, _o2o.houg += 2 * _o2v, _o2o.houm += 2 * _o2v), 0 == _o2u) return _o2o;
            var _o2x = _o2m.haveSlotLevelNumOver(468),
                _o2y = _o2m.haveSlotLevelNumOver(471),
                _o2z = _o2m.haveSlotLevelNumOver(538);
            if (1 == _o2u && _o2r > 0) {
                var _o30 = _o2x[4],
                    _o31 = _o2x[8],
                    _o32 = _o2x[9],
                    _o33 = _o2x[10],
                    _o34 = _o2y[7],
                    _o35 = _o2y[9];
                _o30 >= 1 && (_o2o.houg += 1 * _o30, _o2o.houm += 1 * _o30), _o31 >= 1 && (_o2o.houg += 1 * _o31, _o2o.houm += 1 * _o31), _o32 >= 1 && (_o2o.tyku += 1 * _o32, _o2w >= 1 && (_o2o.houm += 2 * _o2w), _o2v >= 1 && (_o2o.kaih += 1 * _o2v, _o2o.houm += 1 * _o2v)), _o33 >= 1 && (_o2o.houm += 1 * _o33, _o2w >= 1 && (_o2o.houm += 1 * _o2w, _o2z[7] >= 1 && (_o2o.houm += 1 * _o2z[7]), _o2z[8] >= 1 && (_o2o.kaih += 1 * _o2z[8]), _o2z[9] >= 1 && (_o2o.houm += 1 * _o2z[9]), _o34 >= 1 && (_o2o.houm += 1 * _o34), _o35 >= 1 && (_o2o.kaih += 1 * _o35)), _o2v >= 1 && (_o2o.houg += 1 * _o2v, _o2o.kaih += 1 * _o2v, _o2o.houm += 1 * _o2v));
            }
            return _o2o;
        };
    },
    2380: (_o36, _o37, _o38) => {
        'use strict';
        var _o39 = null;
        defineModule(_o37);
        Object.defineProperty(_o37, '__esModule', {
            'value': true
        }), _o37.getSlot38cmTwinGunPersonalEffect = void 0;
        var _o3a = _o38(74496);
        _o37.getSlot38cmTwinGunPersonalEffect = function(_o3b) {
            var _o3c = null,
                _o3d = new _o3a.SlotItemEffectModel(),
                _o3e = false,
                _o3f = new _o3a.SlotItemEffectModel(),
                _o3g = 0,
                _o3h = _o3b.get_slotnums(76),
                _o3i = _o3b.get_slotnums(114),
                _o3j = _o3b.get_slotnums(124);
            if ('ドイツ' == _o3b.getCountryName() && (_o3f.houg += 1, _o3e = true, _o3g = 1, _o3j >= 1 && (_o3d.kaih += 1 * _o3j)), 0 == _o3e) return _o3d;
            var _o3k = _o3h + _o3i;
            _o3d.add(_o3f.multiply(_o3k));
            var _o3l = _o3b.have_level_num_over_dict[114];
            return 1 == _o3g && null != _o3l && (_o3l[7] >= 1 && (_o3d.houg += 1 * _o3l[7]), _o3l[8] >= 1 && (_o3d.houm += 1 * _o3l[8]), _o3l[9] >= 1 && (_o3d.souk += 1 * _o3l[9]), _o3l[10] >= 1 && (_o3d.houg += 1 * _o3l[10])), _o3d;
        };
    },
    37273: (_o3m, _o3n, _o3o) => {
        'use strict';
        var _o3p = null;
        defineModule(_o3n);
        Object.defineProperty(_o3n, '__esModule', {
            'value': true
        }), _o3n.getSlot390PersonalEffect = void 0;
        var _o3q = _o3o(74496);
        _o3n.getSlot390PersonalEffect = function(_o3r) {
            var _o3s = null,
                _o3t = new _o3q.SlotItemEffectModel(),
                _o3u = false,
                _o3v = new _o3q.SlotItemEffectModel(),
                _o3w = 0;
            if ('アメリカ' == _o3r.getCountryName() && (_o3v.houg += 1, _o3u = true, _o3w = 1), 102 == _o3r.ctype || 107 == _o3r.ctype ? (_o3v.houg += 1, _o3v.souk += 1, _o3u = true) : 93 == _o3r.ctype && (_o3v.houg += 1, _o3u = true), 8 == _o3r.stype && (_o3v.houg += 1, _o3u = true), 0 == _o3u) return _o3t;
            var _o3x = _o3r.get_slotnums(390);
            if (_o3t.add(_o3v.multiply(_o3x)), 0 == _o3w) return _o3t;
            var _o3y = _o3r.get_each_level_nums(390),
                _o3z = 0,
                _o40 = 0;
            return _o3y.forEach(function(_o41, _o42) {
                _o42 >= 3 && (_o3z += _o41), _o42 >= 6 && (_o40 += _o41);
            }), 1 == _o3w && (_o3t.houg += 1 * _o3z, _o3t.kaih += 1 * _o40, _o3t.souk += 1 * _o3y[10]), _o3t;
        };
    },
    72694: (_o43, _o44, _o45) => {
        'use strict';
        var _o46 = null;
        defineModule(_o44);
        Object.defineProperty(_o44, '__esModule', {
            'value': true
        }), _o44.getSlot391PersonalEffect = void 0;
        var _o47 = _o45(74496);
        _o44.getSlot391PersonalEffect = function(_o48) {
            var _o49 = null,
                _o4a = new _o47.SlotItemEffectModel(),
                _o4b = false,
                _o4c = new _o47.SlotItemEffectModel();
            if ('しょうかく' == _o48.yomi || 'ずいかく' == _o48.yomi ? (_o4c.houg += 1, _o4b = true) : 'じゅんよう' != _o48.yomi && 'ひよう' != _o48.yomi || (_o4c.houg += 1, _o4b = true), 116 == _o48.ship_id || 185 == _o48.ship_id || 282 == _o48.ship_id ? (_o4c.houg += 1, _o4b = true) : 117 == _o48.ship_id || 318 == _o48.ship_id || 883 == _o48.ship_id || 888 == _o48.ship_id ? (_o4c.houg += 1, _o4a.kaih += 1, _o4b = true) : 560 != _o48.ship_id && 555 != _o48.ship_id || (_o4c.houg += 1, _o4c.kaih += 1, _o4b = true), 0 == _o4b) return _o4a;
            var _o4d = _o48.get_slotnums(391);
            return _o4a.add(_o4c.multiply(_o4d)), _o4a;
        };
    },
    62067: (_o4e, _o4f, _o4g) => {
        'use strict';
        var _o4h = null;
        defineModule(_o4f);
        Object.defineProperty(_o4f, '__esModule', {
            'value': true
        }), _o4f.getSlot392PersonalEffect = void 0;
        var _o4i = _o4g(74496);
        _o4f.getSlot392PersonalEffect = function(_o4j) {
            var _o4k = null,
                _o4l = new _o4i.SlotItemEffectModel(),
                _o4m = false,
                _o4n = new _o4i.SlotItemEffectModel();
            if ('しょうかく' == _o4j.yomi || 'ずいかく' == _o4j.yomi ? (_o4n.houg += 2, _o4n.kaih += 1, _o4m = true) : 'じゅんよう' != _o4j.yomi && 'ひよう' != _o4j.yomi || (_o4n.houg += 1, _o4n.kaih += 1, _o4m = true), 116 == _o4j.ship_id || 185 == _o4j.ship_id || 282 == _o4j.ship_id ? (_o4n.houg += 2, _o4n.kaih += 1, _o4m = true) : 117 == _o4j.ship_id || 318 == _o4j.ship_id || 883 == _o4j.ship_id || 888 == _o4j.ship_id ? (_o4n.houg += 2, _o4n.kaih += 2, _o4m = true) : 560 != _o4j.ship_id && 555 != _o4j.ship_id || (_o4n.houg += 3, _o4n.kaih += 2, _o4m = true), 0 == _o4m) return _o4l;
            var _o4o = _o4j.get_slotnums(392);
            return _o4l.add(_o4n.multiply(_o4o)), _o4l;
        };
    },
    87817: function(_o4p, _o4q, _o4r) {
        'use strict';
        var _o4s = null;
        var _o4t = this && this.__importDefault || function(_o4u) {
            var _o4v = null;
            return _o4u && _o4u.__esModule ? _o4u : {
                'default': _o4u
            };
        };
        defineModule(_o4q);
        Object.defineProperty(_o4q, '__esModule', {
            'value': true
        }), _o4q.getSlot397PersonalEffect = void 0;
        var _o4w = _o4r(74496),
            _o4x = _o4t(_o4r(18622));
        _o4q.getSlot397PersonalEffect = function(_o4y) {
            var _o4z = null,
                _o50 = new _o4w.SlotItemEffectModel(),
                _o51 = false,
                _o52 = new _o4w.SlotItemEffectModel(),
                _o53 = 0,
                _o54 = 0,
                _o55 = false;
            if (651 == _o4y.ship_id ? (_o52.houg += 5, _o52.tyku += 2, _o52.kaih += 1, _o51 = true, _o55 = true, _o53 = 1, _o54 = 1) : 656 == _o4y.ship_id && (_o52.houg += 3, _o52.tyku += 1, _o52.kaih += 1, _o51 = true, _o55 = true, _o53 = 1), 0 == _o51) return _o50;
            var _o56 = _o4y.get_slotnums(397);
            _o50.add(_o52.multiply(_o56));
            var _o57 = 0,
                _o58 = _o4y.get_each_level_nums(397),
                _o59 = 0;
            if (_o55) {
                _o58.forEach(function(_o5a, _o5b) {
                    _o5b >= 4 && (_o59 += _o5a);
                });
                for (var _o5c = 0, _o5d = _o4y.have_slot_ids(); _o5c < _o5d.length; _o5c++) {
                    var _o5e = _o5d[_o5c],
                        _o5f = _o4x.default.model.slot.getMst(_o5e),
                        _o5g = _o5f.equipType;
                    12 != _o5g && 13 != _o5g || (_o5f.sakuteki >= 5 && (_o57 += _o4y.get_slotnums(parseInt(_o5e))), _o5f.taiku >= 2 && _o4y.get_slotnums(parseInt(_o5e)));
                }
            }
            return 1 == _o53 && _o57 > 0 && (_o50.houg += 3, _o50.kaih += 3), 1 == _o54 && (_o50.houg += 4 * _o59, _o50.kaih += 1 * _o59), _o50;
        };
    },
    93526: function(_o5h, _o5i, _o5j) {
        'use strict';
        var _o5k = null;
        var _o5l = this && this.__importDefault || function(_o5m) {
            var _o5n = null;
            return _o5m && _o5m.__esModule ? _o5m : {
                'default': _o5m
            };
        };
        defineModule(_o5i);
        Object.defineProperty(_o5i, '__esModule', {
            'value': true
        }), _o5i.getSlot398PersonalEffect = void 0;
        var _o5o = _o5j(74496),
            _o5p = _o5l(_o5j(18622));
        _o5i.getSlot398PersonalEffect = function(_o5q) {
            var _o5r = null,
                _o5s = new _o5o.SlotItemEffectModel(),
                _o5t = false,
                _o5u = new _o5o.SlotItemEffectModel(),
                _o5v = 0,
                _o5w = 0,
                _o5x = false;
            if (651 == _o5q.ship_id ? (_o5u.houg += 4, _o5u.tyku += 4, _o5u.kaih += 2, _o5t = true, _o5x = true, _o5v = 1, _o5w = 1) : 656 == _o5q.ship_id && (_o5u.houg += 3, _o5u.tyku += 2, _o5u.kaih += 2, _o5t = true, _o5x = true, _o5v = 1, _o5w = 2), 0 == _o5t) return _o5s;
            var _o5y = _o5q.get_slotnums(398);
            _o5s.add(_o5u.multiply(_o5y));
            var _o5z = 0,
                _o60 = 0,
                _o61 = _o5q.get_each_level_nums(398),
                _o62 = 0;
            if (_o5x) {
                _o61.forEach(function(_o63, _o64) {
                    _o64 >= 4 && (_o62 += _o63);
                });
                for (var _o65 = 0, _o66 = _o5q.have_slot_ids(); _o65 < _o66.length; _o65++) {
                    var _o67 = _o66[_o65],
                        _o68 = _o5p.default.model.slot.getMst(_o67),
                        _o69 = _o68.equipType;
                    12 != _o69 && 13 != _o69 || (_o68.sakuteki >= 5 && (_o5z += _o5q.get_slotnums(parseInt(_o67))), _o68.taiku >= 2 && (_o60 += _o5q.get_slotnums(parseInt(_o67))));
                }
            }
            return 1 == _o5v && (_o5z > 0 && (_o5s.houg += 3, _o5s.kaih += 3), _o60 > 0 && (_o5s.tyku += 3, _o5s.kaih += 3)), 1 == _o5w ? (_o5s.houg += 3 * _o62, _o5s.kaih += 2 * _o62) : 2 == _o5w && (_o5s.houg += 2 * _o62, _o5s.kaih += 1 * _o62), _o5s;
        };
    },
    33084: (_o6a, _o6b, _o6c) => {
        'use strict';
        var _o6d = null;
        defineModule(_o6b);
        Object.defineProperty(_o6b, '__esModule', {
            'value': true
        }), _o6b.getSlot399PersonalEffect = void 0;
        var _o6e = _o6c(74496);
        _o6b.getSlot399PersonalEffect = function(_o6f) {
            var _o6g = null,
                _o6h = new _o6e.SlotItemEffectModel(),
                _o6i = false,
                _o6j = new _o6e.SlotItemEffectModel(),
                _o6k = 0;
            if (108 == _o6f.ctype && (_o6j.houg += 1, _o6j.kaih += 2, _o6k = 1, _o6i = true), 0 == _o6i) return _o6h;
            var _o6l = _o6f.get_slotnums(399);
            if (_o6h.add(_o6j.multiply(_o6l)), 0 == _o6k) return _o6h;
            var _o6m = _o6f.get_each_level_nums(399),
                _o6n = 0,
                _o6o = 0;
            return _o6m.map(function(_o6p, _o6q) {
                _o6q >= 3 && (_o6n += _o6p), _o6q >= 5 && (_o6o += _o6p);
            }), 1 == _o6k && (_o6h.houg += 1 * _o6n, _o6h.houg += 1 * _o6o), _o6h;
        };
    },
    80225: (_o6r, _o6s, _o6t) => {
        'use strict';
        var _o6u = null;
        defineModule(_o6s);
        Object.defineProperty(_o6s, '__esModule', {
            'value': true
        }), _o6s.getSlot3_122PersonalEffect = void 0;
        var _o6v = _o6t(74496);
        _o6s.getSlot3_122PersonalEffect = function(_o6w) {
            var _o6x = null,
                _o6y = new _o6v.SlotItemEffectModel(),
                _o6z = false,
                _o70 = new _o6v.SlotItemEffectModel(),
                _o71 = 0;
            if (54 == _o6w.ctype && (_o70.houg += 1, _o70.tyku += 2, _o70.kaih += 1, _o6z = true, _o71 = 1, 968 == _o6w.ship_id && (_o70.houg += 1, _o70.houm += 1, _o70.kaih += 1)), 0 == _o6z) return _o6y;
            var _o72 = _o6w.get_slotnums(3) + _o6w.get_slotnums(122) + _o6w.get_slotnums(533);
            if (_o6y.add(_o70.multiply(_o72)), 0 == _o71) return _o6y;
            var _o73 = _o6w.get_each_level_over_nums([122]).slot[122],
                _o74 = _o6w.have_level_num_over_dict[533];
            return 1 == _o71 && (null != _o73 && (_o73[6] >= 1 && (_o6y.kaih += 1 * _o73[6]), _o73[7] >= 1 && (_o6y.tyku += 1 * _o73[7]), _o73[8] >= 1 && (_o6y.houm += 1 * _o73[8]), _o73[9] >= 1 && (_o6y.kaih += 1 * _o73[9]), _o73[10] >= 1 && (_o6y.houg += 1 * _o73[10])), null != _o74 && (_o74[2] >= 1 && (_o6y.tyku += 1 * _o74[2]), _o74[4] >= 1 && (_o6y.houg += 1 * _o74[4]), _o74[6] >= 1 && (_o6y.houm += 1 * _o74[6]), _o74[8] >= 1 && (_o6y.tyku += 1 * _o74[8]), _o74[10] >= 1 && (_o6y.kaih += 1 * _o74[10])), 968 == _o6w.ship_id && null != _o74 && (_o74[1] >= 1 && (_o6y.kaih += 1 * _o74[1]), _o74[3] >= 1 && (_o6y.tyku += 1 * _o74[3]), _o74[5] >= 1 && (_o6y.houm += 1 * _o74[5]), _o74[7] >= 1 && (_o6y.kaih += 1 * _o74[7]), _o74[9] >= 1 && (_o6y.houg += 1 * _o74[9]))), _o6y;
        };
    },
    97831: (_o75, _o76, _o77) => {
        'use strict';
        var _o78 = null;
        defineModule(_o76);
        Object.defineProperty(_o76, '__esModule', {
            'value': true
        }), _o76.getSlot400PersonalEffect = void 0;
        var _o79 = _o77(74496);
        _o76.getSlot400PersonalEffect = function(_o7a) {
            var _o7b = null,
                _o7c = new _o79.SlotItemEffectModel(),
                _o7d = false,
                _o7e = new _o79.SlotItemEffectModel(),
                _o7f = 0,
                _o7g = false;
            if (147 != _o7a.ship_id && 73 != _o7a.ctype && 81 != _o7a.ctype || (_o7g = true), _o7g && (_o7e.kaih += 2, _o7e.raig += 5, _o7e.houg += 1, _o7e.souk += 1, _o7d = true, _o7f = 1), 0 == _o7d) return _o7c;
            var _o7h = _o7a.get_slotnums(400);
            return _o7c.add(_o7e.multiply(_o7h)), _o7a.get_slotnums(282) > 0 && 1 == _o7f && (_o7c.houg += 2), _o7c;
        };
    },
    4050: function(_o7i, _o7j, _o7k) {
        'use strict';
        var _o7l = null;
        var _o7m = this && this.__importDefault || function(_o7n) {
            var _o7o = null;
            return _o7n && _o7n.__esModule ? _o7n : {
                'default': _o7n
            };
        };
        defineModule(_o7j);
        Object.defineProperty(_o7j, '__esModule', {
            'value': true
        }), _o7j.getSlot407PersonalEffect = void 0;
        var _o7p = _o7k(74496),
            _o7q = _o7m(_o7k(18622));
        _o7j.getSlot407PersonalEffect = function(_o7r) {
            var _o7s = null,
                _o7t = new _o7p.SlotItemEffectModel(),
                _o7u = false,
                _o7v = new _o7p.SlotItemEffectModel(),
                _o7w = 0;
            if (662 != _o7r.ship_id && 663 != _o7r.ship_id && 668 != _o7r.ship_id || (_o7v.houg += 4, _o7v.tyku += 2, _o7v.kaih += 1, _o7u = true, _o7w = 1), 0 == _o7u) return _o7t;
            var _o7x = _o7r.get_slotnums(407);
            _o7t.add(_o7v.multiply(_o7x));
            for (var _o7y = 0, _o7z = 0, _o80 = 0, _o81 = _o7r.have_slot_ids(); _o80 < _o81.length; _o80++) {
                var _o82 = _o81[_o80],
                    _o83 = _o7q.default.model.slot.getMst(_o82),
                    _o84 = _o83.equipType;
                12 != _o84 && 13 != _o84 || (_o83.sakuteki >= 5 && (_o7y += _o7r.get_slotnums(parseInt(_o82))), _o83.taiku >= 2 && (_o7z += _o7r.get_slotnums(parseInt(_o82))));
            }
            return _o7y >= 1 && 1 == _o7w && (_o7t.houg += 2, _o7t.kaih += 2, _o7t.raig += 2), _o7z >= 1 && 1 == _o7w && (_o7t.tyku += 2, _o7t.kaih += 3), _o7t;
        };
    },
    78466: (_o85, _o86, _o87) => {
        'use strict';
        var _o88 = null;
        defineModule(_o86);
        Object.defineProperty(_o86, '__esModule', {
            'value': true
        }), _o86.getSlot408PersonalEffect = void 0;
        var _o89 = _o87(74496);
        _o86.getSlot408PersonalEffect = function(_o8a) {
            var _o8b = null,
                _o8c = new _o89.SlotItemEffectModel(),
                _o8d = false,
                _o8e = new _o89.SlotItemEffectModel();
            if ('しんしゅうまる' == _o8a.yomi ? (_o8e.houg += 2, _o8e.saku += 2, _o8e.kaih += 2, _o8d = true) : 'あきつまる' == _o8a.yomi && (_o8e.houg += 1, _o8e.saku += 1, _o8e.kaih += 1, _o8e.tais += 1, _o8d = true), 2 == _o8a.stype && (_o8e.houg += 1, _o8e.saku += 1, _o8e.kaih -= 5, _o8d = true), 0 == _o8d) return _o8c;
            var _o8f = _o8a.get_slotnums(408);
            return _o8c.add(_o8e.multiply(_o8f)), _o8c;
        };
    },
    40061: (_o8g, _o8h, _o8i) => {
        'use strict';
        var _o8j = null;
        defineModule(_o8h);
        Object.defineProperty(_o8h, '__esModule', {
            'value': true
        }), _o8h.getSlot409PersonalEffect = void 0;
        var _o8k = _o8i(74496);
        _o8h.getSlot409PersonalEffect = function(_o8l) {
            var _o8m = null,
                _o8n = new _o8k.SlotItemEffectModel(),
                _o8o = false,
                _o8p = new _o8k.SlotItemEffectModel();
            if ('しんしゅうまる' == _o8l.yomi ? (_o8p.houg += 1, _o8p.tyku += 2, _o8p.kaih += 3, _o8o = true) : 'あきつまる' == _o8l.yomi && (_o8p.houg += 1, _o8p.tyku += 1, _o8p.kaih += 2, _o8p.tais += 1, _o8o = true), 0 == _o8o) return _o8n;
            var _o8q = _o8l.get_slotnums(409);
            return _o8n.add(_o8p.multiply(_o8q)), _o8n;
        };
    },
    79988: (_o8r, _o8s, _o8t) => {
        'use strict';
        var _o8u = null;
        defineModule(_o8s);
        Object.defineProperty(_o8s, '__esModule', {
            'value': true
        }), _o8s.getSlot411PersonalEffect = void 0;
        var _o8v = _o8t(74496);
        _o8s.getSlot411PersonalEffect = function(_o8w) {
            var _o8x = null,
                _o8y = new _o8v.SlotItemEffectModel(),
                _o8z = new _o8v.SlotItemEffectModel(),
                _o90 = false,
                _o91 = 0;
            if (2 == _o8w.stype && (_o8z.kaih -= 9, _o90 = true), 3 != _o8w.stype && 4 != _o8w.stype || (_o8z.kaih -= 7, _o90 = true), 21 == _o8w.stype && (_o8z.kaih -= 6, _o90 = true), 5 != _o8w.stype && 6 != _o8w.stype || (_o8z.kaih -= 5, _o90 = true), 593 == _o8w.ship_id && (_o8y.houg += 1, _o8y.tyku += 2, _o8y.kaih += 3), 151 == _o8w.ship_id || 411 == _o8w.ship_id || 412 == _o8w.ship_id || 593 == _o8w.ship_id || 954 == _o8w.ship_id ? (_o8y.houg += 3, _o8y.tyku += 4, _o91 = 1) : 694 == _o8w.ship_id ? (_o8y.houg += 4, _o8y.tyku += 2, _o91 = 2) : 541 != _o8w.ship_id && 573 != _o8w.ship_id && 553 != _o8w.ship_id && 554 != _o8w.ship_id || (_o8y.houg += 2, _o8y.tyku += 2, _o91 = 1), _o90) {
                var _o92 = _o8w.get_slotnums(411);
                _o8y.add(_o8z.multiply(_o92));
            }
            if (0 == _o91) return _o8y;
            var _o93 = _o8w.get_each_level_nums(411),
                _o94 = 0,
                _o95 = 0;
            return _o91 > 0 && _o93.forEach(function(_o96, _o97) {
                _o97 >= 4 && (_o94 += _o96), _o97 >= 5 && (_o95 += _o96);
            }), 1 == _o91 ? (_o94 >= 1 && (_o8y.houg += 1, _o8y.tyku += 1), _o93[10] >= 1 && (_o8y.houg += 1, _o8y.tyku += 1)) : 2 == _o91 && (_o95 >= 1 && (_o8y.houg += 1, _o8y.tyku += 1), _o93[10] >= 1 && (_o8y.houg += 2, _o8y.tyku += 1)), _o8y;
        };
    },
    74428: (_o98, _o99, _o9a) => {
        'use strict';
        var _o9b = null;
        defineModule(_o99);
        Object.defineProperty(_o99, '__esModule', {
            'value': true
        }), _o99.getSlot412PersonalEffect = void 0;
        var _o9c = _o9a(74496);
        _o99.getSlot412PersonalEffect = function(_o9d) {
            var _o9e = null,
                _o9f = new _o9c.SlotItemEffectModel(),
                _o9g = false,
                _o9h = 0,
                _o9i = new _o9c.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o9d.ctype) >= 0 ? (_o9f.houg += 2, _o9f.raig += 4, _o9f.tais += 2, _o9i.kaih += 3, _o9i.saku += 1, _o9g = true, _o9h = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o9d.ctype) >= 0 ? (_o9f.houg += 3, _o9f.raig += 3, _o9i.kaih += 2, _o9i.saku += 3, _o9g = true, _o9h = 1) : [7, 13, 29, 8, 9, 31].indexOf(_o9d.ctype) >= 0 && (_o9f.houg += 1, _o9i.kaih += 1, _o9i.saku += 1, _o9g = true), 0 == _o9g) return _o9f;
            var _o9j = _o9d.get_slotnums(412);
            if (_o9f.add(_o9i.multiply(_o9j)), 0 == _o9h) return _o9f;
            var _o9k = _o9d.get_each_level_nums(412),
                _o9l = 0,
                _o9m = 0;
            return _o9h > 0 && _o9k.forEach(function(_o9n, _o9o) {
                _o9o >= 4 && (_o9l += _o9n), _o9o >= 8 && (_o9m += _o9n);
            }), 1 == _o9h && (_o9l > 0 && (_o9f.houg += 1), _o9m > 0 && (_o9f.raig += 1)), _o9f;
        };
    },
    2631: (_o9p, _o9q, _o9r) => {
        'use strict';
        var _o9s = null;
        defineModule(_o9q);
        Object.defineProperty(_o9q, '__esModule', {
            'value': true
        }), _o9q.getSlot413PersonalEffect = void 0;
        var _o9t = _o9r(74496);
        _o9q.getSlot413PersonalEffect = function(_o9u) {
            var _o9v = null,
                _o9w = new _o9t.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o9u.ctype) >= 0 ? (_o9w.houg += 2, _o9w.raig += 2, _o9w.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o9u.ctype) >= 0 && (_o9w.houg += 4, _o9w.raig += 2, _o9w.kaih += 2), 38 == _o9u.ctype || 54 == _o9u.ctype ? (_o9w.houg += 2, _o9w.raig += 3, _o9w.kaih += 3) : 4 == _o9u.ctype || 20 == _o9u.ctype || 16 == _o9u.ctype || 41 == _o9u.ctype || 52 == _o9u.ctype ? (_o9w.houg += 1, _o9w.raig += 2, _o9w.kaih += 2) : 21 != _o9u.ctype && 34 != _o9u.ctype || (_o9w.tyku += 2, _o9w.raig += 1, _o9w.kaih += 1), 'なか' == _o9u.yomi || 'ゆら' == _o9u.yomi || 'やはぎ' == _o9u.yomi || 'のしろ' == _o9u.yomi || 'はまなみ' == _o9u.yomi || 'しまかぜ' == _o9u.yomi || 'きよしも' == _o9u.yomi || 'はつしも' == _o9u.yomi ? (_o9w.tyku += 1, _o9w.kaih += 1) : 'じんつう' != _o9u.yomi && 'せんだい' != _o9u.yomi && 'ながなみ' != _o9u.yomi && 'はつしも' != _o9u.yomi && 'てるづき' != _o9u.yomi || (_o9w.houg += 1, _o9w.raig += 1), 543 == _o9u.ship_id ? (_o9w.houg += 1, _o9w.kaih += 1) : 159 == _o9u.ship_id && (_o9w.houg += 2), _o9w;
        };
    },
    27177: (_o9x, _o9y, _o9z) => {
        'use strict';
        var _oa0 = null;
        defineModule(_o9y);
        Object.defineProperty(_o9y, '__esModule', {
            'value': true
        }), _o9y.getSlot415PersonalEffect = void 0;
        var _oa1 = _o9z(74496);
        _o9y.getSlot415PersonalEffect = function(_oa2) {
            var _oa3 = null,
                _oa4 = new _oa1.SlotItemEffectModel(),
                _oa5 = [];
            if ('アメリカ' == _oa2.getCountryName() && (_oa4.saku += 1, _oa4.tais += 1, _oa5.push(1)), 95 != _oa2.ctype && 99 != _oa2.ctype && 106 != _oa2.ctype && 110 != _oa2.ctype && 121 != _oa2.ctype || (_oa4.houg += 1, _oa5.push(2)), 0 == _oa5.length) return _oa4;
            var _oa6 = _oa2.get_each_level_nums(415),
                _oa7 = 0,
                _oa8 = 0,
                _oa9 = 0;
            return _oa5.length > 0 && (_oa6.forEach(function(_oaa, _oab) {
                _oab >= 5 && (_oa7 += _oaa), _oab >= 3 && (_oa8 += _oaa), _oab >= 8 && (_oa9 += _oaa);
            }), _oa5.forEach(function(_oac) {
                var _oad = null;
                1 == _oac ? _oa7 >= 1 && (_oa4.kaih += 1) : 2 == _oac && (_oa8 >= 1 && (_oa4.kaih += 1), _oa9 >= 1 && (_oa4.houg += 1));
            })), _oa4;
        };
    },
    53908: (_oae, _oaf, _oag) => {
        'use strict';
        var _oah = null;
        defineModule(_oaf);
        Object.defineProperty(_oaf, '__esModule', {
            'value': true
        }), _oaf.getSlot419PersonalEffect = void 0;
        var _oai = _oag(74496);
        _oaf.getSlot419PersonalEffect = function(_oaj) {
            var _oak = null,
                _oal = new _oai.SlotItemEffectModel(),
                _oam = false,
                _oan = new _oai.SlotItemEffectModel(),
                _oao = 0;
            if ('アメリカ' == _oaj.getCountryName() && (_oan.houg += 2, _oam = true, _oao = 1), 0 == _oam) return _oal;
            var _oap = _oaj.get_slotnums(419);
            if (_oal.add(_oan.multiply(_oap)), 0 == _oao) return _oal;
            var _oaq = _oaj.get_each_level_nums(419),
                _oar = 0,
                _oas = 0;
            return _oao > 0 && _oaq.forEach(function(_oat, _oau) {
                _oau >= 2 && (_oar += _oat), _oau >= 7 && (_oas += _oat);
            }), 1 == _oao && (_oar >= 1 && (_oal.houg += 1 * _oar), _oas >= 1 && (_oal.houg += 1 * _oas)), _oal;
        };
    },
    79813: (_oav, _oaw, _oax) => {
        'use strict';
        var _oay = null;
        defineModule(_oaw);
        Object.defineProperty(_oaw, '__esModule', {
            'value': true
        }), _oaw.getSlot420PersonalEffect = void 0;
        var _oaz = _oax(74496);
        _oaw.getSlot420PersonalEffect = function(_ob0) {
            var _ob1 = null,
                _ob2 = new _oaz.SlotItemEffectModel(),
                _ob3 = false,
                _ob4 = new _oaz.SlotItemEffectModel(),
                _ob5 = 0,
                _ob6 = _ob0.getCountryName();
            if ('アメリカ' != _ob6 && 67 != _ob0.ctype && 78 != _ob0.ctype && 82 != _ob0.ctype && 88 != _ob0.ctype && 108 != _ob0.ctype && 112 != _ob0.ctype || (_ob4.houg += 1, _ob5 = 1, _ob3 = true), 84 == _ob0.ctype ? (_ob4.houg += 1, _ob3 = true) : 78 == _ob0.ctype && (_ob4.houg -= 1, _ob3 = true), 7 == _ob0.stype && (_ob4.houg -= 2, _ob4.kaih -= 1, _ob4.souk -= 2, _ob3 = true), 0 == _ob3) return _ob2;
            var _ob7 = _ob0.get_slotnums(420);
            if (_ob2.add(_ob4.multiply(_ob7)), 0 == _ob5) return _ob2;
            var _ob8 = _ob0.get_each_level_nums(420),
                _ob9 = 0,
                _oba = 0,
                _obb = 0,
                _obc = 0;
            _ob5 > 0 && _ob8.forEach(function(_obd, _obe) {
                _obe >= 3 && (_ob9 += _obd), _obe >= 7 && (_oba += _obd), _obe >= 8 && (_obb += _obd), _obe >= 9 && (_obc += _obd);
            });
            var _obf = _ob8[10];
            return 1 == _ob5 && (_ob9 >= 1 && (_ob2.houg += 1 * _ob9), 'アメリカ' == _ob6 && (_oba >= 1 && (_ob2.houm += 1 * _oba), _obb >= 1 && (_ob2.houg += 1 * _obb), _obc >= 1 && (_ob2.houm += 1 * _obc), _obf >= 1 && (_ob2.houg += 1 * _obf))), _ob2;
        };
    },
    16088: (_obg, _obh, _obi) => {
        'use strict';
        var _obj = null;
        defineModule(_obh);
        Object.defineProperty(_obh, '__esModule', {
            'value': true
        }), _obh.getSlot421PersonalEffect = void 0;
        var _obk = _obi(74496);
        _obh.getSlot421PersonalEffect = function(_obl) {
            var _obm = null,
                _obn = new _obk.SlotItemEffectModel(),
                _obo = false,
                _obp = new _obk.SlotItemEffectModel(),
                _obq = 0,
                _obr = _obl.getCountryName();
            if ('アメリカ' != _obr && 67 != _obl.ctype && 78 != _obl.ctype && 82 != _obl.ctype && 88 != _obl.ctype && 108 != _obl.ctype && 112 != _obl.ctype || (_obp.houg += 2, _obo = true, _obq = 1), 84 == _obl.ctype ? (_obp.houg += 1, _obo = true) : 78 == _obl.ctype && (_obp.houg -= 1, _obo = true), 7 == _obl.stype && (_obp.houg -= 2, _obp.kaih -= 1, _obp.souk -= 2, _obo = true), 0 == _obo) return _obn;
            var _obs = _obl.get_slotnums(421);
            if (_obn.add(_obp.multiply(_obs)), 0 == _obq) return _obn;
            var _obt = _obl.get_each_level_nums(421),
                _obu = 0,
                _obv = 0,
                _obw = 0,
                _obx = 0,
                _oby = 0;
            _obq > 0 && _obt.forEach(function(_obz, _oc0) {
                _oc0 >= 5 && (_obu += _obz), _oc0 >= 6 && (_obv += _obz), _oc0 >= 7 && (_obw += _obz), _oc0 >= 8 && (_obx += _obz), _oc0 >= 9 && (_oby += _obz);
            });
            var _oc1 = _obt[10];
            return 1 == _obq && (_obu >= 1 && (_obn.houg += 1 * _obu), 'アメリカ' == _obr && (_obv >= 1 && (_obn.houm += 1 * _obv), _obw >= 1 && (_obn.houg += 1 * _obw), _obx >= 1 && (_obn.houm += 1 * _obx), _oby >= 1 && (_obn.houg += 1 * _oby), _oc1 >= 1 && (_obn.houm += 1 * _oc1))), _obn;
        };
    },
    69939: (_oc2, _oc3, _oc4) => {
        'use strict';
        var _oc5 = null;
        defineModule(_oc3);
        Object.defineProperty(_oc3, '__esModule', {
            'value': true
        }), _oc3.getSlot422PersonalEffect = void 0;
        var _oc6 = _oc4(74496);
        _oc3.getSlot422PersonalEffect = function(_oc7) {
            var _oc8 = null,
                _oc9 = new _oc6.SlotItemEffectModel(),
                _oca = false,
                _ocb = new _oc6.SlotItemEffectModel();
            if ('アメリカ' != _oc7.getCountryName() && 67 != _oc7.ctype && 78 != _oc7.ctype && 82 != _oc7.ctype && 88 != _oc7.ctype && 108 != _oc7.ctype && 112 != _oc7.ctype || (_ocb.houg += 1, _ocb.kaih += 1, _oca = true), 84 == _oc7.ctype && (_ocb.houg += 1, _ocb.tyku += 1, _oca = true), 707 == _oc7.ship_id && (_ocb.houg += 2, _ocb.kaih += 2, _ocb.tyku += 2, _oca = true), 0 == _oca) return _oc9;
            var _occ = _oc7.get_slotnums(422);
            return _oc9.add(_ocb.multiply(_occ)), _oc9;
        };
    },
    33734: (_ocd, _oce, _ocf) => {
        'use strict';
        var _ocg = null;
        defineModule(_oce);
        Object.defineProperty(_oce, '__esModule', {
            'value': true
        }), _oce.getSlot423PersonalEffect = void 0;
        var _och = _ocf(74496);
        _oce.getSlot423PersonalEffect = function(_oci) {
            var _ocj = null,
                _ock = new _och.SlotItemEffectModel(),
                _ocl = false,
                _ocm = new _och.SlotItemEffectModel();
            78 != _oci.ctype && 112 != _oci.ctype || (_ocm.houg += 2, _ocm.tyku += 2, _ocm.kaih += 2, _ocm.saku += 2, _ocl = true);
            var _ocn = _oci.getCountryName();
            if (67 == _oci.ctype || 78 == _oci.ctype || 82 == _oci.ctype || 88 == _oci.ctype || 108 == _oci.ctype || 112 == _oci.ctype ? (_ocm.houg += 2, _ocm.tyku += 2, _ocm.kaih += 2, _ocm.saku += 2, _ocl = true) : 'アメリカ' == _ocn && (_ocm.houg += 1, _ocm.tyku += 1, _ocm.kaih += 1, _ocm.saku += 1, _ocl = true), 0 == _ocl) return _ock;
            var _oco = _oci.get_slotnums(423);
            return _ock.add(_ocm.multiply(_oco)), _ock;
        };
    },
    34432: (_ocp, _ocq, _ocr) => {
        'use strict';
        var _ocs = null;
        defineModule(_ocq);
        Object.defineProperty(_ocq, '__esModule', {
            'value': true
        }), _ocq.getSlot424PersonalEffect = void 0;
        var _oct = _ocr(74496);
        _ocq.getSlot424PersonalEffect = function(_ocu) {
            var _ocv = null,
                _ocw = new _oct.SlotItemEffectModel(),
                _ocx = false,
                _ocy = new _oct.SlotItemEffectModel(),
                _ocz = 0;
            67 != _ocu.ctype && 78 != _ocu.ctype && 82 != _ocu.ctype && 88 != _ocu.ctype && 108 != _ocu.ctype && 112 != _ocu.ctype || (_ocy.houg += 2, _ocy.raig += 3, _ocx = true, _ocz = 1);
            var _od0 = _ocu.get_slotnums(424);
            _ocx && _ocw.add(_ocy.multiply(_od0));
            var _od1 = _ocu.get_each_level_nums(424),
                _od2 = 0,
                _od3 = 0,
                _od4 = 0;
            _od1.forEach(function(_od5, _od6) {
                _od6 >= 2 && (_od2 += _od5), _od6 >= 6 && (_od3 += _od5), _od6 >= 8 && (_od4 += _od5);
            });
            var _od7 = _od1[10];
            return 1 == _ocz && (_od2 >= 1 && (_ocw.houg += 1 * _od2), _od3 >= 1 && (_ocw.houg += 1 * _od3), _od4 >= 1 && (_ocw.houm += 1 * _od4)), _od7 > 0 && (_ocw.houm += 1 * _od7), _ocw;
        };
    },
    97423: (_od8, _od9, _oda) => {
        'use strict';
        var _odb = null;
        defineModule(_od9);
        Object.defineProperty(_od9, '__esModule', {
            'value': true
        }), _od9.getSlot425PersonalEffect = void 0;
        var _odc = _oda(74496);
        _od9.getSlot425PersonalEffect = function(_odd) {
            var _ode = null,
                _odf = new _odc.SlotItemEffectModel(),
                _odg = false,
                _odh = new _odc.SlotItemEffectModel(),
                _odi = 0;
            67 != _odd.ctype && 78 != _odd.ctype && 82 != _odd.ctype && 88 != _odd.ctype && 108 != _odd.ctype && 112 != _odd.ctype || (_odh.houg += 2, _odh.tais += 2, _odh.raig += 1, _odh.saku += 1, _odg = true, _odi = 1);
            var _odj = _odd.get_slotnums(425);
            _odg && _odf.add(_odh.multiply(_odj));
            var _odk = _odd.get_each_level_nums(425),
                _odl = 0,
                _odm = 0,
                _odn = 0,
                _odo = 0,
                _odp = 0,
                _odq = 0;
            _odk.forEach(function(_odr, _ods) {
                _ods >= 2 && (_odl += _odr), _ods >= 4 && (_odm += _odr), _ods >= 6 && (_odn += _odr), _ods >= 7 && (_odo += _odr), _ods >= 8 && (_odp += _odr), _ods >= 9 && (_odq += _odr);
            });
            var _odt = _odk[10];
            return 1 == _odi && (_odl >= 1 && (_odf.tais += 1 * _odl), _odm >= 1 && (_odf.houg += 1 * _odm), _odn >= 1 && (_odf.tais += 1 * _odn), _odo >= 1 && (_odf.houm += 1 * _odo), _odp >= 1 && (_odf.raig += 1 * _odp), _odq >= 1 && (_odf.houg += 1 * _odq), _odt >= 1 && (_odf.tais += 1 * _odt)), _odo >= 1 && (_odf.houg += 1 * _odo), _odp >= 1 && (_odf.tais += 1 * _odp), _odq >= 1 && (_odf.houm += 1 * _odq), _odt >= 1 && (_odf.houm += 1 * _odt), _odf;
        };
    },
    23551: (_odu, _odv, _odw) => {
        'use strict';
        var _odx = null;
        defineModule(_odv);
        Object.defineProperty(_odv, '__esModule', {
            'value': true
        }), _odv.getSlot430PersonalEffect = void 0;
        var _ody = _odw(74496);
        _odv.getSlot430PersonalEffect = function(_odz) {
            var _oe0 = null,
                _oe1 = new _ody.SlotItemEffectModel(),
                _oe2 = false,
                _oe3 = new _ody.SlotItemEffectModel(),
                _oe4 = 0;
            if (113 == _odz.ctype && (_oe3.tyku += 1, _oe3.kaih += 1, _oe2 = true), 58 != _odz.ctype && 61 != _odz.ctype && 64 != _odz.ctype && 68 != _odz.ctype && 80 != _odz.ctype && 92 != _odz.ctype && 113 != _odz.ctype && 124 != _odz.ctype || (_oe3.tyku += 2, _oe3.kaih += 1, _oe2 = true, _oe4 = 1), 0 == _oe2) return _oe1;
            var _oe5 = _odz.get_slotnums(430);
            if (_oe1.add(_oe3.multiply(_oe5)), 0 == _oe4) return _oe1;
            var _oe6 = _odz.get_each_level_nums(430),
                _oe7 = 0,
                _oe8 = 0,
                _oe9 = 0;
            if (_oe4 > 0 && _oe6.forEach(function(_oea, _oeb) {
                    _oeb >= 2 && (_oe7 += _oea), _oeb >= 4 && (_oe8 += _oea), _oeb >= 7 && (_oe9 += _oea);
                }), 1 == _oe4) {
                _oe7 >= 1 && (_oe1.kaih += 1 * _oe7), _oe8 >= 1 && (_oe1.tyku += 1 * _oe8), _oe9 >= 1 && (_oe1.kaih += 1 * _oe9);
                var _oec = _oe6[10];
                _oec >= 1 && (_oe1.tyku += 1 * _oec);
            }
            return _oe1;
        };
    },
    6173: (_oed, _oee, _oef) => {
        'use strict';
        var _oeg = null;
        defineModule(_oee);
        Object.defineProperty(_oee, '__esModule', {
            'value': true
        }), _oee.getSlot437PersonalEffect = void 0;
        var _oeh = _oef(74496);
        _oee.getSlot437PersonalEffect = function(_oei) {
            var _oej = null,
                _oek = new _oeh.SlotItemEffectModel(),
                _oel = false,
                _oem = new _oeh.SlotItemEffectModel();
            if (285 == _oei.ship_id ? (_oem.houg += 3, _oem.tyku += 3, _oem.kaih += 4, _oel = true) : 894 == _oei.ship_id || 899 == _oei.ship_id ? (_oem.houg += 4, _oem.tyku += 4, _oem.kaih += 4, _oel = true) : 196 == _oei.ship_id || 197 == _oei.ship_id ? (_oem.houg += 2, _oem.tyku += 2, _oem.kaih += 3, _oel = true) : 508 == _oei.ship_id || 509 == _oei.ship_id || 646 == _oei.ship_id ? (_oem.houg += 2, _oem.tyku += 2, _oem.kaih += 2, _oel = true) : 888 != _oei.ship_id && 883 != _oei.ship_id && 553 != _oei.ship_id && 554 != _oei.ship_id || (_oem.houg += 1, _oem.tyku += 2, _oem.kaih += 2, _oel = true), 0 == _oel) return _oek;
            var _oen = _oei.get_slotnums(437);
            return _oek.add(_oem.multiply(_oen)), _oek;
        };
    },
    53709: (_oeo, _oep, _oeq) => {
        'use strict';
        var _oer = null;
        defineModule(_oep);
        Object.defineProperty(_oep, '__esModule', {
            'value': true
        }), _oep.getSlot438PersonalEffect = void 0;
        var _oes = _oeq(74496);
        _oep.getSlot438PersonalEffect = function(_oet) {
            var _oeu = null,
                _oev = new _oes.SlotItemEffectModel(),
                _oew = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_oet.ctype) > -1 && (_oev.tais += 1, _oev.kaih += 1), 160 == _oet.ship_id || 488 == _oet.ship_id || 141 == _oet.ship_id ? (_oev.tais += 1, _oev.kaih += 1) : 145 != _oet.ship_id && 588 != _oet.ship_id && 667 != _oet.ship_id && 578 != _oet.ship_id && 476 != _oet.ship_id && 363 != _oet.ship_id && 961 != _oet.ship_id || (_oew = 1), 'うしお' == _oet.yomi || 'まいかぜ' == _oet.yomi || 'いそかぜ' == _oet.yomi || 'はまかぜ' == _oet.yomi || 'いかづち' == _oet.yomi || 'やまぐも' == _oet.yomi || 'うみかぜ' == _oet.yomi || 'かわかぜ' == _oet.yomi || 'すずかぜ' == _oet.yomi ? _oev.tais += 1 : 'しぐれ' != _oet.yomi && 'やまかぜ' != _oet.yomi && 'かみかぜ' != _oet.yomi && 'はるかぜ' != _oet.yomi && 'みくら' != _oet.yomi && 'いしがき' != _oet.yomi || (_oev.tais += 1, _oev.kaih += 1), 0 == _oew) return _oev;
            var _oex = _oet.get_each_level_nums(438),
                _oey = 0,
                _oez = 0,
                _of0 = 0,
                _of1 = _oex[10];
            return _oew > 0 && _oex.forEach(function(_of2, _of3) {
                _of3 >= 4 && (_oey += _of2), _of3 >= 6 && (_oez += _of2), _of3 >= 8 && (_of0 += _of2);
            }), 1 == _oew && (_oey >= 1 && (_oev.tais += 1), _oez >= 1 && (_oev.kaih += 1), _of0 >= 1 && (_oev.tais += 1), _of1 >= 1 && (_oev.kaih += 1)), _oev;
        };
    },
    99790: (_of4, _of5, _of6) => {
        'use strict';
        var _of7 = null;
        defineModule(_of5);
        Object.defineProperty(_of5, '__esModule', {
            'value': true
        }), _of5.getSlot439PersonalEffect = void 0;
        var _of8 = _of6(74496);
        _of5.getSlot439PersonalEffect = function(_of9) {
            var _ofa = null,
                _ofb = new _of8.SlotItemEffectModel();
            1 != _of9.stype && 2 != _of9.stype && 3 != _of9.stype && 21 != _of9.stype || (_ofb.tais += 1, _ofb.kaih += 1), 101 != _of9.ctype && 1 != _of9.stype || (_ofb.tais += 1);
            var _ofc = _of9.getCountryName();
            return 'アメリカ' != _ofc && 'イギリス' != _ofc || (_ofb.tais += 2), _ofb;
        };
    },
    18387: (_ofd, _ofe, _off) => {
        'use strict';
        var _ofg = null;
        defineModule(_ofe);
        Object.defineProperty(_ofe, '__esModule', {
            'value': true
        }), _ofe.getSlot440_441PersonalEffect = void 0;
        var _ofh = _off(74496);
        _ofe.getSlot440_441PersonalEffect = function(_ofi) {
            var _ofj = null,
                _ofk = new _ofh.SlotItemEffectModel();
            return 114 == _ofi.ctype && (_ofk.raig += 2), _ofk;
        };
    },
    70941: (_ofl, _ofm, _ofn) => {
        'use strict';
        var _ofo = null;
        defineModule(_ofm);
        Object.defineProperty(_ofm, '__esModule', {
            'value': true
        }), _ofm.getSlot442_443PersonalEffect = void 0;
        var _ofp = _ofn(74496);
        _ofm.getSlot442_443PersonalEffect = function(_ofq) {
            var _ofr = null,
                _ofs = new _ofp.SlotItemEffectModel();
            return 122 == _ofq.ctype ? (_ofs.raig += 1, _ofs.kaih += 2) : 114 == _ofq.ctype && (_ofs.raig += 2), _ofs;
        };
    },
    35025: (_oft, _ofu, _ofv) => {
        'use strict';
        var _ofw = null;
        defineModule(_ofu);
        Object.defineProperty(_ofu, '__esModule', {
            'value': true
        }), _ofu.getSlot447PersonalEffect = void 0;
        var _ofx = _ofv(74496);
        _ofu.getSlot447PersonalEffect = function(_ofy) {
            var _ofz = null,
                _og0 = new _ofx.SlotItemEffectModel(),
                _og1 = _ofy.get_each_level_nums(447),
                _og2 = 0,
                _og3 = 0,
                _og4 = 0,
                _og5 = 0;
            _og1.forEach(function(_og6, _og7) {
                _og7 >= 2 && (_og2 += _og6), _og7 >= 4 && (_og3 += _og6), _og7 >= 6 && (_og4 += _og6), _og7 >= 8 && (_og5 += _og6);
            }), _og2 >= 1 && (_og0.houg += 1 * _og2), _og3 >= 1 && (_og0.tyku += 1 * _og3), _og4 >= 1 && (_og0.tais += 1 * _og4), _og5 >= 1 && (_og0.kaih += 1 * _og5);
            var _og8 = _og1[10];
            _og8 >= 1 && (_og0.tais += 1 * _og8);
            var _og9 = false,
                _oga = new _ofx.SlotItemEffectModel();
            if (76 == _ofy.ctype && (_oga.houg += 1, _oga.tais += 1, _oga.kaih += 2, _og9 = true), 'うんよう' == _ofy.yomi ? (_oga.houg += 1, _oga.tais += 1, _oga.kaih += 1, _og9 = true) : 'ほうしょう' != _ofy.yomi && 'たいげい・りゅうほう' != _ofy.yomi || (_oga.houg += 1, _oga.tais += 2, _oga.kaih += 1, _og9 = true), 0 == _og9) return _og0;
            894 != _ofy.ship_id && 899 != _ofy.ship_id || (_oga.houg += 1, _oga.kaih += 1, _oga.tais += 1, _oga.tyku += 1, _og9 = true);
            var _ogb = _ofy.get_slotnums(447);
            return _og0.add(_oga.multiply(_ogb)), _og0;
        };
    },
    96804: (_ogc, _ogd, _oge) => {
        'use strict';
        var _ogf = null;
        defineModule(_ogd);
        Object.defineProperty(_ogd, '__esModule', {
            'value': true
        }), _ogd.getSlot450PersonalEffect = void 0;
        var _ogg = _oge(74496);
        _ogd.getSlot450PersonalEffect = function(_ogh) {
            var _ogi = null,
                _ogj = new _ogg.SlotItemEffectModel(),
                _ogk = false,
                _ogl = new _ogg.SlotItemEffectModel();
            if (101 == _ogh.ctype && (_ogl.houg += 1, _ogl.tyku += 2, _ogl.souk += 1, _ogl.kaih += 3, _ogk = true), 1 == _ogh.stype && (_ogl.tyku += 1, _ogl.souk += 1, _ogl.kaih += 2, _ogk = true), 0 == _ogk) return _ogj;
            var _ogm = _ogh.get_slotnums(450);
            return _ogj.add(_ogl.multiply(_ogm)), _ogj;
        };
    },
    33896: (_ogn, _ogo, _ogp) => {
        'use strict';
        var _ogq = null;
        defineModule(_ogo);
        Object.defineProperty(_ogo, '__esModule', {
            'value': true
        }), _ogo.getSlot451PersonalEffect = void 0;
        var _ogr = _ogp(74496);
        _ogo.getSlot451PersonalEffect = function(_ogs) {
            var _ogt = null,
                _ogu = new _ogr.SlotItemEffectModel(),
                _ogv = false,
                _ogw = new _ogr.SlotItemEffectModel(),
                _ogx = 0;
            if ('あきつまる' == _ogs.yomi ? (_ogw.houg += 1, _ogw.tais += 2, _ogv = true, 166 == _ogs.ship_id && (_ogx = 2)) : 'やましおまる' != _ogs.yomi && 'くまのまる' != _ogs.yomi || (_ogw.houg += 1, _ogw.tais += 3, _ogv = true, _ogx = 1), 0 == _ogv) return _ogu;
            var _ogy = _ogs.get_slotnums(451);
            if (_ogu.add(_ogw.multiply(_ogy)), 0 == _ogx) return _ogu;
            var _ogz = _ogs.get_each_level_nums(451),
                _oh0 = [];
            return _ogx > 0 && _ogz.forEach(function(_oh1, _oh2) {
                var _oh3 = null;
                for (var _oh4 = 1; _oh4 <= _ogs.SLOT_LEVEL_MAX; _oh4++) _oh2 >= _oh4 && (null == _oh0[_oh4] && (_oh0[_oh4] = 0), _oh0[_oh4] += _oh1);
            }), 1 == _ogx ? (_oh0[1] >= 1 && (_ogu.houg += 2 * _oh0[1]), _oh0[2] >= 1 && (_ogu.houm += 1 * _oh0[2]), _oh0[3] >= 1 && (_ogu.tais += 1 * _oh0[3]), _oh0[4] >= 1 && (_ogu.houg += 1 * _oh0[4]), _oh0[6] >= 1 && (_ogu.houm += 1 * _oh0[6]), _oh0[8] >= 1 && (_ogu.tais += 1 * _oh0[8]), _oh0[10] >= 1 && (_ogu.houg += 1 * _oh0[10])) : 2 == _ogx && (_oh0[1] >= 1 && (_ogu.houg += 1 * _oh0[1]), _oh0[3] >= 1 && (_ogu.tais += 1 * _oh0[3]), _oh0[5] >= 1 && (_ogu.houm += 1 * _oh0[5]), _oh0[7] >= 1 && (_ogu.tais += 1 * _oh0[7]), _oh0[10] >= 1 && (_ogu.houg += 1 * _oh0[10])), _ogu;
        };
    },
    11031: function(_oh5, _oh6, _oh7) {
        'use strict';
        var _oh8 = null;
        var _oh9 = this && this.__importDefault || function(_oha) {
            var _ohb = null;
            return _oha && _oha.__esModule ? _oha : {
                'default': _oha
            };
        };
        defineModule(_oh6);
        Object.defineProperty(_oh6, '__esModule', {
            'value': true
        }), _oh6.getSlot455PersonalEffect = void 0;
        var _ohc = _oh7(74496),
            _ohd = _oh9(_oh7(18622));
        _oh6.getSlot455PersonalEffect = function(_ohe) {
            var _ohf = null,
                _ohg = new _ohc.SlotItemEffectModel(),
                _ohh = false,
                _ohi = new _ohc.SlotItemEffectModel(),
                _ohj = 0,
                _ohk = _ohe.get_slotnums(455);
            if (1 != _ohe.ctype && 5 != _ohe.ctype && 12 != _ohe.ctype || (_ohi.houg += 2, _ohi.tyku += 1, 12 == _ohe.ctype && (_ohi.houg += 1), 666 == _ohe.ship_id ? (_ohi.houg += 1, _ohi.tais += 1) : 959 == _ohe.ship_id && (_ohi.houg += 2, _ohk >= 2 && (_ohg.houg += 2), _ohk >= 3 && (_ohg.houg += 3)), _ohj = 1, _ohh = true), 'うらなみ' == _ohe.yomi && (_ohi.houg += 1, 647 == _ohe.ship_id && (_ohi.houg += 1, _ohi.raig += 1, _ohi.tais += 1, _ohi.kaih += 1), _ohh = true), 0 == _ohh) return _ohg;
            if (_ohg.add(_ohi.multiply(_ohk)), 0 == _ohj) return _ohg;
            for (var _ohl = 0, _ohm = 0, _ohn = 0, _oho = _ohe.have_slot_ids(); _ohn < _oho.length; _ohn++) {
                var _ohp = _oho[_ohn],
                    _ohq = _ohd.default.model.slot.getMst(_ohp),
                    _ohr = _ohq.equipType;
                12 != _ohr && 13 != _ohr || (_ohq.sakuteki >= 5 && (_ohl += _ohe.get_slotnums(parseInt(_ohp))), _ohq.taiku >= 2 && (_ohm += _ohe.get_slotnums(parseInt(_ohp))));
            }
            if (1 == _ohj) {
                _ohl >= 1 && (_ohg.houg += 3, _ohg.kaih += 2, _ohg.raig += 1);
                var _ohs = _ohe.get_slotnums(13),
                    _oht = _ohe.get_slotnums(125),
                    _ohu = _ohe.get_slotnums(285),
                    _ohv = _ohs + _oht + _ohu;
                1 == _ohv ? (_ohg.houg += 1, _ohg.raig += 3) : _ohv >= 2 && (_ohg.houg += 2, _ohg.raig += 5), _ohu >= 1 && (_ohg.raig += 1), _ohm >= 1 && (_ohg.tyku += 4);
            }
            return _ohg;
        };
    },
    71383: (_ohw, _ohx, _ohy) => {
        'use strict';
        var _ohz = null;
        defineModule(_ohx);
        Object.defineProperty(_ohx, '__esModule', {
            'value': true
        }), _ohx.getSlot456PersonalEffect = void 0;
        var _oi0 = _ohy(74496);
        _ohx.getSlot456PersonalEffect = function(_oi1) {
            var _oi2 = null,
                _oi3 = new _oi0.SlotItemEffectModel(),
                _oi4 = false,
                _oi5 = new _oi0.SlotItemEffectModel(),
                _oi6 = _oi1.getCountryName();
            if ('アメリカ' == _oi6 && (_oi5.houg += 3, _oi5.kaih += 4, _oi5.saku += 4, _oi3.houm += 3, _oi4 = true), 'イギリス' != _oi6 && 'オーストラリア' != _oi6 || (_oi5.houg += 2, _oi5.kaih += 2, _oi5.saku += 2, _oi3.houm += 2, _oi4 = true), 87 != _oi1.ctype && 91 != _oi1.ctype || (_oi5.houg += 1, _oi3.leng += 1, _oi4 = true), 651 != _oi1.ship_id && 656 != _oi1.ship_id || (_oi3.houg += 2, _oi3.kaih += 2, _oi3.saku += 3, _oi3.leng += 1, _oi3.houm += 2), 0 == _oi4) return _oi3;
            var _oi7 = _oi1.get_slotnums(456);
            return _oi3.add(_oi5.multiply(_oi7)), _oi3;
        };
    },
    55888: (_oi8, _oi9, _oia) => {
        'use strict';
        var _oib = null;
        defineModule(_oi9);
        Object.defineProperty(_oi9, '__esModule', {
            'value': true
        }), _oi9.getSlot457PersonalEffect = void 0;
        var _oic = _oia(74496);
        _oi9.getSlot457PersonalEffect = function(_oid) {
            var _oie = null,
                _oif = new _oic.SlotItemEffectModel(),
                _oig = 0;
            if (109 == _oid.ctype ? (_oif.raig += 3, _oif.kaih += 3, _oig = 1) : 71 == _oid.ctype || 103 == _oid.ctype ? (_oif.raig += 2, _oif.kaih += 2, _oig = 2) : 44 == _oid.ctype && (_oif.raig += 1, _oif.kaih += 4, _oig = 3), 0 == _oig) return _oif;
            var _oih = _oid.get_each_level_nums(461),
                _oii = [];
            return _oig > 0 && _oih.forEach(function(_oij, _oik) {
                var _oil = null;
                for (var _oim = 1; _oim <= _oid.SLOT_LEVEL_MAX; _oim++) null == _oii[_oim] && (_oii[_oim] = 0), _oik >= _oim && (_oii[_oim] += _oij);
            }), 1 == _oig ? (_oii[2] >= 1 && (_oif.raig += 1 * _oii[2]), _oii[3] >= 1 && (_oif.kaih += 1 * _oii[3]), _oii[4] >= 1 && (_oif.raig += 1 * _oii[4]), _oii[5] >= 1 && (_oif.houm += 1 * _oii[5]), _oii[6] >= 1 && (_oif.raig += 1 * _oii[6]), _oii[8] >= 1 && (_oif.raig += 1 * _oii[8]), _oii[10] >= 1 && (_oif.houm += 1 * _oii[10])) : 2 == _oig ? (_oii[3] >= 1 && (_oif.kaih += 1 * _oii[3]), _oii[4] >= 1 && (_oif.raig += 1 * _oii[4]), _oii[6] >= 1 && (_oif.raig += 1 * _oii[6]), _oii[8] >= 1 && (_oif.raig += 1 * _oii[8]), _oii[10] >= 1 && (_oif.houm += 1 * _oii[10])) : 3 == _oig && (_oii[4] >= 1 && (_oif.raig += 1 * _oii[4]), _oii[6] >= 1 && (_oif.raig += 1 * _oii[6]), _oii[8] >= 1 && (_oif.raig += 1 * _oii[8]), _oii[10] >= 1 && (_oif.houm += 1 * _oii[10])), _oif;
        };
    },
    2258: (_oin, _oio, _oip) => {
        'use strict';
        var _oiq = null;
        defineModule(_oio);
        Object.defineProperty(_oio, '__esModule', {
            'value': true
        }), _oio.getSlot458PersonalEffect = void 0;
        var _oir = _oip(74496);
        _oio.getSlot458PersonalEffect = function(_ois) {
            var _oit = null,
                _oiu = new _oir.SlotItemEffectModel(),
                _oiv = 0,
                _oiw = false;
            if (13 != _ois.stype && 14 != _ois.stype || (_oiw = true), 109 == _ois.ctype ? (_oiu.raig += 3, _oiu.kaih += 6, _oiv = 1) : 71 == _ois.ctype || 103 == _ois.ctype ? (_oiu.raig += 3, _oiu.kaih += 4, _oiv = 2) : 44 == _ois.ctype && (_oiu.raig += 3, _oiu.kaih += 3, _oiv = 3), 0 == _oiw && 0 == _oiv) return _oiu;
            var _oix = [];
            [458, 461].forEach(function(_oiy) {
                var _oiz = null,
                    _oj0 = _ois.get_each_level_nums(_oiy);
                null == _oix[_oiy] && (_oix[_oiy] = []), _oj0.forEach(function(_oj1, _oj2) {
                    var _oj3 = null;
                    for (var _oj4 = 1; _oj4 <= _ois.SLOT_LEVEL_MAX; _oj4++) null == _oix[_oiy][_oj4] && (_oix[_oiy][_oj4] = 0), _oj2 >= _oj4 && (_oix[_oiy][_oj4] += _oj1);
                });
            });
            var _oj5 = _oix[458][2],
                _oj6 = _oix[458][3],
                _oj7 = _oix[458][4],
                _oj8 = _oix[458][5],
                _oj9 = _oix[458][6],
                _oja = _oix[458][8],
                _ojb = _oix[458][10],
                _ojc = _oix[461][4];
            return _oiv >= 1 && _oiv <= 3 && (_oj7 >= 1 && (_oiu.houm += 1 * _oj7), _oj9 >= 1 && (_oiu.kaih += 1 * _oj9), _oja >= 1 && (_oiu.raig += 1 * _oja)), _oiw && (_oj6 >= 1 && (_oiu.kaih += 1 * _oj6), _oj8 >= 1 && (_oiu.raig += 1 * _oj8), _ojb >= 1 && (_oiu.houm += 1 * _ojb), _oj5 >= 1 && _ojc >= 1 && (_oiu.raig += 7, _oiu.houm += 5)), _oiu;
        };
    },
    43768: (_ojd, _oje, _ojf) => {
        'use strict';
        var _ojg = null;
        defineModule(_oje);
        Object.defineProperty(_oje, '__esModule', {
            'value': true
        }), _oje.getSlot463PersonalEffect = void 0;
        var _ojh = _ojf(74496);
        _oje.getSlot463PersonalEffect = function(_oji) {
            var _ojj = null,
                _ojk = new _ojh.SlotItemEffectModel(),
                _ojl = false,
                _ojm = new _ojh.SlotItemEffectModel(),
                _ojn = _oji.get_slotnums(142),
                _ojo = _oji.get_slotnums(460),
                _ojp = _ojn + _ojo;
            if (37 == _oji.ctype && (_ojm.houg += 1, _ojm.tyku += 2, _ojm.kaih += 1, _ojm.houm += 1, _ojp >= 1 && (_ojk.tyku += 1, _ojk.kaih += 1, _ojk.houm += 1), _ojl = true), 916 != _oji.ship_id && 911 != _oji.ship_id && 546 != _oji.ship_id || (_ojm.houg += 1, _ojm.kaih += 1, _ojm.houm += 2, _ojo >= 1 && (_ojk.houg += 1, _ojk.kaih += 1, _ojk.houm += 2), _ojl = true), 0 == _ojl) return _ojk;
            var _ojq = _oji.get_slotnums(463);
            return _ojk.add(_ojm.multiply(_ojq)), _ojk;
        };
    },
    92174: (_ojr, _ojs, _ojt) => {
        'use strict';
        var _oju = null;
        defineModule(_ojs);
        Object.defineProperty(_ojs, '__esModule', {
            'value': true
        }), _ojs.getSlot464PersonalEffect = void 0;
        var _ojv = _ojt(74496);
        _ojs.getSlot464PersonalEffect = function(_ojw) {
            var _ojx = null,
                _ojy = new _ojv.SlotItemEffectModel(),
                _ojz = false,
                _ok0 = new _ojv.SlotItemEffectModel(),
                _ok1 = _ojw.get_slotnums(142),
                _ok2 = _ojw.get_slotnums(460),
                _ok3 = _ok1 + _ok2;
            if (37 == _ojw.ctype ? (_ok0.tyku += 3, _ok0.kaih += 2, _ok3 >= 1 && (_ojy.tyku += 2, _ojy.kaih += 1, _ojy.houm += 1), _ojz = true) : 6 != _ojw.ctype && 73 != _ojw.ctype && 113 != _ojw.ctype || (_ok0.tyku = _ok0.tyku - 2, _ok0.kaih = _ok0.kaih - 2, _ojz = true), 916 != _ojw.ship_id && 911 != _ojw.ship_id && 546 != _ojw.ship_id && 593 != _ojw.ship_id && 954 != _ojw.ship_id || (_ok0.tyku += 2, _ok0.kaih += 2, _ok2 >= 1 && (_ojy.houg += 2, _ojy.tyku += 2, _ojy.kaih += 2, _ojy.houm += 3), _ojz = true), 0 == _ojz) return _ojy;
            var _ok4 = _ojw.get_slotnums(464);
            return _ojy.add(_ok0.multiply(_ok4)), _ojy;
        };
    },
    38003: (_ok5, _ok6, _ok7) => {
        'use strict';
        var _ok8 = null;
        defineModule(_ok6);
        Object.defineProperty(_ok6, '__esModule', {
            'value': true
        }), _ok6.getSlot465PersonalEffect = void 0;
        var _ok9 = _ok7(74496);
        _ok6.getSlot465PersonalEffect = function(_oka) {
            var _okb = null,
                _okc = new _ok9.SlotItemEffectModel(),
                _okd = false,
                _oke = new _ok9.SlotItemEffectModel(),
                _okf = _oka.get_slotnums(142),
                _okg = _oka.get_slotnums(460),
                _okh = _okf + _okg;
            if (916 == _oka.ship_id ? (_oke.houg += 2, _oke.kaih += 8, _oke.houm += 2, _okg >= 1 && (_okc.kaih += 2, _okc.houm += 1), _okd = true) : 911 != _oka.ship_id && 546 != _oka.ship_id || (_oke.houg += 1, _oke.kaih += 2, _oke.houm += 1, _okg >= 1 && (_okc.kaih += 1, _okc.houm += 1), _okd = true), 37 == _oka.ctype && _okh >= 1 && (_okc.houg += 2, _okc.houm += 2), 0 == _okd) return _okc;
            var _oki = _oka.get_slotnums(465);
            return _okc.add(_oke.multiply(_oki)), _okc;
        };
    },
    65455: (_okj, _okk, _okl) => {
        'use strict';
        var _okm = null;
        defineModule(_okk);
        Object.defineProperty(_okk, '__esModule', {
            'value': true
        }), _okk.getSlot466PersonalEffect = void 0;
        var _okn = _okl(74496);
        _okk.getSlot466PersonalEffect = function(_oko) {
            var _okp = null,
                _okq = new _okn.SlotItemEffectModel(),
                _okr = false,
                _oks = new _okn.SlotItemEffectModel();
            if (277 == _oko.ship_id || 278 == _oko.ship_id || 156 == _oko.ship_id || 288 == _oko.ship_id || 112 == _oko.ship_id || 280 == _oko.ship_id || 279 == _oko.ship_id ? (_oks.houg += 1, _oks.houm += 1, _okr = true) : 461 == _oko.ship_id || 462 == _oko.ship_id || 466 == _oko.ship_id || 467 == _oko.ship_id ? (_oks.houg += 2, _oks.kaih += 2, _oks.houm += 1, _okr = true) : 594 != _oko.ship_id && 698 != _oko.ship_id && 646 != _oko.ship_id && 599 != _oko.ship_id && 610 != _oko.ship_id && 196 != _oko.ship_id && 197 != _oko.ship_id || (_oks.houg += 1, _oks.kaih += 1, _oks.houm += 2, _okr = true), 0 == _okr) return _okq;
            var _okt = _oko.get_slotnums(466);
            return _okq.add(_oks.multiply(_okt)), _okq;
        };
    },
    70362: (_oku, _okv, _okw) => {
        'use strict';
        var _okx = null;
        defineModule(_okv);
        Object.defineProperty(_okv, '__esModule', {
            'value': true
        }), _okv.getSlot467PersonalEffect = void 0;
        var _oky = _okw(74496);
        _okv.getSlot467PersonalEffect = function(_okz) {
            var _ol0 = null,
                _ol1 = new _oky.SlotItemEffectModel(),
                _ol2 = false,
                _ol3 = new _oky.SlotItemEffectModel();
            if ('アメリカ' == _okz.getCountryName()) {
                for (var _ol4 = _okz.getUSSWaterRaderDict(), _ol5 = _okz.getUSSAirRaderDict(), _ol6 = 0, _ol7 = 0, _ol8 = 0, _ol9 = _okz.have_slot_ids(); _ol8 < _ol9.length; _ol8++) {
                    var _ola = _ol9[_ol8];
                    _ol4[parseInt(_ola)] && (_ol6 += _okz.get_slotnums(parseInt(_ola))), _ol5[parseInt(_ola)] && (_ol7 += _okz.get_slotnums(parseInt(_ola)));
                }
                _ol3.houg += 1, _ol3.tyku += 1, _ol3.kaih += 2, _ol6 >= 1 && (_ol1.houg += 1, _ol1.tyku += 1, _ol1.kaih += 1, _ol1.houm += 2), _ol7 >= 1 && (_ol1.tyku += 2, _ol1.kaih += 2), 65 != _okz.ctype && 93 != _okz.ctype && 102 != _okz.ctype && 107 != _okz.ctype && 125 != _okz.ctype || (_ol3.tyku += 2, _ol3.kaih += 1), _ol2 = true;
            }
            if (0 == _ol2) return _ol1;
            var _olb = _okz.get_slotnums(467);
            return _ol1.add(_ol3.multiply(_olb)), _ol1;
        };
    },
    68086: (_olc, _old, _ole) => {
        'use strict';
        var _olf = null;
        defineModule(_old);
        Object.defineProperty(_old, '__esModule', {
            'value': true
        }), _old.getSlot470PersonalEffect = void 0;
        var _olg = _ole(74496);
        _old.getSlot470PersonalEffect = function(_olh) {
            var _oli = null,
                _olj = new _olg.SlotItemEffectModel(),
                _olk = false,
                _oll = new _olg.SlotItemEffectModel(),
                _olm = _olh.get_slotnums(470),
                _oln = _olh.get_slotnums(529),
                _olo = _olm + _oln,
                _olp = _olh.get_each_level_over_nums([470, 529]),
                _olq = (_olp.slot[470], _olp.slot[529]),
                _olr = _olp.total,
                _ols = 0;
            23 == _olh.ctype || 18 == _olh.ctype ? (_oll.houg += 1, _olk = true, _ols = 1) : 30 == _olh.ctype && (_oll.houg += 2, _olk = true, _ols = 2), ('しぐれ' == _olh.yomi || 'ゆきかぜ' == _olh.yomi || 'いそかぜ' == _olh.yomi) && (_oll.kaih += 2, _olk = true), 405 == _olh.ship_id || 246 == _olh.ship_id || 144 == _olh.ship_id || 145 == _olh.ship_id || 497 == _olh.ship_id ? (_oln >= 1 && (_olj.houg += 1 * _oln, _olj.tyku += 1 * _oln, _olj.houm += 1 * _oln, _olj.kaih += 1 * _oln), 2 == _oln ? _olj.houg += 1 : _oln >= 3 && (_olj.houg += 3), _olq[8] >= 1 && (_olj.tyku += 1 * _olq[8]), _olq[10] >= 1 && (_olj.houg += 1 * _olq[10])) : 323 == _olh.ship_id || 498 == _olh.ship_id || 961 == _olh.ship_id ? (_oln >= 1 && (_olj.houg += 2 * _oln, _olj.tyku += 2 * _oln, _olj.houm += 1 * _oln, _olj.kaih += 1 * _oln), 2 == _oln ? _olj.houg += 2 : _oln >= 3 && (_olj.houg += 4), _olq[6] >= 1 && (_olj.tyku += 1 * _olq[6]), _olq[8] >= 1 && (_olj.houm += 1 * _olq[8]), _olq[10] >= 1 && (_olj.houg += 1 * _olq[10])) : 975 == _olh.ship_id && (_oln >= 1 && (_olj.houg += 3 * _oln, _olj.tyku += 3 * _oln, _olj.houm += 2 * _oln, _olj.kaih += 2 * _oln), 2 == _oln ? _olj.houg += 3 : _oln >= 3 && (_olj.houg += 6), _olq[4] >= 1 && (_olj.tyku += 1 * _olq[4]), _olq[6] >= 1 && (_olj.houg += 1 * _olq[6]), _olq[8] >= 1 && (_olj.houm += 1 * _olq[8]), _olq[10] >= 1 && (_olj.houg += 1 * _olq[10])), 961 == _olh.ship_id && (_oll.houg += 3, _oll.houm += 3, _oll.kaih += 2, _olk = true), 566 != _olh.ship_id && 567 != _olh.ship_id && 568 != _olh.ship_id && 656 != _olh.ship_id && 670 != _olh.ship_id && 915 != _olh.ship_id && 651 != _olh.ship_id && 145 != _olh.ship_id && 961 != _olh.ship_id && 951 != _olh.ship_id || (_olj.houg += 1, _olj.houm += 2, _olo >= 2 && (_olj.houg += 2), _olr[5] >= 1 && (_olj.houm += 1 * _olr[5]), _olr[8] >= 1 && (_olj.houg += 1 * _olr[8]), _olr[10] >= 1 && (_olj.houm += 1 * _olr[10])), _olk && _olj.add(_oll.multiply(_olo));
            var _olt = _olh.get_have_rader_nums(),
                _olu = _olt.water_rader,
                _olv = _olt.air_rader;
            return _olu >= 1 && (1 == _ols ? (_olj.houg += 1, _olj.raig += 3, _olj.kaih += 1, _olj.houm += 1) : 2 == _ols && (_olj.houg += 2, _olj.raig += 3, _olj.kaih += 1, _olj.houm += 3)), _olv >= 1 && (_oln >= 1 && (_olj.tyku += 2, _olj.kaih += 2), 2 == _oln ? _olj.tyku += 2 : _oln >= 3 && (_olj.tyku += 4)), _olj;
        };
    },
    78173: (_olw, _olx, _oly) => {
        'use strict';
        var _olz = null;
        defineModule(_olx);
        Object.defineProperty(_olx, '__esModule', {
            'value': true
        }), _olx.getSlot471PersonalEffect = void 0;
        var _om0 = _oly(74496);
        _olx.getSlot471PersonalEffect = function(_om1) {
            var _om2 = null,
                _om3 = new _om0.SlotItemEffectModel(),
                _om4 = false,
                _om5 = new _om0.SlotItemEffectModel(),
                _om6 = 0;
            if ('フランス' == _om1.getCountryName() && (_om5.houg += 2, _om5.kaih += 2, _om5.houm += 2, _om4 = true, _om6 = 1), 79 == _om1.ctype && (_om5.houg += 2, _om5.houm += 1, _om4 = true), 0 == _om4) return _om3;
            var _om7 = _om1.get_slotnums(471);
            if (_om3.add(_om5.multiply(_om7)), 0 == _om6) return _om3;
            var _om8 = _om1.get_each_level_nums(471),
                _om9 = 0,
                _oma = 0;
            if (_om6 > 0 && _om8.forEach(function(_omb, _omc) {
                    _omc >= 6 && (_om9 += _omb), _omc >= 8 && (_oma += _omb);
                }), 1 == _om6) {
                _om9 >= 1 && (_om3.kaih += 1 * _om9, _om3.houm += 1 * _om9), _oma >= 1 && (_om3.houg += 1 * _oma, _om3.kaih += 1 * _oma, _om3.houm += 1 * _oma);
                var _omd = _om8[10];
                _omd >= 1 && (_om3.houg += 1 * _omd, _om3.houm += 1 * _omd);
            }
            return _om3;
        };
    },
    22581: (_ome, _omf, _omg) => {
        'use strict';
        var _omh = null;
        defineModule(_omf);
        Object.defineProperty(_omf, '__esModule', {
            'value': true
        }), _omf.getSlot472PersonalEffect = void 0;
        var _omi = _omg(74496);
        _omf.getSlot472PersonalEffect = function(_omj) {
            var _omk = null,
                _oml = new _omi.SlotItemEffectModel(),
                _omm = false,
                _omn = new _omi.SlotItemEffectModel(),
                _omo = _omj.getCountryName();
            if ('アメリカ' == _omo && (_omn.tais += 2, _omm = true), 'イギリス' == _omo && (_omn.tais += 1, _omm = true), 1 == _omj.stype && (_omn.kaih += 1, _omm = true), _omm) {
                var _omp = _omj.get_slotnums(472);
                _oml.add(_omn.multiply(_omp));
            }
            return 920 == _omj.ship_id && (_oml.tais += 1, _oml.kaih += 1, _oml.houm += 1), _oml;
        };
    },
    13053: (_omq, _omr, _oms) => {
        'use strict';
        var _omt = null;
        defineModule(_omr);
        Object.defineProperty(_omr, '__esModule', {
            'value': true
        }), _omr.getSlot473PersonalEffect = void 0;
        var _omu = _oms(74496);
        _omr.getSlot473PersonalEffect = function(_omv) {
            var _omw = null,
                _omx = new _omu.SlotItemEffectModel(),
                _omy = false,
                _omz = new _omu.SlotItemEffectModel(),
                _on0 = _omv.getCountryName();
            if ('アメリカ' == _on0 && (_omz.houg += 1, _omz.kaih += 1, _omz.tyku += 1, _omy = true), 'イギリス' == _on0 && (_omz.houg += 1, _omz.kaih += 1, _omy = true), 0 == _omy) return _omx;
            var _on1 = _omv.get_slotnums(473);
            return _omx.add(_omz.multiply(_on1)), _omx;
        };
    },
    47874: (_on2, _on3, _on4) => {
        'use strict';
        var _on5 = null;
        defineModule(_on3);
        Object.defineProperty(_on3, '__esModule', {
            'value': true
        }), _on3.getSlot474PersonalEffect = void 0;
        var _on6 = _on4(74496);
        _on3.getSlot474PersonalEffect = function(_on7) {
            var _on8 = null,
                _on9 = new _on6.SlotItemEffectModel(),
                _ona = false,
                _onb = new _on6.SlotItemEffectModel(),
                _onc = _on7.getCountryName();
            if ('アメリカ' == _onc && (_onb.houg += 2, _onb.kaih += 1, _onb.tyku += 1, _ona = true), 'イギリス' == _onc && (_onb.houg += 1, _onb.kaih += 1, _onb.tyku += 1, _ona = true), 'フランス' == _onc && (_onb.houg += 1, _onb.tyku += 1, _ona = true), 707 != _on7.ship_id && 930 != _on7.ship_id || (_onb.houg += 1, _onb.kaih += 1, _ona = true), 0 == _ona) return _on9;
            var _ond = _on7.get_slotnums(474);
            return _on9.add(_onb.multiply(_ond)), _on9;
        };
    },
    42788: (_one, _onf, _ong) => {
        'use strict';
        var _onh = null;
        defineModule(_onf);
        Object.defineProperty(_onf, '__esModule', {
            'value': true
        }), _onf.getSlot478PersonalEffect = void 0;
        var _oni = _ong(74496);
        _onf.getSlot478PersonalEffect = function(_onj) {
            var _onk = null,
                _onl = new _oni.SlotItemEffectModel(),
                _onm = _onj.get_each_level_nums(478),
                _onn = [];
            return _onm.forEach(function(_ono, _onp) {
                var _onq = null;
                for (var _onr = 1; _onr <= _onj.SLOT_LEVEL_MAX; _onr++) _onp >= _onr && (null == _onn[_onr] && (_onn[_onr] = 0), _onn[_onr] += _ono);
            }), _onn.every(function(_ons) {
                return 0 == _ons;
            }) || (_onn[1] >= 1 && (_onl.houg += 1), _onn[2] >= 1 && (_onl.houm += 1), _onn[3] >= 1 && (_onl.kaih += 1), _onn[4] >= 1 && (_onl.baku += 1), _onn[5] >= 1 && (_onl.raig += 1), _onn[6] >= 1 && (_onl.tyku += 1), _onn[7] >= 1 && (_onl.houg += 1), _onn[8] >= 1 && (_onl.houm += 1), _onn[9] >= 1 && (_onl.kaih += 1), _onn[10] >= 1 && (_onl.houg += 1)), _onl;
        };
    },
    22218: (_ont, _onu, _onv) => {
        'use strict';
        var _onw = null;
        defineModule(_onu);
        Object.defineProperty(_onu, '__esModule', {
            'value': true
        }), _onu.getSlot47PersonalEffect = void 0;
        var _onx = _onv(74496);
        _onu.getSlot47PersonalEffect = function(_ony) {
            var _onz = null,
                _oo0 = new _onx.SlotItemEffectModel(),
                _oo1 = new _onx.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_ony.yomi) >= 0 ? (_oo1.tais += 3, _oo1.kaih += 2, _oo1.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_ony.yomi) >= 0 && (_oo1.tais += 2, _oo1.kaih += 2), !_oo1.exists()) return _oo0;
            var _oo2 = _ony.get_slotnums(47) + _ony.get_slotnums(438);
            return _oo0 = _oo1.multiply(_oo2);
        };
    },
    57664: (_oo3, _oo4, _oo5) => {
        'use strict';
        var _oo6 = null;
        defineModule(_oo4);
        Object.defineProperty(_oo4, '__esModule', {
            'value': true
        }), _oo4.getSlot483PersonalEffect = void 0;
        var _oo7 = _oo5(74496);
        _oo4.getSlot483PersonalEffect = function(_oo8) {
            var _oo9 = null,
                _ooa = new _oo7.SlotItemEffectModel(),
                _oob = 0,
                _ooc = 0,
                _ood = 0,
                _ooe = 0,
                _oof = 0,
                _oog = 0,
                _ooh = 0;
            if (6 == _oo8.ctype ? (_ooa.houg += 2, _ooa.tyku += 3, _ooa.houm += 1, _oob = 1) : 2 == _oo8.ctype ? (_ooa.houg += 1, _ooa.tyku += 2, _ooa.kaih += 2, _ooa.houm += 1, _ooc = 1) : 37 == _oo8.ctype && (_ood = 1), 8 == _oo8.stype || 9 == _oo8.stype || 10 == _oo8.stype ? _ooe = 1 : 5 != _oo8.stype && 6 != _oo8.stype || (_oof = 1), 149 == _oo8.ship_id ? (_ooa.houg += 2, _ooa.tyku += 2) : 591 == _oo8.ship_id ? (_ooa.houg += 3, _ooa.tyku += 3, _ooa.kaih += 1) : 150 == _oo8.ship_id ? (_ooa.houg += 1, _ooa.tyku += 1) : 592 == _oo8.ship_id ? (_ooa.houg += 2, _ooa.tyku += 2, _ooa.kaih += 2) : 151 == _oo8.ship_id ? (_ooa.houg += 1, _ooa.tyku += 2, _ooa.kaih += 2) : 593 == _oo8.ship_id ? (_ooa.houg += 2, _ooa.tyku += 5, _ooa.kaih += 3) : 954 == _oo8.ship_id ? (_ooa.houg += 2, _ooa.tyku += 4, _ooa.kaih += 2) : 694 == _oo8.ship_id ? (_ooa.houg += 3, _ooa.tyku += 2, _ooa.kaih += 1) : 152 == _oo8.ship_id ? (_ooa.houg += 2, _ooa.tyku += 2) : 911 == _oo8.ship_id || 916 == _oo8.ship_id || 546 == _oo8.ship_id ? (_ooa.houg += 2, _ooa.tyku += 2, _ooa.kaih += 2, _oog = 1) : 553 == _oo8.ship_id || 554 == _oo8.ship_id ? (_ooa.houg += 1, _ooa.tyku += 2, _ooa.kaih += 1, _ooh = 1) : 541 == _oo8.ship_id || 411 == _oo8.ship_id || 412 == _oo8.ship_id ? (_ooa.houg += 1, _ooa.tyku += 2) : 573 == _oo8.ship_id && (_ooa.houg += 2, _ooa.tyku += 2, _ooa.kaih += 1), 0 == [_oob, _ooc, _ood, _ooe, _oof, _oog, _ooh].reduce(function(_ooi, _ooj) {
                    return _ooi + _ooj;
                }, 0)) return _ooa;
            var _ook = _oo8.get_each_level_nums(483),
                _ool = 0,
                _oom = [];
            return _ook.forEach(function(_oon, _ooo) {
                var _oop = null;
                _ooo >= 6 && (_ool += _oon);
                for (var _ooq = 1; _ooq <= _oo8.SLOT_LEVEL_MAX; _ooq++) null == _oom[_ooq] && (_oom[_ooq] = 0), _ooo >= _ooq && (_oom[_ooq] += _oon);
            }), 1 == _oob ? (_ool >= 1 && (_ooa.houm += 1), _ook[10] >= 1 && (_ooa.houm += 1)) : 1 == _ooc ? (_oom[5] >= 1 && (_ooa.kaih += 1), _oom[6] >= 1 && (_ooa.houm += 1), _oom[10] >= 1 && (_ooa.kaih += 1)) : 1 == _ood && (_oom[6] >= 1 && (_ooa.houm += 1), _oom[10] >= 1 && (_ooa.kaih += 1)), 1 == _ooe ? (_oom[2] >= 1 && (_ooa.tyku += 1), _oom[4] >= 1 && (_ooa.houg += 1), _oom[7] >= 1 && (_ooa.kaih += 1), _oom[8] >= 1 && (_ooa.tyku += 1), _oom[9] >= 1 && (_ooa.houg += 1)) : 1 == _oof && (_oom[2] >= 1 && (_ooa.tyku += 1), _oom[4] >= 1 && (_ooa.houg += 1), _oom[6] >= 1 && (_ooa.kaih += 1), _oom[8] >= 1 && (_ooa.houm += 1), _oom[10] >= 1 && (_ooa.houg += 1)), 1 == _oog ? _oom[5] >= 1 && (_ooa.houm += 1) : 1 == _ooh && (_oom[1] >= 1 && (_ooa.houm += 1), _oom[3] >= 1 && (_ooa.houm += 1)), _ooa;
        };
    },
    44990: (_oor, _oos, _oot) => {
        'use strict';
        var _oou = null;
        defineModule(_oos);
        Object.defineProperty(_oos, '__esModule', {
            'value': true
        }), _oos.getSlot485PersonalEffect = void 0;
        var _oov = _oot(74496);
        _oos.getSlot485PersonalEffect = function(_oow) {
            var _oox = null,
                _ooy = new _oov.SlotItemEffectModel(),
                _ooz = false,
                _op0 = new _oov.SlotItemEffectModel();
            if (9 == _oow.ctype && (_op0.houg += 1, _op0.kaih += 2, _op0.tyku += 3, _ooz = true), 501 == _oow.ship_id || 506 == _oow.ship_id ? (_op0.kaih += 1, _op0.tyku += 2, _op0.houm += 1, _ooz = true) : 502 != _oow.ship_id && 507 != _oow.ship_id || (_op0.kaih += 1, _op0.tyku += 1, _op0.houm += 1, _ooz = true), _ooz) {
                var _op1 = _oow.get_slotnums(485);
                _ooy.add(_op0.multiply(_op1));
            }
            var _op2 = _oow.get_each_level_nums(485),
                _op3 = 0,
                _op4 = 0,
                _op5 = 0,
                _op6 = _op2[10];
            return _op2.forEach(function(_op7, _op8) {
                _op8 >= 3 && (_op3 += _op7), _op8 >= 5 && (_op4 += _op7), _op8 >= 7 && (_op5 += _op7);
            }), _op3 > 0 && (_ooy.houg += 1 * _op3), _op4 > 0 && (_ooy.tyku += 1 * _op4), _op5 > 0 && (_ooy.kaih += 1 * _op5), _op6 > 0 && (_ooy.houm += 1 * _op6), _ooy;
        };
    },
    83957: (_op9, _opa, _opb) => {
        'use strict';
        var _opc = null;
        defineModule(_opa);
        Object.defineProperty(_opa, '__esModule', {
            'value': true
        }), _opa.getSlot486PersonalEffect = void 0;
        var _opd = _opb(74496);
        _opa.getSlot486PersonalEffect = function(_ope) {
            var _opf = null,
                _opg = new _opd.SlotItemEffectModel(),
                _oph = false,
                _opi = new _opd.SlotItemEffectModel();
            if (894 == _ope.ship_id || 899 == _ope.ship_id ? (_opi.houg += 4, _opi.tyku += 4, _opi.kaih += 3, _opi.houm += 2, _oph = true) : 888 != _ope.ship_id && 883 != _ope.ship_id || (_opi.houg += 2, _opi.tyku += 2, _opi.kaih += 2, _opi.houm += 1, _oph = true), _oph) {
                var _opj = _ope.get_slotnums(486);
                _opg.add(_opi.multiply(_opj));
            }
            var _opk = _ope.get_each_level_nums(486),
                _opl = 0,
                _opm = 0,
                _opn = _opk[10];
            return _opk.forEach(function(_opo, _opp) {
                _opp >= 6 && (_opl += _opo), _opp >= 8 && (_opm += _opo);
            }), _opl > 0 && (_opg.kaih += 1 * _opl, _opg.houm += 1 * _opl), _opm > 0 && (_opg.tyku += 1 * _opm, _opg.kaih += 1 * _opm), _opn > 0 && (_opg.houg += 1 * _opn, _opg.houm += 1 * _opn), _opg;
        };
    },
    78539: (_opq, _opr, _ops) => {
        'use strict';
        var _opt = null;
        defineModule(_opr);
        Object.defineProperty(_opr, '__esModule', {
            'value': true
        }), _opr.getSlot487PersonalEffect = void 0;
        var _opu = _ops(74496);
        _opr.getSlot487PersonalEffect = function(_opv) {
            var _opw = null,
                _opx = new _opu.SlotItemEffectModel(),
                _opy = false,
                _opz = new _opu.SlotItemEffectModel();
            if (894 == _opv.ship_id || 899 == _opv.ship_id ? (_opz.houg += 5, _opz.tyku += 3, _opz.kaih += 2, _opz.houm += 4, _opy = true) : 888 != _opv.ship_id && 883 != _opv.ship_id || (_opz.houg += 3, _opz.tyku += 1, _opz.kaih += 1, _opz.houm += 2, _opy = true), _opy) {
                var _oq0 = _opv.get_slotnums(487);
                _opx.add(_opz.multiply(_oq0));
            }
            var _oq1 = _opv.get_each_level_nums(487),
                _oq2 = 0,
                _oq3 = 0,
                _oq4 = _oq1[10];
            return _oq1.forEach(function(_oq5, _oq6) {
                _oq6 >= 6 && (_oq2 += _oq5), _oq6 >= 8 && (_oq3 += _oq5);
            }), _oq2 > 0 && (_opx.houg += 1 * _oq2, _opx.kaih += 1 * _oq2), _oq3 > 0 && (_opx.tyku += 1 * _oq3, _opx.houm += 1 * _oq3), _oq4 > 0 && (_opx.houg += 1 * _oq4, _opx.houm += 1 * _oq4), _opx;
        };
    },
    96282: (_oq7, _oq8, _oq9) => {
        'use strict';
        var _oqa = null;
        defineModule(_oq8);
        Object.defineProperty(_oq8, '__esModule', {
            'value': true
        }), _oq8.getSlot488PersonalEffect = void 0;
        var _oqb = _oq9(74496);
        _oq8.getSlot488PersonalEffect = function(_oqc) {
            var _oqd = null,
                _oqe = new _oqb.SlotItemEffectModel(),
                _oqf = false,
                _oqg = new _oqb.SlotItemEffectModel(),
                _oqh = 0,
                _oqi = _oqc.getCountryName(),
                _oqj = {
                    145: 1,
                    961: 1,
                    557: 2,
                    558: 2,
                    228: 2,
                    656: 2,
                    651: 2,
                    243: 2,
                    412: 3,
                    411: 3,
                    419: 3,
                    235: 3,
                    407: 3,
                    538: 3,
                    537: 3,
                    663: 3,
                    668: 3,
                    43: 3
                }[_oqc.ship_id];
            if (('日本' == _oqi && 2 == _oqc.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_oqc.ctype] && 1 == _oqc.stype) && (_oqg.tais += 1, _oqg.kaih += 1, _oqf = true), 1 == _oqj ? (_oqg.tais += 5, _oqg.kaih += 4, _oqg.houm += 2, _oqf = true, _oqh = 1) : 2 == _oqj ? (_oqg.tais += 2, _oqg.kaih += 1, _oqg.houm += 1, _oqf = true, _oqh = 2) : 3 == _oqj && (_oqg.tais += 1, _oqf = true, _oqh = 2), 0 == _oqf) return _oqe;
            var _oqk = _oqc.get_slotnums(488);
            if (_oqe.add(_oqg.multiply(_oqk)), 0 == _oqh) return _oqe;
            var _oql = _oqc.get_each_level_nums(488),
                _oqm = [];
            return _oql.forEach(function(_oqn, _oqo) {
                var _oqp = null;
                for (var _oqq = 1; _oqq <= _oqc.SLOT_LEVEL_MAX; _oqq++) _oqo >= _oqq && (null == _oqm[_oqq] && (_oqm[_oqq] = 0), _oqm[_oqq] += _oqn);
            }), 1 == _oqh ? (_oqm[3] >= 1 && (_oqe.kaih += 1 * _oqm[3]), _oqm[5] >= 1 && (_oqe.tais += 1 * _oqm[5]), _oqm[7] >= 1 && (_oqe.houm += 1 * _oqm[7]), _oqm[8] >= 1 && (_oqe.kaih += 1 * _oqm[8]), _oqm[9] >= 1 && (_oqe.tais += 1 * _oqm[9]), _oqm[10] >= 1 && (_oqe.tais += 1 * _oqm[10])) : 2 == _oqh && (_oqm[5] >= 1 && (_oqe.tais += 1 * _oqm[5]), _oqm[7] >= 1 && (_oqe.kaih += 1 * _oqm[7]), _oqm[9] >= 1 && (_oqe.houm += 1 * _oqm[9]), _oqm[10] >= 1 && (_oqe.tais += 1 * _oqm[10])), _oqe;
        };
    },
    49679: (_oqr, _oqs, _oqt) => {
        'use strict';
        var _oqu = null;
        defineModule(_oqs);
        Object.defineProperty(_oqs, '__esModule', {
            'value': true
        }), _oqs.getSlot489PersonalEffect = void 0;
        var _oqv = _oqt(74496);
        _oqs.getSlot489PersonalEffect = function(_oqw) {
            var _oqx = null,
                _oqy = new _oqv.SlotItemEffectModel(),
                _oqz = false,
                _or0 = new _oqv.SlotItemEffectModel();
            if ('あきつまる' != _oqw.yomi && 'やましおまる' != _oqw.yomi && 'くまのまる' != _oqw.yomi || (_or0.tyku = _or0.tyku + 2, _or0.kaih = _or0.kaih + 1, _or0.houg = _or0.houg + 1, _or0.tais = _or0.tais + 1, _or0.houm = _or0.houm + 1, _oqz = true), 717 != _oqw.ship_id && 948 != _oqw.ship_id || (_or0.tyku = _or0.tyku + 2, _or0.kaih = _or0.kaih + 2, _or0.houg = _or0.houg + 2, _or0.tais = _or0.tais + 1, _or0.houm = _or0.houm + 1, _oqz = true), _oqz) {
                var _or1 = _oqw.get_slotnums(489) + _oqw.get_slotnums(491);
                _oqy.add(_or0.multiply(_or1));
            }
            var _or2 = _oqw.get_each_level_nums(489),
                _or3 = _oqw.get_each_level_nums(491),
                _or4 = 0,
                _or5 = 0,
                _or6 = 0;
            _or2.forEach(function(_or7, _or8) {
                _or8 >= 3 && (_or4 += _or7), _or8 >= 6 && (_or5 += _or7), _or8 >= 8 && (_or6 += _or7);
            }), _or3.forEach(function(_or9, _ora) {
                _ora >= 3 && (_or4 += _or9), _ora >= 6 && (_or5 += _or9), _ora >= 8 && (_or6 += _or9);
            });
            var _orb = _or2[10] + _or3[10];
            return _or4 >= 1 && (_oqy.kaih = _oqy.kaih + 1 * _or4), _or5 >= 1 && (_oqy.tais = _oqy.tais + 1 * _or5), _or6 >= 1 && (_oqy.houm = _oqy.houm + 1 * _or6), _orb >= 1 && (_oqy.houg = _oqy.houg + 1 * _orb), _oqy;
        };
    },
    90312: function(_orc, _ord, _ore) {
        'use strict';
        var _orf = null;
        var _org = this && this.__importDefault || function(_orh) {
            var _ori = null;
            return _orh && _orh.__esModule ? _orh : {
                'default': _orh
            };
        };
        defineModule(_ord);
        Object.defineProperty(_ord, '__esModule', {
            'value': true
        }), _ord.getSlot502PersonalEffect = void 0;
        var _orj = _ore(74496),
            _ork = _org(_ore(18622));
        _ord.getSlot502PersonalEffect = function(_orl) {
            var _orm = null,
                _orn = new _orj.SlotItemEffectModel(),
                _oro = _orl.get_slotnums(502),
                _orp = {
                    149: 2,
                    591: 2,
                    150: 1,
                    592: 1,
                    152: 1,
                    694: 1,
                    151: 2,
                    593: 5,
                    954: 3
                },
                _orq = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3,
                    694: 1
                },
                _orr = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    150: 3,
                    592: 3,
                    149: 3,
                    152: 3,
                    694: 3
                },
                _ors = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _ort = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_orp[_orl.ship_id]) {
                var _oru = _orp[_orl.ship_id];
                _orn.houg += _oro * _oru;
            }
            if (_orq[_orl.ship_id]) {
                var _orv = _orq[_orl.ship_id];
                _orn.tyku += _oro * _orv;
            }
            if (_orr[_orl.ship_id]) {
                var _orw = _orr[_orl.ship_id],
                    _orx = _orl.get_each_level_nums(502),
                    _ory = [];
                _orx.forEach(function(_orz, _os0) {
                    var _os1 = null;
                    for (var _os2 = 1; _os2 <= _orl.SLOT_LEVEL_MAX; _os2++) _os0 >= _os2 && (null == _ory[_os2] && (_ory[_os2] = 0), _ory[_os2] += _orz);
                }), 1 == _orw ? (_orn.kaih += 3 * _oro, _ory[1] > 0 && (_orn.kaih += 1 * _ory[1]), _ory[3] > 0 && (_orn.tyku += 1 * _ory[3]), _ory[5] > 0 && (_orn.houg += 1 * _ory[5]), _ory[7] > 0 && (_orn.kaih += 1 * _ory[7]), _ory[8] > 0 && (_orn.tyku += 1 * _ory[8]), _ory[9] > 0 && (_orn.houg += 1 * _ory[9]), _ory[10] > 0 && (_orn.tyku += 1 * _ory[10])) : 2 == _orw ? (_orn.kaih += 1 * _oro, _ory[2] > 0 && 151 == _orl.ship_id && (_orn.kaih += 1 * _ory[2]), _ory[4] > 0 && (_orn.tyku += 1 * _ory[4]), _ory[6] > 0 && (_orn.houg += 1 * _ory[6]), _ory[8] > 0 && (_orn.kaih += 1 * _ory[8]), _ory[10] > 0 && (_orn.tyku += 1 * _ory[10])) : 3 == _orw && (_ory[5] > 0 && (_orn.kaih += 1 * _ory[5]), _ory[8] > 0 && (_orn.houg += 1 * _ory[8]), _ory[10] > 0 && (_orn.tyku += 1 * _ory[10]));
            }
            if (_ors[_orl.ship_id]) {
                for (var _os3 = 0, _os4 = 0, _os5 = _orl.have_slot_ids(); _os4 < _os5.length; _os4++) {
                    var _os6 = _os5[_os4],
                        _os7 = _ork.default.model.slot.getMst(_os6),
                        _os8 = _os7.equipType;
                    12 != _os8 && 13 != _os8 || (_os7.sakuteki >= 5 && (_os3 += _orl.get_slotnums(parseInt(_os6))), _os7.taiku >= 2 && _orl.get_slotnums(parseInt(_os6)));
                }
                0;
                var _os9 = _ors[_orl.ship_id];
                1 == _os9 && _os3 >= 1 ? (_orn.houg += 3, _orn.kaih += 4) : 2 == _os9 && _os3 >= 1 && (_orn.houg += 2, _orn.kaih += 2);
            }
            if (_ort[_orl.ship_id]) {
                var _osa = _ort[_orl.ship_id],
                    _osb = [],
                    _osc = [],
                    _osd = _orl.have_slot_ids();
                [410, 411].forEach(function(_ose) {
                    var _osf = null;
                    _osd.indexOf(_ose.toString()) > -1 && (_osc[_ose] = _orl.get_each_level_nums(_ose), null == _osb[_ose] && (_osb[_ose] = []), _osc[_ose].forEach(function(_osg, _osh) {
                        var _osi = null;
                        for (var _osj = 1; _osj <= _orl.SLOT_LEVEL_MAX; _osj++) null == _osb[_ose][_osj] && (_osb[_ose][_osj] = 0), _osh >= _osj && (_osb[_ose][_osj] += _osg);
                    }));
                });
                var _osk = _osc[410],
                    _osl = _osc[411];
                if (1 == _osa) {
                    if (_osk) {
                        _orn.tyku += 1;
                        var _osm = _osb[410];
                        _osm[7] >= 1 && (_orn.houg += 1), _osm[10] >= 1 && (_orn.kaih += 1);
                    }
                    if (_osl) {
                        _orn.tyku += 2;
                        var _osn = _osb[411];
                        _osn[2] >= 1 && (_orn.houg += 1), _osn[4] >= 1 && (_orn.kaih += 1), _osn[6] >= 1 && (_orn.houm += 1), _osn[8] >= 1 && (_orn.tyku += 1), _osn[10] >= 1 && (_orn.houg += 1);
                    }
                }
            }
            return _orn;
        };
    },
    86856: function(_oso, _osp, _osq) {
        'use strict';
        var _osr = null;
        var _oss = this && this.__importDefault || function(_ost) {
            var _osu = null;
            return _ost && _ost.__esModule ? _ost : {
                'default': _ost
            };
        };
        defineModule(_osp);
        Object.defineProperty(_osp, '__esModule', {
            'value': true
        }), _osp.getSlot503PersonalEffect = void 0;
        var _osv = _osq(74496),
            _osw = _oss(_osq(18622));
        _osp.getSlot503PersonalEffect = function(_osx) {
            var _osy = null,
                _osz = new _osv.SlotItemEffectModel(),
                _ot0 = _osx.get_slotnums(503),
                _ot1 = {
                    149: 2,
                    150: 2,
                    151: 2,
                    152: 2,
                    591: 3,
                    592: 3,
                    593: 4,
                    954: 4,
                    694: 4
                },
                _ot2 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    694: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _ot3 = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    149: 3,
                    150: 3,
                    152: 3,
                    694: 4
                },
                _ot4 = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2,
                    694: 2
                },
                _ot5 = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1,
                    694: 1
                },
                _ot6 = {
                    591: 1,
                    592: 2,
                    593: 2,
                    694: 2,
                    954: 3
                };
            if (_ot1[_osx.ship_id]) {
                var _ot7 = _ot1[_osx.ship_id];
                _osz.houg += _ot0 * _ot7;
            }
            if (_ot2[_osx.ship_id]) {
                var _ot8 = _ot2[_osx.ship_id];
                _osz.tyku += _ot0 * _ot8;
            }
            if (_ot3[_osx.ship_id]) {
                var _ot9 = _ot3[_osx.ship_id],
                    _ota = _osx.get_each_level_nums(503),
                    _otb = [];
                _ota.forEach(function(_otc, _otd) {
                    var _ote = null;
                    for (var _otf = 1; _otf <= _osx.SLOT_LEVEL_MAX; _otf++) _otd >= _otf && (null == _otb[_otf] && (_otb[_otf] = 0), _otb[_otf] += _otc);
                }), 1 == _ot9 ? (_osz.houm += 2 * _ot0, _otb[1] > 0 && (_osz.houg += 1 * _otb[1]), _otb[2] > 0 && (_osz.tyku += 1 * _otb[2]), _otb[4] > 0 && (_osz.houm += 1 * _otb[4]), _otb[6] > 0 && (_osz.houg += 1 * _otb[6]), _otb[8] > 0 && (_osz.tyku += 1 * _otb[8]), _otb[10] > 0 && (_osz.houm += 1 * _otb[10])) : 2 == _ot9 ? (_osz.houm += 1 * _ot0, _otb[2] > 0 && (_osz.houg += 1 * _otb[2]), _otb[4] > 0 && (_osz.tyku += 1 * _otb[4]), _otb[6] > 0 && (_osz.houm += 1 * _otb[6]), _otb[8] > 0 && (_osz.houg += 1 * _otb[8]), _otb[10] > 0 && (_osz.houm += 1 * _otb[10])) : 3 == _ot9 ? (_otb[4] > 0 && (_osz.houm += 1 * _otb[4]), _otb[7] > 0 && (_osz.houg += 1 * _otb[7]), _otb[10] > 0 && (_osz.tyku += 1 * _otb[10])) : 4 == _ot9 && (_osz.houm += 1 * _ot0, _otb[1] > 0 && (_osz.houg += 1 * _otb[1]), _otb[2] > 0 && (_osz.houg += 1 * _otb[2]), _otb[4] > 0 && (_osz.houm += 1 * _otb[4]), _otb[6] > 0 && (_osz.houg += 1 * _otb[6]), _otb[8] > 0 && (_osz.tyku += 1 * _otb[8]), _otb[10] > 0 && (_osz.houm += 1 * _otb[10]));
            }
            var _otg = 0;
            _ot4[_osx.ship_id] && (_otg = _ot4[_osx.ship_id]);
            var _oth = 0;
            _ot6[_osx.ship_id] && (_oth = _ot6[_osx.ship_id]);
            var _oti = 0,
                _otj = 0,
                _otk = _osx.have_slot_ids();
            if (_otg + _oth > 0)
                for (var _otl = 0, _otm = _otk; _otl < _otm.length; _otl++) {
                    var _otn = _otm[_otl],
                        _oto = _osw.default.model.slot.getMst(_otn),
                        _otp = _oto.equipType;
                    12 != _otp && 13 != _otp || (_oto.sakuteki >= 5 && (_oti += _osx.get_slotnums(parseInt(_otn))), _oto.taiku >= 2 && _osx.get_slotnums(parseInt(_otn)), _oto.meichu >= 8 && (_otj += _osx.get_slotnums(parseInt(_otn))));
                }
            1 == _otg ? _oti >= 1 && (_osz.houg += 3, _osz.houm += 3, _osz.kaih += 2) : 2 == _otg && _oti >= 1 && (_osz.houg += 2, _osz.houm += 2, _osz.kaih += 1);
            var _otq = 0,
                _otr = [],
                _ots = [];
            if (_ot5[_osx.ship_id]) {
                _otq = _ot5[_osx.ship_id];
                var _ott = _osx.have_slot_ids();
                [174].forEach(function(_otu) {
                    var _otv = null;
                    _ott.indexOf(_otu.toString()) > -1 && (_ots[_otu] = _osx.get_each_level_nums(_otu), null == _otr[_otu] && (_otr[_otu] = []), _ots[_otu].forEach(function(_otw, _otx) {
                        var _oty = null;
                        for (var _otz = 1; _otz <= _osx.SLOT_LEVEL_MAX; _otz++) null == _otr[_otu][_otz] && (_otr[_otu][_otz] = 0), _otx >= _otz && (_otr[_otu][_otz] += _otw);
                    }));
                });
            }
            if (_otq > 0) {
                var _ou0 = _ots[174];
                if (1 == _otq && _ou0) {
                    var _ou1 = _otr[174];
                    _osz.raig += 4, _ou1[6] >= 1 && (_osz.raig += 1), _ou1[8] >= 1 && (_osz.houm += 1), _ou1[10] >= 1 && (_osz.houg += 1);
                }
            }
            return _otj > 0 && (_oth >= 1 && _oth <= 3 && (_osz.houg += 2, _osz.houm += 2, _osz.kaih += 2), 1 == _oth ? _osz.houg += 1 : 3 == _oth && (_osz.houg += 2)), _osz;
        };
    },
    78123: function(_ou2, _ou3, _ou4) {
        'use strict';
        var _ou5 = null;
        var _ou6 = this && this.__importDefault || function(_ou7) {
            var _ou8 = null;
            return _ou7 && _ou7.__esModule ? _ou7 : {
                'default': _ou7
            };
        };
        defineModule(_ou3);
        Object.defineProperty(_ou3, '__esModule', {
            'value': true
        }), _ou3.getSlot505PersonalEffect = void 0;
        var _ou9 = _ou4(74496),
            _oua = _ou6(_ou4(18622));
        _ou3.getSlot505PersonalEffect = function(_oub) {
            var _ouc = null,
                _oud = new _ou9.SlotItemEffectModel(),
                _oue = false,
                _ouf = new _ou9.SlotItemEffectModel();
            if (2 == _oub.stype ? (_ouf.houg += 1, _ouf.tyku += 2, _ouf.kaih += 2, _oue = true) : 1 == _oub.stype ? (_ouf.houg += 1, _ouf.tyku += 1, _ouf.kaih += 1, _oue = true) : 3 == _oub.stype || 21 == _oub.stype || 4 == _oub.stype ? (_ouf.tyku += 1, _ouf.kaih += 2, _oue = true) : 5 != _oub.stype && 6 != _oub.stype && 16 != _oub.stype || (_ouf.tyku += 1, _ouf.kaih += 1, _oue = true), _oue) {
                var _oug = _oub.get_slotnums(505);
                _oud.add(_ouf.multiply(_oug));
            }
            var _ouh = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    668: 2,
                    951: 2,
                    975: 2,
                    498: 3,
                    144: 3,
                    242: 3,
                    243: 3,
                    228: 3,
                    651: 3,
                    244: 4,
                    245: 4,
                    323: 4,
                    557: 5,
                    558: 5,
                    578: 5,
                    419: 5,
                    464: 5,
                    470: 5,
                    407: 5,
                    235: 5,
                    147: 5,
                    955: 5,
                    960: 5
                },
                _oui = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2
                },
                _ouj = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _ouh[_oub.ship_id] ? (_oud.houg += 2, _oud.tyku += 3, _oud.kaih += 4) : 2 == _ouh[_oub.ship_id] ? (_oud.houg += 1, _oud.tyku += 2, _oud.kaih += 3) : 3 == _ouh[_oub.ship_id] ? (_oud.tyku += 2, _oud.kaih += 2) : 4 == _ouh[_oub.ship_id] ? (_oud.tyku += 1, _oud.kaih += 2) : 5 == _ouh[_oub.ship_id] && (_oud.houg += 1, _oud.tyku += 1, _oud.kaih += 1);
            var _ouk = 0;
            if (_oui[_oub.ship_id] && _ouk++, _ouj[_oub.ship_id] && _ouk++, 0 == _ouk) return _oud;
            for (var _oul = 0, _oum = 0, _oun = 0, _ouo = _oub.have_slot_ids(); _oun < _ouo.length; _oun++) {
                var _oup = _ouo[_oun],
                    _ouq = _oua.default.model.slot.getMst(_oup),
                    _our = _ouq.equipType;
                12 != _our && 13 != _our || (_ouq.sakuteki >= 5 && (_oul += _oub.get_slotnums(parseInt(_oup))), _ouq.taiku >= 2 && (_oum += _oub.get_slotnums(parseInt(_oup))));
            }
            var _ous = _oui[_oub.ship_id];
            _oum > 0 && _ous > 0 && (1 == _ous ? (_oud.houg += 1, _oud.tyku += 2, _oud.kaih += 3) : 2 == _ous && (_oud.tyku += 2, _oud.kaih += 2));
            var _out = _ouj[_oub.ship_id];
            return _oul > 0 && _out > 0 && 1 == _out && (_oud.houg += 1, _oud.kaih += 1), _oud;
        };
    },
    25765: (_ouu, _ouv, _ouw) => {
        'use strict';
        var _oux = null;
        defineModule(_ouv);
        Object.defineProperty(_ouv, '__esModule', {
            'value': true
        }), _ouv.getSlot506PersonalEffect = void 0;
        var _ouy = _ouw(74496);
        _ouv.getSlot506PersonalEffect = function(_ouz) {
            var _ov0 = null,
                _ov1 = new _ouy.SlotItemEffectModel();
            return 961 == _ouz.ship_id ? (_ov1.houg += 2, _ov1.houm += 3, _ov1.tyku += 2, _ov1.kaih += 4) : 145 == _ouz.ship_id || 497 == _ouz.ship_id || 656 == _ouz.ship_id || 557 == _ouz.ship_id || 558 == _ouz.ship_id || 951 == _ouz.ship_id || 975 == _ouz.ship_id ? (_ov1.houg += 1, _ov1.houm += 2, _ov1.tyku += 1, _ov1.kaih += 3) : 578 != _ouz.ship_id && 419 != _ouz.ship_id && 464 != _ouz.ship_id && 470 != _ouz.ship_id && 407 != _ouz.ship_id && 235 != _ouz.ship_id && 147 != _ouz.ship_id && 538 != _ouz.ship_id && 537 != _ouz.ship_id && 955 != _ouz.ship_id && 960 != _ouz.ship_id || (_ov1.houg += 1, _ov1.houm += 1, _ov1.tyku += 1, _ov1.kaih += 2), _ov1;
        };
    },
    88271: function(_ov2, _ov3, _ov4) {
        'use strict';
        var _ov5 = null;
        var _ov6 = this && this.__importDefault || function(_ov7) {
            var _ov8 = null;
            return _ov7 && _ov7.__esModule ? _ov7 : {
                'default': _ov7
            };
        };
        defineModule(_ov3);
        Object.defineProperty(_ov3, '__esModule', {
            'value': true
        }), _ov3.getSlot50PersonalEffect = void 0;
        var _ov9 = _ov4(74496),
            _ova = _ov6(_ov4(18622));
        _ov3.getSlot50PersonalEffect = function(_ovb) {
            var _ovc = null,
                _ovd = new _ov9.SlotItemEffectModel(),
                _ove = false,
                _ovf = new _ov9.SlotItemEffectModel();
            7 != _ovb.ctype && 13 != _ovb.ctype && 8 != _ovb.ctype && 29 != _ovb.ctype && 9 != _ovb.ctype && 31 != _ovb.ctype || (_ovf.houg += 1, _ove = true), 8 != _ovb.ctype && 29 != _ovb.ctype && 9 != _ovb.ctype && 31 != _ovb.ctype || (_ovf.houg += 1, _ovf.kaih += 1, _ove = true);
            var _ovg = _ovb.get_slotnums(50);
            9 != _ovb.ctype && 31 != _ovb.ctype || _ovg >= 2 && (_ovf.houg += 1, _ove = true);
            var _ovh = 0;
            if (501 != _ovb.ship_id && 506 != _ovb.ship_id && 502 != _ovb.ship_id && 507 != _ovb.ship_id || (_ovf.houg += 1, _ove = true, _ovh = 1), 0 == _ove) return _ovd;
            _ovd = _ovf.multiply(_ovg);
            for (var _ovi = 0, _ovj = 0, _ovk = _ovb.have_slot_ids(); _ovj < _ovk.length; _ovj++) {
                var _ovl = _ovk[_ovj],
                    _ovm = _ova.default.model.slot.getMst(_ovl),
                    _ovn = _ovm.equipType;
                12 != _ovn && 13 != _ovn || _ovm.sakuteki >= 5 && (_ovi += _ovb.get_slotnums(parseInt(_ovl)));
            }
            if (_ovi > 0) {
                if (7 == _ovb.ctype || 13 == _ovb.ctype) 0 == _ovb.get_slotnums(90) && (_ovd.houg += 1, _ovd.kaih += 1, _ovd.raig += 1);
                else 8 != _ovb.ctype && 29 != _ovb.ctype && 9 != _ovb.ctype && 31 != _ovb.ctype || (_ovd.houg += 3, _ovd.kaih += 2, _ovd.raig += 2);
                501 != _ovb.ship_id && 506 != _ovb.ship_id || (_ovd.houg += 1, _ovd.kaih += 1);
            }
            var _ovo = _ovb.get_slotnums(30),
                _ovp = _ovb.get_slotnums(410);
            return 1 == _ovh && (_ovo + _ovp > 0 && (_ovd.houg += 1, _ovd.tyku += 3, _ovd.kaih += 2), _ovp > 0 && (_ovd.houg += 2)), _ovd;
        };
    },
    28221: (_ovq, _ovr, _ovs) => {
        'use strict';
        var _ovt = null;
        defineModule(_ovr);
        Object.defineProperty(_ovr, '__esModule', {
            'value': true
        }), _ovr.getSlot510PersonalEffect = void 0;
        var _ovu = _ovs(74496);
        _ovr.getSlot510PersonalEffect = function(_ovv) {
            var _ovw = null,
                _ovx = new _ovu.SlotItemEffectModel(),
                _ovy = false,
                _ovz = new _ovu.SlotItemEffectModel();
            if ('イギリス' == _ovv.getCountryName() && (_ovz.houg += 2, _ovz.tais += 3, _ovz.kaih += 2, _ovz.saku += 2, _ovy = true), 88 == _ovv.ctype && (_ovx.houg += 4, _ovx.kaih += 2, _ovz.saku += 3, _ovz.houm += 2, _ovy = true), 0 == _ovy) return _ovx;
            var _ow0 = _ovv.get_slotnums(510);
            return _ovx.add(_ovz.multiply(_ow0)), _ovx;
        };
    },
    14830: (_ow1, _ow2, _ow3) => {
        'use strict';
        var _ow4 = null;
        defineModule(_ow2);
        Object.defineProperty(_ow2, '__esModule', {
            'value': true
        }), _ow2.getSlot511PersonalEffect = void 0;
        var _ow5 = _ow3(74496);
        _ow2.getSlot511PersonalEffect = function(_ow6) {
            var _ow7 = null,
                _ow8 = new _ow5.SlotItemEffectModel();
            return 122 == _ow6.ctype ? (_ow8.raig += 3, _ow8.kaih += 4) : 114 == _ow6.ctype && (_ow8.raig += 1, _ow8.kaih += 2), _ow8;
        };
    },
    54047: (_ow9, _owa, _owb) => {
        'use strict';
        var _owc = null;
        defineModule(_owa);
        Object.defineProperty(_owa, '__esModule', {
            'value': true
        }), _owa.getSlot517PersonalEffect = void 0;
        var _owd = _owb(74496);
        _owa.getSlot517PersonalEffect = function(_owe) {
            var _owf = null,
                _owg = new _owd.SlotItemEffectModel();
            null == {
                66: 0,
                28: 0,
                12: 0,
                1: 0,
                5: 0,
                10: 0,
                23: 0,
                18: 0,
                30: 0,
                38: 0,
                22: 0,
                54: 0,
                101: 0
            }[_owe.ctype] && 74 != _owe.ctype && 77 != _owe.ctype && 85 != _owe.ctype && 117 != _owe.ctype && 104 != _owe.ctype || (_owg.houm += 1, _owg.kaih += 1, _owg.saku += 1), 38 == _owe.ctype && (_owg.houg += 1, _owg.houm += 1), 960 == _owe.ship_id ? (_owg.houg += 2, _owg.houm += 1, _owg.kaih += 3, _owg.saku += 2) : 955 != _owe.ship_id && 578 != _owe.ship_id && 961 != _owe.ship_id && 656 != _owe.ship_id && 464 != _owe.ship_id && 470 != _owe.ship_id && 419 != _owe.ship_id && 407 != _owe.ship_id && 235 != _owe.ship_id && 147 != _owe.ship_id && 975 != _owe.ship_id || (_owg.houg += 1, _owg.houm += 1, _owg.kaih += 2, _owg.saku += 1);
            for (var _owh = [], _owi = function(_owj) {
                    var _owk = null,
                        _owl = _owe.get_each_level_nums(_owj);
                    null == _owh[_owj] && (_owh[_owj] = []), _owl.forEach(function(_owm, _own) {
                        var _owo = null;
                        for (var _owp = 1; _owp <= _owe.SLOT_LEVEL_MAX; _owp++) null == _owh[_owj][_owp] && (_owh[_owj][_owp] = 0), _own >= _owp && (_owh[_owj][_owp] += _owm);
                    });
                }, _owq = 0, _owr = [267, 366, 450, 517]; _owq < _owr.length; _owq++) {
                _owi(_owr[_owq]);
            }
            var _ows = _owh[517];
            return _ows[7] > 0 && (_owg.houm += 1), _ows[8] > 0 && (_owg.kaih += 1), _ows[9] > 0 && (_owg.houg += 1), _ows[10] > 0 && (_owg.houm += 1), (_owh[267][3] > 0 || _owh[366][3] > 0) && (_owg.houg += 1, _owg.houm += 1, 38 == _owe.ctype && (_owg.houg += 1, _owg.houm += 1), _owh[450][4] > 0 && (_owg.houg += 1, _owg.houm += 1, _owg.tyku += 4, _owg.kaih += 3)), _owg;
        };
    },
    76054: (_owt, _owu, _owv) => {
        'use strict';
        var _oww = null;
        defineModule(_owu);
        Object.defineProperty(_owu, '__esModule', {
            'value': true
        }), _owu.getSlot518PersonalEffect = void 0;
        var _owx = _owv(74496);
        _owu.getSlot518PersonalEffect = function(_owy) {
            var _owz = null,
                _ox0 = new _owx.SlotItemEffectModel(),
                _ox1 = false,
                _ox2 = new _owx.SlotItemEffectModel();
            if (34 != _owy.ctype && 56 != _owy.ctype || (_ox2.houg += 1, _ox2.tyku += 1, _ox2.tais += 1, _ox2.kaih += 1, _ox1 = true), 16 == _owy.stype && (_ox2.houg += 1, _ox2.raig += 1, _ox2.kaih += 1, _ox1 = true), 622 != _owy.ship_id && 624 != _owy.ship_id && 623 != _owy.ship_id || (_ox2.houg += 1, _ox1 = true), 622 != _owy.ship_id && 624 != _owy.ship_id || (_ox2.tyku += 1, _ox1 = true), 624 == _owy.ship_id && (_ox2.tais += 2, _ox1 = true), 0 == _ox1) return _ox0;
            var _ox3 = _owy.get_slotnums(518);
            return _ox0.add(_ox2.multiply(_ox3)), _ox0;
        };
    },
    93053: (_ox4, _ox5, _ox6) => {
        'use strict';
        var _ox7 = null;
        defineModule(_ox5);
        Object.defineProperty(_ox5, '__esModule', {
            'value': true
        }), _ox5.getSlot519PersonalEffect = void 0;
        var _ox8 = _ox6(74496);
        _ox5.getSlot519PersonalEffect = function(_ox9) {
            var _oxa = null,
                _oxb = new _ox8.SlotItemEffectModel();
            return 122 == _ox9.ctype && (_oxb.houm += 2, _oxb.kaih += 2), 114 == _ox9.ctype && (_oxb.raig += 1, _oxb.houm += 2, _oxb.kaih += 2), _oxb;
        };
    },
    81254: (_oxc, _oxd, _oxe) => {
        'use strict';
        var _oxf = null;
        defineModule(_oxd);
        Object.defineProperty(_oxd, '__esModule', {
            'value': true
        }), _oxd.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _oxg = _oxe(74496);
        _oxd.getSlot51cmSeriesGunPersonalEffect = function(_oxh) {
            var _oxi = null,
                _oxj = new _oxg.SlotItemEffectModel(),
                _oxk = false,
                _oxl = new _oxg.SlotItemEffectModel(),
                _oxm = _oxh.get_slotnums(142),
                _oxn = _oxh.get_slotnums(460),
                _oxo = _oxm + _oxn;
            if (916 != _oxh.ship_id && 911 != _oxh.ship_id && 546 != _oxh.ship_id || (_oxl.houg += 1, _oxl.houm += 1, _oxn >= 1 && (_oxj.kaih += 1, _oxj.houm += 1), _oxk = true), 37 == _oxh.ctype && _oxo >= 1 && (_oxj.houg += 1, _oxj.houm += 2), 0 == _oxk) return _oxj;
            var _oxp = _oxh.get_slotnums(128) + _oxh.get_slotnums(281);
            return _oxj.add(_oxl.multiply(_oxp)), _oxj;
        };
    },
    88792: (_oxq, _oxr, _oxs) => {
        'use strict';
        var _oxt = null;
        defineModule(_oxr);
        Object.defineProperty(_oxr, '__esModule', {
            'value': true
        }), _oxr.getSlot520PersonalEffect = void 0;
        var _oxu = _oxs(74496);
        _oxr.getSlot520PersonalEffect = function(_oxv) {
            var _oxw = null,
                _oxx = new _oxu.SlotItemEffectModel(),
                _oxy = false,
                _oxz = new _oxu.SlotItemEffectModel(),
                _oy0 = 0,
                _oy1 = 0,
                _oy2 = 0,
                _oy3 = _oxv.get_slotnums(520);
            7 == _oxv.ctype || 13 == _oxv.ctype ? (_oxz.houg += 1, _oxy = true, _oy1 = 1, _oy2 = 1) : 8 == _oxv.ctype || 29 == _oxv.ctype ? (_oxz.houg += 2, _oxz.kaih += 1, _oxy = true, _oy1 = 2, _oy2 = 1) : 9 != _oxv.ctype && 31 != _oxv.ctype || (_oxz.houg += 3, _oxz.kaih += 1, _oxz.houm += 1, _oxy = true, _oy1 = 2, _oy2 = 1, 2 == _oy3 && (_oxx.houg += 2), _oy3 >= 3 && (_oxx.houg += 4));
            var _oy4 = _oxv.get_have_rader_nums().water_rader,
                _oy5 = 0,
                _oy6 = 0;
            if (_oy1 + _oy2 > 0) {
                for (var _oy7 = _oxv.getSpItemDict_FukuhouTaikuHeisou(), _oy8 = _oxv.getSpItemDict_Tansou21GouDentan(), _oy9 = 0, _oya = _oxv.have_slot_ids(); _oy9 < _oya.length; _oy9++) {
                    var _oyb = _oya[_oy9],
                        _oyc = parseInt(_oyb);
                    null != _oy7[_oyc] ? (_oy7[_oyc] += _oxv.get_slotnums(_oyc), _oy5 += _oxv.get_slotnums(_oyc)) : null != _oy8[_oyc] && (_oy8[_oyc] += _oxv.get_slotnums(_oyc), _oy6 += _oxv.get_slotnums(_oyc));
                }
                _oy4 > 0 && (1 == _oy1 ? (_oxx.houg += 2, _oxx.raig += 2, _oxx.kaih += 1, _oxx.houm += 1) : 2 == _oy1 && (_oxx.houg += 3, _oxx.raig += 2, _oxx.kaih += 2, _oxx.houm += 1)), _oy5 > 0 && 1 == _oy2 && (_oxx.houg += 1, _oxx.tyku += 4, _oxx.kaih += 4, _oxx.houm += 1);
            }
            if (269 == _oxv.ship_id || 265 == _oxv.ship_id || 319 == _oxv.ship_id ? (2 == _oy3 && (_oxx.houg += 2), _oy3 >= 3 && (_oxx.houg += 4)) : 501 != _oxv.ship_id && 506 != _oxv.ship_id && 502 != _oxv.ship_id && 507 != _oxv.ship_id && 503 != _oxv.ship_id && 504 != _oxv.ship_id || (_oxz.houg += 1, _oxy = true, _oy4 >= 1 && (_oxx.houg += 1, _oxx.kaih += 1, _oxx.houm += 2), _oy6 >= 1 && (_oxx.houg += 1, _oxx.tyku += 3, _oxx.kaih += 2, _oxx.houm += 1), _oxv.get_slotnums(410) > 0 && (_oxx.houg += 2, _oxx.tyku += 3, _oxx.kaih += 2, _oxx.houm += 1), _oy0 = 1), 502 == _oxv.ship_id || 269 == _oxv.ship_id || 265 == _oxv.ship_id || 319 == _oxv.ship_id ? (_oxz.houg += 1, _oxz.houm += 1, _oxy = true) : 507 == _oxv.ship_id && (_oxz.houg += 1, _oxz.houm += 2, _oxz.tyku += 1, _oxy = true), _oxy && _oxx.add(_oxz.multiply(_oy3)), 0 == _oy0) return _oxx;
            var _oyd = _oxv.get_each_level_over_nums([520]),
                _oye = _oyd.slot[520][7],
                _oyf = _oyd.slot[520][10];
            return 1 == _oy0 && (_oye > 0 && (_oxx.houg += 1 * _oye), _oyf > 0 && (_oxx.houm += 1 * _oyf)), _oxx;
        };
    },
    33242: (_oyg, _oyh, _oyi) => {
        'use strict';
        var _oyj = null;
        defineModule(_oyh);
        Object.defineProperty(_oyh, '__esModule', {
            'value': true
        }), _oyh.getSlot521PersonalEffect = void 0;
        var _oyk = _oyi(74496);
        _oyh.getSlot521PersonalEffect = function(_oyl) {
            var _oym = null,
                _oyn = new _oyk.SlotItemEffectModel(),
                _oyo = false,
                _oyp = new _oyk.SlotItemEffectModel(),
                _oyq = 0;
            if (52 == _oyl.ctype && (_oyq = 1), 183 == _oyl.ship_id ? (_oyp.houg += 1, _oyp.houm += 1, _oyp.saku += 2, _oyp.kaih += 2, _oyo = true) : 321 == _oyl.ship_id ? (_oyp.houg += 2, _oyp.houm += 2, _oyp.saku += 3, _oyp.kaih += 3, _oyo = true) : 507 == _oyl.ship_id && (_oyp.houg += 3, _oyp.tyku += 1, _oyp.houm += 3, _oyp.saku += 2, _oyp.kaih += 2, _oyo = true, _oyq = 1), _oyo) {
                var _oyr = _oyl.get_slotnums(521);
                _oyn.add(_oyp.multiply(_oyr));
            }
            if (0 == _oyq) return _oyn;
            var _oys = _oyl.get_each_level_over_nums([521]).slot[521];
            return 1 == _oyq && (_oys[1] >= 1 && (_oyn.houm += 1 * _oys[1]), _oys[2] >= 1 && (_oyn.kaih += 1 * _oys[2]), _oys[3] >= 1 && (_oyn.saku += 1 * _oys[3], _oyn.raig += 1 * _oys[3]), _oys[4] >= 1 && (_oyn.houg += 1 * _oys[4]), _oys[6] >= 1 && (_oyn.houm += 1 * _oys[6]), _oys[8] >= 1 && (_oyn.saku += 1 * _oys[8]), _oys[10] >= 1 && (_oyn.houm += 1 * _oys[10])), _oyn;
        };
    },
    3296: (_oyt, _oyu, _oyv) => {
        'use strict';
        var _oyw = null;
        defineModule(_oyu);
        Object.defineProperty(_oyu, '__esModule', {
            'value': true
        }), _oyu.getSlot522_523PersonalEffect = void 0;
        var _oyx = _oyv(74496);
        _oyu.getSlot522_523PersonalEffect = function(_oyy) {
            var _oyz = null,
                _oz0 = new _oyx.SlotItemEffectModel(),
                _oz1 = false,
                _oz2 = new _oyx.SlotItemEffectModel(),
                _oz3 = 0,
                _oz4 = _oyy.get_slotnums(522),
                _oz5 = _oyy.get_slotnums(523),
                _oz6 = _oz4 + _oz5;
            if (14 == _oyy.stype && (_oz2.raig += 1, _oz2.kaih += 5, _oz2.houm += 1, _oz2.saku += 3, _oz1 = true, _oz5 >= 1 && (_oz0.raig += 2 * _oz5, _oz0.baku += 2 * _oz5, _oz0.kaih += 1 * _oz5, _oz0.houm += 1 * _oz5, _oz0.saku += 1 * _oz5), _oz3 = 1), 0 == _oz1) return _oz0;
            if (_oz0.add(_oz2.multiply(_oz6)), 0 == _oz3) return _oz0;
            var _oz7 = _oyy.get_each_level_over_nums([522, 523]),
                _oz8 = _oz7.slot[522],
                _oz9 = _oz7.slot[523];
            if (1 == _oz3) {
                if (_oz8[1] >= 1 || _oz9[1] >= 1) {
                    var _oza = _oz8[1] + _oz9[1];
                    _oz0.raig += 1 * _oza;
                }
                if (_oz8[2] >= 1 || _oz9[2] >= 1) {
                    var _ozb = _oz8[2] + _oz9[2];
                    _oz0.houm += 1 * _ozb;
                }
                if (_oz8[3] >= 1 || _oz9[3] >= 1) {
                    var _ozc = _oz8[3] + _oz9[3];
                    _oz0.kaih += 1 * _ozc;
                }
                if (_oz8[5] >= 1 || _oz9[5] >= 1) {
                    var _ozd = _oz8[5] + _oz9[5];
                    _oz0.saku += 1 * _ozd;
                }
                if (_oz8[8] >= 1 || _oz9[8] >= 1) {
                    var _oze = _oz8[8] + _oz9[8];
                    _oz0.houm += 1 * _oze;
                }
                if (_oz8[10] >= 1 || _oz9[10] >= 1) {
                    var _ozf = _oz8[10] + _oz9[10];
                    _oz0.kaih += 1 * _ozf;
                }
            }
            return _oz0;
        };
    },
    59415: (_ozg, _ozh, _ozi) => {
        'use strict';
        var _ozj = null;
        defineModule(_ozh);
        Object.defineProperty(_ozh, '__esModule', {
            'value': true
        }), _ozh.getSlot524PersonalEffect = void 0;
        var _ozk = _ozi(74496);
        _ozh.getSlot524PersonalEffect = function(_ozl) {
            var _ozm = null,
                _ozn = new _ozk.SlotItemEffectModel(),
                _ozo = false,
                _ozp = new _ozk.SlotItemEffectModel(),
                _ozq = 0,
                _ozr = 0;
            if (17 != _ozl.stype && 19 != _ozl.stype && 20 != _ozl.stype && 21 != _ozl.stype && 22 != _ozl.stype || (_ozp.houg += 1, _ozp.tyku += 2, _ozp.kaih += 2, _ozp.houm += 1, _ozo = true, _ozq = 1, _ozr = 1), 0 == _ozo) return _ozn;
            var _ozs = _ozl.get_slotnums(524);
            _ozn.add(_ozp.multiply(_ozs));
            var _ozt = _ozl.get_have_rader_nums().air_rader;
            if (1 == _ozr && _ozt >= 1 && (_ozn.tyku += 2, _ozn.kaih += 2), 0 == _ozq) return _ozn;
            var _ozu = _ozl.get_each_level_over_nums([524]).slot[524];
            return 1 == _ozq && (_ozu[1] >= 1 && (_ozn.kaih += 1 * _ozu[1]), _ozu[2] >= 1 && (_ozn.kaih += 1 * _ozu[2]), _ozu[4] >= 1 && (_ozn.tyku += 1 * _ozu[4]), _ozu[6] >= 1 && (_ozn.kaih += 1 * _ozu[6]), _ozu[7] >= 1 && (_ozn.houm += 1 * _ozu[7]), _ozu[8] >= 1 && (_ozn.tyku += 1 * _ozu[8]), _ozu[9] >= 1 && (_ozn.kaih += 1 * _ozu[9]), _ozu[10] >= 1 && (_ozn.houg += 1 * _ozu[10])), _ozn;
        };
    },
    36731: (_ozv, _ozw, _ozx) => {
        'use strict';
        var _ozy = null;
        defineModule(_ozw);
        Object.defineProperty(_ozw, '__esModule', {
            'value': true
        }), _ozw.getSlot527PersonalEffect = void 0;
        var _ozz = _ozx(74496);
        _ozw.getSlot527PersonalEffect = function(_p00) {
            var _p01 = null,
                _p02 = new _ozz.SlotItemEffectModel(),
                _p03 = 0;
            if ('イギリス' == _p00.getCountryName() && (_p03 = 1, _p02.tyku += 2, _p02.houm += 1, _p02.kaih += 1, _p02.saku += 2, 88 == _p00.ctype && (_p02.houg += 2), 67 == _p00.ctype && (_p02.houg += 1)), 0 == _p03) return _p02;
            var _p04 = _p00.get_each_level_over_nums([527]),
                _p05 = _p04.slot[527][2],
                _p06 = _p04.slot[527][4],
                _p07 = _p04.slot[527][7],
                _p08 = _p04.slot[527][10];
            return 1 == _p03 && (_p05 >= 1 && (_p02.tyku += 1), _p06 >= 1 && (_p02.kaih += 1), _p07 >= 1 && (_p02.tyku += 1), _p08 >= 1 && (_p02.houm += 1)), _p02;
        };
    },
    30450: (_p09, _p0a, _p0b) => {
        'use strict';
        var _p0c = null;
        defineModule(_p0a);
        Object.defineProperty(_p0a, '__esModule', {
            'value': true
        }), _p0a.getSlot528PersonalEffect = void 0;
        var _p0d = _p0b(74496);
        _p0a.getSlot528PersonalEffect = function(_p0e) {
            var _p0f = null,
                _p0g = new _p0d.SlotItemEffectModel(),
                _p0h = false,
                _p0i = new _p0d.SlotItemEffectModel(),
                _p0j = 0;
            if ('イギリス' == _p0e.getCountryName() && (_p0i.houg += 1, _p0i.houm += 2, _p0i.kaih += 1, 108 == _p0e.ctype && (_p0i.houg += 1, _p0i.kaih += 1), _p0h = true, _p0j = 1), 0 == _p0h) return _p0g;
            var _p0k = _p0e.get_slotnums(528);
            if (_p0g.add(_p0i.multiply(_p0k)), 0 == _p0j) return _p0g;
            var _p0l = _p0e.get_each_level_over_nums([528]),
                _p0m = _p0l.slot[528][2],
                _p0n = _p0l.slot[528][4],
                _p0o = _p0l.slot[528][7],
                _p0p = _p0l.slot[528][10];
            return 1 == _p0j && (_p0m >= 1 && (_p0g.houg += 1 * _p0m), _p0n >= 1 && (_p0g.houm += 1 * _p0n), _p0o >= 1 && (_p0g.kaih += 1 * _p0o), _p0p >= 1 && (_p0g.houm += 1 * _p0p)), _p0g;
        };
    },
    15653: (_p0q, _p0r, _p0s) => {
        'use strict';
        var _p0t = null;
        defineModule(_p0r);
        Object.defineProperty(_p0r, '__esModule', {
            'value': true
        }), _p0r.getSlot530PersonalEffect = void 0;
        var _p0u = _p0s(74496);
        _p0r.getSlot530PersonalEffect = function(_p0v) {
            var _p0w = null,
                _p0x = new _p0u.SlotItemEffectModel(),
                _p0y = false;
            if (6 == _p0v.ctype && (_p0y = true), 0 == _p0y) return _p0x;
            var _p0z = false,
                _p10 = new _p0u.SlotItemEffectModel(),
                _p11 = _p0v.get_slotnums(530),
                _p12 = _p0v.get_slotnums(174),
                _p13 = _p0v.get_each_level_over_nums([530, 174]),
                _p14 = _p13.slot[530],
                _p15 = _p13.slot[174],
                _p16 = _p0v.get_have_rader_nums(),
                _p17 = _p16.water_rader,
                _p18 = _p16.high_water_rader;
            return _p16.air_rader, 149 != _p0v.ship_id && 150 != _p0v.ship_id && 151 != _p0v.ship_id && 152 != _p0v.ship_id && 593 != _p0v.ship_id || (_p10.houg += 2, _p0z = true), 591 != _p0v.ship_id && 954 != _p0v.ship_id || (_p10.houg += 3, _p0z = true), 592 != _p0v.ship_id && 694 != _p0v.ship_id || (_p10.houg += 4, _p0z = true), 149 != _p0v.ship_id && 150 != _p0v.ship_id && 151 != _p0v.ship_id && 152 != _p0v.ship_id || (_p10.tyku += 1, _p0z = true), 591 != _p0v.ship_id && 592 != _p0v.ship_id && 954 != _p0v.ship_id && 694 != _p0v.ship_id || (_p10.tyku += 2, _p0z = true), 593 == _p0v.ship_id && (_p10.tyku += 3, _p0z = true), 592 != _p0v.ship_id && 694 != _p0v.ship_id || (_p10.houg += 1, _p10.houm += 2, _p0z = true, _p14[2] >= 1 && (_p0x.houm += 1 * _p14[2]), _p14[4] >= 1 && (_p0x.houg += 1 * _p14[4]), _p14[6] >= 1 && (_p0x.souk += 1 * _p14[6]), _p14[7] >= 1 && (_p0x.houm += 1 * _p14[7]), _p14[8] >= 1 && (_p0x.houg += 1 * _p14[8]), _p14[9] >= 1 && (_p0x.souk += 1 * _p14[9]), _p14[10] >= 1 && (_p0x.houm += 1 * _p14[10])), 150 != _p0v.ship_id && 152 != _p0v.ship_id && 591 != _p0v.ship_id && 954 != _p0v.ship_id || (_p10.houm += 1, _p0z = true, _p14[2] >= 1 && (_p0x.houg += 1 * _p14[2]), _p14[4] >= 1 && (_p0x.souk += 1 * _p14[4]), _p14[6] >= 1 && (_p0x.houm += 1 * _p14[6]), _p14[8] >= 1 && (_p0x.houg += 1 * _p14[8]), _p14[10] >= 1 && (_p0x.houm += 1 * _p14[10])), 149 != _p0v.ship_id && 151 != _p0v.ship_id && 593 != _p0v.ship_id || (_p14[4] >= 1 && (_p0x.houg += 1 * _p14[4]), _p14[7] >= 1 && (_p0x.souk += 1 * _p14[7]), _p14[10] >= 1 && (_p0x.houm += 1 * _p14[10])), 592 != _p0v.ship_id && 694 != _p0v.ship_id || (_p17 >= 1 && (_p0x.houg += 3, _p0x.houm += 3, _p0x.kaih += 3, 592 == _p0v.ship_id ? _p0x.houg += 3 : 694 == _p0v.ship_id && (_p0x.houg += 4)), _p11 >= 2 && (_p0x.houm += 2), _p11 >= 3 && (_p0x.houm += 2), _p11 >= 4 && (_p0x.houm += 2), _p18 >= 1 && (_p0x.houm += 1), 694 == _p0v.ship_id && _p11 >= 3 && (_p0x.houg += 3)), 149 != _p0v.ship_id && 150 != _p0v.ship_id && 151 != _p0v.ship_id && 152 != _p0v.ship_id && 591 != _p0v.ship_id && 954 != _p0v.ship_id && 593 != _p0v.ship_id || (_p17 >= 1 && (_p0x.houg += 2, _p0x.houm += 2, _p0x.kaih += 2, 591 == _p0v.ship_id || 152 == _p0v.ship_id ? _p0x.houg += 3 : 954 == _p0v.ship_id || 150 == _p0v.ship_id ? _p0x.houg += 2 : 149 != _p0v.ship_id && 151 != _p0v.ship_id && 593 != _p0v.ship_id || (_p0x.houg += 1)), _p18 >= 1 && (_p0x.houm += 1)), 591 != _p0v.ship_id && 592 != _p0v.ship_id && 593 != _p0v.ship_id && 954 != _p0v.ship_id && 694 != _p0v.ship_id || (_p12 >= 1 && (_p0x.raig += 6, _p15[6] >= 1 && (_p0x.raig += 1), _p15[8] >= 1 && (_p0x.houm += 1), _p15[10] >= 1 && (_p0x.houg += 1)), _p18 >= 1 && (_p0x.houg += 2, _p0x.raig += 2, _p0x.houm += 2, _p0x.kaih += 3, 591 == _p0v.ship_id || 592 == _p0v.ship_id ? _p0x.houg += 2 : 954 == _p0v.ship_id || 593 == _p0v.ship_id ? _p0x.houg += 1 : 694 == _p0v.ship_id && (_p0x.houg += 3)), _p11 >= 2 && (_p0x.houm += 1)), _p0z && _p0x.add(_p10.multiply(_p11)), _p0x;
        };
    },
    25851: (_p19, _p1a, _p1b) => {
        'use strict';
        var _p1c = null;
        defineModule(_p1a);
        Object.defineProperty(_p1a, '__esModule', {
            'value': true
        }), _p1a.getSlot531PersonalEffect = void 0;
        var _p1d = _p1b(74496);
        _p1a.getSlot531PersonalEffect = function(_p1e) {
            var _p1f = null,
                _p1g = new _p1d.SlotItemEffectModel(),
                _p1h = _p1e.have_level_num_over_dict[531];
            return null == _p1h || (_p1h[4] >= 1 && (_p1g.houm += 1 * _p1h[4]), _p1h[5] >= 1 && (_p1g.houg += 1 * _p1h[5]), _p1h[6] >= 1 && (_p1g.kaih += 1 * _p1h[6]), _p1h[7] >= 1 && (_p1g.houm += 1 * _p1h[7]), _p1h[8] >= 1 && (_p1g.houg += 1 * _p1h[8]), _p1h[9] >= 1 && (_p1g.kaih += 1 * _p1h[9]), _p1h[10] >= 1 && (_p1g.houm += 1 * _p1h[10])), _p1g;
        };
    },
    91275: (_p1i, _p1j, _p1k) => {
        'use strict';
        var _p1l = null;
        defineModule(_p1j);
        Object.defineProperty(_p1j, '__esModule', {
            'value': true
        }), _p1j.getSlot538PersonalEffect = void 0;
        var _p1m = _p1k(74496);
        _p1j.getSlot538PersonalEffect = function(_p1n) {
            var _p1o = null,
                _p1p = new _p1m.SlotItemEffectModel(),
                _p1q = false,
                _p1r = new _p1m.SlotItemEffectModel(),
                _p1s = 0;
            if ('フランス' == _p1n.getCountryName() && (_p1r.houg += 3, _p1r.kaih += 2, _p1r.houm += 2, _p1q = true, _p1s = 1), 79 == _p1n.ctype ? (_p1r.houg += 2, 969 == _p1n.ship_id && (_p1r.houg += 1, _p1r.houm += 1, _p1r.kaih += 1), _p1q = true) : 70 == _p1n.ctype && (_p1r.houg += 1, _p1r.houm += 1, _p1r.tyku += 2, _p1r.kaih += 2, _p1q = true), 0 == _p1q) return _p1p;
            var _p1t = _p1n.get_slotnums(538);
            if (_p1p.add(_p1r.multiply(_p1t)), 0 == _p1s) return _p1p;
            var _p1u = _p1n.haveSlotLevelNumOver(538);
            return 1 == _p1s && (_p1u[3] >= 1 && (_p1p.kaih += 1 * _p1u[3]), _p1u[4] >= 1 && (_p1p.houm += 1 * _p1u[4]), _p1u[5] >= 1 && (_p1p.houg += 1 * _p1u[5]), _p1u[6] >= 1 && (_p1p.kaih += 1 * _p1u[6]), _p1u[7] >= 1 && (_p1p.houm += 1 * _p1u[7]), _p1u[8] >= 1 && (_p1p.houg += 1 * _p1u[8]), _p1u[9] >= 1 && (_p1p.kaih += 1 * _p1u[9]), _p1u[10] >= 1 && (_p1p.houg += 1 * _p1u[10], _p1p.houm += 1 * _p1u[10])), _p1p;
        };
    },
    72743: (_p1v, _p1w, _p1x) => {
        'use strict';
        var _p1y = null;
        defineModule(_p1w);
        Object.defineProperty(_p1w, '__esModule', {
            'value': true
        }), _p1w.getSlot540PersonalEffect = void 0;
        var _p1z = _p1x(74496);
        _p1w.getSlot540PersonalEffect = function(_p20) {
            var _p21 = null,
                _p22 = new _p1z.SlotItemEffectModel(),
                _p23 = false,
                _p24 = new _p1z.SlotItemEffectModel();
            if (911 == _p20.ship_id || 916 == _p20.ship_id || 546 == _p20.ship_id || 662 == _p20.ship_id || 663 == _p20.ship_id || 668 == _p20.ship_id ? (_p24.kaih += 1, _p24.saku += 1, _p23 = true) : 73 == _p20.ship_id || 506 == _p20.ship_id || 121 == _p20.ship_id || 503 == _p20.ship_id || 504 == _p20.ship_id || 188 == _p20.ship_id || 189 == _p20.ship_id ? (_p24.houm += 1, _p24.kaih += 1, _p24.saku += 1, _p23 = true) : 488 != _p20.ship_id && 200 != _p20.ship_id && 487 != _p20.ship_id && 501 != _p20.ship_id && 502 != _p20.ship_id && 507 != _p20.ship_id || (_p24.houg += 1, _p24.houm += 1, _p24.kaih += 1, _p24.saku += 1, _p23 = true), 'にっしん' == _p20.yomi || 'ちとせ' == _p20.yomi || 'ちよだ' == _p20.yomi || 'あきつしま' == _p20.yomi ? (_p24.houg += 1, _p24.houm += 1, _p24.tyku += 2, _p24.kaih += 2, _p24.saku += 2, _p23 = true) : 'みずほ' != _p20.yomi && 'かもい' != _p20.yomi || (_p24.houg += 2, _p24.houm += 1, _p24.tyku += 2, _p24.kaih += 2, _p24.saku += 2, _p23 = true), 0 == _p23) return _p22;
            var _p25 = _p20.get_slotnums(540);
            return _p22.add(_p24.multiply(_p25)), _p22;
        };
    },
    57041: (_p26, _p27, _p28) => {
        'use strict';
        var _p29 = null;
        defineModule(_p27);
        Object.defineProperty(_p27, '__esModule', {
            'value': true
        }), _p27.getSlot545PersonalEffect = void 0;
        var _p2a = _p28(74496);
        _p27.getSlot545PersonalEffect = function(_p2b) {
            var _p2c = null,
                _p2d = new _p2a.SlotItemEffectModel(),
                _p2e = false,
                _p2f = new _p2a.SlotItemEffectModel();
            if ('しょうかく' == _p2b.yomi ? _p2d.houg += 4 : 'ずいかく' == _p2b.yomi ? _p2d.houg += 3 : 'あかぎ' == _p2b.yomi ? _p2d.houg += 2 : 'かが' != _p2b.yomi && 'たいほう' != _p2b.yomi || (_p2d.houg += 1), 461 == _p2b.ship_id || 466 == _p2b.ship_id ? (_p2f.houg += 1, _p2f.houm += 2, _p2f.kaih += 1, _p2f.saku += 2, _p2e = true) : 462 == _p2b.ship_id || 467 == _p2b.ship_id || 646 == _p2b.ship_id ? (_p2f.houg += 1, _p2f.houm += 1, _p2f.saku += 1, _p2e = true) : 599 != _p2b.ship_id && 610 != _p2b.ship_id && 156 != _p2b.ship_id || (_p2f.houm += 1, _p2f.saku += 1, _p2e = true), 0 == _p2e) return _p2d;
            var _p2g = _p2b.get_slotnums(545);
            return _p2d.add(_p2f.multiply(_p2g)), _p2d;
        };
    },
    74608: (_p2h, _p2i, _p2j) => {
        'use strict';
        var _p2k = null;
        defineModule(_p2i);
        Object.defineProperty(_p2i, '__esModule', {
            'value': true
        }), _p2i.getSlot549PersonalEffect = void 0;
        var _p2l = _p2j(74496);
        _p2i.getSlot549PersonalEffect = function(_p2m) {
            var _p2n = null,
                _p2o = new _p2l.SlotItemEffectModel(),
                _p2p = false,
                _p2q = new _p2l.SlotItemEffectModel(),
                _p2r = 0;
            if ('やましおまる' != _p2m.yomi && 'くまのまる' != _p2m.yomi && 'あきつまる' != _p2m.yomi || (_p2q.houg += 2, _p2q.houm += 1, _p2q.kaih += 1, _p2q.tais += 4, _p2p = true, _p2r = 1), 76 != _p2m.ctype && 27 != _p2m.ctype || (_p2q.houg += 1, _p2q.houm += 1, _p2q.tais += 1, _p2p = true, _p2r = 2), 0 == _p2p) return _p2o;
            var _p2s = _p2m.get_slotnums(549);
            if (_p2o.add(_p2q.multiply(_p2s)), 0 == _p2r) return _p2o;
            var _p2t = _p2m.haveSlotLevelNumOver(549);
            return 1 == _p2r ? (_p2t[3] >= 1 && (_p2o.houg += 1 * _p2t[3]), _p2t[4] >= 1 && (_p2o.houm += 1 * _p2t[4]), _p2t[5] >= 1 && (_p2o.tais += 1 * _p2t[5]), _p2t[6] >= 1 && (_p2o.kaih += 1 * _p2t[6]), _p2t[7] >= 1 && (_p2o.houg += 1 * _p2t[7]), _p2t[8] >= 1 && (_p2o.houm += 1 * _p2t[8]), _p2t[9] >= 1 && (_p2o.tais += 1 * _p2t[9]), _p2t[10] >= 1 && (_p2o.houg += 1 * _p2t[10])) : 2 == _p2r && (_p2t[4] >= 1 && (_p2o.tais += 1 * _p2t[4]), _p2t[6] >= 1 && (_p2o.kaih += 1 * _p2t[6]), _p2t[8] >= 1 && (_p2o.houm += 1 * _p2t[8]), _p2t[10] >= 1 && (_p2o.houg += 1 * _p2t[10])), _p2o;
        };
    },
    23035: (_p2u, _p2v, _p2w) => {
        'use strict';
        var _p2x = null;
        defineModule(_p2v);
        Object.defineProperty(_p2v, '__esModule', {
            'value': true
        }), _p2v.getSlot58PersonalEffect = void 0;
        var _p2y = _p2w(74496);
        _p2v.getSlot58PersonalEffect = function(_p2z) {
            var _p30 = null,
                _p31 = new _p2y.SlotItemEffectModel(),
                _p32 = new _p2y.SlotItemEffectModel();
            if ('しまかぜ' != _p2z.yomi && 4 != _p2z.stype && 54 != _p2z.ctype || (_p32.raig = 1), !_p32.exists()) return _p31;
            var _p33 = _p2z.get_slotnums(58);
            return _p31 = _p32.multiply(_p33);
        };
    },
    47169: (_p34, _p35, _p36) => {
        'use strict';
        var _p37 = null;
        defineModule(_p35);
        Object.defineProperty(_p35, '__esModule', {
            'value': true
        }), _p35.getSlot59PersonalEffect = void 0;
        var _p38 = _p36(74496);
        _p35.getSlot59PersonalEffect = function(_p39) {
            var _p3a = null,
                _p3b = new _p38.SlotItemEffectModel();
            return 501 != _p39.ship_id && 506 != _p39.ship_id && 502 != _p39.ship_id && 507 != _p39.ship_id || (_p3b.tyku += 1, _p3b.kaih += 1), _p3b;
        };
    },
    87845: (_p3c, _p3d, _p3e) => {
        'use strict';
        var _p3f = null;
        defineModule(_p3d);
        Object.defineProperty(_p3d, '__esModule', {
            'value': true
        }), _p3d.getSlot5PersonalEffect = void 0;
        var _p3g = _p3e(74496);
        _p3d.getSlot5PersonalEffect = function(_p3h) {
            var _p3i = null,
                _p3j = new _p3g.SlotItemEffectModel(),
                _p3k = false,
                _p3l = new _p3g.SlotItemEffectModel();
            if (52 != _p3h.ctype && 9 != _p3h.ctype || (_p3l.houg += 1, 52 == _p3h.ctype && (_p3l.houg = _p3l.houg + 1), _p3k = true), 0 == _p3k) return _p3j;
            var _p3m = _p3h.get_slotnums(5);
            return _p3j.add(_p3l.multiply(_p3m)), _p3j;
        };
    },
    92253: (_p3n, _p3o, _p3p) => {
        'use strict';
        var _p3q = null;
        defineModule(_p3o);
        Object.defineProperty(_p3o, '__esModule', {
            'value': true
        }), _p3o.getSlot60_154_219PersonalEffec = void 0;
        var _p3r = _p3p(74496);
        _p3o.getSlot60_154_219PersonalEffec = function(_p3s) {
            var _p3t = null,
                _p3u = new _p3r.SlotItemEffectModel(),
                _p3v = false,
                _p3w = new _p3r.SlotItemEffectModel();
            if ('じゅんよう' != _p3s.yomi && 'ひよう' != _p3s.yomi && 'ずいほう' != _p3s.yomi && 'ちとせ' != _p3s.yomi && 'ちよだ' != _p3s.yomi || (_p3w.houg += 1, _p3w.tyku += 1, _p3w.kaih += 1, _p3v = true), 185 != _p3s.ship_id && 318 != _p3s.ship_id && 282 != _p3s.ship_id || (_p3w.houg += 1, _p3w.tyku += 1, _p3w.kaih += 1, _p3v = true), 888 != _p3s.ship_id && 883 != _p3s.ship_id || (_p3w.houg += 2, _p3w.tyku += 1, _p3w.kaih += 2, _p3v = true), 0 == _p3v) return _p3u;
            var _p3x = _p3s.get_slotnums(60) + _p3s.get_slotnums(154) + _p3s.get_slotnums(219);
            return _p3u.add(_p3w.multiply(_p3x)), _p3u;
        };
    },
    2578: (_p3y, _p3z, _p40) => {
        'use strict';
        var _p41 = null;
        defineModule(_p3z);
        Object.defineProperty(_p3z, '__esModule', {
            'value': true
        }), _p3z.getSlot61PersonalEffect2 = _p3z.getSlot61PersonalEffect = void 0;
        var _p42 = _p40(74496);
        _p3z.getSlot61PersonalEffect = function(_p43) {
            var _p44 = null,
                _p45 = new _p42.SlotItemEffectModel();
            if (553 == _p43.ship_id) _p45.houg = 3, _p45.kaih = 2, _p45.souk = 1, _p45.houm = 5, _p45.leng = 1;
            else {
                if (554 == _p43.ship_id) _p45.houg = 3, _p45.kaih = 3, _p45.souk = 3, _p45.houm = 5, _p45.leng = 1;
                else {
                    if (196 == _p43.ship_id) _p45.houm = 5, _p45.leng = 1;
                    else {
                        if (197 != _p43.ship_id) return _p45;
                        _p45.houm = 5, _p45.leng = 1;
                    }
                }
            }
            return _p45;
        }, _p3z.getSlot61PersonalEffect2 = function(_p46) {
            var _p47 = null,
                _p48 = new _p42.SlotItemEffectModel();
            if (null == _p46.have_slots_dict[61]) return _p48;
            for (var _p49 = 0, _p4a = 0, _p4b = _p46.have_slots_dict[61]; _p4a < _p4b.length; _p4a++) {
                var _p4c = _p4b[_p4a].level;
                _p49 < _p4c && (_p49 = _p4c);
            }
            return 0 == _p49 || ('そうりゅう' == _p46.yomi ? (_p48.houg += 3, _p48.saku += 3) : 'ひりゅう' == _p46.yomi && (_p48.houg += 2, _p48.saku += 2), 508 != _p46.ship_id && 509 != _p46.ship_id && 560 != _p46.ship_id || (_p48.houg += 1, _p48.saku += 1), _p49 >= 8 && 197 == _p46.ship_id && (_p48.houg += 1, _p48.saku += 1)), _p48;
        };
    },
    17143: (_p4d, _p4e, _p4f) => {
        'use strict';
        var _p4g = null;
        defineModule(_p4e);
        Object.defineProperty(_p4e, '__esModule', {
            'value': true
        }), _p4e.getSlot63PersonalEffect = void 0;
        var _p4h = _p4f(74496);
        _p4e.getSlot63PersonalEffect = function(_p4i) {
            var _p4j = null,
                _p4k = new _p4h.SlotItemEffectModel(),
                _p4l = new _p4h.SlotItemEffectModel();
            1 != _p4i.ctype && 5 != _p4i.ctype && 10 != _p4i.ctype || (_p4l.tyku += 1), 'ゆうだち' == _p4i.yomi && (_p4l.houg += 1, _p4l.tyku += 1, _p4l.kaih += 2), 145 == _p4i.ship_id || 961 == _p4i.ship_id ? _p4l.houg += 1 : 144 == _p4i.ship_id ? _p4l.raig += 1 : 469 == _p4i.ship_id ? _p4l.kaih += 2 : 242 == _p4i.ship_id || 497 == _p4i.ship_id || 244 == _p4i.ship_id || 498 == _p4i.ship_id || 975 == _p4i.ship_id ? _p4l.kaih += 1 : 627 == _p4i.ship_id ? _p4l.houg += 1 : 903 != _p4i.ship_id && 908 != _p4i.ship_id || (_p4l.houg += 2);
            var _p4m = true;
            if (_p4l.exists() || (_p4m = false), 0 == _p4m) return _p4k;
            var _p4n = _p4i.get_slotnums(63);
            return _p4k = _p4l.multiply(_p4n);
        };
    },
    16164: (_p4o, _p4p, _p4q) => {
        'use strict';
        var _p4r = null;
        defineModule(_p4p);
        Object.defineProperty(_p4p, '__esModule', {
            'value': true
        }), _p4p.getSlot67PersonalEffect = void 0;
        var _p4s = _p4q(74496);
        _p4p.getSlot67PersonalEffect = function(_p4t) {
            var _p4u = null,
                _p4v = new _p4s.SlotItemEffectModel(),
                _p4w = new _p4s.SlotItemEffectModel();
            if (13 != _p4t.stype && 14 != _p4t.stype && (_p4w.raig = -5), !_p4w.exists()) return _p4v;
            var _p4x = _p4t.get_slotnums(67);
            return _p4v = _p4w.multiply(_p4x);
        };
    },
    35023: (_p4y, _p4z, _p50) => {
        'use strict';
        var _p51 = null;
        defineModule(_p4z);
        Object.defineProperty(_p4z, '__esModule', {
            'value': true
        }), _p4z.getSlot69PersonalEffect = void 0;
        var _p52 = _p50(74496);
        _p4z.getSlot69PersonalEffect = function(_p53) {
            var _p54 = null,
                _p55 = new _p52.SlotItemEffectModel(),
                _p56 = false,
                _p57 = new _p52.SlotItemEffectModel();
            if (554 == _p53.ship_id || 646 == _p53.ship_id ? (_p57.houg += 1, _p57.tais += 2, _p56 = true) : 553 == _p53.ship_id && (_p57.houg += 1, _p57.tais += 1, _p56 = true), 0 == _p56) return _p55;
            var _p58 = _p53.get_slotnums(69);
            return _p55.add(_p57.multiply(_p58)), _p55;
        };
    },
    78707: (_p59, _p5a, _p5b) => {
        'use strict';
        var _p5c = null;
        defineModule(_p5a);
        Object.defineProperty(_p5a, '__esModule', {
            'value': true
        }), _p5a.getSlot70PersonalEffect = void 0;
        var _p5d = _p5b(74496);
        _p5a.getSlot70PersonalEffect = function(_p5e) {
            var _p5f = null,
                _p5g = new _p5d.SlotItemEffectModel(),
                _p5h = false,
                _p5i = new _p5d.SlotItemEffectModel();
            if ('やましおまる' == _p5e.yomi && (_p5i.houg += 1, _p5i.tais += 1, _p5h = true), 0 == _p5h) return _p5g;
            var _p5j = _p5e.get_slotnums(70);
            return _p5g.add(_p5i.multiply(_p5j)), _p5g;
        };
    },
    44680: function(_p5k, _p5l, _p5m) {
        'use strict';
        var _p5n = null;
        var _p5o = this && this.__importDefault || function(_p5p) {
            var _p5q = null;
            return _p5p && _p5p.__esModule ? _p5p : {
                'default': _p5p
            };
        };
        defineModule(_p5l);
        Object.defineProperty(_p5l, '__esModule', {
            'value': true
        }), _p5l.getSlot78PersonalEffect = void 0;
        var _p5r = _p5m(74496),
            _p5s = _p5o(_p5m(18622));
        _p5l.getSlot78PersonalEffect = function(_p5t) {
            var _p5u = null,
                _p5v = new _p5r.SlotItemEffectModel(),
                _p5w = false,
                _p5x = new _p5r.SlotItemEffectModel(),
                _p5y = 0,
                _p5z = 0,
                _p60 = false;
            if (48 == _p5t.ctype && (_p5x.houg += 1, _p5x.kaih += 1, _p5y = 1, _p5z = 1, _p60 = true, _p5w = true), 0 == _p5w) return _p5v;
            var _p61 = _p5t.get_slotnums(78);
            _p5v.add(_p5x.multiply(_p61));
            var _p62 = 0,
                _p63 = _p5t.get_each_level_nums(78),
                _p64 = 0;
            if (_p60) {
                _p63.map(function(_p65, _p66) {
                    _p66 >= 7 && (_p64 += _p65);
                });
                for (var _p67 = 0, _p68 = _p5t.have_slot_ids(); _p67 < _p68.length; _p67++) {
                    var _p69 = _p68[_p67],
                        _p6a = _p5s.default.model.slot.getMst(_p69),
                        _p6b = _p6a.equipType;
                    12 != _p6b && 13 != _p6b || _p6a.sakuteki >= 5 && (_p62 += _p5t.get_slotnums(parseInt(_p69)));
                }
            }
            if (1 == _p5y && _p62 > 0 && (_p5v.houg += 2, _p5v.kaih += 2, _p5v.raig += 2), 1 == _p5z) {
                _p5v.houg += 1 * _p64;
                var _p6c = _p63[10];
                _p5v.souk += 1 * _p6c;
            }
            return _p5v;
        };
    },
    45749: (_p6d, _p6e, _p6f) => {
        'use strict';
        var _p6g = null;
        defineModule(_p6e);
        Object.defineProperty(_p6e, '__esModule', {
            'value': true
        }), _p6e.getSlot79And81PersonalEffect = void 0;
        var _p6h = _p6f(74496);
        _p6e.getSlot79And81PersonalEffect = function(_p6i) {
            var _p6j = null,
                _p6k = new _p6h.SlotItemEffectModel(),
                _p6l = new _p6h.SlotItemEffectModel();
            if (553 == _p6i.ship_id) _p6l.houg = 3;
            else {
                if (82 == _p6i.ship_id) _p6l.houg = 2;
                else {
                    if (88 == _p6i.ship_id) _p6l.houg = 2;
                    else {
                        if (554 == _p6i.ship_id) _p6l.houg = 3;
                        else {
                            if (411 == _p6i.ship_id) _p6l.houg = 2;
                            else {
                                if (412 != _p6i.ship_id) return _p6k;
                                _p6l.houg = 2;
                            }
                        }
                    }
                }
            }
            var _p6m = _p6i.get_slotnums(79) + _p6i.get_slotnums(81);
            return _p6k = _p6l.multiply(_p6m);
        };
    },
    37334: (_p6n, _p6o, _p6p) => {
        'use strict';
        var _p6q = null;
        defineModule(_p6o);
        Object.defineProperty(_p6o, '__esModule', {
            'value': true
        }), _p6o.getSlot82PersonalEffect = void 0;
        var _p6r = _p6p(74496);
        _p6o.getSlot82PersonalEffect = function(_p6s) {
            var _p6t = null,
                _p6u = new _p6r.SlotItemEffectModel(),
                _p6v = new _p6r.SlotItemEffectModel();
            if (76 == _p6s.ctype && (_p6v.tais = 1, _p6v.kaih = 1), !_p6v.exists()) return _p6u;
            var _p6w = _p6s.get_slotnums(82);
            return _p6u = _p6v.multiply(_p6w);
        };
    },
    2603: function(_p6x, _p6y, _p6z) {
        'use strict';
        var _p70 = null;
        var _p71 = this && this.__importDefault || function(_p72) {
            var _p73 = null;
            return _p72 && _p72.__esModule ? _p72 : {
                'default': _p72
            };
        };
        defineModule(_p6y);
        Object.defineProperty(_p6y, '__esModule', {
            'value': true
        }), _p6y.getSlot84PersonalEffect = void 0;
        var _p74 = _p6z(74496),
            _p75 = _p71(_p6z(18622));
        _p6y.getSlot84PersonalEffect = function(_p76) {
            var _p77 = null,
                _p78 = new _p74.SlotItemEffectModel(),
                _p79 = _p76.get_each_level_nums(84),
                _p7a = 0,
                _p7b = 0;
            if (_p79.forEach(function(_p7c, _p7d) {
                    _p7d >= 4 && (_p7a += _p7c), _p7d >= 7 && (_p7b += _p7c);
                }), 0 == _p7a) return _p78;
            for (var _p7e = 0, _p7f = 0, _p7g = _p76.have_slot_ids(); _p7f < _p7g.length; _p7f++) {
                var _p7h = _p7g[_p7f],
                    _p7i = _p75.default.model.slot.getMst(_p7h),
                    _p7j = _p7i.equipType;
                12 != _p7j && 13 != _p7j || (_p7i.sakuteki >= 5 && _p76.get_slotnums(parseInt(_p7h)), _p7i.taiku >= 2 && (_p7e += _p76.get_slotnums(parseInt(_p7h))));
            }
            var _p7k = _p76.getCountryName();
            _p7a >= 1 && (_p78.tyku += 1 * _p7a, _p78.kaih += 1 * _p7a, 'ドイツ' != _p7k && 'イタリア' != _p7k || (_p78.tyku += 1 * _p7a, _p78.kaih += 1 * _p7a), _p7e >= 1 && (_p78.tyku += 1)), _p7b >= 1 && (_p78.tyku += 1 * _p7b, _p78.houg += 1 * _p7b);
            var _p7l = _p79[10];
            return _p7l >= 1 && (_p78.tyku += 1 * _p7l, _p78.kaih += 1 * _p7l, 'ドイツ' != _p7k && 'イタリア' != _p7k || (_p78.houg += 1)), _p78;
        };
    },
    90725: (_p7m, _p7n, _p7o) => {
        'use strict';
        var _p7p = null;
        defineModule(_p7n);
        Object.defineProperty(_p7n, '__esModule', {
            'value': true
        }), _p7n.getSlot85PersonalEffect = void 0;
        var _p7q = _p7o(74496);
        _p7n.getSlot85PersonalEffect = function(_p7r) {
            var _p7s = null,
                _p7t = new _p7q.SlotItemEffectModel(),
                _p7u = _p7r.get_each_level_over_nums([85]),
                _p7v = _p7u.slot[85][6],
                _p7w = _p7u.slot[85][8],
                _p7x = _p7u.slot[85][10],
                _p7y = _p7r.get_have_rader_nums().air_rader,
                _p7z = _p7r.getCountryName();
            return _p7v > 0 && (_p7t.tyku += 1 * _p7v, _p7t.kaih += 1 * _p7v, _p7y >= 1 && (_p7t.tyku += 2)), _p7w > 0 && (_p7t.houg += 1 * _p7w, 'ドイツ' != _p7z && 'イタリア' != _p7z || (_p7t.tyku += 1 * _p7w, _p7t.kaih += 1 * _p7w)), _p7x > 0 && (_p7t.kaih += 1 * _p7x, _p7t.houm += 1 * _p7x, 'ドイツ' != _p7z && 'イタリア' != _p7z || (_p7t.houg += 1)), _p7t;
        };
    },
    29180: (_p80, _p81, _p82) => {
        'use strict';
        var _p83 = null;
        defineModule(_p81);
        Object.defineProperty(_p81, '__esModule', {
            'value': true
        }), _p81.getSlot87PersonalEffect = void 0;
        var _p84 = _p82(74496);
        _p81.getSlot87PersonalEffect = function(_p85) {
            var _p86 = null,
                _p87 = new _p84.SlotItemEffectModel(),
                _p88 = false,
                _p89 = new _p84.SlotItemEffectModel(),
                _p8a = 0;
            if (951 == _p85.ship_id ? (_p89.houg += 1, _p89.kaih += 1, _p89.raig += 1, _p89.houm += 1, _p88 = true, _p8a = 1) : 181 == _p85.ship_id || 316 == _p85.ship_id || 50 == _p85.ship_id || 229 == _p85.ship_id || 961 == _p85.ship_id ? _p8a = 2 : 591 != _p85.ship_id && 592 != _p85.ship_id && 593 != _p85.ship_id && 954 != _p85.ship_id && 694 != _p85.ship_id || (_p87.kaih += 2, _p87.raig += 1, _p8a = 3), 38 != _p85.ctype && 54 != _p85.ctype && 101 != _p85.ctype || (_p8a = 4), _p88) {
                var _p8b = _p85.get_slotnums(87);
                _p87.add(_p89.multiply(_p8b));
            }
            if (0 == _p8a) return _p87;
            var _p8c = _p85.get_each_level_nums(87),
                _p8d = [];
            return _p8a > 0 && _p8c.forEach(function(_p8e, _p8f) {
                var _p8g = null;
                for (var _p8h = 1; _p8h <= _p85.SLOT_LEVEL_MAX; _p8h++) null == _p8d[_p8h] && (_p8d[_p8h] = 0), _p8f >= _p8h && (_p8d[_p8h] += _p8e);
            }), 1 == _p8a ? (_p8d[6] >= 1 && (_p87.tyku += 1 * _p8d[6]), _p8d[7] >= 1 && (_p87.kaih += 1 * _p8d[7]), _p8d[8] >= 1 && (_p87.raig += 1 * _p8d[8]), _p8d[9] >= 1 && (_p87.houg += 1 * _p8d[9]), _p8d[10] >= 1 && (_p87.houm += 1 * _p8d[10])) : 2 == _p8a ? (_p8d[6] >= 1 && (_p87.kaih += 1 * _p8d[6]), _p8d[7] >= 1 && (_p87.raig += 1 * _p8d[7]), _p8d[8] >= 1 && (_p87.houg += 1 * _p8d[8]), _p8d[9] >= 1 && (_p87.houm += 1 * _p8d[9]), _p8d[10] >= 1 && (_p87.kaih += 1 * _p8d[10])) : 3 == _p8a ? (_p8d[6] > 0 && (_p87.kaih += 1), _p8d[8] > 0 && (_p87.raig += 1), _p8d[10] > 0 && (_p87.houg += 1)) : 4 == _p8a && (_p8d[7] >= 1 && (_p87.kaih += 1 * _p8d[7]), _p8d[8] >= 1 && (_p87.raig += 1 * _p8d[8]), _p8d[10] >= 1 && (_p87.houm += 1 * _p8d[10])), _p87;
        };
    },
    68685: function(_p8i, _p8j, _p8k) {
        'use strict';
        var _p8l = null;
        var _p8m = this && this.__importDefault || function(_p8n) {
            var _p8o = null;
            return _p8n && _p8n.__esModule ? _p8n : {
                'default': _p8n
            };
        };
        defineModule(_p8j);
        Object.defineProperty(_p8j, '__esModule', {
            'value': true
        }), _p8j.getSlot90PersonalEffect = void 0;
        var _p8p = _p8k(74496),
            _p8q = _p8m(_p8k(18622));
        _p8j.getSlot90PersonalEffect = function(_p8r) {
            var _p8s = null,
                _p8t = new _p8p.SlotItemEffectModel(),
                _p8u = new _p8p.SlotItemEffectModel();
            if (142 == _p8r.ship_id ? (_p8u.houg += 2, _p8u.kaih += 1) : 295 == _p8r.ship_id || 416 == _p8r.ship_id || 417 == _p8r.ship_id ? _p8u.houg += 1 : 264 == _p8r.ship_id ? (_p8u.houg += 1, _p8u.tyku += 1) : 501 != _p8r.ship_id && 506 != _p8r.ship_id && 502 != _p8r.ship_id && 507 != _p8r.ship_id || (_p8u.houg += 1), 7 != _p8r.ctype && 13 != _p8r.ctype && 8 != _p8r.ctype && 29 != _p8r.ctype && 9 != _p8r.ctype && 31 != _p8r.ctype || (_p8u.houg += 1), _p8u.exists()) {
                var _p8v = _p8r.get_slotnums(90);
                _p8t = _p8u.multiply(_p8v);
            }
            var _p8w = [];
            if ('あおば' == _p8r.yomi && (_p8w[1] = 1), 13 != _p8r.ctype && 7 != _p8r.ctype || (_p8w[2] = 1), 0 == _p8w.length) return _p8t;
            for (var _p8x = 0, _p8y = 0, _p8z = 0, _p90 = _p8r.have_slot_ids(); _p8z < _p90.length; _p8z++) {
                var _p91 = _p90[_p8z],
                    _p92 = _p8q.default.model.slot.getMst(_p91),
                    _p93 = _p92.equipType;
                12 != _p93 && 13 != _p93 || (_p92.sakuteki >= 5 && (_p8x += _p8r.get_slotnums(parseInt(_p91))), _p92.taiku >= 2 && (_p8y += _p8r.get_slotnums(parseInt(_p91))));
            }
            return _p8y > 0 && null != _p8w[1] && (_p8t.tyku += 5, _p8t.kaih += 2), _p8x > 0 && null != _p8w[2] && (_p8t.houg += 3, _p8t.kaih += 2, _p8t.raig += 2), _p8t;
        };
    },
    26078: (_p94, _p95, _p96) => {
        'use strict';
        var _p97 = null;
        defineModule(_p95);
        Object.defineProperty(_p95, '__esModule', {
            'value': true
        }), _p95.getSlot93PersonalEffect = void 0;
        var _p98 = _p96(74496);
        _p95.getSlot93PersonalEffect = function(_p99) {
            var _p9a = null,
                _p9b = new _p98.SlotItemEffectModel();
            return 'そうりゅう' == _p99.yomi ? _p9b.houg = 1 : 'ひりゅう' == _p99.yomi && (_p9b.houg = 3), _p9b;
        };
    },
    20829: (_p9c, _p9d, _p9e) => {
        'use strict';
        var _p9f = null;
        defineModule(_p9d);
        Object.defineProperty(_p9d, '__esModule', {
            'value': true
        }), _p9d.getSlot94PersonalEffect = void 0;
        var _p9g = _p9e(74496);
        _p9d.getSlot94PersonalEffect = function(_p9h) {
            var _p9i = null,
                _p9j = new _p9g.SlotItemEffectModel();
            if (196 == _p9h.ship_id) _p9j.houg = 7;
            else {
                if (197 != _p9h.ship_id) return _p9j;
                _p9j.houg = 3;
            }
            return _p9j;
        };
    },
    6880: (_p9k, _p9l, _p9m) => {
        'use strict';
        var _p9n = null;
        defineModule(_p9l);
        Object.defineProperty(_p9l, '__esModule', {
            'value': true
        }), _p9l.getSlot99PersonalEffect = void 0;
        var _p9o = _p9m(74496);
        _p9l.getSlot99PersonalEffect = function(_p9p) {
            var _p9q = null,
                _p9r = new _p9o.SlotItemEffectModel();
            return 'そうりゅう' == _p9p.yomi ? _p9r.houg = 4 : 'ひりゅう' == _p9p.yomi && (_p9r.houg = 1), _p9r;
        };
    },
    21403: (_p9s, _p9t, _p9u) => {
        'use strict';
        var _p9v = null;
        defineModule(_p9t);
        Object.defineProperty(_p9t, '__esModule', {
            'value': true
        }), _p9t.getSlotCorsairMkIIPersonalEffect = void 0;
        var _p9w = _p9u(74496);
        _p9t.getSlotCorsairMkIIPersonalEffect = function(_p9x) {
            var _p9y = null,
                _p9z = new _p9w.SlotItemEffectModel(),
                _pa0 = false,
                _pa1 = new _p9w.SlotItemEffectModel();
            112 == _p9x.ctype && (_pa1.houg += 1, _pa1.tyku += 1, _pa1.kaih += 2, _pa0 = true);
            var _pa2 = _p9x.getCountryName();
            if (67 == _p9x.ctype || 78 == _p9x.ctype || 82 == _p9x.ctype || 88 == _p9x.ctype || 108 == _p9x.ctype || 112 == _p9x.ctype ? (_pa1.houg += 1, _pa1.tyku += 2, _pa1.kaih += 3, _pa0 = true) : 'アメリカ' == _pa2 && (_pa1.houg += 1, _pa1.tyku += 1, _pa1.kaih += 2, _pa0 = true), 0 == _pa0) return _p9z;
            var _pa3 = _p9x.get_slotnums(434) + _p9x.get_slotnums(435);
            return _p9z.add(_pa1.multiply(_pa3)), _p9z;
        };
    },
    9195: (_pa4, _pa5, _pa6) => {
        'use strict';
        var _pa7 = null;
        defineModule(_pa5);
        Object.defineProperty(_pa5, '__esModule', {
            'value': true
        }), _pa5.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _pa8 = _pa6(74496);
        _pa5.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_pa9) {
            var _paa = null,
                _pab = new _pa8.SlotItemEffectModel(),
                _pac = false,
                _pad = new _pa8.SlotItemEffectModel();
            if (56 == _pa9.ctype && (_pad.tais += 3, _pad.kaih += 2, _pac = true), 0 == _pac) return _pab;
            var _pae = _pa9.get_slotnums(44) + _pa9.get_slotnums(45) + _pa9.get_slotnums(287) + _pa9.get_slotnums(288);
            return _pab.add(_pad.multiply(_pae)), _pab;
        };
    },
    93297: (_paf, _pag, _pah) => {
        'use strict';
        var _pai = null;
        defineModule(_pag);
        Object.defineProperty(_pag, '__esModule', {
            'value': true
        }), _pag.getSlotDomesticSonarPersonalEffect = void 0;
        var _paj = _pah(74496);
        _pag.getSlotDomesticSonarPersonalEffect = function(_pak) {
            var _pal = null,
                _pam = new _paj.SlotItemEffectModel();
            return 56 == _pak.ctype && (_pam.tais += 2, _pam.kaih += 3), _pam;
        };
    },
    45482: (_pan, _pao, _pap) => {
        'use strict';
        var _paq = null;
        defineModule(_pao);
        Object.defineProperty(_pao, '__esModule', {
            'value': true
        }), _pao.getSlotOtherSuiseiPersonalEffect = void 0;
        var _par = _pap(74496);
        _pao.getSlotOtherSuiseiPersonalEffect = function(_pas) {
            var _pat = null,
                _pau = new _par.SlotItemEffectModel(),
                _pav = new _par.SlotItemEffectModel();
            if (553 == _pas.ship_id) _pav.houg = 2;
            else {
                if (554 != _pas.ship_id) return _pau;
                _pav.houg = 2;
            }
            var _paw = _pas.get_slotnums(24) + _pas.get_slotnums(57) + _pas.get_slotnums(111);
            return _pau = _pav.multiply(_paw);
        };
    },
    10950: (_pax, _pay, _paz) => {
        'use strict';
        var _pb0 = null;
        defineModule(_pay);
        Object.defineProperty(_pay, '__esModule', {
            'value': true
        }), _pay.getSlotSBD_Type_VS_VBPersonalEffect = void 0;
        var _pb1 = _paz(74496);
        _pay.getSlotSBD_Type_VS_VBPersonalEffect = function(_pb2) {
            var _pb3 = null,
                _pb4 = new _pb1.SlotItemEffectModel(),
                _pb5 = false,
                _pb6 = new _pb1.SlotItemEffectModel();
            'レキシントン' == _pb2.yomi ? (_pb6.houg += 4, _pb6.houm += 2, _pb6.tyku += 1, _pb6.kaih += 2, _pb6.saku += 2, _pb5 = true) : 'サラトガ' == _pb2.yomi ? (_pb6.houg += 2, _pb6.houm += 1, _pb6.tyku += 1, _pb6.kaih += 1, _pb6.saku += 1, _pb5 = true) : 'ホーネット' == _pb2.yomi || 'レンジャー' == _pb2.yomi ? (_pb6.houg += 1, _pb6.houm += 1, _pb6.tyku += 1, _pb6.kaih += 1, _pb5 = true) : 'ガンビア・ベイ' != _pb2.yomi && 'ラングレー' != _pb2.yomi || (_pb6.houg += 1, _pb6.kaih += 1, _pb5 = true);
            var _pb7 = _pb2.get_slotnums(543) + _pb2.get_slotnums(544);
            _pb5 && _pb4.add(_pb6.multiply(_pb7));
            var _pb8 = _pb2.haveSlotLevelNumOver(543),
                _pb9 = _pb2.haveSlotLevelNumOver(544);
            return 'アメリカ' == _pb2.getCountryName() && (_pb8[7] >= 1 && (_pb4.houm += 1 * _pb8[7]), _pb8[8] >= 1 && (_pb4.saku += 1 * _pb8[8]), _pb8[9] >= 1 && (_pb4.houg += 1 * _pb8[9]), _pb8[10] >= 1 && (_pb4.houm += 1 * _pb8[10]), _pb9[7] >= 1 && (_pb4.houg += 1 * _pb9[7]), _pb9[8] >= 1 && (_pb4.houm += 1 * _pb9[8]), _pb9[9] >= 1 && (_pb4.tyku += 1 * _pb9[9]), _pb9[10] >= 1 && (_pb4.houg += 1 * _pb9[10])), _pb4;
        };
    },
    45927: (_pba, _pbb, _pbc) => {
        'use strict';
        var _pbd = null;
        defineModule(_pbb);
        Object.defineProperty(_pbb, '__esModule', {
            'value': true
        }), _pbb.getSlotSmokePersonalEffect = void 0;
        var _pbe = _pbc(74496);
        _pbb.getSlotSmokePersonalEffect = function(_pbf) {
            var _pbg = null,
                _pbh = new _pbe.SlotItemEffectModel(),
                _pbi = false,
                _pbj = new _pbe.SlotItemEffectModel();
            if (959 == _pbf.ship_id && (_pbj.kaih += 4, _pbi = true), 'ジョンストン' == _pbf.yomi || 'サミュエル・B・ロバーツ' == _pbf.yomi || 'せんだい' == _pbf.yomi || 'はるかぜ' == _pbf.yomi || 'かみかぜ' == _pbf.yomi || 'しきなみ' == _pbf.yomi || 'うらなみ' == _pbf.yomi || 'あおば' == _pbf.yomi ? (_pbj.kaih += 3, _pbi = true) : 'いなづま' != _pbf.yomi && 'はぐろ' != _pbf.yomi && 'はつしも' != _pbf.yomi && 'かすみ' != _pbf.yomi && 'ふぶき' != _pbf.yomi && 'あたご' != _pbf.yomi && 'あまぎり' != _pbf.yomi && 'はまなみ' != _pbf.yomi || (_pbj.kaih += 2, _pbi = true), 0 == _pbi) return _pbh;
            var _pbk = _pbf.get_slotnums(500) + _pbf.get_slotnums(501);
            return _pbh.add(_pbj.multiply(_pbk)), _pbh;
        };
    },
    75873: (_pbl, _pbm, _pbn) => {
        'use strict';
        var _pbo = null;
        defineModule(_pbm);
        Object.defineProperty(_pbm, '__esModule', {
            'value': true
        }), _pbm.getSlotSocSeagullPersonalEffect = void 0;
        var _pbp = _pbn(74496);
        _pbm.getSlotSocSeagullPersonalEffect = function(_pbq) {
            var _pbr = null,
                _pbs = new _pbp.SlotItemEffectModel(),
                _pbt = {},
                _pbu = false,
                _pbv = false;
            'アメリカ' == _pbq.getCountryName() && (_pbu = true, 3 != _pbq.stype && 5 != _pbq.stype || (_pbv = true)), _pbq.get_slotnums(414);
            var _pbw = _pbq.get_slotnums(539);
            _pbu && (_pbs.saku += 1, _pbt[1] = 1), _pbv && (_pbs.houg += 1, _pbs.saku += 1, 110 == _pbq.ctype && _pbw >= 1 && (_pbs.houm += 1), _pbt[2] = 1);
            var _pbx = _pbq.haveSlotLevelNumOver(414),
                _pby = _pbq.haveSlotLevelNumOver(539);
            return null != _pbt[1] && (_pbx[5] >= 1 && (_pbs.kaih += 1), _pby[3] >= 1 && (_pbs.kaih += 1), _pby[5] >= 1 && (_pbs.saku += 1), _pby[7] >= 1 && (_pbs.houm += 1)), null != _pbt[2] && (_pbx[3] >= 1 && (_pbs.saku += 1), _pbx[8] >= 1 && (_pbs.kaih += 1), _pbx[10] >= 1 && (_pbs.houg += 1), _pby[6] >= 1 && (_pbs.tyku += 1), _pby[8] >= 1 && (_pbs.kaih += 1), _pby[9] >= 1 && (_pbs.houg += 1), _pby[10] >= 1 && (_pbs.houm += 1)), _pbs;
        };
    },
    32666: (_pbz, _pc0, _pc1) => {
        'use strict';
        var _pc2 = null;
        defineModule(_pc0);
        Object.defineProperty(_pc0, '__esModule', {
            'value': true
        }), _pc0.getSlotTokuYonPersonalEffect = void 0;
        var _pc3 = _pc1(74496);
        _pc0.getSlotTokuYonPersonalEffect = function(_pc4) {
            var _pc5 = null,
                _pc6 = new _pc3.SlotItemEffectModel(),
                _pc7 = false,
                _pc8 = new _pc3.SlotItemEffectModel(),
                _pc9 = 0,
                _pca = _pc4.get_slotnums(525),
                _pcb = _pc4.get_slotnums(526),
                _pcc = _pca + _pcb;
            if (13 != _pc4.stype && 14 != _pc4.stype || (_pc8.houg += 1, _pc8.raig += 2, _pc8.kaih -= 1, _pc7 = true, _pc9 = 1, 'い36' != _pc4.yomi && 'い41' != _pc4.yomi || (_pc6.houg += 2, _pc6.raig += 1, _pc6.houm += 2), _pcb >= 1 && (_pc6.houg += 1 * _pcb, _pc6.raig += 1 * _pcb, _pc6.houm += 1 * _pcb)), 0 == _pc7) return _pc6;
            if (_pc6.add(_pc8.multiply(_pcc)), 0 == _pc9) return _pc6;
            var _pcd = _pc4.get_each_level_over_nums([525, 526]),
                _pce = _pcd.slot[525],
                _pcf = _pcd.slot[526];
            if (1 == _pc9) {
                if (_pce[1] >= 1 || _pcf[1] >= 1) {
                    var _pcg = _pce[1] + _pcf[1];
                    _pc6.raig += 1 * _pcg;
                }
                if (_pcf[2] >= 1) {
                    var _pch = _pce[2] + _pcf[2];
                    _pc6.houg += 1 * _pch;
                }
                if (_pce[3] >= 1 || _pcf[3] >= 1) {
                    var _pci = _pce[3] + _pcf[3];
                    _pc6.houm += 1 * _pci;
                }
                if (_pcf[4] >= 1) {
                    var _pcj = _pce[4] + _pcf[4];
                    _pc6.raig += 1 * _pcj;
                }
                if (_pce[6] >= 1 || _pcf[6] >= 1) {
                    var _pck = _pce[6] + _pcf[6];
                    _pc6.houm += 1 * _pck;
                }
                if (_pcf[8] >= 1) {
                    var _pcl = _pce[8] + _pcf[8];
                    _pc6.houg += 1 * _pcl;
                }
                if (_pce[10] >= 1 || _pcf[10] >= 1) {
                    var _pcm = _pce[10] + _pcf[10];
                    _pc6.raig += 1 * _pcm;
                }
            }
            return _pc6;
        };
    },
    29805: (_pcn, _pco, _pcp) => {
        'use strict';
        var _pcq = null;
        defineModule(_pco);
        Object.defineProperty(_pco, '__esModule', {
            'value': true
        }), _pco.getSlotType10PersonalEffect = void 0;
        var _pcr = _pcp(74496);
        _pco.getSlotType10PersonalEffect = function(_pcs) {
            var _pct = null,
                _pcu = new _pcr.SlotItemEffectModel();
            return 662 == _pcs.ship_id || 663 == _pcs.ship_id || 668 == _pcs.ship_id ? (_pcu.houg += 2, _pcu.kaih += 1, _pcu.tais += 3) : 501 != _pcs.ship_id && 506 != _pcs.ship_id && 502 != _pcs.ship_id && 507 != _pcs.ship_id || (_pcu.houg += 2), _pcu;
        };
    },
    58913: (_pcv, _pcw, _pcx) => {
        'use strict';
        var _pcy = null;
        defineModule(_pcw);
        Object.defineProperty(_pcw, '__esModule', {
            'value': true
        }), _pcw.getSlotType11PersonalEffect = void 0;
        var _pcz = _pcx(74496);
        _pcw.getSlotType11PersonalEffect = function(_pd0) {
            var _pd1 = null,
                _pd2 = new _pcz.SlotItemEffectModel();
            return 662 == _pd0.ship_id || 663 == _pd0.ship_id || 668 == _pd0.ship_id ? (_pd2.houg += 1, _pd2.kaih += 1, _pd2.tais += 1) : 501 != _pd0.ship_id && 506 != _pd0.ship_id && 502 != _pd0.ship_id && 507 != _pd0.ship_id || (_pd2.houg += 1, _pd2.kaih += 1), _pd2;
        };
    },
    55421: (_pd3, _pd4, _pd5) => {
        'use strict';
        var _pd6 = null;
        defineModule(_pd4);
        Object.defineProperty(_pd4, '__esModule', {
            'value': true
        }), _pd4.getSlotType25PersonalEffect = void 0;
        var _pd7 = _pd5(74496);
        _pd4.getSlotType25PersonalEffect = function(_pd8) {
            var _pd9 = null,
                _pda = new _pd7.SlotItemEffectModel();
            return 662 == _pd8.ship_id ? (_pda.tais += 4, _pda.kaih += 1) : 663 != _pd8.ship_id && 668 != _pd8.ship_id || (_pda.tais += 3, _pda.kaih += 1), _pda;
        };
    },
    272: function(_pdb, _pdc, _pdd) {
        'use strict';
        var _pde = null;
        var _pdf = this && this.__importDefault || function(_pdg) {
            var _pdh = null;
            return _pdg && _pdg.__esModule ? _pdg : {
                'default': _pdg
            };
        };
        defineModule(_pdc);
        Object.defineProperty(_pdc, '__esModule', {
            'value': true
        }), _pdc.getSlotType9PersonalEffect = void 0;
        var _pdi = _pdd(74496),
            _pdj = _pdf(_pdd(18622));
        _pdc.getSlotType9PersonalEffect = function(_pdk) {
            var _pdl = null,
                _pdm = new _pdi.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_pdk.stype]) return _pdm;
            for (var _pdn = 0, _pdo = 0, _pdp = _pdk.have_slot_ids(); _pdo < _pdp.length; _pdo++) {
                var _pdq = _pdp[_pdo];
                if (9 == _pdj.default.model.slot.getMst(_pdq).equipType)
                    for (var _pdr = 0, _pds = _pdk.have_slots_dict[parseInt(_pdq)]; _pdr < _pds.length; _pdr++) {
                        var _pdt = _pds[_pdr].level;
                        _pdn < _pdt && (_pdn = _pdt);
                    }
            }
            return _pdn >= 2 && (_pdm.saku += 1), _pdn >= 4 && (_pdm.houg += 1), _pdn >= 6 && (_pdm.saku += 1), _pdn >= 10 && (_pdm.houg += 1, _pdm.saku += 1), _pdm;
        };
    },
    49964: (_pdu, _pdv, _pdw) => {
        'use strict';
        var _pdx = null;
        defineModule(_pdv);
        Object.defineProperty(_pdv, '__esModule', {
            'value': true
        }), _pdv.getSlotYellowWingsPersonalEffect = void 0;
        var _pdy = _pdw(74496);
        _pdv.getSlotYellowWingsPersonalEffect = function(_pdz) {
            var _pe0 = null,
                _pe1 = new _pdy.SlotItemEffectModel(),
                _pe2 = false,
                _pe3 = new _pdy.SlotItemEffectModel();
            'レキシントン' == _pdz.yomi ? (_pe3.houg += 3, _pe3.houm += 2, _pe3.tyku += 1, _pe3.kaih += 2, _pe3.saku += 1, _pe2 = true) : 'サラトガ' == _pdz.yomi ? (_pe3.houg += 2, _pe3.houm += 1, _pe3.tyku += 1, _pe3.kaih += 1, _pe3.saku += 1, _pe2 = true) : 'ホーネット' != _pdz.yomi && 'レンジャー' != _pdz.yomi || (_pe3.houg += 1, _pe3.houm += 1, _pe3.kaih += 1, _pe2 = true);
            var _pe4 = _pdz.get_slotnums(541) + _pdz.get_slotnums(542);
            _pe2 && _pe1.add(_pe3.multiply(_pe4));
            var _pe5 = _pdz.haveSlotLevelNumOver(541),
                _pe6 = _pdz.haveSlotLevelNumOver(542);
            return 'アメリカ' == _pdz.getCountryName() && (_pe5[7] >= 1 && (_pe1.kaih += 1 * _pe5[7]), _pe5[10] >= 1 && (_pe1.houg += 1 * _pe5[10]), _pe6[7] >= 1 && (_pe1.houm += 1 * _pe6[7]), _pe6[10] >= 1 && (_pe1.houg += 1 * _pe6[10])), _pe1;
        };
    },
    54518: (_pe7, _pe8, _pe9) => {
        'use strict';
        var _pea = null;
        defineModule(_pe8);
        Object.defineProperty(_pe8, '__esModule', {
            'value': true
        }), _pe8.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _peb = _pe9(74496);
        _pe8.getSlot_16InchMkXRensouhou_PersonalEffect = function(_pec) {
            var _ped = null,
                _pee = new _peb.SlotItemEffectModel();
            if (93 == _pec.ctype) {
                var _pef = _pec.get_slotnums(330);
                _pef > 0 && (_pee.houg = _pee.houg + 1 * _pef);
                var _peg = _pec.get_slotnums(331);
                _peg > 0 && (_pee.houg = _pee.houg + 1 * _peg, 1496 != _pec.ship_id && 918 != _pec.ship_id || (_pee.houg = _pee.houg + 1 * _peg, _pee.kaih = _pee.kaih + 1 * _peg));
                var _peh = _pec.get_slotnums(332);
                return _peh > 0 && (_pee.houg = _pee.houg + 1 * _peh, 1496 != _pec.ship_id && 918 != _pec.ship_id || (_pee.houg = _pee.houg + 1 * _peh, _pee.kaih = _pee.kaih + 1 * _peh, _pee.tyku = _pee.tyku + 1 * _peh)), _pee;
            }
            var _pei = new _peb.SlotItemEffectModel();
            if (19 == _pec.ctype ? (_pei.houg = 1, (541 == _pec.ship_id || 573 == _pec.ship_id) && (_pei.houg += 1)) : 88 == _pec.ctype && (_pei.houg = 1, 576 == _pec.ship_id && (_pei.houg += 1)), !_pei.exists()) return _pee;
            var _pej = _pec.get_slotnums(330) + _pec.get_slotnums(331) + _pec.get_slotnums(332);
            return _pee = _pei.multiply(_pej);
        };
    },
    79353: (_pek, _pel, _pem) => {
        'use strict';
        var _pen = null;
        defineModule(_pel);
        Object.defineProperty(_pel, '__esModule', {
            'value': true
        }), _pel.getZuiunSeriesEffect = void 0;
        var _peo = _pem(74496);
        _pel.getZuiunSeriesEffect = function(_pep) {
            var _peq = null,
                _per = new _peo.SlotItemEffectModel(),
                _pes = false,
                _pet = new _peo.SlotItemEffectModel();
            if (662 == _pep.ship_id ? (_per.houg += 2, _per.kaih += 1) : 663 == _pep.ship_id || 668 == _pep.ship_id || 501 == _pep.ship_id || 506 == _pep.ship_id ? (_per.houg += 2, _pet.kaih += 1, _pet.tyku += 1, _pes = true) : 502 != _pep.ship_id && 507 != _pep.ship_id || (_per.houg += 1, _pet.kaih += 1, _pet.tyku += 1, _pes = true), 0 == _pes) return _per;
            var _peu = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_pev) {
                var _pew = null;
                _peu += _pep.get_slotnums(_pev);
            }), _per.add(_pet.multiply(_peu)), _per;
        };
    },
    89051: function(_pex, _pey, _pez) {
        'use strict';
        var _pf0 = null;
        var _pf1 = this && this.__createBinding || (Object.create ? function(_pf2, _pf3, _pf4, _pf5) {
                var _pf6 = null;
                void 0 === _pf5 && (_pf5 = _pf4);
                var _pf7 = Object.getOwnPropertyDescriptor(_pf3, _pf4);
                _pf7 && !('get' in _pf7 ? !_pf3.__esModule : _pf7.writable || _pf7.configurable) || (_pf7 = {
                    'enumerable': true,
                    'get': function() {
                        return _pf3[_pf4];
                    }
                }), Object.defineProperty(_pf2, _pf5, _pf7);
            } : function(_pf8, _pf9, _pfa, _pfb) {
                void 0 === _pfb && (_pfb = _pfa), _pf8[_pfb] = _pf9[_pfa];
            }),
            _pfc = this && this.__exportStar || function(_pfd, _pfe) {
                var _pff = null;
                for (var _pfg in _pfd) 'default' === _pfg || Object.prototype.hasOwnProperty.call(_pfe, _pfg) || _pf1(_pfe, _pfd, _pfg);
            };
        defineModule(_pey);
        Object.defineProperty(_pey, '__esModule', {
            'value': true
        }), _pfc(_pez(34165), _pey), _pfc(_pez(81018), _pey), _pfc(_pez(56716), _pey), _pfc(_pez(17713), _pey), _pfc(_pez(54518), _pey), _pfc(_pez(66985), _pey), _pfc(_pez(88102), _pey), _pfc(_pez(66904), _pey), _pfc(_pez(98137), _pey), _pfc(_pez(69954), _pey), _pfc(_pez(22218), _pey), _pfc(_pez(88271), _pey), _pfc(_pez(23035), _pey), _pfc(_pez(2578), _pey), _pfc(_pez(17143), _pey), _pfc(_pez(16164), _pey), _pfc(_pez(35023), _pey), _pfc(_pez(44680), _pey), _pfc(_pez(45749), _pey), _pfc(_pez(37334), _pey), _pfc(_pez(29180), _pey), _pfc(_pez(68685), _pey), _pfc(_pez(26078), _pey), _pfc(_pez(20829), _pey), _pfc(_pez(6880), _pey), _pfc(_pez(17213), _pey), _pfc(_pez(40176), _pey), _pfc(_pez(32889), _pey), _pfc(_pez(11285), _pey), _pfc(_pez(96200), _pey), _pfc(_pez(9115), _pey), _pfc(_pez(37173), _pey), _pfc(_pez(21713), _pey), _pfc(_pez(59823), _pey), _pfc(_pez(57440), _pey), _pfc(_pez(29240), _pey), _pfc(_pez(40885), _pey), _pfc(_pez(19614), _pey), _pfc(_pez(87220), _pey), _pfc(_pez(81367), _pey), _pfc(_pez(13052), _pey), _pfc(_pez(94968), _pey), _pfc(_pez(48658), _pey), _pfc(_pez(1906), _pey), _pfc(_pez(61887), _pey), _pfc(_pez(47970), _pey), _pfc(_pez(31797), _pey), _pfc(_pez(45738), _pey), _pfc(_pez(34718), _pey), _pfc(_pez(69245), _pey), _pfc(_pez(18478), _pey), _pfc(_pez(2899), _pey), _pfc(_pez(57120), _pey), _pfc(_pez(74985), _pey), _pfc(_pez(9234), _pey), _pfc(_pez(30802), _pey), _pfc(_pez(97002), _pey), _pfc(_pez(16748), _pey), _pfc(_pez(53618), _pey), _pfc(_pez(72573), _pey), _pfc(_pez(8955), _pey), _pfc(_pez(98947), _pey), _pfc(_pez(44726), _pey), _pfc(_pez(93065), _pey), _pfc(_pez(85767), _pey), _pfc(_pez(38314), _pey), _pfc(_pez(59747), _pey), _pfc(_pez(40649), _pey), _pfc(_pez(13533), _pey), _pfc(_pez(12138), _pey), _pfc(_pez(30042), _pey), _pfc(_pez(33623), _pey), _pfc(_pez(85630), _pey), _pfc(_pez(88736), _pey), _pfc(_pez(49341), _pey), _pfc(_pez(74306), _pey), _pfc(_pez(83898), _pey), _pfc(_pez(71873), _pey), _pfc(_pez(53122), _pey), _pfc(_pez(51063), _pey), _pfc(_pez(91491), _pey), _pfc(_pez(85495), _pey), _pfc(_pez(65365), _pey), _pfc(_pez(98164), _pey), _pfc(_pez(38114), _pey), _pfc(_pez(21003), _pey), _pfc(_pez(77010), _pey), _pfc(_pez(39126), _pey), _pfc(_pez(72176), _pey), _pfc(_pez(33846), _pey), _pfc(_pez(97157), _pey), _pfc(_pez(63406), _pey), _pfc(_pez(66373), _pey), _pfc(_pez(19707), _pey), _pfc(_pez(63978), _pey), _pfc(_pez(92382), _pey), _pfc(_pez(78415), _pey), _pfc(_pez(23090), _pey), _pfc(_pez(18776), _pey), _pfc(_pez(39656), _pey), _pfc(_pez(66039), _pey), _pfc(_pez(64679), _pey), _pfc(_pez(95953), _pey), _pfc(_pez(86384), _pey), _pfc(_pez(65345), _pey), _pfc(_pez(46514), _pey), _pfc(_pez(81976), _pey), _pfc(_pez(89331), _pey), _pfc(_pez(73973), _pey), _pfc(_pez(21178), _pey), _pfc(_pez(5079), _pey), _pfc(_pez(95014), _pey), _pfc(_pez(53099), _pey), _pfc(_pez(76201), _pey), _pfc(_pez(24931), _pey), _pfc(_pez(60978), _pey), _pfc(_pez(74312), _pey), _pfc(_pez(54350), _pey), _pfc(_pez(26262), _pey), _pfc(_pez(45530), _pey), _pfc(_pez(44053), _pey), _pfc(_pez(65441), _pey), _pfc(_pez(33258), _pey), _pfc(_pez(92168), _pey), _pfc(_pez(85975), _pey), _pfc(_pez(98467), _pey), _pfc(_pez(88348), _pey), _pfc(_pez(21097), _pey), _pfc(_pez(37273), _pey), _pfc(_pez(72694), _pey), _pfc(_pez(62067), _pey), _pfc(_pez(87817), _pey), _pfc(_pez(93526), _pey), _pfc(_pez(33084), _pey), _pfc(_pez(97831), _pey), _pfc(_pez(45482), _pey), _pfc(_pez(272), _pey), _pfc(_pez(69377), _pey), _pfc(_pez(31127), _pey), _pfc(_pez(79353), _pey), _pfc(_pez(17274), _pey), _pfc(_pez(91302), _pey), _pfc(_pez(82229), _pey), _pfc(_pez(10325), _pey), _pfc(_pez(351), _pey), _pfc(_pez(4050), _pey), _pfc(_pez(29805), _pey), _pfc(_pez(58913), _pey), _pfc(_pez(55421), _pey), _pfc(_pez(87845), _pey), _pfc(_pez(17562), _pey), _pfc(_pez(78466), _pey), _pfc(_pez(40061), _pey), _pfc(_pez(9195), _pey), _pfc(_pez(93297), _pey), _pfc(_pez(15133), _pey), _pfc(_pez(55747), _pey), _pfc(_pez(33155), _pey), _pfc(_pez(79086), _pey), _pfc(_pez(2306), _pey), _pfc(_pez(14386), _pey), _pfc(_pez(80225), _pey), _pfc(_pez(17732), _pey), _pfc(_pez(47169), _pey), _pfc(_pez(77670), _pey), _pfc(_pez(79988), _pey), _pfc(_pez(92253), _pey), _pfc(_pez(74428), _pey), _pfc(_pez(75873), _pey), _pfc(_pez(2631), _pey), _pfc(_pez(27177), _pey), _pfc(_pez(94781), _pey), _pfc(_pez(53908), _pey), _pfc(_pez(79813), _pey), _pfc(_pez(16088), _pey), _pfc(_pez(93733), _pey), _pfc(_pez(69939), _pey), _pfc(_pez(33734), _pey), _pfc(_pez(34432), _pey), _pfc(_pez(97423), _pey), _pfc(_pez(23551), _pey), _pfc(_pez(99791), _pey), _pfc(_pez(21403), _pey), _pfc(_pez(6173), _pey), _pfc(_pez(23934), _pey), _pfc(_pez(53709), _pey), _pfc(_pez(88838), _pey), _pfc(_pez(99790), _pey), _pfc(_pez(18387), _pey), _pfc(_pez(70941), _pey), _pfc(_pez(35025), _pey), _pfc(_pez(2603), _pey), _pfc(_pez(78707), _pey), _pfc(_pez(89058), _pey), _pfc(_pez(84372), _pey), _pfc(_pez(96804), _pey), _pfc(_pez(33896), _pey), _pfc(_pez(11031), _pey), _pfc(_pez(71383), _pey), _pfc(_pez(55888), _pey), _pfc(_pez(2258), _pey), _pfc(_pez(38003), _pey), _pfc(_pez(92174), _pey), _pfc(_pez(43768), _pey), _pfc(_pez(73254), _pey), _pfc(_pez(55734), _pey), _pfc(_pez(81254), _pey), _pfc(_pez(65455), _pey), _pfc(_pez(70362), _pey), _pfc(_pez(61977), _pey), _pfc(_pez(43607), _pey), _pfc(_pez(68086), _pey), _pfc(_pez(78173), _pey), _pfc(_pez(22581), _pey), _pfc(_pez(20418), _pey), _pfc(_pez(93373), _pey), _pfc(_pez(13053), _pey), _pfc(_pez(47874), _pey), _pfc(_pez(42788), _pey), _pfc(_pez(57664), _pey), _pfc(_pez(44990), _pey), _pfc(_pez(17712), _pey), _pfc(_pez(83957), _pey), _pfc(_pez(78539), _pey), _pfc(_pez(96282), _pey), _pfc(_pez(49679), _pey), _pfc(_pez(45927), _pey), _pfc(_pez(90312), _pey), _pfc(_pez(86856), _pey), _pfc(_pez(78123), _pey), _pfc(_pez(25765), _pey), _pfc(_pez(29493), _pey), _pfc(_pez(28221), _pey), _pfc(_pez(14830), _pey), _pfc(_pez(54047), _pey), _pfc(_pez(76054), _pey), _pfc(_pez(90725), _pey), _pfc(_pez(93053), _pey), _pfc(_pez(88792), _pey), _pfc(_pez(33242), _pey), _pfc(_pez(59415), _pey), _pfc(_pez(3296), _pey), _pfc(_pez(32666), _pey), _pfc(_pez(36731), _pey), _pfc(_pez(30450), _pey), _pfc(_pez(85127), _pey), _pfc(_pez(87204), _pey), _pfc(_pez(2380), _pey), _pfc(_pez(96580), _pey), _pfc(_pez(15653), _pey), _pfc(_pez(41410), _pey), _pfc(_pez(25851), _pey), _pfc(_pez(6482), _pey), _pfc(_pez(70332), _pey), _pfc(_pez(91275), _pey), _pfc(_pez(72743), _pey), _pfc(_pez(49964), _pey), _pfc(_pez(10950), _pey), _pfc(_pez(57041), _pey), _pfc(_pez(74608), _pey);
    },
    82692: function(_pfh, _pfi, _pfj) {
        'use strict';
        var _pfk = null;
        var _pfl = this && this.__createBinding || (Object.create ? function(_pfm, _pfn, _pfo, _pfp) {
                var _pfq = null;
                void 0 === _pfp && (_pfp = _pfo);
                var _pfr = Object.getOwnPropertyDescriptor(_pfn, _pfo);
                _pfr && !('get' in _pfr ? !_pfn.__esModule : _pfr.writable || _pfr.configurable) || (_pfr = {
                    'enumerable': true,
                    'get': function() {
                        return _pfn[_pfo];
                    }
                }), Object.defineProperty(_pfm, _pfp, _pfr);
            } : function(_pfs, _pft, _pfu, _pfv) {
                void 0 === _pfv && (_pfv = _pfu), _pfs[_pfv] = _pft[_pfu];
            }),
            _pfw = this && this.__setModuleDefault || (Object.create ? function(_pfx, _pfy) {
                var _pfz = null;
                Object.defineProperty(_pfx, 'default', {
                    'enumerable': true,
                    'value': _pfy
                });
            } : function(_pg0, _pg1) {
                var _pg2 = null;
                _pg0.default = _pg1;
            }),
            _pg3 = this && this.__importStar || function(_pg4) {
                var _pg5 = null;
                if (_pg4 && _pg4.__esModule) return _pg4;
                var _pg6 = {};
                if (null != _pg4) {
                    for (var _pg7 in _pg4) 'default' !== _pg7 && Object.prototype.hasOwnProperty.call(_pg4, _pg7) && _pfl(_pg6, _pg4, _pg7);
                }
                return _pfw(_pg6, _pg4), _pg6;
            };
        defineModule(_pfi);
        Object.defineProperty(_pfi, '__esModule', {
            'value': true
        }), _pfi.SlotItemEffectUtil = void 0;
        var _pg8, _pg9 = _pfj(73785),
            _pga = _pg3(_pfj(89051)),
            _pgb = _pfj(74496);
        ! function(_pgc) {
            var _pgd = null;
            _pgc.getSlotitemEffect = function(_pge, _pgf) {
                var _pgg = null;
                if (null == _pge || null == _pgf) return null;
                for (var _pgh = new _pg9.SlotItemEffectParamModel(_pge, _pgf), _pgi = [{
                        'isExecute': Boolean(_pgh.get_type3_nums(9)),
                        'execFunc': _pga.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_type3_nums(10)),
                        'execFunc': _pga.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_type3_nums(11)),
                        'execFunc': _pga.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_type3_nums(12)) || Boolean(_pgh.get_type3_nums(13)),
                        'execFunc': _pga.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_type3_nums(25)),
                        'execFunc': _pga.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_type3_nums(29)),
                        'execFunc': _pga.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_type3_nums(42)),
                        'execFunc': _pga.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(3)) || Boolean(_pgh.get_slotnums(122)) || Boolean(_pgh.get_slotnums(533)),
                        'execFunc': _pga.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(5)),
                        'execFunc': _pga.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(12)),
                        'execFunc': _pga.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(15)),
                        'execFunc': _pga.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(18)) || Boolean(_pgh.get_slotnums(52)),
                        'execFunc': _pga.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(19)),
                        'execFunc': _pga.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(24)) || Boolean(_pgh.get_slotnums(57)) || Boolean(_pgh.get_slotnums(111)),
                        'execFunc': _pga.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(26)) || Boolean(_pgh.get_slotnums(62)) || Boolean(_pgh.get_slotnums(79)) || Boolean(_pgh.get_slotnums(80)) || Boolean(_pgh.get_slotnums(81)) || Boolean(_pgh.get_slotnums(207)) || Boolean(_pgh.get_slotnums(208)),
                        'execFunc': _pga.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(35)),
                        'execFunc': _pga.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(39)) || Boolean(_pgh.get_slotnums(40)) || Boolean(_pgh.get_slotnums(49)) || Boolean(_pgh.get_slotnums(131)),
                        'execFunc': _pga.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(30)) || Boolean(_pgh.get_slotnums(410)),
                        'execFunc': _pga.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(44)) || Boolean(_pgh.get_slotnums(45)) || Boolean(_pgh.get_slotnums(287)) || Boolean(_pgh.get_slotnums(288)),
                        'execFunc': _pga.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(46)) || Boolean(_pgh.get_slotnums(47)) || Boolean(_pgh.get_slotnums(149)) || Boolean(_pgh.get_slotnums(132)) || Boolean(_pgh.get_slotnums(438)),
                        'execFunc': _pga.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(47)) || Boolean(_pgh.get_slotnums(438)),
                        'execFunc': _pga.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(50)),
                        'execFunc': _pga.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(58)),
                        'execFunc': _pga.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(59)),
                        'execFunc': _pga.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(60)) || Boolean(_pgh.get_slotnums(154)) || Boolean(_pgh.get_slotnums(219)),
                        'execFunc': _pga.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(61)),
                        'execFunc': _pga.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(61)),
                        'execFunc': _pga.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(63)),
                        'execFunc': _pga.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(66)) || Boolean(_pgh.get_slotnums(220)),
                        'execFunc': _pga.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(67)),
                        'execFunc': _pga.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(69)),
                        'execFunc': _pga.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(70)),
                        'execFunc': _pga.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(76)) || Boolean(_pgh.get_slotnums(114)),
                        'execFunc': _pga.getSlot38cmTwinGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(78)),
                        'execFunc': _pga.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(79)) || Boolean(_pgh.get_slotnums(81)),
                        'execFunc': _pga.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(82)),
                        'execFunc': _pga.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(84)),
                        'execFunc': _pga.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(85)),
                        'execFunc': _pga.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(87)),
                        'execFunc': _pga.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(90)),
                        'execFunc': _pga.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(93)),
                        'execFunc': _pga.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(94)),
                        'execFunc': _pga.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(99)),
                        'execFunc': _pga.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(100)),
                        'execFunc': _pga.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(104)),
                        'execFunc': _pga.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(106)) || Boolean(_pgh.get_slotnums(450)),
                        'execFunc': _pga.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(115)),
                        'execFunc': _pga.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(118)) || Boolean(_pgh.get_slotnums(521)),
                        'execFunc': _pga.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(119)),
                        'execFunc': _pga.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(121)),
                        'execFunc': _pga.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(122)),
                        'execFunc': _pga.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(123)),
                        'execFunc': _pga.getSlot123PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(124)),
                        'execFunc': _pga.getSlot124PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(128)) || Boolean(_pgh.get_slotnums(281)),
                        'execFunc': _pga.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(129)),
                        'execFunc': _pga.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(130)),
                        'execFunc': _pga.getSlot130PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(132)),
                        'execFunc': _pga.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(136)),
                        'execFunc': _pga.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(139)),
                        'execFunc': _pga.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(143)),
                        'execFunc': _pga.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(144)),
                        'execFunc': _pga.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(147)) || Boolean(_pgh.get_slotnums(393)) || Boolean(_pgh.get_slotnums(394)),
                        'execFunc': _pga.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(149)),
                        'execFunc': _pga.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(165)) || Boolean(_pgh.get_slotnums(216)),
                        'execFunc': _pga.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(171)),
                        'execFunc': _pga.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(174)),
                        'execFunc': _pga.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(179)),
                        'execFunc': _pga.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(184)),
                        'execFunc': _pga.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(188)),
                        'execFunc': _pga.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(189)),
                        'execFunc': _pga.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(194)),
                        'execFunc': _pga.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(195)),
                        'execFunc': _pga.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(204)),
                        'execFunc': _pga.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(217)),
                        'execFunc': _pga.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(220)),
                        'execFunc': _pga.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(227)),
                        'execFunc': _pga.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(228)),
                        'execFunc': _pga.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(229)),
                        'execFunc': _pga.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(234)),
                        'execFunc': _pga.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(235)),
                        'execFunc': _pga.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(237)) || Boolean(_pgh.get_slotnums(322)) || Boolean(_pgh.get_slotnums(323)) || Boolean(_pgh.get_slotnums(490)),
                        'execFunc': _pga.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(237)),
                        'execFunc': _pga.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(238)) || Boolean(_pgh.get_slotnums(239)),
                        'execFunc': _pga.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(242)),
                        'execFunc': _pga.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(243)),
                        'execFunc': _pga.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(244)),
                        'execFunc': _pga.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(245)) || Boolean(_pgh.get_slotnums(246)) || Boolean(_pgh.get_slotnums(468)),
                        'execFunc': _pga.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(247)),
                        'execFunc': _pga.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(252)),
                        'execFunc': _pga.getSlot252PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(266)),
                        'execFunc': _pga.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(266)),
                        'execFunc': _pga.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(267)) || Boolean(_pgh.get_slotnums(366)),
                        'execFunc': _pga.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(267)) || Boolean(_pgh.get_slotnums(366)),
                        'execFunc': _pga.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(268)),
                        'execFunc': _pga.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(271)),
                        'execFunc': _pga.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(275)),
                        'execFunc': _pga.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(277)),
                        'execFunc': _pga.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(278)),
                        'execFunc': _pga.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(279)),
                        'execFunc': _pga.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(282)),
                        'execFunc': _pga.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(283)),
                        'execFunc': _pga.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(285)),
                        'execFunc': _pga.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(286)),
                        'execFunc': _pga.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(286)),
                        'execFunc': _pga.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(286)),
                        'execFunc': _pga.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(287)),
                        'execFunc': _pga.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(288)),
                        'execFunc': _pga.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(289)),
                        'execFunc': _pga.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(290)),
                        'execFunc': _pga.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(291)),
                        'execFunc': _pga.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(292)),
                        'execFunc': _pga.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(293)),
                        'execFunc': _pga.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(294)),
                        'execFunc': _pga.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(295)),
                        'execFunc': _pga.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(296)),
                        'execFunc': _pga.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(297)),
                        'execFunc': _pga.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(298)) || Boolean(_pgh.get_slotnums(299)) || Boolean(_pgh.get_slotnums(300)),
                        'execFunc': _pga.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(301)),
                        'execFunc': _pga.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(302)),
                        'execFunc': _pga.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(303)),
                        'execFunc': _pga.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(304)),
                        'execFunc': _pga.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(305)) || Boolean(_pgh.get_slotnums(306)),
                        'execFunc': _pga.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(307)),
                        'execFunc': _pga.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(308)),
                        'execFunc': _pga.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(310)) || Boolean(_pgh.get_slotnums(518)),
                        'execFunc': _pga.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(313)),
                        'execFunc': _pga.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(314)),
                        'execFunc': _pga.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(315)),
                        'execFunc': _pga.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(316)),
                        'execFunc': _pga.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(317)),
                        'execFunc': _pga.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(318)),
                        'execFunc': _pga.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(319)),
                        'execFunc': _pga.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(320)),
                        'execFunc': _pga.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(322)),
                        'execFunc': _pga.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(323)),
                        'execFunc': _pga.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(324)) || Boolean(_pgh.get_slotnums(325)),
                        'execFunc': _pga.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(326)),
                        'execFunc': _pga.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(327)),
                        'execFunc': _pga.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(328)),
                        'execFunc': _pga.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(329)),
                        'execFunc': _pga.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(330)) || Boolean(_pgh.get_slotnums(331)) || Boolean(_pgh.get_slotnums(332)),
                        'execFunc': _pga.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(335)),
                        'execFunc': _pga.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(336)),
                        'execFunc': _pga.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(337)),
                        'execFunc': _pga.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(338)),
                        'execFunc': _pga.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(339)),
                        'execFunc': _pga.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(340)),
                        'execFunc': _pga.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(341)),
                        'execFunc': _pga.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(342)),
                        'execFunc': _pga.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(343)),
                        'execFunc': _pga.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(344)),
                        'execFunc': _pga.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(345)),
                        'execFunc': _pga.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(346)),
                        'execFunc': _pga.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(347)),
                        'execFunc': _pga.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(356)) || Boolean(_pgh.get_slotnums(357)),
                        'execFunc': _pga.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(358)),
                        'execFunc': _pga.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(359)),
                        'execFunc': _pga.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(360)) || Boolean(_pgh.get_slotnums(361)),
                        'execFunc': _pga.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(362)) || Boolean(_pgh.get_slotnums(363)),
                        'execFunc': _pga.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(364)),
                        'execFunc': _pga.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(365)),
                        'execFunc': _pga.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(367)),
                        'execFunc': _pga.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(368)),
                        'execFunc': _pga.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(369)),
                        'execFunc': _pga.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(370)),
                        'execFunc': _pga.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(371)),
                        'execFunc': _pga.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(372)),
                        'execFunc': _pga.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(373)),
                        'execFunc': _pga.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(374)),
                        'execFunc': _pga.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(375)),
                        'execFunc': _pga.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(376)),
                        'execFunc': _pga.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(377)),
                        'execFunc': _pga.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(378)),
                        'execFunc': _pga.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(379)),
                        'execFunc': _pga.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(380)),
                        'execFunc': _pga.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(381)),
                        'execFunc': _pga.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(382)) || Boolean(_pgh.get_slotnums(509)),
                        'execFunc': _pga.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(383)),
                        'execFunc': _pga.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(384)),
                        'execFunc': _pga.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(385)),
                        'execFunc': _pga.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(386)),
                        'execFunc': _pga.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(387)),
                        'execFunc': _pga.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(389)),
                        'execFunc': _pga.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(390)),
                        'execFunc': _pga.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(391)),
                        'execFunc': _pga.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(392)),
                        'execFunc': _pga.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(397)),
                        'execFunc': _pga.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(398)),
                        'execFunc': _pga.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(399)),
                        'execFunc': _pga.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(400)),
                        'execFunc': _pga.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(407)),
                        'execFunc': _pga.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(408)),
                        'execFunc': _pga.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(409)),
                        'execFunc': _pga.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(411)),
                        'execFunc': _pga.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(412)),
                        'execFunc': _pga.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(413)),
                        'execFunc': _pga.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(414)) || Boolean(_pgh.get_slotnums(539)),
                        'execFunc': _pga.getSlotSocSeagullPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(415)),
                        'execFunc': _pga.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(419)),
                        'execFunc': _pga.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(420)),
                        'execFunc': _pga.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(421)),
                        'execFunc': _pga.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(422)),
                        'execFunc': _pga.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(423)),
                        'execFunc': _pga.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(424)),
                        'execFunc': _pga.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(425)),
                        'execFunc': _pga.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(426)) || Boolean(_pgh.get_slotnums(427)) || Boolean(_pgh.get_slotnums(428)) || Boolean(_pgh.get_slotnums(429)),
                        'execFunc': _pga.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(430)),
                        'execFunc': _pga.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(434)) || Boolean(_pgh.get_slotnums(435)),
                        'execFunc': _pga.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(437)),
                        'execFunc': _pga.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(438)),
                        'execFunc': _pga.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(439)),
                        'execFunc': _pga.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(440)) || Boolean(_pgh.get_slotnums(441)),
                        'execFunc': _pga.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(442)) || Boolean(_pgh.get_slotnums(443)),
                        'execFunc': _pga.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(447)),
                        'execFunc': _pga.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(450)),
                        'execFunc': _pga.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(451)),
                        'execFunc': _pga.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(455)),
                        'execFunc': _pga.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(456)),
                        'execFunc': _pga.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(457)) || Boolean(_pgh.get_slotnums(461)),
                        'execFunc': _pga.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(458)),
                        'execFunc': _pga.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(463)),
                        'execFunc': _pga.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(464)),
                        'execFunc': _pga.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(465)),
                        'execFunc': _pga.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(466)),
                        'execFunc': _pga.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(467)),
                        'execFunc': _pga.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(470)) || Boolean(_pgh.get_slotnums(529)),
                        'execFunc': _pga.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(471)),
                        'execFunc': _pga.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(472)),
                        'execFunc': _pga.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(473)),
                        'execFunc': _pga.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(474)),
                        'execFunc': _pga.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(478)),
                        'execFunc': _pga.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(483)),
                        'execFunc': _pga.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(485)),
                        'execFunc': _pga.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(486)),
                        'execFunc': _pga.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(487)),
                        'execFunc': _pga.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(488)),
                        'execFunc': _pga.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(489)) || Boolean(_pgh.get_slotnums(491)),
                        'execFunc': _pga.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(500)) || Boolean(_pgh.get_slotnums(501)),
                        'execFunc': _pga.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(502)),
                        'execFunc': _pga.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(503)),
                        'execFunc': _pga.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(505)),
                        'execFunc': _pga.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(506)),
                        'execFunc': _pga.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(507)) || Boolean(_pgh.get_slotnums(508)),
                        'execFunc': _pga.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(510)),
                        'execFunc': _pga.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(511)) || Boolean(_pgh.get_slotnums(512)),
                        'execFunc': _pga.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(517)),
                        'execFunc': _pga.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(518)),
                        'execFunc': _pga.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(519)),
                        'execFunc': _pga.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(520)),
                        'execFunc': _pga.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(521)),
                        'execFunc': _pga.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(522)) || Boolean(_pgh.get_slotnums(523)),
                        'execFunc': _pga.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(524)),
                        'execFunc': _pga.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(525)) || Boolean(_pgh.get_slotnums(526)),
                        'execFunc': _pga.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(527)),
                        'execFunc': _pga.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(528)),
                        'execFunc': _pga.getSlot528PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(530)),
                        'execFunc': _pga.getSlot530PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(531)),
                        'execFunc': _pga.getSlot531PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(534)) || Boolean(_pgh.get_slotnums(535)),
                        'execFunc': _pga.getSlot13_8cmRensouhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(536)) || Boolean(_pgh.get_slotnums(537)),
                        'execFunc': _pga.getSlot15_2cmSanrensouSyuhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(538)),
                        'execFunc': _pga.getSlot538PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(540)),
                        'execFunc': _pga.getSlot540PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(541)) || Boolean(_pgh.get_slotnums(542)),
                        'execFunc': _pga.getSlotYellowWingsPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(543)) || Boolean(_pgh.get_slotnums(544)),
                        'execFunc': _pga.getSlotSBD_Type_VS_VBPersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(545)),
                        'execFunc': _pga.getSlot545PersonalEffect
                    }, {
                        'isExecute': Boolean(_pgh.get_slotnums(549)),
                        'execFunc': _pga.getSlot549PersonalEffect
                    }], _pgj = new _pgb.SlotItemEffectModel(), _pgk = 0, _pgl = _pgi; _pgk < _pgl.length; _pgk++) {
                    var _pgm = _pgl[_pgk];
                    if (_pgm.isExecute) {
                        var _pgn = _pgm.execFunc(_pgh);
                        0, _pgj.add(_pgn);
                    }
                }
                return _pgj;
            };
        }(_pg8 || (_pfi.SlotItemEffectUtil = _pg8 = {}));
    },
}