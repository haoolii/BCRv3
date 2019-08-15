import TableGroup from '@/components/groups/TableGroup'
import wrapper from '@/components/elements/WrapperContainer'
import dat from 'dat.gui'

export default class TableController {
  private tableGroup: TableGroup
  constructor(w: wrapper) {
    this.tableGroup = new TableGroup()
    w.addContainer(this.tableGroup.getContainer())
    this.tableGroup.setPosition(false, 1625 / 2 - 737, 0)
    this.tableGroup.setPosition(true, 1625 / 2 - 737, 200)

    
    let setting = {
      message : 'dat.gui',
      userPlayerpairPayout : () => {
        this.userPayout('playerpair')
      },
      userPlayerkingPayout : () => {
        this.userPayout('playerking')
      },
      userTiepairPayout : () => {
        this.userPayout('tiepair')
      },
      userTiePayout : () => {
        this.userPayout('tie')
      },
      userBankerkingPayout : () => {
        this.userPayout('bankerking')
      },
      userBankerPayout : () => {
        this.userPayout('banker')
      },
      userBankerpairPayout : () => {
        this.userPayout('bankerpair')
      },
      userPlayerPayout : () => {
        this.userPayout('player')
      },
      // 
      strangerPlayerpairPayout : () => {
        this.strangerPayout('playerpair')
      },
      strangerPlayerkingPayout : () => {
        this.strangerPayout('playerking')
      },
      strangerTiepairPayout : () => {
        this.strangerPayout('tiepair')
      },
      strangerTiePayout : () => {
        this.strangerPayout('tie')
      },
      strangerBankerkingPayout : () => {
        this.strangerPayout('bankerking')
      },
      strangerBankerPayout : () => {
        this.strangerPayout('banker')
      },
      strangerBankerpairPayout : () => {
        this.strangerPayout('bankerpair')
      },
      strangerPlayerPayout : () => {
        this.strangerPayout('player')
      },
      resetUserChips: () => {
        this.resetUserChips()
      }
    }

    const gui = new dat.GUI()
    gui.add(setting, 'message')
    gui.add(setting, 'userPlayerpairPayout')
    gui.add(setting, 'userPlayerkingPayout')
    gui.add(setting, 'userTiepairPayout')
    gui.add(setting, 'userTiePayout')
    gui.add(setting, 'userBankerkingPayout')
    gui.add(setting, 'userBankerPayout')
    gui.add(setting, 'userBankerpairPayout')
    gui.add(setting, 'userPlayerPayout')
    // 
    gui.add(setting, 'strangerPlayerpairPayout')
    gui.add(setting, 'strangerPlayerkingPayout')
    gui.add(setting, 'strangerTiepairPayout')
    gui.add(setting, 'strangerTiePayout')
    gui.add(setting, 'strangerBankerkingPayout')
    gui.add(setting, 'strangerBankerPayout')
    gui.add(setting, 'strangerBankerpairPayout')
    gui.add(setting, 'strangerPlayerPayout')
    // 
    gui.add(setting, 'resetUserChips')
  }

  // 玩家下注
  public userPayout(type: string) {
    switch (type) {
      case 'playerpair': 
        this.tableGroup.userPayout('playerpair')
        break
      case 'playerking':
        this.tableGroup.userPayout('playerking')
        break
      case 'tiepair':
        this.tableGroup.userPayout('tiepair')
        break
      case 'tie':
        this.tableGroup.userPayout('tie')
        break
      case 'bankerking':
        this.tableGroup.userPayout('bankerking')
        break
      case 'banker':
        this.tableGroup.userPayout('banker')
        break
      case 'bankerpair':
        this.tableGroup.userPayout('bankerpair')
        break
      case 'player':
        this.tableGroup.userPayout('player')
        break
    }
  }
  // strangerPayout

  // 其他人下注
  public strangerPayout(type: string) {
    switch (type) {
      case 'playerpair': 
        this.tableGroup.strangerPayout('playerpair')
        break
      case 'playerking':
        this.tableGroup.strangerPayout('playerking')
        break
      case 'tiepair':
        this.tableGroup.strangerPayout('tiepair')
        break
      case 'tie':
        this.tableGroup.strangerPayout('tie')
        break
      case 'bankerking':
        this.tableGroup.strangerPayout('bankerking')
        break
      case 'banker':
        this.tableGroup.strangerPayout('banker')
        break
      case 'bankerpair':
        this.tableGroup.strangerPayout('bankerpair')
        break
      case 'player':
        this.tableGroup.strangerPayout('player')
        break
    }
  }

  // 停止下注
  public stopPayout() {

  }

  // 開始下注
  public startPayout() {

  }

  // 退回所有Chips
  public reseTableChips() {

  }

  // 退回所有user Chips
  public resetUserChips() {
    this.tableGroup.resetUserChips()
  }

  // 退回所以其他人的 Chips
  public resetStrangerChips() {
  }
}