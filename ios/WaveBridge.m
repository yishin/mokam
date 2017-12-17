#import <React/RCTBridgeModule.h>
#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <React/RCTLog.h>

@interface RCT_EXTERN_MODULE(WaveBridge, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)

// RCT_EXTERN_METHOD(getBack:(NSString *)name callback:(RCTResponseSenderBlock)callback)

@end

