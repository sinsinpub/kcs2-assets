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
            73: 'ロシア',
            81: 'ロシア'
        };
    },
    73785: function(_lbj, _lbk, _lbl) {
        'use strict';
        var _lbm = null;
        var _lbn = this && this.__importDefault || function(_lbo) {
            var _lbp = null;
            return _lbo && _lbo.__esModule ? _lbo : {
                'default': _lbo
            };
        };
        defineModule(_lbk);
        Object.defineProperty(_lbk, '__esModule', {
            'value': true
        }), _lbk.SlotItemEffectParamModel = void 0;
        var _lbq = _lbn(_lbl(18622)),
            _lbr = _lbl(72170),
            _lbs = (function() {
                var _lbt = null;

                function _lbu(_lbv, _lbw) {
                    var _lbx = null;
                    this.SLOT_LEVEL_MAX = 10;
                    for (var _lby = {}, _lbz = {}, _lc0 = {}, _lc1 = 0, _lc2 = _lbw; _lc1 < _lc2.length; _lc1++) {
                        var _lc3 = _lc2[_lc1];
                        null != _lc3 && (null == _lby[_lc3.mstID] && (_lby[_lc3.mstID] = new Array()), _lby[_lc3.mstID].push(_lc3), null == _lbz[_lc3.mstID] ? _lbz[_lc3.mstID] = 1 : _lbz[_lc3.mstID] += 1, null == _lc0[_lc3.equipType] ? _lc0[_lc3.equipType] = 1 : _lc0[_lc3.equipType] += 1);
                    }
                    this._have_slots_dict = _lby, this._have_slotnums_dict = _lbz, this._have_type3nums_dict = _lc0, this._ship_id = _lbv.mstID, this._yomi = _lbv.yomi, this._stype = _lbv.shipTypeID, this._ctype = _lbv.getClassType();
                }
                return Object.defineProperty(_lbu.prototype, 'have_slots_dict', {
                    'get': function() {
                        var _lc4 = null;
                        return this._have_slots_dict;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lbu.prototype, 'ship_id', {
                    'get': function() {
                        var _lc5 = null;
                        return this._ship_id;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lbu.prototype, 'yomi', {
                    'get': function() {
                        var _lc6 = null;
                        return this._yomi;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lbu.prototype, 'stype', {
                    'get': function() {
                        var _lc7 = null;
                        return this._stype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_lbu.prototype, 'ctype', {
                    'get': function() {
                        var _lc8 = null;
                        return this._ctype;
                    },
                    'enumerable': false,
                    'configurable': true
                }), _lbu.prototype.get_slotnums = function(_lc9) {
                    var _lca = null;
                    return null == this._have_slotnums_dict[_lc9] ? 0 : this._have_slotnums_dict[_lc9];
                }, _lbu.prototype.get_type3_nums = function(_lcb) {
                    var _lcc = null;
                    return null == this._have_type3nums_dict[_lcb] ? 0 : this._have_type3nums_dict[_lcb];
                }, _lbu.prototype.have_slot_ids = function() {
                    var _lcd = null;
                    return Object.keys(this._have_slots_dict);
                }, _lbu.prototype.get_each_level_nums = function(_lce) {
                    var _lcf = null,
                        _lcg = this._have_slots_dict[_lce],
                        _lch = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        });
                    if (null != _lcg)
                        for (var _lci = 0, _lcj = _lcg; _lci < _lcj.length; _lci++) {
                            _lch[_lcj[_lci].level]++;
                        }
                    return _lch;
                }, _lbu.prototype.get_each_level_over_nums = function(_lck) {
                    var _lcl = null;
                    for (var _lcm = this, _lcn = [], _lco = Array.apply(null, new Array(this.SLOT_LEVEL_MAX + 1)).map(function() {
                            return 0;
                        }), _lcp = function(_lcq) {
                            var _lcr = null;
                            if (_lcn[_lcq] = Array.apply(null, new Array(_lcs.SLOT_LEVEL_MAX + 1)).map(function() {
                                    return 0;
                                }), null == _lcs.have_slots_dict[_lcq]) return 'continue';
                            _lcs.get_each_level_nums(_lcq).forEach(function(_lct, _lcu) {
                                var _lcv = null;
                                for (var _lcw = 1; _lcw <= _lcm.SLOT_LEVEL_MAX; _lcw++) _lcu >= _lcw && (_lcn[_lcq][_lcw] += _lct, _lco[_lcw] += _lct);
                            });
                        }, _lcs = this, _lcx = 0, _lcy = _lck; _lcx < _lcy.length; _lcx++) {
                        _lcp(_lcy[_lcx]);
                    }
                    return {
                        'slot': _lcn,
                        'total': _lco
                    };
                }, _lbu.prototype.get_have_rader_nums = function() {
                    var _lcz = null;
                    for (var _ld0 = 0, _ld1 = 0, _ld2 = 0, _ld3 = this.have_slot_ids(); _ld2 < _ld3.length; _ld2++) {
                        var _ld4 = _ld3[_ld2],
                            _ld5 = _lbq.default.model.slot.getMst(_ld4),
                            _ld6 = _ld5.equipType;
                        12 != _ld6 && 13 != _ld6 || (_ld5.sakuteki >= 5 && (_ld0 += this.get_slotnums(parseInt(_ld4))), _ld5.taiku >= 2 && (_ld1 += this.get_slotnums(parseInt(_ld4))));
                    }
                    return {
                        'water_rader': _ld0,
                        'air_rader': _ld1
                    };
                }, _lbu.prototype.getUSSWaterRaderDict = function() {
                    return {
                        279: 1,
                        307: 1,
                        315: 1,
                        456: 1
                    };
                }, _lbu.prototype.getUSSAirRaderDict = function() {
                    return {
                        278: 1,
                        279: 1
                    };
                }, _lbu.prototype.getCountryName = function() {
                    var _ld7 = null;
                    return null == _lbr.SHIP_COUNTRY[this._ctype] ? '' : _lbr.SHIP_COUNTRY[this._ctype];
                }, _lbu.prototype.getSpItemDict_FukuhouTaikuHeisou = function() {
                    return {
                        10: 0,
                        130: 0,
                        66: 0,
                        220: 0,
                        71: 0,
                        275: 0,
                        464: 0
                    };
                }, _lbu.prototype.getSpItemDict_Tansou21GouDentan = function() {
                    return {
                        30: 0,
                        410: 0
                    };
                }, _lbu;
            }());
        _lbk.SlotItemEffectParamModel = _lbs;
    },
    16718: (_loe, _lof, _log) => {
        'use strict';
        var _loh = null;
        defineModule(_lof);
        Object.defineProperty(_lof, '__esModule', {
            'value': true
        }), _lof.TaskGetSlotItemEffectParams = void 0;
        var _loi = _log(74496),
            _loj = _log(82692),
            _lok = (function() {
                var _lol = null;

                function _lom(_lon, _loo, _lop) {
                    var _loq = null;
                    this._removeSlots = [], this._toSlots = [], this._ship = _lon;
                    var _lor = _lon.getSlotitems();
                    _lor.push(_lon.getSlotitemEx());
                    var _los = _lor.map(function(_lot) {
                        var _lou = null;
                        return null == _lot || null != _loo && _lot.memID == _loo.memID ? null : _lot;
                    });
                    this._removeSlots = _los;
                    var _lov = _los.map(function(_low) {
                        return _low;
                    });
                    _lov.push(_lop), this._toSlots = _lov;
                }
                return _lom.prototype.start = function() {
                    var _lox = null,
                        _loy = this._ship.getSlotitems();
                    _loy.push(this._ship.getSlotitemEx());
                    var _loz = _loj.SlotItemEffectUtil.getSlotitemEffect(this._ship, _loy),
                        _lp0 = _loj.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._removeSlots),
                        _lp1 = _loj.SlotItemEffectUtil.getSlotitemEffect(this._ship, this._toSlots);
                    return {
                        'fromSlotItemEffect': this._subEffectModels(_loz, _lp0),
                        'toSlotItemEffect': this._subEffectModels(_lp1, _lp0)
                    };
                }, _lom.prototype._subEffectModels = function(_lp2, _lp3) {
                    var _lp4 = null,
                        _lp5 = new _loi.SlotItemEffectModel();
                    return _lp5.houg = _lp2.houg - _lp3.houg, _lp5.raig = _lp2.raig - _lp3.raig, _lp5.tyku = _lp2.tyku - _lp3.tyku, _lp5.souk = _lp2.souk - _lp3.souk, _lp5.kaih = _lp2.kaih - _lp3.kaih, _lp5.tais = _lp2.tais - _lp3.tais, _lp5.saku = _lp2.saku - _lp3.saku, _lp5.baku = _lp2.baku - _lp3.baku, _lp5.houm = _lp2.houm - _lp3.houm, _lp5.leng = _lp2.leng - _lp3.leng, _lp5;
                }, _lom;
            }());
        _lof.TaskGetSlotItemEffectParams = _lok;
    },
    69377: function(_mcv, _mcw, _mcx) {
        'use strict';
        var _mcy = null;
        var _mcz = this && this.__importDefault || function(_md0) {
            var _md1 = null;
            return _md0 && _md0.__esModule ? _md0 : {
                'default': _md0
            };
        };
        defineModule(_mcw);
        Object.defineProperty(_mcw, '__esModule', {
            'value': true
        }), _mcw.get25mmMachinegunEffect = void 0;
        var _md2 = _mcx(74496),
            _md3 = _mcz(_mcx(18622));
        _mcw.get25mmMachinegunEffect = function(_md4) {
            var _md5 = null,
                _md6 = new _md2.SlotItemEffectModel(),
                _md7 = false,
                _md8 = new _md2.SlotItemEffectModel(),
                _md9 = 0;
            if (662 == _md4.ship_id || 663 == _md4.ship_id ? (_md8.tyku += 2, _md8.kaih += 1, _md7 = true) : 668 == _md4.ship_id && (_md8.tyku += 3, _md8.kaih += 2, _md7 = true), 56 == _md4.ctype && (_md8.houg += 1, _md8.tyku += 2, _md8.kaih += 2, _md7 = true, _md9 = 1), 0 == _md7) return _md6;
            var _mda = _md4.get_slotnums(39) + _md4.get_slotnums(40) + _md4.get_slotnums(49) + _md4.get_slotnums(131);
            if (_md6.add(_md8.multiply(_mda)), 0 == _md9) return _md6;
            for (var _mdb = 0, _mdc = 0, _mdd = _md4.have_slot_ids(); _mdc < _mdd.length; _mdc++) {
                var _mde = _mdd[_mdc],
                    _mdf = _md3.default.model.slot.getMst(_mde),
                    _mdg = _mdf.equipType;
                12 != _mdg && 13 != _mdg || (_mdf.sakuteki >= 5 && _md4.get_slotnums(parseInt(_mde)), _mdf.taiku >= 2 && (_mdb += _md4.get_slotnums(parseInt(_mde))));
            }
            return _mdb >= 1 && 1 == _md9 && (_md6.tyku += 2, _md6.kaih += 2), _md6;
        };
    },
    77670: function(_mdh, _mdi, _mdj) {
        'use strict';
        var _mdk = null;
        var _mdl = this && this.__importDefault || function(_mdm) {
            var _mdn = null;
            return _mdm && _mdm.__esModule ? _mdm : {
                'default': _mdm
            };
        };
        defineModule(_mdi);
        Object.defineProperty(_mdi, '__esModule', {
            'value': true
        }), _mdi.get8cmAntiAircraftGunPersonalEffect = void 0;
        var _mdo = _mdj(74496),
            _mdp = _mdl(_mdj(18622));
        _mdi.get8cmAntiAircraftGunPersonalEffect = function(_mdq) {
            var _mdr = null,
                _mds = new _mdo.SlotItemEffectModel(),
                _mdt = false,
                _mdu = new _mdo.SlotItemEffectModel(),
                _mdv = 0;
            if (501 != _mdq.ship_id && 506 != _mdq.ship_id && 502 != _mdq.ship_id && 507 != _mdq.ship_id || (_mdu.tyku += 2, _mdu.kaih += 1, _mdt = true, _mdv = 1), 501 != _mdq.ship_id && 506 != _mdq.ship_id || (_mdu.houg += 1, _mdu.tyku += 2, _mdu.kaih += 2, _mdt = true, _mdv = 1), 0 == _mdt) return _mds;
            var _mdw = _mdq.get_slotnums(66) + _mdq.get_slotnums(220);
            _mds.add(_mdu.multiply(_mdw));
            for (var _mdx = 0, _mdy = 0, _mdz = _mdq.have_slot_ids(); _mdy < _mdz.length; _mdy++) {
                var _me0 = _mdz[_mdy],
                    _me1 = _mdp.default.model.slot.getMst(_me0),
                    _me2 = _me1.equipType;
                12 != _me2 && 13 != _me2 || (_me1.sakuteki >= 5 && _mdq.get_slotnums(parseInt(_me0)), _me1.taiku >= 2 && (_mdx += _mdq.get_slotnums(parseInt(_me0))));
            }
            return 0 == _mdv || _mdx >= 1 && (_mds.tyku += 1, _mds.kaih += 2), _mds;
        };
    },
    34165: (_me3, _me4, _me5) => {
        'use strict';
        var _me6 = null;
        defineModule(_me4);
        Object.defineProperty(_me4, '__esModule', {
            'value': true
        }), _me4.getCamouflageSlotPersonalEffect = void 0;
        var _me7 = _me5(74496);
        _me4.getCamouflageSlotPersonalEffect = function(_me8) {
            var _me9 = null,
                _mea = new _me7.SlotItemEffectModel();
            return 'きそ' != _me8.yomi && 'たま' != _me8.yomi || (_mea.kaih = 7, _mea.souk = 2), _mea;
        };
    },
    31127: (_meb, _mec, _med) => {
        'use strict';
        var _mee = null;
        defineModule(_mec);
        Object.defineProperty(_mec, '__esModule', {
            'value': true
        }), _mec.getHighZuiunSeriesEffect = void 0;
        var _mef = _med(74496);
        _mec.getHighZuiunSeriesEffect = function(_meg) {
            var _meh = null,
                _mei = new _mef.SlotItemEffectModel(),
                _mej = false,
                _mek = new _mef.SlotItemEffectModel();
            if (662 == _meg.ship_id ? (_mei.houg += 3, _mei.kaih += 1) : 663 == _meg.ship_id || 668 == _meg.ship_id || 501 == _meg.ship_id || 506 == _meg.ship_id || 553 == _meg.ship_id || 554 == _meg.ship_id ? (_mek.houg += 3, _mek.kaih += 2, _mek.tyku += 1, _mej = true) : 502 != _meg.ship_id && 507 != _meg.ship_id || (_mek.houg += 2, _mek.kaih += 2, _mek.tyku += 1, _mej = true), 0 == _mej) return _mei;
            var _mel = 0;
            return [237, 322, 323, 490].forEach(function(_mem) {
                var _men = null;
                _mel += _meg.get_slotnums(_mem);
            }), _mei.add(_mek.multiply(_mel)), _mei;
        };
    },
    81018: function(_meo, _mep, _meq) {
        'use strict';
        var _mer = null;
        var _mes = this && this.__importDefault || function(_met) {
            var _meu = null;
            return _met && _met.__esModule ? _met : {
                'default': _met
            };
        };
        defineModule(_mep);
        Object.defineProperty(_mep, '__esModule', {
            'value': true
        }), _mep.getRaderPrivateEffect = void 0;
        var _mev = _meq(74496),
            _mew = _mes(_meq(18622));
        _mep.getRaderPrivateEffect = function(_mex) {
            var _mey = null,
                _mez = new _mev.SlotItemEffectModel(),
                _mf0 = 0,
                _mf1 = 0;
            if (569 == _mex.ship_id || 648 == _mex.ship_id || 961 == _mex.ship_id || 951 == _mex.ship_id) _mf0 = 1;
            else {
                if (955 != _mex.ship_id && 960 != _mex.ship_id) return _mez;
                _mf0 = 2, _mf1 = 1;
            }
            for (var _mf2 = 0, _mf3 = 0, _mf4 = _mex.have_slot_ids(); _mf3 < _mf4.length; _mf3++) {
                var _mf5 = _mf4[_mf3],
                    _mf6 = _mew.default.model.slot.getMst(_mf5),
                    _mf7 = _mf6.equipType;
                12 != _mf7 && 13 != _mf7 || (_mf6.sakuteki >= 5 && _mex.get_slotnums(parseInt(_mf5)), _mf6.taiku >= 2 && (_mf2 += _mex.get_slotnums(parseInt(_mf5))));
            }
            if (_mf2 > 0 && (1 == _mf0 ? (_mez.houg += 1, _mez.kaih += 3, _mez.tyku += 2) : 2 == _mf0 && (_mez.tyku += 2, _mez.kaih += 1)), 0 == _mf1) return _mez;
            for (var _mf8 = [], _mf9 = function(_mfa) {
                    var _mfb = null;
                    if (null == _mex.have_slots_dict[_mfa]) return 'continue';
                    var _mfc = _mex.get_each_level_nums(_mfa);
                    null == _mf8[_mfa] && (_mf8[_mfa] = []), _mfc.forEach(function(_mfd, _mfe) {
                        var _mff = null;
                        for (var _mfg = 1; _mfg <= _mex.SLOT_LEVEL_MAX; _mfg++) null == _mf8[_mfa][_mfg] && (_mf8[_mfa][_mfg] = 0), _mfe >= _mfg && (_mf8[_mfa][_mfg] += _mfd);
                    });
                }, _mfh = 0, _mfi = [450]; _mfh < _mfi.length; _mfh++) {
                _mf9(_mfi[_mfh]);
            }
            var _mfj = null != _mf8[450] ? _mf8[450][4] : 0;
            return 1 == _mf1 && _mfj > 0 && (_mez.houg += 1, _mez.houm += 1, _mez.tyku += 1, _mez.kaih += 2), _mez;
        };
    },
    56716: (_mfk, _mfl, _mfm) => {
        'use strict';
        var _mfn = null;
        defineModule(_mfl);
        Object.defineProperty(_mfl, '__esModule', {
            'value': true
        }), _mfl.getSearchLightEffect = void 0;
        var _mfo = _mfm(74496);
        _mfl.getSearchLightEffect = function(_mfp) {
            var _mfq = null,
                _mfr = new _mfo.SlotItemEffectModel(),
                _mfs = _mfp.get_type3_nums(29);
            return 'ひえい' == _mfp.yomi || 'きりしま' == _mfp.yomi || 'ちょうかい' == _mfp.yomi || 'じんつう' == _mfp.yomi || 'あかつき' == _mfp.yomi ? (_mfr.houg += 4, _mfr.kaih -= 1) : 'あきぐも' == _mfp.yomi ? _mfr.houg = _mfr.houg + 2 * _mfs : 'ゆきかぜ' == _mfp.yomi && (_mfr.houg = _mfr.houg + _mfs, _mfr.tyku = _mfr.tyku + _mfs), 662 != _mfp.ship_id && 663 != _mfp.ship_id && 668 != _mfp.ship_id || (_mfr.raig += 2, _mfr.houg += 4), 'じんつう' == _mfp.yomi && (_mfr.raig += 8, _mfr.houg += 4), _mfr;
        };
    },
    17713: (_mft, _mfu, _mfv) => {
        'use strict';
        var _mfw = null;
        defineModule(_mfu);
        Object.defineProperty(_mfu, '__esModule', {
            'value': true
        }), _mfu.getSearchLightLargeEffect = void 0;
        var _mfx = _mfv(74496);
        _mfu.getSearchLightLargeEffect = function(_mfy) {
            var _mfz = null,
                _mg0 = new _mfx.SlotItemEffectModel();
            'ひえい' == _mfy.yomi || 'きりしま' == _mfy.yomi ? (_mg0.houg += 6, _mg0.kaih -= 2) : 'やまと' != _mfy.yomi && 'むさし' != _mfy.yomi || (_mg0.houg += 4, _mg0.kaih -= 1);
            var _mg1 = _mfy.get_slotnums(174);
            return 592 == _mfy.ship_id && (_mg0.houg += 3, _mg0.raig += 3, _mg1 > 0 && (_mg0.raig += 5)), _mg0;
        };
    },
    17213: (_mg2, _mg3, _mg4) => {
        'use strict';
        var _mg5 = null;
        defineModule(_mg3);
        Object.defineProperty(_mg3, '__esModule', {
            'value': true
        }), _mg3.getSlot100PersonalEffect = void 0;
        var _mg6 = _mg4(74496);
        _mg3.getSlot100PersonalEffect = function(_mg7) {
            var _mg8 = null,
                _mg9 = new _mg6.SlotItemEffectModel(),
                _mga = new _mg6.SlotItemEffectModel();
            if (553 == _mg7.ship_id) _mga.houg = 4;
            else {
                if (554 != _mg7.ship_id) return 196 == _mg7.ship_id ? (_mg9.houg = 3, _mg9) : 197 == _mg7.ship_id ? (_mg9.houg = 6, _mg9) : _mg9;
                _mga.houg = 4;
            }
            var _mgb = _mg7.get_slotnums(100);
            return _mg9 = _mga.multiply(_mgb);
        };
    },
    40176: (_mgc, _mgd, _mge) => {
        'use strict';
        var _mgf = null;
        defineModule(_mgd);
        Object.defineProperty(_mgd, '__esModule', {
            'value': true
        }), _mgd.getSlot104PersonalEffect = void 0;
        var _mgg = _mge(74496);
        _mgd.getSlot104PersonalEffect = function(_mgh) {
            var _mgi = null,
                _mgj = new _mgg.SlotItemEffectModel(),
                _mgk = new _mgg.SlotItemEffectModel();
            if (149 == _mgh.ship_id || 591 == _mgh.ship_id) _mgk.houg = 2;
            else {
                if (150 == _mgh.ship_id || 592 == _mgh.ship_id) _mgk.houg = 1;
                else {
                    if (152 == _mgh.ship_id) _mgk.houg = 1;
                    else {
                        if (151 != _mgh.ship_id && 593 != _mgh.ship_id && 954 != _mgh.ship_id) return _mgj;
                        _mgk.houg = 2, _mgk.tyku = 1, _mgk.kaih = 2;
                    }
                }
            }
            var _mgl = _mgh.get_slotnums(104);
            return _mgj = _mgk.multiply(_mgl);
        };
    },
    32889: (_mgm, _mgn, _mgo) => {
        'use strict';
        var _mgp = null;
        defineModule(_mgn);
        Object.defineProperty(_mgn, '__esModule', {
            'value': true
        }), _mgn.getSlot106PersonalEffect = void 0;
        var _mgq = _mgo(74496);
        _mgn.getSlot106PersonalEffect = function(_mgr) {
            var _mgs = null,
                _mgt = new _mgq.SlotItemEffectModel(),
                _mgu = new _mgq.SlotItemEffectModel();
            if ([407, 419, 145, 151, 541, 911, 916, 593, 954, 961, 975].indexOf(_mgr.ship_id) >= 0 ? (_mgu.houg += 1, _mgu.tyku += 2, _mgu.souk += 1, _mgu.kaih += 3) : ['おおよど', 'ひびき', 'かしま'].indexOf(_mgr.yomi) >= 0 ? (_mgu.tyku += 1, _mgu.souk += 1, _mgu.kaih += 3) : ['やはぎ', 'ゆきかぜ', 'いそかぜ', 'あさしも', 'はまかぜ', 'かすみ', 'すずつき'].indexOf(_mgr.yomi) >= 0 && (_mgu.tyku += 2, _mgu.souk += 1, _mgu.kaih += 2, 663 != _mgr.ship_id && 668 != _mgr.ship_id || (_mgt.houg += 1, _mgt.tyku += 1, _mgt.souk += 1, _mgt.kaih += 1), 668 == _mgr.ship_id && (_mgt.tyku += 1, _mgt.kaih += 1)), !_mgu.exists()) return _mgt;
            var _mgv = _mgr.get_slotnums(106) + _mgr.get_slotnums(450);
            return _mgt.add(_mgu.multiply(_mgv)), _mgt;
        };
    },
    15133: (_mgw, _mgx, _mgy) => {
        'use strict';
        var _mgz = null;
        defineModule(_mgx);
        Object.defineProperty(_mgx, '__esModule', {
            'value': true
        }), _mgx.getSlot115PersonalEffect = void 0;
        var _mh0 = _mgy(74496);
        _mgx.getSlot115PersonalEffect = function(_mh1) {
            var _mh2 = null,
                _mh3 = new _mh0.SlotItemEffectModel(),
                _mh4 = false,
                _mh5 = new _mh0.SlotItemEffectModel(),
                _mh6 = 0;
            if (55 != _mh1.ctype && 47 != _mh1.ctype || (_mh5.houg += 2, _mh5.saku += 2, _mh5.kaih += 1, _mh4 = true, _mh6 = 1), 0 == _mh4) return _mh3;
            var _mh7 = _mh1.get_slotnums(115);
            if (_mh3.add(_mh5.multiply(_mh7)), 0 == _mh6) return _mh3;
            var _mh8 = _mh1.get_each_level_nums(115)[10];
            return 1 == _mh6 && (_mh3.houg += 1 * _mh8, _mh3.kaih += 1 * _mh8), _mh3;
        };
    },
    55747: (_mh9, _mha, _mhb) => {
        'use strict';
        var _mhc = null;
        defineModule(_mha);
        Object.defineProperty(_mha, '__esModule', {
            'value': true
        }), _mha.getSlot118PersonalEffect = void 0;
        var _mhd = _mhb(74496);
        _mha.getSlot118PersonalEffect = function(_mhe) {
            var _mhf = null,
                _mhg = new _mhd.SlotItemEffectModel(),
                _mhh = false,
                _mhi = new _mhd.SlotItemEffectModel(),
                _mhj = 0;
            if (52 == _mhe.ctype && (_mhi.houg += 1, _mhi.saku += 2, _mhi.kaih += 2, _mhj = 1, _mhh = true), 507 == _mhe.ship_id && (_mhi.houg += 3, _mhi.saku += 2, _mhi.kaih += 1, _mhj = 2, _mhh = true), 0 == _mhh) return _mhg;
            var _mhk = _mhe.get_slotnums(118) + _mhe.get_slotnums(521);
            if (_mhg.add(_mhi.multiply(_mhk)), 0 == _mhe.get_slotnums(118)) return _mhg;
            if (0 == _mhj) return _mhg;
            var _mhl = _mhe.get_each_level_nums(118),
                _mhm = 0,
                _mhn = 0,
                _mho = 0,
                _mhp = _mhl[10];
            return _mhl.forEach(function(_mhq, _mhr) {
                _mhr >= 2 && (_mhm += _mhq), _mhr >= 5 && (_mhn += _mhq), _mhr >= 7 && (_mho += _mhq);
            }), 1 == _mhj ? (_mhg.houg += 2 * _mhp, _mhg.saku += 1 * _mhp) : 2 == _mhj && (_mhg.houm += 1 * _mhm, _mhg.kaih += 1 * _mhn, _mhg.houg += 1 * _mho, _mhg.houg += 1 * _mhp, _mhg.raig += 1 * _mhp, _mhg.tyku += 1 * _mhp, _mhg.saku += 1 * _mhp, _mhg.kaih += 1 * _mhp), _mhg;
        };
    },
    11285: (_mhs, _mht, _mhu) => {
        'use strict';
        var _mhv = null;
        defineModule(_mht);
        Object.defineProperty(_mht, '__esModule', {
            'value': true
        }), _mht.getSlot119PersonalEffect = void 0;
        var _mhw = _mhu(74496);
        _mht.getSlot119PersonalEffect = function(_mhx) {
            var _mhy = null,
                _mhz = new _mhw.SlotItemEffectModel(),
                _mi0 = new _mhw.SlotItemEffectModel();
            34 == _mhx.ctype || 56 == _mhx.ctype ? _mi0.houg += 1 : 90 == _mhx.ctype && (_mi0.houg += 2, _mi0.raig += 1);
            var _mi1 = true;
            if (_mi0.exists() || (_mi1 = false), 0 == _mi1) return _mhz;
            var _mi2 = _mhx.get_slotnums(119);
            return _mhz = _mi0.multiply(_mi2);
        };
    },
    96200: (_mi3, _mi4, _mi5) => {
        'use strict';
        var _mi6 = null;
        defineModule(_mi4);
        Object.defineProperty(_mi4, '__esModule', {
            'value': true
        }), _mi4.getSlot120mm50GroupPersonalEffect = void 0;
        var _mi7 = _mi5(74496);
        _mi4.getSlot120mm50GroupPersonalEffect = function(_mi8) {
            var _mi9 = null,
                _mia = new _mi7.SlotItemEffectModel(),
                _mib = false,
                _mic = new _mi7.SlotItemEffectModel(),
                _mid = _mi8.get_slotnums(147),
                _mie = _mi8.get_slotnums(393),
                _mif = _mi8.get_slotnums(394),
                _mig = new _mi7.SlotItemEffectModel(),
                _mih = new _mi7.SlotItemEffectModel();
            if (61 == _mi8.ctype && (_mic.houg += 1, _mic.kaih += 1, _mib = true, _mie >= 1 && (_mig.houg += 1, _mig.tyku += 1), _mif >= 1 && (_mih.houg += 1, _mih.tyku += 1, _mih.kaih += 1, 'グレカーレ' == _mi8.yomi && (_mih.kaih += 1)), 1), 0 == _mib) return _mia;
            var _mii = _mid + _mie + _mif;
            _mia.add(_mic.multiply(_mii)).add(_mig.multiply(_mie)).add(_mih.multiply(_mif));
            var _mij = _mi8.get_each_level_over_nums([394]).slot[394];
            return _mij[7] >= 1 && (_mia.houm += 1 * _mij[7], 'グレカーレ' == _mi8.yomi && (_mia.houg += 1 * _mij[7])), _mij[8] >= 1 && (_mia.houg += 1 * _mij[8]), _mij[9] >= 1 && (_mia.houm += 1 * _mij[9]), _mij[10] >= 1 && (_mia.houg += 1 * _mij[10], 'グレカーレ' == _mi8.yomi && (_mia.kaih += 1 * _mij[10])), _mia;
        };
    },
    33155: function(_mik, _mil, _mim) {
        'use strict';
        var _min = null;
        var _mio = this && this.__importDefault || function(_mip) {
            var _miq = null;
            return _mip && _mip.__esModule ? _mip : {
                'default': _mip
            };
        };
        defineModule(_mil);
        Object.defineProperty(_mil, '__esModule', {
            'value': true
        }), _mil.getSlot121PersonalEffect = void 0;
        var _mir = _mim(74496),
            _mis = _mio(_mim(18622));
        _mil.getSlot121PersonalEffect = function(_mit) {
            var _miu = null,
                _miv = new _mir.SlotItemEffectModel(),
                _miw = 0;
            if (54 == _mit.ctype && (_miv.tyku += 4, _miv.kaih += 2, _miw = 1), 0 == _miw) return _miv;
            for (var _mix = 0, _miy = 0, _miz = _mit.have_slot_ids(); _miy < _miz.length; _miy++) {
                var _mj0 = _miz[_miy],
                    _mj1 = _mis.default.model.slot.getMst(_mj0),
                    _mj2 = _mj1.equipType;
                12 != _mj2 && 13 != _mj2 || (_mj1.sakuteki >= 5 && _mit.get_slotnums(parseInt(_mj0)), _mj1.taiku >= 2 && (_mix += _mit.get_slotnums(parseInt(_mj0))));
            }
            return _mix >= 1 && (_miv.tyku += 2, _miv.kaih += 2), _miv;
        };
    },
    9115: function(_mj3, _mj4, _mj5) {
        'use strict';
        var _mj6 = null;
        var _mj7 = this && this.__importDefault || function(_mj8) {
            var _mj9 = null;
            return _mj8 && _mj8.__esModule ? _mj8 : {
                'default': _mj8
            };
        };
        defineModule(_mj4);
        Object.defineProperty(_mj4, '__esModule', {
            'value': true
        }), _mj4.getSlot122PersonalEffect = void 0;
        var _mja = _mj5(74496),
            _mjb = _mj7(_mj5(18622));
        _mj4.getSlot122PersonalEffect = function(_mjc) {
            var _mjd = null,
                _mje = new _mja.SlotItemEffectModel(),
                _mjf = 0,
                _mjg = 0,
                _mjh = false;
            656 == _mjc.ship_id && (_mjh = true, _mjf = 1, _mjg = 1);
            var _mji = 0,
                _mjj = 0,
                _mjk = _mjc.get_each_level_nums(122),
                _mjl = 0;
            if (_mjh) {
                _mjk.forEach(function(_mjm, _mjn) {
                    _mjn >= 4 && (_mjl += _mjm);
                });
                for (var _mjo = 0, _mjp = _mjc.have_slot_ids(); _mjo < _mjp.length; _mjo++) {
                    var _mjq = _mjp[_mjo],
                        _mjr = _mjb.default.model.slot.getMst(_mjq),
                        _mjs = _mjr.equipType;
                    12 != _mjs && 13 != _mjs || (_mjr.sakuteki >= 5 && (_mji += _mjc.get_slotnums(parseInt(_mjq))), _mjr.taiku >= 2 && (_mjj += _mjc.get_slotnums(parseInt(_mjq))));
                }
            }
            return _mjl > 0 && (1 == _mjg && (_mji > 0 && (_mje.houg += 4, _mje.kaih += 3), _mjj > 0 && (_mje.tyku += 4, _mje.kaih += 3)), 1 == _mjf && (_mje.houg += 5 * _mjl, _mje.tyku += 3 * _mjl, _mje.kaih += 2 * _mjl)), _mje;
        };
    },
    85127: (_mjt, _mju, _mjv) => {
        'use strict';
        var _mjw = null;
        defineModule(_mju);
        Object.defineProperty(_mju, '__esModule', {
            'value': true
        }), _mju.getSlot123PersonalEffect = void 0;
        var _mjx = _mjv(74496);
        _mju.getSlot123PersonalEffect = function(_mjy) {
            var _mjz = null,
                _mk0 = new _mjx.SlotItemEffectModel(),
                _mk1 = (new _mjx.SlotItemEffectModel(), 0),
                _mk2 = (_mjy.get_slotnums(123), _mjy.get_slotnums(124));
            if ('ドイツ' != _mjy.getCountryName()) return _mk0;
            _mk1 = 1, _mk2 >= 1 && (_mk0.kaih += 1 * _mk2);
            var _mk3 = _mjy.get_each_level_over_nums([123, 124]),
                _mk4 = _mk3.slot[123],
                _mk5 = _mk3.slot[124];
            return 1 == _mk1 && (_mk4[5] >= 1 && (_mk0.houg += 1 * _mk4[5]), _mk4[7] >= 1 && (_mk0.houm += 1 * _mk4[7]), _mk4[9] >= 1 && (_mk0.houg += 1 * _mk4[9]), _mk4[10] >= 1 && (_mk0.houm += 1 * _mk4[10]), _mk5[8] >= 1 && (_mk0.kaih += 1 * _mk5[8]), _mk5[10] >= 1 && (_mk0.houm += 1 * _mk5[10])), _mk0;
        };
    },
    87204: (_mk6, _mk7, _mk8) => {
        'use strict';
        var _mk9 = null;
        defineModule(_mk7);
        Object.defineProperty(_mk7, '__esModule', {
            'value': true
        }), _mk7.getSlot124PersonalEffect = void 0;
        var _mka = _mk8(74496);
        _mk7.getSlot124PersonalEffect = function(_mkb) {
            var _mkc = null,
                _mkd = new _mka.SlotItemEffectModel(),
                _mke = (new _mka.SlotItemEffectModel(), 0),
                _mkf = _mkb.getCountryName();
            if ('ドイツ' == _mkf) _mke = 1;
            else {
                if ('イタリア' != _mkf) return _mkd;
                _mke = 2;
            }
            var _mkg = _mkb.get_each_level_over_nums([124]).slot[124];
            return 1 == _mke ? (_mkg[7] >= 1 && (_mkd.houm += 1 * _mkg[7]), _mkg[8] >= 1 && (_mkd.houg += 1 * _mkg[8]), _mkg[9] >= 1 && (_mkd.tyku += 1 * _mkg[9]), _mkg[10] >= 1 && (_mkd.houm += 1 * _mkg[10])) : 2 == _mke && (_mkg[8] >= 1 && (_mkd.houm += 1 * _mkg[8]), _mkg[9] >= 1 && (_mkd.tyku += 1 * _mkg[9]), _mkg[10] >= 1 && (_mkd.houg += 1 * _mkg[10])), _mkd;
        };
    },
    37173: (_mkh, _mki, _mkj) => {
        'use strict';
        var _mkk = null;
        defineModule(_mki);
        Object.defineProperty(_mki, '__esModule', {
            'value': true
        }), _mki.getSlot129PersonalEffect = void 0;
        var _mkl = _mkj(74496);
        _mki.getSlot129PersonalEffect = function(_mkm) {
            var _mkn = null,
                _mko = new _mkl.SlotItemEffectModel(),
                _mkp = false,
                _mkq = new _mkl.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_mkm.ctype) >= 0 ? (_mkq.houg = 1, _mkq.raig = 2, _mkq.kaih = 2, _mkq.tais = 2, _mkq.saku = 1, _mkp = true) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_mkm.ctype) >= 0 ? (_mkq.houg = 1, _mkq.raig = 2, _mkq.kaih = 2, _mkq.saku = 3, _mkp = true) : [7, 13, 29, 8, 9, 31].indexOf(_mkm.ctype) >= 0 && (_mkq.houg = 1, _mkq.kaih = 2, _mkq.saku = 3, _mkp = true), 0 == _mkp) return _mko;
            var _mkr = _mkm.get_slotnums(129);
            return _mko = _mkq.multiply(_mkr);
        };
    },
    73254: (_mks, _mkt, _mku) => {
        'use strict';
        var _mkv = null;
        defineModule(_mkt);
        Object.defineProperty(_mkt, '__esModule', {
            'value': true
        }), _mkt.getSlot12PersonalEffect = void 0;
        var _mkw = _mku(74496);
        _mkt.getSlot12PersonalEffect = function(_mkx) {
            var _mky = null,
                _mkz = new _mkw.SlotItemEffectModel(),
                _ml0 = false,
                _ml1 = new _mkw.SlotItemEffectModel(),
                _ml2 = _mkx.get_slotnums(142) + _mkx.get_slotnums(460);
            if (37 == _mkx.ctype && (_ml1.houg += 1, _ml1.kaih += 1, _ml1.houm += 1, _ml2 >= 1 && (_mkz.kaih += 1, _mkz.houm += 1), _ml0 = true), 0 == _ml0) return _mkz;
            var _ml3 = _mkx.get_slotnums(12);
            return _mkz.add(_ml1.multiply(_ml3)), _mkz;
        };
    },
    93373: (_ml4, _ml5, _ml6) => {
        'use strict';
        var _ml7 = null;
        defineModule(_ml5);
        Object.defineProperty(_ml5, '__esModule', {
            'value': true
        }), _ml5.getSlot132PersonalEffect = void 0;
        var _ml8 = _ml6(74496);
        _ml5.getSlot132PersonalEffect = function(_ml9) {
            var _mla = null,
                _mlb = new _ml8.SlotItemEffectModel(),
                _mlc = _ml9.get_each_level_nums(132),
                _mld = 0,
                _mle = 0,
                _mlf = 0,
                _mlg = 0,
                _mlh = 0;
            return _mlc.forEach(function(_mli, _mlj) {
                _mlj >= 3 && (_mld += _mli), _mlj >= 5 && (_mle += _mli), _mlj >= 7 && (_mlf += _mli), _mlj >= 8 && (_mlg += _mli), _mlj >= 9 && (_mlh += _mli);
            }), _mld >= 1 && (_mlb.kaih += 1), _mle >= 1 && (_mlb.tais += 1), _mlf >= 1 && (_mlb.kaih += 1), _mlg >= 1 && (_mlb.tais += 1), _mlh >= 1 && (_mlb.houm += 1), _mlc[10] >= 1 && (_mlb.tais += 1), 911 != _ml9.ship_id && 916 != _ml9.ship_id && 546 != _ml9.ship_id || (_mlb.kaih += 1), 461 != _ml9.ship_id && 466 != _ml9.ship_id && 462 != _ml9.ship_id && 467 != _ml9.ship_id && 156 != _ml9.ship_id || (_mlb.kaih += 2), _mlb;
        };
    },
    88838: (_mlk, _mll, _mlm) => {
        'use strict';
        var _mln = null;
        defineModule(_mll);
        Object.defineProperty(_mll, '__esModule', {
            'value': true
        }), _mll.getSlot136PersonalEffect = void 0;
        var _mlo = _mlm(74496);
        _mll.getSlot136PersonalEffect = function(_mlp) {
            var _mlq = null,
                _mlr = new _mlo.SlotItemEffectModel(),
                _mls = 0;
            if (58 != _mlp.ctype && 61 != _mlp.ctype && 64 != _mlp.ctype && 68 != _mlp.ctype && 80 != _mlp.ctype && 92 != _mlp.ctype && 113 != _mlp.ctype && 124 != _mlp.ctype || (_mlr.souk += 2, _mlr.kaih += 1, _mls = 1), 879 == _mlp.ship_id && (_mlr.souk += 1, _mlr.kaih += 1), 0 == _mls) return _mlr;
            var _mlt = _mlp.get_each_level_nums(136),
                _mlu = 0,
                _mlv = 0,
                _mlw = _mlt[10];
            return _mls > 0 && _mlt.forEach(function(_mlx, _mly) {
                _mly >= 3 && (_mlu += _mlx), _mly >= 6 && (_mlv += _mlx);
            }), 1 == _mls && (_mlu >= 1 && (_mlr.souk += 1 * _mlu), _mlv >= 1 && (_mlr.souk += 1 * _mlv), _mlw >= 1 && (_mlr.souk += 1 * _mlw)), _mlr;
        };
    },
    17274: (_mlz, _mm0, _mm1) => {
        'use strict';
        var _mm2 = null;
        defineModule(_mm0);
        Object.defineProperty(_mm0, '__esModule', {
            'value': true
        }), _mm0.getSlot139PersonalEffect = void 0;
        var _mm3 = _mm1(74496);
        _mm0.getSlot139PersonalEffect = function(_mm4) {
            var _mm5 = null,
                _mm6 = new _mm3.SlotItemEffectModel(),
                _mm7 = false,
                _mm8 = new _mm3.SlotItemEffectModel();
            if (662 != _mm4.ship_id && 663 != _mm4.ship_id && 668 != _mm4.ship_id || (_mm8.houg += 2, _mm8.tyku += 1, _mm7 = true), 0 == _mm7) return _mm6;
            var _mm9 = _mm4.get_slotnums(139);
            return _mm6.add(_mm8.multiply(_mm9)), _mm6;
        };
    },
    21713: (_mma, _mmb, _mmc) => {
        'use strict';
        var _mmd = null;
        defineModule(_mmb);
        Object.defineProperty(_mmb, '__esModule', {
            'value': true
        }), _mmb.getSlot143PersonalEffect = void 0;
        var _mme = _mmc(74496);
        _mmb.getSlot143PersonalEffect = function(_mmf) {
            var _mmg = null,
                _mmh = new _mme.SlotItemEffectModel();
            return 'あかぎ' == _mmf.yomi ? _mmh.houg = 3 : 'かが' == _mmf.yomi || 'しょうかく' == _mmf.yomi ? _mmh.houg = 2 : ('ずいかく' == _mmf.yomi || 'りゅうじょう' == _mmf.yomi) && (_mmh.houg = 1), _mmh;
        };
    },
    59823: (_mmi, _mmj, _mmk) => {
        'use strict';
        var _mml = null;
        defineModule(_mmj);
        Object.defineProperty(_mmj, '__esModule', {
            'value': true
        }), _mmj.getSlot144PersonalEffect = void 0;
        var _mmm = _mmk(74496);
        _mmj.getSlot144PersonalEffect = function(_mmn) {
            var _mmo = null,
                _mmp = new _mmm.SlotItemEffectModel();
            return 'あかぎ' == _mmn.yomi ? _mmp.houg = 3 : 'かが' == _mmn.yomi ? _mmp.houg = 2 : 'しょうかく' == _mmn.yomi ? (_mmp.houg = 2, 461 != _mmn.ship_id && 466 != _mmn.ship_id || (_mmp.houg += 2)) : 'ずいかく' == _mmn.yomi ? (_mmp.houg = 1, 462 != _mmn.ship_id && 467 != _mmn.ship_id || (_mmp.houg += 1)) : 'りゅうじょう' == _mmn.yomi && (_mmp.houg = 1), _mmp;
        };
    },
    57440: (_mmq, _mmr, _mms) => {
        'use strict';
        var _mmt = null;
        defineModule(_mmr);
        Object.defineProperty(_mmr, '__esModule', {
            'value': true
        }), _mmr.getSlot149PersonalEffect = void 0;
        var _mmu = _mms(74496);
        _mmr.getSlot149PersonalEffect = function(_mmv) {
            var _mmw = null,
                _mmx = new _mmu.SlotItemEffectModel(),
                _mmy = new _mmu.SlotItemEffectModel(),
                _mmz = false;
            return 488 == _mmv.ship_id || 141 == _mmv.ship_id || 160 == _mmv.ship_id || 622 == _mmv.ship_id || 623 == _mmv.ship_id || 656 == _mmv.ship_id || 961 == _mmv.ship_id ? (_mmy.tais = 1, _mmy.kaih = 3, _mmz = true) : 624 == _mmv.ship_id ? (_mmy.tais = 3, _mmy.kaih = 5, _mmz = true) : 662 == _mmv.ship_id && (_mmy.tais = 2, _mmy.kaih = 4, _mmz = true), 54 == _mmv.ctype && (_mmy.tais = 1, _mmy.kaih = 2, _mmz = true), 0 == _mmz ? _mmx : _mmx = _mmy.multiply(1);
        };
    },
    29493: (_mn0, _mn1, _mn2) => {
        'use strict';
        var _mn3 = null;
        defineModule(_mn1);
        Object.defineProperty(_mn1, '__esModule', {
            'value': true
        }), _mn1.getSlot14inch45CaliberGunPersonalEffect = void 0;
        var _mn4 = _mn2(74496);
        _mn1.getSlot14inch45CaliberGunPersonalEffect = function(_mn5) {
            var _mn6 = null,
                _mn7, _mn8, _mn9, _mna = new _mn4.SlotItemEffectModel(),
                _mnb = false,
                _mnc = new _mn4.SlotItemEffectModel(),
                _mnd = {
                    507: 507,
                    508: 507
                },
                _mne = _mn5.get_slotnums(507),
                _mnf = _mn5.get_slotnums(508),
                _mng = _mne + _mnf,
                _mnh = _mn5.getCountryName(),
                _mni = _mn5.getUSSWaterRaderDict();
            if (125 == _mn5.ctype && (_mnc.houg += 1, _mnc.kaih += 1, _mnc.houm += 1, _mnb = true, _mne >= 1 && _mnf >= 1 && (_mna.houg += 1, _mna.houm += 1)), 'アメリカ' == _mnh && _mn5.stype >= 8 && _mn5.stype <= 10) {
                _mnc.houg += 2, _mnc.kaih += 1, _mnc.houm += 1, _mnb = true;
                for (var _mnj = 0, _mnk = 0, _mnl = _mn5.have_slot_ids(); _mnk < _mnl.length; _mnk++) {
                    var _mnm = _mnl[_mnk];
                    _mni[Number(_mnm)] && (_mnj += _mn5.get_slotnums(parseInt(_mnm)));
                }
                _mnj >= 1 && (_mna.houg += 1, _mna.kaih += 1, _mna.houm += 2), _mne >= 1 && _mnf >= 1 && (_mna.houg += 1, _mna.houm += 1, _mna.kaih += 2);
            }
            else 6 != _mn5.ctype && 26 != _mn5.ctype && 2 != _mn5.ctype && 'イギリス' != _mnh || (_mna.kaih += 1, _mna.houm += 1, _mne >= 1 && _mnf >= 1 && (_mna.houg += 1, _mna.houm += 1, _mna.kaih += 1));
            _mnb && _mna.add(_mnc.multiply(_mng));
            for (var _mnn = {}, _mno = {}, _mnp = {}, _mnq = function(_mnr) {
                    var _mns = null,
                        _mnt = Number(_mnr),
                        _mnu = _mnd[_mnt];
                    _mnn[_mnu] = null !== (_mn7 = _mnn[_mnu]) && void 0 !== _mn7 ? _mn7 : 0, _mno[_mnu] = null !== (_mn8 = _mno[_mnu]) && void 0 !== _mn8 ? _mn8 : 0, _mnp[_mnu] = null !== (_mn9 = _mnp[_mnu]) && void 0 !== _mn9 ? _mn9 : 0, _mn5.get_each_level_nums(_mnt).forEach(function(_mnv, _mnw) {
                        _mnw >= 3 && (_mnn[_mnu] += _mnv), _mnw >= 6 && (_mno[_mnu] += _mnv), _mnw >= 9 && (_mnp[_mnu] += _mnv);
                    });
                }, _mnx = 0, _mny = Object.keys(_mnd); _mnx < _mny.length; _mnx++) {
                _mnq(_mny[_mnx]);
            }
            return _mnn[507] >= 1 && (_mna.houg += 1 * _mnn[507]), _mno[507] >= 1 && (_mna.souk += 1 * _mno[507]), _mnp[507] >= 1 && (_mna.houm += 1 * _mnp[507]), _mna;
        };
    },
    66985: (_mnz, _mo0, _mo1) => {
        'use strict';
        var _mo2 = null;
        defineModule(_mo0);
        Object.defineProperty(_mo0, '__esModule', {
            'value': true
        }), _mo0.getSlot15PersonalEffect = void 0;
        var _mo3 = _mo1(74496);
        _mo0.getSlot15PersonalEffect = function(_mo4) {
            var _mo5 = null,
                _mo6 = new _mo3.SlotItemEffectModel(),
                _mo7 = false;
            if ((566 == _mo4.ship_id || 567 == _mo4.ship_id || 568 == _mo4.ship_id || 648 == _mo4.ship_id || 651 == _mo4.ship_id || 656 == _mo4.ship_id || 670 == _mo4.ship_id || 915 == _mo4.ship_id || 951 == _mo4.ship_id || 'たけ' == _mo4.yomi) && (_mo7 = true), 0 == _mo7) return _mo6;
            var _mo8 = _mo4.get_slotnums(15);
            return 30 == _mo4.ctype && (1 == _mo8 ? _mo6.raig = 2 : _mo8 >= 2 && (_mo6.raig = 4)), 'たけ' == _mo4.yomi && (_mo6.raig += 5, _mo6.kaih += 1), _mo6;
        };
    },
    79086: (_mo9, _moa, _mob) => {
        'use strict';
        var _moc = null;
        defineModule(_moa);
        Object.defineProperty(_moa, '__esModule', {
            'value': true
        }), _moa.getSlot165_216PersonalEffect = void 0;
        var _mod = _mob(74496);
        _moa.getSlot165_216PersonalEffect = function(_moe) {
            var _mof = null,
                _mog = new _mod.SlotItemEffectModel();
            return 501 != _moe.ship_id && 506 != _moe.ship_id && 502 != _moe.ship_id && 507 != _moe.ship_id || (_mog.tyku += 2, _mog.kaih += 2), _mog;
        };
    },
    88102: (_moh, _moi, _moj) => {
        'use strict';
        var _mok = null;
        defineModule(_moi);
        Object.defineProperty(_moi, '__esModule', {
            'value': true
        }), _moi.getSlot16M1PersonalEffect = void 0;
        var _mol = _moj(74496);
        _moi.getSlot16M1PersonalEffect = function(_mom) {
            var _mon = null,
                _moo = new _mol.SlotItemEffectModel(),
                _mop = new _mol.SlotItemEffectModel();
            67 == _mom.ctype || 78 == _mom.ctype || 82 == _mom.ctype || 88 == _mom.ctype || 108 == _mom.ctype || 112 == _mom.ctype ? (_mop.houg += 2, _mop.souk += 1, 67 == _mom.ctype && (_mop.kaih -= 2)) : 149 == _mom.ship_id || 150 == _mom.ship_id || 151 == _mom.ship_id || 152 == _mom.ship_id ? (_mop.houg += 1, _mop.souk += 1, _mop.kaih -= 3) : 591 == _mom.ship_id || 592 == _mom.ship_id ? (_mop.houg += 2, _mop.souk += 1, _mop.kaih -= 2) : 593 != _mom.ship_id && 954 != _mom.ship_id || (_mop.houg += 1, _mop.souk += 1, _mop.kaih -= 1);
            var _moq = true;
            if (_mop.exists() || (_moq = false), 0 == _moq) return _moo;
            var _mor = _mom.get_slotnums(298) + _mom.get_slotnums(299) + _mom.get_slotnums(300);
            return _moo = _mop.multiply(_mor);
        };
    },
    29240: (_mos, _mot, _mou) => {
        'use strict';
        var _mov = null;
        defineModule(_mot);
        Object.defineProperty(_mot, '__esModule', {
            'value': true
        }), _mot.getSlot171PersonalEffect = void 0;
        var _mow = _mou(74496);
        _mot.getSlot171PersonalEffect = function(_mox) {
            var _moy = null,
                _moz = new _mow.SlotItemEffectModel(),
                _mp0 = 0;
            'アメリカ' == _mox.getCountryName() && (_mp0 = 1), 65 != _mox.ctype && 93 != _mox.ctype && 102 != _mox.ctype && 107 != _mox.ctype && 125 != _mox.ctype || (_moz.houg += 1, _moz.saku += 1, _mp0 = 2);
            var _mp1 = _mox.get_each_level_nums(171),
                _mp2 = 0,
                _mp3 = 0,
                _mp4 = 0;
            return _mp0 > 0 && (_mp1.map(function(_mp5, _mp6) {
                _mp6 >= 5 && (_mp2 += _mp5), _mp6 >= 3 && (_mp3 += _mp5), _mp6 >= 8 && (_mp4 += _mp5);
            }), 1 != _mp0 && 2 != _mp0 || (_mp1[10] > 0 && (_moz.houg += 1), _mp2 > 0 && (_moz.kaih += 1)), 2 == _mp0 && (_mp3 > 0 && (_moz.saku += 1), _mp4 > 0 && (_moz.saku += 1))), _moz;
        };
    },
    40885: (_mp7, _mp8, _mp9) => {
        'use strict';
        var _mpa = null;
        defineModule(_mp8);
        Object.defineProperty(_mp8, '__esModule', {
            'value': true
        }), _mp8.getSlot174PersonalEffect = void 0;
        var _mpb = _mp9(74496);
        _mp8.getSlot174PersonalEffect = function(_mpc) {
            var _mpd = null,
                _mpe = new _mpb.SlotItemEffectModel(),
                _mpf = new _mpb.SlotItemEffectModel();
            if (66 == _mpc.ctype && (_mpf.raig = 1, _mpf.kaih = 2), 591 == _mpc.ship_id || 592 == _mpc.ship_id || 954 == _mpc.ship_id ? (_mpf.raig += 6, _mpf.kaih += 3) : 593 == _mpc.ship_id ? (_mpf.raig += 5, _mpf.kaih += 2) : 488 != _mpc.ship_id && 622 != _mpc.ship_id && 623 != _mpc.ship_id && 624 != _mpc.ship_id || (_mpf.houg += 2, _mpf.raig += 4, _mpf.kaih += 4), !_mpf.exists()) return _mpe;
            var _mpg = _mpc.get_slotnums(174);
            return _mpe = _mpf.multiply(_mpg);
        };
    },
    19614: (_mph, _mpi, _mpj) => {
        'use strict';
        var _mpk = null;
        defineModule(_mpi);
        Object.defineProperty(_mpi, '__esModule', {
            'value': true
        }), _mpi.getSlot179PersonalEffect = void 0;
        var _mpl = _mpj(74496);
        _mpi.getSlot179PersonalEffect = function(_mpm) {
            var _mpn = null,
                _mpo = new _mpl.SlotItemEffectModel(),
                _mpp = new _mpl.SlotItemEffectModel();
            if (54 == _mpm.ctype && (_mpp.raig = 1), !_mpp.exists()) return _mpo;
            var _mpq = _mpm.get_slotnums(179);
            return _mpo = _mpp.multiply(_mpq);
        };
    },
    87220: (_mpr, _mps, _mpt) => {
        'use strict';
        var _mpu = null;
        defineModule(_mps);
        Object.defineProperty(_mps, '__esModule', {
            'value': true
        }), _mps.getSlot184PersonalEffect = void 0;
        var _mpv = _mpt(74496);
        _mps.getSlot184PersonalEffect = function(_mpw) {
            var _mpx = null,
                _mpy = new _mpv.SlotItemEffectModel(),
                _mpz = new _mpv.SlotItemEffectModel();
            if (68 == _mpw.ctype && (_mpz.houg += 1, _mpz.tyku += 2, _mpz.kaih += 3), !_mpz.exists()) return _mpy;
            var _mq0 = _mpw.get_slotnums(184);
            return _mpy = _mpz.multiply(_mq0);
        };
    },
    81367: (_mq1, _mq2, _mq3) => {
        'use strict';
        var _mq4 = null;
        defineModule(_mq2);
        Object.defineProperty(_mq2, '__esModule', {
            'value': true
        }), _mq2.getSlot188PersonalEffect = void 0;
        var _mq5 = _mq3(74496);
        _mq2.getSlot188PersonalEffect = function(_mq6) {
            var _mq7 = null,
                _mq8 = new _mq5.SlotItemEffectModel(),
                _mq9 = new _mq5.SlotItemEffectModel();
            if (68 == _mq6.ctype && (_mq9.houg += 3, _mq9.tyku += 1, _mq9.kaih += 1), !_mq9.exists()) return _mq8;
            var _mqa = _mq6.get_slotnums(188);
            return _mq8 = _mq9.multiply(_mqa);
        };
    },
    13052: (_mqb, _mqc, _mqd) => {
        'use strict';
        var _mqe = null;
        defineModule(_mqc);
        Object.defineProperty(_mqc, '__esModule', {
            'value': true
        }), _mqc.getSlot189PersonalEffect = void 0;
        var _mqf = _mqd(74496);
        _mqc.getSlot189PersonalEffect = function(_mqg) {
            var _mqh = null,
                _mqi = new _mqf.SlotItemEffectModel(),
                _mqj = new _mqf.SlotItemEffectModel();
            if (68 != _mqg.ctype && 63 != _mqg.ctype || (_mqj.tyku += 1, _mqj.kaih += 2), !_mqj.exists()) return _mqi;
            var _mqk = _mqg.get_slotnums(189);
            return _mqi = _mqj.multiply(_mqk);
        };
    },
    66904: (_mql, _mqm, _mqn) => {
        'use strict';
        var _mqo = null;
        defineModule(_mqm);
        Object.defineProperty(_mqm, '__esModule', {
            'value': true
        }), _mqm.getSlot18_52_PersonalEffect = void 0;
        var _mqp = _mqn(74496);
        _mqm.getSlot18_52_PersonalEffect = function(_mqq) {
            var _mqr = null,
                _mqs = new _mqp.SlotItemEffectModel(),
                _mqt = new _mqp.SlotItemEffectModel();
            if (277 == _mqq.ship_id || 278 == _mqq.ship_id || 156 == _mqq.ship_id ? _mqt.houg = 1 : 594 == _mqq.ship_id || 698 == _mqq.ship_id || 646 == _mqq.ship_id ? (_mqt.houg = 1, _mqt.kaih = 1) : 599 != _mqq.ship_id && 610 != _mqq.ship_id || (_mqt.houg = 2, _mqt.kaih = 1), !_mqt.exists()) return _mqs;
            var _mqu = _mqq.get_slotnums(18) + _mqq.get_slotnums(52);
            return _mqs = _mqt.multiply(_mqu);
        };
    },
    94968: (_mqv, _mqw, _mqx) => {
        'use strict';
        var _mqy = null;
        defineModule(_mqw);
        Object.defineProperty(_mqw, '__esModule', {
            'value': true
        }), _mqw.getSlot194PersonalEffect = void 0;
        var _mqz = _mqx(74496);
        _mqw.getSlot194PersonalEffect = function(_mr0) {
            var _mr1 = null,
                _mr2 = new _mqz.SlotItemEffectModel(),
                _mr3 = new _mqz.SlotItemEffectModel();
            if (70 == _mr0.ctype ? (_mr3.houg += 3, _mr3.kaih += 2, _mr3.saku += 2) : 72 != _mr0.ctype && 62 != _mr0.ctype || (_mr3.kaih += 1, _mr3.saku += 2), 392 == _mr0.ship_id && (_mr3.houg += 1, _mr3.kaih += 2, _mr3.saku += 2), !_mr3.exists()) return _mr2;
            var _mr4 = _mr0.get_slotnums(194);
            return _mr2 = _mr3.multiply(_mr4);
        };
    },
    94781: (_mr5, _mr6, _mr7) => {
        'use strict';
        var _mr8 = null;
        defineModule(_mr6);
        Object.defineProperty(_mr6, '__esModule', {
            'value': true
        }), _mr6.getSlot195PersonalEffect = void 0;
        var _mr9 = _mr7(74496);
        _mr6.getSlot195PersonalEffect = function(_mra) {
            var _mrb = null,
                _mrc = new _mr9.SlotItemEffectModel(),
                _mrd = false,
                _mre = new _mr9.SlotItemEffectModel();
            if ('アメリカ' == _mra.getCountryName() && (_mre.houg += 1, _mrd = true), 0 == _mrd) return _mrc;
            var _mrf = _mra.get_slotnums(195);
            return _mrc.add(_mre.multiply(_mrf));
        };
    },
    98137: (_mrg, _mrh, _mri) => {
        'use strict';
        var _mrj = null;
        defineModule(_mrh);
        Object.defineProperty(_mrh, '__esModule', {
            'value': true
        }), _mrh.getSlot19PersonalEffect = void 0;
        var _mrk = _mri(74496);
        _mrh.getSlot19PersonalEffect = function(_mrl) {
            var _mrm = null,
                _mrn = new _mrk.SlotItemEffectModel(),
                _mro = new _mrk.SlotItemEffectModel();
            if ('ほうしょう' == _mrl.yomi && (_mro.houg = 2, _mro.kaih = 2, _mro.tais = 2, _mro.tyku = 2), 75 != _mrl.ctype && 76 != _mrl.ctype || (_mro.houg = 2, _mro.tais = 3), 7 == _mrl.stype && (_mro.tyku += 1, _mro.kaih += 1), 894 != _mrl.ship_id && 899 != _mrl.ship_id || (_mro.houg += 1, _mro.kaih += 1, _mro.tais += 1, _mro.tyku += 1), !_mro.exists()) return _mrn;
            var _mrp = _mrl.get_slotnums(19);
            return _mrn = _mro.multiply(_mrp);
        };
    },
    48658: (_mrq, _mrr, _mrs) => {
        'use strict';
        var _mrt = null;
        defineModule(_mrr);
        Object.defineProperty(_mrr, '__esModule', {
            'value': true
        }), _mrr.getSlot204PersonalEffect = void 0;
        var _mru = _mrs(74496);
        _mrr.getSlot204PersonalEffect = function(_mrv) {
            var _mrw = null,
                _mrx = new _mru.SlotItemEffectModel();
            if (591 != _mrv.ship_id && 592 != _mrv.ship_id && 593 != _mrv.ship_id && 954 != _mrv.ship_id) return _mrx;
            _mrx.souk = _mrx.souk + 1, _mrx.raig = _mrx.raig + 1;
            for (var _mry = _mrv.get_each_level_nums(204), _mrz = 0, _ms0 = 0; _ms0 <= 10; _ms0++) _ms0 >= 7 && (_mrz += _mry[_ms0]);
            return _mrz > 0 && (_mrx.souk = _mrx.souk + 1), _mry[10] > 0 && (_mrx.raig = _mrx.raig + 1), _mrx;
        };
    },
    2306: (_ms1, _ms2, _ms3) => {
        'use strict';
        var _ms4 = null;
        defineModule(_ms2);
        Object.defineProperty(_ms2, '__esModule', {
            'value': true
        }), _ms2.getSlot217PersonalEffect = void 0;
        var _ms5 = _ms3(74496);
        _ms2.getSlot217PersonalEffect = function(_ms6) {
            var _ms7 = null,
                _ms8 = new _ms5.SlotItemEffectModel(),
                _ms9 = false,
                _msa = new _ms5.SlotItemEffectModel();
            if (501 == _ms6.ship_id || 506 == _ms6.ship_id ? (_msa.houg += 1, _msa.kaih += 3, _msa.tyku += 5, _ms9 = true) : 502 != _ms6.ship_id && 507 != _ms6.ship_id || (_msa.houg += 1, _msa.kaih += 2, _msa.tyku += 4, _ms9 = true), 0 == _ms9) return _ms8;
            var _msb = _ms6.get_slotnums(217);
            return _ms8.add(_msa.multiply(_msb)), _ms8;
        };
    },
    91302: function(_msc, _msd, _mse) {
        'use strict';
        var _msf = null;
        var _msg = this && this.__importDefault || function(_msh) {
            var _msi = null;
            return _msh && _msh.__esModule ? _msh : {
                'default': _msh
            };
        };
        defineModule(_msd);
        Object.defineProperty(_msd, '__esModule', {
            'value': true
        }), _msd.getSlot220PersonalEffect = void 0;
        var _msj = _mse(74496),
            _msk = _msg(_mse(18622));
        _msd.getSlot220PersonalEffect = function(_msl) {
            var _msm = null,
                _msn = new _msj.SlotItemEffectModel(),
                _mso = false,
                _msp = new _msj.SlotItemEffectModel(),
                _msq = 0,
                _msr = 0;
            if (662 == _msl.ship_id || 663 == _msl.ship_id || 668 == _msl.ship_id || 501 == _msl.ship_id || 506 == _msl.ship_id || 502 == _msl.ship_id || 507 == _msl.ship_id ? (_msp.houg += 1, _msp.tyku += 3, _msp.kaih += 2, _mso = true, _msq = 1) : 894 != _msl.ship_id && 899 != _msl.ship_id || (_msp.tyku += 2, _msp.kaih += 2, _mso = true, _msq = 1, _msr = 1), 0 == _mso) return _msn;
            var _mss = _msl.get_slotnums(220);
            _msn.add(_msp.multiply(_mss));
            for (var _mst = 0, _msu = 0, _msv = _msl.have_slot_ids(); _msu < _msv.length; _msu++) {
                var _msw = _msv[_msu],
                    _msx = _msk.default.model.slot.getMst(_msw),
                    _msy = _msx.equipType;
                12 != _msy && 13 != _msy || (_msx.sakuteki >= 5 && _msl.get_slotnums(parseInt(_msw)), _msx.taiku >= 2 && (_mst += _msl.get_slotnums(parseInt(_msw))));
            }
            if (_mst >= 1 && 1 == _msq && (_msn.tyku += 3, _msn.kaih += 3), 0 == _msr) return _msn;
            var _msz = _msl.get_each_level_nums(220)[10];
            return 1 == _msr && _msz > 0 && (_msn.houg += 1 * _msz, _msn.tyku += 1 * _msz, _msn.kaih += 1 * _msz), _msn;
        };
    },
    20418: (_mt0, _mt1, _mt2) => {
        'use strict';
        var _mt3 = null;
        defineModule(_mt1);
        Object.defineProperty(_mt1, '__esModule', {
            'value': true
        }), _mt1.getSlot227PersonalEffect = void 0;
        var _mt4 = _mt2(74496);
        _mt1.getSlot227PersonalEffect = function(_mt5) {
            var _mt6 = null,
                _mt7 = new _mt4.SlotItemEffectModel(),
                _mt8 = _mt5.get_each_level_nums(227),
                _mt9 = 0;
            _mt8.forEach(function(_mta, _mtb) {
                _mtb >= 8 && (_mt9 += _mta);
            }), _mt9 >= 1 && (_mt7.tais += 1 * _mt9);
            var _mtc = _mt8[10];
            return _mtc >= 1 && (_mt7.tais += 1 * _mtc), _mt7;
        };
    },
    1906: (_mtd, _mte, _mtf) => {
        'use strict';
        var _mtg = null;
        defineModule(_mte);
        Object.defineProperty(_mte, '__esModule', {
            'value': true
        }), _mte.getSlot228PersonalEffect = void 0;
        var _mth = _mtf(74496);
        _mte.getSlot228PersonalEffect = function(_mti) {
            var _mtj = null,
                _mtk = new _mth.SlotItemEffectModel(),
                _mtl = new _mth.SlotItemEffectModel();
            if ('ほうしょう' == _mti.yomi && (_mtl.houg = 3, _mtl.kaih = 4, _mtl.tais = 4, _mtl.tyku = 3), 75 != _mti.ctype && 76 != _mti.ctype || (_mtl.houg = 2, _mtl.tais = 5, _mtl.tyku = 1, _mtl.kaih = 1), 7 == _mti.stype && (_mtl.tais += 2, _mtl.tyku += 1, _mtl.kaih += 1), 894 != _mti.ship_id && 899 != _mti.ship_id || (_mtl.houg += 1, _mtl.kaih += 2, _mtl.tais += 2, _mtl.tyku += 1), !_mtl.exists()) return _mtk;
            var _mtm = _mti.get_slotnums(228);
            return _mtk = _mtl.multiply(_mtm);
        };
    },
    61887: function(_mtn, _mto, _mtp) {
        'use strict';
        var _mtq = null;
        var _mtr = this && this.__importDefault || function(_mts) {
            var _mtt = null;
            return _mts && _mts.__esModule ? _mts : {
                'default': _mts
            };
        };
        defineModule(_mto);
        Object.defineProperty(_mto, '__esModule', {
            'value': true
        }), _mto.getSlot229PersonalEffect = void 0;
        var _mtu = _mtp(74496),
            _mtv = _mtr(_mtp(18622));
        _mto.getSlot229PersonalEffect = function(_mtw) {
            var _mtx = null;
            for (var _mty = new _mtu.SlotItemEffectModel(), _mtz = 0, _mu0 = 0, _mu1 = _mtw.have_slots_dict[229]; _mu0 < _mu1.length; _mu0++) {
                _mu1[_mu0].level >= 7 && _mtz++;
            }
            var _mu2 = _mtz,
                _mu3 = 0,
                _mu4 = 0,
                _mu5 = 0,
                _mu6 = _mtw.get_slotnums(229);
            if (622 == _mtw.ship_id || 623 == _mtw.ship_id || 624 == _mtw.ship_id) _mty.houg += 1 * _mu6, _mty.tyku += 1 * _mu6, _mu3 = 2;
            else {
                if (656 == _mtw.ship_id) _mty.houg += 2 * _mu6, _mty.tyku += 3 * _mu6, _mty.tais += 2 * _mu6, _mu3 = 3;
                else {
                    if (0 == _mtz) return _mty;
                }
            }
            if (488 == _mtw.ship_id ? (_mty.tyku += 3 * _mu2, _mu3 = 1) : 220 == _mtw.ship_id ? _mty.tyku += 2 * _mu2 : 23 == _mtw.ship_id ? _mty.tyku += 1 * _mu2 : 160 == _mtw.ship_id ? (_mty.tyku += 2 * _mu2, _mu3 = 1) : 224 == _mtw.ship_id ? _mty.tyku += 1 * _mu2 : 487 == _mtw.ship_id ? (_mty.tyku += 2 * _mu2, _mu3 = 1) : 289 == _mtw.ship_id && (_mty.tyku += 1 * _mu2), (66 == _mtw.ctype || 28 == _mtw.ctype) && (_mty.houg += 1 * _mu2, _mty.tyku += 1 * _mu2, _mu4 = 1), 1 == _mtw.stype && (_mty.houg += 1 * _mu2, _mty.tyku += 1 * _mu2, _mu5 = 1), ('ゆら' == _mtw.yomi || 'なか' == _mtw.yomi || 'きぬ' == _mtw.yomi) && (_mty.houg += 2 * _mu2), 0 == _mu3 + _mu4 + _mu5) return _mty;
            for (var _mu7 = 0, _mu8 = 0, _mu9 = 0, _mua = _mtw.have_slot_ids(); _mu9 < _mua.length; _mu9++) {
                var _mub = _mua[_mu9],
                    _muc = _mtv.default.model.slot.getMst(_mub),
                    _mud = _muc.equipType;
                12 != _mud && 13 != _mud || (_muc.sakuteki >= 5 && (_mu7 += _mtw.get_slotnums(parseInt(_mub))), _muc.taiku >= 2 && (_mu8 += _mtw.get_slotnums(parseInt(_mub))));
            }
            return 1 == _mu3 ? _mu7 > 0 && (_mty.houg += 3, _mty.kaih += 2) : 2 == _mu3 ? (_mu7 > 0 && (_mty.houg += 1, _mty.kaih += 1), _mu8 > 0 && (_mty.tyku += 2, _mty.kaih += 2)) : 3 == _mu3 && (_mu7 > 0 && (_mty.houg += 2, _mty.kaih += 2), _mu8 > 0 && (_mty.tyku += 3, _mty.kaih += 2)), 1 == _mu4 && _mu7 > 0 && (_mty.houg += 2, _mty.kaih += 3), 1 == _mu5 && _mu7 > 0 && (_mty.houg += 1, _mty.kaih += 4), _mty;
        };
    },
    55734: (_mue, _muf, _mug) => {
        'use strict';
        var _muh = null;
        defineModule(_muf);
        Object.defineProperty(_muf, '__esModule', {
            'value': true
        }), _muf.getSlot234PersonalEffect = void 0;
        var _mui = _mug(74496);
        _muf.getSlot234PersonalEffect = function(_muj) {
            var _muk = null,
                _mul = new _mui.SlotItemEffectModel(),
                _mum = false,
                _mun = new _mui.SlotItemEffectModel(),
                _muo = _muj.get_slotnums(142) + _muj.get_slotnums(460);
            if (37 == _muj.ctype && (_mun.houg += 1, _mun.tyku += 1, _mun.kaih += 1, _mun.houm += 1, _muo >= 1 && (_mul.tyku += 1, _mul.kaih += 1, _mul.houm += 1), _mum = true), 0 == _mum) return _mul;
            var _mup = _muj.get_slotnums(234);
            return _mul.add(_mun.multiply(_mup)), _mul;
        };
    },
    17562: function(_muq, _mur, _mus) {
        'use strict';
        var _mut = null;
        var _muu = this && this.__importDefault || function(_muv) {
            var _muw = null;
            return _muv && _muv.__esModule ? _muv : {
                'default': _muv
            };
        };
        defineModule(_mur);
        Object.defineProperty(_mur, '__esModule', {
            'value': true
        }), _mur.getSlot235PersonalEffect = void 0;
        var _mux = _mus(74496),
            _muy = _muu(_mus(18622));
        _mur.getSlot235PersonalEffect = function(_muz) {
            var _mv0 = null,
                _mv1 = new _mux.SlotItemEffectModel(),
                _mv2 = false,
                _mv3 = new _mux.SlotItemEffectModel(),
                _mv4 = 0;
            if (52 != _muz.ctype && 9 != _muz.ctype || (_mv3.houg += 2, _mv3.tyku += 1, _mv2 = true), 321 == _muz.ship_id && (_mv3.houg += 1, _mv3.kaih += 1, _mv4 = 1), 0 == _mv2) return _mv1;
            var _mv5 = _muz.get_slotnums(235);
            if (_mv1.add(_mv3.multiply(_mv5)), 0 == _mv4) return _mv1;
            for (var _mv6 = 0, _mv7 = 0, _mv8 = 0, _mv9 = _muz.have_slot_ids(); _mv8 < _mv9.length; _mv8++) {
                var _mva = _mv9[_mv8],
                    _mvb = _muy.default.model.slot.getMst(_mva),
                    _mvc = _mvb.equipType;
                12 != _mvc && 13 != _mvc || (_mvb.sakuteki >= 5 && (_mv6 += _muz.get_slotnums(parseInt(_mva))), _mvb.taiku >= 2 && (_mv7 += _muz.get_slotnums(parseInt(_mva))));
            }
            return _mv6 >= 1 && 1 == _mv4 && (_mv1.houg += 3, _mv1.kaih += 2), _mv7 >= 1 && 1 == _mv4 && (_mv1.tyku += 3, _mv1.kaih += 3), _mv1;
        };
    },
    47970: (_mvd, _mve, _mvf) => {
        'use strict';
        var _mvg = null;
        defineModule(_mve);
        Object.defineProperty(_mve, '__esModule', {
            'value': true
        }), _mve.getSlot237PersonalEffect = void 0;
        var _mvh = _mvf(74496);
        _mve.getSlot237PersonalEffect = function(_mvi) {
            var _mvj = null,
                _mvk = new _mvh.SlotItemEffectModel(),
                _mvl = new _mvh.SlotItemEffectModel();
            if (553 == _mvi.ship_id) _mvl.houg = 4, _mvl.kaih = 2;
            else {
                if (82 == _mvi.ship_id) _mvl.houg = 3, _mvl.kaih = 1;
                else {
                    if (88 == _mvi.ship_id) _mvl.houg = 3, _mvl.kaih = 1;
                    else {
                        if (554 == _mvi.ship_id) _mvl.houg = 4, _mvl.kaih = 2;
                        else {
                            if (411 == _mvi.ship_id) _mvl.houg = 2;
                            else {
                                if (412 != _mvi.ship_id) return _mvk;
                                _mvl.houg = 2;
                            }
                        }
                    }
                }
            }
            var _mvm = _mvi.get_slotnums(237);
            return _mvk = _mvl.multiply(_mvm);
        };
    },
    14386: (_mvn, _mvo, _mvp) => {
        'use strict';
        var _mvq = null;
        defineModule(_mvo);
        Object.defineProperty(_mvo, '__esModule', {
            'value': true
        }), _mvo.getSlot238_239PersonalEffect = void 0;
        var _mvr = _mvp(74496);
        _mvo.getSlot238_239PersonalEffect = function(_mvs) {
            var _mvt = null,
                _mvu = new _mvr.SlotItemEffectModel();
            return 501 != _mvs.ship_id && 506 != _mvs.ship_id && 502 != _mvs.ship_id && 507 != _mvs.ship_id || (_mvu.kaih += 1, _mvu.raig += 1), _mvu;
        };
    },
    82229: (_mvv, _mvw, _mvx) => {
        'use strict';
        var _mvy = null;
        defineModule(_mvw);
        Object.defineProperty(_mvw, '__esModule', {
            'value': true
        }), _mvw.getSlot242PersonalEffect = void 0;
        var _mvz = _mvx(74496);
        _mvw.getSlot242PersonalEffect = function(_mw0) {
            var _mw1 = null,
                _mw2 = new _mvz.SlotItemEffectModel(),
                _mw3 = false,
                _mw4 = new _mvz.SlotItemEffectModel();
            if (78 == _mw0.ctype && (_mw4.houg += 2, _mw4.kaih += 1, _mw3 = true), 'ほうしょう' == _mw0.yomi && (_mw4.houg += 1, _mw3 = true), 0 == _mw3) return _mw2;
            var _mw5 = _mw0.get_slotnums(242);
            return _mw2.add(_mw4.multiply(_mw5)), _mw2;
        };
    },
    10325: (_mw6, _mw7, _mw8) => {
        'use strict';
        var _mw9 = null;
        defineModule(_mw7);
        Object.defineProperty(_mw7, '__esModule', {
            'value': true
        }), _mw7.getSlot243PersonalEffect = void 0;
        var _mwa = _mw8(74496);
        _mw7.getSlot243PersonalEffect = function(_mwb) {
            var _mwc = null,
                _mwd = new _mwa.SlotItemEffectModel(),
                _mwe = false,
                _mwf = new _mwa.SlotItemEffectModel();
            if (78 == _mwb.ctype && (_mwf.houg += 3, _mwf.kaih += 1, _mwe = true), 'ほうしょう' == _mwb.yomi && (_mwf.houg += 2, _mwe = true), 0 == _mwe) return _mwd;
            var _mwg = _mwb.get_slotnums(243);
            return _mwd.add(_mwf.multiply(_mwg)), _mwd;
        };
    },
    351: (_mwh, _mwi, _mwj) => {
        'use strict';
        var _mwk = null;
        defineModule(_mwi);
        Object.defineProperty(_mwi, '__esModule', {
            'value': true
        }), _mwi.getSlot244PersonalEffect = void 0;
        var _mwl = _mwj(74496);
        _mwi.getSlot244PersonalEffect = function(_mwm) {
            var _mwn = null,
                _mwo = new _mwl.SlotItemEffectModel(),
                _mwp = false,
                _mwq = new _mwl.SlotItemEffectModel(),
                _mwr = 0;
            if (78 == _mwm.ctype && (_mwq.houg += 4, _mwq.kaih += 2, _mwp = true, _mwr = 1), 'ほうしょう' == _mwm.yomi && (_mwq.houg += 3, _mwp = true, _mwr = 2), 0 == _mwp) return _mwo;
            var _mws = _mwm.get_slotnums(244);
            if (_mwo.add(_mwq.multiply(_mws)), 0 == _mwr) return _mwo;
            var _mwt = _mwm.get_each_level_over_nums([244]).slot[244];
            return 1 == _mwr ? (_mwt[3] >= 1 && (_mwo.houg += 1 * _mwt[3]), _mwt[5] >= 1 && (_mwo.houm += 1 * _mwt[5]), _mwt[7] >= 1 && (_mwo.houg += 1 * _mwt[7]), _mwt[8] >= 1 && (_mwo.kaih += 1 * _mwt[8]), _mwt[9] >= 1 && (_mwo.houm += 1 * _mwt[9]), _mwt[10] >= 1 && (_mwo.houg += 1 * _mwt[10])) : 2 == _mwr && (_mwt[3] >= 1 && (_mwo.kaih += 1 * _mwt[3]), _mwt[7] >= 1 && (_mwo.houg += 1 * _mwt[7]), _mwt[9] >= 1 && (_mwo.houm += 1 * _mwt[9]), _mwt[10] >= 1 && (_mwo.houg += 1 * _mwt[10])), _mwo;
        };
    },
    61977: (_mwu, _mwv, _mww) => {
        'use strict';
        var _mwx = null;
        defineModule(_mwv);
        Object.defineProperty(_mwv, '__esModule', {
            'value': true
        }), _mwv.getSlot247PersonalEffect = void 0;
        var _mwy = _mww(74496);
        _mwv.getSlot247PersonalEffect = function(_mwz) {
            var _mx0 = null,
                _mx1 = new _mwy.SlotItemEffectModel(),
                _mx2 = false,
                _mx3 = new _mwy.SlotItemEffectModel(),
                _mx4 = 0;
            if ('フランス' == _mwz.getCountryName() && (_mx3.houg += 2, _mx3.houm += 2, _mx2 = true, _mx4 = 1), 0 == _mx2) return _mx1;
            var _mx5 = _mwz.get_slotnums(247);
            if (_mx1.add(_mx3.multiply(_mx5)), 0 == _mx4) return _mx1;
            var _mx6 = _mwz.get_each_level_nums(247),
                _mx7 = 0,
                _mx8 = 0;
            _mx4 > 0 && _mx6.forEach(function(_mx9, _mxa) {
                _mxa >= 4 && (_mx7 += _mx9), _mxa >= 8 && (_mx8 += _mx9);
            });
            var _mxb = _mx6[10];
            return 1 == _mx4 && (_mx7 >= 1 && (_mx1.houg += 1 * _mx7, _mx1.houm += 1 * _mx7), _mx8 >= 1 && (_mx1.kaih += 1 * _mx8, _mx1.houg += 1 * _mx8, _mx1.houm += 1 * _mx8), _mxb >= 1 && (_mx1.kaih += 1 * _mxb, _mx1.houm += 1 * _mxb)), _mx1;
        };
    },
    96580: (_mxc, _mxd, _mxe) => {
        'use strict';
        var _mxf = null;
        defineModule(_mxd);
        Object.defineProperty(_mxd, '__esModule', {
            'value': true
        }), _mxd.getSlot252PersonalEffect = void 0;
        var _mxg = _mxe(74496);
        _mxd.getSlot252PersonalEffect = function(_mxh) {
            var _mxi = null,
                _mxj = new _mxg.SlotItemEffectModel(),
                _mxk = (new _mxg.SlotItemEffectModel(), 0);
            if (78 != _mxh.ctype && 112 != _mxh.ctype || (_mxk = 1), 0 == _mxk) return _mxj;
            var _mxl = _mxh.get_each_level_over_nums([252]).slot[252];
            return 1 == _mxk && (_mxl[4] >= 1 && (_mxj.kaih += 1 * _mxl[4]), _mxl[6] >= 1 && (_mxj.houm += 1 * _mxl[6]), _mxl[7] >= 1 && (_mxj.houg += 1 * _mxl[7]), _mxl[8] >= 1 && (_mxj.kaih += 1 * _mxl[8]), _mxl[9] >= 1 && (_mxj.houm += 1 * _mxl[9]), _mxl[10] >= 1 && (_mxj.houg += 1 * _mxl[10])), _mxj;
        };
    },
    31797: function(_mxm, _mxn, _mxo) {
        'use strict';
        var _mxp = null;
        var _mxq = this && this.__importDefault || function(_mxr) {
            var _mxs = null;
            return _mxr && _mxr.__esModule ? _mxr : {
                'default': _mxr
            };
        };
        defineModule(_mxn);
        Object.defineProperty(_mxn, '__esModule', {
            'value': true
        }), _mxn.getSlot266PersonalEffect2 = _mxn.getSlot266PersonalEffect = void 0;
        var _mxt = _mxo(74496),
            _mxu = _mxq(_mxo(18622));
        _mxn.getSlot266PersonalEffect = function(_mxv) {
            var _mxw = null,
                _mxx = new _mxt.SlotItemEffectModel(),
                _mxy = false;
            if (566 != _mxv.ship_id && 567 != _mxv.ship_id && 568 != _mxv.ship_id && 656 != _mxv.ship_id && 670 != _mxv.ship_id && 915 != _mxv.ship_id && 951 != _mxv.ship_id || (_mxy = true), 0 == _mxy) return _mxx;
            var _mxz = _mxv.get_slotnums(266);
            return 30 == _mxv.ctype && (1 == _mxz ? _mxx.houg = 1 : _mxz >= 2 && (_mxx.houg = 3)), _mxx;
        }, _mxn.getSlot266PersonalEffect2 = function(_my0) {
            var _my1 = null,
                _my2 = new _mxt.SlotItemEffectModel(),
                _my3 = 0,
                _my4 = new _mxt.SlotItemEffectModel();
            if (23 == _my0.ctype || 18 == _my0.ctype ? (_my4.houg = 1, _my3 = 1) : 30 == _my0.ctype && (_my4.houg = 1, _my3 = 2), ('しぐれ' == _my0.yomi || 'ゆきかぜ' == _my0.yomi || 'いそかぜ' == _my0.yomi) && (_my4.kaih = 1), 961 == _my0.ship_id && (_my4.houg += 1, _my4.houm += 1, _my4.kaih += 1), !_my4.exists()) return _my2;
            var _my5 = _my0.get_slotnums(266);
            if (_my2 = _my4.multiply(_my5), 0 == _my3) return _my2;
            for (var _my6 = 0, _my7 = 0, _my8 = _my0.have_slot_ids(); _my7 < _my8.length; _my7++) {
                var _my9 = _my8[_my7],
                    _mya = _mxu.default.model.slot.getMst(_my9),
                    _myb = _mya.equipType;
                (12 == _myb || 13 == _myb) && _mya.sakuteki >= 5 && (_my6 += _my0.get_slotnums(parseInt(_my9)));
            }
            return _my6 > 0 && (1 == _my3 ? (_my2.houg += 1, _my2.kaih += 1, _my2.raig += 3) : 2 == _my3 && (_my2.houg += 2, _my2.kaih += 1, _my2.raig += 3)), _my2;
        };
    },
    45738: function(_myc, _myd, _mye) {
        'use strict';
        var _myf = null;
        var _myg = this && this.__importDefault || function(_myh) {
            var _myi = null;
            return _myh && _myh.__esModule ? _myh : {
                'default': _myh
            };
        };
        defineModule(_myd);
        Object.defineProperty(_myd, '__esModule', {
            'value': true
        }), _myd.getSlot267PersonalEffect2 = _myd.getSlot267PersonalEffect = void 0;
        var _myj = _mye(74496),
            _myk = _myg(_mye(18622));
        _myd.getSlot267PersonalEffect = function(_myl) {
            var _mym = null,
                _myn = new _myj.SlotItemEffectModel(),
                _myo = 0,
                _myp = 0;
            if (38 == _myl.ctype || 22 == _myl.ctype) _myo = 2, _myp = 1;
            else {
                if (30 != _myl.ctype) return _myn;
                _myo = 1, _myp = 1;
            }
            var _myq = _myl.get_slotnums(267) + _myl.get_slotnums(366);
            return _myn.houg = _myo * _myq, _myn.kaih = _myp * _myq, _myn;
        }, _myd.getSlot267PersonalEffect2 = function(_myr) {
            var _mys = null,
                _myt = new _myj.SlotItemEffectModel(),
                _myu = _myr.get_slotnums(267),
                _myv = _myr.get_slotnums(366),
                _myw = _myu + _myv;
            if (566 != _myr.ship_id && 567 != _myr.ship_id && 568 != _myr.ship_id && 656 != _myr.ship_id && 670 != _myr.ship_id && 915 != _myr.ship_id && 951 != _myr.ship_id || (_myu > 0 && (_myt.houg += 1), 1 == _myv ? (_myt.houg += 1, _myt.tyku += 2) : _myv >= 2 && (_myt.houg += 2, _myt.tyku += 4)), 38 != _myr.ctype && 229 != _myr.ship_id && [648, 961].indexOf(_myr.ship_id) < 0) return _myt;
            var _myx = false,
                _myy = false,
                _myz = false,
                _mz0 = false,
                _mz1 = false,
                _mz2 = false,
                _mz3 = false,
                _mz4 = false,
                _mz5 = false,
                _mz6 = false,
                _mz7 = false,
                _mz8 = 0,
                _mz9 = 0,
                _mza = 0;
            543 == _myr.ship_id ? (_myt.houg = 1 * _myw, _myy = true) : 229 == _myr.ship_id ? _myz = true : 542 == _myr.ship_id ? (_myt.houg = 1 * _myw, _mz0 = true) : 563 == _myr.ship_id ? (_myt.houg = 1 * _myw, _mz1 = true) : 564 == _myr.ship_id ? (_myt.houg = 1 * _myw, _mz2 = true) : 578 == _myr.ship_id ? (_myt.houg = 1 * _myw, _mz3 = true) : 569 == _myr.ship_id ? (_myt.houg = 1 * _myw, _mz4 = true) : 649 == _myr.ship_id ? (_myt.houg = 2 * _myw, _mz6 = true) : 955 == _myr.ship_id || 960 == _myr.ship_id ? (_myt.houg = 2 * _myw, _mz7 = true) : 648 == _myr.ship_id ? (_myt.houg = 2 * _myw, _mz5 = true, _mz8 = 1, _mz9 = 1, _mza = 1) : 961 == _myr.ship_id && (_myt.houg = 2 * _myw, _myx = true, _mz8 = 1, _mz9 = 1, _mza = 1);
            for (var _mzb = 0, _mzc = 0, _mzd = 0, _mze = _myr.have_slot_ids(); _mzd < _mze.length; _mzd++) {
                var _mzf = _mze[_mzd],
                    _mzg = _myk.default.model.slot.getMst(_mzf),
                    _mzh = _mzg.equipType;
                12 != _mzh && 13 != _mzh || (_mzg.sakuteki >= 5 && (_mzb += _myr.get_slotnums(parseInt(_mzf))), _mzg.taiku >= 2 && (_mzc += _myr.get_slotnums(parseInt(_mzf))));
            }
            if (_mzb > 0 && _myu > 0 && ((38 == _myr.ctype || _mz5) && (_myt.houg += 2, _myt.raig += 3, _myt.kaih += 1, 955 == _myr.ship_id ? _myt.raig -= 1 : 960 == _myr.ship_id && (_myt.raig -= 2)), (_mz0 || _myy || _myz || _mz1 || _mz2 || _mz3 || _mz4 || _mz5 || _mz6 || _mz7) && (_myt.houg += 1, _myt.raig += 3, _myt.kaih += 2)), _myv > 0 && (_mz0 || _myy || _mz1 || _mz2 || _mz3 || _myz || _mz4 || _mz5 || _mz6 || _myx || _mz7)) {
                1 == _myv ? (_myt.tyku += 3, _myt.houg += 1, _myt.houm += 1) : _myv >= 2 && (_myt.tyku += 5, _myt.houg += 3, _myt.houm += 1, 955 == _myr.ship_id && (_myt.houg += 1)), (_mz4 || _mz5) && (_myt.houg += 1, _myt.tyku += 2), _mzb > 0 && (_myt.houg += 2, _myt.kaih += 2, _myt.raig += 4, _myt.houm += 2, 960 == _myr.ship_id && (_myt.raig -= 1, _myt.houg += 1)), _mzc > 0 && (_myt.houg += 1, _myt.kaih += 3, _myt.tyku += 5, _myt.houm += 1);
                var _mzi = _myr.get_each_level_nums(366),
                    _mzj = 0,
                    _mzk = 0;
                _mzi.forEach(function(_mzl, _mzm) {
                    _mzm >= 5 && (_mzj += _mzl), _mzm >= 8 && (_mzk += _mzl);
                }), _mzj >= 1 && (_myt.houm += 1 * _mzj), _mzk >= 1 && (_myt.houg += 1 * _mzk);
                var _mzn = _mzi[10];
                _mzn >= 1 && (_myt.houm += 1 * _mzn);
            }
            var _mzo = _myr.get_slotnums(129),
                _mzp = _myr.get_slotnums(74),
                _mzq = _myr.get_slotnums(412);
            return _mz8 > 0 && _mzo > 0 && 1 == _mz8 && (_myt.houg += 2, _myt.kaih += 3, _myt.tyku += 2), _mza > 0 && _mzq > 0 && 1 == _mza && (_myt.houg += 2, _myt.kaih += 3, _myt.tyku += 2), _mz9 > 0 && _mzp > 0 && 1 == _mz9 && (_myt.houg += 3, _myt.kaih -= 3), _myt;
        };
    },
    23934: (_mzr, _mzs, _mzt) => {
        'use strict';
        var _mzu = null;
        defineModule(_mzs);
        Object.defineProperty(_mzs, '__esModule', {
            'value': true
        }), _mzs.getSlot271PersonalEffect = void 0;
        var _mzv = _mzt(74496);
        _mzs.getSlot271PersonalEffect = function(_mzw) {
            var _mzx = null,
                _mzy = new _mzv.SlotItemEffectModel(),
                _mzz = 0;
            if (508 != _mzw.ship_id && 509 != _mzw.ship_id && 888 != _mzw.ship_id && 883 != _mzw.ship_id || (_mzz = 1), 0 == _mzz) return _mzy;
            var _n00 = _mzw.get_each_level_nums(271),
                _n01 = 0,
                _n02 = 0,
                _n03 = 0,
                _n04 = _n00[10];
            return _mzz > 0 && _n00.forEach(function(_n05, _n06) {
                _n06 >= 4 && (_n01 += _n05), _n06 >= 6 && (_n02 += _n05), _n06 >= 8 && (_n03 += _n05);
            }), 1 == _mzz && (_n01 >= 1 && (_mzy.houg += 1 * _n01), _n02 >= 1 && (_mzy.tyku += 2 * _n02), _n03 >= 1 && (_mzy.kaih += 2 * _n03), _n04 >= 1 && (_mzy.houg += 1 * _n04)), _mzy;
        };
    },
    17712: function(_n07, _n08, _n09) {
        'use strict';
        var _n0a = null;
        var _n0b = this && this.__importDefault || function(_n0c) {
            var _n0d = null;
            return _n0c && _n0c.__esModule ? _n0c : {
                'default': _n0c
            };
        };
        defineModule(_n08);
        Object.defineProperty(_n08, '__esModule', {
            'value': true
        }), _n08.getSlot275PersonalEffect = void 0;
        var _n0e = _n09(74496),
            _n0f = _n0b(_n09(18622));
        _n08.getSlot275PersonalEffect = function(_n0g) {
            var _n0h = null,
                _n0i = new _n0e.SlotItemEffectModel(),
                _n0j = false,
                _n0k = new _n0e.SlotItemEffectModel(),
                _n0l = 0,
                _n0m = 0;
            if (894 != _n0g.ship_id && 899 != _n0g.ship_id || (_n0k.houg += 1, _n0k.tyku += 3, _n0k.kaih += 2, _n0j = true, _n0m = 1, _n0l = 1), 0 == _n0j) return _n0i;
            var _n0n = _n0g.get_slotnums(275);
            _n0i.add(_n0k.multiply(_n0n));
            var _n0o = 0;
            if (_n0l > 0)
                for (var _n0p = 0, _n0q = _n0g.have_slot_ids(); _n0p < _n0q.length; _n0p++) {
                    var _n0r = _n0q[_n0p],
                        _n0s = _n0f.default.model.slot.getMst(_n0r),
                        _n0t = _n0s.equipType;
                    12 != _n0t && 13 != _n0t || (_n0s.sakuteki >= 5 && _n0g.get_slotnums(parseInt(_n0r)), _n0s.taiku >= 2 && (_n0o += _n0g.get_slotnums(parseInt(_n0r))));
                }
            if (1 == _n0l && _n0o > 0 && (_n0i.tyku += 3, _n0i.kaih += 3), 0 == _n0m) return _n0i;
            var _n0u = _n0g.get_each_level_nums(275),
                _n0v = 0,
                _n0w = _n0u[10];
            return _n0m > 0 && _n0u.forEach(function(_n0x, _n0y) {
                _n0y >= 7 && (_n0v += _n0x);
            }), 1 == _n0m && (_n0v > 0 && (_n0i.tyku += 1 * _n0v, _n0i.kaih += 1 * _n0v), _n0w > 0 && (_n0i.houg += 1 * _n0w, _n0i.tyku += 1 * _n0w, _n0i.houm += 1 * _n0w)), _n0i;
        };
    },
    93733: (_n0z, _n10, _n11) => {
        'use strict';
        var _n12 = null;
        defineModule(_n10);
        Object.defineProperty(_n10, '__esModule', {
            'value': true
        }), _n10.getSlot277PersonalEffect = void 0;
        var _n13 = _n11(74496);
        _n10.getSlot277PersonalEffect = function(_n14) {
            var _n15 = null,
                _n16 = new _n13.SlotItemEffectModel(),
                _n17 = false,
                _n18 = new _n13.SlotItemEffectModel();
            if ('アメリカ' != _n14.getCountryName() && 67 != _n14.ctype && 78 != _n14.ctype && 82 != _n14.ctype && 88 != _n14.ctype && 108 != _n14.ctype && 112 != _n14.ctype || (_n18.houg += 1, _n18.kaih += 1, _n17 = true), 83 == _n14.ctype && (_n18.houg += 1, _n18.kaih += 1, _n18.tyku += 1, _n17 = true), 0 == _n17) return _n16;
            var _n19 = _n14.get_slotnums(277);
            return _n16.add(_n18.multiply(_n19)), _n16;
        };
    },
    34718: (_n1a, _n1b, _n1c) => {
        'use strict';
        var _n1d = null;
        defineModule(_n1b);
        Object.defineProperty(_n1b, '__esModule', {
            'value': true
        }), _n1b.getSlot278PersonalEffect = void 0;
        var _n1e = _n1c(74496);
        _n1b.getSlot278PersonalEffect = function(_n1f) {
            var _n1g = null,
                _n1h = new _n1e.SlotItemEffectModel();
            return 'アメリカ' == _n1f.getCountryName() ? (_n1h.tyku += 1, _n1h.kaih += 3, _n1h.saku += 1) : 67 == _n1f.ctype || 78 == _n1f.ctype || 82 == _n1f.ctype || 88 == _n1f.ctype || 108 == _n1f.ctype || 112 == _n1f.ctype ? (_n1h.tyku += 1, _n1h.kaih += 2) : 96 == _n1f.ctype && (_n1h.tyku += 1, _n1h.kaih += 1), _n1h;
        };
    },
    69245: (_n1i, _n1j, _n1k) => {
        'use strict';
        var _n1l = null;
        defineModule(_n1j);
        Object.defineProperty(_n1j, '__esModule', {
            'value': true
        }), _n1j.getSlot279PersonalEffect = void 0;
        var _n1m = _n1k(74496);
        _n1j.getSlot279PersonalEffect = function(_n1n) {
            var _n1o = null,
                _n1p = new _n1m.SlotItemEffectModel();
            return 'アメリカ' == _n1n.getCountryName() ? (_n1p.houg += 2, _n1p.tyku += 2, _n1p.kaih += 3, _n1p.saku += 2) : 67 == _n1n.ctype || 78 == _n1n.ctype || 82 == _n1n.ctype || 88 == _n1n.ctype || 108 == _n1n.ctype || 112 == _n1n.ctype ? (_n1p.houg += 1, _n1p.tyku += 1, _n1p.kaih += 2, _n1p.saku += 1) : 96 == _n1n.ctype && (_n1p.houg += 1, _n1p.tyku += 1, _n1p.kaih += 1), _n1p;
        };
    },
    18478: (_n1q, _n1r, _n1s) => {
        'use strict';
        var _n1t = null;
        defineModule(_n1r);
        Object.defineProperty(_n1r, '__esModule', {
            'value': true
        }), _n1r.getSlot282PersonalEffect = void 0;
        var _n1u = _n1s(74496);
        _n1r.getSlot282PersonalEffect = function(_n1v) {
            var _n1w = null,
                _n1x = new _n1u.SlotItemEffectModel(),
                _n1y = false,
                _n1z = false;
            147 != _n1v.ship_id && 73 != _n1v.ctype && 81 != _n1v.ctype || (_n1y = true), 'ゆうばり' == _n1v.yomi && (_n1z = true);
            var _n20 = new _n1u.SlotItemEffectModel();
            if ((_n1y || _n1z) && (_n20.houg += 2, _n20.souk += 1), !_n20.exists()) return _n1x;
            var _n21 = _n1v.get_slotnums(282);
            return _n1x = _n20.multiply(_n21);
        };
    },
    2899: (_n22, _n23, _n24) => {
        'use strict';
        var _n25 = null;
        defineModule(_n23);
        Object.defineProperty(_n23, '__esModule', {
            'value': true
        }), _n23.getSlot283PersonalEffect = void 0;
        var _n26 = _n24(74496);
        _n23.getSlot283PersonalEffect = function(_n27) {
            var _n28 = null,
                _n29 = new _n26.SlotItemEffectModel(),
                _n2a = false;
            147 != _n27.ship_id && 73 != _n27.ctype && 81 != _n27.ctype || (_n2a = true);
            var _n2b = new _n26.SlotItemEffectModel();
            if (_n2a && (_n2b.raig += 3, _n2b.houg += 1, _n2b.souk += 1), !_n2b.exists()) return _n29;
            var _n2c = _n27.get_slotnums(283);
            return _n29 = _n2b.multiply(_n2c);
        };
    },
    57120: (_n2d, _n2e, _n2f) => {
        'use strict';
        var _n2g = null;
        defineModule(_n2e);
        Object.defineProperty(_n2e, '__esModule', {
            'value': true
        }), _n2e.getSlot285PersonalEffect = void 0;
        var _n2h = _n2f(74496);
        _n2e.getSlot285PersonalEffect = function(_n2i) {
            var _n2j = null,
                _n2k = new _n2h.SlotItemEffectModel(),
                _n2l = false;
            if ([195, 426, 420, 407, 437, 326, 419, 147, 627, 665, 903, 908, 647, 666, 959].indexOf(_n2i.ship_id) >= 0 && (_n2l = true), 0 == _n2l) return _n2k;
            var _n2m = _n2i.get_each_level_nums(285),
                _n2n = _n2i.get_slotnums(285);
            _n2n > 2 && (_n2n = 2), _n2k.raig = 2 * _n2n, _n2k.kaih = 1 * _n2n;
            var _n2o = _n2m[10];
            1 == _n2o && (_n2k.houg += 1, _n2k.raig += 1), _n2o >= 2 && (_n2k.houg += 2, _n2k.raig += 1), _n2o >= 3 && (_n2k.raig += 3);
            var _n2p = _n2i.get_slotnums(285);
            return 903 == _n2i.ship_id ? (_n2p >= 2 && (_n2k.raig += 2), _n2p >= 3 && (_n2k.raig += 2)) : 908 != _n2i.ship_id && 959 != _n2i.ship_id || (_n2p >= 2 && (_n2k.raig += 1), _n2p >= 3 && (_n2k.raig += 1)), _n2k;
        };
    },
    74985: function(_n2q, _n2r, _n2s) {
        'use strict';
        var _n2t = null;
        var _n2u = this && this.__importDefault || function(_n2v) {
            var _n2w = null;
            return _n2v && _n2v.__esModule ? _n2v : {
                'default': _n2v
            };
        };
        defineModule(_n2r);
        Object.defineProperty(_n2r, '__esModule', {
            'value': true
        }), _n2r.getSlot286PersonalEffect3 = _n2r.getSlot286PersonalEffect2 = _n2r.getSlot286PersonalEffect = void 0;
        var _n2x = _n2s(74496),
            _n2y = _n2u(_n2s(18622));
        _n2r.getSlot286PersonalEffect = function(_n2z) {
            var _n30 = null,
                _n31 = new _n2x.SlotItemEffectModel(),
                _n32 = false;
            if ([566, 145, 961, 498, 144, 469, 463, 468, 199, 489, 490, 464, 470, 198, 543, 567, 568, 497, 542, 563, 564, 587, 578, 569, 648, 651, 656, 649, 588, 667, 670, 915, 951, 955, 960, 975].indexOf(_n2z.ship_id) >= 0 && (_n32 = true), 0 == _n32) return _n31;
            var _n33 = _n2z.get_each_level_nums(286),
                _n34 = _n2z.get_slotnums(286);
            _n34 > 2 && (_n34 = 2), _n31.raig = 2 * _n34, _n31.kaih = 1 * _n34;
            var _n35 = _n33[10];
            if (1 == _n35 ? _n31.houg = _n31.houg + 1 : _n35 >= 2 && (_n31.houg = _n31.houg + 2), 30 == _n2z.ctype || 961 == _n2z.ship_id) {
                var _n36 = _n33[5] + _n33[6] + _n33[7] + _n33[8] + _n33[9] + _n33[10];
                1 == _n36 ? _n31.raig = _n31.raig + 1 : _n36 >= 2 && (_n31.raig = _n31.raig + 2);
            }
            return _n31;
        }, _n2r.getSlot286PersonalEffect2 = function(_n37) {
            var _n38 = null,
                _n39 = new _n2x.SlotItemEffectModel(),
                _n3a = false,
                _n3b = 0;
            if ('たけ' == _n37.yomi && (_n3a = true, _n3b = 1), 0 == _n3a) return _n39;
            var _n3c = _n37.get_each_level_nums(286),
                _n3d = 0;
            return _n3b > 0 && _n3c.forEach(function(_n3e, _n3f) {
                _n3f >= 7 && (_n3d += _n3e);
            }), 'たけ' == _n37.yomi && (_n39.raig += 7, _n39.kaih += 2, _n3d >= 1 && (_n39.raig += 2), _n3c[10] >= 1 && (_n39.raig += 2)), _n39;
        }, _n2r.getSlot286PersonalEffect3 = function(_n3g) {
            var _n3h = null,
                _n3i = new _n2x.SlotItemEffectModel(),
                _n3j = false,
                _n3k = new _n2x.SlotItemEffectModel(),
                _n3l = 0;
            if (662 != _n3g.ship_id && 663 != _n3g.ship_id && 668 != _n3g.ship_id || (_n3k.raig += 2, _n3j = true, _n3l = 1), 0 == _n3j) return _n3i;
            var _n3m = _n3g.get_slotnums(286);
            _n3i.add(_n3k.multiply(_n3m));
            for (var _n3n = 0, _n3o = 0, _n3p = _n3g.have_slot_ids(); _n3o < _n3p.length; _n3o++) {
                var _n3q = _n3p[_n3o],
                    _n3r = _n2y.default.model.slot.getMst(_n3q),
                    _n3s = _n3r.equipType;
                12 != _n3s && 13 != _n3s || (_n3r.sakuteki >= 5 && (_n3n += _n3g.get_slotnums(parseInt(_n3q))), _n3r.taiku >= 2 && _n3g.get_slotnums(parseInt(_n3q)));
            }
            return _n3n >= 1 && 1 == _n3l && (_n3i.raig += 3, _n3i.kaih += 2), _n3i;
        };
    },
    9234: (_n3t, _n3u, _n3v) => {
        'use strict';
        var _n3w = null;
        defineModule(_n3u);
        Object.defineProperty(_n3u, '__esModule', {
            'value': true
        }), _n3u.getSlot287PersonalEffect = void 0;
        var _n3x = _n3v(74496);
        _n3u.getSlot287PersonalEffect = function(_n3y) {
            var _n3z = null,
                _n40 = new _n3x.SlotItemEffectModel(),
                _n41 = new _n3x.SlotItemEffectModel(),
                _n42 = false;
            if (488 == _n3y.ship_id || 141 == _n3y.ship_id || 160 == _n3y.ship_id || 624 == _n3y.ship_id || 656 == _n3y.ship_id ? (_n41.tais = 1, _n41.kaih = 1, _n42 = true) : 662 != _n3y.ship_id && 961 != _n3y.ship_id || (_n41.tais = 3, _n42 = true), 0 == _n42) return _n40;
            var _n43 = _n3y.get_slotnums(287);
            return _n40 = _n41.multiply(_n43);
        };
    },
    30802: (_n44, _n45, _n46) => {
        'use strict';
        var _n47 = null;
        defineModule(_n45);
        Object.defineProperty(_n45, '__esModule', {
            'value': true
        }), _n45.getSlot288PersonalEffect = void 0;
        var _n48 = _n46(74496);
        _n45.getSlot288PersonalEffect = function(_n49) {
            var _n4a = null,
                _n4b = new _n48.SlotItemEffectModel(),
                _n4c = new _n48.SlotItemEffectModel(),
                _n4d = false;
            if (488 == _n49.ship_id || 141 == _n49.ship_id || 160 == _n49.ship_id || 656 == _n49.ship_id ? (_n4c.tais = 2, _n4c.kaih = 1, _n4d = true) : 624 == _n49.ship_id ? (_n4c.houg = 1, _n4c.tais = 3, _n4c.kaih = 2, _n4d = true) : 662 != _n49.ship_id && 961 != _n49.ship_id || (_n4c.tais = 4, _n4c.kaih = 1, _n4d = true), 0 == _n4d) return _n4b;
            var _n4e = _n49.get_slotnums(288);
            return _n4b = _n4c.multiply(_n4e);
        };
    },
    97002: function(_n4f, _n4g, _n4h) {
        'use strict';
        var _n4i = null;
        var _n4j = this && this.__importDefault || function(_n4k) {
            var _n4l = null;
            return _n4k && _n4k.__esModule ? _n4k : {
                'default': _n4k
            };
        };
        defineModule(_n4g);
        Object.defineProperty(_n4g, '__esModule', {
            'value': true
        }), _n4g.getSlot289PersonalEffect = void 0;
        var _n4m = _n4h(74496),
            _n4n = _n4j(_n4h(18622));
        _n4g.getSlot289PersonalEffect = function(_n4o) {
            var _n4p = null,
                _n4q = new _n4m.SlotItemEffectModel(),
                _n4r = {
                    151: 1,
                    593: 1,
                    954: 1,
                    591: 2,
                    149: 3,
                    150: 3,
                    592: 3,
                    152: 3
                },
                _n4s = 0,
                _n4t = new _n4m.SlotItemEffectModel();
            if (149 == _n4o.ship_id || 591 == _n4o.ship_id) _n4t.houg = 2, _n4t.tyku = 1, _n4s = 1;
            else {
                if (150 == _n4o.ship_id || 592 == _n4o.ship_id) _n4t.houg = 1;
                else {
                    if (152 == _n4o.ship_id) _n4t.houg = 1;
                    else {
                        if (151 != _n4o.ship_id && 593 != _n4o.ship_id && 954 != _n4o.ship_id) return _n4q;
                        _n4t.houg = 2, _n4t.tyku = 2, _n4t.kaih = 2, _n4s = 1;
                    }
                }
            }
            var _n4u = _n4o.get_slotnums(289);
            if (_n4q = _n4t.multiply(_n4u), _n4r[_n4o.ship_id]) {
                var _n4v = _n4o.get_each_level_nums(289),
                    _n4w = new Array();
                _n4v.forEach(function(_n4x, _n4y) {
                    var _n4z = null;
                    for (var _n50 = 1; _n50 <= _n4o.SLOT_LEVEL_MAX; _n50++) _n4y >= _n50 && (null == _n4w[_n50] && (_n4w[_n50] = 0), _n4w[_n50] += _n4x);
                });
                var _n51 = _n4r[_n4o.ship_id];
                1 == _n51 ? (_n4w[1] >= 1 && (_n4q.kaih += 1 * _n4w[1]), _n4w[3] >= 1 && (_n4q.tyku = _n4q.tyku + 1 * _n4w[3]), _n4w[5] >= 1 && (_n4q.houg = _n4q.houg + 1 * _n4w[5]), _n4w[7] >= 1 && (_n4q.kaih += 1 * _n4w[7]), _n4w[8] >= 1 && (_n4q.tyku += 1 * _n4w[8]), _n4w[9] >= 1 && (_n4q.houg += 1 * _n4w[9]), _n4w[10] >= 1 && (_n4q.kaih += 1 * _n4w[10])) : 2 == _n51 ? (_n4w[4] >= 1 && (_n4q.tyku += 1 * _n4w[4]), _n4w[6] >= 1 && (_n4q.kaih += 1 * _n4w[6]), _n4w[8] >= 1 && (_n4q.houg += 1 * _n4w[8]), _n4w[10] >= 1 && (_n4q.kaih += 1 * _n4w[10])) : 3 == _n51 && (_n4w[7] >= 1 && (_n4q.tyku += 1 * _n4w[7]), _n4w[9] >= 1 && (_n4q.houg += 1 * _n4w[9]), _n4w[10] >= 1 && (_n4q.kaih += 1 * _n4w[10]));
            }
            if (0 == _n4s) return _n4q;
            for (var _n52 = 0, _n53 = 0, _n54 = _n4o.have_slot_ids(); _n53 < _n54.length; _n53++) {
                var _n55 = _n54[_n53],
                    _n56 = _n4n.default.model.slot.getMst(_n55),
                    _n57 = _n56.equipType;
                (12 == _n57 || 13 == _n57) && _n56.sakuteki >= 5 && (_n52 += _n4o.get_slotnums(parseInt(_n55)));
            }
            return _n52 > 0 && (_n4q.houg += 2, _n4q.kaih += 2), _n4q;
        };
    },
    16748: function(_n58, _n59, _n5a) {
        'use strict';
        var _n5b = null;
        var _n5c = this && this.__importDefault || function(_n5d) {
            var _n5e = null;
            return _n5d && _n5d.__esModule ? _n5d : {
                'default': _n5d
            };
        };
        defineModule(_n59);
        Object.defineProperty(_n59, '__esModule', {
            'value': true
        }), _n59.getSlot290PersonalEffect = void 0;
        var _n5f = _n5a(74496),
            _n5g = _n5c(_n5a(18622));
        _n59.getSlot290PersonalEffect = function(_n5h) {
            var _n5i = null,
                _n5j = new _n5f.SlotItemEffectModel(),
                _n5k = 0,
                _n5l = new _n5f.SlotItemEffectModel();
            if (411 == _n5h.ship_id) _n5l.houg = 1;
            else {
                if (412 == _n5h.ship_id) _n5l.houg = 1;
                else {
                    if (82 == _n5h.ship_id) _n5l.houg = 2, _n5l.tyku = 2, _n5l.kaih = 1, _n5k = 1;
                    else {
                        if (553 == _n5h.ship_id) _n5l.houg = 3, _n5l.tyku = 2, _n5l.kaih = 1, _n5l.houm = 3, _n5k = 1;
                        else {
                            if (88 == _n5h.ship_id) _n5l.houg = 2, _n5l.tyku = 2, _n5l.kaih = 1, _n5k = 1;
                            else {
                                if (554 != _n5h.ship_id) return _n5j;
                                _n5l.houg = 3, _n5l.tyku = 2, _n5l.kaih = 2, _n5l.houm = 3, _n5k = 1;
                            }
                        }
                    }
                }
            }
            var _n5m = _n5h.get_slotnums(290);
            if (_n5j = _n5l.multiply(_n5m), 0 == _n5k) return _n5j;
            for (var _n5n = 0, _n5o = 0, _n5p = _n5h.have_slot_ids(); _n5o < _n5p.length; _n5o++) {
                var _n5q = _n5p[_n5o],
                    _n5r = _n5g.default.model.slot.getMst(_n5q),
                    _n5s = _n5r.equipType;
                (12 == _n5s || 13 == _n5s) && _n5r.taiku >= 2 && (_n5n += _n5h.get_slotnums(parseInt(_n5q)));
            }
            return _n5n > 0 && (_n5j.tyku += 2, _n5j.kaih += 3), _n5j;
        };
    },
    53618: (_n5t, _n5u, _n5v) => {
        'use strict';
        var _n5w = null;
        defineModule(_n5u);
        Object.defineProperty(_n5u, '__esModule', {
            'value': true
        }), _n5u.getSlot291PersonalEffect = void 0;
        var _n5x = _n5v(74496);
        _n5u.getSlot291PersonalEffect = function(_n5y) {
            var _n5z = null,
                _n60 = new _n5x.SlotItemEffectModel(),
                _n61 = new _n5x.SlotItemEffectModel();
            if (553 == _n5y.ship_id) _n61.houg = 6, _n61.kaih = 1;
            else {
                if (554 != _n5y.ship_id) return _n60;
                _n61.houg = 6, _n61.kaih = 1;
            }
            var _n62 = _n5y.get_slotnums(291);
            return _n60 = _n61.multiply(_n62);
        };
    },
    72573: (_n63, _n64, _n65) => {
        'use strict';
        var _n66 = null;
        defineModule(_n64);
        Object.defineProperty(_n64, '__esModule', {
            'value': true
        }), _n64.getSlot292PersonalEffect = void 0;
        var _n67 = _n65(74496);
        _n64.getSlot292PersonalEffect = function(_n68) {
            var _n69 = null,
                _n6a = new _n67.SlotItemEffectModel(),
                _n6b = new _n67.SlotItemEffectModel();
            if (553 == _n68.ship_id) _n6b.houg = 8, _n6b.kaih = 2, _n6b.tyku = 1;
            else {
                if (554 != _n68.ship_id) return _n6a;
                _n6b.houg = 8, _n6b.kaih = 2, _n6b.tyku = 1;
            }
            var _n6c = _n68.get_slotnums(292);
            return _n6a = _n6b.multiply(_n6c);
        };
    },
    8955: function(_n6d, _n6e, _n6f) {
        'use strict';
        var _n6g = null;
        var _n6h = this && this.__importDefault || function(_n6i) {
            var _n6j = null;
            return _n6i && _n6i.__esModule ? _n6i : {
                'default': _n6i
            };
        };
        defineModule(_n6e);
        Object.defineProperty(_n6e, '__esModule', {
            'value': true
        }), _n6e.getSlot293PersonalEffect = void 0;
        var _n6k = _n6f(74496),
            _n6l = _n6h(_n6f(18622));
        _n6e.getSlot293PersonalEffect = function(_n6m) {
            var _n6n = null,
                _n6o = new _n6k.SlotItemEffectModel(),
                _n6p = new _n6k.SlotItemEffectModel(),
                _n6q = 0;
            if (66 == _n6m.ctype || 28 == _n6m.ctype) _n6p.houg = 2, _n6p.tyku = 1, _n6p.kaih = 3, _n6q = 1;
            else {
                if (74 != _n6m.ctype && 77 != _n6m.ctype) return _n6o;
                _n6p.houg = 1, _n6p.tyku = 1, _n6p.kaih = 2, _n6q = 2;
            }
            var _n6r = _n6m.get_slotnums(293);
            _n6o = _n6p.multiply(_n6r);
            for (var _n6s = 0, _n6t = 0, _n6u = _n6m.have_slot_ids(); _n6t < _n6u.length; _n6t++) {
                var _n6v = _n6u[_n6t],
                    _n6w = _n6l.default.model.slot.getMst(_n6v),
                    _n6x = _n6w.equipType;
                (12 == _n6x || 13 == _n6x) && _n6w.sakuteki >= 5 && (_n6s += _n6m.get_slotnums(parseInt(_n6v)));
            }
            var _n6y = _n6m.get_slotnums(174);
            return 1 == _n6q ? (_n6s > 0 && (_n6o.houg += 2, _n6o.kaih += 3, _n6o.raig += 1), 1 == _n6y ? (_n6o.houg += 2, _n6o.raig += 4) : _n6y >= 2 && (_n6o.houg += 3, _n6o.raig += 7)) : 2 == _n6q && _n6s > 0 && (_n6o.houg += 2, _n6o.kaih += 3, _n6o.tais += 1), _n6o;
        };
    },
    98947: function(_n6z, _n70, _n71) {
        'use strict';
        var _n72 = null;
        var _n73 = this && this.__importDefault || function(_n74) {
            var _n75 = null;
            return _n74 && _n74.__esModule ? _n74 : {
                'default': _n74
            };
        };
        defineModule(_n70);
        Object.defineProperty(_n70, '__esModule', {
            'value': true
        }), _n70.getSlot294PersonalEffect = void 0;
        var _n76 = _n71(74496),
            _n77 = _n73(_n71(18622));
        _n70.getSlot294PersonalEffect = function(_n78) {
            var _n79 = null,
                _n7a = new _n76.SlotItemEffectModel(),
                _n7b = new _n76.SlotItemEffectModel(),
                _n7c = 0,
                _n7d = _n78.get_slotnums(294);
            if (12 != _n78.ctype && 1 != _n78.ctype && 5 != _n78.ctype) return _n7a;
            _n7b.houg = 1, 959 == _n78.ship_id && (_n7b.houg += 1, _n7d >= 2 && (_n7a.houg += 2), _n7d >= 3 && (_n7a.houg += 3), _n7c = 1), _n7a.add(_n7b.multiply(_n7d));
            for (var _n7e = 0, _n7f = 0, _n7g = _n78.have_slot_ids(); _n7f < _n7g.length; _n7f++) {
                var _n7h = _n7g[_n7f],
                    _n7i = _n77.default.model.slot.getMst(_n7h),
                    _n7j = _n7i.equipType;
                (12 == _n7j || 13 == _n7j) && _n7i.sakuteki >= 5 && (_n7e += _n78.get_slotnums(parseInt(_n7h)));
            }
            var _n7k = _n78.get_slotnums(13),
                _n7l = _n78.get_slotnums(125),
                _n7m = _n78.get_slotnums(285),
                _n7n = _n7k + _n7l + _n7m;
            if (_n7e > 0 && (_n7a.houg += 3, _n7a.kaih += 2, _n7a.raig += 1), 1 == _n7n ? (_n7a.houg += 1, _n7a.raig += 3) : _n7n >= 2 && (_n7a.houg += 2, _n7a.raig += 5), _n7m >= 1 && (_n7a.raig += 1), 0 == _n7c) return _n7a;
            var _n7o = _n78.get_each_level_nums(294),
                _n7p = [];
            return _n7c > 0 && _n7o.forEach(function(_n7q, _n7r) {
                var _n7s = null;
                for (var _n7t = 1; _n7t <= _n78.SLOT_LEVEL_MAX; _n7t++) null == _n7p[_n7t] && (_n7p[_n7t] = 0), _n7r >= _n7t && (_n7p[_n7t] += _n7q);
            }), 1 == _n7c && (_n7p[6] >= 1 && (_n7a.houm += 4 * _n7p[6]), _n7p[7] >= 1 && (_n7a.houg = _n7a.houg + 6 * _n7p[7]), _n7p[8] >= 1 && (_n7a.houg = _n7a.houg + 1 * _n7p[8]), _n7p[9] >= 1 && (_n7a.houg = _n7a.houg + 1 * _n7p[9]), _n7p[10] >= 1 && (_n7a.houg += 1 * _n7p[10])), _n7a;
        };
    },
    44726: function(_n7u, _n7v, _n7w) {
        'use strict';
        var _n7x = null;
        var _n7y = this && this.__importDefault || function(_n7z) {
            var _n80 = null;
            return _n7z && _n7z.__esModule ? _n7z : {
                'default': _n7z
            };
        };
        defineModule(_n7v);
        Object.defineProperty(_n7v, '__esModule', {
            'value': true
        }), _n7v.getSlot295PersonalEffect = void 0;
        var _n81 = _n7w(74496),
            _n82 = _n7y(_n7w(18622));
        _n7v.getSlot295PersonalEffect = function(_n83) {
            var _n84 = null,
                _n85 = new _n81.SlotItemEffectModel(),
                _n86 = new _n81.SlotItemEffectModel(),
                _n87 = _n83.get_slotnums(295);
            if (12 != _n83.ctype && 1 != _n83.ctype && 5 != _n83.ctype) return _n85;
            _n86.houg = 2, _n86.tyku = 2, 666 == _n83.ship_id ? (_n86.houg += 1, _n86.tyku += 1, _n86.tais += 1) : 959 == _n83.ship_id && (_n86.houg += 2, _n87 >= 2 && (_n85.houg += 2), _n87 >= 3 && (_n85.houg += 3)), _n85.add(_n86.multiply(_n87));
            for (var _n88 = 0, _n89 = 0, _n8a = 0, _n8b = _n83.have_slot_ids(); _n8a < _n8b.length; _n8a++) {
                var _n8c = _n8b[_n8a],
                    _n8d = _n82.default.model.slot.getMst(_n8c),
                    _n8e = _n8d.equipType;
                12 != _n8e && 13 != _n8e || (_n8d.sakuteki >= 5 && (_n88 += _n83.get_slotnums(parseInt(_n8c))), _n8d.taiku >= 2 && (_n89 += _n83.get_slotnums(parseInt(_n8c))));
            }
            var _n8f = _n83.get_slotnums(13),
                _n8g = _n83.get_slotnums(125),
                _n8h = _n83.get_slotnums(285),
                _n8i = _n8f + _n8g + _n8h;
            return _n88 > 0 && (_n85.houg += 3, _n85.kaih += 2, _n85.raig += 1), 1 == _n8i ? (_n85.houg += 1, _n85.raig += 3) : _n8i >= 2 && (_n85.houg += 2, _n85.raig += 5), _n8h >= 1 && (_n85.raig += 1), _n89 > 0 && (_n85.tyku += 6), _n85;
        };
    },
    93065: function(_n8j, _n8k, _n8l) {
        'use strict';
        var _n8m = null;
        var _n8n = this && this.__importDefault || function(_n8o) {
            var _n8p = null;
            return _n8o && _n8o.__esModule ? _n8o : {
                'default': _n8o
            };
        };
        defineModule(_n8k);
        Object.defineProperty(_n8k, '__esModule', {
            'value': true
        }), _n8k.getSlot296PersonalEffect = void 0;
        var _n8q = _n8l(74496),
            _n8r = _n8n(_n8l(18622));
        _n8k.getSlot296PersonalEffect = function(_n8s) {
            var _n8t = null,
                _n8u = new _n8q.SlotItemEffectModel(),
                _n8v = new _n8q.SlotItemEffectModel();
            1 != _n8s.ctype && 5 != _n8s.ctype && 10 != _n8s.ctype && 23 != _n8s.ctype || (_n8v.houg += 1), 10 != _n8s.ctype && 23 != _n8s.ctype || (_n8v.kaih += 1), 145 == _n8s.ship_id || 961 == _n8s.ship_id ? (_n8v.houg += 1, _n8v.tyku += 1) : 144 == _n8s.ship_id ? (_n8v.houg += 1, _n8v.raig += 1) : 469 == _n8s.ship_id || 588 == _n8s.ship_id || 667 == _n8s.ship_id || 587 == _n8s.ship_id || 242 == _n8s.ship_id ? _n8v.kaih += 1 : 497 == _n8s.ship_id ? (_n8v.houg += 1, _n8v.kaih += 1) : 244 == _n8s.ship_id ? _n8v.kaih += 1 : 498 == _n8s.ship_id || 975 == _n8s.ship_id ? (_n8v.tyku += 1, _n8v.kaih += 1) : 627 == _n8s.ship_id ? (_n8v.houg += 2, _n8v.raig += 1) : 903 != _n8s.ship_id && 908 != _n8s.ship_id || (_n8v.houg += 3);
            var _n8w = true;
            if (_n8v.exists() || (_n8w = false), 0 == _n8w) return _n8u;
            var _n8x = _n8s.get_slotnums(296);
            _n8u = _n8v.multiply(_n8x);
            var _n8y = 0;
            if (1 != _n8s.ctype && 5 != _n8s.ctype && 10 != _n8s.ctype || (_n8y = 1), 23 == _n8s.ctype && (_n8y = 2), 0 == _n8y) return _n8u;
            for (var _n8z = 0, _n90 = 0, _n91 = 0, _n92 = _n8s.have_slot_ids(); _n91 < _n92.length; _n91++) {
                var _n93 = _n92[_n91],
                    _n94 = _n8r.default.model.slot.getMst(_n93),
                    _n95 = _n94.equipType;
                12 != _n95 && 13 != _n95 || (_n94.sakuteki >= 5 && (_n8z += _n8s.get_slotnums(parseInt(_n93))), _n94.taiku >= 2 && (_n90 += _n8s.get_slotnums(parseInt(_n93))));
            }
            return _n8z > 0 && (1 == _n8y ? (_n8u.houg += 1, _n8u.kaih += 2, _n8u.raig += 2) : 2 == _n8y && (_n8u.houg += 1, _n8u.kaih += 2, _n8u.raig += 3)), _n8s.get_slotnums(285) + _n8s.get_slotnums(125) >= 1 && 1 == _n8y && (_n8u.houg += 1, _n8u.raig += 3), _n8s.get_slotnums(15) + _n8s.get_slotnums(286) >= 1 && 2 == _n8y && (_n8u.houg += 1, _n8u.raig += 3), _n90 > 0 && (1 == _n8y ? _n8u.tyku += 5 : 2 == _n8y && (_n8u.tyku += 6)), _n8u;
        };
    },
    85767: (_n96, _n97, _n98) => {
        'use strict';
        var _n99 = null;
        defineModule(_n97);
        Object.defineProperty(_n97, '__esModule', {
            'value': true
        }), _n97.getSlot297PersonalEffect = void 0;
        var _n9a = _n98(74496);
        _n97.getSlot297PersonalEffect = function(_n9b) {
            var _n9c = null,
                _n9d = new _n9a.SlotItemEffectModel(),
                _n9e = new _n9a.SlotItemEffectModel();
            if (12 == _n9b.ctype) _n9e.kaih = 2;
            else {
                if (1 != _n9b.ctype && 5 != _n9b.ctype) return _n9d;
                _n9e.kaih = 1;
            }
            var _n9f = _n9b.get_slotnums(297);
            return _n9d = _n9e.multiply(_n9f);
        };
    },
    38314: (_n9g, _n9h, _n9i) => {
        'use strict';
        var _n9j = null;
        defineModule(_n9h);
        Object.defineProperty(_n9h, '__esModule', {
            'value': true
        }), _n9h.getSlot301PersonalEffect = void 0;
        var _n9k = _n9i(74496);
        _n9h.getSlot301PersonalEffect = function(_n9l) {
            var _n9m = null,
                _n9n = new _n9k.SlotItemEffectModel(),
                _n9o = new _n9k.SlotItemEffectModel();
            67 != _n9l.ctype && 78 != _n9l.ctype && 82 != _n9l.ctype && 88 != _n9l.ctype && 108 != _n9l.ctype && 112 != _n9l.ctype || (_n9o.tyku += 2, _n9o.kaih += 1, _n9o.souk += 1);
            var _n9p = true;
            if (_n9o.exists() || (_n9p = false), 0 == _n9p) return _n9n;
            var _n9q = _n9l.get_slotnums(301);
            return _n9n = _n9o.multiply(_n9q);
        };
    },
    59747: (_n9r, _n9s, _n9t) => {
        'use strict';
        var _n9u = null;
        defineModule(_n9s);
        Object.defineProperty(_n9s, '__esModule', {
            'value': true
        }), _n9s.getSlot302PersonalEffect = void 0;
        var _n9v = _n9t(74496);
        _n9s.getSlot302PersonalEffect = function(_n9w) {
            var _n9x = null,
                _n9y = new _n9v.SlotItemEffectModel(),
                _n9z = new _n9v.SlotItemEffectModel();
            if (76 == _n9w.ctype && (_n9z.tais = 1, _n9z.kaih = 1), !_n9z.exists()) return _n9y;
            var _na0 = _n9w.get_slotnums(302);
            return _n9y = _n9z.multiply(_na0);
        };
    },
    40649: (_na1, _na2, _na3) => {
        'use strict';
        var _na4 = null;
        defineModule(_na2);
        Object.defineProperty(_na2, '__esModule', {
            'value': true
        }), _na2.getSlot303PersonalEffect = void 0;
        var _na5 = _na3(74496);
        _na2.getSlot303PersonalEffect = function(_na6) {
            var _na7 = null,
                _na8 = new _na5.SlotItemEffectModel(),
                _na9 = new _na5.SlotItemEffectModel();
            if (16 == _na6.ctype || 4 == _na6.ctype || 20 == _na6.ctype || 41 == _na6.ctype ? (_na9.houg = 1, _na9.tyku = 1) : 89 == _na6.ctype && (_na9.houg = 1, _na9.tyku = 2, _na9.kaih = 1), !_na9.exists()) return _na8;
            var _naa = _na6.get_slotnums(303);
            return _na8 = _na9.multiply(_naa);
        };
    },
    13533: (_nab, _nac, _nad) => {
        'use strict';
        var _nae = null;
        defineModule(_nac);
        Object.defineProperty(_nac, '__esModule', {
            'value': true
        }), _nac.getSlot304PersonalEffect = void 0;
        var _naf = _nad(74496);
        _nac.getSlot304PersonalEffect = function(_nag) {
            var _nah = null,
                _nai = new _naf.SlotItemEffectModel(),
                _naj = new _naf.SlotItemEffectModel();
            if (16 == _nag.ctype || 4 == _nag.ctype || 20 == _nag.ctype || 41 == _nag.ctype ? (_naj.houg = 1, _naj.tais = 1, _naj.kaih = 1) : 89 == _nag.ctype && (_naj.houg = 1, _naj.tais = 2, _naj.kaih = 2), !_naj.exists()) return _nai;
            var _nak = _nag.get_slotnums(304);
            return _nai = _naj.multiply(_nak);
        };
    },
    99791: (_nal, _nam, _nan) => {
        'use strict';
        var _nao = null;
        defineModule(_nam);
        Object.defineProperty(_nam, '__esModule', {
            'value': true
        }), _nam.getSlot305More320mmGunPersonalEffect = void 0;
        var _nap = _nan(74496);
        _nam.getSlot305More320mmGunPersonalEffect = function(_naq) {
            var _nar = null,
                _nas = new _nap.SlotItemEffectModel(),
                _nat = _naq.get_slotnums(426),
                _nau = _naq.get_slotnums(427),
                _nav = _naq.get_slotnums(428),
                _naw = _naq.get_slotnums(429),
                _nax = _nat + _nau + _nav + _naw;
            return 113 == _naq.ctype ? (_nas.houg = _nas.houg + 2 * _nax, _nat >= 1 && (_nas.houg = _nas.houg + 1 * _nat, _nas.kaih = _nas.kaih + 1 * _nat, (_nat >= 2 || _nau >= 1) && (_nas.houg = _nas.houg + 1, _nas.kaih = _nas.kaih + 1)), _nav >= 1 && (_nas.houg = _nas.houg + 1 * _nav, _nas.kaih = _nas.kaih + 1 * _nav, (_nav >= 2 || _naw >= 1) && (_nas.houg = _nas.houg + 2, _nas.kaih = _nas.kaih + 1))) : 73 == _naq.ctype ? (_nas.houg = _nas.houg + 1 * _nax, _nat >= 1 && (_nas.houg = _nas.houg + 1 * _nat, _nas.kaih = _nas.kaih + 1 * _nat, (_nat >= 2 || _nau >= 1) && (_nas.houg = _nas.houg + 1)), _nav >= 1 && (_nas.houg = _nas.houg + 1 * _nav, _nas.kaih = _nas.kaih + 1 * _nav, (_nav >= 2 || _naw >= 1) && (_nas.houg = _nas.houg + 1))) : 58 == _naq.ctype && _nav >= 1 && (_nas.houg = _nas.houg + 1 * _nav, _nas.kaih = _nas.kaih + 2 * _nav, (_nav >= 2 || _naw >= 1) && (_nas.houg = _nas.houg + 2, _nas.kaih = _nas.kaih + 1)), _nas;
        };
    },
    12138: (_nay, _naz, _nb0) => {
        'use strict';
        var _nb1 = null;
        defineModule(_naz);
        Object.defineProperty(_naz, '__esModule', {
            'value': true
        }), _naz.getSlot305_And_306_PersonalEffect = void 0;
        var _nb2 = _nb0(74496);
        _naz.getSlot305_And_306_PersonalEffect = function(_nb3) {
            var _nb4 = null,
                _nb5 = new _nb2.SlotItemEffectModel(),
                _nb6 = new _nb2.SlotItemEffectModel();
            if (76 == _nb3.ctype && (_nb6.tais = 1, _nb6.kaih = 1), 'しんよう' == _nb3.yomi ? (_nb6.tais += 2, _nb6.kaih += 1) : 'グラーフ・ツェッペリン' != _nb3.yomi && 'アクィラ' != _nb3.yomi || (_nb6.houg = 1, _nb6.kaih = 1), !_nb6.exists()) return _nb5;
            var _nb7 = _nb3.get_slotnums(305) + _nb3.get_slotnums(306);
            return _nb5 = _nb6.multiply(_nb7);
        };
    },
    30042: (_nb8, _nb9, _nba) => {
        'use strict';
        var _nbb = null;
        defineModule(_nb9);
        Object.defineProperty(_nb9, '__esModule', {
            'value': true
        }), _nb9.getSlot307PersonalEffect = void 0;
        var _nbc = _nba(74496);
        _nb9.getSlot307PersonalEffect = function(_nbd) {
            var _nbe = null,
                _nbf = new _nbc.SlotItemEffectModel(),
                _nbg = new _nbc.SlotItemEffectModel();
            if ('アメリカ' == _nbd.getCountryName() && (_nbg.houg = 1, _nbg.tyku = 1, _nbg.kaih = 1), !_nbg.exists()) return _nbf;
            var _nbh = _nbd.get_slotnums(307);
            return _nbf = _nbg.multiply(_nbh);
        };
    },
    33623: (_nbi, _nbj, _nbk) => {
        'use strict';
        var _nbl = null;
        defineModule(_nbj);
        Object.defineProperty(_nbj, '__esModule', {
            'value': true
        }), _nbj.getSlot308PersonalEffect = void 0;
        var _nbm = _nbk(74496);
        _nbj.getSlot308PersonalEffect = function(_nbn) {
            var _nbo = null,
                _nbp = new _nbm.SlotItemEffectModel(),
                _nbq = new _nbm.SlotItemEffectModel();
            if ('アメリカ' == _nbn.getCountryName() && (_nbq.houg = 1, _nbq.tyku = 1, _nbq.kaih = 1), 2 == _nbn.stype ? _nbq.houg += 1 : 1 == _nbn.stype && (_nbq.tyku += 1, _nbq.kaih += 1), 651 != _nbn.ship_id && 656 != _nbn.ship_id || (_nbq.houg += 1, _nbq.tyku += 1, _nbq.kaih += 1), !_nbq.exists()) return _nbp;
            var _nbr = _nbn.get_slotnums(308);
            return _nbp = _nbq.multiply(_nbr);
        };
    },
    17732: (_nbs, _nbt, _nbu) => {
        'use strict';
        var _nbv = null;
        defineModule(_nbt);
        Object.defineProperty(_nbt, '__esModule', {
            'value': true
        }), _nbt.getSlot30_410PersonalEffect = void 0;
        var _nbw = _nbu(74496);
        _nbt.getSlot30_410PersonalEffect = function(_nbx) {
            var _nby = null,
                _nbz = new _nbw.SlotItemEffectModel();
            return 73 != _nbx.ship_id && 501 != _nbx.ship_id && 506 != _nbx.ship_id && 502 != _nbx.ship_id && 507 != _nbx.ship_id || (_nbz.tyku += 3, _nbz.kaih += 2, _nbz.saku += 2, _nbx.get_slotnums(410) >= 1 && (_nbz.tyku += 2, _nbz.kaih += 2, _nbz.houg += 1, _nbz.souk += 1)), 54 == _nbx.ctype && (_nbz.tyku += 3, _nbz.kaih += 2, _nbz.saku += 2, _nbx.get_slotnums(410) >= 1 && (_nbz.tyku += 2, _nbz.kaih += 2, _nbz.houg += 1, _nbz.souk += 1)), _nbz;
        };
    },
    85630: function(_nc0, _nc1, _nc2) {
        'use strict';
        var _nc3 = null;
        var _nc4 = this && this.__importDefault || function(_nc5) {
            var _nc6 = null;
            return _nc5 && _nc5.__esModule ? _nc5 : {
                'default': _nc5
            };
        };
        defineModule(_nc1);
        Object.defineProperty(_nc1, '__esModule', {
            'value': true
        }), _nc1.getSlot310PersonalEffect = void 0;
        var _nc7 = _nc2(74496),
            _nc8 = _nc4(_nc2(18622));
        _nc1.getSlot310PersonalEffect = function(_nc9) {
            var _nca = null,
                _ncb = new _nc7.SlotItemEffectModel(),
                _ncc = new _nc7.SlotItemEffectModel(),
                _ncd = new _nc7.SlotItemEffectModel();
            34 == _nc9.ctype ? (_ncc.houg += 2, _ncc.tyku += 1, _ncc.kaih += 1, _ncd.houg += 2) : 56 == _nc9.ctype ? (_ncc.houg += 2, _ncc.kaih += 1, _ncd.houg += 2, _ncd.kaih += 2) : 90 == _nc9.ctype && (_ncc.houg += 3, _ncc.raig += 2, _ncc.tyku += 1, _ncc.kaih += 1, _ncd.houg += 1, _ncd.raig += 1);
            var _nce = new _nc7.SlotItemEffectModel(),
                _ncf = new _nc7.SlotItemEffectModel();
            622 != _nc9.ship_id && 623 != _nc9.ship_id && 624 != _nc9.ship_id || (_ncc.houg += 2, _ncc.kaih += 1, _ncc.tais += 1, _nce.houg = 1, _nce.raig = 1, _ncf.houg = 3, _ncf.kaih = 2, _ncf.raig = 2);
            var _ncg = true;
            if (_ncc.exists() || (_ncg = false), 0 == _ncg) return _ncb;
            var _nch = _nc9.get_slotnums(310) + _nc9.get_slotnums(518);
            _ncb = _ncc.multiply(_nch);
            for (var _nci = 0, _ncj = 0, _nck = 0, _ncl = [310, 518]; _nck < _ncl.length; _nck++) {
                var _ncm = _ncl[_nck],
                    _ncn = _nc9.have_slots_dict[_ncm];
                if (null != _ncn)
                    for (var _nco = 0, _ncp = _ncn; _nco < _ncp.length; _nco++) {
                        var _ncq = _ncp[_nco];
                        null != _ncq && (_ncq.level >= 7 && _nci++, _ncq.level >= 10 && _ncj++);
                    }
            }
            if (_nce.exists() && _nci > 0 && _ncb.add(_nce.multiply(_nci)), _ncd.exists() && _ncj > 0 && _ncb.add(_ncd.multiply(_ncj)), _ncf.exists()) {
                for (var _ncr = 0, _ncs = 0, _nct = _nc9.have_slot_ids(); _ncs < _nct.length; _ncs++) {
                    var _ncu = _nct[_ncs],
                        _ncv = _nc8.default.model.slot.getMst(_ncu),
                        _ncw = _ncv.equipType;
                    (12 == _ncw || 13 == _ncw) && _ncv.sakuteki >= 5 && (_ncr += _nc9.get_slotnums(parseInt(_ncu)));
                }
                _ncr > 0 && _ncb.add(_ncf);
            }
            return _ncb;
        };
    },
    88736: (_ncx, _ncy, _ncz) => {
        'use strict';
        var _nd0 = null;
        defineModule(_ncy);
        Object.defineProperty(_ncy, '__esModule', {
            'value': true
        }), _ncy.getSlot313PersonalEffect = void 0;
        var _nd1 = _ncz(74496);
        _ncy.getSlot313PersonalEffect = function(_nd2) {
            var _nd3 = null,
                _nd4 = new _nd1.SlotItemEffectModel(),
                _nd5 = new _nd1.SlotItemEffectModel();
            87 != _nd2.ctype && 91 != _nd2.ctype || (_nd5.houg += 2, _nd5.tyku += 2, _nd5.kaih += 1, _nd5.souk += 1), 651 != _nd2.ship_id && 656 != _nd2.ship_id || (_nd5.houg += 2, _nd5.tyku += 2, _nd5.kaih += 1, _nd5.souk += 1);
            var _nd6 = true;
            if (_nd5.exists() || (_nd6 = false), 0 == _nd6) return _nd4;
            var _nd7 = _nd2.get_slotnums(313);
            return _nd4 = _nd5.multiply(_nd7);
        };
    },
    49341: (_nd8, _nd9, _nda) => {
        'use strict';
        var _ndb = null;
        defineModule(_nd9);
        Object.defineProperty(_nd9, '__esModule', {
            'value': true
        }), _nd9.getSlot314PersonalEffect = void 0;
        var _ndc = _nda(74496);
        _nd9.getSlot314PersonalEffect = function(_ndd) {
            var _nde = null,
                _ndf = new _ndc.SlotItemEffectModel(),
                _ndg = new _ndc.SlotItemEffectModel();
            87 != _ndd.ctype && 91 != _ndd.ctype || (_ndg.houg += 1, _ndg.raig += 3);
            var _ndh = true;
            if (_ndg.exists() || (_ndh = false), 0 == _ndh) return _ndf;
            var _ndi = _ndd.get_slotnums(314);
            return _ndf = _ndg.multiply(_ndi);
        };
    },
    74306: (_ndj, _ndk, _ndl) => {
        'use strict';
        var _ndm = null;
        defineModule(_ndk);
        Object.defineProperty(_ndk, '__esModule', {
            'value': true
        }), _ndk.getSlot315PersonalEffect = void 0;
        var _ndn = _ndl(74496);
        _ndk.getSlot315PersonalEffect = function(_ndo) {
            var _ndp = null,
                _ndq = new _ndn.SlotItemEffectModel(),
                _ndr = new _ndn.SlotItemEffectModel();
            'アメリカ' == _ndo.getCountryName() && (_ndr.houg += 2, _ndr.kaih += 3, _ndr.saku += 4), 87 != _ndo.ctype && 91 != _ndo.ctype || (_ndr.houg += 1, _ndq.leng += 1), 651 != _ndo.ship_id && 656 != _ndo.ship_id || (_ndq.houg += 2, _ndq.kaih += 2, _ndq.saku += 3, _ndq.leng += 1);
            var _nds = true;
            if (_ndr.exists() || (_nds = false), 0 == _nds) return _ndq;
            var _ndt = _ndo.get_slotnums(315);
            return _ndq.add(_ndr.multiply(_ndt)), _ndq;
        };
    },
    83898: (_ndu, _ndv, _ndw) => {
        'use strict';
        var _ndx = null;
        defineModule(_ndv);
        Object.defineProperty(_ndv, '__esModule', {
            'value': true
        }), _ndv.getSlot316PersonalEffect = void 0;
        var _ndy = _ndw(74496);
        _ndv.getSlot316PersonalEffect = function(_ndz) {
            var _ne0 = null,
                _ne1 = new _ndy.SlotItemEffectModel(),
                _ne2 = new _ndy.SlotItemEffectModel();
            if (68 == _ndz.ctype) {
                if (_ne2.houg += 4, _ne2.tyku += 1, _ne2.kaih += 1, !_ne2.exists()) return _ne1;
                var _ne3 = _ndz.get_slotnums(316);
                _ne1 = _ne2.multiply(_ne3);
            }
            return _ne1;
        };
    },
    71873: (_ne4, _ne5, _ne6) => {
        'use strict';
        var _ne7 = null;
        defineModule(_ne5);
        Object.defineProperty(_ne5, '__esModule', {
            'value': true
        }), _ne5.getSlot317PersonalEffect = void 0;
        var _ne8 = _ne6(74496);
        _ne5.getSlot317PersonalEffect = function(_ne9) {
            var _nea = null,
                _neb = new _ne8.SlotItemEffectModel(),
                _nec = new _ne8.SlotItemEffectModel(),
                _ned = 0,
                _nee = false;
            if (6 == _ne9.ctype ? (_nec.houg += 2, _nec.tyku += 1, _ned = 1, _nee = true) : 2 == _ne9.ctype && (_nec.houg += 1, _nec.tyku += 1, _nec.kaih += 1, _ned = 2, _nee = true), 149 == _ne9.ship_id || 591 == _ne9.ship_id || 592 == _ne9.ship_id ? (_nec.houg += 2, _nec.tyku += 2, _nee = true) : 150 == _ne9.ship_id ? (_nec.houg += 1, _nec.tyku += 1, _nee = true) : 151 == _ne9.ship_id ? (_nec.houg += 1, _nec.tyku += 1, _nec.kaih += 1, _nee = true) : 593 == _ne9.ship_id ? (_nec.houg += 1, _nec.tyku += 3, _nec.kaih += 2, _nee = true) : 954 == _ne9.ship_id ? (_nec.houg += 2, _nec.tyku += 2, _nec.kaih += 1, _nee = true) : 152 == _ne9.ship_id ? (_nec.houg += 2, _nec.tyku += 1, _nee = true) : 541 == _ne9.ship_id ? (_nec.houg += 1, _nec.tyku += 2, _nee = true) : 573 == _ne9.ship_id && (_nec.houg += 2, _nec.tyku += 2, _nec.kaih += 1, _nee = true), 0 == _nee) return _neb;
            if (_neb.add(_nec), 0 == _ned) return _neb;
            var _nef = _ne9.get_each_level_nums(317),
                _neg = [];
            return _ned > 0 && _nef.forEach(function(_neh, _nei) {
                var _nej = null;
                for (var _nek = 1; _nek <= _ne9.SLOT_LEVEL_MAX; _nek++) null == _neg[_nek] && (_neg[_nek] = 0), _nei >= _nek && (_neg[_nek] += _neh);
            }), 1 == _ned ? _neg[8] >= 1 && (_neb.houm += 1) : 2 == _ned && _nef[10] >= 1 && (_neb.houm += 1), _neb;
        };
    },
    53122: function(_nel, _nem, _nen) {
        'use strict';
        var _neo = null;
        var _nep = this && this.__importDefault || function(_neq) {
            var _ner = null;
            return _neq && _neq.__esModule ? _neq : {
                'default': _neq
            };
        };
        defineModule(_nem);
        Object.defineProperty(_nem, '__esModule', {
            'value': true
        }), _nem.getSlot318PersonalEffect = void 0;
        var _nes = _nen(74496),
            _net = _nep(_nen(18622));
        _nem.getSlot318PersonalEffect = function(_neu) {
            var _nev = null,
                _new = new _nes.SlotItemEffectModel(),
                _nex = new _nes.SlotItemEffectModel(),
                _ney = new _nes.SlotItemEffectModel(),
                _nez = new _nes.SlotItemEffectModel();
            if (411 == _neu.ship_id || 412 == _neu.ship_id ? _nex.houg += 1 : 82 == _neu.ship_id ? (_nex.houg += 2, _nex.tyku += 2, _nex.kaih += 2, _nez.tyku = 2, _nez.kaih = 3, _nez.houm = 1) : 553 == _neu.ship_id ? (_nex.houg += 2, _nex.tyku += 2, _nex.kaih += 2, _nex.houm += 3, _nez.tyku = 2, _nez.kaih = 3, _nez.houm = 1, _ney.kaih = 2, _ney.souk = 1) : 88 == _neu.ship_id ? (_nex.houg += 2, _nex.tyku += 2, _nex.kaih += 2, _nez.tyku = 2, _nez.kaih = 3, _nez.houm = 1) : 541 == _neu.ship_id || 573 == _neu.ship_id ? (_nex.houg += 3, _nex.tyku += 2, _nex.kaih += 1, _nex.houm += 2, _ney.houg = 2, _ney.kaih = 2, _ney.souk = 1, _ney.houm = 1) : 554 == _neu.ship_id && (_nex.houg += 3, _nex.tyku += 2, _nex.kaih += 2, _nex.houm += 3, _nez.tyku = 2, _nez.kaih = 3, _nez.houm = 1, _ney.houg = 1, _ney.kaih = 2, _ney.souk = 1, _ney.houm = 1), !_nex.exists()) return _new;
            var _nf0 = _neu.get_slotnums(318);
            if (_new = _nex.multiply(_nf0), !_ney.exists() && !_nez.exists()) return _new;
            for (var _nf1 = 0, _nf2 = 0, _nf3 = _neu.have_slot_ids(); _nf2 < _nf3.length; _nf2++) {
                var _nf4 = _nf3[_nf2],
                    _nf5 = _net.default.model.slot.getMst(_nf4),
                    _nf6 = _nf5.equipType;
                (12 == _nf6 || 13 == _nf6) && _nf5.taiku >= 2 && (_nf1 += _neu.get_slotnums(parseInt(_nf4)));
            }
            var _nf7 = _neu.get_slotnums(290);
            return _nez.exists() && _nf1 > 0 && 0 == _nf7 && _new.add(_nez), _ney.exists() && _nf7 >= 1 && _new.add(_ney), _new;
        };
    },
    51063: (_nf8, _nf9, _nfa) => {
        'use strict';
        var _nfb = null;
        defineModule(_nf9);
        Object.defineProperty(_nf9, '__esModule', {
            'value': true
        }), _nf9.getSlot319PersonalEffect = void 0;
        var _nfc = _nfa(74496);
        _nf9.getSlot319PersonalEffect = function(_nfd) {
            var _nfe = null,
                _nff = new _nfc.SlotItemEffectModel(),
                _nfg = new _nfc.SlotItemEffectModel();
            if (554 != _nfd.ship_id && 553 != _nfd.ship_id || (_nfg.houg = 7, _nfg.tyku = 3, _nfg.kaih = 2), !_nfg.exists()) return _nff;
            var _nfh = _nfd.get_slotnums(319);
            return _nff = _nfg.multiply(_nfh);
        };
    },
    91491: (_nfi, _nfj, _nfk) => {
        'use strict';
        var _nfl = null;
        defineModule(_nfj);
        Object.defineProperty(_nfj, '__esModule', {
            'value': true
        }), _nfj.getSlot320PersonalEffect = void 0;
        var _nfm = _nfk(74496);
        _nfj.getSlot320PersonalEffect = function(_nfn) {
            var _nfo = null,
                _nfp = new _nfm.SlotItemEffectModel(),
                _nfq = new _nfm.SlotItemEffectModel();
            if (553 == _nfn.ship_id) _nfq.houg = 2;
            else {
                if (554 == _nfn.ship_id) _nfq.houg = 4;
                else {
                    if (196 == _nfn.ship_id) _nfq.houg = 3;
                    else {
                        if (197 == _nfn.ship_id) _nfq.houg = 3;
                        else {
                            if (508 == _nfn.ship_id) _nfq.houg = 4;
                            else {
                                if (509 != _nfn.ship_id) return _nfp;
                                _nfq.houg = 4;
                            }
                        }
                    }
                }
            }
            var _nfr = _nfn.get_slotnums(320);
            return _nfp = _nfq.multiply(_nfr);
        };
    },
    85495: (_nfs, _nft, _nfu) => {
        'use strict';
        var _nfv = null;
        defineModule(_nft);
        Object.defineProperty(_nft, '__esModule', {
            'value': true
        }), _nft.getSlot322PersonalEffect = void 0;
        var _nfw = _nfu(74496);
        _nft.getSlot322PersonalEffect = function(_nfx) {
            var _nfy = null,
                _nfz = new _nfw.SlotItemEffectModel(),
                _ng0 = new _nfw.SlotItemEffectModel();
            if (554 != _nfx.ship_id && 553 != _nfx.ship_id || (_ng0.houg = 5, _ng0.tyku = 2, _ng0.kaih = 2, _ng0.tais = 1), !_ng0.exists()) return _nfz;
            var _ng1 = _nfx.get_slotnums(322);
            return _nfz = _ng0.multiply(_ng1);
        };
    },
    65365: (_ng2, _ng3, _ng4) => {
        'use strict';
        var _ng5 = null;
        defineModule(_ng3);
        Object.defineProperty(_ng3, '__esModule', {
            'value': true
        }), _ng3.getSlot323PersonalEffect = void 0;
        var _ng6 = _ng4(74496);
        _ng3.getSlot323PersonalEffect = function(_ng7) {
            var _ng8 = null,
                _ng9 = new _ng6.SlotItemEffectModel(),
                _nga = new _ng6.SlotItemEffectModel();
            if (554 != _ng7.ship_id && 553 != _ng7.ship_id || (_nga.houg = 6, _nga.tyku = 3, _nga.kaih = 3, _nga.tais = 2), !_nga.exists()) return _ng9;
            var _ngb = _ng7.get_slotnums(323);
            return _ng9 = _nga.multiply(_ngb);
        };
    },
    98164: (_ngc, _ngd, _nge) => {
        'use strict';
        var _ngf = null;
        defineModule(_ngd);
        Object.defineProperty(_ngd, '__esModule', {
            'value': true
        }), _ngd.getSlot324And325PersonalEffect = void 0;
        var _ngg = _nge(74496);
        _ngd.getSlot324And325PersonalEffect = function(_ngh) {
            var _ngi = null,
                _ngj = new _ngg.SlotItemEffectModel(),
                _ngk = new _ngg.SlotItemEffectModel();
            if (554 == _ngh.ship_id || 646 == _ngh.ship_id ? (_ngk.houg = 2, _ngk.tais = 3, _ngk.kaih = 1) : 553 == _ngh.ship_id && (_ngk.houg = 1, _ngk.tais = 2, _ngk.kaih = 1), !_ngk.exists()) return _ngj;
            var _ngl = _ngh.get_slotnums(324) + _ngh.get_slotnums(325);
            return _ngj = _ngk.multiply(_ngl);
        };
    },
    38114: (_ngm, _ngn, _ngo) => {
        'use strict';
        var _ngp = null;
        defineModule(_ngn);
        Object.defineProperty(_ngn, '__esModule', {
            'value': true
        }), _ngn.getSlot326PersonalEffect = void 0;
        var _ngq = _ngo(74496);
        _ngn.getSlot326PersonalEffect = function(_ngr) {
            var _ngs = null,
                _ngt = new _ngq.SlotItemEffectModel(),
                _ngu = new _ngq.SlotItemEffectModel();
            if (646 == _ngr.ship_id ? (_ngu.houg = 3, _ngu.tais = 5, _ngu.kaih = 3) : 554 == _ngr.ship_id ? (_ngu.houg = 3, _ngu.tais = 4, _ngu.kaih = 2) : 553 == _ngr.ship_id && (_ngu.houg = 1, _ngu.tais = 3, _ngu.kaih = 1), !_ngu.exists()) return _ngt;
            var _ngv = _ngr.get_slotnums(326);
            return _ngt = _ngu.multiply(_ngv);
        };
    },
    21003: (_ngw, _ngx, _ngy) => {
        'use strict';
        var _ngz = null;
        defineModule(_ngx);
        Object.defineProperty(_ngx, '__esModule', {
            'value': true
        }), _ngx.getSlot327PersonalEffect = void 0;
        var _nh0 = _ngy(74496);
        _ngx.getSlot327PersonalEffect = function(_nh1) {
            var _nh2 = null,
                _nh3 = new _nh0.SlotItemEffectModel(),
                _nh4 = new _nh0.SlotItemEffectModel();
            if (646 == _nh1.ship_id ? (_nh4.houg = 5, _nh4.tais = 6, _nh4.kaih = 4) : 554 == _nh1.ship_id ? (_nh4.houg = 4, _nh4.tais = 5, _nh4.kaih = 2) : 553 == _nh1.ship_id && (_nh4.houg = 2, _nh4.tais = 4, _nh4.kaih = 1), !_nh4.exists()) return _nh3;
            var _nh5 = _nh1.get_slotnums(327);
            return _nh3 = _nh4.multiply(_nh5);
        };
    },
    77010: (_nh6, _nh7, _nh8) => {
        'use strict';
        var _nh9 = null;
        defineModule(_nh7);
        Object.defineProperty(_nh7, '__esModule', {
            'value': true
        }), _nh7.getSlot328PersonalEffect = void 0;
        var _nha = _nh8(74496);
        _nh7.getSlot328PersonalEffect = function(_nhb) {
            var _nhc = null,
                _nhd = new _nha.SlotItemEffectModel(),
                _nhe = new _nha.SlotItemEffectModel();
            if ('こんごう' == _nhb.yomi ? (_nhe.houg = 1, _nhe.kaih = 1, 209 == _nhb.ship_id || 149 == _nhb.ship_id ? _nhe.houg += 1 : 591 == _nhb.ship_id && (_nhe.houg += 2, _nhe.raig += 1)) : 'ひえい' == _nhb.yomi ? (_nhe.houg = 1, _nhe.kaih = 1, 210 == _nhb.ship_id || 150 == _nhb.ship_id ? _nhe.houg += 1 : 592 == _nhb.ship_id && (_nhe.houg += 2, _nhe.tyku += 1)) : 'はるな' == _nhb.yomi ? (_nhe.houg = 1, _nhe.kaih = 1, 211 == _nhb.ship_id || 151 == _nhb.ship_id ? _nhe.houg += 1 : 593 == _nhb.ship_id ? (_nhe.houg += 1, _nhe.tyku += 2) : 954 == _nhb.ship_id && (_nhe.houg += 2, _nhe.tyku += 1)) : 'きりしま' == _nhb.yomi ? (_nhe.houg = 1, _nhe.kaih = 1, 212 != _nhb.ship_id && 152 != _nhb.ship_id || (_nhe.houg += 1)) : ('ふそう' == _nhb.yomi || 'やましろ' == _nhb.yomi || 'いせ' == _nhb.yomi || 'ひゅうが' == _nhb.yomi) && (_nhe.houg = 1), !_nhe.exists()) return _nhd;
            var _nhf = _nhb.get_slotnums(328);
            return _nhd = _nhe.multiply(_nhf);
        };
    },
    39126: (_nhg, _nhh, _nhi) => {
        'use strict';
        var _nhj = null;
        defineModule(_nhh);
        Object.defineProperty(_nhh, '__esModule', {
            'value': true
        }), _nhh.getSlot329PersonalEffect = void 0;
        var _nhk = _nhi(74496);
        _nhh.getSlot329PersonalEffect = function(_nhl) {
            var _nhm = null,
                _nhn = new _nhk.SlotItemEffectModel(),
                _nho = new _nhk.SlotItemEffectModel();
            if ('こんごう' == _nhl.yomi ? (_nho.houg = 1, _nho.kaih = 1, 209 == _nhl.ship_id ? _nho.houg += 1 : 149 == _nhl.ship_id ? (_nho.houg += 2, _nho.tyku += 1) : 591 == _nhl.ship_id && (_nho.houg += 3, _nho.tyku += 1, _nho.raig += 2)) : 'ひえい' == _nhl.yomi ? (_nho.houg = 1, _nho.kaih = 1, 210 == _nhl.ship_id ? _nho.houg += 1 : 150 == _nhl.ship_id ? (_nho.houg += 2, _nho.tyku += 1) : 592 == _nhl.ship_id && (_nho.houg += 3, _nho.tyku += 1, _nho.raig += 2)) : 'はるな' == _nhl.yomi ? (_nho.houg = 1, _nho.kaih = 1, 211 == _nhl.ship_id ? _nho.houg += 1 : 151 == _nhl.ship_id ? (_nho.houg += 2, _nho.tyku += 1) : 593 == _nhl.ship_id ? (_nho.houg += 2, _nho.tyku += 3, _nho.raig += 1) : 954 == _nhl.ship_id && (_nho.houg += 3, _nho.tyku += 1, _nho.raig += 2)) : 'きりしま' == _nhl.yomi ? (_nho.houg = 1, _nho.kaih = 1, 212 == _nhl.ship_id ? _nho.houg += 1 : 152 == _nhl.ship_id && (_nho.houg += 2, _nho.tyku += 1)) : ('ふそう' == _nhl.yomi || 'やましろ' == _nhl.yomi || 'いせ' == _nhl.yomi || 'ひゅうが' == _nhl.yomi) && (_nho.houg = 1), !_nho.exists()) return _nhn;
            var _nhp = _nhl.get_slotnums(329);
            return _nhn = _nho.multiply(_nhp);
        };
    },
    72176: (_nhq, _nhr, _nhs) => {
        'use strict';
        var _nht = null;
        defineModule(_nhr);
        Object.defineProperty(_nhr, '__esModule', {
            'value': true
        }), _nhr.getSlot335PersonalEffect = void 0;
        var _nhu = _nhs(74496);
        _nhr.getSlot335PersonalEffect = function(_nhv) {
            var _nhw = null,
                _nhx = new _nhu.SlotItemEffectModel(),
                _nhy = new _nhu.SlotItemEffectModel();
            if (277 == _nhv.ship_id || 278 == _nhv.ship_id ? (_nhy.tyku = 1, _nhy.kaih = 1) : 594 != _nhv.ship_id && 599 != _nhv.ship_id && 610 != _nhv.ship_id && 646 != _nhv.ship_id && 698 != _nhv.ship_id || (_nhy.tyku = 2, _nhy.kaih = 1), !_nhy.exists()) return _nhx;
            var _nhz = _nhv.get_slotnums(335);
            return _nhx = _nhy.multiply(_nhz);
        };
    },
    33846: (_ni0, _ni1, _ni2) => {
        'use strict';
        var _ni3 = null;
        defineModule(_ni1);
        Object.defineProperty(_ni1, '__esModule', {
            'value': true
        }), _ni1.getSlot336PersonalEffect = void 0;
        var _ni4 = _ni2(74496);
        _ni1.getSlot336PersonalEffect = function(_ni5) {
            var _ni6 = null,
                _ni7 = new _ni4.SlotItemEffectModel(),
                _ni8 = new _ni4.SlotItemEffectModel();
            if (277 == _ni5.ship_id || 278 == _ni5.ship_id ? (_ni8.houg = 1, _ni8.tyku = 1, _ni8.kaih = 1) : 594 != _ni5.ship_id && 599 != _ni5.ship_id && 610 != _ni5.ship_id && 646 != _ni5.ship_id && 698 != _ni5.ship_id || (_ni8.houg = 1, _ni8.tyku = 2, _ni8.kaih = 1), !_ni8.exists()) return _ni7;
            var _ni9 = _ni5.get_slotnums(336);
            return _ni7 = _ni8.multiply(_ni9);
        };
    },
    97157: (_nia, _nib, _nic) => {
        'use strict';
        var _nid = null;
        defineModule(_nib);
        Object.defineProperty(_nib, '__esModule', {
            'value': true
        }), _nib.getSlot337PersonalEffect = void 0;
        var _nie = _nic(74496);
        _nib.getSlot337PersonalEffect = function(_nif) {
            var _nig = null,
                _nih = new _nie.SlotItemEffectModel(),
                _nii = new _nie.SlotItemEffectModel();
            if (277 == _nif.ship_id || 278 == _nif.ship_id ? (_nii.houg = 1, _nii.tyku = 1, _nii.kaih = 1) : 594 != _nif.ship_id && 599 != _nif.ship_id && 610 != _nif.ship_id && 646 != _nif.ship_id && 698 != _nif.ship_id || (_nii.houg = 2, _nii.tyku = 2, _nii.kaih = 1), !_nii.exists()) return _nih;
            var _nij = _nif.get_slotnums(337);
            return _nih = _nii.multiply(_nij);
        };
    },
    63406: (_nik, _nil, _nim) => {
        'use strict';
        var _nin = null;
        defineModule(_nil);
        Object.defineProperty(_nil, '__esModule', {
            'value': true
        }), _nil.getSlot338PersonalEffect = void 0;
        var _nio = _nim(74496);
        _nil.getSlot338PersonalEffect = function(_nip) {
            var _niq = null,
                _nir = new _nio.SlotItemEffectModel(),
                _nis = new _nio.SlotItemEffectModel();
            if (277 == _nip.ship_id || 278 == _nip.ship_id ? (_nis.houg = 1, _nis.tyku = 1, _nis.kaih = 2) : 594 == _nip.ship_id || 646 == _nip.ship_id || 698 == _nip.ship_id ? (_nis.houg = 1, _nis.tyku = 2, _nis.kaih = 3) : 599 != _nip.ship_id && 610 != _nip.ship_id || (_nis.houg = 4, _nis.tyku = 3, _nis.kaih = 4), !_nis.exists()) return _nir;
            var _nit = _nip.get_slotnums(338);
            return _nir = _nis.multiply(_nit);
        };
    },
    66373: (_niu, _niv, _niw) => {
        'use strict';
        var _nix = null;
        defineModule(_niv);
        Object.defineProperty(_niv, '__esModule', {
            'value': true
        }), _niv.getSlot339PersonalEffect = void 0;
        var _niy = _niw(74496);
        _niv.getSlot339PersonalEffect = function(_niz) {
            var _nj0 = null,
                _nj1 = new _niy.SlotItemEffectModel(),
                _nj2 = new _niy.SlotItemEffectModel();
            if (277 == _niz.ship_id || 278 == _niz.ship_id ? (_nj2.houg = 1, _nj2.tyku = 2, _nj2.kaih = 2) : 594 == _niz.ship_id || 646 == _niz.ship_id || 698 == _niz.ship_id ? (_nj2.houg = 1, _nj2.tyku = 3, _nj2.kaih = 4) : 599 != _niz.ship_id && 610 != _niz.ship_id || (_nj2.houg = 6, _nj2.tyku = 4, _nj2.kaih = 5), !_nj2.exists()) return _nj1;
            var _nj3 = _niz.get_slotnums(339);
            return _nj1 = _nj2.multiply(_nj3);
        };
    },
    19707: (_nj4, _nj5, _nj6) => {
        'use strict';
        var _nj7 = null;
        defineModule(_nj5);
        Object.defineProperty(_nj5, '__esModule', {
            'value': true
        }), _nj5.getSlot340PersonalEffect = void 0;
        var _nj8 = _nj6(74496);
        _nj5.getSlot340PersonalEffect = function(_nj9) {
            var _nja = null,
                _njb = new _nj8.SlotItemEffectModel(),
                _njc = new _nj8.SlotItemEffectModel();
            if ('ガリバルディ' != _nj9.yomi && 'アブルッツィ' != _nj9.yomi || (_njc.houg = 1, _njc.tyku = 1, _njc.kaih = 1), !_njc.exists()) return _njb;
            var _njd = _nj9.get_slotnums(340);
            return _njb = _njc.multiply(_njd);
        };
    },
    63978: (_nje, _njf, _njg) => {
        'use strict';
        var _njh = null;
        defineModule(_njf);
        Object.defineProperty(_njf, '__esModule', {
            'value': true
        }), _njf.getSlot341PersonalEffect = void 0;
        var _nji = _njg(74496);
        _njf.getSlot341PersonalEffect = function(_njj) {
            var _njk = null,
                _njl = new _nji.SlotItemEffectModel(),
                _njm = new _nji.SlotItemEffectModel();
            if ('ガリバルディ' == _njj.yomi || 'アブルッツィ' == _njj.yomi ? (_njm.houg = 2, _njm.tyku = 1, _njm.kaih = 1) : 'ゴトランド' == _njj.yomi && (_njm.houg = 1, _njm.tyku = 1, _njm.kaih = 1), !_njm.exists()) return _njl;
            var _njn = _njj.get_slotnums(341);
            return _njl = _njm.multiply(_njn);
        };
    },
    92382: (_njo, _njp, _njq) => {
        'use strict';
        var _njr = null;
        defineModule(_njp);
        Object.defineProperty(_njp, '__esModule', {
            'value': true
        }), _njp.getSlot342PersonalEffect = void 0;
        var _njs = _njq(74496);
        _njp.getSlot342PersonalEffect = function(_njt) {
            var _nju = null,
                _njv = new _njs.SlotItemEffectModel(),
                _njw = new _njs.SlotItemEffectModel();
            if (277 == _njt.ship_id || 278 == _njt.ship_id || 461 == _njt.ship_id || 466 == _njt.ship_id || 462 == _njt.ship_id || 467 == _njt.ship_id ? _njw.houg = 1 : 594 == _njt.ship_id || 646 == _njt.ship_id || 698 == _njt.ship_id ? (_njw.houg = 2, _njw.tyku = 1, _njw.kaih = 1) : 599 != _njt.ship_id && 610 != _njt.ship_id || (_njw.houg = 3, _njw.tyku = 2, _njw.kaih = 2), !_njw.exists()) return _njv;
            var _njx = _njt.get_slotnums(342);
            return _njv = _njw.multiply(_njx);
        };
    },
    78415: (_njy, _njz, _nk0) => {
        'use strict';
        var _nk1 = null;
        defineModule(_njz);
        Object.defineProperty(_njz, '__esModule', {
            'value': true
        }), _njz.getSlot343PersonalEffect = void 0;
        var _nk2 = _nk0(74496);
        _njz.getSlot343PersonalEffect = function(_nk3) {
            var _nk4 = null,
                _nk5 = new _nk2.SlotItemEffectModel(),
                _nk6 = new _nk2.SlotItemEffectModel();
            if (277 == _nk3.ship_id || 278 == _nk3.ship_id ? _nk6.houg = 2 : 461 == _nk3.ship_id || 466 == _nk3.ship_id || 462 == _nk3.ship_id || 467 == _nk3.ship_id ? _nk6.houg = 1 : 594 == _nk3.ship_id || 646 == _nk3.ship_id || 698 == _nk3.ship_id ? (_nk6.houg = 3, _nk6.tyku = 2, _nk6.kaih = 1) : 599 != _nk3.ship_id && 610 != _nk3.ship_id || (_nk6.houg = 5, _nk6.tyku = 3, _nk6.kaih = 3), !_nk6.exists()) return _nk5;
            var _nk7 = _nk3.get_slotnums(343);
            return _nk5 = _nk6.multiply(_nk7);
        };
    },
    23090: (_nk8, _nk9, _nka) => {
        'use strict';
        var _nkb = null;
        defineModule(_nk9);
        Object.defineProperty(_nk9, '__esModule', {
            'value': true
        }), _nk9.getSlot344PersonalEffect = void 0;
        var _nkc = _nka(74496);
        _nk9.getSlot344PersonalEffect = function(_nkd) {
            var _nke = null,
                _nkf = new _nkc.SlotItemEffectModel(),
                _nkg = new _nkc.SlotItemEffectModel();
            if (599 == _nkd.ship_id || 610 == _nkd.ship_id ? _nkg.houg = 3 : 555 == _nkd.ship_id || 560 == _nkd.ship_id ? (_nkg.houg = 2, _nkg.tais = 2) : 318 == _nkd.ship_id ? (_nkg.houg = 4, _nkg.tais = 1) : 282 == _nkd.ship_id ? (_nkg.houg = 2, _nkg.tais = 1) : 888 == _nkd.ship_id ? (_nkg.houg = 4, _nkg.tais = 2) : 883 == _nkd.ship_id && (_nkg.houg = 5, _nkg.tais = 2), !_nkg.exists()) return _nkf;
            var _nkh = _nkd.get_slotnums(344);
            return _nkf = _nkg.multiply(_nkh);
        };
    },
    18776: (_nki, _nkj, _nkk) => {
        'use strict';
        var _nkl = null;
        defineModule(_nkj);
        Object.defineProperty(_nkj, '__esModule', {
            'value': true
        }), _nkj.getSlot345PersonalEffect = void 0;
        var _nkm = _nkk(74496);
        _nkj.getSlot345PersonalEffect = function(_nkn) {
            var _nko = null,
                _nkp = new _nkm.SlotItemEffectModel(),
                _nkq = new _nkm.SlotItemEffectModel();
            if (599 == _nkn.ship_id || 610 == _nkn.ship_id ? (_nkq.houg = 3, _nkq.kaih = 1) : 555 == _nkn.ship_id || 560 == _nkn.ship_id ? (_nkq.houg = 3, _nkq.tais = 2, _nkq.kaih = 2) : 318 == _nkn.ship_id ? (_nkq.houg = 5, _nkq.tais = 1, _nkq.kaih = 2) : 282 == _nkn.ship_id ? (_nkq.houg = 3, _nkq.tais = 1, _nkq.kaih = 1) : 888 == _nkn.ship_id ? (_nkq.houg = 4, _nkq.tais = 2, _nkq.kaih = 2) : 883 == _nkn.ship_id && (_nkq.houg = 5, _nkq.tais = 2, _nkq.kaih = 3), !_nkq.exists()) return _nkp;
            var _nkr = _nkn.get_slotnums(345);
            return _nkp = _nkq.multiply(_nkr);
        };
    },
    89058: (_nks, _nkt, _nku) => {
        'use strict';
        var _nkv = null;
        defineModule(_nkt);
        Object.defineProperty(_nkt, '__esModule', {
            'value': true
        }), _nkt.getSlot346PersonalEffect = void 0;
        var _nkw = _nku(74496);
        _nkt.getSlot346PersonalEffect = function(_nkx) {
            var _nky = null,
                _nkz = new _nkw.SlotItemEffectModel();
            return 'やましおまる' == _nkx.yomi && (_nkz.kaih += 1, _nkz.tais += 1), _nkz;
        };
    },
    84372: (_nl0, _nl1, _nl2) => {
        'use strict';
        var _nl3 = null;
        defineModule(_nl1);
        Object.defineProperty(_nl1, '__esModule', {
            'value': true
        }), _nl1.getSlot347PersonalEffect = void 0;
        var _nl4 = _nl2(74496);
        _nl1.getSlot347PersonalEffect = function(_nl5) {
            var _nl6 = null,
                _nl7 = new _nl4.SlotItemEffectModel();
            return 'やましおまる' == _nl5.yomi && (_nl7.kaih += 2, _nl7.tais += 2), _nl7;
        };
    },
    39656: (_nl8, _nl9, _nla) => {
        'use strict';
        var _nlb = null;
        defineModule(_nl9);
        Object.defineProperty(_nl9, '__esModule', {
            'value': true
        }), _nl9.getSlot356_357PersonalEffect = void 0;
        var _nlc = _nla(74496);
        _nl9.getSlot356_357PersonalEffect = function(_nld) {
            var _nle = null,
                _nlf = new _nlc.SlotItemEffectModel(),
                _nlg = new _nlc.SlotItemEffectModel();
            if (95 == _nld.ctype ? _nlg.houg = 2 : 9 == _nld.ctype && (_nlg.houg = 1), !_nlg.exists()) return _nlf;
            var _nlh = _nld.get_slotnums(356) + _nld.get_slotnums(357);
            return _nlf = _nlg.multiply(_nlh);
        };
    },
    66039: (_nli, _nlj, _nlk) => {
        'use strict';
        var _nll = null;
        defineModule(_nlj);
        Object.defineProperty(_nlj, '__esModule', {
            'value': true
        }), _nlj.getSlot358PersonalEffect = void 0;
        var _nlm = _nlk(74496);
        _nlj.getSlot358PersonalEffect = function(_nln) {
            var _nlo = null,
                _nlp = new _nlm.SlotItemEffectModel(),
                _nlq = new _nlm.SlotItemEffectModel();
            if ('アメリカ' != _nln.getCountryName() && 67 != _nln.ctype && 78 != _nln.ctype && 82 != _nln.ctype && 88 != _nln.ctype && 108 != _nln.ctype && 112 != _nln.ctype) return _nlp;
            _nlq.houg += 1, _nlq.kaih += 1, _nlq.tyku += 1, 95 == _nln.ctype && (_nlq.houg += 1, _nlq.kaih += 2, _nlq.tyku += 2);
            var _nlr = _nln.get_slotnums(358);
            return _nlp = _nlq.multiply(_nlr);
        };
    },
    64679: (_nls, _nlt, _nlu) => {
        'use strict';
        var _nlv = null;
        defineModule(_nlt);
        Object.defineProperty(_nlt, '__esModule', {
            'value': true
        }), _nlt.getSlot359PersonalEffect = void 0;
        var _nlw = _nlu(74496);
        _nlt.getSlot359PersonalEffect = function(_nlx) {
            var _nly = null,
                _nlz = new _nlw.SlotItemEffectModel(),
                _nm0 = new _nlw.SlotItemEffectModel();
            if ('パース' == _nlx.yomi ? (_nm0.houg = 2, _nm0.tyku = 2, _nm0.kaih = 1) : 'ゆうばり' == _nlx.yomi && (_nm0.houg = 1, _nm0.tyku = 1, _nm0.kaih = 1), 622 != _nlx.ship_id && 623 != _nlx.ship_id && 624 != _nlx.ship_id || (_nm0.houg += 1, _nm0.tyku += 1), !_nm0.exists()) return _nlz;
            var _nm1 = _nlx.get_slotnums(359);
            return _nlz = _nm0.multiply(_nm1);
        };
    },
    69954: (_nm2, _nm3, _nm4) => {
        'use strict';
        var _nm5 = null;
        defineModule(_nm3);
        Object.defineProperty(_nm3, '__esModule', {
            'value': true
        }), _nm3.getSlot35PersonalEffect = void 0;
        var _nm6 = _nm4(74496);
        _nm3.getSlot35PersonalEffect = function(_nm7) {
            var _nm8 = null,
                _nm9 = new _nm6.SlotItemEffectModel(),
                _nma = new _nm6.SlotItemEffectModel();
            return 149 == _nm7.ship_id || 591 == _nm7.ship_id || 592 == _nm7.ship_id ? (_nma.houg += 1, _nma.tyku += 1) : 150 == _nm7.ship_id ? _nma.tyku += 1 : 151 == _nm7.ship_id || 593 == _nm7.ship_id || 954 == _nm7.ship_id ? (_nma.tyku += 1, _nma.kaih += 1) : 152 == _nm7.ship_id && (_nma.houg += 1), _nma.exists() ? _nm9 = _nma.multiply(1) : _nm9;
        };
    },
    95953: (_nmb, _nmc, _nmd) => {
        'use strict';
        var _nme = null;
        defineModule(_nmc);
        Object.defineProperty(_nmc, '__esModule', {
            'value': true
        }), _nmc.getSlot360_361PersonalEffect = void 0;
        var _nmf = _nmd(74496);
        _nmc.getSlot360_361PersonalEffect = function(_nmg) {
            var _nmh = null,
                _nmi = new _nmf.SlotItemEffectModel(),
                _nmj = new _nmf.SlotItemEffectModel();
            if ('デ・ロイテル' == _nmg.yomi ? (_nmj.houg = 2, _nmj.tyku = 2, _nmj.kaih = 1) : 'ゴトランド' == _nmg.yomi && (_nmj.houg = 2, _nmj.tyku = 1, _nmj.kaih = 1), 41 == _nmg.ctype && (_nmj.houg = 1, _nmj.tyku = 1), !_nmj.exists()) return _nmi;
            var _nmk = _nmg.get_slotnums(360) + _nmg.get_slotnums(361);
            return _nmi = _nmj.multiply(_nmk);
        };
    },
    86384: (_nml, _nmm, _nmn) => {
        'use strict';
        var _nmo = null;
        defineModule(_nmm);
        Object.defineProperty(_nmm, '__esModule', {
            'value': true
        }), _nmm.getSlot362_363PersonalEffect = void 0;
        var _nmp = _nmn(74496);
        _nmm.getSlot362_363PersonalEffect = function(_nmq) {
            var _nmr = null,
                _nms = new _nmp.SlotItemEffectModel(),
                _nmt = new _nmp.SlotItemEffectModel(),
                _nmu = false;
            if (99 == _nmq.ctype ? (_nmt.houg = 1, _nmt.tyku = 2, _nmt.kaih = 1, _nmu = true) : 34 == _nmq.ctype || 21 == _nmq.ctype ? (_nmt.houg = -3, _nmt.tyku = -3, _nmt.kaih = -8, _nmu = true) : 4 == _nmq.ctype || 20 == _nmq.ctype || 16 == _nmq.ctype ? (_nmt.houg = -3, _nmt.tyku = -2, _nmt.kaih = -6, _nmu = true) : 89 == _nmq.ctype || 56 == _nmq.ctype ? (_nmt.houg = -2, _nmt.tyku = -1, _nmt.kaih = -4, _nmu = true) : 52 != _nmq.ctype && 41 != _nmq.ctype && 98 != _nmq.ctype || (_nmt.tyku = -1, _nmt.kaih = -2, _nmu = true), 'アメリカ' == _nmq.getCountryName() && (_nmt.tyku += 1, _nmt.kaih += 1, _nmu = true), 0 == _nmu) return _nms;
            var _nmv = _nmq.get_slotnums(362) + _nmq.get_slotnums(363);
            return _nms = _nmt.multiply(_nmv);
        };
    },
    65345: (_nmw, _nmx, _nmy) => {
        'use strict';
        var _nmz = null;
        defineModule(_nmx);
        Object.defineProperty(_nmx, '__esModule', {
            'value': true
        }), _nmx.getSlot364PersonalEffect = void 0;
        var _nn0 = _nmy(74496);
        _nmx.getSlot364PersonalEffect = function(_nn1) {
            var _nn2 = null;
            new _nn0.SlotItemEffectModel();
            var _nn3 = new _nn0.SlotItemEffectModel();
            623 == _nn1.ship_id || 586 == _nn1.ship_id || 119 == _nn1.ship_id || 118 == _nn1.ship_id || 657 == _nn1.ship_id || 506 == _nn1.ship_id || 668 == _nn1.ship_id || 507 == _nn1.ship_id ? (_nn3.raig = 1, _nn3.kaih = -2, 119 == _nn1.ship_id ? _nn3.raig += 1 : 507 == _nn1.ship_id ? _nn3.raig += 2 : 623 == _nn1.ship_id && (_nn3.houg += 1, _nn3.raig += 3)) : (_nn3.houg = -1, _nn3.kaih = -7);
            var _nn4 = _nn1.get_slotnums(364);
            return _nn3.multiply(_nn4);
        };
    },
    46514: (_nn5, _nn6, _nn7) => {
        'use strict';
        var _nn8 = null;
        defineModule(_nn6);
        Object.defineProperty(_nn6, '__esModule', {
            'value': true
        }), _nn6.getSlot365PersonalEffect = void 0;
        var _nn9 = _nn7(74496);
        _nn6.getSlot365PersonalEffect = function(_nna) {
            var _nnb = null,
                _nnc = new _nn9.SlotItemEffectModel(),
                _nnd = new _nn9.SlotItemEffectModel(),
                _nne = false;
            return 37 != _nna.ctype && 19 != _nna.ctype && 2 != _nna.ctype && 26 != _nna.ctype && 6 != _nna.ctype || (_nnd.houg += 1, _nne = true), 136 != _nna.ship_id && 148 != _nna.ship_id && 546 != _nna.ship_id && 541 != _nna.ship_id && 573 != _nna.ship_id && 911 != _nna.ship_id && 916 != _nna.ship_id && 593 != _nna.ship_id || (_nnd.houg += 1, _nne = true), 591 != _nna.ship_id && 592 != _nna.ship_id && 954 != _nna.ship_id || (_nnd.houg += 2, _nne = true), 0 == _nne ? _nnc : _nnc = _nnd.multiply(1);
        };
    },
    81976: (_nnf, _nng, _nnh) => {
        'use strict';
        var _nni = null;
        defineModule(_nng);
        Object.defineProperty(_nng, '__esModule', {
            'value': true
        }), _nng.getSlot367PersonalEffect = void 0;
        var _nnj = _nnh(74496);
        _nng.getSlot367PersonalEffect = function(_nnk) {
            var _nnl = null,
                _nnm = new _nnj.SlotItemEffectModel(),
                _nnn = new _nnj.SlotItemEffectModel(),
                _nno = false;
            if ('ゴトランド' == _nnk.yomi && (_nnn.houg += 2, _nnn.tais += 1, _nnn.kaih += 1, _nnn.saku += 1, _nno = true), 70 == _nnk.ctype ? (_nnn.houg += 1, _nnn.tais += 1, _nnn.kaih += 1, _nnn.saku += 1, _nno = true) : 72 == _nnk.ctype || 62 == _nnk.ctype ? (_nnn.houg += 1, _nnn.kaih += 1, _nnn.saku += 1, _nno = true) : 67 != _nnk.ctype && 78 != _nnk.ctype && 82 != _nnk.ctype && 88 != _nnk.ctype && 108 != _nnk.ctype && 112 != _nnk.ctype || (_nnn.houg += 2, _nnn.kaih += 2, _nnn.saku += 2, _nno = true), 0 == _nno) return _nnm;
            var _nnp = _nnk.get_slotnums(367);
            return _nnm = _nnn.multiply(_nnp);
        };
    },
    89331: (_nnq, _nnr, _nns) => {
        'use strict';
        var _nnt = null;
        defineModule(_nnr);
        Object.defineProperty(_nnr, '__esModule', {
            'value': true
        }), _nnr.getSlot368PersonalEffect = void 0;
        var _nnu = _nns(74496);
        _nnr.getSlot368PersonalEffect = function(_nnv) {
            var _nnw = null,
                _nnx = new _nnu.SlotItemEffectModel(),
                _nny = new _nnu.SlotItemEffectModel(),
                _nnz = false;
            if ('ゴトランド' == _nnv.yomi && (_nny.houg = 4, _nny.tais = 3, _nny.kaih = 2, _nny.saku = 3, _nnz = true, 630 == _nnv.ship_id && (_nnx.houg += 2, _nnx.raig += 2, _nnx.kaih += 1, _nnx.saku += 1)), 70 == _nnv.ctype ? (_nny.houg = 2, _nny.tais = 3, _nny.kaih = 1, _nny.saku = 2, _nnz = true) : 72 == _nnv.ctype || 62 == _nnv.ctype ? (_nny.houg += 1, _nny.tais += 2, _nny.kaih += 1, _nny.saku += 2, _nnz = true) : 67 != _nnv.ctype && 78 != _nnv.ctype && 82 != _nnv.ctype && 88 != _nnv.ctype && 108 != _nnv.ctype && 112 != _nnv.ctype || (_nny.houg += 2, _nny.tais += 2, _nny.kaih += 2, _nny.saku += 2, _nnz = true), 0 == _nnz) return _nnx;
            var _no0 = _nnv.get_slotnums(368);
            return _nnx.add(_nny.multiply(_no0)), _nnx;
        };
    },
    73973: (_no1, _no2, _no3) => {
        'use strict';
        var _no4 = null;
        defineModule(_no2);
        Object.defineProperty(_no2, '__esModule', {
            'value': true
        }), _no2.getSlot369PersonalEffect = void 0;
        var _no5 = _no3(74496);
        _no2.getSlot369PersonalEffect = function(_no6) {
            var _no7 = null,
                _no8 = new _no5.SlotItemEffectModel(),
                _no9 = new _no5.SlotItemEffectModel(),
                _noa = false;
            if ('ゴトランド' == _no6.yomi && (_no9.houg = 5, _no9.tais = 4, _no9.kaih = 4, _no9.saku = 3, _noa = true, 630 == _no6.ship_id && (_no8.houg += 3, _no8.raig += 3, _no8.kaih += 2, _no8.saku += 2)), 70 == _no6.ctype ? (_no9.houg += 3, _no9.tais += 3, _no9.kaih += 2, _no9.saku += 3, _noa = true) : 72 == _no6.ctype || 62 == _no6.ctype ? (_no9.houg += 2, _no9.tais += 2, _no9.kaih += 1, _no9.saku += 2, _noa = true) : 67 != _no6.ctype && 78 != _no6.ctype && 82 != _no6.ctype && 88 != _no6.ctype && 108 != _no6.ctype && 112 != _no6.ctype || (_no9.houg += 2, _no9.tais += 2, _no9.kaih += 2, _no9.saku += 2, _noa = true), 0 == _noa) return _no8;
            var _nob = _no6.get_slotnums(369);
            return _no8.add(_no9.multiply(_nob)), _no8;
        };
    },
    21178: (_noc, _nod, _noe) => {
        'use strict';
        var _nof = null;
        defineModule(_nod);
        Object.defineProperty(_nod, '__esModule', {
            'value': true
        }), _nod.getSlot370PersonalEffect = void 0;
        var _nog = _noe(74496);
        _nod.getSlot370PersonalEffect = function(_noh) {
            var _noi = null,
                _noj = new _nog.SlotItemEffectModel(),
                _nok = new _nog.SlotItemEffectModel(),
                _nol = false;
            if ('ゴトランド' == _noh.yomi && (_nok.houg = 1, _nok.tais = 3, _nok.kaih = 1, _nok.saku = 2, _nol = true), 70 == _noh.ctype ? (_nok.houg += 1, _nok.tais += 3, _nok.kaih += 1, _nok.saku += 1, _nol = true) : 72 == _noh.ctype || 62 == _noh.ctype ? (_nok.houg += 1, _nok.tais += 2, _nok.kaih += 1, _nok.saku += 1, _nol = true) : 67 != _noh.ctype && 78 != _noh.ctype && 82 != _noh.ctype && 88 != _noh.ctype && 108 != _noh.ctype && 112 != _noh.ctype || (_nok.houg += 2, _nok.tais += 3, _nok.kaih += 2, _nok.saku += 2, _nol = true, 'ウォースパイト' == _noh.yomi && (_noj.houg += 4, _noj.kaih += 1, _noj.saku += 1)), 0 == _nol) return _noj;
            var _nom = _noh.get_slotnums(370);
            return _noj.add(_nok.multiply(_nom)), _noj;
        };
    },
    5079: (_non, _noo, _nop) => {
        'use strict';
        var _noq = null;
        defineModule(_noo);
        Object.defineProperty(_noo, '__esModule', {
            'value': true
        }), _noo.getSlot371PersonalEffect = void 0;
        var _nor = _nop(74496);
        _noo.getSlot371PersonalEffect = function(_nos) {
            var _not = null,
                _nou = new _nor.SlotItemEffectModel(),
                _nov = new _nor.SlotItemEffectModel(),
                _now = false;
            if ('ゴトランド' == _nos.yomi && (_nov.houg = 4, _nov.tais = 2, _nov.kaih = 3, _nov.saku = 6, _now = true, 630 == _nos.ship_id && (_nou.houg += 2, _nou.kaih += 2, _nou.saku += 3)), 70 == _nos.ctype ? (_nov.houg += 2, _nov.tais += 1, _nov.kaih += 2, _nov.saku += 4, _now = true) : 79 == _nos.ctype ? (_nov.houg += 2, _nov.kaih += 1, _nov.saku += 3, _now = true) : 67 != _nos.ctype && 78 != _nos.ctype && 82 != _nos.ctype && 88 != _nos.ctype && 108 != _nos.ctype && 112 != _nos.ctype || (_nov.houg += 3, _nov.tais += 1, _nov.kaih += 2, _nov.saku += 3, _now = true, 88 == _nos.ctype && (_nou.houg += 3, _nou.kaih += 2, _nou.saku += 2)), 0 == _now) return _nou;
            var _nox = _nos.get_slotnums(371);
            return _nou.add(_nov.multiply(_nox)), _nou;
        };
    },
    95014: (_noy, _noz, _np0) => {
        'use strict';
        var _np1 = null;
        defineModule(_noz);
        Object.defineProperty(_noz, '__esModule', {
            'value': true
        }), _noz.getSlot372PersonalEffect = void 0;
        var _np2 = _np0(74496);
        _noz.getSlot372PersonalEffect = function(_np3) {
            var _np4 = null,
                _np5 = new _np2.SlotItemEffectModel(),
                _np6 = false,
                _np7 = new _np2.SlotItemEffectModel();
            if ('しょうかく' == _np3.yomi || 'ずいかく' == _np3.yomi || 'たいほう' == _np3.yomi ? (_np7.houg += 1, _np6 = true, _np5.raig += 1) : 'じゅんよう' != _np3.yomi && 'ひよう' != _np3.yomi || (_np7.houg += 1, _np6 = true), 108 == _np3.ship_id || 109 == _np3.ship_id || 291 == _np3.ship_id || 292 == _np3.ship_id || 296 == _np3.ship_id || 297 == _np3.ship_id ? (_np7.houg += 1, _np6 = true) : 116 == _np3.ship_id || 74 == _np3.ship_id || 117 == _np3.ship_id || 282 == _np3.ship_id || 185 == _np3.ship_id ? (_np7.tais += 1, _np6 = true) : 560 == _np3.ship_id || 555 == _np3.ship_id || 318 == _np3.ship_id ? (_np7.tais += 1, _np6 = true, _np5.raig += 1) : 508 == _np3.ship_id || 509 == _np3.ship_id ? (_np7.houg += 1, _np6 = true) : 883 != _np3.ship_id && 888 != _np3.ship_id || (_np7.houg += 2, _np7.tais += 1, _np6 = true, _np5.raig += 2), 0 == _np6) return _np5;
            var _np8 = _np3.get_slotnums(372);
            return _np5.add(_np7.multiply(_np8)), _np5;
        };
    },
    53099: (_np9, _npa, _npb) => {
        'use strict';
        var _npc = null;
        defineModule(_npa);
        Object.defineProperty(_npa, '__esModule', {
            'value': true
        }), _npa.getSlot373PersonalEffect = void 0;
        var _npd = _npb(74496);
        _npa.getSlot373PersonalEffect = function(_npe) {
            var _npf = null,
                _npg = new _npd.SlotItemEffectModel(),
                _nph = new _npd.SlotItemEffectModel(),
                _npi = false;
            if ('しょうかく' == _npe.yomi ? (_nph.houg += 2, _npi = true, _npg.raig += 2, _npg.kaih += 2) : 'ずいかく' == _npe.yomi ? (_nph.houg += 1, _npi = true, _npg.raig += 2, _npg.kaih += 3) : 'たいほう' == _npe.yomi ? (_nph.houg += 1, _npi = true, _npg.raig += 2, _npg.kaih += 2) : 'じゅんよう' != _npe.yomi && 'ひよう' != _npe.yomi || (_nph.houg += 1, _npi = true, _npg.raig += 1, _npg.kaih += 1), 108 == _npe.ship_id || 109 == _npe.ship_id ? (_nph.houg += 1, _npi = true) : 291 == _npe.ship_id || 292 == _npe.ship_id ? (_nph.houg += 1, _npi = true, _npg.raig += 1) : 296 == _npe.ship_id || 297 == _npe.ship_id ? (_nph.houg += 1, _npi = true, _npg.raig += 1, _npg.kaih += 1) : 116 == _npe.ship_id || 74 == _npe.ship_id ? (_nph.tais += 1, _npi = true) : 117 == _npe.ship_id || 282 == _npe.ship_id || 185 == _npe.ship_id ? (_nph.houg += 1, _nph.tais += 1, _npi = true, _npg.raig += 1) : 560 == _npe.ship_id || 555 == _npe.ship_id || 318 == _npe.ship_id ? (_nph.houg += 1, _nph.tais += 2, _npi = true, _npg.raig += 1, _npg.kaih += 1) : 508 == _npe.ship_id || 509 == _npe.ship_id ? (_nph.houg += 1, _npi = true, _npg.raig += 2, _npg.kaih += 2) : 888 == _npe.ship_id ? (_nph.houg += 2, _nph.tais += 2, _npi = true, _npg.raig += 2, _npg.kaih += 2) : 883 == _npe.ship_id && (_nph.houg += 1, _nph.tais += 2, _npi = true, _npg.raig += 3, _npg.kaih += 4), 0 == _npi) return _npg;
            var _npj = _npe.get_slotnums(373);
            return _npg.add(_nph.multiply(_npj)), _npg;
        };
    },
    76201: (_npk, _npl, _npm) => {
        'use strict';
        var _npn = null;
        defineModule(_npl);
        Object.defineProperty(_npl, '__esModule', {
            'value': true
        }), _npl.getSlot374PersonalEffect = void 0;
        var _npo = _npm(74496);
        _npl.getSlot374PersonalEffect = function(_npp) {
            var _npq = null,
                _npr = new _npo.SlotItemEffectModel(),
                _nps = new _npo.SlotItemEffectModel(),
                _npt = false;
            if ('しょうかく' == _npp.yomi ? (_nps.houg += 3, _npt = true, _npr.raig += 3, _npr.kaih += 3) : 'ずいかく' == _npp.yomi ? (_nps.houg += 2, _npt = true, _npr.raig += 3, _npr.kaih += 4) : 'たいほう' == _npp.yomi ? (_nps.houg += 2, _npt = true, _npr.raig += 3, _npr.kaih += 2) : 'じゅんよう' != _npp.yomi && 'ひよう' != _npp.yomi || (_nps.houg += 1, _npt = true, _npr.raig += 2, _npr.kaih += 2), 108 == _npp.ship_id || 109 == _npp.ship_id ? (_nps.houg += 1, _npt = true, _npr.raig += 1) : 291 == _npp.ship_id || 292 == _npp.ship_id ? (_nps.houg += 1, _nps.tais += 1, _npt = true, _npr.raig += 1) : 296 == _npp.ship_id || 297 == _npp.ship_id ? (_nps.houg += 1, _nps.tais += 1, _npt = true, _npr.raig += 1, _npr.kaih += 1) : 116 == _npp.ship_id || 74 == _npp.ship_id ? (_nps.houg += 1, _nps.tais += 1, _npt = true) : 117 == _npp.ship_id || 282 == _npp.ship_id || 185 == _npp.ship_id ? (_nps.houg += 1, _nps.tais += 2, _npt = true, _npr.raig += 1, _npr.kaih += 1) : 560 == _npp.ship_id || 555 == _npp.ship_id || 318 == _npp.ship_id ? (_nps.houg += 1, _nps.tais += 3, _npt = true, _npr.raig += 1, _npr.kaih += 2) : 508 == _npp.ship_id || 509 == _npp.ship_id ? (_nps.houg += 1, _nps.tais += 2, _npt = true, _npr.raig += 2, _npr.kaih += 3) : 888 == _npp.ship_id ? (_nps.houg += 3, _nps.tais += 3, _npt = true, _npr.raig += 2, _npr.kaih += 3) : 883 == _npp.ship_id && (_nps.houg += 2, _nps.tais += 3, _npt = true, _npr.raig += 3, _npr.kaih += 5), 0 == _npt) return _npr;
            var _npu = _npp.get_slotnums(374);
            return _npr.add(_nps.multiply(_npu)), _npr;
        };
    },
    24931: (_npv, _npw, _npx) => {
        'use strict';
        var _npy = null;
        defineModule(_npw);
        Object.defineProperty(_npw, '__esModule', {
            'value': true
        }), _npw.getSlot375PersonalEffect = void 0;
        var _npz = _npx(74496);
        _npw.getSlot375PersonalEffect = function(_nq0) {
            var _nq1 = null,
                _nq2 = new _npz.SlotItemEffectModel(),
                _nq3 = new _npz.SlotItemEffectModel(),
                _nq4 = false;
            if (69 != _nq0.ctype && 83 != _nq0.ctype && 84 != _nq0.ctype && 105 != _nq0.ctype && 116 != _nq0.ctype && 118 != _nq0.ctype || (_nq3.tyku += 3, _nq3.houg += 3, _nq3.kaih += 3, _nq3.tais += 3, _nq4 = true), 'かが' == _nq0.yomi && (_nq3.tyku += 1, _nq3.houg += 1, _nq3.kaih += 1, _nq3.tais += 1, _nq4 = true), 0 == _nq4) return _nq2;
            var _nq5 = _nq0.get_slotnums(375);
            return _nq2.add(_nq3.multiply(_nq5)), _nq2;
        };
    },
    60978: (_nq6, _nq7, _nq8) => {
        'use strict';
        var _nq9 = null;
        defineModule(_nq7);
        Object.defineProperty(_nq7, '__esModule', {
            'value': true
        }), _nq7.getSlot376PersonalEffect = void 0;
        var _nqa = _nq8(74496);
        _nq7.getSlot376PersonalEffect = function(_nqb) {
            var _nqc = null,
                _nqd = new _nqa.SlotItemEffectModel(),
                _nqe = new _nqa.SlotItemEffectModel(),
                _nqf = false;
            if ('アメリカ' == _nqb.getCountryName() ? (_nqe.houg += 2, _nqe.raig += 4, _nqf = true) : 67 == _nqb.ctype || 78 == _nqb.ctype || 82 == _nqb.ctype || 88 == _nqb.ctype || 108 == _nqb.ctype || 112 == _nqb.ctype ? (_nqe.houg += 1, _nqe.raig += 2, _nqf = true) : 96 == _nqb.ctype && (_nqe.houg += 1, _nqe.raig += 1, _nqf = true), 0 == _nqf) return _nqd;
            var _nqg = _nqb.get_slotnums(376);
            return _nqd.add(_nqe.multiply(_nqg)), _nqd;
        };
    },
    74312: (_nqh, _nqi, _nqj) => {
        'use strict';
        var _nqk = null;
        defineModule(_nqi);
        Object.defineProperty(_nqi, '__esModule', {
            'value': true
        }), _nqi.getSlot377PersonalEffect = void 0;
        var _nql = _nqj(74496);
        _nqi.getSlot377PersonalEffect = function(_nqm) {
            var _nqn = null,
                _nqo = new _nql.SlotItemEffectModel();
            return 'アメリカ' == _nqm.getCountryName() ? (_nqo.tais += 2, _nqo.kaih += 1, 629 == _nqm.ship_id && (_nqo.tais += 1, _nqo.kaih += 2)) : 67 != _nqm.ctype && 78 != _nqm.ctype && 82 != _nqm.ctype && 88 != _nqm.ctype && 108 != _nqm.ctype && 112 != _nqm.ctype && 96 != _nqm.ctype || (_nqo.tais += 1, _nqo.kaih += 1), 651 != _nqm.ship_id && 656 != _nqm.ship_id || (_nqo.tais += 1, _nqo.kaih += 2), _nqo;
        };
    },
    54350: (_nqp, _nqq, _nqr) => {
        'use strict';
        var _nqs = null;
        defineModule(_nqq);
        Object.defineProperty(_nqq, '__esModule', {
            'value': true
        }), _nqq.getSlot378PersonalEffect = void 0;
        var _nqt = _nqr(74496);
        _nqq.getSlot378PersonalEffect = function(_nqu) {
            var _nqv = null,
                _nqw = new _nqt.SlotItemEffectModel();
            return 'アメリカ' == _nqu.getCountryName() ? (_nqw.tais += 3, _nqw.kaih += 1, 629 == _nqu.ship_id && (_nqw.tais += 1, _nqw.kaih += 1)) : 67 == _nqu.ctype || 78 == _nqu.ctype || 82 == _nqu.ctype || 88 == _nqu.ctype || 108 == _nqu.ctype || 112 == _nqu.ctype ? (_nqw.tais += 2, _nqw.kaih += 1) : 96 == _nqu.ctype && (_nqw.tais += 1, _nqw.kaih += 1), 651 != _nqu.ship_id && 656 != _nqu.ship_id || (_nqw.tais += 1, _nqw.kaih += 1), _nqw;
        };
    },
    26262: function(_nqx, _nqy, _nqz) {
        'use strict';
        var _nr0 = null;
        var _nr1 = this && this.__importDefault || function(_nr2) {
            var _nr3 = null;
            return _nr2 && _nr2.__esModule ? _nr2 : {
                'default': _nr2
            };
        };
        defineModule(_nqy);
        Object.defineProperty(_nqy, '__esModule', {
            'value': true
        }), _nqy.getSlot379PersonalEffect = void 0;
        var _nr4 = _nqz(74496),
            _nr5 = _nr1(_nqz(18622));
        _nqy.getSlot379PersonalEffect = function(_nr6) {
            var _nr7 = null,
                _nr8 = new _nr4.SlotItemEffectModel(),
                _nr9 = false,
                _nra = new _nr4.SlotItemEffectModel();
            if (1 == _nr6.stype ? (_nra.tyku += 2, _nra.houg += 1, _nr9 = true) : 21 != _nr6.stype && 16 != _nr6.stype || (_nra.tyku += 1, _nra.houg += 1, _nr9 = true), 66 == _nr6.ctype || 28 == _nr6.ctype ? (_nra.houg += 1, _nra.tyku += 2, _nr9 = true) : 101 == _nr6.ctype && (_nra.tyku += 2, _nra.houg += 1, _nr8.tyku += 2, _nr8.houg += 2, _nr9 = true), 'ゆら' == _nr6.yomi || 'なか' == _nr6.yomi || 'きぬ' == _nr6.yomi || 'いすず' == _nr6.yomi ? (_nra.houg += 2, _nr9 = true) : 'おおい' != _nr6.yomi && 'きたかみ' != _nr6.yomi || (_nra.tyku += 2, _nra.houg += 2, _nr9 = true), 'ゆら' != _nr6.yomi && 'なか' != _nr6.yomi && 'きぬ' != _nr6.yomi && 'いすず' != _nr6.yomi && 'ゆうばり' != _nr6.yomi || (_nra.tais += 1, _nr9 = true), 'てんりゅう' != _nr6.yomi && 'たつた' != _nr6.yomi && 'ゆうばり' != _nr6.yomi || (_nra.houg += 1, _nr9 = true), 488 == _nr6.ship_id ? (_nra.tyku += 4, _nr9 = true) : 220 == _nr6.ship_id ? (_nra.tyku += 3, _nr9 = true) : 23 == _nr6.ship_id ? (_nra.tyku += 2, _nr9 = true) : 160 == _nr6.ship_id || 487 == _nr6.ship_id || 141 == _nr6.ship_id ? (_nra.tyku += 3, _nr9 = true) : 224 == _nr6.ship_id || 289 == _nr6.ship_id || 219 == _nr6.ship_id || 56 == _nr6.ship_id || 113 == _nr6.ship_id || 22 == _nr6.ship_id ? (_nra.tyku += 2, _nr9 = true) : 651 != _nr6.ship_id && 656 != _nr6.ship_id || (_nra.tyku += 3, _nra.houg += 3, 656 == _nr6.ship_id && (_nra.kaih += 3, _nra.tais += 2), _nr9 = true), 488 != _nr6.ship_id && 160 != _nr6.ship_id && 487 != _nr6.ship_id && 141 != _nr6.ship_id || (_nra.tais += 1, _nr9 = true), 477 != _nr6.ship_id && 478 != _nr6.ship_id && 624 != _nr6.ship_id || (_nra.tais += 2, _nr9 = true), 477 != _nr6.ship_id && 478 != _nr6.ship_id && 624 != _nr6.ship_id && 622 != _nr6.ship_id || (_nra.tyku += 2, _nr9 = true), 652 != _nr6.ship_id && 657 != _nr6.ship_id && 547 != _nr6.ship_id && 146 != _nr6.ship_id || (_nr8.houg += 2), 652 != _nr6.ship_id && 657 != _nr6.ship_id && 547 != _nr6.ship_id && 146 != _nr6.ship_id || (_nr8.tyku += 2), _nr9) {
                var _nrb = _nr6.get_slotnums(379);
                _nr8.add(_nra.multiply(_nrb));
            }
            var _nrc = new _nr4.SlotItemEffectModel(),
                _nrd = false;
            16 == _nr6.stype || 3 == _nr6.stype || 4 == _nr6.stype || 21 == _nr6.stype ? (_nrc.houg += 1, _nrc.kaih += 2, _nrd = true) : 1 == _nr6.stype && (_nrc.houg += 1, _nrc.kaih += 4, _nrd = true), 66 == _nr6.ctype || 28 == _nr6.ctype || 21 == _nr6.ctype || 34 == _nr6.ctype ? (_nrc.houg += 2, _nrc.kaih += 3, _nrd = true) : 101 == _nr6.ctype && (_nrc.houg += 4, _nrc.kaih += 3, _nrd = true), 488 == _nr6.ship_id || 651 == _nr6.ship_id || 656 == _nr6.ship_id ? (_nrc.houg += 2, _nrc.kaih += 2, _nrd = true) : 487 == _nr6.ship_id || 160 == _nr6.ship_id || 141 == _nr6.ship_id || 118 == _nr6.ship_id || 119 == _nr6.ship_id ? (_nrc.houg += 1, _nrc.kaih += 1, _nrd = true) : 652 != _nr6.ship_id && 657 != _nr6.ship_id && 547 != _nr6.ship_id && 146 != _nr6.ship_id || (_nrc.houg += 1, _nrc.kaih += 1, _nrd = true);
            var _nre = new _nr4.SlotItemEffectModel(),
                _nrf = false;
            if (656 == _nr6.ship_id && (_nre.tyku += 3, _nre.kaih += 2, _nrf = true), _nrd || _nrf) {
                for (var _nrg = 0, _nrh = 0, _nri = 0, _nrj = _nr6.have_slot_ids(); _nri < _nrj.length; _nri++) {
                    var _nrk = _nrj[_nri],
                        _nrl = _nr5.default.model.slot.getMst(_nrk),
                        _nrm = _nrl.equipType;
                    12 != _nrm && 13 != _nrm || (_nrl.sakuteki >= 5 && (_nrg += _nr6.get_slotnums(parseInt(_nrk))), _nrl.taiku >= 2 && (_nrh += _nr6.get_slotnums(parseInt(_nrk))));
                }
                _nrd && _nrg > 0 && _nr8.add(_nrc), _nrf && _nrh > 0 && _nr8.add(_nre);
            }
            return _nr8;
        };
    },
    45530: function(_nrn, _nro, _nrp) {
        'use strict';
        var _nrq = null;
        var _nrr = this && this.__importDefault || function(_nrs) {
            var _nrt = null;
            return _nrs && _nrs.__esModule ? _nrs : {
                'default': _nrs
            };
        };
        defineModule(_nro);
        Object.defineProperty(_nro, '__esModule', {
            'value': true
        }), _nro.getSlot380PersonalEffect = void 0;
        var _nru = _nrp(74496),
            _nrv = _nrr(_nrp(18622));
        _nro.getSlot380PersonalEffect = function(_nrw) {
            var _nrx = null,
                _nry = new _nru.SlotItemEffectModel(),
                _nrz = false,
                _ns0 = new _nru.SlotItemEffectModel();
            if (21 != _nrw.stype && 16 != _nrw.stype || (_ns0.tyku += 2, _ns0.houg += 1, _nrz = true), 101 == _nrw.ctype && (_ns0.tyku += 2, _ns0.houg += 1, _nrz = true, _nry.tyku += 2, _nry.houg += 2), 'ゆら' == _nrw.yomi || 'なか' == _nrw.yomi || 'きぬ' == _nrw.yomi || 'いすず' == _nrw.yomi ? (_ns0.houg += 2, _nrz = true) : 'おおい' != _nrw.yomi && 'きたかみ' != _nrw.yomi || (_ns0.tyku += 2, _ns0.houg += 3, _nrz = true), 'ゆら' != _nrw.yomi && 'なか' != _nrw.yomi && 'きぬ' != _nrw.yomi && 'いすず' != _nrw.yomi && 'ゆうばり' != _nrw.yomi || (_ns0.tais += 1, _nrz = true), 'てんりゅう' != _nrw.yomi && 'たつた' != _nrw.yomi && 'ゆうばり' != _nrw.yomi || (_ns0.houg += 1, _nrz = true), 488 == _nrw.ship_id ? (_ns0.tyku += 4, _nrz = true) : 220 == _nrw.ship_id ? (_ns0.tyku += 3, _nrz = true) : 23 == _nrw.ship_id ? (_ns0.tyku += 2, _nrz = true) : 160 == _nrw.ship_id || 487 == _nrw.ship_id || 141 == _nrw.ship_id ? (_ns0.tyku += 3, _nrz = true) : 224 == _nrw.ship_id || 289 == _nrw.ship_id || 219 == _nrw.ship_id || 56 == _nrw.ship_id || 113 == _nrw.ship_id || 22 == _nrw.ship_id ? (_ns0.tyku += 2, _nrz = true) : 651 == _nrw.ship_id || 656 == _nrw.ship_id ? (_ns0.tyku += 3, _ns0.houg += 3, _nrz = true) : 407 != _nrw.ship_id && 665 != _nrw.ship_id || (_ns0.houg += 2, _ns0.tyku += 2, _nrz = true, _nry.houg += 1, _nry.tyku += 1, _nry.kaih += 2), 488 != _nrw.ship_id && 160 != _nrw.ship_id && 487 != _nrw.ship_id && 141 != _nrw.ship_id || (_ns0.tais += 1, _nrz = true), 477 != _nrw.ship_id && 478 != _nrw.ship_id && 624 != _nrw.ship_id || (_ns0.tais += 2, _nrz = true), 477 != _nrw.ship_id && 478 != _nrw.ship_id && 624 != _nrw.ship_id && 622 != _nrw.ship_id || (_ns0.tyku += 2, _nrz = true), 652 != _nrw.ship_id && 657 != _nrw.ship_id || (_ns0.houg += 3, _nrz = true), 547 != _nrw.ship_id && 146 != _nrw.ship_id || (_nry.houg += 2), 652 != _nrw.ship_id && 657 != _nrw.ship_id && 547 != _nrw.ship_id && 146 != _nrw.ship_id || (_nry.tyku += 2), _nrz) {
                var _ns1 = _nrw.get_slotnums(380);
                _nry.add(_ns0.multiply(_ns1));
            }
            var _ns2 = new _nru.SlotItemEffectModel(),
                _ns3 = false,
                _ns4 = new _nru.SlotItemEffectModel(),
                _ns5 = false,
                _ns6 = false;
            if (16 != _nrw.stype && 3 != _nrw.stype && 4 != _nrw.stype && 21 != _nrw.stype || (_ns2.houg += 2, _ns2.kaih += 1, _ns3 = true), 101 == _nrw.ctype && (_ns2.houg += 4, _ns2.kaih += 3, _ns3 = true), 488 != _nrw.ship_id && 487 != _nrw.ship_id && 160 != _nrw.ship_id && 141 != _nrw.ship_id && 118 != _nrw.ship_id && 119 != _nrw.ship_id && 651 != _nrw.ship_id && 656 != _nrw.ship_id || (_ns2.houg += 1, _ns2.kaih += 2, _ns3 = true), 652 == _nrw.ship_id || 657 == _nrw.ship_id || 547 == _nrw.ship_id || 146 == _nrw.ship_id ? (_ns2.houg += 1, _ns2.kaih += 3, _ns3 = true) : 407 != _nrw.ship_id && 665 != _nrw.ship_id || (_ns6 = true, _ns3 = true, _ns2.houg += 2, _ns2.kaih += 1, _ns5 = true, _ns4.houg += 1, _ns4.tyku += 2, _ns4.kaih += 1), _ns3 || _ns6) {
                for (var _ns7 = 0, _ns8 = 0, _ns9 = 0, _nsa = _nrw.have_slot_ids(); _ns9 < _nsa.length; _ns9++) {
                    var _nsb = _nsa[_ns9],
                        _nsc = _nrv.default.model.slot.getMst(_nsb),
                        _nsd = _nsc.equipType;
                    12 == _nsd || 13 == _nsd ? _nsc.sakuteki >= 5 && (_ns7 += _nrw.get_slotnums(parseInt(_nsb))) : 21 == _nsd && (_ns8 += _nrw.get_slotnums(parseInt(_nsb)));
                }
                _ns3 && _ns7 > 0 && _nry.add(_ns2), _ns5 && _ns8 > 0 && _nry.add(_ns4);
            }
            return _nry;
        };
    },
    44053: (_nse, _nsf, _nsg) => {
        'use strict';
        var _nsh = null;
        defineModule(_nsf);
        Object.defineProperty(_nsf, '__esModule', {
            'value': true
        }), _nsf.getSlot381PersonalEffect = void 0;
        var _nsi = _nsg(74496);
        _nsf.getSlot381PersonalEffect = function(_nsj) {
            var _nsk = null,
                _nsl = new _nsi.SlotItemEffectModel(),
                _nsm = false,
                _nsn = new _nsi.SlotItemEffectModel(),
                _nso = 0;
            if ('アメリカ' == _nsj.getCountryName() && (_nsn.houg += 1, 102 == _nsj.ctype && (_nsn.houg += 1), _nsm = true, _nso = 1), 0 == _nsm) return _nsl;
            var _nsp = _nsj.get_slotnums(381);
            if (_nsl.add(_nsn.multiply(_nsp)), 0 == _nso) return _nsl;
            var _nsq = _nsj.get_each_level_nums(381),
                _nsr = 0;
            return _nsq.map(function(_nss, _nst) {
                _nst >= 6 && (_nsr += _nss);
            }), 1 == _nso && (_nsl.houg += 1 * _nsr), _nsl;
        };
    },
    65441: function(_nsu, _nsv, _nsw) {
        'use strict';
        var _nsx = null;
        var _nsy = this && this.__importDefault || function(_nsz) {
            var _nt0 = null;
            return _nsz && _nsz.__esModule ? _nsz : {
                'default': _nsz
            };
        };
        defineModule(_nsv);
        Object.defineProperty(_nsv, '__esModule', {
            'value': true
        }), _nsv.getSlot382PersonalEffect = void 0;
        var _nt1 = _nsw(74496),
            _nt2 = _nsy(_nsw(18622));
        _nsv.getSlot382PersonalEffect = function(_nt3) {
            var _nt4 = null,
                _nt5 = new _nt1.SlotItemEffectModel(),
                _nt6 = false,
                _nt7 = new _nt1.SlotItemEffectModel(),
                _nt8 = false,
                _nt9 = new _nt1.SlotItemEffectModel(),
                _nta = new _nt1.SlotItemEffectModel(),
                _ntb = 2;
            1 == _nt3.stype && (_nt7.tyku += 2, _nt7.kaih += 2, _nt7.tais += 1, _nt6 = true, _nt9.houg += 2, _nt9.kaih += 3, _nta.tyku += 2, _nta.kaih += 3, _nt8 = true, _ntb = 1), 66 != _nt3.ctype && 28 != _nt3.ctype && 101 != _nt3.ctype || (_nt7.tyku += 2, _nt7.kaih += 1, _nt6 = true, _nt9.houg += 1, _nt9.kaih += 2, _nta.tyku += 2, _nta.kaih += 2, _nt8 = true, _ntb = 1), 'ゆら' != _nt3.yomi && 'なか' != _nt3.yomi && 'きぬ' != _nt3.yomi || (_nt7.tyku += 1, _nt6 = true), 488 == _nt3.ship_id || 220 == _nt3.ship_id ? (_nt7.kaih += 1, _nt6 = true, 488 == _nt3.ship_id && (_nt9.houg += 1, _nt9.kaih += 1, _nta.tyku += 2, _nta.kaih += 2, _nt8 = true, _ntb = 1)) : 160 == _nt3.ship_id || 224 == _nt3.ship_id ? (_nt7.kaih += 1, _nt6 = true, 160 == _nt3.ship_id && (_nt9.houg += 1, _nt9.kaih += 1, _nta.tyku += 2, _nta.kaih += 2, _nt8 = true)) : 487 == _nt3.ship_id || 289 == _nt3.ship_id ? (_nt7.kaih += 1, _nt6 = true, 487 == _nt3.ship_id && (_nt9.houg += 1, _nt9.kaih += 1, _nta.tyku += 2, _nta.kaih += 2, _nt8 = true)) : 656 == _nt3.ship_id ? (_nt7.tyku += 3, _nt7.kaih += 2, _nt6 = true, _nt9.houg += 2, _nt9.kaih += 2, _nta.tyku += 3, _nta.kaih += 2, _nt8 = true, _ntb = 1) : 145 != _nt3.ship_id && 961 != _nt3.ship_id || (_ntb = 1);
            for (var _ntc = 0, _ntd = 0, _nte = 0, _ntf = _nt3.have_slot_ids(); _nte < _ntf.length; _nte++) {
                var _ntg = _ntf[_nte],
                    _nth = _nt2.default.model.slot.getMst(_ntg),
                    _nti = _nth.equipType;
                12 != _nti && 13 != _nti || (_nth.sakuteki >= 5 && (_ntc += _nt3.get_slotnums(parseInt(_ntg))), _nth.taiku >= 2 && (_ntd += _nt3.get_slotnums(parseInt(_ntg))));
            }
            for (var _ntj = [], _ntk = function(_ntl) {
                    var _ntm = null;
                    if (null == _nt3.have_slots_dict[_ntl]) return 'continue';
                    var _ntn = _nt3.get_each_level_nums(_ntl);
                    null == _ntj[_ntl] && (_ntj[_ntl] = []), _ntn.forEach(function(_nto, _ntp) {
                        var _ntq = null;
                        for (var _ntr = 1; _ntr <= _nt3.SLOT_LEVEL_MAX; _ntr++) null == _ntj[_ntl][_ntr] && (_ntj[_ntl][_ntr] = 0), _ntp >= _ntr && (_ntj[_ntl][_ntr] += _nto);
                    });
                }, _nts = 0, _ntt = [509]; _nts < _ntt.length; _nts++) {
                _ntk(_ntt[_nts]);
            }
            var _ntu = 0,
                _ntv = 0,
                _ntw = 0,
                _ntx = 0,
                _nty = 0,
                _ntz = 0;
            null != _ntj[509] && (_ntu = _ntj[509][1], _ntv = _ntj[509][2], _ntw = _ntj[509][4], _ntx = _ntj[509][6], _nty = _ntj[509][8], _ntz = _ntj[509][10], 1 == _ntb ? (_ntu >= 1 && (_nt5.tyku += 1 * _ntu), _ntv >= 1 && (_nt5.kaih += 2 * _ntv), _ntw >= 1 && (_nt5.houg += 1 * _ntw), _ntx >= 1 && (_nt5.tyku += 1 * _ntx), _nty >= 1 && (_nt5.houm += 1 * _nty), _ntz >= 1 && (_nt5.tyku += 1 * _ntz)) : 2 == _ntb && (_ntv >= 1 && (_nt5.tyku += 1 * _ntv), _ntw >= 1 && (_nt5.kaih += 2 * _ntw), _ntx >= 1 && (_nt5.houg += 1 * _ntx), _nty >= 1 && (_nt5.tyku += 1 * _nty), _ntz >= 1 && (_nt5.houm += 1 * _ntz)));
            var _nu0 = _nt3.get_slotnums(509),
                _nu1 = _nu0 + _nt3.get_slotnums(382);
            return _nt6 && _nt5.add(_nt7.multiply(_nu1)), 3 != _nt3.stype && 21 != _nt3.stype && 4 != _nt3.stype || _ntv >= 1 && (_ntc > 0 && (_nt5.houg += 1, _nt5.kaih += 1), _ntd > 0 && (_nt5.tyku += 2, _nt5.kaih += 1)), 145 == _nt3.ship_id ? _ntv >= 1 && (_ntc > 0 && (_nt5.houg += 1, _nt5.tyku += 1, _nt5.kaih += 2), _ntd > 0 && (_nt5.tyku += 4, _nt5.kaih += 2)) : 961 == _nt3.ship_id && _nu0 > 0 && (_ntc > 0 && (_nt5.houg += 2, _nt5.tyku += 2, _nt5.kaih += 3), _ntd > 0 && (_nt5.houg += 1, _nt5.tyku += 5, _nt5.kaih += 3)), _nt8 && _ntc > 0 && _nt5.add(_nt9), _nt8 && _ntd > 0 && _nt5.add(_nta), _nt5;
        };
    },
    33258: (_nu2, _nu3, _nu4) => {
        'use strict';
        var _nu5 = null;
        defineModule(_nu3);
        Object.defineProperty(_nu3, '__esModule', {
            'value': true
        }), _nu3.getSlot383PersonalEffect = void 0;
        var _nu6 = _nu4(74496);
        _nu3.getSlot383PersonalEffect = function(_nu7) {
            var _nu8 = null,
                _nu9 = new _nu6.SlotItemEffectModel(),
                _nua = false,
                _nub = new _nu6.SlotItemEffectModel(),
                _nuc = _nu7.get_each_level_over_nums([383]).slot[383];
            if (44 == _nu7.ctype && (_nub.raig += 2, _nua = true, _nuc[4] > 0 && (_nu9.raig += 1), _nuc[6] > 0 && (_nu9.houm += 1)), 'い58' == _nu7.yomi && (_nub.raig += 1, _nua = true), 636 == _nu7.ship_id ? (_nub.raig += 3, _nua = true) : 607 == _nu7.ship_id && (_nub.raig += 4, _nua = true), _nuc[8] > 0 && (_nu9.raig += 1), _nuc[10] > 0 && (_nu9.houm += 1), 'い58' != _nu7.yomi && 'い47' != _nu7.yomi || _nuc[5] > 0 && (_nu9.houm += 1), 0 == _nua) return _nu9;
            var _nud = _nu7.get_slotnums(383);
            return _nu9.add(_nub.multiply(_nud)), _nu9;
        };
    },
    92168: (_nue, _nuf, _nug) => {
        'use strict';
        var _nuh = null;
        defineModule(_nuf);
        Object.defineProperty(_nuf, '__esModule', {
            'value': true
        }), _nuf.getSlot384PersonalEffect = void 0;
        var _nui = _nug(74496);
        _nuf.getSlot384PersonalEffect = function(_nuj) {
            var _nuk = null,
                _nul = new _nui.SlotItemEffectModel(),
                _num = false,
                _nun = new _nui.SlotItemEffectModel();
            44 == _nuj.ctype && (_nun.kaih += 3, _num = true), 'い58' == _nuj.yomi && (_nun.kaih += 2, _num = true), 636 == _nuj.ship_id ? (_nun.kaih += 3, _num = true) : 607 == _nuj.ship_id && (_nun.kaih += 4, _num = true);
            var _nuo = _nuj.get_slotnums(384);
            _num && _nul.add(_nun.multiply(_nuo));
            var _nup = _nuo,
                _nuq = _nuj.get_slotnums(213),
                _nur = _nuj.get_slotnums(214),
                _nus = _nuj.get_slotnums(383);
            return _nup > 0 && _nuq + _nur + _nus > 0 && (_nul.raig += 3, _nul.kaih += 2), _nul;
        };
    },
    85975: (_nut, _nuu, _nuv) => {
        'use strict';
        var _nuw = null;
        defineModule(_nuu);
        Object.defineProperty(_nuu, '__esModule', {
            'value': true
        }), _nuu.getSlot385PersonalEffect = void 0;
        var _nux = _nuv(74496);
        _nuu.getSlot385PersonalEffect = function(_nuy) {
            var _nuz = null,
                _nv0 = new _nux.SlotItemEffectModel(),
                _nv1 = false,
                _nv2 = new _nux.SlotItemEffectModel(),
                _nv3 = 0;
            if ('アメリカ' == _nuy.getCountryName() && (_nv2.houg += 1, 102 == _nuy.ctype || 107 == _nuy.ctype ? (_nv2.houg += 1, _nv2.souk += 1) : 93 == _nuy.ctype && (_nv2.houg += 1), _nv1 = true, _nv3 = 1), 8 == _nuy.stype && (_nv2.houg += 1, _nv1 = true), 0 == _nv1) return _nv0;
            var _nv4 = _nuy.get_slotnums(385);
            if (_nv0.add(_nv2.multiply(_nv4)), 0 == _nv3) return _nv0;
            var _nv5 = _nuy.get_each_level_nums(385),
                _nv6 = 0;
            return _nv5.forEach(function(_nv7, _nv8) {
                _nv8 >= 6 && (_nv6 += _nv7);
            }), 1 == _nv3 && (_nv0.houg += 1 * _nv6, _nv0.souk += 1 * _nv5[10]), _nv0;
        };
    },
    98467: (_nv9, _nva, _nvb) => {
        'use strict';
        var _nvc = null;
        defineModule(_nva);
        Object.defineProperty(_nva, '__esModule', {
            'value': true
        }), _nva.getSlot386PersonalEffect = void 0;
        var _nvd = _nvb(74496);
        _nva.getSlot386PersonalEffect = function(_nve) {
            var _nvf = null,
                _nvg = new _nvd.SlotItemEffectModel(),
                _nvh = false,
                _nvi = new _nvd.SlotItemEffectModel(),
                _nvj = 0;
            if ('アメリカ' == _nve.getCountryName() && (_nvi.houg += 1, _nvh = true, _nvj = 1), 0 == _nvh) return _nvg;
            var _nvk = _nve.get_slotnums(386);
            if (_nvg.add(_nvi.multiply(_nvk)), 0 == _nvj) return _nvg;
            var _nvl = _nve.get_each_level_nums(386),
                _nvm = 0,
                _nvn = 0;
            return _nvl.forEach(function(_nvo, _nvp) {
                _nvp >= 2 && (_nvm += _nvo), _nvp >= 7 && (_nvn += _nvo);
            }), 1 == _nvj && (_nvg.houg += 1 * _nvm, _nvg.houg += 1 * _nvn), _nvg;
        };
    },
    88348: (_nvq, _nvr, _nvs) => {
        'use strict';
        var _nvt = null;
        defineModule(_nvr);
        Object.defineProperty(_nvr, '__esModule', {
            'value': true
        }), _nvr.getSlot387PersonalEffect = void 0;
        var _nvu = _nvs(74496);
        _nvr.getSlot387PersonalEffect = function(_nvv) {
            var _nvw = null,
                _nvx = new _nvu.SlotItemEffectModel(),
                _nvy = false,
                _nvz = new _nvu.SlotItemEffectModel(),
                _nw0 = 0;
            if ('アメリカ' == _nvv.getCountryName() && (_nvz.houg += 1, _nvy = true, _nw0 = 1), 0 == _nvy) return _nvx;
            var _nw1 = _nvv.get_slotnums(387);
            if (_nvx.add(_nvz.multiply(_nw1)), 0 == _nw0) return _nvx;
            var _nw2 = _nvv.get_each_level_nums(387),
                _nw3 = 0,
                _nw4 = 0;
            return _nw2.forEach(function(_nw5, _nw6) {
                _nw6 >= 2 && (_nw3 += _nw5), _nw6 >= 7 && (_nw4 += _nw5);
            }), 1 == _nw0 && (_nvx.houg += 1 * _nw3, _nvx.houg += 1 * _nw4), _nvx;
        };
    },
    21097: (_nw7, _nw8, _nw9) => {
        'use strict';
        var _nwa = null;
        defineModule(_nw8);
        Object.defineProperty(_nw8, '__esModule', {
            'value': true
        }), _nw8.getSlot389PersonalEffect = void 0;
        var _nwb = _nw9(74496);
        _nw8.getSlot389PersonalEffect = function(_nwc) {
            var _nwd = null,
                _nwe = new _nwb.SlotItemEffectModel(),
                _nwf = false,
                _nwg = new _nwb.SlotItemEffectModel();
            if (594 == _nwc.ship_id || 599 == _nwc.ship_id) _nwg.houg += 2, _nwg.kaih += 2, _nwf = true;
            else {
                if (698 == _nwc.ship_id || 610 == _nwc.ship_id) _nwg.houg += 3, _nwg.kaih += 2, _nwf = true;
                else 646 == _nwc.ship_id && (_nwg.houg += 4, _nwg.tais += 4, _nwg.kaih += 3, _nwf = true, _nwc.get_type3_nums(25) > 0 && (_nwe.houg += 3, _nwe.tais += 6), _nwc.get_slotnums(326) + _nwc.get_slotnums(327) > 0 && (_nwe.houg += 5, _nwe.tais += 4));
            }
            if ('アメリカ' == _nwc.getCountryName() && (_nwg.houg += 2, _nwg.tais += 3, _nwg.kaih += 1, _nwf = true), 0 == _nwf) return _nwe;
            var _nwh = _nwc.get_slotnums(389);
            return _nwe.add(_nwg.multiply(_nwh)), _nwe;
        };
    },
    43607: (_nwi, _nwj, _nwk) => {
        'use strict';
        var _nwl = null;
        defineModule(_nwj);
        Object.defineProperty(_nwj, '__esModule', {
            'value': true
        }), _nwj.getSlot38cmFourBarrelGunPersonalEffect = void 0;
        var _nwm = _nwk(74496);
        _nwj.getSlot38cmFourBarrelGunPersonalEffect = function(_nwn) {
            var _nwo = null,
                _nwp = new _nwm.SlotItemEffectModel(),
                _nwq = _nwn.get_slotnums(245),
                _nwr = _nwn.get_slotnums(246),
                _nws = _nwn.get_slotnums(468),
                _nwt = _nwq + _nwr + _nws,
                _nwu = 0,
                _nwv = 0,
                _nww = new Array();
            if (79 != _nwn.ctype) return _nwp;
            _nwp.houg += 2 * _nwt, _nwp.houm += 1 * _nwt, _nws >= 1 && (_nwp.houg += 1 * _nws, _nwv = 1, _nww.push(468), _nww.push(471)), _nwu = 1;
            var _nwx = _nwn.get_slotnums(247),
                _nwy = _nwn.get_slotnums(471);
            if (1 == _nwu && _nwx >= 1 && (_nwp.kaih += 2 * _nwx, _nwp.houg += 2 * _nwx, _nwp.houm += 2 * _nwx), 0 == _nwv) return _nwp;
            for (var _nwz = {}, _nx0 = {}, _nx1 = {}, _nx2 = {}, _nx3 = {}, _nx4 = 0, _nx5 = _nww; _nx4 < _nx5.length; _nx4++) {
                var _nx6 = _nx5[_nx4];
                if (_nx0[_nx6] = 0, _nx1[_nx6] = 0, _nx2[_nx6] = 0, _nx3[_nx6] = 0, _nwz[_nx6] = 0, null != _nwn.have_slots_dict[_nx6])
                    for (var _nx7 = 0, _nx8 = _nwn.have_slots_dict[_nx6]; _nx7 < _nx8.length; _nx7++) {
                        var _nx9 = _nx8[_nx7].level;
                        _nx9 >= 4 && _nx0[_nx6]++, _nx9 >= 7 && _nx1[_nx6]++, _nx9 >= 8 && _nx2[_nx6]++, _nx9 >= 9 && _nx3[_nx6]++, _nx9 >= 10 && _nwz[_nx6]++;
                    }
            }
            if (1 == _nwv && _nws > 0) {
                var _nxa = _nx0[468],
                    _nxb = _nx2[468],
                    _nxc = _nx3[468],
                    _nxd = _nwz[468],
                    _nxe = _nx1[471],
                    _nxf = _nx3[471];
                _nxa >= 1 && (_nwp.houg += 1 * _nxa, _nwp.houm += 1 * _nxa), _nxb >= 1 && (_nwp.houg += 1 * _nxb, _nwp.houm += 1 * _nxb), _nxc >= 1 && (_nwp.tyku += 1 * _nxc, _nwy >= 1 && (_nwp.houm += 2 * _nwy), _nwx >= 1 && (_nwp.kaih += 1 * _nwx, _nwp.houm += 1 * _nwx)), _nxd >= 1 && (_nwp.houm += 1 * _nxd, _nwy >= 1 && (_nwp.houm += 1 * _nwy, _nxe >= 1 && (_nwp.houm += 1 * _nxe), _nxf >= 1 && (_nwp.kaih += 1 * _nxf)), _nwx >= 1 && (_nwp.houg += 1 * _nwx, _nwp.kaih += 1 * _nwx, _nwp.houm += 1 * _nwx));
            }
            return _nwp;
        };
    },
    2380: (_nxg, _nxh, _nxi) => {
        'use strict';
        var _nxj = null;
        defineModule(_nxh);
        Object.defineProperty(_nxh, '__esModule', {
            'value': true
        }), _nxh.getSlot38cmTwinGunPersonalEffect = void 0;
        var _nxk = _nxi(74496);
        _nxh.getSlot38cmTwinGunPersonalEffect = function(_nxl) {
            var _nxm = null,
                _nxn = new _nxk.SlotItemEffectModel(),
                _nxo = false,
                _nxp = new _nxk.SlotItemEffectModel(),
                _nxq = 0,
                _nxr = _nxl.get_slotnums(76),
                _nxs = _nxl.get_slotnums(114),
                _nxt = _nxl.get_slotnums(124);
            if ('ドイツ' == _nxl.getCountryName() && (_nxp.houg += 1, _nxo = true, _nxq = 1, _nxt >= 1 && (_nxn.kaih += 1 * _nxt)), 0 == _nxo) return _nxn;
            var _nxu = _nxr + _nxs;
            _nxn.add(_nxp.multiply(_nxu));
            var _nxv = _nxl.get_each_level_over_nums([114]).slot[114];
            return 1 == _nxq && (_nxv[7] >= 1 && (_nxn.houg += 1 * _nxv[7]), _nxv[8] >= 1 && (_nxn.houm += 1 * _nxv[8]), _nxv[9] >= 1 && (_nxn.souk += 1 * _nxv[9]), _nxv[10] >= 1 && (_nxn.houg += 1 * _nxv[10])), _nxn;
        };
    },
    37273: (_nxw, _nxx, _nxy) => {
        'use strict';
        var _nxz = null;
        defineModule(_nxx);
        Object.defineProperty(_nxx, '__esModule', {
            'value': true
        }), _nxx.getSlot390PersonalEffect = void 0;
        var _ny0 = _nxy(74496);
        _nxx.getSlot390PersonalEffect = function(_ny1) {
            var _ny2 = null,
                _ny3 = new _ny0.SlotItemEffectModel(),
                _ny4 = false,
                _ny5 = new _ny0.SlotItemEffectModel(),
                _ny6 = 0;
            if ('アメリカ' == _ny1.getCountryName() && (_ny5.houg += 1, _ny4 = true, _ny6 = 1), 102 == _ny1.ctype || 107 == _ny1.ctype ? (_ny5.houg += 1, _ny5.souk += 1, _ny4 = true) : 93 == _ny1.ctype && (_ny5.houg += 1, _ny4 = true), 8 == _ny1.stype && (_ny5.houg += 1, _ny4 = true), 0 == _ny4) return _ny3;
            var _ny7 = _ny1.get_slotnums(390);
            if (_ny3.add(_ny5.multiply(_ny7)), 0 == _ny6) return _ny3;
            var _ny8 = _ny1.get_each_level_nums(390),
                _ny9 = 0,
                _nya = 0;
            return _ny8.forEach(function(_nyb, _nyc) {
                _nyc >= 3 && (_ny9 += _nyb), _nyc >= 6 && (_nya += _nyb);
            }), 1 == _ny6 && (_ny3.houg += 1 * _ny9, _ny3.kaih += 1 * _nya, _ny3.souk += 1 * _ny8[10]), _ny3;
        };
    },
    72694: (_nyd, _nye, _nyf) => {
        'use strict';
        var _nyg = null;
        defineModule(_nye);
        Object.defineProperty(_nye, '__esModule', {
            'value': true
        }), _nye.getSlot391PersonalEffect = void 0;
        var _nyh = _nyf(74496);
        _nye.getSlot391PersonalEffect = function(_nyi) {
            var _nyj = null,
                _nyk = new _nyh.SlotItemEffectModel(),
                _nyl = false,
                _nym = new _nyh.SlotItemEffectModel();
            if ('しょうかく' == _nyi.yomi || 'ずいかく' == _nyi.yomi ? (_nym.houg += 1, _nyl = true) : 'じゅんよう' != _nyi.yomi && 'ひよう' != _nyi.yomi || (_nym.houg += 1, _nyl = true), 116 == _nyi.ship_id || 185 == _nyi.ship_id || 282 == _nyi.ship_id ? (_nym.houg += 1, _nyl = true) : 117 == _nyi.ship_id || 318 == _nyi.ship_id || 883 == _nyi.ship_id || 888 == _nyi.ship_id ? (_nym.houg += 1, _nyk.kaih += 1, _nyl = true) : 560 != _nyi.ship_id && 555 != _nyi.ship_id || (_nym.houg += 1, _nym.kaih += 1, _nyl = true), 0 == _nyl) return _nyk;
            var _nyn = _nyi.get_slotnums(391);
            return _nyk.add(_nym.multiply(_nyn)), _nyk;
        };
    },
    62067: (_nyo, _nyp, _nyq) => {
        'use strict';
        var _nyr = null;
        defineModule(_nyp);
        Object.defineProperty(_nyp, '__esModule', {
            'value': true
        }), _nyp.getSlot392PersonalEffect = void 0;
        var _nys = _nyq(74496);
        _nyp.getSlot392PersonalEffect = function(_nyt) {
            var _nyu = null,
                _nyv = new _nys.SlotItemEffectModel(),
                _nyw = false,
                _nyx = new _nys.SlotItemEffectModel();
            if ('しょうかく' == _nyt.yomi || 'ずいかく' == _nyt.yomi ? (_nyx.houg += 2, _nyx.kaih += 1, _nyw = true) : 'じゅんよう' != _nyt.yomi && 'ひよう' != _nyt.yomi || (_nyx.houg += 1, _nyx.kaih += 1, _nyw = true), 116 == _nyt.ship_id || 185 == _nyt.ship_id || 282 == _nyt.ship_id ? (_nyx.houg += 2, _nyx.kaih += 1, _nyw = true) : 117 == _nyt.ship_id || 318 == _nyt.ship_id || 883 == _nyt.ship_id || 888 == _nyt.ship_id ? (_nyx.houg += 2, _nyx.kaih += 2, _nyw = true) : 560 != _nyt.ship_id && 555 != _nyt.ship_id || (_nyx.houg += 3, _nyx.kaih += 2, _nyw = true), 0 == _nyw) return _nyv;
            var _nyy = _nyt.get_slotnums(392);
            return _nyv.add(_nyx.multiply(_nyy)), _nyv;
        };
    },
    87817: function(_nyz, _nz0, _nz1) {
        'use strict';
        var _nz2 = null;
        var _nz3 = this && this.__importDefault || function(_nz4) {
            var _nz5 = null;
            return _nz4 && _nz4.__esModule ? _nz4 : {
                'default': _nz4
            };
        };
        defineModule(_nz0);
        Object.defineProperty(_nz0, '__esModule', {
            'value': true
        }), _nz0.getSlot397PersonalEffect = void 0;
        var _nz6 = _nz1(74496),
            _nz7 = _nz3(_nz1(18622));
        _nz0.getSlot397PersonalEffect = function(_nz8) {
            var _nz9 = null,
                _nza = new _nz6.SlotItemEffectModel(),
                _nzb = false,
                _nzc = new _nz6.SlotItemEffectModel(),
                _nzd = 0,
                _nze = 0,
                _nzf = false;
            if (651 == _nz8.ship_id ? (_nzc.houg += 5, _nzc.tyku += 2, _nzc.kaih += 1, _nzb = true, _nzf = true, _nzd = 1, _nze = 1) : 656 == _nz8.ship_id && (_nzc.houg += 3, _nzc.tyku += 1, _nzc.kaih += 1, _nzb = true, _nzf = true, _nzd = 1), 0 == _nzb) return _nza;
            var _nzg = _nz8.get_slotnums(397);
            _nza.add(_nzc.multiply(_nzg));
            var _nzh = 0,
                _nzi = _nz8.get_each_level_nums(397),
                _nzj = 0;
            if (_nzf) {
                _nzi.forEach(function(_nzk, _nzl) {
                    _nzl >= 4 && (_nzj += _nzk);
                });
                for (var _nzm = 0, _nzn = _nz8.have_slot_ids(); _nzm < _nzn.length; _nzm++) {
                    var _nzo = _nzn[_nzm],
                        _nzp = _nz7.default.model.slot.getMst(_nzo),
                        _nzq = _nzp.equipType;
                    12 != _nzq && 13 != _nzq || (_nzp.sakuteki >= 5 && (_nzh += _nz8.get_slotnums(parseInt(_nzo))), _nzp.taiku >= 2 && _nz8.get_slotnums(parseInt(_nzo)));
                }
            }
            return 1 == _nzd && _nzh > 0 && (_nza.houg += 3, _nza.kaih += 3), 1 == _nze && (_nza.houg += 4 * _nzj, _nza.kaih += 1 * _nzj), _nza;
        };
    },
    93526: function(_nzr, _nzs, _nzt) {
        'use strict';
        var _nzu = null;
        var _nzv = this && this.__importDefault || function(_nzw) {
            var _nzx = null;
            return _nzw && _nzw.__esModule ? _nzw : {
                'default': _nzw
            };
        };
        defineModule(_nzs);
        Object.defineProperty(_nzs, '__esModule', {
            'value': true
        }), _nzs.getSlot398PersonalEffect = void 0;
        var _nzy = _nzt(74496),
            _nzz = _nzv(_nzt(18622));
        _nzs.getSlot398PersonalEffect = function(_o00) {
            var _o01 = null,
                _o02 = new _nzy.SlotItemEffectModel(),
                _o03 = false,
                _o04 = new _nzy.SlotItemEffectModel(),
                _o05 = 0,
                _o06 = 0,
                _o07 = false;
            if (651 == _o00.ship_id ? (_o04.houg += 4, _o04.tyku += 4, _o04.kaih += 2, _o03 = true, _o07 = true, _o05 = 1, _o06 = 1) : 656 == _o00.ship_id && (_o04.houg += 3, _o04.tyku += 2, _o04.kaih += 2, _o03 = true, _o07 = true, _o05 = 1, _o06 = 2), 0 == _o03) return _o02;
            var _o08 = _o00.get_slotnums(398);
            _o02.add(_o04.multiply(_o08));
            var _o09 = 0,
                _o0a = 0,
                _o0b = _o00.get_each_level_nums(398),
                _o0c = 0;
            if (_o07) {
                _o0b.forEach(function(_o0d, _o0e) {
                    _o0e >= 4 && (_o0c += _o0d);
                });
                for (var _o0f = 0, _o0g = _o00.have_slot_ids(); _o0f < _o0g.length; _o0f++) {
                    var _o0h = _o0g[_o0f],
                        _o0i = _nzz.default.model.slot.getMst(_o0h),
                        _o0j = _o0i.equipType;
                    12 != _o0j && 13 != _o0j || (_o0i.sakuteki >= 5 && (_o09 += _o00.get_slotnums(parseInt(_o0h))), _o0i.taiku >= 2 && (_o0a += _o00.get_slotnums(parseInt(_o0h))));
                }
            }
            return 1 == _o05 && (_o09 > 0 && (_o02.houg += 3, _o02.kaih += 3), _o0a > 0 && (_o02.tyku += 3, _o02.kaih += 3)), 1 == _o06 ? (_o02.houg += 3 * _o0c, _o02.kaih += 2 * _o0c) : 2 == _o06 && (_o02.houg += 2 * _o0c, _o02.kaih += 1 * _o0c), _o02;
        };
    },
    33084: (_o0k, _o0l, _o0m) => {
        'use strict';
        var _o0n = null;
        defineModule(_o0l);
        Object.defineProperty(_o0l, '__esModule', {
            'value': true
        }), _o0l.getSlot399PersonalEffect = void 0;
        var _o0o = _o0m(74496);
        _o0l.getSlot399PersonalEffect = function(_o0p) {
            var _o0q = null,
                _o0r = new _o0o.SlotItemEffectModel(),
                _o0s = false,
                _o0t = new _o0o.SlotItemEffectModel(),
                _o0u = 0;
            if (108 == _o0p.ctype && (_o0t.houg += 1, _o0t.kaih += 2, _o0u = 1, _o0s = true), 0 == _o0s) return _o0r;
            var _o0v = _o0p.get_slotnums(399);
            if (_o0r.add(_o0t.multiply(_o0v)), 0 == _o0u) return _o0r;
            var _o0w = _o0p.get_each_level_nums(399),
                _o0x = 0,
                _o0y = 0;
            return _o0w.map(function(_o0z, _o10) {
                _o10 >= 3 && (_o0x += _o0z), _o10 >= 5 && (_o0y += _o0z);
            }), 1 == _o0u && (_o0r.houg += 1 * _o0x, _o0r.houg += 1 * _o0y), _o0r;
        };
    },
    80225: (_o11, _o12, _o13) => {
        'use strict';
        var _o14 = null;
        defineModule(_o12);
        Object.defineProperty(_o12, '__esModule', {
            'value': true
        }), _o12.getSlot3_122PersonalEffect = void 0;
        var _o15 = _o13(74496);
        _o12.getSlot3_122PersonalEffect = function(_o16) {
            var _o17 = null,
                _o18 = new _o15.SlotItemEffectModel(),
                _o19 = false,
                _o1a = new _o15.SlotItemEffectModel(),
                _o1b = 0;
            if (54 == _o16.ctype && (_o1a.houg += 1, _o1a.tyku += 2, _o1a.kaih += 1, _o19 = true, _o1b = 1), 0 == _o19) return _o18;
            var _o1c = _o16.get_slotnums(3) + _o16.get_slotnums(122);
            if (_o18.add(_o1a.multiply(_o1c)), 0 == _o1b) return _o18;
            var _o1d = _o16.get_each_level_over_nums([122]).slot[122];
            return 1 == _o1b && (_o1d[6] >= 1 && (_o18.kaih += 1 * _o1d[6]), _o1d[7] >= 1 && (_o18.tyku += 1 * _o1d[7]), _o1d[8] >= 1 && (_o18.houm += 1 * _o1d[8]), _o1d[9] >= 1 && (_o18.kaih += 1 * _o1d[9]), _o1d[10] >= 1 && (_o18.houg += 1 * _o1d[10])), _o18;
        };
    },
    97831: (_o1e, _o1f, _o1g) => {
        'use strict';
        var _o1h = null;
        defineModule(_o1f);
        Object.defineProperty(_o1f, '__esModule', {
            'value': true
        }), _o1f.getSlot400PersonalEffect = void 0;
        var _o1i = _o1g(74496);
        _o1f.getSlot400PersonalEffect = function(_o1j) {
            var _o1k = null,
                _o1l = new _o1i.SlotItemEffectModel(),
                _o1m = false,
                _o1n = new _o1i.SlotItemEffectModel(),
                _o1o = 0,
                _o1p = false;
            if (147 != _o1j.ship_id && 73 != _o1j.ctype && 81 != _o1j.ctype || (_o1p = true), _o1p && (_o1n.kaih += 2, _o1n.raig += 5, _o1n.houg += 1, _o1n.souk += 1, _o1m = true, _o1o = 1), 0 == _o1m) return _o1l;
            var _o1q = _o1j.get_slotnums(400);
            return _o1l.add(_o1n.multiply(_o1q)), _o1j.get_slotnums(282) > 0 && 1 == _o1o && (_o1l.houg += 2), _o1l;
        };
    },
    4050: function(_o1r, _o1s, _o1t) {
        'use strict';
        var _o1u = null;
        var _o1v = this && this.__importDefault || function(_o1w) {
            var _o1x = null;
            return _o1w && _o1w.__esModule ? _o1w : {
                'default': _o1w
            };
        };
        defineModule(_o1s);
        Object.defineProperty(_o1s, '__esModule', {
            'value': true
        }), _o1s.getSlot407PersonalEffect = void 0;
        var _o1y = _o1t(74496),
            _o1z = _o1v(_o1t(18622));
        _o1s.getSlot407PersonalEffect = function(_o20) {
            var _o21 = null,
                _o22 = new _o1y.SlotItemEffectModel(),
                _o23 = false,
                _o24 = new _o1y.SlotItemEffectModel(),
                _o25 = 0;
            if (662 != _o20.ship_id && 663 != _o20.ship_id && 668 != _o20.ship_id || (_o24.houg += 4, _o24.tyku += 2, _o24.kaih += 1, _o23 = true, _o25 = 1), 0 == _o23) return _o22;
            var _o26 = _o20.get_slotnums(407);
            _o22.add(_o24.multiply(_o26));
            for (var _o27 = 0, _o28 = 0, _o29 = 0, _o2a = _o20.have_slot_ids(); _o29 < _o2a.length; _o29++) {
                var _o2b = _o2a[_o29],
                    _o2c = _o1z.default.model.slot.getMst(_o2b),
                    _o2d = _o2c.equipType;
                12 != _o2d && 13 != _o2d || (_o2c.sakuteki >= 5 && (_o27 += _o20.get_slotnums(parseInt(_o2b))), _o2c.taiku >= 2 && (_o28 += _o20.get_slotnums(parseInt(_o2b))));
            }
            return _o27 >= 1 && 1 == _o25 && (_o22.houg += 2, _o22.kaih += 2, _o22.raig += 2), _o28 >= 1 && 1 == _o25 && (_o22.tyku += 2, _o22.kaih += 3), _o22;
        };
    },
    78466: (_o2e, _o2f, _o2g) => {
        'use strict';
        var _o2h = null;
        defineModule(_o2f);
        Object.defineProperty(_o2f, '__esModule', {
            'value': true
        }), _o2f.getSlot408PersonalEffect = void 0;
        var _o2i = _o2g(74496);
        _o2f.getSlot408PersonalEffect = function(_o2j) {
            var _o2k = null,
                _o2l = new _o2i.SlotItemEffectModel(),
                _o2m = false,
                _o2n = new _o2i.SlotItemEffectModel();
            if ('しんしゅうまる' == _o2j.yomi ? (_o2n.houg += 2, _o2n.saku += 2, _o2n.kaih += 2, _o2m = true) : 'あきつまる' == _o2j.yomi && (_o2n.houg += 1, _o2n.saku += 1, _o2n.kaih += 1, _o2n.tais += 1, _o2m = true), 2 == _o2j.stype && (_o2n.houg += 1, _o2n.saku += 1, _o2n.kaih -= 5, _o2m = true), 0 == _o2m) return _o2l;
            var _o2o = _o2j.get_slotnums(408);
            return _o2l.add(_o2n.multiply(_o2o)), _o2l;
        };
    },
    40061: (_o2p, _o2q, _o2r) => {
        'use strict';
        var _o2s = null;
        defineModule(_o2q);
        Object.defineProperty(_o2q, '__esModule', {
            'value': true
        }), _o2q.getSlot409PersonalEffect = void 0;
        var _o2t = _o2r(74496);
        _o2q.getSlot409PersonalEffect = function(_o2u) {
            var _o2v = null,
                _o2w = new _o2t.SlotItemEffectModel(),
                _o2x = false,
                _o2y = new _o2t.SlotItemEffectModel();
            if ('しんしゅうまる' == _o2u.yomi ? (_o2y.houg += 1, _o2y.tyku += 2, _o2y.kaih += 3, _o2x = true) : 'あきつまる' == _o2u.yomi && (_o2y.houg += 1, _o2y.tyku += 1, _o2y.kaih += 2, _o2y.tais += 1, _o2x = true), 0 == _o2x) return _o2w;
            var _o2z = _o2u.get_slotnums(409);
            return _o2w.add(_o2y.multiply(_o2z)), _o2w;
        };
    },
    79988: (_o30, _o31, _o32) => {
        'use strict';
        var _o33 = null;
        defineModule(_o31);
        Object.defineProperty(_o31, '__esModule', {
            'value': true
        }), _o31.getSlot411PersonalEffect = void 0;
        var _o34 = _o32(74496);
        _o31.getSlot411PersonalEffect = function(_o35) {
            var _o36 = null,
                _o37 = new _o34.SlotItemEffectModel(),
                _o38 = new _o34.SlotItemEffectModel(),
                _o39 = false,
                _o3a = 0;
            if (2 == _o35.stype && (_o38.kaih -= 9, _o39 = true), 3 != _o35.stype && 4 != _o35.stype || (_o38.kaih -= 7, _o39 = true), 21 == _o35.stype && (_o38.kaih -= 6, _o39 = true), 5 != _o35.stype && 6 != _o35.stype || (_o38.kaih -= 5, _o39 = true), 593 == _o35.ship_id && (_o37.houg += 1, _o37.tyku += 2, _o37.kaih += 3), 151 == _o35.ship_id || 411 == _o35.ship_id || 412 == _o35.ship_id || 593 == _o35.ship_id || 954 == _o35.ship_id ? (_o37.houg += 3, _o37.tyku += 4, _o3a = 1) : 541 != _o35.ship_id && 573 != _o35.ship_id && 553 != _o35.ship_id && 554 != _o35.ship_id || (_o37.houg += 2, _o37.tyku += 2, _o3a = 1), _o39) {
                var _o3b = _o35.get_slotnums(411);
                _o37.add(_o38.multiply(_o3b));
            }
            if (0 == _o3a) return _o37;
            var _o3c = _o35.get_each_level_nums(411),
                _o3d = 0;
            return _o3a > 0 && _o3c.forEach(function(_o3e, _o3f) {
                _o3f >= 4 && (_o3d += _o3e);
            }), 1 == _o3a && (_o3d >= 1 && (_o37.houg += 1, _o37.tyku += 1), _o3c[10] >= 1 && (_o37.houg += 1, _o37.tyku += 1)), _o37;
        };
    },
    74428: (_o3g, _o3h, _o3i) => {
        'use strict';
        var _o3j = null;
        defineModule(_o3h);
        Object.defineProperty(_o3h, '__esModule', {
            'value': true
        }), _o3h.getSlot412PersonalEffect = void 0;
        var _o3k = _o3i(74496);
        _o3h.getSlot412PersonalEffect = function(_o3l) {
            var _o3m = null,
                _o3n = new _o3k.SlotItemEffectModel(),
                _o3o = false,
                _o3p = 0,
                _o3q = new _o3k.SlotItemEffectModel();
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o3l.ctype) >= 0 ? (_o3n.houg += 2, _o3n.raig += 4, _o3n.tais += 2, _o3q.kaih += 3, _o3q.saku += 1, _o3o = true, _o3p = 1) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o3l.ctype) >= 0 ? (_o3n.houg += 3, _o3n.raig += 3, _o3q.kaih += 2, _o3q.saku += 3, _o3o = true, _o3p = 1) : [7, 13, 29, 8, 9, 31].indexOf(_o3l.ctype) >= 0 && (_o3n.houg += 1, _o3q.kaih += 1, _o3q.saku += 1, _o3o = true), 0 == _o3o) return _o3n;
            var _o3r = _o3l.get_slotnums(412);
            if (_o3n.add(_o3q.multiply(_o3r)), 0 == _o3p) return _o3n;
            var _o3s = _o3l.get_each_level_nums(412),
                _o3t = 0,
                _o3u = 0;
            return _o3p > 0 && _o3s.forEach(function(_o3v, _o3w) {
                _o3w >= 4 && (_o3t += _o3v), _o3w >= 8 && (_o3u += _o3v);
            }), 1 == _o3p && (_o3t > 0 && (_o3n.houg += 1), _o3u > 0 && (_o3n.raig += 1)), _o3n;
        };
    },
    2631: (_o3x, _o3y, _o3z) => {
        'use strict';
        var _o40 = null;
        defineModule(_o3y);
        Object.defineProperty(_o3y, '__esModule', {
            'value': true
        }), _o3y.getSlot413PersonalEffect = void 0;
        var _o41 = _o3z(74496);
        _o3y.getSlot413PersonalEffect = function(_o42) {
            var _o43 = null,
                _o44 = new _o41.SlotItemEffectModel();
            return [66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o42.ctype) >= 0 ? (_o44.houg += 2, _o44.raig += 2, _o44.kaih += 4) : [21, 4, 20, 16, 34, 56, 41, 52].indexOf(_o42.ctype) >= 0 && (_o44.houg += 4, _o44.raig += 2, _o44.kaih += 2), 38 == _o42.ctype || 54 == _o42.ctype ? (_o44.houg += 2, _o44.raig += 3, _o44.kaih += 3) : 4 == _o42.ctype || 20 == _o42.ctype || 16 == _o42.ctype || 41 == _o42.ctype || 52 == _o42.ctype ? (_o44.houg += 1, _o44.raig += 2, _o44.kaih += 2) : 21 != _o42.ctype && 34 != _o42.ctype || (_o44.tyku += 2, _o44.raig += 1, _o44.kaih += 1), 'なか' == _o42.yomi || 'ゆら' == _o42.yomi || 'やはぎ' == _o42.yomi || 'のしろ' == _o42.yomi || 'はまなみ' == _o42.yomi || 'しまかぜ' == _o42.yomi || 'きよしも' == _o42.yomi || 'はつしも' == _o42.yomi ? (_o44.tyku += 1, _o44.kaih += 1) : 'じんつう' != _o42.yomi && 'せんだい' != _o42.yomi && 'ながなみ' != _o42.yomi && 'はつしも' != _o42.yomi && 'てるづき' != _o42.yomi || (_o44.houg += 1, _o44.raig += 1), 543 == _o42.ship_id ? (_o44.houg += 1, _o44.kaih += 1) : 159 == _o42.ship_id && (_o44.houg += 2), _o44;
        };
    },
    16498: (_o45, _o46, _o47) => {
        'use strict';
        var _o48 = null;
        defineModule(_o46);
        Object.defineProperty(_o46, '__esModule', {
            'value': true
        }), _o46.getSlot414PersonalEffect = void 0;
        var _o49 = _o47(74496);
        _o46.getSlot414PersonalEffect = function(_o4a) {
            var _o4b = null,
                _o4c = new _o49.SlotItemEffectModel(),
                _o4d = 0;
            if ('アメリカ' == _o4a.getCountryName() && (_o4c.saku += 1, _o4d = 1), 95 != _o4a.ctype && 99 != _o4a.ctype && 106 != _o4a.ctype && 110 != _o4a.ctype && 121 != _o4a.ctype || (_o4c.houg += 1, _o4c.saku += 1, _o4d = 2), 0 == _o4d) return _o4c;
            var _o4e = _o4a.get_each_level_nums(414),
                _o4f = 0,
                _o4g = 0,
                _o4h = 0;
            return _o4d > 0 && _o4e.forEach(function(_o4i, _o4j) {
                _o4j >= 5 && (_o4f += _o4i), _o4j >= 3 && (_o4g += _o4i), _o4j >= 8 && (_o4h += _o4i);
            }), _o4d > 0 && _o4f >= 1 && (_o4c.kaih += 1), 2 == _o4d && (_o4g >= 1 && (_o4c.saku += 1), _o4h >= 1 && (_o4c.kaih += 1), _o4e[10] >= 1 && (_o4c.houg += 1)), _o4c;
        };
    },
    27177: (_o4k, _o4l, _o4m) => {
        'use strict';
        var _o4n = null;
        defineModule(_o4l);
        Object.defineProperty(_o4l, '__esModule', {
            'value': true
        }), _o4l.getSlot415PersonalEffect = void 0;
        var _o4o = _o4m(74496);
        _o4l.getSlot415PersonalEffect = function(_o4p) {
            var _o4q = null,
                _o4r = new _o4o.SlotItemEffectModel(),
                _o4s = [];
            if ('アメリカ' == _o4p.getCountryName() && (_o4r.saku += 1, _o4r.tais += 1, _o4s.push(1)), 95 != _o4p.ctype && 99 != _o4p.ctype && 106 != _o4p.ctype && 110 != _o4p.ctype && 121 != _o4p.ctype || (_o4r.houg += 1, _o4s.push(2)), 0 == _o4s.length) return _o4r;
            var _o4t = _o4p.get_each_level_nums(415),
                _o4u = 0,
                _o4v = 0,
                _o4w = 0;
            return _o4s.length > 0 && (_o4t.forEach(function(_o4x, _o4y) {
                _o4y >= 5 && (_o4u += _o4x), _o4y >= 3 && (_o4v += _o4x), _o4y >= 8 && (_o4w += _o4x);
            }), _o4s.forEach(function(_o4z) {
                var _o50 = null;
                1 == _o4z ? _o4u >= 1 && (_o4r.kaih += 1) : 2 == _o4z && (_o4v >= 1 && (_o4r.kaih += 1), _o4w >= 1 && (_o4r.houg += 1));
            })), _o4r;
        };
    },
    53908: (_o51, _o52, _o53) => {
        'use strict';
        var _o54 = null;
        defineModule(_o52);
        Object.defineProperty(_o52, '__esModule', {
            'value': true
        }), _o52.getSlot419PersonalEffect = void 0;
        var _o55 = _o53(74496);
        _o52.getSlot419PersonalEffect = function(_o56) {
            var _o57 = null,
                _o58 = new _o55.SlotItemEffectModel(),
                _o59 = false,
                _o5a = new _o55.SlotItemEffectModel(),
                _o5b = 0;
            if ('アメリカ' == _o56.getCountryName() && (_o5a.houg += 2, _o59 = true, _o5b = 1), 0 == _o59) return _o58;
            var _o5c = _o56.get_slotnums(419);
            if (_o58.add(_o5a.multiply(_o5c)), 0 == _o5b) return _o58;
            var _o5d = _o56.get_each_level_nums(419),
                _o5e = 0,
                _o5f = 0;
            return _o5b > 0 && _o5d.forEach(function(_o5g, _o5h) {
                _o5h >= 2 && (_o5e += _o5g), _o5h >= 7 && (_o5f += _o5g);
            }), 1 == _o5b && (_o5e >= 1 && (_o58.houg += 1 * _o5e), _o5f >= 1 && (_o58.houg += 1 * _o5f)), _o58;
        };
    },
    79813: (_o5i, _o5j, _o5k) => {
        'use strict';
        var _o5l = null;
        defineModule(_o5j);
        Object.defineProperty(_o5j, '__esModule', {
            'value': true
        }), _o5j.getSlot420PersonalEffect = void 0;
        var _o5m = _o5k(74496);
        _o5j.getSlot420PersonalEffect = function(_o5n) {
            var _o5o = null,
                _o5p = new _o5m.SlotItemEffectModel(),
                _o5q = false,
                _o5r = new _o5m.SlotItemEffectModel(),
                _o5s = 0;
            if ('アメリカ' != _o5n.getCountryName() && 67 != _o5n.ctype && 78 != _o5n.ctype && 82 != _o5n.ctype && 88 != _o5n.ctype && 108 != _o5n.ctype && 112 != _o5n.ctype || (_o5r.houg += 1, _o5s = 1, _o5q = true), 84 == _o5n.ctype ? (_o5r.houg += 1, _o5q = true) : 78 == _o5n.ctype && (_o5r.houg -= 1, _o5q = true), 7 == _o5n.stype && (_o5r.houg -= 2, _o5r.kaih -= 1, _o5r.souk -= 2, _o5q = true), 0 == _o5q) return _o5p;
            var _o5t = _o5n.get_slotnums(420);
            if (_o5p.add(_o5r.multiply(_o5t)), 0 == _o5s) return _o5p;
            var _o5u = _o5n.get_each_level_nums(420),
                _o5v = 0;
            return _o5s > 0 && _o5u.forEach(function(_o5w, _o5x) {
                _o5x >= 3 && (_o5v += _o5w);
            }), 1 == _o5s && _o5v >= 1 && (_o5p.houg += 1 * _o5v), _o5p;
        };
    },
    16088: (_o5y, _o5z, _o60) => {
        'use strict';
        var _o61 = null;
        defineModule(_o5z);
        Object.defineProperty(_o5z, '__esModule', {
            'value': true
        }), _o5z.getSlot421PersonalEffect = void 0;
        var _o62 = _o60(74496);
        _o5z.getSlot421PersonalEffect = function(_o63) {
            var _o64 = null,
                _o65 = new _o62.SlotItemEffectModel(),
                _o66 = false,
                _o67 = new _o62.SlotItemEffectModel(),
                _o68 = 0;
            if ('アメリカ' != _o63.getCountryName() && 67 != _o63.ctype && 78 != _o63.ctype && 82 != _o63.ctype && 88 != _o63.ctype && 108 != _o63.ctype && 112 != _o63.ctype || (_o67.houg += 2, _o66 = true, _o68 = 1), 84 == _o63.ctype ? (_o67.houg += 1, _o66 = true) : 78 == _o63.ctype && (_o67.houg -= 1, _o66 = true), 7 == _o63.stype && (_o67.houg -= 2, _o67.kaih -= 1, _o67.souk -= 2, _o66 = true), 0 == _o66) return _o65;
            var _o69 = _o63.get_slotnums(421);
            if (_o65.add(_o67.multiply(_o69)), 0 == _o68) return _o65;
            var _o6a = _o63.get_each_level_nums(421),
                _o6b = 0;
            return _o68 > 0 && _o6a.forEach(function(_o6c, _o6d) {
                _o6d >= 5 && (_o6b += _o6c);
            }), 1 == _o68 && _o6b >= 1 && (_o65.houg += 1 * _o6b), _o65;
        };
    },
    69939: (_o6e, _o6f, _o6g) => {
        'use strict';
        var _o6h = null;
        defineModule(_o6f);
        Object.defineProperty(_o6f, '__esModule', {
            'value': true
        }), _o6f.getSlot422PersonalEffect = void 0;
        var _o6i = _o6g(74496);
        _o6f.getSlot422PersonalEffect = function(_o6j) {
            var _o6k = null,
                _o6l = new _o6i.SlotItemEffectModel(),
                _o6m = false,
                _o6n = new _o6i.SlotItemEffectModel();
            if ('アメリカ' != _o6j.getCountryName() && 67 != _o6j.ctype && 78 != _o6j.ctype && 82 != _o6j.ctype && 88 != _o6j.ctype && 108 != _o6j.ctype && 112 != _o6j.ctype || (_o6n.houg += 1, _o6n.kaih += 1, _o6m = true), 84 == _o6j.ctype && (_o6n.houg += 1, _o6n.tyku += 1, _o6m = true), 707 == _o6j.ship_id && (_o6n.houg += 2, _o6n.kaih += 2, _o6n.tyku += 2, _o6m = true), 0 == _o6m) return _o6l;
            var _o6o = _o6j.get_slotnums(422);
            return _o6l.add(_o6n.multiply(_o6o)), _o6l;
        };
    },
    33734: (_o6p, _o6q, _o6r) => {
        'use strict';
        var _o6s = null;
        defineModule(_o6q);
        Object.defineProperty(_o6q, '__esModule', {
            'value': true
        }), _o6q.getSlot423PersonalEffect = void 0;
        var _o6t = _o6r(74496);
        _o6q.getSlot423PersonalEffect = function(_o6u) {
            var _o6v = null,
                _o6w = new _o6t.SlotItemEffectModel(),
                _o6x = false,
                _o6y = new _o6t.SlotItemEffectModel();
            78 != _o6u.ctype && 112 != _o6u.ctype || (_o6y.houg += 2, _o6y.tyku += 2, _o6y.kaih += 2, _o6y.saku += 2, _o6x = true);
            var _o6z = _o6u.getCountryName();
            if (67 == _o6u.ctype || 78 == _o6u.ctype || 82 == _o6u.ctype || 88 == _o6u.ctype || 108 == _o6u.ctype || 112 == _o6u.ctype ? (_o6y.houg += 2, _o6y.tyku += 2, _o6y.kaih += 2, _o6y.saku += 2, _o6x = true) : 'アメリカ' == _o6z && (_o6y.houg += 1, _o6y.tyku += 1, _o6y.kaih += 1, _o6y.saku += 1, _o6x = true), 0 == _o6x) return _o6w;
            var _o70 = _o6u.get_slotnums(423);
            return _o6w.add(_o6y.multiply(_o70)), _o6w;
        };
    },
    34432: (_o71, _o72, _o73) => {
        'use strict';
        var _o74 = null;
        defineModule(_o72);
        Object.defineProperty(_o72, '__esModule', {
            'value': true
        }), _o72.getSlot424PersonalEffect = void 0;
        var _o75 = _o73(74496);
        _o72.getSlot424PersonalEffect = function(_o76) {
            var _o77 = null,
                _o78 = new _o75.SlotItemEffectModel(),
                _o79 = false,
                _o7a = new _o75.SlotItemEffectModel(),
                _o7b = 0;
            67 != _o76.ctype && 78 != _o76.ctype && 82 != _o76.ctype && 88 != _o76.ctype && 108 != _o76.ctype && 112 != _o76.ctype || (_o7a.houg += 2, _o7a.raig += 3, _o79 = true, _o7b = 1);
            var _o7c = _o76.get_slotnums(424);
            _o79 && _o78.add(_o7a.multiply(_o7c));
            var _o7d = _o76.get_each_level_nums(424),
                _o7e = 0,
                _o7f = 0,
                _o7g = 0;
            _o7d.forEach(function(_o7h, _o7i) {
                _o7i >= 2 && (_o7e += _o7h), _o7i >= 6 && (_o7f += _o7h), _o7i >= 8 && (_o7g += _o7h);
            });
            var _o7j = _o7d[10];
            return 1 == _o7b && (_o7e >= 1 && (_o78.houg += 1 * _o7e), _o7f >= 1 && (_o78.houg += 1 * _o7f), _o7g >= 1 && (_o78.houm += 1 * _o7g)), _o7j > 0 && (_o78.houm += 1 * _o7j), _o78;
        };
    },
    97423: (_o7k, _o7l, _o7m) => {
        'use strict';
        var _o7n = null;
        defineModule(_o7l);
        Object.defineProperty(_o7l, '__esModule', {
            'value': true
        }), _o7l.getSlot425PersonalEffect = void 0;
        var _o7o = _o7m(74496);
        _o7l.getSlot425PersonalEffect = function(_o7p) {
            var _o7q = null,
                _o7r = new _o7o.SlotItemEffectModel(),
                _o7s = false,
                _o7t = new _o7o.SlotItemEffectModel(),
                _o7u = 0;
            67 != _o7p.ctype && 78 != _o7p.ctype && 82 != _o7p.ctype && 88 != _o7p.ctype && 108 != _o7p.ctype && 112 != _o7p.ctype || (_o7t.houg += 2, _o7t.tais += 2, _o7t.raig += 1, _o7t.saku += 1, _o7s = true, _o7u = 1);
            var _o7v = _o7p.get_slotnums(425);
            _o7s && _o7r.add(_o7t.multiply(_o7v));
            var _o7w = _o7p.get_each_level_nums(425),
                _o7x = 0,
                _o7y = 0,
                _o7z = 0,
                _o80 = 0,
                _o81 = 0,
                _o82 = 0;
            _o7w.forEach(function(_o83, _o84) {
                _o84 >= 2 && (_o7x += _o83), _o84 >= 4 && (_o7y += _o83), _o84 >= 6 && (_o7z += _o83), _o84 >= 7 && (_o80 += _o83), _o84 >= 8 && (_o81 += _o83), _o84 >= 9 && (_o82 += _o83);
            });
            var _o85 = _o7w[10];
            return 1 == _o7u && (_o7x >= 1 && (_o7r.tais += 1 * _o7x), _o7y >= 1 && (_o7r.houg += 1 * _o7y), _o7z >= 1 && (_o7r.tais += 1 * _o7z), _o80 >= 1 && (_o7r.houm += 1 * _o80), _o81 >= 1 && (_o7r.raig += 1 * _o81), _o82 >= 1 && (_o7r.houg += 1 * _o82), _o85 >= 1 && (_o7r.tais += 1 * _o85)), _o80 >= 1 && (_o7r.houg += 1 * _o80), _o81 >= 1 && (_o7r.tais += 1 * _o81), _o82 >= 1 && (_o7r.houm += 1 * _o82), _o85 >= 1 && (_o7r.houm += 1 * _o85), _o7r;
        };
    },
    23551: (_o86, _o87, _o88) => {
        'use strict';
        var _o89 = null;
        defineModule(_o87);
        Object.defineProperty(_o87, '__esModule', {
            'value': true
        }), _o87.getSlot430PersonalEffect = void 0;
        var _o8a = _o88(74496);
        _o87.getSlot430PersonalEffect = function(_o8b) {
            var _o8c = null,
                _o8d = new _o8a.SlotItemEffectModel(),
                _o8e = false,
                _o8f = new _o8a.SlotItemEffectModel(),
                _o8g = 0;
            if (113 == _o8b.ctype && (_o8f.tyku += 1, _o8f.kaih += 1, _o8e = true), 58 != _o8b.ctype && 61 != _o8b.ctype && 64 != _o8b.ctype && 68 != _o8b.ctype && 80 != _o8b.ctype && 92 != _o8b.ctype && 113 != _o8b.ctype && 124 != _o8b.ctype || (_o8f.tyku += 2, _o8f.kaih += 1, _o8e = true, _o8g = 1), 0 == _o8e) return _o8d;
            var _o8h = _o8b.get_slotnums(430);
            if (_o8d.add(_o8f.multiply(_o8h)), 0 == _o8g) return _o8d;
            var _o8i = _o8b.get_each_level_nums(430),
                _o8j = 0,
                _o8k = 0,
                _o8l = 0;
            if (_o8g > 0 && _o8i.forEach(function(_o8m, _o8n) {
                    _o8n >= 2 && (_o8j += _o8m), _o8n >= 4 && (_o8k += _o8m), _o8n >= 7 && (_o8l += _o8m);
                }), 1 == _o8g) {
                _o8j >= 1 && (_o8d.kaih += 1 * _o8j), _o8k >= 1 && (_o8d.tyku += 1 * _o8k), _o8l >= 1 && (_o8d.kaih += 1 * _o8l);
                var _o8o = _o8i[10];
                _o8o >= 1 && (_o8d.tyku += 1 * _o8o);
            }
            return _o8d;
        };
    },
    6173: (_o8p, _o8q, _o8r) => {
        'use strict';
        var _o8s = null;
        defineModule(_o8q);
        Object.defineProperty(_o8q, '__esModule', {
            'value': true
        }), _o8q.getSlot437PersonalEffect = void 0;
        var _o8t = _o8r(74496);
        _o8q.getSlot437PersonalEffect = function(_o8u) {
            var _o8v = null,
                _o8w = new _o8t.SlotItemEffectModel(),
                _o8x = false,
                _o8y = new _o8t.SlotItemEffectModel();
            if (285 == _o8u.ship_id ? (_o8y.houg += 3, _o8y.tyku += 3, _o8y.kaih += 4, _o8x = true) : 894 == _o8u.ship_id || 899 == _o8u.ship_id ? (_o8y.houg += 4, _o8y.tyku += 4, _o8y.kaih += 4, _o8x = true) : 196 == _o8u.ship_id || 197 == _o8u.ship_id ? (_o8y.houg += 2, _o8y.tyku += 2, _o8y.kaih += 3, _o8x = true) : 508 == _o8u.ship_id || 509 == _o8u.ship_id || 646 == _o8u.ship_id ? (_o8y.houg += 2, _o8y.tyku += 2, _o8y.kaih += 2, _o8x = true) : 888 != _o8u.ship_id && 883 != _o8u.ship_id && 553 != _o8u.ship_id && 554 != _o8u.ship_id || (_o8y.houg += 1, _o8y.tyku += 2, _o8y.kaih += 2, _o8x = true), 0 == _o8x) return _o8w;
            var _o8z = _o8u.get_slotnums(437);
            return _o8w.add(_o8y.multiply(_o8z)), _o8w;
        };
    },
    53709: (_o90, _o91, _o92) => {
        'use strict';
        var _o93 = null;
        defineModule(_o91);
        Object.defineProperty(_o91, '__esModule', {
            'value': true
        }), _o91.getSlot438PersonalEffect = void 0;
        var _o94 = _o92(74496);
        _o91.getSlot438PersonalEffect = function(_o95) {
            var _o96 = null,
                _o97 = new _o94.SlotItemEffectModel(),
                _o98 = 0;
            if ([66, 28, 12, 1, 5, 10, 23, 18, 30, 38, 22, 54, 101].indexOf(_o95.ctype) > -1 && (_o97.tais += 1, _o97.kaih += 1), 160 == _o95.ship_id || 488 == _o95.ship_id || 141 == _o95.ship_id ? (_o97.tais += 1, _o97.kaih += 1) : 145 != _o95.ship_id && 588 != _o95.ship_id && 667 != _o95.ship_id && 578 != _o95.ship_id && 476 != _o95.ship_id && 363 != _o95.ship_id && 961 != _o95.ship_id || (_o98 = 1), 'うしお' == _o95.yomi || 'まいかぜ' == _o95.yomi || 'いそかぜ' == _o95.yomi || 'はまかぜ' == _o95.yomi || 'いかづち' == _o95.yomi || 'やまぐも' == _o95.yomi || 'うみかぜ' == _o95.yomi || 'かわかぜ' == _o95.yomi || 'すずかぜ' == _o95.yomi ? _o97.tais += 1 : 'しぐれ' != _o95.yomi && 'やまかぜ' != _o95.yomi && 'かみかぜ' != _o95.yomi && 'はるかぜ' != _o95.yomi && 'みくら' != _o95.yomi && 'いしがき' != _o95.yomi || (_o97.tais += 1, _o97.kaih += 1), 0 == _o98) return _o97;
            var _o99 = _o95.get_each_level_nums(438),
                _o9a = 0,
                _o9b = 0,
                _o9c = 0,
                _o9d = _o99[10];
            return _o98 > 0 && _o99.forEach(function(_o9e, _o9f) {
                _o9f >= 4 && (_o9a += _o9e), _o9f >= 6 && (_o9b += _o9e), _o9f >= 8 && (_o9c += _o9e);
            }), 1 == _o98 && (_o9a >= 1 && (_o97.tais += 1), _o9b >= 1 && (_o97.kaih += 1), _o9c >= 1 && (_o97.tais += 1), _o9d >= 1 && (_o97.kaih += 1)), _o97;
        };
    },
    99790: (_o9g, _o9h, _o9i) => {
        'use strict';
        var _o9j = null;
        defineModule(_o9h);
        Object.defineProperty(_o9h, '__esModule', {
            'value': true
        }), _o9h.getSlot439PersonalEffect = void 0;
        var _o9k = _o9i(74496);
        _o9h.getSlot439PersonalEffect = function(_o9l) {
            var _o9m = null,
                _o9n = new _o9k.SlotItemEffectModel();
            1 != _o9l.stype && 2 != _o9l.stype && 3 != _o9l.stype && 21 != _o9l.stype || (_o9n.tais += 1, _o9n.kaih += 1), 101 != _o9l.ctype && 1 != _o9l.stype || (_o9n.tais += 1);
            var _o9o = _o9l.getCountryName();
            return 'アメリカ' != _o9o && 'イギリス' != _o9o || (_o9n.tais += 2), _o9n;
        };
    },
    18387: (_o9p, _o9q, _o9r) => {
        'use strict';
        var _o9s = null;
        defineModule(_o9q);
        Object.defineProperty(_o9q, '__esModule', {
            'value': true
        }), _o9q.getSlot440_441PersonalEffect = void 0;
        var _o9t = _o9r(74496);
        _o9q.getSlot440_441PersonalEffect = function(_o9u) {
            var _o9v = null,
                _o9w = new _o9t.SlotItemEffectModel();
            return 114 == _o9u.ctype && (_o9w.raig += 2), _o9w;
        };
    },
    70941: (_o9x, _o9y, _o9z) => {
        'use strict';
        var _oa0 = null;
        defineModule(_o9y);
        Object.defineProperty(_o9y, '__esModule', {
            'value': true
        }), _o9y.getSlot442_443PersonalEffect = void 0;
        var _oa1 = _o9z(74496);
        _o9y.getSlot442_443PersonalEffect = function(_oa2) {
            var _oa3 = null,
                _oa4 = new _oa1.SlotItemEffectModel();
            return 122 == _oa2.ctype ? (_oa4.raig += 1, _oa4.kaih += 2) : 114 == _oa2.ctype && (_oa4.raig += 2), _oa4;
        };
    },
    35025: (_oa5, _oa6, _oa7) => {
        'use strict';
        var _oa8 = null;
        defineModule(_oa6);
        Object.defineProperty(_oa6, '__esModule', {
            'value': true
        }), _oa6.getSlot447PersonalEffect = void 0;
        var _oa9 = _oa7(74496);
        _oa6.getSlot447PersonalEffect = function(_oaa) {
            var _oab = null,
                _oac = new _oa9.SlotItemEffectModel(),
                _oad = _oaa.get_each_level_nums(447),
                _oae = 0,
                _oaf = 0,
                _oag = 0,
                _oah = 0;
            _oad.forEach(function(_oai, _oaj) {
                _oaj >= 2 && (_oae += _oai), _oaj >= 4 && (_oaf += _oai), _oaj >= 6 && (_oag += _oai), _oaj >= 8 && (_oah += _oai);
            }), _oae >= 1 && (_oac.houg += 1 * _oae), _oaf >= 1 && (_oac.tyku += 1 * _oaf), _oag >= 1 && (_oac.tais += 1 * _oag), _oah >= 1 && (_oac.kaih += 1 * _oah);
            var _oak = _oad[10];
            _oak >= 1 && (_oac.tais += 1 * _oak);
            var _oal = false,
                _oam = new _oa9.SlotItemEffectModel();
            if (76 == _oaa.ctype && (_oam.houg += 1, _oam.tais += 1, _oam.kaih += 2, _oal = true), 'うんよう' == _oaa.yomi ? (_oam.houg += 1, _oam.tais += 1, _oam.kaih += 1, _oal = true) : 'ほうしょう' != _oaa.yomi && 'たいげい・りゅうほう' != _oaa.yomi || (_oam.houg += 1, _oam.tais += 2, _oam.kaih += 1, _oal = true), 0 == _oal) return _oac;
            894 != _oaa.ship_id && 899 != _oaa.ship_id || (_oam.houg += 1, _oam.kaih += 1, _oam.tais += 1, _oam.tyku += 1, _oal = true);
            var _oan = _oaa.get_slotnums(447);
            return _oac.add(_oam.multiply(_oan)), _oac;
        };
    },
    96804: (_oao, _oap, _oaq) => {
        'use strict';
        var _oar = null;
        defineModule(_oap);
        Object.defineProperty(_oap, '__esModule', {
            'value': true
        }), _oap.getSlot450PersonalEffect = void 0;
        var _oas = _oaq(74496);
        _oap.getSlot450PersonalEffect = function(_oat) {
            var _oau = null,
                _oav = new _oas.SlotItemEffectModel(),
                _oaw = false,
                _oax = new _oas.SlotItemEffectModel();
            if (101 == _oat.ctype && (_oax.houg += 1, _oax.tyku += 2, _oax.souk += 1, _oax.kaih += 3, _oaw = true), 1 == _oat.stype && (_oax.tyku += 1, _oax.souk += 1, _oax.kaih += 2, _oaw = true), 0 == _oaw) return _oav;
            var _oay = _oat.get_slotnums(450);
            return _oav.add(_oax.multiply(_oay)), _oav;
        };
    },
    33896: (_oaz, _ob0, _ob1) => {
        'use strict';
        var _ob2 = null;
        defineModule(_ob0);
        Object.defineProperty(_ob0, '__esModule', {
            'value': true
        }), _ob0.getSlot451PersonalEffect = void 0;
        var _ob3 = _ob1(74496);
        _ob0.getSlot451PersonalEffect = function(_ob4) {
            var _ob5 = null,
                _ob6 = new _ob3.SlotItemEffectModel(),
                _ob7 = false,
                _ob8 = new _ob3.SlotItemEffectModel(),
                _ob9 = 0;
            if ('あきつまる' == _ob4.yomi ? (_ob8.houg += 1, _ob8.tais += 2, _ob7 = true, 166 == _ob4.ship_id && (_ob9 = 2)) : 'やましおまる' == _ob4.yomi && (_ob8.houg += 1, _ob8.tais += 3, _ob7 = true, _ob9 = 1), 0 == _ob7) return _ob6;
            var _oba = _ob4.get_slotnums(451);
            if (_ob6.add(_ob8.multiply(_oba)), 0 == _ob9) return _ob6;
            var _obb = _ob4.get_each_level_nums(451),
                _obc = [];
            return _ob9 > 0 && _obb.forEach(function(_obd, _obe) {
                var _obf = null;
                for (var _obg = 1; _obg <= _ob4.SLOT_LEVEL_MAX; _obg++) _obe >= _obg && (null == _obc[_obg] && (_obc[_obg] = 0), _obc[_obg] += _obd);
            }), 1 == _ob9 ? (_obc[1] >= 1 && (_ob6.houg += 2 * _obc[1]), _obc[2] >= 1 && (_ob6.houm += 1 * _obc[2]), _obc[3] >= 1 && (_ob6.tais += 1 * _obc[3]), _obc[4] >= 1 && (_ob6.houg += 1 * _obc[4]), _obc[6] >= 1 && (_ob6.houm += 1 * _obc[6]), _obc[8] >= 1 && (_ob6.tais += 1 * _obc[8]), _obc[10] >= 1 && (_ob6.houg += 1 * _obc[10])) : 2 == _ob9 && (_obc[1] >= 1 && (_ob6.houg += 1 * _obc[1]), _obc[3] >= 1 && (_ob6.tais += 1 * _obc[3]), _obc[5] >= 1 && (_ob6.houm += 1 * _obc[5]), _obc[7] >= 1 && (_ob6.tais += 1 * _obc[7]), _obc[10] >= 1 && (_ob6.houg += 1 * _obc[10])), _ob6;
        };
    },
    11031: function(_obh, _obi, _obj) {
        'use strict';
        var _obk = null;
        var _obl = this && this.__importDefault || function(_obm) {
            var _obn = null;
            return _obm && _obm.__esModule ? _obm : {
                'default': _obm
            };
        };
        defineModule(_obi);
        Object.defineProperty(_obi, '__esModule', {
            'value': true
        }), _obi.getSlot455PersonalEffect = void 0;
        var _obo = _obj(74496),
            _obp = _obl(_obj(18622));
        _obi.getSlot455PersonalEffect = function(_obq) {
            var _obr = null,
                _obs = new _obo.SlotItemEffectModel(),
                _obt = false,
                _obu = new _obo.SlotItemEffectModel(),
                _obv = 0,
                _obw = _obq.get_slotnums(455);
            if (1 != _obq.ctype && 5 != _obq.ctype && 12 != _obq.ctype || (_obu.houg += 2, _obu.tyku += 1, 12 == _obq.ctype && (_obu.houg += 1), 666 == _obq.ship_id ? (_obu.houg += 1, _obu.tais += 1) : 959 == _obq.ship_id && (_obu.houg += 2, _obw >= 2 && (_obs.houg += 2), _obw >= 3 && (_obs.houg += 3)), _obv = 1, _obt = true), 'うらなみ' == _obq.yomi && (_obu.houg += 1, 647 == _obq.ship_id && (_obu.houg += 1, _obu.raig += 1, _obu.tais += 1, _obu.kaih += 1), _obt = true), 0 == _obt) return _obs;
            if (_obs.add(_obu.multiply(_obw)), 0 == _obv) return _obs;
            for (var _obx = 0, _oby = 0, _obz = 0, _oc0 = _obq.have_slot_ids(); _obz < _oc0.length; _obz++) {
                var _oc1 = _oc0[_obz],
                    _oc2 = _obp.default.model.slot.getMst(_oc1),
                    _oc3 = _oc2.equipType;
                12 != _oc3 && 13 != _oc3 || (_oc2.sakuteki >= 5 && (_obx += _obq.get_slotnums(parseInt(_oc1))), _oc2.taiku >= 2 && (_oby += _obq.get_slotnums(parseInt(_oc1))));
            }
            if (1 == _obv) {
                _obx >= 1 && (_obs.houg += 3, _obs.kaih += 2, _obs.raig += 1);
                var _oc4 = _obq.get_slotnums(13),
                    _oc5 = _obq.get_slotnums(125),
                    _oc6 = _obq.get_slotnums(285),
                    _oc7 = _oc4 + _oc5 + _oc6;
                1 == _oc7 ? (_obs.houg += 1, _obs.raig += 3) : _oc7 >= 2 && (_obs.houg += 2, _obs.raig += 5), _oc6 >= 1 && (_obs.raig += 1), _oby >= 1 && (_obs.tyku += 4);
            }
            return _obs;
        };
    },
    71383: (_oc8, _oc9, _oca) => {
        'use strict';
        var _ocb = null;
        defineModule(_oc9);
        Object.defineProperty(_oc9, '__esModule', {
            'value': true
        }), _oc9.getSlot456PersonalEffect = void 0;
        var _occ = _oca(74496);
        _oc9.getSlot456PersonalEffect = function(_ocd) {
            var _oce = null,
                _ocf = new _occ.SlotItemEffectModel(),
                _ocg = false,
                _och = new _occ.SlotItemEffectModel(),
                _oci = _ocd.getCountryName();
            if ('アメリカ' == _oci && (_och.houg += 3, _och.kaih += 4, _och.saku += 4, _ocf.houm += 3, _ocg = true), 'イギリス' != _oci && 'オーストラリア' != _oci || (_och.houg += 2, _och.kaih += 2, _och.saku += 2, _ocf.houm += 2, _ocg = true), 87 != _ocd.ctype && 91 != _ocd.ctype || (_och.houg += 1, _ocf.leng += 1, _ocg = true), 651 != _ocd.ship_id && 656 != _ocd.ship_id || (_ocf.houg += 2, _ocf.kaih += 2, _ocf.saku += 3, _ocf.leng += 1, _ocf.houm += 2), 0 == _ocg) return _ocf;
            var _ocj = _ocd.get_slotnums(456);
            return _ocf.add(_och.multiply(_ocj)), _ocf;
        };
    },
    55888: (_ock, _ocl, _ocm) => {
        'use strict';
        var _ocn = null;
        defineModule(_ocl);
        Object.defineProperty(_ocl, '__esModule', {
            'value': true
        }), _ocl.getSlot457PersonalEffect = void 0;
        var _oco = _ocm(74496);
        _ocl.getSlot457PersonalEffect = function(_ocp) {
            var _ocq = null,
                _ocr = new _oco.SlotItemEffectModel(),
                _ocs = 0;
            if (109 == _ocp.ctype ? (_ocr.raig += 3, _ocr.kaih += 3, _ocs = 1) : 71 == _ocp.ctype || 103 == _ocp.ctype ? (_ocr.raig += 2, _ocr.kaih += 2, _ocs = 2) : 44 == _ocp.ctype && (_ocr.raig += 1, _ocr.kaih += 4, _ocs = 3), 0 == _ocs) return _ocr;
            var _oct = _ocp.get_each_level_nums(461),
                _ocu = [];
            return _ocs > 0 && _oct.forEach(function(_ocv, _ocw) {
                var _ocx = null;
                for (var _ocy = 1; _ocy <= _ocp.SLOT_LEVEL_MAX; _ocy++) null == _ocu[_ocy] && (_ocu[_ocy] = 0), _ocw >= _ocy && (_ocu[_ocy] += _ocv);
            }), 1 == _ocs ? (_ocu[2] >= 1 && (_ocr.raig += 1 * _ocu[2]), _ocu[3] >= 1 && (_ocr.kaih += 1 * _ocu[3]), _ocu[4] >= 1 && (_ocr.raig += 1 * _ocu[4]), _ocu[5] >= 1 && (_ocr.houm += 1 * _ocu[5]), _ocu[6] >= 1 && (_ocr.raig += 1 * _ocu[6]), _ocu[8] >= 1 && (_ocr.raig += 1 * _ocu[8]), _ocu[10] >= 1 && (_ocr.houm += 1 * _ocu[10])) : 2 == _ocs ? (_ocu[3] >= 1 && (_ocr.kaih += 1 * _ocu[3]), _ocu[4] >= 1 && (_ocr.raig += 1 * _ocu[4]), _ocu[6] >= 1 && (_ocr.raig += 1 * _ocu[6]), _ocu[8] >= 1 && (_ocr.raig += 1 * _ocu[8]), _ocu[10] >= 1 && (_ocr.houm += 1 * _ocu[10])) : 3 == _ocs && (_ocu[4] >= 1 && (_ocr.raig += 1 * _ocu[4]), _ocu[6] >= 1 && (_ocr.raig += 1 * _ocu[6]), _ocu[8] >= 1 && (_ocr.raig += 1 * _ocu[8]), _ocu[10] >= 1 && (_ocr.houm += 1 * _ocu[10])), _ocr;
        };
    },
    2258: (_ocz, _od0, _od1) => {
        'use strict';
        var _od2 = null;
        defineModule(_od0);
        Object.defineProperty(_od0, '__esModule', {
            'value': true
        }), _od0.getSlot458PersonalEffect = void 0;
        var _od3 = _od1(74496);
        _od0.getSlot458PersonalEffect = function(_od4) {
            var _od5 = null,
                _od6 = new _od3.SlotItemEffectModel(),
                _od7 = 0,
                _od8 = false;
            if (13 != _od4.stype && 14 != _od4.stype || (_od8 = true), 109 == _od4.ctype ? (_od6.raig += 3, _od6.kaih += 6, _od7 = 1) : 71 == _od4.ctype || 103 == _od4.ctype ? (_od6.raig += 3, _od6.kaih += 4, _od7 = 2) : 44 == _od4.ctype && (_od6.raig += 3, _od6.kaih += 3, _od7 = 3), 0 == _od8 && 0 == _od7) return _od6;
            var _od9 = [];
            [458, 461].forEach(function(_oda) {
                var _odb = null,
                    _odc = _od4.get_each_level_nums(_oda);
                null == _od9[_oda] && (_od9[_oda] = []), _odc.forEach(function(_odd, _ode) {
                    var _odf = null;
                    for (var _odg = 1; _odg <= _od4.SLOT_LEVEL_MAX; _odg++) null == _od9[_oda][_odg] && (_od9[_oda][_odg] = 0), _ode >= _odg && (_od9[_oda][_odg] += _odd);
                });
            });
            var _odh = _od9[458][2],
                _odi = _od9[458][3],
                _odj = _od9[458][4],
                _odk = _od9[458][5],
                _odl = _od9[458][6],
                _odm = _od9[458][8],
                _odn = _od9[458][10],
                _odo = _od9[461][4];
            return _od7 >= 1 && _od7 <= 3 && (_odj >= 1 && (_od6.houm += 1 * _odj), _odl >= 1 && (_od6.kaih += 1 * _odl), _odm >= 1 && (_od6.raig += 1 * _odm)), _od8 && (_odi >= 1 && (_od6.kaih += 1 * _odi), _odk >= 1 && (_od6.raig += 1 * _odk), _odn >= 1 && (_od6.houm += 1 * _odn), _odh >= 1 && _odo >= 1 && (_od6.raig += 7, _od6.houm += 5)), _od6;
        };
    },
    43768: (_odp, _odq, _odr) => {
        'use strict';
        var _ods = null;
        defineModule(_odq);
        Object.defineProperty(_odq, '__esModule', {
            'value': true
        }), _odq.getSlot463PersonalEffect = void 0;
        var _odt = _odr(74496);
        _odq.getSlot463PersonalEffect = function(_odu) {
            var _odv = null,
                _odw = new _odt.SlotItemEffectModel(),
                _odx = false,
                _ody = new _odt.SlotItemEffectModel(),
                _odz = _odu.get_slotnums(142),
                _oe0 = _odu.get_slotnums(460),
                _oe1 = _odz + _oe0;
            if (37 == _odu.ctype && (_ody.houg += 1, _ody.tyku += 2, _ody.kaih += 1, _ody.houm += 1, _oe1 >= 1 && (_odw.tyku += 1, _odw.kaih += 1, _odw.houm += 1), _odx = true), 916 != _odu.ship_id && 911 != _odu.ship_id && 546 != _odu.ship_id || (_ody.houg += 1, _ody.kaih += 1, _ody.houm += 2, _oe0 >= 1 && (_odw.houg += 1, _odw.kaih += 1, _odw.houm += 2), _odx = true), 0 == _odx) return _odw;
            var _oe2 = _odu.get_slotnums(463);
            return _odw.add(_ody.multiply(_oe2)), _odw;
        };
    },
    92174: (_oe3, _oe4, _oe5) => {
        'use strict';
        var _oe6 = null;
        defineModule(_oe4);
        Object.defineProperty(_oe4, '__esModule', {
            'value': true
        }), _oe4.getSlot464PersonalEffect = void 0;
        var _oe7 = _oe5(74496);
        _oe4.getSlot464PersonalEffect = function(_oe8) {
            var _oe9 = null,
                _oea = new _oe7.SlotItemEffectModel(),
                _oeb = false,
                _oec = new _oe7.SlotItemEffectModel(),
                _oed = _oe8.get_slotnums(142),
                _oee = _oe8.get_slotnums(460),
                _oef = _oed + _oee;
            if (37 == _oe8.ctype ? (_oec.tyku += 3, _oec.kaih += 2, _oef >= 1 && (_oea.tyku += 2, _oea.kaih += 1, _oea.houm += 1), _oeb = true) : 6 != _oe8.ctype && 73 != _oe8.ctype && 113 != _oe8.ctype || (_oec.tyku = _oec.tyku - 2, _oec.kaih = _oec.kaih - 2, _oeb = true), 916 != _oe8.ship_id && 911 != _oe8.ship_id && 546 != _oe8.ship_id && 593 != _oe8.ship_id && 954 != _oe8.ship_id || (_oec.tyku += 2, _oec.kaih += 2, _oee >= 1 && (_oea.houg += 2, _oea.tyku += 2, _oea.kaih += 2, _oea.houm += 3), _oeb = true), 0 == _oeb) return _oea;
            var _oeg = _oe8.get_slotnums(464);
            return _oea.add(_oec.multiply(_oeg)), _oea;
        };
    },
    38003: (_oeh, _oei, _oej) => {
        'use strict';
        var _oek = null;
        defineModule(_oei);
        Object.defineProperty(_oei, '__esModule', {
            'value': true
        }), _oei.getSlot465PersonalEffect = void 0;
        var _oel = _oej(74496);
        _oei.getSlot465PersonalEffect = function(_oem) {
            var _oen = null,
                _oeo = new _oel.SlotItemEffectModel(),
                _oep = false,
                _oeq = new _oel.SlotItemEffectModel(),
                _oer = _oem.get_slotnums(142),
                _oes = _oem.get_slotnums(460),
                _oet = _oer + _oes;
            if (916 == _oem.ship_id ? (_oeq.houg += 2, _oeq.kaih += 8, _oeq.houm += 2, _oes >= 1 && (_oeo.kaih += 2, _oeo.houm += 1), _oep = true) : 911 != _oem.ship_id && 546 != _oem.ship_id || (_oeq.houg += 1, _oeq.kaih += 2, _oeq.houm += 1, _oes >= 1 && (_oeo.kaih += 1, _oeo.houm += 1), _oep = true), 37 == _oem.ctype && _oet >= 1 && (_oeo.houg += 2, _oeo.houm += 2), 0 == _oep) return _oeo;
            var _oeu = _oem.get_slotnums(465);
            return _oeo.add(_oeq.multiply(_oeu)), _oeo;
        };
    },
    65455: (_oev, _oew, _oex) => {
        'use strict';
        var _oey = null;
        defineModule(_oew);
        Object.defineProperty(_oew, '__esModule', {
            'value': true
        }), _oew.getSlot466PersonalEffect = void 0;
        var _oez = _oex(74496);
        _oew.getSlot466PersonalEffect = function(_of0) {
            var _of1 = null,
                _of2 = new _oez.SlotItemEffectModel(),
                _of3 = false,
                _of4 = new _oez.SlotItemEffectModel();
            if (277 == _of0.ship_id || 278 == _of0.ship_id || 156 == _of0.ship_id || 288 == _of0.ship_id || 112 == _of0.ship_id || 280 == _of0.ship_id || 279 == _of0.ship_id ? (_of4.houg += 1, _of4.houm += 1, _of3 = true) : 461 == _of0.ship_id || 462 == _of0.ship_id || 466 == _of0.ship_id || 467 == _of0.ship_id ? (_of4.houg += 2, _of4.kaih += 2, _of4.houm += 1, _of3 = true) : 594 != _of0.ship_id && 698 != _of0.ship_id && 646 != _of0.ship_id && 599 != _of0.ship_id && 610 != _of0.ship_id && 196 != _of0.ship_id && 197 != _of0.ship_id || (_of4.houg += 1, _of4.kaih += 1, _of4.houm += 2, _of3 = true), 0 == _of3) return _of2;
            var _of5 = _of0.get_slotnums(466);
            return _of2.add(_of4.multiply(_of5)), _of2;
        };
    },
    70362: (_of6, _of7, _of8) => {
        'use strict';
        var _of9 = null;
        defineModule(_of7);
        Object.defineProperty(_of7, '__esModule', {
            'value': true
        }), _of7.getSlot467PersonalEffect = void 0;
        var _ofa = _of8(74496);
        _of7.getSlot467PersonalEffect = function(_ofb) {
            var _ofc = null,
                _ofd = new _ofa.SlotItemEffectModel(),
                _ofe = false,
                _off = new _ofa.SlotItemEffectModel();
            if ('アメリカ' == _ofb.getCountryName()) {
                for (var _ofg = _ofb.getUSSWaterRaderDict(), _ofh = _ofb.getUSSAirRaderDict(), _ofi = 0, _ofj = 0, _ofk = 0, _ofl = _ofb.have_slot_ids(); _ofk < _ofl.length; _ofk++) {
                    var _ofm = _ofl[_ofk];
                    _ofg[parseInt(_ofm)] && (_ofi += _ofb.get_slotnums(parseInt(_ofm))), _ofh[parseInt(_ofm)] && (_ofj += _ofb.get_slotnums(parseInt(_ofm)));
                }
                _off.houg += 1, _off.tyku += 1, _off.kaih += 2, _ofi >= 1 && (_ofd.houg += 1, _ofd.tyku += 1, _ofd.kaih += 1, _ofd.houm += 2), _ofj >= 1 && (_ofd.tyku += 2, _ofd.kaih += 2), 65 != _ofb.ctype && 93 != _ofb.ctype && 102 != _ofb.ctype && 107 != _ofb.ctype && 125 != _ofb.ctype || (_off.tyku += 2, _off.kaih += 1), _ofe = true;
            }
            if (0 == _ofe) return _ofd;
            var _ofn = _ofb.get_slotnums(467);
            return _ofd.add(_off.multiply(_ofn)), _ofd;
        };
    },
    68086: (_ofo, _ofp, _ofq) => {
        'use strict';
        var _ofr = null;
        defineModule(_ofp);
        Object.defineProperty(_ofp, '__esModule', {
            'value': true
        }), _ofp.getSlot470PersonalEffect = void 0;
        var _ofs = _ofq(74496);
        _ofp.getSlot470PersonalEffect = function(_oft) {
            var _ofu = null,
                _ofv = new _ofs.SlotItemEffectModel(),
                _ofw = false,
                _ofx = new _ofs.SlotItemEffectModel(),
                _ofy = _oft.get_slotnums(470),
                _ofz = _oft.get_slotnums(529),
                _og0 = _ofy + _ofz,
                _og1 = _oft.get_each_level_over_nums([470, 529]),
                _og2 = (_og1.slot[470], _og1.slot[529]),
                _og3 = _og1.total,
                _og4 = 0;
            23 == _oft.ctype || 18 == _oft.ctype ? (_ofx.houg += 1, _ofw = true, _og4 = 1) : 30 == _oft.ctype && (_ofx.houg += 2, _ofw = true, _og4 = 2), ('しぐれ' == _oft.yomi || 'ゆきかぜ' == _oft.yomi || 'いそかぜ' == _oft.yomi) && (_ofx.kaih += 2, _ofw = true), 405 == _oft.ship_id || 246 == _oft.ship_id || 144 == _oft.ship_id || 145 == _oft.ship_id || 497 == _oft.ship_id ? (_ofz >= 1 && (_ofv.houg += 1 * _ofz, _ofv.tyku += 1 * _ofz, _ofv.houm += 1 * _ofz, _ofv.kaih += 1 * _ofz), 2 == _ofz ? _ofv.houg += 1 : _ofz >= 3 && (_ofv.houg += 3), _og2[8] >= 1 && (_ofv.tyku += 1 * _og2[8]), _og2[10] >= 1 && (_ofv.houg += 1 * _og2[10])) : 323 == _oft.ship_id || 498 == _oft.ship_id || 961 == _oft.ship_id ? (_ofz >= 1 && (_ofv.houg += 2 * _ofz, _ofv.tyku += 2 * _ofz, _ofv.houm += 1 * _ofz, _ofv.kaih += 1 * _ofz), 2 == _ofz ? _ofv.houg += 2 : _ofz >= 3 && (_ofv.houg += 4), _og2[6] >= 1 && (_ofv.tyku += 1 * _og2[6]), _og2[8] >= 1 && (_ofv.houm += 1 * _og2[8]), _og2[10] >= 1 && (_ofv.houg += 1 * _og2[10])) : 975 == _oft.ship_id && (_ofz >= 1 && (_ofv.houg += 3 * _ofz, _ofv.tyku += 3 * _ofz, _ofv.houm += 2 * _ofz, _ofv.kaih += 2 * _ofz), 2 == _ofz ? _ofv.houg += 3 : _ofz >= 3 && (_ofv.houg += 6), _og2[4] >= 1 && (_ofv.tyku += 1 * _og2[4]), _og2[6] >= 1 && (_ofv.houg += 1 * _og2[6]), _og2[8] >= 1 && (_ofv.houm += 1 * _og2[8]), _og2[10] >= 1 && (_ofv.houg += 1 * _og2[10])), 961 == _oft.ship_id && (_ofx.houg += 3, _ofx.houm += 3, _ofx.kaih += 2, _ofw = true), 566 != _oft.ship_id && 567 != _oft.ship_id && 568 != _oft.ship_id && 656 != _oft.ship_id && 670 != _oft.ship_id && 915 != _oft.ship_id && 651 != _oft.ship_id && 145 != _oft.ship_id && 961 != _oft.ship_id && 951 != _oft.ship_id || (_ofv.houg += 1, _ofv.houm += 2, _og0 >= 2 && (_ofv.houg += 2), _og3[5] >= 1 && (_ofv.houm += 1 * _og3[5]), _og3[8] >= 1 && (_ofv.houg += 1 * _og3[8]), _og3[10] >= 1 && (_ofv.houm += 1 * _og3[10])), _ofw && _ofv.add(_ofx.multiply(_og0));
            var _og5 = _oft.get_have_rader_nums(),
                _og6 = _og5.water_rader,
                _og7 = _og5.air_rader;
            return _og6 >= 1 && (1 == _og4 ? (_ofv.houg += 1, _ofv.raig += 3, _ofv.kaih += 1, _ofv.houm += 1) : 2 == _og4 && (_ofv.houg += 2, _ofv.raig += 3, _ofv.kaih += 1, _ofv.houm += 3)), _og7 >= 1 && (_ofz >= 1 && (_ofv.tyku += 2, _ofv.kaih += 2), 2 == _ofz ? _ofv.tyku += 2 : _ofz >= 3 && (_ofv.tyku += 4)), _ofv;
        };
    },
    78173: (_og8, _og9, _oga) => {
        'use strict';
        var _ogb = null;
        defineModule(_og9);
        Object.defineProperty(_og9, '__esModule', {
            'value': true
        }), _og9.getSlot471PersonalEffect = void 0;
        var _ogc = _oga(74496);
        _og9.getSlot471PersonalEffect = function(_ogd) {
            var _oge = null,
                _ogf = new _ogc.SlotItemEffectModel(),
                _ogg = false,
                _ogh = new _ogc.SlotItemEffectModel(),
                _ogi = 0;
            if ('フランス' == _ogd.getCountryName() && (_ogh.houg += 2, _ogh.kaih += 2, _ogh.houm += 2, _ogg = true, _ogi = 1), 79 == _ogd.ctype && (_ogh.houg += 2, _ogh.houm += 1, _ogg = true), 0 == _ogg) return _ogf;
            var _ogj = _ogd.get_slotnums(471);
            if (_ogf.add(_ogh.multiply(_ogj)), 0 == _ogi) return _ogf;
            var _ogk = _ogd.get_each_level_nums(471),
                _ogl = 0,
                _ogm = 0;
            if (_ogi > 0 && _ogk.forEach(function(_ogn, _ogo) {
                    _ogo >= 6 && (_ogl += _ogn), _ogo >= 8 && (_ogm += _ogn);
                }), 1 == _ogi) {
                _ogl >= 1 && (_ogf.kaih += 1 * _ogl, _ogf.houm += 1 * _ogl), _ogm >= 1 && (_ogf.houg += 1 * _ogm, _ogf.kaih += 1 * _ogm, _ogf.houm += 1 * _ogm);
                var _ogp = _ogk[10];
                _ogp >= 1 && (_ogf.houg += 1 * _ogp, _ogf.houm += 1 * _ogp);
            }
            return _ogf;
        };
    },
    22581: (_ogq, _ogr, _ogs) => {
        'use strict';
        var _ogt = null;
        defineModule(_ogr);
        Object.defineProperty(_ogr, '__esModule', {
            'value': true
        }), _ogr.getSlot472PersonalEffect = void 0;
        var _ogu = _ogs(74496);
        _ogr.getSlot472PersonalEffect = function(_ogv) {
            var _ogw = null,
                _ogx = new _ogu.SlotItemEffectModel(),
                _ogy = false,
                _ogz = new _ogu.SlotItemEffectModel(),
                _oh0 = _ogv.getCountryName();
            if ('アメリカ' == _oh0 && (_ogz.tais += 2, _ogy = true), 'イギリス' == _oh0 && (_ogz.tais += 1, _ogy = true), 1 == _ogv.stype && (_ogz.kaih += 1, _ogy = true), _ogy) {
                var _oh1 = _ogv.get_slotnums(472);
                _ogx.add(_ogz.multiply(_oh1));
            }
            return 920 == _ogv.ship_id && (_ogx.tais += 1, _ogx.kaih += 1, _ogx.houm += 1), _ogx;
        };
    },
    13053: (_oh2, _oh3, _oh4) => {
        'use strict';
        var _oh5 = null;
        defineModule(_oh3);
        Object.defineProperty(_oh3, '__esModule', {
            'value': true
        }), _oh3.getSlot473PersonalEffect = void 0;
        var _oh6 = _oh4(74496);
        _oh3.getSlot473PersonalEffect = function(_oh7) {
            var _oh8 = null,
                _oh9 = new _oh6.SlotItemEffectModel(),
                _oha = false,
                _ohb = new _oh6.SlotItemEffectModel(),
                _ohc = _oh7.getCountryName();
            if ('アメリカ' == _ohc && (_ohb.houg += 1, _ohb.kaih += 1, _ohb.tyku += 1, _oha = true), 'イギリス' == _ohc && (_ohb.houg += 1, _ohb.kaih += 1, _oha = true), 0 == _oha) return _oh9;
            var _ohd = _oh7.get_slotnums(473);
            return _oh9.add(_ohb.multiply(_ohd)), _oh9;
        };
    },
    47874: (_ohe, _ohf, _ohg) => {
        'use strict';
        var _ohh = null;
        defineModule(_ohf);
        Object.defineProperty(_ohf, '__esModule', {
            'value': true
        }), _ohf.getSlot474PersonalEffect = void 0;
        var _ohi = _ohg(74496);
        _ohf.getSlot474PersonalEffect = function(_ohj) {
            var _ohk = null,
                _ohl = new _ohi.SlotItemEffectModel(),
                _ohm = false,
                _ohn = new _ohi.SlotItemEffectModel(),
                _oho = _ohj.getCountryName();
            if ('アメリカ' == _oho && (_ohn.houg += 2, _ohn.kaih += 1, _ohn.tyku += 1, _ohm = true), 'イギリス' == _oho && (_ohn.houg += 1, _ohn.kaih += 1, _ohn.tyku += 1, _ohm = true), 'フランス' == _oho && (_ohn.houg += 1, _ohn.tyku += 1, _ohm = true), 707 != _ohj.ship_id && 930 != _ohj.ship_id || (_ohn.houg += 1, _ohn.kaih += 1, _ohm = true), 0 == _ohm) return _ohl;
            var _ohp = _ohj.get_slotnums(474);
            return _ohl.add(_ohn.multiply(_ohp)), _ohl;
        };
    },
    42788: (_ohq, _ohr, _ohs) => {
        'use strict';
        var _oht = null;
        defineModule(_ohr);
        Object.defineProperty(_ohr, '__esModule', {
            'value': true
        }), _ohr.getSlot478PersonalEffect = void 0;
        var _ohu = _ohs(74496);
        _ohr.getSlot478PersonalEffect = function(_ohv) {
            var _ohw = null,
                _ohx = new _ohu.SlotItemEffectModel(),
                _ohy = _ohv.get_each_level_nums(478),
                _ohz = [];
            return _ohy.forEach(function(_oi0, _oi1) {
                var _oi2 = null;
                for (var _oi3 = 1; _oi3 <= _ohv.SLOT_LEVEL_MAX; _oi3++) _oi1 >= _oi3 && (null == _ohz[_oi3] && (_ohz[_oi3] = 0), _ohz[_oi3] += _oi0);
            }), _ohz.every(function(_oi4) {
                return 0 == _oi4;
            }) || (_ohz[1] >= 1 && (_ohx.houg += 1), _ohz[2] >= 1 && (_ohx.houm += 1), _ohz[3] >= 1 && (_ohx.kaih += 1), _ohz[4] >= 1 && (_ohx.baku += 1), _ohz[5] >= 1 && (_ohx.raig += 1), _ohz[6] >= 1 && (_ohx.tyku += 1), _ohz[7] >= 1 && (_ohx.houg += 1), _ohz[8] >= 1 && (_ohx.houm += 1), _ohz[9] >= 1 && (_ohx.kaih += 1), _ohz[10] >= 1 && (_ohx.houg += 1)), _ohx;
        };
    },
    22218: (_oi5, _oi6, _oi7) => {
        'use strict';
        var _oi8 = null;
        defineModule(_oi6);
        Object.defineProperty(_oi6, '__esModule', {
            'value': true
        }), _oi6.getSlot47PersonalEffect = void 0;
        var _oi9 = _oi7(74496);
        _oi6.getSlot47PersonalEffect = function(_oia) {
            var _oib = null,
                _oic = new _oi9.SlotItemEffectModel(),
                _oid = new _oi9.SlotItemEffectModel();
            if (['あさしも', 'はるかぜ', 'かみかぜ', 'やまかぜ', 'まいかぜ', 'しぐれ'].indexOf(_oia.yomi) >= 0 ? (_oid.tais += 3, _oid.kaih += 2, _oid.houg += 1) : ['きしなみ', 'いそかぜ', 'はまかぜ', 'うしお', 'いかづち', 'やまぐも'].indexOf(_oia.yomi) >= 0 && (_oid.tais += 2, _oid.kaih += 2), !_oid.exists()) return _oic;
            var _oie = _oia.get_slotnums(47) + _oia.get_slotnums(438);
            return _oic = _oid.multiply(_oie);
        };
    },
    57664: (_oif, _oig, _oih) => {
        'use strict';
        var _oii = null;
        defineModule(_oig);
        Object.defineProperty(_oig, '__esModule', {
            'value': true
        }), _oig.getSlot483PersonalEffect = void 0;
        var _oij = _oih(74496);
        _oig.getSlot483PersonalEffect = function(_oik) {
            var _oil = null,
                _oim = new _oij.SlotItemEffectModel(),
                _oin = 0,
                _oio = 0,
                _oip = 0,
                _oiq = 0,
                _oir = 0,
                _ois = 0,
                _oit = 0;
            if (6 == _oik.ctype ? (_oim.houg += 2, _oim.tyku += 3, _oim.houm += 1, _oin = 1) : 2 == _oik.ctype ? (_oim.houg += 1, _oim.tyku += 2, _oim.kaih += 2, _oim.houm += 1, _oio = 1) : 37 == _oik.ctype && (_oip = 1), 8 == _oik.stype || 9 == _oik.stype || 10 == _oik.stype ? _oiq = 1 : 5 != _oik.stype && 6 != _oik.stype || (_oir = 1), 149 == _oik.ship_id ? (_oim.houg += 2, _oim.tyku += 2) : 591 == _oik.ship_id ? (_oim.houg += 3, _oim.tyku += 3, _oim.kaih += 1) : 150 == _oik.ship_id ? (_oim.houg += 1, _oim.tyku += 1) : 592 == _oik.ship_id ? (_oim.houg += 2, _oim.tyku += 2, _oim.kaih += 2) : 151 == _oik.ship_id ? (_oim.houg += 1, _oim.tyku += 2, _oim.kaih += 2) : 593 == _oik.ship_id ? (_oim.houg += 2, _oim.tyku += 5, _oim.kaih += 3) : 954 == _oik.ship_id ? (_oim.houg += 2, _oim.tyku += 4, _oim.kaih += 2) : 152 == _oik.ship_id ? (_oim.houg += 2, _oim.tyku += 2) : 911 == _oik.ship_id || 916 == _oik.ship_id || 546 == _oik.ship_id ? (_oim.houg += 2, _oim.tyku += 2, _oim.kaih += 2, _ois = 1) : 553 == _oik.ship_id || 554 == _oik.ship_id ? (_oim.houg += 1, _oim.tyku += 2, _oim.kaih += 1, _oit = 1) : 541 == _oik.ship_id || 411 == _oik.ship_id || 412 == _oik.ship_id ? (_oim.houg += 1, _oim.tyku += 2) : 573 == _oik.ship_id && (_oim.houg += 2, _oim.tyku += 2, _oim.kaih += 1), 0 == [_oin, _oio, _oip, _oiq, _oir, _ois, _oit].reduce(function(_oiu, _oiv) {
                    return _oiu + _oiv;
                }, 0)) return _oim;
            var _oiw = _oik.get_each_level_nums(483),
                _oix = 0,
                _oiy = [];
            return _oiw.forEach(function(_oiz, _oj0) {
                var _oj1 = null;
                _oj0 >= 6 && (_oix += _oiz);
                for (var _oj2 = 1; _oj2 <= _oik.SLOT_LEVEL_MAX; _oj2++) null == _oiy[_oj2] && (_oiy[_oj2] = 0), _oj0 >= _oj2 && (_oiy[_oj2] += _oiz);
            }), 1 == _oin ? (_oix >= 1 && (_oim.houm += 1), _oiw[10] >= 1 && (_oim.houm += 1)) : 1 == _oio ? (_oiy[5] >= 1 && (_oim.kaih += 1), _oiy[6] >= 1 && (_oim.houm += 1), _oiy[10] >= 1 && (_oim.kaih += 1)) : 1 == _oip && (_oiy[6] >= 1 && (_oim.houm += 1), _oiy[10] >= 1 && (_oim.kaih += 1)), 1 == _oiq ? (_oiy[2] >= 1 && (_oim.tyku += 1), _oiy[4] >= 1 && (_oim.houg += 1), _oiy[7] >= 1 && (_oim.kaih += 1), _oiy[8] >= 1 && (_oim.tyku += 1), _oiy[9] >= 1 && (_oim.houg += 1)) : 1 == _oir && (_oiy[2] >= 1 && (_oim.tyku += 1), _oiy[4] >= 1 && (_oim.houg += 1), _oiy[6] >= 1 && (_oim.kaih += 1), _oiy[8] >= 1 && (_oim.houm += 1), _oiy[10] >= 1 && (_oim.houg += 1)), 1 == _ois ? _oiy[5] >= 1 && (_oim.houm += 1) : 1 == _oit && (_oiy[1] >= 1 && (_oim.houm += 1), _oiy[3] >= 1 && (_oim.houm += 1)), _oim;
        };
    },
    44990: (_oj3, _oj4, _oj5) => {
        'use strict';
        var _oj6 = null;
        defineModule(_oj4);
        Object.defineProperty(_oj4, '__esModule', {
            'value': true
        }), _oj4.getSlot485PersonalEffect = void 0;
        var _oj7 = _oj5(74496);
        _oj4.getSlot485PersonalEffect = function(_oj8) {
            var _oj9 = null,
                _oja = new _oj7.SlotItemEffectModel(),
                _ojb = false,
                _ojc = new _oj7.SlotItemEffectModel();
            if (9 == _oj8.ctype && (_ojc.houg += 1, _ojc.kaih += 2, _ojc.tyku += 3, _ojb = true), 501 == _oj8.ship_id || 506 == _oj8.ship_id ? (_ojc.kaih += 1, _ojc.tyku += 2, _ojc.houm += 1, _ojb = true) : 502 != _oj8.ship_id && 507 != _oj8.ship_id || (_ojc.kaih += 1, _ojc.tyku += 1, _ojc.houm += 1, _ojb = true), _ojb) {
                var _ojd = _oj8.get_slotnums(485);
                _oja.add(_ojc.multiply(_ojd));
            }
            var _oje = _oj8.get_each_level_nums(485),
                _ojf = 0,
                _ojg = 0,
                _ojh = 0,
                _oji = _oje[10];
            return _oje.forEach(function(_ojj, _ojk) {
                _ojk >= 3 && (_ojf += _ojj), _ojk >= 5 && (_ojg += _ojj), _ojk >= 7 && (_ojh += _ojj);
            }), _ojf > 0 && (_oja.houg += 1 * _ojf), _ojg > 0 && (_oja.tyku += 1 * _ojg), _ojh > 0 && (_oja.kaih += 1 * _ojh), _oji > 0 && (_oja.houm += 1 * _oji), _oja;
        };
    },
    83957: (_ojl, _ojm, _ojn) => {
        'use strict';
        var _ojo = null;
        defineModule(_ojm);
        Object.defineProperty(_ojm, '__esModule', {
            'value': true
        }), _ojm.getSlot486PersonalEffect = void 0;
        var _ojp = _ojn(74496);
        _ojm.getSlot486PersonalEffect = function(_ojq) {
            var _ojr = null,
                _ojs = new _ojp.SlotItemEffectModel(),
                _ojt = false,
                _oju = new _ojp.SlotItemEffectModel();
            if (894 == _ojq.ship_id || 899 == _ojq.ship_id ? (_oju.houg += 4, _oju.tyku += 4, _oju.kaih += 3, _oju.houm += 2, _ojt = true) : 888 != _ojq.ship_id && 883 != _ojq.ship_id || (_oju.houg += 2, _oju.tyku += 2, _oju.kaih += 2, _oju.houm += 1, _ojt = true), _ojt) {
                var _ojv = _ojq.get_slotnums(486);
                _ojs.add(_oju.multiply(_ojv));
            }
            var _ojw = _ojq.get_each_level_nums(486),
                _ojx = 0,
                _ojy = 0,
                _ojz = _ojw[10];
            return _ojw.forEach(function(_ok0, _ok1) {
                _ok1 >= 6 && (_ojx += _ok0), _ok1 >= 8 && (_ojy += _ok0);
            }), _ojx > 0 && (_ojs.kaih += 1 * _ojx, _ojs.houm += 1 * _ojx), _ojy > 0 && (_ojs.tyku += 1 * _ojy, _ojs.kaih += 1 * _ojy), _ojz > 0 && (_ojs.houg += 1 * _ojz, _ojs.houm += 1 * _ojz), _ojs;
        };
    },
    78539: (_ok2, _ok3, _ok4) => {
        'use strict';
        var _ok5 = null;
        defineModule(_ok3);
        Object.defineProperty(_ok3, '__esModule', {
            'value': true
        }), _ok3.getSlot487PersonalEffect = void 0;
        var _ok6 = _ok4(74496);
        _ok3.getSlot487PersonalEffect = function(_ok7) {
            var _ok8 = null,
                _ok9 = new _ok6.SlotItemEffectModel(),
                _oka = false,
                _okb = new _ok6.SlotItemEffectModel();
            if (894 == _ok7.ship_id || 899 == _ok7.ship_id ? (_okb.houg += 5, _okb.tyku += 3, _okb.kaih += 2, _okb.houm += 4, _oka = true) : 888 != _ok7.ship_id && 883 != _ok7.ship_id || (_okb.houg += 3, _okb.tyku += 1, _okb.kaih += 1, _okb.houm += 2, _oka = true), _oka) {
                var _okc = _ok7.get_slotnums(487);
                _ok9.add(_okb.multiply(_okc));
            }
            var _okd = _ok7.get_each_level_nums(487),
                _oke = 0,
                _okf = 0,
                _okg = _okd[10];
            return _okd.forEach(function(_okh, _oki) {
                _oki >= 6 && (_oke += _okh), _oki >= 8 && (_okf += _okh);
            }), _oke > 0 && (_ok9.houg += 1 * _oke, _ok9.kaih += 1 * _oke), _okf > 0 && (_ok9.tyku += 1 * _okf, _ok9.houm += 1 * _okf), _okg > 0 && (_ok9.houg += 1 * _okg, _ok9.houm += 1 * _okg), _ok9;
        };
    },
    96282: (_okj, _okk, _okl) => {
        'use strict';
        var _okm = null;
        defineModule(_okk);
        Object.defineProperty(_okk, '__esModule', {
            'value': true
        }), _okk.getSlot488PersonalEffect = void 0;
        var _okn = _okl(74496);
        _okk.getSlot488PersonalEffect = function(_oko) {
            var _okp = null,
                _okq = new _okn.SlotItemEffectModel(),
                _okr = false,
                _oks = new _okn.SlotItemEffectModel(),
                _okt = 0,
                _oku = _oko.getCountryName(),
                _okv = {
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
                }[_oko.ship_id];
            if (('日本' == _oku && 2 == _oko.stype || {
                    74: 1,
                    77: 1,
                    85: 1,
                    117: 1,
                    104: 1
                }[_oko.ctype] && 1 == _oko.stype) && (_oks.tais += 1, _oks.kaih += 1, _okr = true), 1 == _okv ? (_oks.tais += 5, _oks.kaih += 4, _oks.houm += 2, _okr = true, _okt = 1) : 2 == _okv ? (_oks.tais += 2, _oks.kaih += 1, _oks.houm += 1, _okr = true, _okt = 2) : 3 == _okv && (_oks.tais += 1, _okr = true, _okt = 2), 0 == _okr) return _okq;
            var _okw = _oko.get_slotnums(488);
            if (_okq.add(_oks.multiply(_okw)), 0 == _okt) return _okq;
            var _okx = _oko.get_each_level_nums(488),
                _oky = [];
            return _okx.forEach(function(_okz, _ol0) {
                var _ol1 = null;
                for (var _ol2 = 1; _ol2 <= _oko.SLOT_LEVEL_MAX; _ol2++) _ol0 >= _ol2 && (null == _oky[_ol2] && (_oky[_ol2] = 0), _oky[_ol2] += _okz);
            }), 1 == _okt ? (_oky[3] >= 1 && (_okq.kaih += 1 * _oky[3]), _oky[5] >= 1 && (_okq.tais += 1 * _oky[5]), _oky[7] >= 1 && (_okq.houm += 1 * _oky[7]), _oky[8] >= 1 && (_okq.kaih += 1 * _oky[8]), _oky[9] >= 1 && (_okq.tais += 1 * _oky[9]), _oky[10] >= 1 && (_okq.tais += 1 * _oky[10])) : 2 == _okt && (_oky[5] >= 1 && (_okq.tais += 1 * _oky[5]), _oky[7] >= 1 && (_okq.kaih += 1 * _oky[7]), _oky[9] >= 1 && (_okq.houm += 1 * _oky[9]), _oky[10] >= 1 && (_okq.tais += 1 * _oky[10])), _okq;
        };
    },
    49679: (_ol3, _ol4, _ol5) => {
        'use strict';
        var _ol6 = null;
        defineModule(_ol4);
        Object.defineProperty(_ol4, '__esModule', {
            'value': true
        }), _ol4.getSlot489PersonalEffect = void 0;
        var _ol7 = _ol5(74496);
        _ol4.getSlot489PersonalEffect = function(_ol8) {
            var _ol9 = null,
                _ola = new _ol7.SlotItemEffectModel(),
                _olb = false,
                _olc = new _ol7.SlotItemEffectModel();
            if ('あきつまる' != _ol8.yomi && 'やましおまる' != _ol8.yomi && 'くまのまる' != _ol8.yomi || (_olc.tyku = _olc.tyku + 2, _olc.kaih = _olc.kaih + 1, _olc.houg = _olc.houg + 1, _olc.tais = _olc.tais + 1, _olc.houm = _olc.houm + 1, _olb = true), 717 != _ol8.ship_id && 948 != _ol8.ship_id || (_olc.tyku = _olc.tyku + 2, _olc.kaih = _olc.kaih + 2, _olc.houg = _olc.houg + 2, _olc.tais = _olc.tais + 1, _olc.houm = _olc.houm + 1, _olb = true), _olb) {
                var _old = _ol8.get_slotnums(489) + _ol8.get_slotnums(491);
                _ola.add(_olc.multiply(_old));
            }
            var _ole = _ol8.get_each_level_nums(489),
                _olf = _ol8.get_each_level_nums(491),
                _olg = 0,
                _olh = 0,
                _oli = 0;
            _ole.forEach(function(_olj, _olk) {
                _olk >= 3 && (_olg += _olj), _olk >= 6 && (_olh += _olj), _olk >= 8 && (_oli += _olj);
            }), _olf.forEach(function(_oll, _olm) {
                _olm >= 3 && (_olg += _oll), _olm >= 6 && (_olh += _oll), _olm >= 8 && (_oli += _oll);
            });
            var _oln = _ole[10] + _olf[10];
            return _olg >= 1 && (_ola.kaih = _ola.kaih + 1 * _olg), _olh >= 1 && (_ola.tais = _ola.tais + 1 * _olh), _oli >= 1 && (_ola.houm = _ola.houm + 1 * _oli), _oln >= 1 && (_ola.houg = _ola.houg + 1 * _oln), _ola;
        };
    },
    90312: function(_olo, _olp, _olq) {
        'use strict';
        var _olr = null;
        var _ols = this && this.__importDefault || function(_olt) {
            var _olu = null;
            return _olt && _olt.__esModule ? _olt : {
                'default': _olt
            };
        };
        defineModule(_olp);
        Object.defineProperty(_olp, '__esModule', {
            'value': true
        }), _olp.getSlot502PersonalEffect = void 0;
        var _olv = _olq(74496),
            _olw = _ols(_olq(18622));
        _olp.getSlot502PersonalEffect = function(_olx) {
            var _oly = null,
                _olz = new _olv.SlotItemEffectModel(),
                _om0 = _olx.get_slotnums(502),
                _om1 = {
                    149: 2,
                    591: 2,
                    150: 1,
                    592: 1,
                    152: 1,
                    151: 2,
                    593: 5,
                    954: 3
                },
                _om2 = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _om3 = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    150: 3,
                    592: 3,
                    149: 3,
                    152: 3
                },
                _om4 = {
                    593: 1,
                    151: 2,
                    149: 2,
                    591: 2,
                    954: 2
                },
                _om5 = {
                    151: 1,
                    593: 1,
                    954: 1
                };
            if (_om1[_olx.ship_id]) {
                var _om6 = _om1[_olx.ship_id];
                _olz.houg += _om0 * _om6;
            }
            if (_om2[_olx.ship_id]) {
                var _om7 = _om2[_olx.ship_id];
                _olz.tyku += _om0 * _om7;
            }
            if (_om3[_olx.ship_id]) {
                var _om8 = _om3[_olx.ship_id],
                    _om9 = _olx.get_each_level_nums(502),
                    _oma = [];
                _om9.forEach(function(_omb, _omc) {
                    var _omd = null;
                    for (var _ome = 1; _ome <= _olx.SLOT_LEVEL_MAX; _ome++) _omc >= _ome && (null == _oma[_ome] && (_oma[_ome] = 0), _oma[_ome] += _omb);
                }), 1 == _om8 ? (_olz.kaih += 3 * _om0, _oma[1] > 0 && (_olz.kaih += 1 * _oma[1]), _oma[3] > 0 && (_olz.tyku += 1 * _oma[3]), _oma[5] > 0 && (_olz.houg += 1 * _oma[5]), _oma[7] > 0 && (_olz.kaih += 1 * _oma[7]), _oma[8] > 0 && (_olz.tyku += 1 * _oma[8]), _oma[9] > 0 && (_olz.houg += 1 * _oma[9]), _oma[10] > 0 && (_olz.tyku += 1 * _oma[10])) : 2 == _om8 ? (_olz.kaih += 1 * _om0, _oma[2] > 0 && 151 == _olx.ship_id && (_olz.kaih += 1 * _oma[2]), _oma[4] > 0 && (_olz.tyku += 1 * _oma[4]), _oma[6] > 0 && (_olz.houg += 1 * _oma[6]), _oma[8] > 0 && (_olz.kaih += 1 * _oma[8]), _oma[10] > 0 && (_olz.tyku += 1 * _oma[10])) : 3 == _om8 && (_oma[5] > 0 && (_olz.kaih += 1 * _oma[5]), _oma[8] > 0 && (_olz.houg += 1 * _oma[8]), _oma[10] > 0 && (_olz.tyku += 1 * _oma[10]));
            }
            if (_om4[_olx.ship_id]) {
                for (var _omf = 0, _omg = 0, _omh = _olx.have_slot_ids(); _omg < _omh.length; _omg++) {
                    var _omi = _omh[_omg],
                        _omj = _olw.default.model.slot.getMst(_omi),
                        _omk = _omj.equipType;
                    12 != _omk && 13 != _omk || (_omj.sakuteki >= 5 && (_omf += _olx.get_slotnums(parseInt(_omi))), _omj.taiku >= 2 && _olx.get_slotnums(parseInt(_omi)));
                }
                0;
                var _oml = _om4[_olx.ship_id];
                1 == _oml && _omf >= 1 ? (_olz.houg += 3, _olz.kaih += 4) : 2 == _oml && _omf >= 1 && (_olz.houg += 2, _olz.kaih += 2);
            }
            if (_om5[_olx.ship_id]) {
                var _omm = _om5[_olx.ship_id],
                    _omn = [],
                    _omo = [],
                    _omp = _olx.have_slot_ids();
                [410, 411].forEach(function(_omq) {
                    var _omr = null;
                    _omp.indexOf(_omq.toString()) > -1 && (_omo[_omq] = _olx.get_each_level_nums(_omq), null == _omn[_omq] && (_omn[_omq] = []), _omo[_omq].forEach(function(_oms, _omt) {
                        var _omu = null;
                        for (var _omv = 1; _omv <= _olx.SLOT_LEVEL_MAX; _omv++) null == _omn[_omq][_omv] && (_omn[_omq][_omv] = 0), _omt >= _omv && (_omn[_omq][_omv] += _oms);
                    }));
                });
                var _omw = _omo[410],
                    _omx = _omo[411];
                if (1 == _omm) {
                    if (_omw) {
                        _olz.tyku += 1;
                        var _omy = _omn[410];
                        _omy[7] >= 1 && (_olz.houg += 1), _omy[10] >= 1 && (_olz.kaih += 1);
                    }
                    if (_omx) {
                        _olz.tyku += 2;
                        var _omz = _omn[411];
                        _omz[2] >= 1 && (_olz.houg += 1), _omz[4] >= 1 && (_olz.kaih += 1), _omz[6] >= 1 && (_olz.houm += 1), _omz[8] >= 1 && (_olz.tyku += 1), _omz[10] >= 1 && (_olz.houg += 1);
                    }
                }
            }
            return _olz;
        };
    },
    86856: function(_on0, _on1, _on2) {
        'use strict';
        var _on3 = null;
        var _on4 = this && this.__importDefault || function(_on5) {
            var _on6 = null;
            return _on5 && _on5.__esModule ? _on5 : {
                'default': _on5
            };
        };
        defineModule(_on1);
        Object.defineProperty(_on1, '__esModule', {
            'value': true
        }), _on1.getSlot503PersonalEffect = void 0;
        var _on7 = _on2(74496),
            _on8 = _on4(_on2(18622));
        _on1.getSlot503PersonalEffect = function(_on9) {
            var _ona = null,
                _onb = new _on7.SlotItemEffectModel(),
                _onc = _on9.get_slotnums(503),
                _ond = {
                    149: 2,
                    150: 2,
                    151: 2,
                    152: 2,
                    591: 3,
                    592: 3,
                    593: 4,
                    954: 4
                },
                _one = {
                    149: 1,
                    591: 1,
                    592: 1,
                    151: 2,
                    593: 4,
                    954: 3
                },
                _onf = {
                    593: 1,
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    149: 3,
                    150: 3,
                    152: 3
                },
                _ong = {
                    954: 1,
                    151: 2,
                    591: 2,
                    592: 2,
                    593: 2
                },
                _onh = {
                    591: 1,
                    592: 1,
                    593: 1,
                    954: 1
                },
                _oni = {
                    591: 1,
                    592: 2,
                    593: 2,
                    954: 3
                };
            if (_ond[_on9.ship_id]) {
                var _onj = _ond[_on9.ship_id];
                _onb.houg += _onc * _onj;
            }
            if (_one[_on9.ship_id]) {
                var _onk = _one[_on9.ship_id];
                _onb.tyku += _onc * _onk;
            }
            if (_onf[_on9.ship_id]) {
                var _onl = _onf[_on9.ship_id],
                    _onm = _on9.get_each_level_nums(503),
                    _onn = [];
                _onm.forEach(function(_ono, _onp) {
                    var _onq = null;
                    for (var _onr = 1; _onr <= _on9.SLOT_LEVEL_MAX; _onr++) _onp >= _onr && (null == _onn[_onr] && (_onn[_onr] = 0), _onn[_onr] += _ono);
                }), 1 == _onl ? (_onb.houm += 2 * _onc, _onn[1] > 0 && (_onb.houg += 1 * _onn[1]), _onn[2] > 0 && (_onb.tyku += 1 * _onn[2]), _onn[4] > 0 && (_onb.houm += 1 * _onn[4]), _onn[6] > 0 && (_onb.houg += 1 * _onn[6]), _onn[8] > 0 && (_onb.tyku += 1 * _onn[8]), _onn[10] > 0 && (_onb.houm += 1 * _onn[10])) : 2 == _onl ? (_onb.houm += 1 * _onc, _onn[2] > 0 && (_onb.houg += 1 * _onn[2]), _onn[4] > 0 && (_onb.tyku += 1 * _onn[4]), _onn[6] > 0 && (_onb.houm += 1 * _onn[6]), _onn[8] > 0 && (_onb.houg += 1 * _onn[8]), _onn[10] > 0 && (_onb.houm += 1 * _onn[10])) : 3 == _onl && (_onn[4] > 0 && (_onb.houm += 1 * _onn[4]), _onn[7] > 0 && (_onb.houg += 1 * _onn[7]), _onn[10] > 0 && (_onb.tyku += 1 * _onn[10]));
            }
            var _ons = 0;
            _ong[_on9.ship_id] && (_ons = _ong[_on9.ship_id]);
            var _ont = 0;
            _oni[_on9.ship_id] && (_ont = _oni[_on9.ship_id]);
            var _onu = 0,
                _onv = 0,
                _onw = _on9.have_slot_ids();
            if (_ons + _ont > 0)
                for (var _onx = 0, _ony = _onw; _onx < _ony.length; _onx++) {
                    var _onz = _ony[_onx],
                        _oo0 = _on8.default.model.slot.getMst(_onz),
                        _oo1 = _oo0.equipType;
                    12 != _oo1 && 13 != _oo1 || (_oo0.sakuteki >= 5 && (_onu += _on9.get_slotnums(parseInt(_onz))), _oo0.taiku >= 2 && _on9.get_slotnums(parseInt(_onz)), _oo0.meichu >= 8 && (_onv += _on9.get_slotnums(parseInt(_onz))));
                }
            1 == _ons ? _onu >= 1 && (_onb.houg += 3, _onb.houm += 3, _onb.kaih += 2) : 2 == _ons && _onu >= 1 && (_onb.houg += 2, _onb.houm += 2, _onb.kaih += 1);
            var _oo2 = 0,
                _oo3 = [],
                _oo4 = [];
            if (_onh[_on9.ship_id]) {
                _oo2 = _onh[_on9.ship_id];
                var _oo5 = _on9.have_slot_ids();
                [174].forEach(function(_oo6) {
                    var _oo7 = null;
                    _oo5.indexOf(_oo6.toString()) > -1 && (_oo4[_oo6] = _on9.get_each_level_nums(_oo6), null == _oo3[_oo6] && (_oo3[_oo6] = []), _oo4[_oo6].forEach(function(_oo8, _oo9) {
                        var _ooa = null;
                        for (var _oob = 1; _oob <= _on9.SLOT_LEVEL_MAX; _oob++) null == _oo3[_oo6][_oob] && (_oo3[_oo6][_oob] = 0), _oo9 >= _oob && (_oo3[_oo6][_oob] += _oo8);
                    }));
                });
            }
            if (_oo2 > 0) {
                var _ooc = _oo4[174];
                if (1 == _oo2 && _ooc) {
                    var _ood = _oo3[174];
                    _onb.raig += 4, _ood[6] >= 1 && (_onb.raig += 1), _ood[8] >= 1 && (_onb.houm += 1), _ood[10] >= 1 && (_onb.houg += 1);
                }
            }
            return _onv > 0 && (_ont >= 1 && _ont <= 3 && (_onb.houg += 2, _onb.houm += 2, _onb.kaih += 2), 1 == _ont ? _onb.houg += 1 : 3 == _ont && (_onb.houg += 2)), _onb;
        };
    },
    78123: function(_ooe, _oof, _oog) {
        'use strict';
        var _ooh = null;
        var _ooi = this && this.__importDefault || function(_ooj) {
            var _ook = null;
            return _ooj && _ooj.__esModule ? _ooj : {
                'default': _ooj
            };
        };
        defineModule(_oof);
        Object.defineProperty(_oof, '__esModule', {
            'value': true
        }), _oof.getSlot505PersonalEffect = void 0;
        var _ool = _oog(74496),
            _oom = _ooi(_oog(18622));
        _oof.getSlot505PersonalEffect = function(_oon) {
            var _ooo = null,
                _oop = new _ool.SlotItemEffectModel(),
                _ooq = false,
                _oor = new _ool.SlotItemEffectModel();
            if (2 == _oon.stype ? (_oor.houg += 1, _oor.tyku += 2, _oor.kaih += 2, _ooq = true) : 1 == _oon.stype ? (_oor.houg += 1, _oor.tyku += 1, _oor.kaih += 1, _ooq = true) : 3 == _oon.stype || 21 == _oon.stype || 4 == _oon.stype ? (_oor.tyku += 1, _oor.kaih += 2, _ooq = true) : 5 != _oon.stype && 6 != _oon.stype && 16 != _oon.stype || (_oor.tyku += 1, _oor.kaih += 1, _ooq = true), _ooq) {
                var _oos = _oon.get_slotnums(505);
                _oop.add(_oor.multiply(_oos));
            }
            var _oot = {
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
                _oou = {
                    961: 1,
                    145: 2,
                    497: 2,
                    656: 2,
                    419: 2,
                    951: 2,
                    975: 2
                },
                _oov = {
                    961: 1,
                    656: 1,
                    951: 1,
                    975: 1
                };
            1 == _oot[_oon.ship_id] ? (_oop.houg += 2, _oop.tyku += 3, _oop.kaih += 4) : 2 == _oot[_oon.ship_id] ? (_oop.houg += 1, _oop.tyku += 2, _oop.kaih += 3) : 3 == _oot[_oon.ship_id] ? (_oop.tyku += 2, _oop.kaih += 2) : 4 == _oot[_oon.ship_id] ? (_oop.tyku += 1, _oop.kaih += 2) : 5 == _oot[_oon.ship_id] && (_oop.houg += 1, _oop.tyku += 1, _oop.kaih += 1);
            var _oow = 0;
            if (_oou[_oon.ship_id] && _oow++, _oov[_oon.ship_id] && _oow++, 0 == _oow) return _oop;
            for (var _oox = 0, _ooy = 0, _ooz = 0, _op0 = _oon.have_slot_ids(); _ooz < _op0.length; _ooz++) {
                var _op1 = _op0[_ooz],
                    _op2 = _oom.default.model.slot.getMst(_op1),
                    _op3 = _op2.equipType;
                12 != _op3 && 13 != _op3 || (_op2.sakuteki >= 5 && (_oox += _oon.get_slotnums(parseInt(_op1))), _op2.taiku >= 2 && (_ooy += _oon.get_slotnums(parseInt(_op1))));
            }
            var _op4 = _oou[_oon.ship_id];
            _ooy > 0 && _op4 > 0 && (1 == _op4 ? (_oop.houg += 1, _oop.tyku += 2, _oop.kaih += 3) : 2 == _op4 && (_oop.tyku += 2, _oop.kaih += 2));
            var _op5 = _oov[_oon.ship_id];
            return _oox > 0 && _op5 > 0 && 1 == _op5 && (_oop.houg += 1, _oop.kaih += 1), _oop;
        };
    },
    25765: (_op6, _op7, _op8) => {
        'use strict';
        var _op9 = null;
        defineModule(_op7);
        Object.defineProperty(_op7, '__esModule', {
            'value': true
        }), _op7.getSlot506PersonalEffect = void 0;
        var _opa = _op8(74496);
        _op7.getSlot506PersonalEffect = function(_opb) {
            var _opc = null,
                _opd = new _opa.SlotItemEffectModel();
            return 961 == _opb.ship_id ? (_opd.houg += 2, _opd.houm += 3, _opd.tyku += 2, _opd.kaih += 4) : 145 == _opb.ship_id || 497 == _opb.ship_id || 656 == _opb.ship_id || 557 == _opb.ship_id || 558 == _opb.ship_id || 951 == _opb.ship_id || 975 == _opb.ship_id ? (_opd.houg += 1, _opd.houm += 2, _opd.tyku += 1, _opd.kaih += 3) : 578 != _opb.ship_id && 419 != _opb.ship_id && 464 != _opb.ship_id && 470 != _opb.ship_id && 407 != _opb.ship_id && 235 != _opb.ship_id && 147 != _opb.ship_id && 538 != _opb.ship_id && 537 != _opb.ship_id && 955 != _opb.ship_id && 960 != _opb.ship_id || (_opd.houg += 1, _opd.houm += 1, _opd.tyku += 1, _opd.kaih += 2), _opd;
        };
    },
    88271: function(_ope, _opf, _opg) {
        'use strict';
        var _oph = null;
        var _opi = this && this.__importDefault || function(_opj) {
            var _opk = null;
            return _opj && _opj.__esModule ? _opj : {
                'default': _opj
            };
        };
        defineModule(_opf);
        Object.defineProperty(_opf, '__esModule', {
            'value': true
        }), _opf.getSlot50PersonalEffect = void 0;
        var _opl = _opg(74496),
            _opm = _opi(_opg(18622));
        _opf.getSlot50PersonalEffect = function(_opn) {
            var _opo = null,
                _opp = new _opl.SlotItemEffectModel(),
                _opq = false,
                _opr = new _opl.SlotItemEffectModel();
            7 != _opn.ctype && 13 != _opn.ctype && 8 != _opn.ctype && 29 != _opn.ctype && 9 != _opn.ctype && 31 != _opn.ctype || (_opr.houg += 1, _opq = true), 8 != _opn.ctype && 29 != _opn.ctype && 9 != _opn.ctype && 31 != _opn.ctype || (_opr.houg += 1, _opr.kaih += 1, _opq = true);
            var _ops = _opn.get_slotnums(50);
            9 != _opn.ctype && 31 != _opn.ctype || _ops >= 2 && (_opr.houg += 1, _opq = true);
            var _opt = 0;
            if (501 != _opn.ship_id && 506 != _opn.ship_id && 502 != _opn.ship_id && 507 != _opn.ship_id || (_opr.houg += 1, _opq = true, _opt = 1), 0 == _opq) return _opp;
            _opp = _opr.multiply(_ops);
            for (var _opu = 0, _opv = 0, _opw = _opn.have_slot_ids(); _opv < _opw.length; _opv++) {
                var _opx = _opw[_opv],
                    _opy = _opm.default.model.slot.getMst(_opx),
                    _opz = _opy.equipType;
                12 != _opz && 13 != _opz || _opy.sakuteki >= 5 && (_opu += _opn.get_slotnums(parseInt(_opx)));
            }
            if (_opu > 0) {
                if (7 == _opn.ctype || 13 == _opn.ctype) 0 == _opn.get_slotnums(90) && (_opp.houg += 1, _opp.kaih += 1, _opp.raig += 1);
                else 8 != _opn.ctype && 29 != _opn.ctype && 9 != _opn.ctype && 31 != _opn.ctype || (_opp.houg += 3, _opp.kaih += 2, _opp.raig += 2);
                501 != _opn.ship_id && 506 != _opn.ship_id || (_opp.houg += 1, _opp.kaih += 1);
            }
            var _oq0 = _opn.get_slotnums(30),
                _oq1 = _opn.get_slotnums(410);
            return 1 == _opt && (_oq0 + _oq1 > 0 && (_opp.houg += 1, _opp.tyku += 3, _opp.kaih += 2), _oq1 > 0 && (_opp.houg += 2)), _opp;
        };
    },
    28221: (_oq2, _oq3, _oq4) => {
        'use strict';
        var _oq5 = null;
        defineModule(_oq3);
        Object.defineProperty(_oq3, '__esModule', {
            'value': true
        }), _oq3.getSlot510PersonalEffect = void 0;
        var _oq6 = _oq4(74496);
        _oq3.getSlot510PersonalEffect = function(_oq7) {
            var _oq8 = null,
                _oq9 = new _oq6.SlotItemEffectModel(),
                _oqa = false,
                _oqb = new _oq6.SlotItemEffectModel();
            if ('イギリス' == _oq7.getCountryName() && (_oqb.houg += 2, _oqb.tais += 3, _oqb.kaih += 2, _oqb.saku += 2, _oqa = true), 88 == _oq7.ctype && (_oq9.houg += 4, _oq9.kaih += 2, _oqb.saku += 3, _oqb.houm += 2, _oqa = true), 0 == _oqa) return _oq9;
            var _oqc = _oq7.get_slotnums(510);
            return _oq9.add(_oqb.multiply(_oqc)), _oq9;
        };
    },
    14830: (_oqd, _oqe, _oqf) => {
        'use strict';
        var _oqg = null;
        defineModule(_oqe);
        Object.defineProperty(_oqe, '__esModule', {
            'value': true
        }), _oqe.getSlot511PersonalEffect = void 0;
        var _oqh = _oqf(74496);
        _oqe.getSlot511PersonalEffect = function(_oqi) {
            var _oqj = null,
                _oqk = new _oqh.SlotItemEffectModel();
            return 122 == _oqi.ctype ? (_oqk.raig += 3, _oqk.kaih += 4) : 114 == _oqi.ctype && (_oqk.raig += 1, _oqk.kaih += 2), _oqk;
        };
    },
    54047: (_oql, _oqm, _oqn) => {
        'use strict';
        var _oqo = null;
        defineModule(_oqm);
        Object.defineProperty(_oqm, '__esModule', {
            'value': true
        }), _oqm.getSlot517PersonalEffect = void 0;
        var _oqp = _oqn(74496);
        _oqm.getSlot517PersonalEffect = function(_oqq) {
            var _oqr = null,
                _oqs = new _oqp.SlotItemEffectModel();
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
            }[_oqq.ctype] && 74 != _oqq.ctype && 77 != _oqq.ctype && 85 != _oqq.ctype && 117 != _oqq.ctype && 104 != _oqq.ctype || (_oqs.houm += 1, _oqs.kaih += 1, _oqs.saku += 1), 38 == _oqq.ctype && (_oqs.houg += 1, _oqs.houm += 1), 960 == _oqq.ship_id ? (_oqs.houg += 2, _oqs.houm += 1, _oqs.kaih += 3, _oqs.saku += 2) : 955 != _oqq.ship_id && 578 != _oqq.ship_id && 961 != _oqq.ship_id && 656 != _oqq.ship_id && 464 != _oqq.ship_id && 470 != _oqq.ship_id && 419 != _oqq.ship_id && 407 != _oqq.ship_id && 235 != _oqq.ship_id && 147 != _oqq.ship_id && 975 != _oqq.ship_id || (_oqs.houg += 1, _oqs.houm += 1, _oqs.kaih += 2, _oqs.saku += 1);
            for (var _oqt = [], _oqu = function(_oqv) {
                    var _oqw = null,
                        _oqx = _oqq.get_each_level_nums(_oqv);
                    null == _oqt[_oqv] && (_oqt[_oqv] = []), _oqx.forEach(function(_oqy, _oqz) {
                        var _or0 = null;
                        for (var _or1 = 1; _or1 <= _oqq.SLOT_LEVEL_MAX; _or1++) null == _oqt[_oqv][_or1] && (_oqt[_oqv][_or1] = 0), _oqz >= _or1 && (_oqt[_oqv][_or1] += _oqy);
                    });
                }, _or2 = 0, _or3 = [267, 366, 450, 517]; _or2 < _or3.length; _or2++) {
                _oqu(_or3[_or2]);
            }
            var _or4 = _oqt[517];
            return _or4[7] > 0 && (_oqs.houm += 1), _or4[8] > 0 && (_oqs.kaih += 1), _or4[9] > 0 && (_oqs.houg += 1), _or4[10] > 0 && (_oqs.houm += 1), (_oqt[267][3] > 0 || _oqt[366][3] > 0) && (_oqs.houg += 1, _oqs.houm += 1, 38 == _oqq.ctype && (_oqs.houg += 1, _oqs.houm += 1), _oqt[450][4] > 0 && (_oqs.houg += 1, _oqs.houm += 1, _oqs.tyku += 4, _oqs.kaih += 3)), _oqs;
        };
    },
    76054: (_or5, _or6, _or7) => {
        'use strict';
        var _or8 = null;
        defineModule(_or6);
        Object.defineProperty(_or6, '__esModule', {
            'value': true
        }), _or6.getSlot518PersonalEffect = void 0;
        var _or9 = _or7(74496);
        _or6.getSlot518PersonalEffect = function(_ora) {
            var _orb = null,
                _orc = new _or9.SlotItemEffectModel(),
                _ord = false,
                _ore = new _or9.SlotItemEffectModel();
            if (34 != _ora.ctype && 56 != _ora.ctype || (_ore.houg += 1, _ore.tyku += 1, _ore.tais += 1, _ore.kaih += 1, _ord = true), 16 == _ora.stype && (_ore.houg += 1, _ore.raig += 1, _ore.kaih += 1, _ord = true), 622 != _ora.ship_id && 624 != _ora.ship_id && 623 != _ora.ship_id || (_ore.houg += 1, _ord = true), 622 != _ora.ship_id && 624 != _ora.ship_id || (_ore.tyku += 1, _ord = true), 624 == _ora.ship_id && (_ore.tais += 2, _ord = true), 0 == _ord) return _orc;
            var _orf = _ora.get_slotnums(518);
            return _orc.add(_ore.multiply(_orf)), _orc;
        };
    },
    93053: (_org, _orh, _ori) => {
        'use strict';
        var _orj = null;
        defineModule(_orh);
        Object.defineProperty(_orh, '__esModule', {
            'value': true
        }), _orh.getSlot519PersonalEffect = void 0;
        var _ork = _ori(74496);
        _orh.getSlot519PersonalEffect = function(_orl) {
            var _orm = null,
                _orn = new _ork.SlotItemEffectModel();
            return 122 == _orl.ctype && (_orn.houm += 2, _orn.kaih += 2), 114 == _orl.ctype && (_orn.raig += 1, _orn.houm += 2, _orn.kaih += 2), _orn;
        };
    },
    81254: (_oro, _orp, _orq) => {
        'use strict';
        var _orr = null;
        defineModule(_orp);
        Object.defineProperty(_orp, '__esModule', {
            'value': true
        }), _orp.getSlot51cmSeriesGunPersonalEffect = void 0;
        var _ors = _orq(74496);
        _orp.getSlot51cmSeriesGunPersonalEffect = function(_ort) {
            var _oru = null,
                _orv = new _ors.SlotItemEffectModel(),
                _orw = false,
                _orx = new _ors.SlotItemEffectModel(),
                _ory = _ort.get_slotnums(142),
                _orz = _ort.get_slotnums(460),
                _os0 = _ory + _orz;
            if (916 != _ort.ship_id && 911 != _ort.ship_id && 546 != _ort.ship_id || (_orx.houg += 1, _orx.houm += 1, _orz >= 1 && (_orv.kaih += 1, _orv.houm += 1), _orw = true), 37 == _ort.ctype && _os0 >= 1 && (_orv.houg += 1, _orv.houm += 2), 0 == _orw) return _orv;
            var _os1 = _ort.get_slotnums(128) + _ort.get_slotnums(281);
            return _orv.add(_orx.multiply(_os1)), _orv;
        };
    },
    88792: (_os2, _os3, _os4) => {
        'use strict';
        var _os5 = null;
        defineModule(_os3);
        Object.defineProperty(_os3, '__esModule', {
            'value': true
        }), _os3.getSlot520PersonalEffect = void 0;
        var _os6 = _os4(74496);
        _os3.getSlot520PersonalEffect = function(_os7) {
            var _os8 = null,
                _os9 = new _os6.SlotItemEffectModel(),
                _osa = false,
                _osb = new _os6.SlotItemEffectModel(),
                _osc = 0,
                _osd = 0,
                _ose = 0,
                _osf = _os7.get_slotnums(520);
            7 == _os7.ctype || 13 == _os7.ctype ? (_osb.houg += 1, _osa = true, _osd = 1, _ose = 1) : 8 == _os7.ctype || 29 == _os7.ctype ? (_osb.houg += 2, _osb.kaih += 1, _osa = true, _osd = 2, _ose = 1) : 9 != _os7.ctype && 31 != _os7.ctype || (_osb.houg += 3, _osb.kaih += 1, _osb.houm += 1, _osa = true, _osd = 2, _ose = 1, 2 == _osf && (_os9.houg += 2), _osf >= 3 && (_os9.houg += 4));
            var _osg = _os7.get_have_rader_nums().water_rader,
                _osh = 0,
                _osi = 0;
            if (_osd + _ose > 0) {
                for (var _osj = _os7.getSpItemDict_FukuhouTaikuHeisou(), _osk = _os7.getSpItemDict_Tansou21GouDentan(), _osl = 0, _osm = _os7.have_slot_ids(); _osl < _osm.length; _osl++) {
                    var _osn = _osm[_osl],
                        _oso = parseInt(_osn);
                    null != _osj[_oso] ? (_osj[_oso] += _os7.get_slotnums(_oso), _osh += _os7.get_slotnums(_oso)) : null != _osk[_oso] && (_osk[_oso] += _os7.get_slotnums(_oso), _osi += _os7.get_slotnums(_oso));
                }
                _osg > 0 && (1 == _osd ? (_os9.houg += 2, _os9.raig += 2, _os9.kaih += 1, _os9.houm += 1) : 2 == _osd && (_os9.houg += 3, _os9.raig += 2, _os9.kaih += 2, _os9.houm += 1)), _osh > 0 && 1 == _ose && (_os9.houg += 1, _os9.tyku += 4, _os9.kaih += 4, _os9.houm += 1);
            }
            if (269 == _os7.ship_id || 265 == _os7.ship_id || 319 == _os7.ship_id ? (2 == _osf && (_os9.houg += 2), _osf >= 3 && (_os9.houg += 4)) : 501 != _os7.ship_id && 506 != _os7.ship_id && 502 != _os7.ship_id && 507 != _os7.ship_id && 503 != _os7.ship_id && 504 != _os7.ship_id || (_osb.houg += 1, _osa = true, _osg >= 1 && (_os9.houg += 1, _os9.kaih += 1, _os9.houm += 2), _osi >= 1 && (_os9.houg += 1, _os9.tyku += 3, _os9.kaih += 2, _os9.houm += 1), _os7.get_slotnums(410) > 0 && (_os9.houg += 2, _os9.tyku += 3, _os9.kaih += 2, _os9.houm += 1), _osc = 1), 502 == _os7.ship_id || 269 == _os7.ship_id || 265 == _os7.ship_id || 319 == _os7.ship_id ? (_osb.houg += 1, _osb.houm += 1, _osa = true) : 507 == _os7.ship_id && (_osb.houg += 1, _osb.houm += 2, _osb.tyku += 1, _osa = true), _osa && _os9.add(_osb.multiply(_osf)), 0 == _osc) return _os9;
            var _osp = _os7.get_each_level_over_nums([520]),
                _osq = _osp.slot[520][7],
                _osr = _osp.slot[520][10];
            return 1 == _osc && (_osq > 0 && (_os9.houg += 1 * _osq), _osr > 0 && (_os9.houm += 1 * _osr)), _os9;
        };
    },
    33242: (_oss, _ost, _osu) => {
        'use strict';
        var _osv = null;
        defineModule(_ost);
        Object.defineProperty(_ost, '__esModule', {
            'value': true
        }), _ost.getSlot521PersonalEffect = void 0;
        var _osw = _osu(74496);
        _ost.getSlot521PersonalEffect = function(_osx) {
            var _osy = null,
                _osz = new _osw.SlotItemEffectModel(),
                _ot0 = false,
                _ot1 = new _osw.SlotItemEffectModel(),
                _ot2 = 0;
            if (52 == _osx.ctype && (_ot2 = 1), 183 == _osx.ship_id ? (_ot1.houg += 1, _ot1.houm += 1, _ot1.saku += 2, _ot1.kaih += 2, _ot0 = true) : 321 == _osx.ship_id ? (_ot1.houg += 2, _ot1.houm += 2, _ot1.saku += 3, _ot1.kaih += 3, _ot0 = true) : 507 == _osx.ship_id && (_ot1.houg += 3, _ot1.tyku += 1, _ot1.houm += 3, _ot1.saku += 2, _ot1.kaih += 2, _ot0 = true, _ot2 = 1), _ot0) {
                var _ot3 = _osx.get_slotnums(521);
                _osz.add(_ot1.multiply(_ot3));
            }
            if (0 == _ot2) return _osz;
            var _ot4 = _osx.get_each_level_over_nums([521]).slot[521];
            return 1 == _ot2 && (_ot4[1] >= 1 && (_osz.houm += 1 * _ot4[1]), _ot4[2] >= 1 && (_osz.kaih += 1 * _ot4[2]), _ot4[3] >= 1 && (_osz.saku += 1 * _ot4[3], _osz.raig += 1 * _ot4[3]), _ot4[4] >= 1 && (_osz.houg += 1 * _ot4[4]), _ot4[6] >= 1 && (_osz.houm += 1 * _ot4[6]), _ot4[8] >= 1 && (_osz.saku += 1 * _ot4[8]), _ot4[10] >= 1 && (_osz.houm += 1 * _ot4[10])), _osz;
        };
    },
    3296: (_ot5, _ot6, _ot7) => {
        'use strict';
        var _ot8 = null;
        defineModule(_ot6);
        Object.defineProperty(_ot6, '__esModule', {
            'value': true
        }), _ot6.getSlot522_523PersonalEffect = void 0;
        var _ot9 = _ot7(74496);
        _ot6.getSlot522_523PersonalEffect = function(_ota) {
            var _otb = null,
                _otc = new _ot9.SlotItemEffectModel(),
                _otd = false,
                _ote = new _ot9.SlotItemEffectModel(),
                _otf = 0,
                _otg = _ota.get_slotnums(522),
                _oth = _ota.get_slotnums(523),
                _oti = _otg + _oth;
            if (14 == _ota.stype && (_ote.raig += 1, _ote.kaih += 5, _ote.houm += 1, _ote.saku += 3, _otd = true, _oth >= 1 && (_otc.raig += 2 * _oth, _otc.baku += 2 * _oth, _otc.kaih += 1 * _oth, _otc.houm += 1 * _oth, _otc.saku += 1 * _oth), _otf = 1), 0 == _otd) return _otc;
            if (_otc.add(_ote.multiply(_oti)), 0 == _otf) return _otc;
            var _otj = _ota.get_each_level_over_nums([522, 523]),
                _otk = _otj.slot[522],
                _otl = _otj.slot[523];
            if (1 == _otf) {
                if (_otk[1] >= 1 || _otl[1] >= 1) {
                    var _otm = _otk[1] + _otl[1];
                    _otc.raig += 1 * _otm;
                }
                if (_otk[2] >= 1 || _otl[2] >= 1) {
                    var _otn = _otk[2] + _otl[2];
                    _otc.houm += 1 * _otn;
                }
                if (_otk[3] >= 1 || _otl[3] >= 1) {
                    var _oto = _otk[3] + _otl[3];
                    _otc.kaih += 1 * _oto;
                }
                if (_otk[5] >= 1 || _otl[5] >= 1) {
                    var _otp = _otk[5] + _otl[5];
                    _otc.saku += 1 * _otp;
                }
                if (_otk[8] >= 1 || _otl[8] >= 1) {
                    var _otq = _otk[8] + _otl[8];
                    _otc.houm += 1 * _otq;
                }
                if (_otk[10] >= 1 || _otl[10] >= 1) {
                    var _otr = _otk[10] + _otl[10];
                    _otc.kaih += 1 * _otr;
                }
            }
            return _otc;
        };
    },
    59415: (_ots, _ott, _otu) => {
        'use strict';
        var _otv = null;
        defineModule(_ott);
        Object.defineProperty(_ott, '__esModule', {
            'value': true
        }), _ott.getSlot524PersonalEffect = void 0;
        var _otw = _otu(74496);
        _ott.getSlot524PersonalEffect = function(_otx) {
            var _oty = null,
                _otz = new _otw.SlotItemEffectModel(),
                _ou0 = false,
                _ou1 = new _otw.SlotItemEffectModel(),
                _ou2 = 0,
                _ou3 = 0;
            if (17 != _otx.stype && 19 != _otx.stype && 20 != _otx.stype && 21 != _otx.stype && 22 != _otx.stype || (_ou1.houg += 1, _ou1.tyku += 2, _ou1.kaih += 2, _ou1.houm += 1, _ou0 = true, _ou2 = 1, _ou3 = 1), 0 == _ou0) return _otz;
            var _ou4 = _otx.get_slotnums(524);
            _otz.add(_ou1.multiply(_ou4));
            var _ou5 = _otx.get_have_rader_nums().air_rader;
            if (1 == _ou3 && _ou5 >= 1 && (_otz.tyku += 2, _otz.kaih += 2), 0 == _ou2) return _otz;
            var _ou6 = _otx.get_each_level_over_nums([524]).slot[524];
            return 1 == _ou2 && (_ou6[1] >= 1 && (_otz.kaih += 1 * _ou6[1]), _ou6[2] >= 1 && (_otz.kaih += 1 * _ou6[2]), _ou6[4] >= 1 && (_otz.tyku += 1 * _ou6[4]), _ou6[6] >= 1 && (_otz.kaih += 1 * _ou6[6]), _ou6[7] >= 1 && (_otz.houm += 1 * _ou6[7]), _ou6[8] >= 1 && (_otz.tyku += 1 * _ou6[8]), _ou6[9] >= 1 && (_otz.kaih += 1 * _ou6[9]), _ou6[10] >= 1 && (_otz.houg += 1 * _ou6[10])), _otz;
        };
    },
    36731: (_ou7, _ou8, _ou9) => {
        'use strict';
        var _oua = null;
        defineModule(_ou8);
        Object.defineProperty(_ou8, '__esModule', {
            'value': true
        }), _ou8.getSlot527PersonalEffect = void 0;
        var _oub = _ou9(74496);
        _ou8.getSlot527PersonalEffect = function(_ouc) {
            var _oud = null,
                _oue = new _oub.SlotItemEffectModel(),
                _ouf = 0;
            if ('イギリス' == _ouc.getCountryName() && (_ouf = 1, _oue.tyku += 2, _oue.houm += 1, _oue.kaih += 1, _oue.saku += 2, 88 == _ouc.ctype && (_oue.houg += 2), 67 == _ouc.ctype && (_oue.houg += 1)), 0 == _ouf) return _oue;
            var _oug = _ouc.get_each_level_over_nums([527]),
                _ouh = _oug.slot[527][2],
                _oui = _oug.slot[527][4],
                _ouj = _oug.slot[527][7],
                _ouk = _oug.slot[527][10];
            return 1 == _ouf && (_ouh >= 1 && (_oue.tyku += 1), _oui >= 1 && (_oue.kaih += 1), _ouj >= 1 && (_oue.tyku += 1), _ouk >= 1 && (_oue.houm += 1)), _oue;
        };
    },
    30450: (_oul, _oum, _oun) => {
        'use strict';
        var _ouo = null;
        defineModule(_oum);
        Object.defineProperty(_oum, '__esModule', {
            'value': true
        }), _oum.getSlot528PersonalEffect = void 0;
        var _oup = _oun(74496);
        _oum.getSlot528PersonalEffect = function(_ouq) {
            var _our = null,
                _ous = new _oup.SlotItemEffectModel(),
                _out = false,
                _ouu = new _oup.SlotItemEffectModel(),
                _ouv = 0;
            if ('イギリス' == _ouq.getCountryName() && (_ouu.houg += 1, _ouu.houm += 2, _ouu.kaih += 1, 108 == _ouq.ctype && (_ouu.houg += 1, _ouu.kaih += 1), _out = true, _ouv = 1), 0 == _out) return _ous;
            var _ouw = _ouq.get_slotnums(528);
            if (_ous.add(_ouu.multiply(_ouw)), 0 == _ouv) return _ous;
            var _oux = _ouq.get_each_level_over_nums([528]),
                _ouy = _oux.slot[528][2],
                _ouz = _oux.slot[528][4],
                _ov0 = _oux.slot[528][7],
                _ov1 = _oux.slot[528][10];
            return 1 == _ouv && (_ouy >= 1 && (_ous.houg += 1 * _ouy), _ouz >= 1 && (_ous.houm += 1 * _ouz), _ov0 >= 1 && (_ous.kaih += 1 * _ov0), _ov1 >= 1 && (_ous.houm += 1 * _ov1)), _ous;
        };
    },
    23035: (_ov2, _ov3, _ov4) => {
        'use strict';
        var _ov5 = null;
        defineModule(_ov3);
        Object.defineProperty(_ov3, '__esModule', {
            'value': true
        }), _ov3.getSlot58PersonalEffect = void 0;
        var _ov6 = _ov4(74496);
        _ov3.getSlot58PersonalEffect = function(_ov7) {
            var _ov8 = null,
                _ov9 = new _ov6.SlotItemEffectModel(),
                _ova = new _ov6.SlotItemEffectModel();
            if ('しまかぜ' != _ov7.yomi && 4 != _ov7.stype && 54 != _ov7.ctype || (_ova.raig = 1), !_ova.exists()) return _ov9;
            var _ovb = _ov7.get_slotnums(58);
            return _ov9 = _ova.multiply(_ovb);
        };
    },
    47169: (_ovc, _ovd, _ove) => {
        'use strict';
        var _ovf = null;
        defineModule(_ovd);
        Object.defineProperty(_ovd, '__esModule', {
            'value': true
        }), _ovd.getSlot59PersonalEffect = void 0;
        var _ovg = _ove(74496);
        _ovd.getSlot59PersonalEffect = function(_ovh) {
            var _ovi = null,
                _ovj = new _ovg.SlotItemEffectModel();
            return 501 != _ovh.ship_id && 506 != _ovh.ship_id && 502 != _ovh.ship_id && 507 != _ovh.ship_id || (_ovj.tyku += 1, _ovj.kaih += 1), _ovj;
        };
    },
    87845: (_ovk, _ovl, _ovm) => {
        'use strict';
        var _ovn = null;
        defineModule(_ovl);
        Object.defineProperty(_ovl, '__esModule', {
            'value': true
        }), _ovl.getSlot5PersonalEffect = void 0;
        var _ovo = _ovm(74496);
        _ovl.getSlot5PersonalEffect = function(_ovp) {
            var _ovq = null,
                _ovr = new _ovo.SlotItemEffectModel(),
                _ovs = false,
                _ovt = new _ovo.SlotItemEffectModel();
            if (52 != _ovp.ctype && 9 != _ovp.ctype || (_ovt.houg += 1, 52 == _ovp.ctype && (_ovt.houg = _ovt.houg + 1), _ovs = true), 0 == _ovs) return _ovr;
            var _ovu = _ovp.get_slotnums(5);
            return _ovr.add(_ovt.multiply(_ovu)), _ovr;
        };
    },
    92253: (_ovv, _ovw, _ovx) => {
        'use strict';
        var _ovy = null;
        defineModule(_ovw);
        Object.defineProperty(_ovw, '__esModule', {
            'value': true
        }), _ovw.getSlot60_154_219PersonalEffec = void 0;
        var _ovz = _ovx(74496);
        _ovw.getSlot60_154_219PersonalEffec = function(_ow0) {
            var _ow1 = null,
                _ow2 = new _ovz.SlotItemEffectModel(),
                _ow3 = false,
                _ow4 = new _ovz.SlotItemEffectModel();
            if ('じゅんよう' != _ow0.yomi && 'ひよう' != _ow0.yomi && 'ずいほう' != _ow0.yomi && 'ちとせ' != _ow0.yomi && 'ちよだ' != _ow0.yomi || (_ow4.houg += 1, _ow4.tyku += 1, _ow4.kaih += 1, _ow3 = true), 185 != _ow0.ship_id && 318 != _ow0.ship_id && 282 != _ow0.ship_id || (_ow4.houg += 1, _ow4.tyku += 1, _ow4.kaih += 1, _ow3 = true), 888 != _ow0.ship_id && 883 != _ow0.ship_id || (_ow4.houg += 2, _ow4.tyku += 1, _ow4.kaih += 2, _ow3 = true), 0 == _ow3) return _ow2;
            var _ow5 = _ow0.get_slotnums(60) + _ow0.get_slotnums(154) + _ow0.get_slotnums(219);
            return _ow2.add(_ow4.multiply(_ow5)), _ow2;
        };
    },
    2578: (_ow6, _ow7, _ow8) => {
        'use strict';
        var _ow9 = null;
        defineModule(_ow7);
        Object.defineProperty(_ow7, '__esModule', {
            'value': true
        }), _ow7.getSlot61PersonalEffect2 = _ow7.getSlot61PersonalEffect = void 0;
        var _owa = _ow8(74496);
        _ow7.getSlot61PersonalEffect = function(_owb) {
            var _owc = null,
                _owd = new _owa.SlotItemEffectModel();
            if (553 == _owb.ship_id) _owd.houg = 3, _owd.kaih = 2, _owd.souk = 1, _owd.houm = 5, _owd.leng = 1;
            else {
                if (554 == _owb.ship_id) _owd.houg = 3, _owd.kaih = 3, _owd.souk = 3, _owd.houm = 5, _owd.leng = 1;
                else {
                    if (196 == _owb.ship_id) _owd.houm = 5, _owd.leng = 1;
                    else {
                        if (197 != _owb.ship_id) return _owd;
                        _owd.houm = 5, _owd.leng = 1;
                    }
                }
            }
            return _owd;
        }, _ow7.getSlot61PersonalEffect2 = function(_owe) {
            var _owf = null,
                _owg = new _owa.SlotItemEffectModel();
            if (null == _owe.have_slots_dict[61]) return _owg;
            for (var _owh = 0, _owi = 0, _owj = _owe.have_slots_dict[61]; _owi < _owj.length; _owi++) {
                var _owk = _owj[_owi].level;
                _owh < _owk && (_owh = _owk);
            }
            return 0 == _owh || ('そうりゅう' == _owe.yomi ? (_owg.houg += 3, _owg.saku += 3) : 'ひりゅう' == _owe.yomi && (_owg.houg += 2, _owg.saku += 2), 508 != _owe.ship_id && 509 != _owe.ship_id && 560 != _owe.ship_id || (_owg.houg += 1, _owg.saku += 1), _owh >= 8 && 197 == _owe.ship_id && (_owg.houg += 1, _owg.saku += 1)), _owg;
        };
    },
    17143: (_owl, _owm, _own) => {
        'use strict';
        var _owo = null;
        defineModule(_owm);
        Object.defineProperty(_owm, '__esModule', {
            'value': true
        }), _owm.getSlot63PersonalEffect = void 0;
        var _owp = _own(74496);
        _owm.getSlot63PersonalEffect = function(_owq) {
            var _owr = null,
                _ows = new _owp.SlotItemEffectModel(),
                _owt = new _owp.SlotItemEffectModel();
            1 != _owq.ctype && 5 != _owq.ctype && 10 != _owq.ctype || (_owt.tyku += 1), 'ゆうだち' == _owq.yomi && (_owt.houg += 1, _owt.tyku += 1, _owt.kaih += 2), 145 == _owq.ship_id || 961 == _owq.ship_id ? _owt.houg += 1 : 144 == _owq.ship_id ? _owt.raig += 1 : 469 == _owq.ship_id ? _owt.kaih += 2 : 242 == _owq.ship_id || 497 == _owq.ship_id || 244 == _owq.ship_id || 498 == _owq.ship_id || 975 == _owq.ship_id ? _owt.kaih += 1 : 627 == _owq.ship_id ? _owt.houg += 1 : 903 != _owq.ship_id && 908 != _owq.ship_id || (_owt.houg += 2);
            var _owu = true;
            if (_owt.exists() || (_owu = false), 0 == _owu) return _ows;
            var _owv = _owq.get_slotnums(63);
            return _ows = _owt.multiply(_owv);
        };
    },
    16164: (_oww, _owx, _owy) => {
        'use strict';
        var _owz = null;
        defineModule(_owx);
        Object.defineProperty(_owx, '__esModule', {
            'value': true
        }), _owx.getSlot67PersonalEffect = void 0;
        var _ox0 = _owy(74496);
        _owx.getSlot67PersonalEffect = function(_ox1) {
            var _ox2 = null,
                _ox3 = new _ox0.SlotItemEffectModel(),
                _ox4 = new _ox0.SlotItemEffectModel();
            if (13 != _ox1.stype && 14 != _ox1.stype && (_ox4.raig = -5), !_ox4.exists()) return _ox3;
            var _ox5 = _ox1.get_slotnums(67);
            return _ox3 = _ox4.multiply(_ox5);
        };
    },
    35023: (_ox6, _ox7, _ox8) => {
        'use strict';
        var _ox9 = null;
        defineModule(_ox7);
        Object.defineProperty(_ox7, '__esModule', {
            'value': true
        }), _ox7.getSlot69PersonalEffect = void 0;
        var _oxa = _ox8(74496);
        _ox7.getSlot69PersonalEffect = function(_oxb) {
            var _oxc = null,
                _oxd = new _oxa.SlotItemEffectModel(),
                _oxe = false,
                _oxf = new _oxa.SlotItemEffectModel();
            if (554 == _oxb.ship_id || 646 == _oxb.ship_id ? (_oxf.houg += 1, _oxf.tais += 2, _oxe = true) : 553 == _oxb.ship_id && (_oxf.houg += 1, _oxf.tais += 1, _oxe = true), 0 == _oxe) return _oxd;
            var _oxg = _oxb.get_slotnums(69);
            return _oxd.add(_oxf.multiply(_oxg)), _oxd;
        };
    },
    78707: (_oxh, _oxi, _oxj) => {
        'use strict';
        var _oxk = null;
        defineModule(_oxi);
        Object.defineProperty(_oxi, '__esModule', {
            'value': true
        }), _oxi.getSlot70PersonalEffect = void 0;
        var _oxl = _oxj(74496);
        _oxi.getSlot70PersonalEffect = function(_oxm) {
            var _oxn = null,
                _oxo = new _oxl.SlotItemEffectModel(),
                _oxp = false,
                _oxq = new _oxl.SlotItemEffectModel();
            if ('やましおまる' == _oxm.yomi && (_oxq.houg += 1, _oxq.tais += 1, _oxp = true), 0 == _oxp) return _oxo;
            var _oxr = _oxm.get_slotnums(70);
            return _oxo.add(_oxq.multiply(_oxr)), _oxo;
        };
    },
    44680: function(_oxs, _oxt, _oxu) {
        'use strict';
        var _oxv = null;
        var _oxw = this && this.__importDefault || function(_oxx) {
            var _oxy = null;
            return _oxx && _oxx.__esModule ? _oxx : {
                'default': _oxx
            };
        };
        defineModule(_oxt);
        Object.defineProperty(_oxt, '__esModule', {
            'value': true
        }), _oxt.getSlot78PersonalEffect = void 0;
        var _oxz = _oxu(74496),
            _oy0 = _oxw(_oxu(18622));
        _oxt.getSlot78PersonalEffect = function(_oy1) {
            var _oy2 = null,
                _oy3 = new _oxz.SlotItemEffectModel(),
                _oy4 = false,
                _oy5 = new _oxz.SlotItemEffectModel(),
                _oy6 = 0,
                _oy7 = 0,
                _oy8 = false;
            if (48 == _oy1.ctype && (_oy5.houg += 1, _oy5.kaih += 1, _oy6 = 1, _oy7 = 1, _oy8 = true, _oy4 = true), 0 == _oy4) return _oy3;
            var _oy9 = _oy1.get_slotnums(78);
            _oy3.add(_oy5.multiply(_oy9));
            var _oya = 0,
                _oyb = _oy1.get_each_level_nums(78),
                _oyc = 0;
            if (_oy8) {
                _oyb.map(function(_oyd, _oye) {
                    _oye >= 7 && (_oyc += _oyd);
                });
                for (var _oyf = 0, _oyg = _oy1.have_slot_ids(); _oyf < _oyg.length; _oyf++) {
                    var _oyh = _oyg[_oyf],
                        _oyi = _oy0.default.model.slot.getMst(_oyh),
                        _oyj = _oyi.equipType;
                    12 != _oyj && 13 != _oyj || _oyi.sakuteki >= 5 && (_oya += _oy1.get_slotnums(parseInt(_oyh)));
                }
            }
            if (1 == _oy6 && _oya > 0 && (_oy3.houg += 2, _oy3.kaih += 2, _oy3.raig += 2), 1 == _oy7) {
                _oy3.houg += 1 * _oyc;
                var _oyk = _oyb[10];
                _oy3.souk += 1 * _oyk;
            }
            return _oy3;
        };
    },
    45749: (_oyl, _oym, _oyn) => {
        'use strict';
        var _oyo = null;
        defineModule(_oym);
        Object.defineProperty(_oym, '__esModule', {
            'value': true
        }), _oym.getSlot79And81PersonalEffect = void 0;
        var _oyp = _oyn(74496);
        _oym.getSlot79And81PersonalEffect = function(_oyq) {
            var _oyr = null,
                _oys = new _oyp.SlotItemEffectModel(),
                _oyt = new _oyp.SlotItemEffectModel();
            if (553 == _oyq.ship_id) _oyt.houg = 3;
            else {
                if (82 == _oyq.ship_id) _oyt.houg = 2;
                else {
                    if (88 == _oyq.ship_id) _oyt.houg = 2;
                    else {
                        if (554 == _oyq.ship_id) _oyt.houg = 3;
                        else {
                            if (411 == _oyq.ship_id) _oyt.houg = 2;
                            else {
                                if (412 != _oyq.ship_id) return _oys;
                                _oyt.houg = 2;
                            }
                        }
                    }
                }
            }
            var _oyu = _oyq.get_slotnums(79) + _oyq.get_slotnums(81);
            return _oys = _oyt.multiply(_oyu);
        };
    },
    37334: (_oyv, _oyw, _oyx) => {
        'use strict';
        var _oyy = null;
        defineModule(_oyw);
        Object.defineProperty(_oyw, '__esModule', {
            'value': true
        }), _oyw.getSlot82PersonalEffect = void 0;
        var _oyz = _oyx(74496);
        _oyw.getSlot82PersonalEffect = function(_oz0) {
            var _oz1 = null,
                _oz2 = new _oyz.SlotItemEffectModel(),
                _oz3 = new _oyz.SlotItemEffectModel();
            if (76 == _oz0.ctype && (_oz3.tais = 1, _oz3.kaih = 1), !_oz3.exists()) return _oz2;
            var _oz4 = _oz0.get_slotnums(82);
            return _oz2 = _oz3.multiply(_oz4);
        };
    },
    2603: function(_oz5, _oz6, _oz7) {
        'use strict';
        var _oz8 = null;
        var _oz9 = this && this.__importDefault || function(_oza) {
            var _ozb = null;
            return _oza && _oza.__esModule ? _oza : {
                'default': _oza
            };
        };
        defineModule(_oz6);
        Object.defineProperty(_oz6, '__esModule', {
            'value': true
        }), _oz6.getSlot84PersonalEffect = void 0;
        var _ozc = _oz7(74496),
            _ozd = _oz9(_oz7(18622));
        _oz6.getSlot84PersonalEffect = function(_oze) {
            var _ozf = null,
                _ozg = new _ozc.SlotItemEffectModel(),
                _ozh = _oze.get_each_level_nums(84),
                _ozi = 0,
                _ozj = 0;
            if (_ozh.forEach(function(_ozk, _ozl) {
                    _ozl >= 4 && (_ozi += _ozk), _ozl >= 7 && (_ozj += _ozk);
                }), 0 == _ozi) return _ozg;
            for (var _ozm = 0, _ozn = 0, _ozo = _oze.have_slot_ids(); _ozn < _ozo.length; _ozn++) {
                var _ozp = _ozo[_ozn],
                    _ozq = _ozd.default.model.slot.getMst(_ozp),
                    _ozr = _ozq.equipType;
                12 != _ozr && 13 != _ozr || (_ozq.sakuteki >= 5 && _oze.get_slotnums(parseInt(_ozp)), _ozq.taiku >= 2 && (_ozm += _oze.get_slotnums(parseInt(_ozp))));
            }
            var _ozs = _oze.getCountryName();
            _ozi >= 1 && (_ozg.tyku += 1 * _ozi, _ozg.kaih += 1 * _ozi, 'ドイツ' != _ozs && 'イタリア' != _ozs || (_ozg.tyku += 1 * _ozi, _ozg.kaih += 1 * _ozi), _ozm >= 1 && (_ozg.tyku += 1)), _ozj >= 1 && (_ozg.tyku += 1 * _ozj, _ozg.houg += 1 * _ozj);
            var _ozt = _ozh[10];
            return _ozt >= 1 && (_ozg.tyku += 1 * _ozt, _ozg.kaih += 1 * _ozt, 'ドイツ' != _ozs && 'イタリア' != _ozs || (_ozg.houg += 1)), _ozg;
        };
    },
    90725: (_ozu, _ozv, _ozw) => {
        'use strict';
        var _ozx = null;
        defineModule(_ozv);
        Object.defineProperty(_ozv, '__esModule', {
            'value': true
        }), _ozv.getSlot85PersonalEffect = void 0;
        var _ozy = _ozw(74496);
        _ozv.getSlot85PersonalEffect = function(_ozz) {
            var _p00 = null,
                _p01 = new _ozy.SlotItemEffectModel(),
                _p02 = _ozz.get_each_level_over_nums([85]),
                _p03 = _p02.slot[85][6],
                _p04 = _p02.slot[85][8],
                _p05 = _p02.slot[85][10],
                _p06 = _ozz.get_have_rader_nums().air_rader,
                _p07 = _ozz.getCountryName();
            return _p03 > 0 && (_p01.tyku += 1 * _p03, _p01.kaih += 1 * _p03, _p06 >= 1 && (_p01.tyku += 2)), _p04 > 0 && (_p01.houg += 1 * _p04, 'ドイツ' != _p07 && 'イタリア' != _p07 || (_p01.tyku += 1 * _p04, _p01.kaih += 1 * _p04)), _p05 > 0 && (_p01.kaih += 1 * _p05, _p01.houm += 1 * _p05, 'ドイツ' != _p07 && 'イタリア' != _p07 || (_p01.houg += 1)), _p01;
        };
    },
    29180: (_p08, _p09, _p0a) => {
        'use strict';
        var _p0b = null;
        defineModule(_p09);
        Object.defineProperty(_p09, '__esModule', {
            'value': true
        }), _p09.getSlot87PersonalEffect = void 0;
        var _p0c = _p0a(74496);
        _p09.getSlot87PersonalEffect = function(_p0d) {
            var _p0e = null,
                _p0f = new _p0c.SlotItemEffectModel(),
                _p0g = false,
                _p0h = new _p0c.SlotItemEffectModel(),
                _p0i = 0;
            if (951 == _p0d.ship_id ? (_p0h.houg += 1, _p0h.kaih += 1, _p0h.raig += 1, _p0h.houm += 1, _p0g = true, _p0i = 1) : 181 == _p0d.ship_id || 316 == _p0d.ship_id || 50 == _p0d.ship_id || 229 == _p0d.ship_id || 961 == _p0d.ship_id ? _p0i = 2 : 591 != _p0d.ship_id && 592 != _p0d.ship_id && 593 != _p0d.ship_id && 954 != _p0d.ship_id || (_p0f.kaih += 2, _p0f.raig += 1, _p0i = 3), 38 != _p0d.ctype && 54 != _p0d.ctype && 101 != _p0d.ctype || (_p0i = 4), _p0g) {
                var _p0j = _p0d.get_slotnums(87);
                _p0f.add(_p0h.multiply(_p0j));
            }
            if (0 == _p0i) return _p0f;
            var _p0k = _p0d.get_each_level_nums(87),
                _p0l = [];
            return _p0i > 0 && _p0k.forEach(function(_p0m, _p0n) {
                var _p0o = null;
                for (var _p0p = 1; _p0p <= _p0d.SLOT_LEVEL_MAX; _p0p++) null == _p0l[_p0p] && (_p0l[_p0p] = 0), _p0n >= _p0p && (_p0l[_p0p] += _p0m);
            }), 1 == _p0i ? (_p0l[6] >= 1 && (_p0f.tyku += 1 * _p0l[6]), _p0l[7] >= 1 && (_p0f.kaih += 1 * _p0l[7]), _p0l[8] >= 1 && (_p0f.raig += 1 * _p0l[8]), _p0l[9] >= 1 && (_p0f.houg += 1 * _p0l[9]), _p0l[10] >= 1 && (_p0f.houm += 1 * _p0l[10])) : 2 == _p0i ? (_p0l[6] >= 1 && (_p0f.kaih += 1 * _p0l[6]), _p0l[7] >= 1 && (_p0f.raig += 1 * _p0l[7]), _p0l[8] >= 1 && (_p0f.houg += 1 * _p0l[8]), _p0l[9] >= 1 && (_p0f.houm += 1 * _p0l[9]), _p0l[10] >= 1 && (_p0f.kaih += 1 * _p0l[10])) : 3 == _p0i ? (_p0l[6] > 0 && (_p0f.kaih += 1), _p0l[8] > 0 && (_p0f.raig += 1), _p0l[10] > 0 && (_p0f.houg += 1)) : 4 == _p0i && (_p0l[7] >= 1 && (_p0f.kaih += 1 * _p0l[7]), _p0l[8] >= 1 && (_p0f.raig += 1 * _p0l[8]), _p0l[10] >= 1 && (_p0f.houm += 1 * _p0l[10])), _p0f;
        };
    },
    68685: function(_p0q, _p0r, _p0s) {
        'use strict';
        var _p0t = null;
        var _p0u = this && this.__importDefault || function(_p0v) {
            var _p0w = null;
            return _p0v && _p0v.__esModule ? _p0v : {
                'default': _p0v
            };
        };
        defineModule(_p0r);
        Object.defineProperty(_p0r, '__esModule', {
            'value': true
        }), _p0r.getSlot90PersonalEffect = void 0;
        var _p0x = _p0s(74496),
            _p0y = _p0u(_p0s(18622));
        _p0r.getSlot90PersonalEffect = function(_p0z) {
            var _p10 = null,
                _p11 = new _p0x.SlotItemEffectModel(),
                _p12 = new _p0x.SlotItemEffectModel();
            if (142 == _p0z.ship_id ? (_p12.houg += 2, _p12.kaih += 1) : 295 == _p0z.ship_id || 416 == _p0z.ship_id || 417 == _p0z.ship_id ? _p12.houg += 1 : 264 == _p0z.ship_id ? (_p12.houg += 1, _p12.tyku += 1) : 501 != _p0z.ship_id && 506 != _p0z.ship_id && 502 != _p0z.ship_id && 507 != _p0z.ship_id || (_p12.houg += 1), 7 != _p0z.ctype && 13 != _p0z.ctype && 8 != _p0z.ctype && 29 != _p0z.ctype && 9 != _p0z.ctype && 31 != _p0z.ctype || (_p12.houg += 1), _p12.exists()) {
                var _p13 = _p0z.get_slotnums(90);
                _p11 = _p12.multiply(_p13);
            }
            var _p14 = [];
            if ('あおば' == _p0z.yomi && (_p14[1] = 1), 13 != _p0z.ctype && 7 != _p0z.ctype || (_p14[2] = 1), 0 == _p14.length) return _p11;
            for (var _p15 = 0, _p16 = 0, _p17 = 0, _p18 = _p0z.have_slot_ids(); _p17 < _p18.length; _p17++) {
                var _p19 = _p18[_p17],
                    _p1a = _p0y.default.model.slot.getMst(_p19),
                    _p1b = _p1a.equipType;
                12 != _p1b && 13 != _p1b || (_p1a.sakuteki >= 5 && (_p15 += _p0z.get_slotnums(parseInt(_p19))), _p1a.taiku >= 2 && (_p16 += _p0z.get_slotnums(parseInt(_p19))));
            }
            return _p16 > 0 && null != _p14[1] && (_p11.tyku += 5, _p11.kaih += 2), _p15 > 0 && null != _p14[2] && (_p11.houg += 3, _p11.kaih += 2, _p11.raig += 2), _p11;
        };
    },
    26078: (_p1c, _p1d, _p1e) => {
        'use strict';
        var _p1f = null;
        defineModule(_p1d);
        Object.defineProperty(_p1d, '__esModule', {
            'value': true
        }), _p1d.getSlot93PersonalEffect = void 0;
        var _p1g = _p1e(74496);
        _p1d.getSlot93PersonalEffect = function(_p1h) {
            var _p1i = null,
                _p1j = new _p1g.SlotItemEffectModel();
            return 'そうりゅう' == _p1h.yomi ? _p1j.houg = 1 : 'ひりゅう' == _p1h.yomi && (_p1j.houg = 3), _p1j;
        };
    },
    20829: (_p1k, _p1l, _p1m) => {
        'use strict';
        var _p1n = null;
        defineModule(_p1l);
        Object.defineProperty(_p1l, '__esModule', {
            'value': true
        }), _p1l.getSlot94PersonalEffect = void 0;
        var _p1o = _p1m(74496);
        _p1l.getSlot94PersonalEffect = function(_p1p) {
            var _p1q = null,
                _p1r = new _p1o.SlotItemEffectModel();
            if (196 == _p1p.ship_id) _p1r.houg = 7;
            else {
                if (197 != _p1p.ship_id) return _p1r;
                _p1r.houg = 3;
            }
            return _p1r;
        };
    },
    6880: (_p1s, _p1t, _p1u) => {
        'use strict';
        var _p1v = null;
        defineModule(_p1t);
        Object.defineProperty(_p1t, '__esModule', {
            'value': true
        }), _p1t.getSlot99PersonalEffect = void 0;
        var _p1w = _p1u(74496);
        _p1t.getSlot99PersonalEffect = function(_p1x) {
            var _p1y = null,
                _p1z = new _p1w.SlotItemEffectModel();
            return 'そうりゅう' == _p1x.yomi ? _p1z.houg = 4 : 'ひりゅう' == _p1x.yomi && (_p1z.houg = 1), _p1z;
        };
    },
    21403: (_p20, _p21, _p22) => {
        'use strict';
        var _p23 = null;
        defineModule(_p21);
        Object.defineProperty(_p21, '__esModule', {
            'value': true
        }), _p21.getSlotCorsairMkIIPersonalEffect = void 0;
        var _p24 = _p22(74496);
        _p21.getSlotCorsairMkIIPersonalEffect = function(_p25) {
            var _p26 = null,
                _p27 = new _p24.SlotItemEffectModel(),
                _p28 = false,
                _p29 = new _p24.SlotItemEffectModel();
            112 == _p25.ctype && (_p29.houg += 1, _p29.tyku += 1, _p29.kaih += 2, _p28 = true);
            var _p2a = _p25.getCountryName();
            if (67 == _p25.ctype || 78 == _p25.ctype || 82 == _p25.ctype || 88 == _p25.ctype || 108 == _p25.ctype || 112 == _p25.ctype ? (_p29.houg += 1, _p29.tyku += 2, _p29.kaih += 3, _p28 = true) : 'アメリカ' == _p2a && (_p29.houg += 1, _p29.tyku += 1, _p29.kaih += 2, _p28 = true), 0 == _p28) return _p27;
            var _p2b = _p25.get_slotnums(434) + _p25.get_slotnums(435);
            return _p27.add(_p29.multiply(_p2b)), _p27;
        };
    },
    9195: (_p2c, _p2d, _p2e) => {
        'use strict';
        var _p2f = null;
        defineModule(_p2d);
        Object.defineProperty(_p2d, '__esModule', {
            'value': true
        }), _p2d.getSlotDomesticAntiSubmarineToushakiPersonalEffect = void 0;
        var _p2g = _p2e(74496);
        _p2d.getSlotDomesticAntiSubmarineToushakiPersonalEffect = function(_p2h) {
            var _p2i = null,
                _p2j = new _p2g.SlotItemEffectModel(),
                _p2k = false,
                _p2l = new _p2g.SlotItemEffectModel();
            if (56 == _p2h.ctype && (_p2l.tais += 3, _p2l.kaih += 2, _p2k = true), 0 == _p2k) return _p2j;
            var _p2m = _p2h.get_slotnums(44) + _p2h.get_slotnums(45) + _p2h.get_slotnums(287) + _p2h.get_slotnums(288);
            return _p2j.add(_p2l.multiply(_p2m)), _p2j;
        };
    },
    93297: (_p2n, _p2o, _p2p) => {
        'use strict';
        var _p2q = null;
        defineModule(_p2o);
        Object.defineProperty(_p2o, '__esModule', {
            'value': true
        }), _p2o.getSlotDomesticSonarPersonalEffect = void 0;
        var _p2r = _p2p(74496);
        _p2o.getSlotDomesticSonarPersonalEffect = function(_p2s) {
            var _p2t = null,
                _p2u = new _p2r.SlotItemEffectModel();
            return 56 == _p2s.ctype && (_p2u.tais += 2, _p2u.kaih += 3), _p2u;
        };
    },
    45482: (_p2v, _p2w, _p2x) => {
        'use strict';
        var _p2y = null;
        defineModule(_p2w);
        Object.defineProperty(_p2w, '__esModule', {
            'value': true
        }), _p2w.getSlotOtherSuiseiPersonalEffect = void 0;
        var _p2z = _p2x(74496);
        _p2w.getSlotOtherSuiseiPersonalEffect = function(_p30) {
            var _p31 = null,
                _p32 = new _p2z.SlotItemEffectModel(),
                _p33 = new _p2z.SlotItemEffectModel();
            if (553 == _p30.ship_id) _p33.houg = 2;
            else {
                if (554 != _p30.ship_id) return _p32;
                _p33.houg = 2;
            }
            var _p34 = _p30.get_slotnums(24) + _p30.get_slotnums(57) + _p30.get_slotnums(111);
            return _p32 = _p33.multiply(_p34);
        };
    },
    45927: (_p35, _p36, _p37) => {
        'use strict';
        var _p38 = null;
        defineModule(_p36);
        Object.defineProperty(_p36, '__esModule', {
            'value': true
        }), _p36.getSlotSmokePersonalEffect = void 0;
        var _p39 = _p37(74496);
        _p36.getSlotSmokePersonalEffect = function(_p3a) {
            var _p3b = null,
                _p3c = new _p39.SlotItemEffectModel(),
                _p3d = false,
                _p3e = new _p39.SlotItemEffectModel();
            if (959 == _p3a.ship_id && (_p3e.kaih += 4, _p3d = true), 'ジョンストン' == _p3a.yomi || 'サミュエル・B・ロバーツ' == _p3a.yomi || 'せんだい' == _p3a.yomi || 'はるかぜ' == _p3a.yomi || 'かみかぜ' == _p3a.yomi || 'しきなみ' == _p3a.yomi || 'うらなみ' == _p3a.yomi || 'あおば' == _p3a.yomi ? (_p3e.kaih += 3, _p3d = true) : 'いなづま' != _p3a.yomi && 'はぐろ' != _p3a.yomi && 'はつしも' != _p3a.yomi && 'かすみ' != _p3a.yomi && 'ふぶき' != _p3a.yomi && 'あたご' != _p3a.yomi && 'あまぎり' != _p3a.yomi && 'はまなみ' != _p3a.yomi || (_p3e.kaih += 2, _p3d = true), 0 == _p3d) return _p3c;
            var _p3f = _p3a.get_slotnums(500) + _p3a.get_slotnums(501);
            return _p3c.add(_p3e.multiply(_p3f)), _p3c;
        };
    },
    32666: (_p3g, _p3h, _p3i) => {
        'use strict';
        var _p3j = null;
        defineModule(_p3h);
        Object.defineProperty(_p3h, '__esModule', {
            'value': true
        }), _p3h.getSlotTokuYonPersonalEffect = void 0;
        var _p3k = _p3i(74496);
        _p3h.getSlotTokuYonPersonalEffect = function(_p3l) {
            var _p3m = null,
                _p3n = new _p3k.SlotItemEffectModel(),
                _p3o = false,
                _p3p = new _p3k.SlotItemEffectModel(),
                _p3q = 0,
                _p3r = _p3l.get_slotnums(525),
                _p3s = _p3l.get_slotnums(526),
                _p3t = _p3r + _p3s;
            if (13 != _p3l.stype && 14 != _p3l.stype || (_p3p.houg += 1, _p3p.raig += 2, _p3p.kaih -= 1, _p3o = true, _p3q = 1, 'い36' != _p3l.yomi && 'い41' != _p3l.yomi || (_p3n.houg += 2, _p3n.raig += 1, _p3n.houm += 2), _p3s >= 1 && (_p3n.houg += 1 * _p3s, _p3n.raig += 1 * _p3s, _p3n.houm += 1 * _p3s)), 0 == _p3o) return _p3n;
            if (_p3n.add(_p3p.multiply(_p3t)), 0 == _p3q) return _p3n;
            var _p3u = _p3l.get_each_level_over_nums([525, 526]),
                _p3v = _p3u.slot[525],
                _p3w = _p3u.slot[526];
            if (1 == _p3q) {
                if (_p3v[1] >= 1 || _p3w[1] >= 1) {
                    var _p3x = _p3v[1] + _p3w[1];
                    _p3n.raig += 1 * _p3x;
                }
                if (_p3w[2] >= 1) {
                    var _p3y = _p3v[2] + _p3w[2];
                    _p3n.houg += 1 * _p3y;
                }
                if (_p3v[3] >= 1 || _p3w[3] >= 1) {
                    var _p3z = _p3v[3] + _p3w[3];
                    _p3n.houm += 1 * _p3z;
                }
                if (_p3w[4] >= 1) {
                    var _p40 = _p3v[4] + _p3w[4];
                    _p3n.raig += 1 * _p40;
                }
                if (_p3v[6] >= 1 || _p3w[6] >= 1) {
                    var _p41 = _p3v[6] + _p3w[6];
                    _p3n.houm += 1 * _p41;
                }
                if (_p3w[8] >= 1) {
                    var _p42 = _p3v[8] + _p3w[8];
                    _p3n.houg += 1 * _p42;
                }
                if (_p3v[10] >= 1 || _p3w[10] >= 1) {
                    var _p43 = _p3v[10] + _p3w[10];
                    _p3n.raig += 1 * _p43;
                }
            }
            return _p3n;
        };
    },
    29805: (_p44, _p45, _p46) => {
        'use strict';
        var _p47 = null;
        defineModule(_p45);
        Object.defineProperty(_p45, '__esModule', {
            'value': true
        }), _p45.getSlotType10PersonalEffect = void 0;
        var _p48 = _p46(74496);
        _p45.getSlotType10PersonalEffect = function(_p49) {
            var _p4a = null,
                _p4b = new _p48.SlotItemEffectModel();
            return 662 == _p49.ship_id || 663 == _p49.ship_id || 668 == _p49.ship_id ? (_p4b.houg += 2, _p4b.kaih += 1, _p4b.tais += 3) : 501 != _p49.ship_id && 506 != _p49.ship_id && 502 != _p49.ship_id && 507 != _p49.ship_id || (_p4b.houg += 2), _p4b;
        };
    },
    58913: (_p4c, _p4d, _p4e) => {
        'use strict';
        var _p4f = null;
        defineModule(_p4d);
        Object.defineProperty(_p4d, '__esModule', {
            'value': true
        }), _p4d.getSlotType11PersonalEffect = void 0;
        var _p4g = _p4e(74496);
        _p4d.getSlotType11PersonalEffect = function(_p4h) {
            var _p4i = null,
                _p4j = new _p4g.SlotItemEffectModel();
            return 662 == _p4h.ship_id || 663 == _p4h.ship_id || 668 == _p4h.ship_id ? (_p4j.houg += 1, _p4j.kaih += 1, _p4j.tais += 1) : 501 != _p4h.ship_id && 506 != _p4h.ship_id && 502 != _p4h.ship_id && 507 != _p4h.ship_id || (_p4j.houg += 1, _p4j.kaih += 1), _p4j;
        };
    },
    55421: (_p4k, _p4l, _p4m) => {
        'use strict';
        var _p4n = null;
        defineModule(_p4l);
        Object.defineProperty(_p4l, '__esModule', {
            'value': true
        }), _p4l.getSlotType25PersonalEffect = void 0;
        var _p4o = _p4m(74496);
        _p4l.getSlotType25PersonalEffect = function(_p4p) {
            var _p4q = null,
                _p4r = new _p4o.SlotItemEffectModel();
            return 662 == _p4p.ship_id ? (_p4r.tais += 4, _p4r.kaih += 1) : 663 != _p4p.ship_id && 668 != _p4p.ship_id || (_p4r.tais += 3, _p4r.kaih += 1), _p4r;
        };
    },
    272: function(_p4s, _p4t, _p4u) {
        'use strict';
        var _p4v = null;
        var _p4w = this && this.__importDefault || function(_p4x) {
            var _p4y = null;
            return _p4x && _p4x.__esModule ? _p4x : {
                'default': _p4x
            };
        };
        defineModule(_p4t);
        Object.defineProperty(_p4t, '__esModule', {
            'value': true
        }), _p4t.getSlotType9PersonalEffect = void 0;
        var _p4z = _p4u(74496),
            _p50 = _p4w(_p4u(18622));
        _p4t.getSlotType9PersonalEffect = function(_p51) {
            var _p52 = null,
                _p53 = new _p4z.SlotItemEffectModel();
            if (null == {
                    11: 1,
                    18: 1,
                    7: 1,
                    10: 1
                }[_p51.stype]) return _p53;
            for (var _p54 = 0, _p55 = 0, _p56 = _p51.have_slot_ids(); _p55 < _p56.length; _p55++) {
                var _p57 = _p56[_p55];
                if (9 == _p50.default.model.slot.getMst(_p57).equipType)
                    for (var _p58 = 0, _p59 = _p51.have_slots_dict[parseInt(_p57)]; _p58 < _p59.length; _p58++) {
                        var _p5a = _p59[_p58].level;
                        _p54 < _p5a && (_p54 = _p5a);
                    }
            }
            return _p54 >= 2 && (_p53.saku += 1), _p54 >= 4 && (_p53.houg += 1), _p54 >= 6 && (_p53.saku += 1), _p54 >= 10 && (_p53.houg += 1, _p53.saku += 1), _p53;
        };
    },
    54518: (_p5b, _p5c, _p5d) => {
        'use strict';
        var _p5e = null;
        defineModule(_p5c);
        Object.defineProperty(_p5c, '__esModule', {
            'value': true
        }), _p5c.getSlot_16InchMkXRensouhou_PersonalEffect = void 0;
        var _p5f = _p5d(74496);
        _p5c.getSlot_16InchMkXRensouhou_PersonalEffect = function(_p5g) {
            var _p5h = null,
                _p5i = new _p5f.SlotItemEffectModel();
            if (93 == _p5g.ctype) {
                var _p5j = _p5g.get_slotnums(330);
                _p5j > 0 && (_p5i.houg = _p5i.houg + 1 * _p5j);
                var _p5k = _p5g.get_slotnums(331);
                _p5k > 0 && (_p5i.houg = _p5i.houg + 1 * _p5k, 1496 != _p5g.ship_id && 918 != _p5g.ship_id || (_p5i.houg = _p5i.houg + 1 * _p5k, _p5i.kaih = _p5i.kaih + 1 * _p5k));
                var _p5l = _p5g.get_slotnums(332);
                return _p5l > 0 && (_p5i.houg = _p5i.houg + 1 * _p5l, 1496 != _p5g.ship_id && 918 != _p5g.ship_id || (_p5i.houg = _p5i.houg + 1 * _p5l, _p5i.kaih = _p5i.kaih + 1 * _p5l, _p5i.tyku = _p5i.tyku + 1 * _p5l)), _p5i;
            }
            var _p5m = new _p5f.SlotItemEffectModel();
            if (19 == _p5g.ctype ? (_p5m.houg = 1, (541 == _p5g.ship_id || 573 == _p5g.ship_id) && (_p5m.houg += 1)) : 88 == _p5g.ctype && (_p5m.houg = 1, 576 == _p5g.ship_id && (_p5m.houg += 1)), !_p5m.exists()) return _p5i;
            var _p5n = _p5g.get_slotnums(330) + _p5g.get_slotnums(331) + _p5g.get_slotnums(332);
            return _p5i = _p5m.multiply(_p5n);
        };
    },
    79353: (_p5o, _p5p, _p5q) => {
        'use strict';
        var _p5r = null;
        defineModule(_p5p);
        Object.defineProperty(_p5p, '__esModule', {
            'value': true
        }), _p5p.getZuiunSeriesEffect = void 0;
        var _p5s = _p5q(74496);
        _p5p.getZuiunSeriesEffect = function(_p5t) {
            var _p5u = null,
                _p5v = new _p5s.SlotItemEffectModel(),
                _p5w = false,
                _p5x = new _p5s.SlotItemEffectModel();
            if (662 == _p5t.ship_id ? (_p5v.houg += 2, _p5v.kaih += 1) : 663 == _p5t.ship_id || 668 == _p5t.ship_id || 501 == _p5t.ship_id || 506 == _p5t.ship_id ? (_p5v.houg += 2, _p5x.kaih += 1, _p5x.tyku += 1, _p5w = true) : 502 != _p5t.ship_id && 507 != _p5t.ship_id || (_p5v.houg += 1, _p5x.kaih += 1, _p5x.tyku += 1, _p5w = true), 0 == _p5w) return _p5v;
            var _p5y = 0;
            return [26, 62, 79, 80, 81, 207, 208].forEach(function(_p5z) {
                var _p60 = null;
                _p5y += _p5t.get_slotnums(_p5z);
            }), _p5v.add(_p5x.multiply(_p5y)), _p5v;
        };
    },
    89051: function(_p61, _p62, _p63) {
        'use strict';
        var _p64 = null;
        var _p65 = this && this.__createBinding || (Object.create ? function(_p66, _p67, _p68, _p69) {
                var _p6a = null;
                void 0 === _p69 && (_p69 = _p68);
                var _p6b = Object.getOwnPropertyDescriptor(_p67, _p68);
                _p6b && !('get' in _p6b ? !_p67.__esModule : _p6b.writable || _p6b.configurable) || (_p6b = {
                    'enumerable': true,
                    'get': function() {
                        return _p67[_p68];
                    }
                }), Object.defineProperty(_p66, _p69, _p6b);
            } : function(_p6c, _p6d, _p6e, _p6f) {
                void 0 === _p6f && (_p6f = _p6e), _p6c[_p6f] = _p6d[_p6e];
            }),
            _p6g = this && this.__exportStar || function(_p6h, _p6i) {
                var _p6j = null;
                for (var _p6k in _p6h) 'default' === _p6k || Object.prototype.hasOwnProperty.call(_p6i, _p6k) || _p65(_p6i, _p6h, _p6k);
            };
        defineModule(_p62);
        Object.defineProperty(_p62, '__esModule', {
            'value': true
        }), _p6g(_p63(34165), _p62), _p6g(_p63(81018), _p62), _p6g(_p63(56716), _p62), _p6g(_p63(17713), _p62), _p6g(_p63(54518), _p62), _p6g(_p63(66985), _p62), _p6g(_p63(88102), _p62), _p6g(_p63(66904), _p62), _p6g(_p63(98137), _p62), _p6g(_p63(69954), _p62), _p6g(_p63(22218), _p62), _p6g(_p63(88271), _p62), _p6g(_p63(23035), _p62), _p6g(_p63(2578), _p62), _p6g(_p63(17143), _p62), _p6g(_p63(16164), _p62), _p6g(_p63(35023), _p62), _p6g(_p63(44680), _p62), _p6g(_p63(45749), _p62), _p6g(_p63(37334), _p62), _p6g(_p63(29180), _p62), _p6g(_p63(68685), _p62), _p6g(_p63(26078), _p62), _p6g(_p63(20829), _p62), _p6g(_p63(6880), _p62), _p6g(_p63(17213), _p62), _p6g(_p63(40176), _p62), _p6g(_p63(32889), _p62), _p6g(_p63(11285), _p62), _p6g(_p63(96200), _p62), _p6g(_p63(9115), _p62), _p6g(_p63(37173), _p62), _p6g(_p63(21713), _p62), _p6g(_p63(59823), _p62), _p6g(_p63(57440), _p62), _p6g(_p63(29240), _p62), _p6g(_p63(40885), _p62), _p6g(_p63(19614), _p62), _p6g(_p63(87220), _p62), _p6g(_p63(81367), _p62), _p6g(_p63(13052), _p62), _p6g(_p63(94968), _p62), _p6g(_p63(48658), _p62), _p6g(_p63(1906), _p62), _p6g(_p63(61887), _p62), _p6g(_p63(47970), _p62), _p6g(_p63(31797), _p62), _p6g(_p63(45738), _p62), _p6g(_p63(34718), _p62), _p6g(_p63(69245), _p62), _p6g(_p63(18478), _p62), _p6g(_p63(2899), _p62), _p6g(_p63(57120), _p62), _p6g(_p63(74985), _p62), _p6g(_p63(9234), _p62), _p6g(_p63(30802), _p62), _p6g(_p63(97002), _p62), _p6g(_p63(16748), _p62), _p6g(_p63(53618), _p62), _p6g(_p63(72573), _p62), _p6g(_p63(8955), _p62), _p6g(_p63(98947), _p62), _p6g(_p63(44726), _p62), _p6g(_p63(93065), _p62), _p6g(_p63(85767), _p62), _p6g(_p63(38314), _p62), _p6g(_p63(59747), _p62), _p6g(_p63(40649), _p62), _p6g(_p63(13533), _p62), _p6g(_p63(12138), _p62), _p6g(_p63(30042), _p62), _p6g(_p63(33623), _p62), _p6g(_p63(85630), _p62), _p6g(_p63(88736), _p62), _p6g(_p63(49341), _p62), _p6g(_p63(74306), _p62), _p6g(_p63(83898), _p62), _p6g(_p63(71873), _p62), _p6g(_p63(53122), _p62), _p6g(_p63(51063), _p62), _p6g(_p63(91491), _p62), _p6g(_p63(85495), _p62), _p6g(_p63(65365), _p62), _p6g(_p63(98164), _p62), _p6g(_p63(38114), _p62), _p6g(_p63(21003), _p62), _p6g(_p63(77010), _p62), _p6g(_p63(39126), _p62), _p6g(_p63(72176), _p62), _p6g(_p63(33846), _p62), _p6g(_p63(97157), _p62), _p6g(_p63(63406), _p62), _p6g(_p63(66373), _p62), _p6g(_p63(19707), _p62), _p6g(_p63(63978), _p62), _p6g(_p63(92382), _p62), _p6g(_p63(78415), _p62), _p6g(_p63(23090), _p62), _p6g(_p63(18776), _p62), _p6g(_p63(39656), _p62), _p6g(_p63(66039), _p62), _p6g(_p63(64679), _p62), _p6g(_p63(95953), _p62), _p6g(_p63(86384), _p62), _p6g(_p63(65345), _p62), _p6g(_p63(46514), _p62), _p6g(_p63(81976), _p62), _p6g(_p63(89331), _p62), _p6g(_p63(73973), _p62), _p6g(_p63(21178), _p62), _p6g(_p63(5079), _p62), _p6g(_p63(95014), _p62), _p6g(_p63(53099), _p62), _p6g(_p63(76201), _p62), _p6g(_p63(24931), _p62), _p6g(_p63(60978), _p62), _p6g(_p63(74312), _p62), _p6g(_p63(54350), _p62), _p6g(_p63(26262), _p62), _p6g(_p63(45530), _p62), _p6g(_p63(44053), _p62), _p6g(_p63(65441), _p62), _p6g(_p63(33258), _p62), _p6g(_p63(92168), _p62), _p6g(_p63(85975), _p62), _p6g(_p63(98467), _p62), _p6g(_p63(88348), _p62), _p6g(_p63(21097), _p62), _p6g(_p63(37273), _p62), _p6g(_p63(72694), _p62), _p6g(_p63(62067), _p62), _p6g(_p63(87817), _p62), _p6g(_p63(93526), _p62), _p6g(_p63(33084), _p62), _p6g(_p63(97831), _p62), _p6g(_p63(45482), _p62), _p6g(_p63(272), _p62), _p6g(_p63(69377), _p62), _p6g(_p63(31127), _p62), _p6g(_p63(79353), _p62), _p6g(_p63(17274), _p62), _p6g(_p63(91302), _p62), _p6g(_p63(82229), _p62), _p6g(_p63(10325), _p62), _p6g(_p63(351), _p62), _p6g(_p63(4050), _p62), _p6g(_p63(29805), _p62), _p6g(_p63(58913), _p62), _p6g(_p63(55421), _p62), _p6g(_p63(87845), _p62), _p6g(_p63(17562), _p62), _p6g(_p63(78466), _p62), _p6g(_p63(40061), _p62), _p6g(_p63(9195), _p62), _p6g(_p63(93297), _p62), _p6g(_p63(15133), _p62), _p6g(_p63(55747), _p62), _p6g(_p63(33155), _p62), _p6g(_p63(79086), _p62), _p6g(_p63(2306), _p62), _p6g(_p63(14386), _p62), _p6g(_p63(80225), _p62), _p6g(_p63(17732), _p62), _p6g(_p63(47169), _p62), _p6g(_p63(77670), _p62), _p6g(_p63(79988), _p62), _p6g(_p63(92253), _p62), _p6g(_p63(74428), _p62), _p6g(_p63(16498), _p62), _p6g(_p63(2631), _p62), _p6g(_p63(27177), _p62), _p6g(_p63(94781), _p62), _p6g(_p63(53908), _p62), _p6g(_p63(79813), _p62), _p6g(_p63(16088), _p62), _p6g(_p63(93733), _p62), _p6g(_p63(69939), _p62), _p6g(_p63(33734), _p62), _p6g(_p63(34432), _p62), _p6g(_p63(97423), _p62), _p6g(_p63(23551), _p62), _p6g(_p63(99791), _p62), _p6g(_p63(21403), _p62), _p6g(_p63(6173), _p62), _p6g(_p63(23934), _p62), _p6g(_p63(53709), _p62), _p6g(_p63(88838), _p62), _p6g(_p63(99790), _p62), _p6g(_p63(18387), _p62), _p6g(_p63(70941), _p62), _p6g(_p63(35025), _p62), _p6g(_p63(2603), _p62), _p6g(_p63(78707), _p62), _p6g(_p63(89058), _p62), _p6g(_p63(84372), _p62), _p6g(_p63(96804), _p62), _p6g(_p63(33896), _p62), _p6g(_p63(11031), _p62), _p6g(_p63(71383), _p62), _p6g(_p63(55888), _p62), _p6g(_p63(2258), _p62), _p6g(_p63(38003), _p62), _p6g(_p63(92174), _p62), _p6g(_p63(43768), _p62), _p6g(_p63(73254), _p62), _p6g(_p63(55734), _p62), _p6g(_p63(81254), _p62), _p6g(_p63(65455), _p62), _p6g(_p63(70362), _p62), _p6g(_p63(61977), _p62), _p6g(_p63(43607), _p62), _p6g(_p63(68086), _p62), _p6g(_p63(78173), _p62), _p6g(_p63(22581), _p62), _p6g(_p63(20418), _p62), _p6g(_p63(93373), _p62), _p6g(_p63(13053), _p62), _p6g(_p63(47874), _p62), _p6g(_p63(42788), _p62), _p6g(_p63(57664), _p62), _p6g(_p63(44990), _p62), _p6g(_p63(17712), _p62), _p6g(_p63(83957), _p62), _p6g(_p63(78539), _p62), _p6g(_p63(96282), _p62), _p6g(_p63(49679), _p62), _p6g(_p63(45927), _p62), _p6g(_p63(90312), _p62), _p6g(_p63(86856), _p62), _p6g(_p63(78123), _p62), _p6g(_p63(25765), _p62), _p6g(_p63(29493), _p62), _p6g(_p63(28221), _p62), _p6g(_p63(14830), _p62), _p6g(_p63(54047), _p62), _p6g(_p63(76054), _p62), _p6g(_p63(90725), _p62), _p6g(_p63(93053), _p62), _p6g(_p63(88792), _p62), _p6g(_p63(33242), _p62), _p6g(_p63(59415), _p62), _p6g(_p63(3296), _p62), _p6g(_p63(32666), _p62), _p6g(_p63(36731), _p62), _p6g(_p63(30450), _p62), _p6g(_p63(85127), _p62), _p6g(_p63(87204), _p62), _p6g(_p63(2380), _p62), _p6g(_p63(96580), _p62);
    },
    82692: function(_p6l, _p6m, _p6n) {
        'use strict';
        var _p6o = null;
        var _p6p = this && this.__createBinding || (Object.create ? function(_p6q, _p6r, _p6s, _p6t) {
                var _p6u = null;
                void 0 === _p6t && (_p6t = _p6s);
                var _p6v = Object.getOwnPropertyDescriptor(_p6r, _p6s);
                _p6v && !('get' in _p6v ? !_p6r.__esModule : _p6v.writable || _p6v.configurable) || (_p6v = {
                    'enumerable': true,
                    'get': function() {
                        return _p6r[_p6s];
                    }
                }), Object.defineProperty(_p6q, _p6t, _p6v);
            } : function(_p6w, _p6x, _p6y, _p6z) {
                void 0 === _p6z && (_p6z = _p6y), _p6w[_p6z] = _p6x[_p6y];
            }),
            _p70 = this && this.__setModuleDefault || (Object.create ? function(_p71, _p72) {
                var _p73 = null;
                Object.defineProperty(_p71, 'default', {
                    'enumerable': true,
                    'value': _p72
                });
            } : function(_p74, _p75) {
                var _p76 = null;
                _p74.default = _p75;
            }),
            _p77 = this && this.__importStar || function(_p78) {
                var _p79 = null;
                if (_p78 && _p78.__esModule) return _p78;
                var _p7a = {};
                if (null != _p78) {
                    for (var _p7b in _p78) 'default' !== _p7b && Object.prototype.hasOwnProperty.call(_p78, _p7b) && _p6p(_p7a, _p78, _p7b);
                }
                return _p70(_p7a, _p78), _p7a;
            };
        defineModule(_p6m);
        Object.defineProperty(_p6m, '__esModule', {
            'value': true
        }), _p6m.SlotItemEffectUtil = void 0;
        var _p7c, _p7d = _p6n(73785),
            _p7e = _p77(_p6n(89051)),
            _p7f = _p6n(74496);
        ! function(_p7g) {
            var _p7h = null;
            _p7g.getSlotitemEffect = function(_p7i, _p7j) {
                var _p7k = null;
                if (null == _p7i || null == _p7j) return null;
                for (var _p7l = new _p7d.SlotItemEffectParamModel(_p7i, _p7j), _p7m = [{
                        'isExecute': Boolean(_p7l.get_type3_nums(9)),
                        'execFunc': _p7e.getSlotType9PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_type3_nums(10)),
                        'execFunc': _p7e.getSlotType10PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_type3_nums(11)),
                        'execFunc': _p7e.getSlotType11PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_type3_nums(12)) || Boolean(_p7l.get_type3_nums(13)),
                        'execFunc': _p7e.getRaderPrivateEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_type3_nums(25)),
                        'execFunc': _p7e.getSlotType25PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_type3_nums(29)),
                        'execFunc': _p7e.getSearchLightEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_type3_nums(42)),
                        'execFunc': _p7e.getSearchLightLargeEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(3)) || Boolean(_p7l.get_slotnums(122)),
                        'execFunc': _p7e.getSlot3_122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(5)),
                        'execFunc': _p7e.getSlot5PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(12)),
                        'execFunc': _p7e.getSlot12PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(15)),
                        'execFunc': _p7e.getSlot15PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(18)) || Boolean(_p7l.get_slotnums(52)),
                        'execFunc': _p7e.getSlot18_52_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(19)),
                        'execFunc': _p7e.getSlot19PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(24)) || Boolean(_p7l.get_slotnums(57)) || Boolean(_p7l.get_slotnums(111)),
                        'execFunc': _p7e.getSlotOtherSuiseiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(26)) || Boolean(_p7l.get_slotnums(62)) || Boolean(_p7l.get_slotnums(79)) || Boolean(_p7l.get_slotnums(80)) || Boolean(_p7l.get_slotnums(81)) || Boolean(_p7l.get_slotnums(207)) || Boolean(_p7l.get_slotnums(208)),
                        'execFunc': _p7e.getZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(35)),
                        'execFunc': _p7e.getSlot35PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(39)) || Boolean(_p7l.get_slotnums(40)) || Boolean(_p7l.get_slotnums(49)) || Boolean(_p7l.get_slotnums(131)),
                        'execFunc': _p7e.get25mmMachinegunEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(30)) || Boolean(_p7l.get_slotnums(410)),
                        'execFunc': _p7e.getSlot30_410PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(44)) || Boolean(_p7l.get_slotnums(45)) || Boolean(_p7l.get_slotnums(287)) || Boolean(_p7l.get_slotnums(288)),
                        'execFunc': _p7e.getSlotDomesticAntiSubmarineToushakiPersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(46)) || Boolean(_p7l.get_slotnums(47)) || Boolean(_p7l.get_slotnums(149)) || Boolean(_p7l.get_slotnums(132)) || Boolean(_p7l.get_slotnums(438)),
                        'execFunc': _p7e.getSlotDomesticSonarPersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(47)) || Boolean(_p7l.get_slotnums(438)),
                        'execFunc': _p7e.getSlot47PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(50)),
                        'execFunc': _p7e.getSlot50PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(58)),
                        'execFunc': _p7e.getSlot58PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(59)),
                        'execFunc': _p7e.getSlot59PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(60)) || Boolean(_p7l.get_slotnums(154)) || Boolean(_p7l.get_slotnums(219)),
                        'execFunc': _p7e.getSlot60_154_219PersonalEffec
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(61)),
                        'execFunc': _p7e.getSlot61PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(61)),
                        'execFunc': _p7e.getSlot61PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(63)),
                        'execFunc': _p7e.getSlot63PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(66)) || Boolean(_p7l.get_slotnums(220)),
                        'execFunc': _p7e.get8cmAntiAircraftGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(67)),
                        'execFunc': _p7e.getSlot67PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(69)),
                        'execFunc': _p7e.getSlot69PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(70)),
                        'execFunc': _p7e.getSlot70PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(76)) || Boolean(_p7l.get_slotnums(114)),
                        'execFunc': _p7e.getSlot38cmTwinGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(78)),
                        'execFunc': _p7e.getSlot78PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(79)) || Boolean(_p7l.get_slotnums(81)),
                        'execFunc': _p7e.getSlot79And81PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(82)),
                        'execFunc': _p7e.getSlot82PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(84)),
                        'execFunc': _p7e.getSlot84PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(85)),
                        'execFunc': _p7e.getSlot85PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(87)),
                        'execFunc': _p7e.getSlot87PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(90)),
                        'execFunc': _p7e.getSlot90PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(93)),
                        'execFunc': _p7e.getSlot93PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(94)),
                        'execFunc': _p7e.getSlot94PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(99)),
                        'execFunc': _p7e.getSlot99PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(100)),
                        'execFunc': _p7e.getSlot100PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(104)),
                        'execFunc': _p7e.getSlot104PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(106)) || Boolean(_p7l.get_slotnums(450)),
                        'execFunc': _p7e.getSlot106PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(115)),
                        'execFunc': _p7e.getSlot115PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(118)) || Boolean(_p7l.get_slotnums(521)),
                        'execFunc': _p7e.getSlot118PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(119)),
                        'execFunc': _p7e.getSlot119PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(121)),
                        'execFunc': _p7e.getSlot121PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(122)),
                        'execFunc': _p7e.getSlot122PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(123)),
                        'execFunc': _p7e.getSlot123PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(124)),
                        'execFunc': _p7e.getSlot124PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(128)) || Boolean(_p7l.get_slotnums(281)),
                        'execFunc': _p7e.getSlot51cmSeriesGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(129)),
                        'execFunc': _p7e.getSlot129PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(132)),
                        'execFunc': _p7e.getSlot132PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(136)),
                        'execFunc': _p7e.getSlot136PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(139)),
                        'execFunc': _p7e.getSlot139PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(143)),
                        'execFunc': _p7e.getSlot143PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(144)),
                        'execFunc': _p7e.getSlot144PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(147)) || Boolean(_p7l.get_slotnums(393)) || Boolean(_p7l.get_slotnums(394)),
                        'execFunc': _p7e.getSlot120mm50GroupPersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(149)),
                        'execFunc': _p7e.getSlot149PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(165)) || Boolean(_p7l.get_slotnums(216)),
                        'execFunc': _p7e.getSlot165_216PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(171)),
                        'execFunc': _p7e.getSlot171PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(174)),
                        'execFunc': _p7e.getSlot174PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(179)),
                        'execFunc': _p7e.getSlot179PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(184)),
                        'execFunc': _p7e.getSlot184PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(188)),
                        'execFunc': _p7e.getSlot188PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(189)),
                        'execFunc': _p7e.getSlot189PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(194)),
                        'execFunc': _p7e.getSlot194PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(195)),
                        'execFunc': _p7e.getSlot195PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(204)),
                        'execFunc': _p7e.getSlot204PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(217)),
                        'execFunc': _p7e.getSlot217PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(220)),
                        'execFunc': _p7e.getSlot220PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(227)),
                        'execFunc': _p7e.getSlot227PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(228)),
                        'execFunc': _p7e.getSlot228PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(229)),
                        'execFunc': _p7e.getSlot229PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(234)),
                        'execFunc': _p7e.getSlot234PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(235)),
                        'execFunc': _p7e.getSlot235PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(237)) || Boolean(_p7l.get_slotnums(322)) || Boolean(_p7l.get_slotnums(323)) || Boolean(_p7l.get_slotnums(490)),
                        'execFunc': _p7e.getHighZuiunSeriesEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(237)),
                        'execFunc': _p7e.getSlot237PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(238)) || Boolean(_p7l.get_slotnums(239)),
                        'execFunc': _p7e.getSlot238_239PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(242)),
                        'execFunc': _p7e.getSlot242PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(243)),
                        'execFunc': _p7e.getSlot243PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(244)),
                        'execFunc': _p7e.getSlot244PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(245)) || Boolean(_p7l.get_slotnums(246)) || Boolean(_p7l.get_slotnums(468)),
                        'execFunc': _p7e.getSlot38cmFourBarrelGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(247)),
                        'execFunc': _p7e.getSlot247PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(252)),
                        'execFunc': _p7e.getSlot252PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(266)),
                        'execFunc': _p7e.getSlot266PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(266)),
                        'execFunc': _p7e.getSlot266PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(267)) || Boolean(_p7l.get_slotnums(366)),
                        'execFunc': _p7e.getSlot267PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(267)) || Boolean(_p7l.get_slotnums(366)),
                        'execFunc': _p7e.getSlot267PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(268)),
                        'execFunc': _p7e.getCamouflageSlotPersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(271)),
                        'execFunc': _p7e.getSlot271PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(275)),
                        'execFunc': _p7e.getSlot275PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(277)),
                        'execFunc': _p7e.getSlot277PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(278)),
                        'execFunc': _p7e.getSlot278PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(279)),
                        'execFunc': _p7e.getSlot279PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(282)),
                        'execFunc': _p7e.getSlot282PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(283)),
                        'execFunc': _p7e.getSlot283PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(285)),
                        'execFunc': _p7e.getSlot285PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(286)),
                        'execFunc': _p7e.getSlot286PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(286)),
                        'execFunc': _p7e.getSlot286PersonalEffect2
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(286)),
                        'execFunc': _p7e.getSlot286PersonalEffect3
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(287)),
                        'execFunc': _p7e.getSlot287PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(288)),
                        'execFunc': _p7e.getSlot288PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(289)),
                        'execFunc': _p7e.getSlot289PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(290)),
                        'execFunc': _p7e.getSlot290PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(291)),
                        'execFunc': _p7e.getSlot291PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(292)),
                        'execFunc': _p7e.getSlot292PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(293)),
                        'execFunc': _p7e.getSlot293PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(294)),
                        'execFunc': _p7e.getSlot294PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(295)),
                        'execFunc': _p7e.getSlot295PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(296)),
                        'execFunc': _p7e.getSlot296PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(297)),
                        'execFunc': _p7e.getSlot297PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(298)) || Boolean(_p7l.get_slotnums(299)) || Boolean(_p7l.get_slotnums(300)),
                        'execFunc': _p7e.getSlot16M1PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(301)),
                        'execFunc': _p7e.getSlot301PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(302)),
                        'execFunc': _p7e.getSlot302PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(303)),
                        'execFunc': _p7e.getSlot303PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(304)),
                        'execFunc': _p7e.getSlot304PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(305)) || Boolean(_p7l.get_slotnums(306)),
                        'execFunc': _p7e.getSlot305_And_306_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(307)),
                        'execFunc': _p7e.getSlot307PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(308)),
                        'execFunc': _p7e.getSlot308PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(310)) || Boolean(_p7l.get_slotnums(518)),
                        'execFunc': _p7e.getSlot310PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(313)),
                        'execFunc': _p7e.getSlot313PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(314)),
                        'execFunc': _p7e.getSlot314PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(315)),
                        'execFunc': _p7e.getSlot315PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(316)),
                        'execFunc': _p7e.getSlot316PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(317)),
                        'execFunc': _p7e.getSlot317PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(318)),
                        'execFunc': _p7e.getSlot318PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(319)),
                        'execFunc': _p7e.getSlot319PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(320)),
                        'execFunc': _p7e.getSlot320PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(322)),
                        'execFunc': _p7e.getSlot322PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(323)),
                        'execFunc': _p7e.getSlot323PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(324)) || Boolean(_p7l.get_slotnums(325)),
                        'execFunc': _p7e.getSlot324And325PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(326)),
                        'execFunc': _p7e.getSlot326PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(327)),
                        'execFunc': _p7e.getSlot327PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(328)),
                        'execFunc': _p7e.getSlot328PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(329)),
                        'execFunc': _p7e.getSlot329PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(330)) || Boolean(_p7l.get_slotnums(331)) || Boolean(_p7l.get_slotnums(332)),
                        'execFunc': _p7e.getSlot_16InchMkXRensouhou_PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(335)),
                        'execFunc': _p7e.getSlot335PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(336)),
                        'execFunc': _p7e.getSlot336PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(337)),
                        'execFunc': _p7e.getSlot337PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(338)),
                        'execFunc': _p7e.getSlot338PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(339)),
                        'execFunc': _p7e.getSlot339PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(340)),
                        'execFunc': _p7e.getSlot340PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(341)),
                        'execFunc': _p7e.getSlot341PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(342)),
                        'execFunc': _p7e.getSlot342PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(343)),
                        'execFunc': _p7e.getSlot343PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(344)),
                        'execFunc': _p7e.getSlot344PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(345)),
                        'execFunc': _p7e.getSlot345PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(346)),
                        'execFunc': _p7e.getSlot346PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(347)),
                        'execFunc': _p7e.getSlot347PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(356)) || Boolean(_p7l.get_slotnums(357)),
                        'execFunc': _p7e.getSlot356_357PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(358)),
                        'execFunc': _p7e.getSlot358PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(359)),
                        'execFunc': _p7e.getSlot359PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(360)) || Boolean(_p7l.get_slotnums(361)),
                        'execFunc': _p7e.getSlot360_361PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(362)) || Boolean(_p7l.get_slotnums(363)),
                        'execFunc': _p7e.getSlot362_363PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(364)),
                        'execFunc': _p7e.getSlot364PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(365)),
                        'execFunc': _p7e.getSlot365PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(367)),
                        'execFunc': _p7e.getSlot367PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(368)),
                        'execFunc': _p7e.getSlot368PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(369)),
                        'execFunc': _p7e.getSlot369PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(370)),
                        'execFunc': _p7e.getSlot370PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(371)),
                        'execFunc': _p7e.getSlot371PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(372)),
                        'execFunc': _p7e.getSlot372PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(373)),
                        'execFunc': _p7e.getSlot373PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(374)),
                        'execFunc': _p7e.getSlot374PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(375)),
                        'execFunc': _p7e.getSlot375PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(376)),
                        'execFunc': _p7e.getSlot376PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(377)),
                        'execFunc': _p7e.getSlot377PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(378)),
                        'execFunc': _p7e.getSlot378PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(379)),
                        'execFunc': _p7e.getSlot379PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(380)),
                        'execFunc': _p7e.getSlot380PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(381)),
                        'execFunc': _p7e.getSlot381PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(382)) || Boolean(_p7l.get_slotnums(509)),
                        'execFunc': _p7e.getSlot382PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(383)),
                        'execFunc': _p7e.getSlot383PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(384)),
                        'execFunc': _p7e.getSlot384PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(385)),
                        'execFunc': _p7e.getSlot385PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(386)),
                        'execFunc': _p7e.getSlot386PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(387)),
                        'execFunc': _p7e.getSlot387PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(389)),
                        'execFunc': _p7e.getSlot389PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(390)),
                        'execFunc': _p7e.getSlot390PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(391)),
                        'execFunc': _p7e.getSlot391PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(392)),
                        'execFunc': _p7e.getSlot392PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(397)),
                        'execFunc': _p7e.getSlot397PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(398)),
                        'execFunc': _p7e.getSlot398PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(399)),
                        'execFunc': _p7e.getSlot399PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(400)),
                        'execFunc': _p7e.getSlot400PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(407)),
                        'execFunc': _p7e.getSlot407PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(408)),
                        'execFunc': _p7e.getSlot408PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(409)),
                        'execFunc': _p7e.getSlot409PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(411)),
                        'execFunc': _p7e.getSlot411PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(412)),
                        'execFunc': _p7e.getSlot412PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(413)),
                        'execFunc': _p7e.getSlot413PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(414)),
                        'execFunc': _p7e.getSlot414PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(415)),
                        'execFunc': _p7e.getSlot415PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(419)),
                        'execFunc': _p7e.getSlot419PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(420)),
                        'execFunc': _p7e.getSlot420PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(421)),
                        'execFunc': _p7e.getSlot421PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(422)),
                        'execFunc': _p7e.getSlot422PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(423)),
                        'execFunc': _p7e.getSlot423PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(424)),
                        'execFunc': _p7e.getSlot424PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(425)),
                        'execFunc': _p7e.getSlot425PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(426)) || Boolean(_p7l.get_slotnums(427)) || Boolean(_p7l.get_slotnums(428)) || Boolean(_p7l.get_slotnums(429)),
                        'execFunc': _p7e.getSlot305More320mmGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(430)),
                        'execFunc': _p7e.getSlot430PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(434)) || Boolean(_p7l.get_slotnums(435)),
                        'execFunc': _p7e.getSlotCorsairMkIIPersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(437)),
                        'execFunc': _p7e.getSlot437PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(438)),
                        'execFunc': _p7e.getSlot438PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(439)),
                        'execFunc': _p7e.getSlot439PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(440)) || Boolean(_p7l.get_slotnums(441)),
                        'execFunc': _p7e.getSlot440_441PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(442)) || Boolean(_p7l.get_slotnums(443)),
                        'execFunc': _p7e.getSlot442_443PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(447)),
                        'execFunc': _p7e.getSlot447PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(450)),
                        'execFunc': _p7e.getSlot450PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(451)),
                        'execFunc': _p7e.getSlot451PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(455)),
                        'execFunc': _p7e.getSlot455PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(456)),
                        'execFunc': _p7e.getSlot456PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(457)) || Boolean(_p7l.get_slotnums(461)),
                        'execFunc': _p7e.getSlot457PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(458)),
                        'execFunc': _p7e.getSlot458PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(463)),
                        'execFunc': _p7e.getSlot463PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(464)),
                        'execFunc': _p7e.getSlot464PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(465)),
                        'execFunc': _p7e.getSlot465PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(466)),
                        'execFunc': _p7e.getSlot466PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(467)),
                        'execFunc': _p7e.getSlot467PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(470)) || Boolean(_p7l.get_slotnums(529)),
                        'execFunc': _p7e.getSlot470PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(471)),
                        'execFunc': _p7e.getSlot471PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(472)),
                        'execFunc': _p7e.getSlot472PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(473)),
                        'execFunc': _p7e.getSlot473PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(474)),
                        'execFunc': _p7e.getSlot474PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(478)),
                        'execFunc': _p7e.getSlot478PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(483)),
                        'execFunc': _p7e.getSlot483PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(485)),
                        'execFunc': _p7e.getSlot485PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(486)),
                        'execFunc': _p7e.getSlot486PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(487)),
                        'execFunc': _p7e.getSlot487PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(488)),
                        'execFunc': _p7e.getSlot488PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(489)) || Boolean(_p7l.get_slotnums(491)),
                        'execFunc': _p7e.getSlot489PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(500)) || Boolean(_p7l.get_slotnums(501)),
                        'execFunc': _p7e.getSlotSmokePersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(502)),
                        'execFunc': _p7e.getSlot502PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(503)),
                        'execFunc': _p7e.getSlot503PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(505)),
                        'execFunc': _p7e.getSlot505PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(506)),
                        'execFunc': _p7e.getSlot506PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(507)) || Boolean(_p7l.get_slotnums(508)),
                        'execFunc': _p7e.getSlot14inch45CaliberGunPersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(510)),
                        'execFunc': _p7e.getSlot510PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(511)) || Boolean(_p7l.get_slotnums(512)),
                        'execFunc': _p7e.getSlot511PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(517)),
                        'execFunc': _p7e.getSlot517PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(518)),
                        'execFunc': _p7e.getSlot518PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(519)),
                        'execFunc': _p7e.getSlot519PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(520)),
                        'execFunc': _p7e.getSlot520PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(521)),
                        'execFunc': _p7e.getSlot521PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(522)) || Boolean(_p7l.get_slotnums(523)),
                        'execFunc': _p7e.getSlot522_523PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(524)),
                        'execFunc': _p7e.getSlot524PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(525)) || Boolean(_p7l.get_slotnums(526)),
                        'execFunc': _p7e.getSlotTokuYonPersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(527)),
                        'execFunc': _p7e.getSlot527PersonalEffect
                    }, {
                        'isExecute': Boolean(_p7l.get_slotnums(528)),
                        'execFunc': _p7e.getSlot528PersonalEffect
                    }], _p7n = new _p7f.SlotItemEffectModel(), _p7o = 0, _p7p = _p7m; _p7o < _p7p.length; _p7o++) {
                    var _p7q = _p7p[_p7o];
                    if (_p7q.isExecute) {
                        var _p7r = _p7q.execFunc(_p7l);
                        0, _p7n.add(_p7r);
                    }
                }
                return _p7n;
            };
        }(_p7c || (_p6m.SlotItemEffectUtil = _p7c = {}));
    },
}