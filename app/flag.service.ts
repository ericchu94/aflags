import { Injectable }        from '@angular/core';
import { Headers, Response } from '@angular/http';
import * as io               from 'socket.io-client';

import { Flag } from './flag';

@Injectable()
export class FlagService {
  private flagsUrl = 'http://home.ericchu.net:3000/';
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect(this.flagsUrl);
  }

  on(event: string, fn: Function): SocketIOClient.Emitter {
    return this.socket.on(event, fn);
  }

  getFlags(user: string): void {
    this.socket.emit('getFlags', {
      userName: user,
    });
  }

  getFlag(user: string, name: string): void {
    this.socket.emit('getFlag', {
      userName: user,
      flagName: name,
    });
  }

  setFlag(user: string, name: string, enabled: boolean): void {
    this.socket.emit('setFlag', {
      userName: user,
      flagName: name,
      enabled: enabled,
    });
  }

  createFlag(user: string, name: string): void {
    this.socket.emit('createFlag', {
      userName: user,
      flagName: name,
    });
  }

  deleteFlag(user: string, name: string): void {
    this.socket.emit('deleteFlag', {
      userName: user,
      flagName: name,
    });
  }
}

