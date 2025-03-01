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
    77670: function(_mtb, _mtc, _mtd) {
        'use strict';
        var _mte = null;
        var _mtf = this && this.__importDefault || function(_mtg) {
            var _mth = null;
            return _mtg && _mtg.__esModule ? _mtg : {
                'default': _mtg
            };
        };
        defineModule(_mtc);
        Object.defineProperty(_mtc, '__esModule', {
            'value': true
        }), _mtc.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mti = _mtd(74496),
            _mtj = _mtf(_mtd(18622));
        _mtc.get8cmAntiAircraftGunPersonalEffect = function(_mtk) {
            var _mtl = null,
                _mtm = new _mti.SlotItemEffectModel(),
                _mtn = false,
                _mto = new _mti.SlotItemEffectModel(),
                _mtp = 0;
            if (662 != _mtk.ship_id && 663 != _mtk.ship_id && 668 != _mtk.ship_id || (_mto.tyku += 2, _mto.kaih += 1, _mtn = true, _mtp = 1), 501 != _mtk.ship_id && 506 != _mtk.ship_id && 502 != _mtk.ship_id && 507 != _mtk.ship_id || (_mto.houg += 1, _mto.tyku += 2, _mto.kaih += 2, _mtn = true, _mtp = 1), 0 == _mtn) return _mtm;
            var _mtq = _mtk.get_slotnums(66) + _mtk.get_slotnums(220);
            _mtm.add(_mto.multiply(_mtq));
            for (var _mtr = 0, _mts = 0, _mtt = _mtk.have_slot_ids(); _mts < _mtt.length; _mts++) {
                var _mtu = _mtt[_mts],
                    _mtv = _mtj.default.model.slot.getMst(_mtu),
                    _mtw = _mtv.equipType;
                12 != _mtw && 13 != _mtw || (_mtv.sakuteki >= 5 && _mtk.get_slotnums(parseInt(_mtu)), _mtv.taiku >= 2 && (_mtr += _mtk.get_slotnums(parseInt(_mtu))));
            }
            return 0 == _mtp || _mtr >= 1 && (_mtm.tyku += 1, _mtm.kaih += 2), _mtm;
        };
    },
    34165: (_mtx, _mty, _mtz) => {
        'use strict';
        var _mu0 = null;
        defineModule(_mty);
        Object.defineProperty(_mty, '__esModule', {
            'value': true
        }), _mty.getCamouflageSlotPersonalEffect = void 0;
        var _mu1 = _mtz(74496);
        _mty.getCamouflageSlotPersonalEffect = function(_mu2) {
            var _mu3 = null,
                _mu4 = new _mu1.SlotItemEffectModel();
            return 'きそ' != _mu2.yomi && 'たま' != _mu2.yomi && 'ガングート' != _mu2.yomi && 290 != _mu2.ship_id && 200 != _mu2.ship_id || (_mu4.kaih = 7, _mu4.souk = 2), _mu4;
        };
    },
    31127: (_mu5, _mu6, _mu7) => {
        'use strict';
        var _mu8 = null;
        defineModule(_mu6);
        Object.defineProperty(_mu6, '__esModule', {
            'value': true
        }), _mu6.getHighZuiunSeriesEffect = void 0;
        var _mu9 = _mu7(74496);
        _mu6.getHighZuiunSeriesEffect = function(_mua) {
            var _mub = null,
                _muc = new _mu9.SlotItemEffectModel(),
                _mud = false,
                _mue = new _mu9.SlotItemEffectModel();
            if (662 == _mua.ship_id ? (_muc.houg += 3, _muc.kaih += 1) : 663 == _mua.ship_id || 668 == _mua.ship_id || 501 == _mua.ship_id || 506 == _mua.ship_id || 553 == _mua.ship_id || 554 == _mua.ship_id ? (_mue.houg += 3, _mue.kaih += 2, _mue.tyku += 1, _mud = true) : 502 != _mua.ship_id && 507 != _mua.ship_id || (_mue.houg += 2, _mue.kaih += 2, _mue.tyku += 1, _mud = true), 0 == _mud) return _muc;
            var _muf = 0;
            return [237, 322, 323, 490].forEach(function(_mug) {
                var _muh = null;
                _muf += _mua.get_slotnums(_mug);
            }), _muc.add(_mue.multiply(_muf)), _muc;
        };
    },
    81018: function(_mui, _muj, _muk) {
        'use strict';
        var _mul = null;
        var _mum = this && this.__importDefault || function(_mun) {
            var _muo = null;
            return _mun && _mun.__esModule ? _mun : {
                'default': _mun
            };
        };
        defineModule(_muj);
        Object.defineProperty(_muj, '__esModule', {
            'value': true
        }), _muj.getRaderPrivateEffect = void 0;
        var _mup = _muk(74496),
            _muq = _mum(_muk(18622));
        _muj.getRaderPrivateEffect = function(_mur) {
            var _mus = null,
                _mut = new _mup.SlotItemEffectModel(),
                _muu = 0,
                _muv = 0;
            if (569 == _mur.ship_id || 648 == _mur.ship_id || 961 == _mur.ship_id || 951 == _mur.ship_id) _muu = 1;
            else {
                if (955 != _mur.ship_id && 960 != _mur.ship_id && 956 != _mur.ship_id && 981 != _mur.ship_id) return _mut;
                _muu = 2, _muv = 1;
            }
            for (var _muw = 0, _mux = 0, _muy = _mur.have_slot_ids(); _mux < _muy.length; _mux++) {
                var _muz = _muy[_mux],
                    _mv0 = _muq.default.model.slot.getMst(_muz),
                    _mv1 = _mv0.equipType;
                12 != _mv1 && 13 != _mv1 || (_mv0.sakuteki >= 5 && _mur.get_slotnums(parseInt(_muz)), _mv0.taiku >= 2 && (_muw += _mur.get_slotnums(parseInt(_muz))));
            }
            if (_muw > 0 && (1 == _muu ? (_mut.houg += 1, _mut.kaih += 3, _mut.tyku += 2) : 2 == _muu && (_mut.tyku += 2, _mut.kaih += 1)), 0 == _muv) return _mut;
            for (var _mv2 = [], _mv3 = function(_mv4) {
                    var _mv5 = null;
                    if (null == _mur.have_slots_dict[_mv4]) return 'continue';
                    var _mv6 = _mur.get_each_level_nums(_mv4);
                    null == _mv2[_mv4] && (_mv2[_mv4] = []), _mv6.forEach(function(_mv7, _mv8) {
                        var _mv9 = null;
                        for (var _mva = 1; _mva <= _mur.SLOT_LEVEL_MAX; _mva++) null == _mv2[_mv4][_mva] && (_mv2[_mv4][_mva] = 0), _mv8 >= _mva && (_mv2[_mv4][_mva] += _mv7);
                    });
                }, _mvb = 0, _mvc = [450]; _mvb < _mvc.length; _mvb++) {
                _mv3(_mvc[_mvb]);
            }
            var _mvd = null != _mv2[450] ? _mv2[450][4] : 0;
            return 1 == _muv && _mvd > 0 && (_mut.houg += 1, _mut.houm += 1, _mut.tyku += 1, _mut.kaih += 2), _mut;
        };
    },
    56716: (_mve, _mvf, _mvg) => {
        'use strict';
        var _mvh = null;
        defineModule(_mvf);
        Object.defineProperty(_mvf, '__esModule', {
            'value': true
        }), _mvf.getSearchLightEffect = void 0;
        var _mvi = _mvg(74496);
        _mvf.getSearchLightEffect = function(_mvj) {
            var _mvk = null,
                _mvl = new _mvi.SlotItemEffectModel(),
                _mvm = _mvj.get_type3_nums(29);
            return 'ひえい' == _mvj.yomi || 'きりしま' == _mvj.yomi || 'ちょうかい' == _mvj.yomi || 'じんつう' == _mvj.yomi || 'あかつき' == _mvj.yomi ? (_mvl.houg += 4, _mvl.kaih -= 1) : 'あきぐも' == _mvj.yomi ? _mvl.houg = _mvl.houg + 2 * _mvm : 'ゆきかぜ' == _mvj.yomi && (_mvl.houg = _mvl.houg + _mvm, _mvl.tyku = _mvl.tyku + _mvm), 662 != _mvj.ship_id && 663 != _mvj.ship_id && 668 != _mvj.ship_id || (_mvl.raig += 2, _mvl.houg += 4), 'じんつう' == _mvj.yomi && (_mvl.raig += 8, _mvl.houg += 4), _mvl;
        };
    },
    17713: (_mvn, _mvo, _mvp) => {
        'use strict';
        var _mvq = null;
        defineModule(_mvo);
        Object.defineProperty(_mvo, '__esModule', {
            'value': true
        }), _mvo.getSearchLightLargeEffect = void 0;
        var _mvr = _mvp(74496);
        _mvo.getSearchLightLargeEffect = function(_mvs) {
            var _mvt = null,
                _mvu = new _mvr.SlotItemEffectModel();
            'ひえい' == _mvs.yomi || 'きりしま' == _mvs.yomi ? (_mvu.houg += 6, _mvu.kaih -= 2) : 'やまと' != _mvs.yomi && 'むさし' != _mvs.yomi || (_mvu.houg += 4, _mvu.kaih -= 1);
            var _mvv = _mvs.get_slotnums(174);
            return 592 == _mvs.ship_id ? (_mvu.houg += 3, _mvu.raig += 3, _mvv > 0 && (_mvu.raig += 5)) : 694 == _mvs.ship_id && (_mvu.houg += 4, _mvu.raig += 1, _mvv > 0 && (_mvu.raig += 7)), _mvu;
        };
    },
    17213: (_mvw, _mvx, _mvy) => {
        'use strict';
        var _mvz = null;
        defineModule(_mvx);
        Object.defineProperty(_mvx, '__esModule', {
            'value': true
        }), _mvx.getSlot100PersonalEffect = void 0;
        var _mw0 = _mvy(74496);
        _mvx.getSlot100PersonalEffect = function(_mw1) {
            var _mw2 = null,
                _mw3 = new _mw0.SlotItemEffectModel(),
                _mw4 = new _mw0.SlotItemEffectModel();
            if (553 == _mw1.ship_id) _mw4.houg = 4;
            else {
                if (554 != _mw1.ship_id) return 196 == _mw1.ship_id ? (_mw3.houg = 3, _mw3) : 197 == _mw1.ship_id ? (_mw3.houg = 6, _mw3) : _mw3;
                _mw4.houg = 4;
            }
            var _mw5 = _mw1.get_slotnums(100);
            return _mw3 = _mw4.multiply(_mw5);
        };
    },
    40176: (_mw6, _mw7, _mw8) => {
        'use strict';
        var _mw9 = null;
        defineModule(_mw7);
        Object.defineProperty(_mw7, '__esModule', {
            'value': true
        }), _mw7.getSlot104PersonalEffect = void 0;
        var _mwa = _mw8(74496);
        _mw7.getSlot104PersonalEffect = function(_mwb) {
            var _mwc = null,
                _mwd = new _mwa.SlotItemEffectModel(),
                _mwe = new _mwa.SlotItemEffectModel();
            if (149 == _mwb.ship_id || 591 == _mwb.ship_id) _mwe.houg = 2;
            else {
                if (150 == _mwb.ship_id || 592 == _mwb.ship_id) _mwe.houg = 1;
                else {
                    if (152 == _mwb.ship_id || 694 == _mwb.ship_id) _mwe.houg = 1;
                    else {
                        if (151 != _mwb.ship_id && 593 != _mwb.ship_id && 954 != _mwb.ship_id) return _mwd;
                        _mwe.houg = 2, _mwe.tyku = 1, _mwe.kaih = 2;
                    }
                }
            }
            var _mwf = _mwb.get_slotnums(104);
            return _mwd = _mwe.multiply(_mwf);
        };
    },
    32889: (_mwg, _mwh, _mwi) => {
        'use strict';
        var _mwj = null;
        defineModule(_mwh);
        Object.defineProperty(_mwh, '__esModule', {
            'value': true
        }), _mwh.getSlot106PersonalEffect = void 0;
        var _mwk = _mwi(74496);
        _mwh.getSlot106PersonalEffect = function(_mwl) {
            var _mwm = null,
                _mwn = new _mwk.SlotItemEffectModel(),
                _mwo = new _mwk.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_mwl.ship_id) >= 0 ? (_mwo.houg += 1, _mwo.tyku += 2, _mwo.souk += 1, _mwo.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mwl.yomi) >= 0 ? (_mwo.tyku += 1, _mwo.souk += 1, _mwo.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mwl.yomi) >= 0 && (_mwo.tyku += 2, _mwo.souk += 1, _mwo.kaih += 2, 663 != _mwl.ship_id && 668 != _mwl.ship_id || (_mwn.houg += 1, _mwn.tyku += 1, _mwn.souk += 1, _mwn.kaih += 1), 668 == _mwl.ship_id && (_mwn.tyku += 1, _mwn.kaih += 1)), !_mwo.exists()) return _mwn;
            var _mwp = _mwl.get_slotnums(106) + _mwl.get_slotnums(450);
            return _mwn.add(_mwo.multiply(_mwp)), _mwn;
        };
    },
    15133: (_mwq, _mwr, _mws) => {
        'use strict';
        var _mwt = null;
        defineModule(_mwr);
        Object.defineProperty(_mwr, '__esModule', {
            'value': true
        }), _mwr.getSlot115PersonalEffect = void 0;
        var _mwu = _mws(74496);
        _mwr.getSlot115PersonalEffect = function(_mwv) {
            var _mww = null,
                _mwx = new _mwu.SlotItemEffectModel(),
                _mwy = false,
                _mwz = new _mwu.SlotItemEffectModel(),
                _mx0 = 0;
            if (55 != _mwv.ctype && 47 != _mwv.ctype || (_mwz.houg += 2, _mwz.saku += 2, _mwz.kaih += 1, _mwy = true, _mx0 = 1), 0 == _mwy) return _mwx;
            var _mx1 = _mwv.get_slotnums(115);
            if (_mwx.add(_mwz.multiply(_mx1)), 0 == _mx0) return _mwx;
            var _mx2 = _mwv.get_each_level_nums(115)[10];
            return 1 == _mx0 && (_mwx.houg += 1 * _mx2, _mwx.kaih += 1 * _mx2), _mwx;
        };
    },
    55747: (_mx3, _mx4, _mx5) => {
        'use strict';
        var _mx6 = null;
        defineModule(_mx4);
        Object.defineProperty(_mx4, '__esModule', {
            'value': true
        }), _mx4.getSlot118PersonalEffect = void 0;
        var _mx7 = _mx5(74496);
        _mx4.getSlot118PersonalEffect = function(_mx8) {
            var _mx9 = null,
                _mxa = new _mx7.SlotItemEffectModel(),
                _mxb = false,
                _mxc = new _mx7.SlotItemEffectModel(),
                _mxd = 0;
            if (52 == _mx8.ctype && (_mxc.houg += 1, _mxc.saku += 2, _mxc.kaih += 2, _mxd = 1, _mxb = true), 507 == _mx8.ship_id && (_mxc.houg += 3, _mxc.saku += 2, _mxc.kaih += 1, _mxd = 2, _mxb = true), 0 == _mxb) return _mxa;
            var _mxe = _mx8.get_slotnums(118) + _mx8.get_slotnums(521);
            if (_mxa.add(_mxc.multiply(_mxe)), 0 == _mx8.get_slotnums(118)) return _mxa;
            if (0 == _mxd) return _mxa;
            var _mxf = _mx8.get_each_level_nums(118),
                _mxg = 0,
                _mxh = 0,
                _mxi = 0,
                _mxj = _mxf[10];
            return _mxf.forEach(function(_mxk, _mxl) {
                _mxl >= 2 && (_mxg += _mxk), _mxl >= 5 && (_mxh += _mxk), _mxl >= 7 && (_mxi += _mxk);
            }), 1 == _mxd ? (_mxa.houg += 2 * _mxj, _mxa.saku += 1 * _mxj) : 2 == _mxd && (_mxa.houm += 1 * _mxg, _mxa.kaih += 1 * _mxh, _mxa.houg += 1 * _mxi, _mxa.houg += 1 * _mxj, _mxa.raig += 1 * _mxj, _mxa.tyku += 1 * _mxj, _mxa.saku += 1 * _mxj, _mxa.kaih += 1 * _mxj), _mxa;
        };
    },
    11285: (_mxm, _mxn, _mxo) => {
        'use strict';
        var _mxp = null;
        defineModule(_mxn);
        Object.defineProperty(_mxn, '__esModule', {
            'value': true
        }), _mxn.getSlot119PersonalEffect = void 0;
        var _mxq = _mxo(74496);
        _mxn.getSlot119PersonalEffect = function(_mxr) {
            var _mxs = null,
                _mxt = new _mxq.SlotItemEffectModel(),
                _mxu = new _mxq.SlotItemEffectModel();
            34 == _mxr.ctype || 56 == _mxr.ctype ? _mxu.houg += 1 : 90 == _mxr.ctype && (_mxu.houg += 2, _mxu.raig += 1);
            var _mxv = true;
            if (_mxu.exists() || (_mxv = false), 0 == _mxv) return _mxt;
            var _mxw = _mxr.get_slotnums(119);
            return _mxt = _mxu.multiply(_mxw);
        };
    },
    96200: (_mxx, _mxy, _mxz) => {
        'use strict';
        var _my0 = null;
        defineModule(_mxy);
        Object.defineProperty(_mxy, '__esModule', {
            'value': true
        }), _mxy.getSlot120mm50GroupPersonalEffect = void 0;
        var _my1 = _mxz(74496);
        _mxy.getSlot120mm50GroupPersonalEffect = function(_my2) {
            var _my3 = null,
                _my4 = new _my1.SlotItemEffectModel(),
                _my5 = false,
                _my6 = new _my1.SlotItemEffectModel(),
                _my7 = _my2.get_slotnums(147),
                _my8 = _my2.get_slotnums(393),
                _my9 = _my2.get_slotnums(394),
                _mya = new _my1.SlotItemEffectModel(),
                _myb = new _my1.SlotItemEffectModel();
            if (61 == _my2.ctype && (_my6.houg += 1, _my6.kaih += 1, _my5 = true, _my8 >= 1 && (_mya.houg += 1, _mya.tyku += 1), _my9 >= 1 && (_myb.houg += 1, _myb.tyku += 1, _myb.kaih += 1, 'グレカーレ' == _my2.yomi && (_myb.kaih += 1)), 1), 0 == _my5) return _my4;
            var _myc = _my7 + _my8 + _my9;
            _my4.add(_my6.multiply(_myc)).add(_mya.multiply(_my8)).add(_myb.multiply(_my9));
            var _myd = _my2.get_each_level_over_nums([394]).slot[394];
            return _myd[7] >= 1 && (_my4.houm += 1 * _myd[7], 'グレカーレ' == _my2.yomi && (_my4.houg += 1 * _myd[7])), _myd[8] >= 1 && (_my4.houg += 1 * _myd[8]), _myd[9] >= 1 && (_my4.houm += 1 * _myd[9]), _myd[10] >= 1 && (_my4.houg += 1 * _myd[10], 'グレカーレ' == _my2.yomi && (_my4.kaih += 1 * _myd[10])), _my4;
        };
    },
    33155: function(_mye, _myf, _myg) {
        'use strict';
        var _myh = null;
        var _myi = this && this.__importDefault || function(_myj) {
            var _myk = null;
            return _myj && _myj.__esModule ? _myj : {
                'default': _myj
            };
        };
        defineModule(_myf);
        Object.defineProperty(_myf, '__esModule', {
            'value': true
        }), _myf.getSlot121PersonalEffect = void 0;
        var _myl = _myg(74496),
            _mym = _myi(_myg(18622));
        _myf.getSlot121PersonalEffect = function(_myn) {
            var _myo = null,
                _myp = new _myl.SlotItemEffectModel(),
                _myq = 0,
                _myr = new _myl.SlotItemEffectModel(),
                _mys = false;
            54 == _myn.ctype && (_myp.tyku += 4, _myp.kaih += 2, _myq = 1), 968 == _myn.ship_id ? (_myr.houg += 1, _myr.tyku += 1, _myr.kaih += 1, _mys = true) : 981 == _myn.ship_id && (_myr.tyku += 1, _myr.kaih += 1, _mys = true, _myq = 1);
            var _myt = _myn.get_slotnums(121);
            if (_mys && _myp.add(_myr.multiply(_myt)), 0 == _myq) return _myp;
            for (var _myu = 0, _myv = 0, _myw = _myn.have_slot_ids(); _myv < _myw.length; _myv++) {
                var _myx = _myw[_myv],
                    _myy = _mym.default.model.slot.getMst(_myx),
                    _myz = _myy.equipType;
                12 != _myz && 13 != _myz || (_myy.sakuteki >= 5 && _myn.get_slotnums(parseInt(_myx)), _myy.taiku >= 2 && (_myu += _myn.get_slotnums(parseInt(_myx))));
            }
            return _myu >= 1 && (_myp.tyku += 2, _myp.kaih += 2, 968 == _myn.ship_id && (_myp.houg += 1 * _myt, _myp.houm += 1 * _myt)), _myp;
        };
    },
    9115: function(_mz0, _mz1, _mz2) {
        'use strict';
        var _mz3 = null;
        var _mz4 = this && this.__importDefault || function(_mz5) {
            var _mz6 = null;
            return _mz5 && _mz5.__esModule ? _mz5 : {
                'default': _mz5
            };
        };
        defineModule(_mz1);
        Object.defineProperty(_mz1, '__esModule', {
            'value': true
        }), _mz1.getSlot122PersonalEffect = void 0;
        var _mz7 = _mz2(74496),
            _mz8 = _mz4(_mz2(18622));
        _mz1.getSlot122PersonalEffect = function(_mz9) {
            var _mza = null,
                _mzb = new _mz7.SlotItemEffectModel(),
                _mzc = 0,
                _mzd = 0,
                _mze = false;
            656 == _mz9.ship_id && (_mze = true, _mzc = 1, _mzd = 1);
            var _mzf = 0,
                _mzg = 0,
                _mzh = _mz9.get_each_level_nums(122),
                _mzi = 0;
            if (_mze) {
                _mzh.forEach(function(_mzj, _mzk) {
                    _mzk >= 4 && (_mzi += _mzj);
                });
                for (var _mzl = 0, _mzm = _mz9.have_slot_ids(); _mzl < _mzm.length; _mzl++) {
                    var _mzn = _mzm[_mzl],
                        _mzo = _mz8.default.model.slot.getMst(_mzn),
                        _mzp = _mzo.equipType;
                    12 != _mzp && 13 != _mzp || (_mzo.sakuteki >= 5 && (_mzf += _mz9.get_slotnums(parseInt(_mzn))), _mzo.taiku >= 2 && (_mzg += _mz9.get_slotnums(parseInt(_mzn))));
                }
            }
            return _mzi > 0 && (1 == _mzd && (_mzf > 0 && (_mzb.houg += 4, _mzb.kaih += 3), _mzg > 0 && (_mzb.tyku += 4, _mzb.kaih += 3)), 1 == _mzc && (_mzb.houg += 5 * _mzi, _mzb.tyku += 3 * _mzi, _mzb.kaih += 2 * _mzi)), _mzb;
        };
    },
    85127: (_mzq, _mzr, _mzs) => {
        'use strict';
        var _mzt = null;
        defineModule(_mzr);
        Object.defineProperty(_mzr, '__esModule', {
            'value': true
        }), _mzr.getSlot123PersonalEffect = void 0;
        var _mzu = _mzs(74496);
        _mzr.getSlot123PersonalEffect = function(_mzv) {
            var _mzw = null,
                _mzx = new _mzu.SlotItemEffectModel(),
                _mzy = (new _mzu.SlotItemEffectModel(), 0),
                _mzz = (_mzv.get_slotnums(123), _mzv.get_slotnums(124));
            if ('ドイツ' != _mzv.getCountryName()) return _mzx;
            _mzy = 1, _mzz >= 1 && (_mzx.kaih += 1 * _mzz);
            var _n00 = _mzv.get_each_level_over_nums([123, 124]),
                _n01 = _n00.slot[123],
                _n02 = _n00.slot[124];
            return 1 == _mzy && (_n01[5] >= 1 && (_mzx.houg += 1 * _n01[5]), _n01[7] >= 1 && (_mzx.houm += 1 * _n01[7]), _n01[9] >= 1 && (_mzx.houg += 1 * _n01[9]), _n01[10] >= 1 && (_mzx.houm += 1 * _n01[10]), _n02[8] >= 1 && (_mzx.kaih += 1 * _n02[8]), _n02[10] >= 1 && (_mzx.houm += 1 * _n02[10])), _mzx;
        };
    },
    87204: (_n03, _n04, _n05) => {
        'use strict';
        var _n06 = null;
        defineModule(_n04);
        Object.defineProperty(_n04, '__esModule', {
            'value': true
        }), _n04.getSlot124PersonalEffect = void 0;
        var _n07 = _n05(74496);
        _n04.getSlot124PersonalEffect = function(_n08) {
            var _n09 = null,
                _n0a = new _n07.SlotItemEffectModel(),
                _n0b = (new _n07.SlotItemEffectModel(), 0),
                _n0c = _n08.getCountryName();
            if ('ドイツ' == _n0c) _n0b = 1;
            else {
                if ('イタリア' != _n0c) return _n0a;
                _n0b = 2;
            }
            var _n0d = _n08.get_each_level_over_nums([124]).slot[124];
            return 1 == _n0b ? (_n0d[7] >= 1 && (_n0a.houm += 1 * _n0d[7]), _n0d[8] >= 1 && (_n0a.houg += 1 * _n0d[8]), _n0d[9] >= 1 && (_n0a.tyku += 1 * _n0d[9]), _n0d[10] >= 1 && (_n0a.houm += 1 * _n0d[10])) : 2 == _n0b && (_n0d[8] >= 1 && (_n0a.houm += 1 * _n0d[8]), _n0d[9] >= 1 && (_n0a.tyku += 1 * _n0d[9]), _n0d[10] >= 1 && (_n0a.houg += 1 * _n0d[10])), _n0a;
        };
    },
    37173: (_n0e, _n0f, _n0g) => {
        'use strict';
        var _n0h = null;
        defineModule(_n0f);
        Object.defineProperty(_n0f, '__esModule', {
            'value': true
        }), _n0f.getSlot129PersonalEffect = void 0;
        var _n0i = _n0g(74496);
        _n0f.getSlot129PersonalEffect = function(_n0j) {
            var _n0k = null,
                _n0l = new _n0i.SlotItemEffectModel(),
                _n0m = false,
                _n0n = new _n0i.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_n0j.ctype) >= 0 ? (_n0n.houg = 1, _n0n.raig = 2, _n0n.kaih = 2, _n0n.tais = 2, _n0n.saku = 1, _n0m = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_n0j.ctype) >= 0 ? (_n0n.houg = 1, _n0n.raig = 2, _n0n.kaih = 2, _n0n.saku = 3, _n0m = true) : [7, 13, 29, 8, 9, 31].indexOf(_n0j.ctype) >= 0 && (_n0n.houg = 1, _n0n.kaih = 2, _n0n.saku = 3, _n0m = true), 0 == _n0m) return _n0l;
            var _n0o = _n0j.get_slotnums(129);
            return _n0l = _n0n.multiply(_n0o);
        };
    },
    73254: (_n0p, _n0q, _n0r) => {
        'use strict';
        var _n0s = null;
        defineModule(_n0q);
        Object.defineProperty(_n0q, '__esModule', {
            'value': true
        }), _n0q.getSlot12PersonalEffect = void 0;
        var _n0t = _n0r(74496);
        _n0q.getSlot12PersonalEffect = function(_n0u) {
            var _n0v = null,
                _n0w = new _n0t.SlotItemEffectModel(),
                _n0x = false,
                _n0y = new _n0t.SlotItemEffectModel(),
                _n0z = _n0u.get_slotnums(142) + _n0u.get_slotnums(460);
            if (37 == _n0u.ctype && (_n0y.houg += 1, _n0y.kaih += 1, _n0y.houm += 1, _n0z >= 1 && (_n0w.kaih += 1, _n0w.houm += 1), _n0x = true), 0 == _n0x) return _n0w;
            var _n10 = _n0u.get_slotnums(12);
            return _n0w.add(_n0y.multiply(_n10)), _n0w;
        };
    },
    41410: (_n11, _n12, _n13) => {
        'use strict';
        var _n14 = null;
        defineModule(_n12);
        Object.defineProperty(_n12, '__esModule', {
            'value': true
        }), _n12.getSlot130PersonalEffect = void 0;
        var _n15 = _n13(74496);
        _n12.getSlot130PersonalEffect = function(_n16) {
            var _n17 = null,
                _n18 = new _n15.SlotItemEffectModel(),
                _n19 = _n16.have_level_num_over_dict[130];
            return null == _n19 || (428 == _n16.ship_id ? (_n19[1] >= 1 && (_n18.tyku += 1 * _n19[1]), _n19[3] >= 1 && (_n18.kaih += 1 * _n19[3]), _n19[5] >= 1 && (_n18.houm += 1 * _n19[5]), _n19[7] >= 1 && (_n18.tyku += 1 * _n19[7]), _n19[8] >= 1 && (_n18.kaih += 1 * _n19[8]), _n19[9] >= 1 && (_n18.tyku += 1 * _n19[9]), _n19[10] >= 1 && (_n18.houg += 1 * _n19[10])) : 141 == _n16.ship_id && (_n19[2] >= 1 && (_n18.tyku += 1 * _n19[2]), _n19[4] >= 1 && (_n18.kaih += 1 * _n19[4]), _n19[6] >= 1 && (_n18.houm += 1 * _n19[6]), _n19[8] >= 1 && (_n18.tyku += 1 * _n19[8]), _n19[10] >= 1 && (_n18.kaih += 1 * _n19[10])), 1 == _n16.stype && (_n19[3] >= 1 && (_n18.tyku += 1 * _n19[3]), _n19[6] >= 1 && (_n18.kaih += 1 * _n19[6]), _n19[9] >= 1 && (_n18.tyku += 1 * _n19[9]), _n19[10] >= 1 && (_n18.kaih += 1 * _n19[10]))), _n18;
        };
    },
    93373: (_n1a, _n1b, _n1c) => {
        'use strict';
        var _n1d = null;
        defineModule(_n1b);
        Object.defineProperty(_n1b, '__esModule', {
            'value': true
        }), _n1b.getSlot132PersonalEffect = void 0;
        var _n1e = _n1c(74496);
        _n1b.getSlot132PersonalEffect = function(_n1f) {
            var _n1g = null,
                _n1h = new _n1e.SlotItemEffectModel(),
                _n1i = _n1f.get_each_level_nums(132),
                _n1j = 0,
                _n1k = 0,
                _n1l = 0,
                _n1m = 0,
                _n1n = 0;
            return _n1i.forEach(function(_n1o, _n1p) {
                _n1p >= 3 && (_n1j += _n1o), _n1p >= 5 && (_n1k += _n1o), _n1p >= 7 && (_n1l += _n1o), _n1p >= 8 && (_n1m += _n1o), _n1p >= 9 && (_n1n += _n1o);
            }), _n1j >= 1 && (_n1h.kaih += 1), _n1k >= 1 && (_n1h.tais += 1), _n1l >= 1 && (_n1h.kaih += 1), _n1m >= 1 && (_n1h.tais += 1), _n1n >= 1 && (_n1h.houm += 1), _n1i[10] >= 1 && (_n1h.tais += 1), 911 != _n1f.ship_id && 916 != _n1f.ship_id && 546 != _n1f.ship_id || (_n1h.kaih += 1), 461 != _n1f.ship_id && 466 != _n1f.ship_id && 462 != _n1f.ship_id && 467 != _n1f.ship_id && 156 != _n1f.ship_id || (_n1h.kaih += 2), _n1h;
        };
    },
    88838: (_n1q, _n1r, _n1s) => {
        'use strict';
        var _n1t = null;
        defineModule(_n1r);
        Object.defineProperty(_n1r, '__esModule', {
            'value': true
        }), _n1r.getSlot136PersonalEffect = void 0;
        var _n1u = _n1s(74496);
        _n1r.getSlot136PersonalEffect = function(_n1v) {
            var _n1w = null,
                _n1x = new _n1u.SlotItemEffectModel(),
                _n1y = 0;
            if (58 != _n1v.ctype && 61 != _n1v.ctype && 64 != _n1v.ctype && 68 != _n1v.ctype && 80 != _n1v.ctype && 92 != _n1v.ctype && 113 != _n1v.ctype && 124 != _n1v.ctype || (_n1x.souk += 2, _n1x.kaih += 1, _n1y = 1), 879 == _n1v.ship_id && (_n1x.souk += 1, _n1x.kaih += 1), 0 == _n1y) return _n1x;
            var _n1z = _n1v.get_each_level_nums(136),
                _n20 = 0,
                _n21 = 0,
                _n22 = _n1z[10];
            return _n1y > 0 && _n1z.forEach(function(_n23, _n24) {
                _n24 >= 3 && (_n20 += _n23), _n24 >= 6 && (_n21 += _n23);
            }), 1 == _n1y && (_n20 >= 1 && (_n1x.souk += 1 * _n20), _n21 >= 1 && (_n1x.souk += 1 * _n21), _n22 >= 1 && (_n1x.souk += 1 * _n22)), _n1x;
        };
    },
    17274: (_n25, _n26, _n27) => {
        'use strict';
        var _n28 = null;
        defineModule(_n26);
        Object.defineProperty(_n26, '__esModule', {
            'value': true
        }), _n26.getSlot139PersonalEffect = void 0;
        var _n29 = _n27(74496);
        _n26.getSlot139PersonalEffect = function(_n2a) {
            var _n2b = null,
                _n2c = new _n29.SlotItemEffectModel(),
                _n2d = false,
                _n2e = new _n29.SlotItemEffectModel();
            if (662 != _n2a.ship_id && 663 != _n2a.ship_id && 668 != _n2a.ship_id || (_n2e.houg += 2, _n2e.tyku += 1, _n2d = true), 0 == _n2d) return _n2c;
            var _n2f = _n2a.get_slotnums(139);
            return _n2c.add(_n2e.multiply(_n2f)), _n2c;
        };
    },
    6482: (_n2g, _n2h, _n2i) => {
        'use strict';
        var _n2j = null;
        defineModule(_n2h);
        Object.defineProperty(_n2h, '__esModule', {
            'value': true
        }), _n2h.getSlot13_8cmRensouhouPersonalEffect = void 0;
        var _n2k = _n2i(74496);
        _n2h.getSlot13_8cmRensouhouPersonalEffect = function(_n2l) {
            var _n2m = null,
                _n2n = new _n2k.SlotItemEffectModel(),
                _n2o = false,
                _n2p = new _n2k.SlotItemEffectModel(),
                _n2q = 0,
                _n2r = _n2l.getCountryName(),
                _n2s = _n2l.get_slotnums(534),
                _n2t = _n2l.get_slotnums(535);
            if ('フランス' == _n2r && (_n2p.houg += 2, _n2p.houm += 1, 129 == _n2l.ctype && (_n2p.houm += 1), 967 == _n2l.ship_id && _n2t >= 1 && (_n2p.houg += 1), _n2o = true, _n2q = 1), 0 == _n2o) return _n2n;
            var _n2u = _n2s + _n2t;
            if (_n2n.add(_n2p.multiply(_n2u)), 0 == _n2q) return _n2n;
            _n2l.haveSlotLevelNumOver(534);
            var _n2v = _n2l.haveSlotLevelNumOver(535),
                _n2w = _n2l.getTotalCountWithOverLeveledItem([534, 535]);
            return 1 == _n2q && (_n2w[2] >= 1 && (_n2n.houm += 1 * _n2w[2]), _n2w[4] >= 1 && (_n2n.houg += 1 * _n2w[4]), _n2w[6] >= 1 && (_n2n.houm += 1 * _n2w[6]), _n2v[7] >= 1 && (_n2n.houg += 1 * _n2v[7]), _n2w[8] >= 1 && (_n2n.houg += 1 * _n2w[8]), _n2v[9] >= 1 && (_n2n.houm += 1 * _n2v[9]), _n2w[10] >= 1 && (_n2n.houg += 1 * _n2w[10])), _n2n;
        };
    },
    21713: (_n2x, _n2y, _n2z) => {
        'use strict';
        var _n30 = null;
        defineModule(_n2y);
        Object.defineProperty(_n2y, '__esModule', {
            'value': true
        }), _n2y.getSlot143PersonalEffect = void 0;
        var _n31 = _n2z(74496);
        _n2y.getSlot143PersonalEffect = function(_n32) {
            var _n33 = null,
                _n34 = new _n31.SlotItemEffectModel();
            return 'あかぎ' == _n32.yomi ? _n34.houg = 3 : 'かが' == _n32.yomi || 'しょうかく' == _n32.yomi ? _n34.houg = 2 : ('ずいかく' == _n32.yomi || 'りゅうじょう' == _n32.yomi) && (_n34.houg = 1), _n34;
        };
    },
    59823: (_n35, _n36, _n37) => {
        'use strict';
        var _n38 = null;
        defineModule(_n36);
        Object.defineProperty(_n36, '__esModule', {
            'value': true
        }), _n36.getSlot144PersonalEffect = void 0;
        var _n39 = _n37(74496);
        _n36.getSlot144PersonalEffect = function(_n3a) {
            var _n3b = null,
                _n3c = new _n39.SlotItemEffectModel();
            return 'あかぎ' == _n3a.yomi ? _n3c.houg = 3 : 'かが' == _n3a.yomi ? _n3c.houg = 2 : 'しょうかく' == _n3a.yomi ? (_n3c.houg = 2, 461 != _n3a.ship_id && 466 != _n3a.ship_id || (_n3c.houg += 2)) : 'ずいかく' == _n3a.yomi ? (_n3c.houg = 1, 462 != _n3a.ship_id && 467 != _n3a.ship_id || (_n3c.houg += 1)) : 'りゅうじょう' == _n3a.yomi && (_n3c.houg = 1), _n3c;
        };
    },
    57440: (_n3d, _n3e, _n3f) => {
        'use strict';
        var _n3g = null;
        defineModule(_n3e);
        Object.defineProperty(_n3e, '__esModule', {
            'value': true
        }), _n3e.getSlot149PersonalEffect = void 0;
        var _n3h = _n3f(74496);
        _n3e.getSlot149PersonalEffect = function(_n3i) {
            var _n3j = null,
                _n3k = new _n3h.SlotItemEffectModel(),
                _n3l = new _n3h.SlotItemEffectModel(),
                _n3m = false;
            return 488 == _n3i.ship_id || 141 == _n3i.ship_id || 160 == _n3i.ship_id || 622 == _n3i.ship_id || 623 == _n3i.ship_id || 656 == _n3i.ship_id || 961 == _n3i.ship_id ? (_n3l.tais = 1, _n3l.kaih = 3, _n3m = true) : 624 == _n3i.ship_id ? (_n3l.tais = 3, _n3l.kaih = 5, _n3m = true) : 662 == _n3i.ship_id && (_n3l.tais = 2, _n3l.kaih = 4, _n3m = true), 54 == _n3i.ctype && (_n3l.tais = 1, _n3l.kaih = 2, _n3m = true), 0 == _n3m ? _n3k : _n3k = _n3l.multiply(1);
        };
    },
    29493: (_n3n, _n3o, _n3p) => {
        'use strict';
        var _n3q = null;
        defineModule(_n3o);
        Object.defineProperty(_n3o, '__esModule', {
            'value': true
        }), _n3o.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _n3r = _n3p(74496);
        _n3o.getSlot14inch45CaliberGunPersonalEffect = function(_n3s) {
            var _n3t = null,
                _n3u, _n3v, _n3w, _n3x = new _n3r.SlotItemEffectModel(),
                _n3y = false,
                _n3z = new _n3r.SlotItemEffectModel(),
                _n40 = {
                    507: 507,
                    508: 507
                },
                _n41 = _n3s.get_slotnums(507),
                _n42 = _n3s.get_slotnums(508),
                _n43 = _n41 + _n42,
                _n44 = _n3s.getCountryName(),
                _n45 = _n3s.getUSSWaterRaderDict();
            if (125 == _n3s.ctype && (_n3z.houg += 1, _n3z.kaih += 1, _n3z.houm += 1, _n3y = true, _n41 >= 1 && _n42 >= 1 && (_n3x.houg += 1, _n3x.houm += 1)), 'アメリカ' == _n44 && _n3s.stype >= 8 && _n3s.stype <= 10) {
                _n3z.houg += 2, _n3z.kaih += 1, _n3z.houm += 1, _n3y = true;
                for (var _n46 = 0, _n47 = 0, _n48 = _n3s.have_slot_ids(); _n47 < _n48.length; _n47++) {
                    var _n49 = _n48[_n47];
                    _n45[Number(_n49)] && (_n46 += _n3s.get_slotnums(parseInt(_n49)));
                }
                _n46 >= 1 && (_n3x.houg += 1, _n3x.kaih += 1, _n3x.houm += 2), _n41 >= 1 && _n42 >= 1 && (_n3x.houg += 1, _n3x.houm += 1, _n3x.kaih += 2);
            }
            else 6 != _n3s.ctype && 26 != _n3s.ctype && 2 != _n3s.ctype && 'イギリス' != _n44 || (_n3x.kaih += 1, _n3x.houm += 1, _n41 >= 1 && _n42 >= 1 && (_n3x.houg += 1, _n3x.houm += 1, _n3x.kaih += 1));
            _n3y && _n3x.add(_n3z.multiply(_n43));
            for (var _n4a = {}, _n4b = {}, _n4c = {}, _n4d = function(_n4e) {
                    var _n4f = null,
                        _n4g = Number(_n4e),
                        _n4h = _n40[_n4g];
                    _n4a[_n4h] = null !== (_n3u = _n4a[_n4h]) && void 0 !== _n3u ? _n3u : 0, _n4b[_n4h] = null !== (_n3v = _n4b[_n4h]) && void 0 !== _n3v ? _n3v : 0, _n4c[_n4h] = null !== (_n3w = _n4c[_n4h]) && void 0 !== _n3w ? _n3w : 0, _n3s.get_each_level_nums(_n4g).forEach(function(_n4i, _n4j) {
                        _n4j >= 3 && (_n4a[_n4h] += _n4i), _n4j >= 6 && (_n4b[_n4h] += _n4i), _n4j >= 9 && (_n4c[_n4h] += _n4i);
                    });
                }, _n4k = 0, _n4l = Object.keys(_n40); _n4k < _n4l.length; _n4k++) {
                _n4d(_n4l[_n4k]);
            }
            return _n4a[507] >= 1 && (_n3x.houg += 1 * _n4a[507]), _n4b[507] >= 1 && (_n3x.souk += 1 * _n4b[507]), _n4c[507] >= 1 && (_n3x.houm += 1 * _n4c[507]), _n3x;
        };
    },
    66985: (_n4m, _n4n, _n4o) => {
        'use strict';
        var _n4p = null;
        defineModule(_n4n);
        Object.defineProperty(_n4n, '__esModule', {
            'value': true
        }), _n4n.getSlot15PersonalEffect = void 0;
        var _n4q = _n4o(74496);
        _n4n.getSlot15PersonalEffect = function(_n4r) {
            var _n4s = null,
                _n4t = new _n4q.SlotItemEffectModel(),
                _n4u = false;
            if ((566 == _n4r.ship_id || 567 == _n4r.ship_id || 568 == _n4r.ship_id || 648 == _n4r.ship_id || 651 == _n4r.ship_id || 656 == _n4r.ship_id || 670 == _n4r.ship_id || 915 == _n4r.ship_id || 951 == _n4r.ship_id || 'たけ' == _n4r.yomi) && (_n4u = true), 0 == _n4u) return _n4t;
            var _n4v = _n4r.get_slotnums(15);
            return 30 == _n4r.ctype && (1 == _n4v ? _n4t.raig = 2 : _n4v >= 2 && (_n4t.raig = 4)), 'たけ' == _n4r.yomi && (_n4t.raig += 5, _n4t.kaih += 1), _n4t;
        };
    },
    70332: (_n4w, _n4x, _n4y) => {
        'use strict';
        var _n4z = null;
        defineModule(_n4x);
        Object.defineProperty(_n4x, '__esModule', {
            'value': true
        }), _n4x.getSlot15_2cmSanrensouSyuhouPersonalEffect = void 0;
        var _n50 = _n4y(74496);
        _n4x.getSlot15_2cmSanrensouSyuhouPersonalEffect = function(_n51) {
            var _n52 = null,
                _n53 = new _n50.SlotItemEffectModel(),
                _n54 = false,
                _n55 = new _n50.SlotItemEffectModel(),
                _n56 = 0,
                _n57 = _n51.getCountryName(),
                _n58 = _n51.get_slotnums(536),
                _n59 = _n51.get_slotnums(537);
            if ('フランス' == _n57 && (_n55.houg += 2, _n55.houm += 1, 128 == _n51.ctype && (_n55.houm += 1), 970 == _n51.ship_id && _n59 >= 1 && (_n55.houg += 1, _n55.kaih += 2, _n55.houm += 1), _n54 = true, _n56 = 1), 0 == _n54) return _n53;
            var _n5a = _n58 + _n59;
            if (_n53.add(_n55.multiply(_n5a)), 0 == _n56) return _n53;
            _n51.haveSlotLevelNumOver(536);
            var _n5b = _n51.haveSlotLevelNumOver(537),
                _n5c = _n51.getTotalCountWithOverLeveledItem([536, 537]),
                _n5d = _n51.get_slotnums(471) + _n51.get_slotnums(538),
                _n5e = _n51.haveSlotLevelNumOver(538);
            return 1 == _n56 && (_n5c[3] >= 1 && (_n53.houm += 1 * _n5c[3]), _n5c[4] >= 1 && (_n53.houg += 1 * _n5c[4]), _n5b[5] >= 1 && (_n53.kaih += 1 * _n5b[5]), _n5c[6] >= 1 && (_n53.houm += 1 * _n5c[6]), _n5c[7] >= 1 && (_n53.houg += 1 * _n5c[7]), _n5b[8] >= 1 && (_n53.kaih += 1 * _n5b[8]), _n5c[9] >= 1 && (_n53.houm += 1 * _n5c[9]), _n5c[10] >= 1 && (_n53.houg += 1 * _n5c[10]), _n5c[1] >= 1 && (_n5d >= 1 && (970 == _n51.ship_id && (_n53.kaih += 1 * _n5d), _n53.houm += 1 * _n5d), _n5e[7] >= 1 && (_n53.kaih += 1 * _n5e[7]), _n5e[9] >= 1 && (_n53.houm += 1 * _n5e[9]))), _n53;
        };
    },
    79086: (_n5f, _n5g, _n5h) => {
        'use strict';
        var _n5i = null;
        defineModule(_n5g);
        Object.defineProperty(_n5g, '__esModule', {
            'value': true
        }), _n5g.getSlot165_216PersonalEffect = void 0;
        var _n5j = _n5h(74496);
        _n5g.getSlot165_216PersonalEffect = function(_n5k) {
            var _n5l = null,
                _n5m = new _n5j.SlotItemEffectModel();
            return 501 != _n5k.ship_id && 506 != _n5k.ship_id && 502 != _n5k.ship_id && 507 != _n5k.ship_id || (_n5m.tyku += 2, _n5m.kaih += 2), _n5m;
        };
    },
    88102: (_n5n, _n5o, _n5p) => {
        'use strict';
        var _n5q = null;
        defineModule(_n5o);
        Object.defineProperty(_n5o, '__esModule', {
            'value': true
        }), _n5o.getSlot16M1PersonalEffect = void 0;
        var _n5r = _n5p(74496);
        _n5o.getSlot16M1PersonalEffect = function(_n5s) {
            var _n5t = null,
                _n5u = new _n5r.SlotItemEffectModel(),
                _n5v = new _n5r.SlotItemEffectModel();
            67 == _n5s.ctype || 78 == _n5s.ctype || 82 == _n5s.ctype || 88 == _n5s.ctype || 108 == _n5s.ctype || 112 == _n5s.ctype ? (_n5v.houg += 2, _n5v.souk += 1, 67 == _n5s.ctype && (_n5v.kaih -= 2)) : 149 == _n5s.ship_id || 150 == _n5s.ship_id || 151 == _n5s.ship_id || 152 == _n5s.ship_id ? (_n5v.houg += 1, _n5v.souk += 1, _n5v.kaih -= 3) : 591 == _n5s.ship_id || 592 == _n5s.ship_id || 694 == _n5s.ship_id ? (_n5v.houg += 2, _n5v.souk += 1, _n5v.kaih -= 2) : 593 != _n5s.ship_id && 954 != _n5s.ship_id || (_n5v.houg += 1, _n5v.souk += 1, _n5v.kaih -= 1);
            var _n5w = true;
            if (_n5v.exists() || (_n5w = false), 0 == _n5w) return _n5u;
            var _n5x = _n5s.get_slotnums(298) + _n5s.get_slotnums(299) + _n5s.get_slotnums(300);
            return _n5u = _n5v.multiply(_n5x);
        };
    },
    29240: (_n5y, _n5z, _n60) => {
        'use strict';
        var _n61 = null;
        defineModule(_n5z);
        Object.defineProperty(_n5z, '__esModule', {
            'value': true
        }), _n5z.getSlot171PersonalEffect = void 0;
        var _n62 = _n60(74496);
        _n5z.getSlot171PersonalEffect = function(_n63) {
            var _n64 = null,
                _n65 = new _n62.SlotItemEffectModel(),
                _n66 = 0;
            'アメリカ' == _n63.getCountryName() && (_n66 = 1), 65 != _n63.ctype && 93 != _n63.ctype && 102 != _n63.ctype && 107 != _n63.ctype && 125 != _n63.ctype || (_n65.houg += 1, _n65.saku += 1, _n66 = 2);
            var _n67 = _n63.get_each_level_nums(171),
                _n68 = 0,
                _n69 = 0,
                _n6a = 0;
            return _n66 > 0 && (_n67.map(function(_n6b, _n6c) {
                _n6c >= 5 && (_n68 += _n6b), _n6c >= 3 && (_n69 += _n6b), _n6c >= 8 && (_n6a += _n6b);
            }), 1 != _n66 && 2 != _n66 || (_n67[10] > 0 && (_n65.houg += 1), _n68 > 0 && (_n65.kaih += 1)), 2 == _n66 && (_n69 > 0 && (_n65.saku += 1), _n6a > 0 && (_n65.saku += 1))), _n65;
        };
    },
    40885: (_n6d, _n6e, _n6f) => {
        'use strict';
        var _n6g = null;
        defineModule(_n6e);
        Object.defineProperty(_n6e, '__esModule', {
            'value': true
        }), _n6e.getSlot174PersonalEffect = void 0;
        var _n6h = _n6f(74496);
        _n6e.getSlot174PersonalEffect = function(_n6i) {
            var _n6j = null,
                _n6k = new _n6h.SlotItemEffectModel(),
                _n6l = new _n6h.SlotItemEffectModel();
            if (66 == _n6i.ctype && (_n6l.raig = 1, _n6l.kaih = 2), 591 == _n6i.ship_id || 592 == _n6i.ship_id || 954 == _n6i.ship_id || 694 == _n6i.ship_id ? (_n6l.raig += 6, _n6l.kaih += 3) : 593 == _n6i.ship_id ? (_n6l.raig += 5, _n6l.kaih += 2) : 488 != _n6i.ship_id && 622 != _n6i.ship_id && 623 != _n6i.ship_id && 624 != _n6i.ship_id || (_n6l.houg += 2, _n6l.raig += 4, _n6l.kaih += 4), !_n6l.exists()) return _n6k;
            var _n6m = _n6i.get_slotnums(174);
            return _n6k = _n6l.multiply(_n6m);
        };
    },
    19614: (_n6n, _n6o, _n6p) => {
        'use strict';
        var _n6q = null;
        defineModule(_n6o);
        Object.defineProperty(_n6o, '__esModule', {
            'value': true
        }), _n6o.getSlot179PersonalEffect = void 0;
        var _n6r = _n6p(74496);
        _n6o.getSlot179PersonalEffect = function(_n6s) {
            var _n6t = null,
                _n6u = new _n6r.SlotItemEffectModel(),
                _n6v = new _n6r.SlotItemEffectModel();
            if (54 == _n6s.ctype && (_n6v.raig = 1), !_n6v.exists()) return _n6u;
            var _n6w = _n6s.get_slotnums(179);
            return _n6u = _n6v.multiply(_n6w);
        };
    },
    87220: (_n6x, _n6y, _n6z) => {
        'use strict';
        var _n70 = null;
        defineModule(_n6y);
        Object.defineProperty(_n6y, '__esModule', {
            'value': true
        }), _n6y.getSlot184PersonalEffect = void 0;
        var _n71 = _n6z(74496);
        _n6y.getSlot184PersonalEffect = function(_n72) {
            var _n73 = null,
                _n74 = new _n71.SlotItemEffectModel(),
                _n75 = new _n71.SlotItemEffectModel();
            if (68 == _n72.ctype && (_n75.houg += 1, _n75.tyku += 2, _n75.kaih += 3), !_n75.exists()) return _n74;
            var _n76 = _n72.get_slotnums(184);
            return _n74 = _n75.multiply(_n76);
        };
    },
    81367: (_n77, _n78, _n79) => {
        'use strict';
        var _n7a = null;
        defineModule(_n78);
        Object.defineProperty(_n78, '__esModule', {
            'value': true
        }), _n78.getSlot188PersonalEffect = void 0;
        var _n7b = _n79(74496);
        _n78.getSlot188PersonalEffect = function(_n7c) {
            var _n7d = null,
                _n7e = new _n7b.SlotItemEffectModel(),
                _n7f = new _n7b.SlotItemEffectModel();
            if (68 == _n7c.ctype && (_n7f.houg += 3, _n7f.tyku += 1, _n7f.kaih += 1), !_n7f.exists()) return _n7e;
            var _n7g = _n7c.get_slotnums(188);
            return _n7e = _n7f.multiply(_n7g);
        };
    },
    13052: (_n7h, _n7i, _n7j) => {
        'use strict';
        var _n7k = null;
        defineModule(_n7i);
        Object.defineProperty(_n7i, '__esModule', {
            'value': true
        }), _n7i.getSlot189PersonalEffect = void 0;
        var _n7l = _n7j(74496);
        _n7i.getSlot189PersonalEffect = function(_n7m) {
            var _n7n = null,
                _n7o = new _n7l.SlotItemEffectModel(),
                _n7p = new _n7l.SlotItemEffectModel();
            if (68 != _n7m.ctype && 63 != _n7m.ctype || (_n7p.tyku += 1, _n7p.kaih += 2), !_n7p.exists()) return _n7o;
            var _n7q = _n7m.get_slotnums(189);
            return _n7o = _n7p.multiply(_n7q);
        };
    },
    66904: (_n7r, _n7s, _n7t) => {
        'use strict';
        var _n7u = null;
        defineModule(_n7s);
        Object.defineProperty(_n7s, '__esModule', {
            'value': true
        }), _n7s.getSlot18_52_PersonalEffect = void 0;
        var _n7v = _n7t(74496);
        _n7s.getSlot18_52_PersonalEffect = function(_n7w) {
            var _n7x = null,
                _n7y = new _n7v.SlotItemEffectModel(),
                _n7z = new _n7v.SlotItemEffectModel();
            if (277 == _n7w.ship_id || 278 == _n7w.ship_id || 156 == _n7w.ship_id ? _n7z.houg = 1 : 594 == _n7w.ship_id || 698 == _n7w.ship_id || 646 == _n7w.ship_id ? (_n7z.houg = 1, _n7z.kaih = 1) : 599 != _n7w.ship_id && 610 != _n7w.ship_id || (_n7z.houg = 2, _n7z.kaih = 1), !_n7z.exists()) return _n7y;
            var _n80 = _n7w.get_slotnums(18) + _n7w.get_slotnums(52);
            return _n7y = _n7z.multiply(_n80);
        };
    },
    94968: (_n81, _n82, _n83) => {
        'use strict';
        var _n84 = null;
        defineModule(_n82);
        Object.defineProperty(_n82, '__esModule', {
            'value': true
        }), _n82.getSlot194PersonalEffect = void 0;
        var _n85 = _n83(74496);
        _n82.getSlot194PersonalEffect = function(_n86) {
            var _n87 = null,
                _n88 = new _n85.SlotItemEffectModel(),
                _n89 = new _n85.SlotItemEffectModel();
            if (70 == _n86.ctype ? (_n89.houg += 3, _n89.kaih += 2, _n89.saku += 2) : 72 != _n86.ctype && 62 != _n86.ctype || (_n89.kaih += 1, _n89.saku += 2), 392 != _n86.ship_id && 969 != _n86.ship_id || (_n89.houg += 1, _n89.kaih += 2, _n89.saku += 2), !_n89.exists()) return _n88;
            var _n8a = _n86.get_slotnums(194);
            return _n88 = _n89.multiply(_n8a);
        };
    },
    94781: (_n8b, _n8c, _n8d) => {
        'use strict';
        var _n8e = null;
        defineModule(_n8c);
        Object.defineProperty(_n8c, '__esModule', {
            'value': true
        }), _n8c.getSlot195PersonalEffect = void 0;
        var _n8f = _n8d(74496);
        _n8c.getSlot195PersonalEffect = function(_n8g) {
            var _n8h = null,
                _n8i = new _n8f.SlotItemEffectModel(),
                _n8j = false,
                _n8k = new _n8f.SlotItemEffectModel();
            if ('アメリカ' == _n8g.getCountryName() && (_n8k.houg += 1, _n8j = true), 0 == _n8j) return _n8i;
            var _n8l = _n8g.get_slotnums(195);
            return _n8i.add(_n8k.multiply(_n8l));
        };
    },
    98137: (_n8m, _n8n, _n8o) => {
        'use strict';
        var _n8p = null;
        defineModule(_n8n);
        Object.defineProperty(_n8n, '__esModule', {
            'value': true
        }), _n8n.getSlot19PersonalEffect = void 0;
        var _n8q = _n8o(74496);
        _n8n.getSlot19PersonalEffect = function(_n8r) {
            var _n8s = null,
                _n8t = new _n8q.SlotItemEffectModel(),
                _n8u = new _n8q.SlotItemEffectModel();
            if ('ほうしょう' == _n8r.yomi && (_n8u.houg = 2, _n8u.kaih = 2, _n8u.tais = 2, _n8u.tyku = 2), 75 != _n8r.ctype && 76 != _n8r.ctype || (_n8u.houg = 2, _n8u.tais = 3), 7 == _n8r.stype && (_n8u.tyku += 1, _n8u.kaih += 1), 894 != _n8r.ship_id && 899 != _n8r.ship_id || (_n8u.houg += 1, _n8u.kaih += 1, _n8u.tais += 1, _n8u.tyku += 1), !_n8u.exists()) return _n8t;
            var _n8v = _n8r.get_slotnums(19);
            return _n8t = _n8u.multiply(_n8v);
        };
    },
    48658: (_n8w, _n8x, _n8y) => {
        'use strict';
        var _n8z = null;
        defineModule(_n8x);
        Object.defineProperty(_n8x, '__esModule', {
            'value': true
        }), _n8x.getSlot204PersonalEffect = void 0;
        var _n90 = _n8y(74496);
        _n8x.getSlot204PersonalEffect = function(_n91) {
            var _n92 = null,
                _n93 = new _n90.SlotItemEffectModel();
            if (591 != _n91.ship_id && 592 != _n91.ship_id && 593 != _n91.ship_id && 954 != _n91.ship_id && 694 != _n91.ship_id) return _n93;
            _n93.souk = _n93.souk + 1, _n93.raig = _n93.raig + 1;
            for (var _n94 = _n91.get_each_level_nums(204), _n95 = 0, _n96 = 0; _n96 <= 10; _n96++) _n96 >= 7 && (_n95 += _n94[_n96]);
            return _n95 > 0 && (_n93.souk = _n93.souk + 1, 694 == _n91.ship_id && (_n93.souk += 1)), _n94[10] > 0 && (_n93.raig = _n93.raig + 1, 694 == _n91.ship_id && (_n93.raig += 1)), _n93;
        };
    },
    2306: (_n97, _n98, _n99) => {
        'use strict';
        var _n9a = null;
        defineModule(_n98);
        Object.defineProperty(_n98, '__esModule', {
            'value': true
        }), _n98.getSlot217PersonalEffect = void 0;
        var _n9b = _n99(74496);
        _n98.getSlot217PersonalEffect = function(_n9c) {
            var _n9d = null,
                _n9e = new _n9b.SlotItemEffectModel(),
                _n9f = false,
                _n9g = new _n9b.SlotItemEffectModel();
            if (501 == _n9c.ship_id || 506 == _n9c.ship_id ? (_n9g.houg += 1, _n9g.kaih += 3, _n9g.tyku += 5, _n9f = true) : 502 != _n9c.ship_id && 507 != _n9c.ship_id || (_n9g.houg += 1, _n9g.kaih += 2, _n9g.tyku += 4, _n9f = true), 0 == _n9f) return _n9e;
            var _n9h = _n9c.get_slotnums(217);
            return _n9e.add(_n9g.multiply(_n9h)), _n9e;
        };
    },
    91302: function(_n9i, _n9j, _n9k) {
        'use strict';
        var _n9l = null;
        var _n9m = this && this.__importDefault || function(_n9n) {
            var _n9o = null;
            return _n9n && _n9n.__esModule ? _n9n : {
                'default': _n9n
            };
        };
        defineModule(_n9j);
        Object.defineProperty(_n9j, '__esModule', {
            'value': true
        }), _n9j.getSlot220PersonalEffect = void 0;
        var _n9p = _n9k(74496),
            _n9q = _n9m(_n9k(18622));
        _n9j.getSlot220PersonalEffect = function(_n9r) {
            var _n9s = null,
                _n9t = new _n9p.SlotItemEffectModel(),
                _n9u = false,
                _n9v = new _n9p.SlotItemEffectModel(),
                _n9w = 0,
                _n9x = 0;
            if (662 == _n9r.ship_id || 663 == _n9r.ship_id || 668 == _n9r.ship_id || 501 == _n9r.ship_id || 506 == _n9r.ship_id || 502 == _n9r.ship_id || 507 == _n9r.ship_id ? (_n9v.houg += 1, _n9v.tyku += 3, _n9v.kaih += 2, _n9u = true, _n9w = 1) : 894 != _n9r.ship_id && 899 != _n9r.ship_id || (_n9v.tyku += 2, _n9v.kaih += 2, _n9u = true, _n9w = 1, _n9x = 1), 0 == _n9u) return _n9t;
            var _n9y = _n9r.get_slotnums(220);
            _n9t.add(_n9v.multiply(_n9y));
            for (var _n9z = 0, _na0 = 0, _na1 = _n9r.have_slot_ids(); _na0 < _na1.length; _na0++) {
                var _na2 = _na1[_na0],
                    _na3 = _n9q.default.model.slot.getMst(_na2),
                    _na4 = _na3.equipType;
                12 != _na4 && 13 != _na4 || (_na3.sakuteki >= 5 && _n9r.get_slotnums(parseInt(_na2)), _na3.taiku >= 2 && (_n9z += _n9r.get_slotnums(parseInt(_na2))));
            }
            if (_n9z >= 1 && 1 == _n9w && (_n9t.tyku += 3, _n9t.kaih += 3), 0 == _n9x) return _n9t;
            var _na5 = _n9r.get_each_level_nums(220)[10];
            return 1 == _n9x && _na5 > 0 && (_n9t.houg += 1 * _na5, _n9t.tyku += 1 * _na5, _n9t.kaih += 1 * _na5), _n9t;
        };
    },
    20418: (_na6, _na7, _na8) => {
        'use strict';
        var _na9 = null;
        defineModule(_na7);
        Object.defineProperty(_na7, '__esModule', {
            'value': true
        }), _na7.getSlot227PersonalEffect = void 0;
        var _naa = _na8(74496);
        _na7.getSlot227PersonalEffect = function(_nab) {
            var _nac = null,
                _nad = new _naa.SlotItemEffectModel(),
                _nae = _nab.get_each_level_nums(227),
                _naf = 0;
            _nae.forEach(function(_nag, _nah) {
                _nah >= 8 && (_naf += _nag);
            }), _naf >= 1 && (_nad.tais += 1 * _naf);
            var _nai = _nae[10];
            return _nai >= 1 && (_nad.tais += 1 * _nai), _nad;
        };
    },
    1906: (_naj, _nak, _nal) => {
        'use strict';
        var _nam = null;
        defineModule(_nak);
        Object.defineProperty(_nak, '__esModule', {
            'value': true
        }), _nak.getSlot228PersonalEffect = void 0;
        var _nan = _nal(74496);
        _nak.getSlot228PersonalEffect = function(_nao) {
            var _nap = null,
                _naq = new _nan.SlotItemEffectModel(),
                _nar = new _nan.SlotItemEffectModel();
            if ('ほうしょう' == _nao.yomi && (_nar.houg = 3, _nar.kaih = 4, _nar.tais = 4, _nar.tyku = 3), 75 != _nao.ctype && 76 != _nao.ctype || (_nar.houg = 2, _nar.tais = 5, _nar.tyku = 1, _nar.kaih = 1), 7 == _nao.stype && (_nar.tais += 2, _nar.tyku += 1, _nar.kaih += 1), 894 != _nao.ship_id && 899 != _nao.ship_id || (_nar.houg += 1, _nar.kaih += 2, _nar.tais += 2, _nar.tyku += 1), !_nar.exists()) return _naq;
            var _nas = _nao.get_slotnums(228);
            return _naq = _nar.multiply(_nas);
        };
    },
    61887: function(_nat, _nau, _nav) {
        'use strict';
        var _naw = null;
        var _nax = this && this.__importDefault || function(_nay) {
            var _naz = null;
            return _nay && _nay.__esModule ? _nay : {
                'default': _nay
            };
        };
        defineModule(_nau);
        Object.defineProperty(_nau, '__esModule', {
            'value': true
        }), _nau.getSlot229PersonalEffect = void 0;
        var _nb0 = _nav(74496),
            _nb1 = _nax(_nav(18622));
        _nau.getSlot229PersonalEffect = function(_nb2) {
            var _nb3 = null;
            for (var _nb4 = new _nb0.SlotItemEffectModel(), _nb5 = 0, _nb6 = 0, _nb7 = _nb2.have_slots_dict[229]; _nb6 < _nb7.length; _nb6++) {
                _nb7[_nb6].level >= 7 && _nb5++;
            }
            var _nb8 = _nb5,
                _nb9 = 0,
                _nba = 0,
                _nbb = 0,
                _nbc = _nb2.get_slotnums(229);
            if (622 == _nb2.ship_id || 623 == _nb2.ship_id || 624 == _nb2.ship_id) _nb4.houg += 1 * _nbc, _nb4.tyku += 1 * _nbc, _nb9 = 2;
            else {
                if (656 == _nb2.ship_id) _nb4.houg += 2 * _nbc, _nb4.tyku += 3 * _nbc, _nb4.tais += 2 * _nbc, _nb9 = 3;
                else {
                    if (0 == _nb5) return _nb4;
                }
            }
            if (488 == _nb2.ship_id ? (_nb4.tyku += 3 * _nb8, _nb9 = 1) : 220 == _nb2.ship_id ? _nb4.tyku += 2 * _nb8 : 23 == _nb2.ship_id ? _nb4.tyku += 1 * _nb8 : 160 == _nb2.ship_id ? (_nb4.tyku += 2 * _nb8, _nb9 = 1) : 224 == _nb2.ship_id ? _nb4.tyku += 1 * _nb8 : 487 == _nb2.ship_id ? (_nb4.tyku += 2 * _nb8, _nb9 = 1) : 289 == _nb2.ship_id && (_nb4.tyku += 1 * _nb8), (66 == _nb2.ctype || 28 == _nb2.ctype) && (_nb4.houg += 1 * _nb8, _nb4.tyku += 1 * _nb8, _nba = 1), 1 == _nb2.stype && (_nb4.houg += 1 * _nb8, _nb4.tyku += 1 * _nb8, _nbb = 1), ('ゆら' == _nb2.yomi || 'なか' == _nb2.yomi || 'きぬ' == _nb2.yomi) && (_nb4.houg += 2 * _nb8), 0 == _nb9 + _nba + _nbb) return _nb4;
            for (var _nbd = 0, _nbe = 0, _nbf = 0, _nbg = _nb2.have_slot_ids(); _nbf < _nbg.length; _nbf++) {
                var _nbh = _nbg[_nbf],
                    _nbi = _nb1.default.model.slot.getMst(_nbh),
                    _nbj = _nbi.equipType;
                12 != _nbj && 13 != _nbj || (_nbi.sakuteki >= 5 && (_nbd += _nb2.get_slotnums(parseInt(_nbh))), _nbi.taiku >= 2 && (_nbe += _nb2.get_slotnums(parseInt(_nbh))));
            }
            return 1 == _nb9 ? _nbd > 0 && (_nb4.houg += 3, _nb4.kaih += 2) : 2 == _nb9 ? (_nbd > 0 && (_nb4.houg += 1, _nb4.kaih += 1), _nbe > 0 && (_nb4.tyku += 2, _nb4.kaih += 2)) : 3 == _nb9 && (_nbd > 0 && (_nb4.houg += 2, _nb4.kaih += 2), _nbe > 0 && (_nb4.tyku += 3, _nb4.kaih += 2)), 1 == _nba && _nbd > 0 && (_nb4.houg += 2, _nb4.kaih += 3), 1 == _nbb && _nbd > 0 && (_nb4.houg += 1, _nb4.kaih += 4), _nb4;
        };
    },
    55734: (_nbk, _nbl, _nbm) => {
        'use strict';
        var _nbn = null;
        defineModule(_nbl);
        Object.defineProperty(_nbl, '__esModule', {
            'value': true
        }), _nbl.getSlot234PersonalEffect = void 0;
        var _nbo = _nbm(74496);
        _nbl.getSlot234PersonalEffect = function(_nbp) {
            var _nbq = null,
                _nbr = new _nbo.SlotItemEffectModel(),
                _nbs = false,
                _nbt = new _nbo.SlotItemEffectModel(),
                _nbu = _nbp.get_slotnums(142) + _nbp.get_slotnums(460);
            if (37 == _nbp.ctype && (_nbt.houg += 1, _nbt.tyku += 1, _nbt.kaih += 1, _nbt.houm += 1, _nbu >= 1 && (_nbr.tyku += 1, _nbr.kaih += 1, _nbr.houm += 1), _nbs = true), 0 == _nbs) return _nbr;
            var _nbv = _nbp.get_slotnums(234);
            return _nbr.add(_nbt.multiply(_nbv)), _nbr;
        };
    },
    17562: function(_nbw, _nbx, _nby) {
        'use strict';
        var _nbz = null;
        var _nc0 = this && this.__importDefault || function(_nc1) {
            var _nc2 = null;
            return _nc1 && _nc1.__esModule ? _nc1 : {
                'default': _nc1
            };
        };
        defineModule(_nbx);
        Object.defineProperty(_nbx, '__esModule', {
            'value': true
        }), _nbx.getSlot235PersonalEffect = void 0;
        var _nc3 = _nby(74496),
            _nc4 = _nc0(_nby(18622));
        _nbx.getSlot235PersonalEffect = function(_nc5) {
            var _nc6 = null,
                _nc7 = new _nc3.SlotItemEffectModel(),
                _nc8 = false,
                _nc9 = new _nc3.SlotItemEffectModel(),
                _nca = 0;
            if (52 != _nc5.ctype && 9 != _nc5.ctype || (_nc9.houg += 2, _nc9.tyku += 1, _nc8 = true), 321 == _nc5.ship_id && (_nc9.houg += 1, _nc9.kaih += 1, _nca = 1), 0 == _nc8) return _nc7;
            var _ncb = _nc5.get_slotnums(235);
            if (_nc7.add(_nc9.multiply(_ncb)), 0 == _nca) return _nc7;
            for (var _ncc = 0, _ncd = 0, _nce = 0, _ncf = _nc5.have_slot_ids(); _nce < _ncf.length; _nce++) {
                var _ncg = _ncf[_nce],
                    _nch = _nc4.default.model.slot.getMst(_ncg),
                    _nci = _nch.equipType;
                12 != _nci && 13 != _nci || (_nch.sakuteki >= 5 && (_ncc += _nc5.get_slotnums(parseInt(_ncg))), _nch.taiku >= 2 && (_ncd += _nc5.get_slotnums(parseInt(_ncg))));
            }
            return _ncc >= 1 && 1 == _nca && (_nc7.houg += 3, _nc7.kaih += 2), _ncd >= 1 && 1 == _nca && (_nc7.tyku += 3, _nc7.kaih += 3), _nc7;
        };
    },
    47970: (_ncj, _nck, _ncl) => {
        'use strict';
        var _ncm = null;
        defineModule(_nck);
        Object.defineProperty(_nck, '__esModule', {
            'value': true
        }), _nck.getSlot237PersonalEffect = void 0;
        var _ncn = _ncl(74496);
        _nck.getSlot237PersonalEffect = function(_nco) {
            var _ncp = null,
                _ncq = new _ncn.SlotItemEffectModel(),
                _ncr = new _ncn.SlotItemEffectModel();
            if (553 == _nco.ship_id) _ncr.houg = 4, _ncr.kaih = 2;
            else {
                if (82 == _nco.ship_id) _ncr.houg = 3, _ncr.kaih = 1;
                else {
                    if (88 == _nco.ship_id) _ncr.houg = 3, _ncr.kaih = 1;
                    else {
                        if (554 == _nco.ship_id) _ncr.houg = 4, _ncr.kaih = 2;
                        else {
                            if (411 == _nco.ship_id) _ncr.houg = 2;
                            else {
                                if (412 != _nco.ship_id) return _ncq;
                                _ncr.houg = 2;
                            }
                        }
                    }
                }
            }
            var _ncs = _nco.get_slotnums(237);
            return _ncq = _ncr.multiply(_ncs);
        };
    },
    14386: (_nct, _ncu, _ncv) => {
        'use strict';
        var _ncw = null;
        defineModule(_ncu);
        Object.defineProperty(_ncu, '__esModule', {
            'value': true
        }), _ncu.getSlot238_239PersonalEffect = void 0;
        var _ncx = _ncv(74496);
        _ncu.getSlot238_239PersonalEffect = function(_ncy) {
            var _ncz = null,
                _nd0 = new _ncx.SlotItemEffectModel();
            return 501 != _ncy.ship_id && 506 != _ncy.ship_id && 502 != _ncy.ship_id && 507 != _ncy.ship_id || (_nd0.kaih += 1, _nd0.raig += 1), _nd0;
        };
    },
    82229: (_nd1, _nd2, _nd3) => {
        'use strict';
        var _nd4 = null;
        defineModule(_nd2);
        Object.defineProperty(_nd2, '__esModule', {
            'value': true
        }), _nd2.getSlot242PersonalEffect = void 0;
        var _nd5 = _nd3(74496);
        _nd2.getSlot242PersonalEffect = function(_nd6) {
            var _nd7 = null,
                _nd8 = new _nd5.SlotItemEffectModel(),
                _nd9 = false,
                _nda = new _nd5.SlotItemEffectModel();
            if (78 == _nd6.ctype && (_nda.houg += 2, _nda.kaih += 1, _nd9 = true), 'ほうしょう' == _nd6.yomi && (_nda.houg += 1, _nd9 = true), 0 == _nd9) return _nd8;
            var _ndb = _nd6.get_slotnums(242);
            return _nd8.add(_nda.multiply(_ndb)), _nd8;
        };
    },
    10325: (_ndc, _ndd, _nde) => {
        'use strict';
        var _ndf = null;
        defineModule(_ndd);
        Object.defineProperty(_ndd, '__esModule', {
            'value': true
        }), _ndd.getSlot243PersonalEffect = void 0;
        var _ndg = _nde(74496);
        _ndd.getSlot243PersonalEffect = function(_ndh) {
            var _ndi = null,
                _ndj = new _ndg.SlotItemEffectModel(),
                _ndk = false,
                _ndl = new _ndg.SlotItemEffectModel();
            if (78 == _ndh.ctype && (_ndl.houg += 3, _ndl.kaih += 1, _ndk = true), 'ほうしょう' == _ndh.yomi && (_ndl.houg += 2, _ndk = true), 0 == _ndk) return _ndj;
            var _ndm = _ndh.get_slotnums(243);
            return _ndj.add(_ndl.multiply(_ndm)), _ndj;
        };
    },
    351: (_ndn, _ndo, _ndp) => {
        'use strict';
        var _ndq = null;
        defineModule(_ndo);
        Object.defineProperty(_ndo, '__esModule', {
            'value': true
        }), _ndo.getSlot244PersonalEffect = void 0;
        var _ndr = _ndp(74496);
        _ndo.getSlot244PersonalEffect = function(_nds) {
            var _ndt = null,
                _ndu = new _ndr.SlotItemEffectModel(),
                _ndv = false,
                _ndw = new _ndr.SlotItemEffectModel(),
                _ndx = 0;
            if (78 == _nds.ctype && (_ndw.houg += 4, _ndw.kaih += 2, _ndv = true, _ndx = 1), 'ほうしょう' == _nds.yomi && (_ndw.houg += 3, _ndv = true, _ndx = 2), 0 == _ndv) return _ndu;
            var _ndy = _nds.get_slotnums(244);
            if (_ndu.add(_ndw.multiply(_ndy)), 0 == _ndx) return _ndu;
            var _ndz = _nds.get_each_level_over_nums([244]).slot[244];
            return 1 == _ndx ? (_ndz[3] >= 1 && (_ndu.houg += 1 * _ndz[3]), _ndz[5] >= 1 && (_ndu.houm += 1 * _ndz[5]), _ndz[7] >= 1 && (_ndu.houg += 1 * _ndz[7]), _ndz[8] >= 1 && (_ndu.kaih += 1 * _ndz[8]), _ndz[9] >= 1 && (_ndu.houm += 1 * _ndz[9]), _ndz[10] >= 1 && (_ndu.houg += 1 * _ndz[10])) : 2 == _ndx && (_ndz[3] >= 1 && (_ndu.kaih += 1 * _ndz[3]), _ndz[7] >= 1 && (_ndu.houg += 1 * _ndz[7]), _ndz[9] >= 1 && (_ndu.houm += 1 * _ndz[9]), _ndz[10] >= 1 && (_ndu.houg += 1 * _ndz[10])), _ndu;
        };
    },
    61977: (_ne0, _ne1, _ne2) => {
        'use strict';
        var _ne3 = null;
        defineModule(_ne1);
        Object.defineProperty(_ne1, '__esModule', {
            'value': true
        }), _ne1.getSlot247PersonalEffect = void 0;
        var _ne4 = _ne2(74496);
        _ne1.getSlot247PersonalEffect = function(_ne5) {
            var _ne6 = null,
                _ne7 = new _ne4.SlotItemEffectModel(),
                _ne8 = false,
                _ne9 = new _ne4.SlotItemEffectModel(),
                _nea = 0;
            if ('フランス' == _ne5.getCountryName() && (_ne9.houg += 2, _ne9.houm += 2, _ne8 = true, _nea = 1), 0 == _ne8) return _ne7;
            var _neb = _ne5.get_slotnums(247);
            if (_ne7.add(_ne9.multiply(_neb)), 0 == _nea) return _ne7;
            var _nec = _ne5.get_each_level_nums(247),
                _ned = 0,
                _nee = 0;
            _nea > 0 && _nec.forEach(function(_nef, _neg) {
                _neg >= 4 && (_ned += _nef), _neg >= 8 && (_nee += _nef);
            });
            var _neh = _nec[10];
            return 1 == _nea && (_ned >= 1 && (_ne7.houg += 1 * _ned, _ne7.houm += 1 * _ned), _nee >= 1 && (_ne7.kaih += 1 * _nee, _ne7.houg += 1 * _nee, _ne7.houm += 1 * _nee), _neh >= 1 && (_ne7.kaih += 1 * _neh, _ne7.houm += 1 * _neh)), _ne7;
        };
    },
    96580: (_nei, _nej, _nek) => {
        'use strict';
        var _nel = null;
        defineModule(_nej);
        Object.defineProperty(_nej, '__esModule', {
            'value': true
        }), _nej.getSlot252PersonalEffect = void 0;
        var _nem = _nek(74496);
        _nej.getSlot252PersonalEffect = function(_nen) {
            var _neo = null,
                _nep = new _nem.SlotItemEffectModel(),
                _neq = (new _nem.SlotItemEffectModel(), 0);
            if (78 != _nen.ctype && 112 != _nen.ctype || (_neq = 1), 0 == _neq) return _nep;
            var _ner = _nen.get_each_level_over_nums([252]).slot[252];
            return 1 == _neq && (_ner[4] >= 1 && (_nep.kaih += 1 * _ner[4]), _ner[6] >= 1 && (_nep.houm += 1 * _ner[6]), _ner[7] >= 1 && (_nep.houg += 1 * _ner[7]), _ner[8] >= 1 && (_nep.kaih += 1 * _ner[8]), _ner[9] >= 1 && (_nep.houm += 1 * _ner[9]), _ner[10] >= 1 && (_nep.houg += 1 * _ner[10])), _nep;
        };
    },
    81284: (_nes, _net, _neu) => {
        'use strict';
        var _nev = null;
        defineModule(_net);
        Object.defineProperty(_net, '__esModule', {
            'value': true
        }), _net.getSlot258PersonalEffect = void 0;
        var _new = _neu(74496);
        _net.getSlot258PersonalEffect = function(_nex) {
            var _ney = null,
                _nez = new _new.SlotItemEffectModel(),
                _nf0 = _nex.haveSlotLevelNumOver(258);
            return _nf0[2] >= 1 && (_nez.houm += 1 * _nf0[2], _nez.kaih += 1 * _nf0[2], {
                883: 1,
                599: 1,
                610: 1,
                899: 1,
                156: 1
            }[_nex.ship_id] && (_nez.houg += 1 * _nf0[2], _nez.houm += 1 * _nf0[2], _nez.kaih += 1 * _nf0[2])), _nez;
        };
    },
    4862: (_nf1, _nf2, _nf3) => {
        'use strict';
        var _nf4 = null;
        defineModule(_nf2);
        Object.defineProperty(_nf2, '__esModule', {
            'value': true
        }), _nf2.getSlot25mmMachinegunLightShipEffect = void 0;
        var _nf5 = _nf3(74496);
        _nf2.getSlot25mmMachinegunLightShipEffect = function(_nf6) {
            var _nf7 = null,
                _nf8 = new _nf5.SlotItemEffectModel(),
                _nf9 = {
                    986: 1
                };
            if (!_nf9[_nf6.ship_id]) return _nf8;
            var _nfa = _nf9[_nf6.ship_id],
                _nfb = _nf6.get_slotnums(39),
                _nfc = _nf6.get_slotnums(40),
                _nfd = _nf6.get_slotnums(49),
                _nfe = _nf6.get_slotnums(505),
                _nff = _nfb + _nfc + _nfd + _nfe,
                _nfg = _nf6.get_slotnums(533),
                _nfh = _nf6.get_slotnums(553),
                _nfi = _nf6.haveSlotLevelNumOver(39),
                _nfj = _nf6.haveSlotLevelNumOver(505);
            return 1 == _nfa && (_nf8.kaih += 1 * _nff, _nf8.tyku += 1 * _nff, _nfb >= 1 && (_nfi[7] >= 1 && (_nf8.houg += 1 * _nfi[7]), _nfi[8] >= 1 && (_nf8.tyku += 1 * _nfi[8]), _nfi[9] >= 1 && (_nf8.kaih += 1 * _nfi[9]), _nfi[10] >= 1 && (_nf8.houm += 1 * _nfi[10]), _nfg + _nfh >= 1 && (_nf8.houm += 1, _nf8.tyku += 1)), _nfe >= 1 && (_nf8.houg += 1 * _nfe, _nf8.kaih += 1 * _nfe, _nfj[8] >= 1 && (_nf8.houm += 1 * _nfj[8]))), _nf8;
        };
    },
    31797: function(_nfk, _nfl, _nfm) {
        'use strict';
        var _nfn = null;
        var _nfo = this && this.__importDefault || function(_nfp) {
            var _nfq = null;
            return _nfp && _nfp.__esModule ? _nfp : {
                'default': _nfp
            };
        };
        defineModule(_nfl);
        Object.defineProperty(_nfl, '__esModule', {
            'value': true
        }), _nfl.getSlot266PersonalEffect2 = _nfl.getSlot266PersonalEffect = void 0;
        var _nfr = _nfm(74496),
            _nfs = _nfo(_nfm(18622));
        _nfl.getSlot266PersonalEffect = function(_nft) {
            var _nfu = null,
                _nfv = new _nfr.SlotItemEffectModel(),
                _nfw = false;
            if (566 != _nft.ship_id && 567 != _nft.ship_id && 568 != _nft.ship_id && 656 != _nft.ship_id && 670 != _nft.ship_id && 915 != _nft.ship_id && 951 != _nft.ship_id || (_nfw = true), 0 == _nfw) return _nfv;
            var _nfx = _nft.get_slotnums(266);
            return 30 == _nft.ctype && (1 == _nfx ? _nfv.houg = 1 : _nfx >= 2 && (_nfv.houg = 3)), _nfv;
        }, _nfl.getSlot266PersonalEffect2 = function(_nfy) {
            var _nfz = null,
                _ng0 = new _nfr.SlotItemEffectModel(),
                _ng1 = 0,
                _ng2 = new _nfr.SlotItemEffectModel();
            if (23 == _nfy.ctype || 18 == _nfy.ctype ? (_ng2.houg = 1, _ng1 = 1) : 30 == _nfy.ctype && (_ng2.houg = 1, _ng1 = 2), ('しぐれ' == _nfy.yomi || 'ゆきかぜ' == _nfy.yomi || 'いそかぜ' == _nfy.yomi) && (_ng2.kaih = 1), 961 == _nfy.ship_id && (_ng2.houg += 1, _ng2.houm += 1, _ng2.kaih += 1), !_ng2.exists()) return _ng0;
            var _ng3 = _nfy.get_slotnums(266);
            if (_ng0 = _ng2.multiply(_ng3), 0 == _ng1) return _ng0;
            for (var _ng4 = 0, _ng5 = 0, _ng6 = _nfy.have_slot_ids(); _ng5 < _ng6.length; _ng5++) {
                var _ng7 = _ng6[_ng5],
                    _ng8 = _nfs.default.model.slot.getMst(_ng7),
                    _ng9 = _ng8.equipType;
                (12 == _ng9 || 13 == _ng9) && _ng8.sakuteki >= 5 && (_ng4 += _nfy.get_slotnums(parseInt(_ng7)));
            }
            return _ng4 > 0 && (1 == _ng1 ? (_ng0.houg += 1, _ng0.kaih += 1, _ng0.raig += 3) : 2 == _ng1 && (_ng0.houg += 2, _ng0.kaih += 1, _ng0.raig += 3)), _ng0;
        };
    },
    45738: function(_nga, _ngb, _ngc) {
        'use strict';
        var _ngd = null;
        var _nge = this && this.__importDefault || function(_ngf) {
            var _ngg = null;
            return _ngf && _ngf.__esModule ? _ngf : {
                'default': _ngf
            };
        };
        defineModule(_ngb);
        Object.defineProperty(_ngb, '__esModule', {
            'value': true
        }), _ngb.getSlot267PersonalEffect2 = _ngb.getSlot267PersonalEffect = void 0;
        var _ngh = _ngc(74496),
            _ngi = _nge(_ngc(18622));
        _ngb.getSlot267PersonalEffect = function(_ngj) {
            var _ngk = null,
                _ngl = new _ngh.SlotItemEffectModel(),
                _ngm = 0,
                _ngn = 0;
            if (38 == _ngj.ctype || 22 == _ngj.ctype) _ngm = 2, _ngn = 1;
            else {
                if (30 != _ngj.ctype) return _ngl;
                _ngm = 1, _ngn = 1;
            }
            var _ngo = _ngj.get_slotnums(267) + _ngj.get_slotnums(366);
            return _ngl.houg = _ngm * _ngo, _ngl.kaih = _ngn * _ngo, _ngl;
        }, _ngb.getSlot267PersonalEffect2 = function(_ngp) {
            var _ngq = null,
                _ngr = new _ngh.SlotItemEffectModel(),
                _ngs = _ngp.get_slotnums(267),
                _ngt = _ngp.get_slotnums(366),
                _ngu = _ngs + _ngt;
            if (566 != _ngp.ship_id && 567 != _ngp.ship_id && 568 != _ngp.ship_id && 656 != _ngp.ship_id && 670 != _ngp.ship_id && 915 != _ngp.ship_id && 951 != _ngp.ship_id || (_ngs > 0 && (_ngr.houg += 1), 1 == _ngt ? (_ngr.houg += 1, _ngr.tyku += 2) : _ngt >= 2 && (_ngr.houg += 2, _ngr.tyku += 4)), 38 != _ngp.ctype && 229 != _ngp.ship_id && [648, 961].indexOf(_ngp.ship_id) < 0) return _ngr;
            var _ngv = false,
                _ngw = false,
                _ngx = false,
                _ngy = false,
                _ngz = false,
                _nh0 = false,
                _nh1 = false,
                _nh2 = false,
                _nh3 = false,
                _nh4 = false,
                _nh5 = false,
                _nh6 = false,
                _nh7 = false,
                _nh8 = 0,
                _nh9 = 0,
                _nha = 0;
            543 == _ngp.ship_id ? (_ngr.houg = 1 * _ngu, _ngw = true) : 229 == _ngp.ship_id ? _ngx = true : 542 == _ngp.ship_id ? (_ngr.houg = 1 * _ngu, _ngy = true) : 563 == _ngp.ship_id ? (_ngr.houg = 1 * _ngu, _ngz = true) : 564 == _ngp.ship_id ? (_ngr.houg = 1 * _ngu, _nh0 = true) : 578 == _ngp.ship_id ? (_ngr.houg = 1 * _ngu, _nh1 = true) : 569 == _ngp.ship_id ? (_ngr.houg = 1 * _ngu, _nh2 = true) : 649 == _ngp.ship_id ? (_ngr.houg = 2 * _ngu, _nh4 = true) : 955 == _ngp.ship_id || 960 == _ngp.ship_id ? (_ngr.houg = 2 * _ngu, _nh5 = true) : 956 == _ngp.ship_id ? (_ngr.houg = 2 * _ngu, _nh6 = true) : 648 == _ngp.ship_id ? (_ngr.houg = 2 * _ngu, _nh3 = true, _nh8 = 1, _nh9 = 1, _nha = 1) : 961 == _ngp.ship_id ? (_ngr.houg = 2 * _ngu, _ngv = true, _nh8 = 1, _nh9 = 1, _nha = 1) : 981 == _ngp.ship_id && (_ngr.houg = 1 * _ngu, _nh7 = true);
            for (var _nhb = 0, _nhc = 0, _nhd = 0, _nhe = _ngp.have_slot_ids(); _nhd < _nhe.length; _nhd++) {
                var _nhf = _nhe[_nhd],
                    _nhg = _ngi.default.model.slot.getMst(_nhf),
                    _nhh = _nhg.equipType;
                12 != _nhh && 13 != _nhh || (_nhg.sakuteki >= 5 && (_nhb += _ngp.get_slotnums(parseInt(_nhf))), _nhg.taiku >= 2 && (_nhc += _ngp.get_slotnums(parseInt(_nhf))));
            }
            if (_nhb > 0 && _ngs > 0 && ((38 == _ngp.ctype || _nh3) && (_ngr.houg += 2, _ngr.raig += 3, _ngr.kaih += 1, 955 == _ngp.ship_id || 956 == _ngp.ship_id ? _ngr.raig -= 1 : 960 == _ngp.ship_id && (_ngr.raig -= 2)), (_ngy || _ngw || _ngx || _ngz || _nh0 || _nh1 || _nh2 || _nh3 || _nh4 || _nh5 || _nh6 || _nh7) && (_ngr.houg += 1, _ngr.raig += 3, _ngr.kaih += 2)), _ngt > 0 && (_ngy || _ngw || _ngz || _nh0 || _nh1 || _ngx || _nh2 || _nh3 || _nh4 || _ngv || _nh5 || _nh6 || _nh7)) {
                1 == _ngt ? (_ngr.tyku += 3, _ngr.houg += 1, _ngr.houm += 1) : _ngt >= 2 && (_ngr.tyku += 5, _ngr.houg += 3, _ngr.houm += 1, 955 == _ngp.ship_id && (_ngr.houg += 1)), (_nh2 || _nh3) && (_ngr.houg += 1, _ngr.tyku += 2), _nhb > 0 && (_ngr.houg += 2, _ngr.kaih += 2, _ngr.raig += 4, _ngr.houm += 2, 960 == _ngp.ship_id && (_ngr.raig -= 1, _ngr.houg += 1)), _nhc > 0 && (_ngr.houg += 1, _ngr.kaih += 3, _ngr.tyku += 5, _ngr.houm += 1);
                var _nhi = _ngp.get_each_level_nums(366),
                    _nhj = 0,
                    _nhk = 0;
                _nhi.forEach(function(_nhl, _nhm) {
                    _nhm >= 5 && (_nhj += _nhl), _nhm >= 8 && (_nhk += _nhl);
                }), _nhj >= 1 && (_ngr.houm += 1 * _nhj), _nhk >= 1 && (_ngr.houg += 1 * _nhk);
                var _nhn = _nhi[10];
                _nhn >= 1 && (_ngr.houm += 1 * _nhn);
            }
            var _nho = _ngp.get_slotnums(129),
                _nhp = _ngp.get_slotnums(74),
                _nhq = _ngp.get_slotnums(412);
            return _nh8 > 0 && _nho > 0 && 1 == _nh8 && (_ngr.houg += 2, _ngr.kaih += 3, _ngr.tyku += 2), _nha > 0 && _nhq > 0 && 1 == _nha && (_ngr.houg += 2, _ngr.kaih += 3, _ngr.tyku += 2), _nh9 > 0 && _nhp > 0 && 1 == _nh9 && (_ngr.houg += 3, _ngr.kaih -= 3), _ngr;
        };
    },
    23934: (_nhr, _nhs, _nht) => {
        'use strict';
        var _nhu = null;
        defineModule(_nhs);
        Object.defineProperty(_nhs, '__esModule', {
            'value': true
        }), _nhs.getSlot271PersonalEffect = void 0;
        var _nhv = _nht(74496);
        _nhs.getSlot271PersonalEffect = function(_nhw) {
            var _nhx = null,
                _nhy = new _nhv.SlotItemEffectModel(),
                _nhz = 0;
            if (508 != _nhw.ship_id && 509 != _nhw.ship_id && 888 != _nhw.ship_id && 883 != _nhw.ship_id || (_nhz = 1), 0 == _nhz) return _nhy;
            var _ni0 = _nhw.get_each_level_nums(271),
                _ni1 = 0,
                _ni2 = 0,
                _ni3 = 0,
                _ni4 = _ni0[10];
            return _nhz > 0 && _ni0.forEach(function(_ni5, _ni6) {
                _ni6 >= 4 && (_ni1 += _ni5), _ni6 >= 6 && (_ni2 += _ni5), _ni6 >= 8 && (_ni3 += _ni5);
            }), 1 == _nhz && (_ni1 >= 1 && (_nhy.houg += 1 * _ni1), _ni2 >= 1 && (_nhy.tyku += 2 * _ni2), _ni3 >= 1 && (_nhy.kaih += 2 * _ni3), _ni4 >= 1 && (_nhy.houg += 1 * _ni4)), _nhy;
        };
    },
    17712: function(_ni7, _ni8, _ni9) {
        'use strict';
        var _nia = null;
        var _nib = this && this.__importDefault || function(_nic) {
            var _nid = null;
            return _nic && _nic.__esModule ? _nic : {
                'default': _nic
            };
        };
        defineModule(_ni8);
        Object.defineProperty(_ni8, '__esModule', {
            'value': true
        }), _ni8.getSlot275PersonalEffect = void 0;
        var _nie = _ni9(74496),
            _nif = _nib(_ni9(18622));
        _ni8.getSlot275PersonalEffect = function(_nig) {
            var _nih = null,
                _nii = new _nie.SlotItemEffectModel(),
                _nij = false,
                _nik = new _nie.SlotItemEffectModel(),
                _nil = 0,
                _nim = 0;
            if (894 != _nig.ship_id && 899 != _nig.ship_id || (_nik.houg += 1, _nik.tyku += 3, _nik.kaih += 2, _nij = true, _nim = 1, _nil = 1), 0 == _nij) return _nii;
            var _nin = _nig.get_slotnums(275);
            _nii.add(_nik.multiply(_nin));
            var _nio = 0;
            if (_nil > 0)
                for (var _nip = 0, _niq = _nig.have_slot_ids(); _nip < _niq.length; _nip++) {
                    var _nir = _niq[_nip],
                        _nis = _nif.default.model.slot.getMst(_nir),
                        _nit = _nis.equipType;
                    12 != _nit && 13 != _nit || (_nis.sakuteki >= 5 && _nig.get_slotnums(parseInt(_nir)), _nis.taiku >= 2 && (_nio += _nig.get_slotnums(parseInt(_nir))));
                }
            if (1 == _nil && _nio > 0 && (_nii.tyku += 3, _nii.kaih += 3), 0 == _nim) return _nii;
            var _niu = _nig.get_each_level_nums(275),
                _niv = 0,
                _niw = _niu[10];
            return _nim > 0 && _niu.forEach(function(_nix, _niy) {
                _niy >= 7 && (_niv += _nix);
            }), 1 == _nim && (_niv > 0 && (_nii.tyku += 1 * _niv, _nii.kaih += 1 * _niv), _niw > 0 && (_nii.houg += 1 * _niw, _nii.tyku += 1 * _niw, _nii.houm += 1 * _niw)), _nii;
        };
    },
    93733: (_niz, _nj0, _nj1) => {
        'use strict';
        var _nj2 = null;
        defineModule(_nj0);
        Object.defineProperty(_nj0, '__esModule', {
            'value': true
        }), _nj0.getSlot277PersonalEffect = void 0;
        var _nj3 = _nj1(74496);
        _nj0.getSlot277PersonalEffect = function(_nj4) {
            var _nj5 = null,
                _nj6 = new _nj3.SlotItemEffectModel(),
                _nj7 = false,
                _nj8 = new _nj3.SlotItemEffectModel();
            if ('アメリカ' != _nj4.getCountryName() && 67 != _nj4.ctype && 78 != _nj4.ctype && 82 != _nj4.ctype && 88 != _nj4.ctype && 108 != _nj4.ctype && 112 != _nj4.ctype || (_nj8.houg += 1, _nj8.kaih += 1, _nj7 = true), 83 == _nj4.ctype && (_nj8.houg += 1, _nj8.kaih += 1, _nj8.tyku += 1, _nj7 = true), 0 == _nj7) return _nj6;
            var _nj9 = _nj4.get_slotnums(277);
            return _nj6.add(_nj8.multiply(_nj9)), _nj6;
        };
    },
    34718: (_nja, _njb, _njc) => {
        'use strict';
        var _njd = null;
        defineModule(_njb);
        Object.defineProperty(_njb, '__esModule', {
            'value': true
        }), _njb.getSlot278PersonalEffect = void 0;
        var _nje = _njc(74496);
        _njb.getSlot278PersonalEffect = function(_njf) {
            var _njg = null,
                _njh = new _nje.SlotItemEffectModel();
            return 'アメリカ' == _njf.getCountryName() ? (_njh.tyku += 1, _njh.kaih += 3, _njh.saku += 1) : 67 == _njf.ctype || 78 == _njf.ctype || 82 == _njf.ctype || 88 == _njf.ctype || 108 == _njf.ctype || 112 == _njf.ctype ? (_njh.tyku += 1, _njh.kaih += 2) : 96 == _njf.ctype && (_njh.tyku += 1, _njh.kaih += 1), _njh;
        };
    },
    69245: (_nji, _njj, _njk) => {
        'use strict';
        var _njl = null;
        defineModule(_njj);
        Object.defineProperty(_njj, '__esModule', {
            'value': true
        }), _njj.getSlot279PersonalEffect = void 0;
        var _njm = _njk(74496);
        _njj.getSlot279PersonalEffect = function(_njn) {
            var _njo = null,
                _njp = new _njm.SlotItemEffectModel();
            return 'アメリカ' == _njn.getCountryName() ? (_njp.houg += 2, _njp.tyku += 2, _njp.kaih += 3, _njp.saku += 2) : 67 == _njn.ctype || 78 == _njn.ctype || 82 == _njn.ctype || 88 == _njn.ctype || 108 == _njn.ctype || 112 == _njn.ctype ? (_njp.houg += 1, _njp.tyku += 1, _njp.kaih += 2, _njp.saku += 1) : 96 == _njn.ctype && (_njp.houg += 1, _njp.tyku += 1, _njp.kaih += 1), _njp;
        };
    },
    18478: (_njq, _njr, _njs) => {
        'use strict';
        var _njt = null;
        defineModule(_njr);
        Object.defineProperty(_njr, '__esModule', {
            'value': true
        }), _njr.getSlot282PersonalEffect = void 0;
        var _nju = _njs(74496);
        _njr.getSlot282PersonalEffect = function(_njv) {
            var _njw = null,
                _njx = new _nju.SlotItemEffectModel(),
                _njy = false,
                _njz = false;
            147 != _njv.ship_id && 73 != _njv.ctype && 81 != _njv.ctype || (_njy = true), 'ゆうばり' == _njv.yomi && (_njz = true);
            var _nk0 = new _nju.SlotItemEffectModel();
            if ((_njy || _njz) && (_nk0.houg += 2, _nk0.souk += 1), !_nk0.exists()) return _njx;
            var _nk1 = _njv.get_slotnums(282);
            return _njx = _nk0.multiply(_nk1);
        };
    },
    2899: (_nk2, _nk3, _nk4) => {
        'use strict';
        var _nk5 = null;
        defineModule(_nk3);
        Object.defineProperty(_nk3, '__esModule', {
            'value': true
        }), _nk3.getSlot283PersonalEffect = void 0;
        var _nk6 = _nk4(74496);
        _nk3.getSlot283PersonalEffect = function(_nk7) {
            var _nk8 = null,
                _nk9 = new _nk6.SlotItemEffectModel(),
                _nka = false;
            147 != _nk7.ship_id && 73 != _nk7.ctype && 81 != _nk7.ctype || (_nka = true);
            var _nkb = new _nk6.SlotItemEffectModel();
            if (_nka && (_nkb.raig += 3, _nkb.houg += 1, _nkb.souk += 1), !_nkb.exists()) return _nk9;
            var _nkc = _nk7.get_slotnums(283);
            return _nk9 = _nkb.multiply(_nkc);
        };
    },
    57120: (_nkd, _nke, _nkf) => {
        'use strict';
        var _nkg = null;
        defineModule(_nke);
        Object.defineProperty(_nke, '__esModule', {
            'value': true
        }), _nke.getSlot285PersonalEffect = void 0;
        var _nkh = _nkf(74496);
        _nke.getSlot285PersonalEffect = function(_nki) {
            var _nkj = null,
                _nkk = new _nkh.SlotItemEffectModel(),
                _nkl = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959, 986].indexOf(_nki.ship_id) >= 0 && (_nkl = true), 0 == _nkl) return _nkk;
            var _nkm = _nki.get_each_level_nums(285),
                _nkn = _nki.get_slotnums(285);
            _nkn > 2 && (_nkn = 2), _nkk.raig = 2 * _nkn, _nkk.kaih = 1 * _nkn;
            var _nko = _nkm[10];
            1 == _nko && (_nkk.houg += 1, _nkk.raig += 1), _nko >= 2 && (_nkk.houg += 2, _nkk.raig += 1), _nko >= 3 && (_nkk.raig += 3);
            var _nkp = _nki.get_slotnums(285);
            return 903 == _nki.ship_id ? (_nkp >= 2 && (_nkk.raig += 2), _nkp >= 3 && (_nkk.raig += 2)) : 908 != _nki.ship_id && 959 != _nki.ship_id || (_nkp >= 2 && (_nkk.raig += 1), _nkp >= 3 && (_nkk.raig += 1)), _nkk;
        };
    },
    74985: function(_nkq, _nkr, _nks) {
        'use strict';
        var _nkt = null;
        var _nku = this && this.__importDefault || function(_nkv) {
            var _nkw = null;
            return _nkv && _nkv.__esModule ? _nkv : {
                'default': _nkv
            };
        };
        defineModule(_nkr);
        Object.defineProperty(_nkr, '__esModule', {
            'value': true
        }), _nkr.getSlot286PersonalEffect3 = _nkr.getSlot286PersonalEffect2 = _nkr.getSlot286PersonalEffect = void 0;
        var _nkx = _nks(74496),
            _nky = _nku(_nks(18622));
        _nkr.getSlot286PersonalEffect = function(_nkz) {
            var _nl0 = null,
                _nl1 = new _nkx.SlotItemEffectModel(),
                _nl2 = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975, 956, 981].indexOf(_nkz.ship_id) >= 0 && (_nl2 = true), 0 == _nl2) return _nl1;
            var _nl3 = _nkz.get_each_level_nums(286),
                _nl4 = _nkz.get_slotnums(286);
            _nl4 > 2 && (_nl4 = 2), _nl1.raig = 2 * _nl4, _nl1.kaih = 1 * _nl4;
            var _nl5 = _nl3[10];
            if (1 == _nl5 ? _nl1.houg = _nl1.houg + 1 : _nl5 >= 2 && (_nl1.houg = _nl1.houg + 2), 30 == _nkz.ctype || 961 == _nkz.ship_id) {
                var _nl6 = _nl3[5] + _nl3[6] + _nl3[7] + _nl3[8] + _nl3[9] + _nl3[10];
                1 == _nl6 ? _nl1.raig = _nl1.raig + 1 : _nl6 >= 2 && (_nl1.raig = _nl1.raig + 2);
            }
            return _nl1;
        }, _nkr.getSlot286PersonalEffect2 = function(_nl7) {
            var _nl8 = null,
                _nl9 = new _nkx.SlotItemEffectModel(),
                _nla = false,
                _nlb = 0;
            if ('たけ' == _nl7.yomi && (_nla = true, _nlb = 1), 0 == _nla) return _nl9;
            var _nlc = _nl7.get_each_level_nums(286),
                _nld = 0;
            return _nlb > 0 && _nlc.forEach(function(_nle, _nlf) {
                _nlf >= 7 && (_nld += _nle);
            }), 'たけ' == _nl7.yomi && (_nl9.raig += 7, _nl9.kaih += 2, _nld >= 1 && (_nl9.raig += 2), _nlc[10] >= 1 && (_nl9.raig += 2)), _nl9;
        }, _nkr.getSlot286PersonalEffect3 = function(_nlg) {
            var _nlh = null,
                _nli = new _nkx.SlotItemEffectModel(),
                _nlj = false,
                _nlk = new _nkx.SlotItemEffectModel(),
                _nll = 0;
            if (662 != _nlg.ship_id && 663 != _nlg.ship_id && 668 != _nlg.ship_id || (_nlk.raig += 2, _nlj = true, _nll = 1), 0 == _nlj) return _nli;
            var _nlm = _nlg.get_slotnums(286);
            _nli.add(_nlk.multiply(_nlm));
            for (var _nln = 0, _nlo = 0, _nlp = _nlg.have_slot_ids(); _nlo < _nlp.length; _nlo++) {
                var _nlq = _nlp[_nlo],
                    _nlr = _nky.default.model.slot.getMst(_nlq),
                    _nls = _nlr.equipType;
                12 != _nls && 13 != _nls || (_nlr.sakuteki >= 5 && (_nln += _nlg.get_slotnums(parseInt(_nlq))), _nlr.taiku >= 2 && _nlg.get_slotnums(parseInt(_nlq)));
            }
            return _nln >= 1 && 1 == _nll && (_nli.raig += 3, _nli.kaih += 2), _nli;
        };
    },
    9234: (_nlt, _nlu, _nlv) => {
        'use strict';
        var _nlw = null;
        defineModule(_nlu);
        Object.defineProperty(_nlu, '__esModule', {
            'value': true
        }), _nlu.getSlot287PersonalEffect = void 0;
        var _nlx = _nlv(74496);
        _nlu.getSlot287PersonalEffect = function(_nly) {
            var _nlz = null,
                _nm0 = new _nlx.SlotItemEffectModel(),
                _nm1 = new _nlx.SlotItemEffectModel(),
                _nm2 = false;
            if (488 == _nly.ship_id || 141 == _nly.ship_id || 160 == _nly.ship_id || 624 == _nly.ship_id || 656 == _nly.ship_id ? (_nm1.tais = 1, _nm1.kaih = 1, _nm2 = true) : 662 != _nly.ship_id && 961 != _nly.ship_id || (_nm1.tais = 3, _nm2 = true), 0 == _nm2) return _nm0;
            var _nm3 = _nly.get_slotnums(287);
            return _nm0 = _nm1.multiply(_nm3);
        };
    },
    30802: (_nm4, _nm5, _nm6) => {
        'use strict';
        var _nm7 = null;
        defineModule(_nm5);
        Object.defineProperty(_nm5, '__esModule', {
            'value': true
        }), _nm5.getSlot288PersonalEffect = void 0;
        var _nm8 = _nm6(74496);
        _nm5.getSlot288PersonalEffect = function(_nm9) {
            var _nma = null,
                _nmb = new _nm8.SlotItemEffectModel(),
                _nmc = new _nm8.SlotItemEffectModel(),
                _nmd = false;
            if (488 == _nm9.ship_id || 141 == _nm9.ship_id || 160 == _nm9.ship_id || 656 == _nm9.ship_id ? (_nmc.tais = 2, _nmc.kaih = 1, _nmd = true) : 624 == _nm9.ship_id ? (_nmc.houg = 1, _nmc.tais = 3, _nmc.kaih = 2, _nmd = true) : 662 != _nm9.ship_id && 961 != _nm9.ship_id || (_nmc.tais = 4, _nmc.kaih = 1, _nmd = true), 0 == _nmd) return _nmb;
            var _nme = _nm9.get_slotnums(288);
            return _nmb = _nmc.multiply(_nme);
        };
    },
    97002: function(_nmf, _nmg, _nmh) {
        'use strict';
        var _nmi = null;
        var _nmj = this && this.__importDefault || function(_nmk) {
            var _nml = null;
            return _nmk && _nmk.__esModule ? _nmk : {
                'default': _nmk
            };
        };
        defineModule(_nmg);
        Object.defineProperty(_nmg, '__esModule', {
            'value': true
        }), _nmg.getSlot289PersonalEffect = void 0;
        var _nmm = _nmh(74496),
            _nmn = _nmj(_nmh(18622));
        _nmg.getSlot289PersonalEffect = function(_nmo) {
            var _nmp = null,
                _nmq = new _nmm.SlotItemEffectModel(),
                _nmr = {
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
                _nms = 0,
                _nmt = new _nmm.SlotItemEffectModel();
            if (149 == _nmo.ship_id || 591 == _nmo.ship_id) _nmt.houg = 2, _nmt.tyku = 1, _nms = 1;
            else {
                if (150 == _nmo.ship_id || 592 == _nmo.ship_id) _nmt.houg = 1;
                else {
                    if (152 == _nmo.ship_id || 694 == _nmo.ship_id) _nmt.houg = 1;
                    else {
                        if (151 != _nmo.ship_id && 593 != _nmo.ship_id && 954 != _nmo.ship_id) return _nmq;
                        _nmt.houg = 2, _nmt.tyku = 2, _nmt.kaih = 2, _nms = 1;
                    }
                }
            }
            var _nmu = _nmo.get_slotnums(289);
            if (_nmq = _nmt.multiply(_nmu), _nmr[_nmo.ship_id]) {
                var _nmv = _nmo.get_each_level_nums(289),
                    _nmw = new Array();
                _nmv.forEach(function(_nmx, _nmy) {
                    var _nmz = null;
                    for (var _nn0 = 1; _nn0 <= _nmo.SLOT_LEVEL_MAX; _nn0++) _nmy >= _nn0 && (null == _nmw[_nn0] && (_nmw[_nn0] = 0), _nmw[_nn0] += _nmx);
                });
                var _nn1 = _nmr[_nmo.ship_id];
                1 == _nn1 ? (_nmw[1] >= 1 && (_nmq.kaih += 1 * _nmw[1]), _nmw[3] >= 1 && (_nmq.tyku = _nmq.tyku + 1 * _nmw[3]), _nmw[5] >= 1 && (_nmq.houg = _nmq.houg + 1 * _nmw[5]), _nmw[7] >= 1 && (_nmq.kaih += 1 * _nmw[7]), _nmw[8] >= 1 && (_nmq.tyku += 1 * _nmw[8]), _nmw[9] >= 1 && (_nmq.houg += 1 * _nmw[9]), _nmw[10] >= 1 && (_nmq.kaih += 1 * _nmw[10])) : 2 == _nn1 ? (_nmw[4] >= 1 && (_nmq.tyku += 1 * _nmw[4]), _nmw[6] >= 1 && (_nmq.kaih += 1 * _nmw[6]), _nmw[8] >= 1 && (_nmq.houg += 1 * _nmw[8]), _nmw[10] >= 1 && (_nmq.kaih += 1 * _nmw[10])) : 3 == _nn1 && (_nmw[7] >= 1 && (_nmq.tyku += 1 * _nmw[7]), _nmw[9] >= 1 && (_nmq.houg += 1 * _nmw[9]), _nmw[10] >= 1 && (_nmq.kaih += 1 * _nmw[10]));
            }
            if (0 == _nms) return _nmq;
            for (var _nn2 = 0, _nn3 = 0, _nn4 = _nmo.have_slot_ids(); _nn3 < _nn4.length; _nn3++) {
                var _nn5 = _nn4[_nn3],
                    _nn6 = _nmn.default.model.slot.getMst(_nn5),
                    _nn7 = _nn6.equipType;
                (12 == _nn7 || 13 == _nn7) && _nn6.sakuteki >= 5 && (_nn2 += _nmo.get_slotnums(parseInt(_nn5)));
            }
            return _nn2 > 0 && (_nmq.houg += 2, _nmq.kaih += 2), _nmq;
        };
    },
    16748: function(_nn8, _nn9, _nna) {
        'use strict';
        var _nnb = null;
        var _nnc = this && this.__importDefault || function(_nnd) {
            var _nne = null;
            return _nnd && _nnd.__esModule ? _nnd : {
                'default': _nnd
            };
        };
        defineModule(_nn9);
        Object.defineProperty(_nn9, '__esModule', {
            'value': true
        }), _nn9.getSlot290PersonalEffect = void 0;
        var _nnf = _nna(74496),
            _nng = _nnc(_nna(18622));
        _nn9.getSlot290PersonalEffect = function(_nnh) {
            var _nni = null,
                _nnj = new _nnf.SlotItemEffectModel(),
                _nnk = 0,
                _nnl = new _nnf.SlotItemEffectModel();
            if (411 == _nnh.ship_id) _nnl.houg = 1;
            else {
                if (412 == _nnh.ship_id) _nnl.houg = 1;
                else {
                    if (82 == _nnh.ship_id) _nnl.houg = 2, _nnl.tyku = 2, _nnl.kaih = 1, _nnk = 1;
                    else {
                        if (553 == _nnh.ship_id) _nnl.houg = 3, _nnl.tyku = 2, _nnl.kaih = 1, _nnl.houm = 3, _nnk = 1;
                        else {
                            if (88 == _nnh.ship_id) _nnl.houg = 2, _nnl.tyku = 2, _nnl.kaih = 1, _nnk = 1;
                            else {
                                if (554 != _nnh.ship_id) return _nnj;
                                _nnl.houg = 3, _nnl.tyku = 2, _nnl.kaih = 2, _nnl.houm = 3, _nnk = 1;
                            }
                        }
                    }
                }
            }
            var _nnm = _nnh.get_slotnums(290);
            if (_nnj = _nnl.multiply(_nnm), 0 == _nnk) return _nnj;
            for (var _nnn = 0, _nno = 0, _nnp = _nnh.have_slot_ids(); _nno < _nnp.length; _nno++) {
                var _nnq = _nnp[_nno],
                    _nnr = _nng.default.model.slot.getMst(_nnq),
                    _nns = _nnr.equipType;
                (12 == _nns || 13 == _nns) && _nnr.taiku >= 2 && (_nnn += _nnh.get_slotnums(parseInt(_nnq)));
            }
            return _nnn > 0 && (_nnj.tyku += 2, _nnj.kaih += 3), _nnj;
        };
    },
    53618: (_nnt, _nnu, _nnv) => {
        'use strict';
        var _nnw = null;
        defineModule(_nnu);
        Object.defineProperty(_nnu, '__esModule', {
            'value': true
        }), _nnu.getSlot291PersonalEffect = void 0;
        var _nnx = _nnv(74496);
        _nnu.getSlot291PersonalEffect = function(_nny) {
            var _nnz = null,
                _no0 = new _nnx.SlotItemEffectModel(),
                _no1 = new _nnx.SlotItemEffectModel();
            if (553 == _nny.ship_id) _no1.houg = 6, _no1.kaih = 1;
            else {
                if (554 != _nny.ship_id) return _no0;
                _no1.houg = 6, _no1.kaih = 1;
            }
            var _no2 = _nny.get_slotnums(291);
            return _no0 = _no1.multiply(_no2);
        };
    },
    72573: (_no3, _no4, _no5) => {
        'use strict';
        var _no6 = null;
        defineModule(_no4);
        Object.defineProperty(_no4, '__esModule', {
            'value': true
        }), _no4.getSlot292PersonalEffect = void 0;
        var _no7 = _no5(74496);
        _no4.getSlot292PersonalEffect = function(_no8) {
            var _no9 = null,
                _noa = new _no7.SlotItemEffectModel(),
                _nob = new _no7.SlotItemEffectModel();
            if (553 == _no8.ship_id) _nob.houg = 8, _nob.kaih = 2, _nob.tyku = 1;
            else {
                if (554 != _no8.ship_id) return _noa;
                _nob.houg = 8, _nob.kaih = 2, _nob.tyku = 1;
            }
            var _noc = _no8.get_slotnums(292);
            return _noa = _nob.multiply(_noc);
        };
    },
    8955: function(_nod, _noe, _nof) {
        'use strict';
        var _nog = null;
        var _noh = this && this.__importDefault || function(_noi) {
            var _noj = null;
            return _noi && _noi.__esModule ? _noi : {
                'default': _noi
            };
        };
        defineModule(_noe);
        Object.defineProperty(_noe, '__esModule', {
            'value': true
        }), _noe.getSlot293PersonalEffect = void 0;
        var _nok = _nof(74496),
            _nol = _noh(_nof(18622));
        _noe.getSlot293PersonalEffect = function(_nom) {
            var _non = null,
                _noo = new _nok.SlotItemEffectModel(),
                _nop = new _nok.SlotItemEffectModel(),
                _noq = 0;
            if (66 == _nom.ctype || 28 == _nom.ctype) _nop.houg = 2, _nop.tyku = 1, _nop.kaih = 3, _noq = 1;
            else {
                if (74 != _nom.ctype && 77 != _nom.ctype) return _noo;
                _nop.houg = 1, _nop.tyku = 1, _nop.kaih = 2, _noq = 2;
            }
            var _nor = _nom.get_slotnums(293);
            _noo = _nop.multiply(_nor);
            for (var _nos = 0, _not = 0, _nou = _nom.have_slot_ids(); _not < _nou.length; _not++) {
                var _nov = _nou[_not],
                    _now = _nol.default.model.slot.getMst(_nov),
                    _nox = _now.equipType;
                (12 == _nox || 13 == _nox) && _now.sakuteki >= 5 && (_nos += _nom.get_slotnums(parseInt(_nov)));
            }
            var _noy = _nom.get_slotnums(174);
            return 1 == _noq ? (_nos > 0 && (_noo.houg += 2, _noo.kaih += 3, _noo.raig += 1), 1 == _noy ? (_noo.houg += 2, _noo.raig += 4) : _noy >= 2 && (_noo.houg += 3, _noo.raig += 7)) : 2 == _noq && _nos > 0 && (_noo.houg += 2, _noo.kaih += 3, _noo.tais += 1), _noo;
        };
    },
    98947: function(_noz, _np0, _np1) {
        'use strict';
        var _np2 = null;
        var _np3 = this && this.__importDefault || function(_np4) {
            var _np5 = null;
            return _np4 && _np4.__esModule ? _np4 : {
                'default': _np4
            };
        };
        defineModule(_np0);
        Object.defineProperty(_np0, '__esModule', {
            'value': true
        }), _np0.getSlot294PersonalEffect = void 0;
        var _np6 = _np1(74496),
            _np7 = _np3(_np1(18622));
        _np0.getSlot294PersonalEffect = function(_np8) {
            var _np9 = null,
                _npa = new _np6.SlotItemEffectModel(),
                _npb = new _np6.SlotItemEffectModel(),
                _npc = 0,
                _npd = _np8.get_slotnums(294);
            if (12 != _np8.ctype && 1 != _np8.ctype && 5 != _np8.ctype) return _npa;
            _npb.houg = 1, 959 == _np8.ship_id && (_npb.houg += 1, _npd >= 2 && (_npa.houg += 2), _npd >= 3 && (_npa.houg += 3), _npc = 1), _npa.add(_npb.multiply(_npd));
            for (var _npe = 0, _npf = 0, _npg = _np8.have_slot_ids(); _npf < _npg.length; _npf++) {
                var _nph = _npg[_npf],
                    _npi = _np7.default.model.slot.getMst(_nph),
                    _npj = _npi.equipType;
                (12 == _npj || 13 == _npj) && _npi.sakuteki >= 5 && (_npe += _np8.get_slotnums(parseInt(_nph)));
            }
            var _npk = _np8.get_slotnums(13),
                _npl = _np8.get_slotnums(125),
                _npm = _np8.get_slotnums(285),
                _npn = _npk + _npl + _npm;
            if (_npe > 0 && (_npa.houg += 3, _npa.kaih += 2, _npa.raig += 1), 1 == _npn ? (_npa.houg += 1, _npa.raig += 3) : _npn >= 2 && (_npa.houg += 2, _npa.raig += 5), _npm >= 1 && (_npa.raig += 1), 0 == _npc) return _npa;
            var _npo = _np8.get_each_level_nums(294),
                _npp = [];
            return _npc > 0 && _npo.forEach(function(_npq, _npr) {
                var _nps = null;
                for (var _npt = 1; _npt <= _np8.SLOT_LEVEL_MAX; _npt++) null == _npp[_npt] && (_npp[_npt] = 0), _npr >= _npt && (_npp[_npt] += _npq);
            }), 1 == _npc && (_npp[6] >= 1 && (_npa.houm += 4 * _npp[6]), _npp[7] >= 1 && (_npa.houg = _npa.houg + 6 * _npp[7]), _npp[8] >= 1 && (_npa.houg = _npa.houg + 1 * _npp[8]), _npp[9] >= 1 && (_npa.houg = _npa.houg + 1 * _npp[9]), _npp[10] >= 1 && (_npa.houg += 1 * _npp[10])), _npa;
        };
    },
    44726: function(_npu, _npv, _npw) {
        'use strict';
        var _npx = null;
        var _npy = this && this.__importDefault || function(_npz) {
            var _nq0 = null;
            return _npz && _npz.__esModule ? _npz : {
                'default': _npz
            };
        };
        defineModule(_npv);
        Object.defineProperty(_npv, '__esModule', {
            'value': true
        }), _npv.getSlot295PersonalEffect = void 0;
        var _nq1 = _npw(74496),
            _nq2 = _npy(_npw(18622));
        _npv.getSlot295PersonalEffect = function(_nq3) {
            var _nq4 = null,
                _nq5 = new _nq1.SlotItemEffectModel(),
                _nq6 = new _nq1.SlotItemEffectModel(),
                _nq7 = _nq3.get_slotnums(295);
            if (12 != _nq3.ctype && 1 != _nq3.ctype && 5 != _nq3.ctype) return _nq5;
            _nq6.houg = 2, _nq6.tyku = 2, 666 == _nq3.ship_id ? (_nq6.houg += 1, _nq6.tyku += 1, _nq6.tais += 1) : 959 == _nq3.ship_id && (_nq6.houg += 2, _nq7 >= 2 && (_nq5.houg += 2), _nq7 >= 3 && (_nq5.houg += 3)), _nq5.add(_nq6.multiply(_nq7));
            for (var _nq8 = 0, _nq9 = 0, _nqa = 0, _nqb = _nq3.have_slot_ids(); _nqa < _nqb.length; _nqa++) {
                var _nqc = _nqb[_nqa],
                    _nqd = _nq2.default.model.slot.getMst(_nqc),
                    _nqe = _nqd.equipType;
                12 != _nqe && 13 != _nqe || (_nqd.sakuteki >= 5 && (_nq8 += _nq3.get_slotnums(parseInt(_nqc))), _nqd.taiku >= 2 && (_nq9 += _nq3.get_slotnums(parseInt(_nqc))));
            }
            var _nqf = _nq3.get_slotnums(13),
                _nqg = _nq3.get_slotnums(125),
                _nqh = _nq3.get_slotnums(285),
                _nqi = _nqf + _nqg + _nqh;
            return _nq8 > 0 && (_nq5.houg += 3, _nq5.kaih += 2, _nq5.raig += 1), 1 == _nqi ? (_nq5.houg += 1, _nq5.raig += 3) : _nqi >= 2 && (_nq5.houg += 2, _nq5.raig += 5), _nqh >= 1 && (_nq5.raig += 1), _nq9 > 0 && (_nq5.tyku += 6), _nq5;
        };
    },
    93065: function(_nqj, _nqk, _nql) {
        'use strict';
        var _nqm = null;
        var _nqn = this && this.__importDefault || function(_nqo) {
            var _nqp = null;
            return _nqo && _nqo.__esModule ? _nqo : {
                'default': _nqo
            };
        };
        defineModule(_nqk);
        Object.defineProperty(_nqk, '__esModule', {
            'value': true
        }), _nqk.getSlot296PersonalEffect = void 0;
        var _nqq = _nql(74496),
            _nqr = _nqn(_nql(18622));
        _nqk.getSlot296PersonalEffect = function(_nqs) {
            var _nqt = null,
                _nqu = new _nqq.SlotItemEffectModel(),
                _nqv = new _nqq.SlotItemEffectModel();
            1 != _nqs.ctype && 5 != _nqs.ctype && 10 != _nqs.ctype && 23 != _nqs.ctype || (_nqv.houg += 1), 10 != _nqs.ctype && 23 != _nqs.ctype || (_nqv.kaih += 1), 145 == _nqs.ship_id || 961 == _nqs.ship_id ? (_nqv.houg += 1, _nqv.tyku += 1) : 144 == _nqs.ship_id ? (_nqv.houg += 1, _nqv.raig += 1) : 469 == _nqs.ship_id || 588 == _nqs.ship_id || 667 == _nqs.ship_id || 587 == _nqs.ship_id || 242 == _nqs.ship_id ? _nqv.kaih += 1 : 497 == _nqs.ship_id ? (_nqv.houg += 1, _nqv.kaih += 1) : 244 == _nqs.ship_id ? _nqv.kaih += 1 : 498 == _nqs.ship_id || 975 == _nqs.ship_id ? (_nqv.tyku += 1, _nqv.kaih += 1) : 627 == _nqs.ship_id ? (_nqv.houg += 2, _nqv.raig += 1) : 903 != _nqs.ship_id && 908 != _nqs.ship_id || (_nqv.houg += 3);
            var _nqw = true;
            if (_nqv.exists() || (_nqw = false), 0 == _nqw) return _nqu;
            var _nqx = _nqs.get_slotnums(296);
            _nqu = _nqv.multiply(_nqx);
            var _nqy = 0;
            if (1 != _nqs.ctype && 5 != _nqs.ctype && 10 != _nqs.ctype || (_nqy = 1), 23 == _nqs.ctype && (_nqy = 2), 0 == _nqy) return _nqu;
            for (var _nqz = 0, _nr0 = 0, _nr1 = 0, _nr2 = _nqs.have_slot_ids(); _nr1 < _nr2.length; _nr1++) {
                var _nr3 = _nr2[_nr1],
                    _nr4 = _nqr.default.model.slot.getMst(_nr3),
                    _nr5 = _nr4.equipType;
                12 != _nr5 && 13 != _nr5 || (_nr4.sakuteki >= 5 && (_nqz += _nqs.get_slotnums(parseInt(_nr3))), _nr4.taiku >= 2 && (_nr0 += _nqs.get_slotnums(parseInt(_nr3))));
            }
            return _nqz > 0 && (1 == _nqy ? (_nqu.houg += 1, _nqu.kaih += 2, _nqu.raig += 2) : 2 == _nqy && (_nqu.houg += 1, _nqu.kaih += 2, _nqu.raig += 3)), _nqs.get_slotnums(285) + _nqs.get_slotnums(125) >= 1 && 1 == _nqy && (_nqu.houg += 1, _nqu.raig += 3), _nqs.get_slotnums(15) + _nqs.get_slotnums(286) >= 1 && 2 == _nqy && (_nqu.houg += 1, _nqu.raig += 3), _nr0 > 0 && (1 == _nqy ? _nqu.tyku += 5 : 2 == _nqy && (_nqu.tyku += 6)), _nqu;
        };
    },
    85767: (_nr6, _nr7, _nr8) => {
        'use strict';
        var _nr9 = null;
        defineModule(_nr7);
        Object.defineProperty(_nr7, '__esModule', {
            'value': true
        }), _nr7.getSlot297PersonalEffect = void 0;
        var _nra = _nr8(74496);
        _nr7.getSlot297PersonalEffect = function(_nrb) {
            var _nrc = null,
                _nrd = new _nra.SlotItemEffectModel(),
                _nre = new _nra.SlotItemEffectModel();
            if (12 == _nrb.ctype) _nre.kaih = 2;
            else {
                if (1 != _nrb.ctype && 5 != _nrb.ctype) return _nrd;
                _nre.kaih = 1;
            }
            var _nrf = _nrb.get_slotnums(297);
            return _nrd = _nre.multiply(_nrf);
        };
    },
    38314: (_nrg, _nrh, _nri) => {
        'use strict';
        var _nrj = null;
        defineModule(_nrh);
        Object.defineProperty(_nrh, '__esModule', {
            'value': true
        }), _nrh.getSlot301PersonalEffect = void 0;
        var _nrk = _nri(74496);
        _nrh.getSlot301PersonalEffect = function(_nrl) {
            var _nrm = null,
                _nrn = new _nrk.SlotItemEffectModel(),
                _nro = new _nrk.SlotItemEffectModel();
            67 != _nrl.ctype && 78 != _nrl.ctype && 82 != _nrl.ctype && 88 != _nrl.ctype && 108 != _nrl.ctype && 112 != _nrl.ctype || (_nro.tyku += 2, _nro.kaih += 1, _nro.souk += 1);
            var _nrp = true;
            if (_nro.exists() || (_nrp = false), 0 == _nrp) return _nrn;
            var _nrq = _nrl.get_slotnums(301);
            return _nrn = _nro.multiply(_nrq);
        };
    },
    59747: (_nrr, _nrs, _nrt) => {
        'use strict';
        var _nru = null;
        defineModule(_nrs);
        Object.defineProperty(_nrs, '__esModule', {
            'value': true
        }), _nrs.getSlot302PersonalEffect = void 0;
        var _nrv = _nrt(74496);
        _nrs.getSlot302PersonalEffect = function(_nrw) {
            var _nrx = null,
                _nry = new _nrv.SlotItemEffectModel(),
                _nrz = new _nrv.SlotItemEffectModel();
            if (76 == _nrw.ctype && (_nrz.tais = 1, _nrz.kaih = 1), !_nrz.exists()) return _nry;
            var _ns0 = _nrw.get_slotnums(302);
            return _nry = _nrz.multiply(_ns0);
        };
    },
    40649: (_ns1, _ns2, _ns3) => {
        'use strict';
        var _ns4 = null;
        defineModule(_ns2);
        Object.defineProperty(_ns2, '__esModule', {
            'value': true
        }), _ns2.getSlot303PersonalEffect = void 0;
        var _ns5 = _ns3(74496);
        _ns2.getSlot303PersonalEffect = function(_ns6) {
            var _ns7 = null,
                _ns8 = new _ns5.SlotItemEffectModel(),
                _ns9 = new _ns5.SlotItemEffectModel();
            if (16 == _ns6.ctype || 4 == _ns6.ctype || 20 == _ns6.ctype || 41 == _ns6.ctype ? (_ns9.houg = 1, _ns9.tyku = 1) : 89 == _ns6.ctype && (_ns9.houg = 1, _ns9.tyku = 2, _ns9.kaih = 1), !_ns9.exists()) return _ns8;
            var _nsa = _ns6.get_slotnums(303);
            return _ns8 = _ns9.multiply(_nsa);
        };
    },
    13533: (_nsb, _nsc, _nsd) => {
        'use strict';
        var _nse = null;
        defineModule(_nsc);
        Object.defineProperty(_nsc, '__esModule', {
            'value': true
        }), _nsc.getSlot304PersonalEffect = void 0;
        var _nsf = _nsd(74496);
        _nsc.getSlot304PersonalEffect = function(_nsg) {
            var _nsh = null,
                _nsi = new _nsf.SlotItemEffectModel(),
                _nsj = new _nsf.SlotItemEffectModel();
            if (16 == _nsg.ctype || 4 == _nsg.ctype || 20 == _nsg.ctype || 41 == _nsg.ctype ? (_nsj.houg = 1, _nsj.tais = 1, _nsj.kaih = 1) : 89 == _nsg.ctype && (_nsj.houg = 1, _nsj.tais = 2, _nsj.kaih = 2), !_nsj.exists()) return _nsi;
            var _nsk = _nsg.get_slotnums(304);
            return _nsi = _nsj.multiply(_nsk);
        };
    },
    99791: (_nsl, _nsm, _nsn) => {
        'use strict';
        var _nso = null;
        defineModule(_nsm);
        Object.defineProperty(_nsm, '__esModule', {
            'value': true
        }), _nsm.getSlot305More320mmGunPersonalEffect = void 0;
        var _nsp = _nsn(74496);
        _nsm.getSlot305More320mmGunPersonalEffect = function(_nsq) {
            var _nsr = null,
                _nss = new _nsp.SlotItemEffectModel(),
                _nst = _nsq.get_slotnums(426),
                _nsu = _nsq.get_slotnums(427),
                _nsv = _nsq.get_slotnums(428),
                _nsw = _nsq.get_slotnums(429),
                _nsx = _nst + _nsu + _nsv + _nsw;
            return 113 == _nsq.ctype ? (_nss.houg = _nss.houg + 2 * _nsx, _nst >= 1 && (_nss.houg = _nss.houg + 1 * _nst, _nss.kaih = _nss.kaih + 1 * _nst, (_nst >= 2 || _nsu >= 1) && (_nss.houg = _nss.houg + 1, _nss.kaih = _nss.kaih + 1)), _nsv >= 1 && (_nss.houg = _nss.houg + 1 * _nsv, _nss.kaih = _nss.kaih + 1 * _nsv, (_nsv >= 2 || _nsw >= 1) && (_nss.houg = _nss.houg + 2, _nss.kaih = _nss.kaih + 1))) : 73 == _nsq.ctype ? (_nss.houg = _nss.houg + 1 * _nsx, _nst >= 1 && (_nss.houg = _nss.houg + 1 * _nst, _nss.kaih = _nss.kaih + 1 * _nst, (_nst >= 2 || _nsu >= 1) && (_nss.houg = _nss.houg + 1)), _nsv >= 1 && (_nss.houg = _nss.houg + 1 * _nsv, _nss.kaih = _nss.kaih + 1 * _nsv, (_nsv >= 2 || _nsw >= 1) && (_nss.houg = _nss.houg + 1))) : 58 == _nsq.ctype && _nsv >= 1 && (_nss.houg = _nss.houg + 1 * _nsv, _nss.kaih = _nss.kaih + 2 * _nsv, (_nsv >= 2 || _nsw >= 1) && (_nss.houg = _nss.houg + 2, _nss.kaih = _nss.kaih + 1)), _nss;
        };
    },
    12138: (_nsy, _nsz, _nt0) => {
        'use strict';
        var _nt1 = null;
        defineModule(_nsz);
        Object.defineProperty(_nsz, '__esModule', {
            'value': true
        }), _nsz.getSlot305_And_306_PersonalEffect = void 0;
        var _nt2 = _nt0(74496);
        _nsz.getSlot305_And_306_PersonalEffect = function(_nt3) {
            var _nt4 = null,
                _nt5 = new _nt2.SlotItemEffectModel(),
                _nt6 = new _nt2.SlotItemEffectModel();
            if (76 == _nt3.ctype && (_nt6.tais = 1, _nt6.kaih = 1), 'しんよう' == _nt3.yomi ? (_nt6.tais += 2, _nt6.kaih += 1) : 'グラーフ・ツェッペリン' != _nt3.yomi && 'アクィラ' != _nt3.yomi || (_nt6.houg = 1, _nt6.kaih = 1), !_nt6.exists()) return _nt5;
            var _nt7 = _nt3.get_slotnums(305) + _nt3.get_slotnums(306);
            return _nt5 = _nt6.multiply(_nt7);
        };
    },
    30042: (_nt8, _nt9, _nta) => {
        'use strict';
        var _ntb = null;
        defineModule(_nt9);
        Object.defineProperty(_nt9, '__esModule', {
            'value': true
        }), _nt9.getSlot307PersonalEffect = void 0;
        var _ntc = _nta(74496);
        _nt9.getSlot307PersonalEffect = function(_ntd) {
            var _nte = null,
                _ntf = new _ntc.SlotItemEffectModel(),
                _ntg = new _ntc.SlotItemEffectModel();
            if ('アメリカ' == _ntd.getCountryName() && (_ntg.houg = 1, _ntg.tyku = 1, _ntg.kaih = 1), !_ntg.exists()) return _ntf;
            var _nth = _ntd.get_slotnums(307);
            return _ntf = _ntg.multiply(_nth);
        };
    },
    33623: (_nti, _ntj, _ntk) => {
        'use strict';
        var _ntl = null;
        defineModule(_ntj);
        Object.defineProperty(_ntj, '__esModule', {
            'value': true
        }), _ntj.getSlot308PersonalEffect = void 0;
        var _ntm = _ntk(74496);
        _ntj.getSlot308PersonalEffect = function(_ntn) {
            var _nto = null,
                _ntp = new _ntm.SlotItemEffectModel(),
                _ntq = new _ntm.SlotItemEffectModel();
            if ('アメリカ' == _ntn.getCountryName() && (_ntq.houg = 1, _ntq.tyku = 1, _ntq.kaih = 1), 2 == _ntn.stype ? _ntq.houg += 1 : 1 == _ntn.stype && (_ntq.tyku += 1, _ntq.kaih += 1), 651 != _ntn.ship_id && 656 != _ntn.ship_id || (_ntq.houg += 1, _ntq.tyku += 1, _ntq.kaih += 1), !_ntq.exists()) return _ntp;
            var _ntr = _ntn.get_slotnums(308);
            return _ntp = _ntq.multiply(_ntr);
        };
    },
    17732: (_nts, _ntt, _ntu) => {
        'use strict';
        var _ntv = null;
        defineModule(_ntt);
        Object.defineProperty(_ntt, '__esModule', {
            'value': true
        }), _ntt.getSlot30_410PersonalEffect = void 0;
        var _ntw = _ntu(74496);
        _ntt.getSlot30_410PersonalEffect = function(_ntx) {
            var _nty = null,
                _ntz = new _ntw.SlotItemEffectModel();
            return 73 != _ntx.ship_id && 501 != _ntx.ship_id && 506 != _ntx.ship_id && 502 != _ntx.ship_id && 507 != _ntx.ship_id || (_ntz.tyku += 3, _ntz.kaih += 2, _ntz.saku += 2, _ntx.get_slotnums(410) >= 1 && (_ntz.tyku += 2, _ntz.kaih += 2, _ntz.houg += 1, _ntz.souk += 1)), 54 == _ntx.ctype && (_ntz.tyku += 3, _ntz.kaih += 2, _ntz.saku += 2, _ntx.get_slotnums(410) >= 1 && (_ntz.tyku += 2, _ntz.kaih += 2, _ntz.houg += 1, _ntz.souk += 1, 968 == _ntx.ship_id && (_ntz.houg += 1, _ntz.tyku += 1, _ntz.kaih += 1))), _ntz;
        };
    },
    85630: function(_nu0, _nu1, _nu2) {
        'use strict';
        var _nu3 = null;
        var _nu4 = this && this.__importDefault || function(_nu5) {
            var _nu6 = null;
            return _nu5 && _nu5.__esModule ? _nu5 : {
                'default': _nu5
            };
        };
        defineModule(_nu1);
        Object.defineProperty(_nu1, '__esModule', {
            'value': true
        }), _nu1.getSlot310PersonalEffect = void 0;
        var _nu7 = _nu2(74496),
            _nu8 = _nu4(_nu2(18622));
        _nu1.getSlot310PersonalEffect = function(_nu9) {
            var _nua = null,
                _nub = new _nu7.SlotItemEffectModel(),
                _nuc = new _nu7.SlotItemEffectModel(),
                _nud = new _nu7.SlotItemEffectModel();
            34 == _nu9.ctype ? (_nuc.houg += 2, _nuc.tyku += 1, _nuc.kaih += 1, _nud.houg += 2) : 56 == _nu9.ctype ? (_nuc.houg += 2, _nuc.kaih += 1, _nud.houg += 2, _nud.kaih += 2) : 90 == _nu9.ctype && (_nuc.houg += 3, _nuc.raig += 2, _nuc.tyku += 1, _nuc.kaih += 1, _nud.houg += 1, _nud.raig += 1);
            var _nue = new _nu7.SlotItemEffectModel(),
                _nuf = new _nu7.SlotItemEffectModel();
            622 != _nu9.ship_id && 623 != _nu9.ship_id && 624 != _nu9.ship_id || (_nuc.houg += 2, _nuc.kaih += 1, _nuc.tais += 1, _nue.houg = 1, _nue.raig = 1, _nuf.houg = 3, _nuf.kaih = 2, _nuf.raig = 2);
            var _nug = true;
            if (_nuc.exists() || (_nug = false), 0 == _nug) return _nub;
            var _nuh = _nu9.get_slotnums(310) + _nu9.get_slotnums(518);
            _nub = _nuc.multiply(_nuh);
            for (var _nui = 0, _nuj = 0, _nuk = 0, _nul = [310, 518]; _nuk < _nul.length; _nuk++) {
                var _num = _nul[_nuk],
                    _nun = _nu9.have_slots_dict[_num];
                if (null != _nun)
                    for (var _nuo = 0, _nup = _nun; _nuo < _nup.length; _nuo++) {
                        var _nuq = _nup[_nuo];
                        null != _nuq && (_nuq.level >= 7 && _nui++, _nuq.level >= 10 && _nuj++);
                    }
            }
            if (_nue.exists() && _nui > 0 && _nub.add(_nue.multiply(_nui)), _nud.exists() && _nuj > 0 && _nub.add(_nud.multiply(_nuj)), _nuf.exists()) {
                for (var _nur = 0, _nus = 0, _nut = _nu9.have_slot_ids(); _nus < _nut.length; _nus++) {
                    var _nuu = _nut[_nus],
                        _nuv = _nu8.default.model.slot.getMst(_nuu),
                        _nuw = _nuv.equipType;
                    (12 == _nuw || 13 == _nuw) && _nuv.sakuteki >= 5 && (_nur += _nu9.get_slotnums(parseInt(_nuu)));
                }
                _nur > 0 && _nub.add(_nuf);
            }
            return _nub;
        };
    },
    88736: (_nux, _nuy, _nuz) => {
        'use strict';
        var _nv0 = null;
        defineModule(_nuy);
        Object.defineProperty(_nuy, '__esModule', {
            'value': true
        }), _nuy.getSlot313PersonalEffect = void 0;
        var _nv1 = _nuz(74496);
        _nuy.getSlot313PersonalEffect = function(_nv2) {
            var _nv3 = null,
                _nv4 = new _nv1.SlotItemEffectModel(),
                _nv5 = new _nv1.SlotItemEffectModel();
            87 != _nv2.ctype && 91 != _nv2.ctype || (_nv5.houg += 2, _nv5.tyku += 2, _nv5.kaih += 1, _nv5.souk += 1), 651 != _nv2.ship_id && 656 != _nv2.ship_id || (_nv5.houg += 2, _nv5.tyku += 2, _nv5.kaih += 1, _nv5.souk += 1);
            var _nv6 = true;
            if (_nv5.exists() || (_nv6 = false), 0 == _nv6) return _nv4;
            var _nv7 = _nv2.get_slotnums(313);
            return _nv4 = _nv5.multiply(_nv7);
        };
    },
    49341: (_nv8, _nv9, _nva) => {
        'use strict';
        var _nvb = null;
        defineModule(_nv9);
        Object.defineProperty(_nv9, '__esModule', {
            'value': true
        }), _nv9.getSlot314PersonalEffect = void 0;
        var _nvc = _nva(74496);
        _nv9.getSlot314PersonalEffect = function(_nvd) {
            var _nve = null,
                _nvf = new _nvc.SlotItemEffectModel(),
                _nvg = new _nvc.SlotItemEffectModel();
            87 != _nvd.ctype && 91 != _nvd.ctype || (_nvg.houg += 1, _nvg.raig += 3);
            var _nvh = true;
            if (_nvg.exists() || (_nvh = false), 0 == _nvh) return _nvf;
            var _nvi = _nvd.get_slotnums(314);
            return _nvf = _nvg.multiply(_nvi);
        };
    },
    74306: (_nvj, _nvk, _nvl) => {
        'use strict';
        var _nvm = null;
        defineModule(_nvk);
        Object.defineProperty(_nvk, '__esModule', {
            'value': true
        }), _nvk.getSlot315PersonalEffect = void 0;
        var _nvn = _nvl(74496);
        _nvk.getSlot315PersonalEffect = function(_nvo) {
            var _nvp = null,
                _nvq = new _nvn.SlotItemEffectModel(),
                _nvr = new _nvn.SlotItemEffectModel();
            'アメリカ' == _nvo.getCountryName() && (_nvr.houg += 2, _nvr.kaih += 3, _nvr.saku += 4), 87 != _nvo.ctype && 91 != _nvo.ctype || (_nvr.houg += 1, _nvq.leng += 1), 651 != _nvo.ship_id && 656 != _nvo.ship_id || (_nvq.houg += 2, _nvq.kaih += 2, _nvq.saku += 3, _nvq.leng += 1);
            var _nvs = true;
            if (_nvr.exists() || (_nvs = false), 0 == _nvs) return _nvq;
            var _nvt = _nvo.get_slotnums(315);
            return _nvq.add(_nvr.multiply(_nvt)), _nvq;
        };
    },
    83898: (_nvu, _nvv, _nvw) => {
        'use strict';
        var _nvx = null;
        defineModule(_nvv);
        Object.defineProperty(_nvv, '__esModule', {
            'value': true
        }), _nvv.getSlot316PersonalEffect = void 0;
        var _nvy = _nvw(74496);
        _nvv.getSlot316PersonalEffect = function(_nvz) {
            var _nw0 = null,
                _nw1 = new _nvy.SlotItemEffectModel(),
                _nw2 = new _nvy.SlotItemEffectModel();
            if (68 == _nvz.ctype) {
                if (_nw2.houg += 4, _nw2.tyku += 1, _nw2.kaih += 1, !_nw2.exists()) return _nw1;
                var _nw3 = _nvz.get_slotnums(316);
                _nw1 = _nw2.multiply(_nw3);
            }
            return _nw1;
        };
    },
    71873: (_nw4, _nw5, _nw6) => {
        'use strict';
        var _nw7 = null;
        defineModule(_nw5);
        Object.defineProperty(_nw5, '__esModule', {
            'value': true
        }), _nw5.getSlot317PersonalEffect = void 0;
        var _nw8 = _nw6(74496);
        _nw5.getSlot317PersonalEffect = function(_nw9) {
            var _nwa = null,
                _nwb = new _nw8.SlotItemEffectModel(),
                _nwc = new _nw8.SlotItemEffectModel(),
                _nwd = 0,
                _nwe = false;
            if (6 == _nw9.ctype ? (_nwc.houg += 2, _nwc.tyku += 1, _nwd = 1, _nwe = true) : 2 == _nw9.ctype && (_nwc.houg += 1, _nwc.tyku += 1, _nwc.kaih += 1, _nwd = 2, _nwe = true), 149 == _nw9.ship_id || 591 == _nw9.ship_id || 592 == _nw9.ship_id ? (_nwc.houg += 2, _nwc.tyku += 2, _nwe = true) : 150 == _nw9.ship_id ? (_nwc.houg += 1, _nwc.tyku += 1, _nwe = true) : 151 == _nw9.ship_id ? (_nwc.houg += 1, _nwc.tyku += 1, _nwc.kaih += 1, _nwe = true) : 593 == _nw9.ship_id ? (_nwc.houg += 1, _nwc.tyku += 3, _nwc.kaih += 2, _nwe = true) : 954 == _nw9.ship_id ? (_nwc.houg += 2, _nwc.tyku += 2, _nwc.kaih += 1, _nwe = true) : 152 == _nw9.ship_id || 694 == _nw9.ship_id ? (_nwc.houg += 2, _nwc.tyku += 1, _nwe = true) : 541 == _nw9.ship_id ? (_nwc.houg += 1, _nwc.tyku += 2, _nwe = true) : 573 == _nw9.ship_id && (_nwc.houg += 2, _nwc.tyku += 2, _nwc.kaih += 1, _nwe = true), 0 == _nwe) return _nwb;
            if (_nwb.add(_nwc), 0 == _nwd) return _nwb;
            var _nwf = _nw9.get_each_level_nums(317),
                _nwg = [];
            return _nwd > 0 && _nwf.forEach(function(_nwh, _nwi) {
                var _nwj = null;
                for (var _nwk = 1; _nwk <= _nw9.SLOT_LEVEL_MAX; _nwk++) null == _nwg[_nwk] && (_nwg[_nwk] = 0), _nwi >= _nwk && (_nwg[_nwk] += _nwh);
            }), 1 == _nwd ? _nwg[8] >= 1 && (_nwb.houm += 1) : 2 == _nwd && _nwf[10] >= 1 && (_nwb.houm += 1), _nwb;
        };
    },
    53122: function(_nwl, _nwm, _nwn) {
        'use strict';
        var _nwo = null;
        var _nwp = this && this.__importDefault || function(_nwq) {
            var _nwr = null;
            return _nwq && _nwq.__esModule ? _nwq : {
                'default': _nwq
            };
        };
        defineModule(_nwm);
        Object.defineProperty(_nwm, '__esModule', {
            'value': true
        }), _nwm.getSlot318PersonalEffect = void 0;
        var _nws = _nwn(74496),
            _nwt = _nwp(_nwn(18622));
        _nwm.getSlot318PersonalEffect = function(_nwu) {
            var _nwv = null,
                _nww = new _nws.SlotItemEffectModel(),
                _nwx = new _nws.SlotItemEffectModel(),
                _nwy = new _nws.SlotItemEffectModel(),
                _nwz = new _nws.SlotItemEffectModel();
            if (411 == _nwu.ship_id || 412 == _nwu.ship_id ? _nwx.houg += 1 : 82 == _nwu.ship_id ? (_nwx.houg += 2, _nwx.tyku += 2, _nwx.kaih += 2, _nwz.tyku = 2, _nwz.kaih = 3, _nwz.houm = 1) : 553 == _nwu.ship_id ? (_nwx.houg += 2, _nwx.tyku += 2, _nwx.kaih += 2, _nwx.houm += 3, _nwz.tyku = 2, _nwz.kaih = 3, _nwz.houm = 1, _nwy.kaih = 2, _nwy.souk = 1) : 88 == _nwu.ship_id ? (_nwx.houg += 2, _nwx.tyku += 2, _nwx.kaih += 2, _nwz.tyku = 2, _nwz.kaih = 3, _nwz.houm = 1) : 541 == _nwu.ship_id || 573 == _nwu.ship_id ? (_nwx.houg += 3, _nwx.tyku += 2, _nwx.kaih += 1, _nwx.houm += 2, _nwy.houg = 2, _nwy.kaih = 2, _nwy.souk = 1, _nwy.houm = 1) : 554 == _nwu.ship_id && (_nwx.houg += 3, _nwx.tyku += 2, _nwx.kaih += 2, _nwx.houm += 3, _nwz.tyku = 2, _nwz.kaih = 3, _nwz.houm = 1, _nwy.houg = 1, _nwy.kaih = 2, _nwy.souk = 1, _nwy.houm = 1), !_nwx.exists()) return _nww;
            var _nx0 = _nwu.get_slotnums(318);
            if (_nww = _nwx.multiply(_nx0), !_nwy.exists() && !_nwz.exists()) return _nww;
            for (var _nx1 = 0, _nx2 = 0, _nx3 = _nwu.have_slot_ids(); _nx2 < _nx3.length; _nx2++) {
                var _nx4 = _nx3[_nx2],
                    _nx5 = _nwt.default.model.slot.getMst(_nx4),
                    _nx6 = _nx5.equipType;
                (12 == _nx6 || 13 == _nx6) && _nx5.taiku >= 2 && (_nx1 += _nwu.get_slotnums(parseInt(_nx4)));
            }
            var _nx7 = _nwu.get_slotnums(290);
            return _nwz.exists() && _nx1 > 0 && 0 == _nx7 && _nww.add(_nwz), _nwy.exists() && _nx7 >= 1 && _nww.add(_nwy), _nww;
        };
    },
    51063: (_nx8, _nx9, _nxa) => {
        'use strict';
        var _nxb = null;
        defineModule(_nx9);
        Object.defineProperty(_nx9, '__esModule', {
            'value': true
        }), _nx9.getSlot319PersonalEffect = void 0;
        var _nxc = _nxa(74496);
        _nx9.getSlot319PersonalEffect = function(_nxd) {
            var _nxe = null,
                _nxf = new _nxc.SlotItemEffectModel(),
                _nxg = new _nxc.SlotItemEffectModel();
            if (554 != _nxd.ship_id && 553 != _nxd.ship_id || (_nxg.houg = 7, _nxg.tyku = 3, _nxg.kaih = 2), !_nxg.exists()) return _nxf;
            var _nxh = _nxd.get_slotnums(319);
            return _nxf = _nxg.multiply(_nxh);
        };
    },
    91491: (_nxi, _nxj, _nxk) => {
        'use strict';
        var _nxl = null;
        defineModule(_nxj);
        Object.defineProperty(_nxj, '__esModule', {
            'value': true
        }), _nxj.getSlot320PersonalEffect = void 0;
        var _nxm = _nxk(74496);
        _nxj.getSlot320PersonalEffect = function(_nxn) {
            var _nxo = null,
                _nxp = new _nxm.SlotItemEffectModel(),
                _nxq = new _nxm.SlotItemEffectModel();
            if (553 == _nxn.ship_id) _nxq.houg = 2;
            else {
                if (554 == _nxn.ship_id) _nxq.houg = 4;
                else {
                    if (196 == _nxn.ship_id) _nxq.houg = 3;
                    else {
                        if (197 == _nxn.ship_id) _nxq.houg = 3;
                        else {
                            if (508 == _nxn.ship_id) _nxq.houg = 4;
                            else {
                                if (509 != _nxn.ship_id) return _nxp;
                                _nxq.houg = 4;
                            }
                        }
                    }
                }
            }
            var _nxr = _nxn.get_slotnums(320);
            return _nxp = _nxq.multiply(_nxr);
        };
    },
    85495: (_nxs, _nxt, _nxu) => {
        'use strict';
        var _nxv = null;
        defineModule(_nxt);
        Object.defineProperty(_nxt, '__esModule', {
            'value': true
        }), _nxt.getSlot322PersonalEffect = void 0;
        var _nxw = _nxu(74496);
        _nxt.getSlot322PersonalEffect = function(_nxx) {
            var _nxy = null,
                _nxz = new _nxw.SlotItemEffectModel(),
                _ny0 = new _nxw.SlotItemEffectModel();
            if (554 != _nxx.ship_id && 553 != _nxx.ship_id || (_ny0.houg = 5, _ny0.tyku = 2, _ny0.kaih = 2, _ny0.tais = 1), !_ny0.exists()) return _nxz;
            var _ny1 = _nxx.get_slotnums(322);
            return _nxz = _ny0.multiply(_ny1);
        };
    },
    65365: (_ny2, _ny3, _ny4) => {
        'use strict';
        var _ny5 = null;
        defineModule(_ny3);
        Object.defineProperty(_ny3, '__esModule', {
            'value': true
        }), _ny3.getSlot323PersonalEffect = void 0;
        var _ny6 = _ny4(74496);
        _ny3.getSlot323PersonalEffect = function(_ny7) {
            var _ny8 = null,
                _ny9 = new _ny6.SlotItemEffectModel(),
                _nya = new _ny6.SlotItemEffectModel();
            if (554 != _ny7.ship_id && 553 != _ny7.ship_id || (_nya.houg = 6, _nya.tyku = 3, _nya.kaih = 3, _nya.tais = 2), !_nya.exists()) return _ny9;
            var _nyb = _ny7.get_slotnums(323);
            return _ny9 = _nya.multiply(_nyb);
        };
    },
    98164: (_nyc, _nyd, _nye) => {
        'use strict';
        var _nyf = null;
        defineModule(_nyd);
        Object.defineProperty(_nyd, '__esModule', {
            'value': true
        }), _nyd.getSlot324And325PersonalEffect = void 0;
        var _nyg = _nye(74496);
        _nyd.getSlot324And325PersonalEffect = function(_nyh) {
            var _nyi = null,
                _nyj = new _nyg.SlotItemEffectModel(),
                _nyk = new _nyg.SlotItemEffectModel();
            if (554 == _nyh.ship_id || 646 == _nyh.ship_id ? (_nyk.houg = 2, _nyk.tais = 3, _nyk.kaih = 1) : 553 == _nyh.ship_id && (_nyk.houg = 1, _nyk.tais = 2, _nyk.kaih = 1), !_nyk.exists()) return _nyj;
            var _nyl = _nyh.get_slotnums(324) + _nyh.get_slotnums(325);
            return _nyj = _nyk.multiply(_nyl);
        };
    },
    38114: (_nym, _nyn, _nyo) => {
        'use strict';
        var _nyp = null;
        defineModule(_nyn);
        Object.defineProperty(_nyn, '__esModule', {
            'value': true
        }), _nyn.getSlot326PersonalEffect = void 0;
        var _nyq = _nyo(74496);
        _nyn.getSlot326PersonalEffect = function(_nyr) {
            var _nys = null,
                _nyt = new _nyq.SlotItemEffectModel(),
                _nyu = new _nyq.SlotItemEffectModel();
            if (646 == _nyr.ship_id ? (_nyu.houg = 3, _nyu.tais = 5, _nyu.kaih = 3) : 554 == _nyr.ship_id ? (_nyu.houg = 3, _nyu.tais = 4, _nyu.kaih = 2) : 553 == _nyr.ship_id && (_nyu.houg = 1, _nyu.tais = 3, _nyu.kaih = 1), !_nyu.exists()) return _nyt;
            var _nyv = _nyr.get_slotnums(326);
            return _nyt = _nyu.multiply(_nyv);
        };
    },
    21003: (_nyw, _nyx, _nyy) => {
        'use strict';
        var _nyz = null;
        defineModule(_nyx);
        Object.defineProperty(_nyx, '__esModule', {
            'value': true
        }), _nyx.getSlot327PersonalEffect = void 0;
        var _nz0 = _nyy(74496);
        _nyx.getSlot327PersonalEffect = function(_nz1) {
            var _nz2 = null,
                _nz3 = new _nz0.SlotItemEffectModel(),
                _nz4 = new _nz0.SlotItemEffectModel();
            if (646 == _nz1.ship_id ? (_nz4.houg = 5, _nz4.tais = 6, _nz4.kaih = 4) : 554 == _nz1.ship_id ? (_nz4.houg = 4, _nz4.tais = 5, _nz4.kaih = 2) : 553 == _nz1.ship_id && (_nz4.houg = 2, _nz4.tais = 4, _nz4.kaih = 1), !_nz4.exists()) return _nz3;
            var _nz5 = _nz1.get_slotnums(327);
            return _nz3 = _nz4.multiply(_nz5);
        };
    },
    77010: (_nz6, _nz7, _nz8) => {
        'use strict';
        var _nz9 = null;
        defineModule(_nz7);
        Object.defineProperty(_nz7, '__esModule', {
            'value': true
        }), _nz7.getSlot328PersonalEffect = void 0;
        var _nza = _nz8(74496);
        _nz7.getSlot328PersonalEffect = function(_nzb) {
            var _nzc = null,
                _nzd = new _nza.SlotItemEffectModel(),
                _nze = new _nza.SlotItemEffectModel();
            if ('こんごう' == _nzb.yomi ? (_nze.houg = 1, _nze.kaih = 1, 209 == _nzb.ship_id || 149 == _nzb.ship_id ? _nze.houg += 1 : 591 == _nzb.ship_id && (_nze.houg += 2, _nze.raig += 1)) : 'ひえい' == _nzb.yomi ? (_nze.houg = 1, _nze.kaih = 1, 210 == _nzb.ship_id || 150 == _nzb.ship_id ? _nze.houg += 1 : 592 == _nzb.ship_id && (_nze.houg += 2, _nze.tyku += 1)) : 'はるな' == _nzb.yomi ? (_nze.houg = 1, _nze.kaih = 1, 211 == _nzb.ship_id || 151 == _nzb.ship_id ? _nze.houg += 1 : 593 == _nzb.ship_id ? (_nze.houg += 1, _nze.tyku += 2) : 954 == _nzb.ship_id && (_nze.houg += 2, _nze.tyku += 1)) : 'きりしま' == _nzb.yomi ? (_nze.houg = 1, _nze.kaih = 1, 212 == _nzb.ship_id || 152 == _nzb.ship_id ? _nze.houg += 1 : 694 == _nzb.ship_id && (_nze.houg += 2, _nze.tyku += 1)) : ('ふそう' == _nzb.yomi || 'やましろ' == _nzb.yomi || 'いせ' == _nzb.yomi || 'ひゅうが' == _nzb.yomi) && (_nze.houg = 1), !_nze.exists()) return _nzd;
            var _nzf = _nzb.get_slotnums(328);
            return _nzd = _nze.multiply(_nzf);
        };
    },
    39126: (_nzg, _nzh, _nzi) => {
        'use strict';
        var _nzj = null;
        defineModule(_nzh);
        Object.defineProperty(_nzh, '__esModule', {
            'value': true
        }), _nzh.getSlot329PersonalEffect = void 0;
        var _nzk = _nzi(74496);
        _nzh.getSlot329PersonalEffect = function(_nzl) {
            var _nzm = null,
                _nzn = new _nzk.SlotItemEffectModel(),
                _nzo = new _nzk.SlotItemEffectModel();
            if ('こんごう' == _nzl.yomi ? (_nzo.houg = 1, _nzo.kaih = 1, 209 == _nzl.ship_id ? _nzo.houg += 1 : 149 == _nzl.ship_id ? (_nzo.houg += 2, _nzo.tyku += 1) : 591 == _nzl.ship_id && (_nzo.houg += 3, _nzo.tyku += 1, _nzo.raig += 2)) : 'ひえい' == _nzl.yomi ? (_nzo.houg = 1, _nzo.kaih = 1, 210 == _nzl.ship_id ? _nzo.houg += 1 : 150 == _nzl.ship_id ? (_nzo.houg += 2, _nzo.tyku += 1) : 592 == _nzl.ship_id && (_nzo.houg += 3, _nzo.tyku += 1, _nzo.raig += 2)) : 'はるな' == _nzl.yomi ? (_nzo.houg = 1, _nzo.kaih = 1, 211 == _nzl.ship_id ? _nzo.houg += 1 : 151 == _nzl.ship_id ? (_nzo.houg += 2, _nzo.tyku += 1) : 593 == _nzl.ship_id ? (_nzo.houg += 2, _nzo.tyku += 3, _nzo.raig += 1) : 954 == _nzl.ship_id && (_nzo.houg += 3, _nzo.tyku += 1, _nzo.raig += 2)) : 'きりしま' == _nzl.yomi ? (_nzo.houg = 1, _nzo.kaih = 1, 212 == _nzl.ship_id ? _nzo.houg += 1 : 152 == _nzl.ship_id ? (_nzo.houg += 2, _nzo.tyku += 1) : 694 == _nzl.ship_id && (_nzo.houg += 4, _nzo.tyku += 1, _nzo.raig += 1)) : ('ふそう' == _nzl.yomi || 'やましろ' == _nzl.yomi || 'いせ' == _nzl.yomi || 'ひゅうが' == _nzl.yomi) && (_nzo.houg = 1), !_nzo.exists()) return _nzn;
            var _nzp = _nzl.get_slotnums(329);
            return _nzn = _nzo.multiply(_nzp);
        };
    },
    72176: (_nzq, _nzr, _nzs) => {
        'use strict';
        var _nzt = null;
        defineModule(_nzr);
        Object.defineProperty(_nzr, '__esModule', {
            'value': true
        }), _nzr.getSlot335PersonalEffect = void 0;
        var _nzu = _nzs(74496);
        _nzr.getSlot335PersonalEffect = function(_nzv) {
            var _nzw = null,
                _nzx = new _nzu.SlotItemEffectModel(),
                _nzy = new _nzu.SlotItemEffectModel();
            if (277 == _nzv.ship_id || 278 == _nzv.ship_id ? (_nzy.tyku = 1, _nzy.kaih = 1) : 594 != _nzv.ship_id && 599 != _nzv.ship_id && 610 != _nzv.ship_id && 646 != _nzv.ship_id && 698 != _nzv.ship_id || (_nzy.tyku = 2, _nzy.kaih = 1), !_nzy.exists()) return _nzx;
            var _nzz = _nzv.get_slotnums(335);
            return _nzx = _nzy.multiply(_nzz);
        };
    },
    33846: (_o00, _o01, _o02) => {
        'use strict';
        var _o03 = null;
        defineModule(_o01);
        Object.defineProperty(_o01, '__esModule', {
            'value': true
        }), _o01.getSlot336PersonalEffect = void 0;
        var _o04 = _o02(74496);
        _o01.getSlot336PersonalEffect = function(_o05) {
            var _o06 = null,
                _o07 = new _o04.SlotItemEffectModel(),
                _o08 = new _o04.SlotItemEffectModel();
            if (277 == _o05.ship_id || 278 == _o05.ship_id ? (_o08.houg = 1, _o08.tyku = 1, _o08.kaih = 1) : 594 != _o05.ship_id && 599 != _o05.ship_id && 610 != _o05.ship_id && 646 != _o05.ship_id && 698 != _o05.ship_id || (_o08.houg = 1, _o08.tyku = 2, _o08.kaih = 1), !_o08.exists()) return _o07;
            var _o09 = _o05.get_slotnums(336);
            return _o07 = _o08.multiply(_o09);
        };
    },
    97157: (_o0a, _o0b, _o0c) => {
        'use strict';
        var _o0d = null;
        defineModule(_o0b);
        Object.defineProperty(_o0b, '__esModule', {
            'value': true
        }), _o0b.getSlot337PersonalEffect = void 0;
        var _o0e = _o0c(74496);
        _o0b.getSlot337PersonalEffect = function(_o0f) {
            var _o0g = null,
                _o0h = new _o0e.SlotItemEffectModel(),
                _o0i = new _o0e.SlotItemEffectModel();
            if (277 == _o0f.ship_id || 278 == _o0f.ship_id ? (_o0i.houg = 1, _o0i.tyku = 1, _o0i.kaih = 1) : 594 != _o0f.ship_id && 599 != _o0f.ship_id && 610 != _o0f.ship_id && 646 != _o0f.ship_id && 698 != _o0f.ship_id || (_o0i.houg = 2, _o0i.tyku = 2, _o0i.kaih = 1), !_o0i.exists()) return _o0h;
            var _o0j = _o0f.get_slotnums(337);
            return _o0h = _o0i.multiply(_o0j);
        };
    },
    63406: (_o0k, _o0l, _o0m) => {
        'use strict';
        var _o0n = null;
        defineModule(_o0l);
        Object.defineProperty(_o0l, '__esModule', {
            'value': true
        }), _o0l.getSlot338PersonalEffect = void 0;
        var _o0o = _o0m(74496);
        _o0l.getSlot338PersonalEffect = function(_o0p) {
            var _o0q = null,
                _o0r = new _o0o.SlotItemEffectModel(),
                _o0s = new _o0o.SlotItemEffectModel();
            if (277 == _o0p.ship_id || 278 == _o0p.ship_id ? (_o0s.houg = 1, _o0s.tyku = 1, _o0s.kaih = 2) : 594 == _o0p.ship_id || 646 == _o0p.ship_id || 698 == _o0p.ship_id ? (_o0s.houg = 1, _o0s.tyku = 2, _o0s.kaih = 3) : 599 != _o0p.ship_id && 610 != _o0p.ship_id || (_o0s.houg = 4, _o0s.tyku = 3, _o0s.kaih = 4), !_o0s.exists()) return _o0r;
            var _o0t = _o0p.get_slotnums(338);
            return _o0r = _o0s.multiply(_o0t);
        };
    },
    66373: (_o0u, _o0v, _o0w) => {
        'use strict';
        var _o0x = null;
        defineModule(_o0v);
        Object.defineProperty(_o0v, '__esModule', {
            'value': true
        }), _o0v.getSlot339PersonalEffect = void 0;
        var _o0y = _o0w(74496);
        _o0v.getSlot339PersonalEffect = function(_o0z) {
            var _o10 = null,
                _o11 = new _o0y.SlotItemEffectModel(),
                _o12 = new _o0y.SlotItemEffectModel();
            if (277 == _o0z.ship_id || 278 == _o0z.ship_id ? (_o12.houg = 1, _o12.tyku = 2, _o12.kaih = 2) : 594 == _o0z.ship_id || 646 == _o0z.ship_id || 698 == _o0z.ship_id ? (_o12.houg = 1, _o12.tyku = 3, _o12.kaih = 4) : 599 != _o0z.ship_id && 610 != _o0z.ship_id || (_o12.houg = 6, _o12.tyku = 4, _o12.kaih = 5), !_o12.exists()) return _o11;
            var _o13 = _o0z.get_slotnums(339);
            return _o11 = _o12.multiply(_o13);
        };
    },
    19707: (_o14, _o15, _o16) => {
        'use strict';
        var _o17 = null;
        defineModule(_o15);
        Object.defineProperty(_o15, '__esModule', {
            'value': true
        }), _o15.getSlot340PersonalEffect = void 0;
        var _o18 = _o16(74496);
        _o15.getSlot340PersonalEffect = function(_o19) {
            var _o1a = null,
                _o1b = new _o18.SlotItemEffectModel(),
                _o1c = new _o18.SlotItemEffectModel();
            if ('ガリバルディ' != _o19.yomi && 'アブルッツィ' != _o19.yomi || (_o1c.houg = 1, _o1c.tyku = 1, _o1c.kaih = 1), !_o1c.exists()) return _o1b;
            var _o1d = _o19.get_slotnums(340);
            return _o1b = _o1c.multiply(_o1d);
        };
    },
    63978: (_o1e, _o1f, _o1g) => {
        'use strict';
        var _o1h = null;
        defineModule(_o1f);
        Object.defineProperty(_o1f, '__esModule', {
            'value': true
        }), _o1f.getSlot341PersonalEffect = void 0;
        var _o1i = _o1g(74496);
        _o1f.getSlot341PersonalEffect = function(_o1j) {
            var _o1k = null,
                _o1l = new _o1i.SlotItemEffectModel(),
                _o1m = new _o1i.SlotItemEffectModel();
            if ('ガリバルディ' == _o1j.yomi || 'アブルッツィ' == _o1j.yomi ? (_o1m.houg = 2, _o1m.tyku = 1, _o1m.kaih = 1) : 'ゴトランド' == _o1j.yomi && (_o1m.houg = 1, _o1m.tyku = 1, _o1m.kaih = 1), !_o1m.exists()) return _o1l;
            var _o1n = _o1j.get_slotnums(341);
            return _o1l = _o1m.multiply(_o1n);
        };
    },
    92382: (_o1o, _o1p, _o1q) => {
        'use strict';
        var _o1r = null;
        defineModule(_o1p);
        Object.defineProperty(_o1p, '__esModule', {
            'value': true
        }), _o1p.getSlot342PersonalEffect = void 0;
        var _o1s = _o1q(74496);
        _o1p.getSlot342PersonalEffect = function(_o1t) {
            var _o1u = null,
                _o1v = new _o1s.SlotItemEffectModel(),
                _o1w = new _o1s.SlotItemEffectModel();
            if (277 == _o1t.ship_id || 278 == _o1t.ship_id || 461 == _o1t.ship_id || 466 == _o1t.ship_id || 462 == _o1t.ship_id || 467 == _o1t.ship_id ? _o1w.houg = 1 : 594 == _o1t.ship_id || 646 == _o1t.ship_id || 698 == _o1t.ship_id ? (_o1w.houg = 2, _o1w.tyku = 1, _o1w.kaih = 1) : 599 != _o1t.ship_id && 610 != _o1t.ship_id || (_o1w.houg = 3, _o1w.tyku = 2, _o1w.kaih = 2), !_o1w.exists()) return _o1v;
            var _o1x = _o1t.get_slotnums(342);
            return _o1v = _o1w.multiply(_o1x);
        };
    },
    78415: (_o1y, _o1z, _o20) => {
        'use strict';
        var _o21 = null;
        defineModule(_o1z);
        Object.defineProperty(_o1z, '__esModule', {
            'value': true
        }), _o1z.getSlot343PersonalEffect = void 0;
        var _o22 = _o20(74496);
        _o1z.getSlot343PersonalEffect = function(_o23) {
            var _o24 = null,
                _o25 = new _o22.SlotItemEffectModel(),
                _o26 = new _o22.SlotItemEffectModel();
            if (277 == _o23.ship_id || 278 == _o23.ship_id ? _o26.houg = 2 : 461 == _o23.ship_id || 466 == _o23.ship_id || 462 == _o23.ship_id || 467 == _o23.ship_id ? _o26.houg = 1 : 594 == _o23.ship_id || 646 == _o23.ship_id || 698 == _o23.ship_id ? (_o26.houg = 3, _o26.tyku = 2, _o26.kaih = 1) : 599 != _o23.ship_id && 610 != _o23.ship_id || (_o26.houg = 5, _o26.tyku = 3, _o26.kaih = 3), !_o26.exists()) return _o25;
            var _o27 = _o23.get_slotnums(343);
            return _o25 = _o26.multiply(_o27);
        };
    },
    23090: (_o28, _o29, _o2a) => {
        'use strict';
        var _o2b = null;
        defineModule(_o29);
        Object.defineProperty(_o29, '__esModule', {
            'value': true
        }), _o29.getSlot344PersonalEffect = void 0;
        var _o2c = _o2a(74496);
        _o29.getSlot344PersonalEffect = function(_o2d) {
            var _o2e = null,
                _o2f = new _o2c.SlotItemEffectModel(),
                _o2g = new _o2c.SlotItemEffectModel();
            if (599 == _o2d.ship_id || 610 == _o2d.ship_id ? _o2g.houg = 3 : 555 == _o2d.ship_id || 560 == _o2d.ship_id ? (_o2g.houg = 2, _o2g.tais = 2) : 318 == _o2d.ship_id ? (_o2g.houg = 4, _o2g.tais = 1) : 282 == _o2d.ship_id ? (_o2g.houg = 2, _o2g.tais = 1) : 888 == _o2d.ship_id ? (_o2g.houg = 4, _o2g.tais = 2) : 883 == _o2d.ship_id && (_o2g.houg = 5, _o2g.tais = 2), !_o2g.exists()) return _o2f;
            var _o2h = _o2d.get_slotnums(344);
            return _o2f = _o2g.multiply(_o2h);
        };
    },
    18776: (_o2i, _o2j, _o2k) => {
        'use strict';
        var _o2l = null;
        defineModule(_o2j);
        Object.defineProperty(_o2j, '__esModule', {
            'value': true
        }), _o2j.getSlot345PersonalEffect = void 0;
        var _o2m = _o2k(74496);
        _o2j.getSlot345PersonalEffect = function(_o2n) {
            var _o2o = null,
                _o2p = new _o2m.SlotItemEffectModel(),
                _o2q = new _o2m.SlotItemEffectModel();
            if (599 == _o2n.ship_id || 610 == _o2n.ship_id ? (_o2q.houg = 3, _o2q.kaih = 1) : 555 == _o2n.ship_id || 560 == _o2n.ship_id ? (_o2q.houg = 3, _o2q.tais = 2, _o2q.kaih = 2) : 318 == _o2n.ship_id ? (_o2q.houg = 5, _o2q.tais = 1, _o2q.kaih = 2) : 282 == _o2n.ship_id ? (_o2q.houg = 3, _o2q.tais = 1, _o2q.kaih = 1) : 888 == _o2n.ship_id ? (_o2q.houg = 4, _o2q.tais = 2, _o2q.kaih = 2) : 883 == _o2n.ship_id && (_o2q.houg = 5, _o2q.tais = 2, _o2q.kaih = 3), !_o2q.exists()) return _o2p;
            var _o2r = _o2n.get_slotnums(345);
            return _o2p = _o2q.multiply(_o2r);
        };
    },
    89058: (_o2s, _o2t, _o2u) => {
        'use strict';
        var _o2v = null;
        defineModule(_o2t);
        Object.defineProperty(_o2t, '__esModule', {
            'value': true
        }), _o2t.getSlot346PersonalEffect = void 0;
        var _o2w = _o2u(74496);
        _o2t.getSlot346PersonalEffect = function(_o2x) {
            var _o2y = null,
                _o2z = new _o2w.SlotItemEffectModel();
            return 'やましおまる' == _o2x.yomi && (_o2z.kaih += 1, _o2z.tais += 1), _o2z;
        };
    },
    84372: (_o30, _o31, _o32) => {
        'use strict';
        var _o33 = null;
        defineModule(_o31);
        Object.defineProperty(_o31, '__esModule', {
            'value': true
        }), _o31.getSlot347PersonalEffect = void 0;
        var _o34 = _o32(74496);
        _o31.getSlot347PersonalEffect = function(_o35) {
            var _o36 = null,
                _o37 = new _o34.SlotItemEffectModel();
            return 'やましおまる' == _o35.yomi && (_o37.kaih += 2, _o37.tais += 2), _o37;
        };
    },
    39656: (_o38, _o39, _o3a) => {
        'use strict';
        var _o3b = null;
        defineModule(_o39);
        Object.defineProperty(_o39, '__esModule', {
            'value': true
        }), _o39.getSlot356_357PersonalEffect = void 0;
        var _o3c = _o3a(74496);
        _o39.getSlot356_357PersonalEffect = function(_o3d) {
            var _o3e = null,
                _o3f = new _o3c.SlotItemEffectModel(),
                _o3g = new _o3c.SlotItemEffectModel();
            if (95 == _o3d.ctype ? _o3g.houg = 2 : 9 == _o3d.ctype && (_o3g.houg = 1), !_o3g.exists()) return _o3f;
            var _o3h = _o3d.get_slotnums(356) + _o3d.get_slotnums(357);
            return _o3f = _o3g.multiply(_o3h);
        };
    },
    66039: (_o3i, _o3j, _o3k) => {
        'use strict';
        var _o3l = null;
        defineModule(_o3j);
        Object.defineProperty(_o3j, '__esModule', {
            'value': true
        }), _o3j.getSlot358PersonalEffect = void 0;
        var _o3m = _o3k(74496);
        _o3j.getSlot358PersonalEffect = function(_o3n) {
            var _o3o = null,
                _o3p = new _o3m.SlotItemEffectModel(),
                _o3q = new _o3m.SlotItemEffectModel();
            if ('アメリカ' != _o3n.getCountryName() && 67 != _o3n.ctype && 78 != _o3n.ctype && 82 != _o3n.ctype && 88 != _o3n.ctype && 108 != _o3n.ctype && 112 != _o3n.ctype) return _o3p;
            _o3q.houg += 1, _o3q.kaih += 1, _o3q.tyku += 1, 95 == _o3n.ctype && (_o3q.houg += 1, _o3q.kaih += 2, _o3q.tyku += 2);
            var _o3r = _o3n.get_slotnums(358);
            return _o3p = _o3q.multiply(_o3r);
        };
    },
    64679: (_o3s, _o3t, _o3u) => {
        'use strict';
        var _o3v = null;
        defineModule(_o3t);
        Object.defineProperty(_o3t, '__esModule', {
            'value': true
        }), _o3t.getSlot359PersonalEffect = void 0;
        var _o3w = _o3u(74496);
        _o3t.getSlot359PersonalEffect = function(_o3x) {
            var _o3y = null,
                _o3z = new _o3w.SlotItemEffectModel(),
                _o40 = new _o3w.SlotItemEffectModel();
            if ('パース' == _o3x.yomi ? (_o40.houg = 2, _o40.tyku = 2, _o40.kaih = 1) : 'ゆうばり' == _o3x.yomi && (_o40.houg = 1, _o40.tyku = 1, _o40.kaih = 1), 622 != _o3x.ship_id && 623 != _o3x.ship_id && 624 != _o3x.ship_id || (_o40.houg += 1, _o40.tyku += 1), !_o40.exists()) return _o3z;
            var _o41 = _o3x.get_slotnums(359);
            return _o3z = _o40.multiply(_o41);
        };
    },
    69954: (_o42, _o43, _o44) => {
        'use strict';
        var _o45 = null;
        defineModule(_o43);
        Object.defineProperty(_o43, '__esModule', {
            'value': true
        }), _o43.getSlot35PersonalEffect = void 0;
        var _o46 = _o44(74496);
        _o43.getSlot35PersonalEffect = function(_o47) {
            var _o48 = null,
                _o49 = new _o46.SlotItemEffectModel(),
                _o4a = new _o46.SlotItemEffectModel();
            return 149 == _o47.ship_id || 591 == _o47.ship_id || 592 == _o47.ship_id || 694 == _o47.ship_id ? (_o4a.houg += 1, _o4a.tyku += 1) : 150 == _o47.ship_id ? _o4a.tyku += 1 : 151 == _o47.ship_id || 593 == _o47.ship_id || 954 == _o47.ship_id ? (_o4a.tyku += 1, _o4a.kaih += 1) : 152 == _o47.ship_id && (_o4a.houg += 1), _o4a.exists() ? _o49 = _o4a.multiply(1) : _o49;
        };
    },
    95953: (_o4b, _o4c, _o4d) => {
        'use strict';
        var _o4e = null;
        defineModule(_o4c);
        Object.defineProperty(_o4c, '__esModule', {
            'value': true
        }), _o4c.getSlot360_361PersonalEffect = void 0;
        var _o4f = _o4d(74496);
        _o4c.getSlot360_361PersonalEffect = function(_o4g) {
            var _o4h = null,
                _o4i = new _o4f.SlotItemEffectModel(),
                _o4j = new _o4f.SlotItemEffectModel();
            if ('デ・ロイテル' == _o4g.yomi ? (_o4j.houg = 2, _o4j.tyku = 2, _o4j.kaih = 1) : 'ゴトランド' == _o4g.yomi && (_o4j.houg = 2, _o4j.tyku = 1, _o4j.kaih = 1), 41 == _o4g.ctype && (_o4j.houg = 1, _o4j.tyku = 1), !_o4j.exists()) return _o4i;
            var _o4k = _o4g.get_slotnums(360) + _o4g.get_slotnums(361);
            return _o4i = _o4j.multiply(_o4k);
        };
    },
    86384: (_o4l, _o4m, _o4n) => {
        'use strict';
        var _o4o = null;
        defineModule(_o4m);
        Object.defineProperty(_o4m, '__esModule', {
            'value': true
        }), _o4m.getSlot362_363PersonalEffect = void 0;
        var _o4p = _o4n(74496);
        _o4m.getSlot362_363PersonalEffect = function(_o4q) {
            var _o4r = null,
                _o4s = new _o4p.SlotItemEffectModel(),
                _o4t = new _o4p.SlotItemEffectModel(),
                _o4u = false;
            if (99 == _o4q.ctype ? (_o4t.houg = 1, _o4t.tyku = 2, _o4t.kaih = 1, _o4u = true) : 34 == _o4q.ctype || 21 == _o4q.ctype ? (_o4t.houg = -3, _o4t.tyku = -3, _o4t.kaih = -8, _o4u = true) : 4 == _o4q.ctype || 20 == _o4q.ctype || 16 == _o4q.ctype ? (_o4t.houg = -3, _o4t.tyku = -2, _o4t.kaih = -6, _o4u = true) : 89 == _o4q.ctype || 56 == _o4q.ctype ? (_o4t.houg = -2, _o4t.tyku = -1, _o4t.kaih = -4, _o4u = true) : 52 != _o4q.ctype && 41 != _o4q.ctype && 98 != _o4q.ctype || (_o4t.tyku = -1, _o4t.kaih = -2, _o4u = true), 'アメリカ' == _o4q.getCountryName() && (_o4t.tyku += 1, _o4t.kaih += 1, _o4u = true), 0 == _o4u) return _o4s;
            var _o4v = _o4q.get_slotnums(362) + _o4q.get_slotnums(363);
            return _o4s = _o4t.multiply(_o4v);
        };
    },
    65345: (_o4w, _o4x, _o4y) => {
        'use strict';
        var _o4z = null;
        defineModule(_o4x);
        Object.defineProperty(_o4x, '__esModule', {
            'value': true
        }), _o4x.getSlot364PersonalEffect = void 0;
        var _o50 = _o4y(74496);
        _o4x.getSlot364PersonalEffect = function(_o51) {
            var _o52 = null;
            new _o50.SlotItemEffectModel();
            var _o53 = new _o50.SlotItemEffectModel();
            623 == _o51.ship_id || 586 == _o51.ship_id || 119 == _o51.ship_id || 118 == _o51.ship_id || 657 == _o51.ship_id || 506 == _o51.ship_id || 668 == _o51.ship_id || 507 == _o51.ship_id ? (_o53.raig = 1, _o53.kaih = -2, 119 == _o51.ship_id ? _o53.raig += 1 : 507 == _o51.ship_id ? _o53.raig += 2 : 623 == _o51.ship_id && (_o53.houg += 1, _o53.raig += 3)) : (_o53.houg = -1, _o53.kaih = -7);
            var _o54 = _o51.get_slotnums(364);
            return _o53.multiply(_o54);
        };
    },
    46514: (_o55, _o56, _o57) => {
        'use strict';
        var _o58 = null;
        defineModule(_o56);
        Object.defineProperty(_o56, '__esModule', {
            'value': true
        }), _o56.getSlot365PersonalEffect = void 0;
        var _o59 = _o57(74496);
        _o56.getSlot365PersonalEffect = function(_o5a) {
            var _o5b = null,
                _o5c = new _o59.SlotItemEffectModel(),
                _o5d = new _o59.SlotItemEffectModel(),
                _o5e = false;
            return 37 != _o5a.ctype && 19 != _o5a.ctype && 2 != _o5a.ctype && 26 != _o5a.ctype && 6 != _o5a.ctype || (_o5d.houg += 1, _o5e = true), 136 != _o5a.ship_id && 148 != _o5a.ship_id && 546 != _o5a.ship_id && 541 != _o5a.ship_id && 573 != _o5a.ship_id && 911 != _o5a.ship_id && 916 != _o5a.ship_id && 593 != _o5a.ship_id || (_o5d.houg += 1, _o5e = true), 591 != _o5a.ship_id && 592 != _o5a.ship_id && 954 != _o5a.ship_id && 694 != _o5a.ship_id || (_o5d.houg += 2, _o5e = true), 0 == _o5e ? _o5c : _o5c = _o5d.multiply(1);
        };
    },
    81976: (_o5f, _o5g, _o5h) => {
        'use strict';
        var _o5i = null;
        defineModule(_o5g);
        Object.defineProperty(_o5g, '__esModule', {
            'value': true
        }), _o5g.getSlot367PersonalEffect = void 0;
        var _o5j = _o5h(74496);
        _o5g.getSlot367PersonalEffect = function(_o5k) {
            var _o5l = null,
                _o5m = new _o5j.SlotItemEffectModel(),
                _o5n = new _o5j.SlotItemEffectModel(),
                _o5o = false;
            if ('ゴトランド' == _o5k.yomi && (_o5n.houg += 2, _o5n.tais += 1, _o5n.kaih += 1, _o5n.saku += 1, _o5o = true), 70 == _o5k.ctype ? (_o5n.houg += 1, _o5n.tais += 1, _o5n.kaih += 1, _o5n.saku += 1, _o5o = true) : 72 == _o5k.ctype || 62 == _o5k.ctype ? (_o5n.houg += 1, _o5n.kaih += 1, _o5n.saku += 1, _o5o = true) : 67 != _o5k.ctype && 78 != _o5k.ctype && 82 != _o5k.ctype && 88 != _o5k.ctype && 108 != _o5k.ctype && 112 != _o5k.ctype || (_o5n.houg += 2, _o5n.kaih += 2, _o5n.saku += 2, _o5o = true), 0 == _o5o) return _o5m;
            var _o5p = _o5k.get_slotnums(367);
            return _o5m = _o5n.multiply(_o5p);
        };
    },
    89331: (_o5q, _o5r, _o5s) => {
        'use strict';
        var _o5t = null;
        defineModule(_o5r);
        Object.defineProperty(_o5r, '__esModule', {
            'value': true
        }), _o5r.getSlot368PersonalEffect = void 0;
        var _o5u = _o5s(74496);
        _o5r.getSlot368PersonalEffect = function(_o5v) {
            var _o5w = null,
                _o5x = new _o5u.SlotItemEffectModel(),
                _o5y = new _o5u.SlotItemEffectModel(),
                _o5z = false;
            if ('ゴトランド' == _o5v.yomi && (_o5y.houg = 4, _o5y.tais = 3, _o5y.kaih = 2, _o5y.saku = 3, _o5z = true, 630 == _o5v.ship_id && (_o5x.houg += 2, _o5x.raig += 2, _o5x.kaih += 1, _o5x.saku += 1)), 70 == _o5v.ctype ? (_o5y.houg = 2, _o5y.tais = 3, _o5y.kaih = 1, _o5y.saku = 2, _o5z = true) : 72 == _o5v.ctype || 62 == _o5v.ctype ? (_o5y.houg += 1, _o5y.tais += 2, _o5y.kaih += 1, _o5y.saku += 2, _o5z = true) : 67 != _o5v.ctype && 78 != _o5v.ctype && 82 != _o5v.ctype && 88 != _o5v.ctype && 108 != _o5v.ctype && 112 != _o5v.ctype || (_o5y.houg += 2, _o5y.tais += 2, _o5y.kaih += 2, _o5y.saku += 2, _o5z = true), 0 == _o5z) return _o5x;
            var _o60 = _o5v.get_slotnums(368);
            return _o5x.add(_o5y.multiply(_o60)), _o5x;
        };
    },
    73973: (_o61, _o62, _o63) => {
        'use strict';
        var _o64 = null;
        defineModule(_o62);
        Object.defineProperty(_o62, '__esModule', {
            'value': true
        }), _o62.getSlot369PersonalEffect = void 0;
        var _o65 = _o63(74496);
        _o62.getSlot369PersonalEffect = function(_o66) {
            var _o67 = null,
                _o68 = new _o65.SlotItemEffectModel(),
                _o69 = new _o65.SlotItemEffectModel(),
                _o6a = false;
            if ('ゴトランド' == _o66.yomi && (_o69.houg = 5, _o69.tais = 4, _o69.kaih = 4, _o69.saku = 3, _o6a = true, 630 == _o66.ship_id && (_o68.houg += 3, _o68.raig += 3, _o68.kaih += 2, _o68.saku += 2)), 70 == _o66.ctype ? (_o69.houg += 3, _o69.tais += 3, _o69.kaih += 2, _o69.saku += 3, _o6a = true) : 72 == _o66.ctype || 62 == _o66.ctype ? (_o69.houg += 2, _o69.tais += 2, _o69.kaih += 1, _o69.saku += 2, _o6a = true) : 67 != _o66.ctype && 78 != _o66.ctype && 82 != _o66.ctype && 88 != _o66.ctype && 108 != _o66.ctype && 112 != _o66.ctype || (_o69.houg += 2, _o69.tais += 2, _o69.kaih += 2, _o69.saku += 2, _o6a = true), 0 == _o6a) return _o68;
            var _o6b = _o66.get_slotnums(369);
            return _o68.add(_o69.multiply(_o6b)), _o68;
        };
    },
    21178: (_o6c, _o6d, _o6e) => {
        'use strict';
        var _o6f = null;
        defineModule(_o6d);
        Object.defineProperty(_o6d, '__esModule', {
            'value': true
        }), _o6d.getSlot370PersonalEffect = void 0;
        var _o6g = _o6e(74496);
        _o6d.getSlot370PersonalEffect = function(_o6h) {
            var _o6i = null,
                _o6j = new _o6g.SlotItemEffectModel(),
                _o6k = new _o6g.SlotItemEffectModel(),
                _o6l = false;
            if ('ゴトランド' == _o6h.yomi && (_o6k.houg = 1, _o6k.tais = 3, _o6k.kaih = 1, _o6k.saku = 2, _o6l = true), 70 == _o6h.ctype ? (_o6k.houg += 1, _o6k.tais += 3, _o6k.kaih += 1, _o6k.saku += 1, _o6l = true) : 72 == _o6h.ctype || 62 == _o6h.ctype ? (_o6k.houg += 1, _o6k.tais += 2, _o6k.kaih += 1, _o6k.saku += 1, _o6l = true) : 67 != _o6h.ctype && 78 != _o6h.ctype && 82 != _o6h.ctype && 88 != _o6h.ctype && 108 != _o6h.ctype && 112 != _o6h.ctype || (_o6k.houg += 2, _o6k.tais += 3, _o6k.kaih += 2, _o6k.saku += 2, _o6l = true, 'ウォースパイト' == _o6h.yomi ? (_o6j.houg += 4, _o6j.kaih += 1, _o6j.saku += 1) : 'ヴァリアント' == _o6h.yomi && (_o6j.houg += 3, _o6j.kaih += 2, _o6j.saku += 1)), 0 == _o6l) return _o6j;
            var _o6m = _o6h.get_slotnums(370);
            return _o6j.add(_o6k.multiply(_o6m)), _o6j;
        };
    },
    5079: (_o6n, _o6o, _o6p) => {
        'use strict';
        var _o6q = null;
        defineModule(_o6o);
        Object.defineProperty(_o6o, '__esModule', {
            'value': true
        }), _o6o.getSlot371PersonalEffect = void 0;
        var _o6r = _o6p(74496);
        _o6o.getSlot371PersonalEffect = function(_o6s) {
            var _o6t = null,
                _o6u = new _o6r.SlotItemEffectModel(),
                _o6v = new _o6r.SlotItemEffectModel(),
                _o6w = false;
            if ('ゴトランド' == _o6s.yomi && (_o6v.houg = 4, _o6v.tais = 2, _o6v.kaih = 3, _o6v.saku = 6, _o6w = true, 630 == _o6s.ship_id && (_o6u.houg += 2, _o6u.kaih += 2, _o6u.saku += 3)), 70 == _o6s.ctype ? (_o6v.houg += 2, _o6v.tais += 1, _o6v.kaih += 2, _o6v.saku += 4, _o6w = true) : 79 == _o6s.ctype ? (_o6v.houg += 2, _o6v.kaih += 1, _o6v.saku += 3, _o6w = true) : 67 != _o6s.ctype && 78 != _o6s.ctype && 82 != _o6s.ctype && 88 != _o6s.ctype && 108 != _o6s.ctype && 112 != _o6s.ctype || (_o6v.houg += 3, _o6v.tais += 1, _o6v.kaih += 2, _o6v.saku += 3, _o6w = true, 88 == _o6s.ctype && (_o6u.houg += 3, _o6u.kaih += 2, _o6u.saku += 2)), 0 == _o6w) return _o6u;
            var _o6x = _o6s.get_slotnums(371);
            return _o6u.add(_o6v.multiply(_o6x)), _o6u;
        };
    },
    95014: (_o6y, _o6z, _o70) => {
        'use strict';
        var _o71 = null;
        defineModule(_o6z);
        Object.defineProperty(_o6z, '__esModule', {
            'value': true
        }), _o6z.getSlot372PersonalEffect = void 0;
        var _o72 = _o70(74496);
        _o6z.getSlot372PersonalEffect = function(_o73) {
            var _o74 = null,
                _o75 = new _o72.SlotItemEffectModel(),
                _o76 = false,
                _o77 = new _o72.SlotItemEffectModel();
            if ('しょうかく' == _o73.yomi || 'ずいかく' == _o73.yomi || 'たいほう' == _o73.yomi ? (_o77.houg += 1, _o76 = true, _o75.raig += 1) : 'じゅんよう' != _o73.yomi && 'ひよう' != _o73.yomi || (_o77.houg += 1, _o76 = true), 108 == _o73.ship_id || 109 == _o73.ship_id || 291 == _o73.ship_id || 292 == _o73.ship_id || 296 == _o73.ship_id || 297 == _o73.ship_id ? (_o77.houg += 1, _o76 = true) : 116 == _o73.ship_id || 74 == _o73.ship_id || 117 == _o73.ship_id || 282 == _o73.ship_id || 185 == _o73.ship_id ? (_o77.tais += 1, _o76 = true) : 560 == _o73.ship_id || 555 == _o73.ship_id || 318 == _o73.ship_id ? (_o77.tais += 1, _o76 = true, _o75.raig += 1) : 508 == _o73.ship_id || 509 == _o73.ship_id ? (_o77.houg += 1, _o76 = true) : 883 != _o73.ship_id && 888 != _o73.ship_id || (_o77.houg += 2, _o77.tais += 1, _o76 = true, _o75.raig += 2), 0 == _o76) return _o75;
            var _o78 = _o73.get_slotnums(372);
            return _o75.add(_o77.multiply(_o78)), _o75;
        };
    },
    53099: (_o79, _o7a, _o7b) => {
        'use strict';
        var _o7c = null;
        defineModule(_o7a);
        Object.defineProperty(_o7a, '__esModule', {
            'value': true
        }), _o7a.getSlot373PersonalEffect = void 0;
        var _o7d = _o7b(74496);
        _o7a.getSlot373PersonalEffect = function(_o7e) {
            var _o7f = null,
                _o7g = new _o7d.SlotItemEffectModel(),
                _o7h = new _o7d.SlotItemEffectModel(),
                _o7i = false;
            if ('しょうかく' == _o7e.yomi ? (_o7h.houg += 2, _o7i = true, _o7g.raig += 2, _o7g.kaih += 2) : 'ずいかく' == _o7e.yomi ? (_o7h.houg += 1, _o7i = true, _o7g.raig += 2, _o7g.kaih += 3) : 'たいほう' == _o7e.yomi ? (_o7h.houg += 1, _o7i = true, _o7g.raig += 2, _o7g.kaih += 2) : 'じゅんよう' != _o7e.yomi && 'ひよう' != _o7e.yomi || (_o7h.houg += 1, _o7i = true, _o7g.raig += 1, _o7g.kaih += 1), 108 == _o7e.ship_id || 109 == _o7e.ship_id ? (_o7h.houg += 1, _o7i = true) : 291 == _o7e.ship_id || 292 == _o7e.ship_id ? (_o7h.houg += 1, _o7i = true, _o7g.raig += 1) : 296 == _o7e.ship_id || 297 == _o7e.ship_id ? (_o7h.houg += 1, _o7i = true, _o7g.raig += 1, _o7g.kaih += 1) : 116 == _o7e.ship_id || 74 == _o7e.ship_id ? (_o7h.tais += 1, _o7i = true) : 117 == _o7e.ship_id || 282 == _o7e.ship_id || 185 == _o7e.ship_id ? (_o7h.houg += 1, _o7h.tais += 1, _o7i = true, _o7g.raig += 1) : 560 == _o7e.ship_id || 555 == _o7e.ship_id || 318 == _o7e.ship_id ? (_o7h.houg += 1, _o7h.tais += 2, _o7i = true, _o7g.raig += 1, _o7g.kaih += 1) : 508 == _o7e.ship_id || 509 == _o7e.ship_id ? (_o7h.houg += 1, _o7i = true, _o7g.raig += 2, _o7g.kaih += 2) : 888 == _o7e.ship_id ? (_o7h.houg += 2, _o7h.tais += 2, _o7i = true, _o7g.raig += 2, _o7g.kaih += 2) : 883 == _o7e.ship_id && (_o7h.houg += 1, _o7h.tais += 2, _o7i = true, _o7g.raig += 3, _o7g.kaih += 4), 0 == _o7i) return _o7g;
            var _o7j = _o7e.get_slotnums(373);
            return _o7g.add(_o7h.multiply(_o7j)), _o7g;
        };
    },
    76201: (_o7k, _o7l, _o7m) => {
        'use strict';
        var _o7n = null;
        defineModule(_o7l);
        Object.defineProperty(_o7l, '__esModule', {
            'value': true
        }), _o7l.getSlot374PersonalEffect = void 0;
        var _o7o = _o7m(74496);
        _o7l.getSlot374PersonalEffect = function(_o7p) {
            var _o7q = null,
                _o7r = new _o7o.SlotItemEffectModel(),
                _o7s = new _o7o.SlotItemEffectModel(),
                _o7t = false;
            if ('しょうかく' == _o7p.yomi ? (_o7s.houg += 3, _o7t = true, _o7r.raig += 3, _o7r.kaih += 3) : 'ずいかく' == _o7p.yomi ? (_o7s.houg += 2, _o7t = true, _o7r.raig += 3, _o7r.kaih += 4) : 'たいほう' == _o7p.yomi ? (_o7s.houg += 2, _o7t = true, _o7r.raig += 3, _o7r.kaih += 2) : 'じゅんよう' != _o7p.yomi && 'ひよう' != _o7p.yomi || (_o7s.houg += 1, _o7t = true, _o7r.raig += 2, _o7r.kaih += 2), 108 == _o7p.ship_id || 109 == _o7p.ship_id ? (_o7s.houg += 1, _o7t = true, _o7r.raig += 1) : 291 == _o7p.ship_id || 292 == _o7p.ship_id ? (_o7s.houg += 1, _o7s.tais += 1, _o7t = true, _o7r.raig += 1) : 296 == _o7p.ship_id || 297 == _o7p.ship_id ? (_o7s.houg += 1, _o7s.tais += 1, _o7t = true, _o7r.raig += 1, _o7r.kaih += 1) : 116 == _o7p.ship_id || 74 == _o7p.ship_id ? (_o7s.houg += 1, _o7s.tais += 1, _o7t = true) : 117 == _o7p.ship_id || 282 == _o7p.ship_id || 185 == _o7p.ship_id ? (_o7s.houg += 1, _o7s.tais += 2, _o7t = true, _o7r.raig += 1, _o7r.kaih += 1) : 560 == _o7p.ship_id || 555 == _o7p.ship_id || 318 == _o7p.ship_id ? (_o7s.houg += 1, _o7s.tais += 3, _o7t = true, _o7r.raig += 1, _o7r.kaih += 2) : 508 == _o7p.ship_id || 509 == _o7p.ship_id ? (_o7s.houg += 1, _o7s.tais += 2, _o7t = true, _o7r.raig += 2, _o7r.kaih += 3) : 888 == _o7p.ship_id ? (_o7s.houg += 3, _o7s.tais += 3, _o7t = true, _o7r.raig += 2, _o7r.kaih += 3) : 883 == _o7p.ship_id && (_o7s.houg += 2, _o7s.tais += 3, _o7t = true, _o7r.raig += 3, _o7r.kaih += 5), 0 == _o7t) return _o7r;
            var _o7u = _o7p.get_slotnums(374);
            return _o7r.add(_o7s.multiply(_o7u)), _o7r;
        };
    },
    24931: (_o7v, _o7w, _o7x) => {
        'use strict';
        var _o7y = null;
        defineModule(_o7w);
        Object.defineProperty(_o7w, '__esModule', {
            'value': true
        }), _o7w.getSlot375PersonalEffect = void 0;
        var _o7z = _o7x(74496);
        _o7w.getSlot375PersonalEffect = function(_o80) {
            var _o81 = null,
                _o82 = new _o7z.SlotItemEffectModel(),
                _o83 = new _o7z.SlotItemEffectModel(),
                _o84 = false;
            if (69 != _o80.ctype && 83 != _o80.ctype && 84 != _o80.ctype && 105 != _o80.ctype && 116 != _o80.ctype && 118 != _o80.ctype || (_o83.tyku += 3, _o83.houg += 3, _o83.kaih += 3, _o83.tais += 3, _o84 = true), 'かが' == _o80.yomi && (_o83.tyku += 1, _o83.houg += 1, _o83.kaih += 1, _o83.tais += 1, _o84 = true), 0 == _o84) return _o82;
            var _o85 = _o80.get_slotnums(375);
            return _o82.add(_o83.multiply(_o85)), _o82;
        };
    },
    60978: (_o86, _o87, _o88) => {
        'use strict';
        var _o89 = null;
        defineModule(_o87);
        Object.defineProperty(_o87, '__esModule', {
            'value': true
        }), _o87.getSlot376PersonalEffect = void 0;
        var _o8a = _o88(74496);
        _o87.getSlot376PersonalEffect = function(_o8b) {
            var _o8c = null,
                _o8d = new _o8a.SlotItemEffectModel(),
                _o8e = new _o8a.SlotItemEffectModel(),
                _o8f = false;
            if ('アメリカ' == _o8b.getCountryName() ? (_o8e.houg += 2, _o8e.raig += 4, _o8f = true) : 67 == _o8b.ctype || 78 == _o8b.ctype || 82 == _o8b.ctype || 88 == _o8b.ctype || 108 == _o8b.ctype || 112 == _o8b.ctype ? (_o8e.houg += 1, _o8e.raig += 2, _o8f = true) : 96 == _o8b.ctype && (_o8e.houg += 1, _o8e.raig += 1, _o8f = true), 0 == _o8f) return _o8d;
            var _o8g = _o8b.get_slotnums(376);
            return _o8d.add(_o8e.multiply(_o8g)), _o8d;
        };
    },
    74312: (_o8h, _o8i, _o8j) => {
        'use strict';
        var _o8k = null;
        defineModule(_o8i);
        Object.defineProperty(_o8i, '__esModule', {
            'value': true
        }), _o8i.getSlot377PersonalEffect = void 0;
        var _o8l = _o8j(74496);
        _o8i.getSlot377PersonalEffect = function(_o8m) {
            var _o8n = null,
                _o8o = new _o8l.SlotItemEffectModel();
            return 'アメリカ' == _o8m.getCountryName() ? (_o8o.tais += 2, _o8o.kaih += 1, 629 == _o8m.ship_id && (_o8o.tais += 1, _o8o.kaih += 2)) : 67 != _o8m.ctype && 78 != _o8m.ctype && 82 != _o8m.ctype && 88 != _o8m.ctype && 108 != _o8m.ctype && 112 != _o8m.ctype && 96 != _o8m.ctype || (_o8o.tais += 1, _o8o.kaih += 1), 651 != _o8m.ship_id && 656 != _o8m.ship_id || (_o8o.tais += 1, _o8o.kaih += 2), _o8o;
        };
    },
    54350: (_o8p, _o8q, _o8r) => {
        'use strict';
        var _o8s = null;
        defineModule(_o8q);
        Object.defineProperty(_o8q, '__esModule', {
            'value': true
        }), _o8q.getSlot378PersonalEffect = void 0;
        var _o8t = _o8r(74496);
        _o8q.getSlot378PersonalEffect = function(_o8u) {
            var _o8v = null,
                _o8w = new _o8t.SlotItemEffectModel();
            return 'アメリカ' == _o8u.getCountryName() ? (_o8w.tais += 3, _o8w.kaih += 1, 629 == _o8u.ship_id && (_o8w.tais += 1, _o8w.kaih += 1)) : 67 == _o8u.ctype || 78 == _o8u.ctype || 82 == _o8u.ctype || 88 == _o8u.ctype || 108 == _o8u.ctype || 112 == _o8u.ctype ? (_o8w.tais += 2, _o8w.kaih += 1) : 96 == _o8u.ctype && (_o8w.tais += 1, _o8w.kaih += 1), 651 != _o8u.ship_id && 656 != _o8u.ship_id || (_o8w.tais += 1, _o8w.kaih += 1), _o8w;
        };
    },
    26262: function(_o8x, _o8y, _o8z) {
        'use strict';
        var _o90 = null;
        var _o91 = this && this.__importDefault || function(_o92) {
            var _o93 = null;
            return _o92 && _o92.__esModule ? _o92 : {
                'default': _o92
            };
        };
        defineModule(_o8y);
        Object.defineProperty(_o8y, '__esModule', {
            'value': true
        }), _o8y.getSlot379PersonalEffect = void 0;
        var _o94 = _o8z(74496),
            _o95 = _o91(_o8z(18622));
        _o8y.getSlot379PersonalEffect = function(_o96) {
            var _o97 = null,
                _o98 = new _o94.SlotItemEffectModel(),
                _o99 = false,
                _o9a = new _o94.SlotItemEffectModel();
            if (1 == _o96.stype ? (_o9a.tyku += 2, _o9a.houg += 1, _o99 = true) : 21 != _o96.stype && 16 != _o96.stype || (_o9a.tyku += 1, _o9a.houg += 1, _o99 = true), 66 == _o96.ctype || 28 == _o96.ctype ? (_o9a.houg += 1, _o9a.tyku += 2, _o99 = true) : 101 == _o96.ctype && (_o9a.tyku += 2, _o9a.houg += 1, _o98.tyku += 2, _o98.houg += 2, _o99 = true), 'ゆら' == _o96.yomi || 'なか' == _o96.yomi || 'きぬ' == _o96.yomi || 'いすず' == _o96.yomi ? (_o9a.houg += 2, _o99 = true) : 'おおい' != _o96.yomi && 'きたかみ' != _o96.yomi || (_o9a.tyku += 2, _o9a.houg += 2, _o99 = true), 'ゆら' != _o96.yomi && 'なか' != _o96.yomi && 'きぬ' != _o96.yomi && 'いすず' != _o96.yomi && 'ゆうばり' != _o96.yomi || (_o9a.tais += 1, _o99 = true), 'てんりゅう' != _o96.yomi && 'たつた' != _o96.yomi && 'ゆうばり' != _o96.yomi || (_o9a.houg += 1, _o99 = true), 488 == _o96.ship_id ? (_o9a.tyku += 4, _o99 = true) : 220 == _o96.ship_id ? (_o9a.tyku += 3, _o99 = true) : 23 == _o96.ship_id ? (_o9a.tyku += 2, _o99 = true) : 160 == _o96.ship_id || 487 == _o96.ship_id || 141 == _o96.ship_id ? (_o9a.tyku += 3, _o99 = true) : 224 == _o96.ship_id || 289 == _o96.ship_id || 219 == _o96.ship_id || 56 == _o96.ship_id || 113 == _o96.ship_id || 22 == _o96.ship_id ? (_o9a.tyku += 2, _o99 = true) : 651 != _o96.ship_id && 656 != _o96.ship_id || (_o9a.tyku += 3, _o9a.houg += 3, 656 == _o96.ship_id && (_o9a.kaih += 3, _o9a.tais += 2), _o99 = true), 488 != _o96.ship_id && 160 != _o96.ship_id && 487 != _o96.ship_id && 141 != _o96.ship_id || (_o9a.tais += 1, _o99 = true), 477 != _o96.ship_id && 478 != _o96.ship_id && 624 != _o96.ship_id || (_o9a.tais += 2, _o99 = true), 477 != _o96.ship_id && 478 != _o96.ship_id && 624 != _o96.ship_id && 622 != _o96.ship_id || (_o9a.tyku += 2, _o99 = true), 652 != _o96.ship_id && 657 != _o96.ship_id && 547 != _o96.ship_id && 146 != _o96.ship_id || (_o98.houg += 2), 652 != _o96.ship_id && 657 != _o96.ship_id && 547 != _o96.ship_id && 146 != _o96.ship_id || (_o98.tyku += 2), _o99) {
                var _o9b = _o96.get_slotnums(379);
                _o98.add(_o9a.multiply(_o9b));
            }
            var _o9c = new _o94.SlotItemEffectModel(),
                _o9d = false;
            16 == _o96.stype || 3 == _o96.stype || 4 == _o96.stype || 21 == _o96.stype ? (_o9c.houg += 1, _o9c.kaih += 2, _o9d = true) : 1 == _o96.stype && (_o9c.houg += 1, _o9c.kaih += 4, _o9d = true), 66 == _o96.ctype || 28 == _o96.ctype || 21 == _o96.ctype || 34 == _o96.ctype ? (_o9c.houg += 2, _o9c.kaih += 3, _o9d = true) : 101 == _o96.ctype && (_o9c.houg += 4, _o9c.kaih += 3, _o9d = true), 488 == _o96.ship_id || 651 == _o96.ship_id || 656 == _o96.ship_id ? (_o9c.houg += 2, _o9c.kaih += 2, _o9d = true) : 487 == _o96.ship_id || 160 == _o96.ship_id || 141 == _o96.ship_id || 118 == _o96.ship_id || 119 == _o96.ship_id ? (_o9c.houg += 1, _o9c.kaih += 1, _o9d = true) : 652 != _o96.ship_id && 657 != _o96.ship_id && 547 != _o96.ship_id && 146 != _o96.ship_id || (_o9c.houg += 1, _o9c.kaih += 1, _o9d = true);
            var _o9e = new _o94.SlotItemEffectModel(),
                _o9f = false;
            if (656 == _o96.ship_id && (_o9e.tyku += 3, _o9e.kaih += 2, _o9f = true), _o9d || _o9f) {
                for (var _o9g = 0, _o9h = 0, _o9i = 0, _o9j = _o96.have_slot_ids(); _o9i < _o9j.length; _o9i++) {
                    var _o9k = _o9j[_o9i],
                        _o9l = _o95.default.model.slot.getMst(_o9k),
                        _o9m = _o9l.equipType;
                    12 != _o9m && 13 != _o9m || (_o9l.sakuteki >= 5 && (_o9g += _o96.get_slotnums(parseInt(_o9k))), _o9l.taiku >= 2 && (_o9h += _o96.get_slotnums(parseInt(_o9k))));
                }
                _o9d && _o9g > 0 && _o98.add(_o9c), _o9f && _o9h > 0 && _o98.add(_o9e);
            }
            return _o98;
        };
    },
    45530: function(_o9n, _o9o, _o9p) {
        'use strict';
        var _o9q = null;
        var _o9r = this && this.__importDefault || function(_o9s) {
            var _o9t = null;
            return _o9s && _o9s.__esModule ? _o9s : {
                'default': _o9s
            };
        };
        defineModule(_o9o);
        Object.defineProperty(_o9o, '__esModule', {
            'value': true
        }), _o9o.getSlot380PersonalEffect = void 0;
        var _o9u = _o9p(74496),
            _o9v = _o9r(_o9p(18622));
        _o9o.getSlot380PersonalEffect = function(_o9w) {
            var _o9x = null,
                _o9y = new _o9u.SlotItemEffectModel(),
                _o9z = false,
                _oa0 = new _o9u.SlotItemEffectModel();
            if (21 != _o9w.stype && 16 != _o9w.stype || (_oa0.tyku += 2, _oa0.houg += 1, _o9z = true), 101 == _o9w.ctype && (_oa0.tyku += 2, _oa0.houg += 1, _o9z = true, _o9y.tyku += 2, _o9y.houg += 2), 'ゆら' == _o9w.yomi || 'なか' == _o9w.yomi || 'きぬ' == _o9w.yomi || 'いすず' == _o9w.yomi ? (_oa0.houg += 2, _o9z = true) : 'おおい' != _o9w.yomi && 'きたかみ' != _o9w.yomi || (_oa0.tyku += 2, _oa0.houg += 3, _o9z = true), 'ゆら' != _o9w.yomi && 'なか' != _o9w.yomi && 'きぬ' != _o9w.yomi && 'いすず' != _o9w.yomi && 'ゆうばり' != _o9w.yomi || (_oa0.tais += 1, _o9z = true), 'てんりゅう' != _o9w.yomi && 'たつた' != _o9w.yomi && 'ゆうばり' != _o9w.yomi || (_oa0.houg += 1, _o9z = true), 488 == _o9w.ship_id ? (_oa0.tyku += 4, _o9z = true) : 220 == _o9w.ship_id ? (_oa0.tyku += 3, _o9z = true) : 23 == _o9w.ship_id ? (_oa0.tyku += 2, _o9z = true) : 160 == _o9w.ship_id || 487 == _o9w.ship_id || 141 == _o9w.ship_id ? (_oa0.tyku += 3, _o9z = true) : 224 == _o9w.ship_id || 289 == _o9w.ship_id || 219 == _o9w.ship_id || 56 == _o9w.ship_id || 113 == _o9w.ship_id || 22 == _o9w.ship_id ? (_oa0.tyku += 2, _o9z = true) : 651 == _o9w.ship_id || 656 == _o9w.ship_id ? (_oa0.tyku += 3, _oa0.houg += 3, _o9z = true) : 407 != _o9w.ship_id && 665 != _o9w.ship_id || (_oa0.houg += 2, _oa0.tyku += 2, _o9z = true, _o9y.houg += 1, _o9y.tyku += 1, _o9y.kaih += 2), 488 != _o9w.ship_id && 160 != _o9w.ship_id && 487 != _o9w.ship_id && 141 != _o9w.ship_id || (_oa0.tais += 1, _o9z = true), 477 != _o9w.ship_id && 478 != _o9w.ship_id && 624 != _o9w.ship_id || (_oa0.tais += 2, _o9z = true), 477 != _o9w.ship_id && 478 != _o9w.ship_id && 624 != _o9w.ship_id && 622 != _o9w.ship_id || (_oa0.tyku += 2, _o9z = true), 652 != _o9w.ship_id && 657 != _o9w.ship_id || (_oa0.houg += 3, _o9z = true), 547 != _o9w.ship_id && 146 != _o9w.ship_id || (_o9y.houg += 2), 652 != _o9w.ship_id && 657 != _o9w.ship_id && 547 != _o9w.ship_id && 146 != _o9w.ship_id || (_o9y.tyku += 2), _o9z) {
                var _oa1 = _o9w.get_slotnums(380);
                _o9y.add(_oa0.multiply(_oa1));
            }
            var _oa2 = new _o9u.SlotItemEffectModel(),
                _oa3 = false,
                _oa4 = new _o9u.SlotItemEffectModel(),
                _oa5 = false,
                _oa6 = false;
            if (16 != _o9w.stype && 3 != _o9w.stype && 4 != _o9w.stype && 21 != _o9w.stype || (_oa2.houg += 2, _oa2.kaih += 1, _oa3 = true), 101 == _o9w.ctype && (_oa2.houg += 4, _oa2.kaih += 3, _oa3 = true), 488 != _o9w.ship_id && 487 != _o9w.ship_id && 160 != _o9w.ship_id && 141 != _o9w.ship_id && 118 != _o9w.ship_id && 119 != _o9w.ship_id && 651 != _o9w.ship_id && 656 != _o9w.ship_id || (_oa2.houg += 1, _oa2.kaih += 2, _oa3 = true), 652 == _o9w.ship_id || 657 == _o9w.ship_id || 547 == _o9w.ship_id || 146 == _o9w.ship_id ? (_oa2.houg += 1, _oa2.kaih += 3, _oa3 = true) : 407 != _o9w.ship_id && 665 != _o9w.ship_id || (_oa6 = true, _oa3 = true, _oa2.houg += 2, _oa2.kaih += 1, _oa5 = true, _oa4.houg += 1, _oa4.tyku += 2, _oa4.kaih += 1), _oa3 || _oa6) {
                for (var _oa7 = 0, _oa8 = 0, _oa9 = 0, _oaa = _o9w.have_slot_ids(); _oa9 < _oaa.length; _oa9++) {
                    var _oab = _oaa[_oa9],
                        _oac = _o9v.default.model.slot.getMst(_oab),
                        _oad = _oac.equipType;
                    12 == _oad || 13 == _oad ? _oac.sakuteki >= 5 && (_oa7 += _o9w.get_slotnums(parseInt(_oab))) : 21 == _oad && (_oa8 += _o9w.get_slotnums(parseInt(_oab)));
                }
                _oa3 && _oa7 > 0 && _o9y.add(_oa2), _oa5 && _oa8 > 0 && _o9y.add(_oa4);
            }
            return _o9y;
        };
    },
    44053: (_oae, _oaf, _oag) => {
        'use strict';
        var _oah = null;
        defineModule(_oaf);
        Object.defineProperty(_oaf, '__esModule', {
            'value': true
        }), _oaf.getSlot381PersonalEffect = void 0;
        var _oai = _oag(74496);
        _oaf.getSlot381PersonalEffect = function(_oaj) {
            var _oak = null,
                _oal = new _oai.SlotItemEffectModel(),
                _oam = false,
                _oan = new _oai.SlotItemEffectModel(),
                _oao = 0;
            if ('アメリカ' == _oaj.getCountryName() && (_oan.houg += 1, 102 == _oaj.ctype && (_oan.houg += 1), _oam = true, _oao = 1), 0 == _oam) return _oal;
            var _oap = _oaj.get_slotnums(381);
            if (_oal.add(_oan.multiply(_oap)), 0 == _oao) return _oal;
            var _oaq = _oaj.get_each_level_nums(381),
                _oar = 0;
            return _oaq.map(function(_oas, _oat) {
                _oat >= 6 && (_oar += _oas);
            }), 1 == _oao && (_oal.houg += 1 * _oar), _oal;
        };
    },
    65441: function(_oau, _oav, _oaw) {
        'use strict';
        var _oax = null;
        var _oay = this && this.__importDefault || function(_oaz) {
            var _ob0 = null;
            return _oaz && _oaz.__esModule ? _oaz : {
                'default': _oaz
            };
        };
        defineModule(_oav);
        Object.defineProperty(_oav, '__esModule', {
            'value': true
        }), _oav.getSlot382PersonalEffect = void 0;
        var _ob1 = _oaw(74496),
            _ob2 = _oay(_oaw(18622));
        _oav.getSlot382PersonalEffect = function(_ob3) {
            var _ob4 = null,
                _ob5 = new _ob1.SlotItemEffectModel(),
                _ob6 = false,
                _ob7 = new _ob1.SlotItemEffectModel(),
                _ob8 = false,
                _ob9 = new _ob1.SlotItemEffectModel(),
                _oba = new _ob1.SlotItemEffectModel(),
                _obb = {},
                _obc = 2,
                _obd = [];
            1 == _ob3.stype && (_ob7.tyku += 2, _ob7.kaih += 2, _ob7.tais += 1, _ob6 = true, _ob9.houg += 2, _ob9.kaih += 3, _oba.tyku += 2, _oba.kaih += 3, _ob8 = true, _obc = 1), 66 != _ob3.ctype && 28 != _ob3.ctype && 101 != _ob3.ctype || (_ob7.tyku += 2, _ob7.kaih += 1, _ob6 = true, _ob9.houg += 1, _ob9.kaih += 2, _oba.tyku += 2, _oba.kaih += 2, _ob8 = true, _obc = 1), 'ゆら' != _ob3.yomi && 'なか' != _ob3.yomi && 'きぬ' != _ob3.yomi || (_ob7.tyku += 1, _ob6 = true), 488 == _ob3.ship_id || 220 == _ob3.ship_id ? (_ob7.kaih += 1, _ob6 = true, 488 == _ob3.ship_id && (_ob9.houg += 1, _ob9.kaih += 1, _oba.tyku += 2, _oba.kaih += 2, _ob8 = true, _obc = 1)) : 160 == _ob3.ship_id || 224 == _ob3.ship_id ? (_ob7.kaih += 1, _ob6 = true, 160 == _ob3.ship_id && (_ob9.houg += 1, _ob9.kaih += 1, _oba.tyku += 2, _oba.kaih += 2, _ob8 = true)) : 487 == _ob3.ship_id || 289 == _ob3.ship_id ? (_ob7.kaih += 1, _ob6 = true, 487 == _ob3.ship_id && (_ob9.houg += 1, _ob9.kaih += 1, _oba.tyku += 2, _oba.kaih += 2, _ob8 = true)) : 656 == _ob3.ship_id ? (_ob7.tyku += 3, _ob7.kaih += 2, _ob6 = true, _ob9.houg += 2, _ob9.kaih += 2, _oba.tyku += 3, _oba.kaih += 2, _ob8 = true, _obc = 1) : 145 == _ob3.ship_id || 961 == _ob3.ship_id ? _obc = 1 : 979 == _ob3.ship_id && (_ob7.houg += 1, _ob7.tyku += 1, _ob7.houm += 1, _ob7.kaih += 1, _obb[509] = new _ob1.SlotItemEffectModel(), _obb[509].houm += 1, _ob6 = true, _obd[1] = 1);
            for (var _obe = 0, _obf = 0, _obg = 0, _obh = _ob3.have_slot_ids(); _obg < _obh.length; _obg++) {
                var _obi = _obh[_obg],
                    _obj = _ob2.default.model.slot.getMst(_obi),
                    _obk = _obj.equipType;
                12 != _obk && 13 != _obk || (_obj.sakuteki >= 5 && (_obe += _ob3.get_slotnums(parseInt(_obi))), _obj.taiku >= 2 && (_obf += _ob3.get_slotnums(parseInt(_obi))));
            }
            for (var _obl = [], _obm = function(_obn) {
                    var _obo = null;
                    if (null == _ob3.have_slots_dict[_obn]) return 'continue';
                    var _obp = _ob3.get_each_level_nums(_obn);
                    null == _obl[_obn] && (_obl[_obn] = []), _obp.forEach(function(_obq, _obr) {
                        var _obs = null;
                        for (var _obt = 1; _obt <= _ob3.SLOT_LEVEL_MAX; _obt++) null == _obl[_obn][_obt] && (_obl[_obn][_obt] = 0), _obr >= _obt && (_obl[_obn][_obt] += _obq);
                    });
                }, _obu = 0, _obv = [509]; _obu < _obv.length; _obu++) {
                _obm(_obv[_obu]);
            }
            var _obw = 0,
                _obx = 0,
                _oby = 0,
                _obz = 0,
                _oc0 = 0,
                _oc1 = 0,
                _oc2 = 0,
                _oc3 = 0,
                _oc4 = 0,
                _oc5 = 0;
            null != _obl[509] && (_obw = _obl[509][1], _obx = _obl[509][2], _oby = _obl[509][3], _obz = _obl[509][4], _oc0 = _obl[509][5], _oc1 = _obl[509][6], _oc2 = _obl[509][7], _oc3 = _obl[509][8], _oc4 = _obl[509][9], _oc5 = _obl[509][10], null != _obd[1] && (_oby >= 1 && (_ob5.kaih += 1 * _oby), _oc0 >= 1 && (_ob5.houg += 1 * _oc0), _oc2 >= 1 && (_ob5.tyku += 2 * _oc2), _oc4 >= 1 && (_ob5.houm += 1 * _oc4), _oc5 >= 1 && (_ob5.houg += 1 * _oc5)), 1 == _obc ? (_obw >= 1 && (_ob5.tyku += 1 * _obw), _obx >= 1 && (_ob5.kaih += 2 * _obx), _obz >= 1 && (_ob5.houg += 1 * _obz), _oc1 >= 1 && (_ob5.tyku += 1 * _oc1), _oc3 >= 1 && (_ob5.houm += 1 * _oc3), _oc5 >= 1 && (_ob5.tyku += 1 * _oc5)) : 2 == _obc && (_obx >= 1 && (_ob5.tyku += 1 * _obx), _obz >= 1 && (_ob5.kaih += 2 * _obz), _oc1 >= 1 && (_ob5.houg += 1 * _oc1), _oc3 >= 1 && (_ob5.tyku += 1 * _oc3), _oc5 >= 1 && (_ob5.houm += 1 * _oc5)));
            var _oc6 = _ob3.get_slotnums(509),
                _oc7 = _oc6 + _ob3.get_slotnums(382);
            return _ob6 && (_ob5.add(_ob7.multiply(_oc7)), Object.keys(_obb).forEach(function(_oc8) {
                var _oc9 = null,
                    _oca = parseInt(_oc8);
                if (null != _ob3.have_slots_dict[_oca]) {
                    var _ocb = _ob3.get_slotnums(_oca);
                    _ob5.add(_obb[_oca].multiply(_ocb));
                }
            })), 3 != _ob3.stype && 21 != _ob3.stype && 4 != _ob3.stype || _obx >= 1 && (_obe > 0 && (_ob5.houg += 1, _ob5.kaih += 1), _obf > 0 && (_ob5.tyku += 2, _ob5.kaih += 1)), 145 == _ob3.ship_id ? _obx >= 1 && (_obe > 0 && (_ob5.houg += 1, _ob5.tyku += 1, _ob5.kaih += 2), _obf > 0 && (_ob5.tyku += 4, _ob5.kaih += 2)) : 961 != _ob3.ship_id && 979 != _ob3.ship_id || _oc6 > 0 && (_obe > 0 && (_ob5.houg += 2, _ob5.tyku += 2, _ob5.kaih += 3), _obf > 0 && (_ob5.houg += 1, _ob5.tyku += 5, _ob5.kaih += 3)), _ob8 && _obe > 0 && _ob5.add(_ob9), _ob8 && _obf > 0 && _ob5.add(_oba), _ob5;
        };
    },
    33258: (_occ, _ocd, _oce) => {
        'use strict';
        var _ocf = null;
        defineModule(_ocd);
        Object.defineProperty(_ocd, '__esModule', {
            'value': true
        }), _ocd.getSlot383PersonalEffect = void 0;
        var _ocg = _oce(74496);
        _ocd.getSlot383PersonalEffect = function(_och) {
            var _oci = null,
                _ocj = new _ocg.SlotItemEffectModel(),
                _ock = false,
                _ocl = new _ocg.SlotItemEffectModel(),
                _ocm = _och.get_each_level_over_nums([383]).slot[383];
            if (44 == _och.ctype && (_ocl.raig += 2, _ock = true, _ocm[4] > 0 && (_ocj.raig += 1), _ocm[6] > 0 && (_ocj.houm += 1)), 'い58' == _och.yomi && (_ocl.raig += 1, _ock = true), 636 == _och.ship_id ? (_ocl.raig += 3, _ock = true) : 607 == _och.ship_id && (_ocl.raig += 4, _ock = true), _ocm[8] > 0 && (_ocj.raig += 1), _ocm[10] > 0 && (_ocj.houm += 1), 'い58' != _och.yomi && 'い47' != _och.yomi || _ocm[5] > 0 && (_ocj.houm += 1), 0 == _ock) return _ocj;
            var _ocn = _och.get_slotnums(383);
            return _ocj.add(_ocl.multiply(_ocn)), _ocj;
        };
    },
    92168: (_oco, _ocp, _ocq) => {
        'use strict';
        var _ocr = null;
        defineModule(_ocp);
        Object.defineProperty(_ocp, '__esModule', {
            'value': true
        }), _ocp.getSlot384PersonalEffect = void 0;
        var _ocs = _ocq(74496);
        _ocp.getSlot384PersonalEffect = function(_oct) {
            var _ocu = null,
                _ocv = new _ocs.SlotItemEffectModel(),
                _ocw = false,
                _ocx = new _ocs.SlotItemEffectModel();
            44 == _oct.ctype && (_ocx.kaih += 3, _ocw = true), 'い58' == _oct.yomi && (_ocx.kaih += 2, _ocw = true), 636 == _oct.ship_id ? (_ocx.kaih += 3, _ocw = true) : 607 == _oct.ship_id && (_ocx.kaih += 4, _ocw = true);
            var _ocy = _oct.get_slotnums(384);
            _ocw && _ocv.add(_ocx.multiply(_ocy));
            var _ocz = _ocy,
                _od0 = _oct.get_slotnums(213),
                _od1 = _oct.get_slotnums(214),
                _od2 = _oct.get_slotnums(383);
            return _ocz > 0 && _od0 + _od1 + _od2 > 0 && (_ocv.raig += 3, _ocv.kaih += 2), _ocv;
        };
    },
    85975: (_od3, _od4, _od5) => {
        'use strict';
        var _od6 = null;
        defineModule(_od4);
        Object.defineProperty(_od4, '__esModule', {
            'value': true
        }), _od4.getSlot385PersonalEffect = void 0;
        var _od7 = _od5(74496);
        _od4.getSlot385PersonalEffect = function(_od8) {
            var _od9 = null,
                _oda = new _od7.SlotItemEffectModel(),
                _odb = false,
                _odc = new _od7.SlotItemEffectModel(),
                _odd = 0;
            if ('アメリカ' == _od8.getCountryName() && (_odc.houg += 1, 102 == _od8.ctype || 107 == _od8.ctype ? (_odc.houg += 1, _odc.souk += 1) : 93 == _od8.ctype && (_odc.houg += 1), _odb = true, _odd = 1), 8 == _od8.stype && (_odc.houg += 1, _odb = true), 0 == _odb) return _oda;
            var _ode = _od8.get_slotnums(385);
            if (_oda.add(_odc.multiply(_ode)), 0 == _odd) return _oda;
            var _odf = _od8.get_each_level_nums(385),
                _odg = 0;
            return _odf.forEach(function(_odh, _odi) {
                _odi >= 6 && (_odg += _odh);
            }), 1 == _odd && (_oda.houg += 1 * _odg, _oda.souk += 1 * _odf[10]), _oda;
        };
    },
    98467: (_odj, _odk, _odl) => {
        'use strict';
        var _odm = null;
        defineModule(_odk);
        Object.defineProperty(_odk, '__esModule', {
            'value': true
        }), _odk.getSlot386PersonalEffect = void 0;
        var _odn = _odl(74496);
        _odk.getSlot386PersonalEffect = function(_odo) {
            var _odp = null,
                _odq = new _odn.SlotItemEffectModel(),
                _odr = false,
                _ods = new _odn.SlotItemEffectModel(),
                _odt = 0;
            if ('アメリカ' == _odo.getCountryName() && (_ods.houg += 1, _odr = true, _odt = 1), 0 == _odr) return _odq;
            var _odu = _odo.get_slotnums(386);
            if (_odq.add(_ods.multiply(_odu)), 0 == _odt) return _odq;
            var _odv = _odo.get_each_level_nums(386),
                _odw = 0,
                _odx = 0;
            return _odv.forEach(function(_ody, _odz) {
                _odz >= 2 && (_odw += _ody), _odz >= 7 && (_odx += _ody);
            }), 1 == _odt && (_odq.houg += 1 * _odw, _odq.houg += 1 * _odx), _odq;
        };
    },
    88348: (_oe0, _oe1, _oe2) => {
        'use strict';
        var _oe3 = null;
        defineModule(_oe1);
        Object.defineProperty(_oe1, '__esModule', {
            'value': true
        }), _oe1.getSlot387PersonalEffect = void 0;
        var _oe4 = _oe2(74496);
        _oe1.getSlot387PersonalEffect = function(_oe5) {
            var _oe6 = null,
                _oe7 = new _oe4.SlotItemEffectModel(),
                _oe8 = false,
                _oe9 = new _oe4.SlotItemEffectModel(),
                _oea = 0;
            if ('アメリカ' == _oe5.getCountryName() && (_oe9.houg += 1, _oe8 = true, _oea = 1), 0 == _oe8) return _oe7;
            var _oeb = _oe5.get_slotnums(387);
            if (_oe7.add(_oe9.multiply(_oeb)), 0 == _oea) return _oe7;
            var _oec = _oe5.get_each_level_nums(387),
                _oed = 0,
                _oee = 0;
            return _oec.forEach(function(_oef, _oeg) {
                _oeg >= 2 && (_oed += _oef), _oeg >= 7 && (_oee += _oef);
            }), 1 == _oea && (_oe7.houg += 1 * _oed, _oe7.houg += 1 * _oee), _oe7;
        };
    },
    21097: (_oeh, _oei, _oej) => {
        'use strict';
        var _oek = null;
        defineModule(_oei);
        Object.defineProperty(_oei, '__esModule', {
            'value': true
        }), _oei.getSlot389PersonalEffect = void 0;
        var _oel = _oej(74496);
        _oei.getSlot389PersonalEffect = function(_oem) {
            var _oen = null,
                _oeo = new _oel.SlotItemEffectModel(),
                _oep = false,
                _oeq = new _oel.SlotItemEffectModel();
            if (594 == _oem.ship_id || 599 == _oem.ship_id) _oeq.houg += 2, _oeq.kaih += 2, _oep = true;
            else {
                if (698 == _oem.ship_id || 610 == _oem.ship_id) _oeq.houg += 3, _oeq.kaih += 2, _oep = true;
                else 646 == _oem.ship_id && (_oeq.houg += 4, _oeq.tais += 4, _oeq.kaih += 3, _oep = true, _oem.get_type3_nums(25) > 0 && (_oeo.houg += 3, _oeo.tais += 6), _oem.get_slotnums(326) + _oem.get_slotnums(327) > 0 && (_oeo.houg += 5, _oeo.tais += 4));
            }
            if ('アメリカ' == _oem.getCountryName() && (_oeq.houg += 2, _oeq.tais += 3, _oeq.kaih += 1, _oep = true), 0 == _oep) return _oeo;
            var _oer = _oem.get_slotnums(389);
            return _oeo.add(_oeq.multiply(_oer)), _oeo;
        };
    },
    43607: (_oes, _oet, _oeu) => {
        'use strict';
        var _oev = null;
        defineModule(_oet);
        Object.defineProperty(_oet, '__esModule', {
            'value': true
        }), _oet.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _oew = _oeu(74496);
        _oet.getSlot38cmFourBarrelGunPersonalEffect = function(_oex) {
            var _oey = null,
                _oez = new _oew.SlotItemEffectModel(),
                _of0 = _oex.get_slotnums(245),
                _of1 = _oex.get_slotnums(246),
                _of2 = _oex.get_slotnums(468),
                _of3 = _of0 + _of1 + _of2,
                _of4 = 0,
                _of5 = 0;
            if (79 != _oex.ctype) return _oez;
            _oez.houg += 2 * _of3, _oez.houm += 1 * _of3, _of2 >= 1 && (_oez.houg += 1 * _of2, _of5 = 1), _of4 = 1;
            var _of6 = _oex.get_slotnums(247),
                _of7 = _oex.get_slotnums(471) + _oex.get_slotnums(538);
            if (1 == _of4 && _of6 >= 1 && (_oez.kaih += 2 * _of6, _oez.houg += 2 * _of6, _oez.houm += 2 * _of6), 0 == _of5) return _oez;
            var _of8 = _oex.haveSlotLevelNumOver(468),
                _of9 = _oex.haveSlotLevelNumOver(471),
                _ofa = _oex.haveSlotLevelNumOver(538);
            if (1 == _of5 && _of2 > 0) {
                var _ofb = _of8[4],
                    _ofc = _of8[8],
                    _ofd = _of8[9],
                    _ofe = _of8[10],
                    _off = _of9[7],
                    _ofg = _of9[9];
                _ofb >= 1 && (_oez.houg += 1 * _ofb, _oez.houm += 1 * _ofb), _ofc >= 1 && (_oez.houg += 1 * _ofc, _oez.houm += 1 * _ofc), _ofd >= 1 && (_oez.tyku += 1 * _ofd, _of7 >= 1 && (_oez.houm += 2 * _of7), _of6 >= 1 && (_oez.kaih += 1 * _of6, _oez.houm += 1 * _of6)), _ofe >= 1 && (_oez.houm += 1 * _ofe, _of7 >= 1 && (_oez.houm += 1 * _of7, _ofa[7] >= 1 && (_oez.houm += 1 * _ofa[7]), _ofa[8] >= 1 && (_oez.kaih += 1 * _ofa[8]), _ofa[9] >= 1 && (_oez.houm += 1 * _ofa[9]), _off >= 1 && (_oez.houm += 1 * _off), _ofg >= 1 && (_oez.kaih += 1 * _ofg)), _of6 >= 1 && (_oez.houg += 1 * _of6, _oez.kaih += 1 * _of6, _oez.houm += 1 * _of6));
            }
            return _oez;
        };
    },
    2380: (_ofh, _ofi, _ofj) => {
        'use strict';
        var _ofk = null;
        defineModule(_ofi);
        Object.defineProperty(_ofi, '__esModule', {
            'value': true
        }), _ofi.getSlot38cmTwinGunPersonalEffect = void 0;
        var _ofl = _ofj(74496);
        _ofi.getSlot38cmTwinGunPersonalEffect = function(_ofm) {
            var _ofn = null,
                _ofo = new _ofl.SlotItemEffectModel(),
                _ofp = false,
                _ofq = new _ofl.SlotItemEffectModel(),
                _ofr = 0,
                _ofs = _ofm.get_slotnums(76),
                _oft = _ofm.get_slotnums(114),
                _ofu = _ofm.get_slotnums(124);
            if ('ドイツ' == _ofm.getCountryName() && (_ofq.houg += 1, _ofp = true, _ofr = 1, _ofu >= 1 && (_ofo.kaih += 1 * _ofu)), 0 == _ofp) return _ofo;
            var _ofv = _ofs + _oft;
            _ofo.add(_ofq.multiply(_ofv));
            var _ofw = _ofm.have_level_num_over_dict[114];
            return 1 == _ofr && null != _ofw && (_ofw[7] >= 1 && (_ofo.houg += 1 * _ofw[7]), _ofw[8] >= 1 && (_ofo.houm += 1 * _ofw[8]), _ofw[9] >= 1 && (_ofo.souk += 1 * _ofw[9]), _ofw[10] >= 1 && (_ofo.houg += 1 * _ofw[10])), _ofo;
        };
    },
    37273: (_ofx, _ofy, _ofz) => {
        'use strict';
        var _og0 = null;
        defineModule(_ofy);
        Object.defineProperty(_ofy, '__esModule', {
            'value': true
        }), _ofy.getSlot390PersonalEffect = void 0;
        var _og1 = _ofz(74496);
        _ofy.getSlot390PersonalEffect = function(_og2) {
            var _og3 = null,
                _og4 = new _og1.SlotItemEffectModel(),
                _og5 = false,
                _og6 = new _og1.SlotItemEffectModel(),
                _og7 = 0;
            if ('アメリカ' == _og2.getCountryName() && (_og6.houg += 1, _og5 = true, _og7 = 1), 102 == _og2.ctype || 107 == _og2.ctype ? (_og6.houg += 1, _og6.souk += 1, _og5 = true) : 93 == _og2.ctype && (_og6.houg += 1, _og5 = true), 8 == _og2.stype && (_og6.houg += 1, _og5 = true), 0 == _og5) return _og4;
            var _og8 = _og2.get_slotnums(390);
            if (_og4.add(_og6.multiply(_og8)), 0 == _og7) return _og4;
            var _og9 = _og2.get_each_level_nums(390),
                _oga = 0,
                _ogb = 0;
            return _og9.forEach(function(_ogc, _ogd) {
                _ogd >= 3 && (_oga += _ogc), _ogd >= 6 && (_ogb += _ogc);
            }), 1 == _og7 && (_og4.houg += 1 * _oga, _og4.kaih += 1 * _ogb, _og4.souk += 1 * _og9[10]), _og4;
        };
    },
    72694: (_oge, _ogf, _ogg) => {
        'use strict';
        var _ogh = null;
        defineModule(_ogf);
        Object.defineProperty(_ogf, '__esModule', {
            'value': true
        }), _ogf.getSlot391PersonalEffect = void 0;
        var _ogi = _ogg(74496);
        _ogf.getSlot391PersonalEffect = function(_ogj) {
            var _ogk = null,
                _ogl = new _ogi.SlotItemEffectModel(),
                _ogm = false,
                _ogn = new _ogi.SlotItemEffectModel();
            if ('しょうかく' == _ogj.yomi || 'ずいかく' == _ogj.yomi ? (_ogn.houg += 1, _ogm = true) : 'じゅんよう' != _ogj.yomi && 'ひよう' != _ogj.yomi || (_ogn.houg += 1, _ogm = true), 116 == _ogj.ship_id || 185 == _ogj.ship_id || 282 == _ogj.ship_id ? (_ogn.houg += 1, _ogm = true) : 117 == _ogj.ship_id || 318 == _ogj.ship_id || 883 == _ogj.ship_id || 888 == _ogj.ship_id ? (_ogn.houg += 1, _ogl.kaih += 1, _ogm = true) : 560 != _ogj.ship_id && 555 != _ogj.ship_id || (_ogn.houg += 1, _ogn.kaih += 1, _ogm = true), 0 == _ogm) return _ogl;
            var _ogo = _ogj.get_slotnums(391);
            return _ogl.add(_ogn.multiply(_ogo)), _ogl;
        };
    },
    62067: (_ogp, _ogq, _ogr) => {
        'use strict';
        var _ogs = null;
        defineModule(_ogq);
        Object.defineProperty(_ogq, '__esModule', {
            'value': true
        }), _ogq.getSlot392PersonalEffect = void 0;
        var _ogt = _ogr(74496);
        _ogq.getSlot392PersonalEffect = function(_ogu) {
            var _ogv = null,
                _ogw = new _ogt.SlotItemEffectModel(),
                _ogx = false,
                _ogy = new _ogt.SlotItemEffectModel();
            if ('しょうかく' == _ogu.yomi || 'ずいかく' == _ogu.yomi ? (_ogy.houg += 2, _ogy.kaih += 1, _ogx = true) : 'じゅんよう' != _ogu.yomi && 'ひよう' != _ogu.yomi || (_ogy.houg += 1, _ogy.kaih += 1, _ogx = true), 116 == _ogu.ship_id || 185 == _ogu.ship_id || 282 == _ogu.ship_id ? (_ogy.houg += 2, _ogy.kaih += 1, _ogx = true) : 117 == _ogu.ship_id || 318 == _ogu.ship_id || 883 == _ogu.ship_id || 888 == _ogu.ship_id ? (_ogy.houg += 2, _ogy.kaih += 2, _ogx = true) : 560 != _ogu.ship_id && 555 != _ogu.ship_id || (_ogy.houg += 3, _ogy.kaih += 2, _ogx = true), 0 == _ogx) return _ogw;
            var _ogz = _ogu.get_slotnums(392);
            return _ogw.add(_ogy.multiply(_ogz)), _ogw;
        };
    },
    87817: function(_oh0, _oh1, _oh2) {
        'use strict';
        var _oh3 = null;
        var _oh4 = this && this.__importDefault || function(_oh5) {
            var _oh6 = null;
            return _oh5 && _oh5.__esModule ? _oh5 : {
                'default': _oh5
            };
        };
        defineModule(_oh1);
        Object.defineProperty(_oh1, '__esModule', {
            'value': true
        }), _oh1.getSlot397PersonalEffect = void 0;
        var _oh7 = _oh2(74496),
            _oh8 = _oh4(_oh2(18622));
        _oh1.getSlot397PersonalEffect = function(_oh9) {
            var _oha = null,
                _ohb = new _oh7.SlotItemEffectModel(),
                _ohc = false,
                _ohd = new _oh7.SlotItemEffectModel(),
                _ohe = 0,
                _ohf = 0,
                _ohg = false;
            if (651 == _oh9.ship_id ? (_ohd.houg += 5, _ohd.tyku += 2, _ohd.kaih += 1, _ohc = true, _ohg = true, _ohe = 1, _ohf = 1) : 656 == _oh9.ship_id && (_ohd.houg += 3, _ohd.tyku += 1, _ohd.kaih += 1, _ohc = true, _ohg = true, _ohe = 1), 0 == _ohc) return _ohb;
            var _ohh = _oh9.get_slotnums(397);
            _ohb.add(_ohd.multiply(_ohh));
            var _ohi = 0,
                _ohj = _oh9.get_each_level_nums(397),
                _ohk = 0;
            if (_ohg) {
                _ohj.forEach(function(_ohl, _ohm) {
                    _ohm >= 4 && (_ohk += _ohl);
                });
                for (var _ohn = 0, _oho = _oh9.have_slot_ids(); _ohn < _oho.length; _ohn++) {
                    var _ohp = _oho[_ohn],
                        _ohq = _oh8.default.model.slot.getMst(_ohp),
                        _ohr = _ohq.equipType;
                    12 != _ohr && 13 != _ohr || (_ohq.sakuteki >= 5 && (_ohi += _oh9.get_slotnums(parseInt(_ohp))), _ohq.taiku >= 2 && _oh9.get_slotnums(parseInt(_ohp)));
                }
            }
            return 1 == _ohe && _ohi > 0 && (_ohb.houg += 3, _ohb.kaih += 3), 1 == _ohf && (_ohb.houg += 4 * _ohk, _ohb.kaih += 1 * _ohk), _ohb;
        };
    },
    93526: function(_ohs, _oht, _ohu) {
        'use strict';
        var _ohv = null;
        var _ohw = this && this.__importDefault || function(_ohx) {
            var _ohy = null;
            return _ohx && _ohx.__esModule ? _ohx : {
                'default': _ohx
            };
        };
        defineModule(_oht);
        Object.defineProperty(_oht, '__esModule', {
            'value': true
        }), _oht.getSlot398PersonalEffect = void 0;
        var _ohz = _ohu(74496),
            _oi0 = _ohw(_ohu(18622));
        _oht.getSlot398PersonalEffect = function(_oi1) {
            var _oi2 = null,
                _oi3 = new _ohz.SlotItemEffectModel(),
                _oi4 = false,
                _oi5 = new _ohz.SlotItemEffectModel(),
                _oi6 = 0,
                _oi7 = 0,
                _oi8 = false;
            if (651 == _oi1.ship_id ? (_oi5.houg += 4, _oi5.tyku += 4, _oi5.kaih += 2, _oi4 = true, _oi8 = true, _oi6 = 1, _oi7 = 1) : 656 == _oi1.ship_id && (_oi5.houg += 3, _oi5.tyku += 2, _oi5.kaih += 2, _oi4 = true, _oi8 = true, _oi6 = 1, _oi7 = 2), 0 == _oi4) return _oi3;
            var _oi9 = _oi1.get_slotnums(398);
            _oi3.add(_oi5.multiply(_oi9));
            var _oia = 0,
                _oib = 0,
                _oic = _oi1.get_each_level_nums(398),
                _oid = 0;
            if (_oi8) {
                _oic.forEach(function(_oie, _oif) {
                    _oif >= 4 && (_oid += _oie);
                });
                for (var _oig = 0, _oih = _oi1.have_slot_ids(); _oig < _oih.length; _oig++) {
                    var _oii = _oih[_oig],
                        _oij = _oi0.default.model.slot.getMst(_oii),
                        _oik = _oij.equipType;
                    12 != _oik && 13 != _oik || (_oij.sakuteki >= 5 && (_oia += _oi1.get_slotnums(parseInt(_oii))), _oij.taiku >= 2 && (_oib += _oi1.get_slotnums(parseInt(_oii))));
                }
            }
            return 1 == _oi6 && (_oia > 0 && (_oi3.houg += 3, _oi3.kaih += 3), _oib > 0 && (_oi3.tyku += 3, _oi3.kaih += 3)), 1 == _oi7 ? (_oi3.houg += 3 * _oid, _oi3.kaih += 2 * _oid) : 2 == _oi7 && (_oi3.houg += 2 * _oid, _oi3.kaih += 1 * _oid), _oi3;
        };
    },
    33084: (_oil, _oim, _oin) => {
        'use strict';
        var _oio = null;
        defineModule(_oim);
        Object.defineProperty(_oim, '__esModule', {
            'value': true
        }), _oim.getSlot399PersonalEffect = void 0;
        var _oip = _oin(74496);
        _oim.getSlot399PersonalEffect = function(_oiq) {
            var _oir = null,
                _ois = new _oip.SlotItemEffectModel(),
                _oit = false,
                _oiu = new _oip.SlotItemEffectModel(),
                _oiv = 0;
            if (108 == _oiq.ctype && (_oiu.houg += 1, _oiu.kaih += 2, _oiv = 1, _oit = true), 0 == _oit) return _ois;
            var _oiw = _oiq.get_slotnums(399);
            if (_ois.add(_oiu.multiply(_oiw)), 0 == _oiv) return _ois;
            var _oix = _oiq.get_each_level_nums(399),
                _oiy = 0,
                _oiz = 0;
            return _oix.map(function(_oj0, _oj1) {
                _oj1 >= 3 && (_oiy += _oj0), _oj1 >= 5 && (_oiz += _oj0);
            }), 1 == _oiv && (_ois.houg += 1 * _oiy, _ois.houg += 1 * _oiz), _ois;
        };
    },
    80225: (_oj2, _oj3, _oj4) => {
        'use strict';
        var _oj5 = null;
        defineModule(_oj3);
        Object.defineProperty(_oj3, '__esModule', {
            'value': true
        }), _oj3.getSlot3_122PersonalEffect = void 0;
        var _oj6 = _oj4(74496);
        _oj3.getSlot3_122PersonalEffect = function(_oj7) {
            var _oj8 = null,
                _oj9 = new _oj6.SlotItemEffectModel(),
                _oja = false,
                _ojb = new _oj6.SlotItemEffectModel(),
                _ojc = 0,
                _ojd = _oj7.get_slotnums(3) + _oj7.get_slotnums(122) + _oj7.get_slotnums(533) + _oj7.get_slotnums(553);
            if (54 == _oj7.ctype && (_ojb.houg += 1, _ojb.tyku += 2, _ojb.kaih += 1, _oja = true, _ojc = 1, 968 == _oj7.ship_id && (_ojb.houg += 1, _ojb.houm += 1, _ojb.kaih += 1)), 981 == _oj7.ship_id ? (_ojb.houg += 1, _ojb.tyku += 1, _ojb.kaih += 1, _oja = true, _ojc = 2) : 986 != _oj7.ship_id && 426 != _oj7.ship_id || (_ojb.houg += 1, _ojb.tyku += 1, _ojd = _oj7.get_slotnums(533) + _oj7.get_slotnums(553), _oja = true, _ojc = 3), 0 == _oja) return _oj9;
            if (_oj9.add(_ojb.multiply(_ojd)), 0 == _ojc) return _oj9;
            var _oje = _oj7.get_each_level_over_nums([122]).slot[122],
                _ojf = _oj7.have_level_num_over_dict[533],
                _ojg = _oj7.have_level_num_over_dict[553];
            return 1 == _ojc ? (null != _oje && (_oje[6] >= 1 && (_oj9.kaih += 1 * _oje[6]), _oje[7] >= 1 && (_oj9.tyku += 1 * _oje[7]), _oje[8] >= 1 && (_oj9.houm += 1 * _oje[8]), _oje[9] >= 1 && (_oj9.kaih += 1 * _oje[9]), _oje[10] >= 1 && (_oj9.houg += 1 * _oje[10])), null != _ojg && (_ojg[2] >= 1 && (_oj9.tyku += 1 * _ojg[2]), _ojg[4] >= 1 && (_oj9.houg += 1 * _ojg[4]), _ojg[6] >= 1 && (_oj9.houm += 1 * _ojg[6]), _ojg[8] >= 1 && (_oj9.tyku += 1 * _ojg[8]), _ojg[10] >= 1 && (_oj9.kaih += 1 * _ojg[10])), null != _ojf && (_ojf[2] >= 1 && (_oj9.tyku += 1 * _ojf[2]), _ojf[4] >= 1 && (_oj9.houg += 1 * _ojf[4]), _ojf[6] >= 1 && (_oj9.houm += 1 * _ojf[6]), _ojf[8] >= 1 && (_oj9.tyku += 1 * _ojf[8]), _ojf[10] >= 1 && (_oj9.kaih += 1 * _ojf[10])), 968 == _oj7.ship_id && null != _ojf && (_ojf[1] >= 1 && (_oj9.kaih += 1 * _ojf[1]), _ojf[3] >= 1 && (_oj9.tyku += 1 * _ojf[3]), _ojf[5] >= 1 && (_oj9.houm += 1 * _ojf[5]), _ojf[7] >= 1 && (_oj9.kaih += 1 * _ojf[7]), _ojf[9] >= 1 && (_oj9.houg += 1 * _ojf[9]))) : 2 == _ojc ? (null != _oje && (_oje[7] >= 1 && (_oj9.tyku += 1 * _oje[7]), _oje[8] >= 1 && (_oj9.kaih += 1 * _oje[8]), _oje[9] >= 1 && (_oj9.houm += 1 * _oje[9]), _oje[10] >= 1 && (_oj9.houg += 1 * _oje[10])), null != _ojg && (_ojg[2] >= 1 && (_oj9.tyku += 1 * _ojg[2]), _ojg[4] >= 1 && (_oj9.houg += 1 * _ojg[4]), _ojg[6] >= 1 && (_oj9.houm += 1 * _ojg[6]), _ojg[8] >= 1 && (_oj9.tyku += 1 * _ojg[8]), _ojg[10] >= 1 && (_oj9.kaih += 1 * _ojg[10])), null != _ojf && (_ojf[4] >= 1 && (_oj9.tyku += 1 * _ojf[4]), _ojf[6] >= 1 && (_oj9.kaih += 1 * _ojf[6]), _ojf[8] >= 1 && (_oj9.houm += 1 * _ojf[8]), _ojf[10] >= 1 && (_oj9.houg += 1 * _ojf[10]))) : 3 == _ojc && (null != _oje && (_oje[7] >= 1 && (_oj9.tyku += 1 * _oje[7]), _oje[8] >= 1 && (_oj9.kaih += 1 * _oje[8]), _oje[9] >= 1 && (_oj9.houm += 1 * _oje[9]), _oje[10] >= 1 && (_oj9.houg += 1 * _oje[10])), null != _ojg && (_ojg[4] >= 1 && (_oj9.tyku += 1 * _ojg[4]), _ojg[6] >= 1 && (_oj9.kaih += 1 * _ojg[6]), _ojg[8] >= 1 && (_oj9.houm += 1 * _ojg[8]), _ojg[10] >= 1 && (_oj9.houg += 1 * _ojg[10])), null != _ojf && (_ojf[4] >= 1 && (_oj9.tyku += 1 * _ojf[4]), _ojf[6] >= 1 && (_oj9.kaih += 1 * _ojf[6]), _ojf[8] >= 1 && (_oj9.houm += 1 * _ojf[8]), _ojf[10] >= 1 && (_oj9.houg += 1 * _ojf[10]))), _oj9;
        };
    },
    97831: (_ojh, _oji, _ojj) => {
        'use strict';
        var _ojk = null;
        defineModule(_oji);
        Object.defineProperty(_oji, '__esModule', {
            'value': true
        }), _oji.getSlot400PersonalEffect = void 0;
        var _ojl = _ojj(74496);
        _oji.getSlot400PersonalEffect = function(_ojm) {
            var _ojn = null,
                _ojo = new _ojl.SlotItemEffectModel(),
                _ojp = false,
                _ojq = new _ojl.SlotItemEffectModel(),
                _ojr = 0,
                _ojs = false;
            if (147 != _ojm.ship_id && 73 != _ojm.ctype && 81 != _ojm.ctype || (_ojs = true), _ojs && (_ojq.kaih += 2, _ojq.raig += 5, _ojq.houg += 1, _ojq.souk += 1, _ojp = true, _ojr = 1), 0 == _ojp) return _ojo;
            var _ojt = _ojm.get_slotnums(400);
            return _ojo.add(_ojq.multiply(_ojt)), _ojm.get_slotnums(282) > 0 && 1 == _ojr && (_ojo.houg += 2), _ojo;
        };
    },
    4050: function(_oju, _ojv, _ojw) {
        'use strict';
        var _ojx = null;
        var _ojy = this && this.__importDefault || function(_ojz) {
            var _ok0 = null;
            return _ojz && _ojz.__esModule ? _ojz : {
                'default': _ojz
            };
        };
        defineModule(_ojv);
        Object.defineProperty(_ojv, '__esModule', {
            'value': true
        }), _ojv.getSlot407PersonalEffect = void 0;
        var _ok1 = _ojw(74496),
            _ok2 = _ojy(_ojw(18622));
        _ojv.getSlot407PersonalEffect = function(_ok3) {
            var _ok4 = null,
                _ok5 = new _ok1.SlotItemEffectModel(),
                _ok6 = false,
                _ok7 = new _ok1.SlotItemEffectModel(),
                _ok8 = 0;
            if (662 != _ok3.ship_id && 663 != _ok3.ship_id && 668 != _ok3.ship_id || (_ok7.houg += 4, _ok7.tyku += 2, _ok7.kaih += 1, _ok6 = true, _ok8 = 1), 0 == _ok6) return _ok5;
            var _ok9 = _ok3.get_slotnums(407);
            _ok5.add(_ok7.multiply(_ok9));
            for (var _oka = 0, _okb = 0, _okc = 0, _okd = _ok3.have_slot_ids(); _okc < _okd.length; _okc++) {
                var _oke = _okd[_okc],
                    _okf = _ok2.default.model.slot.getMst(_oke),
                    _okg = _okf.equipType;
                12 != _okg && 13 != _okg || (_okf.sakuteki >= 5 && (_oka += _ok3.get_slotnums(parseInt(_oke))), _okf.taiku >= 2 && (_okb += _ok3.get_slotnums(parseInt(_oke))));
            }
            return _oka >= 1 && 1 == _ok8 && (_ok5.houg += 2, _ok5.kaih += 2, _ok5.raig += 2), _okb >= 1 && 1 == _ok8 && (_ok5.tyku += 2, _ok5.kaih += 3), _ok5;
        };
    },
    78466: (_okh, _oki, _okj) => {
        'use strict';
        var _okk = null;
        defineModule(_oki);
        Object.defineProperty(_oki, '__esModule', {
            'value': true
        }), _oki.getSlot408PersonalEffect = void 0;
        var _okl = _okj(74496);
        _oki.getSlot408PersonalEffect = function(_okm) {
            var _okn = null,
                _oko = new _okl.SlotItemEffectModel(),
                _okp = false,
                _okq = new _okl.SlotItemEffectModel();
            if ('しんしゅうまる' == _okm.yomi ? (_okq.houg += 2, _okq.saku += 2, _okq.kaih += 2, _okp = true) : 'あきつまる' == _okm.yomi && (_okq.houg += 1, _okq.saku += 1, _okq.kaih += 1, _okq.tais += 1, _okp = true), 2 == _okm.stype && (_okq.houg += 1, _okq.saku += 1, _okq.kaih -= 5, _okp = true), 0 == _okp) return _oko;
            var _okr = _okm.get_slotnums(408);
            return _oko.add(_okq.multiply(_okr)), _oko;
        };
    },
    40061: (_oks, _okt, _oku) => {
        'use strict';
        var _okv = null;
        defineModule(_okt);
        Object.defineProperty(_okt, '__esModule', {
            'value': true
        }), _okt.getSlot409PersonalEffect = void 0;
        var _okw = _oku(74496);
        _okt.getSlot409PersonalEffect = function(_okx) {
            var _oky = null,
                _okz = new _okw.SlotItemEffectModel(),
                _ol0 = false,
                _ol1 = new _okw.SlotItemEffectModel();
            if ('しんしゅうまる' == _okx.yomi ? (_ol1.houg += 1, _ol1.tyku += 2, _ol1.kaih += 3, _ol0 = true) : 'あきつまる' == _okx.yomi && (_ol1.houg += 1, _ol1.tyku += 1, _ol1.kaih += 2, _ol1.tais += 1, _ol0 = true), 0 == _ol0) return _okz;
            var _ol2 = _okx.get_slotnums(409);
            return _okz.add(_ol1.multiply(_ol2)), _okz;
        };
    },
    79988: (_ol3, _ol4, _ol5) => {
        'use strict';
        var _ol6 = null;
        defineModule(_ol4);
        Object.defineProperty(_ol4, '__esModule', {
            'value': true
        }), _ol4.getSlot411PersonalEffect = void 0;
        var _ol7 = _ol5(74496);
        _ol4.getSlot411PersonalEffect = function(_ol8) {
            var _ol9 = null,
                _ola = new _ol7.SlotItemEffectModel(),
                _olb = new _ol7.SlotItemEffectModel(),
                _olc = false,
                _old = 0;
            if (2 == _ol8.stype && (_olb.kaih -= 9, _olc = true), 3 != _ol8.stype && 4 != _ol8.stype || (_olb.kaih -= 7, _olc = true), 21 == _ol8.stype && (_olb.kaih -= 6, _olc = true), 5 != _ol8.stype && 6 != _ol8.stype || (_olb.kaih -= 5, _olc = true), 593 == _ol8.ship_id && (_ola.houg += 1, _ola.tyku += 2, _ola.kaih += 3), 151 == _ol8.ship_id || 411 == _ol8.ship_id || 412 == _ol8.ship_id || 593 == _ol8.ship_id || 954 == _ol8.ship_id ? (_ola.houg += 3, _ola.tyku += 4, _old = 1) : 694 == _ol8.ship_id ? (_ola.houg += 4, _ola.tyku += 2, _old = 2) : 541 != _ol8.ship_id && 573 != _ol8.ship_id && 553 != _ol8.ship_id && 554 != _ol8.ship_id || (_ola.houg += 2, _ola.tyku += 2, _old = 1), _olc) {
                var _ole = _ol8.get_slotnums(411);
                _ola.add(_olb.multiply(_ole));
            }
            if (0 == _old) return _ola;
            var _olf = _ol8.get_each_level_nums(411),
                _olg = 0,
                _olh = 0;
            return _old > 0 && _olf.forEach(function(_oli, _olj) {
                _olj >= 4 && (_olg += _oli), _olj >= 5 && (_olh += _oli);
            }), 1 == _old ? (_olg >= 1 && (_ola.houg += 1, _ola.tyku += 1), _olf[10] >= 1 && (_ola.houg += 1, _ola.tyku += 1)) : 2 == _old && (_olh >= 1 && (_ola.houg += 1, _ola.tyku += 1), _olf[10] >= 1 && (_ola.houg += 2, _ola.tyku += 1)), _ola;
        };
    },
    74428: (_olk, _oll, _olm) => {
        'use strict';
        var _oln = null;
        defineModule(_oll);
        Object.defineProperty(_oll, '__esModule', {
            'value': true
        }), _oll.getSlot412PersonalEffect = void 0;
        var _olo = _olm(74496);
        _oll.getSlot412PersonalEffect = function(_olp) {
            var _olq = null,
                _olr = new _olo.SlotItemEffectModel(),
                _ols = false,
                _olt = 0,
                _olu = new _olo.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_olp.ctype) >= 0 ? (_olr.houg += 2, _olr.raig += 4, _olr.tais += 2, _olu.kaih += 3, _olu.saku += 1, _ols = true, _olt = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_olp.ctype) >= 0 ? (_olr.houg += 3, _olr.raig += 3, _olu.kaih += 2, _olu.saku += 3, _ols = true, _olt = 1) : [7, 13, 29, 8, 9, 31].indexOf(_olp.ctype) >= 0 && (_olr.houg += 1, _olu.kaih += 1, _olu.saku += 1, _ols = true), 0 == _ols) return _olr;
            var _olv = _olp.get_slotnums(412);
            if (_olr.add(_olu.multiply(_olv)), 0 == _olt) return _olr;
            var _olw = _olp.get_each_level_nums(412),
                _olx = 0,
                _oly = 0;
            return _olt > 0 && _olw.forEach(function(_olz, _om0) {
                _om0 >= 4 && (_olx += _olz), _om0 >= 8 && (_oly += _olz);
            }), 1 == _olt && (_olx > 0 && (_olr.houg += 1), _oly > 0 && (_olr.raig += 1)), _olr;
        };
    },
    2631: (_om1, _om2, _om3) => {
        'use strict';
        var _om4 = null;
        defineModule(_om2);
        Object.defineProperty(_om2, '__esModule', {
            'value': true
        }), _om2.getSlot413PersonalEffect = void 0;
        var _om5 = _om3(74496);
        _om2.getSlot413PersonalEffect = function(_om6) {
            var _om7 = null,
                _om8 = new _om5.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_om6.ctype) >= 0 ? (_om8.houg += 2, _om8.raig += 2, _om8.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_om6.ctype) >= 0 && (_om8.houg += 4, _om8.raig += 2, _om8.kaih += 2), 38 == _om6.ctype || 54 == _om6.ctype ? (_om8.houg += 2, _om8.raig += 3, _om8.kaih += 3) : 4 == _om6.ctype || 20 == _om6.ctype || 16 == _om6.ctype || 41 == _om6.ctype || 52 == _om6.ctype ? (_om8.houg += 1, _om8.raig += 2, _om8.kaih += 2) : 21 != _om6.ctype && 34 != _om6.ctype || (_om8.tyku += 2, _om8.raig += 1, _om8.kaih += 1), 'なか' == _om6.yomi || 'ゆら' == _om6.yomi || 'やはぎ' == _om6.yomi || 'のしろ' == _om6.yomi || 'はまなみ' == _om6.yomi || 'しまかぜ' == _om6.yomi || 'きよしも' == _om6.yomi || 'はつしも' == _om6.yomi ? (_om8.tyku += 1, _om8.kaih += 1) : 'じんつう' != _om6.yomi && 'せんだい' != _om6.yomi && 'ながなみ' != _om6.yomi && 'はつしも' != _om6.yomi && 'てるづき' != _om6.yomi || (_om8.houg += 1, _om8.raig += 1), 543 == _om6.ship_id ? (_om8.houg += 1, _om8.kaih += 1) : 159 == _om6.ship_id && (_om8.houg += 2), _om8;
        };
    },
    27177: (_om9, _oma, _omb) => {
        'use strict';
        var _omc = null;
        defineModule(_oma);
        Object.defineProperty(_oma, '__esModule', {
            'value': true
        }), _oma.getSlot415PersonalEffect = void 0;
        var _omd = _omb(74496);
        _oma.getSlot415PersonalEffect = function(_ome) {
            var _omf = null,
                _omg = new _omd.SlotItemEffectModel(),
                _omh = [];
            if ('アメリカ' == _ome.getCountryName() && (_omg.saku += 1, _omg.tais += 1, _omh.push(1)), 95 != _ome.ctype && 99 != _ome.ctype && 106 != _ome.ctype && 110 != _ome.ctype && 121 != _ome.ctype || (_omg.houg += 1, _omh.push(2)), 0 == _omh.length) return _omg;
            var _omi = _ome.get_each_level_nums(415),
                _omj = 0,
                _omk = 0,
                _oml = 0;
            return _omh.length > 0 && (_omi.forEach(function(_omm, _omn) {
                _omn >= 5 && (_omj += _omm), _omn >= 3 && (_omk += _omm), _omn >= 8 && (_oml += _omm);
            }), _omh.forEach(function(_omo) {
                var _omp = null;
                1 == _omo ? _omj >= 1 && (_omg.kaih += 1) : 2 == _omo && (_omk >= 1 && (_omg.kaih += 1), _oml >= 1 && (_omg.houg += 1));
            })), _omg;
        };
    },
    53908: (_omq, _omr, _oms) => {
        'use strict';
        var _omt = null;
        defineModule(_omr);
        Object.defineProperty(_omr, '__esModule', {
            'value': true
        }), _omr.getSlot419PersonalEffect = void 0;
        var _omu = _oms(74496);
        _omr.getSlot419PersonalEffect = function(_omv) {
            var _omw = null,
                _omx = new _omu.SlotItemEffectModel(),
                _omy = false,
                _omz = new _omu.SlotItemEffectModel(),
                _on0 = 0;
            if ('アメリカ' == _omv.getCountryName() && (_omz.houg += 2, _omy = true, _on0 = 1), 0 == _omy) return _omx;
            var _on1 = _omv.get_slotnums(419);
            if (_omx.add(_omz.multiply(_on1)), 0 == _on0) return _omx;
            var _on2 = _omv.get_each_level_nums(419),
                _on3 = 0,
                _on4 = 0;
            return _on0 > 0 && _on2.forEach(function(_on5, _on6) {
                _on6 >= 2 && (_on3 += _on5), _on6 >= 7 && (_on4 += _on5);
            }), 1 == _on0 && (_on3 >= 1 && (_omx.houg += 1 * _on3), _on4 >= 1 && (_omx.houg += 1 * _on4)), _omx;
        };
    },
    79813: (_on7, _on8, _on9) => {
        'use strict';
        var _ona = null;
        defineModule(_on8);
        Object.defineProperty(_on8, '__esModule', {
            'value': true
        }), _on8.getSlot420PersonalEffect = void 0;
        var _onb = _on9(74496);
        _on8.getSlot420PersonalEffect = function(_onc) {
            var _ond = null,
                _one = new _onb.SlotItemEffectModel(),
                _onf = false,
                _ong = new _onb.SlotItemEffectModel(),
                _onh = 0,
                _oni = _onc.getCountryName();
            if ('アメリカ' != _oni && 67 != _onc.ctype && 78 != _onc.ctype && 82 != _onc.ctype && 88 != _onc.ctype && 108 != _onc.ctype && 112 != _onc.ctype || (_ong.houg += 1, _onh = 1, _onf = true), 84 == _onc.ctype ? (_ong.houg += 1, _onf = true) : 78 == _onc.ctype && (_ong.houg -= 1, _onf = true), 7 == _onc.stype && (_ong.houg -= 2, _ong.kaih -= 1, _ong.souk -= 2, _onf = true), 0 == _onf) return _one;
            var _onj = _onc.get_slotnums(420);
            if (_one.add(_ong.multiply(_onj)), 0 == _onh) return _one;
            var _onk = _onc.get_each_level_nums(420),
                _onl = 0,
                _onm = 0,
                _onn = 0,
                _ono = 0;
            _onh > 0 && _onk.forEach(function(_onp, _onq) {
                _onq >= 3 && (_onl += _onp), _onq >= 7 && (_onm += _onp), _onq >= 8 && (_onn += _onp), _onq >= 9 && (_ono += _onp);
            });
            var _onr = _onk[10];
            return 1 == _onh && (_onl >= 1 && (_one.houg += 1 * _onl), 'アメリカ' == _oni && (_onm >= 1 && (_one.houm += 1 * _onm), _onn >= 1 && (_one.houg += 1 * _onn), _ono >= 1 && (_one.houm += 1 * _ono), _onr >= 1 && (_one.houg += 1 * _onr))), _one;
        };
    },
    16088: (_ons, _ont, _onu) => {
        'use strict';
        var _onv = null;
        defineModule(_ont);
        Object.defineProperty(_ont, '__esModule', {
            'value': true
        }), _ont.getSlot421PersonalEffect = void 0;
        var _onw = _onu(74496);
        _ont.getSlot421PersonalEffect = function(_onx) {
            var _ony = null,
                _onz = new _onw.SlotItemEffectModel(),
                _oo0 = false,
                _oo1 = new _onw.SlotItemEffectModel(),
                _oo2 = 0,
                _oo3 = _onx.getCountryName();
            if ('アメリカ' != _oo3 && 67 != _onx.ctype && 78 != _onx.ctype && 82 != _onx.ctype && 88 != _onx.ctype && 108 != _onx.ctype && 112 != _onx.ctype || (_oo1.houg += 2, _oo0 = true, _oo2 = 1), 84 == _onx.ctype ? (_oo1.houg += 1, _oo0 = true) : 78 == _onx.ctype && (_oo1.houg -= 1, _oo0 = true), 7 == _onx.stype && (_oo1.houg -= 2, _oo1.kaih -= 1, _oo1.souk -= 2, _oo0 = true), 0 == _oo0) return _onz;
            var _oo4 = _onx.get_slotnums(421);
            if (_onz.add(_oo1.multiply(_oo4)), 0 == _oo2) return _onz;
            var _oo5 = _onx.get_each_level_nums(421),
                _oo6 = 0,
                _oo7 = 0,
                _oo8 = 0,
                _oo9 = 0,
                _ooa = 0;
            _oo2 > 0 && _oo5.forEach(function(_oob, _ooc) {
                _ooc >= 5 && (_oo6 += _oob), _ooc >= 6 && (_oo7 += _oob), _ooc >= 7 && (_oo8 += _oob), _ooc >= 8 && (_oo9 += _oob), _ooc >= 9 && (_ooa += _oob);
            });
            var _ood = _oo5[10];
            return 1 == _oo2 && (_oo6 >= 1 && (_onz.houg += 1 * _oo6), 'アメリカ' == _oo3 && (_oo7 >= 1 && (_onz.houm += 1 * _oo7), _oo8 >= 1 && (_onz.houg += 1 * _oo8), _oo9 >= 1 && (_onz.houm += 1 * _oo9), _ooa >= 1 && (_onz.houg += 1 * _ooa), _ood >= 1 && (_onz.houm += 1 * _ood))), _onz;
        };
    },
    69939: (_ooe, _oof, _oog) => {
        'use strict';
        var _ooh = null;
        defineModule(_oof);
        Object.defineProperty(_oof, '__esModule', {
            'value': true
        }), _oof.getSlot422PersonalEffect = void 0;
        var _ooi = _oog(74496);
        _oof.getSlot422PersonalEffect = function(_ooj) {
            var _ook = null,
                _ool = new _ooi.SlotItemEffectModel(),
                _oom = false,
                _oon = new _ooi.SlotItemEffectModel();
            if ('アメリカ' != _ooj.getCountryName() && 67 != _ooj.ctype && 78 != _ooj.ctype && 82 != _ooj.ctype && 88 != _ooj.ctype && 108 != _ooj.ctype && 112 != _ooj.ctype || (_oon.houg += 1, _oon.kaih += 1, _oom = true), 84 == _ooj.ctype && (_oon.houg += 1, _oon.tyku += 1, _oom = true), 707 == _ooj.ship_id && (_oon.houg += 2, _oon.kaih += 2, _oon.tyku += 2, _oom = true), 0 == _oom) return _ool;
            var _ooo = _ooj.get_slotnums(422);
            return _ool.add(_oon.multiply(_ooo)), _ool;
        };
    },
    33734: (_oop, _ooq, _oor) => {
        'use strict';
        var _oos = null;
        defineModule(_ooq);
        Object.defineProperty(_ooq, '__esModule', {
            'value': true
        }), _ooq.getSlot423PersonalEffect = void 0;
        var _oot = _oor(74496);
        _ooq.getSlot423PersonalEffect = function(_oou) {
            var _oov = null,
                _oow = new _oot.SlotItemEffectModel(),
                _oox = false,
                _ooy = new _oot.SlotItemEffectModel();
            78 != _oou.ctype && 112 != _oou.ctype || (_ooy.houg += 2, _ooy.tyku += 2, _ooy.kaih += 2, _ooy.saku += 2, _oox = true);
            var _ooz = _oou.getCountryName();
            if (67 == _oou.ctype || 78 == _oou.ctype || 82 == _oou.ctype || 88 == _oou.ctype || 108 == _oou.ctype || 112 == _oou.ctype ? (_ooy.houg += 2, _ooy.tyku += 2, _ooy.kaih += 2, _ooy.saku += 2, _oox = true) : 'アメリカ' == _ooz && (_ooy.houg += 1, _ooy.tyku += 1, _ooy.kaih += 1, _ooy.saku += 1, _oox = true), 0 == _oox) return _oow;
            var _op0 = _oou.get_slotnums(423);
            return _oow.add(_ooy.multiply(_op0)), _oow;
        };
    },
    34432: (_op1, _op2, _op3) => {
        'use strict';
        var _op4 = null;
        defineModule(_op2);
        Object.defineProperty(_op2, '__esModule', {
            'value': true
        }), _op2.getSlot424PersonalEffect = void 0;
        var _op5 = _op3(74496);
        _op2.getSlot424PersonalEffect = function(_op6) {
            var _op7 = null,
                _op8 = new _op5.SlotItemEffectModel(),
                _op9 = false,
                _opa = new _op5.SlotItemEffectModel(),
                _opb = 0;
            67 != _op6.ctype && 78 != _op6.ctype && 82 != _op6.ctype && 88 != _op6.ctype && 108 != _op6.ctype && 112 != _op6.ctype || (_opa.houg += 2, _opa.raig += 3, _op9 = true, _opb = 1);
            var _opc = _op6.get_slotnums(424);
            _op9 && _op8.add(_opa.multiply(_opc));
            var _opd = _op6.get_each_level_nums(424),
                _ope = 0,
                _opf = 0,
                _opg = 0;
            _opd.forEach(function(_oph, _opi) {
                _opi >= 2 && (_ope += _oph), _opi >= 6 && (_opf += _oph), _opi >= 8 && (_opg += _oph);
            });
            var _opj = _opd[10];
            return 1 == _opb && (_ope >= 1 && (_op8.houg += 1 * _ope), _opf >= 1 && (_op8.houg += 1 * _opf), _opg >= 1 && (_op8.houm += 1 * _opg)), _opj > 0 && (_op8.houm += 1 * _opj), _op8;
        };
    },
    97423: (_opk, _opl, _opm) => {
        'use strict';
        var _opn = null;
        defineModule(_opl);
        Object.defineProperty(_opl, '__esModule', {
            'value': true
        }), _opl.getSlot425PersonalEffect = void 0;
        var _opo = _opm(74496);
        _opl.getSlot425PersonalEffect = function(_opp) {
            var _opq = null,
                _opr = new _opo.SlotItemEffectModel(),
                _ops = false,
                _opt = new _opo.SlotItemEffectModel(),
                _opu = 0;
            67 != _opp.ctype && 78 != _opp.ctype && 82 != _opp.ctype && 88 != _opp.ctype && 108 != _opp.ctype && 112 != _opp.ctype || (_opt.houg += 2, _opt.tais += 2, _opt.raig += 1, _opt.saku += 1, _ops = true, _opu = 1);
            var _opv = _opp.get_slotnums(425);
            _ops && _opr.add(_opt.multiply(_opv));
            var _opw = _opp.get_each_level_nums(425),
                _opx = 0,
                _opy = 0,
                _opz = 0,
                _oq0 = 0,
                _oq1 = 0,
                _oq2 = 0;
            _opw.forEach(function(_oq3, _oq4) {
                _oq4 >= 2 && (_opx += _oq3), _oq4 >= 4 && (_opy += _oq3), _oq4 >= 6 && (_opz += _oq3), _oq4 >= 7 && (_oq0 += _oq3), _oq4 >= 8 && (_oq1 += _oq3), _oq4 >= 9 && (_oq2 += _oq3);
            });
            var _oq5 = _opw[10];
            return 1 == _opu && (_opx >= 1 && (_opr.tais += 1 * _opx), _opy >= 1 && (_opr.houg += 1 * _opy), _opz >= 1 && (_opr.tais += 1 * _opz), _oq0 >= 1 && (_opr.houm += 1 * _oq0), _oq1 >= 1 && (_opr.raig += 1 * _oq1), _oq2 >= 1 && (_opr.houg += 1 * _oq2), _oq5 >= 1 && (_opr.tais += 1 * _oq5)), _oq0 >= 1 && (_opr.houg += 1 * _oq0), _oq1 >= 1 && (_opr.tais += 1 * _oq1), _oq2 >= 1 && (_opr.houm += 1 * _oq2), _oq5 >= 1 && (_opr.houm += 1 * _oq5), _opr;
        };
    },
    23551: (_oq6, _oq7, _oq8) => {
        'use strict';
        var _oq9 = null;
        defineModule(_oq7);
        Object.defineProperty(_oq7, '__esModule', {
            'value': true
        }), _oq7.getSlot430PersonalEffect = void 0;
        var _oqa = _oq8(74496);
        _oq7.getSlot430PersonalEffect = function(_oqb) {
            var _oqc = null,
                _oqd = new _oqa.SlotItemEffectModel(),
                _oqe = false,
                _oqf = new _oqa.SlotItemEffectModel(),
                _oqg = 0;
            if (113 == _oqb.ctype && (_oqf.tyku += 1, _oqf.kaih += 1, _oqe = true), 58 != _oqb.ctype && 61 != _oqb.ctype && 64 != _oqb.ctype && 68 != _oqb.ctype && 80 != _oqb.ctype && 92 != _oqb.ctype && 113 != _oqb.ctype && 124 != _oqb.ctype || (_oqf.tyku += 2, _oqf.kaih += 1, _oqe = true, _oqg = 1), 0 == _oqe) return _oqd;
            var _oqh = _oqb.get_slotnums(430);
            if (_oqd.add(_oqf.multiply(_oqh)), 0 == _oqg) return _oqd;
            var _oqi = _oqb.get_each_level_nums(430),
                _oqj = 0,
                _oqk = 0,
                _oql = 0;
            if (_oqg > 0 && _oqi.forEach(function(_oqm, _oqn) {
                    _oqn >= 2 && (_oqj += _oqm), _oqn >= 4 && (_oqk += _oqm), _oqn >= 7 && (_oql += _oqm);
                }), 1 == _oqg) {
                _oqj >= 1 && (_oqd.kaih += 1 * _oqj), _oqk >= 1 && (_oqd.tyku += 1 * _oqk), _oql >= 1 && (_oqd.kaih += 1 * _oql);
                var _oqo = _oqi[10];
                _oqo >= 1 && (_oqd.tyku += 1 * _oqo);
            }
            return _oqd;
        };
    },
    6173: (_oqp, _oqq, _oqr) => {
        'use strict';
        var _oqs = null;
        defineModule(_oqq);
        Object.defineProperty(_oqq, '__esModule', {
            'value': true
        }), _oqq.getSlot437PersonalEffect = void 0;
        var _oqt = _oqr(74496);
        _oqq.getSlot437PersonalEffect = function(_oqu) {
            var _oqv = null,
                _oqw = new _oqt.SlotItemEffectModel(),
                _oqx = false,
                _oqy = new _oqt.SlotItemEffectModel();
            if (285 == _oqu.ship_id ? (_oqy.houg += 3, _oqy.tyku += 3, _oqy.kaih += 4, _oqx = true) : 894 == _oqu.ship_id || 899 == _oqu.ship_id ? (_oqy.houg += 4, _oqy.tyku += 4, _oqy.kaih += 4, _oqx = true) : 196 == _oqu.ship_id || 197 == _oqu.ship_id ? (_oqy.houg += 2, _oqy.tyku += 2, _oqy.kaih += 3, _oqx = true) : 508 == _oqu.ship_id || 509 == _oqu.ship_id || 646 == _oqu.ship_id ? (_oqy.houg += 2, _oqy.tyku += 2, _oqy.kaih += 2, _oqx = true) : 888 != _oqu.ship_id && 883 != _oqu.ship_id && 553 != _oqu.ship_id && 554 != _oqu.ship_id || (_oqy.houg += 1, _oqy.tyku += 2, _oqy.kaih += 2, _oqx = true), 0 == _oqx) return _oqw;
            var _oqz = _oqu.get_slotnums(437);
            return _oqw.add(_oqy.multiply(_oqz)), _oqw;
        };
    },
    53709: (_or0, _or1, _or2) => {
        'use strict';
        var _or3 = null;
        defineModule(_or1);
        Object.defineProperty(_or1, '__esModule', {
            'value': true
        }), _or1.getSlot438PersonalEffect = void 0;
        var _or4 = _or2(74496);
        _or1.getSlot438PersonalEffect = function(_or5) {
            var _or6 = null,
                _or7 = new _or4.SlotItemEffectModel(),
                _or8 = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_or5.ctype) > -1 && (_or7.tais += 1, _or7.kaih += 1), 160 == _or5.ship_id || 488 == _or5.ship_id || 141 == _or5.ship_id ? (_or7.tais += 1, _or7.kaih += 1) : 145 != _or5.ship_id && 588 != _or5.ship_id && 667 != _or5.ship_id && 578 != _or5.ship_id && 476 != _or5.ship_id && 363 != _or5.ship_id && 961 != _or5.ship_id || (_or8 = 1), 'うしお' == _or5.yomi || 'まいかぜ' == _or5.yomi || 'いそかぜ' == _or5.yomi || 'はまかぜ' == _or5.yomi || 'いかづち' == _or5.yomi || 'やまぐも' == _or5.yomi || 'うみかぜ' == _or5.yomi || 'かわかぜ' == _or5.yomi || 'すずかぜ' == _or5.yomi ? _or7.tais += 1 : 'しぐれ' != _or5.yomi && 'やまかぜ' != _or5.yomi && 'かみかぜ' != _or5.yomi && 'はるかぜ' != _or5.yomi && 'みくら' != _or5.yomi && 'いしがき' != _or5.yomi || (_or7.tais += 1, _or7.kaih += 1), 0 == _or8) return _or7;
            var _or9 = _or5.get_each_level_nums(438),
                _ora = 0,
                _orb = 0,
                _orc = 0,
                _ord = _or9[10];
            return _or8 > 0 && _or9.forEach(function(_ore, _orf) {
                _orf >= 4 && (_ora += _ore), _orf >= 6 && (_orb += _ore), _orf >= 8 && (_orc += _ore);
            }), 1 == _or8 && (_ora >= 1 && (_or7.tais += 1), _orb >= 1 && (_or7.kaih += 1), _orc >= 1 && (_or7.tais += 1), _ord >= 1 && (_or7.kaih += 1)), _or7;
        };
    },
    99790: (_org, _orh, _ori) => {
        'use strict';
        var _orj = null;
        defineModule(_orh);
        Object.defineProperty(_orh, '__esModule', {
            'value': true
        }), _orh.getSlot439PersonalEffect = void 0;
        var _ork = _ori(74496);
        _orh.getSlot439PersonalEffect = function(_orl) {
            var _orm = null,
                _orn = new _ork.SlotItemEffectModel();
            1 != _orl.stype && 2 != _orl.stype && 3 != _orl.stype && 21 != _orl.stype || (_orn.tais += 1, _orn.kaih += 1), 101 != _orl.ctype && 1 != _orl.stype || (_orn.tais += 1);
            var _oro = _orl.getCountryName();
            return 'アメリカ' != _oro && 'イギリス' != _oro || (_orn.tais += 2), _orn;
        };
    },
    18387: (_orp, _orq, _orr) => {
        'use strict';
        var _ors = null;
        defineModule(_orq);
        Object.defineProperty(_orq, '__esModule', {
            'value': true
        }), _orq.getSlot440_441PersonalEffect = void 0;
        var _ort = _orr(74496);
        _orq.getSlot440_441PersonalEffect = function(_oru) {
            var _orv = null,
                _orw = new _ort.SlotItemEffectModel();
            return 114 == _oru.ctype && (_orw.raig += 2), _orw;
        };
    },
    70941: (_orx, _ory, _orz) => {
        'use strict';
        var _os0 = null;
        defineModule(_ory);
        Object.defineProperty(_ory, '__esModule', {
            'value': true
        }), _ory.getSlot442_443PersonalEffect = void 0;
        var _os1 = _orz(74496);
        _ory.getSlot442_443PersonalEffect = function(_os2) {
            var _os3 = null,
                _os4 = new _os1.SlotItemEffectModel();
            return 122 == _os2.ctype ? (_os4.raig += 1, _os4.kaih += 2) : 114 == _os2.ctype && (_os4.raig += 2), _os4;
        };
    },
    35025: (_os5, _os6, _os7) => {
        'use strict';
        var _os8 = null;
        defineModule(_os6);
        Object.defineProperty(_os6, '__esModule', {
            'value': true
        }), _os6.getSlot447PersonalEffect = void 0;
        var _os9 = _os7(74496);
        _os6.getSlot447PersonalEffect = function(_osa) {
            var _osb = null,
                _osc = new _os9.SlotItemEffectModel(),
                _osd = _osa.get_each_level_nums(447),
                _ose = 0,
                _osf = 0,
                _osg = 0,
                _osh = 0;
            _osd.forEach(function(_osi, _osj) {
                _osj >= 2 && (_ose += _osi), _osj >= 4 && (_osf += _osi), _osj >= 6 && (_osg += _osi), _osj >= 8 && (_osh += _osi);
            }), _ose >= 1 && (_osc.houg += 1 * _ose), _osf >= 1 && (_osc.tyku += 1 * _osf), _osg >= 1 && (_osc.tais += 1 * _osg), _osh >= 1 && (_osc.kaih += 1 * _osh);
            var _osk = _osd[10];
            _osk >= 1 && (_osc.tais += 1 * _osk);
            var _osl = false,
                _osm = new _os9.SlotItemEffectModel();
            if (76 == _osa.ctype && (_osm.houg += 1, _osm.tais += 1, _osm.kaih += 2, _osl = true), 'うんよう' == _osa.yomi ? (_osm.houg += 1, _osm.tais += 1, _osm.kaih += 1, _osl = true) : 'ほうしょう' != _osa.yomi && 'たいげい・りゅうほう' != _osa.yomi || (_osm.houg += 1, _osm.tais += 2, _osm.kaih += 1, _osl = true), 0 == _osl) return _osc;
            894 != _osa.ship_id && 899 != _osa.ship_id || (_osm.houg += 1, _osm.kaih += 1, _osm.tais += 1, _osm.tyku += 1, _osl = true);
            var _osn = _osa.get_slotnums(447);
            return _osc.add(_osm.multiply(_osn)), _osc;
        };
    },
    96804: (_oso, _osp, _osq) => {
        'use strict';
        var _osr = null;
        defineModule(_osp);
        Object.defineProperty(_osp, '__esModule', {
            'value': true
        }), _osp.getSlot450PersonalEffect = void 0;
        var _oss = _osq(74496);
        _osp.getSlot450PersonalEffect = function(_ost) {
            var _osu = null,
                _osv = new _oss.SlotItemEffectModel(),
                _osw = false,
                _osx = new _oss.SlotItemEffectModel();
            if (101 == _ost.ctype && (_osx.houg += 1, _osx.tyku += 2, _osx.souk += 1, _osx.kaih += 3, _osw = true), 1 == _ost.stype && (_osx.tyku += 1, _osx.souk += 1, _osx.kaih += 2, _osw = true), 0 == _osw) return _osv;
            var _osy = _ost.get_slotnums(450);
            return _osv.add(_osx.multiply(_osy)), _osv;
        };
    },
    33896: (_osz, _ot0, _ot1) => {
        'use strict';
        var _ot2 = null;
        defineModule(_ot0);
        Object.defineProperty(_ot0, '__esModule', {
            'value': true
        }), _ot0.getSlot451PersonalEffect = void 0;
        var _ot3 = _ot1(74496);
        _ot0.getSlot451PersonalEffect = function(_ot4) {
            var _ot5 = null,
                _ot6 = new _ot3.SlotItemEffectModel(),
                _ot7 = false,
                _ot8 = new _ot3.SlotItemEffectModel(),
                _ot9 = 0;
            if ('あきつまる' == _ot4.yomi ? (_ot8.houg += 1, _ot8.tais += 2, _ot7 = true, 166 == _ot4.ship_id && (_ot9 = 2)) : 'やましおまる' != _ot4.yomi && 'くまのまる' != _ot4.yomi || (_ot8.houg += 1, _ot8.tais += 3, _ot7 = true, _ot9 = 1), 0 == _ot7) return _ot6;
            var _ota = _ot4.get_slotnums(451);
            if (_ot6.add(_ot8.multiply(_ota)), 0 == _ot9) return _ot6;
            var _otb = _ot4.get_each_level_nums(451),
                _otc = [];
            return _ot9 > 0 && _otb.forEach(function(_otd, _ote) {
                var _otf = null;
                for (var _otg = 1; _otg <= _ot4.SLOT_LEVEL_MAX; _otg++) _ote >= _otg && (null == _otc[_otg] && (_otc[_otg] = 0), _otc[_otg] += _otd);
            }), 1 == _ot9 ? (_otc[1] >= 1 && (_ot6.houg += 2 * _otc[1]), _otc[2] >= 1 && (_ot6.houm += 1 * _otc[2]), _otc[3] >= 1 && (_ot6.tais += 1 * _otc[3]), _otc[4] >= 1 && (_ot6.houg += 1 * _otc[4]), _otc[6] >= 1 && (_ot6.houm += 1 * _otc[6]), _otc[8] >= 1 && (_ot6.tais += 1 * _otc[8]), _otc[10] >= 1 && (_ot6.houg += 1 * _otc[10])) : 2 == _ot9 && (_otc[1] >= 1 && (_ot6.houg += 1 * _otc[1]), _otc[3] >= 1 && (_ot6.tais += 1 * _otc[3]), _otc[5] >= 1 && (_ot6.houm += 1 * _otc[5]), _otc[7] >= 1 && (_ot6.tais += 1 * _otc[7]), _otc[10] >= 1 && (_ot6.houg += 1 * _otc[10])), _ot6;
        };
    },
    11031: function(_oth, _oti, _otj) {
        'use strict';
        var _otk = null;
        var _otl = this && this.__importDefault || function(_otm) {
            var _otn = null;
            return _otm && _otm.__esModule ? _otm : {
                'default': _otm
            };
        };
        defineModule(_oti);
        Object.defineProperty(_oti, '__esModule', {
            'value': true
        }), _oti.getSlot455PersonalEffect = void 0;
        var _oto = _otj(74496),
            _otp = _otl(_otj(18622));
        _oti.getSlot455PersonalEffect = function(_otq) {
            var _otr = null,
                _ots = new _oto.SlotItemEffectModel(),
                _ott = false,
                _otu = new _oto.SlotItemEffectModel(),
                _otv = 0,
                _otw = _otq.get_slotnums(455);
            if (1 != _otq.ctype && 5 != _otq.ctype && 12 != _otq.ctype || (_otu.houg += 2, _otu.tyku += 1, 12 == _otq.ctype && (_otu.houg += 1), 666 == _otq.ship_id ? (_otu.houg += 1, _otu.tais += 1) : 959 == _otq.ship_id && (_otu.houg += 2, _otw >= 2 && (_ots.houg += 2), _otw >= 3 && (_ots.houg += 3)), _otv = 1, _ott = true), 'うらなみ' == _otq.yomi && (_otu.houg += 1, 647 == _otq.ship_id && (_otu.houg += 1, _otu.raig += 1, _otu.tais += 1, _otu.kaih += 1), _ott = true), 0 == _ott) return _ots;
            if (_ots.add(_otu.multiply(_otw)), 0 == _otv) return _ots;
            for (var _otx = 0, _oty = 0, _otz = 0, _ou0 = _otq.have_slot_ids(); _otz < _ou0.length; _otz++) {
                var _ou1 = _ou0[_otz],
                    _ou2 = _otp.default.model.slot.getMst(_ou1),
                    _ou3 = _ou2.equipType;
                12 != _ou3 && 13 != _ou3 || (_ou2.sakuteki >= 5 && (_otx += _otq.get_slotnums(parseInt(_ou1))), _ou2.taiku >= 2 && (_oty += _otq.get_slotnums(parseInt(_ou1))));
            }
            if (1 == _otv) {
                _otx >= 1 && (_ots.houg += 3, _ots.kaih += 2, _ots.raig += 1);
                var _ou4 = _otq.get_slotnums(13),
                    _ou5 = _otq.get_slotnums(125),
                    _ou6 = _otq.get_slotnums(285),
                    _ou7 = _ou4 + _ou5 + _ou6;
                1 == _ou7 ? (_ots.houg += 1, _ots.raig += 3) : _ou7 >= 2 && (_ots.houg += 2, _ots.raig += 5), _ou6 >= 1 && (_ots.raig += 1), _oty >= 1 && (_ots.tyku += 4);
            }
            return _ots;
        };
    },
    71383: (_ou8, _ou9, _oua) => {
        'use strict';
        var _oub = null;
        defineModule(_ou9);
        Object.defineProperty(_ou9, '__esModule', {
            'value': true
        }), _ou9.getSlot456PersonalEffect = void 0;
        var _ouc = _oua(74496);
        _ou9.getSlot456PersonalEffect = function(_oud) {
            var _oue = null,
                _ouf = new _ouc.SlotItemEffectModel(),
                _oug = false,
                _ouh = new _ouc.SlotItemEffectModel(),
                _oui = _oud.getCountryName();
            if ('アメリカ' == _oui && (_ouh.houg += 3, _ouh.kaih += 4, _ouh.saku += 4, _ouf.houm += 3, _oug = true), 'イギリス' != _oui && 'オーストラリア' != _oui || (_ouh.houg += 2, _ouh.kaih += 2, _ouh.saku += 2, _ouf.houm += 2, _oug = true), 87 != _oud.ctype && 91 != _oud.ctype || (_ouh.houg += 1, _ouf.leng += 1, _oug = true), 651 != _oud.ship_id && 656 != _oud.ship_id || (_ouf.houg += 2, _ouf.kaih += 2, _ouf.saku += 3, _ouf.leng += 1, _ouf.houm += 2), 0 == _oug) return _ouf;
            var _ouj = _oud.get_slotnums(456);
            return _ouf.add(_ouh.multiply(_ouj)), _ouf;
        };
    },
    55888: (_ouk, _oul, _oum) => {
        'use strict';
        var _oun = null;
        defineModule(_oul);
        Object.defineProperty(_oul, '__esModule', {
            'value': true
        }), _oul.getSlot457PersonalEffect = void 0;
        var _ouo = _oum(74496);
        _oul.getSlot457PersonalEffect = function(_oup) {
            var _ouq = null,
                _our = new _ouo.SlotItemEffectModel(),
                _ous = 0;
            if (109 == _oup.ctype ? (_our.raig += 3, _our.kaih += 3, _ous = 1) : 71 == _oup.ctype || 103 == _oup.ctype ? (_our.raig += 2, _our.kaih += 2, _ous = 2) : 44 == _oup.ctype && (_our.raig += 1, _our.kaih += 4, _ous = 3), 0 == _ous) return _our;
            var _out = _oup.get_each_level_nums(461),
                _ouu = [];
            return _ous > 0 && _out.forEach(function(_ouv, _ouw) {
                var _oux = null;
                for (var _ouy = 1; _ouy <= _oup.SLOT_LEVEL_MAX; _ouy++) null == _ouu[_ouy] && (_ouu[_ouy] = 0), _ouw >= _ouy && (_ouu[_ouy] += _ouv);
            }), 1 == _ous ? (_ouu[2] >= 1 && (_our.raig += 1 * _ouu[2]), _ouu[3] >= 1 && (_our.kaih += 1 * _ouu[3]), _ouu[4] >= 1 && (_our.raig += 1 * _ouu[4]), _ouu[5] >= 1 && (_our.houm += 1 * _ouu[5]), _ouu[6] >= 1 && (_our.raig += 1 * _ouu[6]), _ouu[8] >= 1 && (_our.raig += 1 * _ouu[8]), _ouu[10] >= 1 && (_our.houm += 1 * _ouu[10])) : 2 == _ous ? (_ouu[3] >= 1 && (_our.kaih += 1 * _ouu[3]), _ouu[4] >= 1 && (_our.raig += 1 * _ouu[4]), _ouu[6] >= 1 && (_our.raig += 1 * _ouu[6]), _ouu[8] >= 1 && (_our.raig += 1 * _ouu[8]), _ouu[10] >= 1 && (_our.houm += 1 * _ouu[10])) : 3 == _ous && (_ouu[4] >= 1 && (_our.raig += 1 * _ouu[4]), _ouu[6] >= 1 && (_our.raig += 1 * _ouu[6]), _ouu[8] >= 1 && (_our.raig += 1 * _ouu[8]), _ouu[10] >= 1 && (_our.houm += 1 * _ouu[10])), _our;
        };
    },
    2258: (_ouz, _ov0, _ov1) => {
        'use strict';
        var _ov2 = null;
        defineModule(_ov0);
        Object.defineProperty(_ov0, '__esModule', {
            'value': true
        }), _ov0.getSlot458PersonalEffect = void 0;
        var _ov3 = _ov1(74496);
        _ov0.getSlot458PersonalEffect = function(_ov4) {
            var _ov5 = null,
                _ov6 = new _ov3.SlotItemEffectModel(),
                _ov7 = 0,
                _ov8 = false;
            if (13 != _ov4.stype && 14 != _ov4.stype || (_ov8 = true), 109 == _ov4.ctype ? (_ov6.raig += 3, _ov6.kaih += 6, _ov7 = 1) : 71 == _ov4.ctype || 103 == _ov4.ctype ? (_ov6.raig += 3, _ov6.kaih += 4, _ov7 = 2) : 44 == _ov4.ctype && (_ov6.raig += 3, _ov6.kaih += 3, _ov7 = 3), 0 == _ov8 && 0 == _ov7) return _ov6;
            var _ov9 = [];
            [458, 461].forEach(function(_ova) {
                var _ovb = null,
                    _ovc = _ov4.get_each_level_nums(_ova);
                null == _ov9[_ova] && (_ov9[_ova] = []), _ovc.forEach(function(_ovd, _ove) {
                    var _ovf = null;
                    for (var _ovg = 1; _ovg <= _ov4.SLOT_LEVEL_MAX; _ovg++) null == _ov9[_ova][_ovg] && (_ov9[_ova][_ovg] = 0), _ove >= _ovg && (_ov9[_ova][_ovg] += _ovd);
                });
            });
            var _ovh = _ov9[458][2],
                _ovi = _ov9[458][3],
                _ovj = _ov9[458][4],
                _ovk = _ov9[458][5],
                _ovl = _ov9[458][6],
                _ovm = _ov9[458][8],
                _ovn = _ov9[458][10],
                _ovo = _ov9[461][4];
            return _ov7 >= 1 && _ov7 <= 3 && (_ovj >= 1 && (_ov6.houm += 1 * _ovj), _ovl >= 1 && (_ov6.kaih += 1 * _ovl), _ovm >= 1 && (_ov6.raig += 1 * _ovm)), _ov8 && (_ovi >= 1 && (_ov6.kaih += 1 * _ovi), _ovk >= 1 && (_ov6.raig += 1 * _ovk), _ovn >= 1 && (_ov6.houm += 1 * _ovn), _ovh >= 1 && _ovo >= 1 && (_ov6.raig += 7, _ov6.houm += 5)), _ov6;
        };
    },
    43768: (_ovp, _ovq, _ovr) => {
        'use strict';
        var _ovs = null;
        defineModule(_ovq);
        Object.defineProperty(_ovq, '__esModule', {
            'value': true
        }), _ovq.getSlot463PersonalEffect = void 0;
        var _ovt = _ovr(74496);
        _ovq.getSlot463PersonalEffect = function(_ovu) {
            var _ovv = null,
                _ovw = new _ovt.SlotItemEffectModel(),
                _ovx = false,
                _ovy = new _ovt.SlotItemEffectModel(),
                _ovz = _ovu.get_slotnums(142),
                _ow0 = _ovu.get_slotnums(460),
                _ow1 = _ovz + _ow0;
            if (37 == _ovu.ctype && (_ovy.houg += 1, _ovy.tyku += 2, _ovy.kaih += 1, _ovy.houm += 1, _ow1 >= 1 && (_ovw.tyku += 1, _ovw.kaih += 1, _ovw.houm += 1), _ovx = true), 916 != _ovu.ship_id && 911 != _ovu.ship_id && 546 != _ovu.ship_id || (_ovy.houg += 1, _ovy.kaih += 1, _ovy.houm += 2, _ow0 >= 1 && (_ovw.houg += 1, _ovw.kaih += 1, _ovw.houm += 2), _ovx = true), 0 == _ovx) return _ovw;
            var _ow2 = _ovu.get_slotnums(463);
            return _ovw.add(_ovy.multiply(_ow2)), _ovw;
        };
    },
    92174: (_ow3, _ow4, _ow5) => {
        'use strict';
        var _ow6 = null;
        defineModule(_ow4);
        Object.defineProperty(_ow4, '__esModule', {
            'value': true
        }), _ow4.getSlot464PersonalEffect = void 0;
        var _ow7 = _ow5(74496);
        _ow4.getSlot464PersonalEffect = function(_ow8) {
            var _ow9 = null,
                _owa = new _ow7.SlotItemEffectModel(),
                _owb = false,
                _owc = new _ow7.SlotItemEffectModel(),
                _owd = _ow8.get_slotnums(142),
                _owe = _ow8.get_slotnums(460),
                _owf = _owd + _owe;
            if (37 == _ow8.ctype ? (_owc.tyku += 3, _owc.kaih += 2, _owf >= 1 && (_owa.tyku += 2, _owa.kaih += 1, _owa.houm += 1), _owb = true) : 6 != _ow8.ctype && 73 != _ow8.ctype && 113 != _ow8.ctype || (_owc.tyku = _owc.tyku - 2, _owc.kaih = _owc.kaih - 2, _owb = true), 916 != _ow8.ship_id && 911 != _ow8.ship_id && 546 != _ow8.ship_id && 593 != _ow8.ship_id && 954 != _ow8.ship_id || (_owc.tyku += 2, _owc.kaih += 2, _owe >= 1 && (_owa.houg += 2, _owa.tyku += 2, _owa.kaih += 2, _owa.houm += 3), _owb = true), 0 == _owb) return _owa;
            var _owg = _ow8.get_slotnums(464);
            return _owa.add(_owc.multiply(_owg)), _owa;
        };
    },
    38003: (_owh, _owi, _owj) => {
        'use strict';
        var _owk = null;
        defineModule(_owi);
        Object.defineProperty(_owi, '__esModule', {
            'value': true
        }), _owi.getSlot465PersonalEffect = void 0;
        var _owl = _owj(74496);
        _owi.getSlot465PersonalEffect = function(_owm) {
            var _own = null,
                _owo = new _owl.SlotItemEffectModel(),
                _owp = false,
                _owq = new _owl.SlotItemEffectModel(),
                _owr = _owm.get_slotnums(142),
                _ows = _owm.get_slotnums(460),
                _owt = _owr + _ows;
            if (916 == _owm.ship_id ? (_owq.houg += 2, _owq.kaih += 8, _owq.houm += 2, _ows >= 1 && (_owo.kaih += 2, _owo.houm += 1), _owp = true) : 911 != _owm.ship_id && 546 != _owm.ship_id || (_owq.houg += 1, _owq.kaih += 2, _owq.houm += 1, _ows >= 1 && (_owo.kaih += 1, _owo.houm += 1), _owp = true), 37 == _owm.ctype && _owt >= 1 && (_owo.houg += 2, _owo.houm += 2), 0 == _owp) return _owo;
            var _owu = _owm.get_slotnums(465);
            return _owo.add(_owq.multiply(_owu)), _owo;
        };
    },
    65455: (_owv, _oww, _owx) => {
        'use strict';
        var _owy = null;
        defineModule(_oww);
        Object.defineProperty(_oww, '__esModule', {
            'value': true
        }), _oww.getSlot466PersonalEffect = void 0;
        var _owz = _owx(74496);
        _oww.getSlot466PersonalEffect = function(_ox0) {
            var _ox1 = null,
                _ox2 = new _owz.SlotItemEffectModel(),
                _ox3 = false,
                _ox4 = new _owz.SlotItemEffectModel();
            if (277 == _ox0.ship_id || 278 == _ox0.ship_id || 156 == _ox0.ship_id || 288 == _ox0.ship_id || 112 == _ox0.ship_id || 280 == _ox0.ship_id || 279 == _ox0.ship_id ? (_ox4.houg += 1, _ox4.houm += 1, _ox3 = true) : 461 == _ox0.ship_id || 462 == _ox0.ship_id || 466 == _ox0.ship_id || 467 == _ox0.ship_id ? (_ox4.houg += 2, _ox4.kaih += 2, _ox4.houm += 1, _ox3 = true) : 594 != _ox0.ship_id && 698 != _ox0.ship_id && 646 != _ox0.ship_id && 599 != _ox0.ship_id && 610 != _ox0.ship_id && 196 != _ox0.ship_id && 197 != _ox0.ship_id || (_ox4.houg += 1, _ox4.kaih += 1, _ox4.houm += 2, _ox3 = true), 0 == _ox3) return _ox2;
            var _ox5 = _ox0.get_slotnums(466);
            return _ox2.add(_ox4.multiply(_ox5)), _ox2;
        };
    },
    70362: (_ox6, _ox7, _ox8) => {
        'use strict';
        var _ox9 = null;
        defineModule(_ox7);
        Object.defineProperty(_ox7, '__esModule', {
            'value': true
        }), _ox7.getSlot467PersonalEffect = void 0;
        var _oxa = _ox8(74496);
        _ox7.getSlot467PersonalEffect = function(_oxb) {
            var _oxc = null,
                _oxd = new _oxa.SlotItemEffectModel(),
                _oxe = false,
                _oxf = new _oxa.SlotItemEffectModel();
            if ('アメリカ' == _oxb.getCountryName()) {
                for (var _oxg = _oxb.getUSSWaterRaderDict(), _oxh = _oxb.getUSSAirRaderDict(), _oxi = 0, _oxj = 0, _oxk = 0, _oxl = _oxb.have_slot_ids(); _oxk < _oxl.length; _oxk++) {
                    var _oxm = _oxl[_oxk];
                    _oxg[parseInt(_oxm)] && (_oxi += _oxb.get_slotnums(parseInt(_oxm))), _oxh[parseInt(_oxm)] && (_oxj += _oxb.get_slotnums(parseInt(_oxm)));
                }
                _oxf.houg += 1, _oxf.tyku += 1, _oxf.kaih += 2, _oxi >= 1 && (_oxd.houg += 1, _oxd.tyku += 1, _oxd.kaih += 1, _oxd.houm += 2), _oxj >= 1 && (_oxd.tyku += 2, _oxd.kaih += 2), 65 != _oxb.ctype && 93 != _oxb.ctype && 102 != _oxb.ctype && 107 != _oxb.ctype && 125 != _oxb.ctype || (_oxf.tyku += 2, _oxf.kaih += 1), _oxe = true;
            }
            if (0 == _oxe) return _oxd;
            var _oxn = _oxb.get_slotnums(467);
            return _oxd.add(_oxf.multiply(_oxn)), _oxd;
        };
    },
    68086: (_oxo, _oxp, _oxq) => {
        'use strict';
        var _oxr = null;
        defineModule(_oxp);
        Object.defineProperty(_oxp, '__esModule', {
            'value': true
        }), _oxp.getSlot470PersonalEffect = void 0;
        var _oxs = _oxq(74496);
        _oxp.getSlot470PersonalEffect = function(_oxt) {
            var _oxu = null,
                _oxv = new _oxs.SlotItemEffectModel(),
                _oxw = false,
                _oxx = new _oxs.SlotItemEffectModel(),
                _oxy = _oxt.get_slotnums(470),
                _oxz = _oxt.get_slotnums(529),
                _oy0 = _oxy + _oxz,
                _oy1 = _oxt.get_each_level_over_nums([470, 529]),
                _oy2 = (_oy1.slot[470], _oy1.slot[529]),
                _oy3 = _oy1.total,
                _oy4 = 0;
            23 == _oxt.ctype || 18 == _oxt.ctype ? (_oxx.houg += 1, _oxw = true, _oy4 = 1) : 30 == _oxt.ctype && (_oxx.houg += 2, _oxw = true, _oy4 = 2), ('しぐれ' == _oxt.yomi || 'ゆきかぜ' == _oxt.yomi || 'いそかぜ' == _oxt.yomi) && (_oxx.kaih += 2, _oxw = true), 405 == _oxt.ship_id || 246 == _oxt.ship_id || 144 == _oxt.ship_id || 145 == _oxt.ship_id || 497 == _oxt.ship_id ? (_oxz >= 1 && (_oxv.houg += 1 * _oxz, _oxv.tyku += 1 * _oxz, _oxv.houm += 1 * _oxz, _oxv.kaih += 1 * _oxz), 2 == _oxz ? _oxv.houg += 1 : _oxz >= 3 && (_oxv.houg += 3), _oy2[8] >= 1 && (_oxv.tyku += 1 * _oy2[8]), _oy2[10] >= 1 && (_oxv.houg += 1 * _oy2[10])) : 323 == _oxt.ship_id || 498 == _oxt.ship_id || 961 == _oxt.ship_id ? (_oxz >= 1 && (_oxv.houg += 2 * _oxz, _oxv.tyku += 2 * _oxz, _oxv.houm += 1 * _oxz, _oxv.kaih += 1 * _oxz), 2 == _oxz ? _oxv.houg += 2 : _oxz >= 3 && (_oxv.houg += 4), _oy2[6] >= 1 && (_oxv.tyku += 1 * _oy2[6]), _oy2[8] >= 1 && (_oxv.houm += 1 * _oy2[8]), _oy2[10] >= 1 && (_oxv.houg += 1 * _oy2[10])) : 975 == _oxt.ship_id && (_oxz >= 1 && (_oxv.houg += 3 * _oxz, _oxv.tyku += 3 * _oxz, _oxv.houm += 2 * _oxz, _oxv.kaih += 2 * _oxz), 2 == _oxz ? _oxv.houg += 3 : _oxz >= 3 && (_oxv.houg += 6), _oy2[4] >= 1 && (_oxv.tyku += 1 * _oy2[4]), _oy2[6] >= 1 && (_oxv.houg += 1 * _oy2[6]), _oy2[8] >= 1 && (_oxv.houm += 1 * _oy2[8]), _oy2[10] >= 1 && (_oxv.houg += 1 * _oy2[10])), 961 == _oxt.ship_id && (_oxx.houg += 3, _oxx.houm += 3, _oxx.kaih += 2, _oxw = true), 566 != _oxt.ship_id && 567 != _oxt.ship_id && 568 != _oxt.ship_id && 656 != _oxt.ship_id && 670 != _oxt.ship_id && 915 != _oxt.ship_id && 651 != _oxt.ship_id && 145 != _oxt.ship_id && 961 != _oxt.ship_id && 951 != _oxt.ship_id || (_oxv.houg += 1, _oxv.houm += 2, _oy0 >= 2 && (_oxv.houg += 2), _oy3[5] >= 1 && (_oxv.houm += 1 * _oy3[5]), _oy3[8] >= 1 && (_oxv.houg += 1 * _oy3[8]), _oy3[10] >= 1 && (_oxv.houm += 1 * _oy3[10])), _oxw && _oxv.add(_oxx.multiply(_oy0));
            var _oy5 = _oxt.get_have_rader_nums(),
                _oy6 = _oy5.water_rader,
                _oy7 = _oy5.air_rader;
            return _oy6 >= 1 && (1 == _oy4 ? (_oxv.houg += 1, _oxv.raig += 3, _oxv.kaih += 1, _oxv.houm += 1) : 2 == _oy4 && (_oxv.houg += 2, _oxv.raig += 3, _oxv.kaih += 1, _oxv.houm += 3)), _oy7 >= 1 && (_oxz >= 1 && (_oxv.tyku += 2, _oxv.kaih += 2), 2 == _oxz ? _oxv.tyku += 2 : _oxz >= 3 && (_oxv.tyku += 4)), _oxv;
        };
    },
    78173: (_oy8, _oy9, _oya) => {
        'use strict';
        var _oyb = null;
        defineModule(_oy9);
        Object.defineProperty(_oy9, '__esModule', {
            'value': true
        }), _oy9.getSlot471PersonalEffect = void 0;
        var _oyc = _oya(74496);
        _oy9.getSlot471PersonalEffect = function(_oyd) {
            var _oye = null,
                _oyf = new _oyc.SlotItemEffectModel(),
                _oyg = false,
                _oyh = new _oyc.SlotItemEffectModel(),
                _oyi = 0;
            if ('フランス' == _oyd.getCountryName() && (_oyh.houg += 2, _oyh.kaih += 2, _oyh.houm += 2, _oyg = true, _oyi = 1), 79 == _oyd.ctype && (_oyh.houg += 2, _oyh.houm += 1, _oyg = true), 0 == _oyg) return _oyf;
            var _oyj = _oyd.get_slotnums(471);
            if (_oyf.add(_oyh.multiply(_oyj)), 0 == _oyi) return _oyf;
            var _oyk = _oyd.get_each_level_nums(471),
                _oyl = 0,
                _oym = 0;
            if (_oyi > 0 && _oyk.forEach(function(_oyn, _oyo) {
                    _oyo >= 6 && (_oyl += _oyn), _oyo >= 8 && (_oym += _oyn);
                }), 1 == _oyi) {
                _oyl >= 1 && (_oyf.kaih += 1 * _oyl, _oyf.houm += 1 * _oyl), _oym >= 1 && (_oyf.houg += 1 * _oym, _oyf.kaih += 1 * _oym, _oyf.houm += 1 * _oym);
                var _oyp = _oyk[10];
                _oyp >= 1 && (_oyf.houg += 1 * _oyp, _oyf.houm += 1 * _oyp);
            }
            return _oyf;
        };
    },
    22581: (_oyq, _oyr, _oys) => {
        'use strict';
        var _oyt = null;
        defineModule(_oyr);
        Object.defineProperty(_oyr, '__esModule', {
            'value': true
        }), _oyr.getSlot472PersonalEffect = void 0;
        var _oyu = _oys(74496);
        _oyr.getSlot472PersonalEffect = function(_oyv) {
            var _oyw = null,
                _oyx = new _oyu.SlotItemEffectModel(),
                _oyy = false,
                _oyz = new _oyu.SlotItemEffectModel(),
                _oz0 = _oyv.getCountryName();
            if ('アメリカ' == _oz0 && (_oyz.tais += 2, _oyy = true), 'イギリス' == _oz0 && (_oyz.tais += 1, _oyy = true), 1 == _oyv.stype && (_oyz.kaih += 1, _oyy = true), _oyy) {
                var _oz1 = _oyv.get_slotnums(472);
                _oyx.add(_oyz.multiply(_oz1));
            }
            return 920 == _oyv.ship_id && (_oyx.tais += 1, _oyx.kaih += 1, _oyx.houm += 1), _oyx;
        };
    },
    13053: (_oz2, _oz3, _oz4) => {
        'use strict';
        var _oz5 = null;
        defineModule(_oz3);
        Object.defineProperty(_oz3, '__esModule', {
            'value': true
        }), _oz3.getSlot473PersonalEffect = void 0;
        var _oz6 = _oz4(74496);
        _oz3.getSlot473PersonalEffect = function(_oz7) {
            var _oz8 = null,
                _oz9 = new _oz6.SlotItemEffectModel(),
                _oza = false,
                _ozb = new _oz6.SlotItemEffectModel(),
                _ozc = _oz7.getCountryName();
            if ('アメリカ' == _ozc && (_ozb.houg += 1, _ozb.kaih += 1, _ozb.tyku += 1, _oza = true), 'イギリス' == _ozc && (_ozb.houg += 1, _ozb.kaih += 1, _oza = true), 0 == _oza) return _oz9;
            var _ozd = _oz7.get_slotnums(473);
            return _oz9.add(_ozb.multiply(_ozd)), _oz9;
        };
    },
    47874: (_oze, _ozf, _ozg) => {
        'use strict';
        var _ozh = null;
        defineModule(_ozf);
        Object.defineProperty(_ozf, '__esModule', {
            'value': true
        }), _ozf.getSlot474PersonalEffect = void 0;
        var _ozi = _ozg(74496);
        _ozf.getSlot474PersonalEffect = function(_ozj) {
            var _ozk = null,
                _ozl = new _ozi.SlotItemEffectModel(),
                _ozm = false,
                _ozn = new _ozi.SlotItemEffectModel(),
                _ozo = _ozj.getCountryName();
            if ('アメリカ' == _ozo && (_ozn.houg += 2, _ozn.kaih += 1, _ozn.tyku += 1, _ozm = true), 'イギリス' == _ozo && (_ozn.houg += 1, _ozn.kaih += 1, _ozn.tyku += 1, _ozm = true), 'フランス' == _ozo && (_ozn.houg += 1, _ozn.tyku += 1, _ozm = true), 707 != _ozj.ship_id && 930 != _ozj.ship_id || (_ozn.houg += 1, _ozn.kaih += 1, _ozm = true), 0 == _ozm) return _ozl;
            var _ozp = _ozj.get_slotnums(474);
            return _ozl.add(_ozn.multiply(_ozp)), _ozl;
        };
    },
    42788: (_ozq, _ozr, _ozs) => {
        'use strict';
        var _ozt = null;
        defineModule(_ozr);
        Object.defineProperty(_ozr, '__esModule', {
            'value': true
        }), _ozr.getSlot478PersonalEffect = void 0;
        var _ozu = _ozs(74496);
        _ozr.getSlot478PersonalEffect = function(_ozv) {
            var _ozw = null,
                _ozx = new _ozu.SlotItemEffectModel(),
                _ozy = _ozv.get_each_level_nums(478),
                _ozz = [];
            return _ozy.forEach(function(_p00, _p01) {
                var _p02 = null;
                for (var _p03 = 1; _p03 <= _ozv.SLOT_LEVEL_MAX; _p03++) _p01 >= _p03 && (null == _ozz[_p03] && (_ozz[_p03] = 0), _ozz[_p03] += _p00);
            }), _ozz.every(function(_p04) {
                return 0 == _p04;
            }) || (_ozz[1] >= 1 && (_ozx.houg += 1), _ozz[2] >= 1 && (_ozx.houm += 1), _ozz[3] >= 1 && (_ozx.kaih += 1), _ozz[4] >= 1 && (_ozx.baku += 1), _ozz[5] >= 1 && (_ozx.raig += 1), _ozz[6] >= 1 && (_ozx.tyku += 1), _ozz[7] >= 1 && (_ozx.houg += 1), _ozz[8] >= 1 && (_ozx.houm += 1), _ozz[9] >= 1 && (_ozx.kaih += 1), _ozz[10] >= 1 && (_ozx.houg += 1)), _ozx;
        };
    },
    22218: (_p05, _p06, _p07) => {
        'use strict';
        var _p08 = null;
        defineModule(_p06);
        Object.defineProperty(_p06, '__esModule', {
            'value': true
        }), _p06.getSlot47PersonalEffect = void 0;
        var _p09 = _p07(74496);
        _p06.getSlot47PersonalEffect = function(_p0a) {
            var _p0b = null,
                _p0c = new _p09.SlotItemEffectModel(),
                _p0d = new _p09.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_p0a.yomi) >= 0 ? (_p0d.tais += 3, _p0d.kaih += 2, _p0d.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_p0a.yomi) >= 0 && (_p0d.tais += 2, _p0d.kaih += 2), !_p0d.exists()) return _p0c;
            var _p0e = _p0a.get_slotnums(47) + _p0a.get_slotnums(438);
            return _p0c = _p0d.multiply(_p0e);
        };
    },
    57664: (_p0f, _p0g, _p0h) => {
        'use strict';
        var _p0i = null;
        defineModule(_p0g);
        Object.defineProperty(_p0g, '__esModule', {
            'value': true
        }), _p0g.getSlot483PersonalEffect = void 0;
        var _p0j = _p0h(74496);
        _p0g.getSlot483PersonalEffect = function(_p0k) {
            var _p0l = null,
                _p0m = new _p0j.SlotItemEffectModel(),
                _p0n = 0,
                _p0o = 0,
                _p0p = 0,
                _p0q = 0,
                _p0r = 0,
                _p0s = 0,
                _p0t = 0;
            if (6 == _p0k.ctype ? (_p0m.houg += 2, _p0m.tyku += 3, _p0m.houm += 1, _p0n = 1) : 2 == _p0k.ctype ? (_p0m.houg += 1, _p0m.tyku += 2, _p0m.kaih += 2, _p0m.houm += 1, _p0o = 1) : 37 == _p0k.ctype && (_p0p = 1), 8 == _p0k.stype || 9 == _p0k.stype || 10 == _p0k.stype ? _p0q = 1 : 5 != _p0k.stype && 6 != _p0k.stype || (_p0r = 1), 149 == _p0k.ship_id ? (_p0m.houg += 2, _p0m.tyku += 2) : 591 == _p0k.ship_id ? (_p0m.houg += 3, _p0m.tyku += 3, _p0m.kaih += 1) : 150 == _p0k.ship_id ? (_p0m.houg += 1, _p0m.tyku += 1) : 592 == _p0k.ship_id ? (_p0m.houg += 2, _p0m.tyku += 2, _p0m.kaih += 2) : 151 == _p0k.ship_id ? (_p0m.houg += 1, _p0m.tyku += 2, _p0m.kaih += 2) : 593 == _p0k.ship_id ? (_p0m.houg += 2, _p0m.tyku += 5, _p0m.kaih += 3) : 954 == _p0k.ship_id ? (_p0m.houg += 2, _p0m.tyku += 4, _p0m.kaih += 2) : 694 == _p0k.ship_id ? (_p0m.houg += 3, _p0m.tyku += 2, _p0m.kaih += 1) : 152 == _p0k.ship_id ? (_p0m.houg += 2, _p0m.tyku += 2) : 911 == _p0k.ship_id || 916 == _p0k.ship_id || 546 == _p0k.ship_id ? (_p0m.houg += 2, _p0m.tyku += 2, _p0m.kaih += 2, _p0s = 1) : 553 == _p0k.ship_id || 554 == _p0k.ship_id ? (_p0m.houg += 1, _p0m.tyku += 2, _p0m.kaih += 1, _p0t = 1) : 541 == _p0k.ship_id || 411 == _p0k.ship_id || 412 == _p0k.ship_id ? (_p0m.houg += 1, _p0m.tyku += 2) : 573 == _p0k.ship_id && (_p0m.houg += 2, _p0m.tyku += 2, _p0m.kaih += 1), 0 == [_p0n, _p0o, _p0p, _p0q, _p0r, _p0s, _p0t].reduce(function(_p0u, _p0v) {
                    return _p0u + _p0v;
                }, 0)) return _p0m;
            var _p0w = _p0k.get_each_level_nums(483),
                _p0x = 0,
                _p0y = [];
            return _p0w.forEach(function(_p0z, _p10) {
                var _p11 = null;
                _p10 >= 6 && (_p0x += _p0z);
                for (var _p12 = 1; _p12 <= _p0k.SLOT_LEVEL_MAX; _p12++) null == _p0y[_p12] && (_p0y[_p12] = 0), _p10 >= _p12 && (_p0y[_p12] += _p0z);
            }), 1 == _p0n ? (_p0x >= 1 && (_p0m.houm += 1), _p0w[10] >= 1 && (_p0m.houm += 1)) : 1 == _p0o ? (_p0y[5] >= 1 && (_p0m.kaih += 1), _p0y[6] >= 1 && (_p0m.houm += 1), _p0y[10] >= 1 && (_p0m.kaih += 1)) : 1 == _p0p && (_p0y[6] >= 1 && (_p0m.houm += 1), _p0y[10] >= 1 && (_p0m.kaih += 1)), 1 == _p0q ? (_p0y[2] >= 1 && (_p0m.tyku += 1), _p0y[4] >= 1 && (_p0m.houg += 1), _p0y[7] >= 1 && (_p0m.kaih += 1), _p0y[8] >= 1 && (_p0m.tyku += 1), _p0y[9] >= 1 && (_p0m.houg += 1)) : 1 == _p0r && (_p0y[2] >= 1 && (_p0m.tyku += 1), _p0y[4] >= 1 && (_p0m.houg += 1), _p0y[6] >= 1 && (_p0m.kaih += 1), _p0y[8] >= 1 && (_p0m.houm += 1), _p0y[10] >= 1 && (_p0m.houg += 1)), 1 == _p0s ? _p0y[5] >= 1 && (_p0m.houm += 1) : 1 == _p0t && (_p0y[1] >= 1 && (_p0m.houm += 1), _p0y[3] >= 1 && (_p0m.houm += 1)), _p0m;
        };
    },
    44990: (_p13, _p14, _p15) => {
        'use strict';
        var _p16 = null;
        defineModule(_p14);
        Object.defineProperty(_p14, '__esModule', {
            'value': true
        }), _p14.getSlot485PersonalEffect = void 0;
        var _p17 = _p15(74496);
        _p14.getSlot485PersonalEffect = function(_p18) {
            var _p19 = null,
                _p1a = new _p17.SlotItemEffectModel(),
                _p1b = false,
                _p1c = new _p17.SlotItemEffectModel();
            if (9 == _p18.ctype && (_p1c.houg += 1, _p1c.kaih += 2, _p1c.tyku += 3, _p1b = true), 501 == _p18.ship_id || 506 == _p18.ship_id ? (_p1c.kaih += 1, _p1c.tyku += 2, _p1c.houm += 1, _p1b = true) : 502 != _p18.ship_id && 507 != _p18.ship_id || (_p1c.kaih += 1, _p1c.tyku += 1, _p1c.houm += 1, _p1b = true), _p1b) {
                var _p1d = _p18.get_slotnums(485);
                _p1a.add(_p1c.multiply(_p1d));
            }
            var _p1e = _p18.get_each_level_nums(485),
                _p1f = 0,
                _p1g = 0,
                _p1h = 0,
                _p1i = _p1e[10];
            return _p1e.forEach(function(_p1j, _p1k) {
                _p1k >= 3 && (_p1f += _p1j), _p1k >= 5 && (_p1g += _p1j), _p1k >= 7 && (_p1h += _p1j);
            }), _p1f > 0 && (_p1a.houg += 1 * _p1f), _p1g > 0 && (_p1a.tyku += 1 * _p1g), _p1h > 0 && (_p1a.kaih += 1 * _p1h), _p1i > 0 && (_p1a.houm += 1 * _p1i), _p1a;
        };
    },
    83957: (_p1l, _p1m, _p1n) => {
        'use strict';
        var _p1o = null;
        defineModule(_p1m);
        Object.defineProperty(_p1m, '__esModule', {
            'value': true
        }), _p1m.getSlot486PersonalEffect = void 0;
        var _p1p = _p1n(74496);
        _p1m.getSlot486PersonalEffect = function(_p1q) {
            var _p1r = null,
                _p1s = new _p1p.SlotItemEffectModel(),
                _p1t = false,
                _p1u = new _p1p.SlotItemEffectModel();
            if (894 == _p1q.ship_id || 899 == _p1q.ship_id ? (_p1u.houg += 4, _p1u.tyku += 4, _p1u.kaih += 3, _p1u.houm += 2, _p1t = true) : 888 != _p1q.ship_id && 883 != _p1q.ship_id || (_p1u.houg += 2, _p1u.tyku += 2, _p1u.kaih += 2, _p1u.houm += 1, _p1t = true), _p1t) {
                var _p1v = _p1q.get_slotnums(486);
                _p1s.add(_p1u.multiply(_p1v));
            }
            var _p1w = _p1q.get_each_level_nums(486),
                _p1x = 0,
                _p1y = 0,
                _p1z = _p1w[10];
            return _p1w.forEach(function(_p20, _p21) {
                _p21 >= 6 && (_p1x += _p20), _p21 >= 8 && (_p1y += _p20);
            }), _p1x > 0 && (_p1s.kaih += 1 * _p1x, _p1s.houm += 1 * _p1x), _p1y > 0 && (_p1s.tyku += 1 * _p1y, _p1s.kaih += 1 * _p1y), _p1z > 0 && (_p1s.houg += 1 * _p1z, _p1s.houm += 1 * _p1z), _p1s;
        };
    },
    78539: (_p22, _p23, _p24) => {
        'use strict';
        var _p25 = null;
        defineModule(_p23);
        Object.defineProperty(_p23, '__esModule', {
            'value': true
        }), _p23.getSlot487PersonalEffect = void 0;
        var _p26 = _p24(74496);
        _p23.getSlot487PersonalEffect = function(_p27) {
            var _p28 = null,
                _p29 = new _p26.SlotItemEffectModel(),
                _p2a = false,
                _p2b = new _p26.SlotItemEffectModel();
            if (894 == _p27.ship_id || 899 == _p27.ship_id ? (_p2b.houg += 5, _p2b.tyku += 3, _p2b.kaih += 2, _p2b.houm += 4, _p2a = true) : 888 != _p27.ship_id && 883 != _p27.ship_id || (_p2b.houg += 3, _p2b.tyku += 1, _p2b.kaih += 1, _p2b.houm += 2, _p2a = true), _p2a) {
                var _p2c = _p27.get_slotnums(487);
                _p29.add(_p2b.multiply(_p2c));
            }
            var _p2d = _p27.get_each_level_nums(487),
                _p2e = 0,
                _p2f = 0,
                _p2g = _p2d[10];
            return _p2d.forEach(function(_p2h, _p2i) {
                _p2i >= 6 && (_p2e += _p2h), _p2i >= 8 && (_p2f += _p2h);
            }), _p2e > 0 && (_p29.houg += 1 * _p2e, _p29.kaih += 1 * _p2e), _p2f > 0 && (_p29.tyku += 1 * _p2f, _p29.houm += 1 * _p2f), _p2g > 0 && (_p29.houg += 1 * _p2g, _p29.houm += 1 * _p2g), _p29;
        };
    },
    96282: (_p2j, _p2k, _p2l) => {
        'use strict';
        var _p2m = null;
        defineModule(_p2k);
        Object.defineProperty(_p2k, '__esModule', {
            'value': true
        }), _p2k.getSlot488PersonalEffect = void 0;
        var _p2n = _p2l(74496);
        _p2k.getSlot488PersonalEffect = function(_p2o) {
            var _p2p = null,
                _p2q = new _p2n.SlotItemEffectModel(),
                _p2r = false,
                _p2s = new _p2n.SlotItemEffectModel(),
                _p2t = 0,
                _p2u = _p2o.getCountryName(),
                _p2v = {
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
                }[_p2o.ship_id];
            if (('日本' == _p2u && 2 == _p2o.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_p2o.ctype] && 1 == _p2o.stype) && (_p2s.tais += 1, _p2s.kaih += 1, _p2r = true), 1 == _p2v ? (_p2s.tais += 5, _p2s.kaih += 4, _p2s.houm += 2, _p2r = true, _p2t = 1) : 2 == _p2v ? (_p2s.tais += 2, _p2s.kaih += 1, _p2s.houm += 1, _p2r = true, _p2t = 2) : 3 == _p2v && (_p2s.tais += 1, _p2r = true, _p2t = 2), 0 == _p2r) return _p2q;
            var _p2w = _p2o.get_slotnums(488);
            if (_p2q.add(_p2s.multiply(_p2w)), 0 == _p2t) return _p2q;
            var _p2x = _p2o.get_each_level_nums(488),
                _p2y = [];
            return _p2x.forEach(function(_p2z, _p30) {
                var _p31 = null;
                for (var _p32 = 1; _p32 <= _p2o.SLOT_LEVEL_MAX; _p32++) _p30 >= _p32 && (null == _p2y[_p32] && (_p2y[_p32] = 0), _p2y[_p32] += _p2z);
            }), 1 == _p2t ? (_p2y[3] >= 1 && (_p2q.kaih += 1 * _p2y[3]), _p2y[5] >= 1 && (_p2q.tais += 1 * _p2y[5]), _p2y[7] >= 1 && (_p2q.houm += 1 * _p2y[7]), _p2y[8] >= 1 && (_p2q.kaih += 1 * _p2y[8]), _p2y[9] >= 1 && (_p2q.tais += 1 * _p2y[9]), _p2y[10] >= 1 && (_p2q.tais += 1 * _p2y[10])) : 2 == _p2t && (_p2y[5] >= 1 && (_p2q.tais += 1 * _p2y[5]), _p2y[7] >= 1 && (_p2q.kaih += 1 * _p2y[7]), _p2y[9] >= 1 && (_p2q.houm += 1 * _p2y[9]), _p2y[10] >= 1 && (_p2q.tais += 1 * _p2y[10])), _p2q;
        };
    },
    49679: (_p33, _p34, _p35) => {
        'use strict';
        var _p36 = null;
        defineModule(_p34);
        Object.defineProperty(_p34, '__esModule', {
            'value': true
        }), _p34.getSlot489PersonalEffect = void 0;
        var _p37 = _p35(74496);
        _p34.getSlot489PersonalEffect = function(_p38) {
            var _p39 = null,
                _p3a = new _p37.SlotItemEffectModel(),
                _p3b = false,
                _p3c = new _p37.SlotItemEffectModel();
            if ('あきつまる' != _p38.yomi && 'やましおまる' != _p38.yomi && 'くまのまる' != _p38.yomi || (_p3c.tyku = _p3c.tyku + 2, _p3c.kaih = _p3c.kaih + 1, _p3c.houg = _p3c.houg + 1, _p3c.tais = _p3c.tais + 1, _p3c.houm = _p3c.houm + 1, _p3b = true), 717 != _p38.ship_id && 948 != _p38.ship_id || (_p3c.tyku = _p3c.tyku + 2, _p3c.kaih = _p3c.kaih + 2, _p3c.houg = _p3c.houg + 2, _p3c.tais = _p3c.tais + 1, _p3c.houm = _p3c.houm + 1, _p3b = true), _p3b) {
                var _p3d = _p38.get_slotnums(489) + _p38.get_slotnums(491);
                _p3a.add(_p3c.multiply(_p3d));
            }
            var _p3e = _p38.get_each_level_nums(489),
                _p3f = _p38.get_each_level_nums(491),
                _p3g = 0,
                _p3h = 0,
                _p3i = 0;
            _p3e.forEach(function(_p3j, _p3k) {
                _p3k >= 3 && (_p3g += _p3j), _p3k >= 6 && (_p3h += _p3j), _p3k >= 8 && (_p3i += _p3j);
            }), _p3f.forEach(function(_p3l, _p3m) {
                _p3m >= 3 && (_p3g += _p3l), _p3m >= 6 && (_p3h += _p3l), _p3m >= 8 && (_p3i += _p3l);
            });
            var _p3n = _p3e[10] + _p3f[10];
            return _p3g >= 1 && (_p3a.kaih = _p3a.kaih + 1 * _p3g), _p3h >= 1 && (_p3a.tais = _p3a.tais + 1 * _p3h), _p3i >= 1 && (_p3a.houm = _p3a.houm + 1 * _p3i), _p3n >= 1 && (_p3a.houg = _p3a.houg + 1 * _p3n), _p3a;
        };
    },
    90312: function(_p3o, _p3p, _p3q) {
        'use strict';
        var _p3r = null;
        var _p3s = this && this.__importDefault || function(_p3t) {
            var _p3u = null;
            return _p3t && _p3t.__esModule ? _p3t : {
                'default': _p3t
            };
        };
        defineModule(_p3p);
        Object.defineProperty(_p3p, '__esModule', {
            'value': true
        }), _p3p.getSlot502PersonalEffect = void 0;
        var _p3v = _p3q(74496),
            _p3w = _p3s(_p3q(18622));
        _p3p.getSlot502PersonalEffect = function(_p3x) {
            var _p3y = null,
                _p3z = new _p3v.SlotItemEffectModel(),
                _p40 = _p3x.get_slotnums(502),
                _p41 = {
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
                _p42 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3,
                    694: 1
                },
                _p43 = {
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
                _p44 = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _p45 = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_p41[_p3x.ship_id]) {
                var _p46 = _p41[_p3x.ship_id];
                _p3z.houg += _p40 * _p46;
            }
            if (_p42[_p3x.ship_id]) {
                var _p47 = _p42[_p3x.ship_id];
                _p3z.tyku += _p40 * _p47;
            }
            if (_p43[_p3x.ship_id]) {
                var _p48 = _p43[_p3x.ship_id],
                    _p49 = _p3x.get_each_level_nums(502),
                    _p4a = [];
                _p49.forEach(function(_p4b, _p4c) {
                    var _p4d = null;
                    for (var _p4e = 1; _p4e <= _p3x.SLOT_LEVEL_MAX; _p4e++) _p4c >= _p4e && (null == _p4a[_p4e] && (_p4a[_p4e] = 0), _p4a[_p4e] += _p4b);
                }), 1 == _p48 ? (_p3z.kaih += 3 * _p40, _p4a[1] > 0 && (_p3z.kaih += 1 * _p4a[1]), _p4a[3] > 0 && (_p3z.tyku += 1 * _p4a[3]), _p4a[5] > 0 && (_p3z.houg += 1 * _p4a[5]), _p4a[7] > 0 && (_p3z.kaih += 1 * _p4a[7]), _p4a[8] > 0 && (_p3z.tyku += 1 * _p4a[8]), _p4a[9] > 0 && (_p3z.houg += 1 * _p4a[9]), _p4a[10] > 0 && (_p3z.tyku += 1 * _p4a[10])) : 2 == _p48 ? (_p3z.kaih += 1 * _p40, _p4a[2] > 0 && 151 == _p3x.ship_id && (_p3z.kaih += 1 * _p4a[2]), _p4a[4] > 0 && (_p3z.tyku += 1 * _p4a[4]), _p4a[6] > 0 && (_p3z.houg += 1 * _p4a[6]), _p4a[8] > 0 && (_p3z.kaih += 1 * _p4a[8]), _p4a[10] > 0 && (_p3z.tyku += 1 * _p4a[10])) : 3 == _p48 && (_p4a[5] > 0 && (_p3z.kaih += 1 * _p4a[5]), _p4a[8] > 0 && (_p3z.houg += 1 * _p4a[8]), _p4a[10] > 0 && (_p3z.tyku += 1 * _p4a[10]));
            }
            if (_p44[_p3x.ship_id]) {
                for (var _p4f = 0, _p4g = 0, _p4h = _p3x.have_slot_ids(); _p4g < _p4h.length; _p4g++) {
                    var _p4i = _p4h[_p4g],
                        _p4j = _p3w.default.model.slot.getMst(_p4i),
                        _p4k = _p4j.equipType;
                    12 != _p4k && 13 != _p4k || (_p4j.sakuteki >= 5 && (_p4f += _p3x.get_slotnums(parseInt(_p4i))), _p4j.taiku >= 2 && _p3x.get_slotnums(parseInt(_p4i)));
                }
                0;
                var _p4l = _p44[_p3x.ship_id];
                1 == _p4l && _p4f >= 1 ? (_p3z.houg += 3, _p3z.kaih += 4) : 2 == _p4l && _p4f >= 1 && (_p3z.houg += 2, _p3z.kaih += 2);
            }
            if (_p45[_p3x.ship_id]) {
                var _p4m = _p45[_p3x.ship_id],
                    _p4n = [],
                    _p4o = [],
                    _p4p = _p3x.have_slot_ids();
                [410, 411].forEach(function(_p4q) {
                    var _p4r = null;
                    _p4p.indexOf(_p4q.toString()) > -1 && (_p4o[_p4q] = _p3x.get_each_level_nums(_p4q), null == _p4n[_p4q] && (_p4n[_p4q] = []), _p4o[_p4q].forEach(function(_p4s, _p4t) {
                        var _p4u = null;
                        for (var _p4v = 1; _p4v <= _p3x.SLOT_LEVEL_MAX; _p4v++) null == _p4n[_p4q][_p4v] && (_p4n[_p4q][_p4v] = 0), _p4t >= _p4v && (_p4n[_p4q][_p4v] += _p4s);
                    }));
                });
                var _p4w = _p4o[410],
                    _p4x = _p4o[411];
                if (1 == _p4m) {
                    if (_p4w) {
                        _p3z.tyku += 1;
                        var _p4y = _p4n[410];
                        _p4y[7] >= 1 && (_p3z.houg += 1), _p4y[10] >= 1 && (_p3z.kaih += 1);
                    }
                    if (_p4x) {
                        _p3z.tyku += 2;
                        var _p4z = _p4n[411];
                        _p4z[2] >= 1 && (_p3z.houg += 1), _p4z[4] >= 1 && (_p3z.kaih += 1), _p4z[6] >= 1 && (_p3z.houm += 1), _p4z[8] >= 1 && (_p3z.tyku += 1), _p4z[10] >= 1 && (_p3z.houg += 1);
                    }
                }
            }
            return _p3z;
        };
    },
    86856: function(_p50, _p51, _p52) {
        'use strict';
        var _p53 = null;
        var _p54 = this && this.__importDefault || function(_p55) {
            var _p56 = null;
            return _p55 && _p55.__esModule ? _p55 : {
                'default': _p55
            };
        };
        defineModule(_p51);
        Object.defineProperty(_p51, '__esModule', {
            'value': true
        }), _p51.getSlot503PersonalEffect = void 0;
        var _p57 = _p52(74496),
            _p58 = _p54(_p52(18622));
        _p51.getSlot503PersonalEffect = function(_p59) {
            var _p5a = null,
                _p5b = new _p57.SlotItemEffectModel(),
                _p5c = _p59.get_slotnums(503),
                _p5d = {
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
                _p5e = {
                    149: 1,
                    591: 1,
                    592: 1,
                    694: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _p5f = {
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
                _p5g = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2,
                    694: 2
                },
                _p5h = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1,
                    694: 1
                },
                _p5i = {
                    591: 1,
                    592: 2,
                    593: 2,
                    694: 2,
                    954: 3
                };
            if (_p5d[_p59.ship_id]) {
                var _p5j = _p5d[_p59.ship_id];
                _p5b.houg += _p5c * _p5j;
            }
            if (_p5e[_p59.ship_id]) {
                var _p5k = _p5e[_p59.ship_id];
                _p5b.tyku += _p5c * _p5k;
            }
            if (_p5f[_p59.ship_id]) {
                var _p5l = _p5f[_p59.ship_id],
                    _p5m = _p59.get_each_level_nums(503),
                    _p5n = [];
                _p5m.forEach(function(_p5o, _p5p) {
                    var _p5q = null;
                    for (var _p5r = 1; _p5r <= _p59.SLOT_LEVEL_MAX; _p5r++) _p5p >= _p5r && (null == _p5n[_p5r] && (_p5n[_p5r] = 0), _p5n[_p5r] += _p5o);
                }), 1 == _p5l ? (_p5b.houm += 2 * _p5c, _p5n[1] > 0 && (_p5b.houg += 1 * _p5n[1]), _p5n[2] > 0 && (_p5b.tyku += 1 * _p5n[2]), _p5n[4] > 0 && (_p5b.houm += 1 * _p5n[4]), _p5n[6] > 0 && (_p5b.houg += 1 * _p5n[6]), _p5n[8] > 0 && (_p5b.tyku += 1 * _p5n[8]), _p5n[10] > 0 && (_p5b.houm += 1 * _p5n[10])) : 2 == _p5l ? (_p5b.houm += 1 * _p5c, _p5n[2] > 0 && (_p5b.houg += 1 * _p5n[2]), _p5n[4] > 0 && (_p5b.tyku += 1 * _p5n[4]), _p5n[6] > 0 && (_p5b.houm += 1 * _p5n[6]), _p5n[8] > 0 && (_p5b.houg += 1 * _p5n[8]), _p5n[10] > 0 && (_p5b.houm += 1 * _p5n[10])) : 3 == _p5l ? (_p5n[4] > 0 && (_p5b.houm += 1 * _p5n[4]), _p5n[7] > 0 && (_p5b.houg += 1 * _p5n[7]), _p5n[10] > 0 && (_p5b.tyku += 1 * _p5n[10])) : 4 == _p5l && (_p5b.houm += 1 * _p5c, _p5n[1] > 0 && (_p5b.houg += 1 * _p5n[1]), _p5n[2] > 0 && (_p5b.houg += 1 * _p5n[2]), _p5n[4] > 0 && (_p5b.houm += 1 * _p5n[4]), _p5n[6] > 0 && (_p5b.houg += 1 * _p5n[6]), _p5n[8] > 0 && (_p5b.tyku += 1 * _p5n[8]), _p5n[10] > 0 && (_p5b.houm += 1 * _p5n[10]));
            }
            var _p5s = 0;
            _p5g[_p59.ship_id] && (_p5s = _p5g[_p59.ship_id]);
            var _p5t = 0;
            _p5i[_p59.ship_id] && (_p5t = _p5i[_p59.ship_id]);
            var _p5u = 0,
                _p5v = 0,
                _p5w = _p59.have_slot_ids();
            if (_p5s + _p5t > 0)
                for (var _p5x = 0, _p5y = _p5w; _p5x < _p5y.length; _p5x++) {
                    var _p5z = _p5y[_p5x],
                        _p60 = _p58.default.model.slot.getMst(_p5z),
                        _p61 = _p60.equipType;
                    12 != _p61 && 13 != _p61 || (_p60.sakuteki >= 5 && (_p5u += _p59.get_slotnums(parseInt(_p5z))), _p60.taiku >= 2 && _p59.get_slotnums(parseInt(_p5z)), _p60.meichu >= 8 && (_p5v += _p59.get_slotnums(parseInt(_p5z))));
                }
            1 == _p5s ? _p5u >= 1 && (_p5b.houg += 3, _p5b.houm += 3, _p5b.kaih += 2) : 2 == _p5s && _p5u >= 1 && (_p5b.houg += 2, _p5b.houm += 2, _p5b.kaih += 1);
            var _p62 = 0,
                _p63 = [],
                _p64 = [];
            if (_p5h[_p59.ship_id]) {
                _p62 = _p5h[_p59.ship_id];
                var _p65 = _p59.have_slot_ids();
                [174].forEach(function(_p66) {
                    var _p67 = null;
                    _p65.indexOf(_p66.toString()) > -1 && (_p64[_p66] = _p59.get_each_level_nums(_p66), null == _p63[_p66] && (_p63[_p66] = []), _p64[_p66].forEach(function(_p68, _p69) {
                        var _p6a = null;
                        for (var _p6b = 1; _p6b <= _p59.SLOT_LEVEL_MAX; _p6b++) null == _p63[_p66][_p6b] && (_p63[_p66][_p6b] = 0), _p69 >= _p6b && (_p63[_p66][_p6b] += _p68);
                    }));
                });
            }
            if (_p62 > 0) {
                var _p6c = _p64[174];
                if (1 == _p62 && _p6c) {
                    var _p6d = _p63[174];
                    _p5b.raig += 4, _p6d[6] >= 1 && (_p5b.raig += 1), _p6d[8] >= 1 && (_p5b.houm += 1), _p6d[10] >= 1 && (_p5b.houg += 1);
                }
            }
            return _p5v > 0 && (_p5t >= 1 && _p5t <= 3 && (_p5b.houg += 2, _p5b.houm += 2, _p5b.kaih += 2), 1 == _p5t ? _p5b.houg += 1 : 3 == _p5t && (_p5b.houg += 2)), _p5b;
        };
    },
    78123: function(_p6e, _p6f, _p6g) {
        'use strict';
        var _p6h = null;
        var _p6i = this && this.__importDefault || function(_p6j) {
            var _p6k = null;
            return _p6j && _p6j.__esModule ? _p6j : {
                'default': _p6j
            };
        };
        defineModule(_p6f);
        Object.defineProperty(_p6f, '__esModule', {
            'value': true
        }), _p6f.getSlot505PersonalEffect = void 0;
        var _p6l = _p6g(74496),
            _p6m = _p6i(_p6g(18622));
        _p6f.getSlot505PersonalEffect = function(_p6n) {
            var _p6o = null,
                _p6p = new _p6l.SlotItemEffectModel(),
                _p6q = false,
                _p6r = new _p6l.SlotItemEffectModel();
            if (2 == _p6n.stype ? (_p6r.houg += 1, _p6r.tyku += 2, _p6r.kaih += 2, _p6q = true) : 1 == _p6n.stype ? (_p6r.houg += 1, _p6r.tyku += 1, _p6r.kaih += 1, _p6q = true) : 3 == _p6n.stype || 21 == _p6n.stype || 4 == _p6n.stype ? (_p6r.tyku += 1, _p6r.kaih += 2, _p6q = true) : 5 != _p6n.stype && 6 != _p6n.stype && 16 != _p6n.stype || (_p6r.tyku += 1, _p6r.kaih += 1, _p6q = true), _p6q) {
                var _p6s = _p6n.get_slotnums(505);
                _p6p.add(_p6r.multiply(_p6s));
            }
            var _p6t = {
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
                _p6u = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2,
                    981: 3
                },
                _p6v = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _p6t[_p6n.ship_id] ? (_p6p.houg += 2, _p6p.tyku += 3, _p6p.kaih += 4) : 2 == _p6t[_p6n.ship_id] ? (_p6p.houg += 1, _p6p.tyku += 2, _p6p.kaih += 3) : 3 == _p6t[_p6n.ship_id] ? (_p6p.tyku += 2, _p6p.kaih += 2) : 4 == _p6t[_p6n.ship_id] ? (_p6p.tyku += 1, _p6p.kaih += 2) : 5 == _p6t[_p6n.ship_id] ? (_p6p.houg += 1, _p6p.tyku += 1, _p6p.kaih += 1) : 6 == _p6t[_p6n.ship_id] && (_p6p.tyku += 1, _p6p.kaih += 1);
            var _p6w = 0;
            if (_p6u[_p6n.ship_id] && _p6w++, _p6v[_p6n.ship_id] && _p6w++, 0 == _p6w) return _p6p;
            for (var _p6x = 0, _p6y = 0, _p6z = 0, _p70 = _p6n.have_slot_ids(); _p6z < _p70.length; _p6z++) {
                var _p71 = _p70[_p6z],
                    _p72 = _p6m.default.model.slot.getMst(_p71),
                    _p73 = _p72.equipType;
                12 != _p73 && 13 != _p73 || (_p72.sakuteki >= 5 && (_p6x += _p6n.get_slotnums(parseInt(_p71))), _p72.taiku >= 2 && (_p6y += _p6n.get_slotnums(parseInt(_p71))));
            }
            var _p74 = _p6u[_p6n.ship_id];
            _p6y > 0 && _p74 > 0 && (1 == _p74 ? (_p6p.houg += 1, _p6p.tyku += 2, _p6p.kaih += 3) : 2 == _p74 ? (_p6p.tyku += 2, _p6p.kaih += 2) : 3 == _p74 && (_p6p.tyku += 1, _p6p.kaih += 2));
            var _p75 = _p6v[_p6n.ship_id];
            return _p6x > 0 && _p75 > 0 && 1 == _p75 && (_p6p.houg += 1, _p6p.kaih += 1), _p6p;
        };
    },
    25765: (_p76, _p77, _p78) => {
        'use strict';
        var _p79 = null;
        defineModule(_p77);
        Object.defineProperty(_p77, '__esModule', {
            'value': true
        }), _p77.getSlot506PersonalEffect = void 0;
        var _p7a = _p78(74496);
        _p77.getSlot506PersonalEffect = function(_p7b) {
            var _p7c = null,
                _p7d = new _p7a.SlotItemEffectModel();
            return 961 == _p7b.ship_id ? (_p7d.houg += 2, _p7d.houm += 3, _p7d.tyku += 2, _p7d.kaih += 4) : 145 == _p7b.ship_id || 497 == _p7b.ship_id || 656 == _p7b.ship_id || 557 == _p7b.ship_id || 558 == _p7b.ship_id || 951 == _p7b.ship_id || 975 == _p7b.ship_id ? (_p7d.houg += 1, _p7d.houm += 2, _p7d.tyku += 1, _p7d.kaih += 3) : 578 != _p7b.ship_id && 419 != _p7b.ship_id && 464 != _p7b.ship_id && 470 != _p7b.ship_id && 407 != _p7b.ship_id && 235 != _p7b.ship_id && 147 != _p7b.ship_id && 538 != _p7b.ship_id && 537 != _p7b.ship_id && 955 != _p7b.ship_id && 960 != _p7b.ship_id || (_p7d.houg += 1, _p7d.houm += 1, _p7d.tyku += 1, _p7d.kaih += 2), _p7d;
        };
    },
    88271: function(_p7e, _p7f, _p7g) {
        'use strict';
        var _p7h = null;
        var _p7i = this && this.__importDefault || function(_p7j) {
            var _p7k = null;
            return _p7j && _p7j.__esModule ? _p7j : {
                'default': _p7j
            };
        };
        defineModule(_p7f);
        Object.defineProperty(_p7f, '__esModule', {
            'value': true
        }), _p7f.getSlot50PersonalEffect = void 0;
        var _p7l = _p7g(74496),
            _p7m = _p7i(_p7g(18622));
        _p7f.getSlot50PersonalEffect = function(_p7n) {
            var _p7o = null,
                _p7p = new _p7l.SlotItemEffectModel(),
                _p7q = false,
                _p7r = new _p7l.SlotItemEffectModel();
            7 != _p7n.ctype && 13 != _p7n.ctype && 8 != _p7n.ctype && 29 != _p7n.ctype && 9 != _p7n.ctype && 31 != _p7n.ctype || (_p7r.houg += 1, _p7q = true), 8 != _p7n.ctype && 29 != _p7n.ctype && 9 != _p7n.ctype && 31 != _p7n.ctype || (_p7r.houg += 1, _p7r.kaih += 1, _p7q = true);
            var _p7s = _p7n.get_slotnums(50);
            9 != _p7n.ctype && 31 != _p7n.ctype || _p7s >= 2 && (_p7r.houg += 1, _p7q = true);
            var _p7t = 0;
            if (501 != _p7n.ship_id && 506 != _p7n.ship_id && 502 != _p7n.ship_id && 507 != _p7n.ship_id || (_p7r.houg += 1, _p7q = true, _p7t = 1), 0 == _p7q) return _p7p;
            _p7p = _p7r.multiply(_p7s);
            for (var _p7u = 0, _p7v = 0, _p7w = _p7n.have_slot_ids(); _p7v < _p7w.length; _p7v++) {
                var _p7x = _p7w[_p7v],
                    _p7y = _p7m.default.model.slot.getMst(_p7x),
                    _p7z = _p7y.equipType;
                12 != _p7z && 13 != _p7z || _p7y.sakuteki >= 5 && (_p7u += _p7n.get_slotnums(parseInt(_p7x)));
            }
            if (_p7u > 0) {
                if (7 == _p7n.ctype || 13 == _p7n.ctype) 0 == _p7n.get_slotnums(90) && (_p7p.houg += 1, _p7p.kaih += 1, _p7p.raig += 1);
                else 8 != _p7n.ctype && 29 != _p7n.ctype && 9 != _p7n.ctype && 31 != _p7n.ctype || (_p7p.houg += 3, _p7p.kaih += 2, _p7p.raig += 2);
                501 != _p7n.ship_id && 506 != _p7n.ship_id || (_p7p.houg += 1, _p7p.kaih += 1);
            }
            var _p80 = _p7n.get_slotnums(30),
                _p81 = _p7n.get_slotnums(410);
            return 1 == _p7t && (_p80 + _p81 > 0 && (_p7p.houg += 1, _p7p.tyku += 3, _p7p.kaih += 2), _p81 > 0 && (_p7p.houg += 2)), _p7p;
        };
    },
    28221: (_p82, _p83, _p84) => {
        'use strict';
        var _p85 = null;
        defineModule(_p83);
        Object.defineProperty(_p83, '__esModule', {
            'value': true
        }), _p83.getSlot510PersonalEffect = void 0;
        var _p86 = _p84(74496);
        _p83.getSlot510PersonalEffect = function(_p87) {
            var _p88 = null,
                _p89 = new _p86.SlotItemEffectModel(),
                _p8a = false,
                _p8b = new _p86.SlotItemEffectModel();
            if ('イギリス' == _p87.getCountryName() && (_p8b.houg += 2, _p8b.tais += 3, _p8b.kaih += 2, _p8b.saku += 2, _p8a = true), 88 == _p87.ctype && (_p89.houg += 4, _p89.kaih += 2, _p8b.saku += 3, _p8b.houm += 2, _p8a = true), 0 == _p8a) return _p89;
            var _p8c = _p87.get_slotnums(510);
            return _p89.add(_p8b.multiply(_p8c)), _p89;
        };
    },
    14830: (_p8d, _p8e, _p8f) => {
        'use strict';
        var _p8g = null;
        defineModule(_p8e);
        Object.defineProperty(_p8e, '__esModule', {
            'value': true
        }), _p8e.getSlot511PersonalEffect = void 0;
        var _p8h = _p8f(74496);
        _p8e.getSlot511PersonalEffect = function(_p8i) {
            var _p8j = null,
                _p8k = new _p8h.SlotItemEffectModel();
            return 122 == _p8i.ctype ? (_p8k.raig += 3, _p8k.kaih += 4) : 114 == _p8i.ctype && (_p8k.raig += 1, _p8k.kaih += 2), _p8k;
        };
    },
    54047: (_p8l, _p8m, _p8n) => {
        'use strict';
        var _p8o = null;
        defineModule(_p8m);
        Object.defineProperty(_p8m, '__esModule', {
            'value': true
        }), _p8m.getSlot517PersonalEffect = void 0;
        var _p8p = _p8n(74496);
        _p8m.getSlot517PersonalEffect = function(_p8q) {
            var _p8r = null,
                _p8s = new _p8p.SlotItemEffectModel();
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
            }[_p8q.ctype] && 74 != _p8q.ctype && 77 != _p8q.ctype && 85 != _p8q.ctype && 117 != _p8q.ctype && 104 != _p8q.ctype || (_p8s.houm += 1, _p8s.kaih += 1, _p8s.saku += 1), 38 == _p8q.ctype && (_p8s.houg += 1, _p8s.houm += 1), 960 == _p8q.ship_id ? (_p8s.houg += 2, _p8s.houm += 1, _p8s.kaih += 3, _p8s.saku += 2) : 955 == _p8q.ship_id || 578 == _p8q.ship_id || 961 == _p8q.ship_id || 656 == _p8q.ship_id || 464 == _p8q.ship_id || 470 == _p8q.ship_id || 419 == _p8q.ship_id || 407 == _p8q.ship_id || 235 == _p8q.ship_id || 147 == _p8q.ship_id || 975 == _p8q.ship_id ? (_p8s.houg += 1, _p8s.houm += 1, _p8s.kaih += 2, _p8s.saku += 1) : 981 == _p8q.ship_id && (_p8s.houg += 1, _p8s.houm += 1, _p8s.kaih += 1);
            for (var _p8t = [], _p8u = function(_p8v) {
                    var _p8w = null,
                        _p8x = _p8q.get_each_level_nums(_p8v);
                    null == _p8t[_p8v] && (_p8t[_p8v] = []), _p8x.forEach(function(_p8y, _p8z) {
                        var _p90 = null;
                        for (var _p91 = 1; _p91 <= _p8q.SLOT_LEVEL_MAX; _p91++) null == _p8t[_p8v][_p91] && (_p8t[_p8v][_p91] = 0), _p8z >= _p91 && (_p8t[_p8v][_p91] += _p8y);
                    });
                }, _p92 = 0, _p93 = [267, 366, 450, 517]; _p92 < _p93.length; _p92++) {
                _p8u(_p93[_p92]);
            }
            var _p94 = _p8t[517];
            return _p94[7] > 0 && (_p8s.houm += 1), _p94[8] > 0 && (_p8s.kaih += 1), _p94[9] > 0 && (_p8s.houg += 1), _p94[10] > 0 && (_p8s.houm += 1), (_p8t[267][3] > 0 || _p8t[366][3] > 0) && (_p8s.houg += 1, _p8s.houm += 1, 38 == _p8q.ctype && (_p8s.houg += 1, _p8s.houm += 1), _p8t[450][4] > 0 && (_p8s.houg += 1, _p8s.houm += 1, _p8s.tyku += 4, _p8s.kaih += 3)), _p8s;
        };
    },
    76054: (_p95, _p96, _p97) => {
        'use strict';
        var _p98 = null;
        defineModule(_p96);
        Object.defineProperty(_p96, '__esModule', {
            'value': true
        }), _p96.getSlot518PersonalEffect = void 0;
        var _p99 = _p97(74496);
        _p96.getSlot518PersonalEffect = function(_p9a) {
            var _p9b = null,
                _p9c = new _p99.SlotItemEffectModel(),
                _p9d = false,
                _p9e = new _p99.SlotItemEffectModel();
            if (34 != _p9a.ctype && 56 != _p9a.ctype || (_p9e.houg += 1, _p9e.tyku += 1, _p9e.tais += 1, _p9e.kaih += 1, _p9d = true), 16 == _p9a.stype && (_p9e.houg += 1, _p9e.raig += 1, _p9e.kaih += 1, _p9d = true), 622 != _p9a.ship_id && 624 != _p9a.ship_id && 623 != _p9a.ship_id || (_p9e.houg += 1, _p9d = true), 622 != _p9a.ship_id && 624 != _p9a.ship_id || (_p9e.tyku += 1, _p9d = true), 624 == _p9a.ship_id && (_p9e.tais += 2, _p9d = true), 0 == _p9d) return _p9c;
            var _p9f = _p9a.get_slotnums(518);
            return _p9c.add(_p9e.multiply(_p9f)), _p9c;
        };
    },
    93053: (_p9g, _p9h, _p9i) => {
        'use strict';
        var _p9j = null;
        defineModule(_p9h);
        Object.defineProperty(_p9h, '__esModule', {
            'value': true
        }), _p9h.getSlot519PersonalEffect = void 0;
        var _p9k = _p9i(74496);
        _p9h.getSlot519PersonalEffect = function(_p9l) {
            var _p9m = null,
                _p9n = new _p9k.SlotItemEffectModel();
            return 122 == _p9l.ctype && (_p9n.houm += 2, _p9n.kaih += 2), 114 == _p9l.ctype && (_p9n.raig += 1, _p9n.houm += 2, _p9n.kaih += 2), _p9n;
        };
    },
    81254: (_p9o, _p9p, _p9q) => {
        'use strict';
        var _p9r = null;
        defineModule(_p9p);
        Object.defineProperty(_p9p, '__esModule', {
            'value': true
        }), _p9p.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _p9s = _p9q(74496);
        _p9p.getSlot51cmSeriesGunPersonalEffect = function(_p9t) {
            var _p9u = null,
                _p9v = new _p9s.SlotItemEffectModel(),
                _p9w = false,
                _p9x = new _p9s.SlotItemEffectModel(),
                _p9y = _p9t.get_slotnums(142),
                _p9z = _p9t.get_slotnums(460),
                _pa0 = _p9y + _p9z;
            if (916 != _p9t.ship_id && 911 != _p9t.ship_id && 546 != _p9t.ship_id || (_p9x.houg += 1, _p9x.houm += 1, _p9z >= 1 && (_p9v.kaih += 1, _p9v.houm += 1), _p9w = true), 37 == _p9t.ctype && _pa0 >= 1 && (_p9v.houg += 1, _p9v.houm += 2), 0 == _p9w) return _p9v;
            var _pa1 = _p9t.get_slotnums(128) + _p9t.get_slotnums(281);
            return _p9v.add(_p9x.multiply(_pa1)), _p9v;
        };
    },
    88792: (_pa2, _pa3, _pa4) => {
        'use strict';
        var _pa5 = null;
        defineModule(_pa3);
        Object.defineProperty(_pa3, '__esModule', {
            'value': true
        }), _pa3.getSlot520PersonalEffect = void 0;
        var _pa6 = _pa4(74496);
        _pa3.getSlot520PersonalEffect = function(_pa7) {
            var _pa8 = null,
                _pa9 = new _pa6.SlotItemEffectModel(),
                _paa = false,
                _pab = new _pa6.SlotItemEffectModel(),
                _pac = 0,
                _pad = 0,
                _pae = 0,
                _paf = _pa7.get_slotnums(520);
            7 == _pa7.ctype || 13 == _pa7.ctype ? (_pab.houg += 1, _paa = true, _pad = 1, _pae = 1) : 8 == _pa7.ctype || 29 == _pa7.ctype ? (_pab.houg += 2, _pab.kaih += 1, _paa = true, _pad = 2, _pae = 1) : 9 != _pa7.ctype && 31 != _pa7.ctype || (_pab.houg += 3, _pab.kaih += 1, _pab.houm += 1, _paa = true, _pad = 2, _pae = 1, 2 == _paf && (_pa9.houg += 2), _paf >= 3 && (_pa9.houg += 4));
            var _pag = _pa7.get_have_rader_nums().water_rader,
                _pah = 0,
                _pai = 0;
            if (_pad + _pae > 0) {
                for (var _paj = _pa7.getSpItemDict_FukuhouTaikuHeisou(), _pak = _pa7.getSpItemDict_Tansou21GouDentan(), _pal = 0, _pam = _pa7.have_slot_ids(); _pal < _pam.length; _pal++) {
                    var _pan = _pam[_pal],
                        _pao = parseInt(_pan);
                    null != _paj[_pao] ? (_paj[_pao] += _pa7.get_slotnums(_pao), _pah += _pa7.get_slotnums(_pao)) : null != _pak[_pao] && (_pak[_pao] += _pa7.get_slotnums(_pao), _pai += _pa7.get_slotnums(_pao));
                }
                _pag > 0 && (1 == _pad ? (_pa9.houg += 2, _pa9.raig += 2, _pa9.kaih += 1, _pa9.houm += 1) : 2 == _pad && (_pa9.houg += 3, _pa9.raig += 2, _pa9.kaih += 2, _pa9.houm += 1)), _pah > 0 && 1 == _pae && (_pa9.houg += 1, _pa9.tyku += 4, _pa9.kaih += 4, _pa9.houm += 1);
            }
            if (269 == _pa7.ship_id || 265 == _pa7.ship_id || 319 == _pa7.ship_id ? (2 == _paf && (_pa9.houg += 2), _paf >= 3 && (_pa9.houg += 4)) : 501 != _pa7.ship_id && 506 != _pa7.ship_id && 502 != _pa7.ship_id && 507 != _pa7.ship_id && 503 != _pa7.ship_id && 504 != _pa7.ship_id || (_pab.houg += 1, _paa = true, _pag >= 1 && (_pa9.houg += 1, _pa9.kaih += 1, _pa9.houm += 2), _pai >= 1 && (_pa9.houg += 1, _pa9.tyku += 3, _pa9.kaih += 2, _pa9.houm += 1), _pa7.get_slotnums(410) > 0 && (_pa9.houg += 2, _pa9.tyku += 3, _pa9.kaih += 2, _pa9.houm += 1), _pac = 1), 502 == _pa7.ship_id || 269 == _pa7.ship_id || 265 == _pa7.ship_id || 319 == _pa7.ship_id ? (_pab.houg += 1, _pab.houm += 1, _paa = true) : 507 == _pa7.ship_id && (_pab.houg += 1, _pab.houm += 2, _pab.tyku += 1, _paa = true), _paa && _pa9.add(_pab.multiply(_paf)), 0 == _pac) return _pa9;
            var _pap = _pa7.get_each_level_over_nums([520]),
                _paq = _pap.slot[520][7],
                _par = _pap.slot[520][10];
            return 1 == _pac && (_paq > 0 && (_pa9.houg += 1 * _paq), _par > 0 && (_pa9.houm += 1 * _par)), _pa9;
        };
    },
    33242: (_pas, _pat, _pau) => {
        'use strict';
        var _pav = null;
        defineModule(_pat);
        Object.defineProperty(_pat, '__esModule', {
            'value': true
        }), _pat.getSlot521PersonalEffect = void 0;
        var _paw = _pau(74496);
        _pat.getSlot521PersonalEffect = function(_pax) {
            var _pay = null,
                _paz = new _paw.SlotItemEffectModel(),
                _pb0 = false,
                _pb1 = new _paw.SlotItemEffectModel(),
                _pb2 = 0;
            if (52 == _pax.ctype && (_pb2 = 1), 183 == _pax.ship_id ? (_pb1.houg += 1, _pb1.houm += 1, _pb1.saku += 2, _pb1.kaih += 2, _pb0 = true) : 321 == _pax.ship_id ? (_pb1.houg += 2, _pb1.houm += 2, _pb1.saku += 3, _pb1.kaih += 3, _pb0 = true) : 507 == _pax.ship_id && (_pb1.houg += 3, _pb1.tyku += 1, _pb1.houm += 3, _pb1.saku += 2, _pb1.kaih += 2, _pb0 = true, _pb2 = 1), _pb0) {
                var _pb3 = _pax.get_slotnums(521);
                _paz.add(_pb1.multiply(_pb3));
            }
            if (0 == _pb2) return _paz;
            var _pb4 = _pax.get_each_level_over_nums([521]).slot[521];
            return 1 == _pb2 && (_pb4[1] >= 1 && (_paz.houm += 1 * _pb4[1]), _pb4[2] >= 1 && (_paz.kaih += 1 * _pb4[2]), _pb4[3] >= 1 && (_paz.saku += 1 * _pb4[3], _paz.raig += 1 * _pb4[3]), _pb4[4] >= 1 && (_paz.houg += 1 * _pb4[4]), _pb4[6] >= 1 && (_paz.houm += 1 * _pb4[6]), _pb4[8] >= 1 && (_paz.saku += 1 * _pb4[8]), _pb4[10] >= 1 && (_paz.houm += 1 * _pb4[10])), _paz;
        };
    },
    3296: (_pb5, _pb6, _pb7) => {
        'use strict';
        var _pb8 = null;
        defineModule(_pb6);
        Object.defineProperty(_pb6, '__esModule', {
            'value': true
        }), _pb6.getSlot522_523PersonalEffect = void 0;
        var _pb9 = _pb7(74496);
        _pb6.getSlot522_523PersonalEffect = function(_pba) {
            var _pbb = null,
                _pbc = new _pb9.SlotItemEffectModel(),
                _pbd = false,
                _pbe = new _pb9.SlotItemEffectModel(),
                _pbf = 0,
                _pbg = _pba.get_slotnums(522),
                _pbh = _pba.get_slotnums(523),
                _pbi = _pbg + _pbh;
            if (14 == _pba.stype && (_pbe.raig += 1, _pbe.kaih += 5, _pbe.houm += 1, _pbe.saku += 3, _pbd = true, _pbh >= 1 && (_pbc.raig += 2 * _pbh, _pbc.baku += 2 * _pbh, _pbc.kaih += 1 * _pbh, _pbc.houm += 1 * _pbh, _pbc.saku += 1 * _pbh), _pbf = 1), 0 == _pbd) return _pbc;
            if (_pbc.add(_pbe.multiply(_pbi)), 0 == _pbf) return _pbc;
            var _pbj = _pba.get_each_level_over_nums([522, 523]),
                _pbk = _pbj.slot[522],
                _pbl = _pbj.slot[523];
            if (1 == _pbf) {
                if (_pbk[1] >= 1 || _pbl[1] >= 1) {
                    var _pbm = _pbk[1] + _pbl[1];
                    _pbc.raig += 1 * _pbm;
                }
                if (_pbk[2] >= 1 || _pbl[2] >= 1) {
                    var _pbn = _pbk[2] + _pbl[2];
                    _pbc.houm += 1 * _pbn;
                }
                if (_pbk[3] >= 1 || _pbl[3] >= 1) {
                    var _pbo = _pbk[3] + _pbl[3];
                    _pbc.kaih += 1 * _pbo;
                }
                if (_pbk[5] >= 1 || _pbl[5] >= 1) {
                    var _pbp = _pbk[5] + _pbl[5];
                    _pbc.saku += 1 * _pbp;
                }
                if (_pbk[8] >= 1 || _pbl[8] >= 1) {
                    var _pbq = _pbk[8] + _pbl[8];
                    _pbc.houm += 1 * _pbq;
                }
                if (_pbk[10] >= 1 || _pbl[10] >= 1) {
                    var _pbr = _pbk[10] + _pbl[10];
                    _pbc.kaih += 1 * _pbr;
                }
            }
            return _pbc;
        };
    },
    59415: (_pbs, _pbt, _pbu) => {
        'use strict';
        var _pbv = null;
        defineModule(_pbt);
        Object.defineProperty(_pbt, '__esModule', {
            'value': true
        }), _pbt.getSlot524PersonalEffect = void 0;
        var _pbw = _pbu(74496);
        _pbt.getSlot524PersonalEffect = function(_pbx) {
            var _pby = null,
                _pbz = new _pbw.SlotItemEffectModel(),
                _pc0 = false,
                _pc1 = new _pbw.SlotItemEffectModel(),
                _pc2 = 0,
                _pc3 = 0;
            if (17 != _pbx.stype && 19 != _pbx.stype && 20 != _pbx.stype && 21 != _pbx.stype && 22 != _pbx.stype || (_pc1.houg += 1, _pc1.tyku += 2, _pc1.kaih += 2, _pc1.houm += 1, _pc0 = true, _pc2 = 1, _pc3 = 1), 0 == _pc0) return _pbz;
            var _pc4 = _pbx.get_slotnums(524);
            _pbz.add(_pc1.multiply(_pc4));
            var _pc5 = _pbx.get_have_rader_nums().air_rader;
            if (1 == _pc3 && _pc5 >= 1 && (_pbz.tyku += 2, _pbz.kaih += 2), 0 == _pc2) return _pbz;
            var _pc6 = _pbx.get_each_level_over_nums([524]).slot[524];
            return 1 == _pc2 && (_pc6[1] >= 1 && (_pbz.kaih += 1 * _pc6[1]), _pc6[2] >= 1 && (_pbz.kaih += 1 * _pc6[2]), _pc6[4] >= 1 && (_pbz.tyku += 1 * _pc6[4]), _pc6[6] >= 1 && (_pbz.kaih += 1 * _pc6[6]), _pc6[7] >= 1 && (_pbz.houm += 1 * _pc6[7]), _pc6[8] >= 1 && (_pbz.tyku += 1 * _pc6[8]), _pc6[9] >= 1 && (_pbz.kaih += 1 * _pc6[9]), _pc6[10] >= 1 && (_pbz.houg += 1 * _pc6[10])), _pbz;
        };
    },
    36731: (_pc7, _pc8, _pc9) => {
        'use strict';
        var _pca = null;
        defineModule(_pc8);
        Object.defineProperty(_pc8, '__esModule', {
            'value': true
        }), _pc8.getSlot527PersonalEffect = void 0;
        var _pcb = _pc9(74496);
        _pc8.getSlot527PersonalEffect = function(_pcc) {
            var _pcd = null,
                _pce = new _pcb.SlotItemEffectModel(),
                _pcf = 0;
            if ('イギリス' == _pcc.getCountryName() && (_pcf = 1, _pce.tyku += 2, _pce.houm += 1, _pce.kaih += 1, _pce.saku += 2, 88 == _pcc.ctype && (_pce.houg += 2), 67 == _pcc.ctype && (_pce.houg += 1)), 0 == _pcf) return _pce;
            var _pcg = _pcc.get_each_level_over_nums([527]),
                _pch = _pcg.slot[527][2],
                _pci = _pcg.slot[527][4],
                _pcj = _pcg.slot[527][7],
                _pck = _pcg.slot[527][10];
            return 1 == _pcf && (_pch >= 1 && (_pce.tyku += 1), _pci >= 1 && (_pce.kaih += 1), _pcj >= 1 && (_pce.tyku += 1), _pck >= 1 && (_pce.houm += 1)), _pce;
        };
    },
    30450: (_pcl, _pcm, _pcn) => {
        'use strict';
        var _pco = null;
        defineModule(_pcm);
        Object.defineProperty(_pcm, '__esModule', {
            'value': true
        }), _pcm.getSlot528PersonalEffect = void 0;
        var _pcp = _pcn(74496);
        _pcm.getSlot528PersonalEffect = function(_pcq) {
            var _pcr = null,
                _pcs = new _pcp.SlotItemEffectModel(),
                _pct = false,
                _pcu = new _pcp.SlotItemEffectModel(),
                _pcv = 0;
            if ('イギリス' == _pcq.getCountryName() && (_pcu.houg += 1, _pcu.houm += 2, _pcu.kaih += 1, 108 == _pcq.ctype && (_pcu.houg += 1, _pcu.kaih += 1), _pct = true, _pcv = 1), 0 == _pct) return _pcs;
            var _pcw = _pcq.get_slotnums(528);
            if (_pcs.add(_pcu.multiply(_pcw)), 0 == _pcv) return _pcs;
            var _pcx = _pcq.get_each_level_over_nums([528]),
                _pcy = _pcx.slot[528][2],
                _pcz = _pcx.slot[528][4],
                _pd0 = _pcx.slot[528][7],
                _pd1 = _pcx.slot[528][10];
            return 1 == _pcv && (_pcy >= 1 && (_pcs.houg += 1 * _pcy), _pcz >= 1 && (_pcs.houm += 1 * _pcz), _pd0 >= 1 && (_pcs.kaih += 1 * _pd0), _pd1 >= 1 && (_pcs.houm += 1 * _pd1)), _pcs;
        };
    },
    15653: (_pd2, _pd3, _pd4) => {
        'use strict';
        var _pd5 = null;
        defineModule(_pd3);
        Object.defineProperty(_pd3, '__esModule', {
            'value': true
        }), _pd3.getSlot530PersonalEffect = void 0;
        var _pd6 = _pd4(74496);
        _pd3.getSlot530PersonalEffect = function(_pd7) {
            var _pd8 = null,
                _pd9 = new _pd6.SlotItemEffectModel(),
                _pda = false;
            if (6 == _pd7.ctype && (_pda = true), 0 == _pda) return _pd9;
            var _pdb = false,
                _pdc = new _pd6.SlotItemEffectModel(),
                _pdd = _pd7.get_slotnums(530),
                _pde = _pd7.get_slotnums(174),
                _pdf = _pd7.get_each_level_over_nums([530, 174]),
                _pdg = _pdf.slot[530],
                _pdh = _pdf.slot[174],
                _pdi = _pd7.get_have_rader_nums(),
                _pdj = _pdi.water_rader,
                _pdk = _pdi.high_water_rader;
            return _pdi.air_rader, 149 != _pd7.ship_id && 150 != _pd7.ship_id && 151 != _pd7.ship_id && 152 != _pd7.ship_id && 593 != _pd7.ship_id || (_pdc.houg += 2, _pdb = true), 591 != _pd7.ship_id && 954 != _pd7.ship_id || (_pdc.houg += 3, _pdb = true), 592 != _pd7.ship_id && 694 != _pd7.ship_id || (_pdc.houg += 4, _pdb = true), 149 != _pd7.ship_id && 150 != _pd7.ship_id && 151 != _pd7.ship_id && 152 != _pd7.ship_id || (_pdc.tyku += 1, _pdb = true), 591 != _pd7.ship_id && 592 != _pd7.ship_id && 954 != _pd7.ship_id && 694 != _pd7.ship_id || (_pdc.tyku += 2, _pdb = true), 593 == _pd7.ship_id && (_pdc.tyku += 3, _pdb = true), 592 != _pd7.ship_id && 694 != _pd7.ship_id || (_pdc.houg += 1, _pdc.houm += 2, _pdb = true, _pdg[2] >= 1 && (_pd9.houm += 1 * _pdg[2]), _pdg[4] >= 1 && (_pd9.houg += 1 * _pdg[4]), _pdg[6] >= 1 && (_pd9.souk += 1 * _pdg[6]), _pdg[7] >= 1 && (_pd9.houm += 1 * _pdg[7]), _pdg[8] >= 1 && (_pd9.houg += 1 * _pdg[8]), _pdg[9] >= 1 && (_pd9.souk += 1 * _pdg[9]), _pdg[10] >= 1 && (_pd9.houm += 1 * _pdg[10])), 150 != _pd7.ship_id && 152 != _pd7.ship_id && 591 != _pd7.ship_id && 954 != _pd7.ship_id || (_pdc.houm += 1, _pdb = true, _pdg[2] >= 1 && (_pd9.houg += 1 * _pdg[2]), _pdg[4] >= 1 && (_pd9.souk += 1 * _pdg[4]), _pdg[6] >= 1 && (_pd9.houm += 1 * _pdg[6]), _pdg[8] >= 1 && (_pd9.houg += 1 * _pdg[8]), _pdg[10] >= 1 && (_pd9.houm += 1 * _pdg[10])), 149 != _pd7.ship_id && 151 != _pd7.ship_id && 593 != _pd7.ship_id || (_pdg[4] >= 1 && (_pd9.houg += 1 * _pdg[4]), _pdg[7] >= 1 && (_pd9.souk += 1 * _pdg[7]), _pdg[10] >= 1 && (_pd9.houm += 1 * _pdg[10])), 592 != _pd7.ship_id && 694 != _pd7.ship_id || (_pdj >= 1 && (_pd9.houg += 3, _pd9.houm += 3, _pd9.kaih += 3, 592 == _pd7.ship_id ? _pd9.houg += 3 : 694 == _pd7.ship_id && (_pd9.houg += 4)), _pdd >= 2 && (_pd9.houm += 2), _pdd >= 3 && (_pd9.houm += 2), _pdd >= 4 && (_pd9.houm += 2), _pdk >= 1 && (_pd9.houm += 1), 694 == _pd7.ship_id && _pdd >= 3 && (_pd9.houg += 3)), 149 != _pd7.ship_id && 150 != _pd7.ship_id && 151 != _pd7.ship_id && 152 != _pd7.ship_id && 591 != _pd7.ship_id && 954 != _pd7.ship_id && 593 != _pd7.ship_id || (_pdj >= 1 && (_pd9.houg += 2, _pd9.houm += 2, _pd9.kaih += 2, 591 == _pd7.ship_id || 152 == _pd7.ship_id ? _pd9.houg += 3 : 954 == _pd7.ship_id || 150 == _pd7.ship_id ? _pd9.houg += 2 : 149 != _pd7.ship_id && 151 != _pd7.ship_id && 593 != _pd7.ship_id || (_pd9.houg += 1)), _pdk >= 1 && (_pd9.houm += 1)), 591 != _pd7.ship_id && 592 != _pd7.ship_id && 593 != _pd7.ship_id && 954 != _pd7.ship_id && 694 != _pd7.ship_id || (_pde >= 1 && (_pd9.raig += 6, _pdh[6] >= 1 && (_pd9.raig += 1), _pdh[8] >= 1 && (_pd9.houm += 1), _pdh[10] >= 1 && (_pd9.houg += 1)), _pdk >= 1 && (_pd9.houg += 2, _pd9.raig += 2, _pd9.houm += 2, _pd9.kaih += 3, 591 == _pd7.ship_id || 592 == _pd7.ship_id ? _pd9.houg += 2 : 954 == _pd7.ship_id || 593 == _pd7.ship_id ? _pd9.houg += 1 : 694 == _pd7.ship_id && (_pd9.houg += 3)), _pdd >= 2 && (_pd9.houm += 1)), _pdb && _pd9.add(_pdc.multiply(_pdd)), _pd9;
        };
    },
    25851: (_pdl, _pdm, _pdn) => {
        'use strict';
        var _pdo = null;
        defineModule(_pdm);
        Object.defineProperty(_pdm, '__esModule', {
            'value': true
        }), _pdm.getSlot531PersonalEffect = void 0;
        var _pdp = _pdn(74496);
        _pdm.getSlot531PersonalEffect = function(_pdq) {
            var _pdr = null,
                _pds = new _pdp.SlotItemEffectModel(),
                _pdt = _pdq.have_level_num_over_dict[531];
            return null == _pdt || (_pdt[4] >= 1 && (_pds.houm += 1 * _pdt[4]), _pdt[5] >= 1 && (_pds.houg += 1 * _pdt[5]), _pdt[6] >= 1 && (_pds.kaih += 1 * _pdt[6]), _pdt[7] >= 1 && (_pds.houm += 1 * _pdt[7]), _pdt[8] >= 1 && (_pds.houg += 1 * _pdt[8]), _pdt[9] >= 1 && (_pds.kaih += 1 * _pdt[9]), _pdt[10] >= 1 && (_pds.houm += 1 * _pdt[10])), _pds;
        };
    },
    91275: (_pdu, _pdv, _pdw) => {
        'use strict';
        var _pdx = null;
        defineModule(_pdv);
        Object.defineProperty(_pdv, '__esModule', {
            'value': true
        }), _pdv.getSlot538PersonalEffect = void 0;
        var _pdy = _pdw(74496);
        _pdv.getSlot538PersonalEffect = function(_pdz) {
            var _pe0 = null,
                _pe1 = new _pdy.SlotItemEffectModel(),
                _pe2 = false,
                _pe3 = new _pdy.SlotItemEffectModel(),
                _pe4 = 0;
            if ('フランス' == _pdz.getCountryName() && (_pe3.houg += 3, _pe3.kaih += 2, _pe3.houm += 2, _pe2 = true, _pe4 = 1), 79 == _pdz.ctype ? (_pe3.houg += 2, 969 == _pdz.ship_id && (_pe3.houg += 1, _pe3.houm += 1, _pe3.kaih += 1), _pe2 = true) : 70 == _pdz.ctype && (_pe3.houg += 1, _pe3.houm += 1, _pe3.tyku += 2, _pe3.kaih += 2, _pe2 = true), 0 == _pe2) return _pe1;
            var _pe5 = _pdz.get_slotnums(538);
            if (_pe1.add(_pe3.multiply(_pe5)), 0 == _pe4) return _pe1;
            var _pe6 = _pdz.haveSlotLevelNumOver(538);
            return 1 == _pe4 && (_pe6[3] >= 1 && (_pe1.kaih += 1 * _pe6[3]), _pe6[4] >= 1 && (_pe1.houm += 1 * _pe6[4]), _pe6[5] >= 1 && (_pe1.houg += 1 * _pe6[5]), _pe6[6] >= 1 && (_pe1.kaih += 1 * _pe6[6]), _pe6[7] >= 1 && (_pe1.houm += 1 * _pe6[7]), _pe6[8] >= 1 && (_pe1.houg += 1 * _pe6[8]), _pe6[9] >= 1 && (_pe1.kaih += 1 * _pe6[9]), _pe6[10] >= 1 && (_pe1.houg += 1 * _pe6[10], _pe1.houm += 1 * _pe6[10])), _pe1;
        };
    },
    72743: (_pe7, _pe8, _pe9) => {
        'use strict';
        var _pea = null;
        defineModule(_pe8);
        Object.defineProperty(_pe8, '__esModule', {
            'value': true
        }), _pe8.getSlot540PersonalEffect = void 0;
        var _peb = _pe9(74496);
        _pe8.getSlot540PersonalEffect = function(_pec) {
            var _ped = null,
                _pee = new _peb.SlotItemEffectModel(),
                _pef = false,
                _peg = new _peb.SlotItemEffectModel();
            if (911 == _pec.ship_id || 916 == _pec.ship_id || 546 == _pec.ship_id || 662 == _pec.ship_id || 663 == _pec.ship_id || 668 == _pec.ship_id ? (_peg.kaih += 1, _peg.saku += 1, _pef = true) : 73 == _pec.ship_id || 506 == _pec.ship_id || 121 == _pec.ship_id || 503 == _pec.ship_id || 504 == _pec.ship_id || 188 == _pec.ship_id || 189 == _pec.ship_id ? (_peg.houm += 1, _peg.kaih += 1, _peg.saku += 1, _pef = true) : 488 != _pec.ship_id && 200 != _pec.ship_id && 487 != _pec.ship_id && 501 != _pec.ship_id && 502 != _pec.ship_id && 507 != _pec.ship_id || (_peg.houg += 1, _peg.houm += 1, _peg.kaih += 1, _peg.saku += 1, _pef = true), 'にっしん' == _pec.yomi || 'ちとせ' == _pec.yomi || 'ちよだ' == _pec.yomi || 'あきつしま' == _pec.yomi ? (_peg.houg += 1, _peg.houm += 1, _peg.tyku += 2, _peg.kaih += 2, _peg.saku += 2, _pef = true) : 'みずほ' != _pec.yomi && 'かもい' != _pec.yomi || (_peg.houg += 2, _peg.houm += 1, _peg.tyku += 2, _peg.kaih += 2, _peg.saku += 2, _pef = true), 0 == _pef) return _pee;
            var _peh = _pec.get_slotnums(540);
            return _pee.add(_peg.multiply(_peh)), _pee;
        };
    },
    57041: (_pei, _pej, _pek) => {
        'use strict';
        var _pel = null;
        defineModule(_pej);
        Object.defineProperty(_pej, '__esModule', {
            'value': true
        }), _pej.getSlot545PersonalEffect = void 0;
        var _pem = _pek(74496);
        _pej.getSlot545PersonalEffect = function(_pen) {
            var _peo = null,
                _pep = new _pem.SlotItemEffectModel(),
                _peq = false,
                _per = new _pem.SlotItemEffectModel();
            if ('しょうかく' == _pen.yomi ? _pep.houg += 4 : 'ずいかく' == _pen.yomi ? _pep.houg += 3 : 'あかぎ' == _pen.yomi ? _pep.houg += 2 : 'かが' != _pen.yomi && 'たいほう' != _pen.yomi || (_pep.houg += 1), 461 == _pen.ship_id || 466 == _pen.ship_id ? (_per.houg += 1, _per.houm += 2, _per.kaih += 1, _per.saku += 2, _peq = true) : 462 == _pen.ship_id || 467 == _pen.ship_id || 646 == _pen.ship_id ? (_per.houg += 1, _per.houm += 1, _per.saku += 1, _peq = true) : 599 != _pen.ship_id && 610 != _pen.ship_id && 156 != _pen.ship_id || (_per.houm += 1, _per.saku += 1, _peq = true), 0 == _peq) return _pep;
            var _pes = _pen.get_slotnums(545);
            return _pep.add(_per.multiply(_pes)), _pep;
        };
    },
    74608: (_pet, _peu, _pev) => {
        'use strict';
        var _pew = null;
        defineModule(_peu);
        Object.defineProperty(_peu, '__esModule', {
            'value': true
        }), _peu.getSlot549PersonalEffect = void 0;
        var _pex = _pev(74496);
        _peu.getSlot549PersonalEffect = function(_pey) {
            var _pez = null,
                _pf0 = new _pex.SlotItemEffectModel(),
                _pf1 = false,
                _pf2 = new _pex.SlotItemEffectModel(),
                _pf3 = 0;
            if ('やましおまる' != _pey.yomi && 'くまのまる' != _pey.yomi && 'あきつまる' != _pey.yomi || (_pf2.houg += 2, _pf2.houm += 1, _pf2.kaih += 1, _pf2.tais += 4, _pf1 = true, _pf3 = 1), 76 != _pey.ctype && 27 != _pey.ctype || (_pf2.houg += 1, _pf2.houm += 1, _pf2.tais += 1, _pf1 = true, _pf3 = 2), 0 == _pf1) return _pf0;
            var _pf4 = _pey.get_slotnums(549);
            if (_pf0.add(_pf2.multiply(_pf4)), 0 == _pf3) return _pf0;
            var _pf5 = _pey.haveSlotLevelNumOver(549);
            return 1 == _pf3 ? (_pf5[3] >= 1 && (_pf0.houg += 1 * _pf5[3]), _pf5[4] >= 1 && (_pf0.houm += 1 * _pf5[4]), _pf5[5] >= 1 && (_pf0.tais += 1 * _pf5[5]), _pf5[6] >= 1 && (_pf0.kaih += 1 * _pf5[6]), _pf5[7] >= 1 && (_pf0.houg += 1 * _pf5[7]), _pf5[8] >= 1 && (_pf0.houm += 1 * _pf5[8]), _pf5[9] >= 1 && (_pf0.tais += 1 * _pf5[9]), _pf5[10] >= 1 && (_pf0.houg += 1 * _pf5[10])) : 2 == _pf3 && (_pf5[4] >= 1 && (_pf0.tais += 1 * _pf5[4]), _pf5[6] >= 1 && (_pf0.kaih += 1 * _pf5[6]), _pf5[8] >= 1 && (_pf0.houm += 1 * _pf5[8]), _pf5[10] >= 1 && (_pf0.houg += 1 * _pf5[10])), _pf0;
        };
    },
    4188: (_pf6, _pf7, _pf8) => {
        'use strict';
        var _pf9 = null;
        defineModule(_pf7);
        Object.defineProperty(_pf7, '__esModule', {
            'value': true
        }), _pf7.getSlot554PersonalEffect = void 0;
        var _pfa = _pf8(74496);
        _pf7.getSlot554PersonalEffect = function(_pfb) {
            var _pfc = null,
                _pfd = new _pfa.SlotItemEffectModel(),
                _pfe = false,
                _pff = new _pfa.SlotItemEffectModel(),
                _pfg = _pfb.haveSlotLevelNumOver(554);
            if (_pfg[2] >= 1 && (_pfd.houg += 1 * _pfg[2]), _pfg[4] >= 1 && (_pfd.houm += 1 * _pfg[4]), _pfg[6] >= 1 && (_pfd.tais += 1 * _pfg[6]), _pfg[8] >= 1 && (_pfd.houg += 1 * _pfg[8]), _pfg[10] >= 1 && (_pfd.houm += 1 * _pfg[10]), 7 == _pfb.stype && (_pff.houg += 1, _pff.kaih += 1, _pff.tais += 1, _pfe = true), 117 != _pfb.ship_id && 555 != _pfb.ship_id && 560 != _pfb.ship_id && 285 != _pfb.ship_id && 894 != _pfb.ship_id && 318 != _pfb.ship_id && 888 != _pfb.ship_id && 883 != _pfb.ship_id || (_pff.houg += 1, _pff.houm += 1, 894 == _pfb.ship_id && (_pff.houg += 1), _pfe = true), 76 != _pfb.ctype && 27 != _pfb.ctype || (_pff.houm += 1, _pff.kaih += 1, _pff.tais += 1, _pfe = true), _pfb.get_slotnums(402) >= 1 && (_pff.houg += 3, _pff.houm += 2, _pff.kaih += 1, _pff.tais += 3, _pfe = true), 0 == _pfe) return _pfd;
            var _pfh = _pfb.get_slotnums(554);
            return _pfd.add(_pff.multiply(_pfh)), _pfd;
        };
    },
    23035: (_pfi, _pfj, _pfk) => {
        'use strict';
        var _pfl = null;
        defineModule(_pfj);
        Object.defineProperty(_pfj, '__esModule', {
            'value': true
        }), _pfj.getSlot58PersonalEffect = void 0;
        var _pfm = _pfk(74496);
        _pfj.getSlot58PersonalEffect = function(_pfn) {
            var _pfo = null,
                _pfp = new _pfm.SlotItemEffectModel(),
                _pfq = new _pfm.SlotItemEffectModel();
            if ('しまかぜ' != _pfn.yomi && 4 != _pfn.stype && 54 != _pfn.ctype || (_pfq.raig = 1), !_pfq.exists()) return _pfp;
            var _pfr = _pfn.get_slotnums(58);
            return _pfp = _pfq.multiply(_pfr);
        };
    },
    47169: (_pfs, _pft, _pfu) => {
        'use strict';
        var _pfv = null;
        defineModule(_pft);
        Object.defineProperty(_pft, '__esModule', {
            'value': true
        }), _pft.getSlot59PersonalEffect = void 0;
        var _pfw = _pfu(74496);
        _pft.getSlot59PersonalEffect = function(_pfx) {
            var _pfy = null,
                _pfz = new _pfw.SlotItemEffectModel();
            return 501 != _pfx.ship_id && 506 != _pfx.ship_id && 502 != _pfx.ship_id && 507 != _pfx.ship_id || (_pfz.tyku += 1, _pfz.kaih += 1), _pfz;
        };
    },
    87845: (_pg0, _pg1, _pg2) => {
        'use strict';
        var _pg3 = null;
        defineModule(_pg1);
        Object.defineProperty(_pg1, '__esModule', {
            'value': true
        }), _pg1.getSlot5PersonalEffect = void 0;
        var _pg4 = _pg2(74496);
        _pg1.getSlot5PersonalEffect = function(_pg5) {
            var _pg6 = null,
                _pg7 = new _pg4.SlotItemEffectModel(),
                _pg8 = false,
                _pg9 = new _pg4.SlotItemEffectModel();
            if (52 != _pg5.ctype && 9 != _pg5.ctype || (_pg9.houg += 1, 52 == _pg5.ctype && (_pg9.houg = _pg9.houg + 1), _pg8 = true), 0 == _pg8) return _pg7;
            var _pga = _pg5.get_slotnums(5);
            return _pg7.add(_pg9.multiply(_pga)), _pg7;
        };
    },
    92253: (_pgb, _pgc, _pgd) => {
        'use strict';
        var _pge = null;
        defineModule(_pgc);
        Object.defineProperty(_pgc, '__esModule', {
            'value': true
        }), _pgc.getSlot60_154_219PersonalEffec = void 0;
        var _pgf = _pgd(74496);
        _pgc.getSlot60_154_219PersonalEffec = function(_pgg) {
            var _pgh = null,
                _pgi = new _pgf.SlotItemEffectModel(),
                _pgj = false,
                _pgk = new _pgf.SlotItemEffectModel();
            if ('じゅんよう' != _pgg.yomi && 'ひよう' != _pgg.yomi && 'ずいほう' != _pgg.yomi && 'ちとせ' != _pgg.yomi && 'ちよだ' != _pgg.yomi || (_pgk.houg += 1, _pgk.tyku += 1, _pgk.kaih += 1, _pgj = true), 185 != _pgg.ship_id && 318 != _pgg.ship_id && 282 != _pgg.ship_id || (_pgk.houg += 1, _pgk.tyku += 1, _pgk.kaih += 1, _pgj = true), 888 != _pgg.ship_id && 883 != _pgg.ship_id || (_pgk.houg += 2, _pgk.tyku += 1, _pgk.kaih += 2, _pgj = true), 0 == _pgj) return _pgi;
            var _pgl = _pgg.get_slotnums(60) + _pgg.get_slotnums(154) + _pgg.get_slotnums(219);
            return _pgi.add(_pgk.multiply(_pgl)), _pgi;
        };
    },
    2578: (_pgm, _pgn, _pgo) => {
        'use strict';
        var _pgp = null;
        defineModule(_pgn);
        Object.defineProperty(_pgn, '__esModule', {
            'value': true
        }), _pgn.getSlot61PersonalEffect2 = _pgn.getSlot61PersonalEffect = void 0;
        var _pgq = _pgo(74496);
        _pgn.getSlot61PersonalEffect = function(_pgr) {
            var _pgs = null,
                _pgt = new _pgq.SlotItemEffectModel();
            if (553 == _pgr.ship_id) _pgt.houg = 3, _pgt.kaih = 2, _pgt.souk = 1, _pgt.houm = 5, _pgt.leng = 1;
            else {
                if (554 == _pgr.ship_id) _pgt.houg = 3, _pgt.kaih = 3, _pgt.souk = 3, _pgt.houm = 5, _pgt.leng = 1;
                else {
                    if (196 == _pgr.ship_id) _pgt.houm = 5, _pgt.leng = 1;
                    else {
                        if (197 != _pgr.ship_id) return _pgt;
                        _pgt.houm = 5, _pgt.leng = 1;
                    }
                }
            }
            return _pgt;
        }, _pgn.getSlot61PersonalEffect2 = function(_pgu) {
            var _pgv = null,
                _pgw = new _pgq.SlotItemEffectModel();
            if (null == _pgu.have_slots_dict[61]) return _pgw;
            for (var _pgx = 0, _pgy = 0, _pgz = _pgu.have_slots_dict[61]; _pgy < _pgz.length; _pgy++) {
                var _ph0 = _pgz[_pgy].level;
                _pgx < _ph0 && (_pgx = _ph0);
            }
            return 0 == _pgx || ('そうりゅう' == _pgu.yomi ? (_pgw.houg += 3, _pgw.saku += 3) : 'ひりゅう' == _pgu.yomi && (_pgw.houg += 2, _pgw.saku += 2), 508 != _pgu.ship_id && 509 != _pgu.ship_id && 560 != _pgu.ship_id || (_pgw.houg += 1, _pgw.saku += 1), _pgx >= 8 && 197 == _pgu.ship_id && (_pgw.houg += 1, _pgw.saku += 1)), _pgw;
        };
    },
    17143: (_ph1, _ph2, _ph3) => {
        'use strict';
        var _ph4 = null;
        defineModule(_ph2);
        Object.defineProperty(_ph2, '__esModule', {
            'value': true
        }), _ph2.getSlot63PersonalEffect = void 0;
        var _ph5 = _ph3(74496);
        _ph2.getSlot63PersonalEffect = function(_ph6) {
            var _ph7 = null,
                _ph8 = new _ph5.SlotItemEffectModel(),
                _ph9 = new _ph5.SlotItemEffectModel();
            1 != _ph6.ctype && 5 != _ph6.ctype && 10 != _ph6.ctype || (_ph9.tyku += 1), 'ゆうだち' == _ph6.yomi && (_ph9.houg += 1, _ph9.tyku += 1, _ph9.kaih += 2), 145 == _ph6.ship_id || 961 == _ph6.ship_id ? _ph9.houg += 1 : 144 == _ph6.ship_id ? _ph9.raig += 1 : 469 == _ph6.ship_id ? _ph9.kaih += 2 : 242 == _ph6.ship_id || 497 == _ph6.ship_id || 244 == _ph6.ship_id || 498 == _ph6.ship_id || 975 == _ph6.ship_id ? _ph9.kaih += 1 : 627 == _ph6.ship_id ? _ph9.houg += 1 : 903 != _ph6.ship_id && 908 != _ph6.ship_id || (_ph9.houg += 2);
            var _pha = true;
            if (_ph9.exists() || (_pha = false), 0 == _pha) return _ph8;
            var _phb = _ph6.get_slotnums(63);
            return _ph8 = _ph9.multiply(_phb);
        };
    },
    16164: (_phc, _phd, _phe) => {
        'use strict';
        var _phf = null;
        defineModule(_phd);
        Object.defineProperty(_phd, '__esModule', {
            'value': true
        }), _phd.getSlot67PersonalEffect = void 0;
        var _phg = _phe(74496);
        _phd.getSlot67PersonalEffect = function(_phh) {
            var _phi = null,
                _phj = new _phg.SlotItemEffectModel(),
                _phk = new _phg.SlotItemEffectModel();
            if (13 != _phh.stype && 14 != _phh.stype && (_phk.raig = -5), !_phk.exists()) return _phj;
            var _phl = _phh.get_slotnums(67);
            return _phj = _phk.multiply(_phl);
        };
    },
    35023: (_phm, _phn, _pho) => {
        'use strict';
        var _php = null;
        defineModule(_phn);
        Object.defineProperty(_phn, '__esModule', {
            'value': true
        }), _phn.getSlot69PersonalEffect = void 0;
        var _phq = _pho(74496);
        _phn.getSlot69PersonalEffect = function(_phr) {
            var _phs = null,
                _pht = new _phq.SlotItemEffectModel(),
                _phu = false,
                _phv = new _phq.SlotItemEffectModel();
            if (554 == _phr.ship_id || 646 == _phr.ship_id ? (_phv.houg += 1, _phv.tais += 2, _phu = true) : 553 == _phr.ship_id && (_phv.houg += 1, _phv.tais += 1, _phu = true), 0 == _phu) return _pht;
            var _phw = _phr.get_slotnums(69);
            return _pht.add(_phv.multiply(_phw)), _pht;
        };
    },
    78707: (_phx, _phy, _phz) => {
        'use strict';
        var _pi0 = null;
        defineModule(_phy);
        Object.defineProperty(_phy, '__esModule', {
            'value': true
        }), _phy.getSlot70PersonalEffect = void 0;
        var _pi1 = _phz(74496);
        _phy.getSlot70PersonalEffect = function(_pi2) {
            var _pi3 = null,
                _pi4 = new _pi1.SlotItemEffectModel(),
                _pi5 = false,
                _pi6 = new _pi1.SlotItemEffectModel();
            if ('やましおまる' == _pi2.yomi && (_pi6.houg += 1, _pi6.tais += 1, _pi5 = true), 0 == _pi5) return _pi4;
            var _pi7 = _pi2.get_slotnums(70);
            return _pi4.add(_pi6.multiply(_pi7)), _pi4;
        };
    },
    44680: function(_pi8, _pi9, _pia) {
        'use strict';
        var _pib = null;
        var _pic = this && this.__importDefault || function(_pid) {
            var _pie = null;
            return _pid && _pid.__esModule ? _pid : {
                'default': _pid
            };
        };
        defineModule(_pi9);
        Object.defineProperty(_pi9, '__esModule', {
            'value': true
        }), _pi9.getSlot78PersonalEffect = void 0;
        var _pif = _pia(74496),
            _pig = _pic(_pia(18622));
        _pi9.getSlot78PersonalEffect = function(_pih) {
            var _pii = null,
                _pij = new _pif.SlotItemEffectModel(),
                _pik = false,
                _pil = new _pif.SlotItemEffectModel(),
                _pim = 0,
                _pin = 0,
                _pio = false;
            if (48 == _pih.ctype && (_pil.houg += 1, _pil.kaih += 1, _pim = 1, _pin = 1, _pio = true, _pik = true), 0 == _pik) return _pij;
            var _pip = _pih.get_slotnums(78);
            _pij.add(_pil.multiply(_pip));
            var _piq = 0,
                _pir = _pih.get_each_level_nums(78),
                _pis = 0;
            if (_pio) {
                _pir.map(function(_pit, _piu) {
                    _piu >= 7 && (_pis += _pit);
                });
                for (var _piv = 0, _piw = _pih.have_slot_ids(); _piv < _piw.length; _piv++) {
                    var _pix = _piw[_piv],
                        _piy = _pig.default.model.slot.getMst(_pix),
                        _piz = _piy.equipType;
                    12 != _piz && 13 != _piz || _piy.sakuteki >= 5 && (_piq += _pih.get_slotnums(parseInt(_pix)));
                }
            }
            if (1 == _pim && _piq > 0 && (_pij.houg += 2, _pij.kaih += 2, _pij.raig += 2), 1 == _pin) {
                _pij.houg += 1 * _pis;
                var _pj0 = _pir[10];
                _pij.souk += 1 * _pj0;
            }
            return _pij;
        };
    },
    45749: (_pj1, _pj2, _pj3) => {
        'use strict';
        var _pj4 = null;
        defineModule(_pj2);
        Object.defineProperty(_pj2, '__esModule', {
            'value': true
        }), _pj2.getSlot79And81PersonalEffect = void 0;
        var _pj5 = _pj3(74496);
        _pj2.getSlot79And81PersonalEffect = function(_pj6) {
            var _pj7 = null,
                _pj8 = new _pj5.SlotItemEffectModel(),
                _pj9 = new _pj5.SlotItemEffectModel();
            if (553 == _pj6.ship_id) _pj9.houg = 3;
            else {
                if (82 == _pj6.ship_id) _pj9.houg = 2;
                else {
                    if (88 == _pj6.ship_id) _pj9.houg = 2;
                    else {
                        if (554 == _pj6.ship_id) _pj9.houg = 3;
                        else {
                            if (411 == _pj6.ship_id) _pj9.houg = 2;
                            else {
                                if (412 != _pj6.ship_id) return _pj8;
                                _pj9.houg = 2;
                            }
                        }
                    }
                }
            }
            var _pja = _pj6.get_slotnums(79) + _pj6.get_slotnums(81);
            return _pj8 = _pj9.multiply(_pja);
        };
    },
    37334: (_pjb, _pjc, _pjd) => {
        'use strict';
        var _pje = null;
        defineModule(_pjc);
        Object.defineProperty(_pjc, '__esModule', {
            'value': true
        }), _pjc.getSlot82PersonalEffect = void 0;
        var _pjf = _pjd(74496);
        _pjc.getSlot82PersonalEffect = function(_pjg) {
            var _pjh = null,
                _pji = new _pjf.SlotItemEffectModel(),
                _pjj = new _pjf.SlotItemEffectModel();
            if (76 == _pjg.ctype && (_pjj.tais = 1, _pjj.kaih = 1), !_pjj.exists()) return _pji;
            var _pjk = _pjg.get_slotnums(82);
            return _pji = _pjj.multiply(_pjk);
        };
    },
    2603: function(_pjl, _pjm, _pjn) {
        'use strict';
        var _pjo = null;
        var _pjp = this && this.__importDefault || function(_pjq) {
            var _pjr = null;
            return _pjq && _pjq.__esModule ? _pjq : {
                'default': _pjq
            };
        };
        defineModule(_pjm);
        Object.defineProperty(_pjm, '__esModule', {
            'value': true
        }), _pjm.getSlot84PersonalEffect = void 0;
        var _pjs = _pjn(74496),
            _pjt = _pjp(_pjn(18622));
        _pjm.getSlot84PersonalEffect = function(_pju) {
            var _pjv = null,
                _pjw = new _pjs.SlotItemEffectModel(),
                _pjx = _pju.get_each_level_nums(84),
                _pjy = 0,
                _pjz = 0;
            if (_pjx.forEach(function(_pk0, _pk1) {
                    _pk1 >= 4 && (_pjy += _pk0), _pk1 >= 7 && (_pjz += _pk0);
                }), 0 == _pjy) return _pjw;
            for (var _pk2 = 0, _pk3 = 0, _pk4 = _pju.have_slot_ids(); _pk3 < _pk4.length; _pk3++) {
                var _pk5 = _pk4[_pk3],
                    _pk6 = _pjt.default.model.slot.getMst(_pk5),
                    _pk7 = _pk6.equipType;
                12 != _pk7 && 13 != _pk7 || (_pk6.sakuteki >= 5 && _pju.get_slotnums(parseInt(_pk5)), _pk6.taiku >= 2 && (_pk2 += _pju.get_slotnums(parseInt(_pk5))));
            }
            var _pk8 = _pju.getCountryName();
            _pjy >= 1 && (_pjw.tyku += 1 * _pjy, _pjw.kaih += 1 * _pjy, 'ドイツ' != _pk8 && 'イタリア' != _pk8 || (_pjw.tyku += 1 * _pjy, _pjw.kaih += 1 * _pjy), _pk2 >= 1 && (_pjw.tyku += 1)), _pjz >= 1 && (_pjw.tyku += 1 * _pjz, _pjw.houg += 1 * _pjz);
            var _pk9 = _pjx[10];
            return _pk9 >= 1 && (_pjw.tyku += 1 * _pk9, _pjw.kaih += 1 * _pk9, 'ドイツ' != _pk8 && 'イタリア' != _pk8 || (_pjw.houg += 1)), _pjw;
        };
    },
    90725: (_pka, _pkb, _pkc) => {
        'use strict';
        var _pkd = null;
        defineModule(_pkb);
        Object.defineProperty(_pkb, '__esModule', {
            'value': true
        }), _pkb.getSlot85PersonalEffect = void 0;
        var _pke = _pkc(74496);
        _pkb.getSlot85PersonalEffect = function(_pkf) {
            var _pkg = null,
                _pkh = new _pke.SlotItemEffectModel(),
                _pki = _pkf.get_each_level_over_nums([85]),
                _pkj = _pki.slot[85][6],
                _pkk = _pki.slot[85][8],
                _pkl = _pki.slot[85][10],
                _pkm = _pkf.get_have_rader_nums().air_rader,
                _pkn = _pkf.getCountryName();
            return _pkj > 0 && (_pkh.tyku += 1 * _pkj, _pkh.kaih += 1 * _pkj, _pkm >= 1 && (_pkh.tyku += 2)), _pkk > 0 && (_pkh.houg += 1 * _pkk, 'ドイツ' != _pkn && 'イタリア' != _pkn || (_pkh.tyku += 1 * _pkk, _pkh.kaih += 1 * _pkk)), _pkl > 0 && (_pkh.kaih += 1 * _pkl, _pkh.houm += 1 * _pkl, 'ドイツ' != _pkn && 'イタリア' != _pkn || (_pkh.houg += 1)), _pkh;
        };
    },
    29180: (_pko, _pkp, _pkq) => {
        'use strict';
        var _pkr = null;
        defineModule(_pkp);
        Object.defineProperty(_pkp, '__esModule', {
            'value': true
        }), _pkp.getSlot87PersonalEffect = void 0;
        var _pks = _pkq(74496);
        _pkp.getSlot87PersonalEffect = function(_pkt) {
            var _pku = null,
                _pkv = new _pks.SlotItemEffectModel(),
                _pkw = false,
                _pkx = new _pks.SlotItemEffectModel(),
                _pky = 0;
            if (951 == _pkt.ship_id ? (_pkx.houg += 1, _pkx.kaih += 1, _pkx.raig += 1, _pkx.houm += 1, _pkw = true, _pky = 1) : 181 == _pkt.ship_id || 316 == _pkt.ship_id || 50 == _pkt.ship_id || 229 == _pkt.ship_id || 961 == _pkt.ship_id ? _pky = 2 : 591 != _pkt.ship_id && 592 != _pkt.ship_id && 593 != _pkt.ship_id && 954 != _pkt.ship_id && 694 != _pkt.ship_id || (_pkv.kaih += 2, _pkv.raig += 1, _pky = 3), 38 != _pkt.ctype && 54 != _pkt.ctype && 101 != _pkt.ctype || (_pky = 4), _pkw) {
                var _pkz = _pkt.get_slotnums(87);
                _pkv.add(_pkx.multiply(_pkz));
            }
            if (0 == _pky) return _pkv;
            var _pl0 = _pkt.get_each_level_nums(87),
                _pl1 = [];
            return _pky > 0 && _pl0.forEach(function(_pl2, _pl3) {
                var _pl4 = null;
                for (var _pl5 = 1; _pl5 <= _pkt.SLOT_LEVEL_MAX; _pl5++) null == _pl1[_pl5] && (_pl1[_pl5] = 0), _pl3 >= _pl5 && (_pl1[_pl5] += _pl2);
            }), 1 == _pky ? (_pl1[6] >= 1 && (_pkv.tyku += 1 * _pl1[6]), _pl1[7] >= 1 && (_pkv.kaih += 1 * _pl1[7]), _pl1[8] >= 1 && (_pkv.raig += 1 * _pl1[8]), _pl1[9] >= 1 && (_pkv.houg += 1 * _pl1[9]), _pl1[10] >= 1 && (_pkv.houm += 1 * _pl1[10])) : 2 == _pky ? (_pl1[6] >= 1 && (_pkv.kaih += 1 * _pl1[6]), _pl1[7] >= 1 && (_pkv.raig += 1 * _pl1[7]), _pl1[8] >= 1 && (_pkv.houg += 1 * _pl1[8]), _pl1[9] >= 1 && (_pkv.houm += 1 * _pl1[9]), _pl1[10] >= 1 && (_pkv.kaih += 1 * _pl1[10])) : 3 == _pky ? (_pl1[6] > 0 && (_pkv.kaih += 1), _pl1[8] > 0 && (_pkv.raig += 1), _pl1[10] > 0 && (_pkv.houg += 1)) : 4 == _pky && (_pl1[7] >= 1 && (_pkv.kaih += 1 * _pl1[7]), _pl1[8] >= 1 && (_pkv.raig += 1 * _pl1[8]), _pl1[10] >= 1 && (_pkv.houm += 1 * _pl1[10])), _pkv;
        };
    },
    68685: function(_pl6, _pl7, _pl8) {
        'use strict';
        var _pl9 = null;
        var _pla = this && this.__importDefault || function(_plb) {
            var _plc = null;
            return _plb && _plb.__esModule ? _plb : {
                'default': _plb
            };
        };
        defineModule(_pl7);
        Object.defineProperty(_pl7, '__esModule', {
            'value': true
        }), _pl7.getSlot90PersonalEffect = void 0;
        var _pld = _pl8(74496),
            _ple = _pla(_pl8(18622));
        _pl7.getSlot90PersonalEffect = function(_plf) {
            var _plg = null,
                _plh = new _pld.SlotItemEffectModel(),
                _pli = new _pld.SlotItemEffectModel();
            if (142 == _plf.ship_id ? (_pli.houg += 2, _pli.kaih += 1) : 295 == _plf.ship_id || 416 == _plf.ship_id || 417 == _plf.ship_id ? _pli.houg += 1 : 264 == _plf.ship_id ? (_pli.houg += 1, _pli.tyku += 1) : 501 != _plf.ship_id && 506 != _plf.ship_id && 502 != _plf.ship_id && 507 != _plf.ship_id || (_pli.houg += 1), 7 != _plf.ctype && 13 != _plf.ctype && 8 != _plf.ctype && 29 != _plf.ctype && 9 != _plf.ctype && 31 != _plf.ctype || (_pli.houg += 1), _pli.exists()) {
                var _plj = _plf.get_slotnums(90);
                _plh = _pli.multiply(_plj);
            }
            var _plk = [];
            if ('あおば' == _plf.yomi && (_plk[1] = 1), 13 != _plf.ctype && 7 != _plf.ctype || (_plk[2] = 1), 0 == _plk.length) return _plh;
            for (var _pll = 0, _plm = 0, _pln = 0, _plo = _plf.have_slot_ids(); _pln < _plo.length; _pln++) {
                var _plp = _plo[_pln],
                    _plq = _ple.default.model.slot.getMst(_plp),
                    _plr = _plq.equipType;
                12 != _plr && 13 != _plr || (_plq.sakuteki >= 5 && (_pll += _plf.get_slotnums(parseInt(_plp))), _plq.taiku >= 2 && (_plm += _plf.get_slotnums(parseInt(_plp))));
            }
            return _plm > 0 && null != _plk[1] && (_plh.tyku += 5, _plh.kaih += 2), _pll > 0 && null != _plk[2] && (_plh.houg += 3, _plh.kaih += 2, _plh.raig += 2), _plh;
        };
    },
    26078: (_pls, _plt, _plu) => {
        'use strict';
        var _plv = null;
        defineModule(_plt);
        Object.defineProperty(_plt, '__esModule', {
            'value': true
        }), _plt.getSlot93PersonalEffect = void 0;
        var _plw = _plu(74496);
        _plt.getSlot93PersonalEffect = function(_plx) {
            var _ply = null,
                _plz = new _plw.SlotItemEffectModel();
            return 'そうりゅう' == _plx.yomi ? _plz.houg = 1 : 'ひりゅう' == _plx.yomi && (_plz.houg = 3), _plz;
        };
    },
    20829: (_pm0, _pm1, _pm2) => {
        'use strict';
        var _pm3 = null;
        defineModule(_pm1);
        Object.defineProperty(_pm1, '__esModule', {
            'value': true
        }), _pm1.getSlot94PersonalEffect = void 0;
        var _pm4 = _pm2(74496);
        _pm1.getSlot94PersonalEffect = function(_pm5) {
            var _pm6 = null,
                _pm7 = new _pm4.SlotItemEffectModel();
            if (196 == _pm5.ship_id) _pm7.houg = 7;
            else {
                if (197 != _pm5.ship_id) return _pm7;
                _pm7.houg = 3;
            }
            return _pm7;
        };
    },
    6880: (_pm8, _pm9, _pma) => {
        'use strict';
        var _pmb = null;
        defineModule(_pm9);
        Object.defineProperty(_pm9, '__esModule', {
            'value': true
        }), _pm9.getSlot99PersonalEffect = void 0;
        var _pmc = _pma(74496);
        _pm9.getSlot99PersonalEffect = function(_pmd) {
            var _pme = null,
                _pmf = new _pmc.SlotItemEffectModel();
            return 'そうりゅう' == _pmd.yomi ? _pmf.houg = 4 : 'ひりゅう' == _pmd.yomi && (_pmf.houg = 1), _pmf;
        };
    },
    59794: (_pmg, _pmh, _pmi) => {
        'use strict';
        var _pmj = null;
        defineModule(_pmh);
        Object.defineProperty(_pmh, '__esModule', {
            'value': true
        }), _pmh.getSlotCamouflageSlotPersonal2_Effect = void 0;
        var _pmk = _pmi(74496);
        _pmh.getSlotCamouflageSlotPersonal2_Effect = function(_pml) {
            var _pmm = null,
                _pmn = new _pmk.SlotItemEffectModel(),
                _pmo = _pml.haveSlotLevelNumOver(268),
                _pmp = _pml.get_slotnums(402);
            return _pmo[7] >= 1 && (_pmn.kaih += 1 * _pmo[7], 'あしがら' != _pml.yomi && 'なち' != _pml.yomi && 'たま' != _pml.yomi && 'きそ' != _pml.yomi && 'あぶくま' != _pml.yomi && 'ひびき' != _pml.yomi && 'タシュケント' != _pml.yomi && 'ゴトランド' != _pml.yomi && 'ガングート' != _pml.yomi || (_pmn.houm += 1 * _pmo[7], _pmn.kaih += 2 * _pmo[7], _pmn.tais += 1 * _pmo[7]), _pmp >= 1 && (_pmn.houm += 1 * _pmo[7], _pmn.kaih += 4 * _pmo[7], _pmn.tais += 2 * _pmo[7])), _pmo[8] >= 1 && (_pmn.houm += 1 * _pmo[8]), _pmo[9] >= 1 && (_pmn.houg += 1 * _pmo[9]), _pmo[10] >= 1 && (_pmn.kaih += 1 * _pmo[10]), _pmn;
        };
    },
    21403: (_pmq, _pmr, _pms) => {
        'use strict';
        var _pmt = null;
        defineModule(_pmr);
        Object.defineProperty(_pmr, '__esModule', {
            'value': true
        }), _pmr.getSlotCorsairMkIIPersonalEffect = void 0;
        var _pmu = _pms(74496);
        _pmr.getSlotCorsairMkIIPersonalEffect = function(_pmv) {
            var _pmw = null,
                _pmx = new _pmu.SlotItemEffectModel(),
                _pmy = false,
                _pmz = new _pmu.SlotItemEffectModel();
            112 == _pmv.ctype && (_pmz.houg += 1, _pmz.tyku += 1, _pmz.kaih += 2, _pmy = true);
            var _pn0 = _pmv.getCountryName();
            if (67 == _pmv.ctype || 78 == _pmv.ctype || 82 == _pmv.ctype || 88 == _pmv.ctype || 108 == _pmv.ctype || 112 == _pmv.ctype ? (_pmz.houg += 1, _pmz.tyku += 2, _pmz.kaih += 3, _pmy = true) : 'アメリカ' == _pn0 && (_pmz.houg += 1, _pmz.tyku += 1, _pmz.kaih += 2, _pmy = true), 0 == _pmy) return _pmx;
            var _pn1 = _pmv.get_slotnums(434) + _pmv.get_slotnums(435);
            return _pmx.add(_pmz.multiply(_pn1)), _pmx;
        };
    },
    9195: (_pn2, _pn3, _pn4) => {
        'use strict';
        var _pn5 = null;
        defineModule(_pn3);
        Object.defineProperty(_pn3, '__esModule', {
            'value': true
        }), _pn3.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _pn6 = _pn4(74496);
        _pn3.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_pn7) {
            var _pn8 = null,
                _pn9 = new _pn6.SlotItemEffectModel(),
                _pna = false,
                _pnb = new _pn6.SlotItemEffectModel();
            if (56 == _pn7.ctype && (_pnb.tais += 3, _pnb.kaih += 2, _pna = true), 0 == _pna) return _pn9;
            var _pnc = _pn7.get_slotnums(44) + _pn7.get_slotnums(45) + _pn7.get_slotnums(287) + _pn7.get_slotnums(288);
            return _pn9.add(_pnb.multiply(_pnc)), _pn9;
        };
    },
    93297: (_pnd, _pne, _pnf) => {
        'use strict';
        var _png = null;
        defineModule(_pne);
        Object.defineProperty(_pne, '__esModule', {
            'value': true
        }), _pne.getSlotDomesticSonarPersonalEffect = void 0;
        var _pnh = _pnf(74496);
        _pne.getSlotDomesticSonarPersonalEffect = function(_pni) {
            var _pnj = null,
                _pnk = new _pnh.SlotItemEffectModel();
            return 56 == _pni.ctype && (_pnk.tais += 2, _pnk.kaih += 3), _pnk;
        };
    },
    34941: (_pnl, _pnm, _pnn) => {
        'use strict';
        var _pno = null;
        defineModule(_pnm);
        Object.defineProperty(_pnm, '__esModule', {
            'value': true
        }), _pnm.getSlotMyoujoPlanePersonalEffect = void 0;
        var _pnp = _pnn(74496);
        _pnm.getSlotMyoujoPlanePersonalEffect = function(_pnq) {
            var _pnr = null,
                _pns = new _pnp.SlotItemEffectModel(),
                _pnt = 0,
                _pnu = false,
                _pnv = false,
                _pnw = false,
                _pnx = false;
            if ({
                    'ほうしょう': 1,
                    'ずいほう': 1
                }[_pnq.yomi] && (_pnu = true, _pnt++), {
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
                }[_pnq.ship_id] && (_pnv = true, _pnt++), {
                    883: 1,
                    899: 1
                }[_pnq.ship_id] && (_pnw = true, _pnt++), {
                    599: 1,
                    610: 1,
                    555: 1,
                    560: 1,
                    888: 1
                }[_pnq.ship_id] && (_pnx = true, _pnt++), 0 == _pnt) return _pns;
            var _pny = _pnq.get_slotnums(550),
                _pnz = _pnq.get_slotnums(551),
                _po0 = _pnq.get_slotnums(552),
                _po1 = _pny + _pnz + _po0,
                _po2 = _pnq.haveSlotLevelNumOver(550),
                _po3 = _pnq.haveSlotLevelNumOver(551),
                _po4 = _pnq.haveSlotLevelNumOver(552);
            return _pnu && (_pns.houm += 1 * _po1, _pns.kaih += 1 * _po1, _pny >= 1 && (_po2[7] >= 1 && (_pns.houg += 1 * _po2[7]), _po2[8] >= 1 && (_pns.kaih += 1 * _po2[8]), _po2[9] >= 1 && (_pns.houm += 1 * _po2[9]), _po2[10] >= 1 && (_pns.houg += 1 * _po2[10]))), _pnv && (_pns.houg += 1 * _po1, _pns.kaih += 1 * _po1, _pnz >= 1 && (_pns.houg += 1 * _pnz, _pns.houm += 1 * _pnz, _pns.kaih += 1 * _pnz, _po3[7] >= 1 && (_pns.houm += 1 * _po3[7]), _po3[8] >= 1 && (_pns.houg += 1 * _po3[8]), _po3[9] >= 1 && (_pns.kaih += 1 * _po3[9]), _po3[10] >= 1 && (_pns.houg += 1 * _po3[10]))), _pnw && _po0 >= 1 && (_pns.houg += 2 * _po0, _pns.houm += 3 * _po0, _pns.kaih += 3 * _po0, _po4[3] >= 1 && (_pns.kaih += 1 * _po4[3]), _po4[6] >= 1 && (_pns.houg += 1 * _po4[6]), _po4[7] >= 1 && (_pns.houm += 1 * _po4[7]), _po4[8] >= 1 && (_pns.houg += 1 * _po4[8]), _po4[9] >= 1 && (_pns.kaih += 1 * _po4[9]), _po4[10] >= 1 && (_pns.houg += 1 * _po4[10])), _pnx && _po0 >= 1 && (_pns.houg += 1 * _po0, _pns.houm += 2 * _po0, _pns.kaih += 1 * _po0, null != _po4 && (_po4[7] >= 1 && (_pns.kaih += 1 * _po4[7]), _po4[8] >= 1 && (_pns.houm += 1 * _po4[8]), _po4[9] >= 1 && (_pns.kaih += 1 * _po4[9]), _po4[10] >= 1 && (_pns.houg += 1 * _po4[10]))), _pns;
        };
    },
    45482: (_po5, _po6, _po7) => {
        'use strict';
        var _po8 = null;
        defineModule(_po6);
        Object.defineProperty(_po6, '__esModule', {
            'value': true
        }), _po6.getSlotOtherSuiseiPersonalEffect = void 0;
        var _po9 = _po7(74496);
        _po6.getSlotOtherSuiseiPersonalEffect = function(_poa) {
            var _pob = null,
                _poc = new _po9.SlotItemEffectModel(),
                _pod = new _po9.SlotItemEffectModel();
            if (553 == _poa.ship_id) _pod.houg = 2;
            else {
                if (554 != _poa.ship_id) return _poc;
                _pod.houg = 2;
            }
            var _poe = _poa.get_slotnums(24) + _poa.get_slotnums(57) + _poa.get_slotnums(111);
            return _poc = _pod.multiply(_poe);
        };
    },
    10950: (_pof, _pog, _poh) => {
        'use strict';
        var _poi = null;
        defineModule(_pog);
        Object.defineProperty(_pog, '__esModule', {
            'value': true
        }), _pog.getSlotSBD_Type_VS_VBPersonalEffect = void 0;
        var _poj = _poh(74496);
        _pog.getSlotSBD_Type_VS_VBPersonalEffect = function(_pok) {
            var _pol = null,
                _pom = new _poj.SlotItemEffectModel(),
                _pon = false,
                _poo = new _poj.SlotItemEffectModel();
            'レキシントン' == _pok.yomi ? (_poo.houg += 4, _poo.houm += 2, _poo.tyku += 1, _poo.kaih += 2, _poo.saku += 2, _pon = true) : 'サラトガ' == _pok.yomi ? (_poo.houg += 2, _poo.houm += 1, _poo.tyku += 1, _poo.kaih += 1, _poo.saku += 1, _pon = true) : 'ホーネット' == _pok.yomi || 'レンジャー' == _pok.yomi ? (_poo.houg += 1, _poo.houm += 1, _poo.tyku += 1, _poo.kaih += 1, _pon = true) : 'ガンビア・ベイ' != _pok.yomi && 'ラングレー' != _pok.yomi || (_poo.houg += 1, _poo.kaih += 1, _pon = true);
            var _pop = _pok.get_slotnums(543) + _pok.get_slotnums(544);
            _pon && _pom.add(_poo.multiply(_pop));
            var _poq = _pok.haveSlotLevelNumOver(543),
                _por = _pok.haveSlotLevelNumOver(544);
            return 'アメリカ' == _pok.getCountryName() && (_poq[7] >= 1 && (_pom.houm += 1 * _poq[7]), _poq[8] >= 1 && (_pom.saku += 1 * _poq[8]), _poq[9] >= 1 && (_pom.houg += 1 * _poq[9]), _poq[10] >= 1 && (_pom.houm += 1 * _poq[10]), _por[7] >= 1 && (_pom.houg += 1 * _por[7]), _por[8] >= 1 && (_pom.houm += 1 * _por[8]), _por[9] >= 1 && (_pom.tyku += 1 * _por[9]), _por[10] >= 1 && (_pom.houg += 1 * _por[10])), _pom;
        };
    },
    45927: (_pos, _pot, _pou) => {
        'use strict';
        var _pov = null;
        defineModule(_pot);
        Object.defineProperty(_pot, '__esModule', {
            'value': true
        }), _pot.getSlotSmokePersonalEffect = void 0;
        var _pow = _pou(74496);
        _pot.getSlotSmokePersonalEffect = function(_pox) {
            var _poy = null,
                _poz = new _pow.SlotItemEffectModel(),
                _pp0 = false,
                _pp1 = new _pow.SlotItemEffectModel();
            if (959 == _pox.ship_id && (_pp1.kaih += 4, _pp0 = true), 'ジョンストン' == _pox.yomi || 'サミュエル・B・ロバーツ' == _pox.yomi || 'せんだい' == _pox.yomi || 'はるかぜ' == _pox.yomi || 'かみかぜ' == _pox.yomi || 'しきなみ' == _pox.yomi || 'うらなみ' == _pox.yomi || 'あおば' == _pox.yomi ? (_pp1.kaih += 3, _pp0 = true) : 'いなづま' != _pox.yomi && 'はぐろ' != _pox.yomi && 'はつしも' != _pox.yomi && 'かすみ' != _pox.yomi && 'ふぶき' != _pox.yomi && 'あたご' != _pox.yomi && 'あまぎり' != _pox.yomi && 'はまなみ' != _pox.yomi || (_pp1.kaih += 2, _pp0 = true), 0 == _pp0) return _poz;
            var _pp2 = _pox.get_slotnums(500) + _pox.get_slotnums(501);
            return _poz.add(_pp1.multiply(_pp2)), _poz;
        };
    },
    75873: (_pp3, _pp4, _pp5) => {
        'use strict';
        var _pp6 = null;
        defineModule(_pp4);
        Object.defineProperty(_pp4, '__esModule', {
            'value': true
        }), _pp4.getSlotSocSeagullPersonalEffect = void 0;
        var _pp7 = _pp5(74496);
        _pp4.getSlotSocSeagullPersonalEffect = function(_pp8) {
            var _pp9 = null,
                _ppa = new _pp7.SlotItemEffectModel(),
                _ppb = {},
                _ppc = false,
                _ppd = false;
            'アメリカ' == _pp8.getCountryName() && (_ppc = true, 3 != _pp8.stype && 5 != _pp8.stype || (_ppd = true)), _pp8.get_slotnums(414);
            var _ppe = _pp8.get_slotnums(539);
            _ppc && (_ppa.saku += 1, _ppb[1] = 1), _ppd && (_ppa.houg += 1, _ppa.saku += 1, 110 == _pp8.ctype && _ppe >= 1 && (_ppa.houm += 1), _ppb[2] = 1);
            var _ppf = _pp8.haveSlotLevelNumOver(414),
                _ppg = _pp8.haveSlotLevelNumOver(539);
            return null != _ppb[1] && (_ppf[5] >= 1 && (_ppa.kaih += 1), _ppg[3] >= 1 && (_ppa.kaih += 1), _ppg[5] >= 1 && (_ppa.saku += 1), _ppg[7] >= 1 && (_ppa.houm += 1)), null != _ppb[2] && (_ppf[3] >= 1 && (_ppa.saku += 1), _ppf[8] >= 1 && (_ppa.kaih += 1), _ppf[10] >= 1 && (_ppa.houg += 1), _ppg[6] >= 1 && (_ppa.tyku += 1), _ppg[8] >= 1 && (_ppa.kaih += 1), _ppg[9] >= 1 && (_ppa.houg += 1), _ppg[10] >= 1 && (_ppa.houm += 1)), _ppa;
        };
    },
    32666: (_pph, _ppi, _ppj) => {
        'use strict';
        var _ppk = null;
        defineModule(_ppi);
        Object.defineProperty(_ppi, '__esModule', {
            'value': true
        }), _ppi.getSlotTokuYonPersonalEffect = void 0;
        var _ppl = _ppj(74496);
        _ppi.getSlotTokuYonPersonalEffect = function(_ppm) {
            var _ppn = null,
                _ppo = new _ppl.SlotItemEffectModel(),
                _ppp = false,
                _ppq = new _ppl.SlotItemEffectModel(),
                _ppr = 0,
                _pps = _ppm.get_slotnums(525),
                _ppt = _ppm.get_slotnums(526),
                _ppu = _pps + _ppt;
            if (13 != _ppm.stype && 14 != _ppm.stype || (_ppq.houg += 1, _ppq.raig += 2, _ppq.kaih -= 1, _ppp = true, _ppr = 1, 'い36' != _ppm.yomi && 'い41' != _ppm.yomi || (_ppo.houg += 2, _ppo.raig += 1, _ppo.houm += 2), _ppt >= 1 && (_ppo.houg += 1 * _ppt, _ppo.raig += 1 * _ppt, _ppo.houm += 1 * _ppt)), 0 == _ppp) return _ppo;
            if (_ppo.add(_ppq.multiply(_ppu)), 0 == _ppr) return _ppo;
            var _ppv = _ppm.get_each_level_over_nums([525, 526]),
                _ppw = _ppv.slot[525],
                _ppx = _ppv.slot[526];
            if (1 == _ppr) {
                if (_ppw[1] >= 1 || _ppx[1] >= 1) {
                    var _ppy = _ppw[1] + _ppx[1];
                    _ppo.raig += 1 * _ppy;
                }
                if (_ppx[2] >= 1) {
                    var _ppz = _ppw[2] + _ppx[2];
                    _ppo.houg += 1 * _ppz;
                }
                if (_ppw[3] >= 1 || _ppx[3] >= 1) {
                    var _pq0 = _ppw[3] + _ppx[3];
                    _ppo.houm += 1 * _pq0;
                }
                if (_ppx[4] >= 1) {
                    var _pq1 = _ppw[4] + _ppx[4];
                    _ppo.raig += 1 * _pq1;
                }
                if (_ppw[6] >= 1 || _ppx[6] >= 1) {
                    var _pq2 = _ppw[6] + _ppx[6];
                    _ppo.houm += 1 * _pq2;
                }
                if (_ppx[8] >= 1) {
                    var _pq3 = _ppw[8] + _ppx[8];
                    _ppo.houg += 1 * _pq3;
                }
                if (_ppw[10] >= 1 || _ppx[10] >= 1) {
                    var _pq4 = _ppw[10] + _ppx[10];
                    _ppo.raig += 1 * _pq4;
                }
            }
            return _ppo;
        };
    },
    29805: (_pq5, _pq6, _pq7) => {
        'use strict';
        var _pq8 = null;
        defineModule(_pq6);
        Object.defineProperty(_pq6, '__esModule', {
            'value': true
        }), _pq6.getSlotType10PersonalEffect = void 0;
        var _pq9 = _pq7(74496);
        _pq6.getSlotType10PersonalEffect = function(_pqa) {
            var _pqb = null,
                _pqc = new _pq9.SlotItemEffectModel();
            return 662 == _pqa.ship_id || 663 == _pqa.ship_id || 668 == _pqa.ship_id ? (_pqc.houg += 2, _pqc.kaih += 1, _pqc.tais += 3) : 501 != _pqa.ship_id && 506 != _pqa.ship_id && 502 != _pqa.ship_id && 507 != _pqa.ship_id || (_pqc.houg += 2), _pqc;
        };
    },
    58913: (_pqd, _pqe, _pqf) => {
        'use strict';
        var _pqg = null;
        defineModule(_pqe);
        Object.defineProperty(_pqe, '__esModule', {
            'value': true
        }), _pqe.getSlotType11PersonalEffect = void 0;
        var _pqh = _pqf(74496);
        _pqe.getSlotType11PersonalEffect = function(_pqi) {
            var _pqj = null,
                _pqk = new _pqh.SlotItemEffectModel();
            return 662 == _pqi.ship_id || 663 == _pqi.ship_id || 668 == _pqi.ship_id ? (_pqk.houg += 1, _pqk.kaih += 1, _pqk.tais += 1) : 501 != _pqi.ship_id && 506 != _pqi.ship_id && 502 != _pqi.ship_id && 507 != _pqi.ship_id || (_pqk.houg += 1, _pqk.kaih += 1), _pqk;
        };
    },
    55421: (_pql, _pqm, _pqn) => {
        'use strict';
        var _pqo = null;
        defineModule(_pqm);
        Object.defineProperty(_pqm, '__esModule', {
            'value': true
        }), _pqm.getSlotType25PersonalEffect = void 0;
        var _pqp = _pqn(74496);
        _pqm.getSlotType25PersonalEffect = function(_pqq) {
            var _pqr = null,
                _pqs = new _pqp.SlotItemEffectModel();
            return 662 == _pqq.ship_id ? (_pqs.tais += 4, _pqs.kaih += 1) : 663 != _pqq.ship_id && 668 != _pqq.ship_id || (_pqs.tais += 3, _pqs.kaih += 1), _pqs;
        };
    },
    272: function(_pqt, _pqu, _pqv) {
        'use strict';
        var _pqw = null;
        var _pqx = this && this.__importDefault || function(_pqy) {
            var _pqz = null;
            return _pqy && _pqy.__esModule ? _pqy : {
                'default': _pqy
            };
        };
        defineModule(_pqu);
        Object.defineProperty(_pqu, '__esModule', {
            'value': true
        }), _pqu.getSlotType9PersonalEffect = void 0;
        var _pr0 = _pqv(74496),
            _pr1 = _pqx(_pqv(18622));
        _pqu.getSlotType9PersonalEffect = function(_pr2) {
            var _pr3 = null,
                _pr4 = new _pr0.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_pr2.stype]) return _pr4;
            for (var _pr5 = 0, _pr6 = 0, _pr7 = _pr2.have_slot_ids(); _pr6 < _pr7.length; _pr6++) {
                var _pr8 = _pr7[_pr6];
                if (9 == _pr1.default.model.slot.getMst(_pr8).equipType)
                    for (var _pr9 = 0, _pra = _pr2.have_slots_dict[parseInt(_pr8)]; _pr9 < _pra.length; _pr9++) {
                        var _prb = _pra[_pr9].level;
                        _pr5 < _prb && (_pr5 = _prb);
                    }
            }
            return _pr5 >= 2 && (_pr4.saku += 1), _pr5 >= 4 && (_pr4.houg += 1), _pr5 >= 6 && (_pr4.saku += 1), _pr5 >= 10 && (_pr4.houg += 1, _pr4.saku += 1), _pr4;
        };
    },
    49964: (_prc, _prd, _pre) => {
        'use strict';
        var _prf = null;
        defineModule(_prd);
        Object.defineProperty(_prd, '__esModule', {
            'value': true
        }), _prd.getSlotYellowWingsPersonalEffect = void 0;
        var _prg = _pre(74496);
        _prd.getSlotYellowWingsPersonalEffect = function(_prh) {
            var _pri = null,
                _prj = new _prg.SlotItemEffectModel(),
                _prk = false,
                _prl = new _prg.SlotItemEffectModel();
            'レキシントン' == _prh.yomi ? (_prl.houg += 3, _prl.houm += 2, _prl.tyku += 1, _prl.kaih += 2, _prl.saku += 1, _prk = true) : 'サラトガ' == _prh.yomi ? (_prl.houg += 2, _prl.houm += 1, _prl.tyku += 1, _prl.kaih += 1, _prl.saku += 1, _prk = true) : 'ホーネット' != _prh.yomi && 'レンジャー' != _prh.yomi || (_prl.houg += 1, _prl.houm += 1, _prl.kaih += 1, _prk = true);
            var _prm = _prh.get_slotnums(541) + _prh.get_slotnums(542);
            _prk && _prj.add(_prl.multiply(_prm));
            var _prn = _prh.haveSlotLevelNumOver(541),
                _pro = _prh.haveSlotLevelNumOver(542);
            return 'アメリカ' == _prh.getCountryName() && (_prn[7] >= 1 && (_prj.kaih += 1 * _prn[7]), _prn[10] >= 1 && (_prj.houg += 1 * _prn[10]), _pro[7] >= 1 && (_prj.houm += 1 * _pro[7]), _pro[10] >= 1 && (_prj.houg += 1 * _pro[10])), _prj;
        };
    },
    54518: (_prp, _prq, _prr) => {
        'use strict';
        var _prs = null;
        defineModule(_prq);
        Object.defineProperty(_prq, '__esModule', {
            'value': true
        }), _prq.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _prt = _prr(74496);
        _prq.getSlot_16InchMkXRensouhou_PersonalEffect = function(_pru) {
            var _prv = null,
                _prw = new _prt.SlotItemEffectModel();
            if (93 == _pru.ctype) {
                var _prx = _pru.get_slotnums(330);
                _prx > 0 && (_prw.houg = _prw.houg + 1 * _prx);
                var _pry = _pru.get_slotnums(331);
                _pry > 0 && (_prw.houg = _prw.houg + 1 * _pry, 1496 != _pru.ship_id && 918 != _pru.ship_id || (_prw.houg = _prw.houg + 1 * _pry, _prw.kaih = _prw.kaih + 1 * _pry));
                var _prz = _pru.get_slotnums(332);
                return _prz > 0 && (_prw.houg = _prw.houg + 1 * _prz, 1496 != _pru.ship_id && 918 != _pru.ship_id || (_prw.houg = _prw.houg + 1 * _prz, _prw.kaih = _prw.kaih + 1 * _prz, _prw.tyku = _prw.tyku + 1 * _prz)), _prw;
            }
            var _ps0 = new _prt.SlotItemEffectModel();
            if (19 == _pru.ctype ? (_ps0.houg = 1, (541 == _pru.ship_id || 573 == _pru.ship_id) && (_ps0.houg += 1)) : 88 == _pru.ctype && (_ps0.houg = 1, 576 == _pru.ship_id && (_ps0.houg += 1)), !_ps0.exists()) return _prw;
            var _ps1 = _pru.get_slotnums(330) + _pru.get_slotnums(331) + _pru.get_slotnums(332);
            return _prw = _ps0.multiply(_ps1);
        };
    },
    79353: (_ps2, _ps3, _ps4) => {
        'use strict';
        var _ps5 = null;
        defineModule(_ps3);
        Object.defineProperty(_ps3, '__esModule', {
            'value': true
        }), _ps3.getZuiunSeriesEffect = void 0;
        var _ps6 = _ps4(74496);
        _ps3.getZuiunSeriesEffect = function(_ps7) {
            var _ps8 = null,
                _ps9 = new _ps6.SlotItemEffectModel(),
                _psa = false,
                _psb = new _ps6.SlotItemEffectModel();
            if (662 == _ps7.ship_id ? (_ps9.houg += 2, _ps9.kaih += 1) : 663 == _ps7.ship_id || 668 == _ps7.ship_id || 501 == _ps7.ship_id || 506 == _ps7.ship_id ? (_ps9.houg += 2, _psb.kaih += 1, _psb.tyku += 1, _psa = true) : 502 != _ps7.ship_id && 507 != _ps7.ship_id || (_ps9.houg += 1, _psb.kaih += 1, _psb.tyku += 1, _psa = true), 0 == _psa) return _ps9;
            var _psc = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_psd) {
                var _pse = null;
                _psc += _ps7.get_slotnums(_psd);
            }), _ps9.add(_psb.multiply(_psc)), _ps9;
        };
    },
    89051: function(_psf, _psg, _psh) {
        'use strict';
        var _psi = null;
        var _psj = this && this.__createBinding || (Object.create ? function(_psk, _psl, _psm, _psn) {
                var _pso = null;
                void 0 === _psn && (_psn = _psm);
                var _psp = Object.getOwnPropertyDescriptor(_psl, _psm);
                _psp && !('get' in _psp ? !_psl.__esModule : _psp.writable || _psp.configurable) || (_psp = {
                    'enumerable': true,
                    'get': function() {
                        return _psl[_psm];
                    }
                }), Object.defineProperty(_psk, _psn, _psp);
            } : function(_psq, _psr, _pss, _pst) {
                void 0 === _pst && (_pst = _pss), _psq[_pst] = _psr[_pss];
            }),
            _psu = this && this.__exportStar || function(_psv, _psw) {
                var _psx = null;
                for (var _psy in _psv) 'default' === _psy || Object.prototype.hasOwnProperty.call(_psw, _psy) || _psj(_psw, _psv, _psy);
            };
        defineModule(_psg);
        Object.defineProperty(_psg, '__esModule', {
            'value': true
        }), _psu(_psh(34165), _psg), _psu(_psh(81018), _psg), _psu(_psh(56716), _psg), _psu(_psh(17713), _psg), _psu(_psh(54518), _psg), _psu(_psh(66985), _psg), _psu(_psh(88102), _psg), _psu(_psh(66904), _psg), _psu(_psh(98137), _psg), _psu(_psh(69954), _psg), _psu(_psh(22218), _psg), _psu(_psh(88271), _psg), _psu(_psh(23035), _psg), _psu(_psh(2578), _psg), _psu(_psh(17143), _psg), _psu(_psh(16164), _psg), _psu(_psh(35023), _psg), _psu(_psh(44680), _psg), _psu(_psh(45749), _psg), _psu(_psh(37334), _psg), _psu(_psh(29180), _psg), _psu(_psh(68685), _psg), _psu(_psh(26078), _psg), _psu(_psh(20829), _psg), _psu(_psh(6880), _psg), _psu(_psh(17213), _psg), _psu(_psh(40176), _psg), _psu(_psh(32889), _psg), _psu(_psh(11285), _psg), _psu(_psh(96200), _psg), _psu(_psh(9115), _psg), _psu(_psh(37173), _psg), _psu(_psh(21713), _psg), _psu(_psh(59823), _psg), _psu(_psh(57440), _psg), _psu(_psh(29240), _psg), _psu(_psh(40885), _psg), _psu(_psh(19614), _psg), _psu(_psh(87220), _psg), _psu(_psh(81367), _psg), _psu(_psh(13052), _psg), _psu(_psh(94968), _psg), _psu(_psh(48658), _psg), _psu(_psh(1906), _psg), _psu(_psh(61887), _psg), _psu(_psh(47970), _psg), _psu(_psh(31797), _psg), _psu(_psh(45738), _psg), _psu(_psh(34718), _psg), _psu(_psh(69245), _psg), _psu(_psh(18478), _psg), _psu(_psh(2899), _psg), _psu(_psh(57120), _psg), _psu(_psh(74985), _psg), _psu(_psh(9234), _psg), _psu(_psh(30802), _psg), _psu(_psh(97002), _psg), _psu(_psh(16748), _psg), _psu(_psh(53618), _psg), _psu(_psh(72573), _psg), _psu(_psh(8955), _psg), _psu(_psh(98947), _psg), _psu(_psh(44726), _psg), _psu(_psh(93065), _psg), _psu(_psh(85767), _psg), _psu(_psh(38314), _psg), _psu(_psh(59747), _psg), _psu(_psh(40649), _psg), _psu(_psh(13533), _psg), _psu(_psh(12138), _psg), _psu(_psh(30042), _psg), _psu(_psh(33623), _psg), _psu(_psh(85630), _psg), _psu(_psh(88736), _psg), _psu(_psh(49341), _psg), _psu(_psh(74306), _psg), _psu(_psh(83898), _psg), _psu(_psh(71873), _psg), _psu(_psh(53122), _psg), _psu(_psh(51063), _psg), _psu(_psh(91491), _psg), _psu(_psh(85495), _psg), _psu(_psh(65365), _psg), _psu(_psh(98164), _psg), _psu(_psh(38114), _psg), _psu(_psh(21003), _psg), _psu(_psh(77010), _psg), _psu(_psh(39126), _psg), _psu(_psh(72176), _psg), _psu(_psh(33846), _psg), _psu(_psh(97157), _psg), _psu(_psh(63406), _psg), _psu(_psh(66373), _psg), _psu(_psh(19707), _psg), _psu(_psh(63978), _psg), _psu(_psh(92382), _psg), _psu(_psh(78415), _psg), _psu(_psh(23090), _psg), _psu(_psh(18776), _psg), _psu(_psh(39656), _psg), _psu(_psh(66039), _psg), _psu(_psh(64679), _psg), _psu(_psh(95953), _psg), _psu(_psh(86384), _psg), _psu(_psh(65345), _psg), _psu(_psh(46514), _psg), _psu(_psh(81976), _psg), _psu(_psh(89331), _psg), _psu(_psh(73973), _psg), _psu(_psh(21178), _psg), _psu(_psh(5079), _psg), _psu(_psh(95014), _psg), _psu(_psh(53099), _psg), _psu(_psh(76201), _psg), _psu(_psh(24931), _psg), _psu(_psh(60978), _psg), _psu(_psh(74312), _psg), _psu(_psh(54350), _psg), _psu(_psh(26262), _psg), _psu(_psh(45530), _psg), _psu(_psh(44053), _psg), _psu(_psh(65441), _psg), _psu(_psh(33258), _psg), _psu(_psh(92168), _psg), _psu(_psh(85975), _psg), _psu(_psh(98467), _psg), _psu(_psh(88348), _psg), _psu(_psh(21097), _psg), _psu(_psh(37273), _psg), _psu(_psh(72694), _psg), _psu(_psh(62067), _psg), _psu(_psh(87817), _psg), _psu(_psh(93526), _psg), _psu(_psh(33084), _psg), _psu(_psh(97831), _psg), _psu(_psh(45482), _psg), _psu(_psh(272), _psg), _psu(_psh(69377), _psg), _psu(_psh(31127), _psg), _psu(_psh(79353), _psg), _psu(_psh(17274), _psg), _psu(_psh(91302), _psg), _psu(_psh(82229), _psg), _psu(_psh(10325), _psg), _psu(_psh(351), _psg), _psu(_psh(4050), _psg), _psu(_psh(29805), _psg), _psu(_psh(58913), _psg), _psu(_psh(55421), _psg), _psu(_psh(87845), _psg), _psu(_psh(17562), _psg), _psu(_psh(78466), _psg), _psu(_psh(40061), _psg), _psu(_psh(9195), _psg), _psu(_psh(93297), _psg), _psu(_psh(15133), _psg), _psu(_psh(55747), _psg), _psu(_psh(33155), _psg), _psu(_psh(79086), _psg), _psu(_psh(2306), _psg), _psu(_psh(14386), _psg), _psu(_psh(80225), _psg), _psu(_psh(17732), _psg), _psu(_psh(47169), _psg), _psu(_psh(77670), _psg), _psu(_psh(79988), _psg), _psu(_psh(92253), _psg), _psu(_psh(74428), _psg), _psu(_psh(75873), _psg), _psu(_psh(2631), _psg), _psu(_psh(27177), _psg), _psu(_psh(94781), _psg), _psu(_psh(53908), _psg), _psu(_psh(79813), _psg), _psu(_psh(16088), _psg), _psu(_psh(93733), _psg), _psu(_psh(69939), _psg), _psu(_psh(33734), _psg), _psu(_psh(34432), _psg), _psu(_psh(97423), _psg), _psu(_psh(23551), _psg), _psu(_psh(99791), _psg), _psu(_psh(21403), _psg), _psu(_psh(6173), _psg), _psu(_psh(23934), _psg), _psu(_psh(53709), _psg), _psu(_psh(88838), _psg), _psu(_psh(99790), _psg), _psu(_psh(18387), _psg), _psu(_psh(70941), _psg), _psu(_psh(35025), _psg), _psu(_psh(2603), _psg), _psu(_psh(78707), _psg), _psu(_psh(89058), _psg), _psu(_psh(84372), _psg), _psu(_psh(96804), _psg), _psu(_psh(33896), _psg), _psu(_psh(11031), _psg), _psu(_psh(71383), _psg), _psu(_psh(55888), _psg), _psu(_psh(2258), _psg), _psu(_psh(38003), _psg), _psu(_psh(92174), _psg), _psu(_psh(43768), _psg), _psu(_psh(73254), _psg), _psu(_psh(55734), _psg), _psu(_psh(81254), _psg), _psu(_psh(65455), _psg), _psu(_psh(70362), _psg), _psu(_psh(61977), _psg), _psu(_psh(43607), _psg), _psu(_psh(68086), _psg), _psu(_psh(78173), _psg), _psu(_psh(22581), _psg), _psu(_psh(20418), _psg), _psu(_psh(93373), _psg), _psu(_psh(13053), _psg), _psu(_psh(47874), _psg), _psu(_psh(42788), _psg), _psu(_psh(57664), _psg), _psu(_psh(44990), _psg), _psu(_psh(17712), _psg), _psu(_psh(83957), _psg), _psu(_psh(78539), _psg), _psu(_psh(96282), _psg), _psu(_psh(49679), _psg), _psu(_psh(45927), _psg), _psu(_psh(90312), _psg), _psu(_psh(86856), _psg), _psu(_psh(78123), _psg), _psu(_psh(25765), _psg), _psu(_psh(29493), _psg), _psu(_psh(28221), _psg), _psu(_psh(14830), _psg), _psu(_psh(54047), _psg), _psu(_psh(76054), _psg), _psu(_psh(90725), _psg), _psu(_psh(93053), _psg), _psu(_psh(88792), _psg), _psu(_psh(33242), _psg), _psu(_psh(59415), _psg), _psu(_psh(3296), _psg), _psu(_psh(32666), _psg), _psu(_psh(36731), _psg), _psu(_psh(30450), _psg), _psu(_psh(85127), _psg), _psu(_psh(87204), _psg), _psu(_psh(2380), _psg), _psu(_psh(96580), _psg), _psu(_psh(15653), _psg), _psu(_psh(41410), _psg), _psu(_psh(25851), _psg), _psu(_psh(6482), _psg), _psu(_psh(70332), _psg), _psu(_psh(91275), _psg), _psu(_psh(72743), _psg), _psu(_psh(49964), _psg), _psu(_psh(10950), _psg), _psu(_psh(57041), _psg), _psu(_psh(74608), _psg), _psu(_psh(34941), _psg), _psu(_psh(81284), _psg), _psu(_psh(4862), _psg), _psu(_psh(4188), _psg), _psu(_psh(59794), _psg);
    },
    82692: function(_psz, _pt0, _pt1) {
        'use strict';
        var _pt2 = null;
        var _pt3 = this && this.__createBinding || (Object.create ? function(_pt4, _pt5, _pt6, _pt7) {
                var _pt8 = null;
                void 0 === _pt7 && (_pt7 = _pt6);
                var _pt9 = Object.getOwnPropertyDescriptor(_pt5, _pt6);
                _pt9 && !('get' in _pt9 ? !_pt5.__esModule : _pt9.writable || _pt9.configurable) || (_pt9 = {
                    'enumerable': true,
                    'get': function() {
                        return _pt5[_pt6];
                    }
                }), Object.defineProperty(_pt4, _pt7, _pt9);
            } : function(_pta, _ptb, _ptc, _ptd) {
                void 0 === _ptd && (_ptd = _ptc), _pta[_ptd] = _ptb[_ptc];
            }),
            _pte = this && this.__setModuleDefault || (Object.create ? function(_ptf, _ptg) {
                var _pth = null;
                Object.defineProperty(_ptf, 'default', {
                    'enumerable': true,
                    'value': _ptg
                });
            } : function(_pti, _ptj) {
                var _ptk = null;
                _pti.default = _ptj;
            }),
            _ptl = this && this.__importStar || function(_ptm) {
                var _ptn = null;
                if (_ptm && _ptm.__esModule) return _ptm;
                var _pto = {};
                if (null != _ptm) {
                    for (var _ptp in _ptm) 'default' !== _ptp && Object.prototype.hasOwnProperty.call(_ptm, _ptp) && _pt3(_pto, _ptm, _ptp);
                }
                return _pte(_pto, _ptm), _pto;
            };
        defineModule(_pt0);
        Object.defineProperty(_pt0, '__esModule', {
            'value': true
        }), _pt0.SlotItemEffectUtil = void 0;
        var _ptq, _ptr = _pt1(73785),
            _pts = _ptl(_pt1(89051)),
            _ptt = _pt1(74496);
        ! function(_ptu) {
            var _ptv = null;
            _ptu.getSlotitemEffect = function(_ptw, _ptx) {
                var _pty = null;
                if (null == _ptw || null == _ptx) return null;
                for (var _ptz = new _ptr.SlotItemEffectParamModel(_ptw, _ptx), _pu0 = [{
                        'isExecute': Boolean(_ptz.get_type3_nums(9)),
                        'execFunc': _pts.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_type3_nums(10)),
                        'execFunc': _pts.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_type3_nums(11)),
                        'execFunc': _pts.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_type3_nums(12)) || Boolean(_ptz.get_type3_nums(13)),
                        'execFunc': _pts.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_type3_nums(25)),
                        'execFunc': _pts.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_type3_nums(29)),
                        'execFunc': _pts.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_type3_nums(42)),
                        'execFunc': _pts.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(3)) || Boolean(_ptz.get_slotnums(122)) || Boolean(_ptz.get_slotnums(533)) || Boolean(_ptz.get_slotnums(553)),
                        'execFunc': _pts.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(5)),
                        'execFunc': _pts.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(12)),
                        'execFunc': _pts.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(15)),
                        'execFunc': _pts.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(18)) || Boolean(_ptz.get_slotnums(52)),
                        'execFunc': _pts.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(19)),
                        'execFunc': _pts.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(24)) || Boolean(_ptz.get_slotnums(57)) || Boolean(_ptz.get_slotnums(111)),
                        'execFunc': _pts.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(26)) || Boolean(_ptz.get_slotnums(62)) || Boolean(_ptz.get_slotnums(79)) || Boolean(_ptz.get_slotnums(80)) || Boolean(_ptz.get_slotnums(81)) || Boolean(_ptz.get_slotnums(207)) || Boolean(_ptz.get_slotnums(208)),
                        'execFunc': _pts.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(35)),
                        'execFunc': _pts.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(39)) || Boolean(_ptz.get_slotnums(40)) || Boolean(_ptz.get_slotnums(49)) || Boolean(_ptz.get_slotnums(131)),
                        'execFunc': _pts.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(30)) || Boolean(_ptz.get_slotnums(410)),
                        'execFunc': _pts.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(44)) || Boolean(_ptz.get_slotnums(45)) || Boolean(_ptz.get_slotnums(287)) || Boolean(_ptz.get_slotnums(288)),
                        'execFunc': _pts.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(46)) || Boolean(_ptz.get_slotnums(47)) || Boolean(_ptz.get_slotnums(149)) || Boolean(_ptz.get_slotnums(132)) || Boolean(_ptz.get_slotnums(438)),
                        'execFunc': _pts.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(47)) || Boolean(_ptz.get_slotnums(438)),
                        'execFunc': _pts.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(50)),
                        'execFunc': _pts.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(58)),
                        'execFunc': _pts.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(59)),
                        'execFunc': _pts.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(60)) || Boolean(_ptz.get_slotnums(154)) || Boolean(_ptz.get_slotnums(219)),
                        'execFunc': _pts.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(61)),
                        'execFunc': _pts.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(61)),
                        'execFunc': _pts.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(63)),
                        'execFunc': _pts.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(66)) || Boolean(_ptz.get_slotnums(220)),
                        'execFunc': _pts.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(67)),
                        'execFunc': _pts.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(69)),
                        'execFunc': _pts.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(70)),
                        'execFunc': _pts.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(76)) || Boolean(_ptz.get_slotnums(114)),
                        'execFunc': _pts.getSlot38cmTwinGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(78)),
                        'execFunc': _pts.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(79)) || Boolean(_ptz.get_slotnums(81)),
                        'execFunc': _pts.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(82)),
                        'execFunc': _pts.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(84)),
                        'execFunc': _pts.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(85)),
                        'execFunc': _pts.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(87)),
                        'execFunc': _pts.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(90)),
                        'execFunc': _pts.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(93)),
                        'execFunc': _pts.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(94)),
                        'execFunc': _pts.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(99)),
                        'execFunc': _pts.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(100)),
                        'execFunc': _pts.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(104)),
                        'execFunc': _pts.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(106)) || Boolean(_ptz.get_slotnums(450)),
                        'execFunc': _pts.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(115)),
                        'execFunc': _pts.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(118)) || Boolean(_ptz.get_slotnums(521)),
                        'execFunc': _pts.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(119)),
                        'execFunc': _pts.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(121)),
                        'execFunc': _pts.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(122)),
                        'execFunc': _pts.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(123)),
                        'execFunc': _pts.getSlot123PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(124)),
                        'execFunc': _pts.getSlot124PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(128)) || Boolean(_ptz.get_slotnums(281)),
                        'execFunc': _pts.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(129)),
                        'execFunc': _pts.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(130)),
                        'execFunc': _pts.getSlot130PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(132)),
                        'execFunc': _pts.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(136)),
                        'execFunc': _pts.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(139)),
                        'execFunc': _pts.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(143)),
                        'execFunc': _pts.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(144)),
                        'execFunc': _pts.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(147)) || Boolean(_ptz.get_slotnums(393)) || Boolean(_ptz.get_slotnums(394)),
                        'execFunc': _pts.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(149)),
                        'execFunc': _pts.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(165)) || Boolean(_ptz.get_slotnums(216)),
                        'execFunc': _pts.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(171)),
                        'execFunc': _pts.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(174)),
                        'execFunc': _pts.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(179)),
                        'execFunc': _pts.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(184)),
                        'execFunc': _pts.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(188)),
                        'execFunc': _pts.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(189)),
                        'execFunc': _pts.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(194)),
                        'execFunc': _pts.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(195)),
                        'execFunc': _pts.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(204)),
                        'execFunc': _pts.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(217)),
                        'execFunc': _pts.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(220)),
                        'execFunc': _pts.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(227)),
                        'execFunc': _pts.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(228)),
                        'execFunc': _pts.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(229)),
                        'execFunc': _pts.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(234)),
                        'execFunc': _pts.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(235)),
                        'execFunc': _pts.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(237)) || Boolean(_ptz.get_slotnums(322)) || Boolean(_ptz.get_slotnums(323)) || Boolean(_ptz.get_slotnums(490)),
                        'execFunc': _pts.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(237)),
                        'execFunc': _pts.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(238)) || Boolean(_ptz.get_slotnums(239)),
                        'execFunc': _pts.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(242)),
                        'execFunc': _pts.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(243)),
                        'execFunc': _pts.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(244)),
                        'execFunc': _pts.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(245)) || Boolean(_ptz.get_slotnums(246)) || Boolean(_ptz.get_slotnums(468)),
                        'execFunc': _pts.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(247)),
                        'execFunc': _pts.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(252)),
                        'execFunc': _pts.getSlot252PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(258)),
                        'execFunc': _pts.getSlot258PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(266)),
                        'execFunc': _pts.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(266)),
                        'execFunc': _pts.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(267)) || Boolean(_ptz.get_slotnums(366)),
                        'execFunc': _pts.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(267)) || Boolean(_ptz.get_slotnums(366)),
                        'execFunc': _pts.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(268)),
                        'execFunc': _pts.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(268)),
                        'execFunc': _pts.getSlotCamouflageSlotPersonal2_Effect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(271)),
                        'execFunc': _pts.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(275)),
                        'execFunc': _pts.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(277)),
                        'execFunc': _pts.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(278)),
                        'execFunc': _pts.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(279)),
                        'execFunc': _pts.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(282)),
                        'execFunc': _pts.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(283)),
                        'execFunc': _pts.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(285)),
                        'execFunc': _pts.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(286)),
                        'execFunc': _pts.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(286)),
                        'execFunc': _pts.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(286)),
                        'execFunc': _pts.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(287)),
                        'execFunc': _pts.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(288)),
                        'execFunc': _pts.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(289)),
                        'execFunc': _pts.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(290)),
                        'execFunc': _pts.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(291)),
                        'execFunc': _pts.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(292)),
                        'execFunc': _pts.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(293)),
                        'execFunc': _pts.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(294)),
                        'execFunc': _pts.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(295)),
                        'execFunc': _pts.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(296)),
                        'execFunc': _pts.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(297)),
                        'execFunc': _pts.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(298)) || Boolean(_ptz.get_slotnums(299)) || Boolean(_ptz.get_slotnums(300)),
                        'execFunc': _pts.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(301)),
                        'execFunc': _pts.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(302)),
                        'execFunc': _pts.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(303)),
                        'execFunc': _pts.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(304)),
                        'execFunc': _pts.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(305)) || Boolean(_ptz.get_slotnums(306)),
                        'execFunc': _pts.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(307)),
                        'execFunc': _pts.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(308)),
                        'execFunc': _pts.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(310)) || Boolean(_ptz.get_slotnums(518)),
                        'execFunc': _pts.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(313)),
                        'execFunc': _pts.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(314)),
                        'execFunc': _pts.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(315)),
                        'execFunc': _pts.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(316)),
                        'execFunc': _pts.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(317)),
                        'execFunc': _pts.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(318)),
                        'execFunc': _pts.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(319)),
                        'execFunc': _pts.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(320)),
                        'execFunc': _pts.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(322)),
                        'execFunc': _pts.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(323)),
                        'execFunc': _pts.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(324)) || Boolean(_ptz.get_slotnums(325)),
                        'execFunc': _pts.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(326)),
                        'execFunc': _pts.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(327)),
                        'execFunc': _pts.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(328)),
                        'execFunc': _pts.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(329)),
                        'execFunc': _pts.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(330)) || Boolean(_ptz.get_slotnums(331)) || Boolean(_ptz.get_slotnums(332)),
                        'execFunc': _pts.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(335)),
                        'execFunc': _pts.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(336)),
                        'execFunc': _pts.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(337)),
                        'execFunc': _pts.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(338)),
                        'execFunc': _pts.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(339)),
                        'execFunc': _pts.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(340)),
                        'execFunc': _pts.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(341)),
                        'execFunc': _pts.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(342)),
                        'execFunc': _pts.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(343)),
                        'execFunc': _pts.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(344)),
                        'execFunc': _pts.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(345)),
                        'execFunc': _pts.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(346)),
                        'execFunc': _pts.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(347)),
                        'execFunc': _pts.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(356)) || Boolean(_ptz.get_slotnums(357)),
                        'execFunc': _pts.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(358)),
                        'execFunc': _pts.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(359)),
                        'execFunc': _pts.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(360)) || Boolean(_ptz.get_slotnums(361)),
                        'execFunc': _pts.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(362)) || Boolean(_ptz.get_slotnums(363)),
                        'execFunc': _pts.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(364)),
                        'execFunc': _pts.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(365)),
                        'execFunc': _pts.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(367)),
                        'execFunc': _pts.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(368)),
                        'execFunc': _pts.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(369)),
                        'execFunc': _pts.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(370)),
                        'execFunc': _pts.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(371)),
                        'execFunc': _pts.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(372)),
                        'execFunc': _pts.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(373)),
                        'execFunc': _pts.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(374)),
                        'execFunc': _pts.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(375)),
                        'execFunc': _pts.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(376)),
                        'execFunc': _pts.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(377)),
                        'execFunc': _pts.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(378)),
                        'execFunc': _pts.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(379)),
                        'execFunc': _pts.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(380)),
                        'execFunc': _pts.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(381)),
                        'execFunc': _pts.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(382)) || Boolean(_ptz.get_slotnums(509)),
                        'execFunc': _pts.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(383)),
                        'execFunc': _pts.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(384)),
                        'execFunc': _pts.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(385)),
                        'execFunc': _pts.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(386)),
                        'execFunc': _pts.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(387)),
                        'execFunc': _pts.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(389)),
                        'execFunc': _pts.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(390)),
                        'execFunc': _pts.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(391)),
                        'execFunc': _pts.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(392)),
                        'execFunc': _pts.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(397)),
                        'execFunc': _pts.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(398)),
                        'execFunc': _pts.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(399)),
                        'execFunc': _pts.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(400)),
                        'execFunc': _pts.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(407)),
                        'execFunc': _pts.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(408)),
                        'execFunc': _pts.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(409)),
                        'execFunc': _pts.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(411)),
                        'execFunc': _pts.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(412)),
                        'execFunc': _pts.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(413)),
                        'execFunc': _pts.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(414)) || Boolean(_ptz.get_slotnums(539)),
                        'execFunc': _pts.getSlotSocSeagullPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(415)),
                        'execFunc': _pts.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(419)),
                        'execFunc': _pts.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(420)),
                        'execFunc': _pts.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(421)),
                        'execFunc': _pts.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(422)),
                        'execFunc': _pts.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(423)),
                        'execFunc': _pts.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(424)),
                        'execFunc': _pts.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(425)),
                        'execFunc': _pts.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(426)) || Boolean(_ptz.get_slotnums(427)) || Boolean(_ptz.get_slotnums(428)) || Boolean(_ptz.get_slotnums(429)),
                        'execFunc': _pts.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(430)),
                        'execFunc': _pts.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(434)) || Boolean(_ptz.get_slotnums(435)),
                        'execFunc': _pts.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(437)),
                        'execFunc': _pts.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(438)),
                        'execFunc': _pts.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(439)),
                        'execFunc': _pts.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(440)) || Boolean(_ptz.get_slotnums(441)),
                        'execFunc': _pts.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(442)) || Boolean(_ptz.get_slotnums(443)),
                        'execFunc': _pts.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(447)),
                        'execFunc': _pts.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(450)),
                        'execFunc': _pts.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(451)),
                        'execFunc': _pts.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(455)),
                        'execFunc': _pts.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(456)),
                        'execFunc': _pts.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(457)) || Boolean(_ptz.get_slotnums(461)),
                        'execFunc': _pts.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(458)),
                        'execFunc': _pts.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(463)),
                        'execFunc': _pts.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(464)),
                        'execFunc': _pts.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(465)),
                        'execFunc': _pts.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(466)),
                        'execFunc': _pts.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(467)),
                        'execFunc': _pts.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(470)) || Boolean(_ptz.get_slotnums(529)),
                        'execFunc': _pts.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(471)),
                        'execFunc': _pts.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(472)),
                        'execFunc': _pts.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(473)),
                        'execFunc': _pts.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(474)),
                        'execFunc': _pts.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(478)),
                        'execFunc': _pts.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(483)),
                        'execFunc': _pts.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(485)),
                        'execFunc': _pts.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(486)),
                        'execFunc': _pts.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(487)),
                        'execFunc': _pts.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(488)),
                        'execFunc': _pts.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(489)) || Boolean(_ptz.get_slotnums(491)),
                        'execFunc': _pts.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(500)) || Boolean(_ptz.get_slotnums(501)),
                        'execFunc': _pts.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(502)),
                        'execFunc': _pts.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(503)),
                        'execFunc': _pts.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(505)),
                        'execFunc': _pts.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(506)),
                        'execFunc': _pts.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(507)) || Boolean(_ptz.get_slotnums(508)),
                        'execFunc': _pts.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(510)),
                        'execFunc': _pts.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(511)) || Boolean(_ptz.get_slotnums(512)),
                        'execFunc': _pts.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(517)),
                        'execFunc': _pts.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(518)),
                        'execFunc': _pts.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(519)),
                        'execFunc': _pts.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(520)),
                        'execFunc': _pts.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(521)),
                        'execFunc': _pts.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(522)) || Boolean(_ptz.get_slotnums(523)),
                        'execFunc': _pts.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(524)),
                        'execFunc': _pts.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(525)) || Boolean(_ptz.get_slotnums(526)),
                        'execFunc': _pts.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(527)),
                        'execFunc': _pts.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(528)),
                        'execFunc': _pts.getSlot528PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(530)),
                        'execFunc': _pts.getSlot530PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(531)),
                        'execFunc': _pts.getSlot531PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(534)) || Boolean(_ptz.get_slotnums(535)),
                        'execFunc': _pts.getSlot13_8cmRensouhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(536)) || Boolean(_ptz.get_slotnums(537)),
                        'execFunc': _pts.getSlot15_2cmSanrensouSyuhouPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(538)),
                        'execFunc': _pts.getSlot538PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(540)),
                        'execFunc': _pts.getSlot540PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(541)) || Boolean(_ptz.get_slotnums(542)),
                        'execFunc': _pts.getSlotYellowWingsPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(543)) || Boolean(_ptz.get_slotnums(544)),
                        'execFunc': _pts.getSlotSBD_Type_VS_VBPersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(545)),
                        'execFunc': _pts.getSlot545PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(549)),
                        'execFunc': _pts.getSlot549PersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(550)) || Boolean(_ptz.get_slotnums(551)) || Boolean(_ptz.get_slotnums(552)),
                        'execFunc': _pts.getSlotMyoujoPlanePersonalEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(39)) || Boolean(_ptz.get_slotnums(40)) || Boolean(_ptz.get_slotnums(49)) || Boolean(_ptz.get_slotnums(505)),
                        'execFunc': _pts.getSlot25mmMachinegunLightShipEffect
                    }, {
                        'isExecute': Boolean(_ptz.get_slotnums(554)),
                        'execFunc': _pts.getSlot554PersonalEffect
                    }], _pu1 = new _ptt.SlotItemEffectModel(), _pu2 = 0, _pu3 = _pu0; _pu2 < _pu3.length; _pu2++) {
                    var _pu4 = _pu3[_pu2];
                    if (_pu4.isExecute) {
                        var _pu5 = _pu4.execFunc(_ptz);
                        0, _pu1.add(_pu5);
                    }
                }
                return _pu1;
            };
        }(_ptq || (_pt0.SlotItemEffectUtil = _ptq = {}));
    },
}