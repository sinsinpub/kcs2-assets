{
    72170: (_1nn, _1no) => {
        'use strict';
        var _1np = null;
        defineModule(_1no);
        Object.defineProperty(_1no, '__esModule', {
            'value': true
        }), _1no.SHIP_COUNTRY = void 0, _1no.SHIP_COUNTRY = {
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
            73: 'ロシア',
            81: 'ロシア'
        };
    },
    73785: function(_lbb, _lbc, _lbd) {
        'use strict';
        var _lbe = null;
        var _lbf = this && this.__importDefault || function(_lbg) {
            var _lbh = null;
            return _lbg && _lbg.__esModule ? _lbg : {
                'default': _lbg
            };
        };
        defineModule(_lbc);
        Object.defineProperty(_lbc, '__esModule', {
            'value': true
        }), _lbc.SlotItemEffectParamModel = void 0;
        var _lbi = _lbf(_lbd(18622)),
            _lbj = _lbd(72170),
            _lbk = (function() {
                var _lbl = null;

                function _lbm(_lbn, _lbo) {
                    var _lbp = null;
                    this.SLOT_LEVEL_MAX = 10;
                    for (var _lbq = {}, _lbr = {}, _lbs = {}, _lbt = 0, _lbu = _lbo; _lbt < _lbu.length; _lbt++) {
                        var _lbv = _lbu[_lbt];
                        null != _lbv && (null == _lbq[_lbv.mstID] && (_lbq[_lbv.mstID] = new Array()), _lbq[_lbv.mstID].push(_lbv), null == _lbr[_lbv.mstID] ? _lbr[_lbv.mstID] = 1 : _lbr[_lbv.mstID] += 1, null == _lbs[_lbv.equipType] ? _lbs[_lbv.equipType] = 1 : _lbs[_lbv.equipType] += 1);
                    }
                    this._have_slots_dict = _lbq, this._have_slotnums_dict = _lbr, this._have_type3nums_dict = _lbs, this._ship_id = _lbn.mstID, this._yomi = _lbn.yomi, this._stype = _lbn.shipTypeID, this._ctype = _lbn.getClassType();
                }
                return Object.defineProperty(_lbm.prototype, 'have_slots_dict', {
                    'get': function() {
                        var _lbw = null;
                        return this._have_slots_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lbm.prototype, 'ship_id', {
                    'get': function() {
                        var _lbx = null;
                        return this._ship_id;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lbm.prototype, 'yomi', {
                    'get': function() {
                        var _lby = null;
                        return this._yomi;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lbm.prototype, 'stype', {
                    'get': function() {
                        var _lbz = null;
                        return this._stype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lbm.prototype, 'ctype', {
                    'get': function() {
                        var _lc0 = null;
                        return this._ctype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), _lbm.prototype.get_slotnums = function(_lc1) {
                    var _lc2 = null;
                    return null == this._have_slotnums_dict[_lc1] ? 0 : this._have_slotnums_dict[_lc1];
                }, _lbm.prototype.get_type3_nums = function(_lc3) {
                    var _lc4 = null;
                    return null == this._have_type3nums_dict[_lc3] ? 0 : this._have_type3nums_dict[_lc3];
                }, _lbm.prototype.have_slot_ids = function() {
                    var _lc5 = null;
                    return Object.keys(this._have_slots_dict);
                }, _lbm.prototype.get_each_level_nums = function(_lc6) {
                    var _lc7 = null,
                        _lc8 = this._have_slots_dict[_lc6],
                        _lc9 = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        });
                    if (null != _lc8)
                        for (var _lca = 0, _lcb = _lc8; _lca < _lcb.length; _lca++) {
                            _lc9[_lcb[_lca].level]++;
                        }
                    return _lc9;
                }, _lbm.prototype.get_each_level_over_nums = function(_lcc) {
                    var _lcd = null;
                    for (var _lce = this, _lcf = [], _lcg = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _lch = function(_lci) {
                            var _lcj = null;
                            if (_lcf[_lci] = Array.apply(null, new Array(_lck.SLOT_LEVEL_MAX + 1)).map(function() {
                                    return 0;
                                }), null == _lck.have_slots_dict[_lci]) return 'continue';
                            _lck.get_each_level_nums(_lci).forEach(function(_lcl, _lcm) {
                                var _lcn = null;
                                for (var _lco = 1; _lco <= _lce.SLOT_LEVEL_MAX; _lco++) _lcm >= _lco && (_lcf[_lci][_lco] += _lcl, _lcg[_lco] += _lcl);
                            });
                        }, _lck = this, _lcp = 0, _lcq = _lcc; _lcp < _lcq.length; _lcp++) {
                        _lch(_lcq[_lcp]);
                    }
                    return {
                        'slot': _lcf,
                        'total': _lcg
                    };
                }, _lbm.prototype.get_have_rader_nums = function() {
                    var _lcr = null;
                    for (var _lcs = 0, _lct = 0, _lcu = 0, _lcv = this.have_slot_ids(); _lcu < _lcv.length; _lcu++) {
                        var _lcw = _lcv[_lcu],
                            _lcx = _lbi.default.model.slot.getMst(_lcw),
                            _lcy = _lcx.equipType;
                        12 != _lcy && 13 != _lcy || (_lcx.sakuteki >= 5 && (_lcs += this.get_slotnums(parseInt(_lcw))), _lcx.taiku >= 2 && (_lct += this.get_slotnums(parseInt(_lcw))));
                    }
                    return {
                        'water_rader': _lcs,
                        'air_rader': _lct
                    };
                }, _lbm.prototype.getUSSWaterRaderDict = function() {
                    return {
                        279: 1,
                        307: 1,
                        315: 1,
                        456: 1
                    };
                }, _lbm.prototype.getUSSAirRaderDict = function() {
                    return {
                        278: 1,
                        279: 1
                    };
                }, _lbm.prototype.getCountryName = function() {
                    var _lcz = null;
                    return null == _lbj.SHIP_COUNTRY[this._ctype] ? '' : _lbj.SHIP_COUNTRY[this._ctype];
                }, _lbm.prototype.getSpItemDict_FukuhouTaikuHeisou = function() {
                    return {
                        10: 0,
                        130: 0,
                        66: 0,
                        220: 0,
                        71: 0,
                        275: 0,
                        464: 0
                    };
                }, _lbm.prototype.getSpItemDict_Tansou21GouDentan = function() {
                    return {
                        30: 0,
                        410: 0
                    };
                }, _lbm;
            }());
        _lbc.SlotItemEffectParamModel = _lbk;
    },
    16718: (_lo7, _lo8, _lo9) => {
        'use strict';
        var _loa = null;
        defineModule(_lo8);
        Object.defineProperty(_lo8, '__esModule', {
            'value': true
        }), _lo8.TaskGetSlotItemEffectParams = void 0;
        var _lob = _lo9(74496),
            _loc = _lo9(82692),
            _lod = (function() {
                var _loe = null;

                function _lof(_log, _loh, _loi) {
                    var _loj = null;
                    this._removeSlots = [], this._toSlots = [], this._ship = _log;
                    var _lok = _log.getSlotitems();
                    _lok.push(_log.getSlotitemEx());
                    var _lol = _lok.map(function(_lom) {
                        var _lon = null;
                        return null == _lom || null != _loh && _lom.memID == _loh.memID ? null : _lom;
                    });
                    this._removeSlots = _lol;
                    var _loo = _lol.map(function(_lop) {
                        return _lop;
                    });
                    _loo.push(_loi), this._toSlots = _loo;
                }
                return _lof.prototype.start = function() {
                    var _loq = null,
                        _lor = this._ship.getSlotitems();
                    _lor.push(this._ship.getSlotitemEx());
                    var _los = _loc.SlotItemEffectUtil.getSlotitemEffect(this._ship, _lor),
                        _lot = _loc.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._removeSlots),
                        _lou = _loc.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._toSlots);
                    return {
                        'fromSlotItemEffect': this._subEffectModels(_los, _lot),
                        'toSlotItemEffect': this._subEffectModels(_lou, _lot)
                    };
                }, _lof.prototype._subEffectModels = function(_lov, _low) {
                    var _lox = null,
                        _loy = new _lob.SlotItemEffectModel();
                    return _loy.houg = _lov.houg - _low.houg, _loy.raig = _lov.raig - _low.raig, _loy.tyku = _lov.tyku - _low.tyku, _loy.souk = _lov.souk - _low.souk, _loy.kaih = _lov.kaih - _low.kaih, _loy.tais = _lov.tais - _low.tais, _loy.saku = _lov.saku - _low.saku, _loy.baku = _lov.baku - _low.baku, _loy.houm = _lov.houm - _low.houm, _loy.leng = _lov.leng - _low.leng, _loy;
                }, _lof;
            }());
        _lo8.TaskGetSlotItemEffectParams = _lod;
    },
    69377: function(_mco, _mcp, _mcq) {
        'use strict';
        var _mcr = null;
        var _mcs = this && this.__importDefault || function(_mct) {
            var _mcu = null;
            return _mct && _mct.__esModule ? _mct : {
                'default': _mct
            };
        };
        defineModule(_mcp);
        Object.defineProperty(_mcp, '__esModule', {
            'value': true
        }), _mcp.get25mmMachinegunEffect = void 0;
        var _mcv = _mcq(74496),
            _mcw = _mcs(_mcq(18622));
        _mcp.get25mmMachinegunEffect = function(_mcx) {
            var _mcy = null,
                _mcz = new _mcv.SlotItemEffectModel(),
                _md0 = false,
                _md1 = new _mcv.SlotItemEffectModel(),
                _md2 = 0;
            if (662 == _mcx.ship_id || 663 == _mcx.ship_id ? (_md1.tyku += 2, _md1.kaih += 1, _md0 = true) : 668 == _mcx.ship_id && (_md1.tyku += 3, _md1.kaih += 2, _md0 = true), 56 == _mcx.ctype && (_md1.houg += 1, _md1.tyku += 2, _md1.kaih += 2, _md0 = true, _md2 = 1), 0 == _md0) return _mcz;
            var _md3 = _mcx.get_slotnums(39) + _mcx.get_slotnums(40) + _mcx.get_slotnums(49) + _mcx.get_slotnums(131);
            if (_mcz.add(_md1.multiply(_md3)), 0 == _md2) return _mcz;
            for (var _md4 = 0, _md5 = 0, _md6 = _mcx.have_slot_ids(); _md5 < _md6.length; _md5++) {
                var _md7 = _md6[_md5],
                    _md8 = _mcw.default.model.slot.getMst(_md7),
                    _md9 = _md8.equipType;
                12 != _md9 && 13 != _md9 || (_md8.sakuteki >= 5 && _mcx.get_slotnums(parseInt(_md7)), _md8.taiku >= 2 && (_md4 += _mcx.get_slotnums(parseInt(_md7))));
            }
            return _md4 >= 1 && 1 == _md2 && (_mcz.tyku += 2, _mcz.kaih += 2), _mcz;
        };
    },
    77670: function(_mda, _mdb, _mdc) {
        'use strict';
        var _mdd = null;
        var _mde = this && this.__importDefault || function(_mdf) {
            var _mdg = null;
            return _mdf && _mdf.__esModule ? _mdf : {
                'default': _mdf
            };
        };
        defineModule(_mdb);
        Object.defineProperty(_mdb, '__esModule', {
            'value': true
        }), _mdb.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mdh = _mdc(74496),
            _mdi = _mde(_mdc(18622));
        _mdb.get8cmAntiAircraftGunPersonalEffect = function(_mdj) {
            var _mdk = null,
                _mdl = new _mdh.SlotItemEffectModel(),
                _mdm = false,
                _mdn = new _mdh.SlotItemEffectModel(),
                _mdo = 0;
            if (501 != _mdj.ship_id && 506 != _mdj.ship_id && 502 != _mdj.ship_id && 507 != _mdj.ship_id || (_mdn.tyku += 2, _mdn.kaih += 1, _mdm = true, _mdo = 1), 501 != _mdj.ship_id && 506 != _mdj.ship_id || (_mdn.houg += 1, _mdn.tyku += 2, _mdn.kaih += 2, _mdm = true, _mdo = 1), 0 == _mdm) return _mdl;
            var _mdp = _mdj.get_slotnums(66) + _mdj.get_slotnums(220);
            _mdl.add(_mdn.multiply(_mdp));
            for (var _mdq = 0, _mdr = 0, _mds = _mdj.have_slot_ids(); _mdr < _mds.length; _mdr++) {
                var _mdt = _mds[_mdr],
                    _mdu = _mdi.default.model.slot.getMst(_mdt),
                    _mdv = _mdu.equipType;
                12 != _mdv && 13 != _mdv || (_mdu.sakuteki >= 5 && _mdj.get_slotnums(parseInt(_mdt)), _mdu.taiku >= 2 && (_mdq += _mdj.get_slotnums(parseInt(_mdt))));
            }
            return 0 == _mdo || _mdq >= 1 && (_mdl.tyku += 1, _mdl.kaih += 2), _mdl;
        };
    },
    34165: (_mdw, _mdx, _mdy) => {
        'use strict';
        var _mdz = null;
        defineModule(_mdx);
        Object.defineProperty(_mdx, '__esModule', {
            'value': true
        }), _mdx.getCamouflageSlotPersonalEffect = void 0;
        var _me0 = _mdy(74496);
        _mdx.getCamouflageSlotPersonalEffect = function(_me1) {
            var _me2 = null,
                _me3 = new _me0.SlotItemEffectModel();
            return 'きそ' != _me1.yomi && 'たま' != _me1.yomi || (_me3.kaih = 7, _me3.souk = 2), _me3;
        };
    },
    31127: (_me4, _me5, _me6) => {
        'use strict';
        var _me7 = null;
        defineModule(_me5);
        Object.defineProperty(_me5, '__esModule', {
            'value': true
        }), _me5.getHighZuiunSeriesEffect = void 0;
        var _me8 = _me6(74496);
        _me5.getHighZuiunSeriesEffect = function(_me9) {
            var _mea = null,
                _meb = new _me8.SlotItemEffectModel(),
                _mec = false,
                _med = new _me8.SlotItemEffectModel();
            if (662 == _me9.ship_id ? (_meb.houg += 3, _meb.kaih += 1) : 663 == _me9.ship_id || 668 == _me9.ship_id || 501 == _me9.ship_id || 506 == _me9.ship_id || 553 == _me9.ship_id || 554 == _me9.ship_id ? (_med.houg += 3, _med.kaih += 2, _med.tyku += 1, _mec = true) : 502 != _me9.ship_id && 507 != _me9.ship_id || (_med.houg += 2, _med.kaih += 2, _med.tyku += 1, _mec = true), 0 == _mec) return _meb;
            var _mee = 0;
            return [237, 322, 323, 490].forEach(function(_mef) {
                var _meg = null;
                _mee += _me9.get_slotnums(_mef);
            }), _meb.add(_med.multiply(_mee)), _meb;
        };
    },
    81018: function(_meh, _mei, _mej) {
        'use strict';
        var _mek = null;
        var _mel = this && this.__importDefault || function(_mem) {
            var _men = null;
            return _mem && _mem.__esModule ? _mem : {
                'default': _mem
            };
        };
        defineModule(_mei);
        Object.defineProperty(_mei, '__esModule', {
            'value': true
        }), _mei.getRaderPrivateEffect = void 0;
        var _meo = _mej(74496),
            _mep = _mel(_mej(18622));
        _mei.getRaderPrivateEffect = function(_meq) {
            var _mer = null,
                _mes = new _meo.SlotItemEffectModel(),
                _met = 0,
                _meu = 0;
            if (569 == _meq.ship_id || 648 == _meq.ship_id || 961 == _meq.ship_id || 951 == _meq.ship_id) _met = 1;
            else {
                if (955 != _meq.ship_id && 960 != _meq.ship_id) return _mes;
                _met = 2, _meu = 1;
            }
            for (var _mev = 0, _mew = 0, _mex = _meq.have_slot_ids(); _mew < _mex.length; _mew++) {
                var _mey = _mex[_mew],
                    _mez = _mep.default.model.slot.getMst(_mey),
                    _mf0 = _mez.equipType;
                12 != _mf0 && 13 != _mf0 || (_mez.sakuteki >= 5 && _meq.get_slotnums(parseInt(_mey)), _mez.taiku >= 2 && (_mev += _meq.get_slotnums(parseInt(_mey))));
            }
            if (_mev > 0 && (1 == _met ? (_mes.houg += 1, _mes.kaih += 3, _mes.tyku += 2) : 2 == _met && (_mes.tyku += 2, _mes.kaih += 1)), 0 == _meu) return _mes;
            for (var _mf1 = [], _mf2 = function(_mf3) {
                    var _mf4 = null;
                    if (null == _meq.have_slots_dict[_mf3]) return 'continue';
                    var _mf5 = _meq.get_each_level_nums(_mf3);
                    null == _mf1[_mf3] && (_mf1[_mf3] = []), _mf5.forEach(function(_mf6, _mf7) {
                        var _mf8 = null;
                        for (var _mf9 = 1; _mf9 <= _meq.SLOT_LEVEL_MAX; _mf9++) null == _mf1[_mf3][_mf9] && (_mf1[_mf3][_mf9] = 0), _mf7 >= _mf9 && (_mf1[_mf3][_mf9] += _mf6);
                    });
                }, _mfa = 0, _mfb = [450]; _mfa < _mfb.length; _mfa++) {
                _mf2(_mfb[_mfa]);
            }
            var _mfc = null != _mf1[450] ? _mf1[450][4] : 0;
            return 1 == _meu && _mfc > 0 && (_mes.houg += 1, _mes.houm += 1, _mes.tyku += 1, _mes.kaih += 2), _mes;
        };
    },
    56716: (_mfd, _mfe, _mff) => {
        'use strict';
        var _mfg = null;
        defineModule(_mfe);
        Object.defineProperty(_mfe, '__esModule', {
            'value': true
        }), _mfe.getSearchLightEffect = void 0;
        var _mfh = _mff(74496);
        _mfe.getSearchLightEffect = function(_mfi) {
            var _mfj = null,
                _mfk = new _mfh.SlotItemEffectModel(),
                _mfl = _mfi.get_type3_nums(29);
            return 'ひえい' == _mfi.yomi || 'きりしま' == _mfi.yomi || 'ちょうかい' == _mfi.yomi || 'じんつう' == _mfi.yomi || 'あかつき' == _mfi.yomi ? (_mfk.houg += 4, _mfk.kaih -= 1) : 'あきぐも' == _mfi.yomi ? _mfk.houg = _mfk.houg + 2 * _mfl : 'ゆきかぜ' == _mfi.yomi && (_mfk.houg = _mfk.houg + _mfl, _mfk.tyku = _mfk.tyku + _mfl), 662 != _mfi.ship_id && 663 != _mfi.ship_id && 668 != _mfi.ship_id || (_mfk.raig += 2, _mfk.houg += 4), 'じんつう' == _mfi.yomi && (_mfk.raig += 8, _mfk.houg += 4), _mfk;
        };
    },
    17713: (_mfm, _mfn, _mfo) => {
        'use strict';
        var _mfp = null;
        defineModule(_mfn);
        Object.defineProperty(_mfn, '__esModule', {
            'value': true
        }), _mfn.getSearchLightLargeEffect = void 0;
        var _mfq = _mfo(74496);
        _mfn.getSearchLightLargeEffect = function(_mfr) {
            var _mfs = null,
                _mft = new _mfq.SlotItemEffectModel();
            'ひえい' == _mfr.yomi || 'きりしま' == _mfr.yomi ? (_mft.houg += 6, _mft.kaih -= 2) : 'やまと' != _mfr.yomi && 'むさし' != _mfr.yomi || (_mft.houg += 4, _mft.kaih -= 1);
            var _mfu = _mfr.get_slotnums(174);
            return 592 == _mfr.ship_id && (_mft.houg += 3, _mft.raig += 3, _mfu > 0 && (_mft.raig += 5)), _mft;
        };
    },
    17213: (_mfv, _mfw, _mfx) => {
        'use strict';
        var _mfy = null;
        defineModule(_mfw);
        Object.defineProperty(_mfw, '__esModule', {
            'value': true
        }), _mfw.getSlot100PersonalEffect = void 0;
        var _mfz = _mfx(74496);
        _mfw.getSlot100PersonalEffect = function(_mg0) {
            var _mg1 = null,
                _mg2 = new _mfz.SlotItemEffectModel(),
                _mg3 = new _mfz.SlotItemEffectModel();
            if (553 == _mg0.ship_id) _mg3.houg = 4;
            else {
                if (554 != _mg0.ship_id) return 196 == _mg0.ship_id ? (_mg2.houg = 3, _mg2) : 197 == _mg0.ship_id ? (_mg2.houg = 6, _mg2) : _mg2;
                _mg3.houg = 4;
            }
            var _mg4 = _mg0.get_slotnums(100);
            return _mg2 = _mg3.multiply(_mg4);
        };
    },
    40176: (_mg5, _mg6, _mg7) => {
        'use strict';
        var _mg8 = null;
        defineModule(_mg6);
        Object.defineProperty(_mg6, '__esModule', {
            'value': true
        }), _mg6.getSlot104PersonalEffect = void 0;
        var _mg9 = _mg7(74496);
        _mg6.getSlot104PersonalEffect = function(_mga) {
            var _mgb = null,
                _mgc = new _mg9.SlotItemEffectModel(),
                _mgd = new _mg9.SlotItemEffectModel();
            if (149 == _mga.ship_id || 591 == _mga.ship_id) _mgd.houg = 2;
            else {
                if (150 == _mga.ship_id || 592 == _mga.ship_id) _mgd.houg = 1;
                else {
                    if (152 == _mga.ship_id) _mgd.houg = 1;
                    else {
                        if (151 != _mga.ship_id && 593 != _mga.ship_id && 954 != _mga.ship_id) return _mgc;
                        _mgd.houg = 2, _mgd.tyku = 1, _mgd.kaih = 2;
                    }
                }
            }
            var _mge = _mga.get_slotnums(104);
            return _mgc = _mgd.multiply(_mge);
        };
    },
    32889: (_mgf, _mgg, _mgh) => {
        'use strict';
        var _mgi = null;
        defineModule(_mgg);
        Object.defineProperty(_mgg, '__esModule', {
            'value': true
        }), _mgg.getSlot106PersonalEffect = void 0;
        var _mgj = _mgh(74496);
        _mgg.getSlot106PersonalEffect = function(_mgk) {
            var _mgl = null,
                _mgm = new _mgj.SlotItemEffectModel(),
                _mgn = new _mgj.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_mgk.ship_id) >= 0 ? (_mgn.houg += 1, _mgn.tyku += 2, _mgn.souk += 1, _mgn.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mgk.yomi) >= 0 ? (_mgn.tyku += 1, _mgn.souk += 1, _mgn.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mgk.yomi) >= 0 && (_mgn.tyku += 2, _mgn.souk += 1, _mgn.kaih += 2, 663 != _mgk.ship_id && 668 != _mgk.ship_id || (_mgm.houg += 1, _mgm.tyku += 1, _mgm.souk += 1, _mgm.kaih += 1), 668 == _mgk.ship_id && (_mgm.tyku += 1, _mgm.kaih += 1)), !_mgn.exists()) return _mgm;
            var _mgo = _mgk.get_slotnums(106) + _mgk.get_slotnums(450);
            return _mgm.add(_mgn.multiply(_mgo)), _mgm;
        };
    },
    15133: (_mgp, _mgq, _mgr) => {
        'use strict';
        var _mgs = null;
        defineModule(_mgq);
        Object.defineProperty(_mgq, '__esModule', {
            'value': true
        }), _mgq.getSlot115PersonalEffect = void 0;
        var _mgt = _mgr(74496);
        _mgq.getSlot115PersonalEffect = function(_mgu) {
            var _mgv = null,
                _mgw = new _mgt.SlotItemEffectModel(),
                _mgx = false,
                _mgy = new _mgt.SlotItemEffectModel(),
                _mgz = 0;
            if (55 != _mgu.ctype && 47 != _mgu.ctype || (_mgy.houg += 2, _mgy.saku += 2, _mgy.kaih += 1, _mgx = true, _mgz = 1), 0 == _mgx) return _mgw;
            var _mh0 = _mgu.get_slotnums(115);
            if (_mgw.add(_mgy.multiply(_mh0)), 0 == _mgz) return _mgw;
            var _mh1 = _mgu.get_each_level_nums(115)[10];
            return 1 == _mgz && (_mgw.houg += 1 * _mh1, _mgw.kaih += 1 * _mh1), _mgw;
        };
    },
    55747: (_mh2, _mh3, _mh4) => {
        'use strict';
        var _mh5 = null;
        defineModule(_mh3);
        Object.defineProperty(_mh3, '__esModule', {
            'value': true
        }), _mh3.getSlot118PersonalEffect = void 0;
        var _mh6 = _mh4(74496);
        _mh3.getSlot118PersonalEffect = function(_mh7) {
            var _mh8 = null,
                _mh9 = new _mh6.SlotItemEffectModel(),
                _mha = false,
                _mhb = new _mh6.SlotItemEffectModel(),
                _mhc = 0;
            if (52 == _mh7.ctype && (_mhb.houg += 1, _mhb.saku += 2, _mhb.kaih += 2, _mhc = 1, _mha = true), 507 == _mh7.ship_id && (_mhb.houg += 3, _mhb.saku += 2, _mhb.kaih += 1, _mhc = 2, _mha = true), 0 == _mha) return _mh9;
            var _mhd = _mh7.get_slotnums(118) + _mh7.get_slotnums(521);
            if (_mh9.add(_mhb.multiply(_mhd)), 0 == _mh7.get_slotnums(118)) return _mh9;
            if (0 == _mhc) return _mh9;
            var _mhe = _mh7.get_each_level_nums(118),
                _mhf = 0,
                _mhg = 0,
                _mhh = 0,
                _mhi = _mhe[10];
            return _mhe.forEach(function(_mhj, _mhk) {
                _mhk >= 2 && (_mhf += _mhj), _mhk >= 5 && (_mhg += _mhj), _mhk >= 7 && (_mhh += _mhj);
            }), 1 == _mhc ? (_mh9.houg += 2 * _mhi, _mh9.saku += 1 * _mhi) : 2 == _mhc && (_mh9.houm += 1 * _mhf, _mh9.kaih += 1 * _mhg, _mh9.houg += 1 * _mhh, _mh9.houg += 1 * _mhi, _mh9.raig += 1 * _mhi, _mh9.tyku += 1 * _mhi, _mh9.saku += 1 * _mhi, _mh9.kaih += 1 * _mhi), _mh9;
        };
    },
    11285: (_mhl, _mhm, _mhn) => {
        'use strict';
        var _mho = null;
        defineModule(_mhm);
        Object.defineProperty(_mhm, '__esModule', {
            'value': true
        }), _mhm.getSlot119PersonalEffect = void 0;
        var _mhp = _mhn(74496);
        _mhm.getSlot119PersonalEffect = function(_mhq) {
            var _mhr = null,
                _mhs = new _mhp.SlotItemEffectModel(),
                _mht = new _mhp.SlotItemEffectModel();
            34 == _mhq.ctype || 56 == _mhq.ctype ? _mht.houg += 1 : 90 == _mhq.ctype && (_mht.houg += 2, _mht.raig += 1);
            var _mhu = true;
            if (_mht.exists() || (_mhu = false), 0 == _mhu) return _mhs;
            var _mhv = _mhq.get_slotnums(119);
            return _mhs = _mht.multiply(_mhv);
        };
    },
    96200: (_mhw, _mhx, _mhy) => {
        'use strict';
        var _mhz = null;
        defineModule(_mhx);
        Object.defineProperty(_mhx, '__esModule', {
            'value': true
        }), _mhx.getSlot120mm50GroupPersonalEffect = void 0;
        var _mi0 = _mhy(74496);
        _mhx.getSlot120mm50GroupPersonalEffect = function(_mi1) {
            var _mi2 = null,
                _mi3 = new _mi0.SlotItemEffectModel(),
                _mi4 = false,
                _mi5 = new _mi0.SlotItemEffectModel(),
                _mi6 = _mi1.get_slotnums(147),
                _mi7 = _mi1.get_slotnums(393),
                _mi8 = _mi1.get_slotnums(394),
                _mi9 = new _mi0.SlotItemEffectModel(),
                _mia = new _mi0.SlotItemEffectModel();
            if (61 == _mi1.ctype && (_mi5.houg += 1, _mi5.kaih += 1, _mi4 = true, _mi7 >= 1 && (_mi9.houg += 1, _mi9.tyku += 1), _mi8 >= 1 && (_mia.houg += 1, _mia.tyku += 1, _mia.kaih += 1, 'グレカーレ' == _mi1.yomi && (_mia.kaih += 1))), 0 == _mi4) return _mi3;
            var _mib = _mi6 + _mi7 + _mi8;
            return _mi3.add(_mi5.multiply(_mib)).add(_mi9.multiply(_mi7)).add(_mia.multiply(_mi8)), _mi3;
        };
    },
    33155: function(_mic, _mid, _mie) {
        'use strict';
        var _mif = null;
        var _mig = this && this.__importDefault || function(_mih) {
            var _mii = null;
            return _mih && _mih.__esModule ? _mih : {
                'default': _mih
            };
        };
        defineModule(_mid);
        Object.defineProperty(_mid, '__esModule', {
            'value': true
        }), _mid.getSlot121PersonalEffect = void 0;
        var _mij = _mie(74496),
            _mik = _mig(_mie(18622));
        _mid.getSlot121PersonalEffect = function(_mil) {
            var _mim = null,
                _min = new _mij.SlotItemEffectModel(),
                _mio = 0;
            if (54 == _mil.ctype && (_min.tyku += 4, _min.kaih += 2, _mio = 1), 0 == _mio) return _min;
            for (var _mip = 0, _miq = 0, _mir = _mil.have_slot_ids(); _miq < _mir.length; _miq++) {
                var _mis = _mir[_miq],
                    _mit = _mik.default.model.slot.getMst(_mis),
                    _miu = _mit.equipType;
                12 != _miu && 13 != _miu || (_mit.sakuteki >= 5 && _mil.get_slotnums(parseInt(_mis)), _mit.taiku >= 2 && (_mip += _mil.get_slotnums(parseInt(_mis))));
            }
            return _mip >= 1 && (_min.tyku += 2, _min.kaih += 2), _min;
        };
    },
    9115: function(_miv, _miw, _mix) {
        'use strict';
        var _miy = null;
        var _miz = this && this.__importDefault || function(_mj0) {
            var _mj1 = null;
            return _mj0 && _mj0.__esModule ? _mj0 : {
                'default': _mj0
            };
        };
        defineModule(_miw);
        Object.defineProperty(_miw, '__esModule', {
            'value': true
        }), _miw.getSlot122PersonalEffect = void 0;
        var _mj2 = _mix(74496),
            _mj3 = _miz(_mix(18622));
        _miw.getSlot122PersonalEffect = function(_mj4) {
            var _mj5 = null,
                _mj6 = new _mj2.SlotItemEffectModel(),
                _mj7 = 0,
                _mj8 = 0,
                _mj9 = false;
            656 == _mj4.ship_id && (_mj9 = true, _mj7 = 1, _mj8 = 1);
            var _mja = 0,
                _mjb = 0,
                _mjc = _mj4.get_each_level_nums(122),
                _mjd = 0;
            if (_mj9) {
                _mjc.forEach(function(_mje, _mjf) {
                    _mjf >= 4 && (_mjd += _mje);
                });
                for (var _mjg = 0, _mjh = _mj4.have_slot_ids(); _mjg < _mjh.length; _mjg++) {
                    var _mji = _mjh[_mjg],
                        _mjj = _mj3.default.model.slot.getMst(_mji),
                        _mjk = _mjj.equipType;
                    12 != _mjk && 13 != _mjk || (_mjj.sakuteki >= 5 && (_mja += _mj4.get_slotnums(parseInt(_mji))), _mjj.taiku >= 2 && (_mjb += _mj4.get_slotnums(parseInt(_mji))));
                }
            }
            return _mjd > 0 && (1 == _mj8 && (_mja > 0 && (_mj6.houg += 4, _mj6.kaih += 3), _mjb > 0 && (_mj6.tyku += 4, _mj6.kaih += 3)), 1 == _mj7 && (_mj6.houg += 5 * _mjd, _mj6.tyku += 3 * _mjd, _mj6.kaih += 2 * _mjd)), _mj6;
        };
    },
    37173: (_mjl, _mjm, _mjn) => {
        'use strict';
        var _mjo = null;
        defineModule(_mjm);
        Object.defineProperty(_mjm, '__esModule', {
            'value': true
        }), _mjm.getSlot129PersonalEffect = void 0;
        var _mjp = _mjn(74496);
        _mjm.getSlot129PersonalEffect = function(_mjq) {
            var _mjr = null,
                _mjs = new _mjp.SlotItemEffectModel(),
                _mjt = false,
                _mju = new _mjp.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_mjq.ctype) >= 0 ? (_mju.houg = 1, _mju.raig = 2, _mju.kaih = 2, _mju.tais = 2, _mju.saku = 1, _mjt = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_mjq.ctype) >= 0 ? (_mju.houg = 1, _mju.raig = 2, _mju.kaih = 2, _mju.saku = 3, _mjt = true) : [7, 13, 29, 8, 9, 31].indexOf(_mjq.ctype) >= 0 && (_mju.houg = 1, _mju.kaih = 2, _mju.saku = 3, _mjt = true), 0 == _mjt) return _mjs;
            var _mjv = _mjq.get_slotnums(129);
            return _mjs = _mju.multiply(_mjv);
        };
    },
    73254: (_mjw, _mjx, _mjy) => {
        'use strict';
        var _mjz = null;
        defineModule(_mjx);
        Object.defineProperty(_mjx, '__esModule', {
            'value': true
        }), _mjx.getSlot12PersonalEffect = void 0;
        var _mk0 = _mjy(74496);
        _mjx.getSlot12PersonalEffect = function(_mk1) {
            var _mk2 = null,
                _mk3 = new _mk0.SlotItemEffectModel(),
                _mk4 = false,
                _mk5 = new _mk0.SlotItemEffectModel(),
                _mk6 = _mk1.get_slotnums(142) + _mk1.get_slotnums(460);
            if (37 == _mk1.ctype && (_mk5.houg += 1, _mk5.kaih += 1, _mk5.houm += 1, _mk6 >= 1 && (_mk3.kaih += 1, _mk3.houm += 1), _mk4 = true), 0 == _mk4) return _mk3;
            var _mk7 = _mk1.get_slotnums(12);
            return _mk3.add(_mk5.multiply(_mk7)), _mk3;
        };
    },
    93373: (_mk8, _mk9, _mka) => {
        'use strict';
        var _mkb = null;
        defineModule(_mk9);
        Object.defineProperty(_mk9, '__esModule', {
            'value': true
        }), _mk9.getSlot132PersonalEffect = void 0;
        var _mkc = _mka(74496);
        _mk9.getSlot132PersonalEffect = function(_mkd) {
            var _mke = null,
                _mkf = new _mkc.SlotItemEffectModel(),
                _mkg = _mkd.get_each_level_nums(132),
                _mkh = 0,
                _mki = 0,
                _mkj = 0,
                _mkk = 0,
                _mkl = 0;
            return _mkg.forEach(function(_mkm, _mkn) {
                _mkn >= 3 && (_mkh += _mkm), _mkn >= 5 && (_mki += _mkm), _mkn >= 7 && (_mkj += _mkm), _mkn >= 8 && (_mkk += _mkm), _mkn >= 9 && (_mkl += _mkm);
            }), _mkh >= 1 && (_mkf.kaih += 1), _mki >= 1 && (_mkf.tais += 1), _mkj >= 1 && (_mkf.kaih += 1), _mkk >= 1 && (_mkf.tais += 1), _mkl >= 1 && (_mkf.houm += 1), _mkg[10] >= 1 && (_mkf.tais += 1), 911 != _mkd.ship_id && 916 != _mkd.ship_id && 546 != _mkd.ship_id || (_mkf.kaih += 1), 461 != _mkd.ship_id && 466 != _mkd.ship_id && 462 != _mkd.ship_id && 467 != _mkd.ship_id && 156 != _mkd.ship_id || (_mkf.kaih += 2), _mkf;
        };
    },
    88838: (_mko, _mkp, _mkq) => {
        'use strict';
        var _mkr = null;
        defineModule(_mkp);
        Object.defineProperty(_mkp, '__esModule', {
            'value': true
        }), _mkp.getSlot136PersonalEffect = void 0;
        var _mks = _mkq(74496);
        _mkp.getSlot136PersonalEffect = function(_mkt) {
            var _mku = null,
                _mkv = new _mks.SlotItemEffectModel(),
                _mkw = 0;
            if (58 != _mkt.ctype && 61 != _mkt.ctype && 64 != _mkt.ctype && 68 != _mkt.ctype && 80 != _mkt.ctype && 92 != _mkt.ctype && 113 != _mkt.ctype && 124 != _mkt.ctype || (_mkv.souk += 2, _mkv.kaih += 1, _mkw = 1), 879 == _mkt.ship_id && (_mkv.souk += 1, _mkv.kaih += 1), 0 == _mkw) return _mkv;
            var _mkx = _mkt.get_each_level_nums(136),
                _mky = 0,
                _mkz = 0,
                _ml0 = _mkx[10];
            return _mkw > 0 && _mkx.forEach(function(_ml1, _ml2) {
                _ml2 >= 3 && (_mky += _ml1), _ml2 >= 6 && (_mkz += _ml1);
            }), 1 == _mkw && (_mky >= 1 && (_mkv.souk += 1 * _mky), _mkz >= 1 && (_mkv.souk += 1 * _mkz), _ml0 >= 1 && (_mkv.souk += 1 * _ml0)), _mkv;
        };
    },
    17274: (_ml3, _ml4, _ml5) => {
        'use strict';
        var _ml6 = null;
        defineModule(_ml4);
        Object.defineProperty(_ml4, '__esModule', {
            'value': true
        }), _ml4.getSlot139PersonalEffect = void 0;
        var _ml7 = _ml5(74496);
        _ml4.getSlot139PersonalEffect = function(_ml8) {
            var _ml9 = null,
                _mla = new _ml7.SlotItemEffectModel(),
                _mlb = false,
                _mlc = new _ml7.SlotItemEffectModel();
            if (662 != _ml8.ship_id && 663 != _ml8.ship_id && 668 != _ml8.ship_id || (_mlc.houg += 2, _mlc.tyku += 1, _mlb = true), 0 == _mlb) return _mla;
            var _mld = _ml8.get_slotnums(139);
            return _mla.add(_mlc.multiply(_mld)), _mla;
        };
    },
    21713: (_mle, _mlf, _mlg) => {
        'use strict';
        var _mlh = null;
        defineModule(_mlf);
        Object.defineProperty(_mlf, '__esModule', {
            'value': true
        }), _mlf.getSlot143PersonalEffect = void 0;
        var _mli = _mlg(74496);
        _mlf.getSlot143PersonalEffect = function(_mlj) {
            var _mlk = null,
                _mll = new _mli.SlotItemEffectModel();
            return 'あかぎ' == _mlj.yomi ? _mll.houg = 3 : 'かが' == _mlj.yomi || 'しょうかく' == _mlj.yomi ? _mll.houg = 2 : ('ずいかく' == _mlj.yomi || 'りゅうじょう' == _mlj.yomi) && (_mll.houg = 1), _mll;
        };
    },
    59823: (_mlm, _mln, _mlo) => {
        'use strict';
        var _mlp = null;
        defineModule(_mln);
        Object.defineProperty(_mln, '__esModule', {
            'value': true
        }), _mln.getSlot144PersonalEffect = void 0;
        var _mlq = _mlo(74496);
        _mln.getSlot144PersonalEffect = function(_mlr) {
            var _mls = null,
                _mlt = new _mlq.SlotItemEffectModel();
            return 'あかぎ' == _mlr.yomi ? _mlt.houg = 3 : 'かが' == _mlr.yomi ? _mlt.houg = 2 : 'しょうかく' == _mlr.yomi ? (_mlt.houg = 2, 461 != _mlr.ship_id && 466 != _mlr.ship_id || (_mlt.houg += 2)) : 'ずいかく' == _mlr.yomi ? (_mlt.houg = 1, 462 != _mlr.ship_id && 467 != _mlr.ship_id || (_mlt.houg += 1)) : 'りゅうじょう' == _mlr.yomi && (_mlt.houg = 1), _mlt;
        };
    },
    57440: (_mlu, _mlv, _mlw) => {
        'use strict';
        var _mlx = null;
        defineModule(_mlv);
        Object.defineProperty(_mlv, '__esModule', {
            'value': true
        }), _mlv.getSlot149PersonalEffect = void 0;
        var _mly = _mlw(74496);
        _mlv.getSlot149PersonalEffect = function(_mlz) {
            var _mm0 = null,
                _mm1 = new _mly.SlotItemEffectModel(),
                _mm2 = new _mly.SlotItemEffectModel(),
                _mm3 = false;
            return 488 == _mlz.ship_id || 141 == _mlz.ship_id || 160 == _mlz.ship_id || 622 == _mlz.ship_id || 623 == _mlz.ship_id || 656 == _mlz.ship_id || 961 == _mlz.ship_id ? (_mm2.tais = 1, _mm2.kaih = 3, _mm3 = true) : 624 == _mlz.ship_id ? (_mm2.tais = 3, _mm2.kaih = 5, _mm3 = true) : 662 == _mlz.ship_id && (_mm2.tais = 2, _mm2.kaih = 4, _mm3 = true), 54 == _mlz.ctype && (_mm2.tais = 1, _mm2.kaih = 2, _mm3 = true), 0 == _mm3 ? _mm1 : _mm1 = _mm2.multiply(1);
        };
    },
    29493: (_mm4, _mm5, _mm6) => {
        'use strict';
        var _mm7 = null;
        defineModule(_mm5);
        Object.defineProperty(_mm5, '__esModule', {
            'value': true
        }), _mm5.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _mm8 = _mm6(74496);
        _mm5.getSlot14inch45CaliberGunPersonalEffect = function(_mm9) {
            var _mma = null,
                _mmb, _mmc, _mmd, _mme = new _mm8.SlotItemEffectModel(),
                _mmf = false,
                _mmg = new _mm8.SlotItemEffectModel(),
                _mmh = {
                    507: 507,
                    508: 507
                },
                _mmi = _mm9.get_slotnums(507),
                _mmj = _mm9.get_slotnums(508),
                _mmk = _mmi + _mmj,
                _mml = _mm9.getCountryName(),
                _mmm = _mm9.getUSSWaterRaderDict();
            if (125 == _mm9.ctype && (_mmg.houg += 1, _mmg.kaih += 1, _mmg.houm += 1, _mmf = true, _mmi >= 1 && _mmj >= 1 && (_mme.houg += 1, _mme.houm += 1)), 'アメリカ' == _mml && _mm9.stype >= 8 && _mm9.stype <= 10) {
                _mmg.houg += 2, _mmg.kaih += 1, _mmg.houm += 1, _mmf = true;
                for (var _mmn = 0, _mmo = 0, _mmp = _mm9.have_slot_ids(); _mmo < _mmp.length; _mmo++) {
                    var _mmq = _mmp[_mmo];
                    _mmm[Number(_mmq)] && (_mmn += _mm9.get_slotnums(parseInt(_mmq)));
                }
                _mmn >= 1 && (_mme.houg += 1, _mme.kaih += 1, _mme.houm += 2), _mmi >= 1 && _mmj >= 1 && (_mme.houg += 1, _mme.houm += 1, _mme.kaih += 2);
            }
            else 6 != _mm9.ctype && 26 != _mm9.ctype && 2 != _mm9.ctype && 'イギリス' != _mml || (_mme.kaih += 1, _mme.houm += 1, _mmi >= 1 && _mmj >= 1 && (_mme.houg += 1, _mme.houm += 1, _mme.kaih += 1));
            _mmf && _mme.add(_mmg.multiply(_mmk));
            for (var _mmr = {}, _mms = {}, _mmt = {}, _mmu = function(_mmv) {
                    var _mmw = null,
                        _mmx = Number(_mmv),
                        _mmy = _mmh[_mmx];
                    _mmr[_mmy] = null !== (_mmb = _mmr[_mmy]) && void 0 !== _mmb ? _mmb : 0, _mms[_mmy] = null !== (_mmc = _mms[_mmy]) && void 0 !== _mmc ? _mmc : 0, _mmt[_mmy] = null !== (_mmd = _mmt[_mmy]) && void 0 !== _mmd ? _mmd : 0, _mm9.get_each_level_nums(_mmx).forEach(function(_mmz, _mn0) {
                        _mn0 >= 3 && (_mmr[_mmy] += _mmz), _mn0 >= 6 && (_mms[_mmy] += _mmz), _mn0 >= 9 && (_mmt[_mmy] += _mmz);
                    });
                }, _mn1 = 0, _mn2 = Object.keys(_mmh); _mn1 < _mn2.length; _mn1++) {
                _mmu(_mn2[_mn1]);
            }
            return _mmr[507] >= 1 && (_mme.houg += 1 * _mmr[507]), _mms[507] >= 1 && (_mme.souk += 1 * _mms[507]), _mmt[507] >= 1 && (_mme.houm += 1 * _mmt[507]), _mme;
        };
    },
    66985: (_mn3, _mn4, _mn5) => {
        'use strict';
        var _mn6 = null;
        defineModule(_mn4);
        Object.defineProperty(_mn4, '__esModule', {
            'value': true
        }), _mn4.getSlot15PersonalEffect = void 0;
        var _mn7 = _mn5(74496);
        _mn4.getSlot15PersonalEffect = function(_mn8) {
            var _mn9 = null,
                _mna = new _mn7.SlotItemEffectModel(),
                _mnb = false;
            if ((566 == _mn8.ship_id || 567 == _mn8.ship_id || 568 == _mn8.ship_id || 648 == _mn8.ship_id || 651 == _mn8.ship_id || 656 == _mn8.ship_id || 670 == _mn8.ship_id || 915 == _mn8.ship_id || 951 == _mn8.ship_id || 'たけ' == _mn8.yomi) && (_mnb = true), 0 == _mnb) return _mna;
            var _mnc = _mn8.get_slotnums(15);
            return 30 == _mn8.ctype && (1 == _mnc ? _mna.raig = 2 : _mnc >= 2 && (_mna.raig = 4)), 'たけ' == _mn8.yomi && (_mna.raig += 5, _mna.kaih += 1), _mna;
        };
    },
    79086: (_mnd, _mne, _mnf) => {
        'use strict';
        var _mng = null;
        defineModule(_mne);
        Object.defineProperty(_mne, '__esModule', {
            'value': true
        }), _mne.getSlot165_216PersonalEffect = void 0;
        var _mnh = _mnf(74496);
        _mne.getSlot165_216PersonalEffect = function(_mni) {
            var _mnj = null,
                _mnk = new _mnh.SlotItemEffectModel();
            return 501 != _mni.ship_id && 506 != _mni.ship_id && 502 != _mni.ship_id && 507 != _mni.ship_id || (_mnk.tyku += 2, _mnk.kaih += 2), _mnk;
        };
    },
    88102: (_mnl, _mnm, _mnn) => {
        'use strict';
        var _mno = null;
        defineModule(_mnm);
        Object.defineProperty(_mnm, '__esModule', {
            'value': true
        }), _mnm.getSlot16M1PersonalEffect = void 0;
        var _mnp = _mnn(74496);
        _mnm.getSlot16M1PersonalEffect = function(_mnq) {
            var _mnr = null,
                _mns = new _mnp.SlotItemEffectModel(),
                _mnt = new _mnp.SlotItemEffectModel();
            67 == _mnq.ctype || 78 == _mnq.ctype || 82 == _mnq.ctype || 88 == _mnq.ctype || 108 == _mnq.ctype || 112 == _mnq.ctype ? (_mnt.houg += 2, _mnt.souk += 1, 67 == _mnq.ctype && (_mnt.kaih -= 2)) : 149 == _mnq.ship_id || 150 == _mnq.ship_id || 151 == _mnq.ship_id || 152 == _mnq.ship_id ? (_mnt.houg += 1, _mnt.souk += 1, _mnt.kaih -= 3) : 591 == _mnq.ship_id || 592 == _mnq.ship_id ? (_mnt.houg += 2, _mnt.souk += 1, _mnt.kaih -= 2) : 593 != _mnq.ship_id && 954 != _mnq.ship_id || (_mnt.houg += 1, _mnt.souk += 1, _mnt.kaih -= 1);
            var _mnu = true;
            if (_mnt.exists() || (_mnu = false), 0 == _mnu) return _mns;
            var _mnv = _mnq.get_slotnums(298) + _mnq.get_slotnums(299) + _mnq.get_slotnums(300);
            return _mns = _mnt.multiply(_mnv);
        };
    },
    29240: (_mnw, _mnx, _mny) => {
        'use strict';
        var _mnz = null;
        defineModule(_mnx);
        Object.defineProperty(_mnx, '__esModule', {
            'value': true
        }), _mnx.getSlot171PersonalEffect = void 0;
        var _mo0 = _mny(74496);
        _mnx.getSlot171PersonalEffect = function(_mo1) {
            var _mo2 = null,
                _mo3 = new _mo0.SlotItemEffectModel(),
                _mo4 = 0;
            'アメリカ' == _mo1.getCountryName() && (_mo4 = 1), 65 != _mo1.ctype && 93 != _mo1.ctype && 102 != _mo1.ctype && 107 != _mo1.ctype && 125 != _mo1.ctype || (_mo3.houg += 1, _mo3.saku += 1, _mo4 = 2);
            var _mo5 = _mo1.get_each_level_nums(171),
                _mo6 = 0,
                _mo7 = 0,
                _mo8 = 0;
            return _mo4 > 0 && (_mo5.map(function(_mo9, _moa) {
                _moa >= 5 && (_mo6 += _mo9), _moa >= 3 && (_mo7 += _mo9), _moa >= 8 && (_mo8 += _mo9);
            }), 1 != _mo4 && 2 != _mo4 || (_mo5[10] > 0 && (_mo3.houg += 1), _mo6 > 0 && (_mo3.kaih += 1)), 2 == _mo4 && (_mo7 > 0 && (_mo3.saku += 1), _mo8 > 0 && (_mo3.saku += 1))), _mo3;
        };
    },
    40885: (_mob, _moc, _mod) => {
        'use strict';
        var _moe = null;
        defineModule(_moc);
        Object.defineProperty(_moc, '__esModule', {
            'value': true
        }), _moc.getSlot174PersonalEffect = void 0;
        var _mof = _mod(74496);
        _moc.getSlot174PersonalEffect = function(_mog) {
            var _moh = null,
                _moi = new _mof.SlotItemEffectModel(),
                _moj = new _mof.SlotItemEffectModel();
            if (66 == _mog.ctype && (_moj.raig = 1, _moj.kaih = 2), 591 == _mog.ship_id || 592 == _mog.ship_id || 954 == _mog.ship_id ? (_moj.raig += 6, _moj.kaih += 3) : 593 == _mog.ship_id ? (_moj.raig += 5, _moj.kaih += 2) : 488 != _mog.ship_id && 622 != _mog.ship_id && 623 != _mog.ship_id && 624 != _mog.ship_id || (_moj.houg += 2, _moj.raig += 4, _moj.kaih += 4), !_moj.exists()) return _moi;
            var _mok = _mog.get_slotnums(174);
            return _moi = _moj.multiply(_mok);
        };
    },
    19614: (_mol, _mom, _mon) => {
        'use strict';
        var _moo = null;
        defineModule(_mom);
        Object.defineProperty(_mom, '__esModule', {
            'value': true
        }), _mom.getSlot179PersonalEffect = void 0;
        var _mop = _mon(74496);
        _mom.getSlot179PersonalEffect = function(_moq) {
            var _mor = null,
                _mos = new _mop.SlotItemEffectModel(),
                _mot = new _mop.SlotItemEffectModel();
            if (54 == _moq.ctype && (_mot.raig = 1), !_mot.exists()) return _mos;
            var _mou = _moq.get_slotnums(179);
            return _mos = _mot.multiply(_mou);
        };
    },
    87220: (_mov, _mow, _mox) => {
        'use strict';
        var _moy = null;
        defineModule(_mow);
        Object.defineProperty(_mow, '__esModule', {
            'value': true
        }), _mow.getSlot184PersonalEffect = void 0;
        var _moz = _mox(74496);
        _mow.getSlot184PersonalEffect = function(_mp0) {
            var _mp1 = null,
                _mp2 = new _moz.SlotItemEffectModel(),
                _mp3 = new _moz.SlotItemEffectModel();
            if (68 == _mp0.ctype && (_mp3.houg += 1, _mp3.tyku += 2, _mp3.kaih += 3), !_mp3.exists()) return _mp2;
            var _mp4 = _mp0.get_slotnums(184);
            return _mp2 = _mp3.multiply(_mp4);
        };
    },
    81367: (_mp5, _mp6, _mp7) => {
        'use strict';
        var _mp8 = null;
        defineModule(_mp6);
        Object.defineProperty(_mp6, '__esModule', {
            'value': true
        }), _mp6.getSlot188PersonalEffect = void 0;
        var _mp9 = _mp7(74496);
        _mp6.getSlot188PersonalEffect = function(_mpa) {
            var _mpb = null,
                _mpc = new _mp9.SlotItemEffectModel(),
                _mpd = new _mp9.SlotItemEffectModel();
            if (68 == _mpa.ctype && (_mpd.houg += 3, _mpd.tyku += 1, _mpd.kaih += 1), !_mpd.exists()) return _mpc;
            var _mpe = _mpa.get_slotnums(188);
            return _mpc = _mpd.multiply(_mpe);
        };
    },
    13052: (_mpf, _mpg, _mph) => {
        'use strict';
        var _mpi = null;
        defineModule(_mpg);
        Object.defineProperty(_mpg, '__esModule', {
            'value': true
        }), _mpg.getSlot189PersonalEffect = void 0;
        var _mpj = _mph(74496);
        _mpg.getSlot189PersonalEffect = function(_mpk) {
            var _mpl = null,
                _mpm = new _mpj.SlotItemEffectModel(),
                _mpn = new _mpj.SlotItemEffectModel();
            if (68 != _mpk.ctype && 63 != _mpk.ctype || (_mpn.tyku += 1, _mpn.kaih += 2), !_mpn.exists()) return _mpm;
            var _mpo = _mpk.get_slotnums(189);
            return _mpm = _mpn.multiply(_mpo);
        };
    },
    66904: (_mpp, _mpq, _mpr) => {
        'use strict';
        var _mps = null;
        defineModule(_mpq);
        Object.defineProperty(_mpq, '__esModule', {
            'value': true
        }), _mpq.getSlot18_52_PersonalEffect = void 0;
        var _mpt = _mpr(74496);
        _mpq.getSlot18_52_PersonalEffect = function(_mpu) {
            var _mpv = null,
                _mpw = new _mpt.SlotItemEffectModel(),
                _mpx = new _mpt.SlotItemEffectModel();
            if (277 == _mpu.ship_id || 278 == _mpu.ship_id || 156 == _mpu.ship_id ? _mpx.houg = 1 : 594 == _mpu.ship_id || 698 == _mpu.ship_id || 646 == _mpu.ship_id ? (_mpx.houg = 1, _mpx.kaih = 1) : 599 != _mpu.ship_id && 610 != _mpu.ship_id || (_mpx.houg = 2, _mpx.kaih = 1), !_mpx.exists()) return _mpw;
            var _mpy = _mpu.get_slotnums(18) + _mpu.get_slotnums(52);
            return _mpw = _mpx.multiply(_mpy);
        };
    },
    94968: (_mpz, _mq0, _mq1) => {
        'use strict';
        var _mq2 = null;
        defineModule(_mq0);
        Object.defineProperty(_mq0, '__esModule', {
            'value': true
        }), _mq0.getSlot194PersonalEffect = void 0;
        var _mq3 = _mq1(74496);
        _mq0.getSlot194PersonalEffect = function(_mq4) {
            var _mq5 = null,
                _mq6 = new _mq3.SlotItemEffectModel(),
                _mq7 = new _mq3.SlotItemEffectModel();
            if (70 == _mq4.ctype ? (_mq7.houg += 3, _mq7.kaih += 2, _mq7.saku += 2) : 72 != _mq4.ctype && 62 != _mq4.ctype || (_mq7.kaih += 1, _mq7.saku += 2), 392 == _mq4.ship_id && (_mq7.houg += 1, _mq7.kaih += 2, _mq7.saku += 2), !_mq7.exists()) return _mq6;
            var _mq8 = _mq4.get_slotnums(194);
            return _mq6 = _mq7.multiply(_mq8);
        };
    },
    94781: (_mq9, _mqa, _mqb) => {
        'use strict';
        var _mqc = null;
        defineModule(_mqa);
        Object.defineProperty(_mqa, '__esModule', {
            'value': true
        }), _mqa.getSlot195PersonalEffect = void 0;
        var _mqd = _mqb(74496);
        _mqa.getSlot195PersonalEffect = function(_mqe) {
            var _mqf = null,
                _mqg = new _mqd.SlotItemEffectModel(),
                _mqh = false,
                _mqi = new _mqd.SlotItemEffectModel();
            if ('アメリカ' == _mqe.getCountryName() && (_mqi.houg += 1, _mqh = true), 0 == _mqh) return _mqg;
            var _mqj = _mqe.get_slotnums(195);
            return _mqg.add(_mqi.multiply(_mqj));
        };
    },
    98137: (_mqk, _mql, _mqm) => {
        'use strict';
        var _mqn = null;
        defineModule(_mql);
        Object.defineProperty(_mql, '__esModule', {
            'value': true
        }), _mql.getSlot19PersonalEffect = void 0;
        var _mqo = _mqm(74496);
        _mql.getSlot19PersonalEffect = function(_mqp) {
            var _mqq = null,
                _mqr = new _mqo.SlotItemEffectModel(),
                _mqs = new _mqo.SlotItemEffectModel();
            if ('ほうしょう' == _mqp.yomi && (_mqs.houg = 2, _mqs.kaih = 2, _mqs.tais = 2, _mqs.tyku = 2), 75 != _mqp.ctype && 76 != _mqp.ctype || (_mqs.houg = 2, _mqs.tais = 3), 7 == _mqp.stype && (_mqs.tyku += 1, _mqs.kaih += 1), 894 != _mqp.ship_id && 899 != _mqp.ship_id || (_mqs.houg += 1, _mqs.kaih += 1, _mqs.tais += 1, _mqs.tyku += 1), !_mqs.exists()) return _mqr;
            var _mqt = _mqp.get_slotnums(19);
            return _mqr = _mqs.multiply(_mqt);
        };
    },
    48658: (_mqu, _mqv, _mqw) => {
        'use strict';
        var _mqx = null;
        defineModule(_mqv);
        Object.defineProperty(_mqv, '__esModule', {
            'value': true
        }), _mqv.getSlot204PersonalEffect = void 0;
        var _mqy = _mqw(74496);
        _mqv.getSlot204PersonalEffect = function(_mqz) {
            var _mr0 = null,
                _mr1 = new _mqy.SlotItemEffectModel();
            if (591 != _mqz.ship_id && 592 != _mqz.ship_id && 593 != _mqz.ship_id && 954 != _mqz.ship_id) return _mr1;
            _mr1.souk = _mr1.souk + 1, _mr1.raig = _mr1.raig + 1;
            for (var _mr2 = _mqz.get_each_level_nums(204), _mr3 = 0, _mr4 = 0; _mr4 <= 10; _mr4++) _mr4 >= 7 && (_mr3 += _mr2[_mr4]);
            return _mr3 > 0 && (_mr1.souk = _mr1.souk + 1), _mr2[10] > 0 && (_mr1.raig = _mr1.raig + 1), _mr1;
        };
    },
    2306: (_mr5, _mr6, _mr7) => {
        'use strict';
        var _mr8 = null;
        defineModule(_mr6);
        Object.defineProperty(_mr6, '__esModule', {
            'value': true
        }), _mr6.getSlot217PersonalEffect = void 0;
        var _mr9 = _mr7(74496);
        _mr6.getSlot217PersonalEffect = function(_mra) {
            var _mrb = null,
                _mrc = new _mr9.SlotItemEffectModel(),
                _mrd = false,
                _mre = new _mr9.SlotItemEffectModel();
            if (501 == _mra.ship_id || 506 == _mra.ship_id ? (_mre.houg += 1, _mre.kaih += 3, _mre.tyku += 5, _mrd = true) : 502 != _mra.ship_id && 507 != _mra.ship_id || (_mre.houg += 1, _mre.kaih += 2, _mre.tyku += 4, _mrd = true), 0 == _mrd) return _mrc;
            var _mrf = _mra.get_slotnums(217);
            return _mrc.add(_mre.multiply(_mrf)), _mrc;
        };
    },
    91302: function(_mrg, _mrh, _mri) {
        'use strict';
        var _mrj = null;
        var _mrk = this && this.__importDefault || function(_mrl) {
            var _mrm = null;
            return _mrl && _mrl.__esModule ? _mrl : {
                'default': _mrl
            };
        };
        defineModule(_mrh);
        Object.defineProperty(_mrh, '__esModule', {
            'value': true
        }), _mrh.getSlot220PersonalEffect = void 0;
        var _mrn = _mri(74496),
            _mro = _mrk(_mri(18622));
        _mrh.getSlot220PersonalEffect = function(_mrp) {
            var _mrq = null,
                _mrr = new _mrn.SlotItemEffectModel(),
                _mrs = false,
                _mrt = new _mrn.SlotItemEffectModel(),
                _mru = 0,
                _mrv = 0;
            if (662 == _mrp.ship_id || 663 == _mrp.ship_id || 668 == _mrp.ship_id || 501 == _mrp.ship_id || 506 == _mrp.ship_id || 502 == _mrp.ship_id || 507 == _mrp.ship_id ? (_mrt.houg += 1, _mrt.tyku += 3, _mrt.kaih += 2, _mrs = true, _mru = 1) : 894 != _mrp.ship_id && 899 != _mrp.ship_id || (_mrt.tyku += 2, _mrt.kaih += 2, _mrs = true, _mru = 1, _mrv = 1), 0 == _mrs) return _mrr;
            var _mrw = _mrp.get_slotnums(220);
            _mrr.add(_mrt.multiply(_mrw));
            for (var _mrx = 0, _mry = 0, _mrz = _mrp.have_slot_ids(); _mry < _mrz.length; _mry++) {
                var _ms0 = _mrz[_mry],
                    _ms1 = _mro.default.model.slot.getMst(_ms0),
                    _ms2 = _ms1.equipType;
                12 != _ms2 && 13 != _ms2 || (_ms1.sakuteki >= 5 && _mrp.get_slotnums(parseInt(_ms0)), _ms1.taiku >= 2 && (_mrx += _mrp.get_slotnums(parseInt(_ms0))));
            }
            if (_mrx >= 1 && 1 == _mru && (_mrr.tyku += 3, _mrr.kaih += 3), 0 == _mrv) return _mrr;
            var _ms3 = _mrp.get_each_level_nums(220)[10];
            return 1 == _mrv && _ms3 > 0 && (_mrr.houg += 1 * _ms3, _mrr.tyku += 1 * _ms3, _mrr.kaih += 1 * _ms3), _mrr;
        };
    },
    20418: (_ms4, _ms5, _ms6) => {
        'use strict';
        var _ms7 = null;
        defineModule(_ms5);
        Object.defineProperty(_ms5, '__esModule', {
            'value': true
        }), _ms5.getSlot227PersonalEffect = void 0;
        var _ms8 = _ms6(74496);
        _ms5.getSlot227PersonalEffect = function(_ms9) {
            var _msa = null,
                _msb = new _ms8.SlotItemEffectModel(),
                _msc = _ms9.get_each_level_nums(227),
                _msd = 0;
            _msc.forEach(function(_mse, _msf) {
                _msf >= 8 && (_msd += _mse);
            }), _msd >= 1 && (_msb.tais += 1 * _msd);
            var _msg = _msc[10];
            return _msg >= 1 && (_msb.tais += 1 * _msg), _msb;
        };
    },
    1906: (_msh, _msi, _msj) => {
        'use strict';
        var _msk = null;
        defineModule(_msi);
        Object.defineProperty(_msi, '__esModule', {
            'value': true
        }), _msi.getSlot228PersonalEffect = void 0;
        var _msl = _msj(74496);
        _msi.getSlot228PersonalEffect = function(_msm) {
            var _msn = null,
                _mso = new _msl.SlotItemEffectModel(),
                _msp = new _msl.SlotItemEffectModel();
            if ('ほうしょう' == _msm.yomi && (_msp.houg = 3, _msp.kaih = 4, _msp.tais = 4, _msp.tyku = 3), 75 != _msm.ctype && 76 != _msm.ctype || (_msp.houg = 2, _msp.tais = 5, _msp.tyku = 1, _msp.kaih = 1), 7 == _msm.stype && (_msp.tais += 2, _msp.tyku += 1, _msp.kaih += 1), 894 != _msm.ship_id && 899 != _msm.ship_id || (_msp.houg += 1, _msp.kaih += 2, _msp.tais += 2, _msp.tyku += 1), !_msp.exists()) return _mso;
            var _msq = _msm.get_slotnums(228);
            return _mso = _msp.multiply(_msq);
        };
    },
    61887: function(_msr, _mss, _mst) {
        'use strict';
        var _msu = null;
        var _msv = this && this.__importDefault || function(_msw) {
            var _msx = null;
            return _msw && _msw.__esModule ? _msw : {
                'default': _msw
            };
        };
        defineModule(_mss);
        Object.defineProperty(_mss, '__esModule', {
            'value': true
        }), _mss.getSlot229PersonalEffect = void 0;
        var _msy = _mst(74496),
            _msz = _msv(_mst(18622));
        _mss.getSlot229PersonalEffect = function(_mt0) {
            var _mt1 = null;
            for (var _mt2 = new _msy.SlotItemEffectModel(), _mt3 = 0, _mt4 = 0, _mt5 = _mt0.have_slots_dict[229]; _mt4 < _mt5.length; _mt4++) {
                _mt5[_mt4].level >= 7 && _mt3++;
            }
            var _mt6 = _mt3,
                _mt7 = 0,
                _mt8 = 0,
                _mt9 = 0,
                _mta = _mt0.get_slotnums(229);
            if (622 == _mt0.ship_id || 623 == _mt0.ship_id || 624 == _mt0.ship_id) _mt2.houg += 1 * _mta, _mt2.tyku += 1 * _mta, _mt7 = 2;
            else {
                if (656 == _mt0.ship_id) _mt2.houg += 2 * _mta, _mt2.tyku += 3 * _mta, _mt2.tais += 2 * _mta, _mt7 = 3;
                else {
                    if (0 == _mt3) return _mt2;
                }
            }
            if (488 == _mt0.ship_id ? (_mt2.tyku += 3 * _mt6, _mt7 = 1) : 220 == _mt0.ship_id ? _mt2.tyku += 2 * _mt6 : 23 == _mt0.ship_id ? _mt2.tyku += 1 * _mt6 : 160 == _mt0.ship_id ? (_mt2.tyku += 2 * _mt6, _mt7 = 1) : 224 == _mt0.ship_id ? _mt2.tyku += 1 * _mt6 : 487 == _mt0.ship_id ? (_mt2.tyku += 2 * _mt6, _mt7 = 1) : 289 == _mt0.ship_id && (_mt2.tyku += 1 * _mt6), (66 == _mt0.ctype || 28 == _mt0.ctype) && (_mt2.houg += 1 * _mt6, _mt2.tyku += 1 * _mt6, _mt8 = 1), 1 == _mt0.stype && (_mt2.houg += 1 * _mt6, _mt2.tyku += 1 * _mt6, _mt9 = 1), ('ゆら' == _mt0.yomi || 'なか' == _mt0.yomi || 'きぬ' == _mt0.yomi) && (_mt2.houg += 2 * _mt6), 0 == _mt7 + _mt8 + _mt9) return _mt2;
            for (var _mtb = 0, _mtc = 0, _mtd = 0, _mte = _mt0.have_slot_ids(); _mtd < _mte.length; _mtd++) {
                var _mtf = _mte[_mtd],
                    _mtg = _msz.default.model.slot.getMst(_mtf),
                    _mth = _mtg.equipType;
                12 != _mth && 13 != _mth || (_mtg.sakuteki >= 5 && (_mtb += _mt0.get_slotnums(parseInt(_mtf))), _mtg.taiku >= 2 && (_mtc += _mt0.get_slotnums(parseInt(_mtf))));
            }
            return 1 == _mt7 ? _mtb > 0 && (_mt2.houg += 3, _mt2.kaih += 2) : 2 == _mt7 ? (_mtb > 0 && (_mt2.houg += 1, _mt2.kaih += 1), _mtc > 0 && (_mt2.tyku += 2, _mt2.kaih += 2)) : 3 == _mt7 && (_mtb > 0 && (_mt2.houg += 2, _mt2.kaih += 2), _mtc > 0 && (_mt2.tyku += 3, _mt2.kaih += 2)), 1 == _mt8 && _mtb > 0 && (_mt2.houg += 2, _mt2.kaih += 3), 1 == _mt9 && _mtb > 0 && (_mt2.houg += 1, _mt2.kaih += 4), _mt2;
        };
    },
    55734: (_mti, _mtj, _mtk) => {
        'use strict';
        var _mtl = null;
        defineModule(_mtj);
        Object.defineProperty(_mtj, '__esModule', {
            'value': true
        }), _mtj.getSlot234PersonalEffect = void 0;
        var _mtm = _mtk(74496);
        _mtj.getSlot234PersonalEffect = function(_mtn) {
            var _mto = null,
                _mtp = new _mtm.SlotItemEffectModel(),
                _mtq = false,
                _mtr = new _mtm.SlotItemEffectModel(),
                _mts = _mtn.get_slotnums(142) + _mtn.get_slotnums(460);
            if (37 == _mtn.ctype && (_mtr.houg += 1, _mtr.tyku += 1, _mtr.kaih += 1, _mtr.houm += 1, _mts >= 1 && (_mtp.tyku += 1, _mtp.kaih += 1, _mtp.houm += 1), _mtq = true), 0 == _mtq) return _mtp;
            var _mtt = _mtn.get_slotnums(234);
            return _mtp.add(_mtr.multiply(_mtt)), _mtp;
        };
    },
    17562: function(_mtu, _mtv, _mtw) {
        'use strict';
        var _mtx = null;
        var _mty = this && this.__importDefault || function(_mtz) {
            var _mu0 = null;
            return _mtz && _mtz.__esModule ? _mtz : {
                'default': _mtz
            };
        };
        defineModule(_mtv);
        Object.defineProperty(_mtv, '__esModule', {
            'value': true
        }), _mtv.getSlot235PersonalEffect = void 0;
        var _mu1 = _mtw(74496),
            _mu2 = _mty(_mtw(18622));
        _mtv.getSlot235PersonalEffect = function(_mu3) {
            var _mu4 = null,
                _mu5 = new _mu1.SlotItemEffectModel(),
                _mu6 = false,
                _mu7 = new _mu1.SlotItemEffectModel(),
                _mu8 = 0;
            if (52 != _mu3.ctype && 9 != _mu3.ctype || (_mu7.houg += 2, _mu7.tyku += 1, _mu6 = true), 321 == _mu3.ship_id && (_mu7.houg += 1, _mu7.kaih += 1, _mu8 = 1), 0 == _mu6) return _mu5;
            var _mu9 = _mu3.get_slotnums(235);
            if (_mu5.add(_mu7.multiply(_mu9)), 0 == _mu8) return _mu5;
            for (var _mua = 0, _mub = 0, _muc = 0, _mud = _mu3.have_slot_ids(); _muc < _mud.length; _muc++) {
                var _mue = _mud[_muc],
                    _muf = _mu2.default.model.slot.getMst(_mue),
                    _mug = _muf.equipType;
                12 != _mug && 13 != _mug || (_muf.sakuteki >= 5 && (_mua += _mu3.get_slotnums(parseInt(_mue))), _muf.taiku >= 2 && (_mub += _mu3.get_slotnums(parseInt(_mue))));
            }
            return _mua >= 1 && 1 == _mu8 && (_mu5.houg += 3, _mu5.kaih += 2), _mub >= 1 && 1 == _mu8 && (_mu5.tyku += 3, _mu5.kaih += 3), _mu5;
        };
    },
    47970: (_muh, _mui, _muj) => {
        'use strict';
        var _muk = null;
        defineModule(_mui);
        Object.defineProperty(_mui, '__esModule', {
            'value': true
        }), _mui.getSlot237PersonalEffect = void 0;
        var _mul = _muj(74496);
        _mui.getSlot237PersonalEffect = function(_mum) {
            var _mun = null,
                _muo = new _mul.SlotItemEffectModel(),
                _mup = new _mul.SlotItemEffectModel();
            if (553 == _mum.ship_id) _mup.houg = 4, _mup.kaih = 2;
            else {
                if (82 == _mum.ship_id) _mup.houg = 3, _mup.kaih = 1;
                else {
                    if (88 == _mum.ship_id) _mup.houg = 3, _mup.kaih = 1;
                    else {
                        if (554 == _mum.ship_id) _mup.houg = 4, _mup.kaih = 2;
                        else {
                            if (411 == _mum.ship_id) _mup.houg = 2;
                            else {
                                if (412 != _mum.ship_id) return _muo;
                                _mup.houg = 2;
                            }
                        }
                    }
                }
            }
            var _muq = _mum.get_slotnums(237);
            return _muo = _mup.multiply(_muq);
        };
    },
    14386: (_mur, _mus, _mut) => {
        'use strict';
        var _muu = null;
        defineModule(_mus);
        Object.defineProperty(_mus, '__esModule', {
            'value': true
        }), _mus.getSlot238_239PersonalEffect = void 0;
        var _muv = _mut(74496);
        _mus.getSlot238_239PersonalEffect = function(_muw) {
            var _mux = null,
                _muy = new _muv.SlotItemEffectModel();
            return 501 != _muw.ship_id && 506 != _muw.ship_id && 502 != _muw.ship_id && 507 != _muw.ship_id || (_muy.kaih += 1, _muy.raig += 1), _muy;
        };
    },
    82229: (_muz, _mv0, _mv1) => {
        'use strict';
        var _mv2 = null;
        defineModule(_mv0);
        Object.defineProperty(_mv0, '__esModule', {
            'value': true
        }), _mv0.getSlot242PersonalEffect = void 0;
        var _mv3 = _mv1(74496);
        _mv0.getSlot242PersonalEffect = function(_mv4) {
            var _mv5 = null,
                _mv6 = new _mv3.SlotItemEffectModel(),
                _mv7 = false,
                _mv8 = new _mv3.SlotItemEffectModel();
            if (78 == _mv4.ctype && (_mv8.houg += 2, _mv8.kaih += 1, _mv7 = true), 'ほうしょう' == _mv4.yomi && (_mv8.houg += 1, _mv7 = true), 0 == _mv7) return _mv6;
            var _mv9 = _mv4.get_slotnums(242);
            return _mv6.add(_mv8.multiply(_mv9)), _mv6;
        };
    },
    10325: (_mva, _mvb, _mvc) => {
        'use strict';
        var _mvd = null;
        defineModule(_mvb);
        Object.defineProperty(_mvb, '__esModule', {
            'value': true
        }), _mvb.getSlot243PersonalEffect = void 0;
        var _mve = _mvc(74496);
        _mvb.getSlot243PersonalEffect = function(_mvf) {
            var _mvg = null,
                _mvh = new _mve.SlotItemEffectModel(),
                _mvi = false,
                _mvj = new _mve.SlotItemEffectModel();
            if (78 == _mvf.ctype && (_mvj.houg += 3, _mvj.kaih += 1, _mvi = true), 'ほうしょう' == _mvf.yomi && (_mvj.houg += 2, _mvi = true), 0 == _mvi) return _mvh;
            var _mvk = _mvf.get_slotnums(243);
            return _mvh.add(_mvj.multiply(_mvk)), _mvh;
        };
    },
    351: (_mvl, _mvm, _mvn) => {
        'use strict';
        var _mvo = null;
        defineModule(_mvm);
        Object.defineProperty(_mvm, '__esModule', {
            'value': true
        }), _mvm.getSlot244PersonalEffect = void 0;
        var _mvp = _mvn(74496);
        _mvm.getSlot244PersonalEffect = function(_mvq) {
            var _mvr = null,
                _mvs = new _mvp.SlotItemEffectModel(),
                _mvt = false,
                _mvu = new _mvp.SlotItemEffectModel();
            if (78 == _mvq.ctype && (_mvu.houg += 4, _mvu.kaih += 2, _mvt = true), 'ほうしょう' == _mvq.yomi && (_mvu.houg += 3, _mvt = true), 0 == _mvt) return _mvs;
            var _mvv = _mvq.get_slotnums(244);
            return _mvs.add(_mvu.multiply(_mvv)), _mvs;
        };
    },
    61977: (_mvw, _mvx, _mvy) => {
        'use strict';
        var _mvz = null;
        defineModule(_mvx);
        Object.defineProperty(_mvx, '__esModule', {
            'value': true
        }), _mvx.getSlot247PersonalEffect = void 0;
        var _mw0 = _mvy(74496);
        _mvx.getSlot247PersonalEffect = function(_mw1) {
            var _mw2 = null,
                _mw3 = new _mw0.SlotItemEffectModel(),
                _mw4 = false,
                _mw5 = new _mw0.SlotItemEffectModel(),
                _mw6 = 0;
            if ('フランス' == _mw1.getCountryName() && (_mw5.houg += 2, _mw5.houm += 2, _mw4 = true, _mw6 = 1), 0 == _mw4) return _mw3;
            var _mw7 = _mw1.get_slotnums(247);
            if (_mw3.add(_mw5.multiply(_mw7)), 0 == _mw6) return _mw3;
            var _mw8 = _mw1.get_each_level_nums(247),
                _mw9 = 0,
                _mwa = 0;
            _mw6 > 0 && _mw8.forEach(function(_mwb, _mwc) {
                _mwc >= 4 && (_mw9 += _mwb), _mwc >= 8 && (_mwa += _mwb);
            });
            var _mwd = _mw8[10];
            return 1 == _mw6 && (_mw9 >= 1 && (_mw3.houg += 1 * _mw9, _mw3.houm += 1 * _mw9), _mwa >= 1 && (_mw3.kaih += 1 * _mwa, _mw3.houg += 1 * _mwa, _mw3.houm += 1 * _mwa), _mwd >= 1 && (_mw3.kaih += 1 * _mwd, _mw3.houm += 1 * _mwd)), _mw3;
        };
    },
    31797: function(_mwe, _mwf, _mwg) {
        'use strict';
        var _mwh = null;
        var _mwi = this && this.__importDefault || function(_mwj) {
            var _mwk = null;
            return _mwj && _mwj.__esModule ? _mwj : {
                'default': _mwj
            };
        };
        defineModule(_mwf);
        Object.defineProperty(_mwf, '__esModule', {
            'value': true
        }), _mwf.getSlot266PersonalEffect2 = _mwf.getSlot266PersonalEffect = void 0;
        var _mwl = _mwg(74496),
            _mwm = _mwi(_mwg(18622));
        _mwf.getSlot266PersonalEffect = function(_mwn) {
            var _mwo = null,
                _mwp = new _mwl.SlotItemEffectModel(),
                _mwq = false;
            if (566 != _mwn.ship_id && 567 != _mwn.ship_id && 568 != _mwn.ship_id && 656 != _mwn.ship_id && 670 != _mwn.ship_id && 915 != _mwn.ship_id && 951 != _mwn.ship_id || (_mwq = true), 0 == _mwq) return _mwp;
            var _mwr = _mwn.get_slotnums(266);
            return 30 == _mwn.ctype && (1 == _mwr ? _mwp.houg = 1 : _mwr >= 2 && (_mwp.houg = 3)), _mwp;
        }, _mwf.getSlot266PersonalEffect2 = function(_mws) {
            var _mwt = null,
                _mwu = new _mwl.SlotItemEffectModel(),
                _mwv = 0,
                _mww = new _mwl.SlotItemEffectModel();
            if (23 == _mws.ctype || 18 == _mws.ctype ? (_mww.houg = 1, _mwv = 1) : 30 == _mws.ctype && (_mww.houg = 1, _mwv = 2), ('しぐれ' == _mws.yomi || 'ゆきかぜ' == _mws.yomi || 'いそかぜ' == _mws.yomi) && (_mww.kaih = 1), 961 == _mws.ship_id && (_mww.houg += 1, _mww.houm += 1, _mww.kaih += 1), !_mww.exists()) return _mwu;
            var _mwx = _mws.get_slotnums(266);
            if (_mwu = _mww.multiply(_mwx), 0 == _mwv) return _mwu;
            for (var _mwy = 0, _mwz = 0, _mx0 = _mws.have_slot_ids(); _mwz < _mx0.length; _mwz++) {
                var _mx1 = _mx0[_mwz],
                    _mx2 = _mwm.default.model.slot.getMst(_mx1),
                    _mx3 = _mx2.equipType;
                (12 == _mx3 || 13 == _mx3) && _mx2.sakuteki >= 5 && (_mwy += _mws.get_slotnums(parseInt(_mx1)));
            }
            return _mwy > 0 && (1 == _mwv ? (_mwu.houg += 1, _mwu.kaih += 1, _mwu.raig += 3) : 2 == _mwv && (_mwu.houg += 2, _mwu.kaih += 1, _mwu.raig += 3)), _mwu;
        };
    },
    45738: function(_mx4, _mx5, _mx6) {
        'use strict';
        var _mx7 = null;
        var _mx8 = this && this.__importDefault || function(_mx9) {
            var _mxa = null;
            return _mx9 && _mx9.__esModule ? _mx9 : {
                'default': _mx9
            };
        };
        defineModule(_mx5);
        Object.defineProperty(_mx5, '__esModule', {
            'value': true
        }), _mx5.getSlot267PersonalEffect2 = _mx5.getSlot267PersonalEffect = void 0;
        var _mxb = _mx6(74496),
            _mxc = _mx8(_mx6(18622));
        _mx5.getSlot267PersonalEffect = function(_mxd) {
            var _mxe = null,
                _mxf = new _mxb.SlotItemEffectModel(),
                _mxg = 0,
                _mxh = 0;
            if (38 == _mxd.ctype || 22 == _mxd.ctype) _mxg = 2, _mxh = 1;
            else {
                if (30 != _mxd.ctype) return _mxf;
                _mxg = 1, _mxh = 1;
            }
            var _mxi = _mxd.get_slotnums(267) + _mxd.get_slotnums(366);
            return _mxf.houg = _mxg * _mxi, _mxf.kaih = _mxh * _mxi, _mxf;
        }, _mx5.getSlot267PersonalEffect2 = function(_mxj) {
            var _mxk = null,
                _mxl = new _mxb.SlotItemEffectModel(),
                _mxm = _mxj.get_slotnums(267),
                _mxn = _mxj.get_slotnums(366),
                _mxo = _mxm + _mxn;
            if (566 != _mxj.ship_id && 567 != _mxj.ship_id && 568 != _mxj.ship_id && 656 != _mxj.ship_id && 670 != _mxj.ship_id && 915 != _mxj.ship_id && 951 != _mxj.ship_id || (_mxm > 0 && (_mxl.houg += 1), 1 == _mxn ? (_mxl.houg += 1, _mxl.tyku += 2) : _mxn >= 2 && (_mxl.houg += 2, _mxl.tyku += 4)), 38 != _mxj.ctype && 229 != _mxj.ship_id && [648, 961].indexOf(_mxj.ship_id) < 0) return _mxl;
            var _mxp = false,
                _mxq = false,
                _mxr = false,
                _mxs = false,
                _mxt = false,
                _mxu = false,
                _mxv = false,
                _mxw = false,
                _mxx = false,
                _mxy = false,
                _mxz = false,
                _my0 = 0,
                _my1 = 0,
                _my2 = 0;
            543 == _mxj.ship_id ? (_mxl.houg = 1 * _mxo, _mxq = true) : 229 == _mxj.ship_id ? _mxr = true : 542 == _mxj.ship_id ? (_mxl.houg = 1 * _mxo, _mxs = true) : 563 == _mxj.ship_id ? (_mxl.houg = 1 * _mxo, _mxt = true) : 564 == _mxj.ship_id ? (_mxl.houg = 1 * _mxo, _mxu = true) : 578 == _mxj.ship_id ? (_mxl.houg = 1 * _mxo, _mxv = true) : 569 == _mxj.ship_id ? (_mxl.houg = 1 * _mxo, _mxw = true) : 649 == _mxj.ship_id ? (_mxl.houg = 2 * _mxo, _mxy = true) : 955 == _mxj.ship_id || 960 == _mxj.ship_id ? (_mxl.houg = 2 * _mxo, _mxz = true) : 648 == _mxj.ship_id ? (_mxl.houg = 2 * _mxo, _mxx = true, _my0 = 1, _my1 = 1, _my2 = 1) : 961 == _mxj.ship_id && (_mxl.houg = 2 * _mxo, _mxp = true, _my0 = 1, _my1 = 1, _my2 = 1);
            for (var _my3 = 0, _my4 = 0, _my5 = 0, _my6 = _mxj.have_slot_ids(); _my5 < _my6.length; _my5++) {
                var _my7 = _my6[_my5],
                    _my8 = _mxc.default.model.slot.getMst(_my7),
                    _my9 = _my8.equipType;
                12 != _my9 && 13 != _my9 || (_my8.sakuteki >= 5 && (_my3 += _mxj.get_slotnums(parseInt(_my7))), _my8.taiku >= 2 && (_my4 += _mxj.get_slotnums(parseInt(_my7))));
            }
            if (_my3 > 0 && _mxm > 0 && ((38 == _mxj.ctype || _mxx) && (_mxl.houg += 2, _mxl.raig += 3, _mxl.kaih += 1, 955 == _mxj.ship_id ? _mxl.raig -= 1 : 960 == _mxj.ship_id && (_mxl.raig -= 2)), (_mxs || _mxq || _mxr || _mxt || _mxu || _mxv || _mxw || _mxx || _mxy || _mxz) && (_mxl.houg += 1, _mxl.raig += 3, _mxl.kaih += 2)), _mxn > 0 && (_mxs || _mxq || _mxt || _mxu || _mxv || _mxr || _mxw || _mxx || _mxy || _mxp || _mxz)) {
                1 == _mxn ? (_mxl.tyku += 3, _mxl.houg += 1, _mxl.houm += 1) : _mxn >= 2 && (_mxl.tyku += 5, _mxl.houg += 3, _mxl.houm += 1, 955 == _mxj.ship_id && (_mxl.houg += 1)), (_mxw || _mxx) && (_mxl.houg += 1, _mxl.tyku += 2), _my3 > 0 && (_mxl.houg += 2, _mxl.kaih += 2, _mxl.raig += 4, _mxl.houm += 2, 960 == _mxj.ship_id && (_mxl.raig -= 1, _mxl.houg += 1)), _my4 > 0 && (_mxl.houg += 1, _mxl.kaih += 3, _mxl.tyku += 5, _mxl.houm += 1);
                var _mya = _mxj.get_each_level_nums(366),
                    _myb = 0,
                    _myc = 0;
                _mya.forEach(function(_myd, _mye) {
                    _mye >= 5 && (_myb += _myd), _mye >= 8 && (_myc += _myd);
                }), _myb >= 1 && (_mxl.houm += 1 * _myb), _myc >= 1 && (_mxl.houg += 1 * _myc);
                var _myf = _mya[10];
                _myf >= 1 && (_mxl.houm += 1 * _myf);
            }
            var _myg = _mxj.get_slotnums(129),
                _myh = _mxj.get_slotnums(74),
                _myi = _mxj.get_slotnums(412);
            return _my0 > 0 && _myg > 0 && 1 == _my0 && (_mxl.houg += 2, _mxl.kaih += 3, _mxl.tyku += 2), _my2 > 0 && _myi > 0 && 1 == _my2 && (_mxl.houg += 2, _mxl.kaih += 3, _mxl.tyku += 2), _my1 > 0 && _myh > 0 && 1 == _my1 && (_mxl.houg += 3, _mxl.kaih -= 3), _mxl;
        };
    },
    23934: (_myj, _myk, _myl) => {
        'use strict';
        var _mym = null;
        defineModule(_myk);
        Object.defineProperty(_myk, '__esModule', {
            'value': true
        }), _myk.getSlot271PersonalEffect = void 0;
        var _myn = _myl(74496);
        _myk.getSlot271PersonalEffect = function(_myo) {
            var _myp = null,
                _myq = new _myn.SlotItemEffectModel(),
                _myr = 0;
            if (508 != _myo.ship_id && 509 != _myo.ship_id && 888 != _myo.ship_id && 883 != _myo.ship_id || (_myr = 1), 0 == _myr) return _myq;
            var _mys = _myo.get_each_level_nums(271),
                _myt = 0,
                _myu = 0,
                _myv = 0,
                _myw = _mys[10];
            return _myr > 0 && _mys.forEach(function(_myx, _myy) {
                _myy >= 4 && (_myt += _myx), _myy >= 6 && (_myu += _myx), _myy >= 8 && (_myv += _myx);
            }), 1 == _myr && (_myt >= 1 && (_myq.houg += 1 * _myt), _myu >= 1 && (_myq.tyku += 2 * _myu), _myv >= 1 && (_myq.kaih += 2 * _myv), _myw >= 1 && (_myq.houg += 1 * _myw)), _myq;
        };
    },
    17712: function(_myz, _mz0, _mz1) {
        'use strict';
        var _mz2 = null;
        var _mz3 = this && this.__importDefault || function(_mz4) {
            var _mz5 = null;
            return _mz4 && _mz4.__esModule ? _mz4 : {
                'default': _mz4
            };
        };
        defineModule(_mz0);
        Object.defineProperty(_mz0, '__esModule', {
            'value': true
        }), _mz0.getSlot275PersonalEffect = void 0;
        var _mz6 = _mz1(74496),
            _mz7 = _mz3(_mz1(18622));
        _mz0.getSlot275PersonalEffect = function(_mz8) {
            var _mz9 = null,
                _mza = new _mz6.SlotItemEffectModel(),
                _mzb = false,
                _mzc = new _mz6.SlotItemEffectModel(),
                _mzd = 0,
                _mze = 0;
            if (894 != _mz8.ship_id && 899 != _mz8.ship_id || (_mzc.houg += 1, _mzc.tyku += 3, _mzc.kaih += 2, _mzb = true, _mze = 1, _mzd = 1), 0 == _mzb) return _mza;
            var _mzf = _mz8.get_slotnums(275);
            _mza.add(_mzc.multiply(_mzf));
            var _mzg = 0;
            if (_mzd > 0)
                for (var _mzh = 0, _mzi = _mz8.have_slot_ids(); _mzh < _mzi.length; _mzh++) {
                    var _mzj = _mzi[_mzh],
                        _mzk = _mz7.default.model.slot.getMst(_mzj),
                        _mzl = _mzk.equipType;
                    12 != _mzl && 13 != _mzl || (_mzk.sakuteki >= 5 && _mz8.get_slotnums(parseInt(_mzj)), _mzk.taiku >= 2 && (_mzg += _mz8.get_slotnums(parseInt(_mzj))));
                }
            if (1 == _mzd && _mzg > 0 && (_mza.tyku += 3, _mza.kaih += 3), 0 == _mze) return _mza;
            var _mzm = _mz8.get_each_level_nums(275),
                _mzn = 0,
                _mzo = _mzm[10];
            return _mze > 0 && _mzm.forEach(function(_mzp, _mzq) {
                _mzq >= 7 && (_mzn += _mzp);
            }), 1 == _mze && (_mzn > 0 && (_mza.tyku += 1 * _mzn, _mza.kaih += 1 * _mzn), _mzo > 0 && (_mza.houg += 1 * _mzo, _mza.tyku += 1 * _mzo, _mza.houm += 1 * _mzo)), _mza;
        };
    },
    93733: (_mzr, _mzs, _mzt) => {
        'use strict';
        var _mzu = null;
        defineModule(_mzs);
        Object.defineProperty(_mzs, '__esModule', {
            'value': true
        }), _mzs.getSlot277PersonalEffect = void 0;
        var _mzv = _mzt(74496);
        _mzs.getSlot277PersonalEffect = function(_mzw) {
            var _mzx = null,
                _mzy = new _mzv.SlotItemEffectModel(),
                _mzz = false,
                _n00 = new _mzv.SlotItemEffectModel();
            if ('アメリカ' != _mzw.getCountryName() && 67 != _mzw.ctype && 78 != _mzw.ctype && 82 != _mzw.ctype && 88 != _mzw.ctype && 108 != _mzw.ctype && 112 != _mzw.ctype || (_n00.houg += 1, _n00.kaih += 1, _mzz = true), 83 == _mzw.ctype && (_n00.houg += 1, _n00.kaih += 1, _n00.tyku += 1, _mzz = true), 0 == _mzz) return _mzy;
            var _n01 = _mzw.get_slotnums(277);
            return _mzy.add(_n00.multiply(_n01)), _mzy;
        };
    },
    34718: (_n02, _n03, _n04) => {
        'use strict';
        var _n05 = null;
        defineModule(_n03);
        Object.defineProperty(_n03, '__esModule', {
            'value': true
        }), _n03.getSlot278PersonalEffect = void 0;
        var _n06 = _n04(74496);
        _n03.getSlot278PersonalEffect = function(_n07) {
            var _n08 = null,
                _n09 = new _n06.SlotItemEffectModel();
            return 'アメリカ' == _n07.getCountryName() ? (_n09.tyku += 1, _n09.kaih += 3, _n09.saku += 1) : 67 == _n07.ctype || 78 == _n07.ctype || 82 == _n07.ctype || 88 == _n07.ctype || 108 == _n07.ctype || 112 == _n07.ctype ? (_n09.tyku += 1, _n09.kaih += 2) : 96 == _n07.ctype && (_n09.tyku += 1, _n09.kaih += 1), _n09;
        };
    },
    69245: (_n0a, _n0b, _n0c) => {
        'use strict';
        var _n0d = null;
        defineModule(_n0b);
        Object.defineProperty(_n0b, '__esModule', {
            'value': true
        }), _n0b.getSlot279PersonalEffect = void 0;
        var _n0e = _n0c(74496);
        _n0b.getSlot279PersonalEffect = function(_n0f) {
            var _n0g = null,
                _n0h = new _n0e.SlotItemEffectModel();
            return 'アメリカ' == _n0f.getCountryName() ? (_n0h.houg += 2, _n0h.tyku += 2, _n0h.kaih += 3, _n0h.saku += 2) : 67 == _n0f.ctype || 78 == _n0f.ctype || 82 == _n0f.ctype || 88 == _n0f.ctype || 108 == _n0f.ctype || 112 == _n0f.ctype ? (_n0h.houg += 1, _n0h.tyku += 1, _n0h.kaih += 2, _n0h.saku += 1) : 96 == _n0f.ctype && (_n0h.houg += 1, _n0h.tyku += 1, _n0h.kaih += 1), _n0h;
        };
    },
    18478: (_n0i, _n0j, _n0k) => {
        'use strict';
        var _n0l = null;
        defineModule(_n0j);
        Object.defineProperty(_n0j, '__esModule', {
            'value': true
        }), _n0j.getSlot282PersonalEffect = void 0;
        var _n0m = _n0k(74496);
        _n0j.getSlot282PersonalEffect = function(_n0n) {
            var _n0o = null,
                _n0p = new _n0m.SlotItemEffectModel(),
                _n0q = false,
                _n0r = false;
            147 != _n0n.ship_id && 73 != _n0n.ctype && 81 != _n0n.ctype || (_n0q = true), 'ゆうばり' == _n0n.yomi && (_n0r = true);
            var _n0s = new _n0m.SlotItemEffectModel();
            if ((_n0q || _n0r) && (_n0s.houg += 2, _n0s.souk += 1), !_n0s.exists()) return _n0p;
            var _n0t = _n0n.get_slotnums(282);
            return _n0p = _n0s.multiply(_n0t);
        };
    },
    2899: (_n0u, _n0v, _n0w) => {
        'use strict';
        var _n0x = null;
        defineModule(_n0v);
        Object.defineProperty(_n0v, '__esModule', {
            'value': true
        }), _n0v.getSlot283PersonalEffect = void 0;
        var _n0y = _n0w(74496);
        _n0v.getSlot283PersonalEffect = function(_n0z) {
            var _n10 = null,
                _n11 = new _n0y.SlotItemEffectModel(),
                _n12 = false;
            147 != _n0z.ship_id && 73 != _n0z.ctype && 81 != _n0z.ctype || (_n12 = true);
            var _n13 = new _n0y.SlotItemEffectModel();
            if (_n12 && (_n13.raig += 3, _n13.houg += 1, _n13.souk += 1), !_n13.exists()) return _n11;
            var _n14 = _n0z.get_slotnums(283);
            return _n11 = _n13.multiply(_n14);
        };
    },
    57120: (_n15, _n16, _n17) => {
        'use strict';
        var _n18 = null;
        defineModule(_n16);
        Object.defineProperty(_n16, '__esModule', {
            'value': true
        }), _n16.getSlot285PersonalEffect = void 0;
        var _n19 = _n17(74496);
        _n16.getSlot285PersonalEffect = function(_n1a) {
            var _n1b = null,
                _n1c = new _n19.SlotItemEffectModel(),
                _n1d = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_n1a.ship_id) >= 0 && (_n1d = true), 0 == _n1d) return _n1c;
            var _n1e = _n1a.get_each_level_nums(285),
                _n1f = _n1a.get_slotnums(285);
            _n1f > 2 && (_n1f = 2), _n1c.raig = 2 * _n1f, _n1c.kaih = 1 * _n1f;
            var _n1g = _n1e[10];
            1 == _n1g && (_n1c.houg += 1, _n1c.raig += 1), _n1g >= 2 && (_n1c.houg += 2, _n1c.raig += 1), _n1g >= 3 && (_n1c.raig += 3);
            var _n1h = _n1a.get_slotnums(285);
            return 903 == _n1a.ship_id ? (_n1h >= 2 && (_n1c.raig += 2), _n1h >= 3 && (_n1c.raig += 2)) : 908 != _n1a.ship_id && 959 != _n1a.ship_id || (_n1h >= 2 && (_n1c.raig += 1), _n1h >= 3 && (_n1c.raig += 1)), _n1c;
        };
    },
    74985: function(_n1i, _n1j, _n1k) {
        'use strict';
        var _n1l = null;
        var _n1m = this && this.__importDefault || function(_n1n) {
            var _n1o = null;
            return _n1n && _n1n.__esModule ? _n1n : {
                'default': _n1n
            };
        };
        defineModule(_n1j);
        Object.defineProperty(_n1j, '__esModule', {
            'value': true
        }), _n1j.getSlot286PersonalEffect3 = _n1j.getSlot286PersonalEffect2 = _n1j.getSlot286PersonalEffect = void 0;
        var _n1p = _n1k(74496),
            _n1q = _n1m(_n1k(18622));
        _n1j.getSlot286PersonalEffect = function(_n1r) {
            var _n1s = null,
                _n1t = new _n1p.SlotItemEffectModel(),
                _n1u = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975].indexOf(_n1r.ship_id) >= 0 && (_n1u = true), 0 == _n1u) return _n1t;
            var _n1v = _n1r.get_each_level_nums(286),
                _n1w = _n1r.get_slotnums(286);
            _n1w > 2 && (_n1w = 2), _n1t.raig = 2 * _n1w, _n1t.kaih = 1 * _n1w;
            var _n1x = _n1v[10];
            if (1 == _n1x ? _n1t.houg = _n1t.houg + 1 : _n1x >= 2 && (_n1t.houg = _n1t.houg + 2), 30 == _n1r.ctype || 961 == _n1r.ship_id) {
                var _n1y = _n1v[5] + _n1v[6] + _n1v[7] + _n1v[8] + _n1v[9] + _n1v[10];
                1 == _n1y ? _n1t.raig = _n1t.raig + 1 : _n1y >= 2 && (_n1t.raig = _n1t.raig + 2);
            }
            return _n1t;
        }, _n1j.getSlot286PersonalEffect2 = function(_n1z) {
            var _n20 = null,
                _n21 = new _n1p.SlotItemEffectModel(),
                _n22 = false,
                _n23 = 0;
            if ('たけ' == _n1z.yomi && (_n22 = true, _n23 = 1), 0 == _n22) return _n21;
            var _n24 = _n1z.get_each_level_nums(286),
                _n25 = 0;
            return _n23 > 0 && _n24.forEach(function(_n26, _n27) {
                _n27 >= 7 && (_n25 += _n26);
            }), 'たけ' == _n1z.yomi && (_n21.raig += 7, _n21.kaih += 2, _n25 >= 1 && (_n21.raig += 2), _n24[10] >= 1 && (_n21.raig += 2)), _n21;
        }, _n1j.getSlot286PersonalEffect3 = function(_n28) {
            var _n29 = null,
                _n2a = new _n1p.SlotItemEffectModel(),
                _n2b = false,
                _n2c = new _n1p.SlotItemEffectModel(),
                _n2d = 0;
            if (662 != _n28.ship_id && 663 != _n28.ship_id && 668 != _n28.ship_id || (_n2c.raig += 2, _n2b = true, _n2d = 1), 0 == _n2b) return _n2a;
            var _n2e = _n28.get_slotnums(286);
            _n2a.add(_n2c.multiply(_n2e));
            for (var _n2f = 0, _n2g = 0, _n2h = _n28.have_slot_ids(); _n2g < _n2h.length; _n2g++) {
                var _n2i = _n2h[_n2g],
                    _n2j = _n1q.default.model.slot.getMst(_n2i),
                    _n2k = _n2j.equipType;
                12 != _n2k && 13 != _n2k || (_n2j.sakuteki >= 5 && (_n2f += _n28.get_slotnums(parseInt(_n2i))), _n2j.taiku >= 2 && _n28.get_slotnums(parseInt(_n2i)));
            }
            return _n2f >= 1 && 1 == _n2d && (_n2a.raig += 3, _n2a.kaih += 2), _n2a;
        };
    },
    9234: (_n2l, _n2m, _n2n) => {
        'use strict';
        var _n2o = null;
        defineModule(_n2m);
        Object.defineProperty(_n2m, '__esModule', {
            'value': true
        }), _n2m.getSlot287PersonalEffect = void 0;
        var _n2p = _n2n(74496);
        _n2m.getSlot287PersonalEffect = function(_n2q) {
            var _n2r = null,
                _n2s = new _n2p.SlotItemEffectModel(),
                _n2t = new _n2p.SlotItemEffectModel(),
                _n2u = false;
            if (488 == _n2q.ship_id || 141 == _n2q.ship_id || 160 == _n2q.ship_id || 624 == _n2q.ship_id || 656 == _n2q.ship_id ? (_n2t.tais = 1, _n2t.kaih = 1, _n2u = true) : 662 != _n2q.ship_id && 961 != _n2q.ship_id || (_n2t.tais = 3, _n2u = true), 0 == _n2u) return _n2s;
            var _n2v = _n2q.get_slotnums(287);
            return _n2s = _n2t.multiply(_n2v);
        };
    },
    30802: (_n2w, _n2x, _n2y) => {
        'use strict';
        var _n2z = null;
        defineModule(_n2x);
        Object.defineProperty(_n2x, '__esModule', {
            'value': true
        }), _n2x.getSlot288PersonalEffect = void 0;
        var _n30 = _n2y(74496);
        _n2x.getSlot288PersonalEffect = function(_n31) {
            var _n32 = null,
                _n33 = new _n30.SlotItemEffectModel(),
                _n34 = new _n30.SlotItemEffectModel(),
                _n35 = false;
            if (488 == _n31.ship_id || 141 == _n31.ship_id || 160 == _n31.ship_id || 656 == _n31.ship_id ? (_n34.tais = 2, _n34.kaih = 1, _n35 = true) : 624 == _n31.ship_id ? (_n34.houg = 1, _n34.tais = 3, _n34.kaih = 2, _n35 = true) : 662 != _n31.ship_id && 961 != _n31.ship_id || (_n34.tais = 4, _n34.kaih = 1, _n35 = true), 0 == _n35) return _n33;
            var _n36 = _n31.get_slotnums(288);
            return _n33 = _n34.multiply(_n36);
        };
    },
    97002: function(_n37, _n38, _n39) {
        'use strict';
        var _n3a = null;
        var _n3b = this && this.__importDefault || function(_n3c) {
            var _n3d = null;
            return _n3c && _n3c.__esModule ? _n3c : {
                'default': _n3c
            };
        };
        defineModule(_n38);
        Object.defineProperty(_n38, '__esModule', {
            'value': true
        }), _n38.getSlot289PersonalEffect = void 0;
        var _n3e = _n39(74496),
            _n3f = _n3b(_n39(18622));
        _n38.getSlot289PersonalEffect = function(_n3g) {
            var _n3h = null,
                _n3i = new _n3e.SlotItemEffectModel(),
                _n3j = {
                    151: 1,
                    593: 1,
                    954: 1,
                    591: 2,
                    149: 3,
                    150: 3,
                    592: 3,
                    152: 3
                },
                _n3k = 0,
                _n3l = new _n3e.SlotItemEffectModel();
            if (149 == _n3g.ship_id || 591 == _n3g.ship_id) _n3l.houg = 2, _n3l.tyku = 1, _n3k = 1;
            else {
                if (150 == _n3g.ship_id || 592 == _n3g.ship_id) _n3l.houg = 1;
                else {
                    if (152 == _n3g.ship_id) _n3l.houg = 1;
                    else {
                        if (151 != _n3g.ship_id && 593 != _n3g.ship_id && 954 != _n3g.ship_id) return _n3i;
                        _n3l.houg = 2, _n3l.tyku = 2, _n3l.kaih = 2, _n3k = 1;
                    }
                }
            }
            var _n3m = _n3g.get_slotnums(289);
            if (_n3i = _n3l.multiply(_n3m), _n3j[_n3g.ship_id]) {
                var _n3n = _n3g.get_each_level_nums(289),
                    _n3o = new Array();
                _n3n.forEach(function(_n3p, _n3q) {
                    var _n3r = null;
                    for (var _n3s = 1; _n3s <= _n3g.SLOT_LEVEL_MAX; _n3s++) _n3q >= _n3s && (null == _n3o[_n3s] && (_n3o[_n3s] = 0), _n3o[_n3s] += _n3p);
                });
                var _n3t = _n3j[_n3g.ship_id];
                1 == _n3t ? (_n3o[1] >= 1 && (_n3i.kaih += 1 * _n3o[1]), _n3o[3] >= 1 && (_n3i.tyku = _n3i.tyku + 1 * _n3o[3]), _n3o[5] >= 1 && (_n3i.houg = _n3i.houg + 1 * _n3o[5]), _n3o[7] >= 1 && (_n3i.kaih += 1 * _n3o[7]), _n3o[8] >= 1 && (_n3i.tyku += 1 * _n3o[8]), _n3o[9] >= 1 && (_n3i.houg += 1 * _n3o[9]), _n3o[10] >= 1 && (_n3i.kaih += 1 * _n3o[10])) : 2 == _n3t ? (_n3o[4] >= 1 && (_n3i.tyku += 1 * _n3o[4]), _n3o[6] >= 1 && (_n3i.kaih += 1 * _n3o[6]), _n3o[8] >= 1 && (_n3i.houg += 1 * _n3o[8]), _n3o[10] >= 1 && (_n3i.kaih += 1 * _n3o[10])) : 3 == _n3t && (_n3o[7] >= 1 && (_n3i.tyku += 1 * _n3o[7]), _n3o[9] >= 1 && (_n3i.houg += 1 * _n3o[9]), _n3o[10] >= 1 && (_n3i.kaih += 1 * _n3o[10]));
            }
            if (0 == _n3k) return _n3i;
            for (var _n3u = 0, _n3v = 0, _n3w = _n3g.have_slot_ids(); _n3v < _n3w.length; _n3v++) {
                var _n3x = _n3w[_n3v],
                    _n3y = _n3f.default.model.slot.getMst(_n3x),
                    _n3z = _n3y.equipType;
                (12 == _n3z || 13 == _n3z) && _n3y.sakuteki >= 5 && (_n3u += _n3g.get_slotnums(parseInt(_n3x)));
            }
            return _n3u > 0 && (_n3i.houg += 2, _n3i.kaih += 2), _n3i;
        };
    },
    16748: function(_n40, _n41, _n42) {
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
        }), _n41.getSlot290PersonalEffect = void 0;
        var _n47 = _n42(74496),
            _n48 = _n44(_n42(18622));
        _n41.getSlot290PersonalEffect = function(_n49) {
            var _n4a = null,
                _n4b = new _n47.SlotItemEffectModel(),
                _n4c = 0,
                _n4d = new _n47.SlotItemEffectModel();
            if (411 == _n49.ship_id) _n4d.houg = 1;
            else {
                if (412 == _n49.ship_id) _n4d.houg = 1;
                else {
                    if (82 == _n49.ship_id) _n4d.houg = 2, _n4d.tyku = 2, _n4d.kaih = 1, _n4c = 1;
                    else {
                        if (553 == _n49.ship_id) _n4d.houg = 3, _n4d.tyku = 2, _n4d.kaih = 1, _n4d.houm = 3, _n4c = 1;
                        else {
                            if (88 == _n49.ship_id) _n4d.houg = 2, _n4d.tyku = 2, _n4d.kaih = 1, _n4c = 1;
                            else {
                                if (554 != _n49.ship_id) return _n4b;
                                _n4d.houg = 3, _n4d.tyku = 2, _n4d.kaih = 2, _n4d.houm = 3, _n4c = 1;
                            }
                        }
                    }
                }
            }
            var _n4e = _n49.get_slotnums(290);
            if (_n4b = _n4d.multiply(_n4e), 0 == _n4c) return _n4b;
            for (var _n4f = 0, _n4g = 0, _n4h = _n49.have_slot_ids(); _n4g < _n4h.length; _n4g++) {
                var _n4i = _n4h[_n4g],
                    _n4j = _n48.default.model.slot.getMst(_n4i),
                    _n4k = _n4j.equipType;
                (12 == _n4k || 13 == _n4k) && _n4j.taiku >= 2 && (_n4f += _n49.get_slotnums(parseInt(_n4i)));
            }
            return _n4f > 0 && (_n4b.tyku += 2, _n4b.kaih += 3), _n4b;
        };
    },
    53618: (_n4l, _n4m, _n4n) => {
        'use strict';
        var _n4o = null;
        defineModule(_n4m);
        Object.defineProperty(_n4m, '__esModule', {
            'value': true
        }), _n4m.getSlot291PersonalEffect = void 0;
        var _n4p = _n4n(74496);
        _n4m.getSlot291PersonalEffect = function(_n4q) {
            var _n4r = null,
                _n4s = new _n4p.SlotItemEffectModel(),
                _n4t = new _n4p.SlotItemEffectModel();
            if (553 == _n4q.ship_id) _n4t.houg = 6, _n4t.kaih = 1;
            else {
                if (554 != _n4q.ship_id) return _n4s;
                _n4t.houg = 6, _n4t.kaih = 1;
            }
            var _n4u = _n4q.get_slotnums(291);
            return _n4s = _n4t.multiply(_n4u);
        };
    },
    72573: (_n4v, _n4w, _n4x) => {
        'use strict';
        var _n4y = null;
        defineModule(_n4w);
        Object.defineProperty(_n4w, '__esModule', {
            'value': true
        }), _n4w.getSlot292PersonalEffect = void 0;
        var _n4z = _n4x(74496);
        _n4w.getSlot292PersonalEffect = function(_n50) {
            var _n51 = null,
                _n52 = new _n4z.SlotItemEffectModel(),
                _n53 = new _n4z.SlotItemEffectModel();
            if (553 == _n50.ship_id) _n53.houg = 8, _n53.kaih = 2, _n53.tyku = 1;
            else {
                if (554 != _n50.ship_id) return _n52;
                _n53.houg = 8, _n53.kaih = 2, _n53.tyku = 1;
            }
            var _n54 = _n50.get_slotnums(292);
            return _n52 = _n53.multiply(_n54);
        };
    },
    8955: function(_n55, _n56, _n57) {
        'use strict';
        var _n58 = null;
        var _n59 = this && this.__importDefault || function(_n5a) {
            var _n5b = null;
            return _n5a && _n5a.__esModule ? _n5a : {
                'default': _n5a
            };
        };
        defineModule(_n56);
        Object.defineProperty(_n56, '__esModule', {
            'value': true
        }), _n56.getSlot293PersonalEffect = void 0;
        var _n5c = _n57(74496),
            _n5d = _n59(_n57(18622));
        _n56.getSlot293PersonalEffect = function(_n5e) {
            var _n5f = null,
                _n5g = new _n5c.SlotItemEffectModel(),
                _n5h = new _n5c.SlotItemEffectModel(),
                _n5i = 0;
            if (66 == _n5e.ctype || 28 == _n5e.ctype) _n5h.houg = 2, _n5h.tyku = 1, _n5h.kaih = 3, _n5i = 1;
            else {
                if (74 != _n5e.ctype && 77 != _n5e.ctype) return _n5g;
                _n5h.houg = 1, _n5h.tyku = 1, _n5h.kaih = 2, _n5i = 2;
            }
            var _n5j = _n5e.get_slotnums(293);
            _n5g = _n5h.multiply(_n5j);
            for (var _n5k = 0, _n5l = 0, _n5m = _n5e.have_slot_ids(); _n5l < _n5m.length; _n5l++) {
                var _n5n = _n5m[_n5l],
                    _n5o = _n5d.default.model.slot.getMst(_n5n),
                    _n5p = _n5o.equipType;
                (12 == _n5p || 13 == _n5p) && _n5o.sakuteki >= 5 && (_n5k += _n5e.get_slotnums(parseInt(_n5n)));
            }
            var _n5q = _n5e.get_slotnums(174);
            return 1 == _n5i ? (_n5k > 0 && (_n5g.houg += 2, _n5g.kaih += 3, _n5g.raig += 1), 1 == _n5q ? (_n5g.houg += 2, _n5g.raig += 4) : _n5q >= 2 && (_n5g.houg += 3, _n5g.raig += 7)) : 2 == _n5i && _n5k > 0 && (_n5g.houg += 2, _n5g.kaih += 3, _n5g.tais += 1), _n5g;
        };
    },
    98947: function(_n5r, _n5s, _n5t) {
        'use strict';
        var _n5u = null;
        var _n5v = this && this.__importDefault || function(_n5w) {
            var _n5x = null;
            return _n5w && _n5w.__esModule ? _n5w : {
                'default': _n5w
            };
        };
        defineModule(_n5s);
        Object.defineProperty(_n5s, '__esModule', {
            'value': true
        }), _n5s.getSlot294PersonalEffect = void 0;
        var _n5y = _n5t(74496),
            _n5z = _n5v(_n5t(18622));
        _n5s.getSlot294PersonalEffect = function(_n60) {
            var _n61 = null,
                _n62 = new _n5y.SlotItemEffectModel(),
                _n63 = new _n5y.SlotItemEffectModel(),
                _n64 = 0,
                _n65 = _n60.get_slotnums(294);
            if (12 != _n60.ctype && 1 != _n60.ctype && 5 != _n60.ctype) return _n62;
            _n63.houg = 1, 959 == _n60.ship_id && (_n63.houg += 1, _n65 >= 2 && (_n62.houg += 2), _n65 >= 3 && (_n62.houg += 3), _n64 = 1), _n62.add(_n63.multiply(_n65));
            for (var _n66 = 0, _n67 = 0, _n68 = _n60.have_slot_ids(); _n67 < _n68.length; _n67++) {
                var _n69 = _n68[_n67],
                    _n6a = _n5z.default.model.slot.getMst(_n69),
                    _n6b = _n6a.equipType;
                (12 == _n6b || 13 == _n6b) && _n6a.sakuteki >= 5 && (_n66 += _n60.get_slotnums(parseInt(_n69)));
            }
            var _n6c = _n60.get_slotnums(13),
                _n6d = _n60.get_slotnums(125),
                _n6e = _n60.get_slotnums(285),
                _n6f = _n6c + _n6d + _n6e;
            if (_n66 > 0 && (_n62.houg += 3, _n62.kaih += 2, _n62.raig += 1), 1 == _n6f ? (_n62.houg += 1, _n62.raig += 3) : _n6f >= 2 && (_n62.houg += 2, _n62.raig += 5), _n6e >= 1 && (_n62.raig += 1), 0 == _n64) return _n62;
            var _n6g = _n60.get_each_level_nums(294),
                _n6h = [];
            return _n64 > 0 && _n6g.forEach(function(_n6i, _n6j) {
                var _n6k = null;
                for (var _n6l = 1; _n6l <= _n60.SLOT_LEVEL_MAX; _n6l++) null == _n6h[_n6l] && (_n6h[_n6l] = 0), _n6j >= _n6l && (_n6h[_n6l] += _n6i);
            }), 1 == _n64 && (_n6h[6] >= 1 && (_n62.houm += 4 * _n6h[6]), _n6h[7] >= 1 && (_n62.houg = _n62.houg + 6 * _n6h[7]), _n6h[8] >= 1 && (_n62.houg = _n62.houg + 1 * _n6h[8]), _n6h[9] >= 1 && (_n62.houg = _n62.houg + 1 * _n6h[9]), _n6h[10] >= 1 && (_n62.houg += 1 * _n6h[10])), _n62;
        };
    },
    44726: function(_n6m, _n6n, _n6o) {
        'use strict';
        var _n6p = null;
        var _n6q = this && this.__importDefault || function(_n6r) {
            var _n6s = null;
            return _n6r && _n6r.__esModule ? _n6r : {
                'default': _n6r
            };
        };
        defineModule(_n6n);
        Object.defineProperty(_n6n, '__esModule', {
            'value': true
        }), _n6n.getSlot295PersonalEffect = void 0;
        var _n6t = _n6o(74496),
            _n6u = _n6q(_n6o(18622));
        _n6n.getSlot295PersonalEffect = function(_n6v) {
            var _n6w = null,
                _n6x = new _n6t.SlotItemEffectModel(),
                _n6y = new _n6t.SlotItemEffectModel(),
                _n6z = _n6v.get_slotnums(295);
            if (12 != _n6v.ctype && 1 != _n6v.ctype && 5 != _n6v.ctype) return _n6x;
            _n6y.houg = 2, _n6y.tyku = 2, 666 == _n6v.ship_id ? (_n6y.houg += 1, _n6y.tyku += 1, _n6y.tais += 1) : 959 == _n6v.ship_id && (_n6y.houg += 2, _n6z >= 2 && (_n6x.houg += 2), _n6z >= 3 && (_n6x.houg += 3)), _n6x.add(_n6y.multiply(_n6z));
            for (var _n70 = 0, _n71 = 0, _n72 = 0, _n73 = _n6v.have_slot_ids(); _n72 < _n73.length; _n72++) {
                var _n74 = _n73[_n72],
                    _n75 = _n6u.default.model.slot.getMst(_n74),
                    _n76 = _n75.equipType;
                12 != _n76 && 13 != _n76 || (_n75.sakuteki >= 5 && (_n70 += _n6v.get_slotnums(parseInt(_n74))), _n75.taiku >= 2 && (_n71 += _n6v.get_slotnums(parseInt(_n74))));
            }
            var _n77 = _n6v.get_slotnums(13),
                _n78 = _n6v.get_slotnums(125),
                _n79 = _n6v.get_slotnums(285),
                _n7a = _n77 + _n78 + _n79;
            return _n70 > 0 && (_n6x.houg += 3, _n6x.kaih += 2, _n6x.raig += 1), 1 == _n7a ? (_n6x.houg += 1, _n6x.raig += 3) : _n7a >= 2 && (_n6x.houg += 2, _n6x.raig += 5), _n79 >= 1 && (_n6x.raig += 1), _n71 > 0 && (_n6x.tyku += 6), _n6x;
        };
    },
    93065: function(_n7b, _n7c, _n7d) {
        'use strict';
        var _n7e = null;
        var _n7f = this && this.__importDefault || function(_n7g) {
            var _n7h = null;
            return _n7g && _n7g.__esModule ? _n7g : {
                'default': _n7g
            };
        };
        defineModule(_n7c);
        Object.defineProperty(_n7c, '__esModule', {
            'value': true
        }), _n7c.getSlot296PersonalEffect = void 0;
        var _n7i = _n7d(74496),
            _n7j = _n7f(_n7d(18622));
        _n7c.getSlot296PersonalEffect = function(_n7k) {
            var _n7l = null,
                _n7m = new _n7i.SlotItemEffectModel(),
                _n7n = new _n7i.SlotItemEffectModel();
            1 != _n7k.ctype && 5 != _n7k.ctype && 10 != _n7k.ctype && 23 != _n7k.ctype || (_n7n.houg += 1), 10 != _n7k.ctype && 23 != _n7k.ctype || (_n7n.kaih += 1), 145 == _n7k.ship_id || 961 == _n7k.ship_id ? (_n7n.houg += 1, _n7n.tyku += 1) : 144 == _n7k.ship_id ? (_n7n.houg += 1, _n7n.raig += 1) : 469 == _n7k.ship_id || 588 == _n7k.ship_id || 667 == _n7k.ship_id || 587 == _n7k.ship_id || 242 == _n7k.ship_id ? _n7n.kaih += 1 : 497 == _n7k.ship_id ? (_n7n.houg += 1, _n7n.kaih += 1) : 244 == _n7k.ship_id ? _n7n.kaih += 1 : 498 == _n7k.ship_id || 975 == _n7k.ship_id ? (_n7n.tyku += 1, _n7n.kaih += 1) : 627 == _n7k.ship_id ? (_n7n.houg += 2, _n7n.raig += 1) : 903 != _n7k.ship_id && 908 != _n7k.ship_id || (_n7n.houg += 3);
            var _n7o = true;
            if (_n7n.exists() || (_n7o = false), 0 == _n7o) return _n7m;
            var _n7p = _n7k.get_slotnums(296);
            _n7m = _n7n.multiply(_n7p);
            var _n7q = 0;
            if (1 != _n7k.ctype && 5 != _n7k.ctype && 10 != _n7k.ctype || (_n7q = 1), 23 == _n7k.ctype && (_n7q = 2), 0 == _n7q) return _n7m;
            for (var _n7r = 0, _n7s = 0, _n7t = 0, _n7u = _n7k.have_slot_ids(); _n7t < _n7u.length; _n7t++) {
                var _n7v = _n7u[_n7t],
                    _n7w = _n7j.default.model.slot.getMst(_n7v),
                    _n7x = _n7w.equipType;
                12 != _n7x && 13 != _n7x || (_n7w.sakuteki >= 5 && (_n7r += _n7k.get_slotnums(parseInt(_n7v))), _n7w.taiku >= 2 && (_n7s += _n7k.get_slotnums(parseInt(_n7v))));
            }
            return _n7r > 0 && (1 == _n7q ? (_n7m.houg += 1, _n7m.kaih += 2, _n7m.raig += 2) : 2 == _n7q && (_n7m.houg += 1, _n7m.kaih += 2, _n7m.raig += 3)), _n7k.get_slotnums(285) + _n7k.get_slotnums(125) >= 1 && 1 == _n7q && (_n7m.houg += 1, _n7m.raig += 3), _n7k.get_slotnums(15) + _n7k.get_slotnums(286) >= 1 && 2 == _n7q && (_n7m.houg += 1, _n7m.raig += 3), _n7s > 0 && (1 == _n7q ? _n7m.tyku += 5 : 2 == _n7q && (_n7m.tyku += 6)), _n7m;
        };
    },
    85767: (_n7y, _n7z, _n80) => {
        'use strict';
        var _n81 = null;
        defineModule(_n7z);
        Object.defineProperty(_n7z, '__esModule', {
            'value': true
        }), _n7z.getSlot297PersonalEffect = void 0;
        var _n82 = _n80(74496);
        _n7z.getSlot297PersonalEffect = function(_n83) {
            var _n84 = null,
                _n85 = new _n82.SlotItemEffectModel(),
                _n86 = new _n82.SlotItemEffectModel();
            if (12 == _n83.ctype) _n86.kaih = 2;
            else {
                if (1 != _n83.ctype && 5 != _n83.ctype) return _n85;
                _n86.kaih = 1;
            }
            var _n87 = _n83.get_slotnums(297);
            return _n85 = _n86.multiply(_n87);
        };
    },
    38314: (_n88, _n89, _n8a) => {
        'use strict';
        var _n8b = null;
        defineModule(_n89);
        Object.defineProperty(_n89, '__esModule', {
            'value': true
        }), _n89.getSlot301PersonalEffect = void 0;
        var _n8c = _n8a(74496);
        _n89.getSlot301PersonalEffect = function(_n8d) {
            var _n8e = null,
                _n8f = new _n8c.SlotItemEffectModel(),
                _n8g = new _n8c.SlotItemEffectModel();
            67 != _n8d.ctype && 78 != _n8d.ctype && 82 != _n8d.ctype && 88 != _n8d.ctype && 108 != _n8d.ctype && 112 != _n8d.ctype || (_n8g.tyku += 2, _n8g.kaih += 1, _n8g.souk += 1);
            var _n8h = true;
            if (_n8g.exists() || (_n8h = false), 0 == _n8h) return _n8f;
            var _n8i = _n8d.get_slotnums(301);
            return _n8f = _n8g.multiply(_n8i);
        };
    },
    59747: (_n8j, _n8k, _n8l) => {
        'use strict';
        var _n8m = null;
        defineModule(_n8k);
        Object.defineProperty(_n8k, '__esModule', {
            'value': true
        }), _n8k.getSlot302PersonalEffect = void 0;
        var _n8n = _n8l(74496);
        _n8k.getSlot302PersonalEffect = function(_n8o) {
            var _n8p = null,
                _n8q = new _n8n.SlotItemEffectModel(),
                _n8r = new _n8n.SlotItemEffectModel();
            if (76 == _n8o.ctype && (_n8r.tais = 1, _n8r.kaih = 1), !_n8r.exists()) return _n8q;
            var _n8s = _n8o.get_slotnums(302);
            return _n8q = _n8r.multiply(_n8s);
        };
    },
    40649: (_n8t, _n8u, _n8v) => {
        'use strict';
        var _n8w = null;
        defineModule(_n8u);
        Object.defineProperty(_n8u, '__esModule', {
            'value': true
        }), _n8u.getSlot303PersonalEffect = void 0;
        var _n8x = _n8v(74496);
        _n8u.getSlot303PersonalEffect = function(_n8y) {
            var _n8z = null,
                _n90 = new _n8x.SlotItemEffectModel(),
                _n91 = new _n8x.SlotItemEffectModel();
            if (16 == _n8y.ctype || 4 == _n8y.ctype || 20 == _n8y.ctype || 41 == _n8y.ctype ? (_n91.houg = 1, _n91.tyku = 1) : 89 == _n8y.ctype && (_n91.houg = 1, _n91.tyku = 2, _n91.kaih = 1), !_n91.exists()) return _n90;
            var _n92 = _n8y.get_slotnums(303);
            return _n90 = _n91.multiply(_n92);
        };
    },
    13533: (_n93, _n94, _n95) => {
        'use strict';
        var _n96 = null;
        defineModule(_n94);
        Object.defineProperty(_n94, '__esModule', {
            'value': true
        }), _n94.getSlot304PersonalEffect = void 0;
        var _n97 = _n95(74496);
        _n94.getSlot304PersonalEffect = function(_n98) {
            var _n99 = null,
                _n9a = new _n97.SlotItemEffectModel(),
                _n9b = new _n97.SlotItemEffectModel();
            if (16 == _n98.ctype || 4 == _n98.ctype || 20 == _n98.ctype || 41 == _n98.ctype ? (_n9b.houg = 1, _n9b.tais = 1, _n9b.kaih = 1) : 89 == _n98.ctype && (_n9b.houg = 1, _n9b.tais = 2, _n9b.kaih = 2), !_n9b.exists()) return _n9a;
            var _n9c = _n98.get_slotnums(304);
            return _n9a = _n9b.multiply(_n9c);
        };
    },
    99791: (_n9d, _n9e, _n9f) => {
        'use strict';
        var _n9g = null;
        defineModule(_n9e);
        Object.defineProperty(_n9e, '__esModule', {
            'value': true
        }), _n9e.getSlot305More320mmGunPersonalEffect = void 0;
        var _n9h = _n9f(74496);
        _n9e.getSlot305More320mmGunPersonalEffect = function(_n9i) {
            var _n9j = null,
                _n9k = new _n9h.SlotItemEffectModel(),
                _n9l = _n9i.get_slotnums(426),
                _n9m = _n9i.get_slotnums(427),
                _n9n = _n9i.get_slotnums(428),
                _n9o = _n9i.get_slotnums(429),
                _n9p = _n9l + _n9m + _n9n + _n9o;
            return 113 == _n9i.ctype ? (_n9k.houg = _n9k.houg + 2 * _n9p, _n9l >= 1 && (_n9k.houg = _n9k.houg + 1 * _n9l, _n9k.kaih = _n9k.kaih + 1 * _n9l, (_n9l >= 2 || _n9m >= 1) && (_n9k.houg = _n9k.houg + 1, _n9k.kaih = _n9k.kaih + 1)), _n9n >= 1 && (_n9k.houg = _n9k.houg + 1 * _n9n, _n9k.kaih = _n9k.kaih + 1 * _n9n, (_n9n >= 2 || _n9o >= 1) && (_n9k.houg = _n9k.houg + 2, _n9k.kaih = _n9k.kaih + 1))) : 73 == _n9i.ctype ? (_n9k.houg = _n9k.houg + 1 * _n9p, _n9l >= 1 && (_n9k.houg = _n9k.houg + 1 * _n9l, _n9k.kaih = _n9k.kaih + 1 * _n9l, (_n9l >= 2 || _n9m >= 1) && (_n9k.houg = _n9k.houg + 1)), _n9n >= 1 && (_n9k.houg = _n9k.houg + 1 * _n9n, _n9k.kaih = _n9k.kaih + 1 * _n9n, (_n9n >= 2 || _n9o >= 1) && (_n9k.houg = _n9k.houg + 1))) : 58 == _n9i.ctype && _n9n >= 1 && (_n9k.houg = _n9k.houg + 1 * _n9n, _n9k.kaih = _n9k.kaih + 2 * _n9n, (_n9n >= 2 || _n9o >= 1) && (_n9k.houg = _n9k.houg + 2, _n9k.kaih = _n9k.kaih + 1)), _n9k;
        };
    },
    12138: (_n9q, _n9r, _n9s) => {
        'use strict';
        var _n9t = null;
        defineModule(_n9r);
        Object.defineProperty(_n9r, '__esModule', {
            'value': true
        }), _n9r.getSlot305_And_306_PersonalEffect = void 0;
        var _n9u = _n9s(74496);
        _n9r.getSlot305_And_306_PersonalEffect = function(_n9v) {
            var _n9w = null,
                _n9x = new _n9u.SlotItemEffectModel(),
                _n9y = new _n9u.SlotItemEffectModel();
            if (76 == _n9v.ctype && (_n9y.tais = 1, _n9y.kaih = 1), 'しんよう' == _n9v.yomi ? (_n9y.tais += 2, _n9y.kaih += 1) : 'グラーフ・ツェッペリン' != _n9v.yomi && 'アクィラ' != _n9v.yomi || (_n9y.houg = 1, _n9y.kaih = 1), !_n9y.exists()) return _n9x;
            var _n9z = _n9v.get_slotnums(305) + _n9v.get_slotnums(306);
            return _n9x = _n9y.multiply(_n9z);
        };
    },
    30042: (_na0, _na1, _na2) => {
        'use strict';
        var _na3 = null;
        defineModule(_na1);
        Object.defineProperty(_na1, '__esModule', {
            'value': true
        }), _na1.getSlot307PersonalEffect = void 0;
        var _na4 = _na2(74496);
        _na1.getSlot307PersonalEffect = function(_na5) {
            var _na6 = null,
                _na7 = new _na4.SlotItemEffectModel(),
                _na8 = new _na4.SlotItemEffectModel();
            if ('アメリカ' == _na5.getCountryName() && (_na8.houg = 1, _na8.tyku = 1, _na8.kaih = 1), !_na8.exists()) return _na7;
            var _na9 = _na5.get_slotnums(307);
            return _na7 = _na8.multiply(_na9);
        };
    },
    33623: (_naa, _nab, _nac) => {
        'use strict';
        var _nad = null;
        defineModule(_nab);
        Object.defineProperty(_nab, '__esModule', {
            'value': true
        }), _nab.getSlot308PersonalEffect = void 0;
        var _nae = _nac(74496);
        _nab.getSlot308PersonalEffect = function(_naf) {
            var _nag = null,
                _nah = new _nae.SlotItemEffectModel(),
                _nai = new _nae.SlotItemEffectModel();
            if ('アメリカ' == _naf.getCountryName() && (_nai.houg = 1, _nai.tyku = 1, _nai.kaih = 1), 2 == _naf.stype ? _nai.houg += 1 : 1 == _naf.stype && (_nai.tyku += 1, _nai.kaih += 1), 651 != _naf.ship_id && 656 != _naf.ship_id || (_nai.houg += 1, _nai.tyku += 1, _nai.kaih += 1), !_nai.exists()) return _nah;
            var _naj = _naf.get_slotnums(308);
            return _nah = _nai.multiply(_naj);
        };
    },
    17732: (_nak, _nal, _nam) => {
        'use strict';
        var _nan = null;
        defineModule(_nal);
        Object.defineProperty(_nal, '__esModule', {
            'value': true
        }), _nal.getSlot30_410PersonalEffect = void 0;
        var _nao = _nam(74496);
        _nal.getSlot30_410PersonalEffect = function(_nap) {
            var _naq = null,
                _nar = new _nao.SlotItemEffectModel();
            return 73 != _nap.ship_id && 501 != _nap.ship_id && 506 != _nap.ship_id && 502 != _nap.ship_id && 507 != _nap.ship_id || (_nar.tyku += 3, _nar.kaih += 2, _nar.saku += 2, _nap.get_slotnums(410) >= 1 && (_nar.tyku += 2, _nar.kaih += 2, _nar.houg += 1, _nar.souk += 1)), 54 == _nap.ctype && (_nar.tyku += 3, _nar.kaih += 2, _nar.saku += 2, _nap.get_slotnums(410) >= 1 && (_nar.tyku += 2, _nar.kaih += 2, _nar.houg += 1, _nar.souk += 1)), _nar;
        };
    },
    85630: function(_nas, _nat, _nau) {
        'use strict';
        var _nav = null;
        var _naw = this && this.__importDefault || function(_nax) {
            var _nay = null;
            return _nax && _nax.__esModule ? _nax : {
                'default': _nax
            };
        };
        defineModule(_nat);
        Object.defineProperty(_nat, '__esModule', {
            'value': true
        }), _nat.getSlot310PersonalEffect = void 0;
        var _naz = _nau(74496),
            _nb0 = _naw(_nau(18622));
        _nat.getSlot310PersonalEffect = function(_nb1) {
            var _nb2 = null,
                _nb3 = new _naz.SlotItemEffectModel(),
                _nb4 = new _naz.SlotItemEffectModel(),
                _nb5 = new _naz.SlotItemEffectModel();
            34 == _nb1.ctype ? (_nb4.houg += 2, _nb4.tyku += 1, _nb4.kaih += 1, _nb5.houg += 2) : 56 == _nb1.ctype ? (_nb4.houg += 2, _nb4.kaih += 1, _nb5.houg += 2, _nb5.kaih += 2) : 90 == _nb1.ctype && (_nb4.houg += 3, _nb4.raig += 2, _nb4.tyku += 1, _nb4.kaih += 1, _nb5.houg += 1, _nb5.raig += 1);
            var _nb6 = new _naz.SlotItemEffectModel(),
                _nb7 = new _naz.SlotItemEffectModel();
            622 != _nb1.ship_id && 623 != _nb1.ship_id && 624 != _nb1.ship_id || (_nb4.houg += 2, _nb4.kaih += 1, _nb4.tais += 1, _nb6.houg = 1, _nb6.raig = 1, _nb7.houg = 3, _nb7.kaih = 2, _nb7.raig = 2);
            var _nb8 = true;
            if (_nb4.exists() || (_nb8 = false), 0 == _nb8) return _nb3;
            var _nb9 = _nb1.get_slotnums(310) + _nb1.get_slotnums(518);
            _nb3 = _nb4.multiply(_nb9);
            for (var _nba = 0, _nbb = 0, _nbc = 0, _nbd = [310, 518]; _nbc < _nbd.length; _nbc++) {
                var _nbe = _nbd[_nbc],
                    _nbf = _nb1.have_slots_dict[_nbe];
                if (null != _nbf)
                    for (var _nbg = 0, _nbh = _nbf; _nbg < _nbh.length; _nbg++) {
                        var _nbi = _nbh[_nbg];
                        null != _nbi && (_nbi.level >= 7 && _nba++, _nbi.level >= 10 && _nbb++);
                    }
            }
            if (_nb6.exists() && _nba > 0 && _nb3.add(_nb6.multiply(_nba)), _nb5.exists() && _nbb > 0 && _nb3.add(_nb5.multiply(_nbb)), _nb7.exists()) {
                for (var _nbj = 0, _nbk = 0, _nbl = _nb1.have_slot_ids(); _nbk < _nbl.length; _nbk++) {
                    var _nbm = _nbl[_nbk],
                        _nbn = _nb0.default.model.slot.getMst(_nbm),
                        _nbo = _nbn.equipType;
                    (12 == _nbo || 13 == _nbo) && _nbn.sakuteki >= 5 && (_nbj += _nb1.get_slotnums(parseInt(_nbm)));
                }
                _nbj > 0 && _nb3.add(_nb7);
            }
            return _nb3;
        };
    },
    88736: (_nbp, _nbq, _nbr) => {
        'use strict';
        var _nbs = null;
        defineModule(_nbq);
        Object.defineProperty(_nbq, '__esModule', {
            'value': true
        }), _nbq.getSlot313PersonalEffect = void 0;
        var _nbt = _nbr(74496);
        _nbq.getSlot313PersonalEffect = function(_nbu) {
            var _nbv = null,
                _nbw = new _nbt.SlotItemEffectModel(),
                _nbx = new _nbt.SlotItemEffectModel();
            87 != _nbu.ctype && 91 != _nbu.ctype || (_nbx.houg += 2, _nbx.tyku += 2, _nbx.kaih += 1, _nbx.souk += 1), 651 != _nbu.ship_id && 656 != _nbu.ship_id || (_nbx.houg += 2, _nbx.tyku += 2, _nbx.kaih += 1, _nbx.souk += 1);
            var _nby = true;
            if (_nbx.exists() || (_nby = false), 0 == _nby) return _nbw;
            var _nbz = _nbu.get_slotnums(313);
            return _nbw = _nbx.multiply(_nbz);
        };
    },
    49341: (_nc0, _nc1, _nc2) => {
        'use strict';
        var _nc3 = null;
        defineModule(_nc1);
        Object.defineProperty(_nc1, '__esModule', {
            'value': true
        }), _nc1.getSlot314PersonalEffect = void 0;
        var _nc4 = _nc2(74496);
        _nc1.getSlot314PersonalEffect = function(_nc5) {
            var _nc6 = null,
                _nc7 = new _nc4.SlotItemEffectModel(),
                _nc8 = new _nc4.SlotItemEffectModel();
            87 != _nc5.ctype && 91 != _nc5.ctype || (_nc8.houg += 1, _nc8.raig += 3);
            var _nc9 = true;
            if (_nc8.exists() || (_nc9 = false), 0 == _nc9) return _nc7;
            var _nca = _nc5.get_slotnums(314);
            return _nc7 = _nc8.multiply(_nca);
        };
    },
    74306: (_ncb, _ncc, _ncd) => {
        'use strict';
        var _nce = null;
        defineModule(_ncc);
        Object.defineProperty(_ncc, '__esModule', {
            'value': true
        }), _ncc.getSlot315PersonalEffect = void 0;
        var _ncf = _ncd(74496);
        _ncc.getSlot315PersonalEffect = function(_ncg) {
            var _nch = null,
                _nci = new _ncf.SlotItemEffectModel(),
                _ncj = new _ncf.SlotItemEffectModel();
            'アメリカ' == _ncg.getCountryName() && (_ncj.houg += 2, _ncj.kaih += 3, _ncj.saku += 4), 87 != _ncg.ctype && 91 != _ncg.ctype || (_ncj.houg += 1, _nci.leng += 1), 651 != _ncg.ship_id && 656 != _ncg.ship_id || (_nci.houg += 2, _nci.kaih += 2, _nci.saku += 3, _nci.leng += 1);
            var _nck = true;
            if (_ncj.exists() || (_nck = false), 0 == _nck) return _nci;
            var _ncl = _ncg.get_slotnums(315);
            return _nci.add(_ncj.multiply(_ncl)), _nci;
        };
    },
    83898: (_ncm, _ncn, _nco) => {
        'use strict';
        var _ncp = null;
        defineModule(_ncn);
        Object.defineProperty(_ncn, '__esModule', {
            'value': true
        }), _ncn.getSlot316PersonalEffect = void 0;
        var _ncq = _nco(74496);
        _ncn.getSlot316PersonalEffect = function(_ncr) {
            var _ncs = null,
                _nct = new _ncq.SlotItemEffectModel(),
                _ncu = new _ncq.SlotItemEffectModel();
            if (68 == _ncr.ctype) {
                if (_ncu.houg += 4, _ncu.tyku += 1, _ncu.kaih += 1, !_ncu.exists()) return _nct;
                var _ncv = _ncr.get_slotnums(316);
                _nct = _ncu.multiply(_ncv);
            }
            return _nct;
        };
    },
    71873: (_ncw, _ncx, _ncy) => {
        'use strict';
        var _ncz = null;
        defineModule(_ncx);
        Object.defineProperty(_ncx, '__esModule', {
            'value': true
        }), _ncx.getSlot317PersonalEffect = void 0;
        var _nd0 = _ncy(74496);
        _ncx.getSlot317PersonalEffect = function(_nd1) {
            var _nd2 = null,
                _nd3 = new _nd0.SlotItemEffectModel(),
                _nd4 = new _nd0.SlotItemEffectModel(),
                _nd5 = 0,
                _nd6 = false;
            if (6 == _nd1.ctype ? (_nd4.houg += 2, _nd4.tyku += 1, _nd5 = 1, _nd6 = true) : 2 == _nd1.ctype && (_nd4.houg += 1, _nd4.tyku += 1, _nd4.kaih += 1, _nd5 = 2, _nd6 = true), 149 == _nd1.ship_id || 591 == _nd1.ship_id || 592 == _nd1.ship_id ? (_nd4.houg += 2, _nd4.tyku += 2, _nd6 = true) : 150 == _nd1.ship_id ? (_nd4.houg += 1, _nd4.tyku += 1, _nd6 = true) : 151 == _nd1.ship_id ? (_nd4.houg += 1, _nd4.tyku += 1, _nd4.kaih += 1, _nd6 = true) : 593 == _nd1.ship_id ? (_nd4.houg += 1, _nd4.tyku += 3, _nd4.kaih += 2, _nd6 = true) : 954 == _nd1.ship_id ? (_nd4.houg += 2, _nd4.tyku += 2, _nd4.kaih += 1, _nd6 = true) : 152 == _nd1.ship_id ? (_nd4.houg += 2, _nd4.tyku += 1, _nd6 = true) : 541 == _nd1.ship_id ? (_nd4.houg += 1, _nd4.tyku += 2, _nd6 = true) : 573 == _nd1.ship_id && (_nd4.houg += 2, _nd4.tyku += 2, _nd4.kaih += 1, _nd6 = true), 0 == _nd6) return _nd3;
            if (_nd3.add(_nd4), 0 == _nd5) return _nd3;
            var _nd7 = _nd1.get_each_level_nums(317),
                _nd8 = [];
            return _nd5 > 0 && _nd7.forEach(function(_nd9, _nda) {
                var _ndb = null;
                for (var _ndc = 1; _ndc <= _nd1.SLOT_LEVEL_MAX; _ndc++) null == _nd8[_ndc] && (_nd8[_ndc] = 0), _nda >= _ndc && (_nd8[_ndc] += _nd9);
            }), 1 == _nd5 ? _nd8[8] >= 1 && (_nd3.houm += 1) : 2 == _nd5 && _nd7[10] >= 1 && (_nd3.houm += 1), _nd3;
        };
    },
    53122: function(_ndd, _nde, _ndf) {
        'use strict';
        var _ndg = null;
        var _ndh = this && this.__importDefault || function(_ndi) {
            var _ndj = null;
            return _ndi && _ndi.__esModule ? _ndi : {
                'default': _ndi
            };
        };
        defineModule(_nde);
        Object.defineProperty(_nde, '__esModule', {
            'value': true
        }), _nde.getSlot318PersonalEffect = void 0;
        var _ndk = _ndf(74496),
            _ndl = _ndh(_ndf(18622));
        _nde.getSlot318PersonalEffect = function(_ndm) {
            var _ndn = null,
                _ndo = new _ndk.SlotItemEffectModel(),
                _ndp = new _ndk.SlotItemEffectModel(),
                _ndq = new _ndk.SlotItemEffectModel(),
                _ndr = new _ndk.SlotItemEffectModel();
            if (411 == _ndm.ship_id || 412 == _ndm.ship_id ? _ndp.houg += 1 : 82 == _ndm.ship_id ? (_ndp.houg += 2, _ndp.tyku += 2, _ndp.kaih += 2, _ndr.tyku = 2, _ndr.kaih = 3, _ndr.houm = 1) : 553 == _ndm.ship_id ? (_ndp.houg += 2, _ndp.tyku += 2, _ndp.kaih += 2, _ndp.houm += 3, _ndr.tyku = 2, _ndr.kaih = 3, _ndr.houm = 1, _ndq.kaih = 2, _ndq.souk = 1) : 88 == _ndm.ship_id ? (_ndp.houg += 2, _ndp.tyku += 2, _ndp.kaih += 2, _ndr.tyku = 2, _ndr.kaih = 3, _ndr.houm = 1) : 541 == _ndm.ship_id || 573 == _ndm.ship_id ? (_ndp.houg += 3, _ndp.tyku += 2, _ndp.kaih += 1, _ndp.houm += 2, _ndq.houg = 2, _ndq.kaih = 2, _ndq.souk = 1, _ndq.houm = 1) : 554 == _ndm.ship_id && (_ndp.houg += 3, _ndp.tyku += 2, _ndp.kaih += 2, _ndp.houm += 3, _ndr.tyku = 2, _ndr.kaih = 3, _ndr.houm = 1, _ndq.houg = 1, _ndq.kaih = 2, _ndq.souk = 1, _ndq.houm = 1), !_ndp.exists()) return _ndo;
            var _nds = _ndm.get_slotnums(318);
            if (_ndo = _ndp.multiply(_nds), !_ndq.exists() && !_ndr.exists()) return _ndo;
            for (var _ndt = 0, _ndu = 0, _ndv = _ndm.have_slot_ids(); _ndu < _ndv.length; _ndu++) {
                var _ndw = _ndv[_ndu],
                    _ndx = _ndl.default.model.slot.getMst(_ndw),
                    _ndy = _ndx.equipType;
                (12 == _ndy || 13 == _ndy) && _ndx.taiku >= 2 && (_ndt += _ndm.get_slotnums(parseInt(_ndw)));
            }
            var _ndz = _ndm.get_slotnums(290);
            return _ndr.exists() && _ndt > 0 && 0 == _ndz && _ndo.add(_ndr), _ndq.exists() && _ndz >= 1 && _ndo.add(_ndq), _ndo;
        };
    },
    51063: (_ne0, _ne1, _ne2) => {
        'use strict';
        var _ne3 = null;
        defineModule(_ne1);
        Object.defineProperty(_ne1, '__esModule', {
            'value': true
        }), _ne1.getSlot319PersonalEffect = void 0;
        var _ne4 = _ne2(74496);
        _ne1.getSlot319PersonalEffect = function(_ne5) {
            var _ne6 = null,
                _ne7 = new _ne4.SlotItemEffectModel(),
                _ne8 = new _ne4.SlotItemEffectModel();
            if (554 != _ne5.ship_id && 553 != _ne5.ship_id || (_ne8.houg = 7, _ne8.tyku = 3, _ne8.kaih = 2), !_ne8.exists()) return _ne7;
            var _ne9 = _ne5.get_slotnums(319);
            return _ne7 = _ne8.multiply(_ne9);
        };
    },
    91491: (_nea, _neb, _nec) => {
        'use strict';
        var _ned = null;
        defineModule(_neb);
        Object.defineProperty(_neb, '__esModule', {
            'value': true
        }), _neb.getSlot320PersonalEffect = void 0;
        var _nee = _nec(74496);
        _neb.getSlot320PersonalEffect = function(_nef) {
            var _neg = null,
                _neh = new _nee.SlotItemEffectModel(),
                _nei = new _nee.SlotItemEffectModel();
            if (553 == _nef.ship_id) _nei.houg = 2;
            else {
                if (554 == _nef.ship_id) _nei.houg = 4;
                else {
                    if (196 == _nef.ship_id) _nei.houg = 3;
                    else {
                        if (197 == _nef.ship_id) _nei.houg = 3;
                        else {
                            if (508 == _nef.ship_id) _nei.houg = 4;
                            else {
                                if (509 != _nef.ship_id) return _neh;
                                _nei.houg = 4;
                            }
                        }
                    }
                }
            }
            var _nej = _nef.get_slotnums(320);
            return _neh = _nei.multiply(_nej);
        };
    },
    85495: (_nek, _nel, _nem) => {
        'use strict';
        var _nen = null;
        defineModule(_nel);
        Object.defineProperty(_nel, '__esModule', {
            'value': true
        }), _nel.getSlot322PersonalEffect = void 0;
        var _neo = _nem(74496);
        _nel.getSlot322PersonalEffect = function(_nep) {
            var _neq = null,
                _ner = new _neo.SlotItemEffectModel(),
                _nes = new _neo.SlotItemEffectModel();
            if (554 != _nep.ship_id && 553 != _nep.ship_id || (_nes.houg = 5, _nes.tyku = 2, _nes.kaih = 2, _nes.tais = 1), !_nes.exists()) return _ner;
            var _net = _nep.get_slotnums(322);
            return _ner = _nes.multiply(_net);
        };
    },
    65365: (_neu, _nev, _new) => {
        'use strict';
        var _nex = null;
        defineModule(_nev);
        Object.defineProperty(_nev, '__esModule', {
            'value': true
        }), _nev.getSlot323PersonalEffect = void 0;
        var _ney = _new(74496);
        _nev.getSlot323PersonalEffect = function(_nez) {
            var _nf0 = null,
                _nf1 = new _ney.SlotItemEffectModel(),
                _nf2 = new _ney.SlotItemEffectModel();
            if (554 != _nez.ship_id && 553 != _nez.ship_id || (_nf2.houg = 6, _nf2.tyku = 3, _nf2.kaih = 3, _nf2.tais = 2), !_nf2.exists()) return _nf1;
            var _nf3 = _nez.get_slotnums(323);
            return _nf1 = _nf2.multiply(_nf3);
        };
    },
    98164: (_nf4, _nf5, _nf6) => {
        'use strict';
        var _nf7 = null;
        defineModule(_nf5);
        Object.defineProperty(_nf5, '__esModule', {
            'value': true
        }), _nf5.getSlot324And325PersonalEffect = void 0;
        var _nf8 = _nf6(74496);
        _nf5.getSlot324And325PersonalEffect = function(_nf9) {
            var _nfa = null,
                _nfb = new _nf8.SlotItemEffectModel(),
                _nfc = new _nf8.SlotItemEffectModel();
            if (554 == _nf9.ship_id || 646 == _nf9.ship_id ? (_nfc.houg = 2, _nfc.tais = 3, _nfc.kaih = 1) : 553 == _nf9.ship_id && (_nfc.houg = 1, _nfc.tais = 2, _nfc.kaih = 1), !_nfc.exists()) return _nfb;
            var _nfd = _nf9.get_slotnums(324) + _nf9.get_slotnums(325);
            return _nfb = _nfc.multiply(_nfd);
        };
    },
    38114: (_nfe, _nff, _nfg) => {
        'use strict';
        var _nfh = null;
        defineModule(_nff);
        Object.defineProperty(_nff, '__esModule', {
            'value': true
        }), _nff.getSlot326PersonalEffect = void 0;
        var _nfi = _nfg(74496);
        _nff.getSlot326PersonalEffect = function(_nfj) {
            var _nfk = null,
                _nfl = new _nfi.SlotItemEffectModel(),
                _nfm = new _nfi.SlotItemEffectModel();
            if (646 == _nfj.ship_id ? (_nfm.houg = 3, _nfm.tais = 5, _nfm.kaih = 3) : 554 == _nfj.ship_id ? (_nfm.houg = 3, _nfm.tais = 4, _nfm.kaih = 2) : 553 == _nfj.ship_id && (_nfm.houg = 1, _nfm.tais = 3, _nfm.kaih = 1), !_nfm.exists()) return _nfl;
            var _nfn = _nfj.get_slotnums(326);
            return _nfl = _nfm.multiply(_nfn);
        };
    },
    21003: (_nfo, _nfp, _nfq) => {
        'use strict';
        var _nfr = null;
        defineModule(_nfp);
        Object.defineProperty(_nfp, '__esModule', {
            'value': true
        }), _nfp.getSlot327PersonalEffect = void 0;
        var _nfs = _nfq(74496);
        _nfp.getSlot327PersonalEffect = function(_nft) {
            var _nfu = null,
                _nfv = new _nfs.SlotItemEffectModel(),
                _nfw = new _nfs.SlotItemEffectModel();
            if (646 == _nft.ship_id ? (_nfw.houg = 5, _nfw.tais = 6, _nfw.kaih = 4) : 554 == _nft.ship_id ? (_nfw.houg = 4, _nfw.tais = 5, _nfw.kaih = 2) : 553 == _nft.ship_id && (_nfw.houg = 2, _nfw.tais = 4, _nfw.kaih = 1), !_nfw.exists()) return _nfv;
            var _nfx = _nft.get_slotnums(327);
            return _nfv = _nfw.multiply(_nfx);
        };
    },
    77010: (_nfy, _nfz, _ng0) => {
        'use strict';
        var _ng1 = null;
        defineModule(_nfz);
        Object.defineProperty(_nfz, '__esModule', {
            'value': true
        }), _nfz.getSlot328PersonalEffect = void 0;
        var _ng2 = _ng0(74496);
        _nfz.getSlot328PersonalEffect = function(_ng3) {
            var _ng4 = null,
                _ng5 = new _ng2.SlotItemEffectModel(),
                _ng6 = new _ng2.SlotItemEffectModel();
            if ('こんごう' == _ng3.yomi ? (_ng6.houg = 1, _ng6.kaih = 1, 209 == _ng3.ship_id || 149 == _ng3.ship_id ? _ng6.houg += 1 : 591 == _ng3.ship_id && (_ng6.houg += 2, _ng6.raig += 1)) : 'ひえい' == _ng3.yomi ? (_ng6.houg = 1, _ng6.kaih = 1, 210 == _ng3.ship_id || 150 == _ng3.ship_id ? _ng6.houg += 1 : 592 == _ng3.ship_id && (_ng6.houg += 2, _ng6.tyku += 1)) : 'はるな' == _ng3.yomi ? (_ng6.houg = 1, _ng6.kaih = 1, 211 == _ng3.ship_id || 151 == _ng3.ship_id ? _ng6.houg += 1 : 593 == _ng3.ship_id ? (_ng6.houg += 1, _ng6.tyku += 2) : 954 == _ng3.ship_id && (_ng6.houg += 2, _ng6.tyku += 1)) : 'きりしま' == _ng3.yomi ? (_ng6.houg = 1, _ng6.kaih = 1, 212 != _ng3.ship_id && 152 != _ng3.ship_id || (_ng6.houg += 1)) : ('ふそう' == _ng3.yomi || 'やましろ' == _ng3.yomi || 'いせ' == _ng3.yomi || 'ひゅうが' == _ng3.yomi) && (_ng6.houg = 1), !_ng6.exists()) return _ng5;
            var _ng7 = _ng3.get_slotnums(328);
            return _ng5 = _ng6.multiply(_ng7);
        };
    },
    39126: (_ng8, _ng9, _nga) => {
        'use strict';
        var _ngb = null;
        defineModule(_ng9);
        Object.defineProperty(_ng9, '__esModule', {
            'value': true
        }), _ng9.getSlot329PersonalEffect = void 0;
        var _ngc = _nga(74496);
        _ng9.getSlot329PersonalEffect = function(_ngd) {
            var _nge = null,
                _ngf = new _ngc.SlotItemEffectModel(),
                _ngg = new _ngc.SlotItemEffectModel();
            if ('こんごう' == _ngd.yomi ? (_ngg.houg = 1, _ngg.kaih = 1, 209 == _ngd.ship_id ? _ngg.houg += 1 : 149 == _ngd.ship_id ? (_ngg.houg += 2, _ngg.tyku += 1) : 591 == _ngd.ship_id && (_ngg.houg += 3, _ngg.tyku += 1, _ngg.raig += 2)) : 'ひえい' == _ngd.yomi ? (_ngg.houg = 1, _ngg.kaih = 1, 210 == _ngd.ship_id ? _ngg.houg += 1 : 150 == _ngd.ship_id ? (_ngg.houg += 2, _ngg.tyku += 1) : 592 == _ngd.ship_id && (_ngg.houg += 3, _ngg.tyku += 1, _ngg.raig += 2)) : 'はるな' == _ngd.yomi ? (_ngg.houg = 1, _ngg.kaih = 1, 211 == _ngd.ship_id ? _ngg.houg += 1 : 151 == _ngd.ship_id ? (_ngg.houg += 2, _ngg.tyku += 1) : 593 == _ngd.ship_id ? (_ngg.houg += 2, _ngg.tyku += 3, _ngg.raig += 1) : 954 == _ngd.ship_id && (_ngg.houg += 3, _ngg.tyku += 1, _ngg.raig += 2)) : 'きりしま' == _ngd.yomi ? (_ngg.houg = 1, _ngg.kaih = 1, 212 == _ngd.ship_id ? _ngg.houg += 1 : 152 == _ngd.ship_id && (_ngg.houg += 2, _ngg.tyku += 1)) : ('ふそう' == _ngd.yomi || 'やましろ' == _ngd.yomi || 'いせ' == _ngd.yomi || 'ひゅうが' == _ngd.yomi) && (_ngg.houg = 1), !_ngg.exists()) return _ngf;
            var _ngh = _ngd.get_slotnums(329);
            return _ngf = _ngg.multiply(_ngh);
        };
    },
    72176: (_ngi, _ngj, _ngk) => {
        'use strict';
        var _ngl = null;
        defineModule(_ngj);
        Object.defineProperty(_ngj, '__esModule', {
            'value': true
        }), _ngj.getSlot335PersonalEffect = void 0;
        var _ngm = _ngk(74496);
        _ngj.getSlot335PersonalEffect = function(_ngn) {
            var _ngo = null,
                _ngp = new _ngm.SlotItemEffectModel(),
                _ngq = new _ngm.SlotItemEffectModel();
            if (277 == _ngn.ship_id || 278 == _ngn.ship_id ? (_ngq.tyku = 1, _ngq.kaih = 1) : 594 != _ngn.ship_id && 599 != _ngn.ship_id && 610 != _ngn.ship_id && 646 != _ngn.ship_id && 698 != _ngn.ship_id || (_ngq.tyku = 2, _ngq.kaih = 1), !_ngq.exists()) return _ngp;
            var _ngr = _ngn.get_slotnums(335);
            return _ngp = _ngq.multiply(_ngr);
        };
    },
    33846: (_ngs, _ngt, _ngu) => {
        'use strict';
        var _ngv = null;
        defineModule(_ngt);
        Object.defineProperty(_ngt, '__esModule', {
            'value': true
        }), _ngt.getSlot336PersonalEffect = void 0;
        var _ngw = _ngu(74496);
        _ngt.getSlot336PersonalEffect = function(_ngx) {
            var _ngy = null,
                _ngz = new _ngw.SlotItemEffectModel(),
                _nh0 = new _ngw.SlotItemEffectModel();
            if (277 == _ngx.ship_id || 278 == _ngx.ship_id ? (_nh0.houg = 1, _nh0.tyku = 1, _nh0.kaih = 1) : 594 != _ngx.ship_id && 599 != _ngx.ship_id && 610 != _ngx.ship_id && 646 != _ngx.ship_id && 698 != _ngx.ship_id || (_nh0.houg = 1, _nh0.tyku = 2, _nh0.kaih = 1), !_nh0.exists()) return _ngz;
            var _nh1 = _ngx.get_slotnums(336);
            return _ngz = _nh0.multiply(_nh1);
        };
    },
    97157: (_nh2, _nh3, _nh4) => {
        'use strict';
        var _nh5 = null;
        defineModule(_nh3);
        Object.defineProperty(_nh3, '__esModule', {
            'value': true
        }), _nh3.getSlot337PersonalEffect = void 0;
        var _nh6 = _nh4(74496);
        _nh3.getSlot337PersonalEffect = function(_nh7) {
            var _nh8 = null,
                _nh9 = new _nh6.SlotItemEffectModel(),
                _nha = new _nh6.SlotItemEffectModel();
            if (277 == _nh7.ship_id || 278 == _nh7.ship_id ? (_nha.houg = 1, _nha.tyku = 1, _nha.kaih = 1) : 594 != _nh7.ship_id && 599 != _nh7.ship_id && 610 != _nh7.ship_id && 646 != _nh7.ship_id && 698 != _nh7.ship_id || (_nha.houg = 2, _nha.tyku = 2, _nha.kaih = 1), !_nha.exists()) return _nh9;
            var _nhb = _nh7.get_slotnums(337);
            return _nh9 = _nha.multiply(_nhb);
        };
    },
    63406: (_nhc, _nhd, _nhe) => {
        'use strict';
        var _nhf = null;
        defineModule(_nhd);
        Object.defineProperty(_nhd, '__esModule', {
            'value': true
        }), _nhd.getSlot338PersonalEffect = void 0;
        var _nhg = _nhe(74496);
        _nhd.getSlot338PersonalEffect = function(_nhh) {
            var _nhi = null,
                _nhj = new _nhg.SlotItemEffectModel(),
                _nhk = new _nhg.SlotItemEffectModel();
            if (277 == _nhh.ship_id || 278 == _nhh.ship_id ? (_nhk.houg = 1, _nhk.tyku = 1, _nhk.kaih = 2) : 594 == _nhh.ship_id || 646 == _nhh.ship_id || 698 == _nhh.ship_id ? (_nhk.houg = 1, _nhk.tyku = 2, _nhk.kaih = 3) : 599 != _nhh.ship_id && 610 != _nhh.ship_id || (_nhk.houg = 4, _nhk.tyku = 3, _nhk.kaih = 4), !_nhk.exists()) return _nhj;
            var _nhl = _nhh.get_slotnums(338);
            return _nhj = _nhk.multiply(_nhl);
        };
    },
    66373: (_nhm, _nhn, _nho) => {
        'use strict';
        var _nhp = null;
        defineModule(_nhn);
        Object.defineProperty(_nhn, '__esModule', {
            'value': true
        }), _nhn.getSlot339PersonalEffect = void 0;
        var _nhq = _nho(74496);
        _nhn.getSlot339PersonalEffect = function(_nhr) {
            var _nhs = null,
                _nht = new _nhq.SlotItemEffectModel(),
                _nhu = new _nhq.SlotItemEffectModel();
            if (277 == _nhr.ship_id || 278 == _nhr.ship_id ? (_nhu.houg = 1, _nhu.tyku = 2, _nhu.kaih = 2) : 594 == _nhr.ship_id || 646 == _nhr.ship_id || 698 == _nhr.ship_id ? (_nhu.houg = 1, _nhu.tyku = 3, _nhu.kaih = 4) : 599 != _nhr.ship_id && 610 != _nhr.ship_id || (_nhu.houg = 6, _nhu.tyku = 4, _nhu.kaih = 5), !_nhu.exists()) return _nht;
            var _nhv = _nhr.get_slotnums(339);
            return _nht = _nhu.multiply(_nhv);
        };
    },
    19707: (_nhw, _nhx, _nhy) => {
        'use strict';
        var _nhz = null;
        defineModule(_nhx);
        Object.defineProperty(_nhx, '__esModule', {
            'value': true
        }), _nhx.getSlot340PersonalEffect = void 0;
        var _ni0 = _nhy(74496);
        _nhx.getSlot340PersonalEffect = function(_ni1) {
            var _ni2 = null,
                _ni3 = new _ni0.SlotItemEffectModel(),
                _ni4 = new _ni0.SlotItemEffectModel();
            if ('ガリバルディ' != _ni1.yomi && 'アブルッツィ' != _ni1.yomi || (_ni4.houg = 1, _ni4.tyku = 1, _ni4.kaih = 1), !_ni4.exists()) return _ni3;
            var _ni5 = _ni1.get_slotnums(340);
            return _ni3 = _ni4.multiply(_ni5);
        };
    },
    63978: (_ni6, _ni7, _ni8) => {
        'use strict';
        var _ni9 = null;
        defineModule(_ni7);
        Object.defineProperty(_ni7, '__esModule', {
            'value': true
        }), _ni7.getSlot341PersonalEffect = void 0;
        var _nia = _ni8(74496);
        _ni7.getSlot341PersonalEffect = function(_nib) {
            var _nic = null,
                _nid = new _nia.SlotItemEffectModel(),
                _nie = new _nia.SlotItemEffectModel();
            if ('ガリバルディ' == _nib.yomi || 'アブルッツィ' == _nib.yomi ? (_nie.houg = 2, _nie.tyku = 1, _nie.kaih = 1) : 'ゴトランド' == _nib.yomi && (_nie.houg = 1, _nie.tyku = 1, _nie.kaih = 1), !_nie.exists()) return _nid;
            var _nif = _nib.get_slotnums(341);
            return _nid = _nie.multiply(_nif);
        };
    },
    92382: (_nig, _nih, _nii) => {
        'use strict';
        var _nij = null;
        defineModule(_nih);
        Object.defineProperty(_nih, '__esModule', {
            'value': true
        }), _nih.getSlot342PersonalEffect = void 0;
        var _nik = _nii(74496);
        _nih.getSlot342PersonalEffect = function(_nil) {
            var _nim = null,
                _nin = new _nik.SlotItemEffectModel(),
                _nio = new _nik.SlotItemEffectModel();
            if (277 == _nil.ship_id || 278 == _nil.ship_id || 461 == _nil.ship_id || 466 == _nil.ship_id || 462 == _nil.ship_id || 467 == _nil.ship_id ? _nio.houg = 1 : 594 == _nil.ship_id || 646 == _nil.ship_id || 698 == _nil.ship_id ? (_nio.houg = 2, _nio.tyku = 1, _nio.kaih = 1) : 599 != _nil.ship_id && 610 != _nil.ship_id || (_nio.houg = 3, _nio.tyku = 2, _nio.kaih = 2), !_nio.exists()) return _nin;
            var _nip = _nil.get_slotnums(342);
            return _nin = _nio.multiply(_nip);
        };
    },
    78415: (_niq, _nir, _nis) => {
        'use strict';
        var _nit = null;
        defineModule(_nir);
        Object.defineProperty(_nir, '__esModule', {
            'value': true
        }), _nir.getSlot343PersonalEffect = void 0;
        var _niu = _nis(74496);
        _nir.getSlot343PersonalEffect = function(_niv) {
            var _niw = null,
                _nix = new _niu.SlotItemEffectModel(),
                _niy = new _niu.SlotItemEffectModel();
            if (277 == _niv.ship_id || 278 == _niv.ship_id ? _niy.houg = 2 : 461 == _niv.ship_id || 466 == _niv.ship_id || 462 == _niv.ship_id || 467 == _niv.ship_id ? _niy.houg = 1 : 594 == _niv.ship_id || 646 == _niv.ship_id || 698 == _niv.ship_id ? (_niy.houg = 3, _niy.tyku = 2, _niy.kaih = 1) : 599 != _niv.ship_id && 610 != _niv.ship_id || (_niy.houg = 5, _niy.tyku = 3, _niy.kaih = 3), !_niy.exists()) return _nix;
            var _niz = _niv.get_slotnums(343);
            return _nix = _niy.multiply(_niz);
        };
    },
    23090: (_nj0, _nj1, _nj2) => {
        'use strict';
        var _nj3 = null;
        defineModule(_nj1);
        Object.defineProperty(_nj1, '__esModule', {
            'value': true
        }), _nj1.getSlot344PersonalEffect = void 0;
        var _nj4 = _nj2(74496);
        _nj1.getSlot344PersonalEffect = function(_nj5) {
            var _nj6 = null,
                _nj7 = new _nj4.SlotItemEffectModel(),
                _nj8 = new _nj4.SlotItemEffectModel();
            if (599 == _nj5.ship_id || 610 == _nj5.ship_id ? _nj8.houg = 3 : 555 == _nj5.ship_id || 560 == _nj5.ship_id ? (_nj8.houg = 2, _nj8.tais = 2) : 318 == _nj5.ship_id ? (_nj8.houg = 4, _nj8.tais = 1) : 282 == _nj5.ship_id ? (_nj8.houg = 2, _nj8.tais = 1) : 888 == _nj5.ship_id ? (_nj8.houg = 4, _nj8.tais = 2) : 883 == _nj5.ship_id && (_nj8.houg = 5, _nj8.tais = 2), !_nj8.exists()) return _nj7;
            var _nj9 = _nj5.get_slotnums(344);
            return _nj7 = _nj8.multiply(_nj9);
        };
    },
    18776: (_nja, _njb, _njc) => {
        'use strict';
        var _njd = null;
        defineModule(_njb);
        Object.defineProperty(_njb, '__esModule', {
            'value': true
        }), _njb.getSlot345PersonalEffect = void 0;
        var _nje = _njc(74496);
        _njb.getSlot345PersonalEffect = function(_njf) {
            var _njg = null,
                _njh = new _nje.SlotItemEffectModel(),
                _nji = new _nje.SlotItemEffectModel();
            if (599 == _njf.ship_id || 610 == _njf.ship_id ? (_nji.houg = 3, _nji.kaih = 1) : 555 == _njf.ship_id || 560 == _njf.ship_id ? (_nji.houg = 3, _nji.tais = 2, _nji.kaih = 2) : 318 == _njf.ship_id ? (_nji.houg = 5, _nji.tais = 1, _nji.kaih = 2) : 282 == _njf.ship_id ? (_nji.houg = 3, _nji.tais = 1, _nji.kaih = 1) : 888 == _njf.ship_id ? (_nji.houg = 4, _nji.tais = 2, _nji.kaih = 2) : 883 == _njf.ship_id && (_nji.houg = 5, _nji.tais = 2, _nji.kaih = 3), !_nji.exists()) return _njh;
            var _njj = _njf.get_slotnums(345);
            return _njh = _nji.multiply(_njj);
        };
    },
    89058: (_njk, _njl, _njm) => {
        'use strict';
        var _njn = null;
        defineModule(_njl);
        Object.defineProperty(_njl, '__esModule', {
            'value': true
        }), _njl.getSlot346PersonalEffect = void 0;
        var _njo = _njm(74496);
        _njl.getSlot346PersonalEffect = function(_njp) {
            var _njq = null,
                _njr = new _njo.SlotItemEffectModel();
            return 'やましおまる' == _njp.yomi && (_njr.kaih += 1, _njr.tais += 1), _njr;
        };
    },
    84372: (_njs, _njt, _nju) => {
        'use strict';
        var _njv = null;
        defineModule(_njt);
        Object.defineProperty(_njt, '__esModule', {
            'value': true
        }), _njt.getSlot347PersonalEffect = void 0;
        var _njw = _nju(74496);
        _njt.getSlot347PersonalEffect = function(_njx) {
            var _njy = null,
                _njz = new _njw.SlotItemEffectModel();
            return 'やましおまる' == _njx.yomi && (_njz.kaih += 2, _njz.tais += 2), _njz;
        };
    },
    39656: (_nk0, _nk1, _nk2) => {
        'use strict';
        var _nk3 = null;
        defineModule(_nk1);
        Object.defineProperty(_nk1, '__esModule', {
            'value': true
        }), _nk1.getSlot356_357PersonalEffect = void 0;
        var _nk4 = _nk2(74496);
        _nk1.getSlot356_357PersonalEffect = function(_nk5) {
            var _nk6 = null,
                _nk7 = new _nk4.SlotItemEffectModel(),
                _nk8 = new _nk4.SlotItemEffectModel();
            if (95 == _nk5.ctype ? _nk8.houg = 2 : 9 == _nk5.ctype && (_nk8.houg = 1), !_nk8.exists()) return _nk7;
            var _nk9 = _nk5.get_slotnums(356) + _nk5.get_slotnums(357);
            return _nk7 = _nk8.multiply(_nk9);
        };
    },
    66039: (_nka, _nkb, _nkc) => {
        'use strict';
        var _nkd = null;
        defineModule(_nkb);
        Object.defineProperty(_nkb, '__esModule', {
            'value': true
        }), _nkb.getSlot358PersonalEffect = void 0;
        var _nke = _nkc(74496);
        _nkb.getSlot358PersonalEffect = function(_nkf) {
            var _nkg = null,
                _nkh = new _nke.SlotItemEffectModel(),
                _nki = new _nke.SlotItemEffectModel();
            if ('アメリカ' != _nkf.getCountryName() && 67 != _nkf.ctype && 78 != _nkf.ctype && 82 != _nkf.ctype && 88 != _nkf.ctype && 108 != _nkf.ctype && 112 != _nkf.ctype) return _nkh;
            _nki.houg += 1, _nki.kaih += 1, _nki.tyku += 1, 95 == _nkf.ctype && (_nki.houg += 1, _nki.kaih += 2, _nki.tyku += 2);
            var _nkj = _nkf.get_slotnums(358);
            return _nkh = _nki.multiply(_nkj);
        };
    },
    64679: (_nkk, _nkl, _nkm) => {
        'use strict';
        var _nkn = null;
        defineModule(_nkl);
        Object.defineProperty(_nkl, '__esModule', {
            'value': true
        }), _nkl.getSlot359PersonalEffect = void 0;
        var _nko = _nkm(74496);
        _nkl.getSlot359PersonalEffect = function(_nkp) {
            var _nkq = null,
                _nkr = new _nko.SlotItemEffectModel(),
                _nks = new _nko.SlotItemEffectModel();
            if ('パース' == _nkp.yomi ? (_nks.houg = 2, _nks.tyku = 2, _nks.kaih = 1) : 'ゆうばり' == _nkp.yomi && (_nks.houg = 1, _nks.tyku = 1, _nks.kaih = 1), 622 != _nkp.ship_id && 623 != _nkp.ship_id && 624 != _nkp.ship_id || (_nks.houg += 1, _nks.tyku += 1), !_nks.exists()) return _nkr;
            var _nkt = _nkp.get_slotnums(359);
            return _nkr = _nks.multiply(_nkt);
        };
    },
    69954: (_nku, _nkv, _nkw) => {
        'use strict';
        var _nkx = null;
        defineModule(_nkv);
        Object.defineProperty(_nkv, '__esModule', {
            'value': true
        }), _nkv.getSlot35PersonalEffect = void 0;
        var _nky = _nkw(74496);
        _nkv.getSlot35PersonalEffect = function(_nkz) {
            var _nl0 = null,
                _nl1 = new _nky.SlotItemEffectModel(),
                _nl2 = new _nky.SlotItemEffectModel();
            return 149 == _nkz.ship_id || 591 == _nkz.ship_id || 592 == _nkz.ship_id ? (_nl2.houg += 1, _nl2.tyku += 1) : 150 == _nkz.ship_id ? _nl2.tyku += 1 : 151 == _nkz.ship_id || 593 == _nkz.ship_id || 954 == _nkz.ship_id ? (_nl2.tyku += 1, _nl2.kaih += 1) : 152 == _nkz.ship_id && (_nl2.houg += 1), _nl2.exists() ? _nl1 = _nl2.multiply(1) : _nl1;
        };
    },
    95953: (_nl3, _nl4, _nl5) => {
        'use strict';
        var _nl6 = null;
        defineModule(_nl4);
        Object.defineProperty(_nl4, '__esModule', {
            'value': true
        }), _nl4.getSlot360_361PersonalEffect = void 0;
        var _nl7 = _nl5(74496);
        _nl4.getSlot360_361PersonalEffect = function(_nl8) {
            var _nl9 = null,
                _nla = new _nl7.SlotItemEffectModel(),
                _nlb = new _nl7.SlotItemEffectModel();
            if ('デ・ロイテル' == _nl8.yomi ? (_nlb.houg = 2, _nlb.tyku = 2, _nlb.kaih = 1) : 'ゴトランド' == _nl8.yomi && (_nlb.houg = 2, _nlb.tyku = 1, _nlb.kaih = 1), 41 == _nl8.ctype && (_nlb.houg = 1, _nlb.tyku = 1), !_nlb.exists()) return _nla;
            var _nlc = _nl8.get_slotnums(360) + _nl8.get_slotnums(361);
            return _nla = _nlb.multiply(_nlc);
        };
    },
    86384: (_nld, _nle, _nlf) => {
        'use strict';
        var _nlg = null;
        defineModule(_nle);
        Object.defineProperty(_nle, '__esModule', {
            'value': true
        }), _nle.getSlot362_363PersonalEffect = void 0;
        var _nlh = _nlf(74496);
        _nle.getSlot362_363PersonalEffect = function(_nli) {
            var _nlj = null,
                _nlk = new _nlh.SlotItemEffectModel(),
                _nll = new _nlh.SlotItemEffectModel(),
                _nlm = false;
            if (99 == _nli.ctype ? (_nll.houg = 1, _nll.tyku = 2, _nll.kaih = 1, _nlm = true) : 34 == _nli.ctype || 21 == _nli.ctype ? (_nll.houg = -3, _nll.tyku = -3, _nll.kaih = -8, _nlm = true) : 4 == _nli.ctype || 20 == _nli.ctype || 16 == _nli.ctype ? (_nll.houg = -3, _nll.tyku = -2, _nll.kaih = -6, _nlm = true) : 89 == _nli.ctype || 56 == _nli.ctype ? (_nll.houg = -2, _nll.tyku = -1, _nll.kaih = -4, _nlm = true) : 52 != _nli.ctype && 41 != _nli.ctype && 98 != _nli.ctype || (_nll.tyku = -1, _nll.kaih = -2, _nlm = true), 'アメリカ' == _nli.getCountryName() && (_nll.tyku += 1, _nll.kaih += 1, _nlm = true), 0 == _nlm) return _nlk;
            var _nln = _nli.get_slotnums(362) + _nli.get_slotnums(363);
            return _nlk = _nll.multiply(_nln);
        };
    },
    65345: (_nlo, _nlp, _nlq) => {
        'use strict';
        var _nlr = null;
        defineModule(_nlp);
        Object.defineProperty(_nlp, '__esModule', {
            'value': true
        }), _nlp.getSlot364PersonalEffect = void 0;
        var _nls = _nlq(74496);
        _nlp.getSlot364PersonalEffect = function(_nlt) {
            var _nlu = null;
            new _nls.SlotItemEffectModel();
            var _nlv = new _nls.SlotItemEffectModel();
            623 == _nlt.ship_id || 586 == _nlt.ship_id || 119 == _nlt.ship_id || 118 == _nlt.ship_id || 657 == _nlt.ship_id || 506 == _nlt.ship_id || 668 == _nlt.ship_id || 507 == _nlt.ship_id ? (_nlv.raig = 1, _nlv.kaih = -2, 119 == _nlt.ship_id ? _nlv.raig += 1 : 507 == _nlt.ship_id ? _nlv.raig += 2 : 623 == _nlt.ship_id && (_nlv.houg += 1, _nlv.raig += 3)) : (_nlv.houg = -1, _nlv.kaih = -7);
            var _nlw = _nlt.get_slotnums(364);
            return _nlv.multiply(_nlw);
        };
    },
    46514: (_nlx, _nly, _nlz) => {
        'use strict';
        var _nm0 = null;
        defineModule(_nly);
        Object.defineProperty(_nly, '__esModule', {
            'value': true
        }), _nly.getSlot365PersonalEffect = void 0;
        var _nm1 = _nlz(74496);
        _nly.getSlot365PersonalEffect = function(_nm2) {
            var _nm3 = null,
                _nm4 = new _nm1.SlotItemEffectModel(),
                _nm5 = new _nm1.SlotItemEffectModel(),
                _nm6 = false;
            return 37 != _nm2.ctype && 19 != _nm2.ctype && 2 != _nm2.ctype && 26 != _nm2.ctype && 6 != _nm2.ctype || (_nm5.houg += 1, _nm6 = true), 136 != _nm2.ship_id && 148 != _nm2.ship_id && 546 != _nm2.ship_id && 541 != _nm2.ship_id && 573 != _nm2.ship_id && 911 != _nm2.ship_id && 916 != _nm2.ship_id && 593 != _nm2.ship_id || (_nm5.houg += 1, _nm6 = true), 591 != _nm2.ship_id && 592 != _nm2.ship_id && 954 != _nm2.ship_id || (_nm5.houg += 2, _nm6 = true), 0 == _nm6 ? _nm4 : _nm4 = _nm5.multiply(1);
        };
    },
    81976: (_nm7, _nm8, _nm9) => {
        'use strict';
        var _nma = null;
        defineModule(_nm8);
        Object.defineProperty(_nm8, '__esModule', {
            'value': true
        }), _nm8.getSlot367PersonalEffect = void 0;
        var _nmb = _nm9(74496);
        _nm8.getSlot367PersonalEffect = function(_nmc) {
            var _nmd = null,
                _nme = new _nmb.SlotItemEffectModel(),
                _nmf = new _nmb.SlotItemEffectModel(),
                _nmg = false;
            if ('ゴトランド' == _nmc.yomi && (_nmf.houg += 2, _nmf.tais += 1, _nmf.kaih += 1, _nmf.saku += 1, _nmg = true), 70 == _nmc.ctype ? (_nmf.houg += 1, _nmf.tais += 1, _nmf.kaih += 1, _nmf.saku += 1, _nmg = true) : 72 == _nmc.ctype || 62 == _nmc.ctype ? (_nmf.houg += 1, _nmf.kaih += 1, _nmf.saku += 1, _nmg = true) : 67 != _nmc.ctype && 78 != _nmc.ctype && 82 != _nmc.ctype && 88 != _nmc.ctype && 108 != _nmc.ctype && 112 != _nmc.ctype || (_nmf.houg += 2, _nmf.kaih += 2, _nmf.saku += 2, _nmg = true), 0 == _nmg) return _nme;
            var _nmh = _nmc.get_slotnums(367);
            return _nme = _nmf.multiply(_nmh);
        };
    },
    89331: (_nmi, _nmj, _nmk) => {
        'use strict';
        var _nml = null;
        defineModule(_nmj);
        Object.defineProperty(_nmj, '__esModule', {
            'value': true
        }), _nmj.getSlot368PersonalEffect = void 0;
        var _nmm = _nmk(74496);
        _nmj.getSlot368PersonalEffect = function(_nmn) {
            var _nmo = null,
                _nmp = new _nmm.SlotItemEffectModel(),
                _nmq = new _nmm.SlotItemEffectModel(),
                _nmr = false;
            if ('ゴトランド' == _nmn.yomi && (_nmq.houg = 4, _nmq.tais = 3, _nmq.kaih = 2, _nmq.saku = 3, _nmr = true, 630 == _nmn.ship_id && (_nmp.houg += 2, _nmp.raig += 2, _nmp.kaih += 1, _nmp.saku += 1)), 70 == _nmn.ctype ? (_nmq.houg = 2, _nmq.tais = 3, _nmq.kaih = 1, _nmq.saku = 2, _nmr = true) : 72 == _nmn.ctype || 62 == _nmn.ctype ? (_nmq.houg += 1, _nmq.tais += 2, _nmq.kaih += 1, _nmq.saku += 2, _nmr = true) : 67 != _nmn.ctype && 78 != _nmn.ctype && 82 != _nmn.ctype && 88 != _nmn.ctype && 108 != _nmn.ctype && 112 != _nmn.ctype || (_nmq.houg += 2, _nmq.tais += 2, _nmq.kaih += 2, _nmq.saku += 2, _nmr = true), 0 == _nmr) return _nmp;
            var _nms = _nmn.get_slotnums(368);
            return _nmp.add(_nmq.multiply(_nms)), _nmp;
        };
    },
    73973: (_nmt, _nmu, _nmv) => {
        'use strict';
        var _nmw = null;
        defineModule(_nmu);
        Object.defineProperty(_nmu, '__esModule', {
            'value': true
        }), _nmu.getSlot369PersonalEffect = void 0;
        var _nmx = _nmv(74496);
        _nmu.getSlot369PersonalEffect = function(_nmy) {
            var _nmz = null,
                _nn0 = new _nmx.SlotItemEffectModel(),
                _nn1 = new _nmx.SlotItemEffectModel(),
                _nn2 = false;
            if ('ゴトランド' == _nmy.yomi && (_nn1.houg = 5, _nn1.tais = 4, _nn1.kaih = 4, _nn1.saku = 3, _nn2 = true, 630 == _nmy.ship_id && (_nn0.houg += 3, _nn0.raig += 3, _nn0.kaih += 2, _nn0.saku += 2)), 70 == _nmy.ctype ? (_nn1.houg += 3, _nn1.tais += 3, _nn1.kaih += 2, _nn1.saku += 3, _nn2 = true) : 72 == _nmy.ctype || 62 == _nmy.ctype ? (_nn1.houg += 2, _nn1.tais += 2, _nn1.kaih += 1, _nn1.saku += 2, _nn2 = true) : 67 != _nmy.ctype && 78 != _nmy.ctype && 82 != _nmy.ctype && 88 != _nmy.ctype && 108 != _nmy.ctype && 112 != _nmy.ctype || (_nn1.houg += 2, _nn1.tais += 2, _nn1.kaih += 2, _nn1.saku += 2, _nn2 = true), 0 == _nn2) return _nn0;
            var _nn3 = _nmy.get_slotnums(369);
            return _nn0.add(_nn1.multiply(_nn3)), _nn0;
        };
    },
    21178: (_nn4, _nn5, _nn6) => {
        'use strict';
        var _nn7 = null;
        defineModule(_nn5);
        Object.defineProperty(_nn5, '__esModule', {
            'value': true
        }), _nn5.getSlot370PersonalEffect = void 0;
        var _nn8 = _nn6(74496);
        _nn5.getSlot370PersonalEffect = function(_nn9) {
            var _nna = null,
                _nnb = new _nn8.SlotItemEffectModel(),
                _nnc = new _nn8.SlotItemEffectModel(),
                _nnd = false;
            if ('ゴトランド' == _nn9.yomi && (_nnc.houg = 1, _nnc.tais = 3, _nnc.kaih = 1, _nnc.saku = 2, _nnd = true), 70 == _nn9.ctype ? (_nnc.houg += 1, _nnc.tais += 3, _nnc.kaih += 1, _nnc.saku += 1, _nnd = true) : 72 == _nn9.ctype || 62 == _nn9.ctype ? (_nnc.houg += 1, _nnc.tais += 2, _nnc.kaih += 1, _nnc.saku += 1, _nnd = true) : 67 != _nn9.ctype && 78 != _nn9.ctype && 82 != _nn9.ctype && 88 != _nn9.ctype && 108 != _nn9.ctype && 112 != _nn9.ctype || (_nnc.houg += 2, _nnc.tais += 3, _nnc.kaih += 2, _nnc.saku += 2, _nnd = true, 'ウォースパイト' == _nn9.yomi && (_nnb.houg += 4, _nnb.kaih += 1, _nnb.saku += 1)), 0 == _nnd) return _nnb;
            var _nne = _nn9.get_slotnums(370);
            return _nnb.add(_nnc.multiply(_nne)), _nnb;
        };
    },
    5079: (_nnf, _nng, _nnh) => {
        'use strict';
        var _nni = null;
        defineModule(_nng);
        Object.defineProperty(_nng, '__esModule', {
            'value': true
        }), _nng.getSlot371PersonalEffect = void 0;
        var _nnj = _nnh(74496);
        _nng.getSlot371PersonalEffect = function(_nnk) {
            var _nnl = null,
                _nnm = new _nnj.SlotItemEffectModel(),
                _nnn = new _nnj.SlotItemEffectModel(),
                _nno = false;
            if ('ゴトランド' == _nnk.yomi && (_nnn.houg = 4, _nnn.tais = 2, _nnn.kaih = 3, _nnn.saku = 6, _nno = true, 630 == _nnk.ship_id && (_nnm.houg += 2, _nnm.kaih += 2, _nnm.saku += 3)), 70 == _nnk.ctype ? (_nnn.houg += 2, _nnn.tais += 1, _nnn.kaih += 2, _nnn.saku += 4, _nno = true) : 79 == _nnk.ctype ? (_nnn.houg += 2, _nnn.kaih += 1, _nnn.saku += 3, _nno = true) : 67 != _nnk.ctype && 78 != _nnk.ctype && 82 != _nnk.ctype && 88 != _nnk.ctype && 108 != _nnk.ctype && 112 != _nnk.ctype || (_nnn.houg += 3, _nnn.tais += 1, _nnn.kaih += 2, _nnn.saku += 3, _nno = true, 88 == _nnk.ctype && (_nnm.houg += 3, _nnm.kaih += 2, _nnm.saku += 2)), 0 == _nno) return _nnm;
            var _nnp = _nnk.get_slotnums(371);
            return _nnm.add(_nnn.multiply(_nnp)), _nnm;
        };
    },
    95014: (_nnq, _nnr, _nns) => {
        'use strict';
        var _nnt = null;
        defineModule(_nnr);
        Object.defineProperty(_nnr, '__esModule', {
            'value': true
        }), _nnr.getSlot372PersonalEffect = void 0;
        var _nnu = _nns(74496);
        _nnr.getSlot372PersonalEffect = function(_nnv) {
            var _nnw = null,
                _nnx = new _nnu.SlotItemEffectModel(),
                _nny = false,
                _nnz = new _nnu.SlotItemEffectModel();
            if ('しょうかく' == _nnv.yomi || 'ずいかく' == _nnv.yomi || 'たいほう' == _nnv.yomi ? (_nnz.houg += 1, _nny = true, _nnx.raig += 1) : 'じゅんよう' != _nnv.yomi && 'ひよう' != _nnv.yomi || (_nnz.houg += 1, _nny = true), 108 == _nnv.ship_id || 109 == _nnv.ship_id || 291 == _nnv.ship_id || 292 == _nnv.ship_id || 296 == _nnv.ship_id || 297 == _nnv.ship_id ? (_nnz.houg += 1, _nny = true) : 116 == _nnv.ship_id || 74 == _nnv.ship_id || 117 == _nnv.ship_id || 282 == _nnv.ship_id || 185 == _nnv.ship_id ? (_nnz.tais += 1, _nny = true) : 560 == _nnv.ship_id || 555 == _nnv.ship_id || 318 == _nnv.ship_id ? (_nnz.tais += 1, _nny = true, _nnx.raig += 1) : 508 == _nnv.ship_id || 509 == _nnv.ship_id ? (_nnz.houg += 1, _nny = true) : 883 != _nnv.ship_id && 888 != _nnv.ship_id || (_nnz.houg += 2, _nnz.tais += 1, _nny = true, _nnx.raig += 2), 0 == _nny) return _nnx;
            var _no0 = _nnv.get_slotnums(372);
            return _nnx.add(_nnz.multiply(_no0)), _nnx;
        };
    },
    53099: (_no1, _no2, _no3) => {
        'use strict';
        var _no4 = null;
        defineModule(_no2);
        Object.defineProperty(_no2, '__esModule', {
            'value': true
        }), _no2.getSlot373PersonalEffect = void 0;
        var _no5 = _no3(74496);
        _no2.getSlot373PersonalEffect = function(_no6) {
            var _no7 = null,
                _no8 = new _no5.SlotItemEffectModel(),
                _no9 = new _no5.SlotItemEffectModel(),
                _noa = false;
            if ('しょうかく' == _no6.yomi ? (_no9.houg += 2, _noa = true, _no8.raig += 2, _no8.kaih += 2) : 'ずいかく' == _no6.yomi ? (_no9.houg += 1, _noa = true, _no8.raig += 2, _no8.kaih += 3) : 'たいほう' == _no6.yomi ? (_no9.houg += 1, _noa = true, _no8.raig += 2, _no8.kaih += 2) : 'じゅんよう' != _no6.yomi && 'ひよう' != _no6.yomi || (_no9.houg += 1, _noa = true, _no8.raig += 1, _no8.kaih += 1), 108 == _no6.ship_id || 109 == _no6.ship_id ? (_no9.houg += 1, _noa = true) : 291 == _no6.ship_id || 292 == _no6.ship_id ? (_no9.houg += 1, _noa = true, _no8.raig += 1) : 296 == _no6.ship_id || 297 == _no6.ship_id ? (_no9.houg += 1, _noa = true, _no8.raig += 1, _no8.kaih += 1) : 116 == _no6.ship_id || 74 == _no6.ship_id ? (_no9.tais += 1, _noa = true) : 117 == _no6.ship_id || 282 == _no6.ship_id || 185 == _no6.ship_id ? (_no9.houg += 1, _no9.tais += 1, _noa = true, _no8.raig += 1) : 560 == _no6.ship_id || 555 == _no6.ship_id || 318 == _no6.ship_id ? (_no9.houg += 1, _no9.tais += 2, _noa = true, _no8.raig += 1, _no8.kaih += 1) : 508 == _no6.ship_id || 509 == _no6.ship_id ? (_no9.houg += 1, _noa = true, _no8.raig += 2, _no8.kaih += 2) : 888 == _no6.ship_id ? (_no9.houg += 2, _no9.tais += 2, _noa = true, _no8.raig += 2, _no8.kaih += 2) : 883 == _no6.ship_id && (_no9.houg += 1, _no9.tais += 2, _noa = true, _no8.raig += 3, _no8.kaih += 4), 0 == _noa) return _no8;
            var _nob = _no6.get_slotnums(373);
            return _no8.add(_no9.multiply(_nob)), _no8;
        };
    },
    76201: (_noc, _nod, _noe) => {
        'use strict';
        var _nof = null;
        defineModule(_nod);
        Object.defineProperty(_nod, '__esModule', {
            'value': true
        }), _nod.getSlot374PersonalEffect = void 0;
        var _nog = _noe(74496);
        _nod.getSlot374PersonalEffect = function(_noh) {
            var _noi = null,
                _noj = new _nog.SlotItemEffectModel(),
                _nok = new _nog.SlotItemEffectModel(),
                _nol = false;
            if ('しょうかく' == _noh.yomi ? (_nok.houg += 3, _nol = true, _noj.raig += 3, _noj.kaih += 3) : 'ずいかく' == _noh.yomi ? (_nok.houg += 2, _nol = true, _noj.raig += 3, _noj.kaih += 4) : 'たいほう' == _noh.yomi ? (_nok.houg += 2, _nol = true, _noj.raig += 3, _noj.kaih += 2) : 'じゅんよう' != _noh.yomi && 'ひよう' != _noh.yomi || (_nok.houg += 1, _nol = true, _noj.raig += 2, _noj.kaih += 2), 108 == _noh.ship_id || 109 == _noh.ship_id ? (_nok.houg += 1, _nol = true, _noj.raig += 1) : 291 == _noh.ship_id || 292 == _noh.ship_id ? (_nok.houg += 1, _nok.tais += 1, _nol = true, _noj.raig += 1) : 296 == _noh.ship_id || 297 == _noh.ship_id ? (_nok.houg += 1, _nok.tais += 1, _nol = true, _noj.raig += 1, _noj.kaih += 1) : 116 == _noh.ship_id || 74 == _noh.ship_id ? (_nok.houg += 1, _nok.tais += 1, _nol = true) : 117 == _noh.ship_id || 282 == _noh.ship_id || 185 == _noh.ship_id ? (_nok.houg += 1, _nok.tais += 2, _nol = true, _noj.raig += 1, _noj.kaih += 1) : 560 == _noh.ship_id || 555 == _noh.ship_id || 318 == _noh.ship_id ? (_nok.houg += 1, _nok.tais += 3, _nol = true, _noj.raig += 1, _noj.kaih += 2) : 508 == _noh.ship_id || 509 == _noh.ship_id ? (_nok.houg += 1, _nok.tais += 2, _nol = true, _noj.raig += 2, _noj.kaih += 3) : 888 == _noh.ship_id ? (_nok.houg += 3, _nok.tais += 3, _nol = true, _noj.raig += 2, _noj.kaih += 3) : 883 == _noh.ship_id && (_nok.houg += 2, _nok.tais += 3, _nol = true, _noj.raig += 3, _noj.kaih += 5), 0 == _nol) return _noj;
            var _nom = _noh.get_slotnums(374);
            return _noj.add(_nok.multiply(_nom)), _noj;
        };
    },
    24931: (_non, _noo, _nop) => {
        'use strict';
        var _noq = null;
        defineModule(_noo);
        Object.defineProperty(_noo, '__esModule', {
            'value': true
        }), _noo.getSlot375PersonalEffect = void 0;
        var _nor = _nop(74496);
        _noo.getSlot375PersonalEffect = function(_nos) {
            var _not = null,
                _nou = new _nor.SlotItemEffectModel(),
                _nov = new _nor.SlotItemEffectModel(),
                _now = false;
            if (69 != _nos.ctype && 83 != _nos.ctype && 84 != _nos.ctype && 105 != _nos.ctype && 116 != _nos.ctype && 118 != _nos.ctype || (_nov.tyku += 3, _nov.houg += 3, _nov.kaih += 3, _nov.tais += 3, _now = true), 'かが' == _nos.yomi && (_nov.tyku += 1, _nov.houg += 1, _nov.kaih += 1, _nov.tais += 1, _now = true), 0 == _now) return _nou;
            var _nox = _nos.get_slotnums(375);
            return _nou.add(_nov.multiply(_nox)), _nou;
        };
    },
    60978: (_noy, _noz, _np0) => {
        'use strict';
        var _np1 = null;
        defineModule(_noz);
        Object.defineProperty(_noz, '__esModule', {
            'value': true
        }), _noz.getSlot376PersonalEffect = void 0;
        var _np2 = _np0(74496);
        _noz.getSlot376PersonalEffect = function(_np3) {
            var _np4 = null,
                _np5 = new _np2.SlotItemEffectModel(),
                _np6 = new _np2.SlotItemEffectModel(),
                _np7 = false;
            if ('アメリカ' == _np3.getCountryName() ? (_np6.houg += 2, _np6.raig += 4, _np7 = true) : 67 == _np3.ctype || 78 == _np3.ctype || 82 == _np3.ctype || 88 == _np3.ctype || 108 == _np3.ctype || 112 == _np3.ctype ? (_np6.houg += 1, _np6.raig += 2, _np7 = true) : 96 == _np3.ctype && (_np6.houg += 1, _np6.raig += 1, _np7 = true), 0 == _np7) return _np5;
            var _np8 = _np3.get_slotnums(376);
            return _np5.add(_np6.multiply(_np8)), _np5;
        };
    },
    74312: (_np9, _npa, _npb) => {
        'use strict';
        var _npc = null;
        defineModule(_npa);
        Object.defineProperty(_npa, '__esModule', {
            'value': true
        }), _npa.getSlot377PersonalEffect = void 0;
        var _npd = _npb(74496);
        _npa.getSlot377PersonalEffect = function(_npe) {
            var _npf = null,
                _npg = new _npd.SlotItemEffectModel();
            return 'アメリカ' == _npe.getCountryName() ? (_npg.tais += 2, _npg.kaih += 1, 629 == _npe.ship_id && (_npg.tais += 1, _npg.kaih += 2)) : 67 != _npe.ctype && 78 != _npe.ctype && 82 != _npe.ctype && 88 != _npe.ctype && 108 != _npe.ctype && 112 != _npe.ctype && 96 != _npe.ctype || (_npg.tais += 1, _npg.kaih += 1), 651 != _npe.ship_id && 656 != _npe.ship_id || (_npg.tais += 1, _npg.kaih += 2), _npg;
        };
    },
    54350: (_nph, _npi, _npj) => {
        'use strict';
        var _npk = null;
        defineModule(_npi);
        Object.defineProperty(_npi, '__esModule', {
            'value': true
        }), _npi.getSlot378PersonalEffect = void 0;
        var _npl = _npj(74496);
        _npi.getSlot378PersonalEffect = function(_npm) {
            var _npn = null,
                _npo = new _npl.SlotItemEffectModel();
            return 'アメリカ' == _npm.getCountryName() ? (_npo.tais += 3, _npo.kaih += 1, 629 == _npm.ship_id && (_npo.tais += 1, _npo.kaih += 1)) : 67 == _npm.ctype || 78 == _npm.ctype || 82 == _npm.ctype || 88 == _npm.ctype || 108 == _npm.ctype || 112 == _npm.ctype ? (_npo.tais += 2, _npo.kaih += 1) : 96 == _npm.ctype && (_npo.tais += 1, _npo.kaih += 1), 651 != _npm.ship_id && 656 != _npm.ship_id || (_npo.tais += 1, _npo.kaih += 1), _npo;
        };
    },
    26262: function(_npp, _npq, _npr) {
        'use strict';
        var _nps = null;
        var _npt = this && this.__importDefault || function(_npu) {
            var _npv = null;
            return _npu && _npu.__esModule ? _npu : {
                'default': _npu
            };
        };
        defineModule(_npq);
        Object.defineProperty(_npq, '__esModule', {
            'value': true
        }), _npq.getSlot379PersonalEffect = void 0;
        var _npw = _npr(74496),
            _npx = _npt(_npr(18622));
        _npq.getSlot379PersonalEffect = function(_npy) {
            var _npz = null,
                _nq0 = new _npw.SlotItemEffectModel(),
                _nq1 = false,
                _nq2 = new _npw.SlotItemEffectModel();
            if (1 == _npy.stype ? (_nq2.tyku += 2, _nq2.houg += 1, _nq1 = true) : 21 != _npy.stype && 16 != _npy.stype || (_nq2.tyku += 1, _nq2.houg += 1, _nq1 = true), 66 == _npy.ctype || 28 == _npy.ctype ? (_nq2.houg += 1, _nq2.tyku += 2, _nq1 = true) : 101 == _npy.ctype && (_nq2.tyku += 2, _nq2.houg += 1, _nq0.tyku += 2, _nq0.houg += 2, _nq1 = true), 'ゆら' == _npy.yomi || 'なか' == _npy.yomi || 'きぬ' == _npy.yomi || 'いすず' == _npy.yomi ? (_nq2.houg += 2, _nq1 = true) : 'おおい' != _npy.yomi && 'きたかみ' != _npy.yomi || (_nq2.tyku += 2, _nq2.houg += 2, _nq1 = true), 'ゆら' != _npy.yomi && 'なか' != _npy.yomi && 'きぬ' != _npy.yomi && 'いすず' != _npy.yomi && 'ゆうばり' != _npy.yomi || (_nq2.tais += 1, _nq1 = true), 'てんりゅう' != _npy.yomi && 'たつた' != _npy.yomi && 'ゆうばり' != _npy.yomi || (_nq2.houg += 1, _nq1 = true), 488 == _npy.ship_id ? (_nq2.tyku += 4, _nq1 = true) : 220 == _npy.ship_id ? (_nq2.tyku += 3, _nq1 = true) : 23 == _npy.ship_id ? (_nq2.tyku += 2, _nq1 = true) : 160 == _npy.ship_id || 487 == _npy.ship_id || 141 == _npy.ship_id ? (_nq2.tyku += 3, _nq1 = true) : 224 == _npy.ship_id || 289 == _npy.ship_id || 219 == _npy.ship_id || 56 == _npy.ship_id || 113 == _npy.ship_id || 22 == _npy.ship_id ? (_nq2.tyku += 2, _nq1 = true) : 651 != _npy.ship_id && 656 != _npy.ship_id || (_nq2.tyku += 3, _nq2.houg += 3, 656 == _npy.ship_id && (_nq2.kaih += 3, _nq2.tais += 2), _nq1 = true), 488 != _npy.ship_id && 160 != _npy.ship_id && 487 != _npy.ship_id && 141 != _npy.ship_id || (_nq2.tais += 1, _nq1 = true), 477 != _npy.ship_id && 478 != _npy.ship_id && 624 != _npy.ship_id || (_nq2.tais += 2, _nq1 = true), 477 != _npy.ship_id && 478 != _npy.ship_id && 624 != _npy.ship_id && 622 != _npy.ship_id || (_nq2.tyku += 2, _nq1 = true), 652 != _npy.ship_id && 657 != _npy.ship_id && 547 != _npy.ship_id && 146 != _npy.ship_id || (_nq0.houg += 2), 652 != _npy.ship_id && 657 != _npy.ship_id && 547 != _npy.ship_id && 146 != _npy.ship_id || (_nq0.tyku += 2), _nq1) {
                var _nq3 = _npy.get_slotnums(379);
                _nq0.add(_nq2.multiply(_nq3));
            }
            var _nq4 = new _npw.SlotItemEffectModel(),
                _nq5 = false;
            16 == _npy.stype || 3 == _npy.stype || 4 == _npy.stype || 21 == _npy.stype ? (_nq4.houg += 1, _nq4.kaih += 2, _nq5 = true) : 1 == _npy.stype && (_nq4.houg += 1, _nq4.kaih += 4, _nq5 = true), 66 == _npy.ctype || 28 == _npy.ctype || 21 == _npy.ctype || 34 == _npy.ctype ? (_nq4.houg += 2, _nq4.kaih += 3, _nq5 = true) : 101 == _npy.ctype && (_nq4.houg += 4, _nq4.kaih += 3, _nq5 = true), 488 == _npy.ship_id || 651 == _npy.ship_id || 656 == _npy.ship_id ? (_nq4.houg += 2, _nq4.kaih += 2, _nq5 = true) : 487 == _npy.ship_id || 160 == _npy.ship_id || 141 == _npy.ship_id || 118 == _npy.ship_id || 119 == _npy.ship_id ? (_nq4.houg += 1, _nq4.kaih += 1, _nq5 = true) : 652 != _npy.ship_id && 657 != _npy.ship_id && 547 != _npy.ship_id && 146 != _npy.ship_id || (_nq4.houg += 1, _nq4.kaih += 1, _nq5 = true);
            var _nq6 = new _npw.SlotItemEffectModel(),
                _nq7 = false;
            if (656 == _npy.ship_id && (_nq6.tyku += 3, _nq6.kaih += 2, _nq7 = true), _nq5 || _nq7) {
                for (var _nq8 = 0, _nq9 = 0, _nqa = 0, _nqb = _npy.have_slot_ids(); _nqa < _nqb.length; _nqa++) {
                    var _nqc = _nqb[_nqa],
                        _nqd = _npx.default.model.slot.getMst(_nqc),
                        _nqe = _nqd.equipType;
                    12 != _nqe && 13 != _nqe || (_nqd.sakuteki >= 5 && (_nq8 += _npy.get_slotnums(parseInt(_nqc))), _nqd.taiku >= 2 && (_nq9 += _npy.get_slotnums(parseInt(_nqc))));
                }
                _nq5 && _nq8 > 0 && _nq0.add(_nq4), _nq7 && _nq9 > 0 && _nq0.add(_nq6);
            }
            return _nq0;
        };
    },
    45530: function(_nqf, _nqg, _nqh) {
        'use strict';
        var _nqi = null;
        var _nqj = this && this.__importDefault || function(_nqk) {
            var _nql = null;
            return _nqk && _nqk.__esModule ? _nqk : {
                'default': _nqk
            };
        };
        defineModule(_nqg);
        Object.defineProperty(_nqg, '__esModule', {
            'value': true
        }), _nqg.getSlot380PersonalEffect = void 0;
        var _nqm = _nqh(74496),
            _nqn = _nqj(_nqh(18622));
        _nqg.getSlot380PersonalEffect = function(_nqo) {
            var _nqp = null,
                _nqq = new _nqm.SlotItemEffectModel(),
                _nqr = false,
                _nqs = new _nqm.SlotItemEffectModel();
            if (21 != _nqo.stype && 16 != _nqo.stype || (_nqs.tyku += 2, _nqs.houg += 1, _nqr = true), 101 == _nqo.ctype && (_nqs.tyku += 2, _nqs.houg += 1, _nqr = true, _nqq.tyku += 2, _nqq.houg += 2), 'ゆら' == _nqo.yomi || 'なか' == _nqo.yomi || 'きぬ' == _nqo.yomi || 'いすず' == _nqo.yomi ? (_nqs.houg += 2, _nqr = true) : 'おおい' != _nqo.yomi && 'きたかみ' != _nqo.yomi || (_nqs.tyku += 2, _nqs.houg += 3, _nqr = true), 'ゆら' != _nqo.yomi && 'なか' != _nqo.yomi && 'きぬ' != _nqo.yomi && 'いすず' != _nqo.yomi && 'ゆうばり' != _nqo.yomi || (_nqs.tais += 1, _nqr = true), 'てんりゅう' != _nqo.yomi && 'たつた' != _nqo.yomi && 'ゆうばり' != _nqo.yomi || (_nqs.houg += 1, _nqr = true), 488 == _nqo.ship_id ? (_nqs.tyku += 4, _nqr = true) : 220 == _nqo.ship_id ? (_nqs.tyku += 3, _nqr = true) : 23 == _nqo.ship_id ? (_nqs.tyku += 2, _nqr = true) : 160 == _nqo.ship_id || 487 == _nqo.ship_id || 141 == _nqo.ship_id ? (_nqs.tyku += 3, _nqr = true) : 224 == _nqo.ship_id || 289 == _nqo.ship_id || 219 == _nqo.ship_id || 56 == _nqo.ship_id || 113 == _nqo.ship_id || 22 == _nqo.ship_id ? (_nqs.tyku += 2, _nqr = true) : 651 == _nqo.ship_id || 656 == _nqo.ship_id ? (_nqs.tyku += 3, _nqs.houg += 3, _nqr = true) : 407 != _nqo.ship_id && 665 != _nqo.ship_id || (_nqs.houg += 2, _nqs.tyku += 2, _nqr = true, _nqq.houg += 1, _nqq.tyku += 1, _nqq.kaih += 2), 488 != _nqo.ship_id && 160 != _nqo.ship_id && 487 != _nqo.ship_id && 141 != _nqo.ship_id || (_nqs.tais += 1, _nqr = true), 477 != _nqo.ship_id && 478 != _nqo.ship_id && 624 != _nqo.ship_id || (_nqs.tais += 2, _nqr = true), 477 != _nqo.ship_id && 478 != _nqo.ship_id && 624 != _nqo.ship_id && 622 != _nqo.ship_id || (_nqs.tyku += 2, _nqr = true), 652 != _nqo.ship_id && 657 != _nqo.ship_id || (_nqs.houg += 3, _nqr = true), 547 != _nqo.ship_id && 146 != _nqo.ship_id || (_nqq.houg += 2), 652 != _nqo.ship_id && 657 != _nqo.ship_id && 547 != _nqo.ship_id && 146 != _nqo.ship_id || (_nqq.tyku += 2), _nqr) {
                var _nqt = _nqo.get_slotnums(380);
                _nqq.add(_nqs.multiply(_nqt));
            }
            var _nqu = new _nqm.SlotItemEffectModel(),
                _nqv = false,
                _nqw = new _nqm.SlotItemEffectModel(),
                _nqx = false,
                _nqy = false;
            if (16 != _nqo.stype && 3 != _nqo.stype && 4 != _nqo.stype && 21 != _nqo.stype || (_nqu.houg += 2, _nqu.kaih += 1, _nqv = true), 101 == _nqo.ctype && (_nqu.houg += 4, _nqu.kaih += 3, _nqv = true), 488 != _nqo.ship_id && 487 != _nqo.ship_id && 160 != _nqo.ship_id && 141 != _nqo.ship_id && 118 != _nqo.ship_id && 119 != _nqo.ship_id && 651 != _nqo.ship_id && 656 != _nqo.ship_id || (_nqu.houg += 1, _nqu.kaih += 2, _nqv = true), 652 == _nqo.ship_id || 657 == _nqo.ship_id || 547 == _nqo.ship_id || 146 == _nqo.ship_id ? (_nqu.houg += 1, _nqu.kaih += 3, _nqv = true) : 407 != _nqo.ship_id && 665 != _nqo.ship_id || (_nqy = true, _nqv = true, _nqu.houg += 2, _nqu.kaih += 1, _nqx = true, _nqw.houg += 1, _nqw.tyku += 2, _nqw.kaih += 1), _nqv || _nqy) {
                for (var _nqz = 0, _nr0 = 0, _nr1 = 0, _nr2 = _nqo.have_slot_ids(); _nr1 < _nr2.length; _nr1++) {
                    var _nr3 = _nr2[_nr1],
                        _nr4 = _nqn.default.model.slot.getMst(_nr3),
                        _nr5 = _nr4.equipType;
                    12 == _nr5 || 13 == _nr5 ? _nr4.sakuteki >= 5 && (_nqz += _nqo.get_slotnums(parseInt(_nr3))) : 21 == _nr5 && (_nr0 += _nqo.get_slotnums(parseInt(_nr3)));
                }
                _nqv && _nqz > 0 && _nqq.add(_nqu), _nqx && _nr0 > 0 && _nqq.add(_nqw);
            }
            return _nqq;
        };
    },
    44053: (_nr6, _nr7, _nr8) => {
        'use strict';
        var _nr9 = null;
        defineModule(_nr7);
        Object.defineProperty(_nr7, '__esModule', {
            'value': true
        }), _nr7.getSlot381PersonalEffect = void 0;
        var _nra = _nr8(74496);
        _nr7.getSlot381PersonalEffect = function(_nrb) {
            var _nrc = null,
                _nrd = new _nra.SlotItemEffectModel(),
                _nre = false,
                _nrf = new _nra.SlotItemEffectModel(),
                _nrg = 0;
            if ('アメリカ' == _nrb.getCountryName() && (_nrf.houg += 1, 102 == _nrb.ctype && (_nrf.houg += 1), _nre = true, _nrg = 1), 0 == _nre) return _nrd;
            var _nrh = _nrb.get_slotnums(381);
            if (_nrd.add(_nrf.multiply(_nrh)), 0 == _nrg) return _nrd;
            var _nri = _nrb.get_each_level_nums(381),
                _nrj = 0;
            return _nri.map(function(_nrk, _nrl) {
                _nrl >= 6 && (_nrj += _nrk);
            }), 1 == _nrg && (_nrd.houg += 1 * _nrj), _nrd;
        };
    },
    65441: function(_nrm, _nrn, _nro) {
        'use strict';
        var _nrp = null;
        var _nrq = this && this.__importDefault || function(_nrr) {
            var _nrs = null;
            return _nrr && _nrr.__esModule ? _nrr : {
                'default': _nrr
            };
        };
        defineModule(_nrn);
        Object.defineProperty(_nrn, '__esModule', {
            'value': true
        }), _nrn.getSlot382PersonalEffect = void 0;
        var _nrt = _nro(74496),
            _nru = _nrq(_nro(18622));
        _nrn.getSlot382PersonalEffect = function(_nrv) {
            var _nrw = null,
                _nrx = new _nrt.SlotItemEffectModel(),
                _nry = false,
                _nrz = new _nrt.SlotItemEffectModel(),
                _ns0 = false,
                _ns1 = new _nrt.SlotItemEffectModel(),
                _ns2 = new _nrt.SlotItemEffectModel(),
                _ns3 = 2;
            1 == _nrv.stype && (_nrz.tyku += 2, _nrz.kaih += 2, _nrz.tais += 1, _nry = true, _ns1.houg += 2, _ns1.kaih += 3, _ns2.tyku += 2, _ns2.kaih += 3, _ns0 = true, _ns3 = 1), 66 != _nrv.ctype && 28 != _nrv.ctype && 101 != _nrv.ctype || (_nrz.tyku += 2, _nrz.kaih += 1, _nry = true, _ns1.houg += 1, _ns1.kaih += 2, _ns2.tyku += 2, _ns2.kaih += 2, _ns0 = true, _ns3 = 1), 'ゆら' != _nrv.yomi && 'なか' != _nrv.yomi && 'きぬ' != _nrv.yomi || (_nrz.tyku += 1, _nry = true), 488 == _nrv.ship_id || 220 == _nrv.ship_id ? (_nrz.kaih += 1, _nry = true, 488 == _nrv.ship_id && (_ns1.houg += 1, _ns1.kaih += 1, _ns2.tyku += 2, _ns2.kaih += 2, _ns0 = true, _ns3 = 1)) : 160 == _nrv.ship_id || 224 == _nrv.ship_id ? (_nrz.kaih += 1, _nry = true, 160 == _nrv.ship_id && (_ns1.houg += 1, _ns1.kaih += 1, _ns2.tyku += 2, _ns2.kaih += 2, _ns0 = true)) : 487 == _nrv.ship_id || 289 == _nrv.ship_id ? (_nrz.kaih += 1, _nry = true, 487 == _nrv.ship_id && (_ns1.houg += 1, _ns1.kaih += 1, _ns2.tyku += 2, _ns2.kaih += 2, _ns0 = true)) : 656 == _nrv.ship_id ? (_nrz.tyku += 3, _nrz.kaih += 2, _nry = true, _ns1.houg += 2, _ns1.kaih += 2, _ns2.tyku += 3, _ns2.kaih += 2, _ns0 = true, _ns3 = 1) : 145 != _nrv.ship_id && 961 != _nrv.ship_id || (_ns3 = 1);
            for (var _ns4 = 0, _ns5 = 0, _ns6 = 0, _ns7 = _nrv.have_slot_ids(); _ns6 < _ns7.length; _ns6++) {
                var _ns8 = _ns7[_ns6],
                    _ns9 = _nru.default.model.slot.getMst(_ns8),
                    _nsa = _ns9.equipType;
                12 != _nsa && 13 != _nsa || (_ns9.sakuteki >= 5 && (_ns4 += _nrv.get_slotnums(parseInt(_ns8))), _ns9.taiku >= 2 && (_ns5 += _nrv.get_slotnums(parseInt(_ns8))));
            }
            for (var _nsb = [], _nsc = function(_nsd) {
                    var _nse = null;
                    if (null == _nrv.have_slots_dict[_nsd]) return 'continue';
                    var _nsf = _nrv.get_each_level_nums(_nsd);
                    null == _nsb[_nsd] && (_nsb[_nsd] = []), _nsf.forEach(function(_nsg, _nsh) {
                        var _nsi = null;
                        for (var _nsj = 1; _nsj <= _nrv.SLOT_LEVEL_MAX; _nsj++) null == _nsb[_nsd][_nsj] && (_nsb[_nsd][_nsj] = 0), _nsh >= _nsj && (_nsb[_nsd][_nsj] += _nsg);
                    });
                }, _nsk = 0, _nsl = [509]; _nsk < _nsl.length; _nsk++) {
                _nsc(_nsl[_nsk]);
            }
            var _nsm = 0,
                _nsn = 0,
                _nso = 0,
                _nsp = 0,
                _nsq = 0,
                _nsr = 0;
            null != _nsb[509] && (_nsm = _nsb[509][1], _nsn = _nsb[509][2], _nso = _nsb[509][4], _nsp = _nsb[509][6], _nsq = _nsb[509][8], _nsr = _nsb[509][10], 1 == _ns3 ? (_nsm >= 1 && (_nrx.tyku += 1 * _nsm), _nsn >= 1 && (_nrx.kaih += 2 * _nsn), _nso >= 1 && (_nrx.houg += 1 * _nso), _nsp >= 1 && (_nrx.tyku += 1 * _nsp), _nsq >= 1 && (_nrx.houm += 1 * _nsq), _nsr >= 1 && (_nrx.tyku += 1 * _nsr)) : 2 == _ns3 && (_nsn >= 1 && (_nrx.tyku += 1 * _nsn), _nso >= 1 && (_nrx.kaih += 2 * _nso), _nsp >= 1 && (_nrx.houg += 1 * _nsp), _nsq >= 1 && (_nrx.tyku += 1 * _nsq), _nsr >= 1 && (_nrx.houm += 1 * _nsr)));
            var _nss = _nrv.get_slotnums(509),
                _nst = _nss + _nrv.get_slotnums(382);
            return _nry && _nrx.add(_nrz.multiply(_nst)), 3 != _nrv.stype && 21 != _nrv.stype && 4 != _nrv.stype || _nsn >= 1 && (_ns4 > 0 && (_nrx.houg += 1, _nrx.kaih += 1), _ns5 > 0 && (_nrx.tyku += 2, _nrx.kaih += 1)), 145 == _nrv.ship_id ? _nsn >= 1 && (_ns4 > 0 && (_nrx.houg += 1, _nrx.tyku += 1, _nrx.kaih += 2), _ns5 > 0 && (_nrx.tyku += 4, _nrx.kaih += 2)) : 961 == _nrv.ship_id && _nss > 0 && (_ns4 > 0 && (_nrx.houg += 2, _nrx.tyku += 2, _nrx.kaih += 3), _ns5 > 0 && (_nrx.houg += 1, _nrx.tyku += 5, _nrx.kaih += 3)), _ns0 && _ns4 > 0 && _nrx.add(_ns1), _ns0 && _ns5 > 0 && _nrx.add(_ns2), _nrx;
        };
    },
    33258: (_nsu, _nsv, _nsw) => {
        'use strict';
        var _nsx = null;
        defineModule(_nsv);
        Object.defineProperty(_nsv, '__esModule', {
            'value': true
        }), _nsv.getSlot383PersonalEffect = void 0;
        var _nsy = _nsw(74496);
        _nsv.getSlot383PersonalEffect = function(_nsz) {
            var _nt0 = null,
                _nt1 = new _nsy.SlotItemEffectModel(),
                _nt2 = false,
                _nt3 = new _nsy.SlotItemEffectModel(),
                _nt4 = _nsz.get_each_level_over_nums([383]).slot[383];
            if (44 == _nsz.ctype && (_nt3.raig += 2, _nt2 = true, _nt4[4] > 0 && (_nt1.raig += 1), _nt4[6] > 0 && (_nt1.houm += 1)), 'い58' == _nsz.yomi && (_nt3.raig += 1, _nt2 = true), 636 == _nsz.ship_id ? (_nt3.raig += 3, _nt2 = true) : 607 == _nsz.ship_id && (_nt3.raig += 4, _nt2 = true), _nt4[8] > 0 && (_nt1.raig += 1), _nt4[10] > 0 && (_nt1.houm += 1), 'い58' != _nsz.yomi && 'い47' != _nsz.yomi || _nt4[5] > 0 && (_nt1.houm += 1), 0 == _nt2) return _nt1;
            var _nt5 = _nsz.get_slotnums(383);
            return _nt1.add(_nt3.multiply(_nt5)), _nt1;
        };
    },
    92168: (_nt6, _nt7, _nt8) => {
        'use strict';
        var _nt9 = null;
        defineModule(_nt7);
        Object.defineProperty(_nt7, '__esModule', {
            'value': true
        }), _nt7.getSlot384PersonalEffect = void 0;
        var _nta = _nt8(74496);
        _nt7.getSlot384PersonalEffect = function(_ntb) {
            var _ntc = null,
                _ntd = new _nta.SlotItemEffectModel(),
                _nte = false,
                _ntf = new _nta.SlotItemEffectModel();
            44 == _ntb.ctype && (_ntf.kaih += 3, _nte = true), 'い58' == _ntb.yomi && (_ntf.kaih += 2, _nte = true), 636 == _ntb.ship_id ? (_ntf.kaih += 3, _nte = true) : 607 == _ntb.ship_id && (_ntf.kaih += 4, _nte = true);
            var _ntg = _ntb.get_slotnums(384);
            _nte && _ntd.add(_ntf.multiply(_ntg));
            var _nth = _ntg,
                _nti = _ntb.get_slotnums(213),
                _ntj = _ntb.get_slotnums(214),
                _ntk = _ntb.get_slotnums(383);
            return _nth > 0 && _nti + _ntj + _ntk > 0 && (_ntd.raig += 3, _ntd.kaih += 2), _ntd;
        };
    },
    85975: (_ntl, _ntm, _ntn) => {
        'use strict';
        var _nto = null;
        defineModule(_ntm);
        Object.defineProperty(_ntm, '__esModule', {
            'value': true
        }), _ntm.getSlot385PersonalEffect = void 0;
        var _ntp = _ntn(74496);
        _ntm.getSlot385PersonalEffect = function(_ntq) {
            var _ntr = null,
                _nts = new _ntp.SlotItemEffectModel(),
                _ntt = false,
                _ntu = new _ntp.SlotItemEffectModel(),
                _ntv = 0;
            if ('アメリカ' == _ntq.getCountryName() && (_ntu.houg += 1, 102 == _ntq.ctype || 107 == _ntq.ctype ? (_ntu.houg += 1, _ntu.souk += 1) : 93 == _ntq.ctype && (_ntu.houg += 1), _ntt = true, _ntv = 1), 8 == _ntq.stype && (_ntu.houg += 1, _ntt = true), 0 == _ntt) return _nts;
            var _ntw = _ntq.get_slotnums(385);
            if (_nts.add(_ntu.multiply(_ntw)), 0 == _ntv) return _nts;
            var _ntx = _ntq.get_each_level_nums(385),
                _nty = 0;
            return _ntx.forEach(function(_ntz, _nu0) {
                _nu0 >= 6 && (_nty += _ntz);
            }), 1 == _ntv && (_nts.houg += 1 * _nty, _nts.souk += 1 * _ntx[10]), _nts;
        };
    },
    98467: (_nu1, _nu2, _nu3) => {
        'use strict';
        var _nu4 = null;
        defineModule(_nu2);
        Object.defineProperty(_nu2, '__esModule', {
            'value': true
        }), _nu2.getSlot386PersonalEffect = void 0;
        var _nu5 = _nu3(74496);
        _nu2.getSlot386PersonalEffect = function(_nu6) {
            var _nu7 = null,
                _nu8 = new _nu5.SlotItemEffectModel(),
                _nu9 = false,
                _nua = new _nu5.SlotItemEffectModel(),
                _nub = 0;
            if ('アメリカ' == _nu6.getCountryName() && (_nua.houg += 1, _nu9 = true, _nub = 1), 0 == _nu9) return _nu8;
            var _nuc = _nu6.get_slotnums(386);
            if (_nu8.add(_nua.multiply(_nuc)), 0 == _nub) return _nu8;
            var _nud = _nu6.get_each_level_nums(386),
                _nue = 0,
                _nuf = 0;
            return _nud.forEach(function(_nug, _nuh) {
                _nuh >= 2 && (_nue += _nug), _nuh >= 7 && (_nuf += _nug);
            }), 1 == _nub && (_nu8.houg += 1 * _nue, _nu8.houg += 1 * _nuf), _nu8;
        };
    },
    88348: (_nui, _nuj, _nuk) => {
        'use strict';
        var _nul = null;
        defineModule(_nuj);
        Object.defineProperty(_nuj, '__esModule', {
            'value': true
        }), _nuj.getSlot387PersonalEffect = void 0;
        var _num = _nuk(74496);
        _nuj.getSlot387PersonalEffect = function(_nun) {
            var _nuo = null,
                _nup = new _num.SlotItemEffectModel(),
                _nuq = false,
                _nur = new _num.SlotItemEffectModel(),
                _nus = 0;
            if ('アメリカ' == _nun.getCountryName() && (_nur.houg += 1, _nuq = true, _nus = 1), 0 == _nuq) return _nup;
            var _nut = _nun.get_slotnums(387);
            if (_nup.add(_nur.multiply(_nut)), 0 == _nus) return _nup;
            var _nuu = _nun.get_each_level_nums(387),
                _nuv = 0,
                _nuw = 0;
            return _nuu.forEach(function(_nux, _nuy) {
                _nuy >= 2 && (_nuv += _nux), _nuy >= 7 && (_nuw += _nux);
            }), 1 == _nus && (_nup.houg += 1 * _nuv, _nup.houg += 1 * _nuw), _nup;
        };
    },
    21097: (_nuz, _nv0, _nv1) => {
        'use strict';
        var _nv2 = null;
        defineModule(_nv0);
        Object.defineProperty(_nv0, '__esModule', {
            'value': true
        }), _nv0.getSlot389PersonalEffect = void 0;
        var _nv3 = _nv1(74496);
        _nv0.getSlot389PersonalEffect = function(_nv4) {
            var _nv5 = null,
                _nv6 = new _nv3.SlotItemEffectModel(),
                _nv7 = false,
                _nv8 = new _nv3.SlotItemEffectModel();
            if (594 == _nv4.ship_id || 599 == _nv4.ship_id) _nv8.houg += 2, _nv8.kaih += 2, _nv7 = true;
            else {
                if (698 == _nv4.ship_id || 610 == _nv4.ship_id) _nv8.houg += 3, _nv8.kaih += 2, _nv7 = true;
                else 646 == _nv4.ship_id && (_nv8.houg += 4, _nv8.tais += 4, _nv8.kaih += 3, _nv7 = true, _nv4.get_type3_nums(25) > 0 && (_nv6.houg += 3, _nv6.tais += 6), _nv4.get_slotnums(326) + _nv4.get_slotnums(327) > 0 && (_nv6.houg += 5, _nv6.tais += 4));
            }
            if ('アメリカ' == _nv4.getCountryName() && (_nv8.houg += 2, _nv8.tais += 3, _nv8.kaih += 1, _nv7 = true), 0 == _nv7) return _nv6;
            var _nv9 = _nv4.get_slotnums(389);
            return _nv6.add(_nv8.multiply(_nv9)), _nv6;
        };
    },
    43607: (_nva, _nvb, _nvc) => {
        'use strict';
        var _nvd = null;
        defineModule(_nvb);
        Object.defineProperty(_nvb, '__esModule', {
            'value': true
        }), _nvb.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _nve = _nvc(74496);
        _nvb.getSlot38cmFourBarrelGunPersonalEffect = function(_nvf) {
            var _nvg = null,
                _nvh = new _nve.SlotItemEffectModel(),
                _nvi = _nvf.get_slotnums(245),
                _nvj = _nvf.get_slotnums(246),
                _nvk = _nvf.get_slotnums(468),
                _nvl = _nvi + _nvj + _nvk,
                _nvm = 0,
                _nvn = 0,
                _nvo = new Array();
            if (79 != _nvf.ctype) return _nvh;
            _nvh.houg += 2 * _nvl, _nvh.houm += 1 * _nvl, _nvk >= 1 && (_nvh.houg += 1 * _nvk, _nvn = 1, _nvo.push(468)), _nvm = 1;
            var _nvp = _nvf.get_slotnums(247);
            if (1 == _nvm && _nvp >= 1 && (_nvh.kaih += 2 * _nvp, _nvh.houg += 2 * _nvp, _nvh.houm += 2 * _nvp), 0 == _nvn) return _nvh;
            for (var _nvq = {}, _nvr = {}, _nvs = {}, _nvt = 0, _nvu = _nvo; _nvt < _nvu.length; _nvt++) {
                var _nvv = _nvu[_nvt];
                _nvr[_nvv] = 0, _nvs[_nvv] = 0, _nvq[_nvv] = 0;
                for (var _nvw = 0, _nvx = _nvf.have_slots_dict[_nvv]; _nvw < _nvx.length; _nvw++) {
                    var _nvy = _nvx[_nvw].level;
                    _nvy >= 4 && _nvr[_nvv]++, _nvy >= 8 && _nvs[_nvv]++, _nvy >= 10 && _nvq[_nvv]++;
                }
            }
            if (1 == _nvn && _nvk > 0) {
                var _nvz = _nvr[468],
                    _nw0 = _nvs[468],
                    _nw1 = _nvq[468];
                _nvz >= 1 && (_nvh.houg += 1 * _nvz, _nvh.houm += 1 * _nvz), _nw0 >= 1 && (_nvh.houg += 1 * _nw0, _nvh.houm += 1 * _nw0), _nw1 >= 1 && (_nvh.houm += 1 * _nw1);
            }
            return _nvh;
        };
    },
    37273: (_nw2, _nw3, _nw4) => {
        'use strict';
        var _nw5 = null;
        defineModule(_nw3);
        Object.defineProperty(_nw3, '__esModule', {
            'value': true
        }), _nw3.getSlot390PersonalEffect = void 0;
        var _nw6 = _nw4(74496);
        _nw3.getSlot390PersonalEffect = function(_nw7) {
            var _nw8 = null,
                _nw9 = new _nw6.SlotItemEffectModel(),
                _nwa = false,
                _nwb = new _nw6.SlotItemEffectModel(),
                _nwc = 0;
            if ('アメリカ' == _nw7.getCountryName() && (_nwb.houg += 1, _nwa = true, _nwc = 1), 102 == _nw7.ctype || 107 == _nw7.ctype ? (_nwb.houg += 1, _nwb.souk += 1, _nwa = true) : 93 == _nw7.ctype && (_nwb.houg += 1, _nwa = true), 8 == _nw7.stype && (_nwb.houg += 1, _nwa = true), 0 == _nwa) return _nw9;
            var _nwd = _nw7.get_slotnums(390);
            if (_nw9.add(_nwb.multiply(_nwd)), 0 == _nwc) return _nw9;
            var _nwe = _nw7.get_each_level_nums(390),
                _nwf = 0,
                _nwg = 0;
            return _nwe.forEach(function(_nwh, _nwi) {
                _nwi >= 3 && (_nwf += _nwh), _nwi >= 6 && (_nwg += _nwh);
            }), 1 == _nwc && (_nw9.houg += 1 * _nwf, _nw9.kaih += 1 * _nwg, _nw9.souk += 1 * _nwe[10]), _nw9;
        };
    },
    72694: (_nwj, _nwk, _nwl) => {
        'use strict';
        var _nwm = null;
        defineModule(_nwk);
        Object.defineProperty(_nwk, '__esModule', {
            'value': true
        }), _nwk.getSlot391PersonalEffect = void 0;
        var _nwn = _nwl(74496);
        _nwk.getSlot391PersonalEffect = function(_nwo) {
            var _nwp = null,
                _nwq = new _nwn.SlotItemEffectModel(),
                _nwr = false,
                _nws = new _nwn.SlotItemEffectModel();
            if ('しょうかく' == _nwo.yomi || 'ずいかく' == _nwo.yomi ? (_nws.houg += 1, _nwr = true) : 'じゅんよう' != _nwo.yomi && 'ひよう' != _nwo.yomi || (_nws.houg += 1, _nwr = true), 116 == _nwo.ship_id || 185 == _nwo.ship_id || 282 == _nwo.ship_id ? (_nws.houg += 1, _nwr = true) : 117 == _nwo.ship_id || 318 == _nwo.ship_id || 883 == _nwo.ship_id || 888 == _nwo.ship_id ? (_nws.houg += 1, _nwq.kaih += 1, _nwr = true) : 560 != _nwo.ship_id && 555 != _nwo.ship_id || (_nws.houg += 1, _nws.kaih += 1, _nwr = true), 0 == _nwr) return _nwq;
            var _nwt = _nwo.get_slotnums(391);
            return _nwq.add(_nws.multiply(_nwt)), _nwq;
        };
    },
    62067: (_nwu, _nwv, _nww) => {
        'use strict';
        var _nwx = null;
        defineModule(_nwv);
        Object.defineProperty(_nwv, '__esModule', {
            'value': true
        }), _nwv.getSlot392PersonalEffect = void 0;
        var _nwy = _nww(74496);
        _nwv.getSlot392PersonalEffect = function(_nwz) {
            var _nx0 = null,
                _nx1 = new _nwy.SlotItemEffectModel(),
                _nx2 = false,
                _nx3 = new _nwy.SlotItemEffectModel();
            if ('しょうかく' == _nwz.yomi || 'ずいかく' == _nwz.yomi ? (_nx3.houg += 2, _nx3.kaih += 1, _nx2 = true) : 'じゅんよう' != _nwz.yomi && 'ひよう' != _nwz.yomi || (_nx3.houg += 1, _nx3.kaih += 1, _nx2 = true), 116 == _nwz.ship_id || 185 == _nwz.ship_id || 282 == _nwz.ship_id ? (_nx3.houg += 2, _nx3.kaih += 1, _nx2 = true) : 117 == _nwz.ship_id || 318 == _nwz.ship_id || 883 == _nwz.ship_id || 888 == _nwz.ship_id ? (_nx3.houg += 2, _nx3.kaih += 2, _nx2 = true) : 560 != _nwz.ship_id && 555 != _nwz.ship_id || (_nx3.houg += 3, _nx3.kaih += 2, _nx2 = true), 0 == _nx2) return _nx1;
            var _nx4 = _nwz.get_slotnums(392);
            return _nx1.add(_nx3.multiply(_nx4)), _nx1;
        };
    },
    87817: function(_nx5, _nx6, _nx7) {
        'use strict';
        var _nx8 = null;
        var _nx9 = this && this.__importDefault || function(_nxa) {
            var _nxb = null;
            return _nxa && _nxa.__esModule ? _nxa : {
                'default': _nxa
            };
        };
        defineModule(_nx6);
        Object.defineProperty(_nx6, '__esModule', {
            'value': true
        }), _nx6.getSlot397PersonalEffect = void 0;
        var _nxc = _nx7(74496),
            _nxd = _nx9(_nx7(18622));
        _nx6.getSlot397PersonalEffect = function(_nxe) {
            var _nxf = null,
                _nxg = new _nxc.SlotItemEffectModel(),
                _nxh = false,
                _nxi = new _nxc.SlotItemEffectModel(),
                _nxj = 0,
                _nxk = 0,
                _nxl = false;
            if (651 == _nxe.ship_id ? (_nxi.houg += 5, _nxi.tyku += 2, _nxi.kaih += 1, _nxh = true, _nxl = true, _nxj = 1, _nxk = 1) : 656 == _nxe.ship_id && (_nxi.houg += 3, _nxi.tyku += 1, _nxi.kaih += 1, _nxh = true, _nxl = true, _nxj = 1), 0 == _nxh) return _nxg;
            var _nxm = _nxe.get_slotnums(397);
            _nxg.add(_nxi.multiply(_nxm));
            var _nxn = 0,
                _nxo = _nxe.get_each_level_nums(397),
                _nxp = 0;
            if (_nxl) {
                _nxo.forEach(function(_nxq, _nxr) {
                    _nxr >= 4 && (_nxp += _nxq);
                });
                for (var _nxs = 0, _nxt = _nxe.have_slot_ids(); _nxs < _nxt.length; _nxs++) {
                    var _nxu = _nxt[_nxs],
                        _nxv = _nxd.default.model.slot.getMst(_nxu),
                        _nxw = _nxv.equipType;
                    12 != _nxw && 13 != _nxw || (_nxv.sakuteki >= 5 && (_nxn += _nxe.get_slotnums(parseInt(_nxu))), _nxv.taiku >= 2 && _nxe.get_slotnums(parseInt(_nxu)));
                }
            }
            return 1 == _nxj && _nxn > 0 && (_nxg.houg += 3, _nxg.kaih += 3), 1 == _nxk && (_nxg.houg += 4 * _nxp, _nxg.kaih += 1 * _nxp), _nxg;
        };
    },
    93526: function(_nxx, _nxy, _nxz) {
        'use strict';
        var _ny0 = null;
        var _ny1 = this && this.__importDefault || function(_ny2) {
            var _ny3 = null;
            return _ny2 && _ny2.__esModule ? _ny2 : {
                'default': _ny2
            };
        };
        defineModule(_nxy);
        Object.defineProperty(_nxy, '__esModule', {
            'value': true
        }), _nxy.getSlot398PersonalEffect = void 0;
        var _ny4 = _nxz(74496),
            _ny5 = _ny1(_nxz(18622));
        _nxy.getSlot398PersonalEffect = function(_ny6) {
            var _ny7 = null,
                _ny8 = new _ny4.SlotItemEffectModel(),
                _ny9 = false,
                _nya = new _ny4.SlotItemEffectModel(),
                _nyb = 0,
                _nyc = 0,
                _nyd = false;
            if (651 == _ny6.ship_id ? (_nya.houg += 4, _nya.tyku += 4, _nya.kaih += 2, _ny9 = true, _nyd = true, _nyb = 1, _nyc = 1) : 656 == _ny6.ship_id && (_nya.houg += 3, _nya.tyku += 2, _nya.kaih += 2, _ny9 = true, _nyd = true, _nyb = 1, _nyc = 2), 0 == _ny9) return _ny8;
            var _nye = _ny6.get_slotnums(398);
            _ny8.add(_nya.multiply(_nye));
            var _nyf = 0,
                _nyg = 0,
                _nyh = _ny6.get_each_level_nums(398),
                _nyi = 0;
            if (_nyd) {
                _nyh.forEach(function(_nyj, _nyk) {
                    _nyk >= 4 && (_nyi += _nyj);
                });
                for (var _nyl = 0, _nym = _ny6.have_slot_ids(); _nyl < _nym.length; _nyl++) {
                    var _nyn = _nym[_nyl],
                        _nyo = _ny5.default.model.slot.getMst(_nyn),
                        _nyp = _nyo.equipType;
                    12 != _nyp && 13 != _nyp || (_nyo.sakuteki >= 5 && (_nyf += _ny6.get_slotnums(parseInt(_nyn))), _nyo.taiku >= 2 && (_nyg += _ny6.get_slotnums(parseInt(_nyn))));
                }
            }
            return 1 == _nyb && (_nyf > 0 && (_ny8.houg += 3, _ny8.kaih += 3), _nyg > 0 && (_ny8.tyku += 3, _ny8.kaih += 3)), 1 == _nyc ? (_ny8.houg += 3 * _nyi, _ny8.kaih += 2 * _nyi) : 2 == _nyc && (_ny8.houg += 2 * _nyi, _ny8.kaih += 1 * _nyi), _ny8;
        };
    },
    33084: (_nyq, _nyr, _nys) => {
        'use strict';
        var _nyt = null;
        defineModule(_nyr);
        Object.defineProperty(_nyr, '__esModule', {
            'value': true
        }), _nyr.getSlot399PersonalEffect = void 0;
        var _nyu = _nys(74496);
        _nyr.getSlot399PersonalEffect = function(_nyv) {
            var _nyw = null,
                _nyx = new _nyu.SlotItemEffectModel(),
                _nyy = false,
                _nyz = new _nyu.SlotItemEffectModel(),
                _nz0 = 0;
            if (108 == _nyv.ctype && (_nyz.houg += 1, _nyz.kaih += 2, _nz0 = 1, _nyy = true), 0 == _nyy) return _nyx;
            var _nz1 = _nyv.get_slotnums(399);
            if (_nyx.add(_nyz.multiply(_nz1)), 0 == _nz0) return _nyx;
            var _nz2 = _nyv.get_each_level_nums(399),
                _nz3 = 0,
                _nz4 = 0;
            return _nz2.map(function(_nz5, _nz6) {
                _nz6 >= 3 && (_nz3 += _nz5), _nz6 >= 5 && (_nz4 += _nz5);
            }), 1 == _nz0 && (_nyx.houg += 1 * _nz3, _nyx.houg += 1 * _nz4), _nyx;
        };
    },
    80225: (_nz7, _nz8, _nz9) => {
        'use strict';
        var _nza = null;
        defineModule(_nz8);
        Object.defineProperty(_nz8, '__esModule', {
            'value': true
        }), _nz8.getSlot3_122PersonalEffect = void 0;
        var _nzb = _nz9(74496);
        _nz8.getSlot3_122PersonalEffect = function(_nzc) {
            var _nzd = null,
                _nze = new _nzb.SlotItemEffectModel(),
                _nzf = false,
                _nzg = new _nzb.SlotItemEffectModel();
            if (54 == _nzc.ctype && (_nzg.houg += 1, _nzg.tyku += 2, _nzg.kaih += 1, _nzf = true), 0 == _nzf) return _nze;
            var _nzh = _nzc.get_slotnums(3) + _nzc.get_slotnums(122);
            return _nze.add(_nzg.multiply(_nzh)), _nze;
        };
    },
    97831: (_nzi, _nzj, _nzk) => {
        'use strict';
        var _nzl = null;
        defineModule(_nzj);
        Object.defineProperty(_nzj, '__esModule', {
            'value': true
        }), _nzj.getSlot400PersonalEffect = void 0;
        var _nzm = _nzk(74496);
        _nzj.getSlot400PersonalEffect = function(_nzn) {
            var _nzo = null,
                _nzp = new _nzm.SlotItemEffectModel(),
                _nzq = false,
                _nzr = new _nzm.SlotItemEffectModel(),
                _nzs = 0,
                _nzt = false;
            if (147 != _nzn.ship_id && 73 != _nzn.ctype && 81 != _nzn.ctype || (_nzt = true), _nzt && (_nzr.kaih += 2, _nzr.raig += 5, _nzr.houg += 1, _nzr.souk += 1, _nzq = true, _nzs = 1), 0 == _nzq) return _nzp;
            var _nzu = _nzn.get_slotnums(400);
            return _nzp.add(_nzr.multiply(_nzu)), _nzn.get_slotnums(282) > 0 && 1 == _nzs && (_nzp.houg += 2), _nzp;
        };
    },
    4050: function(_nzv, _nzw, _nzx) {
        'use strict';
        var _nzy = null;
        var _nzz = this && this.__importDefault || function(_o00) {
            var _o01 = null;
            return _o00 && _o00.__esModule ? _o00 : {
                'default': _o00
            };
        };
        defineModule(_nzw);
        Object.defineProperty(_nzw, '__esModule', {
            'value': true
        }), _nzw.getSlot407PersonalEffect = void 0;
        var _o02 = _nzx(74496),
            _o03 = _nzz(_nzx(18622));
        _nzw.getSlot407PersonalEffect = function(_o04) {
            var _o05 = null,
                _o06 = new _o02.SlotItemEffectModel(),
                _o07 = false,
                _o08 = new _o02.SlotItemEffectModel(),
                _o09 = 0;
            if (662 != _o04.ship_id && 663 != _o04.ship_id && 668 != _o04.ship_id || (_o08.houg += 4, _o08.tyku += 2, _o08.kaih += 1, _o07 = true, _o09 = 1), 0 == _o07) return _o06;
            var _o0a = _o04.get_slotnums(407);
            _o06.add(_o08.multiply(_o0a));
            for (var _o0b = 0, _o0c = 0, _o0d = 0, _o0e = _o04.have_slot_ids(); _o0d < _o0e.length; _o0d++) {
                var _o0f = _o0e[_o0d],
                    _o0g = _o03.default.model.slot.getMst(_o0f),
                    _o0h = _o0g.equipType;
                12 != _o0h && 13 != _o0h || (_o0g.sakuteki >= 5 && (_o0b += _o04.get_slotnums(parseInt(_o0f))), _o0g.taiku >= 2 && (_o0c += _o04.get_slotnums(parseInt(_o0f))));
            }
            return _o0b >= 1 && 1 == _o09 && (_o06.houg += 2, _o06.kaih += 2, _o06.raig += 2), _o0c >= 1 && 1 == _o09 && (_o06.tyku += 2, _o06.kaih += 3), _o06;
        };
    },
    78466: (_o0i, _o0j, _o0k) => {
        'use strict';
        var _o0l = null;
        defineModule(_o0j);
        Object.defineProperty(_o0j, '__esModule', {
            'value': true
        }), _o0j.getSlot408PersonalEffect = void 0;
        var _o0m = _o0k(74496);
        _o0j.getSlot408PersonalEffect = function(_o0n) {
            var _o0o = null,
                _o0p = new _o0m.SlotItemEffectModel(),
                _o0q = false,
                _o0r = new _o0m.SlotItemEffectModel();
            if ('しんしゅうまる' == _o0n.yomi ? (_o0r.houg += 2, _o0r.saku += 2, _o0r.kaih += 2, _o0q = true) : 'あきつまる' == _o0n.yomi && (_o0r.houg += 1, _o0r.saku += 1, _o0r.kaih += 1, _o0r.tais += 1, _o0q = true), 2 == _o0n.stype && (_o0r.houg += 1, _o0r.saku += 1, _o0r.kaih -= 5, _o0q = true), 0 == _o0q) return _o0p;
            var _o0s = _o0n.get_slotnums(408);
            return _o0p.add(_o0r.multiply(_o0s)), _o0p;
        };
    },
    40061: (_o0t, _o0u, _o0v) => {
        'use strict';
        var _o0w = null;
        defineModule(_o0u);
        Object.defineProperty(_o0u, '__esModule', {
            'value': true
        }), _o0u.getSlot409PersonalEffect = void 0;
        var _o0x = _o0v(74496);
        _o0u.getSlot409PersonalEffect = function(_o0y) {
            var _o0z = null,
                _o10 = new _o0x.SlotItemEffectModel(),
                _o11 = false,
                _o12 = new _o0x.SlotItemEffectModel();
            if ('しんしゅうまる' == _o0y.yomi ? (_o12.houg += 1, _o12.tyku += 2, _o12.kaih += 3, _o11 = true) : 'あきつまる' == _o0y.yomi && (_o12.houg += 1, _o12.tyku += 1, _o12.kaih += 2, _o12.tais += 1, _o11 = true), 0 == _o11) return _o10;
            var _o13 = _o0y.get_slotnums(409);
            return _o10.add(_o12.multiply(_o13)), _o10;
        };
    },
    79988: (_o14, _o15, _o16) => {
        'use strict';
        var _o17 = null;
        defineModule(_o15);
        Object.defineProperty(_o15, '__esModule', {
            'value': true
        }), _o15.getSlot411PersonalEffect = void 0;
        var _o18 = _o16(74496);
        _o15.getSlot411PersonalEffect = function(_o19) {
            var _o1a = null,
                _o1b = new _o18.SlotItemEffectModel(),
                _o1c = new _o18.SlotItemEffectModel(),
                _o1d = false,
                _o1e = 0;
            if (2 == _o19.stype && (_o1c.kaih -= 9, _o1d = true), 3 != _o19.stype && 4 != _o19.stype || (_o1c.kaih -= 7, _o1d = true), 21 == _o19.stype && (_o1c.kaih -= 6, _o1d = true), 5 != _o19.stype && 6 != _o19.stype || (_o1c.kaih -= 5, _o1d = true), 593 == _o19.ship_id && (_o1b.houg += 1, _o1b.tyku += 2, _o1b.kaih += 3), 151 == _o19.ship_id || 411 == _o19.ship_id || 412 == _o19.ship_id || 593 == _o19.ship_id || 954 == _o19.ship_id ? (_o1b.houg += 3, _o1b.tyku += 4, _o1e = 1) : 541 != _o19.ship_id && 573 != _o19.ship_id && 553 != _o19.ship_id && 554 != _o19.ship_id || (_o1b.houg += 2, _o1b.tyku += 2, _o1e = 1), _o1d) {
                var _o1f = _o19.get_slotnums(411);
                _o1b.add(_o1c.multiply(_o1f));
            }
            if (0 == _o1e) return _o1b;
            var _o1g = _o19.get_each_level_nums(411),
                _o1h = 0;
            return _o1e > 0 && _o1g.forEach(function(_o1i, _o1j) {
                _o1j >= 4 && (_o1h += _o1i);
            }), 1 == _o1e && (_o1h >= 1 && (_o1b.houg += 1, _o1b.tyku += 1), _o1g[10] >= 1 && (_o1b.houg += 1, _o1b.tyku += 1)), _o1b;
        };
    },
    74428: (_o1k, _o1l, _o1m) => {
        'use strict';
        var _o1n = null;
        defineModule(_o1l);
        Object.defineProperty(_o1l, '__esModule', {
            'value': true
        }), _o1l.getSlot412PersonalEffect = void 0;
        var _o1o = _o1m(74496);
        _o1l.getSlot412PersonalEffect = function(_o1p) {
            var _o1q = null,
                _o1r = new _o1o.SlotItemEffectModel(),
                _o1s = false,
                _o1t = 0,
                _o1u = new _o1o.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o1p.ctype) >= 0 ? (_o1r.houg += 2, _o1r.raig += 4, _o1r.tais += 2, _o1u.kaih += 3, _o1u.saku += 1, _o1s = true, _o1t = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o1p.ctype) >= 0 ? (_o1r.houg += 3, _o1r.raig += 3, _o1u.kaih += 2, _o1u.saku += 3, _o1s = true, _o1t = 1) : [7, 13, 29, 8, 9, 31].indexOf(_o1p.ctype) >= 0 && (_o1r.houg += 1, _o1u.kaih += 1, _o1u.saku += 1, _o1s = true), 0 == _o1s) return _o1r;
            var _o1v = _o1p.get_slotnums(412);
            if (_o1r.add(_o1u.multiply(_o1v)), 0 == _o1t) return _o1r;
            var _o1w = _o1p.get_each_level_nums(412),
                _o1x = 0,
                _o1y = 0;
            return _o1t > 0 && _o1w.forEach(function(_o1z, _o20) {
                _o20 >= 4 && (_o1x += _o1z), _o20 >= 8 && (_o1y += _o1z);
            }), 1 == _o1t && (_o1x > 0 && (_o1r.houg += 1), _o1y > 0 && (_o1r.raig += 1)), _o1r;
        };
    },
    2631: (_o21, _o22, _o23) => {
        'use strict';
        var _o24 = null;
        defineModule(_o22);
        Object.defineProperty(_o22, '__esModule', {
            'value': true
        }), _o22.getSlot413PersonalEffect = void 0;
        var _o25 = _o23(74496);
        _o22.getSlot413PersonalEffect = function(_o26) {
            var _o27 = null,
                _o28 = new _o25.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o26.ctype) >= 0 ? (_o28.houg += 2, _o28.raig += 2, _o28.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o26.ctype) >= 0 && (_o28.houg += 4, _o28.raig += 2, _o28.kaih += 2), 38 == _o26.ctype || 54 == _o26.ctype ? (_o28.houg += 2, _o28.raig += 3, _o28.kaih += 3) : 4 == _o26.ctype || 20 == _o26.ctype || 16 == _o26.ctype || 41 == _o26.ctype || 52 == _o26.ctype ? (_o28.houg += 1, _o28.raig += 2, _o28.kaih += 2) : 21 != _o26.ctype && 34 != _o26.ctype || (_o28.tyku += 2, _o28.raig += 1, _o28.kaih += 1), 'なか' == _o26.yomi || 'ゆら' == _o26.yomi || 'やはぎ' == _o26.yomi || 'のしろ' == _o26.yomi || 'はまなみ' == _o26.yomi || 'しまかぜ' == _o26.yomi || 'きよしも' == _o26.yomi || 'はつしも' == _o26.yomi ? (_o28.tyku += 1, _o28.kaih += 1) : 'じんつう' != _o26.yomi && 'せんだい' != _o26.yomi && 'ながなみ' != _o26.yomi && 'はつしも' != _o26.yomi && 'てるづき' != _o26.yomi || (_o28.houg += 1, _o28.raig += 1), 543 == _o26.ship_id ? (_o28.houg += 1, _o28.kaih += 1) : 159 == _o26.ship_id && (_o28.houg += 2), _o28;
        };
    },
    16498: (_o29, _o2a, _o2b) => {
        'use strict';
        var _o2c = null;
        defineModule(_o2a);
        Object.defineProperty(_o2a, '__esModule', {
            'value': true
        }), _o2a.getSlot414PersonalEffect = void 0;
        var _o2d = _o2b(74496);
        _o2a.getSlot414PersonalEffect = function(_o2e) {
            var _o2f = null,
                _o2g = new _o2d.SlotItemEffectModel(),
                _o2h = 0;
            if ('アメリカ' == _o2e.getCountryName() && (_o2g.saku += 1, _o2h = 1), 95 != _o2e.ctype && 99 != _o2e.ctype && 106 != _o2e.ctype && 110 != _o2e.ctype && 121 != _o2e.ctype || (_o2g.houg += 1, _o2g.saku += 1, _o2h = 2), 0 == _o2h) return _o2g;
            var _o2i = _o2e.get_each_level_nums(414),
                _o2j = 0,
                _o2k = 0,
                _o2l = 0;
            return _o2h > 0 && _o2i.forEach(function(_o2m, _o2n) {
                _o2n >= 5 && (_o2j += _o2m), _o2n >= 3 && (_o2k += _o2m), _o2n >= 8 && (_o2l += _o2m);
            }), _o2h > 0 && _o2j >= 1 && (_o2g.kaih += 1), 2 == _o2h && (_o2k >= 1 && (_o2g.saku += 1), _o2l >= 1 && (_o2g.kaih += 1), _o2i[10] >= 1 && (_o2g.houg += 1)), _o2g;
        };
    },
    27177: (_o2o, _o2p, _o2q) => {
        'use strict';
        var _o2r = null;
        defineModule(_o2p);
        Object.defineProperty(_o2p, '__esModule', {
            'value': true
        }), _o2p.getSlot415PersonalEffect = void 0;
        var _o2s = _o2q(74496);
        _o2p.getSlot415PersonalEffect = function(_o2t) {
            var _o2u = null,
                _o2v = new _o2s.SlotItemEffectModel(),
                _o2w = [];
            if ('アメリカ' == _o2t.getCountryName() && (_o2v.saku += 1, _o2v.tais += 1, _o2w.push(1)), 95 != _o2t.ctype && 99 != _o2t.ctype && 106 != _o2t.ctype && 110 != _o2t.ctype && 121 != _o2t.ctype || (_o2v.houg += 1, _o2w.push(2)), 0 == _o2w.length) return _o2v;
            var _o2x = _o2t.get_each_level_nums(415),
                _o2y = 0,
                _o2z = 0,
                _o30 = 0;
            return _o2w.length > 0 && (_o2x.forEach(function(_o31, _o32) {
                _o32 >= 5 && (_o2y += _o31), _o32 >= 3 && (_o2z += _o31), _o32 >= 8 && (_o30 += _o31);
            }), _o2w.forEach(function(_o33) {
                var _o34 = null;
                1 == _o33 ? _o2y >= 1 && (_o2v.kaih += 1) : 2 == _o33 && (_o2z >= 1 && (_o2v.kaih += 1), _o30 >= 1 && (_o2v.houg += 1));
            })), _o2v;
        };
    },
    53908: (_o35, _o36, _o37) => {
        'use strict';
        var _o38 = null;
        defineModule(_o36);
        Object.defineProperty(_o36, '__esModule', {
            'value': true
        }), _o36.getSlot419PersonalEffect = void 0;
        var _o39 = _o37(74496);
        _o36.getSlot419PersonalEffect = function(_o3a) {
            var _o3b = null,
                _o3c = new _o39.SlotItemEffectModel(),
                _o3d = false,
                _o3e = new _o39.SlotItemEffectModel(),
                _o3f = 0;
            if ('アメリカ' == _o3a.getCountryName() && (_o3e.houg += 2, _o3d = true, _o3f = 1), 0 == _o3d) return _o3c;
            var _o3g = _o3a.get_slotnums(419);
            if (_o3c.add(_o3e.multiply(_o3g)), 0 == _o3f) return _o3c;
            var _o3h = _o3a.get_each_level_nums(419),
                _o3i = 0,
                _o3j = 0;
            return _o3f > 0 && _o3h.forEach(function(_o3k, _o3l) {
                _o3l >= 2 && (_o3i += _o3k), _o3l >= 7 && (_o3j += _o3k);
            }), 1 == _o3f && (_o3i >= 1 && (_o3c.houg += 1 * _o3i), _o3j >= 1 && (_o3c.houg += 1 * _o3j)), _o3c;
        };
    },
    79813: (_o3m, _o3n, _o3o) => {
        'use strict';
        var _o3p = null;
        defineModule(_o3n);
        Object.defineProperty(_o3n, '__esModule', {
            'value': true
        }), _o3n.getSlot420PersonalEffect = void 0;
        var _o3q = _o3o(74496);
        _o3n.getSlot420PersonalEffect = function(_o3r) {
            var _o3s = null,
                _o3t = new _o3q.SlotItemEffectModel(),
                _o3u = false,
                _o3v = new _o3q.SlotItemEffectModel(),
                _o3w = 0;
            if ('アメリカ' != _o3r.getCountryName() && 67 != _o3r.ctype && 78 != _o3r.ctype && 82 != _o3r.ctype && 88 != _o3r.ctype && 108 != _o3r.ctype && 112 != _o3r.ctype || (_o3v.houg += 1, _o3w = 1, _o3u = true), 84 == _o3r.ctype ? (_o3v.houg += 1, _o3u = true) : 78 == _o3r.ctype && (_o3v.houg -= 1, _o3u = true), 7 == _o3r.stype && (_o3v.houg -= 2, _o3v.kaih -= 1, _o3v.souk -= 2, _o3u = true), 0 == _o3u) return _o3t;
            var _o3x = _o3r.get_slotnums(420);
            if (_o3t.add(_o3v.multiply(_o3x)), 0 == _o3w) return _o3t;
            var _o3y = _o3r.get_each_level_nums(420),
                _o3z = 0;
            return _o3w > 0 && _o3y.forEach(function(_o40, _o41) {
                _o41 >= 3 && (_o3z += _o40);
            }), 1 == _o3w && _o3z >= 1 && (_o3t.houg += 1 * _o3z), _o3t;
        };
    },
    16088: (_o42, _o43, _o44) => {
        'use strict';
        var _o45 = null;
        defineModule(_o43);
        Object.defineProperty(_o43, '__esModule', {
            'value': true
        }), _o43.getSlot421PersonalEffect = void 0;
        var _o46 = _o44(74496);
        _o43.getSlot421PersonalEffect = function(_o47) {
            var _o48 = null,
                _o49 = new _o46.SlotItemEffectModel(),
                _o4a = false,
                _o4b = new _o46.SlotItemEffectModel(),
                _o4c = 0;
            if ('アメリカ' != _o47.getCountryName() && 67 != _o47.ctype && 78 != _o47.ctype && 82 != _o47.ctype && 88 != _o47.ctype && 108 != _o47.ctype && 112 != _o47.ctype || (_o4b.houg += 2, _o4a = true, _o4c = 1), 84 == _o47.ctype ? (_o4b.houg += 1, _o4a = true) : 78 == _o47.ctype && (_o4b.houg -= 1, _o4a = true), 7 == _o47.stype && (_o4b.houg -= 2, _o4b.kaih -= 1, _o4b.souk -= 2, _o4a = true), 0 == _o4a) return _o49;
            var _o4d = _o47.get_slotnums(421);
            if (_o49.add(_o4b.multiply(_o4d)), 0 == _o4c) return _o49;
            var _o4e = _o47.get_each_level_nums(421),
                _o4f = 0;
            return _o4c > 0 && _o4e.forEach(function(_o4g, _o4h) {
                _o4h >= 5 && (_o4f += _o4g);
            }), 1 == _o4c && _o4f >= 1 && (_o49.houg += 1 * _o4f), _o49;
        };
    },
    69939: (_o4i, _o4j, _o4k) => {
        'use strict';
        var _o4l = null;
        defineModule(_o4j);
        Object.defineProperty(_o4j, '__esModule', {
            'value': true
        }), _o4j.getSlot422PersonalEffect = void 0;
        var _o4m = _o4k(74496);
        _o4j.getSlot422PersonalEffect = function(_o4n) {
            var _o4o = null,
                _o4p = new _o4m.SlotItemEffectModel(),
                _o4q = false,
                _o4r = new _o4m.SlotItemEffectModel();
            if ('アメリカ' != _o4n.getCountryName() && 67 != _o4n.ctype && 78 != _o4n.ctype && 82 != _o4n.ctype && 88 != _o4n.ctype && 108 != _o4n.ctype && 112 != _o4n.ctype || (_o4r.houg += 1, _o4r.kaih += 1, _o4q = true), 84 == _o4n.ctype && (_o4r.houg += 1, _o4r.tyku += 1, _o4q = true), 707 == _o4n.ship_id && (_o4r.houg += 2, _o4r.kaih += 2, _o4r.tyku += 2, _o4q = true), 0 == _o4q) return _o4p;
            var _o4s = _o4n.get_slotnums(422);
            return _o4p.add(_o4r.multiply(_o4s)), _o4p;
        };
    },
    33734: (_o4t, _o4u, _o4v) => {
        'use strict';
        var _o4w = null;
        defineModule(_o4u);
        Object.defineProperty(_o4u, '__esModule', {
            'value': true
        }), _o4u.getSlot423PersonalEffect = void 0;
        var _o4x = _o4v(74496);
        _o4u.getSlot423PersonalEffect = function(_o4y) {
            var _o4z = null,
                _o50 = new _o4x.SlotItemEffectModel(),
                _o51 = false,
                _o52 = new _o4x.SlotItemEffectModel();
            78 != _o4y.ctype && 112 != _o4y.ctype || (_o52.houg += 2, _o52.tyku += 2, _o52.kaih += 2, _o52.saku += 2, _o51 = true);
            var _o53 = _o4y.getCountryName();
            if (67 == _o4y.ctype || 78 == _o4y.ctype || 82 == _o4y.ctype || 88 == _o4y.ctype || 108 == _o4y.ctype || 112 == _o4y.ctype ? (_o52.houg += 2, _o52.tyku += 2, _o52.kaih += 2, _o52.saku += 2, _o51 = true) : 'アメリカ' == _o53 && (_o52.houg += 1, _o52.tyku += 1, _o52.kaih += 1, _o52.saku += 1, _o51 = true), 0 == _o51) return _o50;
            var _o54 = _o4y.get_slotnums(423);
            return _o50.add(_o52.multiply(_o54)), _o50;
        };
    },
    34432: (_o55, _o56, _o57) => {
        'use strict';
        var _o58 = null;
        defineModule(_o56);
        Object.defineProperty(_o56, '__esModule', {
            'value': true
        }), _o56.getSlot424PersonalEffect = void 0;
        var _o59 = _o57(74496);
        _o56.getSlot424PersonalEffect = function(_o5a) {
            var _o5b = null,
                _o5c = new _o59.SlotItemEffectModel(),
                _o5d = false,
                _o5e = new _o59.SlotItemEffectModel(),
                _o5f = 0;
            67 != _o5a.ctype && 78 != _o5a.ctype && 82 != _o5a.ctype && 88 != _o5a.ctype && 108 != _o5a.ctype && 112 != _o5a.ctype || (_o5e.houg += 2, _o5e.raig += 3, _o5d = true, _o5f = 1);
            var _o5g = _o5a.get_slotnums(424);
            _o5d && _o5c.add(_o5e.multiply(_o5g));
            var _o5h = _o5a.get_each_level_nums(424),
                _o5i = 0,
                _o5j = 0,
                _o5k = 0;
            _o5h.forEach(function(_o5l, _o5m) {
                _o5m >= 2 && (_o5i += _o5l), _o5m >= 6 && (_o5j += _o5l), _o5m >= 8 && (_o5k += _o5l);
            });
            var _o5n = _o5h[10];
            return 1 == _o5f && (_o5i >= 1 && (_o5c.houg += 1 * _o5i), _o5j >= 1 && (_o5c.houg += 1 * _o5j), _o5k >= 1 && (_o5c.houm += 1 * _o5k)), _o5n > 0 && (_o5c.houm += 1 * _o5n), _o5c;
        };
    },
    97423: (_o5o, _o5p, _o5q) => {
        'use strict';
        var _o5r = null;
        defineModule(_o5p);
        Object.defineProperty(_o5p, '__esModule', {
            'value': true
        }), _o5p.getSlot425PersonalEffect = void 0;
        var _o5s = _o5q(74496);
        _o5p.getSlot425PersonalEffect = function(_o5t) {
            var _o5u = null,
                _o5v = new _o5s.SlotItemEffectModel(),
                _o5w = false,
                _o5x = new _o5s.SlotItemEffectModel(),
                _o5y = 0;
            67 != _o5t.ctype && 78 != _o5t.ctype && 82 != _o5t.ctype && 88 != _o5t.ctype && 108 != _o5t.ctype && 112 != _o5t.ctype || (_o5x.houg += 2, _o5x.tais += 2, _o5x.raig += 1, _o5x.saku += 1, _o5w = true, _o5y = 1);
            var _o5z = _o5t.get_slotnums(425);
            _o5w && _o5v.add(_o5x.multiply(_o5z));
            var _o60 = _o5t.get_each_level_nums(425),
                _o61 = 0,
                _o62 = 0,
                _o63 = 0,
                _o64 = 0,
                _o65 = 0,
                _o66 = 0;
            _o60.forEach(function(_o67, _o68) {
                _o68 >= 2 && (_o61 += _o67), _o68 >= 4 && (_o62 += _o67), _o68 >= 6 && (_o63 += _o67), _o68 >= 7 && (_o64 += _o67), _o68 >= 8 && (_o65 += _o67), _o68 >= 9 && (_o66 += _o67);
            });
            var _o69 = _o60[10];
            return 1 == _o5y && (_o61 >= 1 && (_o5v.tais += 1 * _o61), _o62 >= 1 && (_o5v.houg += 1 * _o62), _o63 >= 1 && (_o5v.tais += 1 * _o63), _o64 >= 1 && (_o5v.houm += 1 * _o64), _o65 >= 1 && (_o5v.raig += 1 * _o65), _o66 >= 1 && (_o5v.houg += 1 * _o66), _o69 >= 1 && (_o5v.tais += 1 * _o69)), _o64 >= 1 && (_o5v.houg += 1 * _o64), _o65 >= 1 && (_o5v.tais += 1 * _o65), _o66 >= 1 && (_o5v.houm += 1 * _o66), _o69 >= 1 && (_o5v.houm += 1 * _o69), _o5v;
        };
    },
    23551: (_o6a, _o6b, _o6c) => {
        'use strict';
        var _o6d = null;
        defineModule(_o6b);
        Object.defineProperty(_o6b, '__esModule', {
            'value': true
        }), _o6b.getSlot430PersonalEffect = void 0;
        var _o6e = _o6c(74496);
        _o6b.getSlot430PersonalEffect = function(_o6f) {
            var _o6g = null,
                _o6h = new _o6e.SlotItemEffectModel(),
                _o6i = false,
                _o6j = new _o6e.SlotItemEffectModel(),
                _o6k = 0;
            if (113 == _o6f.ctype && (_o6j.tyku += 1, _o6j.kaih += 1, _o6i = true), 58 != _o6f.ctype && 61 != _o6f.ctype && 64 != _o6f.ctype && 68 != _o6f.ctype && 80 != _o6f.ctype && 92 != _o6f.ctype && 113 != _o6f.ctype && 124 != _o6f.ctype || (_o6j.tyku += 2, _o6j.kaih += 1, _o6i = true, _o6k = 1), 0 == _o6i) return _o6h;
            var _o6l = _o6f.get_slotnums(430);
            if (_o6h.add(_o6j.multiply(_o6l)), 0 == _o6k) return _o6h;
            var _o6m = _o6f.get_each_level_nums(430),
                _o6n = 0,
                _o6o = 0,
                _o6p = 0;
            if (_o6k > 0 && _o6m.forEach(function(_o6q, _o6r) {
                    _o6r >= 2 && (_o6n += _o6q), _o6r >= 4 && (_o6o += _o6q), _o6r >= 7 && (_o6p += _o6q);
                }), 1 == _o6k) {
                _o6n >= 1 && (_o6h.kaih += 1 * _o6n), _o6o >= 1 && (_o6h.tyku += 1 * _o6o), _o6p >= 1 && (_o6h.kaih += 1 * _o6p);
                var _o6s = _o6m[10];
                _o6s >= 1 && (_o6h.tyku += 1 * _o6s);
            }
            return _o6h;
        };
    },
    6173: (_o6t, _o6u, _o6v) => {
        'use strict';
        var _o6w = null;
        defineModule(_o6u);
        Object.defineProperty(_o6u, '__esModule', {
            'value': true
        }), _o6u.getSlot437PersonalEffect = void 0;
        var _o6x = _o6v(74496);
        _o6u.getSlot437PersonalEffect = function(_o6y) {
            var _o6z = null,
                _o70 = new _o6x.SlotItemEffectModel(),
                _o71 = false,
                _o72 = new _o6x.SlotItemEffectModel();
            if (285 == _o6y.ship_id ? (_o72.houg += 3, _o72.tyku += 3, _o72.kaih += 4, _o71 = true) : 894 == _o6y.ship_id || 899 == _o6y.ship_id ? (_o72.houg += 4, _o72.tyku += 4, _o72.kaih += 4, _o71 = true) : 196 == _o6y.ship_id || 197 == _o6y.ship_id ? (_o72.houg += 2, _o72.tyku += 2, _o72.kaih += 3, _o71 = true) : 508 == _o6y.ship_id || 509 == _o6y.ship_id || 646 == _o6y.ship_id ? (_o72.houg += 2, _o72.tyku += 2, _o72.kaih += 2, _o71 = true) : 888 != _o6y.ship_id && 883 != _o6y.ship_id && 553 != _o6y.ship_id && 554 != _o6y.ship_id || (_o72.houg += 1, _o72.tyku += 2, _o72.kaih += 2, _o71 = true), 0 == _o71) return _o70;
            var _o73 = _o6y.get_slotnums(437);
            return _o70.add(_o72.multiply(_o73)), _o70;
        };
    },
    53709: (_o74, _o75, _o76) => {
        'use strict';
        var _o77 = null;
        defineModule(_o75);
        Object.defineProperty(_o75, '__esModule', {
            'value': true
        }), _o75.getSlot438PersonalEffect = void 0;
        var _o78 = _o76(74496);
        _o75.getSlot438PersonalEffect = function(_o79) {
            var _o7a = null,
                _o7b = new _o78.SlotItemEffectModel(),
                _o7c = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o79.ctype) > -1 && (_o7b.tais += 1, _o7b.kaih += 1), 160 == _o79.ship_id || 488 == _o79.ship_id || 141 == _o79.ship_id ? (_o7b.tais += 1, _o7b.kaih += 1) : 145 != _o79.ship_id && 588 != _o79.ship_id && 667 != _o79.ship_id && 578 != _o79.ship_id && 476 != _o79.ship_id && 363 != _o79.ship_id && 961 != _o79.ship_id || (_o7c = 1), 'うしお' == _o79.yomi || 'まいかぜ' == _o79.yomi || 'いそかぜ' == _o79.yomi || 'はまかぜ' == _o79.yomi || 'いかづち' == _o79.yomi || 'やまぐも' == _o79.yomi || 'うみかぜ' == _o79.yomi || 'かわかぜ' == _o79.yomi || 'すずかぜ' == _o79.yomi ? _o7b.tais += 1 : 'しぐれ' != _o79.yomi && 'やまかぜ' != _o79.yomi && 'かみかぜ' != _o79.yomi && 'はるかぜ' != _o79.yomi && 'みくら' != _o79.yomi && 'いしがき' != _o79.yomi || (_o7b.tais += 1, _o7b.kaih += 1), 0 == _o7c) return _o7b;
            var _o7d = _o79.get_each_level_nums(438),
                _o7e = 0,
                _o7f = 0,
                _o7g = 0,
                _o7h = _o7d[10];
            return _o7c > 0 && _o7d.forEach(function(_o7i, _o7j) {
                _o7j >= 4 && (_o7e += _o7i), _o7j >= 6 && (_o7f += _o7i), _o7j >= 8 && (_o7g += _o7i);
            }), 1 == _o7c && (_o7e >= 1 && (_o7b.tais += 1), _o7f >= 1 && (_o7b.kaih += 1), _o7g >= 1 && (_o7b.tais += 1), _o7h >= 1 && (_o7b.kaih += 1)), _o7b;
        };
    },
    99790: (_o7k, _o7l, _o7m) => {
        'use strict';
        var _o7n = null;
        defineModule(_o7l);
        Object.defineProperty(_o7l, '__esModule', {
            'value': true
        }), _o7l.getSlot439PersonalEffect = void 0;
        var _o7o = _o7m(74496);
        _o7l.getSlot439PersonalEffect = function(_o7p) {
            var _o7q = null,
                _o7r = new _o7o.SlotItemEffectModel();
            1 != _o7p.stype && 2 != _o7p.stype && 3 != _o7p.stype && 21 != _o7p.stype || (_o7r.tais += 1, _o7r.kaih += 1), 101 != _o7p.ctype && 1 != _o7p.stype || (_o7r.tais += 1);
            var _o7s = _o7p.getCountryName();
            return 'アメリカ' != _o7s && 'イギリス' != _o7s || (_o7r.tais += 2), _o7r;
        };
    },
    18387: (_o7t, _o7u, _o7v) => {
        'use strict';
        var _o7w = null;
        defineModule(_o7u);
        Object.defineProperty(_o7u, '__esModule', {
            'value': true
        }), _o7u.getSlot440_441PersonalEffect = void 0;
        var _o7x = _o7v(74496);
        _o7u.getSlot440_441PersonalEffect = function(_o7y) {
            var _o7z = null,
                _o80 = new _o7x.SlotItemEffectModel();
            return 114 == _o7y.ctype && (_o80.raig += 2), _o80;
        };
    },
    70941: (_o81, _o82, _o83) => {
        'use strict';
        var _o84 = null;
        defineModule(_o82);
        Object.defineProperty(_o82, '__esModule', {
            'value': true
        }), _o82.getSlot442_443PersonalEffect = void 0;
        var _o85 = _o83(74496);
        _o82.getSlot442_443PersonalEffect = function(_o86) {
            var _o87 = null,
                _o88 = new _o85.SlotItemEffectModel();
            return 122 == _o86.ctype ? (_o88.raig += 1, _o88.kaih += 2) : 114 == _o86.ctype && (_o88.raig += 2), _o88;
        };
    },
    35025: (_o89, _o8a, _o8b) => {
        'use strict';
        var _o8c = null;
        defineModule(_o8a);
        Object.defineProperty(_o8a, '__esModule', {
            'value': true
        }), _o8a.getSlot447PersonalEffect = void 0;
        var _o8d = _o8b(74496);
        _o8a.getSlot447PersonalEffect = function(_o8e) {
            var _o8f = null,
                _o8g = new _o8d.SlotItemEffectModel(),
                _o8h = _o8e.get_each_level_nums(447),
                _o8i = 0,
                _o8j = 0,
                _o8k = 0,
                _o8l = 0;
            _o8h.forEach(function(_o8m, _o8n) {
                _o8n >= 2 && (_o8i += _o8m), _o8n >= 4 && (_o8j += _o8m), _o8n >= 6 && (_o8k += _o8m), _o8n >= 8 && (_o8l += _o8m);
            }), _o8i >= 1 && (_o8g.houg += 1 * _o8i), _o8j >= 1 && (_o8g.tyku += 1 * _o8j), _o8k >= 1 && (_o8g.tais += 1 * _o8k), _o8l >= 1 && (_o8g.kaih += 1 * _o8l);
            var _o8o = _o8h[10];
            _o8o >= 1 && (_o8g.tais += 1 * _o8o);
            var _o8p = false,
                _o8q = new _o8d.SlotItemEffectModel();
            if (76 == _o8e.ctype && (_o8q.houg += 1, _o8q.tais += 1, _o8q.kaih += 2, _o8p = true), 'うんよう' == _o8e.yomi ? (_o8q.houg += 1, _o8q.tais += 1, _o8q.kaih += 1, _o8p = true) : 'ほうしょう' != _o8e.yomi && 'たいげい・りゅうほう' != _o8e.yomi || (_o8q.houg += 1, _o8q.tais += 2, _o8q.kaih += 1, _o8p = true), 0 == _o8p) return _o8g;
            894 != _o8e.ship_id && 899 != _o8e.ship_id || (_o8q.houg += 1, _o8q.kaih += 1, _o8q.tais += 1, _o8q.tyku += 1, _o8p = true);
            var _o8r = _o8e.get_slotnums(447);
            return _o8g.add(_o8q.multiply(_o8r)), _o8g;
        };
    },
    96804: (_o8s, _o8t, _o8u) => {
        'use strict';
        var _o8v = null;
        defineModule(_o8t);
        Object.defineProperty(_o8t, '__esModule', {
            'value': true
        }), _o8t.getSlot450PersonalEffect = void 0;
        var _o8w = _o8u(74496);
        _o8t.getSlot450PersonalEffect = function(_o8x) {
            var _o8y = null,
                _o8z = new _o8w.SlotItemEffectModel(),
                _o90 = false,
                _o91 = new _o8w.SlotItemEffectModel();
            if (101 == _o8x.ctype && (_o91.houg += 1, _o91.tyku += 2, _o91.souk += 1, _o91.kaih += 3, _o90 = true), 1 == _o8x.stype && (_o91.tyku += 1, _o91.souk += 1, _o91.kaih += 2, _o90 = true), 0 == _o90) return _o8z;
            var _o92 = _o8x.get_slotnums(450);
            return _o8z.add(_o91.multiply(_o92)), _o8z;
        };
    },
    33896: (_o93, _o94, _o95) => {
        'use strict';
        var _o96 = null;
        defineModule(_o94);
        Object.defineProperty(_o94, '__esModule', {
            'value': true
        }), _o94.getSlot451PersonalEffect = void 0;
        var _o97 = _o95(74496);
        _o94.getSlot451PersonalEffect = function(_o98) {
            var _o99 = null,
                _o9a = new _o97.SlotItemEffectModel(),
                _o9b = false,
                _o9c = new _o97.SlotItemEffectModel(),
                _o9d = 0;
            if ('あきつまる' == _o98.yomi ? (_o9c.houg += 1, _o9c.tais += 2, _o9b = true, 166 == _o98.ship_id && (_o9d = 2)) : 'やましおまる' == _o98.yomi && (_o9c.houg += 1, _o9c.tais += 3, _o9b = true, _o9d = 1), 0 == _o9b) return _o9a;
            var _o9e = _o98.get_slotnums(451);
            if (_o9a.add(_o9c.multiply(_o9e)), 0 == _o9d) return _o9a;
            var _o9f = _o98.get_each_level_nums(451),
                _o9g = [];
            return _o9d > 0 && _o9f.forEach(function(_o9h, _o9i) {
                var _o9j = null;
                for (var _o9k = 1; _o9k <= _o98.SLOT_LEVEL_MAX; _o9k++) _o9i >= _o9k && (null == _o9g[_o9k] && (_o9g[_o9k] = 0), _o9g[_o9k] += _o9h);
            }), 1 == _o9d ? (_o9g[1] >= 1 && (_o9a.houg += 2 * _o9g[1]), _o9g[2] >= 1 && (_o9a.houm += 1 * _o9g[2]), _o9g[3] >= 1 && (_o9a.tais += 1 * _o9g[3]), _o9g[4] >= 1 && (_o9a.houg += 1 * _o9g[4]), _o9g[6] >= 1 && (_o9a.houm += 1 * _o9g[6]), _o9g[8] >= 1 && (_o9a.tais += 1 * _o9g[8]), _o9g[10] >= 1 && (_o9a.houg += 1 * _o9g[10])) : 2 == _o9d && (_o9g[1] >= 1 && (_o9a.houg += 1 * _o9g[1]), _o9g[3] >= 1 && (_o9a.tais += 1 * _o9g[3]), _o9g[5] >= 1 && (_o9a.houm += 1 * _o9g[5]), _o9g[7] >= 1 && (_o9a.tais += 1 * _o9g[7]), _o9g[10] >= 1 && (_o9a.houg += 1 * _o9g[10])), _o9a;
        };
    },
    11031: function(_o9l, _o9m, _o9n) {
        'use strict';
        var _o9o = null;
        var _o9p = this && this.__importDefault || function(_o9q) {
            var _o9r = null;
            return _o9q && _o9q.__esModule ? _o9q : {
                'default': _o9q
            };
        };
        defineModule(_o9m);
        Object.defineProperty(_o9m, '__esModule', {
            'value': true
        }), _o9m.getSlot455PersonalEffect = void 0;
        var _o9s = _o9n(74496),
            _o9t = _o9p(_o9n(18622));
        _o9m.getSlot455PersonalEffect = function(_o9u) {
            var _o9v = null,
                _o9w = new _o9s.SlotItemEffectModel(),
                _o9x = false,
                _o9y = new _o9s.SlotItemEffectModel(),
                _o9z = 0,
                _oa0 = _o9u.get_slotnums(455);
            if (1 != _o9u.ctype && 5 != _o9u.ctype && 12 != _o9u.ctype || (_o9y.houg += 2, _o9y.tyku += 1, 12 == _o9u.ctype && (_o9y.houg += 1), 666 == _o9u.ship_id ? (_o9y.houg += 1, _o9y.tais += 1) : 959 == _o9u.ship_id && (_o9y.houg += 2, _oa0 >= 2 && (_o9w.houg += 2), _oa0 >= 3 && (_o9w.houg += 3)), _o9z = 1, _o9x = true), 'うらなみ' == _o9u.yomi && (_o9y.houg += 1, 647 == _o9u.ship_id && (_o9y.houg += 1, _o9y.raig += 1, _o9y.tais += 1, _o9y.kaih += 1), _o9x = true), 0 == _o9x) return _o9w;
            if (_o9w.add(_o9y.multiply(_oa0)), 0 == _o9z) return _o9w;
            for (var _oa1 = 0, _oa2 = 0, _oa3 = 0, _oa4 = _o9u.have_slot_ids(); _oa3 < _oa4.length; _oa3++) {
                var _oa5 = _oa4[_oa3],
                    _oa6 = _o9t.default.model.slot.getMst(_oa5),
                    _oa7 = _oa6.equipType;
                12 != _oa7 && 13 != _oa7 || (_oa6.sakuteki >= 5 && (_oa1 += _o9u.get_slotnums(parseInt(_oa5))), _oa6.taiku >= 2 && (_oa2 += _o9u.get_slotnums(parseInt(_oa5))));
            }
            if (1 == _o9z) {
                _oa1 >= 1 && (_o9w.houg += 3, _o9w.kaih += 2, _o9w.raig += 1);
                var _oa8 = _o9u.get_slotnums(13),
                    _oa9 = _o9u.get_slotnums(125),
                    _oaa = _o9u.get_slotnums(285),
                    _oab = _oa8 + _oa9 + _oaa;
                1 == _oab ? (_o9w.houg += 1, _o9w.raig += 3) : _oab >= 2 && (_o9w.houg += 2, _o9w.raig += 5), _oaa >= 1 && (_o9w.raig += 1), _oa2 >= 1 && (_o9w.tyku += 4);
            }
            return _o9w;
        };
    },
    71383: (_oac, _oad, _oae) => {
        'use strict';
        var _oaf = null;
        defineModule(_oad);
        Object.defineProperty(_oad, '__esModule', {
            'value': true
        }), _oad.getSlot456PersonalEffect = void 0;
        var _oag = _oae(74496);
        _oad.getSlot456PersonalEffect = function(_oah) {
            var _oai = null,
                _oaj = new _oag.SlotItemEffectModel(),
                _oak = false,
                _oal = new _oag.SlotItemEffectModel(),
                _oam = _oah.getCountryName();
            if ('アメリカ' == _oam && (_oal.houg += 3, _oal.kaih += 4, _oal.saku += 4, _oaj.houm += 3, _oak = true), 'イギリス' != _oam && 'オーストラリア' != _oam || (_oal.houg += 2, _oal.kaih += 2, _oal.saku += 2, _oaj.houm += 2, _oak = true), 87 != _oah.ctype && 91 != _oah.ctype || (_oal.houg += 1, _oaj.leng += 1, _oak = true), 651 != _oah.ship_id && 656 != _oah.ship_id || (_oaj.houg += 2, _oaj.kaih += 2, _oaj.saku += 3, _oaj.leng += 1, _oaj.houm += 2), 0 == _oak) return _oaj;
            var _oan = _oah.get_slotnums(456);
            return _oaj.add(_oal.multiply(_oan)), _oaj;
        };
    },
    55888: (_oao, _oap, _oaq) => {
        'use strict';
        var _oar = null;
        defineModule(_oap);
        Object.defineProperty(_oap, '__esModule', {
            'value': true
        }), _oap.getSlot457PersonalEffect = void 0;
        var _oas = _oaq(74496);
        _oap.getSlot457PersonalEffect = function(_oat) {
            var _oau = null,
                _oav = new _oas.SlotItemEffectModel(),
                _oaw = 0;
            if (109 == _oat.ctype ? (_oav.raig += 3, _oav.kaih += 3, _oaw = 1) : 71 == _oat.ctype || 103 == _oat.ctype ? (_oav.raig += 2, _oav.kaih += 2, _oaw = 2) : 44 == _oat.ctype && (_oav.raig += 1, _oav.kaih += 4, _oaw = 3), 0 == _oaw) return _oav;
            var _oax = _oat.get_each_level_nums(461),
                _oay = [];
            return _oaw > 0 && _oax.forEach(function(_oaz, _ob0) {
                var _ob1 = null;
                for (var _ob2 = 1; _ob2 <= _oat.SLOT_LEVEL_MAX; _ob2++) null == _oay[_ob2] && (_oay[_ob2] = 0), _ob0 >= _ob2 && (_oay[_ob2] += _oaz);
            }), 1 == _oaw ? (_oay[2] >= 1 && (_oav.raig += 1 * _oay[2]), _oay[3] >= 1 && (_oav.kaih += 1 * _oay[3]), _oay[4] >= 1 && (_oav.raig += 1 * _oay[4]), _oay[5] >= 1 && (_oav.houm += 1 * _oay[5]), _oay[6] >= 1 && (_oav.raig += 1 * _oay[6]), _oay[8] >= 1 && (_oav.raig += 1 * _oay[8]), _oay[10] >= 1 && (_oav.houm += 1 * _oay[10])) : 2 == _oaw ? (_oay[3] >= 1 && (_oav.kaih += 1 * _oay[3]), _oay[4] >= 1 && (_oav.raig += 1 * _oay[4]), _oay[6] >= 1 && (_oav.raig += 1 * _oay[6]), _oay[8] >= 1 && (_oav.raig += 1 * _oay[8]), _oay[10] >= 1 && (_oav.houm += 1 * _oay[10])) : 3 == _oaw && (_oay[4] >= 1 && (_oav.raig += 1 * _oay[4]), _oay[6] >= 1 && (_oav.raig += 1 * _oay[6]), _oay[8] >= 1 && (_oav.raig += 1 * _oay[8]), _oay[10] >= 1 && (_oav.houm += 1 * _oay[10])), _oav;
        };
    },
    2258: (_ob3, _ob4, _ob5) => {
        'use strict';
        var _ob6 = null;
        defineModule(_ob4);
        Object.defineProperty(_ob4, '__esModule', {
            'value': true
        }), _ob4.getSlot458PersonalEffect = void 0;
        var _ob7 = _ob5(74496);
        _ob4.getSlot458PersonalEffect = function(_ob8) {
            var _ob9 = null,
                _oba = new _ob7.SlotItemEffectModel(),
                _obb = 0,
                _obc = false;
            if (13 != _ob8.stype && 14 != _ob8.stype || (_obc = true), 109 == _ob8.ctype ? (_oba.raig += 3, _oba.kaih += 6, _obb = 1) : 71 == _ob8.ctype || 103 == _ob8.ctype ? (_oba.raig += 3, _oba.kaih += 4, _obb = 2) : 44 == _ob8.ctype && (_oba.raig += 3, _oba.kaih += 3, _obb = 3), 0 == _obc && 0 == _obb) return _oba;
            var _obd = [];
            [458, 461].forEach(function(_obe) {
                var _obf = null,
                    _obg = _ob8.get_each_level_nums(_obe);
                null == _obd[_obe] && (_obd[_obe] = []), _obg.forEach(function(_obh, _obi) {
                    var _obj = null;
                    for (var _obk = 1; _obk <= _ob8.SLOT_LEVEL_MAX; _obk++) null == _obd[_obe][_obk] && (_obd[_obe][_obk] = 0), _obi >= _obk && (_obd[_obe][_obk] += _obh);
                });
            });
            var _obl = _obd[458][2],
                _obm = _obd[458][3],
                _obn = _obd[458][4],
                _obo = _obd[458][5],
                _obp = _obd[458][6],
                _obq = _obd[458][8],
                _obr = _obd[458][10],
                _obs = _obd[461][4];
            return _obb >= 1 && _obb <= 3 && (_obn >= 1 && (_oba.houm += 1 * _obn), _obp >= 1 && (_oba.kaih += 1 * _obp), _obq >= 1 && (_oba.raig += 1 * _obq)), _obc && (_obm >= 1 && (_oba.kaih += 1 * _obm), _obo >= 1 && (_oba.raig += 1 * _obo), _obr >= 1 && (_oba.houm += 1 * _obr), _obl >= 1 && _obs >= 1 && (_oba.raig += 7, _oba.houm += 5)), _oba;
        };
    },
    43768: (_obt, _obu, _obv) => {
        'use strict';
        var _obw = null;
        defineModule(_obu);
        Object.defineProperty(_obu, '__esModule', {
            'value': true
        }), _obu.getSlot463PersonalEffect = void 0;
        var _obx = _obv(74496);
        _obu.getSlot463PersonalEffect = function(_oby) {
            var _obz = null,
                _oc0 = new _obx.SlotItemEffectModel(),
                _oc1 = false,
                _oc2 = new _obx.SlotItemEffectModel(),
                _oc3 = _oby.get_slotnums(142),
                _oc4 = _oby.get_slotnums(460),
                _oc5 = _oc3 + _oc4;
            if (37 == _oby.ctype && (_oc2.houg += 1, _oc2.tyku += 2, _oc2.kaih += 1, _oc2.houm += 1, _oc5 >= 1 && (_oc0.tyku += 1, _oc0.kaih += 1, _oc0.houm += 1), _oc1 = true), 916 != _oby.ship_id && 911 != _oby.ship_id && 546 != _oby.ship_id || (_oc2.houg += 1, _oc2.kaih += 1, _oc2.houm += 2, _oc4 >= 1 && (_oc0.houg += 1, _oc0.kaih += 1, _oc0.houm += 2), _oc1 = true), 0 == _oc1) return _oc0;
            var _oc6 = _oby.get_slotnums(463);
            return _oc0.add(_oc2.multiply(_oc6)), _oc0;
        };
    },
    92174: (_oc7, _oc8, _oc9) => {
        'use strict';
        var _oca = null;
        defineModule(_oc8);
        Object.defineProperty(_oc8, '__esModule', {
            'value': true
        }), _oc8.getSlot464PersonalEffect = void 0;
        var _ocb = _oc9(74496);
        _oc8.getSlot464PersonalEffect = function(_occ) {
            var _ocd = null,
                _oce = new _ocb.SlotItemEffectModel(),
                _ocf = false,
                _ocg = new _ocb.SlotItemEffectModel(),
                _och = _occ.get_slotnums(142),
                _oci = _occ.get_slotnums(460),
                _ocj = _och + _oci;
            if (37 == _occ.ctype ? (_ocg.tyku += 3, _ocg.kaih += 2, _ocj >= 1 && (_oce.tyku += 2, _oce.kaih += 1, _oce.houm += 1), _ocf = true) : 6 != _occ.ctype && 73 != _occ.ctype && 113 != _occ.ctype || (_ocg.tyku = _ocg.tyku - 2, _ocg.kaih = _ocg.kaih - 2, _ocf = true), 916 != _occ.ship_id && 911 != _occ.ship_id && 546 != _occ.ship_id && 593 != _occ.ship_id && 954 != _occ.ship_id || (_ocg.tyku += 2, _ocg.kaih += 2, _oci >= 1 && (_oce.houg += 2, _oce.tyku += 2, _oce.kaih += 2, _oce.houm += 3), _ocf = true), 0 == _ocf) return _oce;
            var _ock = _occ.get_slotnums(464);
            return _oce.add(_ocg.multiply(_ock)), _oce;
        };
    },
    38003: (_ocl, _ocm, _ocn) => {
        'use strict';
        var _oco = null;
        defineModule(_ocm);
        Object.defineProperty(_ocm, '__esModule', {
            'value': true
        }), _ocm.getSlot465PersonalEffect = void 0;
        var _ocp = _ocn(74496);
        _ocm.getSlot465PersonalEffect = function(_ocq) {
            var _ocr = null,
                _ocs = new _ocp.SlotItemEffectModel(),
                _oct = false,
                _ocu = new _ocp.SlotItemEffectModel(),
                _ocv = _ocq.get_slotnums(142),
                _ocw = _ocq.get_slotnums(460),
                _ocx = _ocv + _ocw;
            if (916 == _ocq.ship_id ? (_ocu.houg += 2, _ocu.kaih += 8, _ocu.houm += 2, _ocw >= 1 && (_ocs.kaih += 2, _ocs.houm += 1), _oct = true) : 911 != _ocq.ship_id && 546 != _ocq.ship_id || (_ocu.houg += 1, _ocu.kaih += 2, _ocu.houm += 1, _ocw >= 1 && (_ocs.kaih += 1, _ocs.houm += 1), _oct = true), 37 == _ocq.ctype && _ocx >= 1 && (_ocs.houg += 2, _ocs.houm += 2), 0 == _oct) return _ocs;
            var _ocy = _ocq.get_slotnums(465);
            return _ocs.add(_ocu.multiply(_ocy)), _ocs;
        };
    },
    65455: (_ocz, _od0, _od1) => {
        'use strict';
        var _od2 = null;
        defineModule(_od0);
        Object.defineProperty(_od0, '__esModule', {
            'value': true
        }), _od0.getSlot466PersonalEffect = void 0;
        var _od3 = _od1(74496);
        _od0.getSlot466PersonalEffect = function(_od4) {
            var _od5 = null,
                _od6 = new _od3.SlotItemEffectModel(),
                _od7 = false,
                _od8 = new _od3.SlotItemEffectModel();
            if (277 == _od4.ship_id || 278 == _od4.ship_id || 156 == _od4.ship_id || 288 == _od4.ship_id || 112 == _od4.ship_id || 280 == _od4.ship_id || 279 == _od4.ship_id ? (_od8.houg += 1, _od8.houm += 1, _od7 = true) : 461 == _od4.ship_id || 462 == _od4.ship_id || 466 == _od4.ship_id || 467 == _od4.ship_id ? (_od8.houg += 2, _od8.kaih += 2, _od8.houm += 1, _od7 = true) : 594 != _od4.ship_id && 698 != _od4.ship_id && 646 != _od4.ship_id && 599 != _od4.ship_id && 610 != _od4.ship_id && 196 != _od4.ship_id && 197 != _od4.ship_id || (_od8.houg += 1, _od8.kaih += 1, _od8.houm += 2, _od7 = true), 0 == _od7) return _od6;
            var _od9 = _od4.get_slotnums(466);
            return _od6.add(_od8.multiply(_od9)), _od6;
        };
    },
    70362: (_oda, _odb, _odc) => {
        'use strict';
        var _odd = null;
        defineModule(_odb);
        Object.defineProperty(_odb, '__esModule', {
            'value': true
        }), _odb.getSlot467PersonalEffect = void 0;
        var _ode = _odc(74496);
        _odb.getSlot467PersonalEffect = function(_odf) {
            var _odg = null,
                _odh = new _ode.SlotItemEffectModel(),
                _odi = false,
                _odj = new _ode.SlotItemEffectModel();
            if ('アメリカ' == _odf.getCountryName()) {
                for (var _odk = _odf.getUSSWaterRaderDict(), _odl = _odf.getUSSAirRaderDict(), _odm = 0, _odn = 0, _odo = 0, _odp = _odf.have_slot_ids(); _odo < _odp.length; _odo++) {
                    var _odq = _odp[_odo];
                    _odk[parseInt(_odq)] && (_odm += _odf.get_slotnums(parseInt(_odq))), _odl[parseInt(_odq)] && (_odn += _odf.get_slotnums(parseInt(_odq)));
                }
                _odj.houg += 1, _odj.tyku += 1, _odj.kaih += 2, _odm >= 1 && (_odh.houg += 1, _odh.tyku += 1, _odh.kaih += 1, _odh.houm += 2), _odn >= 1 && (_odh.tyku += 2, _odh.kaih += 2), 65 != _odf.ctype && 93 != _odf.ctype && 102 != _odf.ctype && 107 != _odf.ctype && 125 != _odf.ctype || (_odj.tyku += 2, _odj.kaih += 1), _odi = true;
            }
            if (0 == _odi) return _odh;
            var _odr = _odf.get_slotnums(467);
            return _odh.add(_odj.multiply(_odr)), _odh;
        };
    },
    68086: (_ods, _odt, _odu) => {
        'use strict';
        var _odv = null;
        defineModule(_odt);
        Object.defineProperty(_odt, '__esModule', {
            'value': true
        }), _odt.getSlot470PersonalEffect = void 0;
        var _odw = _odu(74496);
        _odt.getSlot470PersonalEffect = function(_odx) {
            var _ody = null,
                _odz = new _odw.SlotItemEffectModel(),
                _oe0 = false,
                _oe1 = new _odw.SlotItemEffectModel(),
                _oe2 = _odx.get_slotnums(470),
                _oe3 = _odx.get_slotnums(529),
                _oe4 = _oe2 + _oe3,
                _oe5 = _odx.get_each_level_over_nums([470, 529]),
                _oe6 = (_oe5.slot[470], _oe5.slot[529]),
                _oe7 = _oe5.total,
                _oe8 = 0;
            23 == _odx.ctype || 18 == _odx.ctype ? (_oe1.houg += 1, _oe0 = true, _oe8 = 1) : 30 == _odx.ctype && (_oe1.houg += 2, _oe0 = true, _oe8 = 2), ('しぐれ' == _odx.yomi || 'ゆきかぜ' == _odx.yomi || 'いそかぜ' == _odx.yomi) && (_oe1.kaih += 2, _oe0 = true), 405 == _odx.ship_id || 246 == _odx.ship_id || 144 == _odx.ship_id || 145 == _odx.ship_id || 497 == _odx.ship_id ? (_oe3 >= 1 && (_odz.houg += 1 * _oe3, _odz.tyku += 1 * _oe3, _odz.houm += 1 * _oe3, _odz.kaih += 1 * _oe3), 2 == _oe3 ? _odz.houg += 1 : _oe3 >= 3 && (_odz.houg += 3), _oe6[8] >= 1 && (_odz.tyku += 1 * _oe6[8]), _oe6[10] >= 1 && (_odz.houg += 1 * _oe6[10])) : 323 == _odx.ship_id || 498 == _odx.ship_id || 961 == _odx.ship_id ? (_oe3 >= 1 && (_odz.houg += 2 * _oe3, _odz.tyku += 2 * _oe3, _odz.houm += 1 * _oe3, _odz.kaih += 1 * _oe3), 2 == _oe3 ? _odz.houg += 2 : _oe3 >= 3 && (_odz.houg += 4), _oe6[6] >= 1 && (_odz.tyku += 1 * _oe6[6]), _oe6[8] >= 1 && (_odz.houm += 1 * _oe6[8]), _oe6[10] >= 1 && (_odz.houg += 1 * _oe6[10])) : 975 == _odx.ship_id && (_oe3 >= 1 && (_odz.houg += 3 * _oe3, _odz.tyku += 3 * _oe3, _odz.houm += 2 * _oe3, _odz.kaih += 2 * _oe3), 2 == _oe3 ? _odz.houg += 3 : _oe3 >= 3 && (_odz.houg += 6), _oe6[4] >= 1 && (_odz.tyku += 1 * _oe6[4]), _oe6[6] >= 1 && (_odz.houg += 1 * _oe6[6]), _oe6[8] >= 1 && (_odz.houm += 1 * _oe6[8]), _oe6[10] >= 1 && (_odz.houg += 1 * _oe6[10])), 961 == _odx.ship_id && (_oe1.houg += 3, _oe1.houm += 3, _oe1.kaih += 2, _oe0 = true), 566 != _odx.ship_id && 567 != _odx.ship_id && 568 != _odx.ship_id && 656 != _odx.ship_id && 670 != _odx.ship_id && 915 != _odx.ship_id && 651 != _odx.ship_id && 145 != _odx.ship_id && 961 != _odx.ship_id && 951 != _odx.ship_id || (_odz.houg += 1, _odz.houm += 2, _oe4 >= 2 && (_odz.houg += 2), _oe7[5] >= 1 && (_odz.houm += 1 * _oe7[5]), _oe7[8] >= 1 && (_odz.houg += 1 * _oe7[8]), _oe7[10] >= 1 && (_odz.houm += 1 * _oe7[10])), _oe0 && _odz.add(_oe1.multiply(_oe4));
            var _oe9 = _odx.get_have_rader_nums(),
                _oea = _oe9.water_rader,
                _oeb = _oe9.air_rader;
            return _oea >= 1 && (1 == _oe8 ? (_odz.houg += 1, _odz.raig += 3, _odz.kaih += 1, _odz.houm += 1) : 2 == _oe8 && (_odz.houg += 2, _odz.raig += 3, _odz.kaih += 1, _odz.houm += 3)), _oeb >= 1 && (_oe3 >= 1 && (_odz.tyku += 2, _odz.kaih += 2), 2 == _oe3 ? _odz.tyku += 2 : _oe3 >= 3 && (_odz.tyku += 4)), _odz;
        };
    },
    78173: (_oec, _oed, _oee) => {
        'use strict';
        var _oef = null;
        defineModule(_oed);
        Object.defineProperty(_oed, '__esModule', {
            'value': true
        }), _oed.getSlot471PersonalEffect = void 0;
        var _oeg = _oee(74496);
        _oed.getSlot471PersonalEffect = function(_oeh) {
            var _oei = null,
                _oej = new _oeg.SlotItemEffectModel(),
                _oek = false,
                _oel = new _oeg.SlotItemEffectModel(),
                _oem = 0;
            if ('フランス' == _oeh.getCountryName() && (_oel.houg += 2, _oel.kaih += 2, _oel.houm += 2, _oek = true, _oem = 1), 79 == _oeh.ctype && (_oel.houg += 2, _oel.houm += 1, _oek = true), 0 == _oek) return _oej;
            var _oen = _oeh.get_slotnums(471);
            if (_oej.add(_oel.multiply(_oen)), 0 == _oem) return _oej;
            var _oeo = _oeh.get_each_level_nums(471),
                _oep = 0,
                _oeq = 0;
            if (_oem > 0 && _oeo.forEach(function(_oer, _oes) {
                    _oes >= 6 && (_oep += _oer), _oes >= 8 && (_oeq += _oer);
                }), 1 == _oem) {
                _oep >= 1 && (_oej.kaih += 1 * _oep, _oej.houm += 1 * _oep), _oeq >= 1 && (_oej.houg += 1 * _oeq, _oej.kaih += 1 * _oeq, _oej.houm += 1 * _oeq);
                var _oet = _oeo[10];
                _oet >= 1 && (_oej.houg += 1 * _oet, _oej.houm += 1 * _oet);
            }
            return _oej;
        };
    },
    22581: (_oeu, _oev, _oew) => {
        'use strict';
        var _oex = null;
        defineModule(_oev);
        Object.defineProperty(_oev, '__esModule', {
            'value': true
        }), _oev.getSlot472PersonalEffect = void 0;
        var _oey = _oew(74496);
        _oev.getSlot472PersonalEffect = function(_oez) {
            var _of0 = null,
                _of1 = new _oey.SlotItemEffectModel(),
                _of2 = false,
                _of3 = new _oey.SlotItemEffectModel(),
                _of4 = _oez.getCountryName();
            if ('アメリカ' == _of4 && (_of3.tais += 2, _of2 = true), 'イギリス' == _of4 && (_of3.tais += 1, _of2 = true), 1 == _oez.stype && (_of3.kaih += 1, _of2 = true), _of2) {
                var _of5 = _oez.get_slotnums(472);
                _of1.add(_of3.multiply(_of5));
            }
            return 920 == _oez.ship_id && (_of1.tais += 1, _of1.kaih += 1, _of1.houm += 1), _of1;
        };
    },
    13053: (_of6, _of7, _of8) => {
        'use strict';
        var _of9 = null;
        defineModule(_of7);
        Object.defineProperty(_of7, '__esModule', {
            'value': true
        }), _of7.getSlot473PersonalEffect = void 0;
        var _ofa = _of8(74496);
        _of7.getSlot473PersonalEffect = function(_ofb) {
            var _ofc = null,
                _ofd = new _ofa.SlotItemEffectModel(),
                _ofe = false,
                _off = new _ofa.SlotItemEffectModel(),
                _ofg = _ofb.getCountryName();
            if ('アメリカ' == _ofg && (_off.houg += 1, _off.kaih += 1, _off.tyku += 1, _ofe = true), 'イギリス' == _ofg && (_off.houg += 1, _off.kaih += 1, _ofe = true), 0 == _ofe) return _ofd;
            var _ofh = _ofb.get_slotnums(473);
            return _ofd.add(_off.multiply(_ofh)), _ofd;
        };
    },
    47874: (_ofi, _ofj, _ofk) => {
        'use strict';
        var _ofl = null;
        defineModule(_ofj);
        Object.defineProperty(_ofj, '__esModule', {
            'value': true
        }), _ofj.getSlot474PersonalEffect = void 0;
        var _ofm = _ofk(74496);
        _ofj.getSlot474PersonalEffect = function(_ofn) {
            var _ofo = null,
                _ofp = new _ofm.SlotItemEffectModel(),
                _ofq = false,
                _ofr = new _ofm.SlotItemEffectModel(),
                _ofs = _ofn.getCountryName();
            if ('アメリカ' == _ofs && (_ofr.houg += 2, _ofr.kaih += 1, _ofr.tyku += 1, _ofq = true), 'イギリス' == _ofs && (_ofr.houg += 1, _ofr.kaih += 1, _ofr.tyku += 1, _ofq = true), 'フランス' == _ofs && (_ofr.houg += 1, _ofr.tyku += 1, _ofq = true), 707 != _ofn.ship_id && 930 != _ofn.ship_id || (_ofr.houg += 1, _ofr.kaih += 1, _ofq = true), 0 == _ofq) return _ofp;
            var _oft = _ofn.get_slotnums(474);
            return _ofp.add(_ofr.multiply(_oft)), _ofp;
        };
    },
    42788: (_ofu, _ofv, _ofw) => {
        'use strict';
        var _ofx = null;
        defineModule(_ofv);
        Object.defineProperty(_ofv, '__esModule', {
            'value': true
        }), _ofv.getSlot478PersonalEffect = void 0;
        var _ofy = _ofw(74496);
        _ofv.getSlot478PersonalEffect = function(_ofz) {
            var _og0 = null,
                _og1 = new _ofy.SlotItemEffectModel(),
                _og2 = _ofz.get_each_level_nums(478),
                _og3 = [];
            return _og2.forEach(function(_og4, _og5) {
                var _og6 = null;
                for (var _og7 = 1; _og7 <= _ofz.SLOT_LEVEL_MAX; _og7++) _og5 >= _og7 && (null == _og3[_og7] && (_og3[_og7] = 0), _og3[_og7] += _og4);
            }), _og3.every(function(_og8) {
                return 0 == _og8;
            }) || (_og3[1] >= 1 && (_og1.houg += 1), _og3[2] >= 1 && (_og1.houm += 1), _og3[3] >= 1 && (_og1.kaih += 1), _og3[4] >= 1 && (_og1.baku += 1), _og3[5] >= 1 && (_og1.raig += 1), _og3[6] >= 1 && (_og1.tyku += 1), _og3[7] >= 1 && (_og1.houg += 1), _og3[8] >= 1 && (_og1.houm += 1), _og3[9] >= 1 && (_og1.kaih += 1), _og3[10] >= 1 && (_og1.houg += 1)), _og1;
        };
    },
    22218: (_og9, _oga, _ogb) => {
        'use strict';
        var _ogc = null;
        defineModule(_oga);
        Object.defineProperty(_oga, '__esModule', {
            'value': true
        }), _oga.getSlot47PersonalEffect = void 0;
        var _ogd = _ogb(74496);
        _oga.getSlot47PersonalEffect = function(_oge) {
            var _ogf = null,
                _ogg = new _ogd.SlotItemEffectModel(),
                _ogh = new _ogd.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_oge.yomi) >= 0 ? (_ogh.tais += 3, _ogh.kaih += 2, _ogh.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_oge.yomi) >= 0 && (_ogh.tais += 2, _ogh.kaih += 2), !_ogh.exists()) return _ogg;
            var _ogi = _oge.get_slotnums(47) + _oge.get_slotnums(438);
            return _ogg = _ogh.multiply(_ogi);
        };
    },
    57664: (_ogj, _ogk, _ogl) => {
        'use strict';
        var _ogm = null;
        defineModule(_ogk);
        Object.defineProperty(_ogk, '__esModule', {
            'value': true
        }), _ogk.getSlot483PersonalEffect = void 0;
        var _ogn = _ogl(74496);
        _ogk.getSlot483PersonalEffect = function(_ogo) {
            var _ogp = null,
                _ogq = new _ogn.SlotItemEffectModel(),
                _ogr = 0,
                _ogs = 0,
                _ogt = 0,
                _ogu = 0,
                _ogv = 0,
                _ogw = 0,
                _ogx = 0;
            if (6 == _ogo.ctype ? (_ogq.houg += 2, _ogq.tyku += 3, _ogq.houm += 1, _ogr = 1) : 2 == _ogo.ctype ? (_ogq.houg += 1, _ogq.tyku += 2, _ogq.kaih += 2, _ogq.houm += 1, _ogs = 1) : 37 == _ogo.ctype && (_ogt = 1), 8 == _ogo.stype || 9 == _ogo.stype || 10 == _ogo.stype ? _ogu = 1 : 5 != _ogo.stype && 6 != _ogo.stype || (_ogv = 1), 149 == _ogo.ship_id ? (_ogq.houg += 2, _ogq.tyku += 2) : 591 == _ogo.ship_id ? (_ogq.houg += 3, _ogq.tyku += 3, _ogq.kaih += 1) : 150 == _ogo.ship_id ? (_ogq.houg += 1, _ogq.tyku += 1) : 592 == _ogo.ship_id ? (_ogq.houg += 2, _ogq.tyku += 2, _ogq.kaih += 2) : 151 == _ogo.ship_id ? (_ogq.houg += 1, _ogq.tyku += 2, _ogq.kaih += 2) : 593 == _ogo.ship_id ? (_ogq.houg += 2, _ogq.tyku += 5, _ogq.kaih += 3) : 954 == _ogo.ship_id ? (_ogq.houg += 2, _ogq.tyku += 4, _ogq.kaih += 2) : 152 == _ogo.ship_id ? (_ogq.houg += 2, _ogq.tyku += 2) : 911 == _ogo.ship_id || 916 == _ogo.ship_id || 546 == _ogo.ship_id ? (_ogq.houg += 2, _ogq.tyku += 2, _ogq.kaih += 2, _ogw = 1) : 553 == _ogo.ship_id || 554 == _ogo.ship_id ? (_ogq.houg += 1, _ogq.tyku += 2, _ogq.kaih += 1, _ogx = 1) : 541 == _ogo.ship_id || 411 == _ogo.ship_id || 412 == _ogo.ship_id ? (_ogq.houg += 1, _ogq.tyku += 2) : 573 == _ogo.ship_id && (_ogq.houg += 2, _ogq.tyku += 2, _ogq.kaih += 1), 0 == [_ogr, _ogs, _ogt, _ogu, _ogv, _ogw, _ogx].reduce(function(_ogy, _ogz) {
                    return _ogy + _ogz;
                }, 0)) return _ogq;
            var _oh0 = _ogo.get_each_level_nums(483),
                _oh1 = 0,
                _oh2 = [];
            return _oh0.forEach(function(_oh3, _oh4) {
                var _oh5 = null;
                _oh4 >= 6 && (_oh1 += _oh3);
                for (var _oh6 = 1; _oh6 <= _ogo.SLOT_LEVEL_MAX; _oh6++) null == _oh2[_oh6] && (_oh2[_oh6] = 0), _oh4 >= _oh6 && (_oh2[_oh6] += _oh3);
            }), 1 == _ogr ? (_oh1 >= 1 && (_ogq.houm += 1), _oh0[10] >= 1 && (_ogq.houm += 1)) : 1 == _ogs ? (_oh2[5] >= 1 && (_ogq.kaih += 1), _oh2[6] >= 1 && (_ogq.houm += 1), _oh2[10] >= 1 && (_ogq.kaih += 1)) : 1 == _ogt && (_oh2[6] >= 1 && (_ogq.houm += 1), _oh2[10] >= 1 && (_ogq.kaih += 1)), 1 == _ogu ? (_oh2[2] >= 1 && (_ogq.tyku += 1), _oh2[4] >= 1 && (_ogq.houg += 1), _oh2[7] >= 1 && (_ogq.kaih += 1), _oh2[8] >= 1 && (_ogq.tyku += 1), _oh2[9] >= 1 && (_ogq.houg += 1)) : 1 == _ogv && (_oh2[2] >= 1 && (_ogq.tyku += 1), _oh2[4] >= 1 && (_ogq.houg += 1), _oh2[6] >= 1 && (_ogq.kaih += 1), _oh2[8] >= 1 && (_ogq.houm += 1), _oh2[10] >= 1 && (_ogq.houg += 1)), 1 == _ogw ? _oh2[5] >= 1 && (_ogq.houm += 1) : 1 == _ogx && (_oh2[1] >= 1 && (_ogq.houm += 1), _oh2[3] >= 1 && (_ogq.houm += 1)), _ogq;
        };
    },
    44990: (_oh7, _oh8, _oh9) => {
        'use strict';
        var _oha = null;
        defineModule(_oh8);
        Object.defineProperty(_oh8, '__esModule', {
            'value': true
        }), _oh8.getSlot485PersonalEffect = void 0;
        var _ohb = _oh9(74496);
        _oh8.getSlot485PersonalEffect = function(_ohc) {
            var _ohd = null,
                _ohe = new _ohb.SlotItemEffectModel(),
                _ohf = false,
                _ohg = new _ohb.SlotItemEffectModel();
            if (9 == _ohc.ctype && (_ohg.houg += 1, _ohg.kaih += 2, _ohg.tyku += 3, _ohf = true), 501 == _ohc.ship_id || 506 == _ohc.ship_id ? (_ohg.kaih += 1, _ohg.tyku += 2, _ohg.houm += 1, _ohf = true) : 502 != _ohc.ship_id && 507 != _ohc.ship_id || (_ohg.kaih += 1, _ohg.tyku += 1, _ohg.houm += 1, _ohf = true), _ohf) {
                var _ohh = _ohc.get_slotnums(485);
                _ohe.add(_ohg.multiply(_ohh));
            }
            var _ohi = _ohc.get_each_level_nums(485),
                _ohj = 0,
                _ohk = 0,
                _ohl = 0,
                _ohm = _ohi[10];
            return _ohi.forEach(function(_ohn, _oho) {
                _oho >= 3 && (_ohj += _ohn), _oho >= 5 && (_ohk += _ohn), _oho >= 7 && (_ohl += _ohn);
            }), _ohj > 0 && (_ohe.houg += 1 * _ohj), _ohk > 0 && (_ohe.tyku += 1 * _ohk), _ohl > 0 && (_ohe.kaih += 1 * _ohl), _ohm > 0 && (_ohe.houm += 1 * _ohm), _ohe;
        };
    },
    83957: (_ohp, _ohq, _ohr) => {
        'use strict';
        var _ohs = null;
        defineModule(_ohq);
        Object.defineProperty(_ohq, '__esModule', {
            'value': true
        }), _ohq.getSlot486PersonalEffect = void 0;
        var _oht = _ohr(74496);
        _ohq.getSlot486PersonalEffect = function(_ohu) {
            var _ohv = null,
                _ohw = new _oht.SlotItemEffectModel(),
                _ohx = false,
                _ohy = new _oht.SlotItemEffectModel();
            if (894 == _ohu.ship_id || 899 == _ohu.ship_id ? (_ohy.houg += 4, _ohy.tyku += 4, _ohy.kaih += 3, _ohy.houm += 2, _ohx = true) : 888 != _ohu.ship_id && 883 != _ohu.ship_id || (_ohy.houg += 2, _ohy.tyku += 2, _ohy.kaih += 2, _ohy.houm += 1, _ohx = true), _ohx) {
                var _ohz = _ohu.get_slotnums(486);
                _ohw.add(_ohy.multiply(_ohz));
            }
            var _oi0 = _ohu.get_each_level_nums(486),
                _oi1 = 0,
                _oi2 = 0,
                _oi3 = _oi0[10];
            return _oi0.forEach(function(_oi4, _oi5) {
                _oi5 >= 6 && (_oi1 += _oi4), _oi5 >= 8 && (_oi2 += _oi4);
            }), _oi1 > 0 && (_ohw.kaih += 1 * _oi1, _ohw.houm += 1 * _oi1), _oi2 > 0 && (_ohw.tyku += 1 * _oi2, _ohw.kaih += 1 * _oi2), _oi3 > 0 && (_ohw.houg += 1 * _oi3, _ohw.houm += 1 * _oi3), _ohw;
        };
    },
    78539: (_oi6, _oi7, _oi8) => {
        'use strict';
        var _oi9 = null;
        defineModule(_oi7);
        Object.defineProperty(_oi7, '__esModule', {
            'value': true
        }), _oi7.getSlot487PersonalEffect = void 0;
        var _oia = _oi8(74496);
        _oi7.getSlot487PersonalEffect = function(_oib) {
            var _oic = null,
                _oid = new _oia.SlotItemEffectModel(),
                _oie = false,
                _oif = new _oia.SlotItemEffectModel();
            if (894 == _oib.ship_id || 899 == _oib.ship_id ? (_oif.houg += 5, _oif.tyku += 3, _oif.kaih += 2, _oif.houm += 4, _oie = true) : 888 != _oib.ship_id && 883 != _oib.ship_id || (_oif.houg += 3, _oif.tyku += 1, _oif.kaih += 1, _oif.houm += 2, _oie = true), _oie) {
                var _oig = _oib.get_slotnums(487);
                _oid.add(_oif.multiply(_oig));
            }
            var _oih = _oib.get_each_level_nums(487),
                _oii = 0,
                _oij = 0,
                _oik = _oih[10];
            return _oih.forEach(function(_oil, _oim) {
                _oim >= 6 && (_oii += _oil), _oim >= 8 && (_oij += _oil);
            }), _oii > 0 && (_oid.houg += 1 * _oii, _oid.kaih += 1 * _oii), _oij > 0 && (_oid.tyku += 1 * _oij, _oid.houm += 1 * _oij), _oik > 0 && (_oid.houg += 1 * _oik, _oid.houm += 1 * _oik), _oid;
        };
    },
    96282: (_oin, _oio, _oip) => {
        'use strict';
        var _oiq = null;
        defineModule(_oio);
        Object.defineProperty(_oio, '__esModule', {
            'value': true
        }), _oio.getSlot488PersonalEffect = void 0;
        var _oir = _oip(74496);
        _oio.getSlot488PersonalEffect = function(_ois) {
            var _oit = null,
                _oiu = new _oir.SlotItemEffectModel(),
                _oiv = false,
                _oiw = new _oir.SlotItemEffectModel(),
                _oix = 0,
                _oiy = _ois.getCountryName(),
                _oiz = {
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
                }[_ois.ship_id];
            if (('日本' == _oiy && 2 == _ois.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_ois.ctype] && 1 == _ois.stype) && (_oiw.tais += 1, _oiw.kaih += 1, _oiv = true), 1 == _oiz ? (_oiw.tais += 5, _oiw.kaih += 4, _oiw.houm += 2, _oiv = true, _oix = 1) : 2 == _oiz ? (_oiw.tais += 2, _oiw.kaih += 1, _oiw.houm += 1, _oiv = true, _oix = 2) : 3 == _oiz && (_oiw.tais += 1, _oiv = true, _oix = 2), 0 == _oiv) return _oiu;
            var _oj0 = _ois.get_slotnums(488);
            if (_oiu.add(_oiw.multiply(_oj0)), 0 == _oix) return _oiu;
            var _oj1 = _ois.get_each_level_nums(488),
                _oj2 = [];
            return _oj1.forEach(function(_oj3, _oj4) {
                var _oj5 = null;
                for (var _oj6 = 1; _oj6 <= _ois.SLOT_LEVEL_MAX; _oj6++) _oj4 >= _oj6 && (null == _oj2[_oj6] && (_oj2[_oj6] = 0), _oj2[_oj6] += _oj3);
            }), 1 == _oix ? (_oj2[3] >= 1 && (_oiu.kaih += 1 * _oj2[3]), _oj2[5] >= 1 && (_oiu.tais += 1 * _oj2[5]), _oj2[7] >= 1 && (_oiu.houm += 1 * _oj2[7]), _oj2[8] >= 1 && (_oiu.kaih += 1 * _oj2[8]), _oj2[9] >= 1 && (_oiu.tais += 1 * _oj2[9]), _oj2[10] >= 1 && (_oiu.tais += 1 * _oj2[10])) : 2 == _oix && (_oj2[5] >= 1 && (_oiu.tais += 1 * _oj2[5]), _oj2[7] >= 1 && (_oiu.kaih += 1 * _oj2[7]), _oj2[9] >= 1 && (_oiu.houm += 1 * _oj2[9]), _oj2[10] >= 1 && (_oiu.tais += 1 * _oj2[10])), _oiu;
        };
    },
    49679: (_oj7, _oj8, _oj9) => {
        'use strict';
        var _oja = null;
        defineModule(_oj8);
        Object.defineProperty(_oj8, '__esModule', {
            'value': true
        }), _oj8.getSlot489PersonalEffect = void 0;
        var _ojb = _oj9(74496);
        _oj8.getSlot489PersonalEffect = function(_ojc) {
            var _ojd = null,
                _oje = new _ojb.SlotItemEffectModel(),
                _ojf = false,
                _ojg = new _ojb.SlotItemEffectModel();
            if ('あきつまる' != _ojc.yomi && 'やましおまる' != _ojc.yomi && 'くまのまる' != _ojc.yomi || (_ojg.tyku = _ojg.tyku + 2, _ojg.kaih = _ojg.kaih + 1, _ojg.houg = _ojg.houg + 1, _ojg.tais = _ojg.tais + 1, _ojg.houm = _ojg.houm + 1, _ojf = true), 717 != _ojc.ship_id && 948 != _ojc.ship_id || (_ojg.tyku = _ojg.tyku + 2, _ojg.kaih = _ojg.kaih + 2, _ojg.houg = _ojg.houg + 2, _ojg.tais = _ojg.tais + 1, _ojg.houm = _ojg.houm + 1, _ojf = true), _ojf) {
                var _ojh = _ojc.get_slotnums(489) + _ojc.get_slotnums(491);
                _oje.add(_ojg.multiply(_ojh));
            }
            var _oji = _ojc.get_each_level_nums(489),
                _ojj = _ojc.get_each_level_nums(491),
                _ojk = 0,
                _ojl = 0,
                _ojm = 0;
            _oji.forEach(function(_ojn, _ojo) {
                _ojo >= 3 && (_ojk += _ojn), _ojo >= 6 && (_ojl += _ojn), _ojo >= 8 && (_ojm += _ojn);
            }), _ojj.forEach(function(_ojp, _ojq) {
                _ojq >= 3 && (_ojk += _ojp), _ojq >= 6 && (_ojl += _ojp), _ojq >= 8 && (_ojm += _ojp);
            });
            var _ojr = _oji[10] + _ojj[10];
            return _ojk >= 1 && (_oje.kaih = _oje.kaih + 1 * _ojk), _ojl >= 1 && (_oje.tais = _oje.tais + 1 * _ojl), _ojm >= 1 && (_oje.houm = _oje.houm + 1 * _ojm), _ojr >= 1 && (_oje.houg = _oje.houg + 1 * _ojr), _oje;
        };
    },
    90312: function(_ojs, _ojt, _oju) {
        'use strict';
        var _ojv = null;
        var _ojw = this && this.__importDefault || function(_ojx) {
            var _ojy = null;
            return _ojx && _ojx.__esModule ? _ojx : {
                'default': _ojx
            };
        };
        defineModule(_ojt);
        Object.defineProperty(_ojt, '__esModule', {
            'value': true
        }), _ojt.getSlot502PersonalEffect = void 0;
        var _ojz = _oju(74496),
            _ok0 = _ojw(_oju(18622));
        _ojt.getSlot502PersonalEffect = function(_ok1) {
            var _ok2 = null,
                _ok3 = new _ojz.SlotItemEffectModel(),
                _ok4 = _ok1.get_slotnums(502),
                _ok5 = {
                    149: 2,
                    591: 2,
                    150: 1,
                    592: 1,
                    152: 1,
                    151: 2,
                    593: 5,
                    954: 3
                },
                _ok6 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _ok7 = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    150: 3,
                    592: 3,
                    149: 3,
                    152: 3
                },
                _ok8 = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _ok9 = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_ok5[_ok1.ship_id]) {
                var _oka = _ok5[_ok1.ship_id];
                _ok3.houg += _ok4 * _oka;
            }
            if (_ok6[_ok1.ship_id]) {
                var _okb = _ok6[_ok1.ship_id];
                _ok3.tyku += _ok4 * _okb;
            }
            if (_ok7[_ok1.ship_id]) {
                var _okc = _ok7[_ok1.ship_id],
                    _okd = _ok1.get_each_level_nums(502),
                    _oke = [];
                _okd.forEach(function(_okf, _okg) {
                    var _okh = null;
                    for (var _oki = 1; _oki <= _ok1.SLOT_LEVEL_MAX; _oki++) _okg >= _oki && (null == _oke[_oki] && (_oke[_oki] = 0), _oke[_oki] += _okf);
                }), 1 == _okc ? (_ok3.kaih += 3 * _ok4, _oke[1] > 0 && (_ok3.kaih += 1 * _oke[1]), _oke[3] > 0 && (_ok3.tyku += 1 * _oke[3]), _oke[5] > 0 && (_ok3.houg += 1 * _oke[5]), _oke[7] > 0 && (_ok3.kaih += 1 * _oke[7]), _oke[8] > 0 && (_ok3.tyku += 1 * _oke[8]), _oke[9] > 0 && (_ok3.houg += 1 * _oke[9]), _oke[10] > 0 && (_ok3.tyku += 1 * _oke[10])) : 2 == _okc ? (_ok3.kaih += 1 * _ok4, _oke[2] > 0 && 151 == _ok1.ship_id && (_ok3.kaih += 1 * _oke[2]), _oke[4] > 0 && (_ok3.tyku += 1 * _oke[4]), _oke[6] > 0 && (_ok3.houg += 1 * _oke[6]), _oke[8] > 0 && (_ok3.kaih += 1 * _oke[8]), _oke[10] > 0 && (_ok3.tyku += 1 * _oke[10])) : 3 == _okc && (_oke[5] > 0 && (_ok3.kaih += 1 * _oke[5]), _oke[8] > 0 && (_ok3.houg += 1 * _oke[8]), _oke[10] > 0 && (_ok3.tyku += 1 * _oke[10]));
            }
            if (_ok8[_ok1.ship_id]) {
                for (var _okj = 0, _okk = 0, _okl = _ok1.have_slot_ids(); _okk < _okl.length; _okk++) {
                    var _okm = _okl[_okk],
                        _okn = _ok0.default.model.slot.getMst(_okm),
                        _oko = _okn.equipType;
                    12 != _oko && 13 != _oko || (_okn.sakuteki >= 5 && (_okj += _ok1.get_slotnums(parseInt(_okm))), _okn.taiku >= 2 && _ok1.get_slotnums(parseInt(_okm)));
                }
                0;
                var _okp = _ok8[_ok1.ship_id];
                1 == _okp && _okj >= 1 ? (_ok3.houg += 3, _ok3.kaih += 4) : 2 == _okp && _okj >= 1 && (_ok3.houg += 2, _ok3.kaih += 2);
            }
            if (_ok9[_ok1.ship_id]) {
                var _okq = _ok9[_ok1.ship_id],
                    _okr = [],
                    _oks = [],
                    _okt = _ok1.have_slot_ids();
                [410, 411].forEach(function(_oku) {
                    var _okv = null;
                    _okt.indexOf(_oku.toString()) > -1 && (_oks[_oku] = _ok1.get_each_level_nums(_oku), null == _okr[_oku] && (_okr[_oku] = []), _oks[_oku].forEach(function(_okw, _okx) {
                        var _oky = null;
                        for (var _okz = 1; _okz <= _ok1.SLOT_LEVEL_MAX; _okz++) null == _okr[_oku][_okz] && (_okr[_oku][_okz] = 0), _okx >= _okz && (_okr[_oku][_okz] += _okw);
                    }));
                });
                var _ol0 = _oks[410],
                    _ol1 = _oks[411];
                if (1 == _okq) {
                    if (_ol0) {
                        _ok3.tyku += 1;
                        var _ol2 = _okr[410];
                        _ol2[7] >= 1 && (_ok3.houg += 1), _ol2[10] >= 1 && (_ok3.kaih += 1);
                    }
                    if (_ol1) {
                        _ok3.tyku += 2;
                        var _ol3 = _okr[411];
                        _ol3[2] >= 1 && (_ok3.houg += 1), _ol3[4] >= 1 && (_ok3.kaih += 1), _ol3[6] >= 1 && (_ok3.houm += 1), _ol3[8] >= 1 && (_ok3.tyku += 1), _ol3[10] >= 1 && (_ok3.houg += 1);
                    }
                }
            }
            return _ok3;
        };
    },
    86856: function(_ol4, _ol5, _ol6) {
        'use strict';
        var _ol7 = null;
        var _ol8 = this && this.__importDefault || function(_ol9) {
            var _ola = null;
            return _ol9 && _ol9.__esModule ? _ol9 : {
                'default': _ol9
            };
        };
        defineModule(_ol5);
        Object.defineProperty(_ol5, '__esModule', {
            'value': true
        }), _ol5.getSlot503PersonalEffect = void 0;
        var _olb = _ol6(74496),
            _olc = _ol8(_ol6(18622));
        _ol5.getSlot503PersonalEffect = function(_old) {
            var _ole = null,
                _olf = new _olb.SlotItemEffectModel(),
                _olg = _old.get_slotnums(503),
                _olh = {
                    149: 2,
                    150: 2,
                    151: 2,
                    152: 2,
                    591: 3,
                    592: 3,
                    593: 4,
                    954: 4
                },
                _oli = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _olj = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    149: 3,
                    150: 3,
                    152: 3
                },
                _olk = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2
                },
                _oll = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1
                },
                _olm = {
                    591: 1,
                    592: 2,
                    593: 2,
                    954: 3
                };
            if (_olh[_old.ship_id]) {
                var _oln = _olh[_old.ship_id];
                _olf.houg += _olg * _oln;
            }
            if (_oli[_old.ship_id]) {
                var _olo = _oli[_old.ship_id];
                _olf.tyku += _olg * _olo;
            }
            if (_olj[_old.ship_id]) {
                var _olp = _olj[_old.ship_id],
                    _olq = _old.get_each_level_nums(503),
                    _olr = [];
                _olq.forEach(function(_ols, _olt) {
                    var _olu = null;
                    for (var _olv = 1; _olv <= _old.SLOT_LEVEL_MAX; _olv++) _olt >= _olv && (null == _olr[_olv] && (_olr[_olv] = 0), _olr[_olv] += _ols);
                }), 1 == _olp ? (_olf.houm += 2 * _olg, _olr[1] > 0 && (_olf.houg += 1 * _olr[1]), _olr[2] > 0 && (_olf.tyku += 1 * _olr[2]), _olr[4] > 0 && (_olf.houm += 1 * _olr[4]), _olr[6] > 0 && (_olf.houg += 1 * _olr[6]), _olr[8] > 0 && (_olf.tyku += 1 * _olr[8]), _olr[10] > 0 && (_olf.houm += 1 * _olr[10])) : 2 == _olp ? (_olf.houm += 1 * _olg, _olr[2] > 0 && (_olf.houg += 1 * _olr[2]), _olr[4] > 0 && (_olf.tyku += 1 * _olr[4]), _olr[6] > 0 && (_olf.houm += 1 * _olr[6]), _olr[8] > 0 && (_olf.houg += 1 * _olr[8]), _olr[10] > 0 && (_olf.houm += 1 * _olr[10])) : 3 == _olp && (_olr[4] > 0 && (_olf.houm += 1 * _olr[4]), _olr[7] > 0 && (_olf.houg += 1 * _olr[7]), _olr[10] > 0 && (_olf.tyku += 1 * _olr[10]));
            }
            var _olw = 0;
            _olk[_old.ship_id] && (_olw = _olk[_old.ship_id]);
            var _olx = 0;
            _olm[_old.ship_id] && (_olx = _olm[_old.ship_id]);
            var _oly = 0,
                _olz = 0,
                _om0 = _old.have_slot_ids();
            if (_olw + _olx > 0)
                for (var _om1 = 0, _om2 = _om0; _om1 < _om2.length; _om1++) {
                    var _om3 = _om2[_om1],
                        _om4 = _olc.default.model.slot.getMst(_om3),
                        _om5 = _om4.equipType;
                    12 != _om5 && 13 != _om5 || (_om4.sakuteki >= 5 && (_oly += _old.get_slotnums(parseInt(_om3))), _om4.taiku >= 2 && _old.get_slotnums(parseInt(_om3)), _om4.meichu >= 8 && (_olz += _old.get_slotnums(parseInt(_om3))));
                }
            1 == _olw ? _oly >= 1 && (_olf.houg += 3, _olf.houm += 3, _olf.kaih += 2) : 2 == _olw && _oly >= 1 && (_olf.houg += 2, _olf.houm += 2, _olf.kaih += 1);
            var _om6 = 0,
                _om7 = [],
                _om8 = [];
            if (_oll[_old.ship_id]) {
                _om6 = _oll[_old.ship_id];
                var _om9 = _old.have_slot_ids();
                [174].forEach(function(_oma) {
                    var _omb = null;
                    _om9.indexOf(_oma.toString()) > -1 && (_om8[_oma] = _old.get_each_level_nums(_oma), null == _om7[_oma] && (_om7[_oma] = []), _om8[_oma].forEach(function(_omc, _omd) {
                        var _ome = null;
                        for (var _omf = 1; _omf <= _old.SLOT_LEVEL_MAX; _omf++) null == _om7[_oma][_omf] && (_om7[_oma][_omf] = 0), _omd >= _omf && (_om7[_oma][_omf] += _omc);
                    }));
                });
            }
            if (_om6 > 0) {
                var _omg = _om8[174];
                if (1 == _om6 && _omg) {
                    var _omh = _om7[174];
                    _olf.raig += 4, _omh[6] >= 1 && (_olf.raig += 1), _omh[8] >= 1 && (_olf.houm += 1), _omh[10] >= 1 && (_olf.houg += 1);
                }
            }
            return _olz > 0 && (_olx >= 1 && _olx <= 3 && (_olf.houg += 2, _olf.houm += 2, _olf.kaih += 2), 1 == _olx ? _olf.houg += 1 : 3 == _olx && (_olf.houg += 2)), _olf;
        };
    },
    78123: function(_omi, _omj, _omk) {
        'use strict';
        var _oml = null;
        var _omm = this && this.__importDefault || function(_omn) {
            var _omo = null;
            return _omn && _omn.__esModule ? _omn : {
                'default': _omn
            };
        };
        defineModule(_omj);
        Object.defineProperty(_omj, '__esModule', {
            'value': true
        }), _omj.getSlot505PersonalEffect = void 0;
        var _omp = _omk(74496),
            _omq = _omm(_omk(18622));
        _omj.getSlot505PersonalEffect = function(_omr) {
            var _oms = null,
                _omt = new _omp.SlotItemEffectModel(),
                _omu = false,
                _omv = new _omp.SlotItemEffectModel();
            if (2 == _omr.stype ? (_omv.houg += 1, _omv.tyku += 2, _omv.kaih += 2, _omu = true) : 1 == _omr.stype ? (_omv.houg += 1, _omv.tyku += 1, _omv.kaih += 1, _omu = true) : 3 == _omr.stype || 21 == _omr.stype || 4 == _omr.stype ? (_omv.tyku += 1, _omv.kaih += 2, _omu = true) : 5 != _omr.stype && 6 != _omr.stype && 16 != _omr.stype || (_omv.tyku += 1, _omv.kaih += 1, _omu = true), _omu) {
                var _omw = _omr.get_slotnums(505);
                _omt.add(_omv.multiply(_omw));
            }
            var _omx = {
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
                _omy = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2
                },
                _omz = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _omx[_omr.ship_id] ? (_omt.houg += 2, _omt.tyku += 3, _omt.kaih += 4) : 2 == _omx[_omr.ship_id] ? (_omt.houg += 1, _omt.tyku += 2, _omt.kaih += 3) : 3 == _omx[_omr.ship_id] ? (_omt.tyku += 2, _omt.kaih += 2) : 4 == _omx[_omr.ship_id] ? (_omt.tyku += 1, _omt.kaih += 2) : 5 == _omx[_omr.ship_id] && (_omt.houg += 1, _omt.tyku += 1, _omt.kaih += 1);
            var _on0 = 0;
            if (_omy[_omr.ship_id] && _on0++, _omz[_omr.ship_id] && _on0++, 0 == _on0) return _omt;
            for (var _on1 = 0, _on2 = 0, _on3 = 0, _on4 = _omr.have_slot_ids(); _on3 < _on4.length; _on3++) {
                var _on5 = _on4[_on3],
                    _on6 = _omq.default.model.slot.getMst(_on5),
                    _on7 = _on6.equipType;
                12 != _on7 && 13 != _on7 || (_on6.sakuteki >= 5 && (_on1 += _omr.get_slotnums(parseInt(_on5))), _on6.taiku >= 2 && (_on2 += _omr.get_slotnums(parseInt(_on5))));
            }
            var _on8 = _omy[_omr.ship_id];
            _on2 > 0 && _on8 > 0 && (1 == _on8 ? (_omt.houg += 1, _omt.tyku += 2, _omt.kaih += 3) : 2 == _on8 && (_omt.tyku += 2, _omt.kaih += 2));
            var _on9 = _omz[_omr.ship_id];
            return _on1 > 0 && _on9 > 0 && 1 == _on9 && (_omt.houg += 1, _omt.kaih += 1), _omt;
        };
    },
    25765: (_ona, _onb, _onc) => {
        'use strict';
        var _ond = null;
        defineModule(_onb);
        Object.defineProperty(_onb, '__esModule', {
            'value': true
        }), _onb.getSlot506PersonalEffect = void 0;
        var _one = _onc(74496);
        _onb.getSlot506PersonalEffect = function(_onf) {
            var _ong = null,
                _onh = new _one.SlotItemEffectModel();
            return 961 == _onf.ship_id ? (_onh.houg += 2, _onh.houm += 3, _onh.tyku += 2, _onh.kaih += 4) : 145 == _onf.ship_id || 497 == _onf.ship_id || 656 == _onf.ship_id || 557 == _onf.ship_id || 558 == _onf.ship_id || 951 == _onf.ship_id || 975 == _onf.ship_id ? (_onh.houg += 1, _onh.houm += 2, _onh.tyku += 1, _onh.kaih += 3) : 578 != _onf.ship_id && 419 != _onf.ship_id && 464 != _onf.ship_id && 470 != _onf.ship_id && 407 != _onf.ship_id && 235 != _onf.ship_id && 147 != _onf.ship_id && 538 != _onf.ship_id && 537 != _onf.ship_id && 955 != _onf.ship_id && 960 != _onf.ship_id || (_onh.houg += 1, _onh.houm += 1, _onh.tyku += 1, _onh.kaih += 2), _onh;
        };
    },
    88271: function(_oni, _onj, _onk) {
        'use strict';
        var _onl = null;
        var _onm = this && this.__importDefault || function(_onn) {
            var _ono = null;
            return _onn && _onn.__esModule ? _onn : {
                'default': _onn
            };
        };
        defineModule(_onj);
        Object.defineProperty(_onj, '__esModule', {
            'value': true
        }), _onj.getSlot50PersonalEffect = void 0;
        var _onp = _onk(74496),
            _onq = _onm(_onk(18622));
        _onj.getSlot50PersonalEffect = function(_onr) {
            var _ons = null,
                _ont = new _onp.SlotItemEffectModel(),
                _onu = false,
                _onv = new _onp.SlotItemEffectModel();
            7 != _onr.ctype && 13 != _onr.ctype && 8 != _onr.ctype && 29 != _onr.ctype && 9 != _onr.ctype && 31 != _onr.ctype || (_onv.houg += 1, _onu = true), 8 != _onr.ctype && 29 != _onr.ctype && 9 != _onr.ctype && 31 != _onr.ctype || (_onv.houg += 1, _onv.kaih += 1, _onu = true);
            var _onw = _onr.get_slotnums(50);
            9 != _onr.ctype && 31 != _onr.ctype || _onw >= 2 && (_onv.houg += 1, _onu = true);
            var _onx = 0;
            if (501 != _onr.ship_id && 506 != _onr.ship_id && 502 != _onr.ship_id && 507 != _onr.ship_id || (_onv.houg += 1, _onu = true, _onx = 1), 0 == _onu) return _ont;
            _ont = _onv.multiply(_onw);
            for (var _ony = 0, _onz = 0, _oo0 = _onr.have_slot_ids(); _onz < _oo0.length; _onz++) {
                var _oo1 = _oo0[_onz],
                    _oo2 = _onq.default.model.slot.getMst(_oo1),
                    _oo3 = _oo2.equipType;
                12 != _oo3 && 13 != _oo3 || _oo2.sakuteki >= 5 && (_ony += _onr.get_slotnums(parseInt(_oo1)));
            }
            if (_ony > 0) {
                if (7 == _onr.ctype || 13 == _onr.ctype) 0 == _onr.get_slotnums(90) && (_ont.houg += 1, _ont.kaih += 1, _ont.raig += 1);
                else 8 != _onr.ctype && 29 != _onr.ctype && 9 != _onr.ctype && 31 != _onr.ctype || (_ont.houg += 3, _ont.kaih += 2, _ont.raig += 2);
                501 != _onr.ship_id && 506 != _onr.ship_id || (_ont.houg += 1, _ont.kaih += 1);
            }
            var _oo4 = _onr.get_slotnums(30),
                _oo5 = _onr.get_slotnums(410);
            return 1 == _onx && (_oo4 + _oo5 > 0 && (_ont.houg += 1, _ont.tyku += 3, _ont.kaih += 2), _oo5 > 0 && (_ont.houg += 2)), _ont;
        };
    },
    28221: (_oo6, _oo7, _oo8) => {
        'use strict';
        var _oo9 = null;
        defineModule(_oo7);
        Object.defineProperty(_oo7, '__esModule', {
            'value': true
        }), _oo7.getSlot510PersonalEffect = void 0;
        var _ooa = _oo8(74496);
        _oo7.getSlot510PersonalEffect = function(_oob) {
            var _ooc = null,
                _ood = new _ooa.SlotItemEffectModel(),
                _ooe = false,
                _oof = new _ooa.SlotItemEffectModel();
            if ('イギリス' == _oob.getCountryName() && (_oof.houg += 2, _oof.tais += 3, _oof.kaih += 2, _oof.saku += 2, _ooe = true), 88 == _oob.ctype && (_ood.houg += 4, _ood.kaih += 2, _oof.saku += 3, _oof.houm += 2, _ooe = true), 0 == _ooe) return _ood;
            var _oog = _oob.get_slotnums(510);
            return _ood.add(_oof.multiply(_oog)), _ood;
        };
    },
    14830: (_ooh, _ooi, _ooj) => {
        'use strict';
        var _ook = null;
        defineModule(_ooi);
        Object.defineProperty(_ooi, '__esModule', {
            'value': true
        }), _ooi.getSlot511PersonalEffect = void 0;
        var _ool = _ooj(74496);
        _ooi.getSlot511PersonalEffect = function(_oom) {
            var _oon = null,
                _ooo = new _ool.SlotItemEffectModel();
            return 122 == _oom.ctype ? (_ooo.raig += 3, _ooo.kaih += 4) : 114 == _oom.ctype && (_ooo.raig += 1, _ooo.kaih += 2), _ooo;
        };
    },
    54047: (_oop, _ooq, _oor) => {
        'use strict';
        var _oos = null;
        defineModule(_ooq);
        Object.defineProperty(_ooq, '__esModule', {
            'value': true
        }), _ooq.getSlot517PersonalEffect = void 0;
        var _oot = _oor(74496);
        _ooq.getSlot517PersonalEffect = function(_oou) {
            var _oov = null,
                _oow = new _oot.SlotItemEffectModel();
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
            }[_oou.ctype] && 74 != _oou.ctype && 77 != _oou.ctype && 85 != _oou.ctype && 117 != _oou.ctype && 104 != _oou.ctype || (_oow.houm += 1, _oow.kaih += 1, _oow.saku += 1), 38 == _oou.ctype && (_oow.houg += 1, _oow.houm += 1), 960 == _oou.ship_id ? (_oow.houg += 2, _oow.houm += 1, _oow.kaih += 3, _oow.saku += 2) : 955 != _oou.ship_id && 578 != _oou.ship_id && 961 != _oou.ship_id && 656 != _oou.ship_id && 464 != _oou.ship_id && 470 != _oou.ship_id && 419 != _oou.ship_id && 407 != _oou.ship_id && 235 != _oou.ship_id && 147 != _oou.ship_id && 975 != _oou.ship_id || (_oow.houg += 1, _oow.houm += 1, _oow.kaih += 2, _oow.saku += 1);
            for (var _oox = [], _ooy = function(_ooz) {
                    var _op0 = null,
                        _op1 = _oou.get_each_level_nums(_ooz);
                    null == _oox[_ooz] && (_oox[_ooz] = []), _op1.forEach(function(_op2, _op3) {
                        var _op4 = null;
                        for (var _op5 = 1; _op5 <= _oou.SLOT_LEVEL_MAX; _op5++) null == _oox[_ooz][_op5] && (_oox[_ooz][_op5] = 0), _op3 >= _op5 && (_oox[_ooz][_op5] += _op2);
                    });
                }, _op6 = 0, _op7 = [267, 366, 450, 517]; _op6 < _op7.length; _op6++) {
                _ooy(_op7[_op6]);
            }
            var _op8 = _oox[517];
            return _op8[7] > 0 && (_oow.houm += 1), _op8[8] > 0 && (_oow.kaih += 1), _op8[9] > 0 && (_oow.houg += 1), _op8[10] > 0 && (_oow.houm += 1), (_oox[267][3] > 0 || _oox[366][3] > 0) && (_oow.houg += 1, _oow.houm += 1, 38 == _oou.ctype && (_oow.houg += 1, _oow.houm += 1), _oox[450][4] > 0 && (_oow.houg += 1, _oow.houm += 1, _oow.tyku += 4, _oow.kaih += 3)), _oow;
        };
    },
    76054: (_op9, _opa, _opb) => {
        'use strict';
        var _opc = null;
        defineModule(_opa);
        Object.defineProperty(_opa, '__esModule', {
            'value': true
        }), _opa.getSlot518PersonalEffect = void 0;
        var _opd = _opb(74496);
        _opa.getSlot518PersonalEffect = function(_ope) {
            var _opf = null,
                _opg = new _opd.SlotItemEffectModel(),
                _oph = false,
                _opi = new _opd.SlotItemEffectModel();
            if (34 != _ope.ctype && 56 != _ope.ctype || (_opi.houg += 1, _opi.tyku += 1, _opi.tais += 1, _opi.kaih += 1, _oph = true), 16 == _ope.stype && (_opi.houg += 1, _opi.raig += 1, _opi.kaih += 1, _oph = true), 622 != _ope.ship_id && 624 != _ope.ship_id && 623 != _ope.ship_id || (_opi.houg += 1, _oph = true), 622 != _ope.ship_id && 624 != _ope.ship_id || (_opi.tyku += 1, _oph = true), 624 == _ope.ship_id && (_opi.tais += 2, _oph = true), 0 == _oph) return _opg;
            var _opj = _ope.get_slotnums(518);
            return _opg.add(_opi.multiply(_opj)), _opg;
        };
    },
    93053: (_opk, _opl, _opm) => {
        'use strict';
        var _opn = null;
        defineModule(_opl);
        Object.defineProperty(_opl, '__esModule', {
            'value': true
        }), _opl.getSlot519PersonalEffect = void 0;
        var _opo = _opm(74496);
        _opl.getSlot519PersonalEffect = function(_opp) {
            var _opq = null,
                _opr = new _opo.SlotItemEffectModel();
            return 122 == _opp.ctype && (_opr.houm += 2, _opr.kaih += 2), 114 == _opp.ctype && (_opr.raig += 1, _opr.houm += 2, _opr.kaih += 2), _opr;
        };
    },
    81254: (_ops, _opt, _opu) => {
        'use strict';
        var _opv = null;
        defineModule(_opt);
        Object.defineProperty(_opt, '__esModule', {
            'value': true
        }), _opt.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _opw = _opu(74496);
        _opt.getSlot51cmSeriesGunPersonalEffect = function(_opx) {
            var _opy = null,
                _opz = new _opw.SlotItemEffectModel(),
                _oq0 = false,
                _oq1 = new _opw.SlotItemEffectModel(),
                _oq2 = _opx.get_slotnums(142),
                _oq3 = _opx.get_slotnums(460),
                _oq4 = _oq2 + _oq3;
            if (916 != _opx.ship_id && 911 != _opx.ship_id && 546 != _opx.ship_id || (_oq1.houg += 1, _oq1.houm += 1, _oq3 >= 1 && (_opz.kaih += 1, _opz.houm += 1), _oq0 = true), 37 == _opx.ctype && _oq4 >= 1 && (_opz.houg += 1, _opz.houm += 2), 0 == _oq0) return _opz;
            var _oq5 = _opx.get_slotnums(128) + _opx.get_slotnums(281);
            return _opz.add(_oq1.multiply(_oq5)), _opz;
        };
    },
    88792: (_oq6, _oq7, _oq8) => {
        'use strict';
        var _oq9 = null;
        defineModule(_oq7);
        Object.defineProperty(_oq7, '__esModule', {
            'value': true
        }), _oq7.getSlot520PersonalEffect = void 0;
        var _oqa = _oq8(74496);
        _oq7.getSlot520PersonalEffect = function(_oqb) {
            var _oqc = null,
                _oqd = new _oqa.SlotItemEffectModel(),
                _oqe = false,
                _oqf = new _oqa.SlotItemEffectModel(),
                _oqg = 0,
                _oqh = 0,
                _oqi = 0,
                _oqj = _oqb.get_slotnums(520);
            7 == _oqb.ctype || 13 == _oqb.ctype ? (_oqf.houg += 1, _oqe = true, _oqh = 1, _oqi = 1) : 8 == _oqb.ctype || 29 == _oqb.ctype ? (_oqf.houg += 2, _oqf.kaih += 1, _oqe = true, _oqh = 2, _oqi = 1) : 9 != _oqb.ctype && 31 != _oqb.ctype || (_oqf.houg += 3, _oqf.kaih += 1, _oqf.houm += 1, _oqe = true, _oqh = 2, _oqi = 1, 2 == _oqj && (_oqd.houg += 2), _oqj >= 3 && (_oqd.houg += 4));
            var _oqk = _oqb.get_have_rader_nums().water_rader,
                _oql = 0,
                _oqm = 0;
            if (_oqh + _oqi > 0) {
                for (var _oqn = _oqb.getSpItemDict_FukuhouTaikuHeisou(), _oqo = _oqb.getSpItemDict_Tansou21GouDentan(), _oqp = 0, _oqq = _oqb.have_slot_ids(); _oqp < _oqq.length; _oqp++) {
                    var _oqr = _oqq[_oqp],
                        _oqs = parseInt(_oqr);
                    null != _oqn[_oqs] ? (_oqn[_oqs] += _oqb.get_slotnums(_oqs), _oql += _oqb.get_slotnums(_oqs)) : null != _oqo[_oqs] && (_oqo[_oqs] += _oqb.get_slotnums(_oqs), _oqm += _oqb.get_slotnums(_oqs));
                }
                _oqk > 0 && (1 == _oqh ? (_oqd.houg += 2, _oqd.raig += 2, _oqd.kaih += 1, _oqd.houm += 1) : 2 == _oqh && (_oqd.houg += 3, _oqd.raig += 2, _oqd.kaih += 2, _oqd.houm += 1)), _oql > 0 && 1 == _oqi && (_oqd.houg += 1, _oqd.tyku += 4, _oqd.kaih += 4, _oqd.houm += 1);
            }
            if (269 == _oqb.ship_id || 265 == _oqb.ship_id || 319 == _oqb.ship_id ? (2 == _oqj && (_oqd.houg += 2), _oqj >= 3 && (_oqd.houg += 4)) : 501 != _oqb.ship_id && 506 != _oqb.ship_id && 502 != _oqb.ship_id && 507 != _oqb.ship_id && 503 != _oqb.ship_id && 504 != _oqb.ship_id || (_oqf.houg += 1, _oqe = true, _oqk >= 1 && (_oqd.houg += 1, _oqd.kaih += 1, _oqd.houm += 2), _oqm >= 1 && (_oqd.houg += 1, _oqd.tyku += 3, _oqd.kaih += 2, _oqd.houm += 1), _oqb.get_slotnums(410) > 0 && (_oqd.houg += 2, _oqd.tyku += 3, _oqd.kaih += 2, _oqd.houm += 1), _oqg = 1), 502 == _oqb.ship_id || 269 == _oqb.ship_id || 265 == _oqb.ship_id || 319 == _oqb.ship_id ? (_oqf.houg += 1, _oqf.houm += 1, _oqe = true) : 507 == _oqb.ship_id && (_oqf.houg += 1, _oqf.houm += 2, _oqf.tyku += 1, _oqe = true), _oqe && _oqd.add(_oqf.multiply(_oqj)), 0 == _oqg) return _oqd;
            var _oqt = _oqb.get_each_level_over_nums([520]),
                _oqu = _oqt.slot[520][7],
                _oqv = _oqt.slot[520][10];
            return 1 == _oqg && (_oqu > 0 && (_oqd.houg += 1 * _oqu), _oqv > 0 && (_oqd.houm += 1 * _oqv)), _oqd;
        };
    },
    33242: (_oqw, _oqx, _oqy) => {
        'use strict';
        var _oqz = null;
        defineModule(_oqx);
        Object.defineProperty(_oqx, '__esModule', {
            'value': true
        }), _oqx.getSlot521PersonalEffect = void 0;
        var _or0 = _oqy(74496);
        _oqx.getSlot521PersonalEffect = function(_or1) {
            var _or2 = null,
                _or3 = new _or0.SlotItemEffectModel(),
                _or4 = false,
                _or5 = new _or0.SlotItemEffectModel(),
                _or6 = 0;
            if (52 == _or1.ctype && (_or6 = 1), 183 == _or1.ship_id ? (_or5.houg += 1, _or5.houm += 1, _or5.saku += 2, _or5.kaih += 2, _or4 = true) : 321 == _or1.ship_id ? (_or5.houg += 2, _or5.houm += 2, _or5.saku += 3, _or5.kaih += 3, _or4 = true) : 507 == _or1.ship_id && (_or5.houg += 3, _or5.tyku += 1, _or5.houm += 3, _or5.saku += 2, _or5.kaih += 2, _or4 = true, _or6 = 1), _or4) {
                var _or7 = _or1.get_slotnums(521);
                _or3.add(_or5.multiply(_or7));
            }
            if (0 == _or6) return _or3;
            var _or8 = _or1.get_each_level_over_nums([521]).slot[521];
            return 1 == _or6 && (_or8[1] >= 1 && (_or3.houm += 1 * _or8[1]), _or8[2] >= 1 && (_or3.kaih += 1 * _or8[2]), _or8[3] >= 1 && (_or3.saku += 1 * _or8[3], _or3.raig += 1 * _or8[3]), _or8[4] >= 1 && (_or3.houg += 1 * _or8[4]), _or8[6] >= 1 && (_or3.houm += 1 * _or8[6]), _or8[8] >= 1 && (_or3.saku += 1 * _or8[8]), _or8[10] >= 1 && (_or3.houm += 1 * _or8[10])), _or3;
        };
    },
    3296: (_or9, _ora, _orb) => {
        'use strict';
        var _orc = null;
        defineModule(_ora);
        Object.defineProperty(_ora, '__esModule', {
            'value': true
        }), _ora.getSlot522_523PersonalEffect = void 0;
        var _ord = _orb(74496);
        _ora.getSlot522_523PersonalEffect = function(_ore) {
            var _orf = null,
                _org = new _ord.SlotItemEffectModel(),
                _orh = false,
                _ori = new _ord.SlotItemEffectModel(),
                _orj = 0,
                _ork = _ore.get_slotnums(522),
                _orl = _ore.get_slotnums(523),
                _orm = _ork + _orl;
            if (14 == _ore.stype && (_ori.raig += 1, _ori.kaih += 5, _ori.houm += 1, _ori.saku += 3, _orh = true, _orl >= 1 && (_org.raig += 2 * _orl, _org.baku += 2 * _orl, _org.kaih += 1 * _orl, _org.houm += 1 * _orl, _org.saku += 1 * _orl), _orj = 1), 0 == _orh) return _org;
            if (_org.add(_ori.multiply(_orm)), 0 == _orj) return _org;
            var _orn = _ore.get_each_level_over_nums([522, 523]),
                _oro = _orn.slot[522],
                _orp = _orn.slot[523];
            if (1 == _orj) {
                if (_oro[1] >= 1 || _orp[1] >= 1) {
                    var _orq = _oro[1] + _orp[1];
                    _org.raig += 1 * _orq;
                }
                if (_oro[2] >= 1 || _orp[2] >= 1) {
                    var _orr = _oro[2] + _orp[2];
                    _org.houm += 1 * _orr;
                }
                if (_oro[3] >= 1 || _orp[3] >= 1) {
                    var _ors = _oro[3] + _orp[3];
                    _org.kaih += 1 * _ors;
                }
                if (_oro[5] >= 1 || _orp[5] >= 1) {
                    var _ort = _oro[5] + _orp[5];
                    _org.saku += 1 * _ort;
                }
                if (_oro[8] >= 1 || _orp[8] >= 1) {
                    var _oru = _oro[8] + _orp[8];
                    _org.houm += 1 * _oru;
                }
                if (_oro[10] >= 1 || _orp[10] >= 1) {
                    var _orv = _oro[10] + _orp[10];
                    _org.kaih += 1 * _orv;
                }
            }
            return _org;
        };
    },
    59415: (_orw, _orx, _ory) => {
        'use strict';
        var _orz = null;
        defineModule(_orx);
        Object.defineProperty(_orx, '__esModule', {
            'value': true
        }), _orx.getSlot524PersonalEffect = void 0;
        var _os0 = _ory(74496);
        _orx.getSlot524PersonalEffect = function(_os1) {
            var _os2 = null,
                _os3 = new _os0.SlotItemEffectModel(),
                _os4 = false,
                _os5 = new _os0.SlotItemEffectModel(),
                _os6 = 0,
                _os7 = 0;
            if (17 != _os1.stype && 19 != _os1.stype && 20 != _os1.stype && 21 != _os1.stype && 22 != _os1.stype || (_os5.houg += 1, _os5.tyku += 2, _os5.kaih += 2, _os5.houm += 1, _os4 = true, _os6 = 1, _os7 = 1), 0 == _os4) return _os3;
            var _os8 = _os1.get_slotnums(524);
            _os3.add(_os5.multiply(_os8));
            var _os9 = _os1.get_have_rader_nums().air_rader;
            if (1 == _os7 && _os9 >= 1 && (_os3.tyku += 2, _os3.kaih += 2), 0 == _os6) return _os3;
            var _osa = _os1.get_each_level_over_nums([524]).slot[524];
            return 1 == _os6 && (_osa[1] >= 1 && (_os3.kaih += 1 * _osa[1]), _osa[2] >= 1 && (_os3.kaih += 1 * _osa[2]), _osa[4] >= 1 && (_os3.tyku += 1 * _osa[4]), _osa[6] >= 1 && (_os3.kaih += 1 * _osa[6]), _osa[7] >= 1 && (_os3.houm += 1 * _osa[7]), _osa[8] >= 1 && (_os3.tyku += 1 * _osa[8]), _osa[9] >= 1 && (_os3.kaih += 1 * _osa[9]), _osa[10] >= 1 && (_os3.houg += 1 * _osa[10])), _os3;
        };
    },
    36731: (_osb, _osc, _osd) => {
        'use strict';
        var _ose = null;
        defineModule(_osc);
        Object.defineProperty(_osc, '__esModule', {
            'value': true
        }), _osc.getSlot527PersonalEffect = void 0;
        var _osf = _osd(74496);
        _osc.getSlot527PersonalEffect = function(_osg) {
            var _osh = null,
                _osi = new _osf.SlotItemEffectModel(),
                _osj = 0;
            if ('イギリス' == _osg.getCountryName() && (_osj = 1, _osi.tyku += 2, _osi.houm += 1, _osi.kaih += 1, _osi.saku += 2, 88 == _osg.ctype && (_osi.houg += 2), 67 == _osg.ctype && (_osi.houg += 1)), 0 == _osj) return _osi;
            var _osk = _osg.get_each_level_over_nums([527]),
                _osl = _osk.slot[527][2],
                _osm = _osk.slot[527][4],
                _osn = _osk.slot[527][7],
                _oso = _osk.slot[527][10];
            return 1 == _osj && (_osl >= 1 && (_osi.tyku += 1), _osm >= 1 && (_osi.kaih += 1), _osn >= 1 && (_osi.tyku += 1), _oso >= 1 && (_osi.houm += 1)), _osi;
        };
    },
    30450: (_osp, _osq, _osr) => {
        'use strict';
        var _oss = null;
        defineModule(_osq);
        Object.defineProperty(_osq, '__esModule', {
            'value': true
        }), _osq.getSlot528PersonalEffect = void 0;
        var _ost = _osr(74496);
        _osq.getSlot528PersonalEffect = function(_osu) {
            var _osv = null,
                _osw = new _ost.SlotItemEffectModel(),
                _osx = false,
                _osy = new _ost.SlotItemEffectModel(),
                _osz = 0;
            if ('イギリス' == _osu.getCountryName() && (_osy.houg += 1, _osy.houm += 2, _osy.kaih += 1, 108 == _osu.ctype && (_osy.houg += 1, _osy.kaih += 1), _osx = true, _osz = 1), 0 == _osx) return _osw;
            var _ot0 = _osu.get_slotnums(528);
            if (_osw.add(_osy.multiply(_ot0)), 0 == _osz) return _osw;
            var _ot1 = _osu.get_each_level_over_nums([528]),
                _ot2 = _ot1.slot[528][2],
                _ot3 = _ot1.slot[528][4],
                _ot4 = _ot1.slot[528][7],
                _ot5 = _ot1.slot[528][10];
            return 1 == _osz && (_ot2 >= 1 && (_osw.houg += 1 * _ot2), _ot3 >= 1 && (_osw.houm += 1 * _ot3), _ot4 >= 1 && (_osw.kaih += 1 * _ot4), _ot5 >= 1 && (_osw.houm += 1 * _ot5)), _osw;
        };
    },
    23035: (_ot6, _ot7, _ot8) => {
        'use strict';
        var _ot9 = null;
        defineModule(_ot7);
        Object.defineProperty(_ot7, '__esModule', {
            'value': true
        }), _ot7.getSlot58PersonalEffect = void 0;
        var _ota = _ot8(74496);
        _ot7.getSlot58PersonalEffect = function(_otb) {
            var _otc = null,
                _otd = new _ota.SlotItemEffectModel(),
                _ote = new _ota.SlotItemEffectModel();
            if ('しまかぜ' != _otb.yomi && 4 != _otb.stype && 54 != _otb.ctype || (_ote.raig = 1), !_ote.exists()) return _otd;
            var _otf = _otb.get_slotnums(58);
            return _otd = _ote.multiply(_otf);
        };
    },
    47169: (_otg, _oth, _oti) => {
        'use strict';
        var _otj = null;
        defineModule(_oth);
        Object.defineProperty(_oth, '__esModule', {
            'value': true
        }), _oth.getSlot59PersonalEffect = void 0;
        var _otk = _oti(74496);
        _oth.getSlot59PersonalEffect = function(_otl) {
            var _otm = null,
                _otn = new _otk.SlotItemEffectModel();
            return 501 != _otl.ship_id && 506 != _otl.ship_id && 502 != _otl.ship_id && 507 != _otl.ship_id || (_otn.tyku += 1, _otn.kaih += 1), _otn;
        };
    },
    87845: (_oto, _otp, _otq) => {
        'use strict';
        var _otr = null;
        defineModule(_otp);
        Object.defineProperty(_otp, '__esModule', {
            'value': true
        }), _otp.getSlot5PersonalEffect = void 0;
        var _ots = _otq(74496);
        _otp.getSlot5PersonalEffect = function(_ott) {
            var _otu = null,
                _otv = new _ots.SlotItemEffectModel(),
                _otw = false,
                _otx = new _ots.SlotItemEffectModel();
            if (52 != _ott.ctype && 9 != _ott.ctype || (_otx.houg += 1, 52 == _ott.ctype && (_otx.houg = _otx.houg + 1), _otw = true), 0 == _otw) return _otv;
            var _oty = _ott.get_slotnums(5);
            return _otv.add(_otx.multiply(_oty)), _otv;
        };
    },
    92253: (_otz, _ou0, _ou1) => {
        'use strict';
        var _ou2 = null;
        defineModule(_ou0);
        Object.defineProperty(_ou0, '__esModule', {
            'value': true
        }), _ou0.getSlot60_154_219PersonalEffec = void 0;
        var _ou3 = _ou1(74496);
        _ou0.getSlot60_154_219PersonalEffec = function(_ou4) {
            var _ou5 = null,
                _ou6 = new _ou3.SlotItemEffectModel(),
                _ou7 = false,
                _ou8 = new _ou3.SlotItemEffectModel();
            if ('じゅんよう' != _ou4.yomi && 'ひよう' != _ou4.yomi && 'ずいほう' != _ou4.yomi && 'ちとせ' != _ou4.yomi && 'ちよだ' != _ou4.yomi || (_ou8.houg += 1, _ou8.tyku += 1, _ou8.kaih += 1, _ou7 = true), 185 != _ou4.ship_id && 318 != _ou4.ship_id && 282 != _ou4.ship_id || (_ou8.houg += 1, _ou8.tyku += 1, _ou8.kaih += 1, _ou7 = true), 888 != _ou4.ship_id && 883 != _ou4.ship_id || (_ou8.houg += 2, _ou8.tyku += 1, _ou8.kaih += 2, _ou7 = true), 0 == _ou7) return _ou6;
            var _ou9 = _ou4.get_slotnums(60) + _ou4.get_slotnums(154) + _ou4.get_slotnums(219);
            return _ou6.add(_ou8.multiply(_ou9)), _ou6;
        };
    },
    2578: (_oua, _oub, _ouc) => {
        'use strict';
        var _oud = null;
        defineModule(_oub);
        Object.defineProperty(_oub, '__esModule', {
            'value': true
        }), _oub.getSlot61PersonalEffect2 = _oub.getSlot61PersonalEffect = void 0;
        var _oue = _ouc(74496);
        _oub.getSlot61PersonalEffect = function(_ouf) {
            var _oug = null,
                _ouh = new _oue.SlotItemEffectModel();
            if (553 == _ouf.ship_id) _ouh.houg = 3, _ouh.kaih = 2, _ouh.souk = 1, _ouh.houm = 5, _ouh.leng = 1;
            else {
                if (554 == _ouf.ship_id) _ouh.houg = 3, _ouh.kaih = 3, _ouh.souk = 3, _ouh.houm = 5, _ouh.leng = 1;
                else {
                    if (196 == _ouf.ship_id) _ouh.houm = 5, _ouh.leng = 1;
                    else {
                        if (197 != _ouf.ship_id) return _ouh;
                        _ouh.houm = 5, _ouh.leng = 1;
                    }
                }
            }
            return _ouh;
        }, _oub.getSlot61PersonalEffect2 = function(_oui) {
            var _ouj = null,
                _ouk = new _oue.SlotItemEffectModel();
            if (null == _oui.have_slots_dict[61]) return _ouk;
            for (var _oul = 0, _oum = 0, _oun = _oui.have_slots_dict[61]; _oum < _oun.length; _oum++) {
                var _ouo = _oun[_oum].level;
                _oul < _ouo && (_oul = _ouo);
            }
            return 0 == _oul || ('そうりゅう' == _oui.yomi ? (_ouk.houg += 3, _ouk.saku += 3) : 'ひりゅう' == _oui.yomi && (_ouk.houg += 2, _ouk.saku += 2), 508 != _oui.ship_id && 509 != _oui.ship_id && 560 != _oui.ship_id || (_ouk.houg += 1, _ouk.saku += 1), _oul >= 8 && 197 == _oui.ship_id && (_ouk.houg += 1, _ouk.saku += 1)), _ouk;
        };
    },
    17143: (_oup, _ouq, _our) => {
        'use strict';
        var _ous = null;
        defineModule(_ouq);
        Object.defineProperty(_ouq, '__esModule', {
            'value': true
        }), _ouq.getSlot63PersonalEffect = void 0;
        var _out = _our(74496);
        _ouq.getSlot63PersonalEffect = function(_ouu) {
            var _ouv = null,
                _ouw = new _out.SlotItemEffectModel(),
                _oux = new _out.SlotItemEffectModel();
            1 != _ouu.ctype && 5 != _ouu.ctype && 10 != _ouu.ctype || (_oux.tyku += 1), 'ゆうだち' == _ouu.yomi && (_oux.houg += 1, _oux.tyku += 1, _oux.kaih += 2), 145 == _ouu.ship_id || 961 == _ouu.ship_id ? _oux.houg += 1 : 144 == _ouu.ship_id ? _oux.raig += 1 : 469 == _ouu.ship_id ? _oux.kaih += 2 : 242 == _ouu.ship_id || 497 == _ouu.ship_id || 244 == _ouu.ship_id || 498 == _ouu.ship_id || 975 == _ouu.ship_id ? _oux.kaih += 1 : 627 == _ouu.ship_id ? _oux.houg += 1 : 903 != _ouu.ship_id && 908 != _ouu.ship_id || (_oux.houg += 2);
            var _ouy = true;
            if (_oux.exists() || (_ouy = false), 0 == _ouy) return _ouw;
            var _ouz = _ouu.get_slotnums(63);
            return _ouw = _oux.multiply(_ouz);
        };
    },
    16164: (_ov0, _ov1, _ov2) => {
        'use strict';
        var _ov3 = null;
        defineModule(_ov1);
        Object.defineProperty(_ov1, '__esModule', {
            'value': true
        }), _ov1.getSlot67PersonalEffect = void 0;
        var _ov4 = _ov2(74496);
        _ov1.getSlot67PersonalEffect = function(_ov5) {
            var _ov6 = null,
                _ov7 = new _ov4.SlotItemEffectModel(),
                _ov8 = new _ov4.SlotItemEffectModel();
            if (13 != _ov5.stype && 14 != _ov5.stype && (_ov8.raig = -5), !_ov8.exists()) return _ov7;
            var _ov9 = _ov5.get_slotnums(67);
            return _ov7 = _ov8.multiply(_ov9);
        };
    },
    35023: (_ova, _ovb, _ovc) => {
        'use strict';
        var _ovd = null;
        defineModule(_ovb);
        Object.defineProperty(_ovb, '__esModule', {
            'value': true
        }), _ovb.getSlot69PersonalEffect = void 0;
        var _ove = _ovc(74496);
        _ovb.getSlot69PersonalEffect = function(_ovf) {
            var _ovg = null,
                _ovh = new _ove.SlotItemEffectModel(),
                _ovi = false,
                _ovj = new _ove.SlotItemEffectModel();
            if (554 == _ovf.ship_id || 646 == _ovf.ship_id ? (_ovj.houg += 1, _ovj.tais += 2, _ovi = true) : 553 == _ovf.ship_id && (_ovj.houg += 1, _ovj.tais += 1, _ovi = true), 0 == _ovi) return _ovh;
            var _ovk = _ovf.get_slotnums(69);
            return _ovh.add(_ovj.multiply(_ovk)), _ovh;
        };
    },
    78707: (_ovl, _ovm, _ovn) => {
        'use strict';
        var _ovo = null;
        defineModule(_ovm);
        Object.defineProperty(_ovm, '__esModule', {
            'value': true
        }), _ovm.getSlot70PersonalEffect = void 0;
        var _ovp = _ovn(74496);
        _ovm.getSlot70PersonalEffect = function(_ovq) {
            var _ovr = null,
                _ovs = new _ovp.SlotItemEffectModel(),
                _ovt = false,
                _ovu = new _ovp.SlotItemEffectModel();
            if ('やましおまる' == _ovq.yomi && (_ovu.houg += 1, _ovu.tais += 1, _ovt = true), 0 == _ovt) return _ovs;
            var _ovv = _ovq.get_slotnums(70);
            return _ovs.add(_ovu.multiply(_ovv)), _ovs;
        };
    },
    44680: function(_ovw, _ovx, _ovy) {
        'use strict';
        var _ovz = null;
        var _ow0 = this && this.__importDefault || function(_ow1) {
            var _ow2 = null;
            return _ow1 && _ow1.__esModule ? _ow1 : {
                'default': _ow1
            };
        };
        defineModule(_ovx);
        Object.defineProperty(_ovx, '__esModule', {
            'value': true
        }), _ovx.getSlot78PersonalEffect = void 0;
        var _ow3 = _ovy(74496),
            _ow4 = _ow0(_ovy(18622));
        _ovx.getSlot78PersonalEffect = function(_ow5) {
            var _ow6 = null,
                _ow7 = new _ow3.SlotItemEffectModel(),
                _ow8 = false,
                _ow9 = new _ow3.SlotItemEffectModel(),
                _owa = 0,
                _owb = 0,
                _owc = false;
            if (48 == _ow5.ctype && (_ow9.houg += 1, _ow9.kaih += 1, _owa = 1, _owb = 1, _owc = true, _ow8 = true), 0 == _ow8) return _ow7;
            var _owd = _ow5.get_slotnums(78);
            _ow7.add(_ow9.multiply(_owd));
            var _owe = 0,
                _owf = _ow5.get_each_level_nums(78),
                _owg = 0;
            if (_owc) {
                _owf.map(function(_owh, _owi) {
                    _owi >= 7 && (_owg += _owh);
                });
                for (var _owj = 0, _owk = _ow5.have_slot_ids(); _owj < _owk.length; _owj++) {
                    var _owl = _owk[_owj],
                        _owm = _ow4.default.model.slot.getMst(_owl),
                        _own = _owm.equipType;
                    12 != _own && 13 != _own || _owm.sakuteki >= 5 && (_owe += _ow5.get_slotnums(parseInt(_owl)));
                }
            }
            if (1 == _owa && _owe > 0 && (_ow7.houg += 2, _ow7.kaih += 2, _ow7.raig += 2), 1 == _owb) {
                _ow7.houg += 1 * _owg;
                var _owo = _owf[10];
                _ow7.souk += 1 * _owo;
            }
            return _ow7;
        };
    },
    45749: (_owp, _owq, _owr) => {
        'use strict';
        var _ows = null;
        defineModule(_owq);
        Object.defineProperty(_owq, '__esModule', {
            'value': true
        }), _owq.getSlot79And81PersonalEffect = void 0;
        var _owt = _owr(74496);
        _owq.getSlot79And81PersonalEffect = function(_owu) {
            var _owv = null,
                _oww = new _owt.SlotItemEffectModel(),
                _owx = new _owt.SlotItemEffectModel();
            if (553 == _owu.ship_id) _owx.houg = 3;
            else {
                if (82 == _owu.ship_id) _owx.houg = 2;
                else {
                    if (88 == _owu.ship_id) _owx.houg = 2;
                    else {
                        if (554 == _owu.ship_id) _owx.houg = 3;
                        else {
                            if (411 == _owu.ship_id) _owx.houg = 2;
                            else {
                                if (412 != _owu.ship_id) return _oww;
                                _owx.houg = 2;
                            }
                        }
                    }
                }
            }
            var _owy = _owu.get_slotnums(79) + _owu.get_slotnums(81);
            return _oww = _owx.multiply(_owy);
        };
    },
    37334: (_owz, _ox0, _ox1) => {
        'use strict';
        var _ox2 = null;
        defineModule(_ox0);
        Object.defineProperty(_ox0, '__esModule', {
            'value': true
        }), _ox0.getSlot82PersonalEffect = void 0;
        var _ox3 = _ox1(74496);
        _ox0.getSlot82PersonalEffect = function(_ox4) {
            var _ox5 = null,
                _ox6 = new _ox3.SlotItemEffectModel(),
                _ox7 = new _ox3.SlotItemEffectModel();
            if (76 == _ox4.ctype && (_ox7.tais = 1, _ox7.kaih = 1), !_ox7.exists()) return _ox6;
            var _ox8 = _ox4.get_slotnums(82);
            return _ox6 = _ox7.multiply(_ox8);
        };
    },
    2603: function(_ox9, _oxa, _oxb) {
        'use strict';
        var _oxc = null;
        var _oxd = this && this.__importDefault || function(_oxe) {
            var _oxf = null;
            return _oxe && _oxe.__esModule ? _oxe : {
                'default': _oxe
            };
        };
        defineModule(_oxa);
        Object.defineProperty(_oxa, '__esModule', {
            'value': true
        }), _oxa.getSlot84PersonalEffect = void 0;
        var _oxg = _oxb(74496),
            _oxh = _oxd(_oxb(18622));
        _oxa.getSlot84PersonalEffect = function(_oxi) {
            var _oxj = null,
                _oxk = new _oxg.SlotItemEffectModel(),
                _oxl = _oxi.get_each_level_nums(84),
                _oxm = 0,
                _oxn = 0;
            if (_oxl.forEach(function(_oxo, _oxp) {
                    _oxp >= 4 && (_oxm += _oxo), _oxp >= 7 && (_oxn += _oxo);
                }), 0 == _oxm) return _oxk;
            for (var _oxq = 0, _oxr = 0, _oxs = _oxi.have_slot_ids(); _oxr < _oxs.length; _oxr++) {
                var _oxt = _oxs[_oxr],
                    _oxu = _oxh.default.model.slot.getMst(_oxt),
                    _oxv = _oxu.equipType;
                12 != _oxv && 13 != _oxv || (_oxu.sakuteki >= 5 && _oxi.get_slotnums(parseInt(_oxt)), _oxu.taiku >= 2 && (_oxq += _oxi.get_slotnums(parseInt(_oxt))));
            }
            var _oxw = _oxi.getCountryName();
            _oxm >= 1 && (_oxk.tyku += 1 * _oxm, _oxk.kaih += 1 * _oxm, 'ドイツ' != _oxw && 'イタリア' != _oxw || (_oxk.tyku += 1 * _oxm, _oxk.kaih += 1 * _oxm), _oxq >= 1 && (_oxk.tyku += 1)), _oxn >= 1 && (_oxk.tyku += 1 * _oxn, _oxk.houg += 1 * _oxn);
            var _oxx = _oxl[10];
            return _oxx >= 1 && (_oxk.tyku += 1 * _oxx, _oxk.kaih += 1 * _oxx, 'ドイツ' != _oxw && 'イタリア' != _oxw || (_oxk.houg += 1)), _oxk;
        };
    },
    90725: (_oxy, _oxz, _oy0) => {
        'use strict';
        var _oy1 = null;
        defineModule(_oxz);
        Object.defineProperty(_oxz, '__esModule', {
            'value': true
        }), _oxz.getSlot85PersonalEffect = void 0;
        var _oy2 = _oy0(74496);
        _oxz.getSlot85PersonalEffect = function(_oy3) {
            var _oy4 = null,
                _oy5 = new _oy2.SlotItemEffectModel(),
                _oy6 = _oy3.get_each_level_over_nums([85]),
                _oy7 = _oy6.slot[85][6],
                _oy8 = _oy6.slot[85][8],
                _oy9 = _oy6.slot[85][10],
                _oya = _oy3.get_have_rader_nums().air_rader,
                _oyb = _oy3.getCountryName();
            return _oy7 > 0 && (_oy5.tyku += 1 * _oy7, _oy5.kaih += 1 * _oy7, _oya >= 1 && (_oy5.tyku += 2)), _oy8 > 0 && (_oy5.houg += 1 * _oy8, 'ドイツ' != _oyb && 'イタリア' != _oyb || (_oy5.tyku += 1 * _oy8, _oy5.kaih += 1 * _oy8)), _oy9 > 0 && (_oy5.kaih += 1 * _oy9, _oy5.houm += 1 * _oy9, 'ドイツ' != _oyb && 'イタリア' != _oyb || (_oy5.houg += 1)), _oy5;
        };
    },
    29180: (_oyc, _oyd, _oye) => {
        'use strict';
        var _oyf = null;
        defineModule(_oyd);
        Object.defineProperty(_oyd, '__esModule', {
            'value': true
        }), _oyd.getSlot87PersonalEffect = void 0;
        var _oyg = _oye(74496);
        _oyd.getSlot87PersonalEffect = function(_oyh) {
            var _oyi = null,
                _oyj = new _oyg.SlotItemEffectModel(),
                _oyk = false,
                _oyl = new _oyg.SlotItemEffectModel(),
                _oym = 0;
            if (951 == _oyh.ship_id ? (_oyl.houg += 1, _oyl.kaih += 1, _oyl.raig += 1, _oyl.houm += 1, _oyk = true, _oym = 1) : 181 == _oyh.ship_id || 316 == _oyh.ship_id || 50 == _oyh.ship_id || 229 == _oyh.ship_id || 961 == _oyh.ship_id ? _oym = 2 : 591 != _oyh.ship_id && 592 != _oyh.ship_id && 593 != _oyh.ship_id && 954 != _oyh.ship_id || (_oyj.kaih += 2, _oyj.raig += 1, _oym = 3), 38 != _oyh.ctype && 54 != _oyh.ctype && 101 != _oyh.ctype || (_oym = 4), _oyk) {
                var _oyn = _oyh.get_slotnums(87);
                _oyj.add(_oyl.multiply(_oyn));
            }
            if (0 == _oym) return _oyj;
            var _oyo = _oyh.get_each_level_nums(87),
                _oyp = [];
            return _oym > 0 && _oyo.forEach(function(_oyq, _oyr) {
                var _oys = null;
                for (var _oyt = 1; _oyt <= _oyh.SLOT_LEVEL_MAX; _oyt++) null == _oyp[_oyt] && (_oyp[_oyt] = 0), _oyr >= _oyt && (_oyp[_oyt] += _oyq);
            }), 1 == _oym ? (_oyp[6] >= 1 && (_oyj.tyku += 1 * _oyp[6]), _oyp[7] >= 1 && (_oyj.kaih += 1 * _oyp[7]), _oyp[8] >= 1 && (_oyj.raig += 1 * _oyp[8]), _oyp[9] >= 1 && (_oyj.houg += 1 * _oyp[9]), _oyp[10] >= 1 && (_oyj.houm += 1 * _oyp[10])) : 2 == _oym ? (_oyp[6] >= 1 && (_oyj.kaih += 1 * _oyp[6]), _oyp[7] >= 1 && (_oyj.raig += 1 * _oyp[7]), _oyp[8] >= 1 && (_oyj.houg += 1 * _oyp[8]), _oyp[9] >= 1 && (_oyj.houm += 1 * _oyp[9]), _oyp[10] >= 1 && (_oyj.kaih += 1 * _oyp[10])) : 3 == _oym ? (_oyp[6] > 0 && (_oyj.kaih += 1), _oyp[8] > 0 && (_oyj.raig += 1), _oyp[10] > 0 && (_oyj.houg += 1)) : 4 == _oym && (_oyp[7] >= 1 && (_oyj.kaih += 1 * _oyp[7]), _oyp[8] >= 1 && (_oyj.raig += 1 * _oyp[8]), _oyp[10] >= 1 && (_oyj.houm += 1 * _oyp[10])), _oyj;
        };
    },
    68685: function(_oyu, _oyv, _oyw) {
        'use strict';
        var _oyx = null;
        var _oyy = this && this.__importDefault || function(_oyz) {
            var _oz0 = null;
            return _oyz && _oyz.__esModule ? _oyz : {
                'default': _oyz
            };
        };
        defineModule(_oyv);
        Object.defineProperty(_oyv, '__esModule', {
            'value': true
        }), _oyv.getSlot90PersonalEffect = void 0;
        var _oz1 = _oyw(74496),
            _oz2 = _oyy(_oyw(18622));
        _oyv.getSlot90PersonalEffect = function(_oz3) {
            var _oz4 = null,
                _oz5 = new _oz1.SlotItemEffectModel(),
                _oz6 = new _oz1.SlotItemEffectModel();
            if (142 == _oz3.ship_id ? (_oz6.houg += 2, _oz6.kaih += 1) : 295 == _oz3.ship_id || 416 == _oz3.ship_id || 417 == _oz3.ship_id ? _oz6.houg += 1 : 264 == _oz3.ship_id ? (_oz6.houg += 1, _oz6.tyku += 1) : 501 != _oz3.ship_id && 506 != _oz3.ship_id && 502 != _oz3.ship_id && 507 != _oz3.ship_id || (_oz6.houg += 1), 7 != _oz3.ctype && 13 != _oz3.ctype && 8 != _oz3.ctype && 29 != _oz3.ctype && 9 != _oz3.ctype && 31 != _oz3.ctype || (_oz6.houg += 1), _oz6.exists()) {
                var _oz7 = _oz3.get_slotnums(90);
                _oz5 = _oz6.multiply(_oz7);
            }
            var _oz8 = [];
            if ('あおば' == _oz3.yomi && (_oz8[1] = 1), 13 != _oz3.ctype && 7 != _oz3.ctype || (_oz8[2] = 1), 0 == _oz8.length) return _oz5;
            for (var _oz9 = 0, _oza = 0, _ozb = 0, _ozc = _oz3.have_slot_ids(); _ozb < _ozc.length; _ozb++) {
                var _ozd = _ozc[_ozb],
                    _oze = _oz2.default.model.slot.getMst(_ozd),
                    _ozf = _oze.equipType;
                12 != _ozf && 13 != _ozf || (_oze.sakuteki >= 5 && (_oz9 += _oz3.get_slotnums(parseInt(_ozd))), _oze.taiku >= 2 && (_oza += _oz3.get_slotnums(parseInt(_ozd))));
            }
            return _oza > 0 && null != _oz8[1] && (_oz5.tyku += 5, _oz5.kaih += 2), _oz9 > 0 && null != _oz8[2] && (_oz5.houg += 3, _oz5.kaih += 2, _oz5.raig += 2), _oz5;
        };
    },
    26078: (_ozg, _ozh, _ozi) => {
        'use strict';
        var _ozj = null;
        defineModule(_ozh);
        Object.defineProperty(_ozh, '__esModule', {
            'value': true
        }), _ozh.getSlot93PersonalEffect = void 0;
        var _ozk = _ozi(74496);
        _ozh.getSlot93PersonalEffect = function(_ozl) {
            var _ozm = null,
                _ozn = new _ozk.SlotItemEffectModel();
            return 'そうりゅう' == _ozl.yomi ? _ozn.houg = 1 : 'ひりゅう' == _ozl.yomi && (_ozn.houg = 3), _ozn;
        };
    },
    20829: (_ozo, _ozp, _ozq) => {
        'use strict';
        var _ozr = null;
        defineModule(_ozp);
        Object.defineProperty(_ozp, '__esModule', {
            'value': true
        }), _ozp.getSlot94PersonalEffect = void 0;
        var _ozs = _ozq(74496);
        _ozp.getSlot94PersonalEffect = function(_ozt) {
            var _ozu = null,
                _ozv = new _ozs.SlotItemEffectModel();
            if (196 == _ozt.ship_id) _ozv.houg = 7;
            else {
                if (197 != _ozt.ship_id) return _ozv;
                _ozv.houg = 3;
            }
            return _ozv;
        };
    },
    6880: (_ozw, _ozx, _ozy) => {
        'use strict';
        var _ozz = null;
        defineModule(_ozx);
        Object.defineProperty(_ozx, '__esModule', {
            'value': true
        }), _ozx.getSlot99PersonalEffect = void 0;
        var _p00 = _ozy(74496);
        _ozx.getSlot99PersonalEffect = function(_p01) {
            var _p02 = null,
                _p03 = new _p00.SlotItemEffectModel();
            return 'そうりゅう' == _p01.yomi ? _p03.houg = 4 : 'ひりゅう' == _p01.yomi && (_p03.houg = 1), _p03;
        };
    },
    21403: (_p04, _p05, _p06) => {
        'use strict';
        var _p07 = null;
        defineModule(_p05);
        Object.defineProperty(_p05, '__esModule', {
            'value': true
        }), _p05.getSlotCorsairMkIIPersonalEffect = void 0;
        var _p08 = _p06(74496);
        _p05.getSlotCorsairMkIIPersonalEffect = function(_p09) {
            var _p0a = null,
                _p0b = new _p08.SlotItemEffectModel(),
                _p0c = false,
                _p0d = new _p08.SlotItemEffectModel();
            112 == _p09.ctype && (_p0d.houg += 1, _p0d.tyku += 1, _p0d.kaih += 2, _p0c = true);
            var _p0e = _p09.getCountryName();
            if (67 == _p09.ctype || 78 == _p09.ctype || 82 == _p09.ctype || 88 == _p09.ctype || 108 == _p09.ctype || 112 == _p09.ctype ? (_p0d.houg += 1, _p0d.tyku += 2, _p0d.kaih += 3, _p0c = true) : 'アメリカ' == _p0e && (_p0d.houg += 1, _p0d.tyku += 1, _p0d.kaih += 2, _p0c = true), 0 == _p0c) return _p0b;
            var _p0f = _p09.get_slotnums(434) + _p09.get_slotnums(435);
            return _p0b.add(_p0d.multiply(_p0f)), _p0b;
        };
    },
    9195: (_p0g, _p0h, _p0i) => {
        'use strict';
        var _p0j = null;
        defineModule(_p0h);
        Object.defineProperty(_p0h, '__esModule', {
            'value': true
        }), _p0h.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _p0k = _p0i(74496);
        _p0h.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_p0l) {
            var _p0m = null,
                _p0n = new _p0k.SlotItemEffectModel(),
                _p0o = false,
                _p0p = new _p0k.SlotItemEffectModel();
            if (56 == _p0l.ctype && (_p0p.tais += 3, _p0p.kaih += 2, _p0o = true), 0 == _p0o) return _p0n;
            var _p0q = _p0l.get_slotnums(44) + _p0l.get_slotnums(45) + _p0l.get_slotnums(287) + _p0l.get_slotnums(288);
            return _p0n.add(_p0p.multiply(_p0q)), _p0n;
        };
    },
    93297: (_p0r, _p0s, _p0t) => {
        'use strict';
        var _p0u = null;
        defineModule(_p0s);
        Object.defineProperty(_p0s, '__esModule', {
            'value': true
        }), _p0s.getSlotDomesticSonarPersonalEffect = void 0;
        var _p0v = _p0t(74496);
        _p0s.getSlotDomesticSonarPersonalEffect = function(_p0w) {
            var _p0x = null,
                _p0y = new _p0v.SlotItemEffectModel();
            return 56 == _p0w.ctype && (_p0y.tais += 2, _p0y.kaih += 3), _p0y;
        };
    },
    45482: (_p0z, _p10, _p11) => {
        'use strict';
        var _p12 = null;
        defineModule(_p10);
        Object.defineProperty(_p10, '__esModule', {
            'value': true
        }), _p10.getSlotOtherSuiseiPersonalEffect = void 0;
        var _p13 = _p11(74496);
        _p10.getSlotOtherSuiseiPersonalEffect = function(_p14) {
            var _p15 = null,
                _p16 = new _p13.SlotItemEffectModel(),
                _p17 = new _p13.SlotItemEffectModel();
            if (553 == _p14.ship_id) _p17.houg = 2;
            else {
                if (554 != _p14.ship_id) return _p16;
                _p17.houg = 2;
            }
            var _p18 = _p14.get_slotnums(24) + _p14.get_slotnums(57) + _p14.get_slotnums(111);
            return _p16 = _p17.multiply(_p18);
        };
    },
    45927: (_p19, _p1a, _p1b) => {
        'use strict';
        var _p1c = null;
        defineModule(_p1a);
        Object.defineProperty(_p1a, '__esModule', {
            'value': true
        }), _p1a.getSlotSmokePersonalEffect = void 0;
        var _p1d = _p1b(74496);
        _p1a.getSlotSmokePersonalEffect = function(_p1e) {
            var _p1f = null,
                _p1g = new _p1d.SlotItemEffectModel(),
                _p1h = false,
                _p1i = new _p1d.SlotItemEffectModel();
            if (959 == _p1e.ship_id && (_p1i.kaih += 4, _p1h = true), 'ジョンストン' == _p1e.yomi || 'サミュエル・B・ロバーツ' == _p1e.yomi || 'せんだい' == _p1e.yomi || 'はるかぜ' == _p1e.yomi || 'かみかぜ' == _p1e.yomi || 'しきなみ' == _p1e.yomi || 'うらなみ' == _p1e.yomi || 'あおば' == _p1e.yomi ? (_p1i.kaih += 3, _p1h = true) : 'いなづま' != _p1e.yomi && 'はぐろ' != _p1e.yomi && 'はつしも' != _p1e.yomi && 'かすみ' != _p1e.yomi && 'ふぶき' != _p1e.yomi && 'あたご' != _p1e.yomi && 'あまぎり' != _p1e.yomi && 'はまなみ' != _p1e.yomi || (_p1i.kaih += 2, _p1h = true), 0 == _p1h) return _p1g;
            var _p1j = _p1e.get_slotnums(500) + _p1e.get_slotnums(501);
            return _p1g.add(_p1i.multiply(_p1j)), _p1g;
        };
    },
    32666: (_p1k, _p1l, _p1m) => {
        'use strict';
        var _p1n = null;
        defineModule(_p1l);
        Object.defineProperty(_p1l, '__esModule', {
            'value': true
        }), _p1l.getSlotTokuYonPersonalEffect = void 0;
        var _p1o = _p1m(74496);
        _p1l.getSlotTokuYonPersonalEffect = function(_p1p) {
            var _p1q = null,
                _p1r = new _p1o.SlotItemEffectModel(),
                _p1s = false,
                _p1t = new _p1o.SlotItemEffectModel(),
                _p1u = 0,
                _p1v = _p1p.get_slotnums(525),
                _p1w = _p1p.get_slotnums(526),
                _p1x = _p1v + _p1w;
            if (13 != _p1p.stype && 14 != _p1p.stype || (_p1t.houg += 1, _p1t.raig += 2, _p1t.kaih -= 1, _p1s = true, _p1u = 1, 'い36' != _p1p.yomi && 'い41' != _p1p.yomi || (_p1r.houg += 2, _p1r.raig += 1, _p1r.houm += 2), _p1w >= 1 && (_p1r.houg += 1 * _p1w, _p1r.raig += 1 * _p1w, _p1r.houm += 1 * _p1w)), 0 == _p1s) return _p1r;
            if (_p1r.add(_p1t.multiply(_p1x)), 0 == _p1u) return _p1r;
            var _p1y = _p1p.get_each_level_over_nums([525, 526]),
                _p1z = _p1y.slot[525],
                _p20 = _p1y.slot[526];
            if (1 == _p1u) {
                if (_p1z[1] >= 1 || _p20[1] >= 1) {
                    var _p21 = _p1z[1] + _p20[1];
                    _p1r.raig += 1 * _p21;
                }
                if (_p20[2] >= 1) {
                    var _p22 = _p1z[2] + _p20[2];
                    _p1r.houg += 1 * _p22;
                }
                if (_p1z[3] >= 1 || _p20[3] >= 1) {
                    var _p23 = _p1z[3] + _p20[3];
                    _p1r.houm += 1 * _p23;
                }
                if (_p20[4] >= 1) {
                    var _p24 = _p1z[4] + _p20[4];
                    _p1r.raig += 1 * _p24;
                }
                if (_p1z[6] >= 1 || _p20[6] >= 1) {
                    var _p25 = _p1z[6] + _p20[6];
                    _p1r.houm += 1 * _p25;
                }
                if (_p20[8] >= 1) {
                    var _p26 = _p1z[8] + _p20[8];
                    _p1r.houg += 1 * _p26;
                }
                if (_p1z[10] >= 1 || _p20[10] >= 1) {
                    var _p27 = _p1z[10] + _p20[10];
                    _p1r.raig += 1 * _p27;
                }
            }
            return _p1r;
        };
    },
    29805: (_p28, _p29, _p2a) => {
        'use strict';
        var _p2b = null;
        defineModule(_p29);
        Object.defineProperty(_p29, '__esModule', {
            'value': true
        }), _p29.getSlotType10PersonalEffect = void 0;
        var _p2c = _p2a(74496);
        _p29.getSlotType10PersonalEffect = function(_p2d) {
            var _p2e = null,
                _p2f = new _p2c.SlotItemEffectModel();
            return 662 == _p2d.ship_id || 663 == _p2d.ship_id || 668 == _p2d.ship_id ? (_p2f.houg += 2, _p2f.kaih += 1, _p2f.tais += 3) : 501 != _p2d.ship_id && 506 != _p2d.ship_id && 502 != _p2d.ship_id && 507 != _p2d.ship_id || (_p2f.houg += 2), _p2f;
        };
    },
    58913: (_p2g, _p2h, _p2i) => {
        'use strict';
        var _p2j = null;
        defineModule(_p2h);
        Object.defineProperty(_p2h, '__esModule', {
            'value': true
        }), _p2h.getSlotType11PersonalEffect = void 0;
        var _p2k = _p2i(74496);
        _p2h.getSlotType11PersonalEffect = function(_p2l) {
            var _p2m = null,
                _p2n = new _p2k.SlotItemEffectModel();
            return 662 == _p2l.ship_id || 663 == _p2l.ship_id || 668 == _p2l.ship_id ? (_p2n.houg += 1, _p2n.kaih += 1, _p2n.tais += 1) : 501 != _p2l.ship_id && 506 != _p2l.ship_id && 502 != _p2l.ship_id && 507 != _p2l.ship_id || (_p2n.houg += 1, _p2n.kaih += 1), _p2n;
        };
    },
    55421: (_p2o, _p2p, _p2q) => {
        'use strict';
        var _p2r = null;
        defineModule(_p2p);
        Object.defineProperty(_p2p, '__esModule', {
            'value': true
        }), _p2p.getSlotType25PersonalEffect = void 0;
        var _p2s = _p2q(74496);
        _p2p.getSlotType25PersonalEffect = function(_p2t) {
            var _p2u = null,
                _p2v = new _p2s.SlotItemEffectModel();
            return 662 == _p2t.ship_id ? (_p2v.tais += 4, _p2v.kaih += 1) : 663 != _p2t.ship_id && 668 != _p2t.ship_id || (_p2v.tais += 3, _p2v.kaih += 1), _p2v;
        };
    },
    272: function(_p2w, _p2x, _p2y) {
        'use strict';
        var _p2z = null;
        var _p30 = this && this.__importDefault || function(_p31) {
            var _p32 = null;
            return _p31 && _p31.__esModule ? _p31 : {
                'default': _p31
            };
        };
        defineModule(_p2x);
        Object.defineProperty(_p2x, '__esModule', {
            'value': true
        }), _p2x.getSlotType9PersonalEffect = void 0;
        var _p33 = _p2y(74496),
            _p34 = _p30(_p2y(18622));
        _p2x.getSlotType9PersonalEffect = function(_p35) {
            var _p36 = null,
                _p37 = new _p33.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_p35.stype]) return _p37;
            for (var _p38 = 0, _p39 = 0, _p3a = _p35.have_slot_ids(); _p39 < _p3a.length; _p39++) {
                var _p3b = _p3a[_p39];
                if (9 == _p34.default.model.slot.getMst(_p3b).equipType)
                    for (var _p3c = 0, _p3d = _p35.have_slots_dict[parseInt(_p3b)]; _p3c < _p3d.length; _p3c++) {
                        var _p3e = _p3d[_p3c].level;
                        _p38 < _p3e && (_p38 = _p3e);
                    }
            }
            return _p38 >= 2 && (_p37.saku += 1), _p38 >= 4 && (_p37.houg += 1), _p38 >= 6 && (_p37.saku += 1), _p38 >= 10 && (_p37.houg += 1, _p37.saku += 1), _p37;
        };
    },
    54518: (_p3f, _p3g, _p3h) => {
        'use strict';
        var _p3i = null;
        defineModule(_p3g);
        Object.defineProperty(_p3g, '__esModule', {
            'value': true
        }), _p3g.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _p3j = _p3h(74496);
        _p3g.getSlot_16InchMkXRensouhou_PersonalEffect = function(_p3k) {
            var _p3l = null,
                _p3m = new _p3j.SlotItemEffectModel();
            if (93 == _p3k.ctype) {
                var _p3n = _p3k.get_slotnums(330);
                _p3n > 0 && (_p3m.houg = _p3m.houg + 1 * _p3n);
                var _p3o = _p3k.get_slotnums(331);
                _p3o > 0 && (_p3m.houg = _p3m.houg + 1 * _p3o, 1496 != _p3k.ship_id && 918 != _p3k.ship_id || (_p3m.houg = _p3m.houg + 1 * _p3o, _p3m.kaih = _p3m.kaih + 1 * _p3o));
                var _p3p = _p3k.get_slotnums(332);
                return _p3p > 0 && (_p3m.houg = _p3m.houg + 1 * _p3p, 1496 != _p3k.ship_id && 918 != _p3k.ship_id || (_p3m.houg = _p3m.houg + 1 * _p3p, _p3m.kaih = _p3m.kaih + 1 * _p3p, _p3m.tyku = _p3m.tyku + 1 * _p3p)), _p3m;
            }
            var _p3q = new _p3j.SlotItemEffectModel();
            if (19 == _p3k.ctype ? (_p3q.houg = 1, (541 == _p3k.ship_id || 573 == _p3k.ship_id) && (_p3q.houg += 1)) : 88 == _p3k.ctype && (_p3q.houg = 1, 576 == _p3k.ship_id && (_p3q.houg += 1)), !_p3q.exists()) return _p3m;
            var _p3r = _p3k.get_slotnums(330) + _p3k.get_slotnums(331) + _p3k.get_slotnums(332);
            return _p3m = _p3q.multiply(_p3r);
        };
    },
    79353: (_p3s, _p3t, _p3u) => {
        'use strict';
        var _p3v = null;
        defineModule(_p3t);
        Object.defineProperty(_p3t, '__esModule', {
            'value': true
        }), _p3t.getZuiunSeriesEffect = void 0;
        var _p3w = _p3u(74496);
        _p3t.getZuiunSeriesEffect = function(_p3x) {
            var _p3y = null,
                _p3z = new _p3w.SlotItemEffectModel(),
                _p40 = false,
                _p41 = new _p3w.SlotItemEffectModel();
            if (662 == _p3x.ship_id ? (_p3z.houg += 2, _p3z.kaih += 1) : 663 == _p3x.ship_id || 668 == _p3x.ship_id || 501 == _p3x.ship_id || 506 == _p3x.ship_id ? (_p3z.houg += 2, _p41.kaih += 1, _p41.tyku += 1, _p40 = true) : 502 != _p3x.ship_id && 507 != _p3x.ship_id || (_p3z.houg += 1, _p41.kaih += 1, _p41.tyku += 1, _p40 = true), 0 == _p40) return _p3z;
            var _p42 = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_p43) {
                var _p44 = null;
                _p42 += _p3x.get_slotnums(_p43);
            }), _p3z.add(_p41.multiply(_p42)), _p3z;
        };
    },
    89051: function(_p45, _p46, _p47) {
        'use strict';
        var _p48 = null;
        var _p49 = this && this.__createBinding || (Object.create ? function(_p4a, _p4b, _p4c, _p4d) {
                var _p4e = null;
                void 0 === _p4d && (_p4d = _p4c);
                var _p4f = Object.getOwnPropertyDescriptor(_p4b, _p4c);
                _p4f && !('get' in _p4f ? !_p4b.__esModule : _p4f.writable || _p4f.configurable) || (_p4f = {
                    'enumerable': true,
                    'get': function() {
                        return _p4b[_p4c];
                    }
                }), Object.defineProperty(_p4a, _p4d, _p4f);
            } : function(_p4g, _p4h, _p4i, _p4j) {
                void 0 === _p4j && (_p4j = _p4i), _p4g[_p4j] = _p4h[_p4i];
            }),
            _p4k = this && this.__exportStar || function(_p4l, _p4m) {
                var _p4n = null;
                for (var _p4o in _p4l) 'default' === _p4o || Object.prototype.hasOwnProperty.call(_p4m, _p4o) || _p49(_p4m, _p4l, _p4o);
            };
        defineModule(_p46);
        Object.defineProperty(_p46, '__esModule', {
            'value': true
        }), _p4k(_p47(34165), _p46), _p4k(_p47(81018), _p46), _p4k(_p47(56716), _p46), _p4k(_p47(17713), _p46), _p4k(_p47(54518), _p46), _p4k(_p47(66985), _p46), _p4k(_p47(88102), _p46), _p4k(_p47(66904), _p46), _p4k(_p47(98137), _p46), _p4k(_p47(69954), _p46), _p4k(_p47(22218), _p46), _p4k(_p47(88271), _p46), _p4k(_p47(23035), _p46), _p4k(_p47(2578), _p46), _p4k(_p47(17143), _p46), _p4k(_p47(16164), _p46), _p4k(_p47(35023), _p46), _p4k(_p47(44680), _p46), _p4k(_p47(45749), _p46), _p4k(_p47(37334), _p46), _p4k(_p47(29180), _p46), _p4k(_p47(68685), _p46), _p4k(_p47(26078), _p46), _p4k(_p47(20829), _p46), _p4k(_p47(6880), _p46), _p4k(_p47(17213), _p46), _p4k(_p47(40176), _p46), _p4k(_p47(32889), _p46), _p4k(_p47(11285), _p46), _p4k(_p47(96200), _p46), _p4k(_p47(9115), _p46), _p4k(_p47(37173), _p46), _p4k(_p47(21713), _p46), _p4k(_p47(59823), _p46), _p4k(_p47(57440), _p46), _p4k(_p47(29240), _p46), _p4k(_p47(40885), _p46), _p4k(_p47(19614), _p46), _p4k(_p47(87220), _p46), _p4k(_p47(81367), _p46), _p4k(_p47(13052), _p46), _p4k(_p47(94968), _p46), _p4k(_p47(48658), _p46), _p4k(_p47(1906), _p46), _p4k(_p47(61887), _p46), _p4k(_p47(47970), _p46), _p4k(_p47(31797), _p46), _p4k(_p47(45738), _p46), _p4k(_p47(34718), _p46), _p4k(_p47(69245), _p46), _p4k(_p47(18478), _p46), _p4k(_p47(2899), _p46), _p4k(_p47(57120), _p46), _p4k(_p47(74985), _p46), _p4k(_p47(9234), _p46), _p4k(_p47(30802), _p46), _p4k(_p47(97002), _p46), _p4k(_p47(16748), _p46), _p4k(_p47(53618), _p46), _p4k(_p47(72573), _p46), _p4k(_p47(8955), _p46), _p4k(_p47(98947), _p46), _p4k(_p47(44726), _p46), _p4k(_p47(93065), _p46), _p4k(_p47(85767), _p46), _p4k(_p47(38314), _p46), _p4k(_p47(59747), _p46), _p4k(_p47(40649), _p46), _p4k(_p47(13533), _p46), _p4k(_p47(12138), _p46), _p4k(_p47(30042), _p46), _p4k(_p47(33623), _p46), _p4k(_p47(85630), _p46), _p4k(_p47(88736), _p46), _p4k(_p47(49341), _p46), _p4k(_p47(74306), _p46), _p4k(_p47(83898), _p46), _p4k(_p47(71873), _p46), _p4k(_p47(53122), _p46), _p4k(_p47(51063), _p46), _p4k(_p47(91491), _p46), _p4k(_p47(85495), _p46), _p4k(_p47(65365), _p46), _p4k(_p47(98164), _p46), _p4k(_p47(38114), _p46), _p4k(_p47(21003), _p46), _p4k(_p47(77010), _p46), _p4k(_p47(39126), _p46), _p4k(_p47(72176), _p46), _p4k(_p47(33846), _p46), _p4k(_p47(97157), _p46), _p4k(_p47(63406), _p46), _p4k(_p47(66373), _p46), _p4k(_p47(19707), _p46), _p4k(_p47(63978), _p46), _p4k(_p47(92382), _p46), _p4k(_p47(78415), _p46), _p4k(_p47(23090), _p46), _p4k(_p47(18776), _p46), _p4k(_p47(39656), _p46), _p4k(_p47(66039), _p46), _p4k(_p47(64679), _p46), _p4k(_p47(95953), _p46), _p4k(_p47(86384), _p46), _p4k(_p47(65345), _p46), _p4k(_p47(46514), _p46), _p4k(_p47(81976), _p46), _p4k(_p47(89331), _p46), _p4k(_p47(73973), _p46), _p4k(_p47(21178), _p46), _p4k(_p47(5079), _p46), _p4k(_p47(95014), _p46), _p4k(_p47(53099), _p46), _p4k(_p47(76201), _p46), _p4k(_p47(24931), _p46), _p4k(_p47(60978), _p46), _p4k(_p47(74312), _p46), _p4k(_p47(54350), _p46), _p4k(_p47(26262), _p46), _p4k(_p47(45530), _p46), _p4k(_p47(44053), _p46), _p4k(_p47(65441), _p46), _p4k(_p47(33258), _p46), _p4k(_p47(92168), _p46), _p4k(_p47(85975), _p46), _p4k(_p47(98467), _p46), _p4k(_p47(88348), _p46), _p4k(_p47(21097), _p46), _p4k(_p47(37273), _p46), _p4k(_p47(72694), _p46), _p4k(_p47(62067), _p46), _p4k(_p47(87817), _p46), _p4k(_p47(93526), _p46), _p4k(_p47(33084), _p46), _p4k(_p47(97831), _p46), _p4k(_p47(45482), _p46), _p4k(_p47(272), _p46), _p4k(_p47(69377), _p46), _p4k(_p47(31127), _p46), _p4k(_p47(79353), _p46), _p4k(_p47(17274), _p46), _p4k(_p47(91302), _p46), _p4k(_p47(82229), _p46), _p4k(_p47(10325), _p46), _p4k(_p47(351), _p46), _p4k(_p47(4050), _p46), _p4k(_p47(29805), _p46), _p4k(_p47(58913), _p46), _p4k(_p47(55421), _p46), _p4k(_p47(87845), _p46), _p4k(_p47(17562), _p46), _p4k(_p47(78466), _p46), _p4k(_p47(40061), _p46), _p4k(_p47(9195), _p46), _p4k(_p47(93297), _p46), _p4k(_p47(15133), _p46), _p4k(_p47(55747), _p46), _p4k(_p47(33155), _p46), _p4k(_p47(79086), _p46), _p4k(_p47(2306), _p46), _p4k(_p47(14386), _p46), _p4k(_p47(80225), _p46), _p4k(_p47(17732), _p46), _p4k(_p47(47169), _p46), _p4k(_p47(77670), _p46), _p4k(_p47(79988), _p46), _p4k(_p47(92253), _p46), _p4k(_p47(74428), _p46), _p4k(_p47(16498), _p46), _p4k(_p47(2631), _p46), _p4k(_p47(27177), _p46), _p4k(_p47(94781), _p46), _p4k(_p47(53908), _p46), _p4k(_p47(79813), _p46), _p4k(_p47(16088), _p46), _p4k(_p47(93733), _p46), _p4k(_p47(69939), _p46), _p4k(_p47(33734), _p46), _p4k(_p47(34432), _p46), _p4k(_p47(97423), _p46), _p4k(_p47(23551), _p46), _p4k(_p47(99791), _p46), _p4k(_p47(21403), _p46), _p4k(_p47(6173), _p46), _p4k(_p47(23934), _p46), _p4k(_p47(53709), _p46), _p4k(_p47(88838), _p46), _p4k(_p47(99790), _p46), _p4k(_p47(18387), _p46), _p4k(_p47(70941), _p46), _p4k(_p47(35025), _p46), _p4k(_p47(2603), _p46), _p4k(_p47(78707), _p46), _p4k(_p47(89058), _p46), _p4k(_p47(84372), _p46), _p4k(_p47(96804), _p46), _p4k(_p47(33896), _p46), _p4k(_p47(11031), _p46), _p4k(_p47(71383), _p46), _p4k(_p47(55888), _p46), _p4k(_p47(2258), _p46), _p4k(_p47(38003), _p46), _p4k(_p47(92174), _p46), _p4k(_p47(43768), _p46), _p4k(_p47(73254), _p46), _p4k(_p47(55734), _p46), _p4k(_p47(81254), _p46), _p4k(_p47(65455), _p46), _p4k(_p47(70362), _p46), _p4k(_p47(61977), _p46), _p4k(_p47(43607), _p46), _p4k(_p47(68086), _p46), _p4k(_p47(78173), _p46), _p4k(_p47(22581), _p46), _p4k(_p47(20418), _p46), _p4k(_p47(93373), _p46), _p4k(_p47(13053), _p46), _p4k(_p47(47874), _p46), _p4k(_p47(42788), _p46), _p4k(_p47(57664), _p46), _p4k(_p47(44990), _p46), _p4k(_p47(17712), _p46), _p4k(_p47(83957), _p46), _p4k(_p47(78539), _p46), _p4k(_p47(96282), _p46), _p4k(_p47(49679), _p46), _p4k(_p47(45927), _p46), _p4k(_p47(90312), _p46), _p4k(_p47(86856), _p46), _p4k(_p47(78123), _p46), _p4k(_p47(25765), _p46), _p4k(_p47(29493), _p46), _p4k(_p47(28221), _p46), _p4k(_p47(14830), _p46), _p4k(_p47(54047), _p46), _p4k(_p47(76054), _p46), _p4k(_p47(90725), _p46), _p4k(_p47(93053), _p46), _p4k(_p47(88792), _p46), _p4k(_p47(33242), _p46), _p4k(_p47(59415), _p46), _p4k(_p47(3296), _p46), _p4k(_p47(32666), _p46), _p4k(_p47(36731), _p46), _p4k(_p47(30450), _p46);
    },
    82692: function(_p4p, _p4q, _p4r) {
        'use strict';
        var _p4s = null;
        var _p4t = this && this.__createBinding || (Object.create ? function(_p4u, _p4v, _p4w, _p4x) {
                var _p4y = null;
                void 0 === _p4x && (_p4x = _p4w);
                var _p4z = Object.getOwnPropertyDescriptor(_p4v, _p4w);
                _p4z && !('get' in _p4z ? !_p4v.__esModule : _p4z.writable || _p4z.configurable) || (_p4z = {
                    'enumerable': true,
                    'get': function() {
                        return _p4v[_p4w];
                    }
                }), Object.defineProperty(_p4u, _p4x, _p4z);
            } : function(_p50, _p51, _p52, _p53) {
                void 0 === _p53 && (_p53 = _p52), _p50[_p53] = _p51[_p52];
            }),
            _p54 = this && this.__setModuleDefault || (Object.create ? function(_p55, _p56) {
                var _p57 = null;
                Object.defineProperty(_p55, 'default', {
                    'enumerable': true,
                    'value': _p56
                });
            } : function(_p58, _p59) {
                var _p5a = null;
                _p58.default = _p59;
            }),
            _p5b = this && this.__importStar || function(_p5c) {
                var _p5d = null;
                if (_p5c && _p5c.__esModule) return _p5c;
                var _p5e = {};
                if (null != _p5c) {
                    for (var _p5f in _p5c) 'default' !== _p5f && Object.prototype.hasOwnProperty.call(_p5c, _p5f) && _p4t(_p5e, _p5c, _p5f);
                }
                return _p54(_p5e, _p5c), _p5e;
            };
        defineModule(_p4q);
        Object.defineProperty(_p4q, '__esModule', {
            'value': true
        }), _p4q.SlotItemEffectUtil = void 0;
        var _p5g, _p5h = _p4r(73785),
            _p5i = _p5b(_p4r(89051)),
            _p5j = _p4r(74496);
        ! function(_p5k) {
            var _p5l = null;
            _p5k.getSlotitemEffect = function(_p5m, _p5n) {
                var _p5o = null;
                if (null == _p5m || null == _p5n) return null;
                for (var _p5p = new _p5h.SlotItemEffectParamModel(_p5m, _p5n), _p5q = [{
                        'isExecute': Boolean(_p5p.get_type3_nums(9)),
                        'execFunc': _p5i.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_type3_nums(10)),
                        'execFunc': _p5i.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_type3_nums(11)),
                        'execFunc': _p5i.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_type3_nums(12)) || Boolean(_p5p.get_type3_nums(13)),
                        'execFunc': _p5i.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_type3_nums(25)),
                        'execFunc': _p5i.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_type3_nums(29)),
                        'execFunc': _p5i.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_type3_nums(42)),
                        'execFunc': _p5i.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(3)) || Boolean(_p5p.get_slotnums(122)),
                        'execFunc': _p5i.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(5)),
                        'execFunc': _p5i.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(12)),
                        'execFunc': _p5i.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(15)),
                        'execFunc': _p5i.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(18)) || Boolean(_p5p.get_slotnums(52)),
                        'execFunc': _p5i.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(19)),
                        'execFunc': _p5i.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(24)) || Boolean(_p5p.get_slotnums(57)) || Boolean(_p5p.get_slotnums(111)),
                        'execFunc': _p5i.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(26)) || Boolean(_p5p.get_slotnums(62)) || Boolean(_p5p.get_slotnums(79)) || Boolean(_p5p.get_slotnums(80)) || Boolean(_p5p.get_slotnums(81)) || Boolean(_p5p.get_slotnums(207)) || Boolean(_p5p.get_slotnums(208)),
                        'execFunc': _p5i.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(35)),
                        'execFunc': _p5i.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(39)) || Boolean(_p5p.get_slotnums(40)) || Boolean(_p5p.get_slotnums(49)) || Boolean(_p5p.get_slotnums(131)),
                        'execFunc': _p5i.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(30)) || Boolean(_p5p.get_slotnums(410)),
                        'execFunc': _p5i.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(44)) || Boolean(_p5p.get_slotnums(45)) || Boolean(_p5p.get_slotnums(287)) || Boolean(_p5p.get_slotnums(288)),
                        'execFunc': _p5i.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(46)) || Boolean(_p5p.get_slotnums(47)) || Boolean(_p5p.get_slotnums(149)) || Boolean(_p5p.get_slotnums(132)) || Boolean(_p5p.get_slotnums(438)),
                        'execFunc': _p5i.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(47)) || Boolean(_p5p.get_slotnums(438)),
                        'execFunc': _p5i.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(50)),
                        'execFunc': _p5i.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(58)),
                        'execFunc': _p5i.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(59)),
                        'execFunc': _p5i.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(60)) || Boolean(_p5p.get_slotnums(154)) || Boolean(_p5p.get_slotnums(219)),
                        'execFunc': _p5i.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(61)),
                        'execFunc': _p5i.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(61)),
                        'execFunc': _p5i.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(63)),
                        'execFunc': _p5i.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(66)) || Boolean(_p5p.get_slotnums(220)),
                        'execFunc': _p5i.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(67)),
                        'execFunc': _p5i.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(69)),
                        'execFunc': _p5i.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(70)),
                        'execFunc': _p5i.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(78)),
                        'execFunc': _p5i.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(79)) || Boolean(_p5p.get_slotnums(81)),
                        'execFunc': _p5i.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(82)),
                        'execFunc': _p5i.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(84)),
                        'execFunc': _p5i.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(85)),
                        'execFunc': _p5i.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(87)),
                        'execFunc': _p5i.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(90)),
                        'execFunc': _p5i.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(93)),
                        'execFunc': _p5i.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(94)),
                        'execFunc': _p5i.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(99)),
                        'execFunc': _p5i.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(100)),
                        'execFunc': _p5i.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(104)),
                        'execFunc': _p5i.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(106)) || Boolean(_p5p.get_slotnums(450)),
                        'execFunc': _p5i.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(115)),
                        'execFunc': _p5i.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(118)) || Boolean(_p5p.get_slotnums(521)),
                        'execFunc': _p5i.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(119)),
                        'execFunc': _p5i.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(121)),
                        'execFunc': _p5i.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(122)),
                        'execFunc': _p5i.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(128)) || Boolean(_p5p.get_slotnums(281)),
                        'execFunc': _p5i.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(129)),
                        'execFunc': _p5i.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(132)),
                        'execFunc': _p5i.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(136)),
                        'execFunc': _p5i.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(139)),
                        'execFunc': _p5i.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(143)),
                        'execFunc': _p5i.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(144)),
                        'execFunc': _p5i.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(147)) || Boolean(_p5p.get_slotnums(393)) || Boolean(_p5p.get_slotnums(394)),
                        'execFunc': _p5i.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(149)),
                        'execFunc': _p5i.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(165)) || Boolean(_p5p.get_slotnums(216)),
                        'execFunc': _p5i.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(171)),
                        'execFunc': _p5i.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(174)),
                        'execFunc': _p5i.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(179)),
                        'execFunc': _p5i.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(184)),
                        'execFunc': _p5i.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(188)),
                        'execFunc': _p5i.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(189)),
                        'execFunc': _p5i.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(194)),
                        'execFunc': _p5i.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(195)),
                        'execFunc': _p5i.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(204)),
                        'execFunc': _p5i.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(217)),
                        'execFunc': _p5i.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(220)),
                        'execFunc': _p5i.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(227)),
                        'execFunc': _p5i.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(228)),
                        'execFunc': _p5i.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(229)),
                        'execFunc': _p5i.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(234)),
                        'execFunc': _p5i.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(235)),
                        'execFunc': _p5i.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(237)) || Boolean(_p5p.get_slotnums(322)) || Boolean(_p5p.get_slotnums(323)) || Boolean(_p5p.get_slotnums(490)),
                        'execFunc': _p5i.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(237)),
                        'execFunc': _p5i.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(238)) || Boolean(_p5p.get_slotnums(239)),
                        'execFunc': _p5i.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(242)),
                        'execFunc': _p5i.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(243)),
                        'execFunc': _p5i.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(244)),
                        'execFunc': _p5i.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(245)) || Boolean(_p5p.get_slotnums(246)) || Boolean(_p5p.get_slotnums(468)),
                        'execFunc': _p5i.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(247)),
                        'execFunc': _p5i.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(266)),
                        'execFunc': _p5i.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(266)),
                        'execFunc': _p5i.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(267)) || Boolean(_p5p.get_slotnums(366)),
                        'execFunc': _p5i.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(267)) || Boolean(_p5p.get_slotnums(366)),
                        'execFunc': _p5i.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(268)),
                        'execFunc': _p5i.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(271)),
                        'execFunc': _p5i.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(275)),
                        'execFunc': _p5i.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(277)),
                        'execFunc': _p5i.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(278)),
                        'execFunc': _p5i.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(279)),
                        'execFunc': _p5i.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(282)),
                        'execFunc': _p5i.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(283)),
                        'execFunc': _p5i.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(285)),
                        'execFunc': _p5i.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(286)),
                        'execFunc': _p5i.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(286)),
                        'execFunc': _p5i.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(286)),
                        'execFunc': _p5i.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(287)),
                        'execFunc': _p5i.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(288)),
                        'execFunc': _p5i.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(289)),
                        'execFunc': _p5i.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(290)),
                        'execFunc': _p5i.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(291)),
                        'execFunc': _p5i.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(292)),
                        'execFunc': _p5i.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(293)),
                        'execFunc': _p5i.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(294)),
                        'execFunc': _p5i.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(295)),
                        'execFunc': _p5i.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(296)),
                        'execFunc': _p5i.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(297)),
                        'execFunc': _p5i.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(298)) || Boolean(_p5p.get_slotnums(299)) || Boolean(_p5p.get_slotnums(300)),
                        'execFunc': _p5i.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(301)),
                        'execFunc': _p5i.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(302)),
                        'execFunc': _p5i.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(303)),
                        'execFunc': _p5i.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(304)),
                        'execFunc': _p5i.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(305)) || Boolean(_p5p.get_slotnums(306)),
                        'execFunc': _p5i.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(307)),
                        'execFunc': _p5i.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(308)),
                        'execFunc': _p5i.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(310)) || Boolean(_p5p.get_slotnums(518)),
                        'execFunc': _p5i.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(313)),
                        'execFunc': _p5i.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(314)),
                        'execFunc': _p5i.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(315)),
                        'execFunc': _p5i.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(316)),
                        'execFunc': _p5i.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(317)),
                        'execFunc': _p5i.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(318)),
                        'execFunc': _p5i.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(319)),
                        'execFunc': _p5i.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(320)),
                        'execFunc': _p5i.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(322)),
                        'execFunc': _p5i.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(323)),
                        'execFunc': _p5i.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(324)) || Boolean(_p5p.get_slotnums(325)),
                        'execFunc': _p5i.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(326)),
                        'execFunc': _p5i.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(327)),
                        'execFunc': _p5i.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(328)),
                        'execFunc': _p5i.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(329)),
                        'execFunc': _p5i.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(330)) || Boolean(_p5p.get_slotnums(331)) || Boolean(_p5p.get_slotnums(332)),
                        'execFunc': _p5i.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(335)),
                        'execFunc': _p5i.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(336)),
                        'execFunc': _p5i.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(337)),
                        'execFunc': _p5i.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(338)),
                        'execFunc': _p5i.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(339)),
                        'execFunc': _p5i.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(340)),
                        'execFunc': _p5i.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(341)),
                        'execFunc': _p5i.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(342)),
                        'execFunc': _p5i.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(343)),
                        'execFunc': _p5i.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(344)),
                        'execFunc': _p5i.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(345)),
                        'execFunc': _p5i.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(346)),
                        'execFunc': _p5i.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(347)),
                        'execFunc': _p5i.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(356)) || Boolean(_p5p.get_slotnums(357)),
                        'execFunc': _p5i.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(358)),
                        'execFunc': _p5i.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(359)),
                        'execFunc': _p5i.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(360)) || Boolean(_p5p.get_slotnums(361)),
                        'execFunc': _p5i.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(362)) || Boolean(_p5p.get_slotnums(363)),
                        'execFunc': _p5i.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(364)),
                        'execFunc': _p5i.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(365)),
                        'execFunc': _p5i.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(367)),
                        'execFunc': _p5i.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(368)),
                        'execFunc': _p5i.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(369)),
                        'execFunc': _p5i.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(370)),
                        'execFunc': _p5i.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(371)),
                        'execFunc': _p5i.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(372)),
                        'execFunc': _p5i.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(373)),
                        'execFunc': _p5i.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(374)),
                        'execFunc': _p5i.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(375)),
                        'execFunc': _p5i.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(376)),
                        'execFunc': _p5i.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(377)),
                        'execFunc': _p5i.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(378)),
                        'execFunc': _p5i.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(379)),
                        'execFunc': _p5i.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(380)),
                        'execFunc': _p5i.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(381)),
                        'execFunc': _p5i.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(382)) || Boolean(_p5p.get_slotnums(509)),
                        'execFunc': _p5i.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(383)),
                        'execFunc': _p5i.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(384)),
                        'execFunc': _p5i.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(385)),
                        'execFunc': _p5i.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(386)),
                        'execFunc': _p5i.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(387)),
                        'execFunc': _p5i.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(389)),
                        'execFunc': _p5i.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(390)),
                        'execFunc': _p5i.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(391)),
                        'execFunc': _p5i.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(392)),
                        'execFunc': _p5i.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(397)),
                        'execFunc': _p5i.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(398)),
                        'execFunc': _p5i.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(399)),
                        'execFunc': _p5i.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(400)),
                        'execFunc': _p5i.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(407)),
                        'execFunc': _p5i.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(408)),
                        'execFunc': _p5i.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(409)),
                        'execFunc': _p5i.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(411)),
                        'execFunc': _p5i.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(412)),
                        'execFunc': _p5i.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(413)),
                        'execFunc': _p5i.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(414)),
                        'execFunc': _p5i.getSlot414PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(415)),
                        'execFunc': _p5i.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(419)),
                        'execFunc': _p5i.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(420)),
                        'execFunc': _p5i.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(421)),
                        'execFunc': _p5i.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(422)),
                        'execFunc': _p5i.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(423)),
                        'execFunc': _p5i.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(424)),
                        'execFunc': _p5i.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(425)),
                        'execFunc': _p5i.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(426)) || Boolean(_p5p.get_slotnums(427)) || Boolean(_p5p.get_slotnums(428)) || Boolean(_p5p.get_slotnums(429)),
                        'execFunc': _p5i.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(430)),
                        'execFunc': _p5i.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(434)) || Boolean(_p5p.get_slotnums(435)),
                        'execFunc': _p5i.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(437)),
                        'execFunc': _p5i.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(438)),
                        'execFunc': _p5i.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(439)),
                        'execFunc': _p5i.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(440)) || Boolean(_p5p.get_slotnums(441)),
                        'execFunc': _p5i.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(442)) || Boolean(_p5p.get_slotnums(443)),
                        'execFunc': _p5i.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(447)),
                        'execFunc': _p5i.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(450)),
                        'execFunc': _p5i.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(451)),
                        'execFunc': _p5i.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(455)),
                        'execFunc': _p5i.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(456)),
                        'execFunc': _p5i.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(457)) || Boolean(_p5p.get_slotnums(461)),
                        'execFunc': _p5i.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(458)),
                        'execFunc': _p5i.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(463)),
                        'execFunc': _p5i.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(464)),
                        'execFunc': _p5i.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(465)),
                        'execFunc': _p5i.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(466)),
                        'execFunc': _p5i.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(467)),
                        'execFunc': _p5i.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(470)) || Boolean(_p5p.get_slotnums(529)),
                        'execFunc': _p5i.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(471)),
                        'execFunc': _p5i.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(472)),
                        'execFunc': _p5i.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(473)),
                        'execFunc': _p5i.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(474)),
                        'execFunc': _p5i.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(478)),
                        'execFunc': _p5i.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(483)),
                        'execFunc': _p5i.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(485)),
                        'execFunc': _p5i.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(486)),
                        'execFunc': _p5i.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(487)),
                        'execFunc': _p5i.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(488)),
                        'execFunc': _p5i.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(489)) || Boolean(_p5p.get_slotnums(491)),
                        'execFunc': _p5i.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(500)) || Boolean(_p5p.get_slotnums(501)),
                        'execFunc': _p5i.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(502)),
                        'execFunc': _p5i.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(503)),
                        'execFunc': _p5i.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(505)),
                        'execFunc': _p5i.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(506)),
                        'execFunc': _p5i.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(507)) || Boolean(_p5p.get_slotnums(508)),
                        'execFunc': _p5i.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(510)),
                        'execFunc': _p5i.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(511)) || Boolean(_p5p.get_slotnums(512)),
                        'execFunc': _p5i.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(517)),
                        'execFunc': _p5i.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(518)),
                        'execFunc': _p5i.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(519)),
                        'execFunc': _p5i.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(520)),
                        'execFunc': _p5i.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(521)),
                        'execFunc': _p5i.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(522)) || Boolean(_p5p.get_slotnums(523)),
                        'execFunc': _p5i.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(524)),
                        'execFunc': _p5i.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(525)) || Boolean(_p5p.get_slotnums(526)),
                        'execFunc': _p5i.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(527)),
                        'execFunc': _p5i.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_p5p.get_slotnums(528)),
                        'execFunc': _p5i.getSlot528PersonalEffect
                    }], _p5r = new _p5j.SlotItemEffectModel(), _p5s = 0, _p5t = _p5q; _p5s < _p5t.length; _p5s++) {
                    var _p5u = _p5t[_p5s];
                    if (_p5u.isExecute) {
                        var _p5v = _p5u.execFunc(_p5p);
                        0, _p5r.add(_p5v);
                    }
                }
                return _p5r;
            };
        }(_p5g || (_p4q.SlotItemEffectUtil = _p5g = {}));
    },
}