import 'overts/lib/owcode/helper';

// 定义全局变量
let num = 2;

// 定义玩家变量
namespace PlayerVariable {
  let damage_id;
}

// 编写规则
export class ChuanHuo {
  /**
   * 加分
   * 所有玩家死亡后，给剩下的那个玩家+1分
   */
  @runAt(Events.PLAYER_DIED)
  @condition(
    getNumberOfLivingPlayers(Team.ALL) === 1,
    Game.IS_GAME_IN_PROGRESS
  )
  jiafen() {
    addToScore(getLivingPlayers(Team.ALL), 1);
    resurrect(getPlayers(Team.ALL));
  }
}
