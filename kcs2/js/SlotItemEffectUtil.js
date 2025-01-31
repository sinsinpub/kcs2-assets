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
    69377: function(_ms7, _ms8, _ms9) {
        'use strict';
        var _msa = null;
        var _msb = this && this.__importDefault || function(_msc) {
            var _msd = null;
            return _msc && _msc.__esModule ? _msc : {
                'default': _msc
            };
        };
        defineModule(_ms8);
        Object.defineProperty(_ms8, '__esModule', {
            'value': true
        }), _ms8.get25mmMachinegunEffect = void 0;
        var _mse = _ms9(74496),
            _msf = _msb(_ms9(18622));
        _ms8.get25mmMachinegunEffect = function(_msg) {
            var _msh = null,
                _msi = new _mse.SlotItemEffectModel(),
                _msj = false,
                _msk = new _mse.SlotItemEffectModel(),
                _msl = 0,
                _msm = new _mse.SlotItemEffectModel(),
                _msn = {},
                _mso = 0;
            if (662 == _msg.ship_id || 663 == _msg.ship_id ? (_msk.tyku += 2, _msk.kaih += 1, _msj = true) : 668 == _msg.ship_id ? (_msk.tyku += 3, _msk.kaih += 2, _msj = true) : 979 == _msg.ship_id && (_msk.tyku += 2, _msk.kaih += 3, _msj = true, _msm.kaih += 2, _msn[49] = _msm, _mso = 1), 56 == _msg.ctype && (_msk.houg += 1, _msk.tyku += 2, _msk.kaih += 2, _msj = true, _msl = 1), Object.keys(_msn).forEach(function(_msp) {
                    var _msq = null,
                        _msr = _msn[parseInt(_msp)],
                        _mss = _msg.get_slotnums(parseInt(_msp));
                    _msi.add(_msr.multiply(_mss));
                }), _mso > 0) {
                var _mst = _msg.get_each_level_over_nums([49, 39, 40, 131]),
                    _msu = _mst.slot[49],
                    _msv = _mst.slot[39],
                    _msw = _mst.slot[40],
                    _msx = _mst.slot[131];
                1 == _mso && (_msu[6] >= 1 && (_msi.houm += 1 * _msu[6]), _msu[7] >= 1 && (_msi.tyku += 1 * _msu[7]), _msu[8] >= 1 && (_msi.kaih += 1 * _msu[8]), _msu[9] >= 1 && (_msi.tyku += 1 * _msu[9]), _msu[10] >= 1 && (_msi.houg += 1 * _msu[10]), _msv[8] >= 1 && (_msi.kaih += 1 * _msv[8]), _msv[9] >= 1 && (_msi.tyku += 2 * _msv[9]), _msv[10] >= 1 && (_msi.houg += 1 * _msv[10]), _msw[9] >= 1 && (_msi.tyku += 2 * _msw[9]), _msw[10] >= 1 && (_msi.houg += 1 * _msw[10]), _msx[10] >= 1 && (_msi.tyku += 2 * _msx[10]));
            }
            if (0 == _msj) return _msi;
            var _msy = _msg.get_slotnums(39) + _msg.get_slotnums(40) + _msg.get_slotnums(49) + _msg.get_slotnums(131);
            if (_msi.add(_msk.multiply(_msy)), 0 == _msl) return _msi;
            for (var _msz = 0, _mt0 = 0, _mt1 = _msg.have_slot_ids(); _mt0 < _mt1.length; _mt0++) {
                var _mt2 = _mt1[_mt0],
                    _mt3 = _msf.default.model.slot.getMst(_mt2),
                    _mt4 = _mt3.equipType;
                12 != _mt4 && 13 != _mt4 || (_mt3.sakuteki >= 5 && _msg.get_slotnums(parseInt(_mt2)), _mt3.taiku >= 2 && (_msz += _msg.get_slotnums(parseInt(_mt2))));
            }
            return _msz >= 1 && 1 == _msl && (_msi.tyku += 2, _msi.kaih += 2), _msi;
        };
    },
    77670: function(_mt5, _mt6, _mt7) {
        'use strict';
        var _mt8 = null;
        var _mt9 = this && this.__importDefault || function(_mta) {
            var _mtb = null;
            return _mta && _mta.__esModule ? _mta : {
                'default': _mta
            };
        };
        defineModule(_mt6);
        Object.defineProperty(_mt6, '__esModule', {
            'value': true
        }), _mt6.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mtc = _mt7(74496),
            _mtd = _mt9(_mt7(18622));
        _mt6.get8cmAntiAircraftGunPersonalEffect = function(_mte) {
            var _mtf = null,
                _mtg = new _mtc.SlotItemEffectModel(),
                _mth = false,
                _mti = new _mtc.SlotItemEffectModel(),
                _mtj = 0;
            if (662 != _mte.ship_id && 663 != _mte.ship_id && 668 != _mte.ship_id || (_mti.tyku += 2, _mti.kaih += 1, _mth = true, _mtj = 1), 501 != _mte.ship_id && 506 != _mte.ship_id && 502 != _mte.ship_id && 507 != _mte.ship_id || (_mti.houg += 1, _mti.tyku += 2, _mti.kaih += 2, _mth = true, _mtj = 1), 0 == _mth) return _mtg;
            var _mtk = _mte.get_slotnums(66) + _mte.get_slotnums(220);
            _mtg.add(_mti.multiply(_mtk));
            for (var _mtl = 0, _mtm = 0, _mtn = _mte.have_slot_ids(); _mtm < _mtn.length; _mtm++) {
                var _mto = _mtn[_mtm],
                    _mtp = _mtd.default.model.slot.getMst(_mto),
                    _mtq = _mtp.equipType;
                12 != _mtq && 13 != _mtq || (_mtp.sakuteki >= 5 && _mte.get_slotnums(parseInt(_mto)), _mtp.taiku >= 2 && (_mtl += _mte.get_slotnums(parseInt(_mto))));
            }
            return 0 == _mtj || _mtl >= 1 && (_mtg.tyku += 1, _mtg.kaih += 2), _mtg;
        };
    },
    34165: (_mtr, _mts, _mtt) => {
        'use strict';
        var _mtu = null;
        defineModule(_mts);
        Object.defineProperty(_mts, '__esModule', {
            'value': true
        }), _mts.getCamouflageSlotPersonalEffect = void 0;
        var _mtv = _mtt(74496);
        _mts.getCamouflageSlotPersonalEffect = function(_mtw) {
            var _mtx = null,
                _mty = new _mtv.SlotItemEffectModel();
            return 'きそ' != _mtw.yomi && 'たま' != _mtw.yomi || (_mty.kaih = 7, _mty.souk = 2), _mty;
        };
    },
    31127: (_mtz, _mu0, _mu1) => {
        'use strict';
        var _mu2 = null;
        defineModule(_mu0);
        Object.defineProperty(_mu0, '__esModule', {
            'value': true
        }), _mu0.getHighZuiunSeriesEffect = void 0;
        var _mu3 = _mu1(74496);
        _mu0.getHighZuiunSeriesEffect = function(_mu4) {
            var _mu5 = null,
                _mu6 = new _mu3.SlotItemEffectModel(),
                _mu7 = false,
                _mu8 = new _mu3.SlotItemEffectModel();
            if (662 == _mu4.ship_id ? (_mu6.houg += 3, _mu6.kaih += 1) : 663 == _mu4.ship_id || 668 == _mu4.ship_id || 501 == _mu4.ship_id || 506 == _mu4.ship_id || 553 == _mu4.ship_id || 554 == _mu4.ship_id ? (_mu8.houg += 3, _mu8.kaih += 2, _mu8.tyku += 1, _mu7 = true) : 502 != _mu4.ship_id && 507 != _mu4.ship_id || (_mu8.houg += 2, _mu8.kaih += 2, _mu8.tyku += 1, _mu7 = true), 0 == _mu7) return _mu6;
            var _mu9 = 0;
            return [237, 322, 323, 490].forEach(function(_mua) {
                var _mub = null;
                _mu9 += _mu4.get_slotnums(_mua);
            }), _mu6.add(_mu8.multiply(_mu9)), _mu6;
        };
    },
    81018: function(_muc, _mud, _mue) {
        'use strict';
        var _muf = null;
        var _mug = this && this.__importDefault || function(_muh) {
            var _mui = null;
            return _muh && _muh.__esModule ? _muh : {
                'default': _muh
            };
        };
        defineModule(_mud);
        Object.defineProperty(_mud, '__esModule', {
            'value': true
        }), _mud.getRaderPrivateEffect = void 0;
        var _muj = _mue(74496),
            _muk = _mug(_mue(18622));
        _mud.getRaderPrivateEffect = function(_mul) {
            var _mum = null,
                _mun = new _muj.SlotItemEffectModel(),
                _muo = 0,
                _mup = 0;
            if (569 == _mul.ship_id || 648 == _mul.ship_id || 961 == _mul.ship_id || 951 == _mul.ship_id) _muo = 1;
            else {
                if (955 != _mul.ship_id && 960 != _mul.ship_id && 956 != _mul.ship_id && 981 != _mul.ship_id) return _mun;
                _muo = 2, _mup = 1;
            }
            for (var _muq = 0, _mur = 0, _mus = _mul.have_slot_ids(); _mur < _mus.length; _mur++) {
                var _mut = _mus[_mur],
                    _muu = _muk.default.model.slot.getMst(_mut),
                    _muv = _muu.equipType;
                12 != _muv && 13 != _muv || (_muu.sakuteki >= 5 && _mul.get_slotnums(parseInt(_mut)), _muu.taiku >= 2 && (_muq += _mul.get_slotnums(parseInt(_mut))));
            }
            if (_muq > 0 && (1 == _muo ? (_mun.houg += 1, _mun.kaih += 3, _mun.tyku += 2) : 2 == _muo && (_mun.tyku += 2, _mun.kaih += 1)), 0 == _mup) return _mun;
            for (var _muw = [], _mux = function(_muy) {
                    var _muz = null;
                    if (null == _mul.have_slots_dict[_muy]) return 'continue';
                    var _mv0 = _mul.get_each_level_nums(_muy);
                    null == _muw[_muy] && (_muw[_muy] = []), _mv0.forEach(function(_mv1, _mv2) {
                        var _mv3 = null;
                        for (var _mv4 = 1; _mv4 <= _mul.SLOT_LEVEL_MAX; _mv4++) null == _muw[_muy][_mv4] && (_muw[_muy][_mv4] = 0), _mv2 >= _mv4 && (_muw[_muy][_mv4] += _mv1);
                    });
                }, _mv5 = 0, _mv6 = [450]; _mv5 < _mv6.length; _mv5++) {
                _mux(_mv6[_mv5]);
            }
            var _mv7 = null != _muw[450] ? _muw[450][4] : 0;
            return 1 == _mup && _mv7 > 0 && (_mun.houg += 1, _mun.houm += 1, _mun.tyku += 1, _mun.kaih += 2), _mun;
        };
    },
    56716: (_mv8, _mv9, _mva) => {
        'use strict';
        var _mvb = null;
        defineModule(_mv9);
        Object.defineProperty(_mv9, '__esModule', {
            'value': true
        }), _mv9.getSearchLightEffect = void 0;
        var _mvc = _mva(74496);
        _mv9.getSearchLightEffect = function(_mvd) {
            var _mve = null,
                _mvf = new _mvc.SlotItemEffectModel(),
                _mvg = _mvd.get_type3_nums(29);
            return 'ひえい' == _mvd.yomi || 'きりしま' == _mvd.yomi || 'ちょうかい' == _mvd.yomi || 'じんつう' == _mvd.yomi || 'あかつき' == _mvd.yomi ? (_mvf.houg += 4, _mvf.kaih -= 1) : 'あきぐも' == _mvd.yomi ? _mvf.houg = _mvf.houg + 2 * _mvg : 'ゆきかぜ' == _mvd.yomi && (_mvf.houg = _mvf.houg + _mvg, _mvf.tyku = _mvf.tyku + _mvg), 662 != _mvd.ship_id && 663 != _mvd.ship_id && 668 != _mvd.ship_id || (_mvf.raig += 2, _mvf.houg += 4), 'じんつう' == _mvd.yomi && (_mvf.raig += 8, _mvf.houg += 4), _mvf;
        };
    },
    17713: (_mvh, _mvi, _mvj) => {
        'use strict';
        var _mvk = null;
        defineModule(_mvi);
        Object.defineProperty(_mvi, '__esModule', {
            'value': true
        }), _mvi.getSearchLightLargeEffect = void 0;
        var _mvl = _mvj(74496);
        _mvi.getSearchLightLargeEffect = function(_mvm) {
            var _mvn = null,
                _mvo = new _mvl.SlotItemEffectModel();
            'ひえい' == _mvm.yomi || 'きりしま' == _mvm.yomi ? (_mvo.houg += 6, _mvo.kaih -= 2) : 'やまと' != _mvm.yomi && 'むさし' != _mvm.yomi || (_mvo.houg += 4, _mvo.kaih -= 1);
            var _mvp = _mvm.get_slotnums(174);
            return 592 == _mvm.ship_id ? (_mvo.houg += 3, _mvo.raig += 3, _mvp > 0 && (_mvo.raig += 5)) : 694 == _mvm.ship_id && (_mvo.houg += 4, _mvo.raig += 1, _mvp > 0 && (_mvo.raig += 7)), _mvo;
        };
    },
    17213: (_mvq, _mvr, _mvs) => {
        'use strict';
        var _mvt = null;
        defineModule(_mvr);
        Object.defineProperty(_mvr, '__esModule', {
            'value': true
        }), _mvr.getSlot100PersonalEffect = void 0;
        var _mvu = _mvs(74496);
        _mvr.getSlot100PersonalEffect = function(_mvv) {
            var _mvw = null,
                _mvx = new _mvu.SlotItemEffectModel(),
                _mvy = new _mvu.SlotItemEffectModel();
            if (553 == _mvv.ship_id) _mvy.houg = 4;
            else {
                if (554 != _mvv.ship_id) return 196 == _mvv.ship_id ? (_mvx.houg = 3, _mvx) : 197 == _mvv.ship_id ? (_mvx.houg = 6, _mvx) : _mvx;
                _mvy.houg = 4;
            }
            var _mvz = _mvv.get_slotnums(100);
            return _mvx = _mvy.multiply(_mvz);
        };
    },
    40176: (_mw0, _mw1, _mw2) => {
        'use strict';
        var _mw3 = null;
        defineModule(_mw1);
        Object.defineProperty(_mw1, '__esModule', {
            'value': true
        }), _mw1.getSlot104PersonalEffect = void 0;
        var _mw4 = _mw2(74496);
        _mw1.getSlot104PersonalEffect = function(_mw5) {
            var _mw6 = null,
                _mw7 = new _mw4.SlotItemEffectModel(),
                _mw8 = new _mw4.SlotItemEffectModel();
            if (149 == _mw5.ship_id || 591 == _mw5.ship_id) _mw8.houg = 2;
            else {
                if (150 == _mw5.ship_id || 592 == _mw5.ship_id) _mw8.houg = 1;
                else {
                    if (152 == _mw5.ship_id || 694 == _mw5.ship_id) _mw8.houg = 1;
                    else {
                        if (151 != _mw5.ship_id && 593 != _mw5.ship_id && 954 != _mw5.ship_id) return _mw7;
                        _mw8.houg = 2, _mw8.tyku = 1, _mw8.kaih = 2;
                    }
                }
            }
            var _mw9 = _mw5.get_slotnums(104);
            return _mw7 = _mw8.multiply(_mw9);
        };
    },
    32889: (_mwa, _mwb, _mwc) => {
        'use strict';
        var _mwd = null;
        defineModule(_mwb);
        Object.defineProperty(_mwb, '__esModule', {
            'value': true
        }), _mwb.getSlot106PersonalEffect = void 0;
        var _mwe = _mwc(74496);
        _mwb.getSlot106PersonalEffect = function(_mwf) {
            var _mwg = null,
                _mwh = new _mwe.SlotItemEffectModel(),
                _mwi = new _mwe.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_mwf.ship_id) >= 0 ? (_mwi.houg += 1, _mwi.tyku += 2, _mwi.souk += 1, _mwi.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mwf.yomi) >= 0 ? (_mwi.tyku += 1, _mwi.souk += 1, _mwi.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mwf.yomi) >= 0 && (_mwi.tyku += 2, _mwi.souk += 1, _mwi.kaih += 2, 663 != _mwf.ship_id && 668 != _mwf.ship_id || (_mwh.houg += 1, _mwh.tyku += 1, _mwh.souk += 1, _mwh.kaih += 1), 668 == _mwf.ship_id && (_mwh.tyku += 1, _mwh.kaih += 1)), !_mwi.exists()) return _mwh;
            var _mwj = _mwf.get_slotnums(106) + _mwf.get_slotnums(450);
            return _mwh.add(_mwi.multiply(_mwj)), _mwh;
        };
    },
    15133: (_mwk, _mwl, _mwm) => {
        'use strict';
        var _mwn = null;
        defineModule(_mwl);
        Object.defineProperty(_mwl, '__esModule', {
            'value': true
        }), _mwl.getSlot115PersonalEffect = void 0;
        var _mwo = _mwm(74496);
        _mwl.getSlot115PersonalEffect = function(_mwp) {
            var _mwq = null,
                _mwr = new _mwo.SlotItemEffectModel(),
                _mws = false,
                _mwt = new _mwo.SlotItemEffectModel(),
                _mwu = 0;
            if (55 != _mwp.ctype && 47 != _mwp.ctype || (_mwt.houg += 2, _mwt.saku += 2, _mwt.kaih += 1, _mws = true, _mwu = 1), 0 == _mws) return _mwr;
            var _mwv = _mwp.get_slotnums(115);
            if (_mwr.add(_mwt.multiply(_mwv)), 0 == _mwu) return _mwr;
            var _mww = _mwp.get_each_level_nums(115)[10];
            return 1 == _mwu && (_mwr.houg += 1 * _mww, _mwr.kaih += 1 * _mww), _mwr;
        };
    },
    55747: (_mwx, _mwy, _mwz) => {
        'use strict';
        var _mx0 = null;
        defineModule(_mwy);
        Object.defineProperty(_mwy, '__esModule', {
            'value': true
        }), _mwy.getSlot118PersonalEffect = void 0;
        var _mx1 = _mwz(74496);
        _mwy.getSlot118PersonalEffect = function(_mx2) {
            var _mx3 = null,
                _mx4 = new _mx1.SlotItemEffectModel(),
                _mx5 = false,
                _mx6 = new _mx1.SlotItemEffectModel(),
                _mx7 = 0;
            if (52 == _mx2.ctype && (_mx6.houg += 1, _mx6.saku += 2, _mx6.kaih += 2, _mx7 = 1, _mx5 = true), 507 == _mx2.ship_id && (_mx6.houg += 3, _mx6.saku += 2, _mx6.kaih += 1, _mx7 = 2, _mx5 = true), 0 == _mx5) return _mx4;
            var _mx8 = _mx2.get_slotnums(118) + _mx2.get_slotnums(521);
            if (_mx4.add(_mx6.multiply(_mx8)), 0 == _mx2.get_slotnums(118)) return _mx4;
            if (0 == _mx7) return _mx4;
            var _mx9 = _mx2.get_each_level_nums(118),
                _mxa = 0,
                _mxb = 0,
                _mxc = 0,
                _mxd = _mx9[10];
            return _mx9.forEach(function(_mxe, _mxf) {
                _mxf >= 2 && (_mxa += _mxe), _mxf >= 5 && (_mxb += _mxe), _mxf >= 7 && (_mxc += _mxe);
            }), 1 == _mx7 ? (_mx4.houg += 2 * _mxd, _mx4.saku += 1 * _mxd) : 2 == _mx7 && (_mx4.houm += 1 * _mxa, _mx4.kaih += 1 * _mxb, _mx4.houg += 1 * _mxc, _mx4.houg += 1 * _mxd, _mx4.raig += 1 * _mxd, _mx4.tyku += 1 * _mxd, _mx4.saku += 1 * _mxd, _mx4.kaih += 1 * _mxd), _mx4;
        };
    },
    11285: (_mxg, _mxh, _mxi) => {
        'use strict';
        var _mxj = null;
        defineModule(_mxh);
        Object.defineProperty(_mxh, '__esModule', {
            'value': true
        }), _mxh.getSlot119PersonalEffect = void 0;
        var _mxk = _mxi(74496);
        _mxh.getSlot119PersonalEffect = function(_mxl) {
            var _mxm = null,
                _mxn = new _mxk.SlotItemEffectModel(),
                _mxo = new _mxk.SlotItemEffectModel();
            34 == _mxl.ctype || 56 == _mxl.ctype ? _mxo.houg += 1 : 90 == _mxl.ctype && (_mxo.houg += 2, _mxo.raig += 1);
            var _mxp = true;
            if (_mxo.exists() || (_mxp = false), 0 == _mxp) return _mxn;
            var _mxq = _mxl.get_slotnums(119);
            return _mxn = _mxo.multiply(_mxq);
        };
    },
    96200: (_mxr, _mxs, _mxt) => {
        'use strict';
        var _mxu = null;
        defineModule(_mxs);
        Object.defineProperty(_mxs, '__esModule', {
            'value': true
        }), _mxs.getSlot120mm50GroupPersonalEffect = void 0;
        var _mxv = _mxt(74496);
        _mxs.getSlot120mm50GroupPersonalEffect = function(_mxw) {
            var _mxx = null,
                _mxy = new _mxv.SlotItemEffectModel(),
                _mxz = false,
                _my0 = new _mxv.SlotItemEffectModel(),
                _my1 = _mxw.get_slotnums(147),
                _my2 = _mxw.get_slotnums(393),
                _my3 = _mxw.get_slotnums(394),
                _my4 = new _mxv.SlotItemEffectModel(),
                _my5 = new _mxv.SlotItemEffectModel();
            if (61 == _mxw.ctype && (_my0.houg += 1, _my0.kaih += 1, _mxz = true, _my2 >= 1 && (_my4.houg += 1, _my4.tyku += 1), _my3 >= 1 && (_my5.houg += 1, _my5.tyku += 1, _my5.kaih += 1, 'グレカーレ' == _mxw.yomi && (_my5.kaih += 1)), 1), 0 == _mxz) return _mxy;
            var _my6 = _my1 + _my2 + _my3;
            _mxy.add(_my0.multiply(_my6)).add(_my4.multiply(_my2)).add(_my5.multiply(_my3));
            var _my7 = _mxw.get_each_level_over_nums([394]).slot[394];
            return _my7[7] >= 1 && (_mxy.houm += 1 * _my7[7], 'グレカーレ' == _mxw.yomi && (_mxy.houg += 1 * _my7[7])), _my7[8] >= 1 && (_mxy.houg += 1 * _my7[8]), _my7[9] >= 1 && (_mxy.houm += 1 * _my7[9]), _my7[10] >= 1 && (_mxy.houg += 1 * _my7[10], 'グレカーレ' == _mxw.yomi && (_mxy.kaih += 1 * _my7[10])), _mxy;
        };
    },
    33155: function(_my8, _my9, _mya) {
        'use strict';
        var _myb = null;
        var _myc = this && this.__importDefault || function(_myd) {
            var _mye = null;
            return _myd && _myd.__esModule ? _myd : {
                'default': _myd
            };
        };
        defineModule(_my9);
        Object.defineProperty(_my9, '__esModule', {
            'value': true
        }), _my9.getSlot121PersonalEffect = void 0;
        var _myf = _mya(74496),
            _myg = _myc(_mya(18622));
        _my9.getSlot121PersonalEffect = function(_myh) {
            var _myi = null,
                _myj = new _myf.SlotItemEffectModel(),
                _myk = 0,
                _myl = new _myf.SlotItemEffectModel(),
                _mym = false;
            54 == _myh.ctype && (_myj.tyku += 4, _myj.kaih += 2, _myk = 1), 968 == _myh.ship_id ? (_myl.houg += 1, _myl.tyku += 1, _myl.kaih += 1, _mym = true) : 981 == _myh.ship_id && (_myl.tyku += 1, _myl.kaih += 1, _mym = true, _myk = 1);
            var _myn = _myh.get_slotnums(121);
            if (_mym && _myj.add(_myl.multiply(_myn)), 0 == _myk) return _myj;
            for (var _myo = 0, _myp = 0, _myq = _myh.have_slot_ids(); _myp < _myq.length; _myp++) {
                var _myr = _myq[_myp],
                    _mys = _myg.default.model.slot.getMst(_myr),
                    _myt = _mys.equipType;
                12 != _myt && 13 != _myt || (_mys.sakuteki >= 5 && _myh.get_slotnums(parseInt(_myr)), _mys.taiku >= 2 && (_myo += _myh.get_slotnums(parseInt(_myr))));
            }
            return _myo >= 1 && (_myj.tyku += 2, _myj.kaih += 2, 968 == _myh.ship_id && (_myj.houg += 1 * _myn, _myj.houm += 1 * _myn)), _myj;
        };
    },
    9115: function(_myu, _myv, _myw) {
        'use strict';
        var _myx = null;
        var _myy = this && this.__importDefault || function(_myz) {
            var _mz0 = null;
            return _myz && _myz.__esModule ? _myz : {
                'default': _myz
            };
        };
        defineModule(_myv);
        Object.defineProperty(_myv, '__esModule', {
            'value': true
        }), _myv.getSlot122PersonalEffect = void 0;
        var _mz1 = _myw(74496),
            _mz2 = _myy(_myw(18622));
        _myv.getSlot122PersonalEffect = function(_mz3) {
            var _mz4 = null,
                _mz5 = new _mz1.SlotItemEffectModel(),
                _mz6 = 0,
                _mz7 = 0,
                _mz8 = false;
            656 == _mz3.ship_id && (_mz8 = true, _mz6 = 1, _mz7 = 1);
            var _mz9 = 0,
                _mza = 0,
                _mzb = _mz3.get_each_level_nums(122),
                _mzc = 0;
            if (_mz8) {
                _mzb.forEach(function(_mzd, _mze) {
                    _mze >= 4 && (_mzc += _mzd);
                });
                for (var _mzf = 0, _mzg = _mz3.have_slot_ids(); _mzf < _mzg.length; _mzf++) {
                    var _mzh = _mzg[_mzf],
                        _mzi = _mz2.default.model.slot.getMst(_mzh),
                        _mzj = _mzi.equipType;
                    12 != _mzj && 13 != _mzj || (_mzi.sakuteki >= 5 && (_mz9 += _mz3.get_slotnums(parseInt(_mzh))), _mzi.taiku >= 2 && (_mza += _mz3.get_slotnums(parseInt(_mzh))));
                }
            }
            return _mzc > 0 && (1 == _mz7 && (_mz9 > 0 && (_mz5.houg += 4, _mz5.kaih += 3), _mza > 0 && (_mz5.tyku += 4, _mz5.kaih += 3)), 1 == _mz6 && (_mz5.houg += 5 * _mzc, _mz5.tyku += 3 * _mzc, _mz5.kaih += 2 * _mzc)), _mz5;
        };
    },
    85127: (_mzk, _mzl, _mzm) => {
        'use strict';
        var _mzn = null;
        defineModule(_mzl);
        Object.defineProperty(_mzl, '__esModule', {
            'value': true
        }), _mzl.getSlot123PersonalEffect = void 0;
        var _mzo = _mzm(74496);
        _mzl.getSlot123PersonalEffect = function(_mzp) {
            var _mzq = null,
                _mzr = new _mzo.SlotItemEffectModel(),
                _mzs = (new _mzo.SlotItemEffectModel(), 0),
                _mzt = (_mzp.get_slotnums(123), _mzp.get_slotnums(124));
            if ('ドイツ' != _mzp.getCountryName()) return _mzr;
            _mzs = 1, _mzt >= 1 && (_mzr.kaih += 1 * _mzt);
            var _mzu = _mzp.get_each_level_over_nums([123, 124]),
                _mzv = _mzu.slot[123],
                _mzw = _mzu.slot[124];
            return 1 == _mzs && (_mzv[5] >= 1 && (_mzr.houg += 1 * _mzv[5]), _mzv[7] >= 1 && (_mzr.houm += 1 * _mzv[7]), _mzv[9] >= 1 && (_mzr.houg += 1 * _mzv[9]), _mzv[10] >= 1 && (_mzr.houm += 1 * _mzv[10]), _mzw[8] >= 1 && (_mzr.kaih += 1 * _mzw[8]), _mzw[10] >= 1 && (_mzr.houm += 1 * _mzw[10])), _mzr;
        };
    },
    87204: (_mzx, _mzy, _mzz) => {
        'use strict';
        var _n00 = null;
        defineModule(_mzy);
        Object.defineProperty(_mzy, '__esModule', {
            'value': true
        }), _mzy.getSlot124PersonalEffect = void 0;
        var _n01 = _mzz(74496);
        _mzy.getSlot124PersonalEffect = function(_n02) {
            var _n03 = null,
                _n04 = new _n01.SlotItemEffectModel(),
                _n05 = (new _n01.SlotItemEffectModel(), 0),
                _n06 = _n02.getCountryName();
            if ('ドイツ' == _n06) _n05 = 1;
            else {
                if ('イタリア' != _n06) return _n04;
                _n05 = 2;
            }
            var _n07 = _n02.get_each_level_over_nums([124]).slot[124];
            return 1 == _n05 ? (_n07[7] >= 1 && (_n04.houm += 1 * _n07[7]), _n07[8] >= 1 && (_n04.houg += 1 * _n07[8]), _n07[9] >= 1 && (_n04.tyku += 1 * _n07[9]), _n07[10] >= 1 && (_n04.houm += 1 * _n07[10])) : 2 == _n05 && (_n07[8] >= 1 && (_n04.houm += 1 * _n07[8]), _n07[9] >= 1 && (_n04.tyku += 1 * _n07[9]), _n07[10] >= 1 && (_n04.houg += 1 * _n07[10])), _n04;
        };
    },
    37173: (_n08, _n09, _n0a) => {
        'use strict';
        var _n0b = null;
        defineModule(_n09);
        Object.defineProperty(_n09, '__esModule', {
            'value': true
        }), _n09.getSlot129PersonalEffect = void 0;
        var _n0c = _n0a(74496);
        _n09.getSlot129PersonalEffect = function(_n0d) {
            var _n0e = null,
                _n0f = new _n0c.SlotItemEffectModel(),
                _n0g = false,
                _n0h = new _n0c.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_n0d.ctype) >= 0 ? (_n0h.houg = 1, _n0h.raig = 2, _n0h.kaih = 2, _n0h.tais = 2, _n0h.saku = 1, _n0g = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_n0d.ctype) >= 0 ? (_n0h.houg = 1, _n0h.raig = 2, _n0h.kaih = 2, _n0h.saku = 3, _n0g = true) : [7, 13, 29, 8, 9, 31].indexOf(_n0d.ctype) >= 0 && (_n0h.houg = 1, _n0h.kaih = 2, _n0h.saku = 3, _n0g = true), 0 == _n0g) return _n0f;
            var _n0i = _n0d.get_slotnums(129);
            return _n0f = _n0h.multiply(_n0i);
        };
    },
    73254: (_n0j, _n0k, _n0l) => {
        'use strict';
        var _n0m = null;
        defineModule(_n0k);
        Object.defineProperty(_n0k, '__esModule', {
            'value': true
        }), _n0k.getSlot12PersonalEffect = void 0;
        var _n0n = _n0l(74496);
        _n0k.getSlot12PersonalEffect = function(_n0o) {
            var _n0p = null,
                _n0q = new _n0n.SlotItemEffectModel(),
                _n0r = false,
                _n0s = new _n0n.SlotItemEffectModel(),
                _n0t = _n0o.get_slotnums(142) + _n0o.get_slotnums(460);
            if (37 == _n0o.ctype && (_n0s.houg += 1, _n0s.kaih += 1, _n0s.houm += 1, _n0t >= 1 && (_n0q.kaih += 1, _n0q.houm += 1), _n0r = true), 0 == _n0r) return _n0q;
            var _n0u = _n0o.get_slotnums(12);
            return _n0q.add(_n0s.multiply(_n0u)), _n0q;
        };
    },
    41410: (_n0v, _n0w, _n0x) => {
        'use strict';
        var _n0y = null;
        defineModule(_n0w);
        Object.defineProperty(_n0w, '__esModule', {
            'value': true
        }), _n0w.getSlot130PersonalEffect = void 0;
        var _n0z = _n0x(74496);
        _n0w.getSlot130PersonalEffect = function(_n10) {
            var _n11 = null,
                _n12 = new _n0z.SlotItemEffectModel(),
                _n13 = _n10.have_level_num_over_dict[130];
            return null == _n13 || (428 == _n10.ship_id ? (_n13[1] >= 1 && (_n12.tyku += 1 * _n13[1]), _n13[3] >= 1 && (_n12.kaih += 1 * _n13[3]), _n13[5] >= 1 && (_n12.houm += 1 * _n13[5]), _n13[7] >= 1 && (_n12.tyku += 1 * _n13[7]), _n13[8] >= 1 && (_n12.kaih += 1 * _n13[8]), _n13[9] >= 1 && (_n12.tyku += 1 * _n13[9]), _n13[10] >= 1 && (_n12.houg += 1 * _n13[10])) : 141 == _n10.ship_id && (_n13[2] >= 1 && (_n12.tyku += 1 * _n13[2]), _n13[4] >= 1 && (_n12.kaih += 1 * _n13[4]), _n13[6] >= 1 && (_n12.houm += 1 * _n13[6]), _n13[8] >= 1 && (_n12.tyku += 1 * _n13[8]), _n13[10] >= 1 && (_n12.kaih += 1 * _n13[10])), 1 == _n10.stype && (_n13[3] >= 1 && (_n12.tyku += 1 * _n13[3]), _n13[6] >= 1 && (_n12.kaih += 1 * _n13[6]), _n13[9] >= 1 && (_n12.tyku += 1 * _n13[9]), _n13[10] >= 1 && (_n12.kaih += 1 * _n13[10]))), _n12;
        };
    },
    93373: (_n14, _n15, _n16) => {
        'use strict';
        var _n17 = null;
        defineModule(_n15);
        Object.defineProperty(_n15, '__esModule', {
            'value': true
        }), _n15.getSlot132PersonalEffect = void 0;
        var _n18 = _n16(74496);
        _n15.getSlot132PersonalEffect = function(_n19) {
            var _n1a = null,
                _n1b = new _n18.SlotItemEffectModel(),
                _n1c = _n19.get_each_level_nums(132),
                _n1d = 0,
                _n1e = 0,
                _n1f = 0,
                _n1g = 0,
                _n1h = 0;
            return _n1c.forEach(function(_n1i, _n1j) {
                _n1j >= 3 && (_n1d += _n1i), _n1j >= 5 && (_n1e += _n1i), _n1j >= 7 && (_n1f += _n1i), _n1j >= 8 && (_n1g += _n1i), _n1j >= 9 && (_n1h += _n1i);
            }), _n1d >= 1 && (_n1b.kaih += 1), _n1e >= 1 && (_n1b.tais += 1), _n1f >= 1 && (_n1b.kaih += 1), _n1g >= 1 && (_n1b.tais += 1), _n1h >= 1 && (_n1b.houm += 1), _n1c[10] >= 1 && (_n1b.tais += 1), 911 != _n19.ship_id && 916 != _n19.ship_id && 546 != _n19.ship_id || (_n1b.kaih += 1), 461 != _n19.ship_id && 466 != _n19.ship_id && 462 != _n19.ship_id && 467 != _n19.ship_id && 156 != _n19.ship_id || (_n1b.kaih += 2), _n1b;
        };
    },
    88838: (_n1k, _n1l, _n1m) => {
        'use strict';
        var _n1n = null;
        defineModule(_n1l);
        Object.defineProperty(_n1l, '__esModule', {
            'value': true
        }), _n1l.getSlot136PersonalEffect = void 0;
        var _n1o = _n1m(74496);
        _n1l.getSlot136PersonalEffect = function(_n1p) {
            var _n1q = null,
                _n1r = new _n1o.SlotItemEffectModel(),
                _n1s = 0;
            if (58 != _n1p.ctype && 61 != _n1p.ctype && 64 != _n1p.ctype && 68 != _n1p.ctype && 80 != _n1p.ctype && 92 != _n1p.ctype && 113 != _n1p.ctype && 124 != _n1p.ctype || (_n1r.souk += 2, _n1r.kaih += 1, _n1s = 1), 879 == _n1p.ship_id && (_n1r.souk += 1, _n1r.kaih += 1), 0 == _n1s) return _n1r;
            var _n1t = _n1p.get_each_level_nums(136),
                _n1u = 0,
                _n1v = 0,
                _n1w = _n1t[10];
            return _n1s > 0 && _n1t.forEach(function(_n1x, _n1y) {
                _n1y >= 3 && (_n1u += _n1x), _n1y >= 6 && (_n1v += _n1x);
            }), 1 == _n1s && (_n1u >= 1 && (_n1r.souk += 1 * _n1u), _n1v >= 1 && (_n1r.souk += 1 * _n1v), _n1w >= 1 && (_n1r.souk += 1 * _n1w)), _n1r;
        };
    },
    17274: (_n1z, _n20, _n21) => {
        'use strict';
        var _n22 = null;
        defineModule(_n20);
        Object.defineProperty(_n20, '__esModule', {
            'value': true
        }), _n20.getSlot139PersonalEffect = void 0;
        var _n23 = _n21(74496);
        _n20.getSlot139PersonalEffect = function(_n24) {
            var _n25 = null,
                _n26 = new _n23.SlotItemEffectModel(),
                _n27 = false,
                _n28 = new _n23.SlotItemEffectModel();
            if (662 != _n24.ship_id && 663 != _n24.ship_id && 668 != _n24.ship_id || (_n28.houg += 2, _n28.tyku += 1, _n27 = true), 0 == _n27) return _n26;
            var _n29 = _n24.get_slotnums(139);
            return _n26.add(_n28.multiply(_n29)), _n26;
        };
    },
    6482: (_n2a, _n2b, _n2c) => {
        'use strict';
        var _n2d = null;
        defineModule(_n2b);
        Object.defineProperty(_n2b, '__esModule', {
            'value': true
        }), _n2b.getSlot13_8cmRensouhouPersonalEffect = void 0;
        var _n2e = _n2c(74496);
        _n2b.getSlot13_8cmRensouhouPersonalEffect = function(_n2f) {
            var _n2g = null,
                _n2h = new _n2e.SlotItemEffectModel(),
                _n2i = false,
                _n2j = new _n2e.SlotItemEffectModel(),
                _n2k = 0,
                _n2l = _n2f.getCountryName(),
                _n2m = _n2f.get_slotnums(534),
                _n2n = _n2f.get_slotnums(535);
            if ('フランス' == _n2l && (_n2j.houg += 2, _n2j.houm += 1, 129 == _n2f.ctype && (_n2j.houm += 1), 967 == _n2f.ship_id && _n2n >= 1 && (_n2j.houg += 1), _n2i = true, _n2k = 1), 0 == _n2i) return _n2h;
            var _n2o = _n2m + _n2n;
            if (_n2h.add(_n2j.multiply(_n2o)), 0 == _n2k) return _n2h;
            _n2f.haveSlotLevelNumOver(534);
            var _n2p = _n2f.haveSlotLevelNumOver(535),
                _n2q = _n2f.getTotalCountWithOverLeveledItem([534, 535]);
            return 1 == _n2k && (_n2q[2] >= 1 && (_n2h.houm += 1 * _n2q[2]), _n2q[4] >= 1 && (_n2h.houg += 1 * _n2q[4]), _n2q[6] >= 1 && (_n2h.houm += 1 * _n2q[6]), _n2p[7] >= 1 && (_n2h.houg += 1 * _n2p[7]), _n2q[8] >= 1 && (_n2h.houg += 1 * _n2q[8]), _n2p[9] >= 1 && (_n2h.houm += 1 * _n2p[9]), _n2q[10] >= 1 && (_n2h.houg += 1 * _n2q[10])), _n2h;
        };
    },
    21713: (_n2r, _n2s, _n2t) => {
        'use strict';
        var _n2u = null;
        defineModule(_n2s);
        Object.defineProperty(_n2s, '__esModule', {
            'value': true
        }), _n2s.getSlot143PersonalEffect = void 0;
        var _n2v = _n2t(74496);
        _n2s.getSlot143PersonalEffect = function(_n2w) {
            var _n2x = null,
                _n2y = new _n2v.SlotItemEffectModel();
            return 'あかぎ' == _n2w.yomi ? _n2y.houg = 3 : 'かが' == _n2w.yomi || 'しょうかく' == _n2w.yomi ? _n2y.houg = 2 : ('ずいかく' == _n2w.yomi || 'りゅうじょう' == _n2w.yomi) && (_n2y.houg = 1), _n2y;
        };
    },
    59823: (_n2z, _n30, _n31) => {
        'use strict';
        var _n32 = null;
        defineModule(_n30);
        Object.defineProperty(_n30, '__esModule', {
            'value': true
        }), _n30.getSlot144PersonalEffect = void 0;
        var _n33 = _n31(74496);
        _n30.getSlot144PersonalEffect = function(_n34) {
            var _n35 = null,
                _n36 = new _n33.SlotItemEffectModel();
            return 'あかぎ' == _n34.yomi ? _n36.houg = 3 : 'かが' == _n34.yomi ? _n36.houg = 2 : 'しょうかく' == _n34.yomi ? (_n36.houg = 2, 461 != _n34.ship_id && 466 != _n34.ship_id || (_n36.houg += 2)) : 'ずいかく' == _n34.yomi ? (_n36.houg = 1, 462 != _n34.ship_id && 467 != _n34.ship_id || (_n36.houg += 1)) : 'りゅうじょう' == _n34.yomi && (_n36.houg = 1), _n36;
        };
    },
    57440: (_n37, _n38, _n39) => {
        'use strict';
        var _n3a = null;
        defineModule(_n38);
        Object.defineProperty(_n38, '__esModule', {
            'value': true
        }), _n38.getSlot149PersonalEffect = void 0;
        var _n3b = _n39(74496);
        _n38.getSlot149PersonalEffect = function(_n3c) {
            var _n3d = null,
                _n3e = new _n3b.SlotItemEffectModel(),
                _n3f = new _n3b.SlotItemEffectModel(),
                _n3g = false;
            return 488 == _n3c.ship_id || 141 == _n3c.ship_id || 160 == _n3c.ship_id || 622 == _n3c.ship_id || 623 == _n3c.ship_id || 656 == _n3c.ship_id || 961 == _n3c.ship_id ? (_n3f.tais = 1, _n3f.kaih = 3, _n3g = true) : 624 == _n3c.ship_id ? (_n3f.tais = 3, _n3f.kaih = 5, _n3g = true) : 662 == _n3c.ship_id && (_n3f.tais = 2, _n3f.kaih = 4, _n3g = true), 54 == _n3c.ctype && (_n3f.tais = 1, _n3f.kaih = 2, _n3g = true), 0 == _n3g ? _n3e : _n3e = _n3f.multiply(1);
        };
    },
    29493: (_n3h, _n3i, _n3j) => {
        'use strict';
        var _n3k = null;
        defineModule(_n3i);
        Object.defineProperty(_n3i, '__esModule', {
            'value': true
        }), _n3i.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _n3l = _n3j(74496);
        _n3i.getSlot14inch45CaliberGunPersonalEffect = function(_n3m) {
            var _n3n = null,
                _n3o, _n3p, _n3q, _n3r = new _n3l.SlotItemEffectModel(),
                _n3s = false,
                _n3t = new _n3l.SlotItemEffectModel(),
                _n3u = {
                    507: 507,
                    508: 507
                },
                _n3v = _n3m.get_slotnums(507),
                _n3w = _n3m.get_slotnums(508),
                _n3x = _n3v + _n3w,
                _n3y = _n3m.getCountryName(),
                _n3z = _n3m.getUSSWaterRaderDict();
            if (125 == _n3m.ctype && (_n3t.houg += 1, _n3t.kaih += 1, _n3t.houm += 1, _n3s = true, _n3v >= 1 && _n3w >= 1 && (_n3r.houg += 1, _n3r.houm += 1)), 'アメリカ' == _n3y && _n3m.stype >= 8 && _n3m.stype <= 10) {
                _n3t.houg += 2, _n3t.kaih += 1, _n3t.houm += 1, _n3s = true;
                for (var _n40 = 0, _n41 = 0, _n42 = _n3m.have_slot_ids(); _n41 < _n42.length; _n41++) {
                    var _n43 = _n42[_n41];
                    _n3z[Number(_n43)] && (_n40 += _n3m.get_slotnums(parseInt(_n43)));
                }
                _n40 >= 1 && (_n3r.houg += 1, _n3r.kaih += 1, _n3r.houm += 2), _n3v >= 1 && _n3w >= 1 && (_n3r.houg += 1, _n3r.houm += 1, _n3r.kaih += 2);
            }
            else 6 != _n3m.ctype && 26 != _n3m.ctype && 2 != _n3m.ctype && 'イギリス' != _n3y || (_n3r.kaih += 1, _n3r.houm += 1, _n3v >= 1 && _n3w >= 1 && (_n3r.houg += 1, _n3r.houm += 1, _n3r.kaih += 1));
            _n3s && _n3r.add(_n3t.multiply(_n3x));
            for (var _n44 = {}, _n45 = {}, _n46 = {}, _n47 = function(_n48) {
                    var _n49 = null,
                        _n4a = Number(_n48),
                        _n4b = _n3u[_n4a];
                    _n44[_n4b] = null !== (_n3o = _n44[_n4b]) && void 0 !== _n3o ? _n3o : 0, _n45[_n4b] = null !== (_n3p = _n45[_n4b]) && void 0 !== _n3p ? _n3p : 0, _n46[_n4b] = null !== (_n3q = _n46[_n4b]) && void 0 !== _n3q ? _n3q : 0, _n3m.get_each_level_nums(_n4a).forEach(function(_n4c, _n4d) {
                        _n4d >= 3 && (_n44[_n4b] += _n4c), _n4d >= 6 && (_n45[_n4b] += _n4c), _n4d >= 9 && (_n46[_n4b] += _n4c);
                    });
                }, _n4e = 0, _n4f = Object.keys(_n3u); _n4e < _n4f.length; _n4e++) {
                _n47(_n4f[_n4e]);
            }
            return _n44[507] >= 1 && (_n3r.houg += 1 * _n44[507]), _n45[507] >= 1 && (_n3r.souk += 1 * _n45[507]), _n46[507] >= 1 && (_n3r.houm += 1 * _n46[507]), _n3r;
        };
    },
    66985: (_n4g, _n4h, _n4i) => {
        'use strict';
        var _n4j = null;
        defineModule(_n4h);
        Object.defineProperty(_n4h, '__esModule', {
            'value': true
        }), _n4h.getSlot15PersonalEffect = void 0;
        var _n4k = _n4i(74496);
        _n4h.getSlot15PersonalEffect = function(_n4l) {
            var _n4m = null,
                _n4n = new _n4k.SlotItemEffectModel(),
                _n4o = false;
            if ((566 == _n4l.ship_id || 567 == _n4l.ship_id || 568 == _n4l.ship_id || 648 == _n4l.ship_id || 651 == _n4l.ship_id || 656 == _n4l.ship_id || 670 == _n4l.ship_id || 915 == _n4l.ship_id || 951 == _n4l.ship_id || 'たけ' == _n4l.yomi) && (_n4o = true), 0 == _n4o) return _n4n;
            var _n4p = _n4l.get_slotnums(15);
            return 30 == _n4l.ctype && (1 == _n4p ? _n4n.raig = 2 : _n4p >= 2 && (_n4n.raig = 4)), 'たけ' == _n4l.yomi && (_n4n.raig += 5, _n4n.kaih += 1), _n4n;
        };
    },
    70332: (_n4q, _n4r, _n4s) => {
        'use strict';
        var _n4t = null;
        defineModule(_n4r);
        Object.defineProperty(_n4r, '__esModule', {
            'value': true
        }), _n4r.getSlot15_2cmSanrensouSyuhouPersonalEffect = void 0;
        var _n4u = _n4s(74496);
        _n4r.getSlot15_2cmSanrensouSyuhouPersonalEffect = function(_n4v) {
            var _n4w = null,
                _n4x = new _n4u.SlotItemEffectModel(),
                _n4y = false,
                _n4z = new _n4u.SlotItemEffectModel(),
                _n50 = 0,
                _n51 = _n4v.getCountryName(),
                _n52 = _n4v.get_slotnums(536),
                _n53 = _n4v.get_slotnums(537);
            if ('フランス' == _n51 && (_n4z.houg += 2, _n4z.houm += 1, 128 == _n4v.ctype && (_n4z.houm += 1), 970 == _n4v.ship_id && _n53 >= 1 && (_n4z.houg += 1, _n4z.kaih += 2, _n4z.houm += 1), _n4y = true, _n50 = 1), 0 == _n4y) return _n4x;
            var _n54 = _n52 + _n53;
            if (_n4x.add(_n4z.multiply(_n54)), 0 == _n50) return _n4x;
            _n4v.haveSlotLevelNumOver(536);
            var _n55 = _n4v.haveSlotLevelNumOver(537),
                _n56 = _n4v.getTotalCountWithOverLeveledItem([536, 537]),
                _n57 = _n4v.get_slotnums(471) + _n4v.get_slotnums(538),
                _n58 = _n4v.haveSlotLevelNumOver(538);
            return 1 == _n50 && (_n56[3] >= 1 && (_n4x.houm += 1 * _n56[3]), _n56[4] >= 1 && (_n4x.houg += 1 * _n56[4]), _n55[5] >= 1 && (_n4x.kaih += 1 * _n55[5]), _n56[6] >= 1 && (_n4x.houm += 1 * _n56[6]), _n56[7] >= 1 && (_n4x.houg += 1 * _n56[7]), _n55[8] >= 1 && (_n4x.kaih += 1 * _n55[8]), _n56[9] >= 1 && (_n4x.houm += 1 * _n56[9]), _n56[10] >= 1 && (_n4x.houg += 1 * _n56[10]), _n56[1] >= 1 && (_n57 >= 1 && (970 == _n4v.ship_id && (_n4x.kaih += 1 * _n57), _n4x.houm += 1 * _n57), _n58[7] >= 1 && (_n4x.kaih += 1 * _n58[7]), _n58[9] >= 1 && (_n4x.houm += 1 * _n58[9]))), _n4x;
        };
    },
    79086: (_n59, _n5a, _n5b) => {
        'use strict';
        var _n5c = null;
        defineModule(_n5a);
        Object.defineProperty(_n5a, '__esModule', {
            'value': true
        }), _n5a.getSlot165_216PersonalEffect = void 0;
        var _n5d = _n5b(74496);
        _n5a.getSlot165_216PersonalEffect = function(_n5e) {
            var _n5f = null,
                _n5g = new _n5d.SlotItemEffectModel();
            return 501 != _n5e.ship_id && 506 != _n5e.ship_id && 502 != _n5e.ship_id && 507 != _n5e.ship_id || (_n5g.tyku += 2, _n5g.kaih += 2), _n5g;
        };
    },
    88102: (_n5h, _n5i, _n5j) => {
        'use strict';
        var _n5k = null;
        defineModule(_n5i);
        Object.defineProperty(_n5i, '__esModule', {
            'value': true
        }), _n5i.getSlot16M1PersonalEffect = void 0;
        var _n5l = _n5j(74496);
        _n5i.getSlot16M1PersonalEffect = function(_n5m) {
            var _n5n = null,
                _n5o = new _n5l.SlotItemEffectModel(),
                _n5p = new _n5l.SlotItemEffectModel();
            67 == _n5m.ctype || 78 == _n5m.ctype || 82 == _n5m.ctype || 88 == _n5m.ctype || 108 == _n5m.ctype || 112 == _n5m.ctype ? (_n5p.houg += 2, _n5p.souk += 1, 67 == _n5m.ctype && (_n5p.kaih -= 2)) : 149 == _n5m.ship_id || 150 == _n5m.ship_id || 151 == _n5m.ship_id || 152 == _n5m.ship_id ? (_n5p.houg += 1, _n5p.souk += 1, _n5p.kaih -= 3) : 591 == _n5m.ship_id || 592 == _n5m.ship_id || 694 == _n5m.ship_id ? (_n5p.houg += 2, _n5p.souk += 1, _n5p.kaih -= 2) : 593 != _n5m.ship_id && 954 != _n5m.ship_id || (_n5p.houg += 1, _n5p.souk += 1, _n5p.kaih -= 1);
            var _n5q = true;
            if (_n5p.exists() || (_n5q = false), 0 == _n5q) return _n5o;
            var _n5r = _n5m.get_slotnums(298) + _n5m.get_slotnums(299) + _n5m.get_slotnums(300);
            return _n5o = _n5p.multiply(_n5r);
        };
    },
    29240: (_n5s, _n5t, _n5u) => {
        'use strict';
        var _n5v = null;
        defineModule(_n5t);
        Object.defineProperty(_n5t, '__esModule', {
            'value': true
        }), _n5t.getSlot171PersonalEffect = void 0;
        var _n5w = _n5u(74496);
        _n5t.getSlot171PersonalEffect = function(_n5x) {
            var _n5y = null,
                _n5z = new _n5w.SlotItemEffectModel(),
                _n60 = 0;
            'アメリカ' == _n5x.getCountryName() && (_n60 = 1), 65 != _n5x.ctype && 93 != _n5x.ctype && 102 != _n5x.ctype && 107 != _n5x.ctype && 125 != _n5x.ctype || (_n5z.houg += 1, _n5z.saku += 1, _n60 = 2);
            var _n61 = _n5x.get_each_level_nums(171),
                _n62 = 0,
                _n63 = 0,
                _n64 = 0;
            return _n60 > 0 && (_n61.map(function(_n65, _n66) {
                _n66 >= 5 && (_n62 += _n65), _n66 >= 3 && (_n63 += _n65), _n66 >= 8 && (_n64 += _n65);
            }), 1 != _n60 && 2 != _n60 || (_n61[10] > 0 && (_n5z.houg += 1), _n62 > 0 && (_n5z.kaih += 1)), 2 == _n60 && (_n63 > 0 && (_n5z.saku += 1), _n64 > 0 && (_n5z.saku += 1))), _n5z;
        };
    },
    40885: (_n67, _n68, _n69) => {
        'use strict';
        var _n6a = null;
        defineModule(_n68);
        Object.defineProperty(_n68, '__esModule', {
            'value': true
        }), _n68.getSlot174PersonalEffect = void 0;
        var _n6b = _n69(74496);
        _n68.getSlot174PersonalEffect = function(_n6c) {
            var _n6d = null,
                _n6e = new _n6b.SlotItemEffectModel(),
                _n6f = new _n6b.SlotItemEffectModel();
            if (66 == _n6c.ctype && (_n6f.raig = 1, _n6f.kaih = 2), 591 == _n6c.ship_id || 592 == _n6c.ship_id || 954 == _n6c.ship_id || 694 == _n6c.ship_id ? (_n6f.raig += 6, _n6f.kaih += 3) : 593 == _n6c.ship_id ? (_n6f.raig += 5, _n6f.kaih += 2) : 488 != _n6c.ship_id && 622 != _n6c.ship_id && 623 != _n6c.ship_id && 624 != _n6c.ship_id || (_n6f.houg += 2, _n6f.raig += 4, _n6f.kaih += 4), !_n6f.exists()) return _n6e;
            var _n6g = _n6c.get_slotnums(174);
            return _n6e = _n6f.multiply(_n6g);
        };
    },
    19614: (_n6h, _n6i, _n6j) => {
        'use strict';
        var _n6k = null;
        defineModule(_n6i);
        Object.defineProperty(_n6i, '__esModule', {
            'value': true
        }), _n6i.getSlot179PersonalEffect = void 0;
        var _n6l = _n6j(74496);
        _n6i.getSlot179PersonalEffect = function(_n6m) {
            var _n6n = null,
                _n6o = new _n6l.SlotItemEffectModel(),
                _n6p = new _n6l.SlotItemEffectModel();
            if (54 == _n6m.ctype && (_n6p.raig = 1), !_n6p.exists()) return _n6o;
            var _n6q = _n6m.get_slotnums(179);
            return _n6o = _n6p.multiply(_n6q);
        };
    },
    87220: (_n6r, _n6s, _n6t) => {
        'use strict';
        var _n6u = null;
        defineModule(_n6s);
        Object.defineProperty(_n6s, '__esModule', {
            'value': true
        }), _n6s.getSlot184PersonalEffect = void 0;
        var _n6v = _n6t(74496);
        _n6s.getSlot184PersonalEffect = function(_n6w) {
            var _n6x = null,
                _n6y = new _n6v.SlotItemEffectModel(),
                _n6z = new _n6v.SlotItemEffectModel();
            if (68 == _n6w.ctype && (_n6z.houg += 1, _n6z.tyku += 2, _n6z.kaih += 3), !_n6z.exists()) return _n6y;
            var _n70 = _n6w.get_slotnums(184);
            return _n6y = _n6z.multiply(_n70);
        };
    },
    81367: (_n71, _n72, _n73) => {
        'use strict';
        var _n74 = null;
        defineModule(_n72);
        Object.defineProperty(_n72, '__esModule', {
            'value': true
        }), _n72.getSlot188PersonalEffect = void 0;
        var _n75 = _n73(74496);
        _n72.getSlot188PersonalEffect = function(_n76) {
            var _n77 = null,
                _n78 = new _n75.SlotItemEffectModel(),
                _n79 = new _n75.SlotItemEffectModel();
            if (68 == _n76.ctype && (_n79.houg += 3, _n79.tyku += 1, _n79.kaih += 1), !_n79.exists()) return _n78;
            var _n7a = _n76.get_slotnums(188);
            return _n78 = _n79.multiply(_n7a);
        };
    },
    13052: (_n7b, _n7c, _n7d) => {
        'use strict';
        var _n7e = null;
        defineModule(_n7c);
        Object.defineProperty(_n7c, '__esModule', {
            'value': true
        }), _n7c.getSlot189PersonalEffect = void 0;
        var _n7f = _n7d(74496);
        _n7c.getSlot189PersonalEffect = function(_n7g) {
            var _n7h = null,
                _n7i = new _n7f.SlotItemEffectModel(),
                _n7j = new _n7f.SlotItemEffectModel();
            if (68 != _n7g.ctype && 63 != _n7g.ctype || (_n7j.tyku += 1, _n7j.kaih += 2), !_n7j.exists()) return _n7i;
            var _n7k = _n7g.get_slotnums(189);
            return _n7i = _n7j.multiply(_n7k);
        };
    },
    66904: (_n7l, _n7m, _n7n) => {
        'use strict';
        var _n7o = null;
        defineModule(_n7m);
        Object.defineProperty(_n7m, '__esModule', {
            'value': true
        }), _n7m.getSlot18_52_PersonalEffect = void 0;
        var _n7p = _n7n(74496);
        _n7m.getSlot18_52_PersonalEffect = function(_n7q) {
            var _n7r = null,
                _n7s = new _n7p.SlotItemEffectModel(),
                _n7t = new _n7p.SlotItemEffectModel();
            if (277 == _n7q.ship_id || 278 == _n7q.ship_id || 156 == _n7q.ship_id ? _n7t.houg = 1 : 594 == _n7q.ship_id || 698 == _n7q.ship_id || 646 == _n7q.ship_id ? (_n7t.houg = 1, _n7t.kaih = 1) : 599 != _n7q.ship_id && 610 != _n7q.ship_id || (_n7t.houg = 2, _n7t.kaih = 1), !_n7t.exists()) return _n7s;
            var _n7u = _n7q.get_slotnums(18) + _n7q.get_slotnums(52);
            return _n7s = _n7t.multiply(_n7u);
        };
    },
    94968: (_n7v, _n7w, _n7x) => {
        'use strict';
        var _n7y = null;
        defineModule(_n7w);
        Object.defineProperty(_n7w, '__esModule', {
            'value': true
        }), _n7w.getSlot194PersonalEffect = void 0;
        var _n7z = _n7x(74496);
        _n7w.getSlot194PersonalEffect = function(_n80) {
            var _n81 = null,
                _n82 = new _n7z.SlotItemEffectModel(),
                _n83 = new _n7z.SlotItemEffectModel();
            if (70 == _n80.ctype ? (_n83.houg += 3, _n83.kaih += 2, _n83.saku += 2) : 72 != _n80.ctype && 62 != _n80.ctype || (_n83.kaih += 1, _n83.saku += 2), 392 != _n80.ship_id && 969 != _n80.ship_id || (_n83.houg += 1, _n83.kaih += 2, _n83.saku += 2), !_n83.exists()) return _n82;
            var _n84 = _n80.get_slotnums(194);
            return _n82 = _n83.multiply(_n84);
        };
    },
    94781: (_n85, _n86, _n87) => {
        'use strict';
        var _n88 = null;
        defineModule(_n86);
        Object.defineProperty(_n86, '__esModule', {
            'value': true
        }), _n86.getSlot195PersonalEffect = void 0;
        var _n89 = _n87(74496);
        _n86.getSlot195PersonalEffect = function(_n8a) {
            var _n8b = null,
                _n8c = new _n89.SlotItemEffectModel(),
                _n8d = false,
                _n8e = new _n89.SlotItemEffectModel();
            if ('アメリカ' == _n8a.getCountryName() && (_n8e.houg += 1, _n8d = true), 0 == _n8d) return _n8c;
            var _n8f = _n8a.get_slotnums(195);
            return _n8c.add(_n8e.multiply(_n8f));
        };
    },
    98137: (_n8g, _n8h, _n8i) => {
        'use strict';
        var _n8j = null;
        defineModule(_n8h);
        Object.defineProperty(_n8h, '__esModule', {
            'value': true
        }), _n8h.getSlot19PersonalEffect = void 0;
        var _n8k = _n8i(74496);
        _n8h.getSlot19PersonalEffect = function(_n8l) {
            var _n8m = null,
                _n8n = new _n8k.SlotItemEffectModel(),
                _n8o = new _n8k.SlotItemEffectModel();
            if ('ほうしょう' == _n8l.yomi && (_n8o.houg = 2, _n8o.kaih = 2, _n8o.tais = 2, _n8o.tyku = 2), 75 != _n8l.ctype && 76 != _n8l.ctype || (_n8o.houg = 2, _n8o.tais = 3), 7 == _n8l.stype && (_n8o.tyku += 1, _n8o.kaih += 1), 894 != _n8l.ship_id && 899 != _n8l.ship_id || (_n8o.houg += 1, _n8o.kaih += 1, _n8o.tais += 1, _n8o.tyku += 1), !_n8o.exists()) return _n8n;
            var _n8p = _n8l.get_slotnums(19);
            return _n8n = _n8o.multiply(_n8p);
        };
    },
    48658: (_n8q, _n8r, _n8s) => {
        'use strict';
        var _n8t = null;
        defineModule(_n8r);
        Object.defineProperty(_n8r, '__esModule', {
            'value': true
        }), _n8r.getSlot204PersonalEffect = void 0;
        var _n8u = _n8s(74496);
        _n8r.getSlot204PersonalEffect = function(_n8v) {
            var _n8w = null,
                _n8x = new _n8u.SlotItemEffectModel();
            if (591 != _n8v.ship_id && 592 != _n8v.ship_id && 593 != _n8v.ship_id && 954 != _n8v.ship_id && 694 != _n8v.ship_id) return _n8x;
            _n8x.souk = _n8x.souk + 1, _n8x.raig = _n8x.raig + 1;
            for (var _n8y = _n8v.get_each_level_nums(204), _n8z = 0, _n90 = 0; _n90 <= 10; _n90++) _n90 >= 7 && (_n8z += _n8y[_n90]);
            return _n8z > 0 && (_n8x.souk = _n8x.souk + 1, 694 == _n8v.ship_id && (_n8x.souk += 1)), _n8y[10] > 0 && (_n8x.raig = _n8x.raig + 1, 694 == _n8v.ship_id && (_n8x.raig += 1)), _n8x;
        };
    },
    2306: (_n91, _n92, _n93) => {
        'use strict';
        var _n94 = null;
        defineModule(_n92);
        Object.defineProperty(_n92, '__esModule', {
            'value': true
        }), _n92.getSlot217PersonalEffect = void 0;
        var _n95 = _n93(74496);
        _n92.getSlot217PersonalEffect = function(_n96) {
            var _n97 = null,
                _n98 = new _n95.SlotItemEffectModel(),
                _n99 = false,
                _n9a = new _n95.SlotItemEffectModel();
            if (501 == _n96.ship_id || 506 == _n96.ship_id ? (_n9a.houg += 1, _n9a.kaih += 3, _n9a.tyku += 5, _n99 = true) : 502 != _n96.ship_id && 507 != _n96.ship_id || (_n9a.houg += 1, _n9a.kaih += 2, _n9a.tyku += 4, _n99 = true), 0 == _n99) return _n98;
            var _n9b = _n96.get_slotnums(217);
            return _n98.add(_n9a.multiply(_n9b)), _n98;
        };
    },
    91302: function(_n9c, _n9d, _n9e) {
        'use strict';
        var _n9f = null;
        var _n9g = this && this.__importDefault || function(_n9h) {
            var _n9i = null;
            return _n9h && _n9h.__esModule ? _n9h : {
                'default': _n9h
            };
        };
        defineModule(_n9d);
        Object.defineProperty(_n9d, '__esModule', {
            'value': true
        }), _n9d.getSlot220PersonalEffect = void 0;
        var _n9j = _n9e(74496),
            _n9k = _n9g(_n9e(18622));
        _n9d.getSlot220PersonalEffect = function(_n9l) {
            var _n9m = null,
                _n9n = new _n9j.SlotItemEffectModel(),
                _n9o = false,
                _n9p = new _n9j.SlotItemEffectModel(),
                _n9q = 0,
                _n9r = 0;
            if (662 == _n9l.ship_id || 663 == _n9l.ship_id || 668 == _n9l.ship_id || 501 == _n9l.ship_id || 506 == _n9l.ship_id || 502 == _n9l.ship_id || 507 == _n9l.ship_id ? (_n9p.houg += 1, _n9p.tyku += 3, _n9p.kaih += 2, _n9o = true, _n9q = 1) : 894 != _n9l.ship_id && 899 != _n9l.ship_id || (_n9p.tyku += 2, _n9p.kaih += 2, _n9o = true, _n9q = 1, _n9r = 1), 0 == _n9o) return _n9n;
            var _n9s = _n9l.get_slotnums(220);
            _n9n.add(_n9p.multiply(_n9s));
            for (var _n9t = 0, _n9u = 0, _n9v = _n9l.have_slot_ids(); _n9u < _n9v.length; _n9u++) {
                var _n9w = _n9v[_n9u],
                    _n9x = _n9k.default.model.slot.getMst(_n9w),
                    _n9y = _n9x.equipType;
                12 != _n9y && 13 != _n9y || (_n9x.sakuteki >= 5 && _n9l.get_slotnums(parseInt(_n9w)), _n9x.taiku >= 2 && (_n9t += _n9l.get_slotnums(parseInt(_n9w))));
            }
            if (_n9t >= 1 && 1 == _n9q && (_n9n.tyku += 3, _n9n.kaih += 3), 0 == _n9r) return _n9n;
            var _n9z = _n9l.get_each_level_nums(220)[10];
            return 1 == _n9r && _n9z > 0 && (_n9n.houg += 1 * _n9z, _n9n.tyku += 1 * _n9z, _n9n.kaih += 1 * _n9z), _n9n;
        };
    },
    20418: (_na0, _na1, _na2) => {
        'use strict';
        var _na3 = null;
        defineModule(_na1);
        Object.defineProperty(_na1, '__esModule', {
            'value': true
        }), _na1.getSlot227PersonalEffect = void 0;
        var _na4 = _na2(74496);
        _na1.getSlot227PersonalEffect = function(_na5) {
            var _na6 = null,
                _na7 = new _na4.SlotItemEffectModel(),
                _na8 = _na5.get_each_level_nums(227),
                _na9 = 0;
            _na8.forEach(function(_naa, _nab) {
                _nab >= 8 && (_na9 += _naa);
            }), _na9 >= 1 && (_na7.tais += 1 * _na9);
            var _nac = _na8[10];
            return _nac >= 1 && (_na7.tais += 1 * _nac), _na7;
        };
    },
    1906: (_nad, _nae, _naf) => {
        'use strict';
        var _nag = null;
        defineModule(_nae);
        Object.defineProperty(_nae, '__esModule', {
            'value': true
        }), _nae.getSlot228PersonalEffect = void 0;
        var _nah = _naf(74496);
        _nae.getSlot228PersonalEffect = function(_nai) {
            var _naj = null,
                _nak = new _nah.SlotItemEffectModel(),
                _nal = new _nah.SlotItemEffectModel();
            if ('ほうしょう' == _nai.yomi && (_nal.houg = 3, _nal.kaih = 4, _nal.tais = 4, _nal.tyku = 3), 75 != _nai.ctype && 76 != _nai.ctype || (_nal.houg = 2, _nal.tais = 5, _nal.tyku = 1, _nal.kaih = 1), 7 == _nai.stype && (_nal.tais += 2, _nal.tyku += 1, _nal.kaih += 1), 894 != _nai.ship_id && 899 != _nai.ship_id || (_nal.houg += 1, _nal.kaih += 2, _nal.tais += 2, _nal.tyku += 1), !_nal.exists()) return _nak;
            var _nam = _nai.get_slotnums(228);
            return _nak = _nal.multiply(_nam);
        };
    },
    61887: function(_nan, _nao, _nap) {
        'use strict';
        var _naq = null;
        var _nar = this && this.__importDefault || function(_nas) {
            var _nat = null;
            return _nas && _nas.__esModule ? _nas : {
                'default': _nas
            };
        };
        defineModule(_nao);
        Object.defineProperty(_nao, '__esModule', {
            'value': true
        }), _nao.getSlot229PersonalEffect = void 0;
        var _nau = _nap(74496),
            _nav = _nar(_nap(18622));
        _nao.getSlot229PersonalEffect = function(_naw) {
            var _nax = null;
            for (var _nay = new _nau.SlotItemEffectModel(), _naz = 0, _nb0 = 0, _nb1 = _naw.have_slots_dict[229]; _nb0 < _nb1.length; _nb0++) {
                _nb1[_nb0].level >= 7 && _naz++;
            }
            var _nb2 = _naz,
                _nb3 = 0,
                _nb4 = 0,
                _nb5 = 0,
                _nb6 = _naw.get_slotnums(229);
            if (622 == _naw.ship_id || 623 == _naw.ship_id || 624 == _naw.ship_id) _nay.houg += 1 * _nb6, _nay.tyku += 1 * _nb6, _nb3 = 2;
            else {
                if (656 == _naw.ship_id) _nay.houg += 2 * _nb6, _nay.tyku += 3 * _nb6, _nay.tais += 2 * _nb6, _nb3 = 3;
                else {
                    if (0 == _naz) return _nay;
                }
            }
            if (488 == _naw.ship_id ? (_nay.tyku += 3 * _nb2, _nb3 = 1) : 220 == _naw.ship_id ? _nay.tyku += 2 * _nb2 : 23 == _naw.ship_id ? _nay.tyku += 1 * _nb2 : 160 == _naw.ship_id ? (_nay.tyku += 2 * _nb2, _nb3 = 1) : 224 == _naw.ship_id ? _nay.tyku += 1 * _nb2 : 487 == _naw.ship_id ? (_nay.tyku += 2 * _nb2, _nb3 = 1) : 289 == _naw.ship_id && (_nay.tyku += 1 * _nb2), (66 == _naw.ctype || 28 == _naw.ctype) && (_nay.houg += 1 * _nb2, _nay.tyku += 1 * _nb2, _nb4 = 1), 1 == _naw.stype && (_nay.houg += 1 * _nb2, _nay.tyku += 1 * _nb2, _nb5 = 1), ('ゆら' == _naw.yomi || 'なか' == _naw.yomi || 'きぬ' == _naw.yomi) && (_nay.houg += 2 * _nb2), 0 == _nb3 + _nb4 + _nb5) return _nay;
            for (var _nb7 = 0, _nb8 = 0, _nb9 = 0, _nba = _naw.have_slot_ids(); _nb9 < _nba.length; _nb9++) {
                var _nbb = _nba[_nb9],
                    _nbc = _nav.default.model.slot.getMst(_nbb),
                    _nbd = _nbc.equipType;
                12 != _nbd && 13 != _nbd || (_nbc.sakuteki >= 5 && (_nb7 += _naw.get_slotnums(parseInt(_nbb))), _nbc.taiku >= 2 && (_nb8 += _naw.get_slotnums(parseInt(_nbb))));
            }
            return 1 == _nb3 ? _nb7 > 0 && (_nay.houg += 3, _nay.kaih += 2) : 2 == _nb3 ? (_nb7 > 0 && (_nay.houg += 1, _nay.kaih += 1), _nb8 > 0 && (_nay.tyku += 2, _nay.kaih += 2)) : 3 == _nb3 && (_nb7 > 0 && (_nay.houg += 2, _nay.kaih += 2), _nb8 > 0 && (_nay.tyku += 3, _nay.kaih += 2)), 1 == _nb4 && _nb7 > 0 && (_nay.houg += 2, _nay.kaih += 3), 1 == _nb5 && _nb7 > 0 && (_nay.houg += 1, _nay.kaih += 4), _nay;
        };
    },
    55734: (_nbe, _nbf, _nbg) => {
        'use strict';
        var _nbh = null;
        defineModule(_nbf);
        Object.defineProperty(_nbf, '__esModule', {
            'value': true
        }), _nbf.getSlot234PersonalEffect = void 0;
        var _nbi = _nbg(74496);
        _nbf.getSlot234PersonalEffect = function(_nbj) {
            var _nbk = null,
                _nbl = new _nbi.SlotItemEffectModel(),
                _nbm = false,
                _nbn = new _nbi.SlotItemEffectModel(),
                _nbo = _nbj.get_slotnums(142) + _nbj.get_slotnums(460);
            if (37 == _nbj.ctype && (_nbn.houg += 1, _nbn.tyku += 1, _nbn.kaih += 1, _nbn.houm += 1, _nbo >= 1 && (_nbl.tyku += 1, _nbl.kaih += 1, _nbl.houm += 1), _nbm = true), 0 == _nbm) return _nbl;
            var _nbp = _nbj.get_slotnums(234);
            return _nbl.add(_nbn.multiply(_nbp)), _nbl;
        };
    },
    17562: function(_nbq, _nbr, _nbs) {
        'use strict';
        var _nbt = null;
        var _nbu = this && this.__importDefault || function(_nbv) {
            var _nbw = null;
            return _nbv && _nbv.__esModule ? _nbv : {
                'default': _nbv
            };
        };
        defineModule(_nbr);
        Object.defineProperty(_nbr, '__esModule', {
            'value': true
        }), _nbr.getSlot235PersonalEffect = void 0;
        var _nbx = _nbs(74496),
            _nby = _nbu(_nbs(18622));
        _nbr.getSlot235PersonalEffect = function(_nbz) {
            var _nc0 = null,
                _nc1 = new _nbx.SlotItemEffectModel(),
                _nc2 = false,
                _nc3 = new _nbx.SlotItemEffectModel(),
                _nc4 = 0;
            if (52 != _nbz.ctype && 9 != _nbz.ctype || (_nc3.houg += 2, _nc3.tyku += 1, _nc2 = true), 321 == _nbz.ship_id && (_nc3.houg += 1, _nc3.kaih += 1, _nc4 = 1), 0 == _nc2) return _nc1;
            var _nc5 = _nbz.get_slotnums(235);
            if (_nc1.add(_nc3.multiply(_nc5)), 0 == _nc4) return _nc1;
            for (var _nc6 = 0, _nc7 = 0, _nc8 = 0, _nc9 = _nbz.have_slot_ids(); _nc8 < _nc9.length; _nc8++) {
                var _nca = _nc9[_nc8],
                    _ncb = _nby.default.model.slot.getMst(_nca),
                    _ncc = _ncb.equipType;
                12 != _ncc && 13 != _ncc || (_ncb.sakuteki >= 5 && (_nc6 += _nbz.get_slotnums(parseInt(_nca))), _ncb.taiku >= 2 && (_nc7 += _nbz.get_slotnums(parseInt(_nca))));
            }
            return _nc6 >= 1 && 1 == _nc4 && (_nc1.houg += 3, _nc1.kaih += 2), _nc7 >= 1 && 1 == _nc4 && (_nc1.tyku += 3, _nc1.kaih += 3), _nc1;
        };
    },
    47970: (_ncd, _nce, _ncf) => {
        'use strict';
        var _ncg = null;
        defineModule(_nce);
        Object.defineProperty(_nce, '__esModule', {
            'value': true
        }), _nce.getSlot237PersonalEffect = void 0;
        var _nch = _ncf(74496);
        _nce.getSlot237PersonalEffect = function(_nci) {
            var _ncj = null,
                _nck = new _nch.SlotItemEffectModel(),
                _ncl = new _nch.SlotItemEffectModel();
            if (553 == _nci.ship_id) _ncl.houg = 4, _ncl.kaih = 2;
            else {
                if (82 == _nci.ship_id) _ncl.houg = 3, _ncl.kaih = 1;
                else {
                    if (88 == _nci.ship_id) _ncl.houg = 3, _ncl.kaih = 1;
                    else {
                        if (554 == _nci.ship_id) _ncl.houg = 4, _ncl.kaih = 2;
                        else {
                            if (411 == _nci.ship_id) _ncl.houg = 2;
                            else {
                                if (412 != _nci.ship_id) return _nck;
                                _ncl.houg = 2;
                            }
                        }
                    }
                }
            }
            var _ncm = _nci.get_slotnums(237);
            return _nck = _ncl.multiply(_ncm);
        };
    },
    14386: (_ncn, _nco, _ncp) => {
        'use strict';
        var _ncq = null;
        defineModule(_nco);
        Object.defineProperty(_nco, '__esModule', {
            'value': true
        }), _nco.getSlot238_239PersonalEffect = void 0;
        var _ncr = _ncp(74496);
        _nco.getSlot238_239PersonalEffect = function(_ncs) {
            var _nct = null,
                _ncu = new _ncr.SlotItemEffectModel();
            return 501 != _ncs.ship_id && 506 != _ncs.ship_id && 502 != _ncs.ship_id && 507 != _ncs.ship_id || (_ncu.kaih += 1, _ncu.raig += 1), _ncu;
        };
    },
    82229: (_ncv, _ncw, _ncx) => {
        'use strict';
        var _ncy = null;
        defineModule(_ncw);
        Object.defineProperty(_ncw, '__esModule', {
            'value': true
        }), _ncw.getSlot242PersonalEffect = void 0;
        var _ncz = _ncx(74496);
        _ncw.getSlot242PersonalEffect = function(_nd0) {
            var _nd1 = null,
                _nd2 = new _ncz.SlotItemEffectModel(),
                _nd3 = false,
                _nd4 = new _ncz.SlotItemEffectModel();
            if (78 == _nd0.ctype && (_nd4.houg += 2, _nd4.kaih += 1, _nd3 = true), 'ほうしょう' == _nd0.yomi && (_nd4.houg += 1, _nd3 = true), 0 == _nd3) return _nd2;
            var _nd5 = _nd0.get_slotnums(242);
            return _nd2.add(_nd4.multiply(_nd5)), _nd2;
        };
    },
    10325: (_nd6, _nd7, _nd8) => {
        'use strict';
        var _nd9 = null;
        defineModule(_nd7);
        Object.defineProperty(_nd7, '__esModule', {
            'value': true
        }), _nd7.getSlot243PersonalEffect = void 0;
        var _nda = _nd8(74496);
        _nd7.getSlot243PersonalEffect = function(_ndb) {
            var _ndc = null,
                _ndd = new _nda.SlotItemEffectModel(),
                _nde = false,
                _ndf = new _nda.SlotItemEffectModel();
            if (78 == _ndb.ctype && (_ndf.houg += 3, _ndf.kaih += 1, _nde = true), 'ほうしょう' == _ndb.yomi && (_ndf.houg += 2, _nde = true), 0 == _nde) return _ndd;
            var _ndg = _ndb.get_slotnums(243);
            return _ndd.add(_ndf.multiply(_ndg)), _ndd;
        };
    },
    351: (_ndh, _ndi, _ndj) => {
        'use strict';
        var _ndk = null;
        defineModule(_ndi);
        Object.defineProperty(_ndi, '__esModule', {
            'value': true
        }), _ndi.getSlot244PersonalEffect = void 0;
        var _ndl = _ndj(74496);
        _ndi.getSlot244PersonalEffect = function(_ndm) {
            var _ndn = null,
                _ndo = new _ndl.SlotItemEffectModel(),
                _ndp = false,
                _ndq = new _ndl.SlotItemEffectModel(),
                _ndr = 0;
            if (78 == _ndm.ctype && (_ndq.houg += 4, _ndq.kaih += 2, _ndp = true, _ndr = 1), 'ほうしょう' == _ndm.yomi && (_ndq.houg += 3, _ndp = true, _ndr = 2), 0 == _ndp) return _ndo;
            var _nds = _ndm.get_slotnums(244);
            if (_ndo.add(_ndq.multiply(_nds)), 0 == _ndr) return _ndo;
            var _ndt = _ndm.get_each_level_over_nums([244]).slot[244];
            return 1 == _ndr ? (_ndt[3] >= 1 && (_ndo.houg += 1 * _ndt[3]), _ndt[5] >= 1 && (_ndo.houm += 1 * _ndt[5]), _ndt[7] >= 1 && (_ndo.houg += 1 * _ndt[7]), _ndt[8] >= 1 && (_ndo.kaih += 1 * _ndt[8]), _ndt[9] >= 1 && (_ndo.houm += 1 * _ndt[9]), _ndt[10] >= 1 && (_ndo.houg += 1 * _ndt[10])) : 2 == _ndr && (_ndt[3] >= 1 && (_ndo.kaih += 1 * _ndt[3]), _ndt[7] >= 1 && (_ndo.houg += 1 * _ndt[7]), _ndt[9] >= 1 && (_ndo.houm += 1 * _ndt[9]), _ndt[10] >= 1 && (_ndo.houg += 1 * _ndt[10])), _ndo;
        };
    },
    61977: (_ndu, _ndv, _ndw) => {
        'use strict';
        var _ndx = null;
        defineModule(_ndv);
        Object.defineProperty(_ndv, '__esModule', {
            'value': true
        }), _ndv.getSlot247PersonalEffect = void 0;
        var _ndy = _ndw(74496);
        _ndv.getSlot247PersonalEffect = function(_ndz) {
            var _ne0 = null,
                _ne1 = new _ndy.SlotItemEffectModel(),
                _ne2 = false,
                _ne3 = new _ndy.SlotItemEffectModel(),
                _ne4 = 0;
            if ('フランス' == _ndz.getCountryName() && (_ne3.houg += 2, _ne3.houm += 2, _ne2 = true, _ne4 = 1), 0 == _ne2) return _ne1;
            var _ne5 = _ndz.get_slotnums(247);
            if (_ne1.add(_ne3.multiply(_ne5)), 0 == _ne4) return _ne1;
            var _ne6 = _ndz.get_each_level_nums(247),
                _ne7 = 0,
                _ne8 = 0;
            _ne4 > 0 && _ne6.forEach(function(_ne9, _nea) {
                _nea >= 4 && (_ne7 += _ne9), _nea >= 8 && (_ne8 += _ne9);
            });
            var _neb = _ne6[10];
            return 1 == _ne4 && (_ne7 >= 1 && (_ne1.houg += 1 * _ne7, _ne1.houm += 1 * _ne7), _ne8 >= 1 && (_ne1.kaih += 1 * _ne8, _ne1.houg += 1 * _ne8, _ne1.houm += 1 * _ne8), _neb >= 1 && (_ne1.kaih += 1 * _neb, _ne1.houm += 1 * _neb)), _ne1;
        };
    },
    96580: (_nec, _ned, _nee) => {
        'use strict';
        var _nef = null;
        defineModule(_ned);
        Object.defineProperty(_ned, '__esModule', {
            'value': true
        }), _ned.getSlot252PersonalEffect = void 0;
        var _neg = _nee(74496);
        _ned.getSlot252PersonalEffect = function(_neh) {
            var _nei = null,
                _nej = new _neg.SlotItemEffectModel(),
                _nek = (new _neg.SlotItemEffectModel(), 0);
            if (78 != _neh.ctype && 112 != _neh.ctype || (_nek = 1), 0 == _nek) return _nej;
            var _nel = _neh.get_each_level_over_nums([252]).slot[252];
            return 1 == _nek && (_nel[4] >= 1 && (_nej.kaih += 1 * _nel[4]), _nel[6] >= 1 && (_nej.houm += 1 * _nel[6]), _nel[7] >= 1 && (_nej.houg += 1 * _nel[7]), _nel[8] >= 1 && (_nej.kaih += 1 * _nel[8]), _nel[9] >= 1 && (_nej.houm += 1 * _nel[9]), _nel[10] >= 1 && (_nej.houg += 1 * _nel[10])), _nej;
        };
    },
    81284: (_nem, _nen, _neo) => {
        'use strict';
        var _nep = null;
        defineModule(_nen);
        Object.defineProperty(_nen, '__esModule', {
            'value': true
        }), _nen.getSlot258PersonalEffect = void 0;
        var _neq = _neo(74496);
        _nen.getSlot258PersonalEffect = function(_ner) {
            var _nes = null,
                _net = new _neq.SlotItemEffectModel(),
                _neu = _ner.haveSlotLevelNumOver(258);
            return _neu[2] >= 1 && (_net.houm += 1 * _neu[2], _net.kaih += 1 * _neu[2], {
                883: 1,
                599: 1,
                610: 1,
                899: 1,
                156: 1
            }[_ner.ship_id] && (_net.houg += 1 * _neu[2], _net.houm += 1 * _neu[2], _net.kaih += 1 * _neu[2])), _net;
        };
    },
    4862: (_nev, _new, _nex) => {
        'use strict';
        var _ney = null;
        defineModule(_new);
        Object.defineProperty(_new, '__esModule', {
            'value': true
        }), _new.getSlot25mmMachinegunLightShipEffect = void 0;
        var _nez = _nex(74496);
        _new.getSlot25mmMachinegunLightShipEffect = function(_nf0) {
            var _nf1 = null,
                _nf2 = new _nez.SlotItemEffectModel(),
                _nf3 = {
                    986: 1
                };
            if (!_nf3[_nf0.ship_id]) return _nf2;
            var _nf4 = _nf3[_nf0.ship_id],
                _nf5 = _nf0.get_slotnums(39),
                _nf6 = _nf0.get_slotnums(40),
                _nf7 = _nf0.get_slotnums(49),
                _nf8 = _nf0.get_slotnums(505),
                _nf9 = _nf5 + _nf6 + _nf7 + _nf8,
                _nfa = _nf0.get_slotnums(533),
                _nfb = _nf0.get_slotnums(553),
                _nfc = _nf0.haveSlotLevelNumOver(39),
                _nfd = _nf0.haveSlotLevelNumOver(505);
            return 1 == _nf4 && (_nf2.kaih += 1 * _nf9, _nf2.tyku += 1 * _nf9, _nf5 >= 1 && (_nfc[7] >= 1 && (_nf2.houg += 1 * _nfc[7]), _nfc[8] >= 1 && (_nf2.tyku += 1 * _nfc[8]), _nfc[9] >= 1 && (_nf2.kaih += 1 * _nfc[9]), _nfc[10] >= 1 && (_nf2.houm += 1 * _nfc[10]), _nfa + _nfb >= 1 && (_nf2.houm += 1, _nf2.tyku += 1)), _nf8 >= 1 && (_nf2.houg += 1 * _nf8, _nf2.kaih += 1 * _nf8, _nfd[8] >= 1 && (_nf2.houm += 1 * _nfd[8]))), _nf2;
        };
    },
    31797: function(_nfe, _nff, _nfg) {
        'use strict';
        var _nfh = null;
        var _nfi = this && this.__importDefault || function(_nfj) {
            var _nfk = null;
            return _nfj && _nfj.__esModule ? _nfj : {
                'default': _nfj
            };
        };
        defineModule(_nff);
        Object.defineProperty(_nff, '__esModule', {
            'value': true
        }), _nff.getSlot266PersonalEffect2 = _nff.getSlot266PersonalEffect = void 0;
        var _nfl = _nfg(74496),
            _nfm = _nfi(_nfg(18622));
        _nff.getSlot266PersonalEffect = function(_nfn) {
            var _nfo = null,
                _nfp = new _nfl.SlotItemEffectModel(),
                _nfq = false;
            if (566 != _nfn.ship_id && 567 != _nfn.ship_id && 568 != _nfn.ship_id && 656 != _nfn.ship_id && 670 != _nfn.ship_id && 915 != _nfn.ship_id && 951 != _nfn.ship_id || (_nfq = true), 0 == _nfq) return _nfp;
            var _nfr = _nfn.get_slotnums(266);
            return 30 == _nfn.ctype && (1 == _nfr ? _nfp.houg = 1 : _nfr >= 2 && (_nfp.houg = 3)), _nfp;
        }, _nff.getSlot266PersonalEffect2 = function(_nfs) {
            var _nft = null,
                _nfu = new _nfl.SlotItemEffectModel(),
                _nfv = 0,
                _nfw = new _nfl.SlotItemEffectModel();
            if (23 == _nfs.ctype || 18 == _nfs.ctype ? (_nfw.houg = 1, _nfv = 1) : 30 == _nfs.ctype && (_nfw.houg = 1, _nfv = 2), ('しぐれ' == _nfs.yomi || 'ゆきかぜ' == _nfs.yomi || 'いそかぜ' == _nfs.yomi) && (_nfw.kaih = 1), 961 == _nfs.ship_id && (_nfw.houg += 1, _nfw.houm += 1, _nfw.kaih += 1), !_nfw.exists()) return _nfu;
            var _nfx = _nfs.get_slotnums(266);
            if (_nfu = _nfw.multiply(_nfx), 0 == _nfv) return _nfu;
            for (var _nfy = 0, _nfz = 0, _ng0 = _nfs.have_slot_ids(); _nfz < _ng0.length; _nfz++) {
                var _ng1 = _ng0[_nfz],
                    _ng2 = _nfm.default.model.slot.getMst(_ng1),
                    _ng3 = _ng2.equipType;
                (12 == _ng3 || 13 == _ng3) && _ng2.sakuteki >= 5 && (_nfy += _nfs.get_slotnums(parseInt(_ng1)));
            }
            return _nfy > 0 && (1 == _nfv ? (_nfu.houg += 1, _nfu.kaih += 1, _nfu.raig += 3) : 2 == _nfv && (_nfu.houg += 2, _nfu.kaih += 1, _nfu.raig += 3)), _nfu;
        };
    },
    45738: function(_ng4, _ng5, _ng6) {
        'use strict';
        var _ng7 = null;
        var _ng8 = this && this.__importDefault || function(_ng9) {
            var _nga = null;
            return _ng9 && _ng9.__esModule ? _ng9 : {
                'default': _ng9
            };
        };
        defineModule(_ng5);
        Object.defineProperty(_ng5, '__esModule', {
            'value': true
        }), _ng5.getSlot267PersonalEffect2 = _ng5.getSlot267PersonalEffect = void 0;
        var _ngb = _ng6(74496),
            _ngc = _ng8(_ng6(18622));
        _ng5.getSlot267PersonalEffect = function(_ngd) {
            var _nge = null,
                _ngf = new _ngb.SlotItemEffectModel(),
                _ngg = 0,
                _ngh = 0;
            if (38 == _ngd.ctype || 22 == _ngd.ctype) _ngg = 2, _ngh = 1;
            else {
                if (30 != _ngd.ctype) return _ngf;
                _ngg = 1, _ngh = 1;
            }
            var _ngi = _ngd.get_slotnums(267) + _ngd.get_slotnums(366);
            return _ngf.houg = _ngg * _ngi, _ngf.kaih = _ngh * _ngi, _ngf;
        }, _ng5.getSlot267PersonalEffect2 = function(_ngj) {
            var _ngk = null,
                _ngl = new _ngb.SlotItemEffectModel(),
                _ngm = _ngj.get_slotnums(267),
                _ngn = _ngj.get_slotnums(366),
                _ngo = _ngm + _ngn;
            if (566 != _ngj.ship_id && 567 != _ngj.ship_id && 568 != _ngj.ship_id && 656 != _ngj.ship_id && 670 != _ngj.ship_id && 915 != _ngj.ship_id && 951 != _ngj.ship_id || (_ngm > 0 && (_ngl.houg += 1), 1 == _ngn ? (_ngl.houg += 1, _ngl.tyku += 2) : _ngn >= 2 && (_ngl.houg += 2, _ngl.tyku += 4)), 38 != _ngj.ctype && 229 != _ngj.ship_id && [648, 961].indexOf(_ngj.ship_id) < 0) return _ngl;
            var _ngp = false,
                _ngq = false,
                _ngr = false,
                _ngs = false,
                _ngt = false,
                _ngu = false,
                _ngv = false,
                _ngw = false,
                _ngx = false,
                _ngy = false,
                _ngz = false,
                _nh0 = false,
                _nh1 = false,
                _nh2 = 0,
                _nh3 = 0,
                _nh4 = 0;
            543 == _ngj.ship_id ? (_ngl.houg = 1 * _ngo, _ngq = true) : 229 == _ngj.ship_id ? _ngr = true : 542 == _ngj.ship_id ? (_ngl.houg = 1 * _ngo, _ngs = true) : 563 == _ngj.ship_id ? (_ngl.houg = 1 * _ngo, _ngt = true) : 564 == _ngj.ship_id ? (_ngl.houg = 1 * _ngo, _ngu = true) : 578 == _ngj.ship_id ? (_ngl.houg = 1 * _ngo, _ngv = true) : 569 == _ngj.ship_id ? (_ngl.houg = 1 * _ngo, _ngw = true) : 649 == _ngj.ship_id ? (_ngl.houg = 2 * _ngo, _ngy = true) : 955 == _ngj.ship_id || 960 == _ngj.ship_id ? (_ngl.houg = 2 * _ngo, _ngz = true) : 956 == _ngj.ship_id ? (_ngl.houg = 2 * _ngo, _nh0 = true) : 648 == _ngj.ship_id ? (_ngl.houg = 2 * _ngo, _ngx = true, _nh2 = 1, _nh3 = 1, _nh4 = 1) : 961 == _ngj.ship_id ? (_ngl.houg = 2 * _ngo, _ngp = true, _nh2 = 1, _nh3 = 1, _nh4 = 1) : 981 == _ngj.ship_id && (_ngl.houg = 1 * _ngo, _nh1 = true);
            for (var _nh5 = 0, _nh6 = 0, _nh7 = 0, _nh8 = _ngj.have_slot_ids(); _nh7 < _nh8.length; _nh7++) {
                var _nh9 = _nh8[_nh7],
                    _nha = _ngc.default.model.slot.getMst(_nh9),
                    _nhb = _nha.equipType;
                12 != _nhb && 13 != _nhb || (_nha.sakuteki >= 5 && (_nh5 += _ngj.get_slotnums(parseInt(_nh9))), _nha.taiku >= 2 && (_nh6 += _ngj.get_slotnums(parseInt(_nh9))));
            }
            if (_nh5 > 0 && _ngm > 0 && ((38 == _ngj.ctype || _ngx) && (_ngl.houg += 2, _ngl.raig += 3, _ngl.kaih += 1, 955 == _ngj.ship_id || 956 == _ngj.ship_id ? _ngl.raig -= 1 : 960 == _ngj.ship_id && (_ngl.raig -= 2)), (_ngs || _ngq || _ngr || _ngt || _ngu || _ngv || _ngw || _ngx || _ngy || _ngz || _nh0 || _nh1) && (_ngl.houg += 1, _ngl.raig += 3, _ngl.kaih += 2)), _ngn > 0 && (_ngs || _ngq || _ngt || _ngu || _ngv || _ngr || _ngw || _ngx || _ngy || _ngp || _ngz || _nh0 || _nh1)) {
                1 == _ngn ? (_ngl.tyku += 3, _ngl.houg += 1, _ngl.houm += 1) : _ngn >= 2 && (_ngl.tyku += 5, _ngl.houg += 3, _ngl.houm += 1, 955 == _ngj.ship_id && (_ngl.houg += 1)), (_ngw || _ngx) && (_ngl.houg += 1, _ngl.tyku += 2), _nh5 > 0 && (_ngl.houg += 2, _ngl.kaih += 2, _ngl.raig += 4, _ngl.houm += 2, 960 == _ngj.ship_id && (_ngl.raig -= 1, _ngl.houg += 1)), _nh6 > 0 && (_ngl.houg += 1, _ngl.kaih += 3, _ngl.tyku += 5, _ngl.houm += 1);
                var _nhc = _ngj.get_each_level_nums(366),
                    _nhd = 0,
                    _nhe = 0;
                _nhc.forEach(function(_nhf, _nhg) {
                    _nhg >= 5 && (_nhd += _nhf), _nhg >= 8 && (_nhe += _nhf);
                }), _nhd >= 1 && (_ngl.houm += 1 * _nhd), _nhe >= 1 && (_ngl.houg += 1 * _nhe);
                var _nhh = _nhc[10];
                _nhh >= 1 && (_ngl.houm += 1 * _nhh);
            }
            var _nhi = _ngj.get_slotnums(129),
                _nhj = _ngj.get_slotnums(74),
                _nhk = _ngj.get_slotnums(412);
            return _nh2 > 0 && _nhi > 0 && 1 == _nh2 && (_ngl.houg += 2, _ngl.kaih += 3, _ngl.tyku += 2), _nh4 > 0 && _nhk > 0 && 1 == _nh4 && (_ngl.houg += 2, _ngl.kaih += 3, _ngl.tyku += 2), _nh3 > 0 && _nhj > 0 && 1 == _nh3 && (_ngl.houg += 3, _ngl.kaih -= 3), _ngl;
        };
    },
    23934: (_nhl, _nhm, _nhn) => {
        'use strict';
        var _nho = null;
        defineModule(_nhm);
        Object.defineProperty(_nhm, '__esModule', {
            'value': true
        }), _nhm.getSlot271PersonalEffect = void 0;
        var _nhp = _nhn(74496);
        _nhm.getSlot271PersonalEffect = function(_nhq) {
            var _nhr = null,
                _nhs = new _nhp.SlotItemEffectModel(),
                _nht = 0;
            if (508 != _nhq.ship_id && 509 != _nhq.ship_id && 888 != _nhq.ship_id && 883 != _nhq.ship_id || (_nht = 1), 0 == _nht) return _nhs;
            var _nhu = _nhq.get_each_level_nums(271),
                _nhv = 0,
                _nhw = 0,
                _nhx = 0,
                _nhy = _nhu[10];
            return _nht > 0 && _nhu.forEach(function(_nhz, _ni0) {
                _ni0 >= 4 && (_nhv += _nhz), _ni0 >= 6 && (_nhw += _nhz), _ni0 >= 8 && (_nhx += _nhz);
            }), 1 == _nht && (_nhv >= 1 && (_nhs.houg += 1 * _nhv), _nhw >= 1 && (_nhs.tyku += 2 * _nhw), _nhx >= 1 && (_nhs.kaih += 2 * _nhx), _nhy >= 1 && (_nhs.houg += 1 * _nhy)), _nhs;
        };
    },
    17712: function(_ni1, _ni2, _ni3) {
        'use strict';
        var _ni4 = null;
        var _ni5 = this && this.__importDefault || function(_ni6) {
            var _ni7 = null;
            return _ni6 && _ni6.__esModule ? _ni6 : {
                'default': _ni6
            };
        };
        defineModule(_ni2);
        Object.defineProperty(_ni2, '__esModule', {
            'value': true
        }), _ni2.getSlot275PersonalEffect = void 0;
        var _ni8 = _ni3(74496),
            _ni9 = _ni5(_ni3(18622));
        _ni2.getSlot275PersonalEffect = function(_nia) {
            var _nib = null,
                _nic = new _ni8.SlotItemEffectModel(),
                _nid = false,
                _nie = new _ni8.SlotItemEffectModel(),
                _nif = 0,
                _nig = 0;
            if (894 != _nia.ship_id && 899 != _nia.ship_id || (_nie.houg += 1, _nie.tyku += 3, _nie.kaih += 2, _nid = true, _nig = 1, _nif = 1), 0 == _nid) return _nic;
            var _nih = _nia.get_slotnums(275);
            _nic.add(_nie.multiply(_nih));
            var _nii = 0;
            if (_nif > 0)
                for (var _nij = 0, _nik = _nia.have_slot_ids(); _nij < _nik.length; _nij++) {
                    var _nil = _nik[_nij],
                        _nim = _ni9.default.model.slot.getMst(_nil),
                        _nin = _nim.equipType;
                    12 != _nin && 13 != _nin || (_nim.sakuteki >= 5 && _nia.get_slotnums(parseInt(_nil)), _nim.taiku >= 2 && (_nii += _nia.get_slotnums(parseInt(_nil))));
                }
            if (1 == _nif && _nii > 0 && (_nic.tyku += 3, _nic.kaih += 3), 0 == _nig) return _nic;
            var _nio = _nia.get_each_level_nums(275),
                _nip = 0,
                _niq = _nio[10];
            return _nig > 0 && _nio.forEach(function(_nir, _nis) {
                _nis >= 7 && (_nip += _nir);
            }), 1 == _nig && (_nip > 0 && (_nic.tyku += 1 * _nip, _nic.kaih += 1 * _nip), _niq > 0 && (_nic.houg += 1 * _niq, _nic.tyku += 1 * _niq, _nic.houm += 1 * _niq)), _nic;
        };
    },
    93733: (_nit, _niu, _niv) => {
        'use strict';
        var _niw = null;
        defineModule(_niu);
        Object.defineProperty(_niu, '__esModule', {
            'value': true
        }), _niu.getSlot277PersonalEffect = void 0;
        var _nix = _niv(74496);
        _niu.getSlot277PersonalEffect = function(_niy) {
            var _niz = null,
                _nj0 = new _nix.SlotItemEffectModel(),
                _nj1 = false,
                _nj2 = new _nix.SlotItemEffectModel();
            if ('アメリカ' != _niy.getCountryName() && 67 != _niy.ctype && 78 != _niy.ctype && 82 != _niy.ctype && 88 != _niy.ctype && 108 != _niy.ctype && 112 != _niy.ctype || (_nj2.houg += 1, _nj2.kaih += 1, _nj1 = true), 83 == _niy.ctype && (_nj2.houg += 1, _nj2.kaih += 1, _nj2.tyku += 1, _nj1 = true), 0 == _nj1) return _nj0;
            var _nj3 = _niy.get_slotnums(277);
            return _nj0.add(_nj2.multiply(_nj3)), _nj0;
        };
    },
    34718: (_nj4, _nj5, _nj6) => {
        'use strict';
        var _nj7 = null;
        defineModule(_nj5);
        Object.defineProperty(_nj5, '__esModule', {
            'value': true
        }), _nj5.getSlot278PersonalEffect = void 0;
        var _nj8 = _nj6(74496);
        _nj5.getSlot278PersonalEffect = function(_nj9) {
            var _nja = null,
                _njb = new _nj8.SlotItemEffectModel();
            return 'アメリカ' == _nj9.getCountryName() ? (_njb.tyku += 1, _njb.kaih += 3, _njb.saku += 1) : 67 == _nj9.ctype || 78 == _nj9.ctype || 82 == _nj9.ctype || 88 == _nj9.ctype || 108 == _nj9.ctype || 112 == _nj9.ctype ? (_njb.tyku += 1, _njb.kaih += 2) : 96 == _nj9.ctype && (_njb.tyku += 1, _njb.kaih += 1), _njb;
        };
    },
    69245: (_njc, _njd, _nje) => {
        'use strict';
        var _njf = null;
        defineModule(_njd);
        Object.defineProperty(_njd, '__esModule', {
            'value': true
        }), _njd.getSlot279PersonalEffect = void 0;
        var _njg = _nje(74496);
        _njd.getSlot279PersonalEffect = function(_njh) {
            var _nji = null,
                _njj = new _njg.SlotItemEffectModel();
            return 'アメリカ' == _njh.getCountryName() ? (_njj.houg += 2, _njj.tyku += 2, _njj.kaih += 3, _njj.saku += 2) : 67 == _njh.ctype || 78 == _njh.ctype || 82 == _njh.ctype || 88 == _njh.ctype || 108 == _njh.ctype || 112 == _njh.ctype ? (_njj.houg += 1, _njj.tyku += 1, _njj.kaih += 2, _njj.saku += 1) : 96 == _njh.ctype && (_njj.houg += 1, _njj.tyku += 1, _njj.kaih += 1), _njj;
        };
    },
    18478: (_njk, _njl, _njm) => {
        'use strict';
        var _njn = null;
        defineModule(_njl);
        Object.defineProperty(_njl, '__esModule', {
            'value': true
        }), _njl.getSlot282PersonalEffect = void 0;
        var _njo = _njm(74496);
        _njl.getSlot282PersonalEffect = function(_njp) {
            var _njq = null,
                _njr = new _njo.SlotItemEffectModel(),
                _njs = false,
                _njt = false;
            147 != _njp.ship_id && 73 != _njp.ctype && 81 != _njp.ctype || (_njs = true), 'ゆうばり' == _njp.yomi && (_njt = true);
            var _nju = new _njo.SlotItemEffectModel();
            if ((_njs || _njt) && (_nju.houg += 2, _nju.souk += 1), !_nju.exists()) return _njr;
            var _njv = _njp.get_slotnums(282);
            return _njr = _nju.multiply(_njv);
        };
    },
    2899: (_njw, _njx, _njy) => {
        'use strict';
        var _njz = null;
        defineModule(_njx);
        Object.defineProperty(_njx, '__esModule', {
            'value': true
        }), _njx.getSlot283PersonalEffect = void 0;
        var _nk0 = _njy(74496);
        _njx.getSlot283PersonalEffect = function(_nk1) {
            var _nk2 = null,
                _nk3 = new _nk0.SlotItemEffectModel(),
                _nk4 = false;
            147 != _nk1.ship_id && 73 != _nk1.ctype && 81 != _nk1.ctype || (_nk4 = true);
            var _nk5 = new _nk0.SlotItemEffectModel();
            if (_nk4 && (_nk5.raig += 3, _nk5.houg += 1, _nk5.souk += 1), !_nk5.exists()) return _nk3;
            var _nk6 = _nk1.get_slotnums(283);
            return _nk3 = _nk5.multiply(_nk6);
        };
    },
    57120: (_nk7, _nk8, _nk9) => {
        'use strict';
        var _nka = null;
        defineModule(_nk8);
        Object.defineProperty(_nk8, '__esModule', {
            'value': true
        }), _nk8.getSlot285PersonalEffect = void 0;
        var _nkb = _nk9(74496);
        _nk8.getSlot285PersonalEffect = function(_nkc) {
            var _nkd = null,
                _nke = new _nkb.SlotItemEffectModel(),
                _nkf = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959, 986].indexOf(_nkc.ship_id) >= 0 && (_nkf = true), 0 == _nkf) return _nke;
            var _nkg = _nkc.get_each_level_nums(285),
                _nkh = _nkc.get_slotnums(285);
            _nkh > 2 && (_nkh = 2), _nke.raig = 2 * _nkh, _nke.kaih = 1 * _nkh;
            var _nki = _nkg[10];
            1 == _nki && (_nke.houg += 1, _nke.raig += 1), _nki >= 2 && (_nke.houg += 2, _nke.raig += 1), _nki >= 3 && (_nke.raig += 3);
            var _nkj = _nkc.get_slotnums(285);
            return 903 == _nkc.ship_id ? (_nkj >= 2 && (_nke.raig += 2), _nkj >= 3 && (_nke.raig += 2)) : 908 != _nkc.ship_id && 959 != _nkc.ship_id || (_nkj >= 2 && (_nke.raig += 1), _nkj >= 3 && (_nke.raig += 1)), _nke;
        };
    },
    74985: function(_nkk, _nkl, _nkm) {
        'use strict';
        var _nkn = null;
        var _nko = this && this.__importDefault || function(_nkp) {
            var _nkq = null;
            return _nkp && _nkp.__esModule ? _nkp : {
                'default': _nkp
            };
        };
        defineModule(_nkl);
        Object.defineProperty(_nkl, '__esModule', {
            'value': true
        }), _nkl.getSlot286PersonalEffect3 = _nkl.getSlot286PersonalEffect2 = _nkl.getSlot286PersonalEffect = void 0;
        var _nkr = _nkm(74496),
            _nks = _nko(_nkm(18622));
        _nkl.getSlot286PersonalEffect = function(_nkt) {
            var _nku = null,
                _nkv = new _nkr.SlotItemEffectModel(),
                _nkw = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975, 956, 981].indexOf(_nkt.ship_id) >= 0 && (_nkw = true), 0 == _nkw) return _nkv;
            var _nkx = _nkt.get_each_level_nums(286),
                _nky = _nkt.get_slotnums(286);
            _nky > 2 && (_nky = 2), _nkv.raig = 2 * _nky, _nkv.kaih = 1 * _nky;
            var _nkz = _nkx[10];
            if (1 == _nkz ? _nkv.houg = _nkv.houg + 1 : _nkz >= 2 && (_nkv.houg = _nkv.houg + 2), 30 == _nkt.ctype || 961 == _nkt.ship_id) {
                var _nl0 = _nkx[5] + _nkx[6] + _nkx[7] + _nkx[8] + _nkx[9] + _nkx[10];
                1 == _nl0 ? _nkv.raig = _nkv.raig + 1 : _nl0 >= 2 && (_nkv.raig = _nkv.raig + 2);
            }
            return _nkv;
        }, _nkl.getSlot286PersonalEffect2 = function(_nl1) {
            var _nl2 = null,
                _nl3 = new _nkr.SlotItemEffectModel(),
                _nl4 = false,
                _nl5 = 0;
            if ('たけ' == _nl1.yomi && (_nl4 = true, _nl5 = 1), 0 == _nl4) return _nl3;
            var _nl6 = _nl1.get_each_level_nums(286),
                _nl7 = 0;
            return _nl5 > 0 && _nl6.forEach(function(_nl8, _nl9) {
                _nl9 >= 7 && (_nl7 += _nl8);
            }), 'たけ' == _nl1.yomi && (_nl3.raig += 7, _nl3.kaih += 2, _nl7 >= 1 && (_nl3.raig += 2), _nl6[10] >= 1 && (_nl3.raig += 2)), _nl3;
        }, _nkl.getSlot286PersonalEffect3 = function(_nla) {
            var _nlb = null,
                _nlc = new _nkr.SlotItemEffectModel(),
                _nld = false,
                _nle = new _nkr.SlotItemEffectModel(),
                _nlf = 0;
            if (662 != _nla.ship_id && 663 != _nla.ship_id && 668 != _nla.ship_id || (_nle.raig += 2, _nld = true, _nlf = 1), 0 == _nld) return _nlc;
            var _nlg = _nla.get_slotnums(286);
            _nlc.add(_nle.multiply(_nlg));
            for (var _nlh = 0, _nli = 0, _nlj = _nla.have_slot_ids(); _nli < _nlj.length; _nli++) {
                var _nlk = _nlj[_nli],
                    _nll = _nks.default.model.slot.getMst(_nlk),
                    _nlm = _nll.equipType;
                12 != _nlm && 13 != _nlm || (_nll.sakuteki >= 5 && (_nlh += _nla.get_slotnums(parseInt(_nlk))), _nll.taiku >= 2 && _nla.get_slotnums(parseInt(_nlk)));
            }
            return _nlh >= 1 && 1 == _nlf && (_nlc.raig += 3, _nlc.kaih += 2), _nlc;
        };
    },
    9234: (_nln, _nlo, _nlp) => {
        'use strict';
        var _nlq = null;
        defineModule(_nlo);
        Object.defineProperty(_nlo, '__esModule', {
            'value': true
        }), _nlo.getSlot287PersonalEffect = void 0;
        var _nlr = _nlp(74496);
        _nlo.getSlot287PersonalEffect = function(_nls) {
            var _nlt = null,
                _nlu = new _nlr.SlotItemEffectModel(),
                _nlv = new _nlr.SlotItemEffectModel(),
                _nlw = false;
            if (488 == _nls.ship_id || 141 == _nls.ship_id || 160 == _nls.ship_id || 624 == _nls.ship_id || 656 == _nls.ship_id ? (_nlv.tais = 1, _nlv.kaih = 1, _nlw = true) : 662 != _nls.ship_id && 961 != _nls.ship_id || (_nlv.tais = 3, _nlw = true), 0 == _nlw) return _nlu;
            var _nlx = _nls.get_slotnums(287);
            return _nlu = _nlv.multiply(_nlx);
        };
    },
    30802: (_nly, _nlz, _nm0) => {
        'use strict';
        var _nm1 = null;
        defineModule(_nlz);
        Object.defineProperty(_nlz, '__esModule', {
            'value': true
        }), _nlz.getSlot288PersonalEffect = void 0;
        var _nm2 = _nm0(74496);
        _nlz.getSlot288PersonalEffect = function(_nm3) {
            var _nm4 = null,
                _nm5 = new _nm2.SlotItemEffectModel(),
                _nm6 = new _nm2.SlotItemEffectModel(),
                _nm7 = false;
            if (488 == _nm3.ship_id || 141 == _nm3.ship_id || 160 == _nm3.ship_id || 656 == _nm3.ship_id ? (_nm6.tais = 2, _nm6.kaih = 1, _nm7 = true) : 624 == _nm3.ship_id ? (_nm6.houg = 1, _nm6.tais = 3, _nm6.kaih = 2, _nm7 = true) : 662 != _nm3.ship_id && 961 != _nm3.ship_id || (_nm6.tais = 4, _nm6.kaih = 1, _nm7 = true), 0 == _nm7) return _nm5;
            var _nm8 = _nm3.get_slotnums(288);
            return _nm5 = _nm6.multiply(_nm8);
        };
    },
    97002: function(_nm9, _nma, _nmb) {
        'use strict';
        var _nmc = null;
        var _nmd = this && this.__importDefault || function(_nme) {
            var _nmf = null;
            return _nme && _nme.__esModule ? _nme : {
                'default': _nme
            };
        };
        defineModule(_nma);
        Object.defineProperty(_nma, '__esModule', {
            'value': true
        }), _nma.getSlot289PersonalEffect = void 0;
        var _nmg = _nmb(74496),
            _nmh = _nmd(_nmb(18622));
        _nma.getSlot289PersonalEffect = function(_nmi) {
            var _nmj = null,
                _nmk = new _nmg.SlotItemEffectModel(),
                _nml = {
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
                _nmm = 0,
                _nmn = new _nmg.SlotItemEffectModel();
            if (149 == _nmi.ship_id || 591 == _nmi.ship_id) _nmn.houg = 2, _nmn.tyku = 1, _nmm = 1;
            else {
                if (150 == _nmi.ship_id || 592 == _nmi.ship_id) _nmn.houg = 1;
                else {
                    if (152 == _nmi.ship_id || 694 == _nmi.ship_id) _nmn.houg = 1;
                    else {
                        if (151 != _nmi.ship_id && 593 != _nmi.ship_id && 954 != _nmi.ship_id) return _nmk;
                        _nmn.houg = 2, _nmn.tyku = 2, _nmn.kaih = 2, _nmm = 1;
                    }
                }
            }
            var _nmo = _nmi.get_slotnums(289);
            if (_nmk = _nmn.multiply(_nmo), _nml[_nmi.ship_id]) {
                var _nmp = _nmi.get_each_level_nums(289),
                    _nmq = new Array();
                _nmp.forEach(function(_nmr, _nms) {
                    var _nmt = null;
                    for (var _nmu = 1; _nmu <= _nmi.SLOT_LEVEL_MAX; _nmu++) _nms >= _nmu && (null == _nmq[_nmu] && (_nmq[_nmu] = 0), _nmq[_nmu] += _nmr);
                });
                var _nmv = _nml[_nmi.ship_id];
                1 == _nmv ? (_nmq[1] >= 1 && (_nmk.kaih += 1 * _nmq[1]), _nmq[3] >= 1 && (_nmk.tyku = _nmk.tyku + 1 * _nmq[3]), _nmq[5] >= 1 && (_nmk.houg = _nmk.houg + 1 * _nmq[5]), _nmq[7] >= 1 && (_nmk.kaih += 1 * _nmq[7]), _nmq[8] >= 1 && (_nmk.tyku += 1 * _nmq[8]), _nmq[9] >= 1 && (_nmk.houg += 1 * _nmq[9]), _nmq[10] >= 1 && (_nmk.kaih += 1 * _nmq[10])) : 2 == _nmv ? (_nmq[4] >= 1 && (_nmk.tyku += 1 * _nmq[4]), _nmq[6] >= 1 && (_nmk.kaih += 1 * _nmq[6]), _nmq[8] >= 1 && (_nmk.houg += 1 * _nmq[8]), _nmq[10] >= 1 && (_nmk.kaih += 1 * _nmq[10])) : 3 == _nmv && (_nmq[7] >= 1 && (_nmk.tyku += 1 * _nmq[7]), _nmq[9] >= 1 && (_nmk.houg += 1 * _nmq[9]), _nmq[10] >= 1 && (_nmk.kaih += 1 * _nmq[10]));
            }
            if (0 == _nmm) return _nmk;
            for (var _nmw = 0, _nmx = 0, _nmy = _nmi.have_slot_ids(); _nmx < _nmy.length; _nmx++) {
                var _nmz = _nmy[_nmx],
                    _nn0 = _nmh.default.model.slot.getMst(_nmz),
                    _nn1 = _nn0.equipType;
                (12 == _nn1 || 13 == _nn1) && _nn0.sakuteki >= 5 && (_nmw += _nmi.get_slotnums(parseInt(_nmz)));
            }
            return _nmw > 0 && (_nmk.houg += 2, _nmk.kaih += 2), _nmk;
        };
    },
    16748: function(_nn2, _nn3, _nn4) {
        'use strict';
        var _nn5 = null;
        var _nn6 = this && this.__importDefault || function(_nn7) {
            var _nn8 = null;
            return _nn7 && _nn7.__esModule ? _nn7 : {
                'default': _nn7
            };
        };
        defineModule(_nn3);
        Object.defineProperty(_nn3, '__esModule', {
            'value': true
        }), _nn3.getSlot290PersonalEffect = void 0;
        var _nn9 = _nn4(74496),
            _nna = _nn6(_nn4(18622));
        _nn3.getSlot290PersonalEffect = function(_nnb) {
            var _nnc = null,
                _nnd = new _nn9.SlotItemEffectModel(),
                _nne = 0,
                _nnf = new _nn9.SlotItemEffectModel();
            if (411 == _nnb.ship_id) _nnf.houg = 1;
            else {
                if (412 == _nnb.ship_id) _nnf.houg = 1;
                else {
                    if (82 == _nnb.ship_id) _nnf.houg = 2, _nnf.tyku = 2, _nnf.kaih = 1, _nne = 1;
                    else {
                        if (553 == _nnb.ship_id) _nnf.houg = 3, _nnf.tyku = 2, _nnf.kaih = 1, _nnf.houm = 3, _nne = 1;
                        else {
                            if (88 == _nnb.ship_id) _nnf.houg = 2, _nnf.tyku = 2, _nnf.kaih = 1, _nne = 1;
                            else {
                                if (554 != _nnb.ship_id) return _nnd;
                                _nnf.houg = 3, _nnf.tyku = 2, _nnf.kaih = 2, _nnf.houm = 3, _nne = 1;
                            }
                        }
                    }
                }
            }
            var _nng = _nnb.get_slotnums(290);
            if (_nnd = _nnf.multiply(_nng), 0 == _nne) return _nnd;
            for (var _nnh = 0, _nni = 0, _nnj = _nnb.have_slot_ids(); _nni < _nnj.length; _nni++) {
                var _nnk = _nnj[_nni],
                    _nnl = _nna.default.model.slot.getMst(_nnk),
                    _nnm = _nnl.equipType;
                (12 == _nnm || 13 == _nnm) && _nnl.taiku >= 2 && (_nnh += _nnb.get_slotnums(parseInt(_nnk)));
            }
            return _nnh > 0 && (_nnd.tyku += 2, _nnd.kaih += 3), _nnd;
        };
    },
    53618: (_nnn, _nno, _nnp) => {
        'use strict';
        var _nnq = null;
        defineModule(_nno);
        Object.defineProperty(_nno, '__esModule', {
            'value': true
        }), _nno.getSlot291PersonalEffect = void 0;
        var _nnr = _nnp(74496);
        _nno.getSlot291PersonalEffect = function(_nns) {
            var _nnt = null,
                _nnu = new _nnr.SlotItemEffectModel(),
                _nnv = new _nnr.SlotItemEffectModel();
            if (553 == _nns.ship_id) _nnv.houg = 6, _nnv.kaih = 1;
            else {
                if (554 != _nns.ship_id) return _nnu;
                _nnv.houg = 6, _nnv.kaih = 1;
            }
            var _nnw = _nns.get_slotnums(291);
            return _nnu = _nnv.multiply(_nnw);
        };
    },
    72573: (_nnx, _nny, _nnz) => {
        'use strict';
        var _no0 = null;
        defineModule(_nny);
        Object.defineProperty(_nny, '__esModule', {
            'value': true
        }), _nny.getSlot292PersonalEffect = void 0;
        var _no1 = _nnz(74496);
        _nny.getSlot292PersonalEffect = function(_no2) {
            var _no3 = null,
                _no4 = new _no1.SlotItemEffectModel(),
                _no5 = new _no1.SlotItemEffectModel();
            if (553 == _no2.ship_id) _no5.houg = 8, _no5.kaih = 2, _no5.tyku = 1;
            else {
                if (554 != _no2.ship_id) return _no4;
                _no5.houg = 8, _no5.kaih = 2, _no5.tyku = 1;
            }
            var _no6 = _no2.get_slotnums(292);
            return _no4 = _no5.multiply(_no6);
        };
    },
    8955: function(_no7, _no8, _no9) {
        'use strict';
        var _noa = null;
        var _nob = this && this.__importDefault || function(_noc) {
            var _nod = null;
            return _noc && _noc.__esModule ? _noc : {
                'default': _noc
            };
        };
        defineModule(_no8);
        Object.defineProperty(_no8, '__esModule', {
            'value': true
        }), _no8.getSlot293PersonalEffect = void 0;
        var _noe = _no9(74496),
            _nof = _nob(_no9(18622));
        _no8.getSlot293PersonalEffect = function(_nog) {
            var _noh = null,
                _noi = new _noe.SlotItemEffectModel(),
                _noj = new _noe.SlotItemEffectModel(),
                _nok = 0;
            if (66 == _nog.ctype || 28 == _nog.ctype) _noj.houg = 2, _noj.tyku = 1, _noj.kaih = 3, _nok = 1;
            else {
                if (74 != _nog.ctype && 77 != _nog.ctype) return _noi;
                _noj.houg = 1, _noj.tyku = 1, _noj.kaih = 2, _nok = 2;
            }
            var _nol = _nog.get_slotnums(293);
            _noi = _noj.multiply(_nol);
            for (var _nom = 0, _non = 0, _noo = _nog.have_slot_ids(); _non < _noo.length; _non++) {
                var _nop = _noo[_non],
                    _noq = _nof.default.model.slot.getMst(_nop),
                    _nor = _noq.equipType;
                (12 == _nor || 13 == _nor) && _noq.sakuteki >= 5 && (_nom += _nog.get_slotnums(parseInt(_nop)));
            }
            var _nos = _nog.get_slotnums(174);
            return 1 == _nok ? (_nom > 0 && (_noi.houg += 2, _noi.kaih += 3, _noi.raig += 1), 1 == _nos ? (_noi.houg += 2, _noi.raig += 4) : _nos >= 2 && (_noi.houg += 3, _noi.raig += 7)) : 2 == _nok && _nom > 0 && (_noi.houg += 2, _noi.kaih += 3, _noi.tais += 1), _noi;
        };
    },
    98947: function(_not, _nou, _nov) {
        'use strict';
        var _now = null;
        var _nox = this && this.__importDefault || function(_noy) {
            var _noz = null;
            return _noy && _noy.__esModule ? _noy : {
                'default': _noy
            };
        };
        defineModule(_nou);
        Object.defineProperty(_nou, '__esModule', {
            'value': true
        }), _nou.getSlot294PersonalEffect = void 0;
        var _np0 = _nov(74496),
            _np1 = _nox(_nov(18622));
        _nou.getSlot294PersonalEffect = function(_np2) {
            var _np3 = null,
                _np4 = new _np0.SlotItemEffectModel(),
                _np5 = new _np0.SlotItemEffectModel(),
                _np6 = 0,
                _np7 = _np2.get_slotnums(294);
            if (12 != _np2.ctype && 1 != _np2.ctype && 5 != _np2.ctype) return _np4;
            _np5.houg = 1, 959 == _np2.ship_id && (_np5.houg += 1, _np7 >= 2 && (_np4.houg += 2), _np7 >= 3 && (_np4.houg += 3), _np6 = 1), _np4.add(_np5.multiply(_np7));
            for (var _np8 = 0, _np9 = 0, _npa = _np2.have_slot_ids(); _np9 < _npa.length; _np9++) {
                var _npb = _npa[_np9],
                    _npc = _np1.default.model.slot.getMst(_npb),
                    _npd = _npc.equipType;
                (12 == _npd || 13 == _npd) && _npc.sakuteki >= 5 && (_np8 += _np2.get_slotnums(parseInt(_npb)));
            }
            var _npe = _np2.get_slotnums(13),
                _npf = _np2.get_slotnums(125),
                _npg = _np2.get_slotnums(285),
                _nph = _npe + _npf + _npg;
            if (_np8 > 0 && (_np4.houg += 3, _np4.kaih += 2, _np4.raig += 1), 1 == _nph ? (_np4.houg += 1, _np4.raig += 3) : _nph >= 2 && (_np4.houg += 2, _np4.raig += 5), _npg >= 1 && (_np4.raig += 1), 0 == _np6) return _np4;
            var _npi = _np2.get_each_level_nums(294),
                _npj = [];
            return _np6 > 0 && _npi.forEach(function(_npk, _npl) {
                var _npm = null;
                for (var _npn = 1; _npn <= _np2.SLOT_LEVEL_MAX; _npn++) null == _npj[_npn] && (_npj[_npn] = 0), _npl >= _npn && (_npj[_npn] += _npk);
            }), 1 == _np6 && (_npj[6] >= 1 && (_np4.houm += 4 * _npj[6]), _npj[7] >= 1 && (_np4.houg = _np4.houg + 6 * _npj[7]), _npj[8] >= 1 && (_np4.houg = _np4.houg + 1 * _npj[8]), _npj[9] >= 1 && (_np4.houg = _np4.houg + 1 * _npj[9]), _npj[10] >= 1 && (_np4.houg += 1 * _npj[10])), _np4;
        };
    },
    44726: function(_npo, _npp, _npq) {
        'use strict';
        var _npr = null;
        var _nps = this && this.__importDefault || function(_npt) {
            var _npu = null;
            return _npt && _npt.__esModule ? _npt : {
                'default': _npt
            };
        };
        defineModule(_npp);
        Object.defineProperty(_npp, '__esModule', {
            'value': true
        }), _npp.getSlot295PersonalEffect = void 0;
        var _npv = _npq(74496),
            _npw = _nps(_npq(18622));
        _npp.getSlot295PersonalEffect = function(_npx) {
            var _npy = null,
                _npz = new _npv.SlotItemEffectModel(),
                _nq0 = new _npv.SlotItemEffectModel(),
                _nq1 = _npx.get_slotnums(295);
            if (12 != _npx.ctype && 1 != _npx.ctype && 5 != _npx.ctype) return _npz;
            _nq0.houg = 2, _nq0.tyku = 2, 666 == _npx.ship_id ? (_nq0.houg += 1, _nq0.tyku += 1, _nq0.tais += 1) : 959 == _npx.ship_id && (_nq0.houg += 2, _nq1 >= 2 && (_npz.houg += 2), _nq1 >= 3 && (_npz.houg += 3)), _npz.add(_nq0.multiply(_nq1));
            for (var _nq2 = 0, _nq3 = 0, _nq4 = 0, _nq5 = _npx.have_slot_ids(); _nq4 < _nq5.length; _nq4++) {
                var _nq6 = _nq5[_nq4],
                    _nq7 = _npw.default.model.slot.getMst(_nq6),
                    _nq8 = _nq7.equipType;
                12 != _nq8 && 13 != _nq8 || (_nq7.sakuteki >= 5 && (_nq2 += _npx.get_slotnums(parseInt(_nq6))), _nq7.taiku >= 2 && (_nq3 += _npx.get_slotnums(parseInt(_nq6))));
            }
            var _nq9 = _npx.get_slotnums(13),
                _nqa = _npx.get_slotnums(125),
                _nqb = _npx.get_slotnums(285),
                _nqc = _nq9 + _nqa + _nqb;
            return _nq2 > 0 && (_npz.houg += 3, _npz.kaih += 2, _npz.raig += 1), 1 == _nqc ? (_npz.houg += 1, _npz.raig += 3) : _nqc >= 2 && (_npz.houg += 2, _npz.raig += 5), _nqb >= 1 && (_npz.raig += 1), _nq3 > 0 && (_npz.tyku += 6), _npz;
        };
    },
    93065: function(_nqd, _nqe, _nqf) {
        'use strict';
        var _nqg = null;
        var _nqh = this && this.__importDefault || function(_nqi) {
            var _nqj = null;
            return _nqi && _nqi.__esModule ? _nqi : {
                'default': _nqi
            };
        };
        defineModule(_nqe);
        Object.defineProperty(_nqe, '__esModule', {
            'value': true
        }), _nqe.getSlot296PersonalEffect = void 0;
        var _nqk = _nqf(74496),
            _nql = _nqh(_nqf(18622));
        _nqe.getSlot296PersonalEffect = function(_nqm) {
            var _nqn = null,
                _nqo = new _nqk.SlotItemEffectModel(),
                _nqp = new _nqk.SlotItemEffectModel();
            1 != _nqm.ctype && 5 != _nqm.ctype && 10 != _nqm.ctype && 23 != _nqm.ctype || (_nqp.houg += 1), 10 != _nqm.ctype && 23 != _nqm.ctype || (_nqp.kaih += 1), 145 == _nqm.ship_id || 961 == _nqm.ship_id ? (_nqp.houg += 1, _nqp.tyku += 1) : 144 == _nqm.ship_id ? (_nqp.houg += 1, _nqp.raig += 1) : 469 == _nqm.ship_id || 588 == _nqm.ship_id || 667 == _nqm.ship_id || 587 == _nqm.ship_id || 242 == _nqm.ship_id ? _nqp.kaih += 1 : 497 == _nqm.ship_id ? (_nqp.houg += 1, _nqp.kaih += 1) : 244 == _nqm.ship_id ? _nqp.kaih += 1 : 498 == _nqm.ship_id || 975 == _nqm.ship_id ? (_nqp.tyku += 1, _nqp.kaih += 1) : 627 == _nqm.ship_id ? (_nqp.houg += 2, _nqp.raig += 1) : 903 != _nqm.ship_id && 908 != _nqm.ship_id || (_nqp.houg += 3);
            var _nqq = true;
            if (_nqp.exists() || (_nqq = false), 0 == _nqq) return _nqo;
            var _nqr = _nqm.get_slotnums(296);
            _nqo = _nqp.multiply(_nqr);
            var _nqs = 0;
            if (1 != _nqm.ctype && 5 != _nqm.ctype && 10 != _nqm.ctype || (_nqs = 1), 23 == _nqm.ctype && (_nqs = 2), 0 == _nqs) return _nqo;
            for (var _nqt = 0, _nqu = 0, _nqv = 0, _nqw = _nqm.have_slot_ids(); _nqv < _nqw.length; _nqv++) {
                var _nqx = _nqw[_nqv],
                    _nqy = _nql.default.model.slot.getMst(_nqx),
                    _nqz = _nqy.equipType;
                12 != _nqz && 13 != _nqz || (_nqy.sakuteki >= 5 && (_nqt += _nqm.get_slotnums(parseInt(_nqx))), _nqy.taiku >= 2 && (_nqu += _nqm.get_slotnums(parseInt(_nqx))));
            }
            return _nqt > 0 && (1 == _nqs ? (_nqo.houg += 1, _nqo.kaih += 2, _nqo.raig += 2) : 2 == _nqs && (_nqo.houg += 1, _nqo.kaih += 2, _nqo.raig += 3)), _nqm.get_slotnums(285) + _nqm.get_slotnums(125) >= 1 && 1 == _nqs && (_nqo.houg += 1, _nqo.raig += 3), _nqm.get_slotnums(15) + _nqm.get_slotnums(286) >= 1 && 2 == _nqs && (_nqo.houg += 1, _nqo.raig += 3), _nqu > 0 && (1 == _nqs ? _nqo.tyku += 5 : 2 == _nqs && (_nqo.tyku += 6)), _nqo;
        };
    },
    85767: (_nr0, _nr1, _nr2) => {
        'use strict';
        var _nr3 = null;
        defineModule(_nr1);
        Object.defineProperty(_nr1, '__esModule', {
            'value': true
        }), _nr1.getSlot297PersonalEffect = void 0;
        var _nr4 = _nr2(74496);
        _nr1.getSlot297PersonalEffect = function(_nr5) {
            var _nr6 = null,
                _nr7 = new _nr4.SlotItemEffectModel(),
                _nr8 = new _nr4.SlotItemEffectModel();
            if (12 == _nr5.ctype) _nr8.kaih = 2;
            else {
                if (1 != _nr5.ctype && 5 != _nr5.ctype) return _nr7;
                _nr8.kaih = 1;
            }
            var _nr9 = _nr5.get_slotnums(297);
            return _nr7 = _nr8.multiply(_nr9);
        };
    },
    38314: (_nra, _nrb, _nrc) => {
        'use strict';
        var _nrd = null;
        defineModule(_nrb);
        Object.defineProperty(_nrb, '__esModule', {
            'value': true
        }), _nrb.getSlot301PersonalEffect = void 0;
        var _nre = _nrc(74496);
        _nrb.getSlot301PersonalEffect = function(_nrf) {
            var _nrg = null,
                _nrh = new _nre.SlotItemEffectModel(),
                _nri = new _nre.SlotItemEffectModel();
            67 != _nrf.ctype && 78 != _nrf.ctype && 82 != _nrf.ctype && 88 != _nrf.ctype && 108 != _nrf.ctype && 112 != _nrf.ctype || (_nri.tyku += 2, _nri.kaih += 1, _nri.souk += 1);
            var _nrj = true;
            if (_nri.exists() || (_nrj = false), 0 == _nrj) return _nrh;
            var _nrk = _nrf.get_slotnums(301);
            return _nrh = _nri.multiply(_nrk);
        };
    },
    59747: (_nrl, _nrm, _nrn) => {
        'use strict';
        var _nro = null;
        defineModule(_nrm);
        Object.defineProperty(_nrm, '__esModule', {
            'value': true
        }), _nrm.getSlot302PersonalEffect = void 0;
        var _nrp = _nrn(74496);
        _nrm.getSlot302PersonalEffect = function(_nrq) {
            var _nrr = null,
                _nrs = new _nrp.SlotItemEffectModel(),
                _nrt = new _nrp.SlotItemEffectModel();
            if (76 == _nrq.ctype && (_nrt.tais = 1, _nrt.kaih = 1), !_nrt.exists()) return _nrs;
            var _nru = _nrq.get_slotnums(302);
            return _nrs = _nrt.multiply(_nru);
        };
    },
    40649: (_nrv, _nrw, _nrx) => {
        'use strict';
        var _nry = null;
        defineModule(_nrw);
        Object.defineProperty(_nrw, '__esModule', {
            'value': true
        }), _nrw.getSlot303PersonalEffect = void 0;
        var _nrz = _nrx(74496);
        _nrw.getSlot303PersonalEffect = function(_ns0) {
            var _ns1 = null,
                _ns2 = new _nrz.SlotItemEffectModel(),
                _ns3 = new _nrz.SlotItemEffectModel();
            if (16 == _ns0.ctype || 4 == _ns0.ctype || 20 == _ns0.ctype || 41 == _ns0.ctype ? (_ns3.houg = 1, _ns3.tyku = 1) : 89 == _ns0.ctype && (_ns3.houg = 1, _ns3.tyku = 2, _ns3.kaih = 1), !_ns3.exists()) return _ns2;
            var _ns4 = _ns0.get_slotnums(303);
            return _ns2 = _ns3.multiply(_ns4);
        };
    },
    13533: (_ns5, _ns6, _ns7) => {
        'use strict';
        var _ns8 = null;
        defineModule(_ns6);
        Object.defineProperty(_ns6, '__esModule', {
            'value': true
        }), _ns6.getSlot304PersonalEffect = void 0;
        var _ns9 = _ns7(74496);
        _ns6.getSlot304PersonalEffect = function(_nsa) {
            var _nsb = null,
                _nsc = new _ns9.SlotItemEffectModel(),
                _nsd = new _ns9.SlotItemEffectModel();
            if (16 == _nsa.ctype || 4 == _nsa.ctype || 20 == _nsa.ctype || 41 == _nsa.ctype ? (_nsd.houg = 1, _nsd.tais = 1, _nsd.kaih = 1) : 89 == _nsa.ctype && (_nsd.houg = 1, _nsd.tais = 2, _nsd.kaih = 2), !_nsd.exists()) return _nsc;
            var _nse = _nsa.get_slotnums(304);
            return _nsc = _nsd.multiply(_nse);
        };
    },
    99791: (_nsf, _nsg, _nsh) => {
        'use strict';
        var _nsi = null;
        defineModule(_nsg);
        Object.defineProperty(_nsg, '__esModule', {
            'value': true
        }), _nsg.getSlot305More320mmGunPersonalEffect = void 0;
        var _nsj = _nsh(74496);
        _nsg.getSlot305More320mmGunPersonalEffect = function(_nsk) {
            var _nsl = null,
                _nsm = new _nsj.SlotItemEffectModel(),
                _nsn = _nsk.get_slotnums(426),
                _nso = _nsk.get_slotnums(427),
                _nsp = _nsk.get_slotnums(428),
                _nsq = _nsk.get_slotnums(429),
                _nsr = _nsn + _nso + _nsp + _nsq;
            return 113 == _nsk.ctype ? (_nsm.houg = _nsm.houg + 2 * _nsr, _nsn >= 1 && (_nsm.houg = _nsm.houg + 1 * _nsn, _nsm.kaih = _nsm.kaih + 1 * _nsn, (_nsn >= 2 || _nso >= 1) && (_nsm.houg = _nsm.houg + 1, _nsm.kaih = _nsm.kaih + 1)), _nsp >= 1 && (_nsm.houg = _nsm.houg + 1 * _nsp, _nsm.kaih = _nsm.kaih + 1 * _nsp, (_nsp >= 2 || _nsq >= 1) && (_nsm.houg = _nsm.houg + 2, _nsm.kaih = _nsm.kaih + 1))) : 73 == _nsk.ctype ? (_nsm.houg = _nsm.houg + 1 * _nsr, _nsn >= 1 && (_nsm.houg = _nsm.houg + 1 * _nsn, _nsm.kaih = _nsm.kaih + 1 * _nsn, (_nsn >= 2 || _nso >= 1) && (_nsm.houg = _nsm.houg + 1)), _nsp >= 1 && (_nsm.houg = _nsm.houg + 1 * _nsp, _nsm.kaih = _nsm.kaih + 1 * _nsp, (_nsp >= 2 || _nsq >= 1) && (_nsm.houg = _nsm.houg + 1))) : 58 == _nsk.ctype && _nsp >= 1 && (_nsm.houg = _nsm.houg + 1 * _nsp, _nsm.kaih = _nsm.kaih + 2 * _nsp, (_nsp >= 2 || _nsq >= 1) && (_nsm.houg = _nsm.houg + 2, _nsm.kaih = _nsm.kaih + 1)), _nsm;
        };
    },
    12138: (_nss, _nst, _nsu) => {
        'use strict';
        var _nsv = null;
        defineModule(_nst);
        Object.defineProperty(_nst, '__esModule', {
            'value': true
        }), _nst.getSlot305_And_306_PersonalEffect = void 0;
        var _nsw = _nsu(74496);
        _nst.getSlot305_And_306_PersonalEffect = function(_nsx) {
            var _nsy = null,
                _nsz = new _nsw.SlotItemEffectModel(),
                _nt0 = new _nsw.SlotItemEffectModel();
            if (76 == _nsx.ctype && (_nt0.tais = 1, _nt0.kaih = 1), 'しんよう' == _nsx.yomi ? (_nt0.tais += 2, _nt0.kaih += 1) : 'グラーフ・ツェッペリン' != _nsx.yomi && 'アクィラ' != _nsx.yomi || (_nt0.houg = 1, _nt0.kaih = 1), !_nt0.exists()) return _nsz;
            var _nt1 = _nsx.get_slotnums(305) + _nsx.get_slotnums(306);
            return _nsz = _nt0.multiply(_nt1);
        };
    },
    30042: (_nt2, _nt3, _nt4) => {
        'use strict';
        var _nt5 = null;
        defineModule(_nt3);
        Object.defineProperty(_nt3, '__esModule', {
            'value': true
        }), _nt3.getSlot307PersonalEffect = void 0;
        var _nt6 = _nt4(74496);
        _nt3.getSlot307PersonalEffect = function(_nt7) {
            var _nt8 = null,
                _nt9 = new _nt6.SlotItemEffectModel(),
                _nta = new _nt6.SlotItemEffectModel();
            if ('アメリカ' == _nt7.getCountryName() && (_nta.houg = 1, _nta.tyku = 1, _nta.kaih = 1), !_nta.exists()) return _nt9;
            var _ntb = _nt7.get_slotnums(307);
            return _nt9 = _nta.multiply(_ntb);
        };
    },
    33623: (_ntc, _ntd, _nte) => {
        'use strict';
        var _ntf = null;
        defineModule(_ntd);
        Object.defineProperty(_ntd, '__esModule', {
            'value': true
        }), _ntd.getSlot308PersonalEffect = void 0;
        var _ntg = _nte(74496);
        _ntd.getSlot308PersonalEffect = function(_nth) {
            var _nti = null,
                _ntj = new _ntg.SlotItemEffectModel(),
                _ntk = new _ntg.SlotItemEffectModel();
            if ('アメリカ' == _nth.getCountryName() && (_ntk.houg = 1, _ntk.tyku = 1, _ntk.kaih = 1), 2 == _nth.stype ? _ntk.houg += 1 : 1 == _nth.stype && (_ntk.tyku += 1, _ntk.kaih += 1), 651 != _nth.ship_id && 656 != _nth.ship_id || (_ntk.houg += 1, _ntk.tyku += 1, _ntk.kaih += 1), !_ntk.exists()) return _ntj;
            var _ntl = _nth.get_slotnums(308);
            return _ntj = _ntk.multiply(_ntl);
        };
    },
    17732: (_ntm, _ntn, _nto) => {
        'use strict';
        var _ntp = null;
        defineModule(_ntn);
        Object.defineProperty(_ntn, '__esModule', {
            'value': true
        }), _ntn.getSlot30_410PersonalEffect = void 0;
        var _ntq = _nto(74496);
        _ntn.getSlot30_410PersonalEffect = function(_ntr) {
            var _nts = null,
                _ntt = new _ntq.SlotItemEffectModel();
            return 73 != _ntr.ship_id && 501 != _ntr.ship_id && 506 != _ntr.ship_id && 502 != _ntr.ship_id && 507 != _ntr.ship_id || (_ntt.tyku += 3, _ntt.kaih += 2, _ntt.saku += 2, _ntr.get_slotnums(410) >= 1 && (_ntt.tyku += 2, _ntt.kaih += 2, _ntt.houg += 1, _ntt.souk += 1)), 54 == _ntr.ctype && (_ntt.tyku += 3, _ntt.kaih += 2, _ntt.saku += 2, _ntr.get_slotnums(410) >= 1 && (_ntt.tyku += 2, _ntt.kaih += 2, _ntt.houg += 1, _ntt.souk += 1, 968 == _ntr.ship_id && (_ntt.houg += 1, _ntt.tyku += 1, _ntt.kaih += 1))), _ntt;
        };
    },
    85630: function(_ntu, _ntv, _ntw) {
        'use strict';
        var _ntx = null;
        var _nty = this && this.__importDefault || function(_ntz) {
            var _nu0 = null;
            return _ntz && _ntz.__esModule ? _ntz : {
                'default': _ntz
            };
        };
        defineModule(_ntv);
        Object.defineProperty(_ntv, '__esModule', {
            'value': true
        }), _ntv.getSlot310PersonalEffect = void 0;
        var _nu1 = _ntw(74496),
            _nu2 = _nty(_ntw(18622));
        _ntv.getSlot310PersonalEffect = function(_nu3) {
            var _nu4 = null,
                _nu5 = new _nu1.SlotItemEffectModel(),
                _nu6 = new _nu1.SlotItemEffectModel(),
                _nu7 = new _nu1.SlotItemEffectModel();
            34 == _nu3.ctype ? (_nu6.houg += 2, _nu6.tyku += 1, _nu6.kaih += 1, _nu7.houg += 2) : 56 == _nu3.ctype ? (_nu6.houg += 2, _nu6.kaih += 1, _nu7.houg += 2, _nu7.kaih += 2) : 90 == _nu3.ctype && (_nu6.houg += 3, _nu6.raig += 2, _nu6.tyku += 1, _nu6.kaih += 1, _nu7.houg += 1, _nu7.raig += 1);
            var _nu8 = new _nu1.SlotItemEffectModel(),
                _nu9 = new _nu1.SlotItemEffectModel();
            622 != _nu3.ship_id && 623 != _nu3.ship_id && 624 != _nu3.ship_id || (_nu6.houg += 2, _nu6.kaih += 1, _nu6.tais += 1, _nu8.houg = 1, _nu8.raig = 1, _nu9.houg = 3, _nu9.kaih = 2, _nu9.raig = 2);
            var _nua = true;
            if (_nu6.exists() || (_nua = false), 0 == _nua) return _nu5;
            var _nub = _nu3.get_slotnums(310) + _nu3.get_slotnums(518);
            _nu5 = _nu6.multiply(_nub);
            for (var _nuc = 0, _nud = 0, _nue = 0, _nuf = [310, 518]; _nue < _nuf.length; _nue++) {
                var _nug = _nuf[_nue],
                    _nuh = _nu3.have_slots_dict[_nug];
                if (null != _nuh)
                    for (var _nui = 0, _nuj = _nuh; _nui < _nuj.length; _nui++) {
                        var _nuk = _nuj[_nui];
                        null != _nuk && (_nuk.level >= 7 && _nuc++, _nuk.level >= 10 && _nud++);
                    }
            }
            if (_nu8.exists() && _nuc > 0 && _nu5.add(_nu8.multiply(_nuc)), _nu7.exists() && _nud > 0 && _nu5.add(_nu7.multiply(_nud)), _nu9.exists()) {
                for (var _nul = 0, _num = 0, _nun = _nu3.have_slot_ids(); _num < _nun.length; _num++) {
                    var _nuo = _nun[_num],
                        _nup = _nu2.default.model.slot.getMst(_nuo),
                        _nuq = _nup.equipType;
                    (12 == _nuq || 13 == _nuq) && _nup.sakuteki >= 5 && (_nul += _nu3.get_slotnums(parseInt(_nuo)));
                }
                _nul > 0 && _nu5.add(_nu9);
            }
            return _nu5;
        };
    },
    88736: (_nur, _nus, _nut) => {
        'use strict';
        var _nuu = null;
        defineModule(_nus);
        Object.defineProperty(_nus, '__esModule', {
            'value': true
        }), _nus.getSlot313PersonalEffect = void 0;
        var _nuv = _nut(74496);
        _nus.getSlot313PersonalEffect = function(_nuw) {
            var _nux = null,
                _nuy = new _nuv.SlotItemEffectModel(),
                _nuz = new _nuv.SlotItemEffectModel();
            87 != _nuw.ctype && 91 != _nuw.ctype || (_nuz.houg += 2, _nuz.tyku += 2, _nuz.kaih += 1, _nuz.souk += 1), 651 != _nuw.ship_id && 656 != _nuw.ship_id || (_nuz.houg += 2, _nuz.tyku += 2, _nuz.kaih += 1, _nuz.souk += 1);
            var _nv0 = true;
            if (_nuz.exists() || (_nv0 = false), 0 == _nv0) return _nuy;
            var _nv1 = _nuw.get_slotnums(313);
            return _nuy = _nuz.multiply(_nv1);
        };
    },
    49341: (_nv2, _nv3, _nv4) => {
        'use strict';
        var _nv5 = null;
        defineModule(_nv3);
        Object.defineProperty(_nv3, '__esModule', {
            'value': true
        }), _nv3.getSlot314PersonalEffect = void 0;
        var _nv6 = _nv4(74496);
        _nv3.getSlot314PersonalEffect = function(_nv7) {
            var _nv8 = null,
                _nv9 = new _nv6.SlotItemEffectModel(),
                _nva = new _nv6.SlotItemEffectModel();
            87 != _nv7.ctype && 91 != _nv7.ctype || (_nva.houg += 1, _nva.raig += 3);
            var _nvb = true;
            if (_nva.exists() || (_nvb = false), 0 == _nvb) return _nv9;
            var _nvc = _nv7.get_slotnums(314);
            return _nv9 = _nva.multiply(_nvc);
        };
    },
    74306: (_nvd, _nve, _nvf) => {
        'use strict';
        var _nvg = null;
        defineModule(_nve);
        Object.defineProperty(_nve, '__esModule', {
            'value': true
        }), _nve.getSlot315PersonalEffect = void 0;
        var _nvh = _nvf(74496);
        _nve.getSlot315PersonalEffect = function(_nvi) {
            var _nvj = null,
                _nvk = new _nvh.SlotItemEffectModel(),
                _nvl = new _nvh.SlotItemEffectModel();
            'アメリカ' == _nvi.getCountryName() && (_nvl.houg += 2, _nvl.kaih += 3, _nvl.saku += 4), 87 != _nvi.ctype && 91 != _nvi.ctype || (_nvl.houg += 1, _nvk.leng += 1), 651 != _nvi.ship_id && 656 != _nvi.ship_id || (_nvk.houg += 2, _nvk.kaih += 2, _nvk.saku += 3, _nvk.leng += 1);
            var _nvm = true;
            if (_nvl.exists() || (_nvm = false), 0 == _nvm) return _nvk;
            var _nvn = _nvi.get_slotnums(315);
            return _nvk.add(_nvl.multiply(_nvn)), _nvk;
        };
    },
    83898: (_nvo, _nvp, _nvq) => {
        'use strict';
        var _nvr = null;
        defineModule(_nvp);
        Object.defineProperty(_nvp, '__esModule', {
            'value': true
        }), _nvp.getSlot316PersonalEffect = void 0;
        var _nvs = _nvq(74496);
        _nvp.getSlot316PersonalEffect = function(_nvt) {
            var _nvu = null,
                _nvv = new _nvs.SlotItemEffectModel(),
                _nvw = new _nvs.SlotItemEffectModel();
            if (68 == _nvt.ctype) {
                if (_nvw.houg += 4, _nvw.tyku += 1, _nvw.kaih += 1, !_nvw.exists()) return _nvv;
                var _nvx = _nvt.get_slotnums(316);
                _nvv = _nvw.multiply(_nvx);
            }
            return _nvv;
        };
    },
    71873: (_nvy, _nvz, _nw0) => {
        'use strict';
        var _nw1 = null;
        defineModule(_nvz);
        Object.defineProperty(_nvz, '__esModule', {
            'value': true
        }), _nvz.getSlot317PersonalEffect = void 0;
        var _nw2 = _nw0(74496);
        _nvz.getSlot317PersonalEffect = function(_nw3) {
            var _nw4 = null,
                _nw5 = new _nw2.SlotItemEffectModel(),
                _nw6 = new _nw2.SlotItemEffectModel(),
                _nw7 = 0,
                _nw8 = false;
            if (6 == _nw3.ctype ? (_nw6.houg += 2, _nw6.tyku += 1, _nw7 = 1, _nw8 = true) : 2 == _nw3.ctype && (_nw6.houg += 1, _nw6.tyku += 1, _nw6.kaih += 1, _nw7 = 2, _nw8 = true), 149 == _nw3.ship_id || 591 == _nw3.ship_id || 592 == _nw3.ship_id ? (_nw6.houg += 2, _nw6.tyku += 2, _nw8 = true) : 150 == _nw3.ship_id ? (_nw6.houg += 1, _nw6.tyku += 1, _nw8 = true) : 151 == _nw3.ship_id ? (_nw6.houg += 1, _nw6.tyku += 1, _nw6.kaih += 1, _nw8 = true) : 593 == _nw3.ship_id ? (_nw6.houg += 1, _nw6.tyku += 3, _nw6.kaih += 2, _nw8 = true) : 954 == _nw3.ship_id ? (_nw6.houg += 2, _nw6.tyku += 2, _nw6.kaih += 1, _nw8 = true) : 152 == _nw3.ship_id || 694 == _nw3.ship_id ? (_nw6.houg += 2, _nw6.tyku += 1, _nw8 = true) : 541 == _nw3.ship_id ? (_nw6.houg += 1, _nw6.tyku += 2, _nw8 = true) : 573 == _nw3.ship_id && (_nw6.houg += 2, _nw6.tyku += 2, _nw6.kaih += 1, _nw8 = true), 0 == _nw8) return _nw5;
            if (_nw5.add(_nw6), 0 == _nw7) return _nw5;
            var _nw9 = _nw3.get_each_level_nums(317),
                _nwa = [];
            return _nw7 > 0 && _nw9.forEach(function(_nwb, _nwc) {
                var _nwd = null;
                for (var _nwe = 1; _nwe <= _nw3.SLOT_LEVEL_MAX; _nwe++) null == _nwa[_nwe] && (_nwa[_nwe] = 0), _nwc >= _nwe && (_nwa[_nwe] += _nwb);
            }), 1 == _nw7 ? _nwa[8] >= 1 && (_nw5.houm += 1) : 2 == _nw7 && _nw9[10] >= 1 && (_nw5.houm += 1), _nw5;
        };
    },
    53122: function(_nwf, _nwg, _nwh) {
        'use strict';
        var _nwi = null;
        var _nwj = this && this.__importDefault || function(_nwk) {
            var _nwl = null;
            return _nwk && _nwk.__esModule ? _nwk : {
                'default': _nwk
            };
        };
        defineModule(_nwg);
        Object.defineProperty(_nwg, '__esModule', {
            'value': true
        }), _nwg.getSlot318PersonalEffect = void 0;
        var _nwm = _nwh(74496),
            _nwn = _nwj(_nwh(18622));
        _nwg.getSlot318PersonalEffect = function(_nwo) {
            var _nwp = null,
                _nwq = new _nwm.SlotItemEffectModel(),
                _nwr = new _nwm.SlotItemEffectModel(),
                _nws = new _nwm.SlotItemEffectModel(),
                _nwt = new _nwm.SlotItemEffectModel();
            if (411 == _nwo.ship_id || 412 == _nwo.ship_id ? _nwr.houg += 1 : 82 == _nwo.ship_id ? (_nwr.houg += 2, _nwr.tyku += 2, _nwr.kaih += 2, _nwt.tyku = 2, _nwt.kaih = 3, _nwt.houm = 1) : 553 == _nwo.ship_id ? (_nwr.houg += 2, _nwr.tyku += 2, _nwr.kaih += 2, _nwr.houm += 3, _nwt.tyku = 2, _nwt.kaih = 3, _nwt.houm = 1, _nws.kaih = 2, _nws.souk = 1) : 88 == _nwo.ship_id ? (_nwr.houg += 2, _nwr.tyku += 2, _nwr.kaih += 2, _nwt.tyku = 2, _nwt.kaih = 3, _nwt.houm = 1) : 541 == _nwo.ship_id || 573 == _nwo.ship_id ? (_nwr.houg += 3, _nwr.tyku += 2, _nwr.kaih += 1, _nwr.houm += 2, _nws.houg = 2, _nws.kaih = 2, _nws.souk = 1, _nws.houm = 1) : 554 == _nwo.ship_id && (_nwr.houg += 3, _nwr.tyku += 2, _nwr.kaih += 2, _nwr.houm += 3, _nwt.tyku = 2, _nwt.kaih = 3, _nwt.houm = 1, _nws.houg = 1, _nws.kaih = 2, _nws.souk = 1, _nws.houm = 1), !_nwr.exists()) return _nwq;
            var _nwu = _nwo.get_slotnums(318);
            if (_nwq = _nwr.multiply(_nwu), !_nws.exists() && !_nwt.exists()) return _nwq;
            for (var _nwv = 0, _nww = 0, _nwx = _nwo.have_slot_ids(); _nww < _nwx.length; _nww++) {
                var _nwy = _nwx[_nww],
                    _nwz = _nwn.default.model.slot.getMst(_nwy),
                    _nx0 = _nwz.equipType;
                (12 == _nx0 || 13 == _nx0) && _nwz.taiku >= 2 && (_nwv += _nwo.get_slotnums(parseInt(_nwy)));
            }
            var _nx1 = _nwo.get_slotnums(290);
            return _nwt.exists() && _nwv > 0 && 0 == _nx1 && _nwq.add(_nwt), _nws.exists() && _nx1 >= 1 && _nwq.add(_nws), _nwq;
        };
    },
    51063: (_nx2, _nx3, _nx4) => {
        'use strict';
        var _nx5 = null;
        defineModule(_nx3);
        Object.defineProperty(_nx3, '__esModule', {
            'value': true
        }), _nx3.getSlot319PersonalEffect = void 0;
        var _nx6 = _nx4(74496);
        _nx3.getSlot319PersonalEffect = function(_nx7) {
            var _nx8 = null,
                _nx9 = new _nx6.SlotItemEffectModel(),
                _nxa = new _nx6.SlotItemEffectModel();
            if (554 != _nx7.ship_id && 553 != _nx7.ship_id || (_nxa.houg = 7, _nxa.tyku = 3, _nxa.kaih = 2), !_nxa.exists()) return _nx9;
            var _nxb = _nx7.get_slotnums(319);
            return _nx9 = _nxa.multiply(_nxb);
        };
    },
    91491: (_nxc, _nxd, _nxe) => {
        'use strict';
        var _nxf = null;
        defineModule(_nxd);
        Object.defineProperty(_nxd, '__esModule', {
            'value': true
        }), _nxd.getSlot320PersonalEffect = void 0;
        var _nxg = _nxe(74496);
        _nxd.getSlot320PersonalEffect = function(_nxh) {
            var _nxi = null,
                _nxj = new _nxg.SlotItemEffectModel(),
                _nxk = new _nxg.SlotItemEffectModel();
            if (553 == _nxh.ship_id) _nxk.houg = 2;
            else {
                if (554 == _nxh.ship_id) _nxk.houg = 4;
                else {
                    if (196 == _nxh.ship_id) _nxk.houg = 3;
                    else {
                        if (197 == _nxh.ship_id) _nxk.houg = 3;
                        else {
                            if (508 == _nxh.ship_id) _nxk.houg = 4;
                            else {
                                if (509 != _nxh.ship_id) return _nxj;
                                _nxk.houg = 4;
                            }
                        }
                    }
                }
            }
            var _nxl = _nxh.get_slotnums(320);
            return _nxj = _nxk.multiply(_nxl);
        };
    },
    85495: (_nxm, _nxn, _nxo) => {
        'use strict';
        var _nxp = null;
        defineModule(_nxn);
        Object.defineProperty(_nxn, '__esModule', {
            'value': true
        }), _nxn.getSlot322PersonalEffect = void 0;
        var _nxq = _nxo(74496);
        _nxn.getSlot322PersonalEffect = function(_nxr) {
            var _nxs = null,
                _nxt = new _nxq.SlotItemEffectModel(),
                _nxu = new _nxq.SlotItemEffectModel();
            if (554 != _nxr.ship_id && 553 != _nxr.ship_id || (_nxu.houg = 5, _nxu.tyku = 2, _nxu.kaih = 2, _nxu.tais = 1), !_nxu.exists()) return _nxt;
            var _nxv = _nxr.get_slotnums(322);
            return _nxt = _nxu.multiply(_nxv);
        };
    },
    65365: (_nxw, _nxx, _nxy) => {
        'use strict';
        var _nxz = null;
        defineModule(_nxx);
        Object.defineProperty(_nxx, '__esModule', {
            'value': true
        }), _nxx.getSlot323PersonalEffect = void 0;
        var _ny0 = _nxy(74496);
        _nxx.getSlot323PersonalEffect = function(_ny1) {
            var _ny2 = null,
                _ny3 = new _ny0.SlotItemEffectModel(),
                _ny4 = new _ny0.SlotItemEffectModel();
            if (554 != _ny1.ship_id && 553 != _ny1.ship_id || (_ny4.houg = 6, _ny4.tyku = 3, _ny4.kaih = 3, _ny4.tais = 2), !_ny4.exists()) return _ny3;
            var _ny5 = _ny1.get_slotnums(323);
            return _ny3 = _ny4.multiply(_ny5);
        };
    },
    98164: (_ny6, _ny7, _ny8) => {
        'use strict';
        var _ny9 = null;
        defineModule(_ny7);
        Object.defineProperty(_ny7, '__esModule', {
            'value': true
        }), _ny7.getSlot324And325PersonalEffect = void 0;
        var _nya = _ny8(74496);
        _ny7.getSlot324And325PersonalEffect = function(_nyb) {
            var _nyc = null,
                _nyd = new _nya.SlotItemEffectModel(),
                _nye = new _nya.SlotItemEffectModel();
            if (554 == _nyb.ship_id || 646 == _nyb.ship_id ? (_nye.houg = 2, _nye.tais = 3, _nye.kaih = 1) : 553 == _nyb.ship_id && (_nye.houg = 1, _nye.tais = 2, _nye.kaih = 1), !_nye.exists()) return _nyd;
            var _nyf = _nyb.get_slotnums(324) + _nyb.get_slotnums(325);
            return _nyd = _nye.multiply(_nyf);
        };
    },
    38114: (_nyg, _nyh, _nyi) => {
        'use strict';
        var _nyj = null;
        defineModule(_nyh);
        Object.defineProperty(_nyh, '__esModule', {
            'value': true
        }), _nyh.getSlot326PersonalEffect = void 0;
        var _nyk = _nyi(74496);
        _nyh.getSlot326PersonalEffect = function(_nyl) {
            var _nym = null,
                _nyn = new _nyk.SlotItemEffectModel(),
                _nyo = new _nyk.SlotItemEffectModel();
            if (646 == _nyl.ship_id ? (_nyo.houg = 3, _nyo.tais = 5, _nyo.kaih = 3) : 554 == _nyl.ship_id ? (_nyo.houg = 3, _nyo.tais = 4, _nyo.kaih = 2) : 553 == _nyl.ship_id && (_nyo.houg = 1, _nyo.tais = 3, _nyo.kaih = 1), !_nyo.exists()) return _nyn;
            var _nyp = _nyl.get_slotnums(326);
            return _nyn = _nyo.multiply(_nyp);
        };
    },
    21003: (_nyq, _nyr, _nys) => {
        'use strict';
        var _nyt = null;
        defineModule(_nyr);
        Object.defineProperty(_nyr, '__esModule', {
            'value': true
        }), _nyr.getSlot327PersonalEffect = void 0;
        var _nyu = _nys(74496);
        _nyr.getSlot327PersonalEffect = function(_nyv) {
            var _nyw = null,
                _nyx = new _nyu.SlotItemEffectModel(),
                _nyy = new _nyu.SlotItemEffectModel();
            if (646 == _nyv.ship_id ? (_nyy.houg = 5, _nyy.tais = 6, _nyy.kaih = 4) : 554 == _nyv.ship_id ? (_nyy.houg = 4, _nyy.tais = 5, _nyy.kaih = 2) : 553 == _nyv.ship_id && (_nyy.houg = 2, _nyy.tais = 4, _nyy.kaih = 1), !_nyy.exists()) return _nyx;
            var _nyz = _nyv.get_slotnums(327);
            return _nyx = _nyy.multiply(_nyz);
        };
    },
    77010: (_nz0, _nz1, _nz2) => {
        'use strict';
        var _nz3 = null;
        defineModule(_nz1);
        Object.defineProperty(_nz1, '__esModule', {
            'value': true
        }), _nz1.getSlot328PersonalEffect = void 0;
        var _nz4 = _nz2(74496);
        _nz1.getSlot328PersonalEffect = function(_nz5) {
            var _nz6 = null,
                _nz7 = new _nz4.SlotItemEffectModel(),
                _nz8 = new _nz4.SlotItemEffectModel();
            if ('こんごう' == _nz5.yomi ? (_nz8.houg = 1, _nz8.kaih = 1, 209 == _nz5.ship_id || 149 == _nz5.ship_id ? _nz8.houg += 1 : 591 == _nz5.ship_id && (_nz8.houg += 2, _nz8.raig += 1)) : 'ひえい' == _nz5.yomi ? (_nz8.houg = 1, _nz8.kaih = 1, 210 == _nz5.ship_id || 150 == _nz5.ship_id ? _nz8.houg += 1 : 592 == _nz5.ship_id && (_nz8.houg += 2, _nz8.tyku += 1)) : 'はるな' == _nz5.yomi ? (_nz8.houg = 1, _nz8.kaih = 1, 211 == _nz5.ship_id || 151 == _nz5.ship_id ? _nz8.houg += 1 : 593 == _nz5.ship_id ? (_nz8.houg += 1, _nz8.tyku += 2) : 954 == _nz5.ship_id && (_nz8.houg += 2, _nz8.tyku += 1)) : 'きりしま' == _nz5.yomi ? (_nz8.houg = 1, _nz8.kaih = 1, 212 == _nz5.ship_id || 152 == _nz5.ship_id ? _nz8.houg += 1 : 694 == _nz5.ship_id && (_nz8.houg += 2, _nz8.tyku += 1)) : ('ふそう' == _nz5.yomi || 'やましろ' == _nz5.yomi || 'いせ' == _nz5.yomi || 'ひゅうが' == _nz5.yomi) && (_nz8.houg = 1), !_nz8.exists()) return _nz7;
            var _nz9 = _nz5.get_slotnums(328);
            return _nz7 = _nz8.multiply(_nz9);
        };
    },
    39126: (_nza, _nzb, _nzc) => {
        'use strict';
        var _nzd = null;
        defineModule(_nzb);
        Object.defineProperty(_nzb, '__esModule', {
            'value': true
        }), _nzb.getSlot329PersonalEffect = void 0;
        var _nze = _nzc(74496);
        _nzb.getSlot329PersonalEffect = function(_nzf) {
            var _nzg = null,
                _nzh = new _nze.SlotItemEffectModel(),
                _nzi = new _nze.SlotItemEffectModel();
            if ('こんごう' == _nzf.yomi ? (_nzi.houg = 1, _nzi.kaih = 1, 209 == _nzf.ship_id ? _nzi.houg += 1 : 149 == _nzf.ship_id ? (_nzi.houg += 2, _nzi.tyku += 1) : 591 == _nzf.ship_id && (_nzi.houg += 3, _nzi.tyku += 1, _nzi.raig += 2)) : 'ひえい' == _nzf.yomi ? (_nzi.houg = 1, _nzi.kaih = 1, 210 == _nzf.ship_id ? _nzi.houg += 1 : 150 == _nzf.ship_id ? (_nzi.houg += 2, _nzi.tyku += 1) : 592 == _nzf.ship_id && (_nzi.houg += 3, _nzi.tyku += 1, _nzi.raig += 2)) : 'はるな' == _nzf.yomi ? (_nzi.houg = 1, _nzi.kaih = 1, 211 == _nzf.ship_id ? _nzi.houg += 1 : 151 == _nzf.ship_id ? (_nzi.houg += 2, _nzi.tyku += 1) : 593 == _nzf.ship_id ? (_nzi.houg += 2, _nzi.tyku += 3, _nzi.raig += 1) : 954 == _nzf.ship_id && (_nzi.houg += 3, _nzi.tyku += 1, _nzi.raig += 2)) : 'きりしま' == _nzf.yomi ? (_nzi.houg = 1, _nzi.kaih = 1, 212 == _nzf.ship_id ? _nzi.houg += 1 : 152 == _nzf.ship_id ? (_nzi.houg += 2, _nzi.tyku += 1) : 694 == _nzf.ship_id && (_nzi.houg += 4, _nzi.tyku += 1, _nzi.raig += 1)) : ('ふそう' == _nzf.yomi || 'やましろ' == _nzf.yomi || 'いせ' == _nzf.yomi || 'ひゅうが' == _nzf.yomi) && (_nzi.houg = 1), !_nzi.exists()) return _nzh;
            var _nzj = _nzf.get_slotnums(329);
            return _nzh = _nzi.multiply(_nzj);
        };
    },
    72176: (_nzk, _nzl, _nzm) => {
        'use strict';
        var _nzn = null;
        defineModule(_nzl);
        Object.defineProperty(_nzl, '__esModule', {
            'value': true
        }), _nzl.getSlot335PersonalEffect = void 0;
        var _nzo = _nzm(74496);
        _nzl.getSlot335PersonalEffect = function(_nzp) {
            var _nzq = null,
                _nzr = new _nzo.SlotItemEffectModel(),
                _nzs = new _nzo.SlotItemEffectModel();
            if (277 == _nzp.ship_id || 278 == _nzp.ship_id ? (_nzs.tyku = 1, _nzs.kaih = 1) : 594 != _nzp.ship_id && 599 != _nzp.ship_id && 610 != _nzp.ship_id && 646 != _nzp.ship_id && 698 != _nzp.ship_id || (_nzs.tyku = 2, _nzs.kaih = 1), !_nzs.exists()) return _nzr;
            var _nzt = _nzp.get_slotnums(335);
            return _nzr = _nzs.multiply(_nzt);
        };
    },
    33846: (_nzu, _nzv, _nzw) => {
        'use strict';
        var _nzx = null;
        defineModule(_nzv);
        Object.defineProperty(_nzv, '__esModule', {
            'value': true
        }), _nzv.getSlot336PersonalEffect = void 0;
        var _nzy = _nzw(74496);
        _nzv.getSlot336PersonalEffect = function(_nzz) {
            var _o00 = null,
                _o01 = new _nzy.SlotItemEffectModel(),
                _o02 = new _nzy.SlotItemEffectModel();
            if (277 == _nzz.ship_id || 278 == _nzz.ship_id ? (_o02.houg = 1, _o02.tyku = 1, _o02.kaih = 1) : 594 != _nzz.ship_id && 599 != _nzz.ship_id && 610 != _nzz.ship_id && 646 != _nzz.ship_id && 698 != _nzz.ship_id || (_o02.houg = 1, _o02.tyku = 2, _o02.kaih = 1), !_o02.exists()) return _o01;
            var _o03 = _nzz.get_slotnums(336);
            return _o01 = _o02.multiply(_o03);
        };
    },
    97157: (_o04, _o05, _o06) => {
        'use strict';
        var _o07 = null;
        defineModule(_o05);
        Object.defineProperty(_o05, '__esModule', {
            'value': true
        }), _o05.getSlot337PersonalEffect = void 0;
        var _o08 = _o06(74496);
        _o05.getSlot337PersonalEffect = function(_o09) {
            var _o0a = null,
                _o0b = new _o08.SlotItemEffectModel(),
                _o0c = new _o08.SlotItemEffectModel();
            if (277 == _o09.ship_id || 278 == _o09.ship_id ? (_o0c.houg = 1, _o0c.tyku = 1, _o0c.kaih = 1) : 594 != _o09.ship_id && 599 != _o09.ship_id && 610 != _o09.ship_id && 646 != _o09.ship_id && 698 != _o09.ship_id || (_o0c.houg = 2, _o0c.tyku = 2, _o0c.kaih = 1), !_o0c.exists()) return _o0b;
            var _o0d = _o09.get_slotnums(337);
            return _o0b = _o0c.multiply(_o0d);
        };
    },
    63406: (_o0e, _o0f, _o0g) => {
        'use strict';
        var _o0h = null;
        defineModule(_o0f);
        Object.defineProperty(_o0f, '__esModule', {
            'value': true
        }), _o0f.getSlot338PersonalEffect = void 0;
        var _o0i = _o0g(74496);
        _o0f.getSlot338PersonalEffect = function(_o0j) {
            var _o0k = null,
                _o0l = new _o0i.SlotItemEffectModel(),
                _o0m = new _o0i.SlotItemEffectModel();
            if (277 == _o0j.ship_id || 278 == _o0j.ship_id ? (_o0m.houg = 1, _o0m.tyku = 1, _o0m.kaih = 2) : 594 == _o0j.ship_id || 646 == _o0j.ship_id || 698 == _o0j.ship_id ? (_o0m.houg = 1, _o0m.tyku = 2, _o0m.kaih = 3) : 599 != _o0j.ship_id && 610 != _o0j.ship_id || (_o0m.houg = 4, _o0m.tyku = 3, _o0m.kaih = 4), !_o0m.exists()) return _o0l;
            var _o0n = _o0j.get_slotnums(338);
            return _o0l = _o0m.multiply(_o0n);
        };
    },
    66373: (_o0o, _o0p, _o0q) => {
        'use strict';
        var _o0r = null;
        defineModule(_o0p);
        Object.defineProperty(_o0p, '__esModule', {
            'value': true
        }), _o0p.getSlot339PersonalEffect = void 0;
        var _o0s = _o0q(74496);
        _o0p.getSlot339PersonalEffect = function(_o0t) {
            var _o0u = null,
                _o0v = new _o0s.SlotItemEffectModel(),
                _o0w = new _o0s.SlotItemEffectModel();
            if (277 == _o0t.ship_id || 278 == _o0t.ship_id ? (_o0w.houg = 1, _o0w.tyku = 2, _o0w.kaih = 2) : 594 == _o0t.ship_id || 646 == _o0t.ship_id || 698 == _o0t.ship_id ? (_o0w.houg = 1, _o0w.tyku = 3, _o0w.kaih = 4) : 599 != _o0t.ship_id && 610 != _o0t.ship_id || (_o0w.houg = 6, _o0w.tyku = 4, _o0w.kaih = 5), !_o0w.exists()) return _o0v;
            var _o0x = _o0t.get_slotnums(339);
            return _o0v = _o0w.multiply(_o0x);
        };
    },
    19707: (_o0y, _o0z, _o10) => {
        'use strict';
        var _o11 = null;
        defineModule(_o0z);
        Object.defineProperty(_o0z, '__esModule', {
            'value': true
        }), _o0z.getSlot340PersonalEffect = void 0;
        var _o12 = _o10(74496);
        _o0z.getSlot340PersonalEffect = function(_o13) {
            var _o14 = null,
                _o15 = new _o12.SlotItemEffectModel(),
                _o16 = new _o12.SlotItemEffectModel();
            if ('ガリバルディ' != _o13.yomi && 'アブルッツィ' != _o13.yomi || (_o16.houg = 1, _o16.tyku = 1, _o16.kaih = 1), !_o16.exists()) return _o15;
            var _o17 = _o13.get_slotnums(340);
            return _o15 = _o16.multiply(_o17);
        };
    },
    63978: (_o18, _o19, _o1a) => {
        'use strict';
        var _o1b = null;
        defineModule(_o19);
        Object.defineProperty(_o19, '__esModule', {
            'value': true
        }), _o19.getSlot341PersonalEffect = void 0;
        var _o1c = _o1a(74496);
        _o19.getSlot341PersonalEffect = function(_o1d) {
            var _o1e = null,
                _o1f = new _o1c.SlotItemEffectModel(),
                _o1g = new _o1c.SlotItemEffectModel();
            if ('ガリバルディ' == _o1d.yomi || 'アブルッツィ' == _o1d.yomi ? (_o1g.houg = 2, _o1g.tyku = 1, _o1g.kaih = 1) : 'ゴトランド' == _o1d.yomi && (_o1g.houg = 1, _o1g.tyku = 1, _o1g.kaih = 1), !_o1g.exists()) return _o1f;
            var _o1h = _o1d.get_slotnums(341);
            return _o1f = _o1g.multiply(_o1h);
        };
    },
    92382: (_o1i, _o1j, _o1k) => {
        'use strict';
        var _o1l = null;
        defineModule(_o1j);
        Object.defineProperty(_o1j, '__esModule', {
            'value': true
        }), _o1j.getSlot342PersonalEffect = void 0;
        var _o1m = _o1k(74496);
        _o1j.getSlot342PersonalEffect = function(_o1n) {
            var _o1o = null,
                _o1p = new _o1m.SlotItemEffectModel(),
                _o1q = new _o1m.SlotItemEffectModel();
            if (277 == _o1n.ship_id || 278 == _o1n.ship_id || 461 == _o1n.ship_id || 466 == _o1n.ship_id || 462 == _o1n.ship_id || 467 == _o1n.ship_id ? _o1q.houg = 1 : 594 == _o1n.ship_id || 646 == _o1n.ship_id || 698 == _o1n.ship_id ? (_o1q.houg = 2, _o1q.tyku = 1, _o1q.kaih = 1) : 599 != _o1n.ship_id && 610 != _o1n.ship_id || (_o1q.houg = 3, _o1q.tyku = 2, _o1q.kaih = 2), !_o1q.exists()) return _o1p;
            var _o1r = _o1n.get_slotnums(342);
            return _o1p = _o1q.multiply(_o1r);
        };
    },
    78415: (_o1s, _o1t, _o1u) => {
        'use strict';
        var _o1v = null;
        defineModule(_o1t);
        Object.defineProperty(_o1t, '__esModule', {
            'value': true
        }), _o1t.getSlot343PersonalEffect = void 0;
        var _o1w = _o1u(74496);
        _o1t.getSlot343PersonalEffect = function(_o1x) {
            var _o1y = null,
                _o1z = new _o1w.SlotItemEffectModel(),
                _o20 = new _o1w.SlotItemEffectModel();
            if (277 == _o1x.ship_id || 278 == _o1x.ship_id ? _o20.houg = 2 : 461 == _o1x.ship_id || 466 == _o1x.ship_id || 462 == _o1x.ship_id || 467 == _o1x.ship_id ? _o20.houg = 1 : 594 == _o1x.ship_id || 646 == _o1x.ship_id || 698 == _o1x.ship_id ? (_o20.houg = 3, _o20.tyku = 2, _o20.kaih = 1) : 599 != _o1x.ship_id && 610 != _o1x.ship_id || (_o20.houg = 5, _o20.tyku = 3, _o20.kaih = 3), !_o20.exists()) return _o1z;
            var _o21 = _o1x.get_slotnums(343);
            return _o1z = _o20.multiply(_o21);
        };
    },
    23090: (_o22, _o23, _o24) => {
        'use strict';
        var _o25 = null;
        defineModule(_o23);
        Object.defineProperty(_o23, '__esModule', {
            'value': true
        }), _o23.getSlot344PersonalEffect = void 0;
        var _o26 = _o24(74496);
        _o23.getSlot344PersonalEffect = function(_o27) {
            var _o28 = null,
                _o29 = new _o26.SlotItemEffectModel(),
                _o2a = new _o26.SlotItemEffectModel();
            if (599 == _o27.ship_id || 610 == _o27.ship_id ? _o2a.houg = 3 : 555 == _o27.ship_id || 560 == _o27.ship_id ? (_o2a.houg = 2, _o2a.tais = 2) : 318 == _o27.ship_id ? (_o2a.houg = 4, _o2a.tais = 1) : 282 == _o27.ship_id ? (_o2a.houg = 2, _o2a.tais = 1) : 888 == _o27.ship_id ? (_o2a.houg = 4, _o2a.tais = 2) : 883 == _o27.ship_id && (_o2a.houg = 5, _o2a.tais = 2), !_o2a.exists()) return _o29;
            var _o2b = _o27.get_slotnums(344);
            return _o29 = _o2a.multiply(_o2b);
        };
    },
    18776: (_o2c, _o2d, _o2e) => {
        'use strict';
        var _o2f = null;
        defineModule(_o2d);
        Object.defineProperty(_o2d, '__esModule', {
            'value': true
        }), _o2d.getSlot345PersonalEffect = void 0;
        var _o2g = _o2e(74496);
        _o2d.getSlot345PersonalEffect = function(_o2h) {
            var _o2i = null,
                _o2j = new _o2g.SlotItemEffectModel(),
                _o2k = new _o2g.SlotItemEffectModel();
            if (599 == _o2h.ship_id || 610 == _o2h.ship_id ? (_o2k.houg = 3, _o2k.kaih = 1) : 555 == _o2h.ship_id || 560 == _o2h.ship_id ? (_o2k.houg = 3, _o2k.tais = 2, _o2k.kaih = 2) : 318 == _o2h.ship_id ? (_o2k.houg = 5, _o2k.tais = 1, _o2k.kaih = 2) : 282 == _o2h.ship_id ? (_o2k.houg = 3, _o2k.tais = 1, _o2k.kaih = 1) : 888 == _o2h.ship_id ? (_o2k.houg = 4, _o2k.tais = 2, _o2k.kaih = 2) : 883 == _o2h.ship_id && (_o2k.houg = 5, _o2k.tais = 2, _o2k.kaih = 3), !_o2k.exists()) return _o2j;
            var _o2l = _o2h.get_slotnums(345);
            return _o2j = _o2k.multiply(_o2l);
        };
    },
    89058: (_o2m, _o2n, _o2o) => {
        'use strict';
        var _o2p = null;
        defineModule(_o2n);
        Object.defineProperty(_o2n, '__esModule', {
            'value': true
        }), _o2n.getSlot346PersonalEffect = void 0;
        var _o2q = _o2o(74496);
        _o2n.getSlot346PersonalEffect = function(_o2r) {
            var _o2s = null,
                _o2t = new _o2q.SlotItemEffectModel();
            return 'やましおまる' == _o2r.yomi && (_o2t.kaih += 1, _o2t.tais += 1), _o2t;
        };
    },
    84372: (_o2u, _o2v, _o2w) => {
        'use strict';
        var _o2x = null;
        defineModule(_o2v);
        Object.defineProperty(_o2v, '__esModule', {
            'value': true
        }), _o2v.getSlot347PersonalEffect = void 0;
        var _o2y = _o2w(74496);
        _o2v.getSlot347PersonalEffect = function(_o2z) {
            var _o30 = null,
                _o31 = new _o2y.SlotItemEffectModel();
            return 'やましおまる' == _o2z.yomi && (_o31.kaih += 2, _o31.tais += 2), _o31;
        };
    },
    39656: (_o32, _o33, _o34) => {
        'use strict';
        var _o35 = null;
        defineModule(_o33);
        Object.defineProperty(_o33, '__esModule', {
            'value': true
        }), _o33.getSlot356_357PersonalEffect = void 0;
        var _o36 = _o34(74496);
        _o33.getSlot356_357PersonalEffect = function(_o37) {
            var _o38 = null,
                _o39 = new _o36.SlotItemEffectModel(),
                _o3a = new _o36.SlotItemEffectModel();
            if (95 == _o37.ctype ? _o3a.houg = 2 : 9 == _o37.ctype && (_o3a.houg = 1), !_o3a.exists()) return _o39;
            var _o3b = _o37.get_slotnums(356) + _o37.get_slotnums(357);
            return _o39 = _o3a.multiply(_o3b);
        };
    },
    66039: (_o3c, _o3d, _o3e) => {
        'use strict';
        var _o3f = null;
        defineModule(_o3d);
        Object.defineProperty(_o3d, '__esModule', {
            'value': true
        }), _o3d.getSlot358PersonalEffect = void 0;
        var _o3g = _o3e(74496);
        _o3d.getSlot358PersonalEffect = function(_o3h) {
            var _o3i = null,
                _o3j = new _o3g.SlotItemEffectModel(),
                _o3k = new _o3g.SlotItemEffectModel();
            if ('アメリカ' != _o3h.getCountryName() && 67 != _o3h.ctype && 78 != _o3h.ctype && 82 != _o3h.ctype && 88 != _o3h.ctype && 108 != _o3h.ctype && 112 != _o3h.ctype) return _o3j;
            _o3k.houg += 1, _o3k.kaih += 1, _o3k.tyku += 1, 95 == _o3h.ctype && (_o3k.houg += 1, _o3k.kaih += 2, _o3k.tyku += 2);
            var _o3l = _o3h.get_slotnums(358);
            return _o3j = _o3k.multiply(_o3l);
        };
    },
    64679: (_o3m, _o3n, _o3o) => {
        'use strict';
        var _o3p = null;
        defineModule(_o3n);
        Object.defineProperty(_o3n, '__esModule', {
            'value': true
        }), _o3n.getSlot359PersonalEffect = void 0;
        var _o3q = _o3o(74496);
        _o3n.getSlot359PersonalEffect = function(_o3r) {
            var _o3s = null,
                _o3t = new _o3q.SlotItemEffectModel(),
                _o3u = new _o3q.SlotItemEffectModel();
            if ('パース' == _o3r.yomi ? (_o3u.houg = 2, _o3u.tyku = 2, _o3u.kaih = 1) : 'ゆうばり' == _o3r.yomi && (_o3u.houg = 1, _o3u.tyku = 1, _o3u.kaih = 1), 622 != _o3r.ship_id && 623 != _o3r.ship_id && 624 != _o3r.ship_id || (_o3u.houg += 1, _o3u.tyku += 1), !_o3u.exists()) return _o3t;
            var _o3v = _o3r.get_slotnums(359);
            return _o3t = _o3u.multiply(_o3v);
        };
    },
    69954: (_o3w, _o3x, _o3y) => {
        'use strict';
        var _o3z = null;
        defineModule(_o3x);
        Object.defineProperty(_o3x, '__esModule', {
            'value': true
        }), _o3x.getSlot35PersonalEffect = void 0;
        var _o40 = _o3y(74496);
        _o3x.getSlot35PersonalEffect = function(_o41) {
            var _o42 = null,
                _o43 = new _o40.SlotItemEffectModel(),
                _o44 = new _o40.SlotItemEffectModel();
            return 149 == _o41.ship_id || 591 == _o41.ship_id || 592 == _o41.ship_id || 694 == _o41.ship_id ? (_o44.houg += 1, _o44.tyku += 1) : 150 == _o41.ship_id ? _o44.tyku += 1 : 151 == _o41.ship_id || 593 == _o41.ship_id || 954 == _o41.ship_id ? (_o44.tyku += 1, _o44.kaih += 1) : 152 == _o41.ship_id && (_o44.houg += 1), _o44.exists() ? _o43 = _o44.multiply(1) : _o43;
        };
    },
    95953: (_o45, _o46, _o47) => {
        'use strict';
        var _o48 = null;
        defineModule(_o46);
        Object.defineProperty(_o46, '__esModule', {
            'value': true
        }), _o46.getSlot360_361PersonalEffect = void 0;
        var _o49 = _o47(74496);
        _o46.getSlot360_361PersonalEffect = function(_o4a) {
            var _o4b = null,
                _o4c = new _o49.SlotItemEffectModel(),
                _o4d = new _o49.SlotItemEffectModel();
            if ('デ・ロイテル' == _o4a.yomi ? (_o4d.houg = 2, _o4d.tyku = 2, _o4d.kaih = 1) : 'ゴトランド' == _o4a.yomi && (_o4d.houg = 2, _o4d.tyku = 1, _o4d.kaih = 1), 41 == _o4a.ctype && (_o4d.houg = 1, _o4d.tyku = 1), !_o4d.exists()) return _o4c;
            var _o4e = _o4a.get_slotnums(360) + _o4a.get_slotnums(361);
            return _o4c = _o4d.multiply(_o4e);
        };
    },
    86384: (_o4f, _o4g, _o4h) => {
        'use strict';
        var _o4i = null;
        defineModule(_o4g);
        Object.defineProperty(_o4g, '__esModule', {
            'value': true
        }), _o4g.getSlot362_363PersonalEffect = void 0;
        var _o4j = _o4h(74496);
        _o4g.getSlot362_363PersonalEffect = function(_o4k) {
            var _o4l = null,
                _o4m = new _o4j.SlotItemEffectModel(),
                _o4n = new _o4j.SlotItemEffectModel(),
                _o4o = false;
            if (99 == _o4k.ctype ? (_o4n.houg = 1, _o4n.tyku = 2, _o4n.kaih = 1, _o4o = true) : 34 == _o4k.ctype || 21 == _o4k.ctype ? (_o4n.houg = -3, _o4n.tyku = -3, _o4n.kaih = -8, _o4o = true) : 4 == _o4k.ctype || 20 == _o4k.ctype || 16 == _o4k.ctype ? (_o4n.houg = -3, _o4n.tyku = -2, _o4n.kaih = -6, _o4o = true) : 89 == _o4k.ctype || 56 == _o4k.ctype ? (_o4n.houg = -2, _o4n.tyku = -1, _o4n.kaih = -4, _o4o = true) : 52 != _o4k.ctype && 41 != _o4k.ctype && 98 != _o4k.ctype || (_o4n.tyku = -1, _o4n.kaih = -2, _o4o = true), 'アメリカ' == _o4k.getCountryName() && (_o4n.tyku += 1, _o4n.kaih += 1, _o4o = true), 0 == _o4o) return _o4m;
            var _o4p = _o4k.get_slotnums(362) + _o4k.get_slotnums(363);
            return _o4m = _o4n.multiply(_o4p);
        };
    },
    65345: (_o4q, _o4r, _o4s) => {
        'use strict';
        var _o4t = null;
        defineModule(_o4r);
        Object.defineProperty(_o4r, '__esModule', {
            'value': true
        }), _o4r.getSlot364PersonalEffect = void 0;
        var _o4u = _o4s(74496);
        _o4r.getSlot364PersonalEffect = function(_o4v) {
            var _o4w = null;
            new _o4u.SlotItemEffectModel();
            var _o4x = new _o4u.SlotItemEffectModel();
            623 == _o4v.ship_id || 586 == _o4v.ship_id || 119 == _o4v.ship_id || 118 == _o4v.ship_id || 657 == _o4v.ship_id || 506 == _o4v.ship_id || 668 == _o4v.ship_id || 507 == _o4v.ship_id ? (_o4x.raig = 1, _o4x.kaih = -2, 119 == _o4v.ship_id ? _o4x.raig += 1 : 507 == _o4v.ship_id ? _o4x.raig += 2 : 623 == _o4v.ship_id && (_o4x.houg += 1, _o4x.raig += 3)) : (_o4x.houg = -1, _o4x.kaih = -7);
            var _o4y = _o4v.get_slotnums(364);
            return _o4x.multiply(_o4y);
        };
    },
    46514: (_o4z, _o50, _o51) => {
        'use strict';
        var _o52 = null;
        defineModule(_o50);
        Object.defineProperty(_o50, '__esModule', {
            'value': true
        }), _o50.getSlot365PersonalEffect = void 0;
        var _o53 = _o51(74496);
        _o50.getSlot365PersonalEffect = function(_o54) {
            var _o55 = null,
                _o56 = new _o53.SlotItemEffectModel(),
                _o57 = new _o53.SlotItemEffectModel(),
                _o58 = false;
            return 37 != _o54.ctype && 19 != _o54.ctype && 2 != _o54.ctype && 26 != _o54.ctype && 6 != _o54.ctype || (_o57.houg += 1, _o58 = true), 136 != _o54.ship_id && 148 != _o54.ship_id && 546 != _o54.ship_id && 541 != _o54.ship_id && 573 != _o54.ship_id && 911 != _o54.ship_id && 916 != _o54.ship_id && 593 != _o54.ship_id || (_o57.houg += 1, _o58 = true), 591 != _o54.ship_id && 592 != _o54.ship_id && 954 != _o54.ship_id && 694 != _o54.ship_id || (_o57.houg += 2, _o58 = true), 0 == _o58 ? _o56 : _o56 = _o57.multiply(1);
        };
    },
    81976: (_o59, _o5a, _o5b) => {
        'use strict';
        var _o5c = null;
        defineModule(_o5a);
        Object.defineProperty(_o5a, '__esModule', {
            'value': true
        }), _o5a.getSlot367PersonalEffect = void 0;
        var _o5d = _o5b(74496);
        _o5a.getSlot367PersonalEffect = function(_o5e) {
            var _o5f = null,
                _o5g = new _o5d.SlotItemEffectModel(),
                _o5h = new _o5d.SlotItemEffectModel(),
                _o5i = false;
            if ('ゴトランド' == _o5e.yomi && (_o5h.houg += 2, _o5h.tais += 1, _o5h.kaih += 1, _o5h.saku += 1, _o5i = true), 70 == _o5e.ctype ? (_o5h.houg += 1, _o5h.tais += 1, _o5h.kaih += 1, _o5h.saku += 1, _o5i = true) : 72 == _o5e.ctype || 62 == _o5e.ctype ? (_o5h.houg += 1, _o5h.kaih += 1, _o5h.saku += 1, _o5i = true) : 67 != _o5e.ctype && 78 != _o5e.ctype && 82 != _o5e.ctype && 88 != _o5e.ctype && 108 != _o5e.ctype && 112 != _o5e.ctype || (_o5h.houg += 2, _o5h.kaih += 2, _o5h.saku += 2, _o5i = true), 0 == _o5i) return _o5g;
            var _o5j = _o5e.get_slotnums(367);
            return _o5g = _o5h.multiply(_o5j);
        };
    },
    89331: (_o5k, _o5l, _o5m) => {
        'use strict';
        var _o5n = null;
        defineModule(_o5l);
        Object.defineProperty(_o5l, '__esModule', {
            'value': true
        }), _o5l.getSlot368PersonalEffect = void 0;
        var _o5o = _o5m(74496);
        _o5l.getSlot368PersonalEffect = function(_o5p) {
            var _o5q = null,
                _o5r = new _o5o.SlotItemEffectModel(),
                _o5s = new _o5o.SlotItemEffectModel(),
                _o5t = false;
            if ('ゴトランド' == _o5p.yomi && (_o5s.houg = 4, _o5s.tais = 3, _o5s.kaih = 2, _o5s.saku = 3, _o5t = true, 630 == _o5p.ship_id && (_o5r.houg += 2, _o5r.raig += 2, _o5r.kaih += 1, _o5r.saku += 1)), 70 == _o5p.ctype ? (_o5s.houg = 2, _o5s.tais = 3, _o5s.kaih = 1, _o5s.saku = 2, _o5t = true) : 72 == _o5p.ctype || 62 == _o5p.ctype ? (_o5s.houg += 1, _o5s.tais += 2, _o5s.kaih += 1, _o5s.saku += 2, _o5t = true) : 67 != _o5p.ctype && 78 != _o5p.ctype && 82 != _o5p.ctype && 88 != _o5p.ctype && 108 != _o5p.ctype && 112 != _o5p.ctype || (_o5s.houg += 2, _o5s.tais += 2, _o5s.kaih += 2, _o5s.saku += 2, _o5t = true), 0 == _o5t) return _o5r;
            var _o5u = _o5p.get_slotnums(368);
            return _o5r.add(_o5s.multiply(_o5u)), _o5r;
        };
    },
    73973: (_o5v, _o5w, _o5x) => {
        'use strict';
        var _o5y = null;
        defineModule(_o5w);
        Object.defineProperty(_o5w, '__esModule', {
            'value': true
        }), _o5w.getSlot369PersonalEffect = void 0;
        var _o5z = _o5x(74496);
        _o5w.getSlot369PersonalEffect = function(_o60) {
            var _o61 = null,
                _o62 = new _o5z.SlotItemEffectModel(),
                _o63 = new _o5z.SlotItemEffectModel(),
                _o64 = false;
            if ('ゴトランド' == _o60.yomi && (_o63.houg = 5, _o63.tais = 4, _o63.kaih = 4, _o63.saku = 3, _o64 = true, 630 == _o60.ship_id && (_o62.houg += 3, _o62.raig += 3, _o62.kaih += 2, _o62.saku += 2)), 70 == _o60.ctype ? (_o63.houg += 3, _o63.tais += 3, _o63.kaih += 2, _o63.saku += 3, _o64 = true) : 72 == _o60.ctype || 62 == _o60.ctype ? (_o63.houg += 2, _o63.tais += 2, _o63.kaih += 1, _o63.saku += 2, _o64 = true) : 67 != _o60.ctype && 78 != _o60.ctype && 82 != _o60.ctype && 88 != _o60.ctype && 108 != _o60.ctype && 112 != _o60.ctype || (_o63.houg += 2, _o63.tais += 2, _o63.kaih += 2, _o63.saku += 2, _o64 = true), 0 == _o64) return _o62;
            var _o65 = _o60.get_slotnums(369);
            return _o62.add(_o63.multiply(_o65)), _o62;
        };
    },
    21178: (_o66, _o67, _o68) => {
        'use strict';
        var _o69 = null;
        defineModule(_o67);
        Object.defineProperty(_o67, '__esModule', {
            'value': true
        }), _o67.getSlot370PersonalEffect = void 0;
        var _o6a = _o68(74496);
        _o67.getSlot370PersonalEffect = function(_o6b) {
            var _o6c = null,
                _o6d = new _o6a.SlotItemEffectModel(),
                _o6e = new _o6a.SlotItemEffectModel(),
                _o6f = false;
            if ('ゴトランド' == _o6b.yomi && (_o6e.houg = 1, _o6e.tais = 3, _o6e.kaih = 1, _o6e.saku = 2, _o6f = true), 70 == _o6b.ctype ? (_o6e.houg += 1, _o6e.tais += 3, _o6e.kaih += 1, _o6e.saku += 1, _o6f = true) : 72 == _o6b.ctype || 62 == _o6b.ctype ? (_o6e.houg += 1, _o6e.tais += 2, _o6e.kaih += 1, _o6e.saku += 1, _o6f = true) : 67 != _o6b.ctype && 78 != _o6b.ctype && 82 != _o6b.ctype && 88 != _o6b.ctype && 108 != _o6b.ctype && 112 != _o6b.ctype || (_o6e.houg += 2, _o6e.tais += 3, _o6e.kaih += 2, _o6e.saku += 2, _o6f = true, 'ウォースパイト' == _o6b.yomi ? (_o6d.houg += 4, _o6d.kaih += 1, _o6d.saku += 1) : 'ヴァリアント' == _o6b.yomi && (_o6d.houg += 3, _o6d.kaih += 2, _o6d.saku += 1)), 0 == _o6f) return _o6d;
            var _o6g = _o6b.get_slotnums(370);
            return _o6d.add(_o6e.multiply(_o6g)), _o6d;
        };
    },
    5079: (_o6h, _o6i, _o6j) => {
        'use strict';
        var _o6k = null;
        defineModule(_o6i);
        Object.defineProperty(_o6i, '__esModule', {
            'value': true
        }), _o6i.getSlot371PersonalEffect = void 0;
        var _o6l = _o6j(74496);
        _o6i.getSlot371PersonalEffect = function(_o6m) {
            var _o6n = null,
                _o6o = new _o6l.SlotItemEffectModel(),
                _o6p = new _o6l.SlotItemEffectModel(),
                _o6q = false;
            if ('ゴトランド' == _o6m.yomi && (_o6p.houg = 4, _o6p.tais = 2, _o6p.kaih = 3, _o6p.saku = 6, _o6q = true, 630 == _o6m.ship_id && (_o6o.houg += 2, _o6o.kaih += 2, _o6o.saku += 3)), 70 == _o6m.ctype ? (_o6p.houg += 2, _o6p.tais += 1, _o6p.kaih += 2, _o6p.saku += 4, _o6q = true) : 79 == _o6m.ctype ? (_o6p.houg += 2, _o6p.kaih += 1, _o6p.saku += 3, _o6q = true) : 67 != _o6m.ctype && 78 != _o6m.ctype && 82 != _o6m.ctype && 88 != _o6m.ctype && 108 != _o6m.ctype && 112 != _o6m.ctype || (_o6p.houg += 3, _o6p.tais += 1, _o6p.kaih += 2, _o6p.saku += 3, _o6q = true, 88 == _o6m.ctype && (_o6o.houg += 3, _o6o.kaih += 2, _o6o.saku += 2)), 0 == _o6q) return _o6o;
            var _o6r = _o6m.get_slotnums(371);
            return _o6o.add(_o6p.multiply(_o6r)), _o6o;
        };
    },
    95014: (_o6s, _o6t, _o6u) => {
        'use strict';
        var _o6v = null;
        defineModule(_o6t);
        Object.defineProperty(_o6t, '__esModule', {
            'value': true
        }), _o6t.getSlot372PersonalEffect = void 0;
        var _o6w = _o6u(74496);
        _o6t.getSlot372PersonalEffect = function(_o6x) {
            var _o6y = null,
                _o6z = new _o6w.SlotItemEffectModel(),
                _o70 = false,
                _o71 = new _o6w.SlotItemEffectModel();
            if ('しょうかく' == _o6x.yomi || 'ずいかく' == _o6x.yomi || 'たいほう' == _o6x.yomi ? (_o71.houg += 1, _o70 = true, _o6z.raig += 1) : 'じゅんよう' != _o6x.yomi && 'ひよう' != _o6x.yomi || (_o71.houg += 1, _o70 = true), 108 == _o6x.ship_id || 109 == _o6x.ship_id || 291 == _o6x.ship_id || 292 == _o6x.ship_id || 296 == _o6x.ship_id || 297 == _o6x.ship_id ? (_o71.houg += 1, _o70 = true) : 116 == _o6x.ship_id || 74 == _o6x.ship_id || 117 == _o6x.ship_id || 282 == _o6x.ship_id || 185 == _o6x.ship_id ? (_o71.tais += 1, _o70 = true) : 560 == _o6x.ship_id || 555 == _o6x.ship_id || 318 == _o6x.ship_id ? (_o71.tais += 1, _o70 = true, _o6z.raig += 1) : 508 == _o6x.ship_id || 509 == _o6x.ship_id ? (_o71.houg += 1, _o70 = true) : 883 != _o6x.ship_id && 888 != _o6x.ship_id || (_o71.houg += 2, _o71.tais += 1, _o70 = true, _o6z.raig += 2), 0 == _o70) return _o6z;
            var _o72 = _o6x.get_slotnums(372);
            return _o6z.add(_o71.multiply(_o72)), _o6z;
        };
    },
    53099: (_o73, _o74, _o75) => {
        'use strict';
        var _o76 = null;
        defineModule(_o74);
        Object.defineProperty(_o74, '__esModule', {
            'value': true
        }), _o74.getSlot373PersonalEffect = void 0;
        var _o77 = _o75(74496);
        _o74.getSlot373PersonalEffect = function(_o78) {
            var _o79 = null,
                _o7a = new _o77.SlotItemEffectModel(),
                _o7b = new _o77.SlotItemEffectModel(),
                _o7c = false;
            if ('しょうかく' == _o78.yomi ? (_o7b.houg += 2, _o7c = true, _o7a.raig += 2, _o7a.kaih += 2) : 'ずいかく' == _o78.yomi ? (_o7b.houg += 1, _o7c = true, _o7a.raig += 2, _o7a.kaih += 3) : 'たいほう' == _o78.yomi ? (_o7b.houg += 1, _o7c = true, _o7a.raig += 2, _o7a.kaih += 2) : 'じゅんよう' != _o78.yomi && 'ひよう' != _o78.yomi || (_o7b.houg += 1, _o7c = true, _o7a.raig += 1, _o7a.kaih += 1), 108 == _o78.ship_id || 109 == _o78.ship_id ? (_o7b.houg += 1, _o7c = true) : 291 == _o78.ship_id || 292 == _o78.ship_id ? (_o7b.houg += 1, _o7c = true, _o7a.raig += 1) : 296 == _o78.ship_id || 297 == _o78.ship_id ? (_o7b.houg += 1, _o7c = true, _o7a.raig += 1, _o7a.kaih += 1) : 116 == _o78.ship_id || 74 == _o78.ship_id ? (_o7b.tais += 1, _o7c = true) : 117 == _o78.ship_id || 282 == _o78.ship_id || 185 == _o78.ship_id ? (_o7b.houg += 1, _o7b.tais += 1, _o7c = true, _o7a.raig += 1) : 560 == _o78.ship_id || 555 == _o78.ship_id || 318 == _o78.ship_id ? (_o7b.houg += 1, _o7b.tais += 2, _o7c = true, _o7a.raig += 1, _o7a.kaih += 1) : 508 == _o78.ship_id || 509 == _o78.ship_id ? (_o7b.houg += 1, _o7c = true, _o7a.raig += 2, _o7a.kaih += 2) : 888 == _o78.ship_id ? (_o7b.houg += 2, _o7b.tais += 2, _o7c = true, _o7a.raig += 2, _o7a.kaih += 2) : 883 == _o78.ship_id && (_o7b.houg += 1, _o7b.tais += 2, _o7c = true, _o7a.raig += 3, _o7a.kaih += 4), 0 == _o7c) return _o7a;
            var _o7d = _o78.get_slotnums(373);
            return _o7a.add(_o7b.multiply(_o7d)), _o7a;
        };
    },
    76201: (_o7e, _o7f, _o7g) => {
        'use strict';
        var _o7h = null;
        defineModule(_o7f);
        Object.defineProperty(_o7f, '__esModule', {
            'value': true
        }), _o7f.getSlot374PersonalEffect = void 0;
        var _o7i = _o7g(74496);
        _o7f.getSlot374PersonalEffect = function(_o7j) {
            var _o7k = null,
                _o7l = new _o7i.SlotItemEffectModel(),
                _o7m = new _o7i.SlotItemEffectModel(),
                _o7n = false;
            if ('しょうかく' == _o7j.yomi ? (_o7m.houg += 3, _o7n = true, _o7l.raig += 3, _o7l.kaih += 3) : 'ずいかく' == _o7j.yomi ? (_o7m.houg += 2, _o7n = true, _o7l.raig += 3, _o7l.kaih += 4) : 'たいほう' == _o7j.yomi ? (_o7m.houg += 2, _o7n = true, _o7l.raig += 3, _o7l.kaih += 2) : 'じゅんよう' != _o7j.yomi && 'ひよう' != _o7j.yomi || (_o7m.houg += 1, _o7n = true, _o7l.raig += 2, _o7l.kaih += 2), 108 == _o7j.ship_id || 109 == _o7j.ship_id ? (_o7m.houg += 1, _o7n = true, _o7l.raig += 1) : 291 == _o7j.ship_id || 292 == _o7j.ship_id ? (_o7m.houg += 1, _o7m.tais += 1, _o7n = true, _o7l.raig += 1) : 296 == _o7j.ship_id || 297 == _o7j.ship_id ? (_o7m.houg += 1, _o7m.tais += 1, _o7n = true, _o7l.raig += 1, _o7l.kaih += 1) : 116 == _o7j.ship_id || 74 == _o7j.ship_id ? (_o7m.houg += 1, _o7m.tais += 1, _o7n = true) : 117 == _o7j.ship_id || 282 == _o7j.ship_id || 185 == _o7j.ship_id ? (_o7m.houg += 1, _o7m.tais += 2, _o7n = true, _o7l.raig += 1, _o7l.kaih += 1) : 560 == _o7j.ship_id || 555 == _o7j.ship_id || 318 == _o7j.ship_id ? (_o7m.houg += 1, _o7m.tais += 3, _o7n = true, _o7l.raig += 1, _o7l.kaih += 2) : 508 == _o7j.ship_id || 509 == _o7j.ship_id ? (_o7m.houg += 1, _o7m.tais += 2, _o7n = true, _o7l.raig += 2, _o7l.kaih += 3) : 888 == _o7j.ship_id ? (_o7m.houg += 3, _o7m.tais += 3, _o7n = true, _o7l.raig += 2, _o7l.kaih += 3) : 883 == _o7j.ship_id && (_o7m.houg += 2, _o7m.tais += 3, _o7n = true, _o7l.raig += 3, _o7l.kaih += 5), 0 == _o7n) return _o7l;
            var _o7o = _o7j.get_slotnums(374);
            return _o7l.add(_o7m.multiply(_o7o)), _o7l;
        };
    },
    24931: (_o7p, _o7q, _o7r) => {
        'use strict';
        var _o7s = null;
        defineModule(_o7q);
        Object.defineProperty(_o7q, '__esModule', {
            'value': true
        }), _o7q.getSlot375PersonalEffect = void 0;
        var _o7t = _o7r(74496);
        _o7q.getSlot375PersonalEffect = function(_o7u) {
            var _o7v = null,
                _o7w = new _o7t.SlotItemEffectModel(),
                _o7x = new _o7t.SlotItemEffectModel(),
                _o7y = false;
            if (69 != _o7u.ctype && 83 != _o7u.ctype && 84 != _o7u.ctype && 105 != _o7u.ctype && 116 != _o7u.ctype && 118 != _o7u.ctype || (_o7x.tyku += 3, _o7x.houg += 3, _o7x.kaih += 3, _o7x.tais += 3, _o7y = true), 'かが' == _o7u.yomi && (_o7x.tyku += 1, _o7x.houg += 1, _o7x.kaih += 1, _o7x.tais += 1, _o7y = true), 0 == _o7y) return _o7w;
            var _o7z = _o7u.get_slotnums(375);
            return _o7w.add(_o7x.multiply(_o7z)), _o7w;
        };
    },
    60978: (_o80, _o81, _o82) => {
        'use strict';
        var _o83 = null;
        defineModule(_o81);
        Object.defineProperty(_o81, '__esModule', {
            'value': true
        }), _o81.getSlot376PersonalEffect = void 0;
        var _o84 = _o82(74496);
        _o81.getSlot376PersonalEffect = function(_o85) {
            var _o86 = null,
                _o87 = new _o84.SlotItemEffectModel(),
                _o88 = new _o84.SlotItemEffectModel(),
                _o89 = false;
            if ('アメリカ' == _o85.getCountryName() ? (_o88.houg += 2, _o88.raig += 4, _o89 = true) : 67 == _o85.ctype || 78 == _o85.ctype || 82 == _o85.ctype || 88 == _o85.ctype || 108 == _o85.ctype || 112 == _o85.ctype ? (_o88.houg += 1, _o88.raig += 2, _o89 = true) : 96 == _o85.ctype && (_o88.houg += 1, _o88.raig += 1, _o89 = true), 0 == _o89) return _o87;
            var _o8a = _o85.get_slotnums(376);
            return _o87.add(_o88.multiply(_o8a)), _o87;
        };
    },
    74312: (_o8b, _o8c, _o8d) => {
        'use strict';
        var _o8e = null;
        defineModule(_o8c);
        Object.defineProperty(_o8c, '__esModule', {
            'value': true
        }), _o8c.getSlot377PersonalEffect = void 0;
        var _o8f = _o8d(74496);
        _o8c.getSlot377PersonalEffect = function(_o8g) {
            var _o8h = null,
                _o8i = new _o8f.SlotItemEffectModel();
            return 'アメリカ' == _o8g.getCountryName() ? (_o8i.tais += 2, _o8i.kaih += 1, 629 == _o8g.ship_id && (_o8i.tais += 1, _o8i.kaih += 2)) : 67 != _o8g.ctype && 78 != _o8g.ctype && 82 != _o8g.ctype && 88 != _o8g.ctype && 108 != _o8g.ctype && 112 != _o8g.ctype && 96 != _o8g.ctype || (_o8i.tais += 1, _o8i.kaih += 1), 651 != _o8g.ship_id && 656 != _o8g.ship_id || (_o8i.tais += 1, _o8i.kaih += 2), _o8i;
        };
    },
    54350: (_o8j, _o8k, _o8l) => {
        'use strict';
        var _o8m = null;
        defineModule(_o8k);
        Object.defineProperty(_o8k, '__esModule', {
            'value': true
        }), _o8k.getSlot378PersonalEffect = void 0;
        var _o8n = _o8l(74496);
        _o8k.getSlot378PersonalEffect = function(_o8o) {
            var _o8p = null,
                _o8q = new _o8n.SlotItemEffectModel();
            return 'アメリカ' == _o8o.getCountryName() ? (_o8q.tais += 3, _o8q.kaih += 1, 629 == _o8o.ship_id && (_o8q.tais += 1, _o8q.kaih += 1)) : 67 == _o8o.ctype || 78 == _o8o.ctype || 82 == _o8o.ctype || 88 == _o8o.ctype || 108 == _o8o.ctype || 112 == _o8o.ctype ? (_o8q.tais += 2, _o8q.kaih += 1) : 96 == _o8o.ctype && (_o8q.tais += 1, _o8q.kaih += 1), 651 != _o8o.ship_id && 656 != _o8o.ship_id || (_o8q.tais += 1, _o8q.kaih += 1), _o8q;
        };
    },
    26262: function(_o8r, _o8s, _o8t) {
        'use strict';
        var _o8u = null;
        var _o8v = this && this.__importDefault || function(_o8w) {
            var _o8x = null;
            return _o8w && _o8w.__esModule ? _o8w : {
                'default': _o8w
            };
        };
        defineModule(_o8s);
        Object.defineProperty(_o8s, '__esModule', {
            'value': true
        }), _o8s.getSlot379PersonalEffect = void 0;
        var _o8y = _o8t(74496),
            _o8z = _o8v(_o8t(18622));
        _o8s.getSlot379PersonalEffect = function(_o90) {
            var _o91 = null,
                _o92 = new _o8y.SlotItemEffectModel(),
                _o93 = false,
                _o94 = new _o8y.SlotItemEffectModel();
            if (1 == _o90.stype ? (_o94.tyku += 2, _o94.houg += 1, _o93 = true) : 21 != _o90.stype && 16 != _o90.stype || (_o94.tyku += 1, _o94.houg += 1, _o93 = true), 66 == _o90.ctype || 28 == _o90.ctype ? (_o94.houg += 1, _o94.tyku += 2, _o93 = true) : 101 == _o90.ctype && (_o94.tyku += 2, _o94.houg += 1, _o92.tyku += 2, _o92.houg += 2, _o93 = true), 'ゆら' == _o90.yomi || 'なか' == _o90.yomi || 'きぬ' == _o90.yomi || 'いすず' == _o90.yomi ? (_o94.houg += 2, _o93 = true) : 'おおい' != _o90.yomi && 'きたかみ' != _o90.yomi || (_o94.tyku += 2, _o94.houg += 2, _o93 = true), 'ゆら' != _o90.yomi && 'なか' != _o90.yomi && 'きぬ' != _o90.yomi && 'いすず' != _o90.yomi && 'ゆうばり' != _o90.yomi || (_o94.tais += 1, _o93 = true), 'てんりゅう' != _o90.yomi && 'たつた' != _o90.yomi && 'ゆうばり' != _o90.yomi || (_o94.houg += 1, _o93 = true), 488 == _o90.ship_id ? (_o94.tyku += 4, _o93 = true) : 220 == _o90.ship_id ? (_o94.tyku += 3, _o93 = true) : 23 == _o90.ship_id ? (_o94.tyku += 2, _o93 = true) : 160 == _o90.ship_id || 487 == _o90.ship_id || 141 == _o90.ship_id ? (_o94.tyku += 3, _o93 = true) : 224 == _o90.ship_id || 289 == _o90.ship_id || 219 == _o90.ship_id || 56 == _o90.ship_id || 113 == _o90.ship_id || 22 == _o90.ship_id ? (_o94.tyku += 2, _o93 = true) : 651 != _o90.ship_id && 656 != _o90.ship_id || (_o94.tyku += 3, _o94.houg += 3, 656 == _o90.ship_id && (_o94.kaih += 3, _o94.tais += 2), _o93 = true), 488 != _o90.ship_id && 160 != _o90.ship_id && 487 != _o90.ship_id && 141 != _o90.ship_id || (_o94.tais += 1, _o93 = true), 477 != _o90.ship_id && 478 != _o90.ship_id && 624 != _o90.ship_id || (_o94.tais += 2, _o93 = true), 477 != _o90.ship_id && 478 != _o90.ship_id && 624 != _o90.ship_id && 622 != _o90.ship_id || (_o94.tyku += 2, _o93 = true), 652 != _o90.ship_id && 657 != _o90.ship_id && 547 != _o90.ship_id && 146 != _o90.ship_id || (_o92.houg += 2), 652 != _o90.ship_id && 657 != _o90.ship_id && 547 != _o90.ship_id && 146 != _o90.ship_id || (_o92.tyku += 2), _o93) {
                var _o95 = _o90.get_slotnums(379);
                _o92.add(_o94.multiply(_o95));
            }
            var _o96 = new _o8y.SlotItemEffectModel(),
                _o97 = false;
            16 == _o90.stype || 3 == _o90.stype || 4 == _o90.stype || 21 == _o90.stype ? (_o96.houg += 1, _o96.kaih += 2, _o97 = true) : 1 == _o90.stype && (_o96.houg += 1, _o96.kaih += 4, _o97 = true), 66 == _o90.ctype || 28 == _o90.ctype || 21 == _o90.ctype || 34 == _o90.ctype ? (_o96.houg += 2, _o96.kaih += 3, _o97 = true) : 101 == _o90.ctype && (_o96.houg += 4, _o96.kaih += 3, _o97 = true), 488 == _o90.ship_id || 651 == _o90.ship_id || 656 == _o90.ship_id ? (_o96.houg += 2, _o96.kaih += 2, _o97 = true) : 487 == _o90.ship_id || 160 == _o90.ship_id || 141 == _o90.ship_id || 118 == _o90.ship_id || 119 == _o90.ship_id ? (_o96.houg += 1, _o96.kaih += 1, _o97 = true) : 652 != _o90.ship_id && 657 != _o90.ship_id && 547 != _o90.ship_id && 146 != _o90.ship_id || (_o96.houg += 1, _o96.kaih += 1, _o97 = true);
            var _o98 = new _o8y.SlotItemEffectModel(),
                _o99 = false;
            if (656 == _o90.ship_id && (_o98.tyku += 3, _o98.kaih += 2, _o99 = true), _o97 || _o99) {
                for (var _o9a = 0, _o9b = 0, _o9c = 0, _o9d = _o90.have_slot_ids(); _o9c < _o9d.length; _o9c++) {
                    var _o9e = _o9d[_o9c],
                        _o9f = _o8z.default.model.slot.getMst(_o9e),
                        _o9g = _o9f.equipType;
                    12 != _o9g && 13 != _o9g || (_o9f.sakuteki >= 5 && (_o9a += _o90.get_slotnums(parseInt(_o9e))), _o9f.taiku >= 2 && (_o9b += _o90.get_slotnums(parseInt(_o9e))));
                }
                _o97 && _o9a > 0 && _o92.add(_o96), _o99 && _o9b > 0 && _o92.add(_o98);
            }
            return _o92;
        };
    },
    45530: function(_o9h, _o9i, _o9j) {
        'use strict';
        var _o9k = null;
        var _o9l = this && this.__importDefault || function(_o9m) {
            var _o9n = null;
            return _o9m && _o9m.__esModule ? _o9m : {
                'default': _o9m
            };
        };
        defineModule(_o9i);
        Object.defineProperty(_o9i, '__esModule', {
            'value': true
        }), _o9i.getSlot380PersonalEffect = void 0;
        var _o9o = _o9j(74496),
            _o9p = _o9l(_o9j(18622));
        _o9i.getSlot380PersonalEffect = function(_o9q) {
            var _o9r = null,
                _o9s = new _o9o.SlotItemEffectModel(),
                _o9t = false,
                _o9u = new _o9o.SlotItemEffectModel();
            if (21 != _o9q.stype && 16 != _o9q.stype || (_o9u.tyku += 2, _o9u.houg += 1, _o9t = true), 101 == _o9q.ctype && (_o9u.tyku += 2, _o9u.houg += 1, _o9t = true, _o9s.tyku += 2, _o9s.houg += 2), 'ゆら' == _o9q.yomi || 'なか' == _o9q.yomi || 'きぬ' == _o9q.yomi || 'いすず' == _o9q.yomi ? (_o9u.houg += 2, _o9t = true) : 'おおい' != _o9q.yomi && 'きたかみ' != _o9q.yomi || (_o9u.tyku += 2, _o9u.houg += 3, _o9t = true), 'ゆら' != _o9q.yomi && 'なか' != _o9q.yomi && 'きぬ' != _o9q.yomi && 'いすず' != _o9q.yomi && 'ゆうばり' != _o9q.yomi || (_o9u.tais += 1, _o9t = true), 'てんりゅう' != _o9q.yomi && 'たつた' != _o9q.yomi && 'ゆうばり' != _o9q.yomi || (_o9u.houg += 1, _o9t = true), 488 == _o9q.ship_id ? (_o9u.tyku += 4, _o9t = true) : 220 == _o9q.ship_id ? (_o9u.tyku += 3, _o9t = true) : 23 == _o9q.ship_id ? (_o9u.tyku += 2, _o9t = true) : 160 == _o9q.ship_id || 487 == _o9q.ship_id || 141 == _o9q.ship_id ? (_o9u.tyku += 3, _o9t = true) : 224 == _o9q.ship_id || 289 == _o9q.ship_id || 219 == _o9q.ship_id || 56 == _o9q.ship_id || 113 == _o9q.ship_id || 22 == _o9q.ship_id ? (_o9u.tyku += 2, _o9t = true) : 651 == _o9q.ship_id || 656 == _o9q.ship_id ? (_o9u.tyku += 3, _o9u.houg += 3, _o9t = true) : 407 != _o9q.ship_id && 665 != _o9q.ship_id || (_o9u.houg += 2, _o9u.tyku += 2, _o9t = true, _o9s.houg += 1, _o9s.tyku += 1, _o9s.kaih += 2), 488 != _o9q.ship_id && 160 != _o9q.ship_id && 487 != _o9q.ship_id && 141 != _o9q.ship_id || (_o9u.tais += 1, _o9t = true), 477 != _o9q.ship_id && 478 != _o9q.ship_id && 624 != _o9q.ship_id || (_o9u.tais += 2, _o9t = true), 477 != _o9q.ship_id && 478 != _o9q.ship_id && 624 != _o9q.ship_id && 622 != _o9q.ship_id || (_o9u.tyku += 2, _o9t = true), 652 != _o9q.ship_id && 657 != _o9q.ship_id || (_o9u.houg += 3, _o9t = true), 547 != _o9q.ship_id && 146 != _o9q.ship_id || (_o9s.houg += 2), 652 != _o9q.ship_id && 657 != _o9q.ship_id && 547 != _o9q.ship_id && 146 != _o9q.ship_id || (_o9s.tyku += 2), _o9t) {
                var _o9v = _o9q.get_slotnums(380);
                _o9s.add(_o9u.multiply(_o9v));
            }
            var _o9w = new _o9o.SlotItemEffectModel(),
                _o9x = false,
                _o9y = new _o9o.SlotItemEffectModel(),
                _o9z = false,
                _oa0 = false;
            if (16 != _o9q.stype && 3 != _o9q.stype && 4 != _o9q.stype && 21 != _o9q.stype || (_o9w.houg += 2, _o9w.kaih += 1, _o9x = true), 101 == _o9q.ctype && (_o9w.houg += 4, _o9w.kaih += 3, _o9x = true), 488 != _o9q.ship_id && 487 != _o9q.ship_id && 160 != _o9q.ship_id && 141 != _o9q.ship_id && 118 != _o9q.ship_id && 119 != _o9q.ship_id && 651 != _o9q.ship_id && 656 != _o9q.ship_id || (_o9w.houg += 1, _o9w.kaih += 2, _o9x = true), 652 == _o9q.ship_id || 657 == _o9q.ship_id || 547 == _o9q.ship_id || 146 == _o9q.ship_id ? (_o9w.houg += 1, _o9w.kaih += 3, _o9x = true) : 407 != _o9q.ship_id && 665 != _o9q.ship_id || (_oa0 = true, _o9x = true, _o9w.houg += 2, _o9w.kaih += 1, _o9z = true, _o9y.houg += 1, _o9y.tyku += 2, _o9y.kaih += 1), _o9x || _oa0) {
                for (var _oa1 = 0, _oa2 = 0, _oa3 = 0, _oa4 = _o9q.have_slot_ids(); _oa3 < _oa4.length; _oa3++) {
                    var _oa5 = _oa4[_oa3],
                        _oa6 = _o9p.default.model.slot.getMst(_oa5),
                        _oa7 = _oa6.equipType;
                    12 == _oa7 || 13 == _oa7 ? _oa6.sakuteki >= 5 && (_oa1 += _o9q.get_slotnums(parseInt(_oa5))) : 21 == _oa7 && (_oa2 += _o9q.get_slotnums(parseInt(_oa5)));
                }
                _o9x && _oa1 > 0 && _o9s.add(_o9w), _o9z && _oa2 > 0 && _o9s.add(_o9y);
            }
            return _o9s;
        };
    },
    44053: (_oa8, _oa9, _oaa) => {
        'use strict';
        var _oab = null;
        defineModule(_oa9);
        Object.defineProperty(_oa9, '__esModule', {
            'value': true
        }), _oa9.getSlot381PersonalEffect = void 0;
        var _oac = _oaa(74496);
        _oa9.getSlot381PersonalEffect = function(_oad) {
            var _oae = null,
                _oaf = new _oac.SlotItemEffectModel(),
                _oag = false,
                _oah = new _oac.SlotItemEffectModel(),
                _oai = 0;
            if ('アメリカ' == _oad.getCountryName() && (_oah.houg += 1, 102 == _oad.ctype && (_oah.houg += 1), _oag = true, _oai = 1), 0 == _oag) return _oaf;
            var _oaj = _oad.get_slotnums(381);
            if (_oaf.add(_oah.multiply(_oaj)), 0 == _oai) return _oaf;
            var _oak = _oad.get_each_level_nums(381),
                _oal = 0;
            return _oak.map(function(_oam, _oan) {
                _oan >= 6 && (_oal += _oam);
            }), 1 == _oai && (_oaf.houg += 1 * _oal), _oaf;
        };
    },
    65441: function(_oao, _oap, _oaq) {
        'use strict';
        var _oar = null;
        var _oas = this && this.__importDefault || function(_oat) {
            var _oau = null;
            return _oat && _oat.__esModule ? _oat : {
                'default': _oat
            };
        };
        defineModule(_oap);
        Object.defineProperty(_oap, '__esModule', {
            'value': true
        }), _oap.getSlot382PersonalEffect = void 0;
        var _oav = _oaq(74496),
            _oaw = _oas(_oaq(18622));
        _oap.getSlot382PersonalEffect = function(_oax) {
            var _oay = null,
                _oaz = new _oav.SlotItemEffectModel(),
                _ob0 = false,
                _ob1 = new _oav.SlotItemEffectModel(),
                _ob2 = false,
                _ob3 = new _oav.SlotItemEffectModel(),
                _ob4 = new _oav.SlotItemEffectModel(),
                _ob5 = {},
                _ob6 = 2,
                _ob7 = [];
            1 == _oax.stype && (_ob1.tyku += 2, _ob1.kaih += 2, _ob1.tais += 1, _ob0 = true, _ob3.houg += 2, _ob3.kaih += 3, _ob4.tyku += 2, _ob4.kaih += 3, _ob2 = true, _ob6 = 1), 66 != _oax.ctype && 28 != _oax.ctype && 101 != _oax.ctype || (_ob1.tyku += 2, _ob1.kaih += 1, _ob0 = true, _ob3.houg += 1, _ob3.kaih += 2, _ob4.tyku += 2, _ob4.kaih += 2, _ob2 = true, _ob6 = 1), 'ゆら' != _oax.yomi && 'なか' != _oax.yomi && 'きぬ' != _oax.yomi || (_ob1.tyku += 1, _ob0 = true), 488 == _oax.ship_id || 220 == _oax.ship_id ? (_ob1.kaih += 1, _ob0 = true, 488 == _oax.ship_id && (_ob3.houg += 1, _ob3.kaih += 1, _ob4.tyku += 2, _ob4.kaih += 2, _ob2 = true, _ob6 = 1)) : 160 == _oax.ship_id || 224 == _oax.ship_id ? (_ob1.kaih += 1, _ob0 = true, 160 == _oax.ship_id && (_ob3.houg += 1, _ob3.kaih += 1, _ob4.tyku += 2, _ob4.kaih += 2, _ob2 = true)) : 487 == _oax.ship_id || 289 == _oax.ship_id ? (_ob1.kaih += 1, _ob0 = true, 487 == _oax.ship_id && (_ob3.houg += 1, _ob3.kaih += 1, _ob4.tyku += 2, _ob4.kaih += 2, _ob2 = true)) : 656 == _oax.ship_id ? (_ob1.tyku += 3, _ob1.kaih += 2, _ob0 = true, _ob3.houg += 2, _ob3.kaih += 2, _ob4.tyku += 3, _ob4.kaih += 2, _ob2 = true, _ob6 = 1) : 145 == _oax.ship_id || 961 == _oax.ship_id ? _ob6 = 1 : 979 == _oax.ship_id && (_ob1.houg += 1, _ob1.tyku += 1, _ob1.houm += 1, _ob1.kaih += 1, _ob5[509] = new _oav.SlotItemEffectModel(), _ob5[509].houm += 1, _ob0 = true, _ob7[1] = 1);
            for (var _ob8 = 0, _ob9 = 0, _oba = 0, _obb = _oax.have_slot_ids(); _oba < _obb.length; _oba++) {
                var _obc = _obb[_oba],
                    _obd = _oaw.default.model.slot.getMst(_obc),
                    _obe = _obd.equipType;
                12 != _obe && 13 != _obe || (_obd.sakuteki >= 5 && (_ob8 += _oax.get_slotnums(parseInt(_obc))), _obd.taiku >= 2 && (_ob9 += _oax.get_slotnums(parseInt(_obc))));
            }
            for (var _obf = [], _obg = function(_obh) {
                    var _obi = null;
                    if (null == _oax.have_slots_dict[_obh]) return 'continue';
                    var _obj = _oax.get_each_level_nums(_obh);
                    null == _obf[_obh] && (_obf[_obh] = []), _obj.forEach(function(_obk, _obl) {
                        var _obm = null;
                        for (var _obn = 1; _obn <= _oax.SLOT_LEVEL_MAX; _obn++) null == _obf[_obh][_obn] && (_obf[_obh][_obn] = 0), _obl >= _obn && (_obf[_obh][_obn] += _obk);
                    });
                }, _obo = 0, _obp = [509]; _obo < _obp.length; _obo++) {
                _obg(_obp[_obo]);
            }
            var _obq = 0,
                _obr = 0,
                _obs = 0,
                _obt = 0,
                _obu = 0,
                _obv = 0,
                _obw = 0,
                _obx = 0,
                _oby = 0,
                _obz = 0;
            null != _obf[509] && (_obq = _obf[509][1], _obr = _obf[509][2], _obs = _obf[509][3], _obt = _obf[509][4], _obu = _obf[509][5], _obv = _obf[509][6], _obw = _obf[509][7], _obx = _obf[509][8], _oby = _obf[509][9], _obz = _obf[509][10], null != _ob7[1] && (_obs >= 1 && (_oaz.kaih += 1 * _obs), _obu >= 1 && (_oaz.houg += 1 * _obu), _obw >= 1 && (_oaz.tyku += 2 * _obw), _oby >= 1 && (_oaz.houm += 1 * _oby), _obz >= 1 && (_oaz.houg += 1 * _obz)), 1 == _ob6 ? (_obq >= 1 && (_oaz.tyku += 1 * _obq), _obr >= 1 && (_oaz.kaih += 2 * _obr), _obt >= 1 && (_oaz.houg += 1 * _obt), _obv >= 1 && (_oaz.tyku += 1 * _obv), _obx >= 1 && (_oaz.houm += 1 * _obx), _obz >= 1 && (_oaz.tyku += 1 * _obz)) : 2 == _ob6 && (_obr >= 1 && (_oaz.tyku += 1 * _obr), _obt >= 1 && (_oaz.kaih += 2 * _obt), _obv >= 1 && (_oaz.houg += 1 * _obv), _obx >= 1 && (_oaz.tyku += 1 * _obx), _obz >= 1 && (_oaz.houm += 1 * _obz)));
            var _oc0 = _oax.get_slotnums(509),
                _oc1 = _oc0 + _oax.get_slotnums(382);
            return _ob0 && (_oaz.add(_ob1.multiply(_oc1)), Object.keys(_ob5).forEach(function(_oc2) {
                var _oc3 = null,
                    _oc4 = parseInt(_oc2);
                if (null != _oax.have_slots_dict[_oc4]) {
                    var _oc5 = _oax.get_slotnums(_oc4);
                    _oaz.add(_ob5[_oc4].multiply(_oc5));
                }
            })), 3 != _oax.stype && 21 != _oax.stype && 4 != _oax.stype || _obr >= 1 && (_ob8 > 0 && (_oaz.houg += 1, _oaz.kaih += 1), _ob9 > 0 && (_oaz.tyku += 2, _oaz.kaih += 1)), 145 == _oax.ship_id ? _obr >= 1 && (_ob8 > 0 && (_oaz.houg += 1, _oaz.tyku += 1, _oaz.kaih += 2), _ob9 > 0 && (_oaz.tyku += 4, _oaz.kaih += 2)) : 961 != _oax.ship_id && 979 != _oax.ship_id || _oc0 > 0 && (_ob8 > 0 && (_oaz.houg += 2, _oaz.tyku += 2, _oaz.kaih += 3), _ob9 > 0 && (_oaz.houg += 1, _oaz.tyku += 5, _oaz.kaih += 3)), _ob2 && _ob8 > 0 && _oaz.add(_ob3), _ob2 && _ob9 > 0 && _oaz.add(_ob4), _oaz;
        };
    },
    33258: (_oc6, _oc7, _oc8) => {
        'use strict';
        var _oc9 = null;
        defineModule(_oc7);
        Object.defineProperty(_oc7, '__esModule', {
            'value': true
        }), _oc7.getSlot383PersonalEffect = void 0;
        var _oca = _oc8(74496);
        _oc7.getSlot383PersonalEffect = function(_ocb) {
            var _occ = null,
                _ocd = new _oca.SlotItemEffectModel(),
                _oce = false,
                _ocf = new _oca.SlotItemEffectModel(),
                _ocg = _ocb.get_each_level_over_nums([383]).slot[383];
            if (44 == _ocb.ctype && (_ocf.raig += 2, _oce = true, _ocg[4] > 0 && (_ocd.raig += 1), _ocg[6] > 0 && (_ocd.houm += 1)), 'い58' == _ocb.yomi && (_ocf.raig += 1, _oce = true), 636 == _ocb.ship_id ? (_ocf.raig += 3, _oce = true) : 607 == _ocb.ship_id && (_ocf.raig += 4, _oce = true), _ocg[8] > 0 && (_ocd.raig += 1), _ocg[10] > 0 && (_ocd.houm += 1), 'い58' != _ocb.yomi && 'い47' != _ocb.yomi || _ocg[5] > 0 && (_ocd.houm += 1), 0 == _oce) return _ocd;
            var _och = _ocb.get_slotnums(383);
            return _ocd.add(_ocf.multiply(_och)), _ocd;
        };
    },
    92168: (_oci, _ocj, _ock) => {
        'use strict';
        var _ocl = null;
        defineModule(_ocj);
        Object.defineProperty(_ocj, '__esModule', {
            'value': true
        }), _ocj.getSlot384PersonalEffect = void 0;
        var _ocm = _ock(74496);
        _ocj.getSlot384PersonalEffect = function(_ocn) {
            var _oco = null,
                _ocp = new _ocm.SlotItemEffectModel(),
                _ocq = false,
                _ocr = new _ocm.SlotItemEffectModel();
            44 == _ocn.ctype && (_ocr.kaih += 3, _ocq = true), 'い58' == _ocn.yomi && (_ocr.kaih += 2, _ocq = true), 636 == _ocn.ship_id ? (_ocr.kaih += 3, _ocq = true) : 607 == _ocn.ship_id && (_ocr.kaih += 4, _ocq = true);
            var _ocs = _ocn.get_slotnums(384);
            _ocq && _ocp.add(_ocr.multiply(_ocs));
            var _oct = _ocs,
                _ocu = _ocn.get_slotnums(213),
                _ocv = _ocn.get_slotnums(214),
                _ocw = _ocn.get_slotnums(383);
            return _oct > 0 && _ocu + _ocv + _ocw > 0 && (_ocp.raig += 3, _ocp.kaih += 2), _ocp;
        };
    },
    85975: (_ocx, _ocy, _ocz) => {
        'use strict';
        var _od0 = null;
        defineModule(_ocy);
        Object.defineProperty(_ocy, '__esModule', {
            'value': true
        }), _ocy.getSlot385PersonalEffect = void 0;
        var _od1 = _ocz(74496);
        _ocy.getSlot385PersonalEffect = function(_od2) {
            var _od3 = null,
                _od4 = new _od1.SlotItemEffectModel(),
                _od5 = false,
                _od6 = new _od1.SlotItemEffectModel(),
                _od7 = 0;
            if ('アメリカ' == _od2.getCountryName() && (_od6.houg += 1, 102 == _od2.ctype || 107 == _od2.ctype ? (_od6.houg += 1, _od6.souk += 1) : 93 == _od2.ctype && (_od6.houg += 1), _od5 = true, _od7 = 1), 8 == _od2.stype && (_od6.houg += 1, _od5 = true), 0 == _od5) return _od4;
            var _od8 = _od2.get_slotnums(385);
            if (_od4.add(_od6.multiply(_od8)), 0 == _od7) return _od4;
            var _od9 = _od2.get_each_level_nums(385),
                _oda = 0;
            return _od9.forEach(function(_odb, _odc) {
                _odc >= 6 && (_oda += _odb);
            }), 1 == _od7 && (_od4.houg += 1 * _oda, _od4.souk += 1 * _od9[10]), _od4;
        };
    },
    98467: (_odd, _ode, _odf) => {
        'use strict';
        var _odg = null;
        defineModule(_ode);
        Object.defineProperty(_ode, '__esModule', {
            'value': true
        }), _ode.getSlot386PersonalEffect = void 0;
        var _odh = _odf(74496);
        _ode.getSlot386PersonalEffect = function(_odi) {
            var _odj = null,
                _odk = new _odh.SlotItemEffectModel(),
                _odl = false,
                _odm = new _odh.SlotItemEffectModel(),
                _odn = 0;
            if ('アメリカ' == _odi.getCountryName() && (_odm.houg += 1, _odl = true, _odn = 1), 0 == _odl) return _odk;
            var _odo = _odi.get_slotnums(386);
            if (_odk.add(_odm.multiply(_odo)), 0 == _odn) return _odk;
            var _odp = _odi.get_each_level_nums(386),
                _odq = 0,
                _odr = 0;
            return _odp.forEach(function(_ods, _odt) {
                _odt >= 2 && (_odq += _ods), _odt >= 7 && (_odr += _ods);
            }), 1 == _odn && (_odk.houg += 1 * _odq, _odk.houg += 1 * _odr), _odk;
        };
    },
    88348: (_odu, _odv, _odw) => {
        'use strict';
        var _odx = null;
        defineModule(_odv);
        Object.defineProperty(_odv, '__esModule', {
            'value': true
        }), _odv.getSlot387PersonalEffect = void 0;
        var _ody = _odw(74496);
        _odv.getSlot387PersonalEffect = function(_odz) {
            var _oe0 = null,
                _oe1 = new _ody.SlotItemEffectModel(),
                _oe2 = false,
                _oe3 = new _ody.SlotItemEffectModel(),
                _oe4 = 0;
            if ('アメリカ' == _odz.getCountryName() && (_oe3.houg += 1, _oe2 = true, _oe4 = 1), 0 == _oe2) return _oe1;
            var _oe5 = _odz.get_slotnums(387);
            if (_oe1.add(_oe3.multiply(_oe5)), 0 == _oe4) return _oe1;
            var _oe6 = _odz.get_each_level_nums(387),
                _oe7 = 0,
                _oe8 = 0;
            return _oe6.forEach(function(_oe9, _oea) {
                _oea >= 2 && (_oe7 += _oe9), _oea >= 7 && (_oe8 += _oe9);
            }), 1 == _oe4 && (_oe1.houg += 1 * _oe7, _oe1.houg += 1 * _oe8), _oe1;
        };
    },
    21097: (_oeb, _oec, _oed) => {
        'use strict';
        var _oee = null;
        defineModule(_oec);
        Object.defineProperty(_oec, '__esModule', {
            'value': true
        }), _oec.getSlot389PersonalEffect = void 0;
        var _oef = _oed(74496);
        _oec.getSlot389PersonalEffect = function(_oeg) {
            var _oeh = null,
                _oei = new _oef.SlotItemEffectModel(),
                _oej = false,
                _oek = new _oef.SlotItemEffectModel();
            if (594 == _oeg.ship_id || 599 == _oeg.ship_id) _oek.houg += 2, _oek.kaih += 2, _oej = true;
            else {
                if (698 == _oeg.ship_id || 610 == _oeg.ship_id) _oek.houg += 3, _oek.kaih += 2, _oej = true;
                else 646 == _oeg.ship_id && (_oek.houg += 4, _oek.tais += 4, _oek.kaih += 3, _oej = true, _oeg.get_type3_nums(25) > 0 && (_oei.houg += 3, _oei.tais += 6), _oeg.get_slotnums(326) + _oeg.get_slotnums(327) > 0 && (_oei.houg += 5, _oei.tais += 4));
            }
            if ('アメリカ' == _oeg.getCountryName() && (_oek.houg += 2, _oek.tais += 3, _oek.kaih += 1, _oej = true), 0 == _oej) return _oei;
            var _oel = _oeg.get_slotnums(389);
            return _oei.add(_oek.multiply(_oel)), _oei;
        };
    },
    43607: (_oem, _oen, _oeo) => {
        'use strict';
        var _oep = null;
        defineModule(_oen);
        Object.defineProperty(_oen, '__esModule', {
            'value': true
        }), _oen.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _oeq = _oeo(74496);
        _oen.getSlot38cmFourBarrelGunPersonalEffect = function(_oer) {
            var _oes = null,
                _oet = new _oeq.SlotItemEffectModel(),
                _oeu = _oer.get_slotnums(245),
                _oev = _oer.get_slotnums(246),
                _oew = _oer.get_slotnums(468),
                _oex = _oeu + _oev + _oew,
                _oey = 0,
                _oez = 0;
            if (79 != _oer.ctype) return _oet;
            _oet.houg += 2 * _oex, _oet.houm += 1 * _oex, _oew >= 1 && (_oet.houg += 1 * _oew, _oez = 1), _oey = 1;
            var _of0 = _oer.get_slotnums(247),
                _of1 = _oer.get_slotnums(471) + _oer.get_slotnums(538);
            if (1 == _oey && _of0 >= 1 && (_oet.kaih += 2 * _of0, _oet.houg += 2 * _of0, _oet.houm += 2 * _of0), 0 == _oez) return _oet;
            var _of2 = _oer.haveSlotLevelNumOver(468),
                _of3 = _oer.haveSlotLevelNumOver(471),
                _of4 = _oer.haveSlotLevelNumOver(538);
            if (1 == _oez && _oew > 0) {
                var _of5 = _of2[4],
                    _of6 = _of2[8],
                    _of7 = _of2[9],
                    _of8 = _of2[10],
                    _of9 = _of3[7],
                    _ofa = _of3[9];
                _of5 >= 1 && (_oet.houg += 1 * _of5, _oet.houm += 1 * _of5), _of6 >= 1 && (_oet.houg += 1 * _of6, _oet.houm += 1 * _of6), _of7 >= 1 && (_oet.tyku += 1 * _of7, _of1 >= 1 && (_oet.houm += 2 * _of1), _of0 >= 1 && (_oet.kaih += 1 * _of0, _oet.houm += 1 * _of0)), _of8 >= 1 && (_oet.houm += 1 * _of8, _of1 >= 1 && (_oet.houm += 1 * _of1, _of4[7] >= 1 && (_oet.houm += 1 * _of4[7]), _of4[8] >= 1 && (_oet.kaih += 1 * _of4[8]), _of4[9] >= 1 && (_oet.houm += 1 * _of4[9]), _of9 >= 1 && (_oet.houm += 1 * _of9), _ofa >= 1 && (_oet.kaih += 1 * _ofa)), _of0 >= 1 && (_oet.houg += 1 * _of0, _oet.kaih += 1 * _of0, _oet.houm += 1 * _of0));
            }
            return _oet;
        };
    },
    2380: (_ofb, _ofc, _ofd) => {
        'use strict';
        var _ofe = null;
        defineModule(_ofc);
        Object.defineProperty(_ofc, '__esModule', {
            'value': true
        }), _ofc.getSlot38cmTwinGunPersonalEffect = void 0;
        var _off = _ofd(74496);
        _ofc.getSlot38cmTwinGunPersonalEffect = function(_ofg) {
            var _ofh = null,
                _ofi = new _off.SlotItemEffectModel(),
                _ofj = false,
                _ofk = new _off.SlotItemEffectModel(),
                _ofl = 0,
                _ofm = _ofg.get_slotnums(76),
                _ofn = _ofg.get_slotnums(114),
                _ofo = _ofg.get_slotnums(124);
            if ('ドイツ' == _ofg.getCountryName() && (_ofk.houg += 1, _ofj = true, _ofl = 1, _ofo >= 1 && (_ofi.kaih += 1 * _ofo)), 0 == _ofj) return _ofi;
            var _ofp = _ofm + _ofn;
            _ofi.add(_ofk.multiply(_ofp));
            var _ofq = _ofg.have_level_num_over_dict[114];
            return 1 == _ofl && null != _ofq && (_ofq[7] >= 1 && (_ofi.houg += 1 * _ofq[7]), _ofq[8] >= 1 && (_ofi.houm += 1 * _ofq[8]), _ofq[9] >= 1 && (_ofi.souk += 1 * _ofq[9]), _ofq[10] >= 1 && (_ofi.houg += 1 * _ofq[10])), _ofi;
        };
    },
    37273: (_ofr, _ofs, _oft) => {
        'use strict';
        var _ofu = null;
        defineModule(_ofs);
        Object.defineProperty(_ofs, '__esModule', {
            'value': true
        }), _ofs.getSlot390PersonalEffect = void 0;
        var _ofv = _oft(74496);
        _ofs.getSlot390PersonalEffect = function(_ofw) {
            var _ofx = null,
                _ofy = new _ofv.SlotItemEffectModel(),
                _ofz = false,
                _og0 = new _ofv.SlotItemEffectModel(),
                _og1 = 0;
            if ('アメリカ' == _ofw.getCountryName() && (_og0.houg += 1, _ofz = true, _og1 = 1), 102 == _ofw.ctype || 107 == _ofw.ctype ? (_og0.houg += 1, _og0.souk += 1, _ofz = true) : 93 == _ofw.ctype && (_og0.houg += 1, _ofz = true), 8 == _ofw.stype && (_og0.houg += 1, _ofz = true), 0 == _ofz) return _ofy;
            var _og2 = _ofw.get_slotnums(390);
            if (_ofy.add(_og0.multiply(_og2)), 0 == _og1) return _ofy;
            var _og3 = _ofw.get_each_level_nums(390),
                _og4 = 0,
                _og5 = 0;
            return _og3.forEach(function(_og6, _og7) {
                _og7 >= 3 && (_og4 += _og6), _og7 >= 6 && (_og5 += _og6);
            }), 1 == _og1 && (_ofy.houg += 1 * _og4, _ofy.kaih += 1 * _og5, _ofy.souk += 1 * _og3[10]), _ofy;
        };
    },
    72694: (_og8, _og9, _oga) => {
        'use strict';
        var _ogb = null;
        defineModule(_og9);
        Object.defineProperty(_og9, '__esModule', {
            'value': true
        }), _og9.getSlot391PersonalEffect = void 0;
        var _ogc = _oga(74496);
        _og9.getSlot391PersonalEffect = function(_ogd) {
            var _oge = null,
                _ogf = new _ogc.SlotItemEffectModel(),
                _ogg = false,
                _ogh = new _ogc.SlotItemEffectModel();
            if ('しょうかく' == _ogd.yomi || 'ずいかく' == _ogd.yomi ? (_ogh.houg += 1, _ogg = true) : 'じゅんよう' != _ogd.yomi && 'ひよう' != _ogd.yomi || (_ogh.houg += 1, _ogg = true), 116 == _ogd.ship_id || 185 == _ogd.ship_id || 282 == _ogd.ship_id ? (_ogh.houg += 1, _ogg = true) : 117 == _ogd.ship_id || 318 == _ogd.ship_id || 883 == _ogd.ship_id || 888 == _ogd.ship_id ? (_ogh.houg += 1, _ogf.kaih += 1, _ogg = true) : 560 != _ogd.ship_id && 555 != _ogd.ship_id || (_ogh.houg += 1, _ogh.kaih += 1, _ogg = true), 0 == _ogg) return _ogf;
            var _ogi = _ogd.get_slotnums(391);
            return _ogf.add(_ogh.multiply(_ogi)), _ogf;
        };
    },
    62067: (_ogj, _ogk, _ogl) => {
        'use strict';
        var _ogm = null;
        defineModule(_ogk);
        Object.defineProperty(_ogk, '__esModule', {
            'value': true
        }), _ogk.getSlot392PersonalEffect = void 0;
        var _ogn = _ogl(74496);
        _ogk.getSlot392PersonalEffect = function(_ogo) {
            var _ogp = null,
                _ogq = new _ogn.SlotItemEffectModel(),
                _ogr = false,
                _ogs = new _ogn.SlotItemEffectModel();
            if ('しょうかく' == _ogo.yomi || 'ずいかく' == _ogo.yomi ? (_ogs.houg += 2, _ogs.kaih += 1, _ogr = true) : 'じゅんよう' != _ogo.yomi && 'ひよう' != _ogo.yomi || (_ogs.houg += 1, _ogs.kaih += 1, _ogr = true), 116 == _ogo.ship_id || 185 == _ogo.ship_id || 282 == _ogo.ship_id ? (_ogs.houg += 2, _ogs.kaih += 1, _ogr = true) : 117 == _ogo.ship_id || 318 == _ogo.ship_id || 883 == _ogo.ship_id || 888 == _ogo.ship_id ? (_ogs.houg += 2, _ogs.kaih += 2, _ogr = true) : 560 != _ogo.ship_id && 555 != _ogo.ship_id || (_ogs.houg += 3, _ogs.kaih += 2, _ogr = true), 0 == _ogr) return _ogq;
            var _ogt = _ogo.get_slotnums(392);
            return _ogq.add(_ogs.multiply(_ogt)), _ogq;
        };
    },
    87817: function(_ogu, _ogv, _ogw) {
        'use strict';
        var _ogx = null;
        var _ogy = this && this.__importDefault || function(_ogz) {
            var _oh0 = null;
            return _ogz && _ogz.__esModule ? _ogz : {
                'default': _ogz
            };
        };
        defineModule(_ogv);
        Object.defineProperty(_ogv, '__esModule', {
            'value': true
        }), _ogv.getSlot397PersonalEffect = void 0;
        var _oh1 = _ogw(74496),
            _oh2 = _ogy(_ogw(18622));
        _ogv.getSlot397PersonalEffect = function(_oh3) {
            var _oh4 = null,
                _oh5 = new _oh1.SlotItemEffectModel(),
                _oh6 = false,
                _oh7 = new _oh1.SlotItemEffectModel(),
                _oh8 = 0,
                _oh9 = 0,
                _oha = false;
            if (651 == _oh3.ship_id ? (_oh7.houg += 5, _oh7.tyku += 2, _oh7.kaih += 1, _oh6 = true, _oha = true, _oh8 = 1, _oh9 = 1) : 656 == _oh3.ship_id && (_oh7.houg += 3, _oh7.tyku += 1, _oh7.kaih += 1, _oh6 = true, _oha = true, _oh8 = 1), 0 == _oh6) return _oh5;
            var _ohb = _oh3.get_slotnums(397);
            _oh5.add(_oh7.multiply(_ohb));
            var _ohc = 0,
                _ohd = _oh3.get_each_level_nums(397),
                _ohe = 0;
            if (_oha) {
                _ohd.forEach(function(_ohf, _ohg) {
                    _ohg >= 4 && (_ohe += _ohf);
                });
                for (var _ohh = 0, _ohi = _oh3.have_slot_ids(); _ohh < _ohi.length; _ohh++) {
                    var _ohj = _ohi[_ohh],
                        _ohk = _oh2.default.model.slot.getMst(_ohj),
                        _ohl = _ohk.equipType;
                    12 != _ohl && 13 != _ohl || (_ohk.sakuteki >= 5 && (_ohc += _oh3.get_slotnums(parseInt(_ohj))), _ohk.taiku >= 2 && _oh3.get_slotnums(parseInt(_ohj)));
                }
            }
            return 1 == _oh8 && _ohc > 0 && (_oh5.houg += 3, _oh5.kaih += 3), 1 == _oh9 && (_oh5.houg += 4 * _ohe, _oh5.kaih += 1 * _ohe), _oh5;
        };
    },
    93526: function(_ohm, _ohn, _oho) {
        'use strict';
        var _ohp = null;
        var _ohq = this && this.__importDefault || function(_ohr) {
            var _ohs = null;
            return _ohr && _ohr.__esModule ? _ohr : {
                'default': _ohr
            };
        };
        defineModule(_ohn);
        Object.defineProperty(_ohn, '__esModule', {
            'value': true
        }), _ohn.getSlot398PersonalEffect = void 0;
        var _oht = _oho(74496),
            _ohu = _ohq(_oho(18622));
        _ohn.getSlot398PersonalEffect = function(_ohv) {
            var _ohw = null,
                _ohx = new _oht.SlotItemEffectModel(),
                _ohy = false,
                _ohz = new _oht.SlotItemEffectModel(),
                _oi0 = 0,
                _oi1 = 0,
                _oi2 = false;
            if (651 == _ohv.ship_id ? (_ohz.houg += 4, _ohz.tyku += 4, _ohz.kaih += 2, _ohy = true, _oi2 = true, _oi0 = 1, _oi1 = 1) : 656 == _ohv.ship_id && (_ohz.houg += 3, _ohz.tyku += 2, _ohz.kaih += 2, _ohy = true, _oi2 = true, _oi0 = 1, _oi1 = 2), 0 == _ohy) return _ohx;
            var _oi3 = _ohv.get_slotnums(398);
            _ohx.add(_ohz.multiply(_oi3));
            var _oi4 = 0,
                _oi5 = 0,
                _oi6 = _ohv.get_each_level_nums(398),
                _oi7 = 0;
            if (_oi2) {
                _oi6.forEach(function(_oi8, _oi9) {
                    _oi9 >= 4 && (_oi7 += _oi8);
                });
                for (var _oia = 0, _oib = _ohv.have_slot_ids(); _oia < _oib.length; _oia++) {
                    var _oic = _oib[_oia],
                        _oid = _ohu.default.model.slot.getMst(_oic),
                        _oie = _oid.equipType;
                    12 != _oie && 13 != _oie || (_oid.sakuteki >= 5 && (_oi4 += _ohv.get_slotnums(parseInt(_oic))), _oid.taiku >= 2 && (_oi5 += _ohv.get_slotnums(parseInt(_oic))));
                }
            }
            return 1 == _oi0 && (_oi4 > 0 && (_ohx.houg += 3, _ohx.kaih += 3), _oi5 > 0 && (_ohx.tyku += 3, _ohx.kaih += 3)), 1 == _oi1 ? (_ohx.houg += 3 * _oi7, _ohx.kaih += 2 * _oi7) : 2 == _oi1 && (_ohx.houg += 2 * _oi7, _ohx.kaih += 1 * _oi7), _ohx;
        };
    },
    33084: (_oif, _oig, _oih) => {
        'use strict';
        var _oii = null;
        defineModule(_oig);
        Object.defineProperty(_oig, '__esModule', {
            'value': true
        }), _oig.getSlot399PersonalEffect = void 0;
        var _oij = _oih(74496);
        _oig.getSlot399PersonalEffect = function(_oik) {
            var _oil = null,
                _oim = new _oij.SlotItemEffectModel(),
                _oin = false,
                _oio = new _oij.SlotItemEffectModel(),
                _oip = 0;
            if (108 == _oik.ctype && (_oio.houg += 1, _oio.kaih += 2, _oip = 1, _oin = true), 0 == _oin) return _oim;
            var _oiq = _oik.get_slotnums(399);
            if (_oim.add(_oio.multiply(_oiq)), 0 == _oip) return _oim;
            var _oir = _oik.get_each_level_nums(399),
                _ois = 0,
                _oit = 0;
            return _oir.map(function(_oiu, _oiv) {
                _oiv >= 3 && (_ois += _oiu), _oiv >= 5 && (_oit += _oiu);
            }), 1 == _oip && (_oim.houg += 1 * _ois, _oim.houg += 1 * _oit), _oim;
        };
    },
    80225: (_oiw, _oix, _oiy) => {
        'use strict';
        var _oiz = null;
        defineModule(_oix);
        Object.defineProperty(_oix, '__esModule', {
            'value': true
        }), _oix.getSlot3_122PersonalEffect = void 0;
        var _oj0 = _oiy(74496);
        _oix.getSlot3_122PersonalEffect = function(_oj1) {
            var _oj2 = null,
                _oj3 = new _oj0.SlotItemEffectModel(),
                _oj4 = false,
                _oj5 = new _oj0.SlotItemEffectModel(),
                _oj6 = 0,
                _oj7 = _oj1.get_slotnums(3) + _oj1.get_slotnums(122) + _oj1.get_slotnums(533) + _oj1.get_slotnums(553);
            if (54 == _oj1.ctype && (_oj5.houg += 1, _oj5.tyku += 2, _oj5.kaih += 1, _oj4 = true, _oj6 = 1, 968 == _oj1.ship_id && (_oj5.houg += 1, _oj5.houm += 1, _oj5.kaih += 1)), 981 == _oj1.ship_id ? (_oj5.houg += 1, _oj5.tyku += 1, _oj5.kaih += 1, _oj4 = true, _oj6 = 2) : 986 != _oj1.ship_id && 426 != _oj1.ship_id || (_oj5.houg += 1, _oj5.tyku += 1, _oj7 = _oj1.get_slotnums(533) + _oj1.get_slotnums(553), _oj4 = true, _oj6 = 3), 0 == _oj4) return _oj3;
            if (_oj3.add(_oj5.multiply(_oj7)), 0 == _oj6) return _oj3;
            var _oj8 = _oj1.get_each_level_over_nums([122]).slot[122],
                _oj9 = _oj1.have_level_num_over_dict[533],
                _oja = _oj1.have_level_num_over_dict[553];
            return 1 == _oj6 ? (null != _oj8 && (_oj8[6] >= 1 && (_oj3.kaih += 1 * _oj8[6]), _oj8[7] >= 1 && (_oj3.tyku += 1 * _oj8[7]), _oj8[8] >= 1 && (_oj3.houm += 1 * _oj8[8]), _oj8[9] >= 1 && (_oj3.kaih += 1 * _oj8[9]), _oj8[10] >= 1 && (_oj3.houg += 1 * _oj8[10])), null != _oja && (_oja[2] >= 1 && (_oj3.tyku += 1 * _oja[2]), _oja[4] >= 1 && (_oj3.houg += 1 * _oja[4]), _oja[6] >= 1 && (_oj3.houm += 1 * _oja[6]), _oja[8] >= 1 && (_oj3.tyku += 1 * _oja[8]), _oja[10] >= 1 && (_oj3.kaih += 1 * _oja[10])), null != _oj9 && (_oj9[2] >= 1 && (_oj3.tyku += 1 * _oj9[2]), _oj9[4] >= 1 && (_oj3.houg += 1 * _oj9[4]), _oj9[6] >= 1 && (_oj3.houm += 1 * _oj9[6]), _oj9[8] >= 1 && (_oj3.tyku += 1 * _oj9[8]), _oj9[10] >= 1 && (_oj3.kaih += 1 * _oj9[10])), 968 == _oj1.ship_id && null != _oj9 && (_oj9[1] >= 1 && (_oj3.kaih += 1 * _oj9[1]), _oj9[3] >= 1 && (_oj3.tyku += 1 * _oj9[3]), _oj9[5] >= 1 && (_oj3.houm += 1 * _oj9[5]), _oj9[7] >= 1 && (_oj3.kaih += 1 * _oj9[7]), _oj9[9] >= 1 && (_oj3.houg += 1 * _oj9[9]))) : 2 == _oj6 ? (null != _oj8 && (_oj8[7] >= 1 && (_oj3.tyku += 1 * _oj8[7]), _oj8[8] >= 1 && (_oj3.kaih += 1 * _oj8[8]), _oj8[9] >= 1 && (_oj3.houm += 1 * _oj8[9]), _oj8[10] >= 1 && (_oj3.houg += 1 * _oj8[10])), null != _oja && (_oja[2] >= 1 && (_oj3.tyku += 1 * _oja[2]), _oja[4] >= 1 && (_oj3.houg += 1 * _oja[4]), _oja[6] >= 1 && (_oj3.houm += 1 * _oja[6]), _oja[8] >= 1 && (_oj3.tyku += 1 * _oja[8]), _oja[10] >= 1 && (_oj3.kaih += 1 * _oja[10])), null != _oj9 && (_oj9[4] >= 1 && (_oj3.tyku += 1 * _oj9[4]), _oj9[6] >= 1 && (_oj3.kaih += 1 * _oj9[6]), _oj9[8] >= 1 && (_oj3.houm += 1 * _oj9[8]), _oj9[10] >= 1 && (_oj3.houg += 1 * _oj9[10]))) : 3 == _oj6 && (null != _oj8 && (_oj8[7] >= 1 && (_oj3.tyku += 1 * _oj8[7]), _oj8[8] >= 1 && (_oj3.kaih += 1 * _oj8[8]), _oj8[9] >= 1 && (_oj3.houm += 1 * _oj8[9]), _oj8[10] >= 1 && (_oj3.houg += 1 * _oj8[10])), null != _oja && (_oja[4] >= 1 && (_oj3.tyku += 1 * _oja[4]), _oja[6] >= 1 && (_oj3.kaih += 1 * _oja[6]), _oja[8] >= 1 && (_oj3.houm += 1 * _oja[8]), _oja[10] >= 1 && (_oj3.houg += 1 * _oja[10])), null != _oj9 && (_oj9[4] >= 1 && (_oj3.tyku += 1 * _oj9[4]), _oj9[6] >= 1 && (_oj3.kaih += 1 * _oj9[6]), _oj9[8] >= 1 && (_oj3.houm += 1 * _oj9[8]), _oj9[10] >= 1 && (_oj3.houg += 1 * _oj9[10]))), _oj3;
        };
    },
    97831: (_ojb, _ojc, _ojd) => {
        'use strict';
        var _oje = null;
        defineModule(_ojc);
        Object.defineProperty(_ojc, '__esModule', {
            'value': true
        }), _ojc.getSlot400PersonalEffect = void 0;
        var _ojf = _ojd(74496);
        _ojc.getSlot400PersonalEffect = function(_ojg) {
            var _ojh = null,
                _oji = new _ojf.SlotItemEffectModel(),
                _ojj = false,
                _ojk = new _ojf.SlotItemEffectModel(),
                _ojl = 0,
                _ojm = false;
            if (147 != _ojg.ship_id && 73 != _ojg.ctype && 81 != _ojg.ctype || (_ojm = true), _ojm && (_ojk.kaih += 2, _ojk.raig += 5, _ojk.houg += 1, _ojk.souk += 1, _ojj = true, _ojl = 1), 0 == _ojj) return _oji;
            var _ojn = _ojg.get_slotnums(400);
            return _oji.add(_ojk.multiply(_ojn)), _ojg.get_slotnums(282) > 0 && 1 == _ojl && (_oji.houg += 2), _oji;
        };
    },
    4050: function(_ojo, _ojp, _ojq) {
        'use strict';
        var _ojr = null;
        var _ojs = this && this.__importDefault || function(_ojt) {
            var _oju = null;
            return _ojt && _ojt.__esModule ? _ojt : {
                'default': _ojt
            };
        };
        defineModule(_ojp);
        Object.defineProperty(_ojp, '__esModule', {
            'value': true
        }), _ojp.getSlot407PersonalEffect = void 0;
        var _ojv = _ojq(74496),
            _ojw = _ojs(_ojq(18622));
        _ojp.getSlot407PersonalEffect = function(_ojx) {
            var _ojy = null,
                _ojz = new _ojv.SlotItemEffectModel(),
                _ok0 = false,
                _ok1 = new _ojv.SlotItemEffectModel(),
                _ok2 = 0;
            if (662 != _ojx.ship_id && 663 != _ojx.ship_id && 668 != _ojx.ship_id || (_ok1.houg += 4, _ok1.tyku += 2, _ok1.kaih += 1, _ok0 = true, _ok2 = 1), 0 == _ok0) return _ojz;
            var _ok3 = _ojx.get_slotnums(407);
            _ojz.add(_ok1.multiply(_ok3));
            for (var _ok4 = 0, _ok5 = 0, _ok6 = 0, _ok7 = _ojx.have_slot_ids(); _ok6 < _ok7.length; _ok6++) {
                var _ok8 = _ok7[_ok6],
                    _ok9 = _ojw.default.model.slot.getMst(_ok8),
                    _oka = _ok9.equipType;
                12 != _oka && 13 != _oka || (_ok9.sakuteki >= 5 && (_ok4 += _ojx.get_slotnums(parseInt(_ok8))), _ok9.taiku >= 2 && (_ok5 += _ojx.get_slotnums(parseInt(_ok8))));
            }
            return _ok4 >= 1 && 1 == _ok2 && (_ojz.houg += 2, _ojz.kaih += 2, _ojz.raig += 2), _ok5 >= 1 && 1 == _ok2 && (_ojz.tyku += 2, _ojz.kaih += 3), _ojz;
        };
    },
    78466: (_okb, _okc, _okd) => {
        'use strict';
        var _oke = null;
        defineModule(_okc);
        Object.defineProperty(_okc, '__esModule', {
            'value': true
        }), _okc.getSlot408PersonalEffect = void 0;
        var _okf = _okd(74496);
        _okc.getSlot408PersonalEffect = function(_okg) {
            var _okh = null,
                _oki = new _okf.SlotItemEffectModel(),
                _okj = false,
                _okk = new _okf.SlotItemEffectModel();
            if ('しんしゅうまる' == _okg.yomi ? (_okk.houg += 2, _okk.saku += 2, _okk.kaih += 2, _okj = true) : 'あきつまる' == _okg.yomi && (_okk.houg += 1, _okk.saku += 1, _okk.kaih += 1, _okk.tais += 1, _okj = true), 2 == _okg.stype && (_okk.houg += 1, _okk.saku += 1, _okk.kaih -= 5, _okj = true), 0 == _okj) return _oki;
            var _okl = _okg.get_slotnums(408);
            return _oki.add(_okk.multiply(_okl)), _oki;
        };
    },
    40061: (_okm, _okn, _oko) => {
        'use strict';
        var _okp = null;
        defineModule(_okn);
        Object.defineProperty(_okn, '__esModule', {
            'value': true
        }), _okn.getSlot409PersonalEffect = void 0;
        var _okq = _oko(74496);
        _okn.getSlot409PersonalEffect = function(_okr) {
            var _oks = null,
                _okt = new _okq.SlotItemEffectModel(),
                _oku = false,
                _okv = new _okq.SlotItemEffectModel();
            if ('しんしゅうまる' == _okr.yomi ? (_okv.houg += 1, _okv.tyku += 2, _okv.kaih += 3, _oku = true) : 'あきつまる' == _okr.yomi && (_okv.houg += 1, _okv.tyku += 1, _okv.kaih += 2, _okv.tais += 1, _oku = true), 0 == _oku) return _okt;
            var _okw = _okr.get_slotnums(409);
            return _okt.add(_okv.multiply(_okw)), _okt;
        };
    },
    79988: (_okx, _oky, _okz) => {
        'use strict';
        var _ol0 = null;
        defineModule(_oky);
        Object.defineProperty(_oky, '__esModule', {
            'value': true
        }), _oky.getSlot411PersonalEffect = void 0;
        var _ol1 = _okz(74496);
        _oky.getSlot411PersonalEffect = function(_ol2) {
            var _ol3 = null,
                _ol4 = new _ol1.SlotItemEffectModel(),
                _ol5 = new _ol1.SlotItemEffectModel(),
                _ol6 = false,
                _ol7 = 0;
            if (2 == _ol2.stype && (_ol5.kaih -= 9, _ol6 = true), 3 != _ol2.stype && 4 != _ol2.stype || (_ol5.kaih -= 7, _ol6 = true), 21 == _ol2.stype && (_ol5.kaih -= 6, _ol6 = true), 5 != _ol2.stype && 6 != _ol2.stype || (_ol5.kaih -= 5, _ol6 = true), 593 == _ol2.ship_id && (_ol4.houg += 1, _ol4.tyku += 2, _ol4.kaih += 3), 151 == _ol2.ship_id || 411 == _ol2.ship_id || 412 == _ol2.ship_id || 593 == _ol2.ship_id || 954 == _ol2.ship_id ? (_ol4.houg += 3, _ol4.tyku += 4, _ol7 = 1) : 694 == _ol2.ship_id ? (_ol4.houg += 4, _ol4.tyku += 2, _ol7 = 2) : 541 != _ol2.ship_id && 573 != _ol2.ship_id && 553 != _ol2.ship_id && 554 != _ol2.ship_id || (_ol4.houg += 2, _ol4.tyku += 2, _ol7 = 1), _ol6) {
                var _ol8 = _ol2.get_slotnums(411);
                _ol4.add(_ol5.multiply(_ol8));
            }
            if (0 == _ol7) return _ol4;
            var _ol9 = _ol2.get_each_level_nums(411),
                _ola = 0,
                _olb = 0;
            return _ol7 > 0 && _ol9.forEach(function(_olc, _old) {
                _old >= 4 && (_ola += _olc), _old >= 5 && (_olb += _olc);
            }), 1 == _ol7 ? (_ola >= 1 && (_ol4.houg += 1, _ol4.tyku += 1), _ol9[10] >= 1 && (_ol4.houg += 1, _ol4.tyku += 1)) : 2 == _ol7 && (_olb >= 1 && (_ol4.houg += 1, _ol4.tyku += 1), _ol9[10] >= 1 && (_ol4.houg += 2, _ol4.tyku += 1)), _ol4;
        };
    },
    74428: (_ole, _olf, _olg) => {
        'use strict';
        var _olh = null;
        defineModule(_olf);
        Object.defineProperty(_olf, '__esModule', {
            'value': true
        }), _olf.getSlot412PersonalEffect = void 0;
        var _oli = _olg(74496);
        _olf.getSlot412PersonalEffect = function(_olj) {
            var _olk = null,
                _oll = new _oli.SlotItemEffectModel(),
                _olm = false,
                _oln = 0,
                _olo = new _oli.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_olj.ctype) >= 0 ? (_oll.houg += 2, _oll.raig += 4, _oll.tais += 2, _olo.kaih += 3, _olo.saku += 1, _olm = true, _oln = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_olj.ctype) >= 0 ? (_oll.houg += 3, _oll.raig += 3, _olo.kaih += 2, _olo.saku += 3, _olm = true, _oln = 1) : [7, 13, 29, 8, 9, 31].indexOf(_olj.ctype) >= 0 && (_oll.houg += 1, _olo.kaih += 1, _olo.saku += 1, _olm = true), 0 == _olm) return _oll;
            var _olp = _olj.get_slotnums(412);
            if (_oll.add(_olo.multiply(_olp)), 0 == _oln) return _oll;
            var _olq = _olj.get_each_level_nums(412),
                _olr = 0,
                _ols = 0;
            return _oln > 0 && _olq.forEach(function(_olt, _olu) {
                _olu >= 4 && (_olr += _olt), _olu >= 8 && (_ols += _olt);
            }), 1 == _oln && (_olr > 0 && (_oll.houg += 1), _ols > 0 && (_oll.raig += 1)), _oll;
        };
    },
    2631: (_olv, _olw, _olx) => {
        'use strict';
        var _oly = null;
        defineModule(_olw);
        Object.defineProperty(_olw, '__esModule', {
            'value': true
        }), _olw.getSlot413PersonalEffect = void 0;
        var _olz = _olx(74496);
        _olw.getSlot413PersonalEffect = function(_om0) {
            var _om1 = null,
                _om2 = new _olz.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_om0.ctype) >= 0 ? (_om2.houg += 2, _om2.raig += 2, _om2.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_om0.ctype) >= 0 && (_om2.houg += 4, _om2.raig += 2, _om2.kaih += 2), 38 == _om0.ctype || 54 == _om0.ctype ? (_om2.houg += 2, _om2.raig += 3, _om2.kaih += 3) : 4 == _om0.ctype || 20 == _om0.ctype || 16 == _om0.ctype || 41 == _om0.ctype || 52 == _om0.ctype ? (_om2.houg += 1, _om2.raig += 2, _om2.kaih += 2) : 21 != _om0.ctype && 34 != _om0.ctype || (_om2.tyku += 2, _om2.raig += 1, _om2.kaih += 1), 'なか' == _om0.yomi || 'ゆら' == _om0.yomi || 'やはぎ' == _om0.yomi || 'のしろ' == _om0.yomi || 'はまなみ' == _om0.yomi || 'しまかぜ' == _om0.yomi || 'きよしも' == _om0.yomi || 'はつしも' == _om0.yomi ? (_om2.tyku += 1, _om2.kaih += 1) : 'じんつう' != _om0.yomi && 'せんだい' != _om0.yomi && 'ながなみ' != _om0.yomi && 'はつしも' != _om0.yomi && 'てるづき' != _om0.yomi || (_om2.houg += 1, _om2.raig += 1), 543 == _om0.ship_id ? (_om2.houg += 1, _om2.kaih += 1) : 159 == _om0.ship_id && (_om2.houg += 2), _om2;
        };
    },
    27177: (_om3, _om4, _om5) => {
        'use strict';
        var _om6 = null;
        defineModule(_om4);
        Object.defineProperty(_om4, '__esModule', {
            'value': true
        }), _om4.getSlot415PersonalEffect = void 0;
        var _om7 = _om5(74496);
        _om4.getSlot415PersonalEffect = function(_om8) {
            var _om9 = null,
                _oma = new _om7.SlotItemEffectModel(),
                _omb = [];
            if ('アメリカ' == _om8.getCountryName() && (_oma.saku += 1, _oma.tais += 1, _omb.push(1)), 95 != _om8.ctype && 99 != _om8.ctype && 106 != _om8.ctype && 110 != _om8.ctype && 121 != _om8.ctype || (_oma.houg += 1, _omb.push(2)), 0 == _omb.length) return _oma;
            var _omc = _om8.get_each_level_nums(415),
                _omd = 0,
                _ome = 0,
                _omf = 0;
            return _omb.length > 0 && (_omc.forEach(function(_omg, _omh) {
                _omh >= 5 && (_omd += _omg), _omh >= 3 && (_ome += _omg), _omh >= 8 && (_omf += _omg);
            }), _omb.forEach(function(_omi) {
                var _omj = null;
                1 == _omi ? _omd >= 1 && (_oma.kaih += 1) : 2 == _omi && (_ome >= 1 && (_oma.kaih += 1), _omf >= 1 && (_oma.houg += 1));
            })), _oma;
        };
    },
    53908: (_omk, _oml, _omm) => {
        'use strict';
        var _omn = null;
        defineModule(_oml);
        Object.defineProperty(_oml, '__esModule', {
            'value': true
        }), _oml.getSlot419PersonalEffect = void 0;
        var _omo = _omm(74496);
        _oml.getSlot419PersonalEffect = function(_omp) {
            var _omq = null,
                _omr = new _omo.SlotItemEffectModel(),
                _oms = false,
                _omt = new _omo.SlotItemEffectModel(),
                _omu = 0;
            if ('アメリカ' == _omp.getCountryName() && (_omt.houg += 2, _oms = true, _omu = 1), 0 == _oms) return _omr;
            var _omv = _omp.get_slotnums(419);
            if (_omr.add(_omt.multiply(_omv)), 0 == _omu) return _omr;
            var _omw = _omp.get_each_level_nums(419),
                _omx = 0,
                _omy = 0;
            return _omu > 0 && _omw.forEach(function(_omz, _on0) {
                _on0 >= 2 && (_omx += _omz), _on0 >= 7 && (_omy += _omz);
            }), 1 == _omu && (_omx >= 1 && (_omr.houg += 1 * _omx), _omy >= 1 && (_omr.houg += 1 * _omy)), _omr;
        };
    },
    79813: (_on1, _on2, _on3) => {
        'use strict';
        var _on4 = null;
        defineModule(_on2);
        Object.defineProperty(_on2, '__esModule', {
            'value': true
        }), _on2.getSlot420PersonalEffect = void 0;
        var _on5 = _on3(74496);
        _on2.getSlot420PersonalEffect = function(_on6) {
            var _on7 = null,
                _on8 = new _on5.SlotItemEffectModel(),
                _on9 = false,
                _ona = new _on5.SlotItemEffectModel(),
                _onb = 0,
                _onc = _on6.getCountryName();
            if ('アメリカ' != _onc && 67 != _on6.ctype && 78 != _on6.ctype && 82 != _on6.ctype && 88 != _on6.ctype && 108 != _on6.ctype && 112 != _on6.ctype || (_ona.houg += 1, _onb = 1, _on9 = true), 84 == _on6.ctype ? (_ona.houg += 1, _on9 = true) : 78 == _on6.ctype && (_ona.houg -= 1, _on9 = true), 7 == _on6.stype && (_ona.houg -= 2, _ona.kaih -= 1, _ona.souk -= 2, _on9 = true), 0 == _on9) return _on8;
            var _ond = _on6.get_slotnums(420);
            if (_on8.add(_ona.multiply(_ond)), 0 == _onb) return _on8;
            var _one = _on6.get_each_level_nums(420),
                _onf = 0,
                _ong = 0,
                _onh = 0,
                _oni = 0;
            _onb > 0 && _one.forEach(function(_onj, _onk) {
                _onk >= 3 && (_onf += _onj), _onk >= 7 && (_ong += _onj), _onk >= 8 && (_onh += _onj), _onk >= 9 && (_oni += _onj);
            });
            var _onl = _one[10];
            return 1 == _onb && (_onf >= 1 && (_on8.houg += 1 * _onf), 'アメリカ' == _onc && (_ong >= 1 && (_on8.houm += 1 * _ong), _onh >= 1 && (_on8.houg += 1 * _onh), _oni >= 1 && (_on8.houm += 1 * _oni), _onl >= 1 && (_on8.houg += 1 * _onl))), _on8;
        };
    },
    16088: (_onm, _onn, _ono) => {
        'use strict';
        var _onp = null;
        defineModule(_onn);
        Object.defineProperty(_onn, '__esModule', {
            'value': true
        }), _onn.getSlot421PersonalEffect = void 0;
        var _onq = _ono(74496);
        _onn.getSlot421PersonalEffect = function(_onr) {
            var _ons = null,
                _ont = new _onq.SlotItemEffectModel(),
                _onu = false,
                _onv = new _onq.SlotItemEffectModel(),
                _onw = 0,
                _onx = _onr.getCountryName();
            if ('アメリカ' != _onx && 67 != _onr.ctype && 78 != _onr.ctype && 82 != _onr.ctype && 88 != _onr.ctype && 108 != _onr.ctype && 112 != _onr.ctype || (_onv.houg += 2, _onu = true, _onw = 1), 84 == _onr.ctype ? (_onv.houg += 1, _onu = true) : 78 == _onr.ctype && (_onv.houg -= 1, _onu = true), 7 == _onr.stype && (_onv.houg -= 2, _onv.kaih -= 1, _onv.souk -= 2, _onu = true), 0 == _onu) return _ont;
            var _ony = _onr.get_slotnums(421);
            if (_ont.add(_onv.multiply(_ony)), 0 == _onw) return _ont;
            var _onz = _onr.get_each_level_nums(421),
                _oo0 = 0,
                _oo1 = 0,
                _oo2 = 0,
                _oo3 = 0,
                _oo4 = 0;
            _onw > 0 && _onz.forEach(function(_oo5, _oo6) {
                _oo6 >= 5 && (_oo0 += _oo5), _oo6 >= 6 && (_oo1 += _oo5), _oo6 >= 7 && (_oo2 += _oo5), _oo6 >= 8 && (_oo3 += _oo5), _oo6 >= 9 && (_oo4 += _oo5);
            });
            var _oo7 = _onz[10];
            return 1 == _onw && (_oo0 >= 1 && (_ont.houg += 1 * _oo0), 'アメリカ' == _onx && (_oo1 >= 1 && (_ont.houm += 1 * _oo1), _oo2 >= 1 && (_ont.houg += 1 * _oo2), _oo3 >= 1 && (_ont.houm += 1 * _oo3), _oo4 >= 1 && (_ont.houg += 1 * _oo4), _oo7 >= 1 && (_ont.houm += 1 * _oo7))), _ont;
        };
    },
    69939: (_oo8, _oo9, _ooa) => {
        'use strict';
        var _oob = null;
        defineModule(_oo9);
        Object.defineProperty(_oo9, '__esModule', {
            'value': true
        }), _oo9.getSlot422PersonalEffect = void 0;
        var _ooc = _ooa(74496);
        _oo9.getSlot422PersonalEffect = function(_ood) {
            var _ooe = null,
                _oof = new _ooc.SlotItemEffectModel(),
                _oog = false,
                _ooh = new _ooc.SlotItemEffectModel();
            if ('アメリカ' != _ood.getCountryName() && 67 != _ood.ctype && 78 != _ood.ctype && 82 != _ood.ctype && 88 != _ood.ctype && 108 != _ood.ctype && 112 != _ood.ctype || (_ooh.houg += 1, _ooh.kaih += 1, _oog = true), 84 == _ood.ctype && (_ooh.houg += 1, _ooh.tyku += 1, _oog = true), 707 == _ood.ship_id && (_ooh.houg += 2, _ooh.kaih += 2, _ooh.tyku += 2, _oog = true), 0 == _oog) return _oof;
            var _ooi = _ood.get_slotnums(422);
            return _oof.add(_ooh.multiply(_ooi)), _oof;
        };
    },
    33734: (_ooj, _ook, _ool) => {
        'use strict';
        var _oom = null;
        defineModule(_ook);
        Object.defineProperty(_ook, '__esModule', {
            'value': true
        }), _ook.getSlot423PersonalEffect = void 0;
        var _oon = _ool(74496);
        _ook.getSlot423PersonalEffect = function(_ooo) {
            var _oop = null,
                _ooq = new _oon.SlotItemEffectModel(),
                _oor = false,
                _oos = new _oon.SlotItemEffectModel();
            78 != _ooo.ctype && 112 != _ooo.ctype || (_oos.houg += 2, _oos.tyku += 2, _oos.kaih += 2, _oos.saku += 2, _oor = true);
            var _oot = _ooo.getCountryName();
            if (67 == _ooo.ctype || 78 == _ooo.ctype || 82 == _ooo.ctype || 88 == _ooo.ctype || 108 == _ooo.ctype || 112 == _ooo.ctype ? (_oos.houg += 2, _oos.tyku += 2, _oos.kaih += 2, _oos.saku += 2, _oor = true) : 'アメリカ' == _oot && (_oos.houg += 1, _oos.tyku += 1, _oos.kaih += 1, _oos.saku += 1, _oor = true), 0 == _oor) return _ooq;
            var _oou = _ooo.get_slotnums(423);
            return _ooq.add(_oos.multiply(_oou)), _ooq;
        };
    },
    34432: (_oov, _oow, _oox) => {
        'use strict';
        var _ooy = null;
        defineModule(_oow);
        Object.defineProperty(_oow, '__esModule', {
            'value': true
        }), _oow.getSlot424PersonalEffect = void 0;
        var _ooz = _oox(74496);
        _oow.getSlot424PersonalEffect = function(_op0) {
            var _op1 = null,
                _op2 = new _ooz.SlotItemEffectModel(),
                _op3 = false,
                _op4 = new _ooz.SlotItemEffectModel(),
                _op5 = 0;
            67 != _op0.ctype && 78 != _op0.ctype && 82 != _op0.ctype && 88 != _op0.ctype && 108 != _op0.ctype && 112 != _op0.ctype || (_op4.houg += 2, _op4.raig += 3, _op3 = true, _op5 = 1);
            var _op6 = _op0.get_slotnums(424);
            _op3 && _op2.add(_op4.multiply(_op6));
            var _op7 = _op0.get_each_level_nums(424),
                _op8 = 0,
                _op9 = 0,
                _opa = 0;
            _op7.forEach(function(_opb, _opc) {
                _opc >= 2 && (_op8 += _opb), _opc >= 6 && (_op9 += _opb), _opc >= 8 && (_opa += _opb);
            });
            var _opd = _op7[10];
            return 1 == _op5 && (_op8 >= 1 && (_op2.houg += 1 * _op8), _op9 >= 1 && (_op2.houg += 1 * _op9), _opa >= 1 && (_op2.houm += 1 * _opa)), _opd > 0 && (_op2.houm += 1 * _opd), _op2;
        };
    },
    97423: (_ope, _opf, _opg) => {
        'use strict';
        var _oph = null;
        defineModule(_opf);
        Object.defineProperty(_opf, '__esModule', {
            'value': true
        }), _opf.getSlot425PersonalEffect = void 0;
        var _opi = _opg(74496);
        _opf.getSlot425PersonalEffect = function(_opj) {
            var _opk = null,
                _opl = new _opi.SlotItemEffectModel(),
                _opm = false,
                _opn = new _opi.SlotItemEffectModel(),
                _opo = 0;
            67 != _opj.ctype && 78 != _opj.ctype && 82 != _opj.ctype && 88 != _opj.ctype && 108 != _opj.ctype && 112 != _opj.ctype || (_opn.houg += 2, _opn.tais += 2, _opn.raig += 1, _opn.saku += 1, _opm = true, _opo = 1);
            var _opp = _opj.get_slotnums(425);
            _opm && _opl.add(_opn.multiply(_opp));
            var _opq = _opj.get_each_level_nums(425),
                _opr = 0,
                _ops = 0,
                _opt = 0,
                _opu = 0,
                _opv = 0,
                _opw = 0;
            _opq.forEach(function(_opx, _opy) {
                _opy >= 2 && (_opr += _opx), _opy >= 4 && (_ops += _opx), _opy >= 6 && (_opt += _opx), _opy >= 7 && (_opu += _opx), _opy >= 8 && (_opv += _opx), _opy >= 9 && (_opw += _opx);
            });
            var _opz = _opq[10];
            return 1 == _opo && (_opr >= 1 && (_opl.tais += 1 * _opr), _ops >= 1 && (_opl.houg += 1 * _ops), _opt >= 1 && (_opl.tais += 1 * _opt), _opu >= 1 && (_opl.houm += 1 * _opu), _opv >= 1 && (_opl.raig += 1 * _opv), _opw >= 1 && (_opl.houg += 1 * _opw), _opz >= 1 && (_opl.tais += 1 * _opz)), _opu >= 1 && (_opl.houg += 1 * _opu), _opv >= 1 && (_opl.tais += 1 * _opv), _opw >= 1 && (_opl.houm += 1 * _opw), _opz >= 1 && (_opl.houm += 1 * _opz), _opl;
        };
    },
    23551: (_oq0, _oq1, _oq2) => {
        'use strict';
        var _oq3 = null;
        defineModule(_oq1);
        Object.defineProperty(_oq1, '__esModule', {
            'value': true
        }), _oq1.getSlot430PersonalEffect = void 0;
        var _oq4 = _oq2(74496);
        _oq1.getSlot430PersonalEffect = function(_oq5) {
            var _oq6 = null,
                _oq7 = new _oq4.SlotItemEffectModel(),
                _oq8 = false,
                _oq9 = new _oq4.SlotItemEffectModel(),
                _oqa = 0;
            if (113 == _oq5.ctype && (_oq9.tyku += 1, _oq9.kaih += 1, _oq8 = true), 58 != _oq5.ctype && 61 != _oq5.ctype && 64 != _oq5.ctype && 68 != _oq5.ctype && 80 != _oq5.ctype && 92 != _oq5.ctype && 113 != _oq5.ctype && 124 != _oq5.ctype || (_oq9.tyku += 2, _oq9.kaih += 1, _oq8 = true, _oqa = 1), 0 == _oq8) return _oq7;
            var _oqb = _oq5.get_slotnums(430);
            if (_oq7.add(_oq9.multiply(_oqb)), 0 == _oqa) return _oq7;
            var _oqc = _oq5.get_each_level_nums(430),
                _oqd = 0,
                _oqe = 0,
                _oqf = 0;
            if (_oqa > 0 && _oqc.forEach(function(_oqg, _oqh) {
                    _oqh >= 2 && (_oqd += _oqg), _oqh >= 4 && (_oqe += _oqg), _oqh >= 7 && (_oqf += _oqg);
                }), 1 == _oqa) {
                _oqd >= 1 && (_oq7.kaih += 1 * _oqd), _oqe >= 1 && (_oq7.tyku += 1 * _oqe), _oqf >= 1 && (_oq7.kaih += 1 * _oqf);
                var _oqi = _oqc[10];
                _oqi >= 1 && (_oq7.tyku += 1 * _oqi);
            }
            return _oq7;
        };
    },
    6173: (_oqj, _oqk, _oql) => {
        'use strict';
        var _oqm = null;
        defineModule(_oqk);
        Object.defineProperty(_oqk, '__esModule', {
            'value': true
        }), _oqk.getSlot437PersonalEffect = void 0;
        var _oqn = _oql(74496);
        _oqk.getSlot437PersonalEffect = function(_oqo) {
            var _oqp = null,
                _oqq = new _oqn.SlotItemEffectModel(),
                _oqr = false,
                _oqs = new _oqn.SlotItemEffectModel();
            if (285 == _oqo.ship_id ? (_oqs.houg += 3, _oqs.tyku += 3, _oqs.kaih += 4, _oqr = true) : 894 == _oqo.ship_id || 899 == _oqo.ship_id ? (_oqs.houg += 4, _oqs.tyku += 4, _oqs.kaih += 4, _oqr = true) : 196 == _oqo.ship_id || 197 == _oqo.ship_id ? (_oqs.houg += 2, _oqs.tyku += 2, _oqs.kaih += 3, _oqr = true) : 508 == _oqo.ship_id || 509 == _oqo.ship_id || 646 == _oqo.ship_id ? (_oqs.houg += 2, _oqs.tyku += 2, _oqs.kaih += 2, _oqr = true) : 888 != _oqo.ship_id && 883 != _oqo.ship_id && 553 != _oqo.ship_id && 554 != _oqo.ship_id || (_oqs.houg += 1, _oqs.tyku += 2, _oqs.kaih += 2, _oqr = true), 0 == _oqr) return _oqq;
            var _oqt = _oqo.get_slotnums(437);
            return _oqq.add(_oqs.multiply(_oqt)), _oqq;
        };
    },
    53709: (_oqu, _oqv, _oqw) => {
        'use strict';
        var _oqx = null;
        defineModule(_oqv);
        Object.defineProperty(_oqv, '__esModule', {
            'value': true
        }), _oqv.getSlot438PersonalEffect = void 0;
        var _oqy = _oqw(74496);
        _oqv.getSlot438PersonalEffect = function(_oqz) {
            var _or0 = null,
                _or1 = new _oqy.SlotItemEffectModel(),
                _or2 = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_oqz.ctype) > -1 && (_or1.tais += 1, _or1.kaih += 1), 160 == _oqz.ship_id || 488 == _oqz.ship_id || 141 == _oqz.ship_id ? (_or1.tais += 1, _or1.kaih += 1) : 145 != _oqz.ship_id && 588 != _oqz.ship_id && 667 != _oqz.ship_id && 578 != _oqz.ship_id && 476 != _oqz.ship_id && 363 != _oqz.ship_id && 961 != _oqz.ship_id || (_or2 = 1), 'うしお' == _oqz.yomi || 'まいかぜ' == _oqz.yomi || 'いそかぜ' == _oqz.yomi || 'はまかぜ' == _oqz.yomi || 'いかづち' == _oqz.yomi || 'やまぐも' == _oqz.yomi || 'うみかぜ' == _oqz.yomi || 'かわかぜ' == _oqz.yomi || 'すずかぜ' == _oqz.yomi ? _or1.tais += 1 : 'しぐれ' != _oqz.yomi && 'やまかぜ' != _oqz.yomi && 'かみかぜ' != _oqz.yomi && 'はるかぜ' != _oqz.yomi && 'みくら' != _oqz.yomi && 'いしがき' != _oqz.yomi || (_or1.tais += 1, _or1.kaih += 1), 0 == _or2) return _or1;
            var _or3 = _oqz.get_each_level_nums(438),
                _or4 = 0,
                _or5 = 0,
                _or6 = 0,
                _or7 = _or3[10];
            return _or2 > 0 && _or3.forEach(function(_or8, _or9) {
                _or9 >= 4 && (_or4 += _or8), _or9 >= 6 && (_or5 += _or8), _or9 >= 8 && (_or6 += _or8);
            }), 1 == _or2 && (_or4 >= 1 && (_or1.tais += 1), _or5 >= 1 && (_or1.kaih += 1), _or6 >= 1 && (_or1.tais += 1), _or7 >= 1 && (_or1.kaih += 1)), _or1;
        };
    },
    99790: (_ora, _orb, _orc) => {
        'use strict';
        var _ord = null;
        defineModule(_orb);
        Object.defineProperty(_orb, '__esModule', {
            'value': true
        }), _orb.getSlot439PersonalEffect = void 0;
        var _ore = _orc(74496);
        _orb.getSlot439PersonalEffect = function(_orf) {
            var _org = null,
                _orh = new _ore.SlotItemEffectModel();
            1 != _orf.stype && 2 != _orf.stype && 3 != _orf.stype && 21 != _orf.stype || (_orh.tais += 1, _orh.kaih += 1), 101 != _orf.ctype && 1 != _orf.stype || (_orh.tais += 1);
            var _ori = _orf.getCountryName();
            return 'アメリカ' != _ori && 'イギリス' != _ori || (_orh.tais += 2), _orh;
        };
    },
    18387: (_orj, _ork, _orl) => {
        'use strict';
        var _orm = null;
        defineModule(_ork);
        Object.defineProperty(_ork, '__esModule', {
            'value': true
        }), _ork.getSlot440_441PersonalEffect = void 0;
        var _orn = _orl(74496);
        _ork.getSlot440_441PersonalEffect = function(_oro) {
            var _orp = null,
                _orq = new _orn.SlotItemEffectModel();
            return 114 == _oro.ctype && (_orq.raig += 2), _orq;
        };
    },
    70941: (_orr, _ors, _ort) => {
        'use strict';
        var _oru = null;
        defineModule(_ors);
        Object.defineProperty(_ors, '__esModule', {
            'value': true
        }), _ors.getSlot442_443PersonalEffect = void 0;
        var _orv = _ort(74496);
        _ors.getSlot442_443PersonalEffect = function(_orw) {
            var _orx = null,
                _ory = new _orv.SlotItemEffectModel();
            return 122 == _orw.ctype ? (_ory.raig += 1, _ory.kaih += 2) : 114 == _orw.ctype && (_ory.raig += 2), _ory;
        };
    },
    35025: (_orz, _os0, _os1) => {
        'use strict';
        var _os2 = null;
        defineModule(_os0);
        Object.defineProperty(_os0, '__esModule', {
            'value': true
        }), _os0.getSlot447PersonalEffect = void 0;
        var _os3 = _os1(74496);
        _os0.getSlot447PersonalEffect = function(_os4) {
            var _os5 = null,
                _os6 = new _os3.SlotItemEffectModel(),
                _os7 = _os4.get_each_level_nums(447),
                _os8 = 0,
                _os9 = 0,
                _osa = 0,
                _osb = 0;
            _os7.forEach(function(_osc, _osd) {
                _osd >= 2 && (_os8 += _osc), _osd >= 4 && (_os9 += _osc), _osd >= 6 && (_osa += _osc), _osd >= 8 && (_osb += _osc);
            }), _os8 >= 1 && (_os6.houg += 1 * _os8), _os9 >= 1 && (_os6.tyku += 1 * _os9), _osa >= 1 && (_os6.tais += 1 * _osa), _osb >= 1 && (_os6.kaih += 1 * _osb);
            var _ose = _os7[10];
            _ose >= 1 && (_os6.tais += 1 * _ose);
            var _osf = false,
                _osg = new _os3.SlotItemEffectModel();
            if (76 == _os4.ctype && (_osg.houg += 1, _osg.tais += 1, _osg.kaih += 2, _osf = true), 'うんよう' == _os4.yomi ? (_osg.houg += 1, _osg.tais += 1, _osg.kaih += 1, _osf = true) : 'ほうしょう' != _os4.yomi && 'たいげい・りゅうほう' != _os4.yomi || (_osg.houg += 1, _osg.tais += 2, _osg.kaih += 1, _osf = true), 0 == _osf) return _os6;
            894 != _os4.ship_id && 899 != _os4.ship_id || (_osg.houg += 1, _osg.kaih += 1, _osg.tais += 1, _osg.tyku += 1, _osf = true);
            var _osh = _os4.get_slotnums(447);
            return _os6.add(_osg.multiply(_osh)), _os6;
        };
    },
    96804: (_osi, _osj, _osk) => {
        'use strict';
        var _osl = null;
        defineModule(_osj);
        Object.defineProperty(_osj, '__esModule', {
            'value': true
        }), _osj.getSlot450PersonalEffect = void 0;
        var _osm = _osk(74496);
        _osj.getSlot450PersonalEffect = function(_osn) {
            var _oso = null,
                _osp = new _osm.SlotItemEffectModel(),
                _osq = false,
                _osr = new _osm.SlotItemEffectModel();
            if (101 == _osn.ctype && (_osr.houg += 1, _osr.tyku += 2, _osr.souk += 1, _osr.kaih += 3, _osq = true), 1 == _osn.stype && (_osr.tyku += 1, _osr.souk += 1, _osr.kaih += 2, _osq = true), 0 == _osq) return _osp;
            var _oss = _osn.get_slotnums(450);
            return _osp.add(_osr.multiply(_oss)), _osp;
        };
    },
    33896: (_ost, _osu, _osv) => {
        'use strict';
        var _osw = null;
        defineModule(_osu);
        Object.defineProperty(_osu, '__esModule', {
            'value': true
        }), _osu.getSlot451PersonalEffect = void 0;
        var _osx = _osv(74496);
        _osu.getSlot451PersonalEffect = function(_osy) {
            var _osz = null,
                _ot0 = new _osx.SlotItemEffectModel(),
                _ot1 = false,
                _ot2 = new _osx.SlotItemEffectModel(),
                _ot3 = 0;
            if ('あきつまる' == _osy.yomi ? (_ot2.houg += 1, _ot2.tais += 2, _ot1 = true, 166 == _osy.ship_id && (_ot3 = 2)) : 'やましおまる' != _osy.yomi && 'くまのまる' != _osy.yomi || (_ot2.houg += 1, _ot2.tais += 3, _ot1 = true, _ot3 = 1), 0 == _ot1) return _ot0;
            var _ot4 = _osy.get_slotnums(451);
            if (_ot0.add(_ot2.multiply(_ot4)), 0 == _ot3) return _ot0;
            var _ot5 = _osy.get_each_level_nums(451),
                _ot6 = [];
            return _ot3 > 0 && _ot5.forEach(function(_ot7, _ot8) {
                var _ot9 = null;
                for (var _ota = 1; _ota <= _osy.SLOT_LEVEL_MAX; _ota++) _ot8 >= _ota && (null == _ot6[_ota] && (_ot6[_ota] = 0), _ot6[_ota] += _ot7);
            }), 1 == _ot3 ? (_ot6[1] >= 1 && (_ot0.houg += 2 * _ot6[1]), _ot6[2] >= 1 && (_ot0.houm += 1 * _ot6[2]), _ot6[3] >= 1 && (_ot0.tais += 1 * _ot6[3]), _ot6[4] >= 1 && (_ot0.houg += 1 * _ot6[4]), _ot6[6] >= 1 && (_ot0.houm += 1 * _ot6[6]), _ot6[8] >= 1 && (_ot0.tais += 1 * _ot6[8]), _ot6[10] >= 1 && (_ot0.houg += 1 * _ot6[10])) : 2 == _ot3 && (_ot6[1] >= 1 && (_ot0.houg += 1 * _ot6[1]), _ot6[3] >= 1 && (_ot0.tais += 1 * _ot6[3]), _ot6[5] >= 1 && (_ot0.houm += 1 * _ot6[5]), _ot6[7] >= 1 && (_ot0.tais += 1 * _ot6[7]), _ot6[10] >= 1 && (_ot0.houg += 1 * _ot6[10])), _ot0;
        };
    },
    11031: function(_otb, _otc, _otd) {
        'use strict';
        var _ote = null;
        var _otf = this && this.__importDefault || function(_otg) {
            var _oth = null;
            return _otg && _otg.__esModule ? _otg : {
                'default': _otg
            };
        };
        defineModule(_otc);
        Object.defineProperty(_otc, '__esModule', {
            'value': true
        }), _otc.getSlot455PersonalEffect = void 0;
        var _oti = _otd(74496),
            _otj = _otf(_otd(18622));
        _otc.getSlot455PersonalEffect = function(_otk) {
            var _otl = null,
                _otm = new _oti.SlotItemEffectModel(),
                _otn = false,
                _oto = new _oti.SlotItemEffectModel(),
                _otp = 0,
                _otq = _otk.get_slotnums(455);
            if (1 != _otk.ctype && 5 != _otk.ctype && 12 != _otk.ctype || (_oto.houg += 2, _oto.tyku += 1, 12 == _otk.ctype && (_oto.houg += 1), 666 == _otk.ship_id ? (_oto.houg += 1, _oto.tais += 1) : 959 == _otk.ship_id && (_oto.houg += 2, _otq >= 2 && (_otm.houg += 2), _otq >= 3 && (_otm.houg += 3)), _otp = 1, _otn = true), 'うらなみ' == _otk.yomi && (_oto.houg += 1, 647 == _otk.ship_id && (_oto.houg += 1, _oto.raig += 1, _oto.tais += 1, _oto.kaih += 1), _otn = true), 0 == _otn) return _otm;
            if (_otm.add(_oto.multiply(_otq)), 0 == _otp) return _otm;
            for (var _otr = 0, _ots = 0, _ott = 0, _otu = _otk.have_slot_ids(); _ott < _otu.length; _ott++) {
                var _otv = _otu[_ott],
                    _otw = _otj.default.model.slot.getMst(_otv),
                    _otx = _otw.equipType;
                12 != _otx && 13 != _otx || (_otw.sakuteki >= 5 && (_otr += _otk.get_slotnums(parseInt(_otv))), _otw.taiku >= 2 && (_ots += _otk.get_slotnums(parseInt(_otv))));
            }
            if (1 == _otp) {
                _otr >= 1 && (_otm.houg += 3, _otm.kaih += 2, _otm.raig += 1);
                var _oty = _otk.get_slotnums(13),
                    _otz = _otk.get_slotnums(125),
                    _ou0 = _otk.get_slotnums(285),
                    _ou1 = _oty + _otz + _ou0;
                1 == _ou1 ? (_otm.houg += 1, _otm.raig += 3) : _ou1 >= 2 && (_otm.houg += 2, _otm.raig += 5), _ou0 >= 1 && (_otm.raig += 1), _ots >= 1 && (_otm.tyku += 4);
            }
            return _otm;
        };
    },
    71383: (_ou2, _ou3, _ou4) => {
        'use strict';
        var _ou5 = null;
        defineModule(_ou3);
        Object.defineProperty(_ou3, '__esModule', {
            'value': true
        }), _ou3.getSlot456PersonalEffect = void 0;
        var _ou6 = _ou4(74496);
        _ou3.getSlot456PersonalEffect = function(_ou7) {
            var _ou8 = null,
                _ou9 = new _ou6.SlotItemEffectModel(),
                _oua = false,
                _oub = new _ou6.SlotItemEffectModel(),
                _ouc = _ou7.getCountryName();
            if ('アメリカ' == _ouc && (_oub.houg += 3, _oub.kaih += 4, _oub.saku += 4, _ou9.houm += 3, _oua = true), 'イギリス' != _ouc && 'オーストラリア' != _ouc || (_oub.houg += 2, _oub.kaih += 2, _oub.saku += 2, _ou9.houm += 2, _oua = true), 87 != _ou7.ctype && 91 != _ou7.ctype || (_oub.houg += 1, _ou9.leng += 1, _oua = true), 651 != _ou7.ship_id && 656 != _ou7.ship_id || (_ou9.houg += 2, _ou9.kaih += 2, _ou9.saku += 3, _ou9.leng += 1, _ou9.houm += 2), 0 == _oua) return _ou9;
            var _oud = _ou7.get_slotnums(456);
            return _ou9.add(_oub.multiply(_oud)), _ou9;
        };
    },
    55888: (_oue, _ouf, _oug) => {
        'use strict';
        var _ouh = null;
        defineModule(_ouf);
        Object.defineProperty(_ouf, '__esModule', {
            'value': true
        }), _ouf.getSlot457PersonalEffect = void 0;
        var _oui = _oug(74496);
        _ouf.getSlot457PersonalEffect = function(_ouj) {
            var _ouk = null,
                _oul = new _oui.SlotItemEffectModel(),
                _oum = 0;
            if (109 == _ouj.ctype ? (_oul.raig += 3, _oul.kaih += 3, _oum = 1) : 71 == _ouj.ctype || 103 == _ouj.ctype ? (_oul.raig += 2, _oul.kaih += 2, _oum = 2) : 44 == _ouj.ctype && (_oul.raig += 1, _oul.kaih += 4, _oum = 3), 0 == _oum) return _oul;
            var _oun = _ouj.get_each_level_nums(461),
                _ouo = [];
            return _oum > 0 && _oun.forEach(function(_oup, _ouq) {
                var _our = null;
                for (var _ous = 1; _ous <= _ouj.SLOT_LEVEL_MAX; _ous++) null == _ouo[_ous] && (_ouo[_ous] = 0), _ouq >= _ous && (_ouo[_ous] += _oup);
            }), 1 == _oum ? (_ouo[2] >= 1 && (_oul.raig += 1 * _ouo[2]), _ouo[3] >= 1 && (_oul.kaih += 1 * _ouo[3]), _ouo[4] >= 1 && (_oul.raig += 1 * _ouo[4]), _ouo[5] >= 1 && (_oul.houm += 1 * _ouo[5]), _ouo[6] >= 1 && (_oul.raig += 1 * _ouo[6]), _ouo[8] >= 1 && (_oul.raig += 1 * _ouo[8]), _ouo[10] >= 1 && (_oul.houm += 1 * _ouo[10])) : 2 == _oum ? (_ouo[3] >= 1 && (_oul.kaih += 1 * _ouo[3]), _ouo[4] >= 1 && (_oul.raig += 1 * _ouo[4]), _ouo[6] >= 1 && (_oul.raig += 1 * _ouo[6]), _ouo[8] >= 1 && (_oul.raig += 1 * _ouo[8]), _ouo[10] >= 1 && (_oul.houm += 1 * _ouo[10])) : 3 == _oum && (_ouo[4] >= 1 && (_oul.raig += 1 * _ouo[4]), _ouo[6] >= 1 && (_oul.raig += 1 * _ouo[6]), _ouo[8] >= 1 && (_oul.raig += 1 * _ouo[8]), _ouo[10] >= 1 && (_oul.houm += 1 * _ouo[10])), _oul;
        };
    },
    2258: (_out, _ouu, _ouv) => {
        'use strict';
        var _ouw = null;
        defineModule(_ouu);
        Object.defineProperty(_ouu, '__esModule', {
            'value': true
        }), _ouu.getSlot458PersonalEffect = void 0;
        var _oux = _ouv(74496);
        _ouu.getSlot458PersonalEffect = function(_ouy) {
            var _ouz = null,
                _ov0 = new _oux.SlotItemEffectModel(),
                _ov1 = 0,
                _ov2 = false;
            if (13 != _ouy.stype && 14 != _ouy.stype || (_ov2 = true), 109 == _ouy.ctype ? (_ov0.raig += 3, _ov0.kaih += 6, _ov1 = 1) : 71 == _ouy.ctype || 103 == _ouy.ctype ? (_ov0.raig += 3, _ov0.kaih += 4, _ov1 = 2) : 44 == _ouy.ctype && (_ov0.raig += 3, _ov0.kaih += 3, _ov1 = 3), 0 == _ov2 && 0 == _ov1) return _ov0;
            var _ov3 = [];
            [458, 461].forEach(function(_ov4) {
                var _ov5 = null,
                    _ov6 = _ouy.get_each_level_nums(_ov4);
                null == _ov3[_ov4] && (_ov3[_ov4] = []), _ov6.forEach(function(_ov7, _ov8) {
                    var _ov9 = null;
                    for (var _ova = 1; _ova <= _ouy.SLOT_LEVEL_MAX; _ova++) null == _ov3[_ov4][_ova] && (_ov3[_ov4][_ova] = 0), _ov8 >= _ova && (_ov3[_ov4][_ova] += _ov7);
                });
            });
            var _ovb = _ov3[458][2],
                _ovc = _ov3[458][3],
                _ovd = _ov3[458][4],
                _ove = _ov3[458][5],
                _ovf = _ov3[458][6],
                _ovg = _ov3[458][8],
                _ovh = _ov3[458][10],
                _ovi = _ov3[461][4];
            return _ov1 >= 1 && _ov1 <= 3 && (_ovd >= 1 && (_ov0.houm += 1 * _ovd), _ovf >= 1 && (_ov0.kaih += 1 * _ovf), _ovg >= 1 && (_ov0.raig += 1 * _ovg)), _ov2 && (_ovc >= 1 && (_ov0.kaih += 1 * _ovc), _ove >= 1 && (_ov0.raig += 1 * _ove), _ovh >= 1 && (_ov0.houm += 1 * _ovh), _ovb >= 1 && _ovi >= 1 && (_ov0.raig += 7, _ov0.houm += 5)), _ov0;
        };
    },
    43768: (_ovj, _ovk, _ovl) => {
        'use strict';
        var _ovm = null;
        defineModule(_ovk);
        Object.defineProperty(_ovk, '__esModule', {
            'value': true
        }), _ovk.getSlot463PersonalEffect = void 0;
        var _ovn = _ovl(74496);
        _ovk.getSlot463PersonalEffect = function(_ovo) {
            var _ovp = null,
                _ovq = new _ovn.SlotItemEffectModel(),
                _ovr = false,
                _ovs = new _ovn.SlotItemEffectModel(),
                _ovt = _ovo.get_slotnums(142),
                _ovu = _ovo.get_slotnums(460),
                _ovv = _ovt + _ovu;
            if (37 == _ovo.ctype && (_ovs.houg += 1, _ovs.tyku += 2, _ovs.kaih += 1, _ovs.houm += 1, _ovv >= 1 && (_ovq.tyku += 1, _ovq.kaih += 1, _ovq.houm += 1), _ovr = true), 916 != _ovo.ship_id && 911 != _ovo.ship_id && 546 != _ovo.ship_id || (_ovs.houg += 1, _ovs.kaih += 1, _ovs.houm += 2, _ovu >= 1 && (_ovq.houg += 1, _ovq.kaih += 1, _ovq.houm += 2), _ovr = true), 0 == _ovr) return _ovq;
            var _ovw = _ovo.get_slotnums(463);
            return _ovq.add(_ovs.multiply(_ovw)), _ovq;
        };
    },
    92174: (_ovx, _ovy, _ovz) => {
        'use strict';
        var _ow0 = null;
        defineModule(_ovy);
        Object.defineProperty(_ovy, '__esModule', {
            'value': true
        }), _ovy.getSlot464PersonalEffect = void 0;
        var _ow1 = _ovz(74496);
        _ovy.getSlot464PersonalEffect = function(_ow2) {
            var _ow3 = null,
                _ow4 = new _ow1.SlotItemEffectModel(),
                _ow5 = false,
                _ow6 = new _ow1.SlotItemEffectModel(),
                _ow7 = _ow2.get_slotnums(142),
                _ow8 = _ow2.get_slotnums(460),
                _ow9 = _ow7 + _ow8;
            if (37 == _ow2.ctype ? (_ow6.tyku += 3, _ow6.kaih += 2, _ow9 >= 1 && (_ow4.tyku += 2, _ow4.kaih += 1, _ow4.houm += 1), _ow5 = true) : 6 != _ow2.ctype && 73 != _ow2.ctype && 113 != _ow2.ctype || (_ow6.tyku = _ow6.tyku - 2, _ow6.kaih = _ow6.kaih - 2, _ow5 = true), 916 != _ow2.ship_id && 911 != _ow2.ship_id && 546 != _ow2.ship_id && 593 != _ow2.ship_id && 954 != _ow2.ship_id || (_ow6.tyku += 2, _ow6.kaih += 2, _ow8 >= 1 && (_ow4.houg += 2, _ow4.tyku += 2, _ow4.kaih += 2, _ow4.houm += 3), _ow5 = true), 0 == _ow5) return _ow4;
            var _owa = _ow2.get_slotnums(464);
            return _ow4.add(_ow6.multiply(_owa)), _ow4;
        };
    },
    38003: (_owb, _owc, _owd) => {
        'use strict';
        var _owe = null;
        defineModule(_owc);
        Object.defineProperty(_owc, '__esModule', {
            'value': true
        }), _owc.getSlot465PersonalEffect = void 0;
        var _owf = _owd(74496);
        _owc.getSlot465PersonalEffect = function(_owg) {
            var _owh = null,
                _owi = new _owf.SlotItemEffectModel(),
                _owj = false,
                _owk = new _owf.SlotItemEffectModel(),
                _owl = _owg.get_slotnums(142),
                _owm = _owg.get_slotnums(460),
                _own = _owl + _owm;
            if (916 == _owg.ship_id ? (_owk.houg += 2, _owk.kaih += 8, _owk.houm += 2, _owm >= 1 && (_owi.kaih += 2, _owi.houm += 1), _owj = true) : 911 != _owg.ship_id && 546 != _owg.ship_id || (_owk.houg += 1, _owk.kaih += 2, _owk.houm += 1, _owm >= 1 && (_owi.kaih += 1, _owi.houm += 1), _owj = true), 37 == _owg.ctype && _own >= 1 && (_owi.houg += 2, _owi.houm += 2), 0 == _owj) return _owi;
            var _owo = _owg.get_slotnums(465);
            return _owi.add(_owk.multiply(_owo)), _owi;
        };
    },
    65455: (_owp, _owq, _owr) => {
        'use strict';
        var _ows = null;
        defineModule(_owq);
        Object.defineProperty(_owq, '__esModule', {
            'value': true
        }), _owq.getSlot466PersonalEffect = void 0;
        var _owt = _owr(74496);
        _owq.getSlot466PersonalEffect = function(_owu) {
            var _owv = null,
                _oww = new _owt.SlotItemEffectModel(),
                _owx = false,
                _owy = new _owt.SlotItemEffectModel();
            if (277 == _owu.ship_id || 278 == _owu.ship_id || 156 == _owu.ship_id || 288 == _owu.ship_id || 112 == _owu.ship_id || 280 == _owu.ship_id || 279 == _owu.ship_id ? (_owy.houg += 1, _owy.houm += 1, _owx = true) : 461 == _owu.ship_id || 462 == _owu.ship_id || 466 == _owu.ship_id || 467 == _owu.ship_id ? (_owy.houg += 2, _owy.kaih += 2, _owy.houm += 1, _owx = true) : 594 != _owu.ship_id && 698 != _owu.ship_id && 646 != _owu.ship_id && 599 != _owu.ship_id && 610 != _owu.ship_id && 196 != _owu.ship_id && 197 != _owu.ship_id || (_owy.houg += 1, _owy.kaih += 1, _owy.houm += 2, _owx = true), 0 == _owx) return _oww;
            var _owz = _owu.get_slotnums(466);
            return _oww.add(_owy.multiply(_owz)), _oww;
        };
    },
    70362: (_ox0, _ox1, _ox2) => {
        'use strict';
        var _ox3 = null;
        defineModule(_ox1);
        Object.defineProperty(_ox1, '__esModule', {
            'value': true
        }), _ox1.getSlot467PersonalEffect = void 0;
        var _ox4 = _ox2(74496);
        _ox1.getSlot467PersonalEffect = function(_ox5) {
            var _ox6 = null,
                _ox7 = new _ox4.SlotItemEffectModel(),
                _ox8 = false,
                _ox9 = new _ox4.SlotItemEffectModel();
            if ('アメリカ' == _ox5.getCountryName()) {
                for (var _oxa = _ox5.getUSSWaterRaderDict(), _oxb = _ox5.getUSSAirRaderDict(), _oxc = 0, _oxd = 0, _oxe = 0, _oxf = _ox5.have_slot_ids(); _oxe < _oxf.length; _oxe++) {
                    var _oxg = _oxf[_oxe];
                    _oxa[parseInt(_oxg)] && (_oxc += _ox5.get_slotnums(parseInt(_oxg))), _oxb[parseInt(_oxg)] && (_oxd += _ox5.get_slotnums(parseInt(_oxg)));
                }
                _ox9.houg += 1, _ox9.tyku += 1, _ox9.kaih += 2, _oxc >= 1 && (_ox7.houg += 1, _ox7.tyku += 1, _ox7.kaih += 1, _ox7.houm += 2), _oxd >= 1 && (_ox7.tyku += 2, _ox7.kaih += 2), 65 != _ox5.ctype && 93 != _ox5.ctype && 102 != _ox5.ctype && 107 != _ox5.ctype && 125 != _ox5.ctype || (_ox9.tyku += 2, _ox9.kaih += 1), _ox8 = true;
            }
            if (0 == _ox8) return _ox7;
            var _oxh = _ox5.get_slotnums(467);
            return _ox7.add(_ox9.multiply(_oxh)), _ox7;
        };
    },
    68086: (_oxi, _oxj, _oxk) => {
        'use strict';
        var _oxl = null;
        defineModule(_oxj);
        Object.defineProperty(_oxj, '__esModule', {
            'value': true
        }), _oxj.getSlot470PersonalEffect = void 0;
        var _oxm = _oxk(74496);
        _oxj.getSlot470PersonalEffect = function(_oxn) {
            var _oxo = null,
                _oxp = new _oxm.SlotItemEffectModel(),
                _oxq = false,
                _oxr = new _oxm.SlotItemEffectModel(),
                _oxs = _oxn.get_slotnums(470),
                _oxt = _oxn.get_slotnums(529),
                _oxu = _oxs + _oxt,
                _oxv = _oxn.get_each_level_over_nums([470, 529]),
                _oxw = (_oxv.slot[470], _oxv.slot[529]),
                _oxx = _oxv.total,
                _oxy = 0;
            23 == _oxn.ctype || 18 == _oxn.ctype ? (_oxr.houg += 1, _oxq = true, _oxy = 1) : 30 == _oxn.ctype && (_oxr.houg += 2, _oxq = true, _oxy = 2), ('しぐれ' == _oxn.yomi || 'ゆきかぜ' == _oxn.yomi || 'いそかぜ' == _oxn.yomi) && (_oxr.kaih += 2, _oxq = true), 405 == _oxn.ship_id || 246 == _oxn.ship_id || 144 == _oxn.ship_id || 145 == _oxn.ship_id || 497 == _oxn.ship_id ? (_oxt >= 1 && (_oxp.houg += 1 * _oxt, _oxp.tyku += 1 * _oxt, _oxp.houm += 1 * _oxt, _oxp.kaih += 1 * _oxt), 2 == _oxt ? _oxp.houg += 1 : _oxt >= 3 && (_oxp.houg += 3), _oxw[8] >= 1 && (_oxp.tyku += 1 * _oxw[8]), _oxw[10] >= 1 && (_oxp.houg += 1 * _oxw[10])) : 323 == _oxn.ship_id || 498 == _oxn.ship_id || 961 == _oxn.ship_id ? (_oxt >= 1 && (_oxp.houg += 2 * _oxt, _oxp.tyku += 2 * _oxt, _oxp.houm += 1 * _oxt, _oxp.kaih += 1 * _oxt), 2 == _oxt ? _oxp.houg += 2 : _oxt >= 3 && (_oxp.houg += 4), _oxw[6] >= 1 && (_oxp.tyku += 1 * _oxw[6]), _oxw[8] >= 1 && (_oxp.houm += 1 * _oxw[8]), _oxw[10] >= 1 && (_oxp.houg += 1 * _oxw[10])) : 975 == _oxn.ship_id && (_oxt >= 1 && (_oxp.houg += 3 * _oxt, _oxp.tyku += 3 * _oxt, _oxp.houm += 2 * _oxt, _oxp.kaih += 2 * _oxt), 2 == _oxt ? _oxp.houg += 3 : _oxt >= 3 && (_oxp.houg += 6), _oxw[4] >= 1 && (_oxp.tyku += 1 * _oxw[4]), _oxw[6] >= 1 && (_oxp.houg += 1 * _oxw[6]), _oxw[8] >= 1 && (_oxp.houm += 1 * _oxw[8]), _oxw[10] >= 1 && (_oxp.houg += 1 * _oxw[10])), 961 == _oxn.ship_id && (_oxr.houg += 3, _oxr.houm += 3, _oxr.kaih += 2, _oxq = true), 566 != _oxn.ship_id && 567 != _oxn.ship_id && 568 != _oxn.ship_id && 656 != _oxn.ship_id && 670 != _oxn.ship_id && 915 != _oxn.ship_id && 651 != _oxn.ship_id && 145 != _oxn.ship_id && 961 != _oxn.ship_id && 951 != _oxn.ship_id || (_oxp.houg += 1, _oxp.houm += 2, _oxu >= 2 && (_oxp.houg += 2), _oxx[5] >= 1 && (_oxp.houm += 1 * _oxx[5]), _oxx[8] >= 1 && (_oxp.houg += 1 * _oxx[8]), _oxx[10] >= 1 && (_oxp.houm += 1 * _oxx[10])), _oxq && _oxp.add(_oxr.multiply(_oxu));
            var _oxz = _oxn.get_have_rader_nums(),
                _oy0 = _oxz.water_rader,
                _oy1 = _oxz.air_rader;
            return _oy0 >= 1 && (1 == _oxy ? (_oxp.houg += 1, _oxp.raig += 3, _oxp.kaih += 1, _oxp.houm += 1) : 2 == _oxy && (_oxp.houg += 2, _oxp.raig += 3, _oxp.kaih += 1, _oxp.houm += 3)), _oy1 >= 1 && (_oxt >= 1 && (_oxp.tyku += 2, _oxp.kaih += 2), 2 == _oxt ? _oxp.tyku += 2 : _oxt >= 3 && (_oxp.tyku += 4)), _oxp;
        };
    },
    78173: (_oy2, _oy3, _oy4) => {
        'use strict';
        var _oy5 = null;
        defineModule(_oy3);
        Object.defineProperty(_oy3, '__esModule', {
            'value': true
        }), _oy3.getSlot471PersonalEffect = void 0;
        var _oy6 = _oy4(74496);
        _oy3.getSlot471PersonalEffect = function(_oy7) {
            var _oy8 = null,
                _oy9 = new _oy6.SlotItemEffectModel(),
                _oya = false,
                _oyb = new _oy6.SlotItemEffectModel(),
                _oyc = 0;
            if ('フランス' == _oy7.getCountryName() && (_oyb.houg += 2, _oyb.kaih += 2, _oyb.houm += 2, _oya = true, _oyc = 1), 79 == _oy7.ctype && (_oyb.houg += 2, _oyb.houm += 1, _oya = true), 0 == _oya) return _oy9;
            var _oyd = _oy7.get_slotnums(471);
            if (_oy9.add(_oyb.multiply(_oyd)), 0 == _oyc) return _oy9;
            var _oye = _oy7.get_each_level_nums(471),
                _oyf = 0,
                _oyg = 0;
            if (_oyc > 0 && _oye.forEach(function(_oyh, _oyi) {
                    _oyi >= 6 && (_oyf += _oyh), _oyi >= 8 && (_oyg += _oyh);
                }), 1 == _oyc) {
                _oyf >= 1 && (_oy9.kaih += 1 * _oyf, _oy9.houm += 1 * _oyf), _oyg >= 1 && (_oy9.houg += 1 * _oyg, _oy9.kaih += 1 * _oyg, _oy9.houm += 1 * _oyg);
                var _oyj = _oye[10];
                _oyj >= 1 && (_oy9.houg += 1 * _oyj, _oy9.houm += 1 * _oyj);
            }
            return _oy9;
        };
    },
    22581: (_oyk, _oyl, _oym) => {
        'use strict';
        var _oyn = null;
        defineModule(_oyl);
        Object.defineProperty(_oyl, '__esModule', {
            'value': true
        }), _oyl.getSlot472PersonalEffect = void 0;
        var _oyo = _oym(74496);
        _oyl.getSlot472PersonalEffect = function(_oyp) {
            var _oyq = null,
                _oyr = new _oyo.SlotItemEffectModel(),
                _oys = false,
                _oyt = new _oyo.SlotItemEffectModel(),
                _oyu = _oyp.getCountryName();
            if ('アメリカ' == _oyu && (_oyt.tais += 2, _oys = true), 'イギリス' == _oyu && (_oyt.tais += 1, _oys = true), 1 == _oyp.stype && (_oyt.kaih += 1, _oys = true), _oys) {
                var _oyv = _oyp.get_slotnums(472);
                _oyr.add(_oyt.multiply(_oyv));
            }
            return 920 == _oyp.ship_id && (_oyr.tais += 1, _oyr.kaih += 1, _oyr.houm += 1), _oyr;
        };
    },
    13053: (_oyw, _oyx, _oyy) => {
        'use strict';
        var _oyz = null;
        defineModule(_oyx);
        Object.defineProperty(_oyx, '__esModule', {
            'value': true
        }), _oyx.getSlot473PersonalEffect = void 0;
        var _oz0 = _oyy(74496);
        _oyx.getSlot473PersonalEffect = function(_oz1) {
            var _oz2 = null,
                _oz3 = new _oz0.SlotItemEffectModel(),
                _oz4 = false,
                _oz5 = new _oz0.SlotItemEffectModel(),
                _oz6 = _oz1.getCountryName();
            if ('アメリカ' == _oz6 && (_oz5.houg += 1, _oz5.kaih += 1, _oz5.tyku += 1, _oz4 = true), 'イギリス' == _oz6 && (_oz5.houg += 1, _oz5.kaih += 1, _oz4 = true), 0 == _oz4) return _oz3;
            var _oz7 = _oz1.get_slotnums(473);
            return _oz3.add(_oz5.multiply(_oz7)), _oz3;
        };
    },
    47874: (_oz8, _oz9, _oza) => {
        'use strict';
        var _ozb = null;
        defineModule(_oz9);
        Object.defineProperty(_oz9, '__esModule', {
            'value': true
        }), _oz9.getSlot474PersonalEffect = void 0;
        var _ozc = _oza(74496);
        _oz9.getSlot474PersonalEffect = function(_ozd) {
            var _oze = null,
                _ozf = new _ozc.SlotItemEffectModel(),
                _ozg = false,
                _ozh = new _ozc.SlotItemEffectModel(),
                _ozi = _ozd.getCountryName();
            if ('アメリカ' == _ozi && (_ozh.houg += 2, _ozh.kaih += 1, _ozh.tyku += 1, _ozg = true), 'イギリス' == _ozi && (_ozh.houg += 1, _ozh.kaih += 1, _ozh.tyku += 1, _ozg = true), 'フランス' == _ozi && (_ozh.houg += 1, _ozh.tyku += 1, _ozg = true), 707 != _ozd.ship_id && 930 != _ozd.ship_id || (_ozh.houg += 1, _ozh.kaih += 1, _ozg = true), 0 == _ozg) return _ozf;
            var _ozj = _ozd.get_slotnums(474);
            return _ozf.add(_ozh.multiply(_ozj)), _ozf;
        };
    },
    42788: (_ozk, _ozl, _ozm) => {
        'use strict';
        var _ozn = null;
        defineModule(_ozl);
        Object.defineProperty(_ozl, '__esModule', {
            'value': true
        }), _ozl.getSlot478PersonalEffect = void 0;
        var _ozo = _ozm(74496);
        _ozl.getSlot478PersonalEffect = function(_ozp) {
            var _ozq = null,
                _ozr = new _ozo.SlotItemEffectModel(),
                _ozs = _ozp.get_each_level_nums(478),
                _ozt = [];
            return _ozs.forEach(function(_ozu, _ozv) {
                var _ozw = null;
                for (var _ozx = 1; _ozx <= _ozp.SLOT_LEVEL_MAX; _ozx++) _ozv >= _ozx && (null == _ozt[_ozx] && (_ozt[_ozx] = 0), _ozt[_ozx] += _ozu);
            }), _ozt.every(function(_ozy) {
                return 0 == _ozy;
            }) || (_ozt[1] >= 1 && (_ozr.houg += 1), _ozt[2] >= 1 && (_ozr.houm += 1), _ozt[3] >= 1 && (_ozr.kaih += 1), _ozt[4] >= 1 && (_ozr.baku += 1), _ozt[5] >= 1 && (_ozr.raig += 1), _ozt[6] >= 1 && (_ozr.tyku += 1), _ozt[7] >= 1 && (_ozr.houg += 1), _ozt[8] >= 1 && (_ozr.houm += 1), _ozt[9] >= 1 && (_ozr.kaih += 1), _ozt[10] >= 1 && (_ozr.houg += 1)), _ozr;
        };
    },
    22218: (_ozz, _p00, _p01) => {
        'use strict';
        var _p02 = null;
        defineModule(_p00);
        Object.defineProperty(_p00, '__esModule', {
            'value': true
        }), _p00.getSlot47PersonalEffect = void 0;
        var _p03 = _p01(74496);
        _p00.getSlot47PersonalEffect = function(_p04) {
            var _p05 = null,
                _p06 = new _p03.SlotItemEffectModel(),
                _p07 = new _p03.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_p04.yomi) >= 0 ? (_p07.tais += 3, _p07.kaih += 2, _p07.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_p04.yomi) >= 0 && (_p07.tais += 2, _p07.kaih += 2), !_p07.exists()) return _p06;
            var _p08 = _p04.get_slotnums(47) + _p04.get_slotnums(438);
            return _p06 = _p07.multiply(_p08);
        };
    },
    57664: (_p09, _p0a, _p0b) => {
        'use strict';
        var _p0c = null;
        defineModule(_p0a);
        Object.defineProperty(_p0a, '__esModule', {
            'value': true
        }), _p0a.getSlot483PersonalEffect = void 0;
        var _p0d = _p0b(74496);
        _p0a.getSlot483PersonalEffect = function(_p0e) {
            var _p0f = null,
                _p0g = new _p0d.SlotItemEffectModel(),
                _p0h = 0,
                _p0i = 0,
                _p0j = 0,
                _p0k = 0,
                _p0l = 0,
                _p0m = 0,
                _p0n = 0;
            if (6 == _p0e.ctype ? (_p0g.houg += 2, _p0g.tyku += 3, _p0g.houm += 1, _p0h = 1) : 2 == _p0e.ctype ? (_p0g.houg += 1, _p0g.tyku += 2, _p0g.kaih += 2, _p0g.houm += 1, _p0i = 1) : 37 == _p0e.ctype && (_p0j = 1), 8 == _p0e.stype || 9 == _p0e.stype || 10 == _p0e.stype ? _p0k = 1 : 5 != _p0e.stype && 6 != _p0e.stype || (_p0l = 1), 149 == _p0e.ship_id ? (_p0g.houg += 2, _p0g.tyku += 2) : 591 == _p0e.ship_id ? (_p0g.houg += 3, _p0g.tyku += 3, _p0g.kaih += 1) : 150 == _p0e.ship_id ? (_p0g.houg += 1, _p0g.tyku += 1) : 592 == _p0e.ship_id ? (_p0g.houg += 2, _p0g.tyku += 2, _p0g.kaih += 2) : 151 == _p0e.ship_id ? (_p0g.houg += 1, _p0g.tyku += 2, _p0g.kaih += 2) : 593 == _p0e.ship_id ? (_p0g.houg += 2, _p0g.tyku += 5, _p0g.kaih += 3) : 954 == _p0e.ship_id ? (_p0g.houg += 2, _p0g.tyku += 4, _p0g.kaih += 2) : 694 == _p0e.ship_id ? (_p0g.houg += 3, _p0g.tyku += 2, _p0g.kaih += 1) : 152 == _p0e.ship_id ? (_p0g.houg += 2, _p0g.tyku += 2) : 911 == _p0e.ship_id || 916 == _p0e.ship_id || 546 == _p0e.ship_id ? (_p0g.houg += 2, _p0g.tyku += 2, _p0g.kaih += 2, _p0m = 1) : 553 == _p0e.ship_id || 554 == _p0e.ship_id ? (_p0g.houg += 1, _p0g.tyku += 2, _p0g.kaih += 1, _p0n = 1) : 541 == _p0e.ship_id || 411 == _p0e.ship_id || 412 == _p0e.ship_id ? (_p0g.houg += 1, _p0g.tyku += 2) : 573 == _p0e.ship_id && (_p0g.houg += 2, _p0g.tyku += 2, _p0g.kaih += 1), 0 == [_p0h, _p0i, _p0j, _p0k, _p0l, _p0m, _p0n].reduce(function(_p0o, _p0p) {
                    return _p0o + _p0p;
                }, 0)) return _p0g;
            var _p0q = _p0e.get_each_level_nums(483),
                _p0r = 0,
                _p0s = [];
            return _p0q.forEach(function(_p0t, _p0u) {
                var _p0v = null;
                _p0u >= 6 && (_p0r += _p0t);
                for (var _p0w = 1; _p0w <= _p0e.SLOT_LEVEL_MAX; _p0w++) null == _p0s[_p0w] && (_p0s[_p0w] = 0), _p0u >= _p0w && (_p0s[_p0w] += _p0t);
            }), 1 == _p0h ? (_p0r >= 1 && (_p0g.houm += 1), _p0q[10] >= 1 && (_p0g.houm += 1)) : 1 == _p0i ? (_p0s[5] >= 1 && (_p0g.kaih += 1), _p0s[6] >= 1 && (_p0g.houm += 1), _p0s[10] >= 1 && (_p0g.kaih += 1)) : 1 == _p0j && (_p0s[6] >= 1 && (_p0g.houm += 1), _p0s[10] >= 1 && (_p0g.kaih += 1)), 1 == _p0k ? (_p0s[2] >= 1 && (_p0g.tyku += 1), _p0s[4] >= 1 && (_p0g.houg += 1), _p0s[7] >= 1 && (_p0g.kaih += 1), _p0s[8] >= 1 && (_p0g.tyku += 1), _p0s[9] >= 1 && (_p0g.houg += 1)) : 1 == _p0l && (_p0s[2] >= 1 && (_p0g.tyku += 1), _p0s[4] >= 1 && (_p0g.houg += 1), _p0s[6] >= 1 && (_p0g.kaih += 1), _p0s[8] >= 1 && (_p0g.houm += 1), _p0s[10] >= 1 && (_p0g.houg += 1)), 1 == _p0m ? _p0s[5] >= 1 && (_p0g.houm += 1) : 1 == _p0n && (_p0s[1] >= 1 && (_p0g.houm += 1), _p0s[3] >= 1 && (_p0g.houm += 1)), _p0g;
        };
    },
    44990: (_p0x, _p0y, _p0z) => {
        'use strict';
        var _p10 = null;
        defineModule(_p0y);
        Object.defineProperty(_p0y, '__esModule', {
            'value': true
        }), _p0y.getSlot485PersonalEffect = void 0;
        var _p11 = _p0z(74496);
        _p0y.getSlot485PersonalEffect = function(_p12) {
            var _p13 = null,
                _p14 = new _p11.SlotItemEffectModel(),
                _p15 = false,
                _p16 = new _p11.SlotItemEffectModel();
            if (9 == _p12.ctype && (_p16.houg += 1, _p16.kaih += 2, _p16.tyku += 3, _p15 = true), 501 == _p12.ship_id || 506 == _p12.ship_id ? (_p16.kaih += 1, _p16.tyku += 2, _p16.houm += 1, _p15 = true) : 502 != _p12.ship_id && 507 != _p12.ship_id || (_p16.kaih += 1, _p16.tyku += 1, _p16.houm += 1, _p15 = true), _p15) {
                var _p17 = _p12.get_slotnums(485);
                _p14.add(_p16.multiply(_p17));
            }
            var _p18 = _p12.get_each_level_nums(485),
                _p19 = 0,
                _p1a = 0,
                _p1b = 0,
                _p1c = _p18[10];
            return _p18.forEach(function(_p1d, _p1e) {
                _p1e >= 3 && (_p19 += _p1d), _p1e >= 5 && (_p1a += _p1d), _p1e >= 7 && (_p1b += _p1d);
            }), _p19 > 0 && (_p14.houg += 1 * _p19), _p1a > 0 && (_p14.tyku += 1 * _p1a), _p1b > 0 && (_p14.kaih += 1 * _p1b), _p1c > 0 && (_p14.houm += 1 * _p1c), _p14;
        };
    },
    83957: (_p1f, _p1g, _p1h) => {
        'use strict';
        var _p1i = null;
        defineModule(_p1g);
        Object.defineProperty(_p1g, '__esModule', {
            'value': true
        }), _p1g.getSlot486PersonalEffect = void 0;
        var _p1j = _p1h(74496);
        _p1g.getSlot486PersonalEffect = function(_p1k) {
            var _p1l = null,
                _p1m = new _p1j.SlotItemEffectModel(),
                _p1n = false,
                _p1o = new _p1j.SlotItemEffectModel();
            if (894 == _p1k.ship_id || 899 == _p1k.ship_id ? (_p1o.houg += 4, _p1o.tyku += 4, _p1o.kaih += 3, _p1o.houm += 2, _p1n = true) : 888 != _p1k.ship_id && 883 != _p1k.ship_id || (_p1o.houg += 2, _p1o.tyku += 2, _p1o.kaih += 2, _p1o.houm += 1, _p1n = true), _p1n) {
                var _p1p = _p1k.get_slotnums(486);
                _p1m.add(_p1o.multiply(_p1p));
            }
            var _p1q = _p1k.get_each_level_nums(486),
                _p1r = 0,
                _p1s = 0,
                _p1t = _p1q[10];
            return _p1q.forEach(function(_p1u, _p1v) {
                _p1v >= 6 && (_p1r += _p1u), _p1v >= 8 && (_p1s += _p1u);
            }), _p1r > 0 && (_p1m.kaih += 1 * _p1r, _p1m.houm += 1 * _p1r), _p1s > 0 && (_p1m.tyku += 1 * _p1s, _p1m.kaih += 1 * _p1s), _p1t > 0 && (_p1m.houg += 1 * _p1t, _p1m.houm += 1 * _p1t), _p1m;
        };
    },
    78539: (_p1w, _p1x, _p1y) => {
        'use strict';
        var _p1z = null;
        defineModule(_p1x);
        Object.defineProperty(_p1x, '__esModule', {
            'value': true
        }), _p1x.getSlot487PersonalEffect = void 0;
        var _p20 = _p1y(74496);
        _p1x.getSlot487PersonalEffect = function(_p21) {
            var _p22 = null,
                _p23 = new _p20.SlotItemEffectModel(),
                _p24 = false,
                _p25 = new _p20.SlotItemEffectModel();
            if (894 == _p21.ship_id || 899 == _p21.ship_id ? (_p25.houg += 5, _p25.tyku += 3, _p25.kaih += 2, _p25.houm += 4, _p24 = true) : 888 != _p21.ship_id && 883 != _p21.ship_id || (_p25.houg += 3, _p25.tyku += 1, _p25.kaih += 1, _p25.houm += 2, _p24 = true), _p24) {
                var _p26 = _p21.get_slotnums(487);
                _p23.add(_p25.multiply(_p26));
            }
            var _p27 = _p21.get_each_level_nums(487),
                _p28 = 0,
                _p29 = 0,
                _p2a = _p27[10];
            return _p27.forEach(function(_p2b, _p2c) {
                _p2c >= 6 && (_p28 += _p2b), _p2c >= 8 && (_p29 += _p2b);
            }), _p28 > 0 && (_p23.houg += 1 * _p28, _p23.kaih += 1 * _p28), _p29 > 0 && (_p23.tyku += 1 * _p29, _p23.houm += 1 * _p29), _p2a > 0 && (_p23.houg += 1 * _p2a, _p23.houm += 1 * _p2a), _p23;
        };
    },
    96282: (_p2d, _p2e, _p2f) => {
        'use strict';
        var _p2g = null;
        defineModule(_p2e);
        Object.defineProperty(_p2e, '__esModule', {
            'value': true
        }), _p2e.getSlot488PersonalEffect = void 0;
        var _p2h = _p2f(74496);
        _p2e.getSlot488PersonalEffect = function(_p2i) {
            var _p2j = null,
                _p2k = new _p2h.SlotItemEffectModel(),
                _p2l = false,
                _p2m = new _p2h.SlotItemEffectModel(),
                _p2n = 0,
                _p2o = _p2i.getCountryName(),
                _p2p = {
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
                }[_p2i.ship_id];
            if (('日本' == _p2o && 2 == _p2i.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_p2i.ctype] && 1 == _p2i.stype) && (_p2m.tais += 1, _p2m.kaih += 1, _p2l = true), 1 == _p2p ? (_p2m.tais += 5, _p2m.kaih += 4, _p2m.houm += 2, _p2l = true, _p2n = 1) : 2 == _p2p ? (_p2m.tais += 2, _p2m.kaih += 1, _p2m.houm += 1, _p2l = true, _p2n = 2) : 3 == _p2p && (_p2m.tais += 1, _p2l = true, _p2n = 2), 0 == _p2l) return _p2k;
            var _p2q = _p2i.get_slotnums(488);
            if (_p2k.add(_p2m.multiply(_p2q)), 0 == _p2n) return _p2k;
            var _p2r = _p2i.get_each_level_nums(488),
                _p2s = [];
            return _p2r.forEach(function(_p2t, _p2u) {
                var _p2v = null;
                for (var _p2w = 1; _p2w <= _p2i.SLOT_LEVEL_MAX; _p2w++) _p2u >= _p2w && (null == _p2s[_p2w] && (_p2s[_p2w] = 0), _p2s[_p2w] += _p2t);
            }), 1 == _p2n ? (_p2s[3] >= 1 && (_p2k.kaih += 1 * _p2s[3]), _p2s[5] >= 1 && (_p2k.tais += 1 * _p2s[5]), _p2s[7] >= 1 && (_p2k.houm += 1 * _p2s[7]), _p2s[8] >= 1 && (_p2k.kaih += 1 * _p2s[8]), _p2s[9] >= 1 && (_p2k.tais += 1 * _p2s[9]), _p2s[10] >= 1 && (_p2k.tais += 1 * _p2s[10])) : 2 == _p2n && (_p2s[5] >= 1 && (_p2k.tais += 1 * _p2s[5]), _p2s[7] >= 1 && (_p2k.kaih += 1 * _p2s[7]), _p2s[9] >= 1 && (_p2k.houm += 1 * _p2s[9]), _p2s[10] >= 1 && (_p2k.tais += 1 * _p2s[10])), _p2k;
        };
    },
    49679: (_p2x, _p2y, _p2z) => {
        'use strict';
        var _p30 = null;
        defineModule(_p2y);
        Object.defineProperty(_p2y, '__esModule', {
            'value': true
        }), _p2y.getSlot489PersonalEffect = void 0;
        var _p31 = _p2z(74496);
        _p2y.getSlot489PersonalEffect = function(_p32) {
            var _p33 = null,
                _p34 = new _p31.SlotItemEffectModel(),
                _p35 = false,
                _p36 = new _p31.SlotItemEffectModel();
            if ('あきつまる' != _p32.yomi && 'やましおまる' != _p32.yomi && 'くまのまる' != _p32.yomi || (_p36.tyku = _p36.tyku + 2, _p36.kaih = _p36.kaih + 1, _p36.houg = _p36.houg + 1, _p36.tais = _p36.tais + 1, _p36.houm = _p36.houm + 1, _p35 = true), 717 != _p32.ship_id && 948 != _p32.ship_id || (_p36.tyku = _p36.tyku + 2, _p36.kaih = _p36.kaih + 2, _p36.houg = _p36.houg + 2, _p36.tais = _p36.tais + 1, _p36.houm = _p36.houm + 1, _p35 = true), _p35) {
                var _p37 = _p32.get_slotnums(489) + _p32.get_slotnums(491);
                _p34.add(_p36.multiply(_p37));
            }
            var _p38 = _p32.get_each_level_nums(489),
                _p39 = _p32.get_each_level_nums(491),
                _p3a = 0,
                _p3b = 0,
                _p3c = 0;
            _p38.forEach(function(_p3d, _p3e) {
                _p3e >= 3 && (_p3a += _p3d), _p3e >= 6 && (_p3b += _p3d), _p3e >= 8 && (_p3c += _p3d);
            }), _p39.forEach(function(_p3f, _p3g) {
                _p3g >= 3 && (_p3a += _p3f), _p3g >= 6 && (_p3b += _p3f), _p3g >= 8 && (_p3c += _p3f);
            });
            var _p3h = _p38[10] + _p39[10];
            return _p3a >= 1 && (_p34.kaih = _p34.kaih + 1 * _p3a), _p3b >= 1 && (_p34.tais = _p34.tais + 1 * _p3b), _p3c >= 1 && (_p34.houm = _p34.houm + 1 * _p3c), _p3h >= 1 && (_p34.houg = _p34.houg + 1 * _p3h), _p34;
        };
    },
    90312: function(_p3i, _p3j, _p3k) {
        'use strict';
        var _p3l = null;
        var _p3m = this && this.__importDefault || function(_p3n) {
            var _p3o = null;
            return _p3n && _p3n.__esModule ? _p3n : {
                'default': _p3n
            };
        };
        defineModule(_p3j);
        Object.defineProperty(_p3j, '__esModule', {
            'value': true
        }), _p3j.getSlot502PersonalEffect = void 0;
        var _p3p = _p3k(74496),
            _p3q = _p3m(_p3k(18622));
        _p3j.getSlot502PersonalEffect = function(_p3r) {
            var _p3s = null,
                _p3t = new _p3p.SlotItemEffectModel(),
                _p3u = _p3r.get_slotnums(502),
                _p3v = {
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
                _p3w = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3,
                    694: 1
                },
                _p3x = {
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
                _p3y = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _p3z = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_p3v[_p3r.ship_id]) {
                var _p40 = _p3v[_p3r.ship_id];
                _p3t.houg += _p3u * _p40;
            }
            if (_p3w[_p3r.ship_id]) {
                var _p41 = _p3w[_p3r.ship_id];
                _p3t.tyku += _p3u * _p41;
            }
            if (_p3x[_p3r.ship_id]) {
                var _p42 = _p3x[_p3r.ship_id],
                    _p43 = _p3r.get_each_level_nums(502),
                    _p44 = [];
                _p43.forEach(function(_p45, _p46) {
                    var _p47 = null;
                    for (var _p48 = 1; _p48 <= _p3r.SLOT_LEVEL_MAX; _p48++) _p46 >= _p48 && (null == _p44[_p48] && (_p44[_p48] = 0), _p44[_p48] += _p45);
                }), 1 == _p42 ? (_p3t.kaih += 3 * _p3u, _p44[1] > 0 && (_p3t.kaih += 1 * _p44[1]), _p44[3] > 0 && (_p3t.tyku += 1 * _p44[3]), _p44[5] > 0 && (_p3t.houg += 1 * _p44[5]), _p44[7] > 0 && (_p3t.kaih += 1 * _p44[7]), _p44[8] > 0 && (_p3t.tyku += 1 * _p44[8]), _p44[9] > 0 && (_p3t.houg += 1 * _p44[9]), _p44[10] > 0 && (_p3t.tyku += 1 * _p44[10])) : 2 == _p42 ? (_p3t.kaih += 1 * _p3u, _p44[2] > 0 && 151 == _p3r.ship_id && (_p3t.kaih += 1 * _p44[2]), _p44[4] > 0 && (_p3t.tyku += 1 * _p44[4]), _p44[6] > 0 && (_p3t.houg += 1 * _p44[6]), _p44[8] > 0 && (_p3t.kaih += 1 * _p44[8]), _p44[10] > 0 && (_p3t.tyku += 1 * _p44[10])) : 3 == _p42 && (_p44[5] > 0 && (_p3t.kaih += 1 * _p44[5]), _p44[8] > 0 && (_p3t.houg += 1 * _p44[8]), _p44[10] > 0 && (_p3t.tyku += 1 * _p44[10]));
            }
            if (_p3y[_p3r.ship_id]) {
                for (var _p49 = 0, _p4a = 0, _p4b = _p3r.have_slot_ids(); _p4a < _p4b.length; _p4a++) {
                    var _p4c = _p4b[_p4a],
                        _p4d = _p3q.default.model.slot.getMst(_p4c),
                        _p4e = _p4d.equipType;
                    12 != _p4e && 13 != _p4e || (_p4d.sakuteki >= 5 && (_p49 += _p3r.get_slotnums(parseInt(_p4c))), _p4d.taiku >= 2 && _p3r.get_slotnums(parseInt(_p4c)));
                }
                0;
                var _p4f = _p3y[_p3r.ship_id];
                1 == _p4f && _p49 >= 1 ? (_p3t.houg += 3, _p3t.kaih += 4) : 2 == _p4f && _p49 >= 1 && (_p3t.houg += 2, _p3t.kaih += 2);
            }
            if (_p3z[_p3r.ship_id]) {
                var _p4g = _p3z[_p3r.ship_id],
                    _p4h = [],
                    _p4i = [],
                    _p4j = _p3r.have_slot_ids();
                [410, 411].forEach(function(_p4k) {
                    var _p4l = null;
                    _p4j.indexOf(_p4k.toString()) > -1 && (_p4i[_p4k] = _p3r.get_each_level_nums(_p4k), null == _p4h[_p4k] && (_p4h[_p4k] = []), _p4i[_p4k].forEach(function(_p4m, _p4n) {
                        var _p4o = null;
                        for (var _p4p = 1; _p4p <= _p3r.SLOT_LEVEL_MAX; _p4p++) null == _p4h[_p4k][_p4p] && (_p4h[_p4k][_p4p] = 0), _p4n >= _p4p && (_p4h[_p4k][_p4p] += _p4m);
                    }));
                });
                var _p4q = _p4i[410],
                    _p4r = _p4i[411];
                if (1 == _p4g) {
                    if (_p4q) {
                        _p3t.tyku += 1;
                        var _p4s = _p4h[410];
                        _p4s[7] >= 1 && (_p3t.houg += 1), _p4s[10] >= 1 && (_p3t.kaih += 1);
                    }
                    if (_p4r) {
                        _p3t.tyku += 2;
                        var _p4t = _p4h[411];
                        _p4t[2] >= 1 && (_p3t.houg += 1), _p4t[4] >= 1 && (_p3t.kaih += 1), _p4t[6] >= 1 && (_p3t.houm += 1), _p4t[8] >= 1 && (_p3t.tyku += 1), _p4t[10] >= 1 && (_p3t.houg += 1);
                    }
                }
            }
            return _p3t;
        };
    },
    86856: function(_p4u, _p4v, _p4w) {
        'use strict';
        var _p4x = null;
        var _p4y = this && this.__importDefault || function(_p4z) {
            var _p50 = null;
            return _p4z && _p4z.__esModule ? _p4z : {
                'default': _p4z
            };
        };
        defineModule(_p4v);
        Object.defineProperty(_p4v, '__esModule', {
            'value': true
        }), _p4v.getSlot503PersonalEffect = void 0;
        var _p51 = _p4w(74496),
            _p52 = _p4y(_p4w(18622));
        _p4v.getSlot503PersonalEffect = function(_p53) {
            var _p54 = null,
                _p55 = new _p51.SlotItemEffectModel(),
                _p56 = _p53.get_slotnums(503),
                _p57 = {
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
                _p58 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    694: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _p59 = {
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
                _p5a = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2,
                    694: 2
                },
                _p5b = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1,
                    694: 1
                },
                _p5c = {
                    591: 1,
                    592: 2,
                    593: 2,
                    694: 2,
                    954: 3
                };
            if (_p57[_p53.ship_id]) {
                var _p5d = _p57[_p53.ship_id];
                _p55.houg += _p56 * _p5d;
            }
            if (_p58[_p53.ship_id]) {
                var _p5e = _p58[_p53.ship_id];
                _p55.tyku += _p56 * _p5e;
            }
            if (_p59[_p53.ship_id]) {
                var _p5f = _p59[_p53.ship_id],
                    _p5g = _p53.get_each_level_nums(503),
                    _p5h = [];
                _p5g.forEach(function(_p5i, _p5j) {
                    var _p5k = null;
                    for (var _p5l = 1; _p5l <= _p53.SLOT_LEVEL_MAX; _p5l++) _p5j >= _p5l && (null == _p5h[_p5l] && (_p5h[_p5l] = 0), _p5h[_p5l] += _p5i);
                }), 1 == _p5f ? (_p55.houm += 2 * _p56, _p5h[1] > 0 && (_p55.houg += 1 * _p5h[1]), _p5h[2] > 0 && (_p55.tyku += 1 * _p5h[2]), _p5h[4] > 0 && (_p55.houm += 1 * _p5h[4]), _p5h[6] > 0 && (_p55.houg += 1 * _p5h[6]), _p5h[8] > 0 && (_p55.tyku += 1 * _p5h[8]), _p5h[10] > 0 && (_p55.houm += 1 * _p5h[10])) : 2 == _p5f ? (_p55.houm += 1 * _p56, _p5h[2] > 0 && (_p55.houg += 1 * _p5h[2]), _p5h[4] > 0 && (_p55.tyku += 1 * _p5h[4]), _p5h[6] > 0 && (_p55.houm += 1 * _p5h[6]), _p5h[8] > 0 && (_p55.houg += 1 * _p5h[8]), _p5h[10] > 0 && (_p55.houm += 1 * _p5h[10])) : 3 == _p5f ? (_p5h[4] > 0 && (_p55.houm += 1 * _p5h[4]), _p5h[7] > 0 && (_p55.houg += 1 * _p5h[7]), _p5h[10] > 0 && (_p55.tyku += 1 * _p5h[10])) : 4 == _p5f && (_p55.houm += 1 * _p56, _p5h[1] > 0 && (_p55.houg += 1 * _p5h[1]), _p5h[2] > 0 && (_p55.houg += 1 * _p5h[2]), _p5h[4] > 0 && (_p55.houm += 1 * _p5h[4]), _p5h[6] > 0 && (_p55.houg += 1 * _p5h[6]), _p5h[8] > 0 && (_p55.tyku += 1 * _p5h[8]), _p5h[10] > 0 && (_p55.houm += 1 * _p5h[10]));
            }
            var _p5m = 0;
            _p5a[_p53.ship_id] && (_p5m = _p5a[_p53.ship_id]);
            var _p5n = 0;
            _p5c[_p53.ship_id] && (_p5n = _p5c[_p53.ship_id]);
            var _p5o = 0,
                _p5p = 0,
                _p5q = _p53.have_slot_ids();
            if (_p5m + _p5n > 0)
                for (var _p5r = 0, _p5s = _p5q; _p5r < _p5s.length; _p5r++) {
                    var _p5t = _p5s[_p5r],
                        _p5u = _p52.default.model.slot.getMst(_p5t),
                        _p5v = _p5u.equipType;
                    12 != _p5v && 13 != _p5v || (_p5u.sakuteki >= 5 && (_p5o += _p53.get_slotnums(parseInt(_p5t))), _p5u.taiku >= 2 && _p53.get_slotnums(parseInt(_p5t)), _p5u.meichu >= 8 && (_p5p += _p53.get_slotnums(parseInt(_p5t))));
                }
            1 == _p5m ? _p5o >= 1 && (_p55.houg += 3, _p55.houm += 3, _p55.kaih += 2) : 2 == _p5m && _p5o >= 1 && (_p55.houg += 2, _p55.houm += 2, _p55.kaih += 1);
            var _p5w = 0,
                _p5x = [],
                _p5y = [];
            if (_p5b[_p53.ship_id]) {
                _p5w = _p5b[_p53.ship_id];
                var _p5z = _p53.have_slot_ids();
                [174].forEach(function(_p60) {
                    var _p61 = null;
                    _p5z.indexOf(_p60.toString()) > -1 && (_p5y[_p60] = _p53.get_each_level_nums(_p60), null == _p5x[_p60] && (_p5x[_p60] = []), _p5y[_p60].forEach(function(_p62, _p63) {
                        var _p64 = null;
                        for (var _p65 = 1; _p65 <= _p53.SLOT_LEVEL_MAX; _p65++) null == _p5x[_p60][_p65] && (_p5x[_p60][_p65] = 0), _p63 >= _p65 && (_p5x[_p60][_p65] += _p62);
                    }));
                });
            }
            if (_p5w > 0) {
                var _p66 = _p5y[174];
                if (1 == _p5w && _p66) {
                    var _p67 = _p5x[174];
                    _p55.raig += 4, _p67[6] >= 1 && (_p55.raig += 1), _p67[8] >= 1 && (_p55.houm += 1), _p67[10] >= 1 && (_p55.houg += 1);
                }
            }
            return _p5p > 0 && (_p5n >= 1 && _p5n <= 3 && (_p55.houg += 2, _p55.houm += 2, _p55.kaih += 2), 1 == _p5n ? _p55.houg += 1 : 3 == _p5n && (_p55.houg += 2)), _p55;
        };
    },
    78123: function(_p68, _p69, _p6a) {
        'use strict';
        var _p6b = null;
        var _p6c = this && this.__importDefault || function(_p6d) {
            var _p6e = null;
            return _p6d && _p6d.__esModule ? _p6d : {
                'default': _p6d
            };
        };
        defineModule(_p69);
        Object.defineProperty(_p69, '__esModule', {
            'value': true
        }), _p69.getSlot505PersonalEffect = void 0;
        var _p6f = _p6a(74496),
            _p6g = _p6c(_p6a(18622));
        _p69.getSlot505PersonalEffect = function(_p6h) {
            var _p6i = null,
                _p6j = new _p6f.SlotItemEffectModel(),
                _p6k = false,
                _p6l = new _p6f.SlotItemEffectModel();
            if (2 == _p6h.stype ? (_p6l.houg += 1, _p6l.tyku += 2, _p6l.kaih += 2, _p6k = true) : 1 == _p6h.stype ? (_p6l.houg += 1, _p6l.tyku += 1, _p6l.kaih += 1, _p6k = true) : 3 == _p6h.stype || 21 == _p6h.stype || 4 == _p6h.stype ? (_p6l.tyku += 1, _p6l.kaih += 2, _p6k = true) : 5 != _p6h.stype && 6 != _p6h.stype && 16 != _p6h.stype || (_p6l.tyku += 1, _p6l.kaih += 1, _p6k = true), _p6k) {
                var _p6m = _p6h.get_slotnums(505);
                _p6j.add(_p6l.multiply(_p6m));
            }
            var _p6n = {
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
                    960: 5,
                    981: 6
                },
                _p6o = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2,
                    981: 3
                },
                _p6p = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _p6n[_p6h.ship_id] ? (_p6j.houg += 2, _p6j.tyku += 3, _p6j.kaih += 4) : 2 == _p6n[_p6h.ship_id] ? (_p6j.houg += 1, _p6j.tyku += 2, _p6j.kaih += 3) : 3 == _p6n[_p6h.ship_id] ? (_p6j.tyku += 2, _p6j.kaih += 2) : 4 == _p6n[_p6h.ship_id] ? (_p6j.tyku += 1, _p6j.kaih += 2) : 5 == _p6n[_p6h.ship_id] ? (_p6j.houg += 1, _p6j.tyku += 1, _p6j.kaih += 1) : 6 == _p6n[_p6h.ship_id] && (_p6j.tyku += 1, _p6j.kaih += 1);
            var _p6q = 0;
            if (_p6o[_p6h.ship_id] && _p6q++, _p6p[_p6h.ship_id] && _p6q++, 0 == _p6q) return _p6j;
            for (var _p6r = 0, _p6s = 0, _p6t = 0, _p6u = _p6h.have_slot_ids(); _p6t < _p6u.length; _p6t++) {
                var _p6v = _p6u[_p6t],
                    _p6w = _p6g.default.model.slot.getMst(_p6v),
                    _p6x = _p6w.equipType;
                12 != _p6x && 13 != _p6x || (_p6w.sakuteki >= 5 && (_p6r += _p6h.get_slotnums(parseInt(_p6v))), _p6w.taiku >= 2 && (_p6s += _p6h.get_slotnums(parseInt(_p6v))));
            }
            var _p6y = _p6o[_p6h.ship_id];
            _p6s > 0 && _p6y > 0 && (1 == _p6y ? (_p6j.houg += 1, _p6j.tyku += 2, _p6j.kaih += 3) : 2 == _p6y ? (_p6j.tyku += 2, _p6j.kaih += 2) : 3 == _p6y && (_p6j.tyku += 1, _p6j.kaih += 2));
            var _p6z = _p6p[_p6h.ship_id];
            return _p6r > 0 && _p6z > 0 && 1 == _p6z && (_p6j.houg += 1, _p6j.kaih += 1), _p6j;
        };
    },
    25765: (_p70, _p71, _p72) => {
        'use strict';
        var _p73 = null;
        defineModule(_p71);
        Object.defineProperty(_p71, '__esModule', {
            'value': true
        }), _p71.getSlot506PersonalEffect = void 0;
        var _p74 = _p72(74496);
        _p71.getSlot506PersonalEffect = function(_p75) {
            var _p76 = null,
                _p77 = new _p74.SlotItemEffectModel();
            return 961 == _p75.ship_id ? (_p77.houg += 2, _p77.houm += 3, _p77.tyku += 2, _p77.kaih += 4) : 145 == _p75.ship_id || 497 == _p75.ship_id || 656 == _p75.ship_id || 557 == _p75.ship_id || 558 == _p75.ship_id || 951 == _p75.ship_id || 975 == _p75.ship_id ? (_p77.houg += 1, _p77.houm += 2, _p77.tyku += 1, _p77.kaih += 3) : 578 != _p75.ship_id && 419 != _p75.ship_id && 464 != _p75.ship_id && 470 != _p75.ship_id && 407 != _p75.ship_id && 235 != _p75.ship_id && 147 != _p75.ship_id && 538 != _p75.ship_id && 537 != _p75.ship_id && 955 != _p75.ship_id && 960 != _p75.ship_id || (_p77.houg += 1, _p77.houm += 1, _p77.tyku += 1, _p77.kaih += 2), _p77;
        };
    },
    88271: function(_p78, _p79, _p7a) {
        'use strict';
        var _p7b = null;
        var _p7c = this && this.__importDefault || function(_p7d) {
            var _p7e = null;
            return _p7d && _p7d.__esModule ? _p7d : {
                'default': _p7d
            };
        };
        defineModule(_p79);
        Object.defineProperty(_p79, '__esModule', {
            'value': true
        }), _p79.getSlot50PersonalEffect = void 0;
        var _p7f = _p7a(74496),
            _p7g = _p7c(_p7a(18622));
        _p79.getSlot50PersonalEffect = function(_p7h) {
            var _p7i = null,
                _p7j = new _p7f.SlotItemEffectModel(),
                _p7k = false,
                _p7l = new _p7f.SlotItemEffectModel();
            7 != _p7h.ctype && 13 != _p7h.ctype && 8 != _p7h.ctype && 29 != _p7h.ctype && 9 != _p7h.ctype && 31 != _p7h.ctype || (_p7l.houg += 1, _p7k = true), 8 != _p7h.ctype && 29 != _p7h.ctype && 9 != _p7h.ctype && 31 != _p7h.ctype || (_p7l.houg += 1, _p7l.kaih += 1, _p7k = true);
            var _p7m = _p7h.get_slotnums(50);
            9 != _p7h.ctype && 31 != _p7h.ctype || _p7m >= 2 && (_p7l.houg += 1, _p7k = true);
            var _p7n = 0;
            if (501 != _p7h.ship_id && 506 != _p7h.ship_id && 502 != _p7h.ship_id && 507 != _p7h.ship_id || (_p7l.houg += 1, _p7k = true, _p7n = 1), 0 == _p7k) return _p7j;
            _p7j = _p7l.multiply(_p7m);
            for (var _p7o = 0, _p7p = 0, _p7q = _p7h.have_slot_ids(); _p7p < _p7q.length; _p7p++) {
                var _p7r = _p7q[_p7p],
                    _p7s = _p7g.default.model.slot.getMst(_p7r),
                    _p7t = _p7s.equipType;
                12 != _p7t && 13 != _p7t || _p7s.sakuteki >= 5 && (_p7o += _p7h.get_slotnums(parseInt(_p7r)));
            }
            if (_p7o > 0) {
                if (7 == _p7h.ctype || 13 == _p7h.ctype) 0 == _p7h.get_slotnums(90) && (_p7j.houg += 1, _p7j.kaih += 1, _p7j.raig += 1);
                else 8 != _p7h.ctype && 29 != _p7h.ctype && 9 != _p7h.ctype && 31 != _p7h.ctype || (_p7j.houg += 3, _p7j.kaih += 2, _p7j.raig += 2);
                501 != _p7h.ship_id && 506 != _p7h.ship_id || (_p7j.houg += 1, _p7j.kaih += 1);
            }
            var _p7u = _p7h.get_slotnums(30),
                _p7v = _p7h.get_slotnums(410);
            return 1 == _p7n && (_p7u + _p7v > 0 && (_p7j.houg += 1, _p7j.tyku += 3, _p7j.kaih += 2), _p7v > 0 && (_p7j.houg += 2)), _p7j;
        };
    },
    28221: (_p7w, _p7x, _p7y) => {
        'use strict';
        var _p7z = null;
        defineModule(_p7x);
        Object.defineProperty(_p7x, '__esModule', {
            'value': true
        }), _p7x.getSlot510PersonalEffect = void 0;
        var _p80 = _p7y(74496);
        _p7x.getSlot510PersonalEffect = function(_p81) {
            var _p82 = null,
                _p83 = new _p80.SlotItemEffectModel(),
                _p84 = false,
                _p85 = new _p80.SlotItemEffectModel();
            if ('イギリス' == _p81.getCountryName() && (_p85.houg += 2, _p85.tais += 3, _p85.kaih += 2, _p85.saku += 2, _p84 = true), 88 == _p81.ctype && (_p83.houg += 4, _p83.kaih += 2, _p85.saku += 3, _p85.houm += 2, _p84 = true), 0 == _p84) return _p83;
            var _p86 = _p81.get_slotnums(510);
            return _p83.add(_p85.multiply(_p86)), _p83;
        };
    },
    14830: (_p87, _p88, _p89) => {
        'use strict';
        var _p8a = null;
        defineModule(_p88);
        Object.defineProperty(_p88, '__esModule', {
            'value': true
        }), _p88.getSlot511PersonalEffect = void 0;
        var _p8b = _p89(74496);
        _p88.getSlot511PersonalEffect = function(_p8c) {
            var _p8d = null,
                _p8e = new _p8b.SlotItemEffectModel();
            return 122 == _p8c.ctype ? (_p8e.raig += 3, _p8e.kaih += 4) : 114 == _p8c.ctype && (_p8e.raig += 1, _p8e.kaih += 2), _p8e;
        };
    },
    54047: (_p8f, _p8g, _p8h) => {
        'use strict';
        var _p8i = null;
        defineModule(_p8g);
        Object.defineProperty(_p8g, '__esModule', {
            'value': true
        }), _p8g.getSlot517PersonalEffect = void 0;
        var _p8j = _p8h(74496);
        _p8g.getSlot517PersonalEffect = function(_p8k) {
            var _p8l = null,
                _p8m = new _p8j.SlotItemEffectModel();
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
            }[_p8k.ctype] && 74 != _p8k.ctype && 77 != _p8k.ctype && 85 != _p8k.ctype && 117 != _p8k.ctype && 104 != _p8k.ctype || (_p8m.houm += 1, _p8m.kaih += 1, _p8m.saku += 1), 38 == _p8k.ctype && (_p8m.houg += 1, _p8m.houm += 1), 960 == _p8k.ship_id ? (_p8m.houg += 2, _p8m.houm += 1, _p8m.kaih += 3, _p8m.saku += 2) : 955 == _p8k.ship_id || 578 == _p8k.ship_id || 961 == _p8k.ship_id || 656 == _p8k.ship_id || 464 == _p8k.ship_id || 470 == _p8k.ship_id || 419 == _p8k.ship_id || 407 == _p8k.ship_id || 235 == _p8k.ship_id || 147 == _p8k.ship_id || 975 == _p8k.ship_id ? (_p8m.houg += 1, _p8m.houm += 1, _p8m.kaih += 2, _p8m.saku += 1) : 981 == _p8k.ship_id && (_p8m.houg += 1, _p8m.houm += 1, _p8m.kaih += 1);
            for (var _p8n = [], _p8o = function(_p8p) {
                    var _p8q = null,
                        _p8r = _p8k.get_each_level_nums(_p8p);
                    null == _p8n[_p8p] && (_p8n[_p8p] = []), _p8r.forEach(function(_p8s, _p8t) {
                        var _p8u = null;
                        for (var _p8v = 1; _p8v <= _p8k.SLOT_LEVEL_MAX; _p8v++) null == _p8n[_p8p][_p8v] && (_p8n[_p8p][_p8v] = 0), _p8t >= _p8v && (_p8n[_p8p][_p8v] += _p8s);
                    });
                }, _p8w = 0, _p8x = [267, 366, 450, 517]; _p8w < _p8x.length; _p8w++) {
                _p8o(_p8x[_p8w]);
            }
            var _p8y = _p8n[517];
            return _p8y[7] > 0 && (_p8m.houm += 1), _p8y[8] > 0 && (_p8m.kaih += 1), _p8y[9] > 0 && (_p8m.houg += 1), _p8y[10] > 0 && (_p8m.houm += 1), (_p8n[267][3] > 0 || _p8n[366][3] > 0) && (_p8m.houg += 1, _p8m.houm += 1, 38 == _p8k.ctype && (_p8m.houg += 1, _p8m.houm += 1), _p8n[450][4] > 0 && (_p8m.houg += 1, _p8m.houm += 1, _p8m.tyku += 4, _p8m.kaih += 3)), _p8m;
        };
    },
    76054: (_p8z, _p90, _p91) => {
        'use strict';
        var _p92 = null;
        defineModule(_p90);
        Object.defineProperty(_p90, '__esModule', {
            'value': true
        }), _p90.getSlot518PersonalEffect = void 0;
        var _p93 = _p91(74496);
        _p90.getSlot518PersonalEffect = function(_p94) {
            var _p95 = null,
                _p96 = new _p93.SlotItemEffectModel(),
                _p97 = false,
                _p98 = new _p93.SlotItemEffectModel();
            if (34 != _p94.ctype && 56 != _p94.ctype || (_p98.houg += 1, _p98.tyku += 1, _p98.tais += 1, _p98.kaih += 1, _p97 = true), 16 == _p94.stype && (_p98.houg += 1, _p98.raig += 1, _p98.kaih += 1, _p97 = true), 622 != _p94.ship_id && 624 != _p94.ship_id && 623 != _p94.ship_id || (_p98.houg += 1, _p97 = true), 622 != _p94.ship_id && 624 != _p94.ship_id || (_p98.tyku += 1, _p97 = true), 624 == _p94.ship_id && (_p98.tais += 2, _p97 = true), 0 == _p97) return _p96;
            var _p99 = _p94.get_slotnums(518);
            return _p96.add(_p98.multiply(_p99)), _p96;
        };
    },
    93053: (_p9a, _p9b, _p9c) => {
        'use strict';
        var _p9d = null;
        defineModule(_p9b);
        Object.defineProperty(_p9b, '__esModule', {
            'value': true
        }), _p9b.getSlot519PersonalEffect = void 0;
        var _p9e = _p9c(74496);
        _p9b.getSlot519PersonalEffect = function(_p9f) {
            var _p9g = null,
                _p9h = new _p9e.SlotItemEffectModel();
            return 122 == _p9f.ctype && (_p9h.houm += 2, _p9h.kaih += 2), 114 == _p9f.ctype && (_p9h.raig += 1, _p9h.houm += 2, _p9h.kaih += 2), _p9h;
        };
    },
    81254: (_p9i, _p9j, _p9k) => {
        'use strict';
        var _p9l = null;
        defineModule(_p9j);
        Object.defineProperty(_p9j, '__esModule', {
            'value': true
        }), _p9j.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _p9m = _p9k(74496);
        _p9j.getSlot51cmSeriesGunPersonalEffect = function(_p9n) {
            var _p9o = null,
                _p9p = new _p9m.SlotItemEffectModel(),
                _p9q = false,
                _p9r = new _p9m.SlotItemEffectModel(),
                _p9s = _p9n.get_slotnums(142),
                _p9t = _p9n.get_slotnums(460),
                _p9u = _p9s + _p9t;
            if (916 != _p9n.ship_id && 911 != _p9n.ship_id && 546 != _p9n.ship_id || (_p9r.houg += 1, _p9r.houm += 1, _p9t >= 1 && (_p9p.kaih += 1, _p9p.houm += 1), _p9q = true), 37 == _p9n.ctype && _p9u >= 1 && (_p9p.houg += 1, _p9p.houm += 2), 0 == _p9q) return _p9p;
            var _p9v = _p9n.get_slotnums(128) + _p9n.get_slotnums(281);
            return _p9p.add(_p9r.multiply(_p9v)), _p9p;
        };
    },
    88792: (_p9w, _p9x, _p9y) => {
        'use strict';
        var _p9z = null;
        defineModule(_p9x);
        Object.defineProperty(_p9x, '__esModule', {
            'value': true
        }), _p9x.getSlot520PersonalEffect = void 0;
        var _pa0 = _p9y(74496);
        _p9x.getSlot520PersonalEffect = function(_pa1) {
            var _pa2 = null,
                _pa3 = new _pa0.SlotItemEffectModel(),
                _pa4 = false,
                _pa5 = new _pa0.SlotItemEffectModel(),
                _pa6 = 0,
                _pa7 = 0,
                _pa8 = 0,
                _pa9 = _pa1.get_slotnums(520);
            7 == _pa1.ctype || 13 == _pa1.ctype ? (_pa5.houg += 1, _pa4 = true, _pa7 = 1, _pa8 = 1) : 8 == _pa1.ctype || 29 == _pa1.ctype ? (_pa5.houg += 2, _pa5.kaih += 1, _pa4 = true, _pa7 = 2, _pa8 = 1) : 9 != _pa1.ctype && 31 != _pa1.ctype || (_pa5.houg += 3, _pa5.kaih += 1, _pa5.houm += 1, _pa4 = true, _pa7 = 2, _pa8 = 1, 2 == _pa9 && (_pa3.houg += 2), _pa9 >= 3 && (_pa3.houg += 4));
            var _paa = _pa1.get_have_rader_nums().water_rader,
                _pab = 0,
                _pac = 0;
            if (_pa7 + _pa8 > 0) {
                for (var _pad = _pa1.getSpItemDict_FukuhouTaikuHeisou(), _pae = _pa1.getSpItemDict_Tansou21GouDentan(), _paf = 0, _pag = _pa1.have_slot_ids(); _paf < _pag.length; _paf++) {
                    var _pah = _pag[_paf],
                        _pai = parseInt(_pah);
                    null != _pad[_pai] ? (_pad[_pai] += _pa1.get_slotnums(_pai), _pab += _pa1.get_slotnums(_pai)) : null != _pae[_pai] && (_pae[_pai] += _pa1.get_slotnums(_pai), _pac += _pa1.get_slotnums(_pai));
                }
                _paa > 0 && (1 == _pa7 ? (_pa3.houg += 2, _pa3.raig += 2, _pa3.kaih += 1, _pa3.houm += 1) : 2 == _pa7 && (_pa3.houg += 3, _pa3.raig += 2, _pa3.kaih += 2, _pa3.houm += 1)), _pab > 0 && 1 == _pa8 && (_pa3.houg += 1, _pa3.tyku += 4, _pa3.kaih += 4, _pa3.houm += 1);
            }
            if (269 == _pa1.ship_id || 265 == _pa1.ship_id || 319 == _pa1.ship_id ? (2 == _pa9 && (_pa3.houg += 2), _pa9 >= 3 && (_pa3.houg += 4)) : 501 != _pa1.ship_id && 506 != _pa1.ship_id && 502 != _pa1.ship_id && 507 != _pa1.ship_id && 503 != _pa1.ship_id && 504 != _pa1.ship_id || (_pa5.houg += 1, _pa4 = true, _paa >= 1 && (_pa3.houg += 1, _pa3.kaih += 1, _pa3.houm += 2), _pac >= 1 && (_pa3.houg += 1, _pa3.tyku += 3, _pa3.kaih += 2, _pa3.houm += 1), _pa1.get_slotnums(410) > 0 && (_pa3.houg += 2, _pa3.tyku += 3, _pa3.kaih += 2, _pa3.houm += 1), _pa6 = 1), 502 == _pa1.ship_id || 269 == _pa1.ship_id || 265 == _pa1.ship_id || 319 == _pa1.ship_id ? (_pa5.houg += 1, _pa5.houm += 1, _pa4 = true) : 507 == _pa1.ship_id && (_pa5.houg += 1, _pa5.houm += 2, _pa5.tyku += 1, _pa4 = true), _pa4 && _pa3.add(_pa5.multiply(_pa9)), 0 == _pa6) return _pa3;
            var _paj = _pa1.get_each_level_over_nums([520]),
                _pak = _paj.slot[520][7],
                _pal = _paj.slot[520][10];
            return 1 == _pa6 && (_pak > 0 && (_pa3.houg += 1 * _pak), _pal > 0 && (_pa3.houm += 1 * _pal)), _pa3;
        };
    },
    33242: (_pam, _pan, _pao) => {
        'use strict';
        var _pap = null;
        defineModule(_pan);
        Object.defineProperty(_pan, '__esModule', {
            'value': true
        }), _pan.getSlot521PersonalEffect = void 0;
        var _paq = _pao(74496);
        _pan.getSlot521PersonalEffect = function(_par) {
            var _pas = null,
                _pat = new _paq.SlotItemEffectModel(),
                _pau = false,
                _pav = new _paq.SlotItemEffectModel(),
                _paw = 0;
            if (52 == _par.ctype && (_paw = 1), 183 == _par.ship_id ? (_pav.houg += 1, _pav.houm += 1, _pav.saku += 2, _pav.kaih += 2, _pau = true) : 321 == _par.ship_id ? (_pav.houg += 2, _pav.houm += 2, _pav.saku += 3, _pav.kaih += 3, _pau = true) : 507 == _par.ship_id && (_pav.houg += 3, _pav.tyku += 1, _pav.houm += 3, _pav.saku += 2, _pav.kaih += 2, _pau = true, _paw = 1), _pau) {
                var _pax = _par.get_slotnums(521);
                _pat.add(_pav.multiply(_pax));
            }
            if (0 == _paw) return _pat;
            var _pay = _par.get_each_level_over_nums([521]).slot[521];
            return 1 == _paw && (_pay[1] >= 1 && (_pat.houm += 1 * _pay[1]), _pay[2] >= 1 && (_pat.kaih += 1 * _pay[2]), _pay[3] >= 1 && (_pat.saku += 1 * _pay[3], _pat.raig += 1 * _pay[3]), _pay[4] >= 1 && (_pat.houg += 1 * _pay[4]), _pay[6] >= 1 && (_pat.houm += 1 * _pay[6]), _pay[8] >= 1 && (_pat.saku += 1 * _pay[8]), _pay[10] >= 1 && (_pat.houm += 1 * _pay[10])), _pat;
        };
    },
    3296: (_paz, _pb0, _pb1) => {
        'use strict';
        var _pb2 = null;
        defineModule(_pb0);
        Object.defineProperty(_pb0, '__esModule', {
            'value': true
        }), _pb0.getSlot522_523PersonalEffect = void 0;
        var _pb3 = _pb1(74496);
        _pb0.getSlot522_523PersonalEffect = function(_pb4) {
            var _pb5 = null,
                _pb6 = new _pb3.SlotItemEffectModel(),
                _pb7 = false,
                _pb8 = new _pb3.SlotItemEffectModel(),
                _pb9 = 0,
                _pba = _pb4.get_slotnums(522),
                _pbb = _pb4.get_slotnums(523),
                _pbc = _pba + _pbb;
            if (14 == _pb4.stype && (_pb8.raig += 1, _pb8.kaih += 5, _pb8.houm += 1, _pb8.saku += 3, _pb7 = true, _pbb >= 1 && (_pb6.raig += 2 * _pbb, _pb6.baku += 2 * _pbb, _pb6.kaih += 1 * _pbb, _pb6.houm += 1 * _pbb, _pb6.saku += 1 * _pbb), _pb9 = 1), 0 == _pb7) return _pb6;
            if (_pb6.add(_pb8.multiply(_pbc)), 0 == _pb9) return _pb6;
            var _pbd = _pb4.get_each_level_over_nums([522, 523]),
                _pbe = _pbd.slot[522],
                _pbf = _pbd.slot[523];
            if (1 == _pb9) {
                if (_pbe[1] >= 1 || _pbf[1] >= 1) {
                    var _pbg = _pbe[1] + _pbf[1];
                    _pb6.raig += 1 * _pbg;
                }
                if (_pbe[2] >= 1 || _pbf[2] >= 1) {
                    var _pbh = _pbe[2] + _pbf[2];
                    _pb6.houm += 1 * _pbh;
                }
                if (_pbe[3] >= 1 || _pbf[3] >= 1) {
                    var _pbi = _pbe[3] + _pbf[3];
                    _pb6.kaih += 1 * _pbi;
                }
                if (_pbe[5] >= 1 || _pbf[5] >= 1) {
                    var _pbj = _pbe[5] + _pbf[5];
                    _pb6.saku += 1 * _pbj;
                }
                if (_pbe[8] >= 1 || _pbf[8] >= 1) {
                    var _pbk = _pbe[8] + _pbf[8];
                    _pb6.houm += 1 * _pbk;
                }
                if (_pbe[10] >= 1 || _pbf[10] >= 1) {
                    var _pbl = _pbe[10] + _pbf[10];
                    _pb6.kaih += 1 * _pbl;
                }
            }
            return _pb6;
        };
    },
    59415: (_pbm, _pbn, _pbo) => {
        'use strict';
        var _pbp = null;
        defineModule(_pbn);
        Object.defineProperty(_pbn, '__esModule', {
            'value': true
        }), _pbn.getSlot524PersonalEffect = void 0;
        var _pbq = _pbo(74496);
        _pbn.getSlot524PersonalEffect = function(_pbr) {
            var _pbs = null,
                _pbt = new _pbq.SlotItemEffectModel(),
                _pbu = false,
                _pbv = new _pbq.SlotItemEffectModel(),
                _pbw = 0,
                _pbx = 0;
            if (17 != _pbr.stype && 19 != _pbr.stype && 20 != _pbr.stype && 21 != _pbr.stype && 22 != _pbr.stype || (_pbv.houg += 1, _pbv.tyku += 2, _pbv.kaih += 2, _pbv.houm += 1, _pbu = true, _pbw = 1, _pbx = 1), 0 == _pbu) return _pbt;
            var _pby = _pbr.get_slotnums(524);
            _pbt.add(_pbv.multiply(_pby));
            var _pbz = _pbr.get_have_rader_nums().air_rader;
            if (1 == _pbx && _pbz >= 1 && (_pbt.tyku += 2, _pbt.kaih += 2), 0 == _pbw) return _pbt;
            var _pc0 = _pbr.get_each_level_over_nums([524]).slot[524];
            return 1 == _pbw && (_pc0[1] >= 1 && (_pbt.kaih += 1 * _pc0[1]), _pc0[2] >= 1 && (_pbt.kaih += 1 * _pc0[2]), _pc0[4] >= 1 && (_pbt.tyku += 1 * _pc0[4]), _pc0[6] >= 1 && (_pbt.kaih += 1 * _pc0[6]), _pc0[7] >= 1 && (_pbt.houm += 1 * _pc0[7]), _pc0[8] >= 1 && (_pbt.tyku += 1 * _pc0[8]), _pc0[9] >= 1 && (_pbt.kaih += 1 * _pc0[9]), _pc0[10] >= 1 && (_pbt.houg += 1 * _pc0[10])), _pbt;
        };
    },
    36731: (_pc1, _pc2, _pc3) => {
        'use strict';
        var _pc4 = null;
        defineModule(_pc2);
        Object.defineProperty(_pc2, '__esModule', {
            'value': true
        }), _pc2.getSlot527PersonalEffect = void 0;
        var _pc5 = _pc3(74496);
        _pc2.getSlot527PersonalEffect = function(_pc6) {
            var _pc7 = null,
                _pc8 = new _pc5.SlotItemEffectModel(),
                _pc9 = 0;
            if ('イギリス' == _pc6.getCountryName() && (_pc9 = 1, _pc8.tyku += 2, _pc8.houm += 1, _pc8.kaih += 1, _pc8.saku += 2, 88 == _pc6.ctype && (_pc8.houg += 2), 67 == _pc6.ctype && (_pc8.houg += 1)), 0 == _pc9) return _pc8;
            var _pca = _pc6.get_each_level_over_nums([527]),
                _pcb = _pca.slot[527][2],
                _pcc = _pca.slot[527][4],
                _pcd = _pca.slot[527][7],
                _pce = _pca.slot[527][10];
            return 1 == _pc9 && (_pcb >= 1 && (_pc8.tyku += 1), _pcc >= 1 && (_pc8.kaih += 1), _pcd >= 1 && (_pc8.tyku += 1), _pce >= 1 && (_pc8.houm += 1)), _pc8;
        };
    },
    30450: (_pcf, _pcg, _pch) => {
        'use strict';
        var _pci = null;
        defineModule(_pcg);
        Object.defineProperty(_pcg, '__esModule', {
            'value': true
        }), _pcg.getSlot528PersonalEffect = void 0;
        var _pcj = _pch(74496);
        _pcg.getSlot528PersonalEffect = function(_pck) {
            var _pcl = null,
                _pcm = new _pcj.SlotItemEffectModel(),
                _pcn = false,
                _pco = new _pcj.SlotItemEffectModel(),
                _pcp = 0;
            if ('イギリス' == _pck.getCountryName() && (_pco.houg += 1, _pco.houm += 2, _pco.kaih += 1, 108 == _pck.ctype && (_pco.houg += 1, _pco.kaih += 1), _pcn = true, _pcp = 1), 0 == _pcn) return _pcm;
            var _pcq = _pck.get_slotnums(528);
            if (_pcm.add(_pco.multiply(_pcq)), 0 == _pcp) return _pcm;
            var _pcr = _pck.get_each_level_over_nums([528]),
                _pcs = _pcr.slot[528][2],
                _pct = _pcr.slot[528][4],
                _pcu = _pcr.slot[528][7],
                _pcv = _pcr.slot[528][10];
            return 1 == _pcp && (_pcs >= 1 && (_pcm.houg += 1 * _pcs), _pct >= 1 && (_pcm.houm += 1 * _pct), _pcu >= 1 && (_pcm.kaih += 1 * _pcu), _pcv >= 1 && (_pcm.houm += 1 * _pcv)), _pcm;
        };
    },
    15653: (_pcw, _pcx, _pcy) => {
        'use strict';
        var _pcz = null;
        defineModule(_pcx);
        Object.defineProperty(_pcx, '__esModule', {
            'value': true
        }), _pcx.getSlot530PersonalEffect = void 0;
        var _pd0 = _pcy(74496);
        _pcx.getSlot530PersonalEffect = function(_pd1) {
            var _pd2 = null,
                _pd3 = new _pd0.SlotItemEffectModel(),
                _pd4 = false;
            if (6 == _pd1.ctype && (_pd4 = true), 0 == _pd4) return _pd3;
            var _pd5 = false,
                _pd6 = new _pd0.SlotItemEffectModel(),
                _pd7 = _pd1.get_slotnums(530),
                _pd8 = _pd1.get_slotnums(174),
                _pd9 = _pd1.get_each_level_over_nums([530, 174]),
                _pda = _pd9.slot[530],
                _pdb = _pd9.slot[174],
                _pdc = _pd1.get_have_rader_nums(),
                _pdd = _pdc.water_rader,
                _pde = _pdc.high_water_rader;
            return _pdc.air_rader, 149 != _pd1.ship_id && 150 != _pd1.ship_id && 151 != _pd1.ship_id && 152 != _pd1.ship_id && 593 != _pd1.ship_id || (_pd6.houg += 2, _pd5 = true), 591 != _pd1.ship_id && 954 != _pd1.ship_id || (_pd6.houg += 3, _pd5 = true), 592 != _pd1.ship_id && 694 != _pd1.ship_id || (_pd6.houg += 4, _pd5 = true), 149 != _pd1.ship_id && 150 != _pd1.ship_id && 151 != _pd1.ship_id && 152 != _pd1.ship_id || (_pd6.tyku += 1, _pd5 = true), 591 != _pd1.ship_id && 592 != _pd1.ship_id && 954 != _pd1.ship_id && 694 != _pd1.ship_id || (_pd6.tyku += 2, _pd5 = true), 593 == _pd1.ship_id && (_pd6.tyku += 3, _pd5 = true), 592 != _pd1.ship_id && 694 != _pd1.ship_id || (_pd6.houg += 1, _pd6.houm += 2, _pd5 = true, _pda[2] >= 1 && (_pd3.houm += 1 * _pda[2]), _pda[4] >= 1 && (_pd3.houg += 1 * _pda[4]), _pda[6] >= 1 && (_pd3.souk += 1 * _pda[6]), _pda[7] >= 1 && (_pd3.houm += 1 * _pda[7]), _pda[8] >= 1 && (_pd3.houg += 1 * _pda[8]), _pda[9] >= 1 && (_pd3.souk += 1 * _pda[9]), _pda[10] >= 1 && (_pd3.houm += 1 * _pda[10])), 150 != _pd1.ship_id && 152 != _pd1.ship_id && 591 != _pd1.ship_id && 954 != _pd1.ship_id || (_pd6.houm += 1, _pd5 = true, _pda[2] >= 1 && (_pd3.houg += 1 * _pda[2]), _pda[4] >= 1 && (_pd3.souk += 1 * _pda[4]), _pda[6] >= 1 && (_pd3.houm += 1 * _pda[6]), _pda[8] >= 1 && (_pd3.houg += 1 * _pda[8]), _pda[10] >= 1 && (_pd3.houm += 1 * _pda[10])), 149 != _pd1.ship_id && 151 != _pd1.ship_id && 593 != _pd1.ship_id || (_pda[4] >= 1 && (_pd3.houg += 1 * _pda[4]), _pda[7] >= 1 && (_pd3.souk += 1 * _pda[7]), _pda[10] >= 1 && (_pd3.houm += 1 * _pda[10])), 592 != _pd1.ship_id && 694 != _pd1.ship_id || (_pdd >= 1 && (_pd3.houg += 3, _pd3.houm += 3, _pd3.kaih += 3, 592 == _pd1.ship_id ? _pd3.houg += 3 : 694 == _pd1.ship_id && (_pd3.houg += 4)), _pd7 >= 2 && (_pd3.houm += 2), _pd7 >= 3 && (_pd3.houm += 2), _pd7 >= 4 && (_pd3.houm += 2), _pde >= 1 && (_pd3.houm += 1), 694 == _pd1.ship_id && _pd7 >= 3 && (_pd3.houg += 3)), 149 != _pd1.ship_id && 150 != _pd1.ship_id && 151 != _pd1.ship_id && 152 != _pd1.ship_id && 591 != _pd1.ship_id && 954 != _pd1.ship_id && 593 != _pd1.ship_id || (_pdd >= 1 && (_pd3.houg += 2, _pd3.houm += 2, _pd3.kaih += 2, 591 == _pd1.ship_id || 152 == _pd1.ship_id ? _pd3.houg += 3 : 954 == _pd1.ship_id || 150 == _pd1.ship_id ? _pd3.houg += 2 : 149 != _pd1.ship_id && 151 != _pd1.ship_id && 593 != _pd1.ship_id || (_pd3.houg += 1)), _pde >= 1 && (_pd3.houm += 1)), 591 != _pd1.ship_id && 592 != _pd1.ship_id && 593 != _pd1.ship_id && 954 != _pd1.ship_id && 694 != _pd1.ship_id || (_pd8 >= 1 && (_pd3.raig += 6, _pdb[6] >= 1 && (_pd3.raig += 1), _pdb[8] >= 1 && (_pd3.houm += 1), _pdb[10] >= 1 && (_pd3.houg += 1)), _pde >= 1 && (_pd3.houg += 2, _pd3.raig += 2, _pd3.houm += 2, _pd3.kaih += 3, 591 == _pd1.ship_id || 592 == _pd1.ship_id ? _pd3.houg += 2 : 954 == _pd1.ship_id || 593 == _pd1.ship_id ? _pd3.houg += 1 : 694 == _pd1.ship_id && (_pd3.houg += 3)), _pd7 >= 2 && (_pd3.houm += 1)), _pd5 && _pd3.add(_pd6.multiply(_pd7)), _pd3;
        };
    },
    25851: (_pdf, _pdg, _pdh) => {
        'use strict';
        var _pdi = null;
        defineModule(_pdg);
        Object.defineProperty(_pdg, '__esModule', {
            'value': true
        }), _pdg.getSlot531PersonalEffect = void 0;
        var _pdj = _pdh(74496);
        _pdg.getSlot531PersonalEffect = function(_pdk) {
            var _pdl = null,
                _pdm = new _pdj.SlotItemEffectModel(),
                _pdn = _pdk.have_level_num_over_dict[531];
            return null == _pdn || (_pdn[4] >= 1 && (_pdm.houm += 1 * _pdn[4]), _pdn[5] >= 1 && (_pdm.houg += 1 * _pdn[5]), _pdn[6] >= 1 && (_pdm.kaih += 1 * _pdn[6]), _pdn[7] >= 1 && (_pdm.houm += 1 * _pdn[7]), _pdn[8] >= 1 && (_pdm.houg += 1 * _pdn[8]), _pdn[9] >= 1 && (_pdm.kaih += 1 * _pdn[9]), _pdn[10] >= 1 && (_pdm.houm += 1 * _pdn[10])), _pdm;
        };
    },
    91275: (_pdo, _pdp, _pdq) => {
        'use strict';
        var _pdr = null;
        defineModule(_pdp);
        Object.defineProperty(_pdp, '__esModule', {
            'value': true
        }), _pdp.getSlot538PersonalEffect = void 0;
        var _pds = _pdq(74496);
        _pdp.getSlot538PersonalEffect = function(_pdt) {
            var _pdu = null,
                _pdv = new _pds.SlotItemEffectModel(),
                _pdw = false,
                _pdx = new _pds.SlotItemEffectModel(),
                _pdy = 0;
            if ('フランス' == _pdt.getCountryName() && (_pdx.houg += 3, _pdx.kaih += 2, _pdx.houm += 2, _pdw = true, _pdy = 1), 79 == _pdt.ctype ? (_pdx.houg += 2, 969 == _pdt.ship_id && (_pdx.houg += 1, _pdx.houm += 1, _pdx.kaih += 1), _pdw = true) : 70 == _pdt.ctype && (_pdx.houg += 1, _pdx.houm += 1, _pdx.tyku += 2, _pdx.kaih += 2, _pdw = true), 0 == _pdw) return _pdv;
            var _pdz = _pdt.get_slotnums(538);
            if (_pdv.add(_pdx.multiply(_pdz)), 0 == _pdy) return _pdv;
            var _pe0 = _pdt.haveSlotLevelNumOver(538);
            return 1 == _pdy && (_pe0[3] >= 1 && (_pdv.kaih += 1 * _pe0[3]), _pe0[4] >= 1 && (_pdv.houm += 1 * _pe0[4]), _pe0[5] >= 1 && (_pdv.houg += 1 * _pe0[5]), _pe0[6] >= 1 && (_pdv.kaih += 1 * _pe0[6]), _pe0[7] >= 1 && (_pdv.houm += 1 * _pe0[7]), _pe0[8] >= 1 && (_pdv.houg += 1 * _pe0[8]), _pe0[9] >= 1 && (_pdv.kaih += 1 * _pe0[9]), _pe0[10] >= 1 && (_pdv.houg += 1 * _pe0[10], _pdv.houm += 1 * _pe0[10])), _pdv;
        };
    },
    72743: (_pe1, _pe2, _pe3) => {
        'use strict';
        var _pe4 = null;
        defineModule(_pe2);
        Object.defineProperty(_pe2, '__esModule', {
            'value': true
        }), _pe2.getSlot540PersonalEffect = void 0;
        var _pe5 = _pe3(74496);
        _pe2.getSlot540PersonalEffect = function(_pe6) {
            var _pe7 = null,
                _pe8 = new _pe5.SlotItemEffectModel(),
                _pe9 = false,
                _pea = new _pe5.SlotItemEffectModel();
            if (911 == _pe6.ship_id || 916 == _pe6.ship_id || 546 == _pe6.ship_id || 662 == _pe6.ship_id || 663 == _pe6.ship_id || 668 == _pe6.ship_id ? (_pea.kaih += 1, _pea.saku += 1, _pe9 = true) : 73 == _pe6.ship_id || 506 == _pe6.ship_id || 121 == _pe6.ship_id || 503 == _pe6.ship_id || 504 == _pe6.ship_id || 188 == _pe6.ship_id || 189 == _pe6.ship_id ? (_pea.houm += 1, _pea.kaih += 1, _pea.saku += 1, _pe9 = true) : 488 != _pe6.ship_id && 200 != _pe6.ship_id && 487 != _pe6.ship_id && 501 != _pe6.ship_id && 502 != _pe6.ship_id && 507 != _pe6.ship_id || (_pea.houg += 1, _pea.houm += 1, _pea.kaih += 1, _pea.saku += 1, _pe9 = true), 'にっしん' == _pe6.yomi || 'ちとせ' == _pe6.yomi || 'ちよだ' == _pe6.yomi || 'あきつしま' == _pe6.yomi ? (_pea.houg += 1, _pea.houm += 1, _pea.tyku += 2, _pea.kaih += 2, _pea.saku += 2, _pe9 = true) : 'みずほ' != _pe6.yomi && 'かもい' != _pe6.yomi || (_pea.houg += 2, _pea.houm += 1, _pea.tyku += 2, _pea.kaih += 2, _pea.saku += 2, _pe9 = true), 0 == _pe9) return _pe8;
            var _peb = _pe6.get_slotnums(540);
            return _pe8.add(_pea.multiply(_peb)), _pe8;
        };
    },
    57041: (_pec, _ped, _pee) => {
        'use strict';
        var _pef = null;
        defineModule(_ped);
        Object.defineProperty(_ped, '__esModule', {
            'value': true
        }), _ped.getSlot545PersonalEffect = void 0;
        var _peg = _pee(74496);
        _ped.getSlot545PersonalEffect = function(_peh) {
            var _pei = null,
                _pej = new _peg.SlotItemEffectModel(),
                _pek = false,
                _pel = new _peg.SlotItemEffectModel();
            if ('しょうかく' == _peh.yomi ? _pej.houg += 4 : 'ずいかく' == _peh.yomi ? _pej.houg += 3 : 'あかぎ' == _peh.yomi ? _pej.houg += 2 : 'かが' != _peh.yomi && 'たいほう' != _peh.yomi || (_pej.houg += 1), 461 == _peh.ship_id || 466 == _peh.ship_id ? (_pel.houg += 1, _pel.houm += 2, _pel.kaih += 1, _pel.saku += 2, _pek = true) : 462 == _peh.ship_id || 467 == _peh.ship_id || 646 == _peh.ship_id ? (_pel.houg += 1, _pel.houm += 1, _pel.saku += 1, _pek = true) : 599 != _peh.ship_id && 610 != _peh.ship_id && 156 != _peh.ship_id || (_pel.houm += 1, _pel.saku += 1, _pek = true), 0 == _pek) return _pej;
            var _pem = _peh.get_slotnums(545);
            return _pej.add(_pel.multiply(_pem)), _pej;
        };
    },
    74608: (_pen, _peo, _pep) => {
        'use strict';
        var _peq = null;
        defineModule(_peo);
        Object.defineProperty(_peo, '__esModule', {
            'value': true
        }), _peo.getSlot549PersonalEffect = void 0;
        var _per = _pep(74496);
        _peo.getSlot549PersonalEffect = function(_pes) {
            var _pet = null,
                _peu = new _per.SlotItemEffectModel(),
                _pev = false,
                _pew = new _per.SlotItemEffectModel(),
                _pex = 0;
            if ('やましおまる' != _pes.yomi && 'くまのまる' != _pes.yomi && 'あきつまる' != _pes.yomi || (_pew.houg += 2, _pew.houm += 1, _pew.kaih += 1, _pew.tais += 4, _pev = true, _pex = 1), 76 != _pes.ctype && 27 != _pes.ctype || (_pew.houg += 1, _pew.houm += 1, _pew.tais += 1, _pev = true, _pex = 2), 0 == _pev) return _peu;
            var _pey = _pes.get_slotnums(549);
            if (_peu.add(_pew.multiply(_pey)), 0 == _pex) return _peu;
            var _pez = _pes.haveSlotLevelNumOver(549);
            return 1 == _pex ? (_pez[3] >= 1 && (_peu.houg += 1 * _pez[3]), _pez[4] >= 1 && (_peu.houm += 1 * _pez[4]), _pez[5] >= 1 && (_peu.tais += 1 * _pez[5]), _pez[6] >= 1 && (_peu.kaih += 1 * _pez[6]), _pez[7] >= 1 && (_peu.houg += 1 * _pez[7]), _pez[8] >= 1 && (_peu.houm += 1 * _pez[8]), _pez[9] >= 1 && (_peu.tais += 1 * _pez[9]), _pez[10] >= 1 && (_peu.houg += 1 * _pez[10])) : 2 == _pex && (_pez[4] >= 1 && (_peu.tais += 1 * _pez[4]), _pez[6] >= 1 && (_peu.kaih += 1 * _pez[6]), _pez[8] >= 1 && (_peu.houm += 1 * _pez[8]), _pez[10] >= 1 && (_peu.houg += 1 * _pez[10])), _peu;
        };
    },
    4188: (_pf0, _pf1, _pf2) => {
        'use strict';
        var _pf3 = null;
        defineModule(_pf1);
        Object.defineProperty(_pf1, '__esModule', {
            'value': true
        }), _pf1.getSlot554PersonalEffect = void 0;
        var _pf4 = _pf2(74496);
        _pf1.getSlot554PersonalEffect = function(_pf5) {
            var _pf6 = null,
                _pf7 = new _pf4.SlotItemEffectModel(),
                _pf8 = false,
                _pf9 = new _pf4.SlotItemEffectModel(),
                _pfa = _pf5.haveSlotLevelNumOver(554);
            if (_pfa[2] >= 1 && (_pf7.houg += 1 * _pfa[2]), _pfa[4] >= 1 && (_pf7.houm += 1 * _pfa[4]), _pfa[6] >= 1 && (_pf7.tais += 1 * _pfa[6]), _pfa[8] >= 1 && (_pf7.houg += 1 * _pfa[8]), _pfa[10] >= 1 && (_pf7.houm += 1 * _pfa[10]), 7 == _pf5.stype && (_pf9.houg += 1, _pf9.kaih += 1, _pf9.tais += 1, _pf8 = true), 117 != _pf5.ship_id && 555 != _pf5.ship_id && 560 != _pf5.ship_id && 285 != _pf5.ship_id && 894 != _pf5.ship_id && 318 != _pf5.ship_id && 888 != _pf5.ship_id && 883 != _pf5.ship_id || (_pf9.houg += 1, _pf9.houm += 1, 894 == _pf5.ship_id && (_pf9.houg += 1), _pf8 = true), 76 != _pf5.ctype && 27 != _pf5.ctype || (_pf9.houm += 1, _pf9.kaih += 1, _pf9.tais += 1, _pf8 = true), _pf5.get_slotnums(402) >= 1 && (_pf9.houg += 3, _pf9.houm += 2, _pf9.kaih += 1, _pf9.tais += 3, _pf8 = true), 0 == _pf8) return _pf7;
            var _pfb = _pf5.get_slotnums(554);
            return _pf7.add(_pf9.multiply(_pfb)), _pf7;
        };
    },
    23035: (_pfc, _pfd, _pfe) => {
        'use strict';
        var _pff = null;
        defineModule(_pfd);
        Object.defineProperty(_pfd, '__esModule', {
            'value': true
        }), _pfd.getSlot58PersonalEffect = void 0;
        var _pfg = _pfe(74496);
        _pfd.getSlot58PersonalEffect = function(_pfh) {
            var _pfi = null,
                _pfj = new _pfg.SlotItemEffectModel(),
                _pfk = new _pfg.SlotItemEffectModel();
            if ('しまかぜ' != _pfh.yomi && 4 != _pfh.stype && 54 != _pfh.ctype || (_pfk.raig = 1), !_pfk.exists()) return _pfj;
            var _pfl = _pfh.get_slotnums(58);
            return _pfj = _pfk.multiply(_pfl);
        };
    },
    47169: (_pfm, _pfn, _pfo) => {
        'use strict';
        var _pfp = null;
        defineModule(_pfn);
        Object.defineProperty(_pfn, '__esModule', {
            'value': true
        }), _pfn.getSlot59PersonalEffect = void 0;
        var _pfq = _pfo(74496);
        _pfn.getSlot59PersonalEffect = function(_pfr) {
            var _pfs = null,
                _pft = new _pfq.SlotItemEffectModel();
            return 501 != _pfr.ship_id && 506 != _pfr.ship_id && 502 != _pfr.ship_id && 507 != _pfr.ship_id || (_pft.tyku += 1, _pft.kaih += 1), _pft;
        };
    },
    87845: (_pfu, _pfv, _pfw) => {
        'use strict';
        var _pfx = null;
        defineModule(_pfv);
        Object.defineProperty(_pfv, '__esModule', {
            'value': true
        }), _pfv.getSlot5PersonalEffect = void 0;
        var _pfy = _pfw(74496);
        _pfv.getSlot5PersonalEffect = function(_pfz) {
            var _pg0 = null,
                _pg1 = new _pfy.SlotItemEffectModel(),
                _pg2 = false,
                _pg3 = new _pfy.SlotItemEffectModel();
            if (52 != _pfz.ctype && 9 != _pfz.ctype || (_pg3.houg += 1, 52 == _pfz.ctype && (_pg3.houg = _pg3.houg + 1), _pg2 = true), 0 == _pg2) return _pg1;
            var _pg4 = _pfz.get_slotnums(5);
            return _pg1.add(_pg3.multiply(_pg4)), _pg1;
        };
    },
    92253: (_pg5, _pg6, _pg7) => {
        'use strict';
        var _pg8 = null;
        defineModule(_pg6);
        Object.defineProperty(_pg6, '__esModule', {
            'value': true
        }), _pg6.getSlot60_154_219PersonalEffec = void 0;
        var _pg9 = _pg7(74496);
        _pg6.getSlot60_154_219PersonalEffec = function(_pga) {
            var _pgb = null,
                _pgc = new _pg9.SlotItemEffectModel(),
                _pgd = false,
                _pge = new _pg9.SlotItemEffectModel();
            if ('じゅんよう' != _pga.yomi && 'ひよう' != _pga.yomi && 'ずいほう' != _pga.yomi && 'ちとせ' != _pga.yomi && 'ちよだ' != _pga.yomi || (_pge.houg += 1, _pge.tyku += 1, _pge.kaih += 1, _pgd = true), 185 != _pga.ship_id && 318 != _pga.ship_id && 282 != _pga.ship_id || (_pge.houg += 1, _pge.tyku += 1, _pge.kaih += 1, _pgd = true), 888 != _pga.ship_id && 883 != _pga.ship_id || (_pge.houg += 2, _pge.tyku += 1, _pge.kaih += 2, _pgd = true), 0 == _pgd) return _pgc;
            var _pgf = _pga.get_slotnums(60) + _pga.get_slotnums(154) + _pga.get_slotnums(219);
            return _pgc.add(_pge.multiply(_pgf)), _pgc;
        };
    },
    2578: (_pgg, _pgh, _pgi) => {
        'use strict';
        var _pgj = null;
        defineModule(_pgh);
        Object.defineProperty(_pgh, '__esModule', {
            'value': true
        }), _pgh.getSlot61PersonalEffect2 = _pgh.getSlot61PersonalEffect = void 0;
        var _pgk = _pgi(74496);
        _pgh.getSlot61PersonalEffect = function(_pgl) {
            var _pgm = null,
                _pgn = new _pgk.SlotItemEffectModel();
            if (553 == _pgl.ship_id) _pgn.houg = 3, _pgn.kaih = 2, _pgn.souk = 1, _pgn.houm = 5, _pgn.leng = 1;
            else {
                if (554 == _pgl.ship_id) _pgn.houg = 3, _pgn.kaih = 3, _pgn.souk = 3, _pgn.houm = 5, _pgn.leng = 1;
                else {
                    if (196 == _pgl.ship_id) _pgn.houm = 5, _pgn.leng = 1;
                    else {
                        if (197 != _pgl.ship_id) return _pgn;
                        _pgn.houm = 5, _pgn.leng = 1;
                    }
                }
            }
            return _pgn;
        }, _pgh.getSlot61PersonalEffect2 = function(_pgo) {
            var _pgp = null,
                _pgq = new _pgk.SlotItemEffectModel();
            if (null == _pgo.have_slots_dict[61]) return _pgq;
            for (var _pgr = 0, _pgs = 0, _pgt = _pgo.have_slots_dict[61]; _pgs < _pgt.length; _pgs++) {
                var _pgu = _pgt[_pgs].level;
                _pgr < _pgu && (_pgr = _pgu);
            }
            return 0 == _pgr || ('そうりゅう' == _pgo.yomi ? (_pgq.houg += 3, _pgq.saku += 3) : 'ひりゅう' == _pgo.yomi && (_pgq.houg += 2, _pgq.saku += 2), 508 != _pgo.ship_id && 509 != _pgo.ship_id && 560 != _pgo.ship_id || (_pgq.houg += 1, _pgq.saku += 1), _pgr >= 8 && 197 == _pgo.ship_id && (_pgq.houg += 1, _pgq.saku += 1)), _pgq;
        };
    },
    17143: (_pgv, _pgw, _pgx) => {
        'use strict';
        var _pgy = null;
        defineModule(_pgw);
        Object.defineProperty(_pgw, '__esModule', {
            'value': true
        }), _pgw.getSlot63PersonalEffect = void 0;
        var _pgz = _pgx(74496);
        _pgw.getSlot63PersonalEffect = function(_ph0) {
            var _ph1 = null,
                _ph2 = new _pgz.SlotItemEffectModel(),
                _ph3 = new _pgz.SlotItemEffectModel();
            1 != _ph0.ctype && 5 != _ph0.ctype && 10 != _ph0.ctype || (_ph3.tyku += 1), 'ゆうだち' == _ph0.yomi && (_ph3.houg += 1, _ph3.tyku += 1, _ph3.kaih += 2), 145 == _ph0.ship_id || 961 == _ph0.ship_id ? _ph3.houg += 1 : 144 == _ph0.ship_id ? _ph3.raig += 1 : 469 == _ph0.ship_id ? _ph3.kaih += 2 : 242 == _ph0.ship_id || 497 == _ph0.ship_id || 244 == _ph0.ship_id || 498 == _ph0.ship_id || 975 == _ph0.ship_id ? _ph3.kaih += 1 : 627 == _ph0.ship_id ? _ph3.houg += 1 : 903 != _ph0.ship_id && 908 != _ph0.ship_id || (_ph3.houg += 2);
            var _ph4 = true;
            if (_ph3.exists() || (_ph4 = false), 0 == _ph4) return _ph2;
            var _ph5 = _ph0.get_slotnums(63);
            return _ph2 = _ph3.multiply(_ph5);
        };
    },
    16164: (_ph6, _ph7, _ph8) => {
        'use strict';
        var _ph9 = null;
        defineModule(_ph7);
        Object.defineProperty(_ph7, '__esModule', {
            'value': true
        }), _ph7.getSlot67PersonalEffect = void 0;
        var _pha = _ph8(74496);
        _ph7.getSlot67PersonalEffect = function(_phb) {
            var _phc = null,
                _phd = new _pha.SlotItemEffectModel(),
                _phe = new _pha.SlotItemEffectModel();
            if (13 != _phb.stype && 14 != _phb.stype && (_phe.raig = -5), !_phe.exists()) return _phd;
            var _phf = _phb.get_slotnums(67);
            return _phd = _phe.multiply(_phf);
        };
    },
    35023: (_phg, _phh, _phi) => {
        'use strict';
        var _phj = null;
        defineModule(_phh);
        Object.defineProperty(_phh, '__esModule', {
            'value': true
        }), _phh.getSlot69PersonalEffect = void 0;
        var _phk = _phi(74496);
        _phh.getSlot69PersonalEffect = function(_phl) {
            var _phm = null,
                _phn = new _phk.SlotItemEffectModel(),
                _pho = false,
                _php = new _phk.SlotItemEffectModel();
            if (554 == _phl.ship_id || 646 == _phl.ship_id ? (_php.houg += 1, _php.tais += 2, _pho = true) : 553 == _phl.ship_id && (_php.houg += 1, _php.tais += 1, _pho = true), 0 == _pho) return _phn;
            var _phq = _phl.get_slotnums(69);
            return _phn.add(_php.multiply(_phq)), _phn;
        };
    },
    78707: (_phr, _phs, _pht) => {
        'use strict';
        var _phu = null;
        defineModule(_phs);
        Object.defineProperty(_phs, '__esModule', {
            'value': true
        }), _phs.getSlot70PersonalEffect = void 0;
        var _phv = _pht(74496);
        _phs.getSlot70PersonalEffect = function(_phw) {
            var _phx = null,
                _phy = new _phv.SlotItemEffectModel(),
                _phz = false,
                _pi0 = new _phv.SlotItemEffectModel();
            if ('やましおまる' == _phw.yomi && (_pi0.houg += 1, _pi0.tais += 1, _phz = true), 0 == _phz) return _phy;
            var _pi1 = _phw.get_slotnums(70);
            return _phy.add(_pi0.multiply(_pi1)), _phy;
        };
    },
    44680: function(_pi2, _pi3, _pi4) {
        'use strict';
        var _pi5 = null;
        var _pi6 = this && this.__importDefault || function(_pi7) {
            var _pi8 = null;
            return _pi7 && _pi7.__esModule ? _pi7 : {
                'default': _pi7
            };
        };
        defineModule(_pi3);
        Object.defineProperty(_pi3, '__esModule', {
            'value': true
        }), _pi3.getSlot78PersonalEffect = void 0;
        var _pi9 = _pi4(74496),
            _pia = _pi6(_pi4(18622));
        _pi3.getSlot78PersonalEffect = function(_pib) {
            var _pic = null,
                _pid = new _pi9.SlotItemEffectModel(),
                _pie = false,
                _pif = new _pi9.SlotItemEffectModel(),
                _pig = 0,
                _pih = 0,
                _pii = false;
            if (48 == _pib.ctype && (_pif.houg += 1, _pif.kaih += 1, _pig = 1, _pih = 1, _pii = true, _pie = true), 0 == _pie) return _pid;
            var _pij = _pib.get_slotnums(78);
            _pid.add(_pif.multiply(_pij));
            var _pik = 0,
                _pil = _pib.get_each_level_nums(78),
                _pim = 0;
            if (_pii) {
                _pil.map(function(_pin, _pio) {
                    _pio >= 7 && (_pim += _pin);
                });
                for (var _pip = 0, _piq = _pib.have_slot_ids(); _pip < _piq.length; _pip++) {
                    var _pir = _piq[_pip],
                        _pis = _pia.default.model.slot.getMst(_pir),
                        _pit = _pis.equipType;
                    12 != _pit && 13 != _pit || _pis.sakuteki >= 5 && (_pik += _pib.get_slotnums(parseInt(_pir)));
                }
            }
            if (1 == _pig && _pik > 0 && (_pid.houg += 2, _pid.kaih += 2, _pid.raig += 2), 1 == _pih) {
                _pid.houg += 1 * _pim;
                var _piu = _pil[10];
                _pid.souk += 1 * _piu;
            }
            return _pid;
        };
    },
    45749: (_piv, _piw, _pix) => {
        'use strict';
        var _piy = null;
        defineModule(_piw);
        Object.defineProperty(_piw, '__esModule', {
            'value': true
        }), _piw.getSlot79And81PersonalEffect = void 0;
        var _piz = _pix(74496);
        _piw.getSlot79And81PersonalEffect = function(_pj0) {
            var _pj1 = null,
                _pj2 = new _piz.SlotItemEffectModel(),
                _pj3 = new _piz.SlotItemEffectModel();
            if (553 == _pj0.ship_id) _pj3.houg = 3;
            else {
                if (82 == _pj0.ship_id) _pj3.houg = 2;
                else {
                    if (88 == _pj0.ship_id) _pj3.houg = 2;
                    else {
                        if (554 == _pj0.ship_id) _pj3.houg = 3;
                        else {
                            if (411 == _pj0.ship_id) _pj3.houg = 2;
                            else {
                                if (412 != _pj0.ship_id) return _pj2;
                                _pj3.houg = 2;
                            }
                        }
                    }
                }
            }
            var _pj4 = _pj0.get_slotnums(79) + _pj0.get_slotnums(81);
            return _pj2 = _pj3.multiply(_pj4);
        };
    },
    37334: (_pj5, _pj6, _pj7) => {
        'use strict';
        var _pj8 = null;
        defineModule(_pj6);
        Object.defineProperty(_pj6, '__esModule', {
            'value': true
        }), _pj6.getSlot82PersonalEffect = void 0;
        var _pj9 = _pj7(74496);
        _pj6.getSlot82PersonalEffect = function(_pja) {
            var _pjb = null,
                _pjc = new _pj9.SlotItemEffectModel(),
                _pjd = new _pj9.SlotItemEffectModel();
            if (76 == _pja.ctype && (_pjd.tais = 1, _pjd.kaih = 1), !_pjd.exists()) return _pjc;
            var _pje = _pja.get_slotnums(82);
            return _pjc = _pjd.multiply(_pje);
        };
    },
    2603: function(_pjf, _pjg, _pjh) {
        'use strict';
        var _pji = null;
        var _pjj = this && this.__importDefault || function(_pjk) {
            var _pjl = null;
            return _pjk && _pjk.__esModule ? _pjk : {
                'default': _pjk
            };
        };
        defineModule(_pjg);
        Object.defineProperty(_pjg, '__esModule', {
            'value': true
        }), _pjg.getSlot84PersonalEffect = void 0;
        var _pjm = _pjh(74496),
            _pjn = _pjj(_pjh(18622));
        _pjg.getSlot84PersonalEffect = function(_pjo) {
            var _pjp = null,
                _pjq = new _pjm.SlotItemEffectModel(),
                _pjr = _pjo.get_each_level_nums(84),
                _pjs = 0,
                _pjt = 0;
            if (_pjr.forEach(function(_pju, _pjv) {
                    _pjv >= 4 && (_pjs += _pju), _pjv >= 7 && (_pjt += _pju);
                }), 0 == _pjs) return _pjq;
            for (var _pjw = 0, _pjx = 0, _pjy = _pjo.have_slot_ids(); _pjx < _pjy.length; _pjx++) {
                var _pjz = _pjy[_pjx],
                    _pk0 = _pjn.default.model.slot.getMst(_pjz),
                    _pk1 = _pk0.equipType;
                12 != _pk1 && 13 != _pk1 || (_pk0.sakuteki >= 5 && _pjo.get_slotnums(parseInt(_pjz)), _pk0.taiku >= 2 && (_pjw += _pjo.get_slotnums(parseInt(_pjz))));
            }
            var _pk2 = _pjo.getCountryName();
            _pjs >= 1 && (_pjq.tyku += 1 * _pjs, _pjq.kaih += 1 * _pjs, 'ドイツ' != _pk2 && 'イタリア' != _pk2 || (_pjq.tyku += 1 * _pjs, _pjq.kaih += 1 * _pjs), _pjw >= 1 && (_pjq.tyku += 1)), _pjt >= 1 && (_pjq.tyku += 1 * _pjt, _pjq.houg += 1 * _pjt);
            var _pk3 = _pjr[10];
            return _pk3 >= 1 && (_pjq.tyku += 1 * _pk3, _pjq.kaih += 1 * _pk3, 'ドイツ' != _pk2 && 'イタリア' != _pk2 || (_pjq.houg += 1)), _pjq;
        };
    },
    90725: (_pk4, _pk5, _pk6) => {
        'use strict';
        var _pk7 = null;
        defineModule(_pk5);
        Object.defineProperty(_pk5, '__esModule', {
            'value': true
        }), _pk5.getSlot85PersonalEffect = void 0;
        var _pk8 = _pk6(74496);
        _pk5.getSlot85PersonalEffect = function(_pk9) {
            var _pka = null,
                _pkb = new _pk8.SlotItemEffectModel(),
                _pkc = _pk9.get_each_level_over_nums([85]),
                _pkd = _pkc.slot[85][6],
                _pke = _pkc.slot[85][8],
                _pkf = _pkc.slot[85][10],
                _pkg = _pk9.get_have_rader_nums().air_rader,
                _pkh = _pk9.getCountryName();
            return _pkd > 0 && (_pkb.tyku += 1 * _pkd, _pkb.kaih += 1 * _pkd, _pkg >= 1 && (_pkb.tyku += 2)), _pke > 0 && (_pkb.houg += 1 * _pke, 'ドイツ' != _pkh && 'イタリア' != _pkh || (_pkb.tyku += 1 * _pke, _pkb.kaih += 1 * _pke)), _pkf > 0 && (_pkb.kaih += 1 * _pkf, _pkb.houm += 1 * _pkf, 'ドイツ' != _pkh && 'イタリア' != _pkh || (_pkb.houg += 1)), _pkb;
        };
    },
    29180: (_pki, _pkj, _pkk) => {
        'use strict';
        var _pkl = null;
        defineModule(_pkj);
        Object.defineProperty(_pkj, '__esModule', {
            'value': true
        }), _pkj.getSlot87PersonalEffect = void 0;
        var _pkm = _pkk(74496);
        _pkj.getSlot87PersonalEffect = function(_pkn) {
            var _pko = null,
                _pkp = new _pkm.SlotItemEffectModel(),
                _pkq = false,
                _pkr = new _pkm.SlotItemEffectModel(),
                _pks = 0;
            if (951 == _pkn.ship_id ? (_pkr.houg += 1, _pkr.kaih += 1, _pkr.raig += 1, _pkr.houm += 1, _pkq = true, _pks = 1) : 181 == _pkn.ship_id || 316 == _pkn.ship_id || 50 == _pkn.ship_id || 229 == _pkn.ship_id || 961 == _pkn.ship_id ? _pks = 2 : 591 != _pkn.ship_id && 592 != _pkn.ship_id && 593 != _pkn.ship_id && 954 != _pkn.ship_id && 694 != _pkn.ship_id || (_pkp.kaih += 2, _pkp.raig += 1, _pks = 3), 38 != _pkn.ctype && 54 != _pkn.ctype && 101 != _pkn.ctype || (_pks = 4), _pkq) {
                var _pkt = _pkn.get_slotnums(87);
                _pkp.add(_pkr.multiply(_pkt));
            }
            if (0 == _pks) return _pkp;
            var _pku = _pkn.get_each_level_nums(87),
                _pkv = [];
            return _pks > 0 && _pku.forEach(function(_pkw, _pkx) {
                var _pky = null;
                for (var _pkz = 1; _pkz <= _pkn.SLOT_LEVEL_MAX; _pkz++) null == _pkv[_pkz] && (_pkv[_pkz] = 0), _pkx >= _pkz && (_pkv[_pkz] += _pkw);
            }), 1 == _pks ? (_pkv[6] >= 1 && (_pkp.tyku += 1 * _pkv[6]), _pkv[7] >= 1 && (_pkp.kaih += 1 * _pkv[7]), _pkv[8] >= 1 && (_pkp.raig += 1 * _pkv[8]), _pkv[9] >= 1 && (_pkp.houg += 1 * _pkv[9]), _pkv[10] >= 1 && (_pkp.houm += 1 * _pkv[10])) : 2 == _pks ? (_pkv[6] >= 1 && (_pkp.kaih += 1 * _pkv[6]), _pkv[7] >= 1 && (_pkp.raig += 1 * _pkv[7]), _pkv[8] >= 1 && (_pkp.houg += 1 * _pkv[8]), _pkv[9] >= 1 && (_pkp.houm += 1 * _pkv[9]), _pkv[10] >= 1 && (_pkp.kaih += 1 * _pkv[10])) : 3 == _pks ? (_pkv[6] > 0 && (_pkp.kaih += 1), _pkv[8] > 0 && (_pkp.raig += 1), _pkv[10] > 0 && (_pkp.houg += 1)) : 4 == _pks && (_pkv[7] >= 1 && (_pkp.kaih += 1 * _pkv[7]), _pkv[8] >= 1 && (_pkp.raig += 1 * _pkv[8]), _pkv[10] >= 1 && (_pkp.houm += 1 * _pkv[10])), _pkp;
        };
    },
    68685: function(_pl0, _pl1, _pl2) {
        'use strict';
        var _pl3 = null;
        var _pl4 = this && this.__importDefault || function(_pl5) {
            var _pl6 = null;
            return _pl5 && _pl5.__esModule ? _pl5 : {
                'default': _pl5
            };
        };
        defineModule(_pl1);
        Object.defineProperty(_pl1, '__esModule', {
            'value': true
        }), _pl1.getSlot90PersonalEffect = void 0;
        var _pl7 = _pl2(74496),
            _pl8 = _pl4(_pl2(18622));
        _pl1.getSlot90PersonalEffect = function(_pl9) {
            var _pla = null,
                _plb = new _pl7.SlotItemEffectModel(),
                _plc = new _pl7.SlotItemEffectModel();
            if (142 == _pl9.ship_id ? (_plc.houg += 2, _plc.kaih += 1) : 295 == _pl9.ship_id || 416 == _pl9.ship_id || 417 == _pl9.ship_id ? _plc.houg += 1 : 264 == _pl9.ship_id ? (_plc.houg += 1, _plc.tyku += 1) : 501 != _pl9.ship_id && 506 != _pl9.ship_id && 502 != _pl9.ship_id && 507 != _pl9.ship_id || (_plc.houg += 1), 7 != _pl9.ctype && 13 != _pl9.ctype && 8 != _pl9.ctype && 29 != _pl9.ctype && 9 != _pl9.ctype && 31 != _pl9.ctype || (_plc.houg += 1), _plc.exists()) {
                var _pld = _pl9.get_slotnums(90);
                _plb = _plc.multiply(_pld);
            }
            var _ple = [];
            if ('あおば' == _pl9.yomi && (_ple[1] = 1), 13 != _pl9.ctype && 7 != _pl9.ctype || (_ple[2] = 1), 0 == _ple.length) return _plb;
            for (var _plf = 0, _plg = 0, _plh = 0, _pli = _pl9.have_slot_ids(); _plh < _pli.length; _plh++) {
                var _plj = _pli[_plh],
                    _plk = _pl8.default.model.slot.getMst(_plj),
                    _pll = _plk.equipType;
                12 != _pll && 13 != _pll || (_plk.sakuteki >= 5 && (_plf += _pl9.get_slotnums(parseInt(_plj))), _plk.taiku >= 2 && (_plg += _pl9.get_slotnums(parseInt(_plj))));
            }
            return _plg > 0 && null != _ple[1] && (_plb.tyku += 5, _plb.kaih += 2), _plf > 0 && null != _ple[2] && (_plb.houg += 3, _plb.kaih += 2, _plb.raig += 2), _plb;
        };
    },
    26078: (_plm, _pln, _plo) => {
        'use strict';
        var _plp = null;
        defineModule(_pln);
        Object.defineProperty(_pln, '__esModule', {
            'value': true
        }), _pln.getSlot93PersonalEffect = void 0;
        var _plq = _plo(74496);
        _pln.getSlot93PersonalEffect = function(_plr) {
            var _pls = null,
                _plt = new _plq.SlotItemEffectModel();
            return 'そうりゅう' == _plr.yomi ? _plt.houg = 1 : 'ひりゅう' == _plr.yomi && (_plt.houg = 3), _plt;
        };
    },
    20829: (_plu, _plv, _plw) => {
        'use strict';
        var _plx = null;
        defineModule(_plv);
        Object.defineProperty(_plv, '__esModule', {
            'value': true
        }), _plv.getSlot94PersonalEffect = void 0;
        var _ply = _plw(74496);
        _plv.getSlot94PersonalEffect = function(_plz) {
            var _pm0 = null,
                _pm1 = new _ply.SlotItemEffectModel();
            if (196 == _plz.ship_id) _pm1.houg = 7;
            else {
                if (197 != _plz.ship_id) return _pm1;
                _pm1.houg = 3;
            }
            return _pm1;
        };
    },
    6880: (_pm2, _pm3, _pm4) => {
        'use strict';
        var _pm5 = null;
        defineModule(_pm3);
        Object.defineProperty(_pm3, '__esModule', {
            'value': true
        }), _pm3.getSlot99PersonalEffect = void 0;
        var _pm6 = _pm4(74496);
        _pm3.getSlot99PersonalEffect = function(_pm7) {
            var _pm8 = null,
                _pm9 = new _pm6.SlotItemEffectModel();
            return 'そうりゅう' == _pm7.yomi ? _pm9.houg = 4 : 'ひりゅう' == _pm7.yomi && (_pm9.houg = 1), _pm9;
        };
    },
    21403: (_pma, _pmb, _pmc) => {
        'use strict';
        var _pmd = null;
        defineModule(_pmb);
        Object.defineProperty(_pmb, '__esModule', {
            'value': true
        }), _pmb.getSlotCorsairMkIIPersonalEffect = void 0;
        var _pme = _pmc(74496);
        _pmb.getSlotCorsairMkIIPersonalEffect = function(_pmf) {
            var _pmg = null,
                _pmh = new _pme.SlotItemEffectModel(),
                _pmi = false,
                _pmj = new _pme.SlotItemEffectModel();
            112 == _pmf.ctype && (_pmj.houg += 1, _pmj.tyku += 1, _pmj.kaih += 2, _pmi = true);
            var _pmk = _pmf.getCountryName();
            if (67 == _pmf.ctype || 78 == _pmf.ctype || 82 == _pmf.ctype || 88 == _pmf.ctype || 108 == _pmf.ctype || 112 == _pmf.ctype ? (_pmj.houg += 1, _pmj.tyku += 2, _pmj.kaih += 3, _pmi = true) : 'アメリカ' == _pmk && (_pmj.houg += 1, _pmj.tyku += 1, _pmj.kaih += 2, _pmi = true), 0 == _pmi) return _pmh;
            var _pml = _pmf.get_slotnums(434) + _pmf.get_slotnums(435);
            return _pmh.add(_pmj.multiply(_pml)), _pmh;
        };
    },
    9195: (_pmm, _pmn, _pmo) => {
        'use strict';
        var _pmp = null;
        defineModule(_pmn);
        Object.defineProperty(_pmn, '__esModule', {
            'value': true
        }), _pmn.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _pmq = _pmo(74496);
        _pmn.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_pmr) {
            var _pms = null,
                _pmt = new _pmq.SlotItemEffectModel(),
                _pmu = false,
                _pmv = new _pmq.SlotItemEffectModel();
            if (56 == _pmr.ctype && (_pmv.tais += 3, _pmv.kaih += 2, _pmu = true), 0 == _pmu) return _pmt;
            var _pmw = _pmr.get_slotnums(44) + _pmr.get_slotnums(45) + _pmr.get_slotnums(287) + _pmr.get_slotnums(288);
            return _pmt.add(_pmv.multiply(_pmw)), _pmt;
        };
    },
    93297: (_pmx, _pmy, _pmz) => {
        'use strict';
        var _pn0 = null;
        defineModule(_pmy);
        Object.defineProperty(_pmy, '__esModule', {
            'value': true
        }), _pmy.getSlotDomesticSonarPersonalEffect = void 0;
        var _pn1 = _pmz(74496);
        _pmy.getSlotDomesticSonarPersonalEffect = function(_pn2) {
            var _pn3 = null,
                _pn4 = new _pn1.SlotItemEffectModel();
            return 56 == _pn2.ctype && (_pn4.tais += 2, _pn4.kaih += 3), _pn4;
        };
    },
    34941: (_pn5, _pn6, _pn7) => {
        'use strict';
        var _pn8 = null;
        defineModule(_pn6);
        Object.defineProperty(_pn6, '__esModule', {
            'value': true
        }), _pn6.getSlotMyoujoPlanePersonalEffect = void 0;
        var _pn9 = _pn7(74496);
        _pn6.getSlotMyoujoPlanePersonalEffect = function(_pna) {
            var _pnb = null,
                _pnc = new _pn9.SlotItemEffectModel(),
                _pnd = 0,
                _pne = false,
                _pnf = false,
                _png = false,
                _pnh = false;
            if ({
                    'ほうしょう': 1,
                    'ずいほう': 1
                }[_pna.yomi] && (_pne = true, _pnd++), {
                    116: 1,
                    117: 1,
                    555: 1,
                    560: 1,
                    285: 1,
                    894: 1,
                    899: 1,
                    318: 1,
                    888: 1,
                    883: 1
                }[_pna.ship_id] && (_pnf = true, _pnd++), {
                    883: 1,
                    899: 1
                }[_pna.ship_id] && (_png = true, _pnd++), {
                    599: 1,
                    610: 1,
                    555: 1,
                    560: 1,
                    888: 1
                }[_pna.ship_id] && (_pnh = true, _pnd++), 0 == _pnd) return _pnc;
            var _pni = _pna.get_slotnums(550),
                _pnj = _pna.get_slotnums(551),
                _pnk = _pna.get_slotnums(552),
                _pnl = _pni + _pnj + _pnk,
                _pnm = _pna.haveSlotLevelNumOver(550),
                _pnn = _pna.haveSlotLevelNumOver(551),
                _pno = _pna.haveSlotLevelNumOver(552);
            return _pne && (_pnc.houm += 1 * _pnl, _pnc.kaih += 1 * _pnl, _pni >= 1 && (_pnm[7] >= 1 && (_pnc.houg += 1 * _pnm[7]), _pnm[8] >= 1 && (_pnc.kaih += 1 * _pnm[8]), _pnm[9] >= 1 && (_pnc.houm += 1 * _pnm[9]), _pnm[10] >= 1 && (_pnc.houg += 1 * _pnm[10]))), _pnf && (_pnc.houg += 1 * _pnl, _pnc.kaih += 1 * _pnl, _pnj >= 1 && (_pnc.houg += 1 * _pnj, _pnc.houm += 1 * _pnj, _pnc.kaih += 1 * _pnj, _pnn[7] >= 1 && (_pnc.houm += 1 * _pnn[7]), _pnn[8] >= 1 && (_pnc.houg += 1 * _pnn[8]), _pnn[9] >= 1 && (_pnc.kaih += 1 * _pnn[9]), _pnn[10] >= 1 && (_pnc.houg += 1 * _pnn[10]))), _png && _pnk >= 1 && (_pnc.houg += 2 * _pnk, _pnc.houm += 3 * _pnk, _pnc.kaih += 3 * _pnk, _pno[3] >= 1 && (_pnc.kaih += 1 * _pno[3]), _pno[6] >= 1 && (_pnc.houg += 1 * _pno[6]), _pno[7] >= 1 && (_pnc.houm += 1 * _pno[7]), _pno[8] >= 1 && (_pnc.houg += 1 * _pno[8]), _pno[9] >= 1 && (_pnc.kaih += 1 * _pno[9]), _pno[10] >= 1 && (_pnc.houg += 1 * _pno[10])), _pnh && _pnk >= 1 && (_pnc.houg += 1 * _pnk, _pnc.houm += 2 * _pnk, _pnc.kaih += 1 * _pnk, null != _pno && (_pno[7] >= 1 && (_pnc.kaih += 1 * _pno[7]), _pno[8] >= 1 && (_pnc.houm += 1 * _pno[8]), _pno[9] >= 1 && (_pnc.kaih += 1 * _pno[9]), _pno[10] >= 1 && (_pnc.houg += 1 * _pno[10]))), _pnc;
        };
    },
    45482: (_pnp, _pnq, _pnr) => {
        'use strict';
        var _pns = null;
        defineModule(_pnq);
        Object.defineProperty(_pnq, '__esModule', {
            'value': true
        }), _pnq.getSlotOtherSuiseiPersonalEffect = void 0;
        var _pnt = _pnr(74496);
        _pnq.getSlotOtherSuiseiPersonalEffect = function(_pnu) {
            var _pnv = null,
                _pnw = new _pnt.SlotItemEffectModel(),
                _pnx = new _pnt.SlotItemEffectModel();
            if (553 == _pnu.ship_id) _pnx.houg = 2;
            else {
                if (554 != _pnu.ship_id) return _pnw;
                _pnx.houg = 2;
            }
            var _pny = _pnu.get_slotnums(24) + _pnu.get_slotnums(57) + _pnu.get_slotnums(111);
            return _pnw = _pnx.multiply(_pny);
        };
    },
    10950: (_pnz, _po0, _po1) => {
        'use strict';
        var _po2 = null;
        defineModule(_po0);
        Object.defineProperty(_po0, '__esModule', {
            'value': true
        }), _po0.getSlotSBD_Type_VS_VBPersonalEffect = void 0;
        var _po3 = _po1(74496);
        _po0.getSlotSBD_Type_VS_VBPersonalEffect = function(_po4) {
            var _po5 = null,
                _po6 = new _po3.SlotItemEffectModel(),
                _po7 = false,
                _po8 = new _po3.SlotItemEffectModel();
            'レキシントン' == _po4.yomi ? (_po8.houg += 4, _po8.houm += 2, _po8.tyku += 1, _po8.kaih += 2, _po8.saku += 2, _po7 = true) : 'サラトガ' == _po4.yomi ? (_po8.houg += 2, _po8.houm += 1, _po8.tyku += 1, _po8.kaih += 1, _po8.saku += 1, _po7 = true) : 'ホーネット' == _po4.yomi || 'レンジャー' == _po4.yomi ? (_po8.houg += 1, _po8.houm += 1, _po8.tyku += 1, _po8.kaih += 1, _po7 = true) : 'ガンビア・ベイ' != _po4.yomi && 'ラングレー' != _po4.yomi || (_po8.houg += 1, _po8.kaih += 1, _po7 = true);
            var _po9 = _po4.get_slotnums(543) + _po4.get_slotnums(544);
            _po7 && _po6.add(_po8.multiply(_po9));
            var _poa = _po4.haveSlotLevelNumOver(543),
                _pob = _po4.haveSlotLevelNumOver(544);
            return 'アメリカ' == _po4.getCountryName() && (_poa[7] >= 1 && (_po6.houm += 1 * _poa[7]), _poa[8] >= 1 && (_po6.saku += 1 * _poa[8]), _poa[9] >= 1 && (_po6.houg += 1 * _poa[9]), _poa[10] >= 1 && (_po6.houm += 1 * _poa[10]), _pob[7] >= 1 && (_po6.houg += 1 * _pob[7]), _pob[8] >= 1 && (_po6.houm += 1 * _pob[8]), _pob[9] >= 1 && (_po6.tyku += 1 * _pob[9]), _pob[10] >= 1 && (_po6.houg += 1 * _pob[10])), _po6;
        };
    },
    45927: (_poc, _pod, _poe) => {
        'use strict';
        var _pof = null;
        defineModule(_pod);
        Object.defineProperty(_pod, '__esModule', {
            'value': true
        }), _pod.getSlotSmokePersonalEffect = void 0;
        var _pog = _poe(74496);
        _pod.getSlotSmokePersonalEffect = function(_poh) {
            var _poi = null,
                _poj = new _pog.SlotItemEffectModel(),
                _pok = false,
                _pol = new _pog.SlotItemEffectModel();
            if (959 == _poh.ship_id && (_pol.kaih += 4, _pok = true), 'ジョンストン' == _poh.yomi || 'サミュエル・B・ロバーツ' == _poh.yomi || 'せんだい' == _poh.yomi || 'はるかぜ' == _poh.yomi || 'かみかぜ' == _poh.yomi || 'しきなみ' == _poh.yomi || 'うらなみ' == _poh.yomi || 'あおば' == _poh.yomi ? (_pol.kaih += 3, _pok = true) : 'いなづま' != _poh.yomi && 'はぐろ' != _poh.yomi && 'はつしも' != _poh.yomi && 'かすみ' != _poh.yomi && 'ふぶき' != _poh.yomi && 'あたご' != _poh.yomi && 'あまぎり' != _poh.yomi && 'はまなみ' != _poh.yomi || (_pol.kaih += 2, _pok = true), 0 == _pok) return _poj;
            var _pom = _poh.get_slotnums(500) + _poh.get_slotnums(501);
            return _poj.add(_pol.multiply(_pom)), _poj;
        };
    },
    75873: (_pon, _poo, _pop) => {
        'use strict';
        var _poq = null;
        defineModule(_poo);
        Object.defineProperty(_poo, '__esModule', {
            'value': true
        }), _poo.getSlotSocSeagullPersonalEffect = void 0;
        var _por = _pop(74496);
        _poo.getSlotSocSeagullPersonalEffect = function(_pos) {
            var _pot = null,
                _pou = new _por.SlotItemEffectModel(),
                _pov = {},
                _pow = false,
                _pox = false;
            'アメリカ' == _pos.getCountryName() && (_pow = true, 3 != _pos.stype && 5 != _pos.stype || (_pox = true)), _pos.get_slotnums(414);
            var _poy = _pos.get_slotnums(539);
            _pow && (_pou.saku += 1, _pov[1] = 1), _pox && (_pou.houg += 1, _pou.saku += 1, 110 == _pos.ctype && _poy >= 1 && (_pou.houm += 1), _pov[2] = 1);
            var _poz = _pos.haveSlotLevelNumOver(414),
                _pp0 = _pos.haveSlotLevelNumOver(539);
            return null != _pov[1] && (_poz[5] >= 1 && (_pou.kaih += 1), _pp0[3] >= 1 && (_pou.kaih += 1), _pp0[5] >= 1 && (_pou.saku += 1), _pp0[7] >= 1 && (_pou.houm += 1)), null != _pov[2] && (_poz[3] >= 1 && (_pou.saku += 1), _poz[8] >= 1 && (_pou.kaih += 1), _poz[10] >= 1 && (_pou.houg += 1), _pp0[6] >= 1 && (_pou.tyku += 1), _pp0[8] >= 1 && (_pou.kaih += 1), _pp0[9] >= 1 && (_pou.houg += 1), _pp0[10] >= 1 && (_pou.houm += 1)), _pou;
        };
    },
    32666: (_pp1, _pp2, _pp3) => {
        'use strict';
        var _pp4 = null;
        defineModule(_pp2);
        Object.defineProperty(_pp2, '__esModule', {
            'value': true
        }), _pp2.getSlotTokuYonPersonalEffect = void 0;
        var _pp5 = _pp3(74496);
        _pp2.getSlotTokuYonPersonalEffect = function(_pp6) {
            var _pp7 = null,
                _pp8 = new _pp5.SlotItemEffectModel(),
                _pp9 = false,
                _ppa = new _pp5.SlotItemEffectModel(),
                _ppb = 0,
                _ppc = _pp6.get_slotnums(525),
                _ppd = _pp6.get_slotnums(526),
                _ppe = _ppc + _ppd;
            if (13 != _pp6.stype && 14 != _pp6.stype || (_ppa.houg += 1, _ppa.raig += 2, _ppa.kaih -= 1, _pp9 = true, _ppb = 1, 'い36' != _pp6.yomi && 'い41' != _pp6.yomi || (_pp8.houg += 2, _pp8.raig += 1, _pp8.houm += 2), _ppd >= 1 && (_pp8.houg += 1 * _ppd, _pp8.raig += 1 * _ppd, _pp8.houm += 1 * _ppd)), 0 == _pp9) return _pp8;
            if (_pp8.add(_ppa.multiply(_ppe)), 0 == _ppb) return _pp8;
            var _ppf = _pp6.get_each_level_over_nums([525, 526]),
                _ppg = _ppf.slot[525],
                _pph = _ppf.slot[526];
            if (1 == _ppb) {
                if (_ppg[1] >= 1 || _pph[1] >= 1) {
                    var _ppi = _ppg[1] + _pph[1];
                    _pp8.raig += 1 * _ppi;
                }
                if (_pph[2] >= 1) {
                    var _ppj = _ppg[2] + _pph[2];
                    _pp8.houg += 1 * _ppj;
                }
                if (_ppg[3] >= 1 || _pph[3] >= 1) {
                    var _ppk = _ppg[3] + _pph[3];
                    _pp8.houm += 1 * _ppk;
                }
                if (_pph[4] >= 1) {
                    var _ppl = _ppg[4] + _pph[4];
                    _pp8.raig += 1 * _ppl;
                }
                if (_ppg[6] >= 1 || _pph[6] >= 1) {
                    var _ppm = _ppg[6] + _pph[6];
                    _pp8.houm += 1 * _ppm;
                }
                if (_pph[8] >= 1) {
                    var _ppn = _ppg[8] + _pph[8];
                    _pp8.houg += 1 * _ppn;
                }
                if (_ppg[10] >= 1 || _pph[10] >= 1) {
                    var _ppo = _ppg[10] + _pph[10];
                    _pp8.raig += 1 * _ppo;
                }
            }
            return _pp8;
        };
    },
    29805: (_ppp, _ppq, _ppr) => {
        'use strict';
        var _pps = null;
        defineModule(_ppq);
        Object.defineProperty(_ppq, '__esModule', {
            'value': true
        }), _ppq.getSlotType10PersonalEffect = void 0;
        var _ppt = _ppr(74496);
        _ppq.getSlotType10PersonalEffect = function(_ppu) {
            var _ppv = null,
                _ppw = new _ppt.SlotItemEffectModel();
            return 662 == _ppu.ship_id || 663 == _ppu.ship_id || 668 == _ppu.ship_id ? (_ppw.houg += 2, _ppw.kaih += 1, _ppw.tais += 3) : 501 != _ppu.ship_id && 506 != _ppu.ship_id && 502 != _ppu.ship_id && 507 != _ppu.ship_id || (_ppw.houg += 2), _ppw;
        };
    },
    58913: (_ppx, _ppy, _ppz) => {
        'use strict';
        var _pq0 = null;
        defineModule(_ppy);
        Object.defineProperty(_ppy, '__esModule', {
            'value': true
        }), _ppy.getSlotType11PersonalEffect = void 0;
        var _pq1 = _ppz(74496);
        _ppy.getSlotType11PersonalEffect = function(_pq2) {
            var _pq3 = null,
                _pq4 = new _pq1.SlotItemEffectModel();
            return 662 == _pq2.ship_id || 663 == _pq2.ship_id || 668 == _pq2.ship_id ? (_pq4.houg += 1, _pq4.kaih += 1, _pq4.tais += 1) : 501 != _pq2.ship_id && 506 != _pq2.ship_id && 502 != _pq2.ship_id && 507 != _pq2.ship_id || (_pq4.houg += 1, _pq4.kaih += 1), _pq4;
        };
    },
    55421: (_pq5, _pq6, _pq7) => {
        'use strict';
        var _pq8 = null;
        defineModule(_pq6);
        Object.defineProperty(_pq6, '__esModule', {
            'value': true
        }), _pq6.getSlotType25PersonalEffect = void 0;
        var _pq9 = _pq7(74496);
        _pq6.getSlotType25PersonalEffect = function(_pqa) {
            var _pqb = null,
                _pqc = new _pq9.SlotItemEffectModel();
            return 662 == _pqa.ship_id ? (_pqc.tais += 4, _pqc.kaih += 1) : 663 != _pqa.ship_id && 668 != _pqa.ship_id || (_pqc.tais += 3, _pqc.kaih += 1), _pqc;
        };
    },
    272: function(_pqd, _pqe, _pqf) {
        'use strict';
        var _pqg = null;
        var _pqh = this && this.__importDefault || function(_pqi) {
            var _pqj = null;
            return _pqi && _pqi.__esModule ? _pqi : {
                'default': _pqi
            };
        };
        defineModule(_pqe);
        Object.defineProperty(_pqe, '__esModule', {
            'value': true
        }), _pqe.getSlotType9PersonalEffect = void 0;
        var _pqk = _pqf(74496),
            _pql = _pqh(_pqf(18622));
        _pqe.getSlotType9PersonalEffect = function(_pqm) {
            var _pqn = null,
                _pqo = new _pqk.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_pqm.stype]) return _pqo;
            for (var _pqp = 0, _pqq = 0, _pqr = _pqm.have_slot_ids(); _pqq < _pqr.length; _pqq++) {
                var _pqs = _pqr[_pqq];
                if (9 == _pql.default.model.slot.getMst(_pqs).equipType)
                    for (var _pqt = 0, _pqu = _pqm.have_slots_dict[parseInt(_pqs)]; _pqt < _pqu.length; _pqt++) {
                        var _pqv = _pqu[_pqt].level;
                        _pqp < _pqv && (_pqp = _pqv);
                    }
            }
            return _pqp >= 2 && (_pqo.saku += 1), _pqp >= 4 && (_pqo.houg += 1), _pqp >= 6 && (_pqo.saku += 1), _pqp >= 10 && (_pqo.houg += 1, _pqo.saku += 1), _pqo;
        };
    },
    49964: (_pqw, _pqx, _pqy) => {
        'use strict';
        var _pqz = null;
        defineModule(_pqx);
        Object.defineProperty(_pqx, '__esModule', {
            'value': true
        }), _pqx.getSlotYellowWingsPersonalEffect = void 0;
        var _pr0 = _pqy(74496);
        _pqx.getSlotYellowWingsPersonalEffect = function(_pr1) {
            var _pr2 = null,
                _pr3 = new _pr0.SlotItemEffectModel(),
                _pr4 = false,
                _pr5 = new _pr0.SlotItemEffectModel();
            'レキシントン' == _pr1.yomi ? (_pr5.houg += 3, _pr5.houm += 2, _pr5.tyku += 1, _pr5.kaih += 2, _pr5.saku += 1, _pr4 = true) : 'サラトガ' == _pr1.yomi ? (_pr5.houg += 2, _pr5.houm += 1, _pr5.tyku += 1, _pr5.kaih += 1, _pr5.saku += 1, _pr4 = true) : 'ホーネット' != _pr1.yomi && 'レンジャー' != _pr1.yomi || (_pr5.houg += 1, _pr5.houm += 1, _pr5.kaih += 1, _pr4 = true);
            var _pr6 = _pr1.get_slotnums(541) + _pr1.get_slotnums(542);
            _pr4 && _pr3.add(_pr5.multiply(_pr6));
            var _pr7 = _pr1.haveSlotLevelNumOver(541),
                _pr8 = _pr1.haveSlotLevelNumOver(542);
            return 'アメリカ' == _pr1.getCountryName() && (_pr7[7] >= 1 && (_pr3.kaih += 1 * _pr7[7]), _pr7[10] >= 1 && (_pr3.houg += 1 * _pr7[10]), _pr8[7] >= 1 && (_pr3.houm += 1 * _pr8[7]), _pr8[10] >= 1 && (_pr3.houg += 1 * _pr8[10])), _pr3;
        };
    },
    54518: (_pr9, _pra, _prb) => {
        'use strict';
        var _prc = null;
        defineModule(_pra);
        Object.defineProperty(_pra, '__esModule', {
            'value': true
        }), _pra.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _prd = _prb(74496);
        _pra.getSlot_16InchMkXRensouhou_PersonalEffect = function(_pre) {
            var _prf = null,
                _prg = new _prd.SlotItemEffectModel();
            if (93 == _pre.ctype) {
                var _prh = _pre.get_slotnums(330);
                _prh > 0 && (_prg.houg = _prg.houg + 1 * _prh);
                var _pri = _pre.get_slotnums(331);
                _pri > 0 && (_prg.houg = _prg.houg + 1 * _pri, 1496 != _pre.ship_id && 918 != _pre.ship_id || (_prg.houg = _prg.houg + 1 * _pri, _prg.kaih = _prg.kaih + 1 * _pri));
                var _prj = _pre.get_slotnums(332);
                return _prj > 0 && (_prg.houg = _prg.houg + 1 * _prj, 1496 != _pre.ship_id && 918 != _pre.ship_id || (_prg.houg = _prg.houg + 1 * _prj, _prg.kaih = _prg.kaih + 1 * _prj, _prg.tyku = _prg.tyku + 1 * _prj)), _prg;
            }
            var _prk = new _prd.SlotItemEffectModel();
            if (19 == _pre.ctype ? (_prk.houg = 1, (541 == _pre.ship_id || 573 == _pre.ship_id) && (_prk.houg += 1)) : 88 == _pre.ctype && (_prk.houg = 1, 576 == _pre.ship_id && (_prk.houg += 1)), !_prk.exists()) return _prg;
            var _prl = _pre.get_slotnums(330) + _pre.get_slotnums(331) + _pre.get_slotnums(332);
            return _prg = _prk.multiply(_prl);
        };
    },
    79353: (_prm, _prn, _pro) => {
        'use strict';
        var _prp = null;
        defineModule(_prn);
        Object.defineProperty(_prn, '__esModule', {
            'value': true
        }), _prn.getZuiunSeriesEffect = void 0;
        var _prq = _pro(74496);
        _prn.getZuiunSeriesEffect = function(_prr) {
            var _prs = null,
                _prt = new _prq.SlotItemEffectModel(),
                _pru = false,
                _prv = new _prq.SlotItemEffectModel();
            if (662 == _prr.ship_id ? (_prt.houg += 2, _prt.kaih += 1) : 663 == _prr.ship_id || 668 == _prr.ship_id || 501 == _prr.ship_id || 506 == _prr.ship_id ? (_prt.houg += 2, _prv.kaih += 1, _prv.tyku += 1, _pru = true) : 502 != _prr.ship_id && 507 != _prr.ship_id || (_prt.houg += 1, _prv.kaih += 1, _prv.tyku += 1, _pru = true), 0 == _pru) return _prt;
            var _prw = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_prx) {
                var _pry = null;
                _prw += _prr.get_slotnums(_prx);
            }), _prt.add(_prv.multiply(_prw)), _prt;
        };
    },
    89051: function(_prz, _ps0, _ps1) {
        'use strict';
        var _ps2 = null;
        var _ps3 = this && this.__createBinding || (Object.create ? function(_ps4, _ps5, _ps6, _ps7) {
                var _ps8 = null;
                void 0 === _ps7 && (_ps7 = _ps6);
                var _ps9 = Object.getOwnPropertyDescriptor(_ps5, _ps6);
                _ps9 && !('get' in _ps9 ? !_ps5.__esModule : _ps9.writable || _ps9.configurable) || (_ps9 = {
                    'enumerable': true,
                    'get': function() {
                        return _ps5[_ps6];
                    }
                }), Object.defineProperty(_ps4, _ps7, _ps9);
            } : function(_psa, _psb, _psc, _psd) {
                void 0 === _psd && (_psd = _psc), _psa[_psd] = _psb[_psc];
            }),
            _pse = this && this.__exportStar || function(_psf, _psg) {
                var _psh = null;
                for (var _psi in _psf) 'default' === _psi || Object.prototype.hasOwnProperty.call(_psg, _psi) || _ps3(_psg, _psf, _psi);
            };
        defineModule(_ps0);
        Object.defineProperty(_ps0, '__esModule', {
            'value': true
        }), _pse(_ps1(34165), _ps0), _pse(_ps1(81018), _ps0), _pse(_ps1(56716), _ps0), _pse(_ps1(17713), _ps0), _pse(_ps1(54518), _ps0), _pse(_ps1(66985), _ps0), _pse(_ps1(88102), _ps0), _pse(_ps1(66904), _ps0), _pse(_ps1(98137), _ps0), _pse(_ps1(69954), _ps0), _pse(_ps1(22218), _ps0), _pse(_ps1(88271), _ps0), _pse(_ps1(23035), _ps0), _pse(_ps1(2578), _ps0), _pse(_ps1(17143), _ps0), _pse(_ps1(16164), _ps0), _pse(_ps1(35023), _ps0), _pse(_ps1(44680), _ps0), _pse(_ps1(45749), _ps0), _pse(_ps1(37334), _ps0), _pse(_ps1(29180), _ps0), _pse(_ps1(68685), _ps0), _pse(_ps1(26078), _ps0), _pse(_ps1(20829), _ps0), _pse(_ps1(6880), _ps0), _pse(_ps1(17213), _ps0), _pse(_ps1(40176), _ps0), _pse(_ps1(32889), _ps0), _pse(_ps1(11285), _ps0), _pse(_ps1(96200), _ps0), _pse(_ps1(9115), _ps0), _pse(_ps1(37173), _ps0), _pse(_ps1(21713), _ps0), _pse(_ps1(59823), _ps0), _pse(_ps1(57440), _ps0), _pse(_ps1(29240), _ps0), _pse(_ps1(40885), _ps0), _pse(_ps1(19614), _ps0), _pse(_ps1(87220), _ps0), _pse(_ps1(81367), _ps0), _pse(_ps1(13052), _ps0), _pse(_ps1(94968), _ps0), _pse(_ps1(48658), _ps0), _pse(_ps1(1906), _ps0), _pse(_ps1(61887), _ps0), _pse(_ps1(47970), _ps0), _pse(_ps1(31797), _ps0), _pse(_ps1(45738), _ps0), _pse(_ps1(34718), _ps0), _pse(_ps1(69245), _ps0), _pse(_ps1(18478), _ps0), _pse(_ps1(2899), _ps0), _pse(_ps1(57120), _ps0), _pse(_ps1(74985), _ps0), _pse(_ps1(9234), _ps0), _pse(_ps1(30802), _ps0), _pse(_ps1(97002), _ps0), _pse(_ps1(16748), _ps0), _pse(_ps1(53618), _ps0), _pse(_ps1(72573), _ps0), _pse(_ps1(8955), _ps0), _pse(_ps1(98947), _ps0), _pse(_ps1(44726), _ps0), _pse(_ps1(93065), _ps0), _pse(_ps1(85767), _ps0), _pse(_ps1(38314), _ps0), _pse(_ps1(59747), _ps0), _pse(_ps1(40649), _ps0), _pse(_ps1(13533), _ps0), _pse(_ps1(12138), _ps0), _pse(_ps1(30042), _ps0), _pse(_ps1(33623), _ps0), _pse(_ps1(85630), _ps0), _pse(_ps1(88736), _ps0), _pse(_ps1(49341), _ps0), _pse(_ps1(74306), _ps0), _pse(_ps1(83898), _ps0), _pse(_ps1(71873), _ps0), _pse(_ps1(53122), _ps0), _pse(_ps1(51063), _ps0), _pse(_ps1(91491), _ps0), _pse(_ps1(85495), _ps0), _pse(_ps1(65365), _ps0), _pse(_ps1(98164), _ps0), _pse(_ps1(38114), _ps0), _pse(_ps1(21003), _ps0), _pse(_ps1(77010), _ps0), _pse(_ps1(39126), _ps0), _pse(_ps1(72176), _ps0), _pse(_ps1(33846), _ps0), _pse(_ps1(97157), _ps0), _pse(_ps1(63406), _ps0), _pse(_ps1(66373), _ps0), _pse(_ps1(19707), _ps0), _pse(_ps1(63978), _ps0), _pse(_ps1(92382), _ps0), _pse(_ps1(78415), _ps0), _pse(_ps1(23090), _ps0), _pse(_ps1(18776), _ps0), _pse(_ps1(39656), _ps0), _pse(_ps1(66039), _ps0), _pse(_ps1(64679), _ps0), _pse(_ps1(95953), _ps0), _pse(_ps1(86384), _ps0), _pse(_ps1(65345), _ps0), _pse(_ps1(46514), _ps0), _pse(_ps1(81976), _ps0), _pse(_ps1(89331), _ps0), _pse(_ps1(73973), _ps0), _pse(_ps1(21178), _ps0), _pse(_ps1(5079), _ps0), _pse(_ps1(95014), _ps0), _pse(_ps1(53099), _ps0), _pse(_ps1(76201), _ps0), _pse(_ps1(24931), _ps0), _pse(_ps1(60978), _ps0), _pse(_ps1(74312), _ps0), _pse(_ps1(54350), _ps0), _pse(_ps1(26262), _ps0), _pse(_ps1(45530), _ps0), _pse(_ps1(44053), _ps0), _pse(_ps1(65441), _ps0), _pse(_ps1(33258), _ps0), _pse(_ps1(92168), _ps0), _pse(_ps1(85975), _ps0), _pse(_ps1(98467), _ps0), _pse(_ps1(88348), _ps0), _pse(_ps1(21097), _ps0), _pse(_ps1(37273), _ps0), _pse(_ps1(72694), _ps0), _pse(_ps1(62067), _ps0), _pse(_ps1(87817), _ps0), _pse(_ps1(93526), _ps0), _pse(_ps1(33084), _ps0), _pse(_ps1(97831), _ps0), _pse(_ps1(45482), _ps0), _pse(_ps1(272), _ps0), _pse(_ps1(69377), _ps0), _pse(_ps1(31127), _ps0), _pse(_ps1(79353), _ps0), _pse(_ps1(17274), _ps0), _pse(_ps1(91302), _ps0), _pse(_ps1(82229), _ps0), _pse(_ps1(10325), _ps0), _pse(_ps1(351), _ps0), _pse(_ps1(4050), _ps0), _pse(_ps1(29805), _ps0), _pse(_ps1(58913), _ps0), _pse(_ps1(55421), _ps0), _pse(_ps1(87845), _ps0), _pse(_ps1(17562), _ps0), _pse(_ps1(78466), _ps0), _pse(_ps1(40061), _ps0), _pse(_ps1(9195), _ps0), _pse(_ps1(93297), _ps0), _pse(_ps1(15133), _ps0), _pse(_ps1(55747), _ps0), _pse(_ps1(33155), _ps0), _pse(_ps1(79086), _ps0), _pse(_ps1(2306), _ps0), _pse(_ps1(14386), _ps0), _pse(_ps1(80225), _ps0), _pse(_ps1(17732), _ps0), _pse(_ps1(47169), _ps0), _pse(_ps1(77670), _ps0), _pse(_ps1(79988), _ps0), _pse(_ps1(92253), _ps0), _pse(_ps1(74428), _ps0), _pse(_ps1(75873), _ps0), _pse(_ps1(2631), _ps0), _pse(_ps1(27177), _ps0), _pse(_ps1(94781), _ps0), _pse(_ps1(53908), _ps0), _pse(_ps1(79813), _ps0), _pse(_ps1(16088), _ps0), _pse(_ps1(93733), _ps0), _pse(_ps1(69939), _ps0), _pse(_ps1(33734), _ps0), _pse(_ps1(34432), _ps0), _pse(_ps1(97423), _ps0), _pse(_ps1(23551), _ps0), _pse(_ps1(99791), _ps0), _pse(_ps1(21403), _ps0), _pse(_ps1(6173), _ps0), _pse(_ps1(23934), _ps0), _pse(_ps1(53709), _ps0), _pse(_ps1(88838), _ps0), _pse(_ps1(99790), _ps0), _pse(_ps1(18387), _ps0), _pse(_ps1(70941), _ps0), _pse(_ps1(35025), _ps0), _pse(_ps1(2603), _ps0), _pse(_ps1(78707), _ps0), _pse(_ps1(89058), _ps0), _pse(_ps1(84372), _ps0), _pse(_ps1(96804), _ps0), _pse(_ps1(33896), _ps0), _pse(_ps1(11031), _ps0), _pse(_ps1(71383), _ps0), _pse(_ps1(55888), _ps0), _pse(_ps1(2258), _ps0), _pse(_ps1(38003), _ps0), _pse(_ps1(92174), _ps0), _pse(_ps1(43768), _ps0), _pse(_ps1(73254), _ps0), _pse(_ps1(55734), _ps0), _pse(_ps1(81254), _ps0), _pse(_ps1(65455), _ps0), _pse(_ps1(70362), _ps0), _pse(_ps1(61977), _ps0), _pse(_ps1(43607), _ps0), _pse(_ps1(68086), _ps0), _pse(_ps1(78173), _ps0), _pse(_ps1(22581), _ps0), _pse(_ps1(20418), _ps0), _pse(_ps1(93373), _ps0), _pse(_ps1(13053), _ps0), _pse(_ps1(47874), _ps0), _pse(_ps1(42788), _ps0), _pse(_ps1(57664), _ps0), _pse(_ps1(44990), _ps0), _pse(_ps1(17712), _ps0), _pse(_ps1(83957), _ps0), _pse(_ps1(78539), _ps0), _pse(_ps1(96282), _ps0), _pse(_ps1(49679), _ps0), _pse(_ps1(45927), _ps0), _pse(_ps1(90312), _ps0), _pse(_ps1(86856), _ps0), _pse(_ps1(78123), _ps0), _pse(_ps1(25765), _ps0), _pse(_ps1(29493), _ps0), _pse(_ps1(28221), _ps0), _pse(_ps1(14830), _ps0), _pse(_ps1(54047), _ps0), _pse(_ps1(76054), _ps0), _pse(_ps1(90725), _ps0), _pse(_ps1(93053), _ps0), _pse(_ps1(88792), _ps0), _pse(_ps1(33242), _ps0), _pse(_ps1(59415), _ps0), _pse(_ps1(3296), _ps0), _pse(_ps1(32666), _ps0), _pse(_ps1(36731), _ps0), _pse(_ps1(30450), _ps0), _pse(_ps1(85127), _ps0), _pse(_ps1(87204), _ps0), _pse(_ps1(2380), _ps0), _pse(_ps1(96580), _ps0), _pse(_ps1(15653), _ps0), _pse(_ps1(41410), _ps0), _pse(_ps1(25851), _ps0), _pse(_ps1(6482), _ps0), _pse(_ps1(70332), _ps0), _pse(_ps1(91275), _ps0), _pse(_ps1(72743), _ps0), _pse(_ps1(49964), _ps0), _pse(_ps1(10950), _ps0), _pse(_ps1(57041), _ps0), _pse(_ps1(74608), _ps0), _pse(_ps1(34941), _ps0), _pse(_ps1(81284), _ps0), _pse(_ps1(4862), _ps0), _pse(_ps1(4188), _ps0);
    },
    82692: function(_psj, _psk, _psl) {
        'use strict';
        var _psm = null;
        var _psn = this && this.__createBinding || (Object.create ? function(_pso, _psp, _psq, _psr) {
                var _pss = null;
                void 0 === _psr && (_psr = _psq);
                var _pst = Object.getOwnPropertyDescriptor(_psp, _psq);
                _pst && !('get' in _pst ? !_psp.__esModule : _pst.writable || _pst.configurable) || (_pst = {
                    'enumerable': true,
                    'get': function() {
                        return _psp[_psq];
                    }
                }), Object.defineProperty(_pso, _psr, _pst);
            } : function(_psu, _psv, _psw, _psx) {
                void 0 === _psx && (_psx = _psw), _psu[_psx] = _psv[_psw];
            }),
            _psy = this && this.__setModuleDefault || (Object.create ? function(_psz, _pt0) {
                var _pt1 = null;
                Object.defineProperty(_psz, 'default', {
                    'enumerable': true,
                    'value': _pt0
                });
            } : function(_pt2, _pt3) {
                var _pt4 = null;
                _pt2.default = _pt3;
            }),
            _pt5 = this && this.__importStar || function(_pt6) {
                var _pt7 = null;
                if (_pt6 && _pt6.__esModule) return _pt6;
                var _pt8 = {};
                if (null != _pt6) {
                    for (var _pt9 in _pt6) 'default' !== _pt9 && Object.prototype.hasOwnProperty.call(_pt6, _pt9) && _psn(_pt8, _pt6, _pt9);
                }
                return _psy(_pt8, _pt6), _pt8;
            };
        defineModule(_psk);
        Object.defineProperty(_psk, '__esModule', {
            'value': true
        }), _psk.SlotItemEffectUtil = void 0;
        var _pta, _ptb = _psl(73785),
            _ptc = _pt5(_psl(89051)),
            _ptd = _psl(74496);
        ! function(_pte) {
            var _ptf = null;
            _pte.getSlotitemEffect = function(_ptg, _pth) {
                var _pti = null;
                if (null == _ptg || null == _pth) return null;
                for (var _ptj = new _ptb.SlotItemEffectParamModel(_ptg, _pth), _ptk = [{
                        'isExecute': Boolean(_ptj.get_type3_nums(9)),
                        'execFunc': _ptc.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_type3_nums(10)),
                        'execFunc': _ptc.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_type3_nums(11)),
                        'execFunc': _ptc.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_type3_nums(12)) || Boolean(_ptj.get_type3_nums(13)),
                        'execFunc': _ptc.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_type3_nums(25)),
                        'execFunc': _ptc.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_type3_nums(29)),
                        'execFunc': _ptc.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_type3_nums(42)),
                        'execFunc': _ptc.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(3)) || Boolean(_ptj.get_slotnums(122)) || Boolean(_ptj.get_slotnums(533)) || Boolean(_ptj.get_slotnums(553)),
                        'execFunc': _ptc.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(5)),
                        'execFunc': _ptc.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(12)),
                        'execFunc': _ptc.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(15)),
                        'execFunc': _ptc.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(18)) || Boolean(_ptj.get_slotnums(52)),
                        'execFunc': _ptc.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(19)),
                        'execFunc': _ptc.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(24)) || Boolean(_ptj.get_slotnums(57)) || Boolean(_ptj.get_slotnums(111)),
                        'execFunc': _ptc.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(26)) || Boolean(_ptj.get_slotnums(62)) || Boolean(_ptj.get_slotnums(79)) || Boolean(_ptj.get_slotnums(80)) || Boolean(_ptj.get_slotnums(81)) || Boolean(_ptj.get_slotnums(207)) || Boolean(_ptj.get_slotnums(208)),
                        'execFunc': _ptc.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(35)),
                        'execFunc': _ptc.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(39)) || Boolean(_ptj.get_slotnums(40)) || Boolean(_ptj.get_slotnums(49)) || Boolean(_ptj.get_slotnums(131)),
                        'execFunc': _ptc.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(30)) || Boolean(_ptj.get_slotnums(410)),
                        'execFunc': _ptc.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(44)) || Boolean(_ptj.get_slotnums(45)) || Boolean(_ptj.get_slotnums(287)) || Boolean(_ptj.get_slotnums(288)),
                        'execFunc': _ptc.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(46)) || Boolean(_ptj.get_slotnums(47)) || Boolean(_ptj.get_slotnums(149)) || Boolean(_ptj.get_slotnums(132)) || Boolean(_ptj.get_slotnums(438)),
                        'execFunc': _ptc.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(47)) || Boolean(_ptj.get_slotnums(438)),
                        'execFunc': _ptc.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(50)),
                        'execFunc': _ptc.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(58)),
                        'execFunc': _ptc.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(59)),
                        'execFunc': _ptc.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(60)) || Boolean(_ptj.get_slotnums(154)) || Boolean(_ptj.get_slotnums(219)),
                        'execFunc': _ptc.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(61)),
                        'execFunc': _ptc.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(61)),
                        'execFunc': _ptc.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(63)),
                        'execFunc': _ptc.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(66)) || Boolean(_ptj.get_slotnums(220)),
                        'execFunc': _ptc.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(67)),
                        'execFunc': _ptc.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(69)),
                        'execFunc': _ptc.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(70)),
                        'execFunc': _ptc.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(76)) || Boolean(_ptj.get_slotnums(114)),
                        'execFunc': _ptc.getSlot38cmTwinGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(78)),
                        'execFunc': _ptc.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(79)) || Boolean(_ptj.get_slotnums(81)),
                        'execFunc': _ptc.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(82)),
                        'execFunc': _ptc.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(84)),
                        'execFunc': _ptc.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(85)),
                        'execFunc': _ptc.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(87)),
                        'execFunc': _ptc.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(90)),
                        'execFunc': _ptc.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(93)),
                        'execFunc': _ptc.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(94)),
                        'execFunc': _ptc.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(99)),
                        'execFunc': _ptc.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(100)),
                        'execFunc': _ptc.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(104)),
                        'execFunc': _ptc.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(106)) || Boolean(_ptj.get_slotnums(450)),
                        'execFunc': _ptc.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(115)),
                        'execFunc': _ptc.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(118)) || Boolean(_ptj.get_slotnums(521)),
                        'execFunc': _ptc.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(119)),
                        'execFunc': _ptc.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(121)),
                        'execFunc': _ptc.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(122)),
                        'execFunc': _ptc.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(123)),
                        'execFunc': _ptc.getSlot123PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(124)),
                        'execFunc': _ptc.getSlot124PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(128)) || Boolean(_ptj.get_slotnums(281)),
                        'execFunc': _ptc.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(129)),
                        'execFunc': _ptc.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(130)),
                        'execFunc': _ptc.getSlot130PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(132)),
                        'execFunc': _ptc.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(136)),
                        'execFunc': _ptc.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(139)),
                        'execFunc': _ptc.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(143)),
                        'execFunc': _ptc.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(144)),
                        'execFunc': _ptc.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(147)) || Boolean(_ptj.get_slotnums(393)) || Boolean(_ptj.get_slotnums(394)),
                        'execFunc': _ptc.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(149)),
                        'execFunc': _ptc.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(165)) || Boolean(_ptj.get_slotnums(216)),
                        'execFunc': _ptc.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(171)),
                        'execFunc': _ptc.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(174)),
                        'execFunc': _ptc.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(179)),
                        'execFunc': _ptc.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(184)),
                        'execFunc': _ptc.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(188)),
                        'execFunc': _ptc.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(189)),
                        'execFunc': _ptc.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(194)),
                        'execFunc': _ptc.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(195)),
                        'execFunc': _ptc.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(204)),
                        'execFunc': _ptc.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(217)),
                        'execFunc': _ptc.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(220)),
                        'execFunc': _ptc.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(227)),
                        'execFunc': _ptc.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(228)),
                        'execFunc': _ptc.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(229)),
                        'execFunc': _ptc.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(234)),
                        'execFunc': _ptc.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(235)),
                        'execFunc': _ptc.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(237)) || Boolean(_ptj.get_slotnums(322)) || Boolean(_ptj.get_slotnums(323)) || Boolean(_ptj.get_slotnums(490)),
                        'execFunc': _ptc.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(237)),
                        'execFunc': _ptc.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(238)) || Boolean(_ptj.get_slotnums(239)),
                        'execFunc': _ptc.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(242)),
                        'execFunc': _ptc.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(243)),
                        'execFunc': _ptc.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(244)),
                        'execFunc': _ptc.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(245)) || Boolean(_ptj.get_slotnums(246)) || Boolean(_ptj.get_slotnums(468)),
                        'execFunc': _ptc.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(247)),
                        'execFunc': _ptc.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(252)),
                        'execFunc': _ptc.getSlot252PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(258)),
                        'execFunc': _ptc.getSlot258PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(266)),
                        'execFunc': _ptc.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(266)),
                        'execFunc': _ptc.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(267)) || Boolean(_ptj.get_slotnums(366)),
                        'execFunc': _ptc.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(267)) || Boolean(_ptj.get_slotnums(366)),
                        'execFunc': _ptc.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(268)),
                        'execFunc': _ptc.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(271)),
                        'execFunc': _ptc.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(275)),
                        'execFunc': _ptc.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(277)),
                        'execFunc': _ptc.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(278)),
                        'execFunc': _ptc.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(279)),
                        'execFunc': _ptc.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(282)),
                        'execFunc': _ptc.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(283)),
                        'execFunc': _ptc.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(285)),
                        'execFunc': _ptc.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(286)),
                        'execFunc': _ptc.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(286)),
                        'execFunc': _ptc.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(286)),
                        'execFunc': _ptc.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(287)),
                        'execFunc': _ptc.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(288)),
                        'execFunc': _ptc.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(289)),
                        'execFunc': _ptc.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(290)),
                        'execFunc': _ptc.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(291)),
                        'execFunc': _ptc.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(292)),
                        'execFunc': _ptc.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(293)),
                        'execFunc': _ptc.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(294)),
                        'execFunc': _ptc.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(295)),
                        'execFunc': _ptc.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(296)),
                        'execFunc': _ptc.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(297)),
                        'execFunc': _ptc.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(298)) || Boolean(_ptj.get_slotnums(299)) || Boolean(_ptj.get_slotnums(300)),
                        'execFunc': _ptc.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(301)),
                        'execFunc': _ptc.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(302)),
                        'execFunc': _ptc.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(303)),
                        'execFunc': _ptc.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(304)),
                        'execFunc': _ptc.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(305)) || Boolean(_ptj.get_slotnums(306)),
                        'execFunc': _ptc.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(307)),
                        'execFunc': _ptc.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(308)),
                        'execFunc': _ptc.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(310)) || Boolean(_ptj.get_slotnums(518)),
                        'execFunc': _ptc.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(313)),
                        'execFunc': _ptc.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(314)),
                        'execFunc': _ptc.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(315)),
                        'execFunc': _ptc.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(316)),
                        'execFunc': _ptc.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(317)),
                        'execFunc': _ptc.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(318)),
                        'execFunc': _ptc.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(319)),
                        'execFunc': _ptc.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(320)),
                        'execFunc': _ptc.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(322)),
                        'execFunc': _ptc.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(323)),
                        'execFunc': _ptc.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(324)) || Boolean(_ptj.get_slotnums(325)),
                        'execFunc': _ptc.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(326)),
                        'execFunc': _ptc.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(327)),
                        'execFunc': _ptc.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(328)),
                        'execFunc': _ptc.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(329)),
                        'execFunc': _ptc.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(330)) || Boolean(_ptj.get_slotnums(331)) || Boolean(_ptj.get_slotnums(332)),
                        'execFunc': _ptc.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(335)),
                        'execFunc': _ptc.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(336)),
                        'execFunc': _ptc.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(337)),
                        'execFunc': _ptc.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(338)),
                        'execFunc': _ptc.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(339)),
                        'execFunc': _ptc.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(340)),
                        'execFunc': _ptc.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(341)),
                        'execFunc': _ptc.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(342)),
                        'execFunc': _ptc.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(343)),
                        'execFunc': _ptc.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(344)),
                        'execFunc': _ptc.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(345)),
                        'execFunc': _ptc.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(346)),
                        'execFunc': _ptc.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(347)),
                        'execFunc': _ptc.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(356)) || Boolean(_ptj.get_slotnums(357)),
                        'execFunc': _ptc.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(358)),
                        'execFunc': _ptc.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(359)),
                        'execFunc': _ptc.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(360)) || Boolean(_ptj.get_slotnums(361)),
                        'execFunc': _ptc.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(362)) || Boolean(_ptj.get_slotnums(363)),
                        'execFunc': _ptc.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(364)),
                        'execFunc': _ptc.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(365)),
                        'execFunc': _ptc.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(367)),
                        'execFunc': _ptc.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(368)),
                        'execFunc': _ptc.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(369)),
                        'execFunc': _ptc.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(370)),
                        'execFunc': _ptc.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(371)),
                        'execFunc': _ptc.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(372)),
                        'execFunc': _ptc.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(373)),
                        'execFunc': _ptc.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(374)),
                        'execFunc': _ptc.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(375)),
                        'execFunc': _ptc.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(376)),
                        'execFunc': _ptc.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(377)),
                        'execFunc': _ptc.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(378)),
                        'execFunc': _ptc.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(379)),
                        'execFunc': _ptc.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(380)),
                        'execFunc': _ptc.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(381)),
                        'execFunc': _ptc.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(382)) || Boolean(_ptj.get_slotnums(509)),
                        'execFunc': _ptc.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(383)),
                        'execFunc': _ptc.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(384)),
                        'execFunc': _ptc.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(385)),
                        'execFunc': _ptc.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(386)),
                        'execFunc': _ptc.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(387)),
                        'execFunc': _ptc.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(389)),
                        'execFunc': _ptc.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(390)),
                        'execFunc': _ptc.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(391)),
                        'execFunc': _ptc.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(392)),
                        'execFunc': _ptc.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(397)),
                        'execFunc': _ptc.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(398)),
                        'execFunc': _ptc.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(399)),
                        'execFunc': _ptc.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(400)),
                        'execFunc': _ptc.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(407)),
                        'execFunc': _ptc.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(408)),
                        'execFunc': _ptc.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(409)),
                        'execFunc': _ptc.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(411)),
                        'execFunc': _ptc.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(412)),
                        'execFunc': _ptc.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(413)),
                        'execFunc': _ptc.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(414)) || Boolean(_ptj.get_slotnums(539)),
                        'execFunc': _ptc.getSlotSocSeagullPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(415)),
                        'execFunc': _ptc.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(419)),
                        'execFunc': _ptc.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(420)),
                        'execFunc': _ptc.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(421)),
                        'execFunc': _ptc.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(422)),
                        'execFunc': _ptc.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(423)),
                        'execFunc': _ptc.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(424)),
                        'execFunc': _ptc.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(425)),
                        'execFunc': _ptc.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(426)) || Boolean(_ptj.get_slotnums(427)) || Boolean(_ptj.get_slotnums(428)) || Boolean(_ptj.get_slotnums(429)),
                        'execFunc': _ptc.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(430)),
                        'execFunc': _ptc.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(434)) || Boolean(_ptj.get_slotnums(435)),
                        'execFunc': _ptc.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(437)),
                        'execFunc': _ptc.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(438)),
                        'execFunc': _ptc.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(439)),
                        'execFunc': _ptc.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(440)) || Boolean(_ptj.get_slotnums(441)),
                        'execFunc': _ptc.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(442)) || Boolean(_ptj.get_slotnums(443)),
                        'execFunc': _ptc.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(447)),
                        'execFunc': _ptc.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(450)),
                        'execFunc': _ptc.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(451)),
                        'execFunc': _ptc.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(455)),
                        'execFunc': _ptc.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(456)),
                        'execFunc': _ptc.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(457)) || Boolean(_ptj.get_slotnums(461)),
                        'execFunc': _ptc.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(458)),
                        'execFunc': _ptc.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(463)),
                        'execFunc': _ptc.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(464)),
                        'execFunc': _ptc.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(465)),
                        'execFunc': _ptc.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(466)),
                        'execFunc': _ptc.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(467)),
                        'execFunc': _ptc.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(470)) || Boolean(_ptj.get_slotnums(529)),
                        'execFunc': _ptc.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(471)),
                        'execFunc': _ptc.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(472)),
                        'execFunc': _ptc.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(473)),
                        'execFunc': _ptc.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(474)),
                        'execFunc': _ptc.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(478)),
                        'execFunc': _ptc.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(483)),
                        'execFunc': _ptc.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(485)),
                        'execFunc': _ptc.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(486)),
                        'execFunc': _ptc.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(487)),
                        'execFunc': _ptc.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(488)),
                        'execFunc': _ptc.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(489)) || Boolean(_ptj.get_slotnums(491)),
                        'execFunc': _ptc.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(500)) || Boolean(_ptj.get_slotnums(501)),
                        'execFunc': _ptc.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(502)),
                        'execFunc': _ptc.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(503)),
                        'execFunc': _ptc.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(505)),
                        'execFunc': _ptc.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(506)),
                        'execFunc': _ptc.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(507)) || Boolean(_ptj.get_slotnums(508)),
                        'execFunc': _ptc.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(510)),
                        'execFunc': _ptc.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(511)) || Boolean(_ptj.get_slotnums(512)),
                        'execFunc': _ptc.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(517)),
                        'execFunc': _ptc.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(518)),
                        'execFunc': _ptc.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(519)),
                        'execFunc': _ptc.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(520)),
                        'execFunc': _ptc.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(521)),
                        'execFunc': _ptc.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(522)) || Boolean(_ptj.get_slotnums(523)),
                        'execFunc': _ptc.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(524)),
                        'execFunc': _ptc.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(525)) || Boolean(_ptj.get_slotnums(526)),
                        'execFunc': _ptc.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(527)),
                        'execFunc': _ptc.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(528)),
                        'execFunc': _ptc.getSlot528PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(530)),
                        'execFunc': _ptc.getSlot530PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(531)),
                        'execFunc': _ptc.getSlot531PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(534)) || Boolean(_ptj.get_slotnums(535)),
                        'execFunc': _ptc.getSlot13_8cmRensouhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(536)) || Boolean(_ptj.get_slotnums(537)),
                        'execFunc': _ptc.getSlot15_2cmSanrensouSyuhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(538)),
                        'execFunc': _ptc.getSlot538PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(540)),
                        'execFunc': _ptc.getSlot540PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(541)) || Boolean(_ptj.get_slotnums(542)),
                        'execFunc': _ptc.getSlotYellowWingsPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(543)) || Boolean(_ptj.get_slotnums(544)),
                        'execFunc': _ptc.getSlotSBD_Type_VS_VBPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(545)),
                        'execFunc': _ptc.getSlot545PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(549)),
                        'execFunc': _ptc.getSlot549PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(550)) || Boolean(_ptj.get_slotnums(551)) || Boolean(_ptj.get_slotnums(552)),
                        'execFunc': _ptc.getSlotMyoujoPlanePersonalEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(39)) || Boolean(_ptj.get_slotnums(40)) || Boolean(_ptj.get_slotnums(49)) || Boolean(_ptj.get_slotnums(505)),
                        'execFunc': _ptc.getSlot25mmMachinegunLightShipEffect
                    }, {
                        'isExecute': Boolean(_ptj.get_slotnums(554)),
                        'execFunc': _ptc.getSlot554PersonalEffect
                    }], _ptl = new _ptd.SlotItemEffectModel(), _ptm = 0, _ptn = _ptk; _ptm < _ptn.length; _ptm++) {
                    var _pto = _ptn[_ptm];
                    if (_pto.isExecute) {
                        var _ptp = _pto.execFunc(_ptj);
                        0, _ptl.add(_ptp);
                    }
                }
                return _ptl;
            };
        }(_pta || (_psk.SlotItemEffectUtil = _pta = {}));
    },
}