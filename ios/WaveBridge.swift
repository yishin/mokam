//
//  WaveBridge.swift
//  RNMokam
//
//  Created by Jongwoo Moon on 2017. 12. 17..
//  Copyright © 2017년 Facebook. All rights reserved.
//

import Foundation
import UIKit



@objc(WaveBridge)
class WaveBridge: NSObject {
    var rctCB: RCTResponseSenderBlock? = nil
    var connCB: (() -> ())? = nil
    @objc(addEvent:location:date:)
    func addEvent(name: String, location: String, date: NSNumber) -> Void {
        print("  add event in swift ::  \(name),  \(location),  \(date) ")
    }
    
}
